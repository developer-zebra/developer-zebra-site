---
title: Set Config 
layout: guide.html
product: DataWedge
productversion: '6.9'
---

## SET_CONFIG
Used to create, update or replace a DataWedge Profile and its settings, and can configure multiple Plug-ins with a single intent action. 

This API implements [nested bundles](../overview/#nestedbundles), which contain multiple configuration parameters in a single data field. 

<img style="height:350px" src="nested_bundles_labelled.png"/>
<br>

To create a Profile without configuring its settings parameters, use [CREATE_PROFILE](../createprofile).

### Version History
* **DataWedge 6.4 -** API introduced
* **DataWedge 6.6 -** Added support for configuring multiple Plug-ins with a single Action
* **DataWedge 6.7 -** Enhanced inter-character delay feature [(More info)](../../output/keystroke/#keystrokeoutputsetup)
* **DataWedge 6.8 -** Support for ADF settings: 
 * **New ADF_RULE bundle** with Action, Device, Decoder and Label_ID sub-bundles
 * **New result code**: RESULT_ACTION_RESULT_CODE_EMPTY_RULE_NAME

### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SET_CONFIG", <mainbundle>);

### Parameters

**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.SET_CONFIG"

**BUNDLE**: &lt;mainbundle&gt; (see parameters below)

#### MAIN BUNDLE
The main `SET_CONFIG` bundle includes the following properties:

* **PROFILE_NAME** [String]: The name of the Profile on which to perform action(s)
* **CONFIG_MODE** [String]: (Default=OVERWRITE)
 * **CREATE_IF_NOT_EXIST**: Creates the Profile if string in PROFILE_NAME is not present on device 
 * **OVERWRITE**: If Profile exists, resets all options to default, then configures specified settings
 * **UPDATE**: Updates only specified settings
* **PROFILE_ENABLED** [String]: Optional; Controls whether to enable (true) or disable (false) a Profile (default=true). If not specified, no change is made to the Profile state.
* **PLUGIN_CONFIG** [Bundle[ ]]: A bundle array (nested within the main bundle) that contains settings of each Plug-in
* **APP_LIST** [Array]: List of applications and/or activities to associate with the Profile

#### PLUGIN_CONFIG BUNDLE
The `PLUGIN_CONFIG` bundle is configured using the following properties:

* **RESET_CONFIG** [String]: Optional. When used, takes the following values: 
 * **True (Default) –** Clear any existing configuration and create a new configuration with the specified parameter values  
 * **False –** Update the existing values and add values not already in the configuration

**PLUGIN_NAME** [String]: Name of the Plug-in to configure:
 * **BARCODE** input
 * **SERIAL** input
 * **INTENT** output
 * **KEYSTROKE** output
 * **BDF** (basic data formatting) processing
 * **ADF** (advanced data formatting) processing

**Notes**: 
* Plug-in names are case sensitive.
* For DataWedge 6.5 and below, each intent involving a Plug-in requires a separate intent Action.
* See tables below for `PARAM_LIST` values. 

**PARAM_LIST** [Bundle]: A parameter list bundle nested within the `PLUGIN_CONFIG` bundle. Includes the list of parameters to be updated under the specified Plug-in. **Setting an empty string in any parameter value resets that parameter to its default setting**. 

<img alt="" style="height:448px" src="nested_example_pt1.png"/>
<img alt="" style="height:482px" src="nested_example_pt2.png"/>
_A visual representation of nested SET_CONFIG bundles. [See example code](#examplecode)._ 
<br>

#### PARAM_LIST BUNDLE
The `PARAM_LIST` bundle is configured by specifying the parameter name and value from the table below. Applies to parameters matching the `PLUGIN_NAME` specified in `PLUGIN_CONFIG` bundle. 

* **BARCODE –** takes a value from the [Scanner Input Parameters](#scannerinputparameters) table below; specify decoder and other input settings as `EXTRA_DATA` in the `PARAM_LIST` nested bundle.
 * `scanner_selection_by_identifier` [string]- takes a value from the list of [Scanner Identifiers](#scanneridentifiers) below.

* **SERIAL -** takes values as indicated below: 
<br>
 * `serial_port_id` [string] - 0&ndash;n (must be a valid port index)
 * `serial_input_enabled` [string] - true/false
 * `serial_baudrate` [string] - 300, 1200, 2400, 4800, 9600, 19200, 38400, 57600, 115200, 230400, 460800 or 921600
 * `serial_databits` [string] - 7 or 8
 * `serial_parity` [string] - NONE, ODD, EVEN, MARK or SPACE
 * `serial_stopbits` [string] - 1 or 2
 * `serial_flow` [string] - FLOW_NONE, FLOW_RTS_CTS or FLOW_XON_XOFF


* **INTENT -** takes values as indicated below: 
<br>
 * `intent_output_enabled` [string]- true/false
 * `intent_action` [string] - exact name of the action
 * `intent_category` [string] - exact name of the category
 * `intent_delivery` [string]:
 	* 0 - Start Activity
 	* 1 - Start Service
 	* 2 - Broadcast

<!-- `intent_flag_receiver_foreground` [string] &lt;true/false&gt; -->

* **KEYSTROKE -** takes a value from the [Keystroke Output Parameters](#keystrokeoutputparameters) table below; specify output settings as `EXTRA_DATA` in the `PARAM_LIST` nested bundle.

* **BDF -** Applies [Basic Data Formatting](../../process/bdf) rules to the acquired data. Takes values: 
 * `bdf_enabled` [string]- true/false

 * `bdf_prefix` [string]- prepend acquired data

 * `bdf_suffix` [string]- append acquired data

 * `bdf_send_data` [string]- true/false

 * `bdf_send_hex` [string]- true/false

 * `bdf_send_tab` [string]- true/false

 * `bdf_send_enter` [string]- true/false

* **ADF -** Applies [Advanced Data Formatting](../../process/adf) rules to the acquired data. This bundle contains Action, Device, Decoder and Label_ID sub-bundles, and takes values:
 * `adf_enabled` [string] – true/false (default=false)

 * `ADF_RULE` [bundle] - Takes values:
	* `name` [string] – Name of the ADF rule to use
	* `enabled` [string] – Rule enabled; true/false (default=true)
	* `alldevices` [string] – Accept data from all supported input sources; true/false (default=true)	
	* `string` [string] – String to check for (default=empty string)
	* `string_pos` [string] – String position (default=0)
	* `string_len` [string] - String length (default=0)
	* `ACTIONS` [bundle] - Accepts multiple instances. Takes value(s): 
		* `type` [string] - Name of Action from [ADF Actions table](#adfactions)
		* `action_param_1`, `action_param_2`... (as determined by ADF Action; see table)

 * `DEVICES` [bundle] - Accepts multiple instances. Takes values:
		* `device_id` [string] - Name of the input source: BARCODE, MSR, SIMULSCAN or SERIAL
		* `enabled` [string] - Accept data from specified device ID: true/false (default=true)
		* `alldecoders` [string] - Allow all barcode symbologies: true/false (default=true)
		* `all_label_ids` [string] - Allow all UDI label IDs: true/false (default=true)

 * `DECODERS` [bundle] - Accepts multiple instances. Takes values:
		* `device_id` [string] - BARCODE, MSR, SERIAL or SIMULSCAN
		* `decoder` [string] - (i.e. "Australian Postal")
		* `enabled` [string] - true/false (default=true)

 * `LABEL_IDS` [bundle] - Accepts multiple instances. Takes values:
		* `device_id` [string] - BARCODE, MSR, SERIAL or SIMULSCAN
		* `label_id` [string] - UDI_GS1, UDI_HIBCC or UDI_ICCBBA
		* `enabled` [string] - true/false (default=true)

**IMPORTANT**: 

* **If a Profile is created without at least one Rule**, DataWedge creates a "Rule0" with a single action to "SEND_REMAINING" data without modification. 
* **If values in one or more newly created Rules are missing or invalid**, DataWedge uses default values. 
* **To update one or more Actions in an existing Profile** using an intent, all Actions in the Profile must be included in the intent. 

### ADF ACTIONS

<table rules="all"
width="100%"
frame="border"
cellspacing="0" cellpadding="4">
<caption class="title"></caption>
<col width="22%" />
<col width="22%" />
<col width="55%" />
<thead>
<tr>
<th align="left" valign="top">Category</th>
<th align="left" valign="top">Action Type<br>Parameter(s) (if any)</th>
<th align="left" valign="top">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="5" align="left" valign="top"><p class="table"><strong>Cursor Movement</strong></p></td>
<td align="left" valign="top"><p class="table">SKIP_AHEAD<br>action _param_1</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor forward by the specified number of characters (default=1)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">SKIP_BACK<br>action _param_1</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor back by the specified number of characters (default=1)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">SKIP_TO_START</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor to the beginning of the data</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">MOVE_AHEAD_TO<br>action_param_1</p></td>
<td align="left" valign="top"><p class="table">Known as "Move to" in the DataWedge UI, advances the cursor until the specified string is found</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">MOVE_PAST_A<br>action_param_1</p></td>
<td align="left" valign="top"><div><div class="paragraph"><p>Moves the cursor forward past the specified string</p></div></div></td>
</tr>
<tr>
<td rowspan="14" align="left" valign="top"><p class="table"><strong>Data Modification</strong></p></td>
<td align="left" valign="top"><p class="table">CRUNCH_SPACES</p></td>
<td align="left" valign="top"><p class="table">Reduces spaces between words to one, and removes all spaces at the beginning and end of the data</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">STOP_CRUNCH_SPACE</p></td>
<td align="left" valign="top"><p class="table">Disables the last <strong>Crunch spaces</strong> action</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">REMOVE_SPACES</p></td>
<td align="left" valign="top"><p class="table">Known as "Remove all spaces" in the DataWedge UI, removes all spaces in the data</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">STOP_REMOVE_SPACES</p></td>
<td align="left" valign="top"><p class="table">Disables the last <strong>REMOVE_SPACES</strong> action</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">TRIM_LEFT_ZEROS</p></td>
<td align="left" valign="top"><p class="table">Known as "Remove leading zeros" in the DataWedge UI, removes all zeros at the beginning of the data</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">STOP_TRIM_LEFT_ZEROS</p></td>
<td align="left" valign="top"><p class="table">Disables the previous <strong>TRIM_LEFT_ZEROS</strong> action</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">PAD_LEFT_ZEROS<br>action_param_1</p></td>
<td align="left" valign="top"><p class="table">Known as "Pad with zeros" in the DataWedge UI, left-pads the data with the specified number of zeros (default=0)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">STOP_PAD_LEFT_ZEROS</p></td>
<td align="left" valign="top"><p class="table">Disables the previous <strong>PAD_LEFT_ZEROS</strong> action</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">PAD_LEFT_SPACES<br>action_param_1</p></td>
<td align="left" valign="top"><p class="table">Known as "Pad with spaces" in the DataWedge UI, left-pads the data with the specified number of spaces (default=0)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">STOP_PAD_LEFT_SPACES</p></td>
<td align="left" valign="top"><p class="table">Disables the previous <strong>PAD_LEFT_SPACES</strong> action</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">REPLACE_STRING<br>action_param_1<br>  action_param_2</p></td>
<td align="left" valign="top"><p class="table">Replaces a specified string (action_param_1) with a new specified string (action_param_2). Both must be specified (default=empty)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">STOP_REPLACE_ALL</p></td>
<td align="left" valign="top"><p class="table">Known as "Stop all replace string" in the DataWedge UI, stops all <strong>REPLACE_STRING</strong> actions</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">REMOVE_CHARACTERS<br>action_param_1<br>action_param_2<br>action_param_3</p></td>
<td align="left" valign="top"><p class="table">Removes the number of characters specified in given positions when send actions are executed<br>action_param_1: (0=front (default); 1=in between; 2=end; 3=center)<br>action_param_2: start position (default=0)<br>action_param_3: number of characters (default=0)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">STOP_REMOVE_CHARS</p></td>
<td align="left" valign="top"><p class="table">Stops removing characters from subsequent send actions</p></td>
</tr>
<tr>
<td rowspan="6" align="left" valign="top"><p class="table"><strong>Data Sending</strong></p></td>
<td align="left" valign="top"><p class="table">SEND_NEXT<br>action_param_1</p></td>
<td align="left" valign="top"><p class="table">Sends the specified number of characters from the current cursor position (default=0)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">SEND_REMAINING</p></td>
<td align="left" valign="top"><p class="table">Sends all data that remains from the current cursor position</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">SEND_UP_TO<br>action_param_1</p></td>
<td align="left" valign="top"><p class="table">Sends all data up to the specified string</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">DELAY</p></td>
<td align="left" valign="top"><p class="table">Known as "Send pause" in the DataWedge UI, pauses the specified number of milliseconds (default = 0; max. = 120000) before executing the next action. <strong>Zebra recommends pausing 50 ms after sending any ENTER, LINE FEED or TAB character</strong>.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">SEND_STRING<br>action_param_1</p></td>
<td align="left" valign="top"><p class="table">Sends the specified string</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">SEND_CHAR<br>action_param_1</p></td>
<td align="left" valign="top"><p class="table">Sends the specified ASCII/ Unicode character. The maximum Unicode character value is U-10FFFF (1114111 in decimal)</p></td>
</tr>
</tbody>
</table>
</div>
**Notes**:
* **Default action_param values are 0, empty or none** unless otherwise noted.
* **To help minimize data loss**, Zebra recommends sending a DELAY of 50 ms after sending any ENTER, LINE FEED or TAB character.

-----

#### APP_LIST
An array of bundles that contains a set of `PACKAGE_NAMES` and an `ACTIVITY_LIST` to be associated with the Profile. 

##### APP_LIST BUNDLE
Contains the following properties:

**PACKAGE_NAME** [String]: ex: "com.symbol.emdk.barcodesample1" or a wildcard (&#42;) character 

**ACTIVITY_LIST** [List]: A list of activities for the `PACKAGE_NAME`. Wildcard (&#42;) character also supported.

-----

### Scanner Identifiers
The scanner identifier (introduced in DataWedge 6.5) permits scanners to be identified by a friendly name rather than an index number. 

**SCANNER_IDENTIFIER** [String]: Present in each scanner info bundle for each scanner supported in the device. Index and identifier parameters are both supported in DataWedge and higher; the scanner identifier value takes precedence if an index also is referenced in the code.  

**Possible values**:

* **AUTO** - Automatic scanner selection
* **INTERNAL_IMAGER** - Built-in imager scanner
* **INTERNAL_LASER** - Built-in laser scanner
* **INTERNAL_CAMERA** - Built-in camera scanner
* **SERIAL_SSI** - Pluggable Z-back scanner for ET50/ET55 
* **BLUETOOTH_SSI** - RS507 Bluetooth scanner
* **BLUETOOTH_RS6000** - RS6000 Bluetooth scanner
* **BLUETOOTH_DS2278** - DS2278 Bluetooth scanner
* **BLUETOOTH_DS3678** - DS3678 Bluetooth scanner
* **PLUGABLE_SSI** - Serial SSI scanner RS429 (for use with WT6000)
* **PLUGABLE_SSI_RS5000** - Serial SSI scanner RS5000 (for use with WT6000)
* **USB_SSI_DS3608** - DS3608 pluggable USB scanner

-----

### Result Codes

DataWedge returns the following error codes if the app includes the intent extras `RECEIVE_RESULT` and `COMMAND_IDENTIFIER` to enable the app to get results using the DataWedge result intent mechanism. See [Example](#example), below. 

* **PLUGIN_NOT_SUPPORTED -** An attempt was made to configure a plug-in that is not supported by DataWedge intent APIs
* **BUNDLE_EMPTY -** The bundle contains no data 
* **PROFILE_NAME_EMPTY -** An attempt was made to configure a Profile name with no data
* **PROFILE_NOT_FOUND -** An attempt was made to perform an operation on a Profile that does not exist
* **PLUGIN_BUNDLE_INVALID -** A passed plug-in parameter bundle is empty or contains insufficient information
* **PARAMETER_INVALID -** The passed parameters were empty, null or invalid 
* **APP_ALREADY_ASSOCIATED -** An attempt was made to associate an app that was already associated with another Profile
* **OPERATION_NOT_ALLOWED -** An attempt was made to rename or delete a protected Profile or to associate an app with Profile0
* **RESULT_ACTION_RESULT_CODE_EMPTY_RULE_NAME -** Rule name empty or undefined in `ADF_RULE` bundle

Also see the [Result Codes guide](../resultinfo) for more information.  

### Return Values

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters

-----

## Example Code

### Nested bundles

	// MAIN BUNDLE PROPERTIES
		Bundle bMain = new Bundle();
		bMain.putString("PROFILE_NAME","Profile12"); 			// <- "Profile12" is a bundle
		bMain.putString("PROFILE_ENABLED","true"); 				// <- that will be enabled
		bMain.putString("CONFIG_MODE","CREATE_IF_NOT_EXIST"); 	// <- or created if necessary.

	// PLUGIN_CONFIG BUNDLE PROPERTIES
		Bundle bConfig = new Bundle();
		bConfig.putString("PLUGIN_NAME","BARCODE");
		bConfig.putString("RESET_CONFIG","true"); 


	// PARAM_LIST BUNDLE PROPERTIES
		Bundle bParams = new Bundle();
		bParams.putString("scanner_selection","auto");
		bParams.putString("scanner_input_enabled","true");
	// 
	// NOTE: The "scanner_selection" parameter (above) supports "auto" selection
	// --OR-- the assignment of a scanner device index, which is obtained by 
	// using the ENUMERATE_SCANNERS API.  
	//
	// 		Syntax for scanner index:
	//
	// 				Bundle bParams = new Bundle();
	// 		diff-->	bParams.putString("current-device-id","0");
	// 				bParams.putString("scanner_input_enabled","true");
	//
	// 
	// NEST THE BUNDLE "bParams" WITHIN THE BUNDLE "bConfig"
		bConfig.putBundle("PARAM_LIST", bParams);

	// THEN NEST THE "bConfig" BUNDLE WITHIN THE MAIN BUNDLE "bMain"
		bMain.putBundle("PLUGIN_CONFIG", bConfig);

	// CREATE APP_LIST BUNDLES (apps and/or activities to be associated with the Profile)
		Bundle bundleApp1 = new Bundle();
		bundleApp1.putString("PACKAGE_NAME","com.symbol.emdk.simulscansample1");
		bundleApp1.putStringArray("ACTIVITY_LIST", new String[]{
		        "com.symbol.emdk.simulscansample1.DeviceControl",
		        "com.symbol.emdk.simulscansample1.MainActivity",
		        "com.symbol.emdk.simulscansample1.ResultsActivity.*",
		        "com.symbol.emdk.simulscansample1.ResultsActivity2",
		        "com.symbol.emdk.simulscansample1.SettingsFragment1"});

		Bundle bundleApp2 = new Bundle();
		bundleApp2.putString("PACKAGE_NAME","com.example.intents.datawedgeintent");
		bundleApp2.putStringArray("ACTIVITY_LIST", new String[]{
		        "com.example.intents.datawedgeintent.DeviceControl",
		        "com.example.intents.datawedgeintent.MainActivity",
		        "com.example.intents.datawedgeintent.ResultsActivity",
		        "com.example.intents.datawedgeintent.SettingsFragment1"});

		Bundle bundleApp3 = new Bundle();
		bundleApp3.putString("PACKAGE_NAME","*");
		bundleApp3.putStringArray("ACTIVITY_LIST", new String[]{"*"});

		Bundle bundleApp4 = new Bundle();
		bundleApp4.putString("PACKAGE_NAME","com.symbol.myzebraapp");
		bundleApp4.putStringArray("ACTIVITY_LIST", new String[]{"*"});

	// NEXT APP_LIST BUNDLE(S) INTO THE MAIN BUNDLE
		bMain.putParcelableArray("APP_LIST", new Bundle[]{
		        bundleApp1
		        ,bundleApp2
		        ,bundleApp3
		        ,bundleApp4
		});

		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.SET_CONFIG", bMain);

		this.sendBroadcast(i);

### Set Serial Input Configuration

	//
	// Port 1 Configuration [Start]
	//
	Bundle bPort1 = new Bundle();
	bPort1.putString("serial_port_id", "0"); //Supported Values: 0,1
	bPort1.putString("serial_input_enabled", "true"); // Supported Values: true, false
	bPort1.putString("serial_baudrate", "1200"); // Supported Values (some): 300, 1200, 2400, 4800, 19200, and more
	bPort1.putString("serial_databits", "8"); //Supported Values: 8, 7
	bPort1.putString("serial_parity", "ODD"); //Supported Values: NONE, ODD, EVEN, MARK, SPACE
	bPort1.putString("serial_stopbits", "1"); //Supported Values: 1, 2
	bPort1.putString("serial_flow", "FLOW_RTS_CTS"); //Supported Values: FLOW_NONE, FLOW_RTS_CTS, FLOW_DSR_DTR, FLOW_XON_XOFF
	//
	// Port 1 Configuration [End]
	//
	// Port 2 Configuration [Start]
	//
	Bundle bPort2 = new Bundle();
	bPort2.putString("serial_port_id", "1");
	bPort2.putString("serial_input_enabled", "true");
	bPort2.putString("serial_baudrate", "300");
	bPort2.putString("serial_databits", "7");
	//bPort2.putString("abc", "123");
	bPort2.putString("serial_stopbits", "2");
	bPort2.putString("serial_flow", "FLOW_DSR_DTR");
	bPort2.putString("serial_parity", "EVEN");
	//
	// Port 2 Configuration [End]
	//
	Bundle bConfig = new Bundle();
	bConfig.putString("RESET_CONFIG", "false");
	bConfig.putString("PLUGIN_NAME", "SERIAL");
	bConfig.putParcelableArray("DEVICE_LIST", new Bundle[]{
	        bPort1, bPort2
	});

	Bundle bMain = new Bundle();
	bMain.putString("PROFILE_NAME", "Profile0 (default)");
	bMain.putString("CONFIG_MODE", "UPDATE");
	bMain.putBundle("PLUGIN_CONFIG", bConfig);

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SET_CONFIG", bMain);
	i.putExtra("SEND_RESULT", "true");
	i.putExtra("com.symbol.datawedge.api.RESULT_CATEGORY", DEFAULT_CATEGORY);
	i.putExtra("COMMAND_IDENTIFIER", "DW_SERIAL_COMMAND");

	this.sendBroadcast(i);

### Set KEYSTROKE Output 

	@Override
	protected void onCreate(Bundle savedInstanceState) {
	    super.onCreate(savedInstanceState);
	    setContentView(R.layout.activity_main);
	    registerReceivers();
	}

	@Override
	protected void onResume() {
	    super.onResume();
	    setKeystrokeOutputPluginConfiguration();
	}

	private void registerReceivers() {
	    IntentFilter filter = new IntentFilter();
	    filter.addAction("com.symbol.datawedge.api.RESULT_ACTION");
	    filter.addCategory("android.intent.category.DEFAULT");
	    registerReceiver(datawedgeKeystrokeNIntentStatusBR, filter);
	}

	private BroadcastReceiver datawedgeKeystrokeNIntentStatusBR = new BroadcastReceiver() {
	    @Override
	    public void onReceive(Context context, Intent intent) {
	        String command = intent.getStringExtra("COMMAND").equals("") ? "EMPTY" : intent.getStringExtra("COMMAND");
	        String commandIdentifier = intent.getStringExtra("COMMAND_IDENTIFIER").equals("") ? "EMPTY" : intent.getStringExtra("COMMAND_IDENTIFIER");
	        String result = intent.getStringExtra("RESULT").equals("") ? "EMPTY" : intent.getStringExtra("RESULT");

	        Bundle bundle;
	        String resultInfo = "";
	        if (intent.hasExtra("RESULT_INFO")) {
	            bundle = intent.getBundleExtra("RESULT_INFO");
	            Set<String> keys = bundle.keySet();
	            for (String key : keys) {
	                resultInfo += key + ": " + bundle.getString(key) + "\n";
	            }
	        }

	         String text="\n"+"Command:      " + command + "\n" +
	                          "Result:       " + result + "\n" +
	                          "Result Info:  " + resultInfo + "\n" +
	                          "CID:          " + commandIdentifier;

	        Log.d("TAG”,text);
	    }
	};

	public void setKeystrokeOutputPluginConfiguration() {

	    Bundle configBundle = new Bundle();
	    configBundle.putString("PROFILE_NAME","UserProfile");
	    configBundle.putString("PROFILE_ENABLED","true");
	    configBundle.putString("CONFIG_MODE","CREATE_IF_NOT_EXIST");

	    Bundle bConfig = new Bundle();

	    bConfig.putString("PLUGIN_NAME", "KEYSTROKE");
	    Bundle bParams = new Bundle();
	    bParams.putString("keystroke_output_enabled","true");
	    bParams.putString("keystroke_action_char","9"); // 0, 9 , 10, 13
	    bParams.putString("keystroke_delay_extended_ascii","500");
	    bParams.putString("keystroke_delay_control_chars","800");
	    bConfig.putBundle("PARAM_LIST", bParams);

	    configBundle.putBundle("PLUGIN_CONFIG", bConfig);

	    Intent i = new Intent();
	    i.setAction("com.symbol.datawedge.api.ACTION");
	    i.putExtra("com.symbol.datawedge.api.SET_CONFIG", configBundle);
	    i.putExtra("SEND_RESULT", "true");
	    i.putExtra("COMMAND_IDENTIFIER", "KEYSTROKE_API");
	    this.sendBroadcast(i);
	}

	@Override
	protected void onDestroy() {
	    super.onDestroy();
	    unregisterReceiver(datawedgeKeystrokeNIntentStatusBR);
	}

### Set INTENT Output

	@Override
	protected void onCreate(Bundle savedInstanceState) {
	    super.onCreate(savedInstanceState);
	    setContentView(R.layout.activity_main);
	    registerReceivers();
	}

	@Override
	protected void onResume() {
	    super.onResume();
	    setIntentOutputPluginConfiguration();
	}

	private void registerReceivers() {
	    IntentFilter filter = new IntentFilter();
	    filter.addAction("com.symbol.datawedge.api.RESULT_ACTION");
	    filter.addCategory("android.intent.category.DEFAULT");
	    registerReceiver(datawedgeKeystrokeNIntentStatusBR, filter);
	}

	private BroadcastReceiver datawedgeKeystrokeNIntentStatusBR = new BroadcastReceiver() {
	    @Override
	    public void onReceive(Context context, Intent intent) {
	        String command = intent.getStringExtra("COMMAND").equals("") ? "EMPTY" : intent.getStringExtra("COMMAND");
	        String commandIdentifier = intent.getStringExtra("COMMAND_IDENTIFIER").equals("") ? "EMPTY" : intent.getStringExtra("COMMAND_IDENTIFIER");
	        String result = intent.getStringExtra("RESULT").equals("") ? "EMPTY" : intent.getStringExtra("RESULT");

	        Bundle bundle;
	        String resultInfo = "";
	        if (intent.hasExtra("RESULT_INFO")) {
	            bundle = intent.getBundleExtra("RESULT_INFO");
	            Set<String> keys = bundle.keySet();
	            for (String key : keys) {
	                resultInfo += key + ": " + bundle.getString(key) + "\n";
	            }
	        }
	        String text ="\n" + "Command:      " + command + "\n" +
	                            "Result:       " + result + "\n" +
	                            "Result Info:  " + resultInfo + "\n" +
	                            "CID:          " + commandIdentifier;
	        Log.d("TAG”,text);
	    }
	};

	public void setIntentOutputPluginConfiguration() {

	    Bundle bMain = new Bundle();
	    Bundle bConfig = new Bundle();
	    Bundle bParams = new Bundle();

	    bParams.putString("intent_output_enabled","true");
	    bParams.putString("intent_action","com.symbol.dwudiusertokens.udi");
	    bParams.putString("intent_category","zebra.intent.dwudiusertokens.UDI");
	    bParams.putInt("intent_delivery",2); //Use "0" for Start Activity, "1" for Start Service, "2" for Broadcast

	    bConfig.putString("PLUGIN_NAME", "INTENT");
	    bConfig.putString("RESET_CONFIG","false");
	    bConfig.putBundle("PARAM_LIST", bParams);

	    bMain.putBundle("PLUGIN_CONFIG", bConfig);
	    bMain.putString("PROFILE_NAME","UserProfile");
	    bMain.putString("PROFILE_ENABLED","true");
	    bMain.putString("CONFIG_MODE","CREATE_IF_NOT_EXIST");

	    Intent i = new Intent();
	    i.setAction("com.symbol.datawedge.api.ACTION");
	    i.putExtra("com.symbol.datawedge.api.SET_CONFIG",bMain);
	    i.putExtra("SEND_RESULT", "true");
	    i.putExtra("COMMAND_IDENTIFIER", "INTENT_API");
	    this.sendBroadcast(i);
	}

	@Override
	protected void onDestroy() {
	    super.onDestroy();
	    unregisterReceiver(datawedgeKeystrokeNIntentStatusBR);
	}

### Set BDF processing
Process Plug-ins manipulate the acquired data in a specified way before sending it to the associated app via the Output Plug-in. [About BDF](../../process/bdf). [About ADF](../../process/adf). 

	// Main bundle properties
		Bundle bMain = new Bundle();
		bMain.putString("PROFILE_NAME","Profile12");
		bMain.putString("PROFILE_ENABLED","true");
		bMain.putString("CONFIG_MODE","CREATE_IF_NOT_EXIST");

	// plugin_config bundle properties
		Bundle bConfig = new Bundle();
		bConfig.putString("PLUGIN_NAME","BDF");
		bConfig.putString("RESET_CONFIG","true");
		bConfig.putString("OUTPUT_PLUGIN_NAME","KEYSTROKE");

	// param_list bundle properties
		Bundle bParams = new Bundle();
		bParams.putString("bdf_enabled","true");
		bParams.putString("bdf_prefix","AAA");
		bParams.putString("bdf_send_enter","true");

		bConfig.putBundle("PARAM_LIST", bParams);

		bMain.putBundle("PLUGIN_CONFIG", bConfig);

		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.SET_CONFIG", bMain);
		this.sendBroadcast(i);

### Set ADF processing

	//MAIN BUNDLE PROPERTIES
	Bundle bMain = new Bundle();
	bMain.putString("PROFILE_NAME","ProfileTest");
	bMain.putString("PROFILE_ENABLED","true");
	bMain.putString("CONFIG_MODE","CREATE_IF_NOT_EXIST");

	//PLUGIN_CONFIG BUNDLE PROPERTIES
	Bundle bConfig = new Bundle();
	bConfig.putString("PLUGIN_NAME","ADF");
	bConfig.putString("RESET_CONFIG","true");
	bConfig.putString("OUTPUT_PLUGIN_NAME","KEYSTROKE");
	bConfig.putString("adf_enabled","true");

	//PARAM_LIST BUNDLE PROPERTIES
	//RULE BUNDLE PROPERTIES
	Bundle bParamsRule1 = new Bundle();
	bParamsRule1.putString("name","Rule1");
	bParamsRule1.putString("enabled","true");
	bParamsRule1.putString("alldevices","true");
	bParamsRule1.putString("string","abc");
	bParamsRule1.putString("string_pos","2");
	bParamsRule1.putString("string_len","4");

	//ACTION BUNDLE PROPERTIES
	Bundle bParamsAction1 = new Bundle();
	bParamsAction1.putString("type","SEND_NEXT");
	bParamsAction1.putString("action_param_1","5");


	//ACTION BUNDLE PROPERTIES
	Bundle bParamsAction2 = new Bundle();
	bParamsAction2.putString("type","SKIP_BACK");

	//DEVICE BUNDLE PROPERTIES
	Bundle bParamsDevice1 = new Bundle();
	bParamsDevice1.putString("device_id","BARCODE");
	bParamsDevice1.putString("enabled","true");
	bParamsDevice1.putString("alldecoders","false");
	bParamsDevice1.putString("all_label_ids","false");

	//DEVICE BUNDLE PROPERTIES
	Bundle bParamsDevice2 = new Bundle();
	bParamsDevice2.putString("device_id","MSR");
	bParamsDevice2.putString("enabled","true");

	//DEVICE BUNDLE PROPERTIES
	Bundle bParamsDevice3 = new Bundle();
	bParamsDevice3.putString("device_id","SIMULSCAN");
	bParamsDevice3.putString("enabled","true");

	//DECODER BUNDLE PROPERTIES
	Bundle bParamsDecoders1 = new Bundle();
	bParamsDecoders1.putString("device_id","BARCODE");
	bParamsDecoders1.putString("decoder","Australian Postal");
	bParamsDecoders1.putString("enabled","true");

	//DECODER BUNDLE PROPERTIES
	Bundle bParamsDecoders2 = new Bundle();
	bParamsDecoders2.putString("device_id","BARCODE");
	bParamsDecoders2.putString("decoder","Bookland");
	bParamsDecoders2.putString("enabled","false");

	//DECODER BUNDLE PROPERTIES
	Bundle bParamsDecoders3 = new Bundle();
	bParamsDecoders3.putString("device_id","BARCODE");
	bParamsDecoders3.putString("decoder","Codebar");
	bParamsDecoders3.putString("enabled","true");

	//LABEL ID BUNDLE PROPERTIES
	Bundle bParamsLabelID1 = new Bundle();
	bParamsLabelID1.putString("device_id","BARCODE");
	bParamsLabelID1.putString("label_id","UDI_GS1");
	bParamsLabelID1.putString("enabled","true");

	//LABEL ID BUNDLE PROPERTIES
	Bundle bParamsLabelID2 = new Bundle();
	bParamsLabelID2.putString("device_id","BARCODE");
	bParamsLabelID2.putString("label_id","UDI_HIBCC");
	bParamsLabelID2.putString("enabled","true");

	ArrayList<Bundle> bParamsActionList = new ArrayList<Bundle>();
	bParamsActionList.add(bParamsAction1);
	bParamsActionList.add(bParamsAction2);

	ArrayList<Bundle> bParamsDeviceList = new ArrayList<Bundle>();
	bParamsDeviceList.add(bParamsDevice1);
	bParamsDeviceList.add(bParamsDevice2);
	bParamsDeviceList.add(bParamsDevice3);

	ArrayList<Bundle> bParamsDecoderList = new ArrayList<Bundle>();
	bParamsDecoderList.add(bParamsDecoders1);
	bParamsDecoderList.add(bParamsDecoders2);
	bParamsDecoderList.add(bParamsDecoders3);

	ArrayList<Bundle> bParamsLabelIDList = new ArrayList<Bundle>();
	bParamsLabelIDList.add(bParamsLabelID1);
	bParamsLabelIDList.add(bParamsLabelID2);

	bParamsRule1.putParcelableArrayList("ACTIONS",bParamsActionList);
	bParamsRule1.putParcelableArrayList("DEVICES",bParamsDeviceList);
	bParamsRule1.putParcelableArrayList("DECODERS",bParamsDecoderList);
	bParamsRule1.putParcelableArrayList("LABEL_IDS",bParamsLabelIDList);

	Bundle bParamsRule2 = new Bundle();
	bParamsRule2.putString("name","Rule30");
	bParamsRule2.putString("enabled","true");
	bParamsRule2.putString("alldevices","true");
	bParamsRule2.putString("string","cde");
	bParamsRule2.putString("string_pos","3");
	bParamsRule2.putString("string_len","5");

	ArrayList<Bundle> bParamsList = new ArrayList<Bundle>();
	bParamsList.add(bParamsRule1);
	bParamsList.add(bParamsRule2);

	bConfig.putParcelableArrayList("PARAM_LIST", bParamsList);

	bMain.putBundle("PLUGIN_CONFIG", bConfig);

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SET_CONFIG", bMain);
	i.putExtra("SEND_RESULT", "true");
	i.putExtra("COMMAND_IDENTIFIER", "ADF_API");
	this.sendBroadcast(i);

	// GET RESULT CODE
	public void onReceive(Context context, Intent intent){

    String command = intent.getStringExtra("COMMAND");
    String commandidentifier = intent.getStringExtra("COMMAND_IDENTIFIER");
    String result = intent.getStringExtra("RESULT");

    Bundle bundle = new Bundle();
    String resultInfo = "";
    if(intent.hasExtra("RESULT_INFO")){
        bundle = intent.getBundleExtra("RESULT_INFO");
        Set<String> keys = bundle.keySet();
        for (String key: keys) {
            resultInfo += key + ": "+bundle.getString(key) + "\n";
        }
    }

    String text = "Command: "+command+"\n" +
            "Result: " +result+"\n" +
            "Result Info: " +resultInfo + "\n" +
            "CID:"+commandidentifier;
    Toast.makeText(context, text, Toast.LENGTH_LONG).show();
	};
 

### Set/Get Result Codes
Command and configuration intent parameters determine whether to send result codes (disabled by default). When using `SEND_RESULT`, the `COMMAND_IDENTIFIER` is used to match the result code with the originating intent. Sample usage of these parameters is shown below. 

**Note: This <u>generic code must be modified</u> to match the API being used**.  

	// send the intent
		Intent i = new Intent();
		i.setAction(ACTION);
		i.putExtra("com.symbol.datawedge.api.CREATE_PROFILE", "Profile1");

	// request and identify the result code
		i.putExtra("SEND_RESULT","true");
		i.putExtra("COMMAND_IDENTIFIER","123456789");
		this.sendBroadcast(i);

	// register to receive the result
		public void onReceive(Context context, Intent intent){

		    String command = intent.getStringExtra("COMMAND");
		    String commandidentifier = intent.getStringExtra("COMMAND_IDENTIFIER");
		    String result = intent.getStringExtra("RESULT");

		    Bundle bundle = new Bundle();
		    String resultInfo = "";
		    if(intent.hasExtra("RESULT_INFO")){
		        bundle = intent.getBundleExtra("RESULT_INFO");
		        Set<String> keys = bundle.keySet();
		        for (String key: keys) {
		            resultInfo += key + ": "+bundle.getString(key) + "\n";
		        }
		    }

		    String text = "Command: "+command+"\n" +
		                  "Result: " +result+"\n" +
		                  "Result Info: " +resultInfo + "\n" +
		                  "CID:"+commandidentifier;
		    
		    Toast.makeText(context, text, Toast.LENGTH_LONG).show();

		};

### Use the internal imager for scanning

	Bundle bConfig = new Bundle();

	bConfig.putString("PLUGIN_NAME","BARCODE");

	Bundle bParams = new Bundle();
	bParams.putString("scanner_input_enabled", "true");
	//
	// auto or valid scanner identifier:
	//
	bParams.putString("scanner_selection_by_identifier", "INTERNAL_IMAGER");
	bConfig.putBundle("PARAM_LIST",bParams);

### Configure an inter-character delay

	private Integer ctrlCharacterDelayValue;
	private Integer genericCharacterDelayValue;
	private Boolean flagExtendedASCIIOnly;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
	    super.onCreate(savedInstanceState);
	    setContentView(R.layout.activity_main);

	    registerReceivers();
	    ctrlCharacterDelayValue = null;
	    genericCharacterDelayValue = null;
	    flagExtendedASCIIOnly = null;
	}

	private void registerReceivers() {
	    IntentFilter filter = new IntentFilter();
	    filter.addAction("com.symbol.datawedge.api.RESULT_ACTION");
	    filter.addCategory(Intent.CATEGORY_DEFAULT);
	    registerReceiver(broadcastReceiver, filter);
	}

	@Override
	protected void onDestroy() {
	    super.onDestroy();
	    unregisterReceiver(broadcastReceiver);
	}

	//Set configuration
	public void setKeystrokeOutputPluginConfiguration(View v) {

	    Bundle configBundle = new Bundle();
	    configBundle.putString("PROFILE_NAME","Profile0 (default)");
	    configBundle.putString("PROFILE_ENABLED","true");
	    configBundle.putString("CONFIG_MODE","UPDATE");

	    Bundle bConfig = new Bundle();

	    bConfig.putString("PLUGIN_NAME", "KEYSTROKE");
	    Bundle bParams = new Bundle();
	    bParams.putString("keystroke_output_enabled","true");
	    if(ctrlCharacterDelayValue!=null){
	        bParams.putString("keystroke_delay_control_chars",ctrlCharacterDelayValue+"");
	    }
	    if(genericCharacterDelayValue !=null){
	        bParams.putString("keystroke_character_delay", genericCharacterDelayValue +"");
	    }
	    if(flagExtendedASCIIOnly!=null){
	        bParams.putString("keystroke_delay_multibyte_chars_only", flagExtendedASCIIOnly +"");
	    }

	    bConfig.putBundle("PARAM_LIST", bParams);
	    configBundle.putBundle("PLUGIN_CONFIG", bConfig);

	    Intent i = new Intent();
	    i.setAction("com.symbol.datawedge.api.ACTION");
	    i.putExtra("com.symbol.datawedge.api.SET_CONFIG", configBundle);
	    i.putExtra("SEND_RESULT", "true");
	    i.putExtra("COMMAND_IDENTIFIER", "KEYSTROKE_API");
	    this.sendBroadcast(i);
		}

	//broadcast receiver
	private BroadcastReceiver broadcastReceiver = new BroadcastReceiver() {
	    @Override
	    public void onReceive(Context context, Intent intent) {
	        String action = intent.getAction();
	        Log.d(TAG, "#DataWedge-APP# Action: " + action);


		//result of set config
	        if(action.equals("com.symbol.datawedge.api.RESULT_ACTION")){
	            Bundle extrasBundle = intent.getExtras();
	            Set<String> keys = extrasBundle.keySet();
	            if(keys!=null&&keys.contains("RESULT")){
	                String result = (String)extrasBundle.get("RESULT");
	                Log.d(TAG,"Result:"+result);
	                //get additional info
	                Bundle resultInforBundle = (Bundle) extrasBundle.get("RESULT_INFO");
	                Object resultCode = resultInforBundle.get("RESULT_CODE");
	                if(resultCode instanceof String){
	                    String code = (String)resultCode;
	                    Log.d(TAG,"Code:"+code);
	                }else if(resultCode instanceof String[]){
	                    String[] codesArray = (String[])resultCode;
	                    if(codesArray!=null){
	                        for(String code : codesArray){
	                            Log.d(TAG,"Code:"+code);
	                        }
	                    }
	                }
	            }

	        }//end result of set config
	    }//end onReceive
	};

-----

## Scanner Input Parameters 

**Important**: Support for decode parameters can vary depending on the selected scanning device. For device-specific support notes, please refer to the [Integrator Guide](https://www.zebra.com/us/en/sitesearch.html?q=integrator) that accompanied the unit. 

> All parameters are case sensitive.

<table class="c19">
<tbody>
<tr class="c6" bgcolor="#e0e0eb">
<td class="c20" colspan="1" rowspan="1">
<p class="c1">
<span class="c9">
<u><strong>Param name</strong></u>
</span>
</p>
</td>
<td class="c14" colspan="1" rowspan="1">
<p class="c1"> <span class="c9"><u><strong>Param values</strong></u></span></p>
</td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">auto_switch_to_default_on_connect</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Disabled</span></p><p class="c1"><span class="c0">1 - On connect</span></p><p class="c1"><span class="c0">2 - On disconnect</span></p><p class="c1"><span class="c0">3 - On connect/disconnect<p class="c1"><p class="c1"><span class="c0"><a href="../../input/barcode/#autoswitchtodefaultonevent">More info</a></span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">digimarc_decoding</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p>
</td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">scanning_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">1 - Single</span></p><p class="c1"><span class="c0">2 - UDI</span></p><p class="c1"><span class="c0">3 - MultiBarcode</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">multi_barcode_count</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">integer from 2&ndash;10</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">scanner_selection_by_identifier</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">See <a href="#scanneridentifiers">Scanner Identifiers</a> table</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">trigger-wakeup</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">scanner_input_enabled</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">trigger-wakeup</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">scanner_selection</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">auto</span></p><p class="c1"><span class="c0">0&ndash;n (valid scanner index from <a href="../enumeratescanners">ENUMERATE_SCANNERS API</a>)</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upca</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upce0</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_ean13</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_ean8</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_i2of5</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_gs1_databar</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_gs1_databar_lim</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_gs1_databar_exp</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_datamatrix</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_qrcode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_pdf417</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_composite_ab</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_composite_c</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_microqr</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_aztec</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_maxicode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_micropdf</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_uspostnet</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_usplanet</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_uk_postal</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_japanese_postal</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_australian_postal</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_canadian_postal</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_dutch_postal</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_us4state</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_us4state_fics</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_codabar</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_msi</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code93</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_trioptic39</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_d2of5</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_chinese_2of5</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>

<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_korean_3of5</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code11</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_tlc39</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_mailmark</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_hanxin</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_signature</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_webcode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_matrix_2of5</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upce1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upca_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c5" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upca_preamble</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Preamble None</span></p><p class="c1"><span class="c0">1 - Preamble Sys Char</span></p><p class="c1"><span class="c0">2 - Preamble Country and Sys Char</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upce0_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c5" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upce0_preamble</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Preamble None</span></p><p class="c1"><span class="c0">1 - Preamble Sys Char</span></p><p class="c1"><span class="c0">2 - Preamble Country and Sys Char</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upce0_convert_to_upca</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_ean8_convert_to_ean13</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td>
</tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_enable_plain</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_enable_ean128</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_enable_isbt128</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c5"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_isbt128_concat_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Concat Mode Never</span></p><p class="c1"><span class="c0">1 - Concat Mode Always</span></p><p class="c1"><span class="c0">2 - Concat Mode Auto</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_check_isbt_table</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c10"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_security_level</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Security Level 0</span></p><p class="c1"><span class="c0">1 - Security Level 1</span></p><p class="c1"><span class="c0">2 - Security Level 2</span></p><p class="c1"><span class="c0">3 - Security Level 3</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">code128_enable_marginless_decode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">code128_ignore_fnc4</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td>
</tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_verify_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_full_ascii</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_convert_to_code32</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_report_code32_prefix</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c10" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_security_level</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Security Level 0</span></p><p class="c1"><span class="c0">1 - Security Level 1</span></p><p class="c1"><span class="c0">2 - Security Level 2</span></p><p class="c1"><span class="c0">3 - Security Level 3</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">code39_enable_marginless_decode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_i2of5_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td>
</tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_i2of5_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_i2of5_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c5"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_i2of5_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - No Check Digit</span></p><p class="c1"><span class="c0">1 - USS Check Digit</span></p><p class="c1"><span class="c0">2 - OPCC Check Digit</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_i2of5_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_itf14_convert_to_ean13</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c10" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_i2of5_security_level</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Security Level 0</span></p><p class="c1"><span class="c0">1 - Security Level 1</span></p><p class="c1"><span class="c0">2 - Security Level 2</span></p><p class="c1"><span class="c0">3 - Security Level 3</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">i20f5_enable_marginless_decode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c10" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_gs1_lim_security_level</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">1 - Security Level 1</span></p><p class="c1"><span class="c0">2 - Security Level 2</span></p><p class="c1"><span class="c0">3 - Security Level 3</span></p><p class="c1"><span class="c0">4 - Security Level 4</span></p></td>
</tr>
<tr class="c5"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_composite_ab_ucc_link_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Link Flag Ignored</span></p><p class="c1"><span class="c0">1 - Always Linked</span></p><p class="c1"><span class="c0">2 - Auto Discriminate</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_uk_postal_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_codabar_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td>
</tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_codabar_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_codabar_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_codabar_clsi_editing</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_codabar_notis_editing</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_msi_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td>
</tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_msi_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_msi_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_msi_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - One Check Digit</span></p><p class="c1"><span class="c0">1 - Two Check Digit</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_msi_check_digit_scheme</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Mod-11-10</span></p><p class="c1"><span class="c0">1 - Mod-10-10</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_msi_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code93_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td>
</tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code93_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code93_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_trioptic39_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_d2of5_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td>
</tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_d2of5_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_d2of5_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code11_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td>
</tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code11_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code11_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c5" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code11_verify_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - No Check Digit</span></p><p class="c1"><span class="c0">1 - 1 Check Digit</span></p><p class="c1"><span class="c0">2 - 2 Check Digits</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code11_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c5" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_hanxin_inverse</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Disable</span></p><p class="c1"><span class="c0">1 - Enable</span></p><p class="c1"><span class="c0">2 - Auto</span></p></td>
</tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_matrix_2of5_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td>
</tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_matrix_2of5_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_matrix_2of5_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_matrix_2of5_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_matrix_2of5_verify_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upce1_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c5"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upce1_preamble</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Preamble None</span></p><p class="c1"><span class="c0">1 - Preamble Sys Char</span></p><p class="c1"><span class="c0">2 - Preamble Country and Sys Char</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upce1_convert_to_upca</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c10"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_security_level</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Level 0</span></p><p class="c1"><span class="c0">1 - Level 1</span></p><p class="c1"><span class="c0">2 - Level 2</span></p><p class="c1"><span class="c0">3 - Level 3</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_supplemental2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_supplemental5</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c11" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_supplemental_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - No Supplementals</span></p><p class="c1"><span class="c0">1 - Supplemental Always</span></p><p class="c1"><span class="c0">2 - Supplemental Auto</span></p><p class="c1"><span class="c0">3 - Supplemental Smart</span></p><p class="c1"><span class="c0">4 - Supplemental 378-379</span></p><p class="c1"><span class="c0">5 - Supplemental 978-979</span></p><p class="c1"><span class="c0">6 - Supplemental 414-419-434-439</span></p><p class="c1"><span class="c0">7 - Supplemental 977</span></p></td>
</tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_retry_count</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 2 to 20</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_random_weight_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_linear_decode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_bookland</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_coupon</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c5" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_coupon_report</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Old Coupon Report Mode</span></p><p class="c1"><span class="c0">1 - New Coupon Report Mode</span></p><p class="c1"><span class="c0">2 - Both Coupon Report Modes</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_ean_zero_extend</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_bookland_format</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Format ISBN-10</span></p><p class="c1"><span class="c0">1 - Format ISBN-13</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">databar_to_upc_ean</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upc_enable_marginless_decode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">aim_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">on - On</span></p><p class="c1"><span class="c0">off - Off</span></p></td>
</tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">beam_timer</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;60000</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">Adaptive_Scanning</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">1 - Disable</span></p><p class="c1"><span class="c0">0 - Enable</span></p></td>
</tr>
<tr class="c5" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">Beam_Width</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Narrow</span></p><p class="c1"><span class="c0">1 - Normal</span></p><p class="c1"><span class="c0">2 - Wide</span></p></td>
</tr>
<tr class="c10"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">power_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Low Power Mode</span></p><p class="c1"><span class="c0">1 - Optimized Power Mode</span></p><p class="c1"><span class="c0">2 - High Power Mode</span></p><p class="c1"><span class="c0">3 - Always On</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">mpd_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Disable Mobile Phone Display Mode</span></p><p class="c1"><span class="c0">3 - Enable Mobile Phone Display Mode</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">reader_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">7 - Presentation Mode</span></p><p class="c1"><span class="c0">0 - Triggered Mode</span></p></td>
</tr>
<tr class="c10" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">linear_security_level</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">1 - Security Short Or Codabar</span></p><p class="c1"><span class="c0">2 - Security All Twice</span></p><p class="c1"><span class="c0">3 - Security Long And Short</span></p><p class="c1"><span class="c0">4 - Security All Thrice</span></p></td>
</tr>
<tr class="c5"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">picklist</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Disabled</span></p><p class="c1"><span class="c0">1 &ndash; Enabled/HW picklist</span></p><p class="c1"><span class="c0">2 &ndash; Software Picklist</span></p></td>
</tr>
<tr class="c18" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">aim_type</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Trigger</span></p><p class="c1"><span class="c0">1 - Timed Hold</span></p><p class="c1"><span class="c0">2 - Timed Release</span></p><p class="c1"><span class="c0">3 - Press And Release</span></p><p class="c1"><span class="c0">5 - Continuous Read</span></p><p class="c1"><span class="c0">6 - Press and Sustain</span></p></td>
</tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">aim_timer</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;60000</span></p></td>
</tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">same_barcode_timeout</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;5000</span></p></td>
</tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">different_barcode_timeout</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;5000</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">illumination_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">off - Off</span></p><p class="c1"><span class="c0">torch - On</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">lcd_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Disabled</span></p><p class="c1"><span class="c0">3 - Enabled</span></p></td>
</tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">low_power_timeout</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;1000</span></p></td>
</tr>
<tr class="c10"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">delay_to_low_power_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">16 - 1 Second</span></p><p class="c1"><span class="c0">29 - 30 Seconds</span></p><p class="c1"><span class="c0">32 - 1 Minute</span></p><p class="c1"><span class="c0">37 - 5 Minutes</span></p></td>
</tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">illumination_brightness</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;10</span></p></td>
</tr>
<tr class="c5"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">inverse_1d_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Disable</span></p><p class="c1"><span class="c0">1 - Enable</span></p><p class="c1"><span class="c0">2 - Auto</span></p></td>
</tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">viewfinder_size</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;100</span></p></td>
</tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">viewfinder_posx</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;100</span></p></td>
</tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">viewfinder_posy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;100</span></p></td>
</tr>
<tr class="c10"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">1d_marginless_decode_effort_level</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Level 0</span></p><p class="c1"><span class="c0">1 - Level 1</span></p><p class="c1"><span class="c0">2 - Level 2</span></p><p class="c1"><span class="c0">3 - Level 3</span></p></td>
</tr>
<tr class="c10" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">poor_quality_bcdecode_effort_level</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Level 0</span></p><p class="c1"><span class="c0">1 - Level 1</span></p><p class="c1"><span class="c0">2 - Level 2</span></p><p class="c1"><span class="c0">3 - Level 3</span></p></td>
</tr>
<tr class="c5"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">charset_name</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">ISO-8859-1 - ISO-8859-1</span></p><p class="c1"><span class="c0">Shift_JIS - Shift_JIS</span></p><p class="c1"><span class="c0">UTF-8 - UTF-8</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">viewfinder_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">1 - Viewfinder Enabled</span></p><p class="c1"><span class="c0">2 - Static Reticle</span></p></td>
</tr>
<tr class="c5"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">code_id_type</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Code Id Type None</span></p><p class="c1"><span class="c0">1 - Code Id Type Aim</span></p><p class="c1"><span class="c0">2 - Code Id Type Symbol</span></p></td>
</tr>
<tr class="c10" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">volume_slider_type</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Ringer</span></p><p class="c1"><span class="c0">1 - Music and Media</span></p><p class="c1"><span class="c0">2 - Alarms</span></p><p class="c1"><span class="c0">3 - Notification</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decode_audio_feedback_uri</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">URI &ndash; Can be a query of the available URIs from RingToneManager</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decode_haptic_feedback</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">bt_disconnect_on_exit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">connection_idle_time</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;1800</span></p></td>
</tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">establish_connection_time</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 30&ndash;60</span></p></td>
</tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">remote_scanner_audio_feedback_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;3</span></p></td>
</tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">remote_scanner_led_feedback_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;3</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">display_bt_address_barcode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">good_decode_led_timer</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;1000</span></p></td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoding_led_feedback</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c17"><td class="c4" colspan="1" rowspan="1"><p class="c8"><span class="c0">decoder_usplanet_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c8"><span class="c0">false</span></p><p class="c8"><span class="c0">true</span></p><p class="c1 c7"><span class="c0"></span></p></td>
</tr>
</tbody>
</table>

**Important**: Support for decode parameters can vary depending on the scanning device selected. For device-specific support notes, please refer to the [Integrator Guide](https://www.zebra.com/us/en/sitesearch.html?q=integrator) that accompanied the unit. 

-----

## Serial Input Parameters 

**Important**: Support for serial parameters varies by device. For device-specific support notes, please refer to the [Integrator Guide](https://www.zebra.com/us/en/sitesearch.html?q=integrator) that accompanied the unit. 

> All parameters are case sensitive.

<table class="c19">
<tbody>
<tr class="c6" bgcolor="#e0e0eb">
<td class="c20" colspan="1" rowspan="1">
<p class="c1">
<span class="c9">
<u><strong>Param name</strong></u>
</span>
</p>
</td>
<td class="c14" colspan="1" rowspan="1">
<p class="c1"> <span class="c9"><u><strong>Param values</strong></u></span></p>
</td>
</tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">serial_port_id</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0&ndash;n (must be a valid index)</span></p>
</td>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">serial_input_enabled</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p>
</td>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">serial_baudrate</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">300, 1200, 2400, 4800, 9600, 19200, 38400, 57600, 115200, 230400, 460800 or 921600</span></p>
</td>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">serial_databits</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">7 or 8</span></p>
</td>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">serial_parity</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">NONE, ODD, EVEN, MARK or SPACE</span></p>
</td>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">serial_stopbits</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">1 or 2</span></p>
</td>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">serial_flow</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">FLOW_NONE, FLOW_RTS_CTS or FLOW_XON_XOFF</span></p>
</td>
</tbody>
</table>

-----

## Keystroke Output Parameters 

> All parameters are case sensitive.

<table class="c19">
<tbody>
<tr class="c6" bgcolor="#e0e0eb">
<td class="c20" colspan="1" rowspan="1">
<p class="c1">
<span class="c9">
<strong>Param name</strong>
</span>
</p>
</td>
<td class="c14" colspan="1" rowspan="1">
<p class="c1"> <span class="c9"><strong>Param values</strong></span></p>
</td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">keystroke_output_enabled</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
<tr class="c10" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">keystroke_action_character</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">NONE - ASCII_NO_VALUE</span></p><p class="c1"><span class="c0">TAB - ASCII_TAB_VALUE</span></p><p class="c1"><span class="c0">LF - ASCII_LF_VALUE</span></p><p class="c1"><span class="c0">CR - ASCII_CR_VALUE</span></p></td>
</tr>
<tr class="c13"><td class="c4" colspan="1" rowspan="1"><p class="c1">
<span class="c0">keystroke_delay_extended_ascii<br>(deprecated)</p></span></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;1000</span></p></td>
</tr>
<tr class="c13" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1">
<span class="c0">keystroke_delay_control_characters</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;1000</span></p></td>
</tr>
<tr class="c13"><td class="c4" colspan="1" rowspan="1"><p class="c1">
<span class="c0">keystroke_character_delay</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;1000</span></p></td>
</tr>
<tr class="c13" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1">
<span class="c0">keystroke_delay_multibyte_chars_only</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td>
</tr>
</tbody>
</table>

### Keystroke Delay Notes

* The `keystroke_delay_extended_ascii` parameter is deprecated. 
* If a Keystroke Plug-in bundle uses the `keystroke_delay_extended_ascii` parameter, DataWedge sets the `keystroke_delay_multibyte_chars_only` parameter to true. 
* If both the `keystroke_delay_extended_ascii` and `keystroke_character_delay` parameters are sent: 
 * The `keystroke_character_delay` value is retained.
 * The `keystroke_delay_extended_ascii` value is ignored. 
 * If available, the `keystroke_delay_multibyte_chars_only` value is saved; it is otherwise considered false.

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

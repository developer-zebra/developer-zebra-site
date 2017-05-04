---
title: DataWedge 6.3 APIs 
layout: guide.html
product: DataWedge
productversion: '6.3'
---

### APIs Supporting New Syntax

The following APIs can be invoked as extras from a single intent action:

* [EnableDataWedge](#enabledatawedge)
* [CloneProfile](#cloneprofile)
* [RenameProfile](#renameprofile)
* [DeleteProfile](#deleteprofile)
* [QueryProfileList](#queryprofilelist)
* [GetActiveProfile](#getactiveprofile)

### APIs That Require Previous Syntax

The following API calls require a distinct intent action for each: 

* [SoftScanTrigger](#softscantrigger)
* [ScannerInputPlugin](#scannerinputplugin)
* [EnumerateScanners](#enumeratescanners) 
* [SetDefaultProfile](#setdefaultprofile)
* [ResetDefaultProfile](#resetdefaultprofile)
* [SwitchToProfile](#switchtoprofile)

[About the new syntax](../overview) 

## EnableDataWedge

Boolean value used to enable (true) or disable (false) DataWedge on the device.

###FUNCTION PROTOTYPE

	:::java
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.ENABLE_DATAWEDGE", <value>);

###PARAMETERS

**ACTION**: String `com.symbol.datawedge.api.ACTION`

**EXTRA_DATA**: String `com.symbol.datawedge.api.DELETE_PROFILE`

**Boolean &lt;value&gt;**: True or False 

###RETURN VALUES
(None)

Error and debug messages are logged to the Android logging system, which then can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

###EXAMPLE

	:::java
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.ENABLE_DATAWEDGE", false);
	context.this.sendBroadcast(i);

-----

## CloneProfile

Used to create a copy of an existing DataWedge Profile.

###FUNCTION PROTOTYPE

	:::java
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.CLONE_PROFILE", <values>);

###PARAMETERS

**ACTION**: String `com.symbol.datawedge.api.ACTION`

**EXTRA_DATA**: String `com.symbol.datawedge.api.DELETE_PROFILE`

**String[ ] &lt;values&gt;**: Name of Profile to be copied, new Profile name

###RETURN VALUES
(None)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

###EXAMPLE

	:::java
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	String[ ] values = {"Source profile","Destination Profile"};
	i.putExtra("com.symbol.datawedge.api.CLONE_PROFILE", values);
	context.this.sendBroadcast(i);

-----

## RenameProfile
Used to rename a DataWedge Profile.  

###FUNCTION PROTOTYPE

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.RENAME_PROFILE", <values>);

###PARAMETERS

**ACTION**: String "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA**: String "com.symbol.datawedge.api.RENAME_PROFILE"

**String[ ] &lt;values&gt;**: Profile name to be renamed, New Profile name
 
###RETURN VALUES
(None)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters

###EXAMPLE

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	String[] values = {"Old profile","Renamed Profile"};
	i.putExtra("com.symbol.datawedge.api.RENAME_PROFILE", values);
	context.this.sendBroadcast(i);


------

## DeleteProfile
Used to delete an existing _**deletable**_ Profile, which **included the "Launcher" Profile**.  

###FUNCTION PROTOTYPE

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.DELETE_PROFILE", <values>);


###PARAMETERS

**ACTION**: String "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA**: String "com.symbol.datawedge.api.DELETE_PROFILE"

**String[ ] &lt;values&gt;**: List of Profiles to be deleted. “*” deletes all the deletable Profiles from the configuration, including the "Launcher" Profile.
 

###RETURN VALUES
(None)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters

###EXAMPLE

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	String[] values = {"My profile"};
	i.putExtra("com.symbol.datawedge.api.DELETE_PROFILE", values);
	context.this.sendBroadcast(i);

------

## SetConfig

Used to create, update or replace a DataWedge Profile and its settings. Supports [nested bundles](../overview/#nestedbundles). 

###FUNCTION PROTOTYPE

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SET_CONFIG", <mainbundle>);

###PARAMETERS

**ACTION**: String "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA**: String "com.symbol.datawedge.api.SET_CONFIG"

**Bundle &lt;mainbundle&gt;**: (see parameters, below)

####MAIN BUNDLE
The main SetConfig bundle will include the following properties:

* **PROFILE_NAME** [String]: The name of the Profile on which to perform action(s)
* **CONFIG_MODE** [String]: (Default=OVERWRITE)
 * **CREATE_IF_NOT_EXIST**: Creates the Profile if string in PROFILE_NAME does not exist 
 * **OVERWRITE**: If Profile exists, resets all options to default, then configures specified settings
 * **UPDATE**: Updates only specified settings
* **PROFILE_ENABLED** [String]: Optional; Controls whether to enable (true) or disable (false) a Profile (default=true). If not specified, no change is made to the Profile state.
* **PLUGIN_CONFIG** [Bundle]: A bundle (nested within the main bundle) that contains settings of a specific Plug-in
* **APP_LIST** [Array]: List of applications and/or activities to associate with the Profile

####PLUGIN_CONFIG BUNDLE
The PLUGIN_CONFIG bundle is configured with the following properties:

**RESET_CONFIG** [String]: Optional
  * True (Default) – Clear any existing configuration and create a new configuration with the specified set parameter values.  
  * False – Update the existing values and add values not already in the configuration

**PLUGIN_NAME** [String]: Name of the Plug-in to configure:
  * BARCODE – specify decoder and other input settings in `PARAM_LIST` nested bundle 
  * KEYSTROKE - specify output settings in `PARAM_LIST` nested bundle

To be implemented in the future: 
  * MSR 
  * SIMULSCAN 
  * DCP 
  * INTENT 
  * IP 

**PARAM_LIST** [Bundle]: This is a Param List Bundle nested within the `PLUGIN_CONFIG` bundle. Includes the list of parameters that should be updated under the specified Plug-in. Setting an empty string in any parameter value resets that parameter to its default setting. 

#### PARAM_LIST BUNDLE
The `PARAM_LIST` bundle is configured by specifying the name of the parameter to set and the value to which to set it. Applies to parameters matching the `PLUGIN_NAME` specified in `PLUGIN_CONFIG` bundle. 

<!--
See the available parameters for each PLUGIN_NAME:
  * [BARCODE]()
  * [MSR]() 
  * [SIMULSCAN]()
  * [DCP]()
  * [INTENT]()
  * [IP]()
  * [KEYSTROKE]()
-->

#### APP_LIST
The `APP_LIST` is an array of bundles that contains a set of `PACKAGE_NAMES` and an `ACTIVITY_LIST` to be associated with the Profile. 

##### APP_LIST BUNDLE
The `APP_LIST` bundle will contain the following properties:

**PACKAGE_NAME** [String]: ex: 'com.symbol.emdk.barcodesample1' or a wild card: '*'

**ACTIVITY_LIST** [List]: A list of activities for the `PACKAGE_NAME`. Wildcard also supported.
 

### RETURN VALUES
(None)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters

### EXAMPLE

	//MAIN BUNDLE PROPERTIES
	Bundle bMain = new Bundle();
	bMain.putString("PROFILE_NAME","Profile12");
	bMain.putString("PROFILE_ENABLED","true");
	bMain.putString("CONFIG_MODE","CREATE_IF_NOT_EXIST");

	//PLUGIN_CONFIG BUNDLE PROPERTIES
	Bundle bConfig = new Bundle();
	bConfig.putString("PLUGIN_NAME","Barcode");
	bConfig.putString("RESET_CONFIG","true"); 


	//PARAM_LIST BUNDLE PROPERTIES
	Bundle bParams = new Bundle();
	bParams.putString("current-device-id","0");
	bParams.putString("scanner_input_enabled","true");

	//PUT bParams into bConfig
	bConfig.putBundle("PARAM_LIST", bParams);

	//PUT bConfig into bMain
	bMain.putBundle("PLUGIN_CONFIG", bConfig);

	// APP_LIST BUNDLES
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

	//PUT THEM ALL TOGETHER INTO THE MAIN BUNDLE
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

------

## QueryProfileList

The Query Profile API command can be used to get a list of available DataWedge Profiles

###FUNCTION PROTOTYPE

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.GET_PROFILES_LIST", "");


###PARAMETERS

**ACTION**: String "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA**: String "com.symbol.datawedge.api.GET_PROFILES_LIST"

**EXTRA VALUE: Empty String
 

###RETURN VALUES
Returns a String array of Datawedge Profiles

**EXTRA NAME**: Name: com.symbol.datawedge.api.RESULT_GET_PROFILES_LIST 

**EXTRA TYPE**: String [ ]

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

###EXAMPLE

	//SENDING THE INTENT
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.GET_PROFILES_LIST", "");
	context.this.sendBroadcast(i);

	//RECEIVING THE RESULT
	private BroadcastReceiver myBroadcastReceiver = new BroadcastReceiver(){

		@Override
		public void onReceive(Context context, Intent intent){

			Bundle extras = getIntent().getExtras();
			if (intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_PROFILES_LIST")){
				String[] profilesList = intent.getStringArrayExtra("com.symbol.datawedge.api.RESULT_GET_PROFILES_LIST")
			

------

## GetActiveProfile 

The Get Active Profile API command can be used to get the current active Profile that DataWedge is using.

###FUNCTION PROTOTYPE

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.GET_ACTIVE_PROFILE", "");


###PARAMETERS

**ACTION**: String "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA**: String "com.symbol.datawedge.api.GET_ACTIVE_PROFILE"

**EXTRA VALUE**: Empty String
 

###RETURN VALUES
Returns a String of the name of the active DataWedge Profile

**EXTRA NAME**: Name: com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE 

**EXTRA TYPE**: String 

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

###EXAMPLE

	//SENDING THE INTENT
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.GET_ACTIVE_PROFILE", "");
	context.this.sendBroadcast(i);

	//RECEIVING THE RESULT
	private BroadcastReceiver myBroadcastReceiver = new BroadcastReceiver(){

		@Override
		public void onReceive(Context context, Intent intent){

			Bundle extras = getIntent().getExtras();
			if (intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE")){
				String activeProfile = intent.getStringArrayExtra("com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE")
			

------

## SoftScanTrigger

The SoftScanTrigger API command can be used to start, stop or toggle a software scanning trigger. **Valid only when Barcode Input is enabled in the active Profile**.  

###FUNCTION PROTOTYPE

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION_SOFTSCANTRIGGER");
	i.putExtra("com.symbol.datawedge.api.EXTRA_PARAMETER", "<parameter>");


###PARAMETERS

**ACTION**: String "com.symbol.datawedge.api.ACTION_SOFTSCANTRIGGER"

**EXTRA_DATA**: String "com.symbol.datawedge.api.EXTRA_PARAMETER"

**&lt;parameter&gt;**: The parameter as a string, using any of the following: 

* "START_SCANNING" - to start scanning

* "STOP_SCANNING" - to stop scanning

* "TOGGLE_SCANNING" - to toggle between start scanning and stop scanning

###RETURN VALUES
(None)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

###EXAMPLE

	// define action and data strings
	String softScanTrigger = "com.symbol.datawedge.api.ACTION_SOFTSCANTRIGGER";
	String extraData = "com.symbol.datawedge.api.EXTRA_PARAMETER";
	// create the intent
	Intent i = new Intent();
	// set the action to perform
	i.setAction(softScanTrigger);
	// add additional info
	i.putExtra(extraData, "START_SCANNING");
	// send the intent to DataWedge

	context.this.sendBroadcast(i);

###COMMENTS 
The soft scan trigger command should be delayed sufficiently to enable the scanner to complete the task. For example, use of delay code similar to that shown below could be used.

	int triggerDelay = 250; // delay in milliseconds

	Handler handler = new Handler();
	handler.postDelayed(new Runnable() {
	        public void run() {
	                // for clarity, assume the following method contains the code in the example above
	                startSoftScan();
	        }
	}, triggerDelay);

------

## ScannerInputPlugin

The ScannerInputPlugin API command can be used to enable/disable the scanner plug-in being used by the currently active Profile. Disabling the scanner plug-in effectively disables scanning in that Profile, regardless of whether the Profile is associated or unassociated. **Valid only when Barcode Input is enabled in the active Profile**. 

**Note**: Use of this API changes only the runtime status of the scanner; it does not make persistent changes to the Profile. 

###FUNCTION PROTOTYPE

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION_SCANNERINPUTPLUGIN");
	i.putExtra("com.symbol.datawedge.api.EXTRA_PARAMETER", "<parameter>");


###PARAMETERS

**ACTION**: String "com.symbol.datawedge.api.ACTION_SCANNERINPUTPLUGIN"

**EXTRA_DATA**: String "com.symbol.datawedge.api.EXTRA_PARAMETER"

**&lt;parameter**&gt;: The parameter as a string, using either of the following:

* "ENABLE_PLUGIN" - enables the plug-in
* "DISABLE_PLUGIN" - disables the plug-in

###RETURN VALUES
(None)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters. 


###EXAMPLE

	// define action and data strings
	String scannerInputPlugin = "com.symbol.datawedge.api.ACTION_SCANNERINPUTPLUGIN";
	String extraData = "com.symbol.datawedge.api.EXTRA_PARAMETER";

	public void onResume() {
	        // create the intent
	        Intent i = new Intent();
	        // set the action to perform
	        i.setAction(scannerInputPlugin);
	        // add additional info
	        i.putExtra(extraData, "DISABLE_PLUGIN");
	        // send the intent to DataWedge
	        context.this.sendBroadcast(i);
	}

### COMMENTS
This intent enables or disables the scanner plug-in for the currently enabled Profile. For example, let's say that activity A launches and uses the Data Capture API intent to switch to ProfileA in which the scanner plug-in is enabled, then at some point it uses the Data Capture API to disable the scanner plug-in. Activity B is launched. In DataWedge, ProfileB is associated with activity B. DataWedge switches to ProfileB. When activity A comes back to the foreground, in the `onResume` method, activity A must use the Data Capture API intent to switch back to ProfileA, then use the Data Capture API intent again to disable the scanner plug-in, to return back to the state it was in.

### NOTE
The above assumes that ProfileA is not associated with any applications/activities, therefore when focus switches back to activity A, DataWedge will not automatically switch to ProfileA, and therefore activity A must switch back to ProfileA in its `onResume` method.

Because DataWedge will automatically switch Profile when an activity is paused, it is recommended that this API function be called from the `onResume` method of the activity.

------

## EnumerateScanners

Used to get the list of scanners available on the device.

###FUNCTION PROTOTYPE

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION_ENUMERATESCANNERS");

### PARAMETERS
**ACTION**: String "com.symbol.datawedge.api.ACTION_ENUMERATESCANNERS"

### RETURN VALUES
The enumerated list of scanners is returned via the broadcast intent `com.symbol.datawedge.api.ACTION_ENUMERATEDSCANNERLIST`. The list of scanners is returned as a string array (see example below).

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters. 

### EXAMPLE

	// First send the intent to enumerate the available scanners on the device
	
	// define action string:
	String enumerateScanners = "com.symbol.datawedge.api.ACTION_ENUMERATESCANNERS";
	
	// create the intent:
	Intent i = new Intent();
	
	// set the action to perform:
	i.setAction(enumerateScanners);
	
	// send the intent to DataWedge:
	context.this.sendBroadcast(i);

	// enable the app to receive the enumerated list of available scanners:
	String enumeratedList = "com.symbol.datawedge.api.ACTION_ENUMERATEDSCANNERLIST";
	String KEY_ENUMERATEDSCANNERLIST = "DataWedgeAPI_KEY_ENUMERATEDSCANNERLIST";

	// create a filter for the broadcast intent
	IntentFilter filter = new IntentFilter();
	filter.addAction(enumeratedList);
	registerReceiver(myBroadcastReceiver, filter);

	// create a broadcast receiver
	private BroadcastReceiver myBroadcastReceiver = new BroadcastReceiver() {
	        @Override
	        public void onReceive(Context context, Intent intent) {
	                String action = intent.getAction();
	                if (action.equals(enumeratedList)) {
	                        Bundle b = intent.getExtras();
	                        String[] scanner_list = b.getStringArray(KEY_ENUMERATEDSCANNERLIST);
	                }
	        }
	};

###COMMENTS
The scanner and its parameters are set based on the currently active Profile.

------

## SetDefaultProfile

The `setDefaultProfile` API function can be used to set the specified Profile as the default Profile.

**A Profile specified using this method MUST NOT already be associated with another application**. 

###DEFAULT PROFILE RECAP
Profile0 is the generic Profile used when there are no user-created Profiles associated with an application.	

Profile0 can be edited but cannot be associated with an application. That is, DataWedge allows manipulation of plug-in settings for Profile0 but it does not allow assignment of a foreground application. This configuration allows DataWedge to send output data to any foreground application other than applications associated with user-defined Profiles when Profile0 is enabled.

Profile0 can be disabled to allow DataWedge to send output data only to those applications that are associated in user-defined Profiles. For example, create a Profile associating a specific application, disable Profile0 and then scan. DataWedge only sends data to the application specified in the user-created Profile. This places an additional layer of security on DataWedge, permitting data to be sent only to specified applications. 

###USAGE SCENARIO
If a launcher application has a list of apps that a user can launch and none has been associated with a DataWedge Profile, the `setDefaultProfile` method can be used to associate a Profile to any app selected by the user (otherwise Profile0 are used). When the user-selected app is launched, DataWedge auto-Profile switching will switch to the newly specified Profile. 

If the launched app already has an associated DataWedge Profile, the `setDefaultProfile` method call is ignored and its previously specified Profile is loaded. When control is returned to the Launcher application, `resetDefaultProfile` can be used to reset the default Profile.

###FUNCTION PROTOTYPE

	:::javascript
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION_SETDEFAULTPROFILE");
	i.putExtra("com.symbol.datawedge.api.EXTRA_PROFILENAME", "<profile name>");


###PARAMETERS
**ACTION**: String "com.symbol.datawedge.api.ACTION_SETDEFAULTPROFILE"

**EXTRA_DATA**: String "com.symbol.datawedge.api.EXTRA_PROFILENAME"

**&lt;profile name**&gt;: The Profile name (a case-sensitive string) to set as the default Profile.

###RETURN VALUES
(None)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions, parameters and failures (e.g. Profile not found or associated with an application).

###EXAMPLE

	:::javascript
	// define action and data strings
	String setDefaultProfile = "com.symbol.datawedge.api.ACTION_SETDEFAULTPROFILE";
	String extraData = "com.symbol.datawedge.api.EXTRA_PROFILENAME";

	public void onResume() {
	        // create the intent
	        Intent i = new Intent();
	        // set the action to perform
	        i.setAction(setDefaultProfile);
	        // add additional info
	        i.putExtra(extraData, "myProfile");
	        // send the intent to DataWedge
	        context.this.sendBroadcast(i);
	}

###COMMENTS
The API command will have no effect if the specified Profile does not exist or if the specified Profile is already associated with an application. DataWedge will automatically switch Profiles when the activity is paused, so it is recommended that this API function be called from the onResume method of the activity.

Zebra recommends that this Profile be created to cater to all applications/activities that would otherwise default to Profile0. This will ensure that these applications/activities will not inadvertently switch scanner-device configurations. For example, let’s say that Profile0 is the default Profile, and it is configured to use the camera as the barcode scanner. If only the Browser application is used to scan barcodes with the camera, DataWedge always scans with the camera and enters the acquired data into the Browser as expected. But if an application is later launched that changes to a Profile using the blockbuster as the barcode scanner, the Browser application--which is set to use the default Profile--are unexpectedly reconfigured to use the blockbuster for scanning the next time it's used. **To ensure that the Browser continues to use the camera as the barcode scanner in this scenario, simply create a Profile that specifies the camera as the barcode scanner and associate it with the Browser**.

------

## ResetDefaultProfile

The `resetDefaultProfile` API function can be used to reset the default Profile back to Profile0.

###FUNCTION PROTOTYPE

	:::javascript
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION_RESETDEFAULTPROFILE");
	i.putExtra("com.symbol.datawedge.api.EXTRA_PROFILENAME");


###PARAMETERS

**ACTION**: String "com.symbol.datawedge.api.ACTION_RESETDEFAULTPROFILE"

**EXTRA_DATA**: String "com.symbol.datawedge.api.EXTRA_PROFILENAME"

###RETURN VALUES
(None)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions, parameters and failures (e.g. Profile not found or associated with an application).

###EXAMPLE

	// define action string
	String resetDefaultProfile = "com.symbol.datawedge.api.ACTION_RESETDEFAULTPROFILE";

	public void onResume() {
	        // create the intent
	        Intent i = new Intent();
	        // set the action to perform
	        i.setAction(resetDefaultProfile);
	        context.this.sendBroadcast(i);
	}

###COMMENTS
(None)

------

## SwitchToProfile

The `SwitchToProfile` API action can be used to switch to the specified Profile, **as long as that Profile is not already associated with another application**.

###PROFILES RECAP
DataWedge is based on Profiles and plug-ins. A Profile contains information on how DataWedge should behave with different applications.

Profile information consists of:

* Associated application
* Input plug-in configurations
* Output plug-in configurations
* Process plug-in configurations

DataWedge includes a default Profile, Profile0, that is created automatically the first time DataWedge runs.

Using Profiles, each application can have a specific DataWedge configuration. For example, each user application can have a Profile which outputs scanned data in the required format when that application comes to the foreground. DataWedge can be configured to process the same set of captured data differently based on the requirements of each application.

###NOTE
A single Profile may be associated with one or many activities/apps, however, given an activity, only one Profile may be associated with it.

###USAGE SCENARIO
Let’s say an application has two activities. ActivityA only requires EAN13 barcodes to be scanned. ActivityB only requires MSR card data. ProfileB is configured to only scan EAN13 barcodes and is left unassociated. ProfileM is configured to only accept MSR input and is left unassociated. When ActivityA launches it uses `SwitchToProfile` to activate ProfileB. Similarly, when ActivityB launches it uses `SwitchToProfile` to activate ProfileM.

If another activity/app comes to the foreground, DataWedge auto Profile switching will set the DataWedge Profile accordingly either to the default Profile or to an associated Profile.

When ActivityA (or ActivityB) comes back to the foreground it will use `SwitchToProfile` to reset the Profile back to ProfileB (or ProfileM).

###FUNCTION PROTOTYPE

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION_SWITCHTOPROFILE");
	i.putExtra("com.symbol.datawedge.api.EXTRA_PROFILENAME", "<profile name>");

###PARAMETERS
**ACTION**: String "com.symbol.datawedge.api.ACTION_SWITCHTOPROFILE"

**EXTRA_DATA**: String "com.symbol.datawedge.api.EXTRA_PROFILENAME"

**&lt;profile name**&gt;: The Profile name to switch to as a string (case-sensitive).

###RETURN VALUES
(None)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions, parameters and failures (e.g. Profile not found or associated with an application).

###EXAMPLE
	// define action and data strings
	String switchToProfile = "com.symbol.datawedge.api.ACTION_SWITCHTOPROFILE";
	String extraData = "com.symbol.datawedge.api.EXTRA_PROFILENAME";

	public void onResume() {
	        super.onResume();
	        // create the intent
	        Intent i = new Intent();
	        // set the action to perform
	        i.setAction(switchToProfile);
	        // add additional info
	        i.putExtra(extraData, "myProfile");
	        // send the intent to DataWedge
	        context.this.sendBroadcast(i);
	}

###COMMENTS
This API function will have no effect if the specified Profile does not exist or is already associated with an application.

DataWedge has a one-to-one relationship between Profiles and activities; a Profile can be associated only with a single activity. When a Profile is first created, it's not associated with any application, and will not be activated until associated. This makes it possible to create multiple unassociated Profiles.

This API function activates such Profiles.

For example, let's say that ProfileA is unassociated and ProfileB is associated with activity B. If activity A is launched and uses `SwitchToProfile` function to switch to ProfileA, then ProfileA will be active whenever activity A is in the foreground. When activity B comes to the foreground, DataWedge will automatically switch to ProfileB. 

When activity A returns to the foreground, the app must use `SwitchToProfile` again to switch back to ProfileA. This would be done in the `onResume` method of activity A.

###Notes
* Because DataWedge will automatically switch Profile when the activity is paused, Zebra recommends that this API function be called from the onResume method of the activity.
* After switching to a Profile, this unassociated Profile does not get assigned to the application/activity and is available to be used in the future with a different app/activity.
* For backward compatibility, DataWedge’s automatic Profile switching is not affected by the above API commands. This why the commands work only with unassociated Profiles and apps.

DataWedge auto Profile switching works as follows: 

**Every second…**
* Sets **newProfileId** to the associated Profile ID of the current foreground activity. 
* If no associated Profile is found, sets **newProfileId** to the associated Profile ID of the current foreground app. 
* If no associated Profile is found, sets **newProfileId** to the current default Profile (which  MAY NOT be Profile0). 
* Checks the **newProfileId** against the **currentProfileId**. If they are different: 
	* deactivates current Profile
	* activates new Profile (**newProfileId**)
	* sets **currentProfileId** = **newProfileId**

------

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

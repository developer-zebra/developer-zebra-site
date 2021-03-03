---
title: Get Config  
layout: guide.html
product: DataWedge
productversion: '8.2'
---

## GET_CONFIG

Gets the `PARAM_LIST` settings in the specified Profile, returned as a set of value pairs or a Plug-in config bundle. 

### Version History
* **Introduced in DataWedge 6.5**
* **DataWedge 6.8 -** Added support for ADF settings
* **DataWedge 6.9/7.0 -** Added support for Voice Input and Global Scanner Configuration
* **DataWedge 7.1 -** Added support for configurations: full profile, Data Capture Plus (DCP), Magnetic Stripe Reader (MSR), Internet Protocol (IP), Simulscan 
* **DataWedge 7.3.22 -** Added support for new RFID Input feature.
* **DataWedge 7.4.44 -** New Enterprise Keyboard Configuration feature

### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.GET_CONFIG", "<profile name>");

### Parameters

**ACTION** [string]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [string]: "com.symbol.datawedge.api.GET_CONFIG"

**EXTRA VALUE** [bundle]: "&lt;PROFILE_NAME&gt;", "&lt;PLUGIN_CONFIG&gt;"

* `PLUGIN_CONFIG` [bundle] - 
 * `PLUGIN_NAME` [string] - single plug-in name (i.e. "barcode") or ArrayList of plugin names:
	* `PROCESS_PLUGIN_NAME` [list of bundles] - For example:
	 * `PLUGIN_NAME` - "ADF", "BDF"
	 * `OUTPUT_PLUGIN_NAME` - "KEYSTROKE"
	* ...
	 * `PLUGIN_NAME` - "BDF"	
	 * `OUTPUT_PLUGIN_NAME` - "INTENT"

#### Notes: 
* The PROCESS_PLUGIN_NAME parameter must be used to query process Plug-ins (ADF and BDF); the default GET_CONFIG intent cannot retrieve information about process Plug-ins. 
* Non-existent values will be returned as empty extras. 

**SCANNER_IDENTIFIER**: Present in each scanner info bundle for each scanner supported in the device. Index and identifier parameters are both supported in DataWedge 6.6 and higher; the scanner identifier value takes precedence if an index also is referenced in the code.  

* `scanner_selection_by_identifier` [string]- takes a value from the list of Scanner Identifiers below:
	* **AUTO** - Automatic scanner selection
	* **INTERNAL_IMAGER** - Built-in imager scanner
	* **INTERNAL_LASER** - Built-in laser scanner
	* **INTERNAL_CAMERA** - Built-in camera scanner
	* **SERIAL_SSI** - Pluggable Z-back scanner for ET50/ET55 
	* **BLUETOOTH_SSI** - RS507 Bluetooth scanner
	* **BLUETOOTH_RS6000** - RS6000 Bluetooth scanner
	* **BLUETOOTH_DS3678** - DS3678 Bluetooth scanner
	* **PLUGABLE_SSI** - Serial SSI scanner RS429 (for use with WT6000)
	* **PLUGABLE_SSI_RS5000** - Serial SSI scanner RS5000 (for use with WT6000)
	* **USB_SSI_DS3608** - DS3608 pluggable USB scanner


### Return Values
Returns a nested bundle with the Profile name, status and a Profile config bundle containing the `PARAM_LIST` bundle.  

**EXTRA NAME**: "com.symbol.datawedge.api.GET_CONFIG_RESULT" 

**BUNDLE**: &lt;mainbundle&gt; (see parameters below)

### Main Bundle

The main Get_Result_Config bundle contains the following properties:

**PROFILE_NAME** [string]: Name of the Profile being queried

**PROFILE_ENABLED** [string]: True/False

**PLUGIN_CONFIG** [bundle]: Nested bundle with the following properties:
* **PLUGIN_NAME** [string]: Name of the Plug-in being reported (i.e. Barcode)  
* **PARAM_LIST** [bundle]: Nested List of name-value pairs. For example:
  * current-device-index, 0
  * Aztec, True
  * Canadian_Postal, False
  * Code11, Null (resets to default)
  * Picklist, HARDWARE
  * AimType, PRESS_AND_RELEASE
  * ... (etc.)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

## Example Code	

<!-- 
	// SENDING THE INTENT
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.GET_CONFIG", "");
		this.sendBroadcast(i);

	// RECEIVING THE RESULT
		private BroadcastReceiver myBroadcastReceiver = new BroadcastReceiver(){

			@Override
			public void onReceive(Context context, Intent intent){

				Bundle extras = getIntent().getExtras();
				if (intent.hasExtra("com.symbol.datawedge.api.GET_CONFIG")){
					String[] profilesList = intent.getStringArrayExtra("com.symbol.datawedge.api.GET_CONFIG_RESULT")

 -->

### Send GET_CONFIG intent

	Bundle bMain = new Bundle();
	bMain.putString("PROFILE_NAME", "DWDemo");
	Bundle bConfig = new Bundle();
	ArrayList<Bundle> pluginName = new ArrayList<>();

	Bundle pluginInternal = new Bundle();
	pluginInternal.putString("PLUGIN_NAME", "ADF");//can put a list "ADF,BDF"
	pluginInternal.putString("OUTPUT_PLUGIN_NAME","KEYSTROKE");
	pluginName.add(pluginInternal);
	bConfig.putParcelableArrayList("PROCESS_PLUGIN_NAME", pluginName);
	bMain.putBundle("PLUGIN_CONFIG", bConfig);

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.GET_CONFIG", bMain);
	this.sendBroadcast(i);

### Receive the GET_CONFIG result

	private BroadcastReceiver myBroadcastReceiver = new BroadcastReceiver() {
		@Override
		public void onReceive(Context context, Intent intent) {

        Bundle extras = intent.getExtras();
        Set<String> keys = extras.keySet();
        for(String key: keys){
            Log.d(TAG,"key:"+key);
        }

        if (extras.containsKey("com.symbol.datawedge.api.RESULT_GET_CONFIG")) {
            Bundle bundle = intent.getBundleExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG");
            if(bundle != null && !bundle.isEmpty()){
                String profileName = bundle.getString("PROFILE_NAME");
                String profileEnabled = bundle.getString("PROFILE_ENABLED");
                ArrayList<Bundle> configBundleList = bundle.getParcelableArrayList("PLUGIN_CONFIG");
                if(configBundleList!=null) {
                    for (Bundle configBundle : configBundleList) {
                        String pluginName = configBundle.getString("PLUGIN_NAME");
                        Log.d(TAG, "\n Plugin Name :" + pluginName);

	if (pluginName!=null && pluginName.equalsIgnoreCase("ADF")) {
	            String pluginEnabled = configBundle.getString("adf_enabled");
	            Log.d(TAG, " Plugin Enabled :" + pluginEnabled);
	            if(configBundle.containsKey("PARAM_LIST")){
	                Object object = configBundle.get("PARAM_LIST");
	                if(object!=null && object instanceof ArrayList){
	                    ArrayList<Bundle> paramArrayList = (ArrayList)object;
	                    for(Bundle rule : paramArrayList){
	                        String name = rule.getString("name");
	                        String enabled = rule.getString("enabled");
	                        String priority = rule.getString("priority");
	                        String alldevices = rule.getString("alldevices");
	                        String string = rule.getString("string");
	                        String stringPos = rule.getString("string_pos");
	                        String stringLen = rule.getString("string_len");

                        Log.d(TAG, "Rule ->");
                        Log.d(TAG, " name :" + name);
                        Log.d(TAG, " enabled :" + enabled);
                        Log.d(TAG, " priority :" + priority);
                        Log.d(TAG, " alldevices :" + alldevices);
                        Log.d(TAG, " string :" + string);
                        Log.d(TAG, " stringPos :" + stringPos);
                        Log.d(TAG, " stringLen :" + stringLen);
                        ArrayList<Bundle> actions = rule.getParcelableArrayList("ACTIONS");
                        if(actions!=null){
                            Log.d(TAG,"\n  Actions->");
                            for(Bundle action: actions){
                                String type = action.getString("type");
                                Object param_1 = action.get("action_param_1");
                                Object param_2 = action.get("action_param_2");
                                Object param_3 = action.get("action_param_3");

                                Log.d(TAG,"  type:"+type);
                                if(param_1!=null && param_1 instanceof String){
                                    Log.d(TAG,"  param_1:"+param_1);
                                }
                                if(param_2!=null && param_2 instanceof String){
                                    Log.d(TAG,"  param_2:"+param_2);
                                }
                                if(param_3!=null && param_3 instanceof String){
                                    Log.d(TAG,"  param_3:"+param_3);
                                }

                            }
                        }
                        ArrayList<Bundle> devices = rule.getParcelableArrayList("DEVICES");
                        if(devices!=null){
                            Log.d(TAG,"\n  Devices->");
                            for(Bundle device: devices){
                                String type = device.getString("device_id");
                                Object param_1 = device.get("enabled");
                                Object param_2 = device.get("alldecoders");
                                Object param_3 = device.get("all_label_ids");

                                Log.d(TAG,"  Device ID:"+type);
                                if(param_1!=null && param_1 instanceof String){
                                    Log.d(TAG,"      Enabled:"+param_1);
                                }
                                if(param_2!=null && param_2 instanceof String){
                                    Log.d(TAG,"  All decoders:"+param_2);
                                }
                                if(param_3!=null && param_3 instanceof String){
                                    Log.d(TAG,"  All labelids:"+param_3);
                                }

                            }
                        }
                        ArrayList<Bundle> decoders = rule.getParcelableArrayList("DECODERS");
                        if(decoders!=null){
                            Log.d(TAG,"\n  Decoders->");
                            for(Bundle decoder: decoders){
                                String deviceID = decoder.getString("device_id");
                                String decoderEnabled = decoder.getString("enabled");
                                String decoderID = decoder.getString("decoder");

                                    Log.d(TAG,"        Device ID:"+deviceID);
                                    Log.d(TAG,"  Decoder Enabled:"+decoderEnabled);
                                    Log.d(TAG,"       Decoder ID:"+decoderID);
                            }
                        }

                        ArrayList<Bundle> labelIDs = rule.getParcelableArrayList("LABEL_IDS");
                        if(labelIDs!=null){
                            Log.d(TAG,"\n  LabelIDs->");
                            for(Bundle labelID: labelIDs){
                                String deviceID = labelID.getString("device_id");
                                String lblEnabled = labelID.getString("enabled");
                                String lblID = labelID.getString("label_id");

                                    Log.d(TAG,"      Device ID:"+deviceID);
                                    Log.d(TAG,"  Label Enabled:"+lblEnabled);
                                    Log.d(TAG,"       Label ID:"+lblID);
                            }
                        }
                    }
                }
            }
        }
    }


### Get Plug-ins

	// SENDING THE INTENT
		Bundle bMain = new Bundle();
		bMain.putString("PROFILE_NAME", "Profile0 (default)");
		Bundle bConfig = new Bundle();
		ArrayList<String> pluginName = new ArrayList<>();
		pluginName.add("BARCODE");

	// pluginName.add("INTENT"); to add more plugins
		
		bConfig.putStringArrayList("PLUGIN_NAME", pluginName);
		bMain.putBundle("PLUGIN_CONFIG", bConfig);

		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.GET_CONFIG", bMain);
		this.sendBroadcast(i);

	// RECEIVING THE RESULT
		private BroadcastReceiver mBroadcastReceiver = new BroadcastReceiver() {
    	@Override
    	public void onReceive(Context context, Intent intent) {
        	if (intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG")) {
            Bundle result = intent.getBundleExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG");
            Set<String> keys = result.keySet();
            for (String key : keys) {
                if (!key.equalsIgnoreCase("PLUGIN_CONFIG")) {
                    Log.d("DWScannerConfig", "DWGetConfig::level-1: " + key + " : " + result.getString(key));
                } else {
                    ArrayList<Bundle> bundleArrayList  = result.getParcelableArrayList("PLUGIN_CONFIG");
                    for(Bundle configBundle:bundleArrayList){
                        Set<String> keys2 = configBundle.keySet();
                        for (String key2 : keys2) {
                            if (!key2.equalsIgnoreCase("PARAM_LIST")) {
                            } else {
                                Bundle params = configBundle.getBundle("PARAM_LIST");
                                Set<String> keys3 = params.keySet();
                                for (String key3 : keys3) {
                                //TODO consume the params
                                }
                            }
                        }
                    }
                }
            }
        }
    }
	};

### Get app associations

	// SENDING THE INTENT
		selectedProfileName = "DWDemo";
		Bundle bConfig = new Bundle();
		bConfig.putString("PROFILE_NAME", selectedProfileName);
		bConfig.putString("APP_LIST", "");//empty

		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.GET_CONFIG", bConfig);
		this.sendBroadcast(i);

	// RECEIVING THE RESULT
		private BroadcastReceiver broadcastReceiver = new BroadcastReceiver() {
		    @Override
		    public void onReceive(Context context, Intent intent) {
		        String action = intent.getAction();
		        Log.d(TAG, "Action: " + action);

		        if(action.equals("com.symbol.datawedge.api.RESULT_ACTION")){

		            Bundle b = intent.getExtras();

		            // getConfig result
		            if(intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG")) {

		                Bundle res = b.getBundle("com.symbol.datawedge.api.RESULT_GET_CONFIG");
		                if(!res.isEmpty()) {
		                    String profileName = res.getString("PROFILE_NAME");
		                    Log.d(TAG, "GET_CONFIG profileName: " + profileName);
		                    ArrayList<Bundle> appList = res.getParcelableArrayList("APP_LIST");
		                    if(appList == null){
		                        Log.d(TAG,"Profile information is not found for "+profileName);
		                    }else if(appList.size() == 0){
		                        Log.d(TAG,"Profile "+profileName+" has no associated information");
		                    }else {
		                        for(Bundle b1 :appList ){
		                            Log.d(TAG,b1.getString("PACKAGE_NAME")+":"+b1.getStringArrayList("ACTIVITY_LIST"));
		                        }
		                    }
		                }
		            }
		        }
		    }
		};

### Get scanner status

	// SENDING THE INTENT
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.GET_SCANNER_STATUS","STANDARD");
		i.putExtra("SEND_RESULT","LAST_RESULT");
		// i.putExtra("SEND_RESULT", "true");  // For versions prior to DataWedge 7.1
		i.putExtra("com.symbol.datawedge.api.RESULT_CATEGORY","android.intent.category.DEFAULT");
		this.sendBroadcast(i);

	// RECEIVING THE RESULT
		private BroadcastReceiver mBroadcastReceiver = new BroadcastReceiver(){
		    @Override
		    public void onReceive(Context context, Intent intent){

		        if (intent != null) {
		            String command = intent.getStringExtra("COMMAND");
		            String commandidentifier = intent.getStringExtra("COMMAND_IDENTIFIER");
		            String result = intent.getStringExtra("RESULT");
		            Bundle bundle = new Bundle();
		            String resultInfo = "";
		            if (intent.hasExtra("RESULT_INFO")) {
		                bundle = intent.getBundleExtra("RESULT_INFO");
		                Set<String> keys = bundle.keySet();
		                for (String key : keys) {
		                    resultInfo += key + ": " + bundle.getString(key) + "\n";
		                }
		            }
		            String text = "Command: " + command + "\n" +
		                    "Result: " + result + "\n" +
		                    "Result Info: \n" + resultInfo + "\n" +
		                    "CID:" + commandidentifier;
		            
		            Log.d("TAG", "#DataWedgeTestApp# \nCommand: " + command + "\nResult: " + result + "\nReason:\n" + resultInfo);
		            Toast.makeText(context, text, Toast.LENGTH_LONG).show();
		        }
		    };
		};


### Get scanner details

	//Bundle extras = intent.getExtras();

	if (intent.hasExtra(RESULT_ACTION_EXTRA_GET_CONFIG)) {
	    Bundle results = intent.getBundleExtra(RESULT_ACTION_EXTRA_GET_CONFIG);
	    if(results!=null){
	        if(results.containsKey(BUNDLE_EXTRA_PLUGIN_CONFIG)){
	            ArrayList<Bundle> list = (ArrayList<Bundle>)results.get(BUNDLE_EXTRA_PLUGIN_CONFIG);
	            Bundle x = new Bundle();

	            if(list!=null){
	                for(Bundle it : list){
	                    if(it.containsKey(BUNDLE_EXTRA_PARAM_LIST)){
	                        Bundle b =(Bundle)it.get(BUNDLE_EXTRA_PARAM_LIST);
	                        String sEnabled = b.getString("scanner_input_enabled");
	                        String sSelection = b.getString("scanner_selection");
	                        String sSelectionId = b.getString("scanner_selection_by_identifier");
	                        String sType = b.getString("scanner_type");

	                        Log.d(TAG,"scanner_selection : "+sSelection);
	                        Log.d(TAG,"scanner_selection_by_identifier  : "+sSelectionId);
	                    }
	                }
	            }
	        }
	    }
	}

### Get supported parameters

Retrieves the supported parameters of the device from the specified profile. Parameters are retrieved based on the plugin specified, in this example, barcode plugin. The parameter result returns "true" if supported by the device, otherwise "false" is returned.

    public void getScannerConfig()
    {
        Bundle bMain = new Bundle();
        bMain.putString("PROFILE_NAME", "Profile0 (default)");
        Bundle bConfig = new Bundle();
        ArrayList<String> pluginName = new ArrayList<>();
        pluginName.add("BARCODE");

        bConfig.putStringArrayList("PLUGIN_NAME", pluginName);
        bMain.putBundle("PLUGIN_CONFIG", bConfig);
        Intent i = new Intent();
        i.setPackage("com.symbol.datawedge");
        i.setAction("com.symbol.datawedge.api.ACTION");
        i.putExtra("com.symbol.datawedge.api.GET_CONFIG", bMain);
        this.sendBroadcast(i);
    }

    private BroadcastReceiver broadcastReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            String action = intent.getAction();
            String strFinalResult = "";

            if (action.equals("com.symbol.datawedge.api.RESULT_ACTION")) {
                if (intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG")) {

                    Bundle resultGetConfig = intent.getBundleExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG");
                    Set<String> keys = resultGetConfig.keySet();
                    String profileName = resultGetConfig.getString("PROFILE_NAME");
                    for (String key : keys) {
                        if (key.equalsIgnoreCase("PLUGIN_CONFIG")) {
                            ArrayList<Bundle> bundleArrayList = resultGetConfig.getParcelableArrayList("PLUGIN_CONFIG");
                            for (Bundle configBundle : bundleArrayList) {
                                if(configBundle.getString("PLUGIN_NAME") != null) {
                                    strFinalResult += "\nPlugin " + configBundle.getString("PLUGIN_NAME") + " Settings\n";
                                }
                                for (String configBundleKey : configBundle.keySet()) {
                                    if (configBundleKey.equalsIgnoreCase("PARAM_LIST")) {
                                        Bundle paramBundle1 = configBundle.getBundle("PARAM_LIST");
                                        if (paramBundle1 != null) {
                                            for (String paramKey : paramBundle1.keySet()) {
                                                strFinalResult += "\n\t" + paramKey + ": " + paramBundle1.get(paramKey);
                                            }
                                        }
                                    }
                                }
                                strFinalResult += "\n";

                            }
                        }
                    }
                    final String status = "Get config info received\n" + strFinalResult;
                    Log.d("TAG", "#IntentApp#\n\n" + status);
                }
            }
        }
    };

Sample output from code:

    Get config info received
    
    Plugin BARCODE Settings
    
    	decoder_code128_enable_ean128: true
    	decoder_code39_full_ascii: false
    	decoder_i2of5_check_digit: 0
    	decoder_i2of5_security_level: 1
    	decoder_code128_check_isbt_table: false
    	linear_security_level: 1
    	upcean_retry_count: 10
    	upcean_bookland_format: 0
    	ocr_check_digit_multiplier: 121212121212
    	decoder_msi_check_digit: 0
    	decoder_grid_matrix_mirror: 0
    	decoder_msi_reduced_quiet_zone: false
    	decoder_msi_check_digit_scheme: 0
    	decoder_d2of5_redundancy: true
    	beam_timer: 5000
    	code128_enable_marginless_decode: false
    	trigger_wakeup_scan: false
    	instant_reporting_enable: false
    	decoder_code128_redundancy: false
    	decoder_dotcode_mirror: 2
    	decoder_signature: false
    	databar_to_upc_ean: false
    	decoder_grid_matrix: false
    	decoder_codabar_notis_editing: false
    	decoder_australian_postal: false
    	decoder_upca_preamble: 1
    	scanner_selection: auto
    	upcean_ean_zero_extend: false
    	ocr_lines: 1
    	decoder_code93_length1: 0
    	decoder_code93_length2: 55
    	decoder_msi_length1: 4
    	decoder_msi_length2: 55
    	decoder_uspostnet: false
    	doc_capture_template: None
    	enable_udi_iccbba: true
    	decoder_code128_enable_plain: true
    	multi_barcode_count: 5
    	inverse_ocr: 0
    	decoder_code11_verify_check_digit: 1
    	ocr_b_variant: 0
    	ocr_quiet_zone: 50
    	decoder_code128_isbt128_concat_mode: 0
    	decoder_ean8: true
    	decoder_upca: true
    	auto_switch_to_default_on_event: 0
    	report_decoded_barcodes: false
    	decoder_matrix_2of5_verify_check_digit: true
    	inverse_1d_mode: 0
    	decoder_signature_bpp: 2
    	decoder_codabar_length1: 6
    	decoder_codabar_length2: 55
    	aim_mode: on
    	aim_type: 0
    	decoder_i20f5_enable_febraban: false
    	decoder_code93_redundancy: false
    	decoder_hanxin_inverse: 0
    	decoder_signature_width: 400
    	decoder_aztec: true
    	decoder_d2of5: false
    	decoder_ean13: true
    	decoder_i2of5: false
    	decoder_ocr_a: false
    	decoder_ocr_b: false
    	decoder_tlc39: false
    	decoder_upce0: true
    	decoder_upce1: false
    	decoder_upca_report_check_digit: true
    	auto_charset_failure_option: UTF-8
    	picklist: 0
    	enable_udi_hibcc: true
    	SCANNER_STATUS: CONNECTED
    	decoder_trioptic39: false
    	decoder_uspostnet_report_check_digit: false
    	decoder_upce0_convert_to_upca: false
    	decoder_dutch_postal_3S: false
    	decoder_mailmark: true
    	decoder_gs1_datamatrix: false
    	decoder_code39_security_level: 1
    	decoder_code11_length1: 4
    	decoder_code11_length2: 55
    	decoder_i2of5_length1: 6
    	decoder_i2of5_length2: 55
    	decoder_usplanet: false
    	decoder_code11_report_check_digit: false
    	volume_slider_type: 3
    	decoder_gs1_lim_security_level: 2
    	decoder_uk_postal: false
    	upcean_security_level: 1
    	code39_enable_marginless_decode: false
    	ocr_subset: !"#$%()*+,-./0123456789<>ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz\^|
    	barcode_trigger_mode: 1
    	decoder_uk_postal_report_check_digit: false
    	decoder_codabar_redundancy: true
    	1d_marginless_decode_effort_level: 1
    	decoder_dutch_postal: false
    	decoder_i2of5_redundancy: true
    	decoder_matrix_2of5_report_check_digit: true
    	low_power_timeout: 250
    	aim_timer: 500
    	lcd_mode: 0
    	code128_ignore_fnc4: false
    	decoder_composite_c: false
    	decoder_code128_length1: 0
    	decoder_code128_length2: 55
    	decode_screen_time: 1000
    	decoder_maxicode: true
    	good_decode_led_timer: 75
    	poor_quality_bcdecode_effort_level: 0
    	decoder_grid_matrix_inverse: 0
    	decoder_gs1_qrcode: false
    	upcean_supplemental2: true
    	upcean_supplemental5: true
    	decode_haptic_feedback: false
    	ocr_check_digit_modulus: 1
    	upcean_bookland: false
    	different_barcode_timeout: 500
    	ocr_orientation: 0
    	decoder_codabar_clsi_editing: false
    	decoder_code39_verify_check_digit: false
    	decoder_matrix_2of5_redundancy: false
    	decoder_us4state_fics: false
    	decode_audio_feedback_uri: content://media/internal/audio/media/186
    	decoder_matrix_2of5_length1: 10
    	decoder_matrix_2of5_length2: 0
    	decoder_gs1_databar: true
    	decoder_chinese_2of5: false
    	decoder_matrix_2of5: false
    	same_barcode_timeout: 500
    	decoder_us_currency: false
    	illumination_mode: torch
    	decoder_code39_convert_to_code32: false
    	decoder_codabar: true
    	decoder_code128: true
    	decoder_finnish_pos


### Get inter-character settings

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

	//Get configuration 
	public void getKeyStrokeConfiguration(View arg){
	    Bundle bMain = new Bundle();
	    bMain.putString("PROFILE_NAME","Profile0 (default)");

	    Bundle bConfig = new Bundle();
	    bConfig.putString("PLUGIN_NAME","KEYSTROKE");

	    bMain.putBundle("PLUGIN_CONFIG", bConfig);
	    Intent i = new Intent();
	    i.setAction("com.symbol.datawedge.api.ACTION");
	    i.putExtra("com.symbol.datawedge.api.GET_CONFIG", bMain);
	    this.sendBroadcast(i);
	}

	//broadcast receiver
	private BroadcastReceiver broadcastReceiver = new BroadcastReceiver() {
	    @Override
	    public void onReceive(Context context, Intent intent) {
	        String action = intent.getAction();
	        Log.d(TAG, "#DataWedge-APP# Action: " + action);
		
	 
		//result of get config
	            if(intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG")){
	                Bundle bundle = intent.getBundleExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG");
	                if(bundle != null && !bundle.isEmpty()){
	                    String profileName = bundle.getString("PROFILE_NAME");
	                    String profileEnabled = bundle.getString("PROFILE_ENABLED");
	                    ArrayList<Bundle> configBundleList = bundle.getParcelableArrayList("PLUGIN_CONFIG");
	                    if(configBundleList!=null) {
	                        for (Bundle configBundle : configBundleList) {
	                            if (configBundle.getString("PLUGIN_NAME").equalsIgnoreCase("KEYSTROKE")) {
	                                Bundle paramBundle = configBundle.getBundle("PARAM_LIST");
	                                String keyStrokePluginEnabled = paramBundle.getString("keystroke_output_enabled");
	                                String mExtendedAsciiDelay = paramBundle.getString("keystroke_delay_extended_ascii");
	                                String mCtrlDelay = paramBundle.getString("keystroke_delay_control_chars");
	                                String actionKeyChar = paramBundle.getString("keystroke_action_char");

	                                Log.d(TAG, " ProfileName :" + profileName);
	                                Log.d(TAG, " Profile enabled :" + profileEnabled);
	                                Log.d(TAG, " Plugin enabled :" + keyStrokePluginEnabled);
	                                Log.d(TAG, " Ctrl Char Delay :" + mCtrlDelay);
	                                Log.d(TAG, " Character Delay :" + mExtendedAsciiDelay);
	                                Log.d(TAG, " ActionKey Char :" + actionKeyChar);
	                            }
	                        }
	                    }
	                }
	            }//end get config
	            
	    }//end onRecieve
	};

### Get TOKEN processing

	public void getConfig() {
		Bundle bMain = new Bundle();
		bMain.putString("PROFILE_NAME", "Profile007");
		Bundle bConfig = new Bundle();


		Bundle processPlugin_TOKEN_IP = new Bundle();
		processPlugin_TOKEN_IP.putString("PLUGIN_NAME", "TOKEN");
		processPlugin_TOKEN_IP.putString("OUTPUT_PLUGIN_NAME", "KEYSTROKE"); // Tokens are supported only in KEYSTROKE and IP plugins only, for others empty bundle will be returned.

		bConfig.putBundle("PROCESS_PLUGIN_NAME", processPlugin_TOKEN_IP);

		bMain.putBundle("PLUGIN_CONFIG", bConfig);
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.GET_CONFIG", bMain);
		this.sendBroadcast(i);
	}

	private BroadcastReceiver broadcastReceiver = new BroadcastReceiver() {
		@Override
		public void onReceive(Context context, Intent intent) {
			String action = intent.getAction();

			String strFinalResult = "";
			String command = intent.getStringExtra("COMMAND");
			String commandidentifier = intent.getStringExtra("COMMAND_IDENTIFIER");
			String result = intent.getStringExtra("RESULT");
			Bundle bundle = new Bundle();
			String resultInfo = "";

			if (action.equals("com.symbol.datawedge.api.RESULT_ACTION")) {

				if (intent.hasExtra("RESULT_INFO")) {
					bundle = intent.getBundleExtra("RESULT_INFO");
					Set<String> keys = bundle.keySet();
					for (String key : keys) {
						String val = bundle.getString(key);
						if (val == null) {

							if (bundle.getStringArray(key) != null) {
								val = "";
								for (String s : bundle.getStringArray(key)) {
									val += "" + s + "\n";
								}
							}
						}

						resultInfo += key + ": " + val + "\n";
					}

				} else if (intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG")) {

					Bundle resultGetConfig = intent.getBundleExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG");
					Set<String> keys = resultGetConfig.keySet();

					for (String key : keys) {
						if (key.equalsIgnoreCase("PLUGIN_CONFIG")) {
							ArrayList<Bundle> bundleArrayList = resultGetConfig.getParcelableArrayList("PLUGIN_CONFIG");
							for (Bundle configBundle : bundleArrayList) {

								String pluginName = configBundle.getString("PLUGIN_NAME");

								strFinalResult += "\nPlugin " + pluginName + " Settings\n";

								if (pluginName != null && pluginName.equalsIgnoreCase("TOKEN")) {
									strFinalResult += "\nPlugin " + configBundle.getString("OUTPUT_PLUGIN_NAME") + " TOKEN Settings\n";
									Set<String> keys2 = configBundle.keySet();
									for (String key2 : keys2) {
										if (!key2.equalsIgnoreCase("PARAM_LIST")) {
										} else {
											Bundle params = configBundle.getBundle("PARAM_LIST");
											Set<String> keys3 = params.keySet();
											for (String key3 : keys3) {

												if (key3.equalsIgnoreCase("token_order")) {
													strFinalResult += "\n" + key3 + ": token_order\n";

													ArrayList<Bundle> tokenOrderList = params.getParcelableArrayList("token_order");
													int order = 0;
													for (Bundle b : tokenOrderList) {
														strFinalResult += "\t" + order + ". " + b.getString("name") + ": " + b.getString("enabled") + "\n";
														order++;
													}
												} else {
													strFinalResult += "\n" + key3 + ": " + params.get(key3);
												}
											}
										}
									}
									strFinalResult += "\n";
								}
							}
						}
					}

					Log.d("TAG", "#IntentApp#\n\nGet config info received\n" + strFinalResult);
				}

				if (command != null) {
					if (command.equalsIgnoreCase("com.symbol.datawedge.api.SET_CONFIG")) {
						Log.d("TAG", "#IntentApp# \n\nSetConfig status received: " + result + "\nResultInfo: " + resultInfo);
					}
				}
			}
		}
	};

### GET RFID input configuration

	private void getIntentConfigRFID() { 
	        Bundle bMain = new Bundle(); 
	        bMain.putString("PROFILE_NAME", "SampleConfigApi"); 
	        Bundle bConfig = new Bundle(); 
	        ArrayList<String> pluginName = new ArrayList<>(); 
	        pluginName.add("RFID"); 
	 
	        bConfig.putStringArrayList("PLUGIN_NAME", pluginName); 
	        bMain.putBundle("PLUGIN_CONFIG", bConfig); 
	 
	        Intent i = new Intent(); 
	        i.setAction("com.symbol.datawedge.api.ACTION"); 
	        i.putExtra("com.symbol.datawedge.api.GET_CONFIG", bMain); 
	        this.sendBroadcast(i); 
	    } 
	 
	// BroadcastReceiver to handle incoming data 
	 
	    private BroadcastReceiver reciveResulyBroadcast = new BroadcastReceiver(){ 
	 
	        @Override 
	        public void onReceive(Context context, Intent intent) { 
	            if (intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG")) { 
	                Bundle result = intent.getBundleExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG"); 
	                Set<String> keys = result.keySet(); 
	                for (String key : keys) { ; 
	                    if (!key.equalsIgnoreCase("PLUGIN_CONFIG")) { 
	                        Log.d("DWScannerConfig", "DWGetConfig::level-1: " + key + " : " + result.getString(key)); 
	                    } else { 
	                        ArrayList<Bundle> bundleArrayList = result.getParcelableArrayList("PLUGIN_CONFIG"); 
	                        for (Bundle configBundle : bundleArrayList) { 
	                            Set<String> keys2 = configBundle.keySet(); 
	                            for (String key2 : keys2) { 
	                                if (!key2.equalsIgnoreCase("PARAM_LIST")) { 
	                                } else { 
	                                    Bundle params = configBundle.getBundle("PARAM_LIST"); 
	                                    Set<String> keys3 = params.keySet(); 
	 
	                                    String configs =intentData.getText()+"\n\n\n" +configBundle.getString("PLUGIN_NAME")+"\n"; 
	                                    for (String key3 : keys3) { 
	                                        configs+= key3+"="+params.getString(key3)+"\n"; 
	                                    } 
	 
	                                    intentData.setText(configs); 
	                                } 
	                            } 
	                        } 
	                    } 
	                } 
	            } 
	        } 
		}

### Get SERIAL input configuration

	final String RESULT_ACTION = "com.symbol.datawedge.api.RESULT_ACTION";
	final static String DEFAULT_CATEGORY = "android.intent.category.DEFAULT";

	TextView status;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
	    super.onCreate(savedInstanceState);
	    IntentFilter filter = new IntentFilter();
	    filter.addAction(RESULT_ACTION);
	    filter.addCategory(DEFAULT_CATEGORY);
	    registerReceiver(dwResultReciever, filter);
	}
	 
	public void btnGetOnClick(View view) {
	    status.setText("");

	    //MAIN BUNDLE PROPERTIES
	    Bundle bMain = new Bundle();
	    bMain.putString("PROFILE_NAME", "Profile0 (default)");
	    //bMain.putString("PROFILE_NAME", "DWDemo");

	    //PLUGIN_CONFIG BUNDLE PROPERTIES
	    Bundle bConfig = new Bundle();

	    ArrayList<String> pluginName = new ArrayList<>();
	    pluginName.add("SERIAL");

	    bConfig.putStringArrayList("PLUGIN_NAME", pluginName);
	    bMain.putBundle("PLUGIN_CONFIG", bConfig);

	    Intent i = new Intent();
	    i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("SEND_RESULT","LAST_RESULT");
		// i.putExtra("SEND_RESULT", "true");  // For versions prior to DataWedge 7.1
	    i.putExtra("com.symbol.datawedge.api.GET_CONFIG", bMain);
	    this.sendBroadcast(i);
	}
	 
	private BroadcastReceiver dwResultReciever = new BroadcastReceiver() {
	    @Override
	    public void onReceive(Context context, Intent intent) {
	        String text = "";
	        if (intent.getAction().equalsIgnoreCase("com.symbol.datawedge.api.RESULT_ACTION")) {
	            if (intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG")) {
	                Bundle bundle = intent.getBundleExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG");
	                if (bundle != null && !bundle.isEmpty()) {
	                    String profileName = bundle.getString("PROFILE_NAME");
	                    String profileEnabled = bundle.getString("PROFILE_ENABLED");
	                    ArrayList<Bundle> configBundleList = bundle.getParcelableArrayList("PLUGIN_CONFIG");
	                    if (configBundleList != null) {
	                        for (Bundle configBundle : configBundleList) {
	                            if (configBundle.getString("PLUGIN_NAME").equalsIgnoreCase("SERIAL")) {
	                                Parcelable[] deviceBundleList = configBundle.getParcelableArray("DEVICE_LIST");

	                                for (Parcelable parcelableDevice : deviceBundleList) {
	                                    Bundle device = (Bundle) parcelableDevice;

	                                    Log.d("TAG", "#Serial# " + device.getString("serial_port_id"));
	                                    Log.d("TAG", "#Serial# " + device.getString("serial_input_enabled"));
	                                    Log.d("TAG", "#Serial# " + device.getString("serial_baudrate"));
	                                    Log.d("TAG", "#Serial# " + device.getString("serial_databits"));
	                                    Log.d("TAG", "#Serial# " + device.getString("serial_parity"));
	                                    Log.d("TAG", "#Serial# " + device.getString("serial_stopbits"));
	                                    Log.d("TAG", "#Serial# " + device.getString("serial_flow"));
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	            status.setText("Status:\n" + text);
	        }
	    }
	};

### Get SIMULSCAN input configuration
	public void getConfig()
	{
		Bundle bMain = new Bundle();
		bMain.putString("PROFILE_NAME", "Profile007");
		Bundle bConfig = new Bundle();
		ArrayList<String> pluginName = new ArrayList<>();
		pluginName.add("SIMULSCAN");

		bConfig.putStringArrayList("PLUGIN_NAME", pluginName);
		bMain.putBundle("PLUGIN_CONFIG", bConfig);
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.GET_CONFIG", bMain);
		this.sendBroadcast(i);
	}

	private BroadcastReceiver broadcastReceiver = new BroadcastReceiver() {
		@Override
		public void onReceive(Context context, Intent intent) {
			String action = intent.getAction();

			String strFinalResult = "";
			String command = intent.getStringExtra("COMMAND");
			String commandidentifier = intent.getStringExtra("COMMAND_IDENTIFIER");
			String result = intent.getStringExtra("RESULT");
			Bundle bundle = new Bundle();
			String resultInfo = "";

			if (action.equals("com.symbol.datawedge.api.RESULT_ACTION")) {

				if (intent.hasExtra("RESULT_INFO")) {
					bundle = intent.getBundleExtra("RESULT_INFO");
					Set<String> keys = bundle.keySet();
					for (String key : keys) {
						String val = bundle.getString(key);
						if(val == null) {

							if(bundle.getStringArray(key) != null) {
								val="";
								for (String s : bundle.getStringArray(key)) {
									val += "" + s + "\n";
								}
							}
						}

						resultInfo += key + ": " + val + "\n";
					}

				} else if (intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG")) {

					Bundle resultGetConfig = intent.getBundleExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG");
					Set<String> keys = resultGetConfig.keySet();
					String profileName = resultGetConfig.getString("PROFILE_NAME");
					for (String key : keys) {
						if (key.equalsIgnoreCase("PLUGIN_CONFIG")) {
							ArrayList<Bundle> bundleArrayList = resultGetConfig.getParcelableArrayList("PLUGIN_CONFIG");
							for (Bundle configBundle : bundleArrayList) {

									strFinalResult += "\nPlugin " + configBundle.getString("PLUGIN_NAME") + " Settings\n";
									for (String configBundleKey : configBundle.keySet()) {
										if (configBundleKey.equalsIgnoreCase("PARAM_LIST")) {

											Bundle params = configBundle.getBundle("PARAM_LIST");

											for (String paramKey :  params.keySet()) {

												if(paramKey.equalsIgnoreCase("simulscan_template_params")) {
													Bundle simulscan_template_params = params.getBundle("simulscan_template_params");
													if (simulscan_template_params != null) {
														strFinalResult += "\n\tDynamic template params";
														for (String template_param : simulscan_template_params.keySet()) {
															strFinalResult += "\n\t\t" + template_param + ": " + simulscan_template_params.get(template_param);
														}
													}
												}
												else
												{
													strFinalResult += "\n\t" + paramKey + ": " + params.get(paramKey);
												}

											}
										}
									}
									strFinalResult += "\n";
							}
						}
					}
					Log.d("TAG","#IntentApp#\n\nGet config info received\n" + strFinalResult);
				}

				if (command != null) {
					if (command.equalsIgnoreCase("com.symbol.datawedge.api.SET_CONFIG")) {
						Log.d("TAG","#IntentApp# \n\nSetConfig status received: " + result + "\nResultInfo: " + resultInfo);
					}
				}
			}
		}
	};

### Get DCP input configuration

	// Get Data Capture Plus Input configuration
	public void getConfig() { 
 
    	Bundle bMain = new Bundle(); 
    	bMain.putString("PROFILE_NAME", "Profile007"); 
    	bMain.putString("DCP", ""); 
    	Intent i = new Intent(); 
    	i.setAction("com.symbol.datawedge.api.ACTION"); 
    	i.putExtra("com.symbol.datawedge.api.GET_CONFIG", bMain); 
    	this.sendBroadcast(i); 
	} 
 
	private BroadcastReceiver broadcastReceiver = new BroadcastReceiver() { 
    	@Override 
    	public void onReceive(Context context, Intent intent) { 
        	String action = intent.getAction(); 
 
        	String strFinalResult = ""; 
        	String command = intent.getStringExtra("COMMAND"); 
        	String commandidentifier = intent.getStringExtra("COMMAND_IDENTIFIER"); 
        	String result = intent.getStringExtra("RESULT"); 
        	Bundle bundle = new Bundle(); 
        	String resultInfo = ""; 
 
        	if (action.equals("com.symbol.datawedge.api.RESULT_ACTION")) { 
 
            	if (intent.hasExtra("RESULT_INFO")) { 
                	bundle = intent.getBundleExtra("RESULT_INFO"); 
                	Set<String> keys = bundle.keySet(); 
                	for (String key : keys) { 
                    	String val = bundle.getString(key); 
                    	if (val == null) { 
 
                        	if (bundle.getStringArray(key) != null) { 
                            	val = ""; 
                            	for (String s : bundle.getStringArray(key)) { 
                                	val += "" + s + "\n"; 
	                            } 
    	                    } 
        	            } 
 
            	        resultInfo += key + ": " + val + "\n"; 
               	} 
 
            	} else if (intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG")) { 
 
                	Bundle resultGetConfig = intent.getBundleExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG"); 
                	Set<String> keys = resultGetConfig.keySet(); 
                	String profileName = resultGetConfig.getString("PROFILE_NAME"); 
                	for (String key : keys) { 
                    	if (key.equalsIgnoreCase("DCP")) { 
                        	strFinalResult += "\n"; 
                        	Bundle dcpSettings = resultGetConfig.getBundle("DCP"); 
                        	if (dcpSettings == null) { 
                            	strFinalResult += "\nDCP Settings are not found for " + profileName; 
                        	} else { 
								
                            	strFinalResult += "\nDCP Settings"; 
 
	                            for (String dcpKey : dcpSettings.keySet()) { 
    	                            strFinalResult += "\n\t\t" + dcpKey + ": " + dcpSettings.getString(dcpKey); 
        	                    } 
            	            } 
 
                	        strFinalResult += "\n"; 
                    	} 
                	} 
 
                	Log.d("TAG", "#IntentApp#\n\nGet config info received\n" + strFinalResult); 
            	} 
 
            	if (command != null) { 
                	if (command.equalsIgnoreCase("com.symbol.datawedge.api.SET_CONFIG")) { 
                    	Log.d("TAG", "#IntentApp# \n\nSetConfig status received: " + result + "\nResultInfo: " + resultInfo); 
                	} 
            	} 
 
        	} 
	    } 
	}; 

### Get MSR input configuration

	// Get Magnetic Stripe Reader Input configuration
	public void getConfig()
	{
		Bundle bMain = new Bundle();
		bMain.putString("PROFILE_NAME", "Profile007");
		Bundle bConfig = new Bundle();
		bConfig.putString("PLUGIN_NAME", "MSR");
		bMain.putBundle("PLUGIN_CONFIG", bConfig);
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.GET_CONFIG", bMain);
		this.sendBroadcast(i);
	}

	private BroadcastReceiver broadcastReceiver = new BroadcastReceiver() {
		@Override
		public void onReceive(Context context, Intent intent) {
			String action = intent.getAction();

			String strFinalResult = "";
			String command = intent.getStringExtra("COMMAND");
			String commandidentifier = intent.getStringExtra("COMMAND_IDENTIFIER");
			String result = intent.getStringExtra("RESULT");
			Bundle bundle = new Bundle();
			String resultInfo = "";

			if (action.equals("com.symbol.datawedge.api.RESULT_ACTION")) {

				if (intent.hasExtra("RESULT_INFO")) {
					bundle = intent.getBundleExtra("RESULT_INFO");
					Set<String> keys = bundle.keySet();
					for (String key : keys) {
						String val = bundle.getString(key);
						if(val == null) {

							if(bundle.getStringArray(key) != null) {
								val="";
								for (String s : bundle.getStringArray(key)) {
									val += "" + s + "\n";
								}
							}
						}

						resultInfo += key + ": " + val + "\n";
					}

				} else if (intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG")) {

					Bundle resultGetConfig = intent.getBundleExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG");
					Set<String> keys = resultGetConfig.keySet();
					String profileName = resultGetConfig.getString("PROFILE_NAME");
					for (String key : keys) {
						if (key.equalsIgnoreCase("PLUGIN_CONFIG")) {
							ArrayList<Bundle> bundleArrayList = resultGetConfig.getParcelableArrayList("PLUGIN_CONFIG");
							for (Bundle configBundle : bundleArrayList) {

									strFinalResult += "\nPlugin " + configBundle.getString("PLUGIN_NAME") + " Settings\n";
									for (String configBundleKey : configBundle.keySet()) {
										if (configBundleKey.equalsIgnoreCase("PARAM_LIST")) {

											Bundle params = configBundle.getBundle("PARAM_LIST");

											for (String paramKey :  params.keySet()) {

												strFinalResult += "\n\t" + paramKey + ": " + params.get(paramKey);

											}
										}
									}
									strFinalResult += "\n";

							}
						}
					}

					Log.d("TAG","#IntentApp#\n\nGet config info received\n" + strFinalResult);

				}

				if (command != null) {
					if (command.equalsIgnoreCase("com.symbol.datawedge.api.SET_CONFIG")) {
						Log.d("TAG","#IntentApp# \n\nSetConfig status received: " + result + "\nResultInfo: " + resultInfo);
					}
				}

			}
		}
	};

### Get Enterprise Keyboard Configuration
	public void getConfig(View view) { 
	
		Bundle bMain = new Bundle(); 
		bMain.putString("PROFILE_NAME", "ZebraEKB"); 
		bMain.putString("EKB", ""); 
		Intent i = new Intent(); 
		i.setAction("com.symbol.datawedge.api.ACTION"); 
		i.putExtra("com.symbol.datawedge.api.GET_CONFIG", bMain); 
		this.sendBroadcast(i); 
	} 

	private BroadcastReceiver broadcastReceiver = new BroadcastReceiver() { 
		@Override 
		public void onReceive(Context context, Intent intent) { 
			String action = intent.getAction(); 
			String strFinalResult = ""; 
			if (action.equals("com.symbol.datawedge.api.RESULT_ACTION")) { 
	
				if (intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG")) { // Reading GET_CONFIG result 
	
					Bundle resultGetConfig = intent.getBundleExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG"); 
					Set<String> keys = resultGetConfig.keySet(); 
					String profileName = resultGetConfig.getString("PROFILE_NAME"); 
					strFinalResult = "Profile name: " + profileName; 
	
					for (String key : keys) { 
	
						if (key.equalsIgnoreCase("EKB")) { 
							strFinalResult += "\n"; 
							Bundle ekbSettings = resultGetConfig.getBundle("EKB"); 
							if (ekbSettings == null) { 
								strFinalResult += "\nEKB Settings are not found for " + profileName; 
							} 
							else { 
								strFinalResult += "\nEKB Settings"; 
	
								for (String ekbKey : ekbSettings.keySet()) { 
									if (ekbKey.equals("ekb_layout")) { 
										strFinalResult += "\n\t\t" + ekbKey + ": "; 
										Bundle ekbLayoutSettings = ekbSettings.getBundle("ekb_layout"); 
										if(ekbLayoutSettings != null){ 
											for (String ekbLayoutKey : ekbLayoutSettings.keySet()) { 
												strFinalResult += "\n\t\t\t" + ekbLayoutKey + ": " + ekbLayoutSettings.getString(ekbLayoutKey); 
											} 
										} 
										else { 
											strFinalResult+= "no layout defined, default will be used"; 
										} 
									} 
									else { 
										strFinalResult += "\n\t\t" + ekbKey + ": " + ekbSettings.getString(ekbKey); 
									} 
								} 
							} 
	
							strFinalResult += "\n"; 
						} 
						if (key.equalsIgnoreCase("RESULT_CODE")) { 
							strFinalResult += "\nRESULT_CODE: " + resultGetConfig.getString("RESULT_CODE"); 
						} 
					} 
					Log.d("TAG", "#IntentApp#\n\nGet config info received\n" + strFinalResult); 
				} 
			} 
		} 
	}; 

### Get configuration for multiple modules (full profile) in a single intent

Support started with DataWedge 7.1.  Previous DataWedge versions required multiple intent calls to retrieve information from multiple modules (plugins, APP_LIST, and Data Capture Plus).

	// Get full profile configuration in a single broadcast intent and process the result

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);

		IntentFilter filter = new IntentFilter();
		filter.addAction("com.symbol.datawedge.api.RESULT_ACTION");
		filter.addCategory("android.intent.category.DEFAULT");
		registerReceiver(broadcastReceiver, filter);
		getConfig();
	}

	public void getConfig() {

		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.GET_CONFIG",  "Profile007");
		this.sendBroadcast(i);
	}

	private BroadcastReceiver broadcastReceiver = new BroadcastReceiver() {
		@Override
		public void onReceive(Context context, Intent intent) {
			String action = intent.getAction();

			String strFinalResult = "";

			if (action.equals("com.symbol.datawedge.api.RESULT_ACTION")) {

				if (intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG")) {

					Bundle resultGetConfig = intent.getBundleExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG");
					Set<String> keys = resultGetConfig.keySet();
					String profileName = resultGetConfig.getString("PROFILE_NAME");


					for (String key : keys) {

						if (key.equalsIgnoreCase("PLUGIN_CONFIG")) {
							ArrayList<Bundle> bundleArrayList = resultGetConfig.getParcelableArrayList("PLUGIN_CONFIG");
							for (Bundle configBundle : bundleArrayList) {

								String pluginName = configBundle.getString("PLUGIN_NAME");
								if (pluginName != null && pluginName.equalsIgnoreCase("ADF")) {

									strFinalResult += "\nPlugin " + configBundle.getString("OUTPUT_PLUGIN_NAME") + " ADF Settings\n";

									String pluginEnabled = configBundle.getString("adf_enabled");
									strFinalResult += "\n Plugin Enabled :" + pluginEnabled;
									if (configBundle.containsKey("PARAM_LIST")) {
										Object object = configBundle.get("PARAM_LIST");
										if (object != null && object instanceof ArrayList) {
											ArrayList<Bundle> paramArrayList = (ArrayList) object;
											for (Bundle rule : paramArrayList) {
												String name = rule.getString("name");
												String enabled = rule.getString("enabled");
												String priority = rule.getString("priority");
												String alldevices = rule.getString("alldevices");
												String string = rule.getString("string");
												String stringPos = rule.getString("string_pos");
												String stringLen = rule.getString("string_len");

												strFinalResult += "\nRule ->";
												strFinalResult += "\n name :" + name;
												strFinalResult += "\n enabled :" + enabled;
												strFinalResult += "\n priority :" + priority;
												strFinalResult += "\n alldevices :" + alldevices;
												strFinalResult += "\n string :" + string;
												strFinalResult += "\n stringPos :" + stringPos;
												strFinalResult += "\n stringLen :" + stringLen;
												ArrayList<Bundle> actions = rule.getParcelableArrayList("ACTIONS");
												if (actions != null) {
													Log.d("TAG", "\n  Actions->");
													for (Bundle bAction : actions) {
														String type = bAction.getString("type");
														Object param_1 = bAction.get("action_param_1");
														Object param_2 = bAction.get("action_param_2");
														Object param_3 = bAction.get("action_param_3");

														strFinalResult += "\n  type:" + type;
														if (param_1 != null && param_1 instanceof String) {
															strFinalResult += "\n  param_1:" + param_1;
														}
														if (param_2 != null && param_2 instanceof String) {
															strFinalResult += "\n  param_2:" + param_2;
														}
														if (param_3 != null && param_3 instanceof String) {
															strFinalResult += "\n  param_3:" + param_3;
														}

													}
												}
												ArrayList<Bundle> devices = rule.getParcelableArrayList("DEVICES");
												if (devices != null) {
													Log.d("TAG", "\n  Devices->");
													for (Bundle device : devices) {
														String type = device.getString("device_id");
														Object param_1 = device.get("enabled");
														Object param_2 = device.get("alldecoders");
														Object param_3 = device.get("all_label_ids");

														strFinalResult += "\n  Device ID:" + type;
														if (param_1 != null && param_1 instanceof String) {
															strFinalResult += "\n      Enabled:" + param_1;
														}
														if (param_2 != null && param_2 instanceof String) {
															strFinalResult += "\n  All decoders:" + param_2;
														}
														if (param_3 != null && param_3 instanceof String) {
															strFinalResult += "\n  All labelids:" + param_3;
														}

													}
												}
												ArrayList<Bundle> decoders = rule.getParcelableArrayList("DECODERS");
												if (decoders != null) {
													strFinalResult += "\n  Decoders->";
													for (Bundle decoder : decoders) {
														String deviceID = decoder.getString("device_id");
														String decoderEnabled = decoder.getString("enabled");
														String decoderID = decoder.getString("decoder");

														strFinalResult += "\n        Device ID:" + deviceID;
														strFinalResult += "\n  Decoder Enabled:" + decoderEnabled;
														strFinalResult += "\n       Decoder ID:" + decoderID;
													}
												}

												ArrayList<Bundle> labelIDs = rule.getParcelableArrayList("LABEL_IDS");
												if (labelIDs != null) {
													strFinalResult += "\n  LabelIDs->";
													for (Bundle labelID : labelIDs) {
														String deviceID = labelID.getString("device_id");
														String lblEnabled = labelID.getString("enabled");
														String lblID = labelID.getString("label_id");

														strFinalResult += "\n      Device ID:" + deviceID;
														strFinalResult += "\n  Label Enabled:" + lblEnabled;
														strFinalResult += "\n       Label ID:" + lblID;
													}
												}
											}
										}
									}
								} else if (pluginName != null && pluginName.equalsIgnoreCase("TOKEN")) {
									strFinalResult += "\nPlugin " + configBundle.getString("OUTPUT_PLUGIN_NAME") + " TOKEN Settings\n";
									Set<String> keys2 = configBundle.keySet();
									for (String key2 : keys2) {
										if (!key2.equalsIgnoreCase("PARAM_LIST")) {
										} else {
											Bundle params = configBundle.getBundle("PARAM_LIST");
											Set<String> keys3 = params.keySet();
											for (String key3 : keys3) {

												if (key3.equalsIgnoreCase("token_order")) {
													strFinalResult += "\n" + key3 + ": token_order\n";

													ArrayList<Bundle> tokenOrderList = params.getParcelableArrayList("token_order");
													int order = 0;
													for (Bundle b : tokenOrderList) {
														strFinalResult += "\t" + order + ". " + b.getString("name") + ": " + b.getString("enabled") + "\n";
														order++;
													}
												} else {
													strFinalResult += "\n" + key3 + ": " + params.get(key3);
												}
											}
										}
									}
									strFinalResult += "\n";
								} else if (pluginName != null && pluginName.equalsIgnoreCase("BDF")) {
									strFinalResult += "\n\nPlugin " + configBundle.getString("OUTPUT_PLUGIN_NAME") + " BDF Settings\n";
									Set<String> keys2 = configBundle.keySet();
									for (String key2 : keys2) {
										if (!key2.equalsIgnoreCase("PARAM_LIST")) {
										} else {
											Bundle params = configBundle.getBundle("PARAM_LIST");
											Set<String> keys3 = params.keySet();
											for (String key3 : keys3) {

												strFinalResult += "\n" + key3 + ": " + params.get(key3);
											}
										}
									}
									strFinalResult += "\n";
								} else {
									Set<String> keys2 = configBundle.keySet();
									if (keys2.size() > 0) {

										if (configBundle.getString("PLUGIN_NAME") != null)
											strFinalResult += "\nPlugin " + configBundle.getString("PLUGIN_NAME") + " Settings\n";

										for (String key2 : keys2) {
											if (key2.equalsIgnoreCase("PARAM_LIST")) {

												Bundle params = configBundle.getBundle("PARAM_LIST");
												Set<String> keys3 = params.keySet();
												for (String key3 : keys3) {


													if (key3.equalsIgnoreCase("simulscan_template_params")) {
														Bundle simulscan_template_params = params.getBundle("simulscan_template_params");
														if (simulscan_template_params != null) {
															strFinalResult += "\n\tDynamic template params";
															for (String template_param : simulscan_template_params.keySet()) {
																strFinalResult += "\n\t\t" + template_param + ": " + simulscan_template_params.get(template_param);
															}
														}
													} else {
														strFinalResult += "\n\t" + key3 + ": " + params.get(key3);
													}

												}
											}
										}
									}
									strFinalResult += "\n";
								}
							}
						} else if (key.equalsIgnoreCase("APP_LIST")) {
							strFinalResult += "\n";
							ArrayList<Bundle> appList = resultGetConfig.getParcelableArrayList("APP_LIST");
							if (appList == null) {
								strFinalResult += "\nProfile information is not found for " + profileName;
							} else if (appList.size() == 0) {
								Log.d("TAG", "Profile " + profileName + " has no associated information");
								strFinalResult += "\n" + "Profile " + profileName + " has no associated information";
							} else {
								strFinalResult += "\nAPP LIST\n\n";
								for (Bundle b1 : appList) {
									strFinalResult += "\n" + b1.getString("PACKAGE_NAME") + ": " + b1.getStringArrayList("ACTIVITY_LIST");
								}
							}
							strFinalResult += "\n";
						} else if (key.equalsIgnoreCase("DCP")) {
							strFinalResult += "\n";
							Bundle dcpSettings = resultGetConfig.getBundle("DCP");
							if (dcpSettings == null) {
								strFinalResult += "\nDCP Settings are not found for " + profileName;
							} else {

								strFinalResult += "\nDCP Settings";

								for (String dcpKey : dcpSettings.keySet()) {
									strFinalResult += "\n\t\t" + dcpKey + ": " + dcpSettings.getString(dcpKey);
								}
							}

							strFinalResult += "\n";
						}
						if (key.equalsIgnoreCase("RESULT_CODE")) {
							strFinalResult += "\nRESULT_CODE: " + resultGetConfig.getString("RESULT_CODE");
							;
						}
					}

					Log.d("TAG", "#IntentApp#\n\nGet config info received\n" + strFinalResult);

				}
			}
		}
	};

### Get IP output

	// Get Internet Protocol Output
	public void getConfig()
	{
		Bundle bMain = new Bundle();
		bMain.putString("PROFILE_NAME", "Profile007");
		Bundle bConfig = new Bundle();
		bConfig.putString("PLUGIN_NAME", "IP");
		bMain.putBundle("PLUGIN_CONFIG", bConfig);
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.GET_CONFIG", bMain);
		this.sendBroadcast(i);
	}

	private BroadcastReceiver broadcastReceiver = new BroadcastReceiver() {
		@Override
		public void onReceive(Context context, Intent intent) {
			String action = intent.getAction();

			String strFinalResult = "";
			String command = intent.getStringExtra("COMMAND");
			String commandidentifier = intent.getStringExtra("COMMAND_IDENTIFIER");
			String result = intent.getStringExtra("RESULT");
			Bundle bundle = new Bundle();
			String resultInfo = "";

			if (action.equals("com.symbol.datawedge.api.RESULT_ACTION")) {

				if (intent.hasExtra("RESULT_INFO")) {
					bundle = intent.getBundleExtra("RESULT_INFO");
					Set<String> keys = bundle.keySet();
					for (String key : keys) {
						String val = bundle.getString(key);
						if(val == null) {

							if(bundle.getStringArray(key) != null) {
								val="";
								for (String s : bundle.getStringArray(key)) {
									val += "" + s + "\n";
								}
							}
						}

						resultInfo += key + ": " + val + "\n";
					}

				} else if (intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG")) {

					Bundle resultGetConfig = intent.getBundleExtra("com.symbol.datawedge.api.RESULT_GET_CONFIG");
					Set<String> keys = resultGetConfig.keySet();
					String profileName = resultGetConfig.getString("PROFILE_NAME");
					for (String key : keys) {
						if (key.equalsIgnoreCase("PLUGIN_CONFIG")) {
							ArrayList<Bundle> bundleArrayList = resultGetConfig.getParcelableArrayList("PLUGIN_CONFIG");
							for (Bundle configBundle : bundleArrayList) {

									strFinalResult += "\nPlugin " + configBundle.getString("PLUGIN_NAME") + " Settings\n";
									for (String configBundleKey : configBundle.keySet()) {
										if (configBundleKey.equalsIgnoreCase("PARAM_LIST")) {

											Bundle params = configBundle.getBundle("PARAM_LIST");

											for (String paramKey :  params.keySet()) {

												strFinalResult += "\n\t" + paramKey + ": " + params.get(paramKey);

											}
										}
									}
									strFinalResult += "\n";

							}
						}
					}

					Log.d("TAG","#IntentApp#\n\nGet config info received\n" + strFinalResult);

				}

				if (command != null) {
					if (command.equalsIgnoreCase("com.symbol.datawedge.api.SET_CONFIG")) {
						Log.d("TAG","#IntentApp# \n\nSetConfig status received: " + result + "\nResultInfo: " + resultInfo);
					}
				}

			}
		}
	};


-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

-----

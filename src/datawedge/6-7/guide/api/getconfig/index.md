---
title: Get Config  
layout: guide.html
product: DataWedge
productversion: '6.7'
---

## GET_CONFIG

Introduced in DataWedge 6.5. 

Gets the `PARAM_LIST` settings in the specified Profile, returned as a set of value pairs. 

###Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.GET_CONFIG", "<bundle>");

## Parameters

**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.GET_CONFIG"

**EXTRA VALUE** [Bundle]: "&lt;Plug-in&gt;"

**SCANNER_IDENTIFIER** [String]: in each scanner info bundle for each scanner supported in the device. Both parameters are supported in DataWedge 6.6 and higher; the scanner identifier value takes precedence if an index also is referenced in the code.  

 `scanner_selection_by_identifier` [string]- takes a value from the list of Scanner Identifiers below:

**Possible values**:

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


## Return Values
Returns a nested bundle with the Profile name, status and a Profile config bundle containing the param list as a bundle.  

**EXTRA NAME**: "com.symbol.datawedge.api.GET_CONFIG_RESULT" 

**BUNDLE**: &lt;mainbundle&gt; (see parameters below)

### Main Bundle

The main Get_Result_Config bundle contains the following properties:

**PROFILE_NAME** [String]: Name of the Profile being queried

**PROFILE_ENABLED** [String]: True/False

**PLUGIN_CONFIG** [bundle]: Nested bundle with the following properties:
* **PLUGIN_NAME** [String]: Name of the Plug-in being reported (i.e. Barcode)  
* **PARAM_LIST** [Bundle]: Nested List of name-value pairs:
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

<!--
## Example Code

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
### Get Plug-ins

	// SENDING THE INTENT
		Bundle bMain = new Bundle();
		bMain.putString("PROFILE_NAME", "Profile0 (default)");
		
		Bundle bConfig = new Bundle();
		bConfig.putString("PLUGIN_NAME", "BARCODE");
		
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
		i.putExtra("SEND_RESULT","true");
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

### Get SERIAL input config

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
	    i.putExtra("SEND_RESULT", "true");
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


-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

-----

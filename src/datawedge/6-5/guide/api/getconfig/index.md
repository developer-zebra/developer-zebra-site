---
title: Get Config  
layout: guide.html
product: DataWedge
productversion: '6.5'
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

#### Code to query the config of plug-ins

	// SENDING THE INTENT
		Bundle bMain = new Bundle();
		bMain.putString("PROFILE_NAME", "Profile0 (default)");
		Bundle bConfig = new Bundle();
		ArrayList<String> pluginName = new ArrayList<>();
		pluginName.add("BARCODE");

	//pluginName.add("INTENT"); to add more plugins
		
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

#### Code to query app associations

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

#### Query the scanner status

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


-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

-----

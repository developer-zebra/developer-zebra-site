---
title: Get Config  
layout: guide.html
product: DataWedge
productversion: '6.3'
---

## GET_CONFIG

Gets the `PARAM_LIST` settings in the specified Profile, returned as a set of value pairs. 

###Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.GET_CONFIG", "<profile name>");

### Parameters

**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.GET_CONFIG"

**EXTRA VALUE** [Bundle]: "&lt;Profile name&gt;", "&lt;Plug-in&gt;"

### Return Values
Returns an array of parameter name/value pairs. 

**EXTRA NAME**: "com.symbol.datawedge.api.GET_CONFIG_RESULT" 

**EXTRA TYPE** [String]:

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

### Example

	//SENDING THE INTENT
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.GET_CONFIG", "");
	context.this.sendBroadcast(i);

	//RECEIVING THE RESULT
	private BroadcastReceiver myBroadcastReceiver = new BroadcastReceiver(){

		@Override
		public void onReceive(Context context, Intent intent){

			Bundle extras = getIntent().getExtras();
			if (intent.hasExtra("com.symbol.datawedge.api.GET_CONFIG")){
				String[] profilesList = intent.getStringArrayExtra("com.symbol.datawedge.api.GET_CONFIG_RESULT")

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

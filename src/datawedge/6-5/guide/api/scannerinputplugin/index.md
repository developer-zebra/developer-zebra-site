---
title: Scanner Input Plug-in 
layout: guide.html
product: DataWedge
productversion: '6.5'
---

## SCANNER_INPUT_PLUGIN

Used to enable/disable the scanner Plug-in being used by the currently active Profile. Disabling the scanner Plug-in effectively disables scanning in that Profile, regardless of whether the Profile is associated with an app. **This API changes only the runtime status of the scanner; it does not make persistent changes to the Profile**. 

> **Functional only when Barcode Input is enabled in the active Profile**. 

### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SCANNER_INPUT_PLUGIN", "<parameter>");


### Parameters

**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.SCANNER_INPUT_PLUGIN"

**&lt;parameter**&gt;: The parameter as a string, using either of the following:

* `ENABLE_PLUGIN` - enables the plug-in
* `DISABLE_PLUGIN` - disables the plug-in

### Result Codes

DataWedge will return the following error codes if the app includes the intent extras `RECEIVE_RESULT` and `COMMAND_IDENTIFIER` to enable the app to get results using the DataWedge result intent mechanism. See [Example](#example), below. 

* **DATAWEDGE_DISABLED -** FAILURE
* **PARAMETER_INVALID -** FAILURE
* **PROFILE_DISABLED -** FAILURE
* **SCANNER_ALREADY_DISABLED -** FAILURE
* **SCANNER_ALREADY_ENABLED -** FAILURE
* **SCANNER_DISABLE_FAILED -** FAILURE
* **SCANNER_ENABLE_FAILED -** FAILURE

Also see the [Result Codes guide](../resultinfo) for more information.  

### Return Values

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters. 


### Example

	// define action and data strings
		String scannerInputPlugin = "com.symbol.datawedge.api.ACTION";
		String extraData = "com.symbol.datawedge.api.SCANNER_INPUT_PLUGIN";

		public void onResume() {
		        
		    // create the intent
		        Intent i = new Intent();
		        
		    // set the action to perform
		        i.setAction(scannerInputPlugin);
		        
		    // add additional info
		        i.putExtra(extraData, "DISABLE_PLUGIN");
		        
		    // send the intent to DataWedge
		        this.sendBroadcast(i);
	}

#### Generate and receive result codes
Command and configuration intent parameters determine whether to send result codes (disabled by default). When using `SEND_RESULT`, the `COMMAND_IDENTIFIER` is used to match the result code with the originating intent. Sample usage of these parameters is shown below. 

**Note: Modify this generic code to match the API being used**.  

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

-----

### Comments
This intent enables/disables the scanner plug-in for the currently enabled Profile. For example, let's say that activity A launches and uses the Data Capture API intent to switch to ProfileA in which the scanner plug-in is enabled, then at some point it uses the Data Capture API to disable the scanner plug-in. Activity B is launched. In DataWedge, ProfileB is associated with activity B. DataWedge switches to ProfileB. When activity A comes back to the foreground, in the `onResume` method, activity A must use the Data Capture API intent to switch back to ProfileA, then use the Data Capture API intent again to disable the scanner plug-in, to return back to the state it was in.

### Notes
The scenario above assumes that ProfileA is not associated with any applications/activities, therefore when focus switches back to activity A, DataWedge will not automatically switch to ProfileA, and therefore activity A must switch back to ProfileA in its `onResume` method.

Because DataWedge will automatically switch Profile when an activity is paused, it is recommended that this API function be called from the `onResume` method of the activity.

**This API changes only the runtime status of the scanner; it does not make persistent changes to the Profile**. 

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

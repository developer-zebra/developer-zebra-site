---
title: Intent Result Codes 
layout: guide.html
product: DataWedge
productversion: '6.6'
---

## Overview

Introduced in DataWedge 6.5.

**Intent result codes deliver status information about DataWedge API commands** to help developers determine the flow of data and the function of their business logic. Result codes are implemented with some of the APIs Introduced in DataWedge 6.5 and have been added to many APIs that existed previously.  

Result codes are accessed using the `RESULT_INFO` intent mechanism, which returns error codes if the app includes the intent extras `RECEIVE_RESULT` and `COMMAND_IDENTIFIER` as shown in the prototype below. See the [Example section](#example) below for code showing how to register the app to receive result codes. 

### Function Prototype

	// send the intent
		Intent i = new Intent();
		i.setAction(ACTION);
		i.putExtra("com.symbol.datawedge.api.CREATE_PROFILE", "Profile1");

	// request and identify the result code
		i.putExtra("SEND_RESULT","true");
		i.putExtra("COMMAND_IDENTIFIER","123456789");
		this.sendBroadcast(i);

### Parameters

**RESULT** [String]: Success/failure of the operation

**COMMAND** [String]: Name of the received intent command

**COMMAND_IDENTIFIER** [String]: Optional parameter for linking results to a specific command

**RESULT_INFO** [Bundle]: Can contain any of the fields below depending on the API in use: 

* **PREVIOUS_DEFAULT_PROFILE -** Specifies the previous default Profile when setting a new default Profile
* **PREVIOUS_PROFILE -** Specifies the previous Profile in the parameter when switching and renaming a Profile
* **PROFILE_NAME -** Always the current or next Profile name
* **RESULT_CODE -** One of the possible result codes shown in list table
* **SOURCE_PROFILE_NAME -** Specifies the source Profile when cloning a Profile
* **RESULT_CODE -** returned only for FAILURE. Can contain any of the fields below depending on the API in use:

 * **APP_ALREADY_ASSOCIATED -** An attempt was made to associate an app that was already associated with another Profile
 * **BUNDLE_EMPTY -** The bundle contains no data
 * **DATAWEDGE_ALREADY_DISABLED -** An attempt was made to disable DataWedge when it was already disabled
 * **DATAWEDGE_ALREADY_ENABLED -** An attempt was made to enable DataWedge when it was already enabled
 * **DATAWEDGE_DISABLED -** An attempt was made to perform an operation when DataWedge was disabled
 * **INPUT_NOT_ENABLED -** An attempt was made to acquire data when the Barcode or SimulScan plug-in was disabled
 * **OPERATION_NOT_ALLOWED -** An attempt was made to rename or delete a protected Profile or to associate an app with Profile0
 * **PARAMETER_INVALID -** The passed parameters were empty, null or invalid
 * **PLUGIN_NOT_SUPPORTED -** An attempt was made to configure a plug-in that is not supported by DataWedge intent APIs
 * **PLUGIN_BUNDLE_INVALID -** A passed plug-in parameter bundle is empty or contains insufficient information
 * **PROFILE_ALREADY_EXISTS -** An attempt was made to create, clone or rename a Profile with a name that already exists
 * **PROFILE_ALREADY_SET -** An attempt was made to set the default Profile as the default Profile
 * **PROFILE_DISABLED -** An attempt was made to perform an operation on a disabled Profile
 * **PLUGIN_DISABLED_IN_CONFIG -** An attempt was made to enable or disable the scanner when barcode plug-in was disabled manually from the DataWedge UI
 * **PROFILE_HAS_APP_ASSOCIATION -** An attempt was made to switch to or set as the default a Profile that is already associated with another app
 * **PROFILE_NAME_EMPTY -** An attempt was made to configure an empty Profile name
 * **PROFILE_NOT_FOUND -** An attempt was made to perform an operation on a Profile that does not exist
 * **SCANNER_ALREADY_DISABLED -** An attempt was made to disable a scanner that is already disabled
 * **SCANNER_ALREADY_ENABLED -** An attempt was made to enable a scanner that is already enabled
 * **SCANNER_DISABLE_FAILED -** An exception occurred while disabling the scanner
 * **SCANNER_ENABLE_FAILED -** An exception occurred while enabling the scanner
 * **UNKNOWN -** An unidentified error occurred

### Return Values

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

## Example Code

	//SENDING THE INTENT
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.RESTORE_CONFIG", "");
	this.sendBroadcast (i);

### Generate and receive result codes
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


### Comments

The result intent mechanism does not perform parameter-level validation. It would be impossible, for example, for any app to validate every possible parameter for a scanner that's no longer connected. However, if a parameter value in a configuration is not valid when that Profile is loaded, DataWedege will use the default value for that parameter.  

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

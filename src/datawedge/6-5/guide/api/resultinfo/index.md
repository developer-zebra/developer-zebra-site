---
title: Result Info 
layout: guide.html
product: DataWedge
productversion: '6.5'
---

## RESULT_INFO

Introduced in DataWedge 6.5.


The Result Info intent mechanism allows developers to receive status information about DataWedge API commands to help determine the flow of business logic.


Note that parameter level validation will not be done when sending the result intent. As an example, consider about barcode input settings, not every scanner connected with the device so DataWedge cannot verify the validity of a parameter value. However, when DataWedge loads the profile, if the value in the configuration not valid DataWedege will use the default value for the same parameter.  

Success or Failure for the command and descriptive information will be send with the result bundle. This is similar to the user experience when user creates a profile using DataWedge configuration UI.

Result info and result codes

Result Intent will have the following extra names. 

RESULT	- SUCCESS or FAILURE

COMMAND - Received intent’s command

COMMAND_IDENTIFIER - This is an optional parameter. User can include a unique identifier in their intent that sends to DW. DW will send this same identifier in the result intent. 

RESULT_INFO - Bundle

Results intents will contain a bundle named “RESULT_INFO”.

RESULT_INFO bundle may have the following fields based on the API in use: 

PREVIOUS_DEFAULT_PROFILE - When setting default profile, this specifies the previous default profile
PREVIOUS_PROFILE - When switching, and renaming a profile, this specifies the previous profile mentioned in the parameter
PROFILE_NAME- Always the current/next profile name
RESULT_CODE- List of possible result codes are shown in below table
SOURCE_PROFILE_NAME - When cloning a profile, this specifies the source profile

Available values for the RESULT_CODE is mentioned in below table. RESULT_CODE will be returned only for failed scenarios.

APP_ALREADY_ASSOCIATED - Trying to associate an app to a profile while that is being associated to another profile
BUNDLE_EMPTY - Passed bundle is empty
DATAWEDGE_ALREADY_DISABLED - Trying to disable DataWedge, when it is already disabled
DATAWEDGE_ALREADY_ENABLED - Trying to enable DataWedge, when it is already enabled
DATAWEDGE_DISABLED - Trying to perform an operation when DataWedge is disabled
INPUT_NOT_ENABLED - When both Barcode and SimulScan plugins are disabled and trying to submit a read
OPERATION_NOT_ALLOWED - Returns when trying to rename or delete non-editable/non-deletable profiles or trying to associate an app to Profile0
PARAMETER_INVALID - Passed parameters are empty, null or invalid
PLUGIN_NOT_SUPPORTED - Trying to set configuration on a plugin that is not supported by DataWedge intent APIs
PLUGIN_BUNDLE_INVALID - When the provided param bundle for a plugin is null or not contains all the required information to perform the command
PROFILE_ALREADY_EXISTS - Trying to create a profile with a name that is already exist and when cloning, and renaming a profile, if the destination profile already exists
PROFILE_ALREADY_SET - When a profile is already the default profile
PROFILE_DISABLED - Trying to perform an operation when Profile is disabled
PLUGIN_DISABLED_IN_CONFIG - Trying to disable/enable scanner when barcode plugin is disabled manually from DataWedge UI
PROFILE_HAS_APP_ASSOCIATION - Trying to switch/set default to a profile that already has an application association
PROFILE_NAME_EMPTY - Trying to set configuration on an empty profile name
PROFILE_NOT_FOUND - Trying to perform an operation on a profile that does not exist
Ex: Occurs when trying to rename or clone a profile and when the source profile does not exist
SCANNER_ALREADY_DISABLED - Trying to disable scanner, when it is already disabled
SCANNER_ALREADY_ENABLED - Trying to enable scanner, when it is already enabled
SCANNER_DISABLE_FAILED - When an exception occurs while disabling scanner
SCANNER_ENABLE_FAILED - When an exception occurs while enabling scanner
UNKNOWN - An unidentified error occurred


### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.RESTORE_CONFIG", "");


### Parameters

**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.RESTORE_CONFIG"

**EXTRA VALUE**: Empty string 
 
### Return Values
(none)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

### Example

	//SENDING THE INTENT
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.RESTORE_CONFIG", "");
	this.sendBroadcast (i);

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
		sendBroadcast(i);

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

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

---
title: Import Profile 
layout: guide.html
product: DataWedge
productversion: '6.7'
---

## IMPORT_PROFILE

Introduced in DataWedge 6.7.

Used to import a Profile, which contains configuration settings for a particular application. 

### Behavior Notes

* When the `IMPORT_CONFIG` intent is called, it checks the `FOLDER_PATH` for the presence of configuration files. If `datawedge.db` is found, DataWedge restarts with the settings stored there. 
* If the folder contains any profile configuration files (i.e. `dwprofile_profilename.db`) related to the newly loaded Profile, the Profile immediately loads with the new settings.
* While the `IMPORT_CONFIG` intent is running, DataWedge disables the Auto Import function. 

See more [about importing Profiles](../settings/#importaprofile). 

This API contains [nested bundles](../overview/#nestedbundles). 

### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.IMPORT_CONFIG", <mainbundle>);

### Parameters

**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.SET_CONFIG"

**BUNDLE**: &lt;mainbundle&gt; (see parameters below)

FOLDER_PATH
Mandatory attribute, <String>
Folder path for configuration files:


FILE_LIST
Optional attribute, <String array list>
Users can select required .db files in the folder
as a string array list.

If only “FOLDER_PATH” is mentioned by a user, DataWedge will use the .db files in the folder. 

Also, Users can selectively give the required files using “FILE_LIST” attribute.
It is recommended to use the getExternalFilesDirs(String) API to find the accessible external storage locations in the device.

Ex:
File[] fileDirs = getExternalFilesDirs(null);

Output:
/storage/34E4-1117/Android/data/<PackageName>/files
/storage/sdcard2/0/Android/data/<PackageName>/files
/storage/emulated/0/Android/data/<PackageName>/files


34E4-1117 is a symbolic link for external sdcard.
For other Storage locations, It is better to validate the folder path programmatically before sending the import config intent.





#### MAIN BUNDLE
The main SetConfig bundle includes the following properties:

* **PROFILE_NAME** [String]: The name of the Profile on which to perform action(s)
* **CONFIG_MODE** [String]: (Default=OVERWRITE)
 * **CREATE_IF_NOT_EXIST**: Creates the Profile if string in PROFILE_NAME is not present on device 
 * **OVERWRITE**: If Profile exists, resets all options to default, then configures specified settings
 * **UPDATE**: Updates only specified settings
* **PROFILE_ENABLED** [String]: Optional; Controls whether to enable (true) or disable (false) a Profile (default=true). If not specified, no change is made to the Profile state.
* **PLUGIN_CONFIG** [Bundle]: A bundle (nested within the main bundle) that contains settings of a specific Plug-in
* **APP_LIST** [Array]: List of applications and/or activities to associate with the Profile

### Result Codes

OLD OLD
DataWedge returns the following error codes if the app includes the intent extras `RECEIVE_RESULT` and `COMMAND_IDENTIFIER` to enable the app to get results using the DataWedge result intent mechanism. See [Example](#example), below. 

NEW NEW

Result intent will be broadcast by DataWedge with the success or failure status of configuration import. Result Info will return as ArrayList of bundles and it will contain RESULT_CODE section and RESULT_CODE_INFO section to describe the additional information.

RESULT_INFO


RESULT_CODE - INVALID_FOLDER_PATH
RESULT_CODE_INFO - “folder path”

RESULT_CODE - CONFIG_FILE_NOT_EXIST
RESULT_CODE_INFO - “dwprofile_profilename.txt" , “dwA_profilename.db”

New RESULT_CODE set
Following result code will return with the specified folder/file name

EMPTY_FOLDER_PATH – FOLDER_PATH is empty or not specified as an attribute
INVALID_FOLDER_PATH – Specified FOLDER_PATH is not valid
INVALID_CONFIG_FILE – Corrupted datawedge db files are available in the folder
CONFIG_FILE_NOT_EXIST - Valid datawedge configuration db files are not available in the folder
INVALID_FILE_NAME – if selected folder contains valid and invalid datawedge db file names, this error code will return with the invalid file name
CANNOT_READ_FILE – Cannot read the specified db file

OLD OLD
* **PLUGIN_NOT_SUPPORTED -** FAILURE
* **BUNDLE_EMPTY -** FAILURE 
* **PROFILE_NAME_EMPTY -** FAILURE
* **PROFILE_NOT_FOUND -** FAILURE
* **PLUGIN_BUNDLE_INVALID -** FAILURE
* **PARAMETER_INVALID -** FAILURE 
* **APP_ALREADY_ASSOCIATED -** FAILURE
* **OPERATION_NOT_ALLOWED -** FAILURE

Also see the [Result Codes guide](../resultinfo) for more information.  

### Return Values

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters

## Example Code
	
	//MAIN BUNDLE PROPERTIES
	Bundle bMain = new Bundle();
	bMain.putString("FOLDER_PATH", "/sdcard/configFolder");

	ArrayList<String> fileNames = new ArrayList<>();
	fileNames.add("datawedge.db");
	fileNames.add("dwprofile_profileA.db");
	fileNames.add("dwprofile_profileB.db");

	bMain.putStringArrayList("FILE_LIST", fileNames);
	// send the intent
	Intent i = new Intent();
	i.setAction(ACTION);
	i.putExtra("com.symbol.datawedge.api.IMPORT_CONFIG", bMain);

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
	  if (intent.hasExtra("RESULT_INFO")) {
	ArrayList<Bundle> bundleList =        intent.getParcelableArrayListExtra("RESULT_INFO");                    
	      if(bundleList!= null && !bundleList.isEmpty()){
	        for(Bundle resultBundle : bundleList){
	            Set<String> keys = resultBundle.keySet();
	            for (String key : keys) {
	                if(key.equalsIgnoreCase("RESULT_CODE")){
	                    resultInfo += key + ": " + resultBundle.getString(key);
	                }else {
	                    resultInfo += key + ": " + resultBundle.getString(key) + "\n";
	                }
	            }
	        }
	      }
	} }


-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

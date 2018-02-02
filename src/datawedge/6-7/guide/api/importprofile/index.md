---
title: Import Profile 
layout: guide.html
product: DataWedge
productversion: '6.7'
---

## IMPORT_PROFILE

Introduced in DataWedge 6.7.

Used to import a Profile, which contains configuration settings for a particular application. 

### Import Behavior

* When the `IMPORT_CONFIG` intent is called, it checks the `FOLDER_PATH` for the presence of configuration files. If `datawedge.db` is found, DataWedge restarts with the settings stored there. 
* If a folder specified with this API contains any Profile configuration files (i.e. `dwprofile_profilename.db`) related to the newly loaded Profile, that Profile loads and the new settings are applied immediately.
* While the `IMPORT_CONFIG` intent is running, the Auto Import function is disabled. 

[More about importing Profiles](../../settings/#importaprofile)

### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.IMPORT_CONFIG", <mainbundle>);

### Parameters

**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.IMPORT_CONFIG"

**BUNDLE**: &lt;mainbundle&gt; (see parameters below)

* **FOLDER_PATH** [String]: (required) The fully qualified on-device path to the file being imported.  

* **FILE_LIST** [String ArrayList]: (optional) Used to specify one or more required database (`.db`) files in the folder specified in `FOLDER_PATH`. If not specified, DataWedge uses files with a `.db` extension in the specified folder. **Can be used to specify a specific file**. 

**Zebra recommends using the `getExternalFilesDirs` method** to identify accessible external storage locations in the device before sending the `IMPORT_PROFILE` intent. For example: 

	File[] fileDirs = getExternalFilesDirs(null);

	Example return:
	/storage/34E4-1117/Android/data/<PackageName>/files
	/storage/sdcard2/0/Android/data/<PackageName>/files
	/storage/emulated/0/Android/data/<PackageName>/files
	
	Note: "34E4-1117" is a symbolic link to an external SDcard

### Result Codes

Following the use of `IMPORT_PROFILE`, DataWedge broadcasts a result intent with the  status (success or failure) of the import. Result info returns as an ArrayList of bundles containing `RESULT_CODE` and `RESULT_CODE_INFO` sections to describe the additional information.

**RESULT_CODE -** INVALID_FOLDER_PATH
**RESULT_CODE_INFO -** “folder path”

**RESULT_CODE -** CONFIG_FILE_NOT_EXIST
**RESULT_CODE_INFO -** “dwprofile_profilename.txt" , “dwA_profilename.db”

New RESULT_CODE set
Following result code will return with the specified folder/file name

**EMPTY_FOLDER_PATH –** `FOLDER_PATH` is empty or not specified
**INVALID_FOLDER_PATH –** Specified `FOLDER_PATH` is invalid
**INVALID_CONFIG_FILE –** Corrupted DataWedge database files present in the folder
**CONFIG_FILE_NOT_EXIST -** No valid DataWedge database files in the folder
**INVALID_FILE_NAME –** Folder contains valid and invalid DataWedge .db file names; returns invalid file name(s)
**CANNOT_READ_FILE –** Cannot read the specified database file

[More about Result Codes](../resultinfo)  

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

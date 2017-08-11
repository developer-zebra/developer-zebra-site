---
title: Set Disabled App List
layout: guide.html
product: DataWedge
productversion: '6.5'
---

## SET_DISABLED_APP_LIST

Introduced in DataWedge 6.5. 

Used to add, remove or update an item on list of apps and activities that are blocked from using DataWedge. Contains [nested bundles](../overview/#nestedbundles). This API also can be used by an app to prevent the app itself from using DataWedge. 

### Function Prototype

	:::javascript
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SET_DISABLED_APP_LIST", "<bundle>");

### Parameters
**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [Bundle]: "com.symbol.datawedge.api.SET_DISABLED_APP_LIST"

#### MAIN BUNDLE

The main bundle `DISABLED_APP_LIST` contains the following properties:

* **CONFIG_MODE** [String]:
 * **UPDATE**: Adds the specified packages and/or activities to the existing list 
 * **REMOVE**: Removes the specified packages and/or activities from existing list
 * **OVERWRITE**: Replaces the existing list with the specified list. **Erases existing list if no apps are specified**.   
* **APP_LIST** [Bundle array]: 
 * **APP_LIST [0]**:
  * **PACKAGE_NAME [String]**: "com.symbol.emdk.barcodesample1"
  * **ACTIVITY_LIST &lt;List&gt;**: [“com.symbol.emdk.barcodesample1.MainActivity” ,”com.symbol.emdk.barcodesample1.ResultsActivity”]

* **APP_LIST [1]**:
 * **PACKAGE_NAME**: "com.symbol.emdk.notificationsample1"
 * **ACTIVITY_LIST &lt;List&gt;**: [“*”]

See [Notes](#notes). 

-----

### Return Values

**APP_LIST [ ]**:

* **APP_LIST [0]**:
 * **PACKAGE_NAME [String]**: "com.symbol.emdk.barcodesample1"
 * **ACTIVITY_LIST &lt;List&gt;**: [“com.symbol.emdk.barcodesample1.MainActivity” ,”com.symbol.emdk.barcodesample1.ResultsActivity”]

* **APP_LIST [1]**:
 * **PACKAGE_NAME**: "com.symbol.emdk.notificationsample1"
 * **ACTIVITY_LIST &lt;List&gt;**: [“*”]

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions, parameters and failures (e.g. Profile not found or associated with an application).


#### Result Codes

DataWedge will return the following error codes if the app includes the intent extras `RECEIVE_RESULT` and `COMMAND_IDENTIFIER` to enable the app to get results using the DataWedge result intent mechanism. See [Example](#example), below. 

* **PARAMETER_INVALID -** CONFIG_MODE not defined or has invalid string value
If mode is set to ‘UPDATE’ or ‘REMOVE’ and ‘APP_LIST’ is not provided.
* **INVALID PACKAGE OR ACTIVITY -** Package or activity name contains invalid characters
* **APP_ALREADY_IN_DISABLED_LIST -** package or activity already in Disabled App List
* **APP_ALREADY_ASSOCIATED -** Activity is associated with an app
* **APP_NOT_IN_DISABLED_LIST -** Package or activity not in disabled app list

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions, parameters and failures (e.g. Profile not found or associated with an application).

-----

### Example

The code below sends an intent to add apps to the Disabled Apps List in DataWedge. To verify results of the switch (or if errors are expected), include the intent extras `RECEIVE_RESULT` and `COMMAND_IDENTIFIER` to get results (also shown).

	:::javascript
	Bundle bMain = new Bundle();

	bMain.putString("CONFIG_MODE ","UPDATE");

	Bundle bundleApp1 = new Bundle();
	bundleApp1.putString("PACKAGE_NAME","com.android.calculator2");
	bundleApp1.putStringArray("ACTIVITY_LIST", new String[]{
	        "com.android.calculator2.Calculator",
	        "com.android.calculator2.Licenses"});

	Bundle bundleApp2 = new Bundle();
	bundleApp2.putString("PACKAGE_NAME","com.android.phone");
	bundleApp2.putStringArray("ACTIVITY_LIST", new String[]{
	        "com.android.phone.EmargencyDialer",
	        "com.android.phone.ADNList",

	        "com.android.phone.Settings"});

	Bundle bundleApp3 = new Bundle();
	bundleApp3.putString("PACKAGE_NAME","com.android.email");
	bundleApp3.putStringArray("ACTIVITY_LIST", new String[]{"*"});

	Bundle bundleApp4 = new Bundle();
	bundleApp4.putString("PACKAGE_NAME","com.symbol.myzebraapp");


	bMain.putParcelableArray("APP_LIST", new Bundle[]{
	        bundleApp1
	        ,bundleApp2
	        ,bundleApp3
	        ,bundleApp4
	});

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.GET_DISABLED_APP_LIST", bMain);
	sendBroadcast(i);

-----

### Notes

* **In UPDATE mode**, if the specified package name exists in the Disabled Apps List, DataWedge add the specified activities to those previously specified for the package. If not, it adds the package and the specified activities.

If mode set as ‘REMOVE’, DataWedge will first check whether given package and activities are available in disabled list. If so it will remove those from the list, otherwise it will return the error as invalid parameters.

APP_LIST [1] example
If mode set as ‘UPDATE’ then DataWedge will be disabled for all the activities of this package.
If mode set as ‘REMOVE’, DataWedge will remove whole package from the disabled list. 
NOTE: DataWege consider wildcard (*) in this scenario only; it is not considered wildcard as substring of package name or activity name. In that case user, should mention whole package name and activity names as parameters.

[after that]
If bundle extra ‘APP_LIST’ is not given as parameter in bundle data, it is valid only when configuration mode is set to ‘OVERWRITE; in that case, it is considered as request to replace existing disabled list with NULL, and hence delete the whole packages and activities in the disabled list.        

If a package or activity is associated with an app, modifications will not per permitted (must be confirmed; I got that from the result codes) 

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

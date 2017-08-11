---
title: Switch Scanner Params
layout: guide.html
product: DataWedge
productversion: '6.5'
---

## SWITCH_SCANNER_PARAMS

Introduced in DataWedge 6.5. 

The application will be able to set scanner parameters (decoders, decoder params, reader params, etc.) by sending an intent to make the scanner works according to the application requirement. For example, when low light environment is detected application should be able to enable illumination in the scanner.

Pre-conditions and assumptions when using the API:
Barcode scanning should be enabled in the active profile
DataWedge has to be enabled and respective profile has to be enabled.
If Intent contains an invalid/ unsupported scanner parameters or values the result code(s) will be sent.


### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SWITCH_SCANNER_PARAMS", "<profile name>");

### Parameters
**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.SWITCH_SCANNER_PARAMS"

**&lt;name, value&gt;** [Bundle]: The Profile name (a case-sensitive string) to set as the active Profile.

###Return Values

DataWedge will return the following error codes if the app includes the intent extras `RECEIVE_RESULT` and `COMMAND_IDENTIFIER` to enable the app to get results using the DataWedge result intent mechanism. See [Example](#example), below. 

* **DATAWEDGE_DISABLED -** DataWedge is disabled
* **PROFILE_DISABLED -** Profile is disabled
* **PLUGIN_DISABLED -** Scanner plug-in is disabled
* **SCANNER_DISABLED -** Scanner is disabled
* **PARAMETER_INVALID -** Given scanner parameter is invalid
* **PARAMETER_NOT_SUPPORTED -** Given scanner parameter is not supported
* **VALUE_INVALID -** Given value for a scanner parameter is invalid
* **VALUE_NOT_SUPPORTED -** Given value for a scanner parameter is not supported


Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions, missing parameters or other failures.


-----

### Example
	// define action and data strings
	String switchToProfile = "com.symbol.datawedge.api.ACTION";
	String extraData = "com.symbol.datawedge.api.SWITCH_TO_PROFILE";

	public void onResume() {
	        super.onResume();
	      
	        // create the intent
	        Intent i = new Intent();
	      
	        // set the action to perform
	        i.setAction(switchToProfile);
	      
	        // add additional info
	        i.putExtra(extraData, "myProfile");
	      
	        // send the intent to DataWedge
	        context.this.sendBroadcast(i);
	}

### Comments
This API function will have no effect if the specified Profile does not exist or is already associated with an application.

DataWedge has a one-to-one relationship between Profiles and activities; a Profile can be associated only with a single activity. When a Profile is first created, it's not associated with any application, and will not be activated until associated. This makes it possible to create multiple unassociated Profiles.

This API function activates such Profiles.

For example, let's say that ProfileA is unassociated and ProfileB is associated with activity B. If activity A is launched and uses the `SWITCH_TO_PROFILE` function to switch to ProfileA, then ProfileA will be active whenever activity A is in the foreground. When activity B comes to the foreground, DataWedge will automatically switch to ProfileB. 

When activity A returns to the foreground, the app must use `SWITCH_TO_PROFILE` again to switch back to ProfileA. This would be done in the `onResume` method of activity A.

### Notes
* Because DataWedge will automatically switch Profile when the activity is paused, Zebra recommends that this API function be called from the onResume method of the activity.
* After switching to a Profile, this unassociated Profile does not get assigned to the application/activity and is available to be used in the future with a different app/activity.
* For backward compatibility, DataWedge’s automatic Profile switching is not affected by the above API commands. This why the commands work only with unassociated Profiles and apps.

DataWedge auto Profile switching works as follows: 

**Every second…**
* Sets **newProfileId** to the associated Profile ID of the current foreground activity. 
* If no associated Profile is found, sets **newProfileId** to the associated Profile ID of the current foreground app. 
* If no associated Profile is found, sets **newProfileId** to the current default Profile (which  MAY NOT be Profile0). 
* Checks the **newProfileId** against the **currentProfileId**. If they are different: 
	* deactivates current Profile
	* activates new Profile (**newProfileId**)
	* sets **currentProfileId** = **newProfileId**

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

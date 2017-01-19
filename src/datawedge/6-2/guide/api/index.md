---
title: Data Capture API 
layout: guide.html
product: DataWedge
productversion: '6.2'
---

## Overview
The Data Capture API operates primarily through Android intents--specific commands that can be used by other applications to control data capture without the need to directly access the hardware APIs of the device. This guide describes the functionality of the intents supported by DataWedge and their effects on data capture and the DataWedge app itself. 

**DataWedge 6.2 implements a new structure for launching Android intents**, which is part of a transition that will ultimately support multiple intents launched as a single command. As part of this transition, several new commands are introduced in 6.2 that use a new command syntax. DataWedge continues to support all original commands using their original syntax. 

#### Requirements
This guide assumes experience with Android programming and familiarity with [Android Intents](https://developer.android.com/reference/android/content/Intent.html). It also requires knowledge of DataWedge usage, features and terminology. For more information about DataWedge, see the DataWedge [Setup Guide](../setup) and the [Advanced Guide](../advanced). It also might be helpful to read the DataWedge section of the Integrator Guide included with Zebra devices.

#### Interfaces
An application accesses the original DataWedge APIs by broadcasting an intent, and uses the primary pieces of information in an intent--Action and Data--to specify which API function to perform. 

**Original DataWedge APIs**: 

* **SoftScanTrigger -** used to start, stop or toggle a software scanning trigger
* **ScannerInputPlugin -** enable/disable the scanner Plug-in used by the active Profile
* **EnumerateScanners -** returns a list of scanners available on the device
* **SetDefaultProfile -** sets the specified Profile as the default Profile
* **ResetDefaultProfile -** resets the default Profile to Profile0
* **SwitchToProfile -** switches to the specified Profile

**New APIs in DataWedge 6.2**: 

* **DELETE_PROFILE -** used to delete one or more Profiles
* **GET_PROFILES_LIST -** returns a list of Profiles in the device
* **CLONE_PROFILE -** creates a copy of an existing Profile
* **RENAME_PROFILE -** changes the name of an existing Profile 
* **GET_ACTIVE_PROFILE -** returns the name of the currently selected Profile
* **ENABLE_DATAWEDGE -** used to enable/disable the DataWedge app

------

## DataWedge 6.2 APIs
The APIs in the table below are supported only on DataWedge 6.2 and higher. For the exact usage syntax, sample code for each interface follows the table. 

<table rules="all"
width="100%"
frame="border"
cellspacing="0" cellpadding="4">
<caption class="title"></caption>
<!--
<col width="25%" />
<col width="25%" />
<col width="50%" />
-->
<thead>
<tr>
<th align="left" valign="top">Command</th>
<th align="left" valign="top">Intent Extra(s)</th>
<th align="left" valign="top">Value</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left" valign="top"><p class="table">Delete a Profile</p></td>
<td align="left" valign="top"><p class="table"><strong>com.symbol.datawedge.api.DELETE_PROFILE</strong></p></td>
<td align="left" valign="top"><p class="table">Type: String array<br>Values: List of profiles to be deleted<br> <strong>Note: The “*” character deletes all deletable profiles</strong></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Query the Profile list</p></td>
<td align="left" valign="top"><p class="table"><strong>com.symbol.datawedge.api.GET_PROFILES_LIST</strong></p></td>
<td align="left" valign="top"><p class="table">Type: String<br>Values: Empty<br>Result: Intent Extra<br>Type: String array list<br>Name: <strong>com.symbol.datawedge.api.RESULT_GET_PROFILES_LIST</strong><br><strong>Note: Does not list hidden profiles</strong></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Clone a Profile</p></td>
<td align="left" valign="top"><p class="table"><strong>com.symbol.datawedge.api.CLONE_PROFILE</strong></p></td>
<td align="left" valign="top"><p class="table">Type: String array<br>Values: Source profile name, new profile name<br></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Rename a Profile</p></td>
<td align="left" valign="top"><p class="table"><strong>com.symbol.datawedge.api.RENAME_PROFILE</strong></p></td>
<td align="left" valign="top"><p class="table">Type: String array<br>Values: Profile to be renamed, new name for Profile</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Get the Active Profile</p></td>
<td align="left" valign="top"><p class="table"><strong>com.symbol.datawedge.api.GET_ACTIVE_PROFILE</strong></p></td>
<td align="left" valign="top"><div><div class="paragraph"><p>Type: String<br>Values: Empty<br> Result: Intent Extra<br>Type: String<br>Name: com.symbol.datawedge.api.RESULT_ACTIVE_PROFILE</p></div></div></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Enable/Disable DataWedge</p></td>
<td align="left" valign="top"><p class="table"><strong>com.symbol.datawedge.api.ENABLE_DATAWEDGE</strong></p></td>
<td align="left" valign="top"><div><div class="paragraph"><p>Type: Boolean<br>Values: true/false<br>True = Enabled<br> False = Disabled</p></div></div></td>
</tr>
</tbody>
</table>
</div>

-----

### Sample Code
The sample code shown below is for APIs supported only on DataWedge 6.2 and higher. 

#### DELETE_PROFILE 


		:::javascript
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		String[] profiles = {"MyProfile"};
		i.putExtra("com.symbol.datawedge.api.DELETE_PROFILE", profiles);

-----

#### GET_PROFILES_LIST


		:::javascript
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.GET_PROFILES_LIST", "");
		//send intent
		Intent i = getIntent();
		String[] profiles = i.gettExtra("com.symbol.datawedge.api.RESULT_GET_PROFILES_LIST");

-----

#### CLONE_PROFILE


		:::javascript
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION"); 
		String[] values = {"Profile0", "MyProfile"};
		i. putExtra("com.symbol.datawedge.api.CLONE_PROFILE ", values);


-----

#### RENAME_PROFILE 


		:::javascript
		Intent i = newIntent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		String[] values = {"TestProfile", "MyProfile"};
		i.putExtra("com.symbol.datawedge.api.RENAME_PROFILE ", values);


-----

#### GET_ACTIVE_PROFILE


		:::javascript
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.GET_ACTIVE_PROFILE", "");
		//send intent
		Intent i = getIntent();
		String profile = i.gettExtra("com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE");


-----

#### ENABLE_DATAWEDGE

		:::javascript
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.ENABLE_DATAWEDGE", enable);
		//send intent;


-----

## DataWedge 6.x APIs
The following APIs are supported on DataWedge 6.x and higher using the syntax described below. 

### SoftScanTrigger
The SoftScanTrigger API command can be used to start, stop or toggle a software scanning trigger. **Valid only when Barcode Input is enabled in the active Profile**.  

####FUNCTION PROTOTYPE

	Intent i = new Intent();
	i.setAction(ACTION);
	i.putExtra(EXTRA_DATA, "<parameter>");


####PARAMETERS

**ACTION**: String "com.symbol.datawedge.api.ACTION_SOFTSCANTRIGGER"

**EXTRA_DATA**: String "com.symbol.datawedge.api.EXTRA_PARAMETER"

**&lt;parameter&gt;**: The parameter as a string, using any of the following: 

* "START_SCANNING" - to start scanning

* "STOP_SCANNING" - to stop scanning

* "TOGGLE_SCANNING" - to toggle between start scanning and stop scanning

####RETURN VALUES
None.

Error and debug messages will be logged to the Android logging system which then can be viewed and filtered by the logcat command. You can use logcat from an ADB shell to view the log messages, e.g.

	$ adb logcat -s DWAPI

Error messages will be logged for invalid actions and parameters

####EXAMPLE

	// define action and data strings
	String softScanTrigger = "com.symbol.datawedge.api.ACTION_SOFTSCANTRIGGER";
	String extraData = "com.symbol.datawedge.api.EXTRA_PARAMETER";
	// create the intent
	Intent i = new Intent();
	// set the action to perform
	i.setAction(softScanTrigger);
	// add additional info
	i.putExtra(extraData, "START_SCANNING");
	// send the intent to DataWedge

	context.this.sendBroadcast(i);

####COMMENTS 
The received API commands are not queued; API commands are processed immediately. Commands received while the current API command is still being processed may be ignored. For example, attempting to send the soft scan trigger start command immediately after sending the scanner enable command will result in the soft scan trigger command being ignored because the scanner enable will not have had time to complete. In this case, the soft scan trigger command should be delayed sufficiently for the scanner enable to complete; one example of how this could be done is given below.

	int triggerDelay = 250; // delay in milliseconds

	Handler handler = new Handler();
	handler.postDelayed(new Runnable() {
	        public void run() {
	                // for clarity, assume the following method contains the code in the example above
	                startSoftScan();
	        }
	}, triggerDelay);

------

### ScannerInputPlugin
The ScannerInputPlugin API command can be used to enable/disable the scanner plug-in being used by the currently active Profile. Disabling the scanner plug-in effectively disables scanning in that Profile, regardless of whether the Profile is associated or unassociated. **Valid only when Barcode Input is enabled in the active Profile**. 

**Note**: Use of this API changes only the runtime status of the scanner; it does not make persistent changes to the Profile. 

####FUNCTION PROTOTYPE

	Intent i = new Intent();
	i.setAction(ACTION);
	i.putExtra(EXTRA_DATA, "<parameter>");


####PARAMETERS

**ACTION**: String "com.symbol.datawedge.api.ACTION_SCANNERINPUTPLUGIN"

**EXTRA_DATA**: String "com.symbol.datawedge.api.EXTRA_PARAMETER"

**&lt;parameter**&gt;: The parameter as a string, using either of the following:

* "ENABLE_PLUGIN" - enables the plug-in
* "DISABLE_PLUGIN" - disables the plug-in

####RETURN VALUES
None.

Error and debug messages will be logged to the Android logging system which then can be viewed and filtered by the logcat command. You can use logcat from an ADB shell to view the log messages, e.g.

	$ adb logcat -s DWAPI

Error messages will be logged for invalid actions and parameters. 


####EXAMPLE

	// define action and data strings
	String scannerInputPlugin = "com.symbol.datawedge.api.ACTION_SCANNERINPUTPLUGIN";
	String extraData = "com.symbol.datawedge.api.EXTRA_PARAMETER";

	public void onResume() {
	        // create the intent
	        Intent i = new Intent();
	        // set the action to perform
	        i.setAction(scannerInputPlugin);
	        // add additional info
	        i.putExtra(extraData, "DISABLE_PLUGIN");
	        // send the intent to DataWedge
	        context.this.sendBroadcast(i);
	}

####COMMENTS
This Data Capture API intent will allow the scanner plug-in for the current Profile to be enabled or disabled. For example, let’s say that activity A launches and uses the Data Capture API intent to switch to ProfileA in which the scanner plug-in is enabled, then at some point it uses the Data Capture API to disable the scanner plug-in. Activity B is launched. In DataWedge, ProfileB is associated with activity B. DataWedge switches to ProfileB. When activity A comes back to the foreground, in the onResume method, activity A will need to use the Data Capture API intent to switch back to ProfileA, then use the Data Capture API intent again to disable the scanner plug-in, to return back to the state it was in.

####NOTE
The above assumes that ProfileA is not associated with any applications/activities, therefore when focus switches back to activity A, DataWedge will not automatically switch to ProfileA therefore activity A must switch back to ProfileA in its onResume method.
Because DataWedge will automatically switch Profile when an activity is paused, it is recommended that this API function be called from the onResume method of the activity.

------

### EnumerateScanners
The enumerateScanners API command can be used to get a list of scanners available on the device.

####FUNCTION PROTOTYPE

	Intent i = new Intent();
	i.setAction(ACTION);

####PARAMETERS
**ACTION**: String "com.symbol.datawedge.api.ACTION_ENUMERATESCANNERS"

####RETURN VALUES
The enumerated list of scanners will be returned via a broadcast Intent. The broadcast Intent action is "com.symbol.datawedge.api.ACTION_ENUMERATEDSCANNERLIST" and the list of scanners is returned as a string array (see the example below).

Error and debug messages will be logged to the Android logging system which then can be viewed and filtered by the logcat command. You can use logcat from an ADB shell to view the log messages, e.g.

	$ adb logcat -s DWAPI

Error messages will be logged for invalid actions and parameters. 

####EXAMPLE

	// first send the intent to enumerate the available scanners on the device
	// define action string
	String enumerateScanners = "com.symbol.datawedge.api.ACTION_ENUMERATESCANNERS";
	// create the intent
	Intent i = new Intent();
	// set the action to perform
	i.setAction(enumerateScanners);
	// send the intent to DataWedge
	context.this.sendBroadcast(i);

	// now we need to be able to receive the enumerate list of available scanners
	String enumeratedList = "com.symbol.datawedge.api.ACTION_ENUMERATEDSCANNERLIST";
	String KEY_ENUMERATEDSCANNERLIST = "DataWedgeAPI_KEY_ENUMERATEDSCANNERLIST";
	// Create a filter for the broadcast intent
	IntentFilter filter = new IntentFilter();
	filter.addAction(enumeratedList);
	registerReceiver(myBroadcastReceiver, filter);

	// now we need a broadcast receiver
	private BroadcastReceiver myBroadcastReceiver = new BroadcastReceiver() {
	        @Override
	        public void onReceive(Context context, Intent intent) {
	                String action = intent.getAction();
	                if (action.equals(enumeratedList)) {
	                        Bundle b = intent.getExtras();
	                        String[] scanner_list = b.getStringArray(KEY_ENUMERATEDSCANNERLIST);
	                }
	        }
	};

####COMMENTS
The scanner and its parameters are set based on the currently active Profile.

------

### SetDefaultProfile
The `setDefaultProfile` API function can be used to set the specified Profile as the default Profile.

**A Profile specified using this method MUST NOT already be associated with another application**. 

####DEFAULT PROFILE RECAP
Profile0 is the generic Profile used when there are no user-created Profiles associated with an application.	

Profile0 can be edited but cannot be associated with an application. That is, DataWedge allows manipulation of plug-in settings for Profile0 but it does not allow assignment of a foreground application. This configuration allows DataWedge to send output data to any foreground application other than applications associated with user-defined Profiles when Profile0 is enabled.

Profile0 can be disabled to allow DataWedge to send output data only to those applications that are associated in user-defined Profiles. For example, create a Profile associating a specific application, disable Profile0 and then scan. DataWedge only sends data to the application specified in the user-created Profile. This places an additional layer of security on DataWedge, permitting data to be sent only to specified applications. 

####USAGE SCENARIO
If a launcher application has a list of apps that a user can launch and none has been associated with a DataWedge Profile, the `setDefaultProfile` method can be used to associate a Profile to any app selected by the user (otherwise Profile0 will be used). When the user-selected app is launched, DataWedge auto-Profile switching will switch to the newly specified Profile. 

If the launched app already had an associated DataWedge Profile, the `setDefaultProfile` method call will be ignored and its previously specified Profile will be loaded. When control is returned to the launcher application, `resetDefaultProfile` can be used to reset the default Profile.


####FUNCTION PROTOTYPE

	:::javascript
	Intent i = new Intent();
	i.setAction(ACTION);
	i.putExtra(EXTRA_DATA, "<profile name>");


####PARAMETERS
**ACTION**: String "com.symbol.datawedge.api.ACTION_SETDEFAULTPROFILE"

**EXTRA_DATA**: String "com.symbol.datawedge.api.EXTRA_PROFILENAME"

**&lt;profile name**&gt;: The Profile name (a case-sensitive string) to set as the default Profile.

####RETURN VALUES
None.

Error and debug messages will be logged to the Android logging system which then can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages. For example:

	$ adb logcat -s DWAPI

Error messages will be logged for invalid actions, parameters and failures (e.g. Profile not found or associated with an application).

####EXAMPLE

	:::javascript
	// define action and data strings
	String setDefaultProfile = "com.symbol.datawedge.api.ACTION_SETDEFAULTPROFILE";
	String extraData = "com.symbol.datawedge.api.EXTRA_PROFILENAME";

	public void onResume() {
	        // create the intent
	        Intent i = new Intent();
	        // set the action to perform
	        i.setAction(setDefaultProfile);
	        // add additional info
	        i.putExtra(extraData, "myProfile");
	        // send the intent to DataWedge
	        context.this.sendBroadcast(i);
	}

####COMMENTS
The API command will have no effect if the specified Profile does not exist or if the specified Profile is already associated with an application. DataWedge will automatically switch Profiles when the activity is paused, so it is recommended that this API function be called from the onResume method of the activity.

Zebra recommends that this Profile be created to cater to all applications/activities that would otherwise default to Profile0. This will ensure that these applications/activities will not inadvertently switch scanner-device configurations. For example, let’s say that Profile0 is the default Profile, and it is configured to use the camera as the barcode scanner. If only the Browser application is used to scan barcodes with the camera, DataWedge always scans with the camera and enters the acquired data into the Browser as expected. But if an application is later launched that changes to a Profile using the blockbuster as the barcode scanner, the Browser application--which is set to use the default Profile--will be unexpectedly reconfigured to use the blockbuster for scanning the next time it's used. **To ensure that the Browser continues to use the camera as the barcode scanner in this scenario, simply create a Profile that specifies the camera as the barcode scanner and associate it with the Browser**.

------

### ResetDefaultProfile
The `resetDefaultProfile` API function can be used to reset the default Profile back to Profile0.

####FUNCTION PROTOTYPE

	:::javascript
	Intent i = new Intent();
	i.setAction(ACTION);
	i.putExtra(EXTRA_DATA);


####PARAMETERS

**ACTION**: String "com.symbol.datawedge.api.ACTION_RESETDEFAULTPROFILE"

**EXTRA_DATA**: String "com.symbol.datawedge.api.EXTRA_PROFILENAME"

####RETURN VALUES
None.

Error and debug messages will be logged to the Android logging system, which then can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages. For example: 

	$ adb logcat -s DWAPI

Error messages will be logged for invalid actions, parameters and failures (e.g. Profile not found or associated with an application).

####EXAMPLE

	// define action string
	String resetDefaultProfile = "com.symbol.datawedge.api.ACTION_RESETDEFAULTPROFILE";

	public void onResume() {
	        // create the intent
	        Intent i = new Intent();
	        // set the action to perform
	        i.setAction(resetDefaultProfile);
	        context.this.sendBroadcast(i);
	}

####COMMENTS
None.

------

### SwitchToProfile
The `SwitchToProfile` API action can be used to switch to the specified Profile, **as long as that profile is not already associated with another application**.

####PROFILES RECAP
DataWedge is based on Profiles and plug-ins. A Profile contains information on how DataWedge should behave with different applications.

Profile information consists of:

* Associated application
* Input plug-in configurations
* Output plug-in configurations
* Process plug-in configurations

DataWedge includes a default Profile, Profile0, that is created automatically the first time DataWedge runs.

Using Profiles, each application can have a specific DataWedge configuration. For example, each user application can have a Profile which outputs scanned data in the required format when that application comes to the foreground. DataWedge can be configured to process the same set of captured data differently based on the requirements of each application.

####NOTE
A single Profile may be associated with one or many activities/apps, however, given an activity, only one Profile may be associated with it.

####USAGE SCENARIO
Let’s say an application has two activities. ActivityA only requires EAN13 barcodes to be scanned. ActivityB only requires MSR card data. ProfileB is configured to only scan EAN13 barcodes and is left unassociated. ProfileM is configured to only accept MSR input and is left unassociated. When ActivityA launches it uses `SwitchToProfile` to activate ProfileB. Similarly, when ActivityB launches it uses `SwitchToProfile` to activate ProfileM.

If another activity/app comes to the foreground, DataWedge auto Profile switching will set the DataWedge Profile accordingly either to the default Profile or to an associated Profile.

When ActivityA (or ActivityB) comes back to the foreground it will use `SwitchToProfile` to reset the Profile back to ProfileB (or ProfileM).

####FUNCTION PROTOTYPE

	Intent i = new Intent();
	i.setAction(ACTION);
	i.putExtra(EXTRA_DATA, "<profile name>");

####PARAMETERS
**ACTION**: String "com.symbol.datawedge.api.ACTION_SWITCHTOPROFILE"

**EXTRA_DATA**: String "com.symbol.datawedge.api.EXTRA_PROFILENAME"

**&lt;profile name**&gt;: The Profile name to switch to as a string (case-sensitive).

####RETURN VALUES
None.

Error and debug messages will be logged to the Android logging system which then can be viewed and filtered by the logcat command. You can use logcat from an ADB shell to view the log messages, e.g.

	$ adb logcat -s DWAPI

Error messages will be logged for invalid actions, parameters and failures (e.g. Profile not found or associated with an application).

####EXAMPLE
	// define action and data strings
	String switchToProfile = "com.symbol.datawedge.api.ACTION_SWITCHTOPROFILE";
	String extraData = "com.symbol.datawedge.api.EXTRA_PROFILENAME";

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

####COMMENTS
This API function will have no effect if the specified Profile does not exist or is already associated with an application.

DataWedge has a one-to-one relationship between Profiles and activities; a Profile can be associated only with a single activity. When a Profile is first created, it's not associated with any application, and will not be activated until associated. This makes it possible to create multiple unassociated Profiles.

This API function activates such Profiles.

For example, let's say that ProfileA is unassociated and ProfileB is associated with activity B. If activity A is launched and uses `SwitchToProfile` function to switch to ProfileA, then ProfileA will be active ehenever activity A is in the foreground. When activity B comes to the foreground, DataWedge will automatically switch to ProfileB. 

When activity A returns to the foreground, the app must use `SwitchToProfile` again to switch back to ProfileA. This would be done in the `onResume` method of activity A.

####Notes
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

------

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

---
title: Reset Default Profile 
layout: guide.html
product: DataWedge
productversion: '6.5'
---

## RESET_DEFAULT_PROFILE

Used to reset the default Profile to Profile0.

### Function Prototype

	:::javascript
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.RESET_DEFAULT_PROFILE", "");


###Parameters

**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.RESET_DEFAULT_PROFILE"

### Result Codes

DataWedge will return the following error codes if the app includes the intent extras `RECEIVE_RESULT` and `COMMAND_IDENTIFIER` to enable the app to get results using the DataWedge result intent mechanism. See [Example](#example), below. 

* **PROFILE_ALREADY_SET -** FAILURE

### Return Values
(None)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions, parameters and failures (e.g. Profile not found or associated with an application).

### Example

	::javascript
	// define action string
	String action = "com.symbol.datawedge.api.ACTION";
	String extraData = "com.symbol.datawedge.api.RESET_DEFAULT_PROFILE";

	public void onResume() {
		// create the intent
		Intent i = new Intent();

		// set the action to perform
		i.setAction(action);
		i.putExtra(extraData, ""); // empty since a name is not required
		this.sendBroadcast;
	}

<!--
6/27/17- per eng. TUT-14724:
- added an empty string to extra data (in prototype and sample)
-->


###Comments
(None)

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

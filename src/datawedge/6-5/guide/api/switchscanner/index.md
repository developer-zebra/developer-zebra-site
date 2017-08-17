---
title: Switch Scanner 
layout: guide.html
product: DataWedge
productversion: '6.5'
---

## SWITCH_SCANNER

Introduced in DataWedge 6.5. 

Used to switch to a specific scanner at runtime, enabling selection of the optimal scanning device for the application, requirement or situation when the app is run. **Scanner must be available to the device at runtime**. 

### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SWITCH_SCANNER", "<scanner index>");

### Parameters
**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.SWITCH_SCANNER"

**&lt;scanner index&gt;**[string]: The index number of the scanner (as a string) to use in the active Profile

**Use [ENUMERATE_SCANNERS](../enumeratescanners) to retrieve the index of scanners**. 

### Result Codes

DataWedge will return the following error codes if the app includes the intent extras `RECEIVE_RESULT` and `COMMAND_IDENTIFIER` to enable the app to get results using the DataWedge result intent mechanism. See [Example](#example), below. 

* **DATAWEDGE_DISABLED -** DataWedge is disabled
* **PROFILE_DISABLED -** Profile is disabled
* **PLUGIN_DISABLED -** Scanner plug-in is disabled
* **SCANNER_DISABLED -** Scanner is disabled
* **PARAMETER_INVALID -** Given scanner parameter is invalid
* **PARAMETER_NOT_SUPPORTED -** Given scanner parameter is not supported

Also see the [Result Codes guide](../resultinfo) for more information.  

### Return Values

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions, missing parameters or other failures.

-----

### Example
The code below shows how to pass an intent to change to scanner "3" from the current scanner. To verify results of the switch (or if errors are expected), include the intent extras `RECEIVE_RESULT` and `COMMAND_IDENTIFIER` to get results.

	:::javascript
	String scannerIndex = “3”;

	// create the intent and action
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.SWITCH_SCANNER", scannerIndex);

	// generate result codes
		i.putExtra("RECEIVE_RESULT","true");
		i.putExtra("COMMAND_IDENTIFIER","123456789");
		     
	// send the intent
		this.sendBroadcast(i); 

### Notes
(none)

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

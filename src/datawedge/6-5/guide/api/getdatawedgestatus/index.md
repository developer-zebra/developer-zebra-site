---
title: Get DataWedge Status 
layout: guide.html
product: DataWedge
productversion: '6.5'
---

## GET_DATAWEDGE_STATUS 

Introduced in DataWedge 6.4.

Returns the status of DataWedge as "enabled" or "disabled" as a bundle extra.

### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.GET_DATAWEDGE_STATUS", "");

### Parameters

**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.GET_DATAWEDGE_STATUS"

**EXTRA VALUE**: Empty string
 

### Return Values
Returns a Bundle with the status ("enabled" or "disabled") of DataWedge. 

**EXTRA NAME**: "com.symbol.datawedge.api.GET_DATAWEDGE_STATUS_RESULT" 

**EXTRA TYPE**: Bundle

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

### Example

	//SENDING THE INTENT
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.GET_DATAWEDGE_STATUS", "");
	this.sendBroadcast(i);

	//RECEIVING THE RESULT
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	intent.getBundleExtra("com.symbol.datawedge.api.GET_DATAWEDGE_STATUS_RESULT");
	this.sendBroadcast(i);

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

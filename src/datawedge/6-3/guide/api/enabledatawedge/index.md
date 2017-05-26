---
title: Enable DataWedge
layout: guide.html
product: DataWedge
productversion: '6.3'
---

## ENABLE_DATAWEDGE

Boolean value used to enable (true) or disable (false) DataWedge on the device.

### Function Prototype

	:::java
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.ENABLE_DATAWEDGE", <value>);

###Parameters

**ACTION** [String]: `com.symbol.datawedge.api.ACTION`

**EXTRA_DATA** [String]: `com.symbol.datawedge.api.ENABLE_DATAWEDGE`

**Boolean &lt;value&gt;**: True or False 

### Return Values
(None)

Error and debug messages are logged to the Android logging system, which then can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

### Example

	:::java
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.ENABLE_DATAWEDGE", false);
	context.this.sendBroadcast(i);

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

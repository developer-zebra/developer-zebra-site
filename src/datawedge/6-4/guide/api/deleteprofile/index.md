---
title: Delete Profile 
layout: guide.html
product: DataWedge
productversion: '6.4'
---

## DELETE_PROFILE

Used to delete an existing _**deletable**_ Profile, **including the "Launcher" Profile**.  

### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.DELETE_PROFILE", <values>);


### Parameters

**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.DELETE_PROFILE"

**String[ ] &lt;values&gt;**: List of Profiles to be deleted. 

**WARNING: Supports use of the wildcard character (“*”), which deletes all deletable Profiles from the configuration, including the "Launcher" Profile**.

### Return Values
(None)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters

### Example

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	String[] values = {"My profile"};
	i.putExtra("com.symbol.datawedge.api.DELETE_PROFILE", values);
	context.this.sendBroadcast(i);

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

---
title: Create Profile 
layout: guide.html
product: DataWedge
productversion: '6.3'
---

## CREATE_PROFILE

Used to create a new DataWedge Profile on the device. If a Profile of the same name already exists on the device, the intent will fail. 

### Function Prototype

	:::java
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION"); 
	i.putExtra("com.symbol.datawedge.api.CREATE_PROFILE", "");


### Parameters

**ACTION** [String]: `com.symbol.datawedge.api.ACTION`

**EXTRA_DATA** [String]: `com.symbol.datawedge.api.CREATE_PROFILE`

**String[ ] &lt;values&gt;**: Name of Profile to be created

### Return Values
(None)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

### Example

		:::java
		private void createProfile() { 
	    Intent i = new Intent(); 
	    i.setAction("com.symbol.datawedge.api.ACTION"); 
	    i.putExtra("com.symbol.datawedge.api.CREATE_PROFILE", ""); 
	    this.sendBroadcast(i); 
	}

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

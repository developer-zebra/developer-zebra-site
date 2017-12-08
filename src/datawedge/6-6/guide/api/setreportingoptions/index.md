---
title: Set Reporting Options 
layout: guide.html
product: DataWedge
productversion: '6.6'
---

## SET_REPORTING_OPTIONS

Introduced in DataWedge 6.6.

Used to configure reporting options, which are optionally generated after importing databases and Profiles. More [about import Reporting](../../settings/#reporting).

### Function Prototype

	:::java
	Intent i = new Intent();
	i.setAction(ACTION);
	i.putExtra("com.symbol.datawedge.api.SET_REPORTING_OPTIONS", bReporting);

### Parameters

**ACTION** [String]: `com.symbol.datawedge.api.ACTION`

**EXTRA_DATA** [String]: `com.symbol.datawedge.api.SET_REPORTING_OPTIONS`

**Reporting Options**:
* **reporting_enabled -** controls whether to enable reports, generated following import operations. 
 * true
 * false (default)
* **reporting_generate_option -** controls whether reporting is generated for manual imports, auto imports, or both.
 * manual
 * auto
 * both (default)
* **reporting_show_for_manual_import -** controls whether to displays a generated report (for manual imports only) using the default browser on the device. 
 * true
 * false (default)

### Return Values

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

## Example Code
The code below enables reporting on the device, enables reports for manual and automatic imports, and enables manual-import reports to be displayed: 

	:::java
	Intent i = new Intent();
	i.setAction(ACTION);

	Bundle bReporting = new Bundle();
	bReporting.putString("reporting_enabled", "false"); //true, false
	bReporting.putString("reporting_generate_option", "both"); //manual, auto, both
	bReporting.putString("reporting_show_for_manual_import", "true"); //true, false

	i.putExtra("com.symbol.datawedge.api.SET_REPORTING_OPTIONS", bReporting);
	i.putExtra(ACTION_EXTRA_SEND_RESULT,"true");
	i.putExtra("COMMAND_IDENTIFIER", "123456789");
	this.sendBroadcast(i);

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

---
title: Soft Scan Trigger 
layout: guide.html
product: DataWedge
productversion: '6.3'
---

## SOFT_SCAN_TRIGGER 

Used to start, stop or toggle a software scanning trigger. 

> **Functional only when Barcode Input is enabled in the active Profile**.

### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SOFT_SCAN_TRIGGER", "<parameter>");


### Parameters

**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.SOFT_SCAN_TRIGGER"

**&lt;parameter&gt;**: The parameter as a string, using any of the following: 

* `START_SCANNING` - starts scanning when triggered

* `STOP_SCANNING` - stops or interrupts scanning when triggered

* `TOGGLE_SCANNING` - toggles between `START_SCANNING` and `STOP_SCANNING` when triggered

### Return Values
(None)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

### Example

	// define action and data strings
	String softScanTrigger = "com.symbol.datawedge.api.ACTION";
	String extraData = "com.symbol.datawedge.api.SOFT_SCAN_TRIGGER";
	
	// create the intent
	Intent i = new Intent();

	// set the action to perform
	i.setAction(softScanTrigger);
	
	// add additional info
	i.putExtra(extraData, "START_SCANNING");
	
	// send the intent to DataWedge
	context.this.sendBroadcast(i);

### Comments 
The soft scan trigger command should be delayed sufficiently to enable the scanner to complete the task. Delay code similar to that shown below could be used:

	// SAMPLE DELAY CODE
	int triggerDelay = 250; // delay in milliseconds

	Handler handler = new Handler();
	handler.postDelayed(new Runnable() {
	        public void run() {
	                // for clarity, assume the following method contains the code in the example above
	                startSoftScan();
	        }
	}, triggerDelay);

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

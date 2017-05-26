---
title: Enumerate Scanners 
layout: guide.html
product: DataWedge
productversion: '6.3'
---

## ENUMERATE_SCANNERS

Generates a numbers list (index) of scanners available on the device. **The scanner index varies by device; it depends on the number of supported scanners (internal and/or external) installed and/or connected to the device at the time the index is generated**. 

### Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.ENUMERATE_SCANNERS", "");

### Parameters
**ACTION** [String]: "com.symbol.datawedge.api.ENUMERATE_SCANNERS"

### Return Values
The enumerated list of scanners is returned via the broadcast intent `com.symbol.datawedge.api.ACTION_ENUMERATEDSCANNERLIST`. The list of scanners is returned as a string array (see example below).

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters. 

### Example

	// First send the intents to enumerate the available scanners on the device
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.ENUMERATE_SCANNERS", "");
	
	// define action string:
	String enumerateScanners = "com.symbol.datawedge.api.ACTION";

	// create the intent:
	Intent i = new Intent();
	
	// set the action to perform:
	i.setAction(enumerateScanners);
	
	// send the intent to DataWedge:
	context.this.sendBroadcast(i);

	// enable the app to receive the enumerated list of available scanners:
	String enumeratedList = "com.symbol.datawedge.api.ACTION";
	String KEY_ENUMERATEDSCANNERLIST = "DWAPI_KEY_ENUMERATEDSCANNERLIST";

	// create a filter for the broadcast intent
	IntentFilter filter = new IntentFilter();
	filter.addAction(enumeratedList);
	registerReceiver(myBroadcastReceiver, filter);

	// create a broadcast receiver
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

### Comments
The scanner and its parameters are set based on the currently active Profile.

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

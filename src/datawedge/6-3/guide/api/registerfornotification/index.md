---
title: Register for Notification 
layout: guide.html
product: DataWedge
productversion: '6.3'
---

## REGISTER_FOR_NOTIFICATION

Used to register/unregister an app to receive a notification when the status of a DataWedge parameter changes. 

### Function Prototype

	Bundle b = new Bundle();
		b.putString("com.symbol.datawedge.api.APPLICATION_NAME","com.example.MyApp");
		b.putString("com.symbol.datawedge.api.NOTIFICATION_TYPE","PROFILE_SWITCH");
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.REGISTER_FOR_NOTIFICATION", b);
		this.sendBroadcast(i);

### Parameters

**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.REGISTER_FOR_NOTIFICATION"

**BUNDLE**: 

* `APPLICATION_NAME` - Package name of the app to register 
* `NOTIFICATION_TYPE` - Supported types:
 * `PROFILE_SWITCH`  
 * `SCANNER_STATUS` 

### Return Values
Returns a bundle with status of the requested DataWedge `NOTIFICATION_TYPE`

**EXTRA NAME**: "com.symbol.datawedge.api.NOTIFICATION"

**BUNDLE**:

* `PROFILE_SWITCH`: 
 * NOTIFICATION_TYPE: "PROFILE_SWITCH"
 * PROFILE_NAME: &lt;name of Profile now in use&gt;

* `SCANNER_STATUS`: 
 * NOTIFICATION_TYPE: "SCANNER_STATUS" 
 * SCANNER_STATUS: WAITING, SCANNING, CONNECTED, DISCONNECTED or DISABLED

> **Scanner status notifications are sent <u>only if the scanner in the active Profile is enabled</u>**. 

**WAITING** – Scanner is enabled and ready to scan. When profile is switched and the scanner is enabled and waiting for trigger or soft scan intent.  When this event is received to the application it can broadcast a Soft scan intent to start scanning. 

**SCANNING** - Scanner has emitted the scan beam and scanning in progress. When application needs to disable other controls in the activity while the scanning in progress it can do the disabling when receiving this event.

**CONNECTED** – Bluetooth scanner has connected with the device. This event can be used by applications to enable the Bluetooth scanner when it connected with the device. For that Scanner selection, should be set to Auto in the currently active profile. When this event is received, application can send the Disable scanner intent and the send the Enable scanner intent which will enable the Bluetooth scanner. 

**DISCONNECTED** – Bluetooth scanner has disconnected with the device. Similar to the Connected state in the event of Bluetooth scanner disconnection application can send Disable scanner intent followed by the Enable scanner intent which will enable the current default scanner. 

**DISABLED** – Scanner is disabled. This will be broadcast by the ScannerPlugin when profile gets disabled or scanner is disabled with disabled scanner intent.

**Note**: The `PROFILE_NAME` (of the currently active profile) is returned with `SCANNER_STATUS` to allow the developer to filter scanner events only for the required profile. 


Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

### Examples

	// TO REGISTER AN APP TO RECIEVE NOTIFICATIONS

	// Register for notifications - PROFILE_SWITCH

		Bundle b = new Bundle();
		b.putString("com.symbol.datawedge.api.APPLICATION_NAME","com.example.intenttest");
		b.putString("com.symbol.datawedge.api.NOTIFICATION_TYPE","PROFILE_SWITCH");
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.REGISTER_FOR_NOTIFICATION", b); // (1)
		this.sendBroadcast(i);

	// To unregister, change only the iPutExtra command

		Bundle b = new Bundle();
		b.putString("com.symbol.datawedge.api.APPLICATION_NAME","com.example.intenttest");
		b.putString("com.symbol.datawedge.api.NOTIFICATION_TYPE","PROFILE_SWITCH");
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.UNREGISTER_FOR_NOTIFICATION", b);
		this.sendBroadcast(i);


	// Register for notifications - SCANNER_STATUS

		Bundle b = new Bundle();
		b.putString("com.symbol.datawedge.api.APPLICATION_NAME","com.example.intenttest");
		b.putString("com.symbol.datawedge.api.NOTIFICATION_TYPE", "SCANNER_STATUS");
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.REGISTER_FOR_NOTIFICATION", b);//(1)
		this.sendBroadcast(i);

	// To unregister, change only the iPutExtra command

		Bundle b = new Bundle();
		b.putString("com.symbol.datawedge.api.APPLICATION_NAME","com.example.intenttest");
		b.putString("com.symbol.datawedge.api.NOTIFICATION_TYPE", "SCANNER_STATUS");
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		i.putExtra("com.symbol.datawedge.api.UNREGISTER_FOR_NOTIFICATION", b);
		this.sendBroadcast(i);


	// TO RECIEVE NOTIFICATIONS

		public static final String NOTIFICATION_ACTION  = "com.symbol.datawedge.api.NOTIFICATION_ACTION";
		public static final String NOTIFICATION_TYPE_SCANNER_STATUS = "SCANNER_STATUS";
		public static final String NOTIFICATION_TYPE_PROFILE_SWITCH = "PROFILE_SWITCH";
		public static final String NOTIFICATION_TYPE_CONFIGURATION_UPDATE = "CONFIGURATION_UPDATE";

		private BroadcastReceiver broadcastReceiver = new BroadcastReceiver() {
		    @Override
		    public void onReceive(Context context, Intent intent) {
		        String action = intent.getAction();
		        Log.d(TAG, "#DataWedge-APP# Action: " + action);

		        if(action.equals(NOTIFICATION_ACTION)){

		            if(intent.hasExtra("com.symbol.datawedge.api.NOTIFICATION")) {
		                Bundle b = intent.getBundleExtra("com.symbol.datawedge.api.NOTIFICATION");
		                String NOTIFICATION_TYPE  = b.getString("NOTIFICATION_TYPE");
		                if(NOTIFICATION_TYPE!= null) {
		                    switch (NOTIFICATION_TYPE) {
		                        case NOTIFICATION_TYPE_SCANNER_STATUS:
		Log.d(TAG, "SCANNER_STATUS: status: " + b.getString("STATUS") + ", profileName: " + b.getString("PROFILE_NAME"));
		                            break;

		                        case NOTIFICATION_TYPE_PROFILE_SWITCH:
		Log.d(TAG, "PROFILE_SWITCH: profileName: " + b.getString("PROFILE_NAME") + ", profileEnabled: " + b.getBoolean("PROFILE_ENABLED"));
		                            break;

		                        case NOTIFICATION_TYPE_CONFIGURATION_UPDATE:
		                            break;
		                    }
		                }
		            }
		        }
		    }
		};

		void registerReceivers() {
		//to register the broadcast receiver
		    IntentFilter filter = new IntentFilter();
		    filter.addAction(NOTIFICATION_ACTION);
		    registerReceiver(broadcastReceiver, filter);//Android method
		}
		void unRegisterReceivers() {
		//to unregister the broadcast receiver
		    unregisterReceiver(broadcastReceiver); //Android method
		}

### Comments
(none)

------

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial
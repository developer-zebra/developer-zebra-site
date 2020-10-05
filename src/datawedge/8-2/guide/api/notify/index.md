---
title: Notify (Notification)
layout: guide.html
product: DataWedge
productversion: '8.2'
---

## NOTIFY

Used to play notification sound(s) on connected Bluetooth scanners with RSM (remote speaker microphone). Supported Bluetooth scanners: RS6000, RS5100 and DS3678.

### Function Prototype

	Bundle bundleNotify = new Bundle();
    Bundle bundleNotificationConfig = new Bundle();
    i.setAction("com.symbol.datawedge.api.ACTION");

    bundleNotificationConfig.putString("DEVICE_IDENTIFIER", <Device Identifier>);
    bundleNotificationConfig.putIntArray("NOTIFICATION_SETTINGS", int[]);
    bundleNotify.putBundle("NOTIFICATION_CONFIG", bundleNotificationConfig);

    i.putExtra("com.symbol.datawedge.api.notification.NOTIFY", bundleNotify);
    this.sendBroadcast(i);


### Parameters

**ACTION** [string]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [string]: "com.symbol.datawedge.api.notification.NOTIFY"

**DEVICE IDENTIFIER** [string]: Device identifier of the supported Bluetooth scanner. 

**NOTIFICATION_SETTINGS** [integer]: Integer array of the notification RSM attributes. If multiple attributes are specified, notifications are played one after another in ascending order of the integer array.

**Notification RSM attributes for LED/Beep:** 

* 1 high short beep&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0
* 2 high short beeps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1
* 3 high short beeps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2
* 4 high short beeps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3
* 5 high short beeps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4
* 1 low short beep&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5
* 2 low short beeps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6
* 3 low short beeps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7
* 4 low short beeps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8
* 5 low short beeps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9
* 1 high long beep&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10
* 2 high long beeps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
* 3 high long beeps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12
* 4 high long beeps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13
* 5 high long beeps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;14
* 1 low long beep&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15
* 2 low long beeps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16
* 3 low long beeps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;17
* 4 low long beeps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18
* 5 low long beeps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19
* Fast warble beep&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20
* Slow warble beep&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21
* High-low beep&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;22
* Low-high beep&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23
* High-low-high beep&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24
* Low-high-low beep&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25
* High-high-low-low beep&nbsp;&nbsp;&nbsp;26
* Green LED off&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;42
* Green LED on&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;43
* Red LED on&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;47
* Red LED off&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;48



### Result Codes

DataWedge returns the following error codes if the app includes the intent extras `RECEIVE_RESULT` and `COMMAND_IDENTIFIER` to enable the app to get results using the DataWedge result intent mechanism. See [Example](#examplecode), below.

* **DATAWEDGE_DISABLED -** DataWedge is disabled
* **DEVICE_NOT_SUPPORTED -** Device does not support notifications
* **PARAMETER_INVALID -** No values are specified in the RSM attribute array
* **DEVICE_NOT_CONNECTED -** Scanner is not connected


## Example Code	
This sample code turns on the red LED and plays 3 low long beeps.

    Intent i = new Intent();
    Bundle bundleNotify = new Bundle();
    Bundle bundleNotificationConfig = new Bundle();
    i.setAction("com.symbol.datawedge.api.ACTION");

    bundleNotificationConfig.putString("DEVICE_IDENTIFIER", "BLUETOOTH_DS3678");
    bundleNotificationConfig.putIntArray("NOTIFICATION_SETTINGS", new int[]{17, 47});
    bundleNotify.putBundle("NOTIFICATION_CONFIG", bundleNotificationConfig);

    i.putExtra("com.symbol.datawedge.api.notification.NOTIFY", bundleNotify);
    this.sendBroadcast(i);


-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

-----

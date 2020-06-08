---
title: Battery Intent APIs
layout: guide.html
product: EMDK For Android
productversion: '8.0'
---

## Overview
On Zebra devices, extra battery information is retrieved using the standard [Android Battery Intent](http://developer.android.com/training/monitoring-device-state/battery-monitoring.html) in the same way as with consumer devices (see below). On devices equipped with Zebra Power Precision or Power Precision Plus batteries, the following additional information can be retrieved:

* Backup Battery Voltage
* Battery Manufacture Date
* Battery Serial Number
* Part Number for Battery
* Unique ID for Battery
* Rated Capacity of the Battery
* Charge Cycle count of the Battery 

-----

## Enabling the Receiver 

	:::java
	mIntent_Receiver = new Intent_Receiver();  
	mIntentFilter = new IntentFilter();  
	mIntentFilter.addAction(Intent.ACTION_BATTERY_CHANGED);  
	registerReceiver(mIntent_Receiver,mIntentFilter);  

## Processing The Data
The code below receives the Zebra-specific battery information provided by the [Battery Intent](/emdk-for-android/8-0/guide/reference/refbatteryintent) extras. Notice that some values are strings and other values are integers.

	:::java
	public void onReceive(Context context, Intent intent) {      
		if (BATTERY_STATE_CHANGED_INTENT.equals(intent.getAction())) {          
			int bkvoltage = intent.getExtras().getInt("bkvoltage");  
			String mfd = intent.getExtras().getString("mfd");  
			String serialnumber = intent.getExtras().getString("serialnumber");  
			String partnumber = intent.getExtras().getString("partnumber");  
			String uniqueid = intent.getExtras().getString("uniqueid");  
			int ratedcapacity = intent.getExtras().getInt("ratedcapacity");  
			int cycle = intent.getExtras().getInt("cycle");  
		}  
	} 

-----

## Also See

* **[ENGINEERING BLOG: How to Access Properties of Zebra Batteries](https://developer.zebra.com/blog/how-access-properties-zebra-power-precision-plus-batteries)**
* **[Viewing Zebra Battery Extras (sample app)](https://github.com/Zebra/Zebra_Battery_Extras)**
* **[Battery Intent API Reference](../../guide/reference/refbatteryintent/)**
* [Battery Intent API Reference](../../guide/reference/refbatteryintent/)
* [Data capture intent APIs](../datacapture)
* [IrDA intent APIs](../battery)
* [Native APIs](../../api)

<!-- 4/24/18- dead link removed. No corresponding folder or sample found. -EC
## Downloading the Sample
Download the source for this project in the [associated sample](/emdk-for-android/8-0/guide/sample/samplebatteryintent).

 -->
















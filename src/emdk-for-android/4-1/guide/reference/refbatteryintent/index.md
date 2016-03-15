---
title: Battery Intent API Reference
layout: guide.html
product: EMDK For Android
productversion: '4.1'
---

## Overview
The purpose of this document is to describe the functionality of the Battery Intent API Interface. Its intended audience are Android developers. 
 
## Requirements
Knowledge of Android programming and familiarity with the Android intent mechanism are assumed. 
 
* Android Versions:	
	* 2.3.4 and later.
* Devices:	
	* Symbol Android devices, such as the ET1 rev D, MC40 rev A.
 
## Features
On Symbol devices like the MC40, extra battery information can be retrieved using the standard [Android Battery Intent](http://developer.android.com/training/monitoring-device-state/battery-monitoring.html). Setting up to receive this information is the same as with consumer Android devices. However, the data that is returned to your application includes some extra information like:


* Backup Battery Voltage
* Battery Manufacture Date
* Battery Serial Number
* Part Number for Battery
* Unique ID for Battery
* Rated Capacity of the Battery
* Charge Cycle count of the Battery
* Battery Decommission status
* Battery Usage number

In addition to the information listed above the following devices return a few extra values
### MC40
* Base Cumulative Charge

### MC18
* Battery Present Capacity
* Battery Health Percentage
* Battery Present Charge
* Time to Empty  
* Time to Full
* Base Cumulative charge
* Total Cumulative charge
* Seconds Since First Use 


## Programming Interface
 
#### Function Prototype
	
	:::java
	mIntent_Receiver = new Intent_Receiver();  
	mIntentFilter = new IntentFilter();  
	mIntentFilter.addAction(Intent.ACTION_BATTERY_CHANGED);  
	registerReceiver(mIntent_Receiver,mIntentFilter); 

#### Parameters

Please reference the Android Battery Manager [API](http://developer.android.com/reference/android/os/BatteryManager.html). 

#### Return Values

In addition to the battery information Android returns by default, which can be found [here](http://developer.android.com/reference/android/os/BatteryManager.html), Symbol devices return the following additional parameters: 

* **bkvoltage** - Backup Battery Voltage
* **mfd**  - Battery Manufacture Date
* **serialnumber** - Battery Serial Number
* **partnumber** - Part Number for Battery
* **ratedcapacity** - Rated Capacity of the Battery
* **cycle** - Charge Cycle count of the Battery
* **battery\_decommission** 
* **battery\_usage_numb**   

### Additional MC40 Extras 
* **base\_cumulative\_charge**
   
### Additional MC18 Extras
* **health\_percentage**
* **present\_capacity**
* **base\_cumulative\_charge**       
* **total\_cumulative\_charge**      
* **present\_charge**     
* **time\_to\_empty**       
* **time\_to\_full**    
* **seconds\_since\_first\_use**      


#### Example

	:::java
	public void onReceive(Context context, Intent intent) {      
		if (BATTERY_STATE_CHANGED_INTENT.equals(intent.getAction())) {          

			int bkvoltage = intent.getExtras().getInt("bkvoltage");  
			String mfd = intent.getExtras().getString("mfd");  
			String serialnumber = intent.getExtras().getString("serialnumber");  
			String partnumber = intent.getExtras().getString("partnumber");    
			int ratedcapacity = intent.getExtras().getInt("ratedcapacity");  
			int cycle = intent.getExtras().getInt("cycle");  
		     
		}  
	} 










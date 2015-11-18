---
title:  Battery Intent Sample
---

## Overview
On Symbol Android devices like the MC40, extra battery information can be retrieved using the standard [Android Battery Intent](http://developer.android.com/training/monitoring-device-state/battery-monitoring.html). Setting up to receive this information is the same as with consumer Android devices. However, the data that is returned to your application includes some extra information like:

* Backup Battery Voltage
* Battery Manufacture Date
* Battery Serial Number
* Part Number for Battery
* Unique ID for Battery
* Rated Capacity of the Battery
* Charge Cycle count of the Battery
 
## Using This Sample
You may choose to install the Battery Sample Application.apk or to run the project from Eclipse:

1. Download the battery sample application zip. 
2. Unzip the battery sample application zip.
3. Start the Android ADT or compatible eclipse environment. 
4. Import the sample application. 
	>How to import:  
 	>1. Go to "File" -> "Import"  
 	>![img](images/FileImport.jpg)   
 	>2. Select "Android" -> "Existing Android Code Into Workspace" -> "Next"   
 	>![img](images/ImportNext.jpg)   
 	>3. Select "Browse" and navigate to your unzipped battery sample application folder.  
 	>![img](images/Browse.jpg)  
 	>4. Select "Finish".  
 	>![img](images/Finish.jpg)  

5. Run the sample application. 
	>How to run the sample application:   
 	>1. Select the sample application folder in "Package Explorer".      
 	>2. Right click and select "Run As" -> "Android Application"  
 	>![img](images/RunAs.jpg)   

6. The battery sample application should look like the following:  

![img](images/BatterySampleApplication.jpg)  

7. The information on the screen will update each time a battery intent is received. To force the intent you may change power state of the device by charging or unplugging it from a power source.


## How This Sample Was Built 
A [Tutorial](/emdk-for-android/3-1/tutorial/tutbatteryintent) walks through how this sample application was built. 

## Download
The project [source](https://s3.amazonaws.com/emdk/Tutorials/BatterySampleApplication.zip) and [application](https://s3.amazonaws.com/emdk/Tutorials/BatterySampleApplication.apk.zip) to this tutorial can be downloaded (Internet Connection Required).
<a name="theend"></a>


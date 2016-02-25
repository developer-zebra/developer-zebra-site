---
publish: true
title: Document Capture
description: This sample application will show how the Simulscan API's can be used to capture multiple types of data from paper forms.
downloads:
  - title: Android Studio Project
    url: https://github.com/developer-zebra/samples-emdkforandroid-4_0/archive/SimulScanSample1.zip  
  - title: ADT Eclipse Project
    url: https://github.com/developer-zebra/samples-emdkforandroid-4_0-ADT/archive/SimulScanSample1.zip   
sources:
  - title: Android Studio Project
    url: https://github.com/developer-zebra/samples-emdkforandroid-4_0/tree/SimulScanSample1
  - title: ADT Eclipse Project
    url: https://github.com/developer-zebra/samples-emdkforandroid-4_0-ADT/tree/SimulScanSample1

features: 
  - Profile Manager
  - Simulscan
  - Java APIs
devices: 
  - TC55KK
  - TC75KK
image: 1.png
screenshots: 
  - 1.png
  - 2.png
  - 3.png 
  - 4.png 
---


##Overview
This sample application will show how the Simulscan API's can be used to capture multiple types of data from forms, boxes and the like.

##Prerequisites
- Java JDK 
- Eclipse with ADT plugin or  Android Studio
- EMDK for Android  
- An EMDK supported Android device

For more information about setting up the EMDK please see the [EMDK Setup Guide](/emdk-for-android/4-1/guide/setup).

You will also need:

* A SimulScan licensed device
* A Simulscan template
* A printed copy of the form used to create the template

Follow the template generation and device licensing sections of the [SimulScan API tutorial](/emdk-for-android/4-1/tutorial/tutSimulScanAPI)

##Loading the Sample Application
The following guide will walk you through setting up the EMDK samples in your IDE.

* [Android Studio](/emdk-for-android/4-1/guide/emdksamples_androidstudio)
* [Eclipse/ADT](/emdk-for-android/4-1/guide/emdksamples_eclipse)

##Using This Sample

1. Place a template on the sdcard of you SimulScan licensed device.

		:::
		adb push myTemplate.xml /sdcard/simulscan/templates/
	

2. Launch The SimulScan sample application
	
	The Simulscan sample app will find the templates you place on the devices sdcard, and populate the "Set Template" option list.  Select the template you wish to use from that list.
	![img](simulscanSample1.png) 


3. Press the "Read" button, and follow the on screen instructions. The sample app will extract the fields defined in the template. If the "Display Results View" option is checked, a list of results will be displayed for you to review.

	![img](simulscanSample2.png)  ![img](simulscanSample3.png)   


4. Press the "Accept" button. The sample app will then display a screen showing how long simulscan took to capture and decode the template fields. Press the devices "Back" hardware button to return to the main screen.

	![img](simulscanSample4.png) 
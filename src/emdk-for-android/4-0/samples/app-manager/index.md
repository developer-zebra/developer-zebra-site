---
publish: true
title: App Manager
description: Shows how to use the EMDK for Android Profile APIs to manage App Manager profiles.
download: https://github.com/developer-zebra/samples-emdkforandroid-4_0/archive/ProfileAppMgrSample1.zip
source: https://github.com/developer-zebra/samples-emdkforandroid-4_0/tree/ProfileAppMgrSample1
features: 
  - Profile Manager
  - App Manager
devices: 
  - MC18KK
  - MC32N0JB
  - MC40JB
  - MC40KK
  - MC67JB
  - MC92KK
  - TC55JB
  - TC55KK
  - TC70KK
  - TC75KK
image: 1.png
screenshots: 
  - 1.png
  - 2.png
  - 3.png
---

##Overview

The EMDK for Android allows you to manage applications on the device. 

The available actions are:  
- Install an application
- Uninstall an application
- Upgrade an application  
- Set an application as the default launcher 

This sample application will allow you to install, upgrade, and uninstall an application. 

##Prerequisites
- Java JDK 
- Eclipse with ADT plugin or  Android Studio
- EMDK for Android  
- An EMDK supported Android device

For more information about setting up the EMDK please see the [EMDK Overview](/emdk-for-android/4-0/guide/about).

##Loading the Sample Application
The following guide will walk you through setting up the EMDK samples in your IDE.

* [Android Studio](/emdk-for-android/4-0/guide/sample/emdksamples_androidstudio)

##Using This Sample
1. When the application starts it should look like the following.  
  ![img](2_1.png)  
2. Enter the path to an APK file that you have placed on your device.  /sdcard/Battery Sample Application.apk
  ![img](2_2.png)    
  >Note:  
  >To place an APK file on the device connect the device to to you computer over USB as a "Medea Device" and copy an APK to your device.  
3.  Click "Set" 
4.  Check the status field.   
  ![img](2_3.png)  
---
publish: true
title: Rebooting The Device
description: This sample application will allow you to set the power state to "Suspend" (sleep mode) or "Reset" (reboot).
downloads:
  - title: Android Studio Project
    url: https://github.com/developer-zebra/samples-emdkforandroid-4_0/archive/ProfilePowerMgrSample1.zip   
  - title: ADT Eclipse Project
    url: https://github.com/developer-zebra/samples-emdkforandroid-4_0-ADT/archive/ProfilePowerMgrSample1.zip    
sources:
  - title: Android Studio Project
    url: https://github.com/developer-zebra/samples-emdkforandroid-4_0/tree/ProfilePowerMgrSample1
  - title: ADT Eclipse Project
    url: https://github.com/developer-zebra/samples-emdkforandroid-4_0-ADT/tree/ProfilePowerMgrSample1

features: 
  - Profile Manager
  - Power Manager
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
The EMDK for Android allows you to control the power state of a Symbol device. 

The available actions are:  
- Do Nothing  
- Sleep Mode  
- Reboot  
- OS Update  

This sample application will allow you to set the power state of "Suspend" (sleep mode) or "Reset" (reboot).

##Prerequisites
- Java JDK 
- Eclipse with ADT plugin or  Android Studio
- EMDK for Android  
- An EMDK supported Android device

For more information about setting up the EMDK please see the [EMDK Overview](/emdk-for-android/4-0/guide/about).

##Loading the Sample Application
The following guide will walk you through setting up the EMDK samples in your IDE.

* [Android Studio](/emdk-for-android/4-0/guide/emdksamples_androidstudio)
* [Eclipse/ADT](/emdk-for-android/4-0/guide/emdksamples_eclipse)

##Using This Sample
1. When the application starts it should look like the following.  
  ![img](1_1.png)  
2. Select the power mode you would like to set.  
  ![img](1_2.png)    
3.  Click "Set" 
4.  Check the status field.   
  ![img](1_3.png)  
  

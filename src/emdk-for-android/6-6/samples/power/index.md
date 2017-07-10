---
publish: true
title: Rebooting The Device
description: 'This sample application will allow you to set the power state to "Suspend" (sleep mode) or "Reset" (reboot).'
downloads:
  - title: Android Studio Project
    url: 'https://github.com/Zebra/samples-emdkforandroid-6_4/archive/ProfilePowerMgrSample1.zip'
sources:
  - title: Android Studio Project
    url: 'https://github.com/Zebra/samples-emdkforandroid-6_4/tree/ProfilePowerMgrSample1'
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
layout: sample.html
product: EMDK For Android
productversion: '6.6'
---

##Overview
The EMDK for Android allows you to control the power state of a Symbol device. 

The available actions are:  
- Do Nothing  
- Sleep Mode  
- Reboot  
- OS Update  

This sample application will allow you to set the power state of "Suspend" (sleep mode) or "Reset" (reboot).

>Note: Although this sample may work with previous versions of the EMDK, it is advised to [update the EMDK runtime](../../guide/setupDevice/) on your device before loading this sample.

##Requirements
Android API 19 must be installed via the SDK Manager before attempting to load this sample.

##Loading the Sample Application
The following guide will walk you through setting up the EMDK samples in your IDE.

* [Android Studio](/emdk-for-android/6-6/guide/emdksamples_androidstudio)


##Using This Sample
1. When the application starts it should look like the following.  
  ![img](1_1.png)  
2. Select the power mode you would like to set.  
  ![img](1_2.png)    
3.  Click "Set" 
4.  Check the status field.   
  ![img](1_3.png)  
  






















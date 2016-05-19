---
publish: true
title: Controlling Bluetooth
description: This sample application will show you how to enable or disable the bluetooth radio on a device.
downloads:
  - title: Android Studio Project
    url: 'https://github.com/developer-zebra/samples-emdkforandroid-4_0/archive/ProfileWirelessMgrSample1.zip'
  - title: ADT Eclipse Project
    url: 'https://github.com/developer-zebra/samples-emdkforandroid-4_0-ADT/archive/ProfileWirelessMgrSample1.zip'
sources:
  - title: Android Studio Project
    url: 'https://github.com/developer-zebra/samples-emdkforandroid-4_0/tree/ProfileWirelessMgrSample1'
  - title: ADT Eclipse Project
    url: 'https://github.com/developer-zebra/samples-emdkforandroid-4_0-ADT/tree/ProfileWirelessMgrSample1'
features:
  - Profile Manager
  - Clock
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
layout: sample.html
product: EMDK For Android
productversion: '4.0'
---

##Overview##
This sample application will show you how to enable or disable the bluetooth radio on a device

##Prerequisites
- Java JDK 
- Eclipse with ADT plugin or  Android Studio
- EMDK for Android  
- An EMDK supported Android device

For more information about setting up the EMDK please see the [EMDK Setup Guide](/emdk-for-android/4-0/guide/setup).

##Loading the Sample Application
The following guide will walk you through setting up the EMDK samples in your IDE.

* [Android Studio](/emdk-for-android/4-0/guide/emdksamples_androidstudio)
* [Eclipse/ADT](/emdk-for-android/4-0/guide/emdksamples_eclipse)


##Using This Sample
1. When the application starts it should look like the following.  
  ![img](wireless1.png)  
2. Select Enable or Disable, then click **Set**
  
  The Status field will update after submitting the profile.
  ![img](wireless2.png)















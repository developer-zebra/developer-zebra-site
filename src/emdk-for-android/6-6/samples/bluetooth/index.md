---
publish: true
title: Controlling Bluetooth
description: This sample application will show you how to enable or disable the bluetooth radio on a device.
downloads:
  - title: Android Studio Project
    url: 'https://github.com/Zebra/samples-emdkforandroid-6_6/archive/ProfileWirelessMgrSample1.zip'
sources:
  - title: Android Studio Project
    url: 'https://github.com/Zebra/samples-emdkforandroid-6_6/tree/ProfileWirelessMgrSample1'
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
productversion: '6.6'
---

##Overview##
This sample application will show you how to enable or disable the bluetooth radio on a device

>Note: Although this sample may work with previous versions of the EMDK, it is advised to [update the EMDK runtime](../../guide/setupDevice/) on your device before loading this sample.

##Requirements
Android API 19 must be installed via the SDK Manager before attempting to load this sample.

##Loading the Sample Application
The following guide will walk you through setting up the EMDK samples in your IDE.

* [Android Studio](/emdk-for-android/6-6/guide/emdksamples_androidstudio)


##Using This Sample
1. When the application starts it should look like the following.  
  ![img](wireless1.png)  
2. Select Enable or Disable, then click **Set**
  
  The Status field will update after submitting the profile.
  ![img](wireless2.png)





















---
publish: true
title: Update Payment Device Firmware
description: This sample demonstrates how to update firmware in the PD40 Mobile Payment device
downloads:
  - title: Android Studio Project
    url: 'https://github.com/developer-zebra/samples-emdkforandroid-4_0/archive/PD40FWUpdateSample.zip'
  - title: ADT Eclipse Project
    url: 'https://github.com/developer-zebra/samples-emdkforandroid-4_0-ADT/archive/PD40FWUpdateSample.zip'
sources:
  - title: Android Studio Project
    url: 'https://github.com/developer-zebra/samples-emdkforandroid-4_0/tree/PD40FWUpdateSample'
  - title: ADT Eclipse Project
    url: 'https://github.com/developer-zebra/samples-emdkforandroid-4_0-ADT/tree/PD40FWUpdateSample'
features: null
devices:
  - MC40 KK
  - MC40 JB
image: 1-info.png
screenshots:
  - 1-info.png
  - 2-info.png
  - 3-info.png
  - 4-info.png
  - 1-update.png
  - 2-update.png
  - 3-update.png
layout: sample.html
product: EMDK For Android
productversion: '4.0'
---


##Overview
This sample demonstrates how to update firmware in the PD40 Mobile Payment device

##Loading the Sample Application
The following guide will walk you through setting up the EMDK samples in your IDE.

* [Android Studio](/emdk-for-android/4-0/guide/emdksamples_androidstudio)
* [Eclipse/ADT](/emdk-for-android/4-0/guide/emdksamples_eclipse)

##Prerequisites
- Java JDK 
- Eclipse with ADT plugin or  Android Studio
- EMDK for Android  
- An EMDK supported Android device

**Items Needed**
* One of the approved devices listed above
* PD40 payment device

For more information about setting up the EMDK please see the [EMDK Setup Guide](/emdk-for-android/4-0/guide/setup).

##Loading the Sample Application
The following guide will walk you through setting up the EMDK samples in your IDE.

* [Android Studio](/emdk-for-android/4-0/guide/emdksamples_androidstudio)
* [Eclipse/ADT](/emdk-for-android/4-0/guide/emdksamples_eclipse)

##Using This Sample

###Query PD40 Info
1. Bluetooth pair your Android device with the PD40 payment module.
2. Launch the PD40 Firmware Update sample. The initial screen should resemble the following. Leave the request spinner set to **Query PD40 info** and press the **Run** button.

    ![img](1-info.png) 
3. Press the **Select Devices** button and choose the previously paired bluetooth payment module.

    ![img](2-info.png) 
4. Now check both **Battery Level** and **FW Version** check-boxes.

    ![img](3-info.png) 
5. Now press the **OK** button. The Firmware Version and Battery Level should now be displayed in the status area.

    ![img](4-info.png) 
    
###Update PD40 Firmware
1. Bluetooth pair your Android device with the PD40 payment module.
2. Launch the PD40 Firmware Update sample. The initial screen should resemble the following. Set the request spinner to **Update PD40 Firmware** and press the **Run** button.

    ![img](1-update.png)
3. Press the **Select Devices** button and choose the previously paired bluetooth payment module.

    ![img](2-update.png) 
4.  Press teh **Browse** button and select the PD40 Firmware file you would like to use, then press the **OK** button.

    ![img](3-update.png) 











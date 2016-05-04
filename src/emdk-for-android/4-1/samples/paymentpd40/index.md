---
publish: true
title: Update Payment Device Firmware
description: This sample demonstrates how to update firmware in the PD40 Mobile Payment device
downloads:
  - title: Android Studio Project
    url: 'https://github.com/developer-zebra/samples-emdkforandroid-4_0/archive/PD40FWUpdateSample.zip'
sources:
  - title: Android Studio Project
    url: 'https://github.com/developer-zebra/samples-emdkforandroid-4_0/tree/PD40FWUpdateSample'
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
productversion: '4.1'
---


##Overview
This sample demonstrates how to update firmware in the PD40 Mobile Payment device

>Note: Although this sample may work with previous versions of the EMDK, it is advised to [update the EMDK runtime](../../guide/setupDevice/) on your device before loading this sample.

##Loading the Sample Application
The following guide will walk you through setting up the EMDK samples in your IDE.

* [Android Studio](/emdk-for-android/4-1/guide/emdksamples_androidstudio)

##Prerequisites

**Items Needed**
* One of the approved devices listed above
* PD40 payment device

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















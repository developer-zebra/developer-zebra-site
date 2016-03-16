---
publish: true
title: Serial Communication
description: This sample demonstrates the EMDK Serial Communication API to enable support for DEX in your application. DEX (data exchange) is a format for collecting audit and event data from vending machines.
downloads:
  - title: Android Studio Project
    url: 'https://github.com/developer-zebra/samples-emdkforandroid-4_0/archive/SerialCommSample1.zip'
  - title: ADT Eclipse Project
    url: 'https://github.com/developer-zebra/samples-emdkforandroid-4_0-ADT/archive/SerialCommSample1.zip'
sources:
  - title: Android Studio Project
    url: 'https://github.com/developer-zebra/samples-emdkforandroid-4_0/tree/SerialCommSample1'
  - title: ADT Eclipse Project
    url: 'https://github.com/developer-zebra/samples-emdkforandroid-4_0-ADT/tree/SerialCommSample1'
features: null
devices:
  - TC75KK
  - TC70KK RevB
image: 1.png
screenshots:
  - 2.png
  - 3.png
  - 4.png
layout: sample.html
product: EMDK For Android
productversion: '4.0'
---


##Overview
This sample demonstrates the EMDK Serial Communication API to enable support for DEX in your application. DEX (data exchange) is a format for collecting audit and event data from vending machines.

>Note: In order to use Serial **Read** functionality, you must first apply a patch provided in [SPR-28877](https://spr.motorolasolutions.com/ViewSPR.aspx?sprID=28877). To obtain this patch, contact Zebra Support.

##Prerequisites
- Java JDK 
- Eclipse with ADT plugin or  Android Studio
- EMDK for Android  
- An EMDK supported Android device

**Items Needed**
* One of the approved devices listed above
* TC7X SNAP On DEX cable ( CBL-TC7X-DEX1-01 )

For more information about setting up the EMDK please see the [EMDK Setup Guide](/emdk-for-android/4-0/guide/setup).

##Loading the Sample Application
The following guide will walk you through setting up the EMDK samples in your IDE.

* [Android Studio](/emdk-for-android/4-0/guide/emdksamples_androidstudio)
* [Eclipse/ADT](/emdk-for-android/4-0/guide/emdksamples_eclipse)

##Using This Sample
1. With the Snap on DEX cable attached, the application should look like the following when it starts.  
  ![img](3.png)  
2. Press the **Write** button. The application should display a message that it has sent the text from the edit field in number of bytes sent in the status area.
  ![img](2.png)    
3.  Press the **Read** button.  The application will continue to read for 10 seconds and then display the read data in the status area.
    ![img](4.png) 
  












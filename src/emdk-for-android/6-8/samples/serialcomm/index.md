---
publish: true
title: Serial Communication
description: Demonstrates the EMDK Serial Communication API to enable support for DEX (data exchange) in an application. DEX is a format for collecting audit and event data from vending machines.
downloads:
  - title: Sample Projects
    url: 'https://github.com/Zebra/samples-emdkforandroid-6_8/archive/master.zip'
sources:
  - title: Github Repo
    url: 'https://github.com/Zebra/samples-emdkforandroid-6_8'
features: null
devices:
  - TC70 KK RevB, 
  - TC75 KK
image: 1.png
screenshots:
  - 2.png
  - 3.png
  - 4.png
layout: sample.html
product: EMDK For Android
productversion: '6.8'
---


##Overview
This sample demonstrates the EMDK Serial Communication API to enable support for DEX in your application. DEX (data exchange) is a format for collecting audit and event data from vending machines.

>Note: In order to use Serial **Read** functionality, you must first apply a patch provided in [SPR-28877](https://spr.motorolasolutions.com/ViewSPR.aspx?sprID=28877). To obtain this patch, contact Zebra Support.

##Prerequisites

**Items Needed**
* One of the approved devices listed above
* TC7X SNAP On DEX cable ( CBL-TC7X-DEX1-01 )

For more information about setting up the EMDK please see the [EMDK Setup Guide](/emdk-for-android/6-8/guide/setup).



##Requirements
Android API 22 (or higher) must be installed via the SDK Manager before attempting to load this sample.

##Loading the Sample Application
The following guide will walk you through setting up the EMDK samples in your IDE.

* [Android Studio](/emdk-for-android/6-8/guide/emdksamples_androidstudio)
)

##Using This Sample
1. With the Snap on DEX cable attached, the application should look like the following when it starts.  
  ![img](3.png)  
2. Press the **Write** button. The application should display a message that it has sent the text from the edit field in number of bytes sent in the status area.
  ![img](2.png)    
3.  Press the **Read** button.  The application will continue to read for 10 seconds and then display the read data in the status area.
    ![img](4.png) 
  





















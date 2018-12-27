---
publish: true
title: Scan and Pair
description: Shows how the Scan and Pair API is used to programmatically pair Bluetooth devices.
downloads:
  - title: Sample Projects
    url: 'https://github.com/Zebra/samples-emdkforandroid-7_0/archive/master.zip'
sources:
  - title: Github Repo
    url: 'https://github.com/Zebra/samples-emdkforandroid-7_0'
features:
  - Profile Manager
  - Scan and Pair
  - Java APIs
devices:
  - All supported devices
image: 1.png
screenshots:
  - 1.png
  - 2.png
layout: sample.html
product: EMDK For Android
productversion: '7.1'
---

##Overview
This sample application will show how the Scan and Pair API can be used to pair two bluetooth devices programmatically.

##Prerequisites

For this sample, you will need two Android Bluetooth devices, one must be an EMDK for Android supported device. You will also need a barcode that contains the Bluetooth MAC address of the remote bluetooth device that we will be pairing with(The one not running the EMDK app).



##Requirements
Android API 22 (or higher) must be installed via the SDK Manager before attempting to load this sample.

##Loading the Sample Application
The following guide will walk you through setting up the EMDK samples in your IDE.

* [Android Studio](/emdk-for-android/7-1/guide/emdksamples_androidstudio)

##Using This Sample

1.  When the application starts it should look like the following. Leave the **Always Scan** and **Hard Trigger** check boxes selected, and insure the **ScanData Type** spinner is set to **MAC ADDRESS**.  

  ![img](scanandpair1.png)  

2. Press the **Pair** button. The Status label will update, stating that the Scan and Pair process has started, and then prompt the user to press the hard scan trigger.

  ![img](scanandpair3.png)   

3. Now place the Pairing Barcode in view of the devices scan window, and then press the devices Hard Scan Trigger. The Scan and Pair sample app will retrieve MAC address from the barcode and place it in the **Bluetooth Address** field, then it will initiate the pairing and connection process. Press **Pair** in the Pairing Request dialog, to complete the pairing process. 
After pairing is complete, the status label will display "Bluetooth device is paired successfully".

  ![img](scanandpair4.png) 






















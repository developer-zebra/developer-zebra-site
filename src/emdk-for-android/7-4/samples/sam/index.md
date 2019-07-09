---
publish: true
title: NFC SAM Configuration
description: Demonstrates use of the NFC Secure Access Module.
downloads:
  - title: Sample Projects
    url: 'https://github.com/Zebra/samples-emdkforandroid-7_3/archive/master.zip'
sources:
  - title: Github Repo
    url: 'https://github.com/Zebra/samples-emdkforandroid-7_3'
features:
  - Profile Manager
  - NFC Manager
devices:
  - All supported devices
image: SamSample1.png
screenshots:
  - SamSample1.png
layout: sample.html
product: EMDK For Android
productversion: '7.4'
---

##Overview
EMDK for Android allows secure communication with NFC tags through use of the Secure Access Module (SAM). 

**Available SAM actions**:

* Get the SAM Manager
* Enumerate SAM objects  
* Use the SAM module  
* Tranceive data
* Disconnect the SAM module
* Get the SAM index
* Detect an NFC tag

This sample application will allow you to perform all the above mentioned Wi-Fi actions on Symbol device.

##Requirements
Android API 22 (or higher) must be installed via the SDK Manager before attempting to load this sample.

##Loading the Sample Application
The following guide will walk you through setting up the EMDK samples in your IDE.

* [Android Studio](../../guide/emdksamples_androidstudio)

>**NOTE**: The appearance of sample app screens can vary by sample app version, Android version and screen size.

##Using This Sample

1. When the application starts it should look like the following:
  
  <img alt="image" style="height:400px" src="SamSample1.png"/>
  
2. Select the Wi-Fi operation you want (Enable/Disable).
   
  <img alt="image" style="height:400px" src="SamSample1.png"/>

3. Select the Network action you want to execute from the Network Action drop-down. 
  Let us select "Add(Default Open Network)" option.

  <img alt="image" style="height:400px" src="SamSample1.png"/>

  > Note: You could also add Personal Network with Passphrase and Enterprise Network with required certificate, which is not in the scope of this sample. 
4. Provide some SSID to the network you want to add in SSID field (Ex. Test_Network).

  <img alt="image" style="height:400px" src="SamSample1.png"/>

5. Click "Apply" button.

6. Check the status field.
   
  <img alt="image" style="height:400px" src="SamSample1.png"/>
  

## Also See
[SAM API Programmers Guide](../../guide/samapiusage)












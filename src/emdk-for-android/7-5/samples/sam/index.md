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
  - TC72,
  - TC77
image: SamSample1.png
screenshots:
  - SamSample1.png
layout: sample.html
product: EMDK For Android
productversion: '7.5'
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

## Requirements
* Supported Visual Studio version on a Mac or Windows PC with Android API 22 (or higher) installed.<br>See [EMDK Setup Guide](../../guide/setup) for help. 
* A supported Zebra Android device (see list above)
* A Zebra SAM module installed and configured 

##Load Sample App

>**NOTE**: The appearance of sample app screens can vary by sample app version, Android version and screen size.

**Before beginning, download, build and install the sample app**.<br> See the [Sample App Set-up Guide](../../guide/emdksamples_androidstudio) for help. 

##Using This Sample

1. When the application starts it should look like the following:
  
  <img alt="image" style="height:400px" src="SamSample1.png"/>

2. **Note the information provided** by this static sample app. 


-----  

## Also See
[SAM API Programmers Guide](../../guide/samapiusage)












---
publish: true
title: App Manager
description: Shows how to use EMDK for Android Profile APIs to manage App Manager profiles.
downloads:
  - title: Sample Projects
    url: 'https://github.com/Zebra/samples-emdkforandroid-6_9/archive/master.zip'
sources:
  - title: Github Repo
    url: 'https://github.com/Zebra/samples-emdkforandroid-6_9'
features:
  - Profile Manager
  - App Manager
devices:
  - All supported devices
image: 1.png
screenshots:
  - 1.png
  - 2.png
  - 3.png
layout: sample.html
product: EMDK For Android
productversion: '6.9'
---

##Overview

The EMDK for Android allows you to manage applications on the device. 

The available actions are:  
- Install an application
- Uninstall an application
- Upgrade an application  
- Set an application as the default launcher 

This sample application will allow you to install, upgrade, and uninstall an application. 



##Requirements
Android API 22 (or higher) must be installed via the SDK Manager before attempting to load this sample.

##Loading the Sample Application
The following guide will walk you through setting up the EMDK samples in your IDE.

* [Android Studio](/emdk-for-android/6-9/guide/emdksamples_androidstudio)


##Using This Sample
1. When the application starts it should look like the following.  
  ![img](2_1.png)  
2. Enter the path to an APK file that you have placed on your device.  /sdcard/Battery Sample Application.apk
  ![img](2_2.png)    
  >Note:  
  >To place an APK file on the device connect the device to to you computer over USB as a "Medea Device" and copy an APK to your device.  
3.  Click "Set" 
4.  Check the status field.   
  ![img](2_3.png)  





















---
publish: true
title: Scanning with Kotlin
description: Explains how use EMDK for Android to build a scanning app using Kotlin.
downloads:
  - title: Projects Description
    url: 'https://developer.zebra.com/blog/kotlin-and-developing-kotlin-applications-zebra-devices'
sources:
  - title: Github Repo
    url: 'https://github.com/darryncampbell/DataWedgeKotlin'
features:
  - Kotlin
  - Scanner API
devices:
  - All supported devices
image: 1.png
screenshots:
  - kotlin_sample_1.jpeg
  - kotlin_sample_2.png
  - kotlin_sample_3.png
layout: sample.html
product: EMDK For Android
productversion: '9.0'
---

##Overview

OLD OLDIE OLDER

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

* [Android Studio](/emdk-for-android/9-0/guide/emdksamples_androidstudio)

>**NOTE**: The appearance of sample app screens can vary by sample app version, Android version and screen size.

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


---
publish: true
title: GPRS Settings
description: Shows how to add/replace a named APN and remove an existing named APN.
downloads:
  - title: Sample Projects
    url: 'https://github.com/Zebra/samples-emdkforandroid-7_3/archive/master.zip'
sources:
  - title: Github Repo
    url: 'https://github.com/Zebra/samples-emdkforandroid-7_3'
features:
  - Profile Manager
  - GPRS Manager
devices:
  - All supported devices
image: 1.png
screenshots:
  - 1.png
  - 2.png
  - 3.png
  - 4.png
  - 5.png
layout: sample.html
product: EMDK For Android
productversion: '9.1'
---

##Overview
The EMDK for Android allows you to add or remove APNs to a Zebra device. 

The available actions are:
  
* Add/Replace named APN  
* Remove existing named APN  
* Remove all existing APNs  

This sample application will allow you to Add/Replace named APN and remove existing named APN.

##Requirements
Android API 22 (or higher) must be installed via the SDK Manager before attempting to load this sample.

##Loading the Sample Application
The following guide will walk you through setting up the EMDK samples in your IDE.

* [Android Studio](/emdk-for-android/9-1/guide/emdksamples_androidstudio)

>**NOTE**: The appearance of sample app screens can vary by sample app version, Android version and screen size.

##Using This Sample
1. When the application starts it should look like the following.
  
  ![img](gprs_1.png)
  
2. Select Add/Remove named APN
  
  ![img](gprs_2.png)   

3. Provide APN Name (Ex. "Test_APN") and check the checkbox "Replace if exist".

  ![img](gprs_3.png)

4. Provide the applicable APN details such as:

  Access Point: wap.cingular

  Use Name: WAP@CINGULARGPR.COM

  Password: CINGULAR1

  ![img](gprs_4.png)
  
5. Click "Apply" button.

6. Check the status field.   
  ![img](gprs_5.png)  





















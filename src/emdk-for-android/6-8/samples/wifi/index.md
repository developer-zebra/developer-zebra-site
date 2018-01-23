---
publish: true
title: WiFi Configuration
description: This sample application demonstrate how to manage WiFi networks.
downloads:
  - title: Android Studio Project
    url: 'https://github.com/Zebra/samples-emdkforandroid-6_6/archive/ProfileWifiSample1.zip'
sources:
  - title: Android Studio Project
    url: 'https://github.com/Zebra/samples-emdkforandroid-6_6/tree/ProfileWifiSample1'
features:
  - Profile Manager
  - WiFi Manager
devices:
  - MC18KK
  - MC32N0JB
  - MC40JB
  - MC40KK
  - MC92KK
  - TC70KK
  - TC75KK
image: 1.png
screenshots:
  - 1.png
  - 2.png
  - 3.png
layout: sample.html
product: EMDK For Android
productversion: '6.8'
---

##Overview
The EMDK for Android allows you to configure Wi-Fi of a Symbol device. 

The available actions are:
  
* Disable Wi-Fi  
* Enable Wi-Fi  
* Add a Network  
* Connect to a Network
* Enable a Network
* Disconnect from a Network
* Disable a Network
* Remove a Network

> Note: In order to perform all Wi-Fi network operations, Wi-Fi should be enabled.  

This sample application will allow you to perform all the above mentioned Wi-Fi actions on Symbol device.

>Note: Although this sample may work with previous versions of the EMDK, it is advised to [update the EMDK runtime](../../guide/setupDevice/) on your device before loading this sample.

##Requirements
Android API 19 must be installed via the SDK Manager before attempting to load this sample.


##Loading the Sample Application
The following guide will walk you through setting up the EMDK samples in your IDE.

* [Android Studio](/emdk-for-android/6-7/guide/emdksamples_androidstudio)


##Using This Sample

1. When the application starts it should look like the following.
  
  ![img](wifi_1.png)
  
2. Select the Wi-Fi operation you want (Enable/Disable).
   
  ![img](wifi_2.png)   

3. Select the Network action you want to execute from the Network Action drop-down. 
  Let us select "Add(Default Open Network)" option.

  ![img](wifi_3.png)

  > Note: You could also add Personal Network with Passphrase and Enterprise Network with required certificate, which is not in the scope of this sample. 
4. Provide some SSID to the network you want to add in SSID field (Ex. Test_Network).

  ![img](wifi_4.png)

5. Click "Apply" button.

6. Check the status field.
   
  ![img](wifi_5.png)  
  






















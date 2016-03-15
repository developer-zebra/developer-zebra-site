---
publish: true
title: WiFi Configuration
description: This sample application demonstrate how to manage WiFi networks.
download: 'https://github.com/developer-zebra/samples-emdkforandroid-3_1/archive/ProfileWifiSample1.zip'
source: 'https://github.com/developer-zebra/samples-emdkforandroid-3_1/tree/ProfileWifiSample1'
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
productversion: '2.3'
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

##Prerequisites
[See Using the EMDK Samples](../../guide/sample/emdksamples)

##Loading the Sample Application
[See Using the EMDK Samples](../../guide/sample/emdksamples)

##Deploying The Sample Application
[Using the EMDK Samples](../../guide/sample/emdksamples)

##Using This Sample

1. When the application starts it should look like the following.
  
	![img](../../images/samples/wifi_1.png)
  
2. Select the Wi-Fi operation you want (Enable/Disable).
   
	![img](../../images/samples/wifi_2.png)  	

3. Select the Network action you want to execute from the Network Action drop-down. 
	Let us select "Add(Default Open Network)" option.

	![img](../../images/samples/wifi_3.png)

	> Note: You could also add Personal Network with Passphrase and Enterprise Network with required certificate, which is not in the scope of this sample. 
4. Provide some SSID to the network you want to add in SSID field (Ex. Test_Network).

	![img](../../images/samples/wifi_4.png)

5. Click "Apply" button.

6. Check the status field.
   
	![img](../../images/samples/wifi_5.png)  
	












---
publish: true
title: Scan and Pair
description: This sample application will show how the Scan and Pair API can be used to pair two bluetooth devices programmatically.
download: 'https://github.com/developer-zebra/samples-emdkforandroid-3_1/archive/ScanAndPairSample1.zip'
source: 'https://github.com/developer-zebra/samples-emdkforandroid-3_1/tree/ScanAndPairSample1'
features:
  - Profile Manager
  - Scan and Pair
  - Java APIs
devices:
  - MC18KK
  - MC32N0JB
  - MC40JB
  - MC40KK
  - MC67JB
  - MC92KK
  - TC55JB
  - TC55KK
  - TC70KK
  - TC75KK
image: 1.png
screenshots:
  - 1.png
  - 2.png
layout: sample.html
product: EMDK For Android
productversion: '2.3'
---

##Overview##
This sample application will show how the Scan and Pair API can be used to pair two bluetooth devices programmatically.

##Prerequisites
[See Using the EMDK Samples](../../guide/sample/emdksamples)

For this sample, you will need two Android Bluetooth devices, one must be an EMDK for Android supported device. You will also need a barcode that contains the Bluetooth MAC address of the remote bluetooth device that we will be pairing with(The one not running the EMDK app).

##Loading the Sample Application
[See Using the EMDK Samples](../../guide/sample/emdksamples)

##Deploying The Sample Application
[Using the EMDK Samples](../../guide/sample/emdksamples)

##Using This Sample

1.  When the application starts it should look like the following. Leave the **Always Scan** and **Hard Trigger** check boxes selected, and insure the **ScanData Type** spinner is set to **MAC ADDRESS**.  

	![img](../../images/samples/scanandpair1.png)  

2. Press the **Pair** button. The Status label will update, stating that the Scan and Pair process has started, and then prompt the user to press the hard scan trigger.

	![img](../../images/samples/scanandpair3.png)  	

3. Now place the Pairing Barcode in view of the devices scan window, and then press the devices Hard Scan Trigger. The Scan and Pair sample app will retrieve MAC address from the barcode and place it in the **Bluetooth Address** field, then it will initiate the pairing and connection process. Press **Pair** in the Pairing Request dialog, to complete the pairing process. 
After pairing is complete, the status label will display "Bluetooth device is paired successfully".

	![img](../../images/samples/scanandpair4.png) 
















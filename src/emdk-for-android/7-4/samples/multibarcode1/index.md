---
publish: true
title: Multi-barcode Scanning
description: Shows how to scan multiple barcodes simultaneously based on selected scanner device, trigger type and a few decoder parameters.
downloads:
  - title: Sample Projects
    url: 'https://github.com/Zebra/samples-emdkforandroid-7_3/archive/master.zip'
sources:
  - title: Github Repo
    url: 'https://github.com/Zebra/samples-emdkforandroid-7_3'
features:
  - Profile Manager
  - Barcode
  - Java APIs
devices:
  - MC33 O,
  - PS20 O,
  - TC20 N/O,
  - TC25 N/O,
  - TC51 O,
  - TC52 O,
  - TC56 O,
  - TC57 O,
  - TC70x O,
  - TC72 O,
  - TC77 O
image: 1.png
screenshots:
  - 1.png
  - 2.png
  - 3.png
  - 4.png
  - 5.png
  - 6.png
layout: sample.html
product: EMDK For Android
productversion: '7.4'
---

##Overview
This sample demonstrates simultaneous scanning of multiple barcodes using new capabilities in the Barcode API [Barcode/Scanning APIs](/emdk-for-android/7-4/api) introduced with EMDK for Android 6.8. These APIs work independently of any [Data Capture profiles](/emdk-for-android/7-4/mx/data-capture/barcode).  

#### Notes

* **This sample illustrates a single use-case** for implementing multi-barcode features; it is not a comprehensive example of the many ways this feature could be used. 
* **DataWedge cannot be configured for data capture through Profile Manager** when using EMDK-A 6.8 and higher. Zebra recommends using the [DataWedge APIs](/datawedge/latest/guide/api/) instead.

The available actions in the [Barcode/Scanning API](/emdk-for-android/7-4/api) are:

* Set Scanner Device  
* Set TriggerType
* Set Decoder Params
* Set Reader Params
* Set Scan Params
* Scan barcodes based on selected features   
  
<!-- 12/18/18- these links are no longer valid:
* Set [Scanner Device](/emdk-for-android/6-10/api/barcode/BarcodeManager-DeviceIdentifier/)  
* Set [TriggerType](/emdk-for-android/6-10/api/barcode/Scanner)
* Set [Decoder Params](/emdk-for-android/6-10/api/barcode/ScannerConfig-DecoderParams)
* Set [Reader Params](/emdk-for-android/6-10/api/barcode/ScannerConfig-ReaderParams)
* Set [Scan Params](/emdk-for-android/6-10/api/barcode/ScannerConfig-ScanParams)
* Scan barcodes based on selected features   

 -->


##Requirements
Android API 22 (or higher) must be installed via the SDK Manager before attempting to load this sample.

##Loading the Sample Application
The following guide will walk you through setting up the EMDK samples in your IDE.

* [Android Studio](/emdk-for-android/7-4/guide/emdksamples_androidstudio)

>**NOTE**: The appearance of sample app screens can vary by sample app version, Android version and screen size.

##Using This Sample
1. When the application starts it should look like the following.
  
  ![img](barcode_1.png)
  
2. Set scanner to "Serial SSI Scanner", which is the default one". 

  ![img](../../images/samples/barcode_2.png)

3. Set Trigger Type to "HARD".

  ![img](barcode_3.png)

  > Note: Trigger Type "HARD" lets you scan the barcode using device's hard scan key whereas "SOFT" allows you to scan without using devic's hard scan key.

4. Keep all checkboxes checked for decoder params and this is how it should look after setting all fields.
    
  ![img](barcode_4.png)    

5. Click "Start" button and the status will be updated.

  ![img](../../images/samples/barcode_5.png) 
 
6. Since we selected Trigger Type as "HARD", press the hard scan key of Symbol device and scan a particular barcode. It will get the scanned barcode data in "Data" field of UI.
   
  ![img](barcode_6.png)  
  























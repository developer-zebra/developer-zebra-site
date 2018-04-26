---
publish: true
title: UDI Label Scanning
description: Shows how the Barcode API's UDI label scanning features are used.
downloads:
  - title: Sample Projects
    url: 'https://github.com/Zebra/samples-emdkforandroid-6_8/archive/master.zip'
sources:
  - title: Github Repo
    url: 'https://github.com/Zebra/samples-emdkforandroid-6_8'
image: 1.png
devices:
  - TC51 M/N, 
  - TC56 M/N
screenshots:
  - 1.png
  - 2.png
  - 3.png
  - 4.png
  - 5.png
layout: sample.html
product: EMDK For Android
productversion: '6.9'
---


##Overview
This sample application will show how the Barcode API's UDI Label scanning features can be used to scan Barcodes in a UDI Label. This API supports scanning of labels from three issuing agencies ( GS1, ICCBBA, and HIBCC).

##Prerequisites
Although this sample may work with previous versions of the EMDK, it is advised to [update the EMDK runtime](../../guide/setupDevice/) on your device before loading this sample.

##Loading the Sample Application
The following guide will walk you through setting up the EMDK samples in your IDE.

* [Android Studio](/emdk-for-android/6-9/guide/emdksamples_androidstudio)


##Using This Sample

**1.**  With Trigger type set to **Hard**, Press the **Scan** button to enable the scanner.

* Status Label will display **Waiting**
  ![img](2.png)

**2.**  Now point the scanner of your device at a UDI Label and press the Hardware Scan Trigger.

* Upon a successful scan, the type of UDI label and a table of UDI Data will be displayed.
  ![img](3.png)

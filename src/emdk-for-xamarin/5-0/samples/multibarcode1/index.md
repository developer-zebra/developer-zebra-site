---
publish: true
title: Multi-barcode Scanning
description: Shows how to scan multiple barcodes simultaneously.
download: 'https://github.com/Zebra/samples-emdkforxamarin-4_0/archive/master.zip'
source: 'https://github.com/Zebra/samples-emdkforxamarin-4_0/tree/samples-emdkforxamarin-5_0'
features:
  - Profile Manager
  - Barcode
  - 'C# APIs'
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
image: MultiBarcode.png
screenshots:
  - MultiBarcode.png
  - MultiBarcode_scan.png
layout: sample.html
product: EMDK For Xamarin
productversion: '5.0'
---
##Overview
This sample demonstrates simultaneous scanning of multiple barcodes using capabilities in the Barcode/Scanning APIs. These APIs work independently of any [Data Capture profiles](../../mx/data-capture/barcode).  

#### Notes

* **This sample illustrates a single use-case** for implementing multi-barcode features; it is not a comprehensive example of the many ways this feature could be used. 
* **DataWedge cannot be configured for data capture through Profile Manager** when using EMDK-X 4.0 or higher. Zebra recommends using the [DataWedge APIs](/datawedge/latest/guide/api/) instead.

##Using Sample App

>**NOTE**: The appearance of sample app screens can vary by sample app version, Android version and screen size.

**Before beginning, download, build and install the sample app**.<br> See the [Sample App Set-up Guide](../../guide/emdksamples_androidstudio) for help. 

1. **Launch the sample app**. It should appear similar to the image below:
  <img alt="image" style="height:400px" src="MultiBarcode.png"/>
  
2. **Select the desired scanner, point the device at a scan target that contains multiple barcodes and tap the Scan button**.<br>The status area should appear similar to the image below:  

  <img alt="image" style="height:400px" src="MultiBarcode_scan.png"/>

> **NOTE: Sample apps are for demonstration purposes only and should not be used in production environments**.

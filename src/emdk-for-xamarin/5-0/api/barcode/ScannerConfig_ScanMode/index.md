---
title: ScannerConfig.ScanMode
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
Available scanning modes. This allows to select one type at a time.

**Type** - Java.Lang.Enum

##Methods
###ValueOf

**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.ScanMode ValueOf (string this_);**


        

**Parameters:**

System.String **this_**  - 
        

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+ScanMode

###Values

**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.ScanMode[] Values ();**


        

**Parameters:**

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+ScanMode[]

##Properties

###MultiBarcode
Decode multiple barcodes at a time. Number of barcodes to be decoded needs to be configured from 2 to 10.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+ScanMode
###SingleBarcode
Decode only a single barcode at a time.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+ScanMode
###Udi
Decode UDI standard barcodes. This will decode AI fields of the barcodes as well.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+ScanMode

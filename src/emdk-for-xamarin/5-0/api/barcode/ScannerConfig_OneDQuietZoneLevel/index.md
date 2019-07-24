---
title: ScannerConfig.OneDQuietZoneLevel
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
Describes the effort at which the decoder will attempt to decode margin-less barcodes.

**Type** - Java.Lang.Enum

##Methods
###ValueOf

**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.OneDQuietZoneLevel ValueOf (string this_);**


        

**Parameters:**

System.String **this_**  - 
        

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+OneDQuietZoneLevel

###Values

**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.OneDQuietZoneLevel[] Values ();**


        

**Parameters:**

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+OneDQuietZoneLevel[]

##Properties

###Level0
The decoder will perform margin decoding as usual.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+OneDQuietZoneLevel
###Level1
The decoder will perform more aggressively.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+OneDQuietZoneLevel
###Level2
The decoder requires only one side end of barcode.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+OneDQuietZoneLevel
###Level3
The decoder can decode anything.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+OneDQuietZoneLevel

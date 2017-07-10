---
title: ScannerConfig.OneDQuietZoneLevel
layout: guide.html 
product: EMDK For Xamarin 
productversion: '2.5' 
---
Describes the effort at which the decoder will attempt to decode margin-less barcodes.

**Type** - Java.Lang.Enum

##Methods
###ValueOf
**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.OneDQuietZoneLevel ValueOf (string this_);**

Returns the enum constant of this type with the specified name. The string must match exactly an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

**Parameters:** 

* System.String **p0** - 

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+OneDQuietZoneLevel

###Values
**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.OneDQuietZoneLevel[] Values ();**

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants.


**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+OneDQuietZoneLevel[]

##Properties

###Level0
The decoder will perform margin decoding as usual.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.OneDQuietZoneLevel
###Level1
The decoder will perform more aggressively.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.OneDQuietZoneLevel
###Level2
The decoder requires only one side end of barcode.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.OneDQuietZoneLevel
###Level3
The decoder can decode anything.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.OneDQuietZoneLevel



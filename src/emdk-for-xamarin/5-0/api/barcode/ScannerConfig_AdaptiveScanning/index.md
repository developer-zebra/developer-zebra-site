---
title: ScannerConfig.AdaptiveScanning
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
Enable or Disable Adaptive scanning.

**Type** - Java.Lang.Enum

##Methods
###ValueOf

**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.AdaptiveScanning ValueOf (string this_);**

Returns the enum constant of this type with the specified name. The string must match exactly an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

**Parameters:**

System.String **this_**  - the name of the enum constant to be returned.

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+AdaptiveScanning

###Values

**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.AdaptiveScanning[] Values ();**

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows:

**Parameters:**

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+AdaptiveScanning[]

##Properties

###Disable
Adaptive Scan turned off during scanning.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+AdaptiveScanning
###Enable
Scan engine will automatically toggle between 2 scan angles, wide and narrow, allowing the scan engine to decode barcodes based on the distance.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+AdaptiveScanning

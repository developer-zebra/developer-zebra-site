---
title: ScannerConfig.GS1LimitedSecurityLevel
layout: guide.html 
product: EMDK For Xamarin 
productversion: '2.4' 
---
Security level addition of GS1 DataBar lim decoder.

**Type** - Java.Lang.Enum

##Methods
###ValueOf
**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.GS1LimitedSecurityLevel ValueOf (string p0);**

Returns the enum constant of this type with the specified name. The string must match exactly an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

**Parameters:** 

* System.String **p0** - the name of the enum constant to be returned.

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+GS1LimitedSecurityLevel

###Values
**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.GS1LimitedSecurityLevel[] Values ();**

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants.


**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+GS1LimitedSecurityLevel[]

##Properties

###Level1
No clear margin required.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.GS1LimitedSecurityLevel
###Level2
Automatic risk detection.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.GS1LimitedSecurityLevel
###Level3
Security level reflects newly proposed GS1 standard that requires a 5 times trailing clear margin.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.GS1LimitedSecurityLevel
###Level4
Security level extends beyond the standard required by GS1.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.GS1LimitedSecurityLevel



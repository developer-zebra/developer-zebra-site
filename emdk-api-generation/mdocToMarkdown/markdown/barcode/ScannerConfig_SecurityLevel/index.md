---
title: ScannerConfig.SecurityLevel
layout: guide.html
product: EMDK For Xamarin 
productversion: '4.0' 
---
The scanner offers four levels of decode security for UPC/EAN bar codes. Select higher security levels for lower quality bar codes. There is an inverse relationship between security and decode speed, so be sure to choose only that level of security necessary for the application.

**Type** - Java.Lang.Enum

##Methods
###ValueOf

**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.SecurityLevel ValueOf (string this_);**


        

**Parameters:**

System.String **p0** 

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+SecurityLevel

###Values

**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.SecurityLevel[] Values ();**


        

**Parameters:**

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+SecurityLevel[]

##Properties

###Level0
This setting allows the scanner to operate fastest, while providing.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+SecurityLevel
###Level1
As bar code quality levels diminish, certain characters become prone to misdecodes before others (i.e., 1, 2, 7, 8). If the scanner is misdecoding poorly printed bar codes, and the misdecodes are limited to these characters, select this security level.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+SecurityLevel
###Level2
If the scanner is misdecoding poorly printed bar codes, and the misdecodes are not limited to characters 1, 2, 7, and 8, select this security level.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+SecurityLevel
###Level3
If the scanner is still misdecoding, select this security level. Be advised, selecting this option is an extreme measure against misdecoding severely out of spec bar codes. Selecting this level of security can significantly impair the decoding ability of the scanner. If this level of security is necessary, try to improve the quality of the bar codes

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+SecurityLevel

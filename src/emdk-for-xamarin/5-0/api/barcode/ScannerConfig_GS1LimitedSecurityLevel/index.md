---
title: ScannerConfig.GS1LimitedSecurityLevel
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
Security level addition of GS1 DataBar lim decoder.

**Type** - Java.Lang.Enum

##Methods
###ValueOf

**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.GS1LimitedSecurityLevel ValueOf (string this_);**

Returns the enum constant of this type with the specified name. The string must match exactly an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

**Parameters:**

System.String **this_**  - the name of the enum constant to be returned.

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+GS1LimitedSecurityLevel

###Values

**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.GS1LimitedSecurityLevel[] Values ();**

Returns an array containing the constants of this enum type, in the order they are declared.

**Parameters:**

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+GS1LimitedSecurityLevel[]

##Properties

###Level1
No clear margin required. This complies with the original GS1 standard, yet might result in erroneous decoding of the DataBar Limited barcode when scanning some UPC symbols that start with digits "9" and "7"

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+GS1LimitedSecurityLevel
###Level2
Automatic risk detection. This level of security may result in erroneous decoding of DataBar Limited barcodes when scanning some UPC symbols.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+GS1LimitedSecurityLevel
###Level3
Security level reflects newly proposed GS1 standard that requires a 5 times trailing clear margin.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+GS1LimitedSecurityLevel
###Level4
Security level extends beyond the standard required by GS1. This level of security requires a 5 times leading and trailing clear margin.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+GS1LimitedSecurityLevel

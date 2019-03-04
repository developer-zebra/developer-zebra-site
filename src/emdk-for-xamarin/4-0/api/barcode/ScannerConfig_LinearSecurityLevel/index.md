---
title: ScannerConfig.LinearSecurityLevel
layout: guide.html
product: EMDK For Xamarin 
productversion: '4.0' 
---
Sets the number of times a bar code is read to confirm an accurate decode.

**Type** - Java.Lang.Enum

##Methods
###ValueOf

**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.LinearSecurityLevel ValueOf (string this_);**


        

**Parameters:**

System.String **p0** 

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+LinearSecurityLevel

###Values

**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.LinearSecurityLevel[] Values ();**


        

**Parameters:**

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+LinearSecurityLevel[]

##Properties

###AllThrice
Three times read redundancy for all bar codes.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+LinearSecurityLevel
###AllTwice
Two times read redundancy for all bar codes (default).

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+LinearSecurityLevel
###LongAndShort
Two times read redundancy for long bar codes, three times for short bar codes.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+LinearSecurityLevel
###ShortOrCodabar
Two times read redundancy if short bar code or Codabar.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+LinearSecurityLevel

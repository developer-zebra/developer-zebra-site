---
title: ScannerConfig.DecoderParameters+Code128Decoder
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
The Code128 class provides access to parameters that are available for the Code128 decoder.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+DecoderParameters+BaseDecoder

##Properties

###CheckIsbtTable
The ISBT specification includes a table that lists several types of ISBT bar codes that are commonly used in pairs. If ISBT128 Concat Mode is set, enable Check ISBT T able to concatenate only those pairs found in this table. Other types of ISBT codes are not concatenated.

**Type** - System.Boolean
###EnableEan128
Flag to enable EAN128 subtype.

**Type** - System.Boolean
###EnableIsbt128
Flag to enable ISBT128.

**Type** - System.Boolean
###EnablePlain
Flag to enable other sub types besides GS1-128 and ISBT-128

**Type** - System.Boolean
###Isbt128ConcatMode
Select an option for concatenating pairs of ISBT code types. Use enum ScannerConfig.Isbt128ContactMode.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+Isbt128ConcatMode
###Length1
Use to set decode lengths. The supported range is 0 to 55.

**Type** - System.Int32
###Length2
Use to set decode lengths. The supported range is 0 to 55.

**Type** - System.Int32
###ReducedQuietZone
Flag to Enable or Disable decoding of Code 128 barcodes with reduced quiet zones. If you enable, select a OneDQuietZoneLevel to set the effort level.

**Type** - System.Boolean
###Redundancy
Sets the reader to read the bar code twice before accepting data.

**Type** - System.Boolean
###SecurityLevel
The scanner of fers four levels of decode security for Code 128 bar codes. Select increasing levels of security for decreasing levels of bar code quality. There is an inverse relationship between security and scanner aggressiveness, so choose only that level of security necessary for any given application. Use enum ScannerConfig.SecurityLevel.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+SecurityLevel

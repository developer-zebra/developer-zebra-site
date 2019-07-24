---
title: ScannerConfig.DecoderParameters.I2of5Decoder
layout: guide.html 
product: EMDK For Xamarin 
productversion: '5.0' 
---
The I2of5 class provides access to parameters that are available for the I2of5 decoder.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.DecoderParameters.BaseDecoder

##Properties

###ConvertToEan13
Transmit Interleaved 2 of 5 data with or without the check digit.

**Type** - System.Boolean
###Length1
Use to set decode lengths. The valid range is 0 to 55.

**Type** - System.Int32
###Length2
Use to set decode lengths. The valid range is 0 to 55.

**Type** - System.Int32
###ReducedQuietZone
Flag to Enable or Disable decoding of I2of5 barcodes with reduced quiet zones. If you enable, select a OneDQuietZoneLevel to set the effort level.

**Type** - System.Boolean
###Redundancy
Sets the reader to read the bar code twice before accepting data.

**Type** - System.Boolean
###ReportCheckDigit
Transmit Interleaved 2 of 5 data with or without the check digit.

**Type** - System.Boolean
###SecurityLevel
Specifies security level. Use class ScannerConfig.SecurityLevel.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.SecurityLevel
###VerifyCheckDigit
The check digit type to verify. Use enum ScannerConfig.CheckDigitType.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.CheckDigitType



---
title: ScannerConfig.DecoderParameters.Matrix2of5Decoder
layout: guide.html 
product: EMDK For Xamarin 
productversion: '6.0' 
---
The Matrix2of5 class provides access to parameters that are available for the Matrix2of5 decoder.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.DecoderParameters.BaseDecoder

##Properties

###Length1
Used to set decode lengths. The valid range is 0 to 55.

**Type** - System.Int32
###Length2
Used to set decode lengths. The valid range is 0 to 55.

**Type** - System.Int32
###Redundancy
Sets the reader to read the bar code twice before accepting data.

**Type** - System.Boolean
###ReportCheckDigit
Transmit Matrix 2 of 5 data with or without the check digit.

**Type** - System.Boolean
###VerifyCheckDigit
Enable this feature to check the integrity of all Matrix 2 of 5 symbols to verify that the data complies with a specified check digit algorithm.

**Type** - System.Boolean



---
title: ScannerConfig.DecoderParameters.Code11Decoder
layout: guide.html 
product: EMDK For Xamarin 
productversion: '6.0' 
---
The Code11 class provides access to parameters that are available for the Code11 decoder..

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.DecoderParameters.BaseDecoder

##Properties

###Length1
Use to set decode length. The supported range is 0 to 55.

**Type** - System.Int32
###Length2
Use to set decode length. The supported range is 0 to 55

**Type** - System.Int32
###Redundancy
Sets the reader to read the bar code twice before accepting data.

**Type** - System.Boolean
###ReportCheckDigit
Transmit Code 11 data with or without the check digit.

**Type** - System.Boolean
###VerifyCheckDigit
Check the integrity of all Code 11 symbols to verify that the data complies with the specified check digit algorithm. This selects the check digit mechanism for the decoded Code 11 bar code. Use enum ScannerConfig.VerifyCheckDigit.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.VerifyCheckDigit



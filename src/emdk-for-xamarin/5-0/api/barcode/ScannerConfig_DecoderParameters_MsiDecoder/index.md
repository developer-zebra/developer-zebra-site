---
title: ScannerConfig.DecoderParameters.MsiDecoder
layout: guide.html 
product: EMDK For Xamarin 
productversion: '4.0' 
---
The Msi class provides access to parameters that are available for the Msi decoder.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.DecoderParameters.BaseDecoder

##Properties

###CheckDigits
With MSI symbols, one check digit is mandatory and always verified by the reader. The second check digit is optional. Use enum ScannerConfig.CheckDigit.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.CheckDigit
###CheckDigitScheme
Two algorithms are possible for the verification of the second MSI check digit. Select the algorithm used to encode the check digit. Use enum ScannerConfig.CheckDigitScheme.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.CheckDigitScheme
###Length1
Use to set decode lengths. The range is 0 to 55.

**Type** - System.Int32
###Length2
Use to set decode lengths. The range is 0 to 55.

**Type** - System.Int32
###Redundancy
Sets the reader to read the bar code twice before accepting data.

**Type** - System.Boolean
###ReportCheckDigit
Transmit MSI data with or without the check digit.

**Type** - System.Boolean



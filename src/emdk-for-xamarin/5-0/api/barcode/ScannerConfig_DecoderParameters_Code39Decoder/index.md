---
title: ScannerConfig.DecoderParameters.Code39Decoder
layout: guide.html 
product: EMDK For Xamarin 
productversion: '4.0' 
---
The Code39 class provides access to parameters that are available for the Code39 decoder.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.DecoderParameters.BaseDecoder

##Properties

###ConvertToCode32
Code 32 is a variant of Code 39 used by the Italian pharmaceutical industry.

**Type** - System.Boolean
###FullAscii
Code 39 Full ASCII is a variant of Code 39 that pairs characters to encode the full ASCII character set.

**Type** - System.Boolean
###Length1
Use to set decode lengths. The valid range is 0 to 55.

**Type** - System.Int32
###Length2
Use to set decode lengths. The valid range is 0 to 55.

**Type** - System.Int32
###ReducedQuietZone
Flag to Enable or Disable decoding of Code 39 barcodes with reduced quiet zones.

**Type** - System.Boolean
###Redundancy
Sets the reader to read the bar code twice before accepting data.

**Type** - System.Boolean
###ReportCheckDigit
Transmit Code 39 data with or without the check digit.

**Type** - System.Boolean
###ReportCode32Prefix
Scan the appropriate bar code to enable or disable adding the prefix character "A" to all Code 32 bar codes.

**Type** - System.Boolean
###SecurityLevel
Options: Security level 0 , Security Level 1 , Security Level 2 and Security Level 3. Use enum ScannerConfig.SecurityLevel.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.SecurityLevel
###VerifyCheckDigit
Enable this feature to check the integrity of all Code 39 symbols to verify that the data complies with a specified check digit algorithm. The digital scanner decodes only those Code 39 symbols that include a modulo 43 check digit. Enable this feature only if the Code 39 symbols contain a modulo 43 check digit.

**Type** - System.Boolean



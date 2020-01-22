---
title: ScannerConfig.DecoderParameters.CodaBarDecoder
layout: guide.html 
product: EMDK For Xamarin 
productversion: '6.0' 
---
The CodaBar class provides access to parameters that are available for the CodaBar decoder.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.DecoderParameters.BaseDecoder

##Properties

###ClsiEditing
Enable this parameter to strip the start and stop characters and insert a space after the first, fifth, and tenth characters of a 14-character Codabar symbol. Enable this feature if the host system requires this data format.

**Type** - System.Boolean
###Length1
Use to set decode lengths. The supported range is 0 to 55..

**Type** - System.Int32
###Length2
Use to set decode lengths. The supported range is 0 to 55.

**Type** - System.Int32
###NotisEditing
Enable this parameter to strip the start and stop characters from a decoded Codabar symbol. Enable this feature if the host system requires this data format.

**Type** - System.Boolean
###Redundancy
Sets the reader to read the bar code twice before accepting data.

**Type** - System.Boolean



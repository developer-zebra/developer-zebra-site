---
title: ScannerConfig.ReaderParameters
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
The ReaderParams class holds the parameters for a scanner. Reader parameters are global to all reads on all open handles on the same scanner. NOTE: When calling enable() after disable(), all the latest configuration parameter values. (Config.DecoderParams, Config.ScannerParams, Config.ReaderParams) will be set automatically.

**Type** - Java.Lang.Object

##Properties

###ReaderSpecific
ReaderSpecificParams provides access to the reader specific parameters.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+ReaderParameters+ReaderSpecifics

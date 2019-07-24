---
title: ScannerConfig
layout: guide.html
product: EMDK For Xamarin 
productversion: '4.0' 
---
The ScannerConfig class provides access to scanner configuration settings.

**Type** - Java.Lang.Object

##Methods
###IsParamSupported

**public virtual bool IsParamSupported (string p0);**

This method helps to check scanner config parameters supported Returns true if specified parameter is supported. The field name should be specify complete access path till the field in the string format. The scanner config object name can be any name, but following field names should exactly match the fields defined by scanner config class.

**Parameters:**

System.String **p0**  - Field name

**Returns** - System.Boolean

###ResetToDefault

**public virtual void ResetToDefault (Symbol.XamarinEMDK.Barcode.Scanner p0);**

Resets the scanner parameters to defaults values for the specified scanner. The unsupported parameters left as it is.

**Parameters:**

Symbol.XamarinEMDK.Barcode.Scanner **p0**  - Scanner Object

**Returns** - System.Void

##Properties

###DecoderParams
The DecoderParams class contains decoder parameters that are used by multiple decoder symbologies. The property provides access to such decoder parameters as Enabled and isSupported, among others. NOTE: When calling enable() after disable(), all the latest configuration parameter values (Config.DecoderParams, Config.ScannerParams, Config.ReaderParams) will be set automatically.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+DecoderParameters
###MultiBarcodeParams
Provides access to multi-barcode parameters available to configure.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+MultiBarcodeParameters
###ReaderParams
The ReaderParams class holds the parameters for a scanner. Reader parameters are global to all reads on all open handles on the same scanner. NOTE: When calling enable() after disable(), all the latest configuration parameter values (Config.DecoderParams, Config.ScannerParams, Config.ReaderParams) will be set automatically.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+ReaderParameters
###ScanParams
The ScanParams property provides access to scanning parameters that are available for all decoders. NOTE: When calling enable() after disable(), all the latest configuration parameter values (Config.DecoderParams, Config.ScannerParams, Config.ReaderParamss) will be set automatically.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+ScanParameters
###SkipOnUnsupported
This flag to tells whether to skip the unsupported parameter/values and continue or stop setting the configuration. Its set to UNSUPPORTED_PARAM by default which skips the unsupported params and continues.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+SkipOnUnSupported
###UdiParams
The UdiParams class holds the parameters for UDI.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+UdiParameters

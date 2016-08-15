---
title: ScannerConfig
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


The ScannerConfig class provides access to scanner configuration settings.
 
 

**Example Usage:**
	
	:::java	
	ScannerConfig scannerConfig = scanner.getConfig(scannerConfig);
	scannerConfig.scanParams.decodeHapticFeedback = true;
	scannerConfig.decoderParams.codabar.length1 = 6;
	scanner.setConfig(scannerConfig);


##Public Methods

### isParamSupported

**public boolean isParamSupported(java.lang.String param)**

This method helps to check scanner config parameters supported 
 Returns true if specified parameter is supported.
 The field name should be specify complete access path till the field in the string format.
 The scanner config object name can be any name, but following field names should exactly match the fields defined by scanner config class.
 

**Example Usage:**
	
	:::java	
	ScannerConfig config1 = scanner.getConfig(scannerConfig);
	if ( config1.isParamSupported("config1.scanParams.decodeHapticFeedback") ) {
	config1.scanParams.decodeHapticFeedback = true;
	}
	if ( config1.isParamSupported("config1.decoderParams.codabar.enabled") ) {
	config1.decoderParams.codabar.enabled = true;
	}
	scanner.setConfig(config1);


**Parameters:**

`param`

**Returns:**

boolean - 

### resetToDefault

**public void resetToDefault(Scanner scanner)**

Resets the scanner parameters to defaults values for the specified scanner.
 The unsupported parameters left as it is.

**Parameters:**

`scanner`

**Returns:**

void

**Throws:**

com.symbol.emdk.barcode.ScannerException



##Public Fields

###skipOnUnsupported

This flag to tells whether to skip the unsupported parameter/values and continue or stop setting the configuration.
 Its set to UNSUPPORTED_PARAM by default which skips the unsupported params and continues.

**Type:**

com.symbol.emdk.barcode.ScannerConfig.SkipOnUnSupported

###scanParams

The ScanParams property provides access to scanning parameters that are
 available for all decoders. NOTE: When calling enable() after disable(),
 all the latest configuration parameter values (Config.DecoderParams,
 Config.ScannerParams, Config.ReaderParamss)
 will be set automatically.

**Type:**

com.symbol.emdk.barcode.ScannerConfig.ScanParams

###decoderParams

The DecoderParams class contains decoder parameters that are used by
 multiple decoder symbologies. The property provides access to such
 decoder parameters as Enabled and isSupported, among others. NOTE: When
 calling enable() after disable(), all the latest configuration parameter
 values (Config.DecoderParams, Config.ScannerParams, Config.ReaderParams) 
 will be set automatically.

**Type:**

com.symbol.emdk.barcode.ScannerConfig.DecoderParams

###readerParams

The ReaderParams class holds the parameters for a scanner. Reader
 parameters are global to all reads on all open handles on the same
 scanner. NOTE: When calling enable() after disable(), all the latest
 configuration parameter values (Config.DecoderParams,
 Config.ScannerParams, Config.ReaderParams)
 will be set automatically.

**Type:**

com.symbol.emdk.barcode.ScannerConfig.ReaderParams



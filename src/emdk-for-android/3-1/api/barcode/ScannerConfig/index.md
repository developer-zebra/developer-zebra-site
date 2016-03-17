---
title: ScannerConfig
layout: guide.html
product: EMDK For Android
productversion: '2.3'
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

param

**Returns:**

boolean

### resetToDefault

**public void resetToDefault(Scanner scanner)**

Resets the scanner parameters to defaults values for the specified scanner.
 The unsupported parameters left as it is.

**Parameters:**

scanner

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

##Public Enums

###ScannerConfig.Preamble

Controls the preamble applied to the bar code Preamble characters are
 part of the UPC symbol consisting of Country Code and System Character.
 Select the appropriate option to match the host system.

 

**Example Usage:**
	
	:::java	
	Preamble.NONE;


**Values:**

* **NONE** -No preamble

* **SYS_CHAR** -System character preamble

* **COUNTRY_AND_SYS_CHAR** -Both country and system code preamble

###ScannerConfig.Isbt128ContactMode

Option for concatenating pairs of ISBT128 code types.

 

**Example Usage:**
	
	:::java	
	Isbt128ContactMode.NEVER;


**Values:**

* **NEVER** -Will ignore the barcode pair and only output decode data for only one
 of the barcodes

* **ALWAYS** -Will not decode if both the barcodes are not present or if one of
 them cannot be decoded. There must be two ISBT codes in order to
 decode and perform concatenation.

* **AUTO** -Decodes and concatenates pairs of ISBT codes immediately. If only a
 single ISBT symbol is present, the device must decode the symbol the
 number of times set via DataWedge Configuration 4 - 1 1 Redundancy -
 Code128 before transmitting its data to confirm that there is no
 additional ISBT symbol.

###ScannerConfig.HanXinInverse

This parameter allows the user to select decoding on inverse HanXin bar codes.

 

**Example Usage:**
	
	:::java	
	HanXinInverse.DISABLED;


**Values:**

* **DISABLED** -Disables decoding of inverse HanXin symbologies

* **ENABLED** -Enables decoding of only inverse HanXin symbologies.

* **AUTO** -Allows decoding of both positive as well as inverse HanXin symbologies.

###ScannerConfig.SecurityLevel

The scanner offers four levels of decode security for UPC/EAN bar codes.
 Select higher security levels for lower quality bar codes. There is an
 inverse relationship between security and decode speed, so be sure to
 choose only that level of security necessary for the application.

 

**Example Usage:**
	
	:::java	
	SecurityLevel.LEVEL_0;


**Values:**

* **LEVEL_0** -This setting allows the scanner to operate fastest, while providing.

* **LEVEL_1** -As bar code quality levels diminish, certain characters become prone
 to misdecodes before others (i.e., 1, 2, 7, 8). If the scanner is
 misdecoding poorly printed bar codes, and the misdecodes are limited
 to these characters, select this security level.

* **LEVEL_2** -If the scanner is misdecoding poorly printed bar codes, and the
 misdecodes are not limited to characters 1, 2, 7, and 8, select this
 security level.

* **LEVEL_3** -If the scanner is still misdecoding, select this security level. Be
 advised, selecting this option is an extreme measure against
 misdecoding severely out of spec bar codes. Selecting this level of
 security can significantly impair the decoding ability of the
 scanner. If this level of security is necessary, try to improve the
 quality of the bar codes

###ScannerConfig.LinearSecurityLevel

Sets the number of times a bar code is read to confirm an accurate
 decode.

 

**Example Usage:**
	
	:::java	
	LinearSecurityLevel.SHORT_OR_CODABAR;


**Values:**

* **SHORT_OR_CODABAR** -Two times read redundancy if short bar code or Codabar.

* **ALL_TWICE** -Two times read redundancy for all bar codes (default).

* **LONG_AND_SHORT** -Two times read redundancy for long bar codes, three times for short
 bar codes.

* **ALL_THRICE** -Three times read redundancy for all bar codes.

###ScannerConfig.CheckDigitType

Verify data integrity.

 

**Example Usage:**
	
	:::java	
	CheckDigitType.NO;


**Values:**

* **NO** -A check digit is not used.

* **USS** -Select to check the integrity of all Interleaved 2 of 5 symbols to
 verify the data complies with either the Uniform Symbology
 Specification (USS) check digit algorithm.

* **OPCC** -Select to check the integrity of all Interleaved 2 of 5 symbols to
 verify the data complies with either the Optical Product Code Council
 (OPCC) check digit algorithm.

###ScannerConfig.CheckDigit

The number of check digits to be verified. With MSI symbols, one check
 digit is mandatory and always verified by the reader. The second check
 digit is optional.

 

**Example Usage:**
	
	:::java	
	CheckDigit.ONE;


**Values:**

* **ONE** -Verify one check digit.

* **TWO** -Verify two check digits.

###ScannerConfig.VerifyCheckDigit

Check the integrity of all Code 11 symbols to verify that the data
 complies with the specified check digit algorithm. This selects the check
 digit mechanism for the decoded Code 11 bar code.

 

**Example Usage:**
	
	:::java	
	VerifyCheckDigit.NO;


**Values:**

* **NO** -Do not verify check digit.

* **ONE** -Bar code contains one check digit.

* **TWO** -Bar code contains two check digits.

###ScannerConfig.CheckDigitScheme

Two algorithms are possible for the verification of the second MSI check
 digit. Select the algorithm used to encode the check digit.

 

**Example Usage:**
	
	:::java	
	CheckDigitScheme.MOD_11_10;


**Values:**

* **MOD_11_10** -First check digit is MOD 11 and second check digit is MOD 10.

* **MOD_10_10** -Both check digits are MOD 10.

###ScannerConfig.UccLinkMode

Describes the UCC link mode state.

 

**Example Usage:**
	
	:::java	
	UCCLinkMode.LINK_FLAG_IGNORED;


**Values:**

* **LINK_FLAG_IGNORED** -1D component is transmitted regardless of whether a 2D component is
 detected.

* **ALWAYS_LINKED** -1D and the 2D components are transmitted. If 2D is not present, the
 1D component is not transmitted.

* **AUTO_DISCRIMINATE** -the digital scanner determines if there is a 2D portion, then
 transmits the 1D component, as well as the 2D portion if present
 (default). (default).

###ScannerConfig.PickList

Allows the imager to decode only the bar code that is directly under the
 cross-hair/reticle (+) part of the pattern. This feature is useful in
 applications where multiple bar codes may appear in the field of view
 during a decode session and only one of them is tar geted for decode.

 

**Example Usage:**
	
	:::java	
	PickList.DISABLED;


**Values:**

* **DISABLED** -Disables Picklist mode. Any bar code within the field of view can be
 decoded.

* **ENABLED** -Enables the Picklist mode so that only the bar code that is directly
 under the cross-hair (reticle) is decoded. This is useful when used
 in conjunction with the static and dynamic reticle viewfinder modes.
 (Scan Module Only)

###ScannerConfig.CodeIdType

A Code ID character identifies the code type of a scanned bar code. This
 is useful when the reader is decoding more than one code type. Select a
 code ID character to insert between the prefix and the decoded symbol.

 

**Example Usage:**
	
	:::java	
	CodeIdType.NONE;


**Values:**

* **NONE** -No prefix.

* **AIM** -A standards based three character prefix.

* **SYMBOL** -A Symbol defined single character prefix.

###ScannerConfig.SupplementalMode

Supplemental modes

 

**Example Usage:**
	
	:::java	
	SupplementalMode.NO;


**Values:**

* **NO** -The scanner is presented with a UPC/EAN plus supplemental symbol, the
 scanner decodes UPC/EAN and ignores the supplemental characters.

* **ALWAYS** -The scanner only decodes UPC/EAN symbols with supplemental
 characters, and ignores symbols without supplementals.

* **AUTO** -The scanner decodes UPC/EAN symbols with supplemental characters
 immediately . If the symbol does not have a supplemental, the scanner
 must decode the bar code the number of times set via UPC/EAN
 Supplemental Redundancy before transmitting its data to confirm that
 there is no supplemental.

* **SMART** -Enables smart supplementals. In this mode the decoder returns the
 decoded value of the main block right away if it does not belong to
 one of the following supplemental types: 378, 379, 977, 978, 979,
 414, 419, 434 or 439. If the bar code starts with one of the prefixes
 it searches the image more aggressively for a supplemental. Tries to
 scan the supplemental if it is present. If the supplemental scanning
 failed, then the main bar code is returned.

* **S_378_379** -Enables (auto-discriminate) supplemental for UPC/EAN codes starting
 with 378 or 379. Disables reading of supplementals for any other
 UPC/EAN bar code not starting with 378 or 379. Tries to scan the
 supplemental if it is present. If the supplemental scanning failed,
 then the main bar code is returned.

* **S_978_979** -Enables (auto-discriminate) supplemental for UPC/EAN codes starting
 with 978 or 979. Disables reading of supplementals for another
 UPC/EAN bar code not starting with 978 or 979. Tries to scan the
 supplemental if it is present. If the supplemental scanning failed,
 then the main bar code is returned.

* **S_414_419_434_439** -Enables (auto-discriminate) supplemental for UPC/EAN codes starting
 with 414, 419, 434 or 439. Disables reading of supplementals for
 another UPC/EAN bar code 4 - 16 not starting with 414, 419, 434 or
 439. Tries to scan the supplemental if it is present. If the
 supplemental scanning failed, then the main bar code is returned.

* **S_977** -Enables (auto-discriminate) supplemental for UPC/EAN codes starting
 with 977. Disables reading of supplementals for another UPC/EAN
 barcode not starting with 977. Tries to scan the supplemental if it
 is present. If the supplemental scanning failed, then the main bar
 code is returned.

###ScannerConfig.CouponReport

Supported Coupon modes

 

**Example Usage:**
	
	:::java	
	CouponReport.OLD;


**Values:**

* **OLD** -Scanner will read only the old coupon format

* **NEW** -Scanner will read only the new GS1 DataBar coupon format

* **BOTH** -Scanner will read both old coupon format as well as the new GS1
 DataBar coupon format

###ScannerConfig.BooklandFormat

Lists the Bookland formats

 

**Example Usage:**
	
	:::java	
	BooklandFormat.ISBN_10;


**Values:**

* **ISBN_10** -978 reported in 10 digit mode

* **ISBN_13** -978/979 transmitted as EAN13 as per 2007 ISBN-13 protocol

###ScannerConfig.ViewFinderMode

Configures the Viewfinder modes supported for camera scanning.

 

**Example Usage:**
	
	:::java	
	ViewFinderMode.ENABLED;


**Values:**

* **ENABLED** -Viewfinder enabled. Displays the images captured by the camera on the
 screen.

* **STATIC_RECTICLE** -Viewfinder enabled with locate reticle. Displays the viewfinder as
 well as draws a red reticle in the center of the screen which helps
 with tracking the barcode.

###ScannerConfig.IlluminationMode

Enable/disable illumination depending on ambient light conditions.
 This option is only available when camera is selected in the Barcode input Scanner selection option.

 

**Example Usage:**
	
	:::java	
	IlluminationMode.OFF;


**Values:**

* **OFF** -Illumination turned off during scanning.

* **ON** -Illumination turned on during scanning.

###ScannerConfig.LcdMode

Enable or disable LCD mode (for Blockbuster imager devices only).
 LCD mode enhances the ability of the imager to read bar codes from LCD displays such as cellphones.

 

**Example Usage:**
	
	:::java	
	LCDMode.DISABLED;


**Values:**

* **DISABLED** -Disables LCD mode

* **ENABLED** -Enables LCD mode.

###ScannerConfig.Inverse1DMode

This parameter allows the user to select decoding on inverse 1D bar codes.

 

**Example Usage:**
	
	:::java	
	Inverse1DMode.DISABLED;


**Values:**

* **DISABLED** -Disables decoding of inverse 1D symbologies

* **ENABLED** -Enables decoding of only inverse 1D symbologies.

* **AUTO** -Allows decoding of both positive as well as inverse 1D symbologies.

###ScannerConfig.AudioStreamType

Volume slider type for decode audio feedback.

**Values:**

* **RINGER** -Ringer and Notifications.

* **MEDIA** -Music and Media.

* **ALARAMS** -Alarms.

###ScannerConfig.PowerMode

Set laser scanner power mode

**Values:**

* **LOW** -Lowest power, but slowest performance.

* **OPTIMIZED** -Power level adjusts with scanning usage.

* **HIGH** -High power, and excellent performance.

* **ALWAYS_ON** -Highest power, fastest performance.

###ScannerConfig.SkipOnUnSupported



**Values:**

* **NONE** -Throws exception on any unsupported parameters or values.

* **UNSUPPORTED_PARAM** -Skips the only unsupported paramter and continues with next.

* **UNSUPPORTED_VALUE** -Skips the only unsupported values and continues with next.

* **ALL** -Skips both unsupported paramters and values and continues with next.











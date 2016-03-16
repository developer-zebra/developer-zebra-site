---
title: ProfileConfig.DataCapture.Barcode.DecoderParams.Interleaved_2of5
layout: guide.html
product: EMDK For Android
productversion: '2.3'
---

Holds Interleaved 2 of 5 configuration settings.

 

**Example Usage:**
	
	:::java	
	Interleaved_2of5 interleaved2of5 = profileConfig.dataCapture.barcode.decoderParams.interleaved_2of5;


##Public Fields

###length1

Use to set decode lengths (default - 14).

 

**Example Usage:**
	
	:::java	
	int length1 = interleaved2of5.length1;


**Type:**

int

###length2

Use to set decode lengths (default - 10).

 

**Example Usage:**
	
	:::java	
	int length2 = interleaved2of5.length2;


**Type:**

int

###redundancy

Sets the reader to read the bar code twice before accepting data (default - enabled).
 Use enum  ProfileConfig.ENABLED_STATE.

 

**Example Usage:**
	
	:::java	
	interleaved2of5.redundancy = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###check_digit

The check digit type to verify.
 Use enum  ProfileConfig.CHECK_DIGIT_TYPE.

 

**Example Usage:**
	
	:::java	
	interleaved2of5.check_digit = CHECK_DIGIT_TYPE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.CHECK_DIGIT_TYPE

###report_check_digit

Transmit Interleaved 2 of 5 data with or without the check digit (default - disabled).
 Use enum  ProfileConfig.ENABLED_STATE.

 

**Example Usage:**
	
	:::java	
	interleaved2of5.report_check_digit = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###convert_itf14_to_ean13

Convert 14-character Interleaved 2 of 5 bar codes to EAN-13, and transmit as EAN-13.
 The Interleaved 2 of 5 bar code must be enabled and must have a leading zero and a valid EAN-13 check digit (default - disabled).
 Use enum  ProfileConfig.ENABLED_STATE.

 

**Example Usage:**
	
	:::java	
	interleaved2of5.convert_itf14_to_ean13 = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###security_level

Specifies security level

 Use enum  ProfileConfig.SECURITY_LEVEL.

 

**Example Usage:**
	
	:::java	
	interleaved2of5.security_level = SECURITY_LEVEL.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.SECURITY_LEVEL











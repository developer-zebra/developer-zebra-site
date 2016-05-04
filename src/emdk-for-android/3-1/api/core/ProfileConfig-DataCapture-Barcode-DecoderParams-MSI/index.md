---
title: ProfileConfig.DataCapture.Barcode.DecoderParams.MSI
layout: guide.html
product: EMDK For Android
productversion: '2.3'
---

Holds Codabar configuration settings.

 

**Example Usage:**
	
	:::java	
	MSI msi = profileConfig.dataCapture.barcode.decoderParams.msi;


##Public Fields

###length1

Use to set decode lengths (default - 4).

 

**Example Usage:**
	
	:::java	
	int length1 = msi.length1;


**Type:**

int

###length2

Use to set decode lengths (default - 55).

 

**Example Usage:**
	
	:::java	
	int length2 = msi.length2


**Type:**

int

###redundancy

Sets the reader to read the bar code twice before accepting data (default - enabled).
 Use enum  ProfileConfig.ENABLED_STATE.

 

**Example Usage:**
	
	:::java	
	msi.redundancy = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###check_digit

With MSI symbols, one check digit is mandatory and always verified by the reader.
 The second check digit is optional.
 Use enum  ProfileConfig.CHECK_DIGIT.

 

**Example Usage:**
	
	:::java	
	msi.check_digit = CHECK_DIGIT.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.CHECK_DIGIT

###check_digit_scheme

Two algorithms are possible for the verification of the second MSI check digit.
 Select the algorithm used to encode the check digit.
 Use enum  ProfileConfig.CHECK_DIGIT_SCHEME.

 

**Example Usage:**
	
	:::java	
	msi.check_digit_scheme = CHECK_DIGIT_SCHEME.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.CHECK_DIGIT_SCHEME

###report_check_digit

Transmit MSI data with or without the check digit (default - disabled).
 Use enum  ProfileConfig.ENABLED_STATE.

 

**Example Usage:**
	
	:::java	
	msi.report_check_digit = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE














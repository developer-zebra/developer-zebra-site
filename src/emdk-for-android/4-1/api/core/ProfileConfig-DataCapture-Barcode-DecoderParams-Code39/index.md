---
title: ProfileConfig.DataCapture.Barcode.DecoderParams.Code39
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.1'
---


Holds Code39 configuration settings. 
 

**Example Usage:**
	
	:::java
	
	Code39 code39 = profileConfig.dataCapture.barcode.decoderParams.code39;
	


##Public Fields

###length1

Use to set decode lengths (default - 0).
 
 

**Example Usage:**
	
	:::java
	
	int length1 = code39.length1;
	


**Type:**

int

###length2

Use to set decode lengths 4 (default - 55).
 
 

**Example Usage:**
	
	:::java
	
	int length2 = code39.length2;
	


**Type:**

int

###verify_check_digit

Enable this feature to check the integrity of all Code 39 symbols to verify that the data complies with a specified check digit algorithm. 
 The digital scanner decodes only those Code 39 symbols that include a modulo 43 check digit. 
 Enable this feature only if the Code 39 symbols contain a modulo 43 check digit (default - disabled).
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	code39.verify_check_digit = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###report_check_digit

Transmit Code 39 data with or without the check digit (default - disabled).
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	code39.report_check_digit = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###full_ascii

Code 39 Full ASCII is a variant of Code 39 that pairs characters to encode the full ASCII character set (default - disabled).
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	code39.full_ascii = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###redundancy

Sets the reader to read the bar code twice before accepting data (default - disabled).
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	code39.redundancy = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###convert_to_code32

Code 32 is a variant of Code 39 used by the Italian pharmaceutical industry (default - disabled).
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	code39.convert_to_code32 = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###report_code32_prefix

Scan the appropriate bar code to enable or disable adding the prefix character "A" to all Code 32 bar codes (default - disabled).
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	code39.report_code32_prefix = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###security_level

Options: Security level 0 , Security Level 1 , Security Level 2 and Security Level 3 (default - Security level 1).
 Use enum [ ProfileConfig.SECURITY_LEVEL](../ProfileConfig-SECURITY_LEVEL). 
 
 

**Example Usage:**
	
	:::java
	
	code39.security_level = SECURITY_LEVEL.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.SECURITY_LEVEL










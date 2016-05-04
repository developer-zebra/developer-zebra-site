---
title: ProfileConfig.DataCapture.Barcode.DecoderParams.Code128
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.0'
---


Holds Code128 configuration settings. 
 
 

**Example Usage:**
	
	:::java
	
	Code128 code128 = profileConfig.dataCapture.barcode.decoderParams.code128;
	


##Public Fields

###length1

Use to set decode lengths (default - 0).
 
 

**Example Usage:**
	
	:::java
	
	int length1 = code128.length1;
	


**Type:**

int

###length2

Use to set decode lengths (default - 55).
 
 

**Example Usage:**
	
	:::java
	
	int length2 = code128.length2;
	


**Type:**

int

###redundancy

Sets the reader to read the bar code twice before accepting data (default - disabled).
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	code128.redundancy = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###enable_plain

Flag to enable other 128 sub types (besides GS1-128 and ISBT -128).
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	code128.enable_plain = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###enable_ean128

Set the EAN128 subtype. (default - enabled).
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	code128.enable_ean128 = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###enable_isbt128

Set the ISBT128 subtype. (default - enabled).
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	code128.enable_isbt128 = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###isbt128_concat_mode

Select an option for concatenating pairs of ISBT code types.
 Use enum [ ProfileConfig.ISBT128_CONTACT_MODE](../ProfileConfig-ISBT128_CONTACT_MODE). 
 
 

**Example Usage:**
	
	:::java
	
	code128.isbt128_concat_mode = ISBT128_CONTACT_MODE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.ISBT128_CONTACT_MODE

###check_isbt_table

The ISBT specification includes a table that lists several types of ISBT bar codes that are commonly used in pairs. 
 If ISBT128 Concat Mode is set, enable Check ISBT T able to concatenate only those pairs found in this table. 
 Other types of ISBT codes are not concatenated (default - disabled).
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	code128.check_isbt_table = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###security_level

The scanner of fers four levels of decode security for Code 128 bar codes. 
 Select increasing levels of security for decreasing levels of bar code quality. 
 There is an inverse relationship between security and scanner aggressiveness, 
 so choose only that level of security necessary for any given application. 
 Use enum [ ProfileConfig.SECURITY_LEVEL](../ProfileConfig-SECURITY_LEVEL). 
 
 

**Example Usage:**
	
	:::java
	
	code128.security_level = SECURITY_LEVEL.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.SECURITY_LEVEL













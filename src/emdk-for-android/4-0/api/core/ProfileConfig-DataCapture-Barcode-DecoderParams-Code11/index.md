---
title: ProfileConfig.DataCapture.Barcode.DecoderParams.Code11
type: api
---


Holds Code 11 configuration settings. 
 
 

**Example Usage:**
	
	:::java
	
	Code11 code11 = profileConfig.dataCapture.barcode.decoderParams.code11;
	


##Public Fields

###length1

Use to set decode lengths (default - 4). 
 
 

**Example Usage:**
	
	:::java
	
	int length1 = code11.length1;
	


**Type:**

int

###length2

Use to set decode lengths (default - 55). 
 
 

**Example Usage:**
	
	:::java
	
	int length2 = code11.length2;
	


**Type:**

int

###redundancy

Sets the reader to read the bar code twice before accepting data (default - enabled). 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	code11.redundancy = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###verify_check_digit

Check the integrity of all Code 11 symbols to verify that the data complies with the specified check digit algorithm. 
 This selects the check digit mechanism for the decoded Code 11 bar code.
 Use enum [ ProfileConfig.VERIFY_CHECK_DIGIT](../ProfileConfig-VERIFY_CHECK_DIGIT). 
 
 

**Example Usage:**
	
	:::java
	
	code11.verify_check_digit = VERIFY_CHECK_DIGIT.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.VERIFY_CHECK_DIGIT

###report_check_digit

Transmit Code 11 data with or without the check digit (default - disabled).
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	code11.report_check_digit = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE


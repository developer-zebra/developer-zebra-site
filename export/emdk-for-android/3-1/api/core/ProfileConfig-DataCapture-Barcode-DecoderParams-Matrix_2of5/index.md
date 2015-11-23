---
title: ProfileConfig.DataCapture.Barcode.DecoderParams.Matrix_2of5
---

Holds Matrix 2 of 5 configuration settings. 
 
 

**Example Usage:**
	
	:::java	
	Matrix_2of5 matrix2of5 = profileConfig.dataCapture.barcode.decoderParams.matrix_2of5;


##Public Fields

###length1

Used to set decode lengths (default - 10). 
 
 

**Example Usage:**
	
	:::java	
	int length1 = matrix2of5.length1;


**Type:**

int

###length2

Used to set decode lengths (default - 0). 
 
 

**Example Usage:**
	
	:::java	
	int length2 = matrix2of5.length2;


**Type:**

int

###redundancy

Sets the reader to read the bar code twice before accepting data (default - disabled). 
 Use enum  ProfileConfig.ENABLED_STATE. 
 
 

**Example Usage:**
	
	:::java	
	matrix2of5.redundancy = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###report_check_digit

Transmit Matrix 2 of 5 data with or without the check digit(default - enabled). 
 Use enum  ProfileConfig.ENABLED_STATE. 
 
 

**Example Usage:**
	
	:::java	
	matrix2of5.report_check_digit = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###verify_check_digit

Enable this feature to check the integrity of all Matrix 2 of 5 symbols to verify that the data complies with a specified check digit algorithm 
 (default - enabled). 
 Use enum  ProfileConfig.ENABLED_STATE. 
 
 

**Example Usage:**
	
	:::java	
	matrix2of5.verify_check_digit = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE



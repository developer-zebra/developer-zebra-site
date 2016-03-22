---
title: ScannerConfig.DecoderParams.Matrix2of5
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.0'
---


The Matrix2of5 class provides access to parameters that are
 available for the Matrix2of5 decoder.

##Public Fields

###length1

Used to set decode lengths. The valid range is 0 to 55.
 
 

**Example Usage:**
	
	:::java
	
	matrix2of5.length1 = 10;
	


**Type:**

int

###length2

Used to set decode lengths. The valid range is 0 to 55.
 
 

**Example Usage:**
	
	:::java
	
	matrix2of5.length2 = 0;
	


**Type:**

int

###redundancy

Sets the reader to read the bar code twice before accepting data.
 
 

**Example Usage:**
	
	:::java
	
	matrix2of5.redundancy = false;
	


**Type:**

boolean

###reportCheckDigit

Transmit Matrix 2 of 5 data with or without the check digit.
 
 

**Example Usage:**
	
	:::java
	
	matrix2of5.reportCheckDigit = true;
	


**Type:**

boolean

###verifyCheckDigit

Enable this feature to check the integrity of all Matrix 2 of 5
 symbols to verify that the data complies with a specified check
 digit algorithm
 

**Example Usage:**
	
	:::java
	
	matrix2of5.verifyCheckDigit = true;
	


**Type:**

boolean










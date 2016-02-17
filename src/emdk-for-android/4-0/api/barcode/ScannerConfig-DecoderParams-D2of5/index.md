---
title: ScannerConfig.DecoderParams.D2of5
type: api
---


The D2OF5 class provides access to parameters that are available for
 the D2OF5 decoder.

##Public Fields

###length1

Used to set decode lengths. The valid range is 0 to 55.
 
 

**Example Usage:**
	
	:::java	
	d2of5.length1 = 0;


**Type:**

int

###length2

Used to set decode lengths. The valid range is 0 to 55.
 
 

**Example Usage:**
	
	:::java	
	d2of5.length2 = 14;


**Type:**

int

###redundancy

Sets the reader to read the bar code twice before accepting data.
 
 

**Example Usage:**
	
	:::java	
	d2of5.redundancy = true;


**Type:**

boolean


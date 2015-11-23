---
title: ScannerConfig.DecoderParams.Code93
---

The Code93 class provides access to parameters that are available for
 the Code93 decoder.

##Public Fields

###length1

Use to set decode lengths. The valid range is 0 to 55.
 
 

**Example Usage:**
	
	:::java	
	int length1 = 0;


**Type:**

int

###length2

Use to set decode lengths. The valid range is 0 to 55.
 
 

**Example Usage:**
	
	:::java	
	code93.length2 = 55;


**Type:**

int

###redundancy

Sets the reader to read the bar code twice before accepting data.
 
 

**Example Usage:**
	
	:::java	
	code93.redundancy = true;


**Type:**

boolean



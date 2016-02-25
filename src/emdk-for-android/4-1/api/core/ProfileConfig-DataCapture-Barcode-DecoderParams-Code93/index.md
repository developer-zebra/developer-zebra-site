---
title: ProfileConfig.DataCapture.Barcode.DecoderParams.Code93
type: api
---


Holds Code93 configuration settings. 
 
 

**Example Usage:**
	
	:::java
	
	Code93 code93 = profileConfig.dataCapture.barcode.decoderParams.code93;
	


##Public Fields

###length1

Use to set decode lengths (default - 0). 
 
 

**Example Usage:**
	
	:::java
	
	int length1 = code93.length1;
	


**Type:**

int

###length2

Use to set decode lengths (default - 55). 
 
 

**Example Usage:**
	
	:::java
	
	int length2 = code93.length2;
	


**Type:**

int

###redundancy

Sets the reader to read the bar code twice before accepting data (default - disabled). 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	code93.redundancy = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE


---
title: ProfileConfig.DataCapture.Barcode.DecoderParams.Discrete_2of5
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


Holds Discrete 2 of 5 configuration settings. 
 
 

**Example Usage:**
	
	:::java	
	Discrete_2of5 discrete_2of5 = profileConfig.dataCapture.barcode.decoderParams.discrete_2of5;


##Public Fields

###length1

Used to set decode lengths (default - 0). 
 
 

**Example Usage:**
	
	:::java	
	int length1 = discrete_2of5.length1;


**Type:**

int

###length2

Used to set decode lengths (default - 14). 
 
 

**Example Usage:**
	
	:::java	
	int length2 = discrete_2of5.length2;


**Type:**

int

###redundancy

Sets the reader to read the bar code twice before accepting data (default - enabled). 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java	
	discrete_2of5.redundancy = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE






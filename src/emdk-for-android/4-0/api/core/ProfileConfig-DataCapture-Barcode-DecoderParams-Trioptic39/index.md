---
title: ProfileConfig.DataCapture.Barcode.DecoderParams.Trioptic39
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.0'
---


Holds Trioptic39 configuration settings. 
 
 

**Example Usage:**
	
	:::java
	
	Trioptic39 trioptic39 = profileConfig.dataCapture.barcode.decoderParams.trioptic39;
	


##Public Fields

###redundancy

Sets the reader to read the bar code twice before accepting data. (default - enabled). 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE).
 
 

**Example Usage:**
	
	:::java
	
	trioptic39.redundancy = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE













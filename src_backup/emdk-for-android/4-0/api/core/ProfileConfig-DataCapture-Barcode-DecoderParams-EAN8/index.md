---
title: ProfileConfig.DataCapture.Barcode.DecoderParams.EAN8
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.0'
---


Holds EAN8 configuration settings. 
 
 

**Example Usage:**
	
	:::java
	
	EAN8 ean8 = profileConfig.dataCapture.barcode.decoderParams.ean8;
	


##Public Fields

###convert_to_ean13

Convert EAN8 data to EAN 13. (default - disabled).
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	ean8.convert_to_ean13 = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE













---
title: ProfileConfig.DataCapture.Barcode.DecoderParams.USPlanet
type: api
---


Holds US Planet configuration settings. 
 
 

**Example Usage:**
	
	:::java
	
	USPlanet usPlanet = profileConfig.dataCapture.barcode.decoderParams.usPlanet;
	


##Public Fields

###report_check_digit

Transmit USPlanet data with or without the check digit. (default - disabled). 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE).
 
 

**Example Usage:**
	
	:::java
	
	usPlanet.report_check_digit = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE


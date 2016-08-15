---
title: ProfileConfig.DataCapture.Barcode.DecoderParams.UPCA
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


Holds UPCA configuration settings. 
 
 

**Example Usage:**
	
	:::java	
	UPCA upca = profileConfig.dataCapture.barcode.decoderParams.upca;


##Public Fields

###preamble

Preamble characters are part of the UPC symbol consisting of Country Code and System Character. 
 Select the appropriate option to match the host system. 
 Use enum [ ProfileConfig.PREAMBLE](../ProfileConfig-PREAMBLE). 
 
 

**Example Usage:**
	
	:::java	
	upca.preamble = PREAMBLE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.PREAMBLE

###report_check_digit

The check digit is the last character of the symbol used to verify the integrity of the data. 
 Enables or disables this option (default - enabled) . 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java	
	upca.report_check_digit = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE



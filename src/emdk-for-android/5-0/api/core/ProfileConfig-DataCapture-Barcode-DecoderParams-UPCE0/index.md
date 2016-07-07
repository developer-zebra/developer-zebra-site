---
title: ProfileConfig.DataCapture.Barcode.DecoderParams.UPCE0
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


Holds UPCE0 configuration settings. 
 
 

**Example Usage:**
	
	:::java	
	UPCE0 upce0 = profileConfig.dataCapture.barcode.decoderParams.upce0;


##Public Fields

###report_check_digit

The check digit is the last character of the symbol used to verify the integrity of the data. 
 Enables or disables this option (default - disabled). 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java	
	upce0.report_check_digit = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###preamble

Preamble characters are part of the UPC symbol consisting of Country Code and System Character. 
 Select the appropriate option to match the host system. 
 Use enum [ ProfileConfig.PREAMBLE](../ProfileConfig-PREAMBLE). 
 
 

**Example Usage:**
	
	:::java	
	upce0.preamble = PREAMBLE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.PREAMBLE

###convert_to_upca

Enable to convert UPCE0 (zero suppressed) decoded data to UPC-A format before transmission. 
 After conversion, the data follows UPC-A format and is af fected by UPC-A programming selections. 
 Disable to transmit UPCE0 decoded data as UPCE0 data, without conversion (default - disabled). 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java	
	upce0.convert_to_upca = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE






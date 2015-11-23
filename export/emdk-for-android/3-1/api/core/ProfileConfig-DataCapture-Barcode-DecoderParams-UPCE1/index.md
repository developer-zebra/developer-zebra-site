---
title: ProfileConfig.DataCapture.Barcode.DecoderParams.UPCE1
---

Holds UPCE1 configuration settings. 
 
 

**Example Usage:**
	
	:::java	
	UPCE1 upce1 = profileConfig.dataCapture.barcode.decoderParams.upce1;


##Public Fields

###report_check_digit

The check digit is the last character of the symbol used to verify the integrity of the data. 
 Enables or disables this option (default - disabled). 
 Use enum  ProfileConfig.ENABLED_STATE. 
 
 

**Example Usage:**
	
	:::java	
	upce1.report_check_digit = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###preamble

Preamble characters are part of the UPC symbol consisting of Country Code and System Character. 
 Select the appropriate option to match the host system. 
 Use enum  ProfileConfig.PREAMBLE. 
 
 

**Example Usage:**
	
	:::java	
	upce1.preamble = PREAMBLE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.PREAMBLE

###convert_to_upca

Enable this to convert UPCE1 decoded data to UPC-A format before transmission. 
 After conversion, the data follows UPC-A format and is af fected by UPC-A programming selections. 
 Disable this to transmit UPCE1 decoded data as UPCE1 data, without conversion (default - disabled). 
 Use enum  ProfileConfig.ENABLED_STATE. 
 
 

**Example Usage:**
	
	:::java	
	upce1.convert_to_upca = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE



---
title: ProfileConfig.DataCapture
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.1'
---


Class for dealing with data capture profile data [ ProfileConfig.DataCapture](../ProfileConfig-DataCapture)
 
 

**Example Usage:**
	
	:::java
	
	DataCapture dataCapture = profileConfig.dataCapture;
	


##Public Fields

###msr

Gets and Sets MSR configuration object.
 
 

**Example Usage:**
	
	:::java
	
	profileConfig.msr.msr_input_enabled = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.MSR

###barcode

Gets and Sets Barcode configuration object.
 
 

**Example Usage:**
	
	:::java
	
	profileConfig.dataCapture.barcode.decoders.code11 = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.Barcode

###dataDelivery

Gets and Sets DataDelivery configuration object.
 
 

**Example Usage:**
	
	:::java
	
	profileConfig.dataCapture.dataDelivery.Keystroke.ime_output_enabled = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.DataDelivery













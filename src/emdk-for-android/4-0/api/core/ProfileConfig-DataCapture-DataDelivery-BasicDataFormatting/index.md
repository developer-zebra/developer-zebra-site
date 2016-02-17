---
title: ProfileConfig.DataCapture.DataDelivery.BasicDataFormatting
type: api
---


Holds Basic Data Formatting configuration settings.
 
 

**Example Usage:**
	
	:::java	
	BasicDataFormatting basicDataFormatting = profileConfig.dataCapture.dataDelivery.intent.basicDataFormatting;


##Public Fields

###bdf_enabled

Enables or disables Basic Data Formatting (default - enabled).
 Uses the [ProfileConfig-ENABLED_STATE](../ProfileConfig-ENABLED_STATE) enum.
 
 

**Example Usage:**
	
	:::java	
	basicDataFormatting.bdf_enabled = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###bdf_prefix

Add characters to the beginning of the data when sent.
 
 

**Example Usage:**
	
	:::java	
	String prefix = basicDataFormatting.bdf_prefix;


**Type:**

java.lang.String

###bdf_suffix

Add characters to the end of the data when sent.
 
 

**Example Usage:**
	
	:::java	
	String suffix = basicDataFormatting.bdf_suffix;


**Type:**

java.lang.String

###bdf_send_data

Set to transfer the captured data to the foreground application. Disabling this option prevents the actual data from being transmitted. 
 However, the prefix and suf fix strings, if present, are still transmitted even when this option is disabled (default - enabled).
 Uses the [ProfileConfig-ENABLED_STATE](../ProfileConfig-ENABLED_STATE) enum.
 
 

**Example Usage:**
	
	:::java	
	basicDataFormatting.bdf_send_data = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###bdf_send_hex

Set to send the data in hexadecimal format(default - disabled).
 Uses the [ProfileConfig-ENABLED_STATE](../ProfileConfig-ENABLED_STATE) enum.
 
 

**Example Usage:**
	
	:::java	
	basicDataFormatting.bdf_send_hex = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###bdf_send_tab

Set to append a tab character to the end of the processed data(default - disabled).
 Uses the [ProfileConfig-ENABLED_STATE](../ProfileConfig-ENABLED_STATE) enum.
 
 

**Example Usage:**
	
	:::java	
	basicDataFormatting.bdf_send_tab = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###bdf_send_enter

Set to append an Enter character to the end of the processed data(default - disabled).
 Uses the [ProfileConfig-ENABLED_STATE](../ProfileConfig-ENABLED_STATE) enum.
 
 

**Example Usage:**
	
	:::java	
	basicDataFormatting.bdf_send_enter = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE


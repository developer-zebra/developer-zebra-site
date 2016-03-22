---
title: ProfileConfig.DataCapture.Barcode
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.1'
---


Holds Barcode configuration settings
 
 

**Example Usage:**
	
	:::java
	
	Barcode barcode = profileConfig.dataCapture.barcode;
	


##Public Fields

###scanner_input_enabled

Gets and Sets scanner enabled state  [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE).
 
 

**Example Usage:**
	
	:::java
	
	barcode.scanner_input_enabled = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###scannerSelection

Gets and Sets scanner selection [ ProfileConfig.DEVICETYPES](../ProfileConfig-DEVICETYPES).
 
 

**Example Usage:**
	
	:::java
	
	barcode.scannerSelection = DEVICETYPES.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.DEVICETYPES

###decoders

Gets and Sets Decoders configuration object [ ProfileConfig.DataCapture.Barcode.decoders](../ProfileConfig-DataCapture-Barcode#decoders).
 
 

**Example Usage:**
	
	:::java
	
	barcode.decoders.codabar = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.Barcode.Decoders

###decoderParams

Gets and Sets DecoderParams configuration object [ ProfileConfig.DataCapture.Barcode.decoderParams](../ProfileConfig-DataCapture-Barcode#decoderparams).
 
 

**Example Usage:**
	
	:::java
	
	barcode.decoderParams.upca.preamble = PREAMBLE.SYS_CHAR;
	


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.Barcode.DecoderParams

###readerParams

Gets and Sets ReaderParams configuration object [ ProfileConfig.DataCapture.Barcode.readerParams](../ProfileConfig-DataCapture-Barcode#readerparams).
 
 

**Example Usage:**
	
	:::java
	
	barcode.readerParams.illumination_mode = ILLUMINATION_MODE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.Barcode.ReaderParams

###scanParams

Gets and Sets ScanParams configuration object [ ProfileConfig.DataCapture.Barcode.scanParams](../ProfileConfig-DataCapture-Barcode#scanparams).
 
 

**Example Usage:**
	
	:::java
	
	barcode.ScanParams.decode_haptic_feedback = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.Barcode.ScanParams

###upcEanParams

Gets and Sets UpcEanParams configuration object [ ProfileConfig.DataCapture.Barcode.upcEanParams](../ProfileConfig-DataCapture-Barcode#upceanparams).
 
 

**Example Usage:**
	
	:::java
	
	barcode.upcEanParams.linear_decode = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.Barcode.UpcEanParams










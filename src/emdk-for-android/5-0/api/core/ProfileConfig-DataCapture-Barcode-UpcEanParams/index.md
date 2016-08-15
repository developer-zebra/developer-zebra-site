---
title: ProfileConfig.DataCapture.Barcode.UpcEanParams
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


Holds Upc Ean Params configuration settings.
 
 

**Example Usage:**
	
	:::java	
	UpcEanParams upcEanParams = profileConfig.dataCapture.barcode.upcEanParams;


##Public Fields

###security_level

The scanner of fers four levels of decode security for UPC/EAN bar codes. 
 Select higher security levels for lower quality bar codes. 
 There is an inverse relationship between security and decode speed, so be sure to choose only that level of security necessary for the application.
 Use enum [ ProfileConfig.SECURITY_LEVEL](../ProfileConfig-SECURITY_LEVEL). 
 
 

**Example Usage:**
	
	:::java	
	upcEanParams.security_level = SECURITY_LEVEL.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.SECURITY_LEVEL

###supplemental2

Flag to enable length 2 supplementals.
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java	
	upcEanParams.supplemental2 = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###supplemental5

Flag to enable length 5 supplementals.
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java	
	upcEanParams.supplemental5 = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###supplemental_mode

The supplemental mode.
 Use enum [ ProfileConfig.SUPPLEMENTAL_MODE](../ProfileConfig-SUPPLEMENTAL_MODE). 
 
 

**Example Usage:**
	
	:::java	
	upcEanParams.supplemental_mode = SUPPLEMENTAL_MODE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.SUPPLEMENTAL_MODE

###retry_count

Retry count for auto-discriminating for supplementals. Possible values are 2 to 20 inclusive. 
 Note that this flag is only considered if Supplemental Mode - UPC EAN is set to one of the following values: 
 Supplementals Auto, Supplementals Smart, Supplementals 378-379 , Supplementals 978-979, Supplementals 977 or Supplementals 414-419-434-439 (2 to 20, default 10).
 
 

**Example Usage:**
	
	:::java	
	int retry = upcEanParams.retry_count;


**Type:**

int

###random_weight_check_digit

Flag to enable random weight check digit verification.
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java	
	upcEanParams.random_weight_check_digit = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###linear_decode

Flag to enable linear decode. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java	
	upcEanParams.linear_decode = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###bookland

Flag to enable Bookland code decoding.
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java	
	upcEanParams.bookland = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###coupon

Enables Coupon code decoding. 
 Note that in order to successfully decode Coupon codes, all of the correct decoders must be enabled.
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java	
	upcEanParams.coupon = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###coupon_report

Used to differentiate between old coupon (UPC/EAN and Code128) and new GS1 DataBar Coupons. 
 NOTE: There is an Interim GS1 DataBar Coupon (UPC A and the GS1 DataBar), which is meant for smooth transition of adaption from old coupon format to new coupon format. 
 If an interim coupon is presented to the scanner, it will read old or new portion of it, depending on the report mode setting.

 Use enum [ ProfileConfig.COUPON_REPORT](../ProfileConfig-COUPON_REPORT). 
 
 

**Example Usage:**
	
	:::java	
	upcEanParams.coupon_report = COUPON_REPORT.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.COUPON_REPORT

###ean_zero_extend

When enabled, this parameter adds five leading zeros to decoded EAN-8 symbols to make them compatible in format to EAN-13 symbols.
 
 

**Example Usage:**
	
	:::java	
	upcEanParams.ean_zero_extend = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###bookland_format

Specifies the bookland format to use.  
 Use enum [ ProfileConfig.BOOKLAND_FORMAT](../ProfileConfig-BOOKLAND_FORMAT). 
 
 

**Example Usage:**
	
	:::java	
	upcEanParams.bookland_format = BOOKLAND_FORMAT.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.BOOKLAND_FORMAT

###databar_to_upc_ean

If this is set it converts DataBar bar codes to UPC/EAN format. 
 For this setting to work UPC/EAN symbologies must be enabled. A check in the checkbox indicates that the option is enabled.
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java	
	upcEanParams.databar_to_upc_ean = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE



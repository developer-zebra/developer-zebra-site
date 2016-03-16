---
title: ProfileConfig.DataCapture.Barcode.DecoderParams.USPostnet
layout: guide.html
product: EMDK For Android
productversion: '2.3'
---

Holds US Postnet configuration settings.

 

**Example Usage:**
	
	:::java	
	USPostnet usPostnet = profileConfig.dataCapture.barcode.decoderParams.usPostnet;


##Public Fields

###report_check_digit

Transmit USPostnet data with or without the check digit. (default - disabled).
 Use enum  ProfileConfig.ENABLED_STATE.

 

**Example Usage:**
	
	:::java	
	usPostnet.report_check_digit = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE











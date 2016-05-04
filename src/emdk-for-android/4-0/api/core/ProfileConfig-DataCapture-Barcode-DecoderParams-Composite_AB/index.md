---
title: ProfileConfig.DataCapture.Barcode.DecoderParams.Composite_AB
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.0'
---


Holds Composite AB configuration settings. 
 
 

**Example Usage:**
	
	:::java
	
	Composite_AB compositeAB = profileConfig.dataCapture.barcode.decoderParams.composite_AB;
	


##Public Fields

###ucc_link_mode

Gets and Sets UCC Link Mode using [ ProfileConfig.UCC_LINK_MODE](../ProfileConfig-UCC_LINK_MODE) enum;
 
 

**Example Usage:**
	
	:::java
	
	compositeAB.ucc_link_mode = UCC_LINK_MODE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.UCC_LINK_MODE













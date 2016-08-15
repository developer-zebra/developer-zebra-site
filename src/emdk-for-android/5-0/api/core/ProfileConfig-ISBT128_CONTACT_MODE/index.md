---
title: ProfileConfig.ISBT128_CONTACT_MODE
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


Option for concatenating pairs of ISBT128 code types.
 
 

**Example Usage:**
	
	:::java	
	ISBT128_CONTACT_MODE.DEFAULT;


**Values:**

* **DEFAULT** -Default ISBT128 concatenation configured on device

* **NEVER** -Will ignore the barcode pair and only output decode data for only one of the barcodes

* **ALWAYS** -Will not decode if both the barcodes are not present or if one of them cannot be decoded.
 There must be two ISBT codes in order to decode and perform concatenation.

* **AUTO** -Decodes and concatenates pairs of ISBT codes immediately.
 If only a single ISBT symbol is present, the device must decode the symbol the number of times set via DataWedge Configuration 4 - 1 1 
 Redundancy - Code128 before transmitting its data to confirm that there is no additional ISBT symbol.



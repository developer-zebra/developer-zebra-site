---
title: ProfileConfig.VERIFY_CHECK_DIGIT
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


Check the integrity of all Code 11 symbols to verify that the data complies with the specified check digit algorithm. 
 This selects the check digit mechanism for the decoded Code 11 bar code.
 
 

**Example Usage:**
	
	:::java	
	VERIFY_CHECK_DIGIT.DEFAULT;


**Values:**

* **DEFAULT** -Default verify check digit scheme configured on device.

* **NO** -Do not verify check digit.

* **ONE** -Bar code contains one check digit.

* **TWO** -Bar code contains two check digits.



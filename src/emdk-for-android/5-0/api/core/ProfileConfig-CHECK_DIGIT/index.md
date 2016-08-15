---
title: ProfileConfig.CHECK_DIGIT
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


The number of check digits to be verified.
 With MSI symbols, one check digit is mandatory and always verified by the reader. 
 The second check digit is optional.
 
 

**Example Usage:**
	
	:::java	
	CHECK_DIGIT.DEFAULT;


**Values:**

* **DEFAULT** -Default check digit configured on device.

* **ONE** -Verify one check digit.

* **TWO** -Verify two check digits.



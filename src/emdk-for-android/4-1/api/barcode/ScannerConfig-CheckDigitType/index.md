---
title: ScannerConfig.CheckDigitType
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.1'
---


Verify data integrity.
 
 

**Example Usage:**
	
	:::java
	
	CheckDigitType.NO;
	


**Values:**

* **NO** -A check digit is not used.

* **USS** -Select to check the integrity of all Interleaved 2 of 5 symbols to
 verify the data complies with either the Uniform Symbology
 Specification (USS) check digit algorithm.

* **OPCC** -Select to check the integrity of all Interleaved 2 of 5 symbols to
 verify the data complies with either the Optical Product Code Council
 (OPCC) check digit algorithm.










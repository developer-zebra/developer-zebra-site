---
title: ScannerConfig.CheckDigitScheme
layout: guide.html
product: EMDK For Android
productversion: '2.3'
---

Two algorithms are possible for the verification of the second MSI check
 digit. Select the algorithm used to encode the check digit.

 

**Example Usage:**
	
	:::java	
	CheckDigitScheme.MOD_11_10;


**Values:**

* **MOD_11_10** -First check digit is MOD 11 and second check digit is MOD 10.

* **MOD_10_10** -Both check digits are MOD 10.











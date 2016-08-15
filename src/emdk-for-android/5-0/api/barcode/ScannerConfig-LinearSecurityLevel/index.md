---
title: ScannerConfig.LinearSecurityLevel
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


Sets the number of times a bar code is read to confirm an accurate
 decode.
 
 

**Example Usage:**
	
	:::java	
	LinearSecurityLevel.SHORT_OR_CODABAR;


**Values:**

* **SHORT_OR_CODABAR** -Two times read redundancy if short bar code or Codabar.

* **ALL_TWICE** -Two times read redundancy for all bar codes (default).

* **LONG_AND_SHORT** -Two times read redundancy for long bar codes, three times for short
 bar codes.

* **ALL_THRICE** -Three times read redundancy for all bar codes.



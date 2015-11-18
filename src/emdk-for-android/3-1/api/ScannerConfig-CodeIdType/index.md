---
title: ##ScannerConfig.CodeIdType
---

A Code ID character identifies the code type of a scanned bar code. This
 is useful when the reader is decoding more than one code type. Select a
 code ID character to insert between the prefix and the decoded symbol.

 

**Example Usage:**
	
	:::java	
	CodeIdType.NONE;


**Values:**

* **NONE** -No prefix.

* **AIM** -A standards based three character prefix.

* **SYMBOL** -A Symbol defined single character prefix.



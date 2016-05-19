---
title: ScannerConfig.PickList
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.0'
---


Allows the imager to decode only the bar code that is directly under the
 cross-hair/reticle (+) part of the pattern. This feature is useful in
 applications where multiple bar codes may appear in the field of view
 during a decode session and only one of them is tar geted for decode.
 
 

**Example Usage:**
	
	:::java
	
	PickList.DISABLED;
	


**Values:**

* **DISABLED** -Disables Picklist mode. Any bar code within the field of view can be
 decoded.

* **ENABLED** -Enables the Picklist mode so that only the bar code that is directly
 under the cross-hair (reticle) is decoded. This is useful when used
 in conjunction with the static and dynamic reticle viewfinder modes.
 (Scan Module Only)













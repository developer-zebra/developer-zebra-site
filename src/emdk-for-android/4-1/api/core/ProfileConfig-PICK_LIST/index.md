---
title: ProfileConfig.PICK_LIST
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.2'
---


Allows the imager to decode only the bar code that is directly under the cross-hair/reticle (+) part of the pattern. 
 This feature is useful in applications where multiple bar codes may appear in the field of view during a decode session and only one of them is tar geted for decode.



**Example Usage:**
	
	:::java	
	PICK_LIST.DEFAULT;


**Values:**

* **DEFAULT** -Default pick list configured on device

* **DISABLED** -Disables Picklist mode. 
 Any bar code within the field of view can be decoded.

* **ENABLED** -Enables the Picklist mode so that only the bar code that is directly under the cross-hair (reticle) is decoded. 
 This is useful when used in conjunction with the static and dynamic reticle viewfinder modes. (Scan Module Only)

* **CENTERED** -Enables the Picklist mode so that only the bar code in the center of the image is decoded.
 This is most useful when used in conjunction with the static and dynamic reticle viewfinder modes.
 Note: This mode is only valid for decoder modules that supports a viewfinder.
 If one tries to set this for a unsupported decoder then the device would issue an error. (Camera scanner only)


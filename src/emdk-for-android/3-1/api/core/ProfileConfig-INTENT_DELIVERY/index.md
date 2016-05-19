---
title: ProfileConfig.INTENT_DELIVERY
layout: guide.html
product: EMDK For Android
productversion: '2.3'
---

Allows configuration of the Intent Output Plug-in for the profile.
 The Intent Output Plug-in allows the captured data to be sent to an application in the form of an implicit Intent.

 

**Example Usage:**
	
	:::java	
	INTENT_DELIVERY.SEND_VIA_STARTACTIVITY;


**Values:**

* **DEFAULT** -Default intent delivery type configured on the device

* **SEND_VIA_STARTACTIVITY** -Send output via StartActivity.

* **SEND_VIA_STARTSERVICE** -Send output via startService.

* **BROADCAST_INTENT** -Send output via Broadcast intent.














---
title: ProfileConfig.PREAMBLE
type: api
---


Controls the preamble applied to the bar code
 Preamble characters are part of the UPC symbol consisting of Country Code and System Character.
 Select the appropriate option to match the host system.
 
 

**Example Usage:**
	
	:::java	
	PREAMBLE.DEFAULT;


**Values:**

* **DEFAULT** -Default preamble configured on device

* **NONE** -No preamble

* **SYS_CHAR** -System character preamble

* **COUNTRY_AND_SYS_CHAR** -Both country and system code preamble


---
title: ScannerConfig.DecoderParams.CodaBar
type: api
---


The CodaBar class provides access to parameters that are available
 for the CodaBar decoder.

##Public Fields

###length1

Use to set decode lengths. The supported range is 0 to 55.
 
 

**Example Usage:**
	
	:::java
	
	codabar.length1 = 6;
	


**Type:**

int

###length2

Use to set decode lengths. The supported range is 0 to 55.
 
 

**Example Usage:**
	
	:::java
	
	codabar.length2 = 55;
	


**Type:**

int

###redundancy

Sets the reader to read the bar code twice before accepting data.
 
 

**Example Usage:**
	
	:::java
	
	codabar.redundancy = true;
	


**Type:**

boolean

###clsiEditing

Enable this parameter to strip the start and stop characters and
 insert a space after the first, fifth, and tenth characters of a
 14-character Codabar symbol. Enable this feature if the host
 system requires this data format.
 
 

**Example Usage:**
	
	:::java
	
	codabar.clsi_editing = true;
	


**Type:**

boolean

###notisEditing

Enable this parameter to strip the start and stop characters from
 a decoded Codabar symbol. Enable this feature if the host system
 requires this data format.
 
 

**Example Usage:**
	
	:::java
	
	codabar.notis_editing = true;
	


**Type:**

boolean


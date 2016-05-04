---
title: VersionManager
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.1'
---


Version information can be captured from this class.
 
 

**Example Usage:**
	
	:::java
	
	versionManager = (VersionManager) EMDKManager.getInstance(EMDKManager.FEATURE_TYPE.VERSION);
	


##Public Methods

### getVersion

**public String getVersion(VersionManager.VERSION_TYPE versionKey)**

Gets the version of the specified [ VersionManager.VERSION_TYPE](../VersionManager-VERSION_TYPE)
 
  

**Example Usage:**
	
	:::java
	
	versionManager.getVersion(VERSION_TYPE.EMDK)
	


**Parameters:**

`versionKey` - [ VersionManager.VERSION_TYPE](../VersionManager-VERSION_TYPE)

**Returns:**

java.lang.String - Version number













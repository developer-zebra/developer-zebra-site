---
title: VersionManager
---

Version information can be captured from this class.
 
 

**Example Usage:**
	
	:::java	
	versionManager = (VersionManager) EMDKManager.getInstance(EMDKManager.FEATURE_TYPE.VERSION);


##Public Methods

### getVersion

**public String getVersion(VersionManager.VERSION_TYPE versionKey)**

Gets the version of the specified  VersionManager.VERSION_TYPE
 
  

**Example Usage:**
	
	:::java	
	versionManager.getVersion(VERSION_TYPE.EMDK)


**Parameters:**

versionKey -  VersionManager.VERSION_TYPE

**Returns:**

java.lang.String

##Public Enums

###VersionManager.VERSION_TYPE

All the version keys for  VersionManager#getVersion(VERSION_TYPE) are enumerated here.
 
 

**Example Usage:**
	
	:::java	
	VERSION_TYPE.EMDK


**Values:**

* **EMDK** -EMDK version

* **MX** -MX framework version

* **BARCODE** -Barcode Scanner Framework version.



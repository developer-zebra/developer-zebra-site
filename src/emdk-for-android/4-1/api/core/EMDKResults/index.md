---
title: EMDKResults
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.1'
---


Class for holding result data.<br><br>
 
 

**Example Usage:**
	
	:::java
	
	ProfileConfig profileConfigObj = new ProfileConfig();
	ProfileManager profileManager = (ProfileManager) EMDKManager.getInstance(getApplicationContext(), EMDKManager.FEATURE_TYPE.PROFILE
	EMDKResults results = profileManager.processProfile("Profile Name", ProfileManager.PROFILE_FLAG.GET, profileConfigObj);
	


##Public Methods

### getExtendedStatusMessage

**public String getExtendedStatusMessage()**

Return the extended status information string.
 If there is not any extended information this returns empty string "".

**Returns:**

java.lang.String - Extended status information String.

### getTotalFeaturesCount

**public int getTotalFeaturesCount()**

Return the total number of features in the profile.
 Currently these values will be available when the process profile is called to check profile compatibility.
 This will return -1 if the value is not used/set.

**Returns:**

int

### getSuccessFeaturesCount

**public int getSuccessFeaturesCount()**

Return the total number of features in profile request is success.
 Currently these values will be available when the process profile is called to check profile compatibility.
 This will return -1 if the value is not used/set.

**Returns:**

int

### getStatusDocument

**public Document getStatusDocument()**

Gets status results from process profile as xml document.
 
 

**Example Usage:**
	
	:::java
	
	Document document = results.getStatusDocument();
	


**Returns:**

org.w3c.dom.Document - XML document.

### getStatusString

**public String getStatusString()**

Gets status results from process profile as xml string. 
 
 

**Example Usage:**
	
	:::java
	
	String xml = results.getStatusString();
	


**Returns:**

java.lang.String - XML text.

##Public Fields

###extendedStatusCode

Gets status code result from process profile as enum value of type [ EMDKResults.EXTENDED_STATUS_CODE](../EMDKResults-EXTENDED_STATUS_CODE).
 
 

**Example Usage:**
	
	:::java
	
	STATUS_CODE statusCode = results.extendedErrorInfo.statusCodeEx;
	


**Type:**

com.symbol.emdk.EMDKResults.EXTENDED_STATUS_CODE

###statusCode

Gets status code result from process profile as enum value of type [ EMDKResults.STATUS_CODE](../EMDKResults-STATUS_CODE).
 
 

**Example Usage:**
	
	:::java
	
	STATUS_CODE statusCode = results.statusCode;
	


**Type:**

com.symbol.emdk.EMDKResults.STATUS_CODE













---
title: EMDKResults
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

java.lang.String

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

Gets status code result from process profile as enum value of type  EMDKResults.EXTENDED_STATUS_CODE.
 
 

**Example Usage:**
	
	:::java	
	STATUS_CODE statusCode = results.extendedErrorInfo.statusCodeEx;


**Type:**

com.symbol.emdk.EMDKResults.EXTENDED_STATUS_CODE

###statusCode

Gets status code result from process profile as enum value of type  EMDKResults.STATUS_CODE.
 
 

**Example Usage:**
	
	:::java	
	STATUS_CODE statusCode = results.statusCode;


**Type:**

com.symbol.emdk.EMDKResults.STATUS_CODE

##Public Enums

###EMDKResults.EXTENDED_STATUS_CODE

Defines all the extended status codes the library returns. 
 
 

**Example Usage:**
	
	:::java	
	results.extendedStatusInfo.extendedStatusCode;


**Values:**

* **NONE** -There is no extended status code.

* **PROFILE_NOT_FOUND_IN_CONFIG** -Profile name not found in current EMDKConfig.xml.

* **FEATURE_TYPE_NOT_FOUND_IN_CONFIG** -Feature type not found in the profile in current EMDKConfig.xml.

* **FEATURE_NAME_NOT_FOUND_IN_CONFIG** -Feature name not found for the feature in current EMDKConfig.xml.

* **FEATURE_NAME_NOT_FOUND_IN_EXTRADATA** -The feature name not found in extraData.

* **FEATURE_TYPE_NOT_FOUND_IN_EXTRADATA** -The feature type not found in extraData.

* **PROFILE_NOT_FOUND_IN_EXTRADATA** -The profile not found in extraData..

* **FEATURE_NOT_UNIQUE_IN_CONFIG** -Feature and feature name combination is not unique in current EMDKConfig.xml.
 In order to perform merge operation the feature and feature name combination required
 to be unique.

* **FEATURE_NOT_UNIQUE_IN_EXTRADATA** -The Feature and Feature name combination is not unique in provided 
extraData.

* **DEPENDACY_COMPONENT_FAILURE** -Failed to access dependency component.

* **GENERAL_EXCEPTION_OCCURED** -Exception occurred while performing requested operation.

* **NAMEVALUE_MISSMATCH_IN_CONFIG** -One or more names of parameters not found in current EMDKConfig.xml. This is due to the given name value pairs need to be equivalent to specified profile. So the operation cancelled.

* **NAMEVALUE_MISMATCH_IN_EXTRADATA** -One or more names of parameters not found in extraData. This is due to the given name value pairs need to be equivalent to specified feature name.

* **INVALID_PROFILE_CONFIGURATION** -The current EMDKConfig.xml is invalid.

* **PROFILE_NAME_FORMAT_ERROR** -The give profileName format is invalid. The profile name criteria required 
to be in profileName/feature type/feature Name format. This error occurred if
profileName is not in that format.

* **ACTIVITY_SELECTION_MERGING_NOT_SUPPORTED** -The ActivitySelection merging is not supported.

* **INVALID_VALUE** -The parameters given are invalid.

* **APP_NOT_ALLOWED_TO_SUBMIT_XML** -Permission error. Application is not allowed to submit xml.

###EMDKResults.STATUS_CODE

Defines all the status codes the library returns. 
 
 

**Example Usage:**
	
	:::java	
	results.statusCode.SUCCESS;


**Values:**

* **SUCCESS** -Process profile was a success.

* **FAILURE** -Process profile was a failure.

* **UNKNOWN** -Process profile had mixed results.

* **NULL_POINTER** -Process profile was a had a null value.

* **EMPTY_PROFILENAME** -Profile name passed Process profile was empty.

* **EMDK_NOT_OPENED** -EMDK is not opened

* **CHECK_XML** -This is returned when multiple features are present in the profile. In such a case the only way to
 verify if the API call was successful is to analyze the XML.

* **PREVIOUS_REQUEST_IN_PROGRESS** -The previous request is in progress, wait for it to complete before next request.

* **PROCESSING** -The processing of profile started, the result will be returned through the data listener callback registered.

* **NO_DATA_LISTENER** -The asynchronous method (Ex: processProfileAsync) is issued without adding the data listener.

* **FEATURE_NOT_READY_TO_USE** -The requested feature is not ready to use. Try later.

* **FEATURE_NOT_SUPPORTED** -The requested feature is not supported on this device.



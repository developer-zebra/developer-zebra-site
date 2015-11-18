---
title: EMDKResults
---
Class for holding EMDK result data.

**Example Usage:**

	:::java
	@Override
	public void onOpened(EMDKManager emdkmanager)
	{
	ProfileConfig profileConfigObj = new ProfileConfig();
	ProfileManager profileManager = (ProfileManager)emdkmanager.getInstance(FEATURE_TYPE.PROFILE);
	EMDKResults results = profileManager.processProfile("Profile Name", ProfileManager.PROFILE_FLAG.GET, profileConfigObj);
	}


**Version:**

1.0

##Public Methods
###getExtendedStatusMessage()
Return the extended status information string. If there is not any extended information this returns empty string "".

**Returns:**

String - Extended status information String.


###getTotalFeaturesCount()
Return the total number of features in the profile. Currently these values will be available when the process profile is called to check profile compatibility. This will return -1 if the value is not used/set.

**Returns:**

int - Returns the total number of features in the profile.


###getSuccessFeaturesCount()
Return the total number of features in profile request is success. Currently these values will be available when the process profile is called to check profile compatibility. This will return -1 if the value is not used/set.

**Returns:**

int - Returns the total number of features in profile request is success.

###getStatusDocument()
Gets status results from process profile as xml document.

**Example Usage:**

	:::java
	Document document = results.getStatusDocument();


**Returns:**

org.w3c.dom.Document - XML document.

###getStatusString()
Gets status results from process profile as xml string.

**Example Usage:**

	:::java
	String xml = results.getStatusString();


**Returns:**

java.lang.String - XML text.

##Public Fields
###statusCode
Gets status code result from process profile as enum value of type [EMDKResults.STATUS_CODE](EMDKResults.STATUS_CODE)	.

**Example Usage:**

	:::java
	STATUS_CODE statusCode = results.statusCode;


**Type:**

com.symbol.emdk.[EMDKResults.STATUS_CODE](EMDKResults#EMDKResults.STATUS_CODE)


###extendedStatusCode
Gets status code result from process profile as enum value of type [EMDKResults.EXTENDED_STATUS_CODE](EMDKResults#EMDKResults.EXTENDED_STATUS_CODE).

**Example Usage:**

	:::java
	STATUS_CODE statusCode = results.extendedErrorInfo.statusCodeEx;


**Type:**

com.symbol.emdk.[EMDKResults.EXTENDED_STATUS_CODE](EMDKResults#EMDKResults.EXTENDED_STATUS_CODE)

##Public Enums
###EMDKResults.STATUS_CODE
Defines all the status codes the library returns.

**Example Usage:**

	:::java
	results.statusCode.SUCCESS;


**Values:**

* **SUCCESS** - Process profile was a success.

* **FAILURE** - Process profile was a failure.

* **UNKNOWN** - Process profile had mixed results.

* **NULL_POINTER** - Process profile had a null value.

* **EMPTY_PROFILENAME** - Profile name passed Process profile was empty.

* **EMDK_NOT_OPENED** - EMDK is not opened

* **CHECK_XML** - This is returned when multiple features are present in the profile. In such a case the only way to verify if the API call was successful is to analyze the XML.

* **PREVIOUS_REQUEST_IN_PROGRESS** - The previous request is in progress, wait for it to complete before next request.

* **PROCESSING** - The processing of profile started, the result will be returned through the data listener callback registered.

* **NO_DATA_LISTENER** - The asynchronous method (Ex: processProfileAsync) is issued without adding the data listener.


###EMDKResults.EXTENDED_STATUS_CODE
Defines all the extended status codes the library returns.

**Example Usage:**

	:::java
	results.extendedStatusInfo.extendedStatusCode;

**Values:**

* **NONE** - There is no extended status code.

* **PROFILE_NOT_FOUND_IN_CONFIG** - Profile name not found in current EMDKConfig.xml
	* Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String) when changing profile using Name Value pair, Document or ProfileConfig or when switching or activating profile

* **FEATURE_TYPE_NOT_FOUND_IN_CONFIG** -Feature type not found in the profile in current EMDKConfig.xml.

* **FEATURE_NAME_NOT_FOUND_IN_CONFIG** - Feature name not found for the feature in current EMDKConfig.xml.

* **FEATURE_NAME_NOT_FOUND_EXTRADATA** - The feature name not found in extraData.
	* Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String) when specifying feature name (emdk_name) in the criteria.

* **FEATURE_TYPE_NOT_FOUND_IN_EXTRADATA** - The feature type not found in extraData.
	* Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String)

* **PROFILE_NOT_FOUND_IN_EXTRADATA** - The profile not found in extraData.
	* Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String) when merging profiles.

* **FEATURE_NOT_UNIQUE_IN_CONFIG** - The Feature and feature name combination is not unique in current EMDKConfig.xml. In order to perform merge operation the feature and feature name combination are required to be unique.
	* Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String) when feature merging.

* **FEATURE_NOT_UNIQUE_IN_EXTRADATA** - The Feature and feature name combination is not unique in provided extraData.
	* Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String) when feature merging

* **DEPENDACY_COMPONENT_FALIURE** - Failed to access dependency component.
	* Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String) when it failed to connect to MX service.

* **GENERAL_EXCEPTION_OCCURED** - Exception occurred while performing requested operation.

* **NAMEVALUE_MISSMATCH_IN_CONFIG** - One or more names of parameters not found in current EMDKConfig.xml. This is due to the given name value pairs need to be equivalent to specified profile. So the operation is canceled.
	* Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String) when using name-value pair functionality

* **NAMEVALUE_MISMATCH_IN_EXTRADATA** - One or more names of parameters not found in extraData. This is due to the given name value pairs need to be equivalent to specified feature name.

* **INVALID_PROFILE_CONFIGURATION** -The current EMDKConfig.xml is invalid.
	* Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String)

* **PROFILE_NAME_ERROR** - The give profileName format is invalid. The profile name criteria is required to be in profileName/feature type/feature Name format. This error occurred if it is not in that format.
	* Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String)

* **ACTIVITY_SELECTION_MERGING_NOT_SUPPORTED** - The ActivitySelection merging is not supported.

* **INVALID_VALUE** - The parameters given are invalid.  
	* Returned in:
		* com.symbol.emdk.ProfileManager.processProfile(String, PROFILE_FLAG, Document)
		* com.symbol.emdk.ProfileManager.processProfile(String, PROFILE_FLAG, String[])
		* com.symbol.emdk.ProfileManager.processProfile(String, PROFILE_FLAG, ProfileConfig)
		* com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String)

* **APP_NOT_ALLOWED_TO_SUBMIT_XML** - Permission error. Application is not allowed to submit xml.


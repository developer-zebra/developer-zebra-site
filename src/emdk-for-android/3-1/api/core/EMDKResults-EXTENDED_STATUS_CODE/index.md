---
title: EMDKResults.EXTENDED_STATUS_CODE
---

Defines all the extended status codes the library returns.

 

**Example Usage:**
	
	:::java	
	results.extendedStatusInfo.extendedStatusCode;


**Values:**

* **NONE** -There is no extended status code

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



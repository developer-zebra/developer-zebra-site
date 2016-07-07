---
title: EMDKResults.EXTENDED_STATUS_CODE
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


Defines all the extended status codes the library returns. 
 
 

**Example Usage:**
	
	:::java	
	results.extendedStatusInfo.extendedStatusCode;


**Values:**

* **NONE** -There is no extended status code.

* **PROFILE_NOT_FOUND_IN_CONFIG** -Profile name not found in current EMDKConfig.xml.
 <ul>
 <li>Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String) when changing profile using Name Value pair, Document or ProfileConfig or when switching or activating profile</li>
 </ul>
 </br>

* **FEATURE_TYPE_NOT_FOUND_IN_CONFIG** -Feature type not found in the profile in current EMDKConfig.xml.

* **FEATURE_NAME_NOT_FOUND_IN_CONFIG** -Feature name not found for the feature in current EMDKConfig.xml.

* **FEATURE_NAME_NOT_FOUND_IN_EXTRADATA** -The feature name not found in extraData.
 <ul>
 <li>Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String) when specifying feature name (emdk_name) in the criteria.</li>
 </ul>
 </br>

* **FEATURE_TYPE_NOT_FOUND_IN_EXTRADATA** -The feature type not found in extraData.
 <ul>
 <li>Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String)</li>
 </ul>
 </br>

* **PROFILE_NOT_FOUND_IN_EXTRADATA** -The profile not found in extraData.. 
 <ul>
 <li>Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String) when merging profiles.</li>
 </ul>
 </br>

* **FEATURE_NOT_UNIQUE_IN_CONFIG** -Feature and feature name combination is not unique in current EMDKConfig.xml.
 In order to perform merge operation the feature and feature name combination required
 to be unique. 
 <ul>
 <li>Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String) when feature merging.</li>
 </ul>
 </br>

* **FEATURE_NOT_UNIQUE_IN_EXTRADATA** -The Feature and Feature name combination is not unique in provided 
extraData. 
 <ul>
 <li>Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String) when feature merging</li>
 </ul>
 </br>

* **DEPENDACY_COMPONENT_FAILURE** -Failed to access dependency component. 
 <ul>
 <li>Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String) when it failed to connect to MX service.</li>
 </ul>
 </br>

* **GENERAL_EXCEPTION_OCCURED** -Exception occurred while performing requested operation.

* **NAMEVALUE_MISSMATCH_IN_CONFIG** -One or more names of parameters not found in current EMDKConfig.xml. This is due to the given name value pairs need to be equivalent to specified profile. So the operation cancelled.
 <ul>
 <li>Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String) when using name-value pair functionality</li>
 </ul>
 </br>

* **NAMEVALUE_MISMATCH_IN_EXTRADATA** -One or more names of parameters not found in extraData. This is due to the given name value pairs need to be equivalent to specified feature name.

* **INVALID_PROFILE_CONFIGURATION** -The current EMDKConfig.xml is invalid.
 <ul>
 <li>Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String)</li>
 </ul>
 </br>

* **PROFILE_NAME_FORMAT_ERROR** -The give profileName format is invalid. The profile name criteria required 
to be in profileName/feature type/feature Name format. This error occurred if
profileName is not in that format.
 <ul>
 <li>Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String)</li>
 </ul>
 </br>

* **ACTIVITY_SELECTION_MERGING_NOT_SUPPORTED** -The ActivitySelection merging is not supported.

* **INVALID_VALUE** -The parameters given are invalid. 
</br> <b>Returned in:</b></br>
 <ul>
 <li>com.symbol.emdk.ProfileManager.processProfile(String, PROFILE_FLAG, Document)</li>
 <li>com.symbol.emdk.ProfileManager.processProfile(String, PROFILE_FLAG, String[])</li>
 <li>com.symbol.emdk.ProfileManager.processProfile(String, PROFILE_FLAG, ProfileConfig)</li>
 <li>com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String)</li>
 </ul>
 </br>

* **APP_NOT_ALLOWED_TO_SUBMIT_XML** -Permission error. Application is not allowed to submit xml.






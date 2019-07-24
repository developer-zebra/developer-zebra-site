---
title: EMDKResults.EXTENDED_STATUS_CODE
layout: guide.html
product: EMDK For Xamarin 
productversion: '4.0' 
---
Defines all the extended status codes the library returns.

**Type** - Java.Lang.Enum

##Methods
###ValueOf

**public static Symbol.XamarinEMDK.EMDKResults.EXTENDED_STATUS_CODE ValueOf (string this_);**


        

**Parameters:**

System.String **p0** 

**Returns** - Symbol.XamarinEMDK.EMDKResults+EXTENDED_STATUS_CODE

###Values

**public static Symbol.XamarinEMDK.EMDKResults.EXTENDED_STATUS_CODE[] Values ();**


        

**Parameters:**

**Returns** - Symbol.XamarinEMDK.EMDKResults+EXTENDED_STATUS_CODE[]

##Properties

###ActivitySelectionMergingNotSupported
The ActivitySelection merging is not supported.

**Type** - Symbol.XamarinEMDK.EMDKResults+EXTENDED_STATUS_CODE
###AppNotAllowedToSubmitXml
Permission error. Application is not allowed to submit xml.

**Type** - Symbol.XamarinEMDK.EMDKResults+EXTENDED_STATUS_CODE
###DependencyComponentFailure
Failed to access dependency component.

**Type** - Symbol.XamarinEMDK.EMDKResults+EXTENDED_STATUS_CODE
###FeatureNameNotFoundInConfig
Feature name not found for the feature in current EMDKConfig.xml.

**Type** - Symbol.XamarinEMDK.EMDKResults+EXTENDED_STATUS_CODE
###FeatureNameNotFoundInExtradata
The feature name not found in extraData. Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String) when specifying feature name (emdk_name) in the criteria.

**Type** - Symbol.XamarinEMDK.EMDKResults+EXTENDED_STATUS_CODE
###FeatureNotUniqueInConfig
The Feature and feature name combination is not unique in current EMDKConfig.xml. In order to perform merge operation the feature and feature name combination are required to be unique. Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String) when feature merging.

**Type** - Symbol.XamarinEMDK.EMDKResults+EXTENDED_STATUS_CODE
###FeatureNotUniqueInExtradata
The Feature and feature name combination is not unique in provided extraData. Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String) when feature merging
      

**Type** - Symbol.XamarinEMDK.EMDKResults+EXTENDED_STATUS_CODE
###FeatureTypeNotFoundInConfig
Feature type not found in the profile in current EMDKConfig.xml.

**Type** - Symbol.XamarinEMDK.EMDKResults+EXTENDED_STATUS_CODE
###FeatureTypeNotFoundInExtradata
The feature type not found in extraData. Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String)

**Type** - Symbol.XamarinEMDK.EMDKResults+EXTENDED_STATUS_CODE
###GeneralExceptionOccured
Exception occurred while performing requested operation.

**Type** - Symbol.XamarinEMDK.EMDKResults+EXTENDED_STATUS_CODE
###InvalidProfileConfiguration
The current EMDKConfig.xml is invalid. Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String)

**Type** - Symbol.XamarinEMDK.EMDKResults+EXTENDED_STATUS_CODE
###InvalidValue
The parameters given are invalid. Returned in:
com.symbol.emdk.ProfileManager.processProfile(String, PROFILE_FLAG, Document), 
com.symbol.emdk.ProfileManager.processProfile(String, PROFILE_FLAG, String[]), 
com.symbol.emdk.ProfileManager.processProfile(String, PROFILE_FLAG, ProfileConfig), 
com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String)

**Type** - Symbol.XamarinEMDK.EMDKResults+EXTENDED_STATUS_CODE
###NamevalueMismatchInConfig
One or more names of parameters not found in current EMDKConfig.xml. This is due to the given name value pairs need to be equivalent to specified profile. So the operation is canceled. Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String) when using name-value pair functionality

**Type** - Symbol.XamarinEMDK.EMDKResults+EXTENDED_STATUS_CODE
###NamevalueMismatchInExtradata
One or more names of parameters not found in extraData. This is due to the given name value pairs need to be equivalent to specified feature name.

**Type** - Symbol.XamarinEMDK.EMDKResults+EXTENDED_STATUS_CODE
###None
There is no extended status code.

**Type** - Symbol.XamarinEMDK.EMDKResults+EXTENDED_STATUS_CODE
###ProfileNameFormatError
The give profileName format is invalid. The profile name criteria is required to be in profileName/feature type/feature Name format. This error occurred if it is not in that format.

**Type** - Symbol.XamarinEMDK.EMDKResults+EXTENDED_STATUS_CODE
###ProfileNotFoundInConfig
Profile name not found in current EMDKConfig.xml. Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String) when changing profile using Name Value pair, Document or ProfileConfig or when switching or activating profile

**Type** - Symbol.XamarinEMDK.EMDKResults+EXTENDED_STATUS_CODE
###ProfileNotFoundInExtradata
The profile not found in extraData. Returned in: com.symbol.emdk.emdkservice.ProfileService.setProfile(String, String) when merging profiles.

**Type** - Symbol.XamarinEMDK.EMDKResults+EXTENDED_STATUS_CODE

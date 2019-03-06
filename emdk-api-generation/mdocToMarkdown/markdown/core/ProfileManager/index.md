---
title: ProfileManager
layout: guide.html
product: EMDK For Xamarin 
productversion: '4.0' 
---
This class handles all the profile related functions.

**Type** - Symbol.XamarinEMDK.EMDKBase

##Methods
###CreateNameValuePair

**public static string CreateNameValuePair (string p0, string p1, string p2);**

This function creates a name value pair string according to the Name-Value pair request. The return string is compatible with com.symbol.emdk.ProfileManager. processProfile(String profileName, PROFILE_FLAG profileFlag, String[] extraData) function’s extraData array element. If this function failed it throws InvalidParameterException exception.

**Parameters:**

System.String **p0**  - emdk name String

System.String **p1**  - Parameter name String

System.String **p2**  - Parameter value String

**Returns** - System.String

###ProcessProfile

**public virtual Symbol.XamarinEMDK.EMDKResults ProcessProfile (string p0, Symbol.XamarinEMDK.ProfileManager.PROFILE_FLAG p1, Org.W3c.Dom.IDocument p2);**

Processes the given profile based on the data provided and the flag and return status of the action.

**Parameters:**

System.String **p0**  - Name of the profile. ex: 'Profile1'. You can also specify just part of the profile when a fully qualified name of the following format is given: [profileName][featureType][name in profile parameter] to just edit part of the profile. For example, if my profile is called 'Profile1' and the name in profile parameter is 'myName'. Passing 'profileName' as 'Profile1/ActivitySelection/myName' will just process this part of the profile. Valid [featureType]: ActivitySelection, Barcode, MSR, Intent, Keystroke, IP.

Symbol.XamarinEMDK.ProfileManager.PROFILE_FLAG **p1**  - ProfileManager.PROFILE_FLAG If the profileFlag is set to SET, and if the given profile is not available in the EMDKConfig.xml, it will look for valid profile in extraData argument and if present, the profile will be added to the internal XML volatile repository and also applied to the device. If the profile is present in the EMDKConfig.xml, it will be applied to the device. If profileFlag is set to GET and if the profile is present in the internal repository, it will be returned in extraData.

Org.W3c.Dom.IDocument **p2**  - This can be used to provide data for processing action.

**Returns** - Symbol.XamarinEMDK.EMDKResults

###ProcessProfile

**public virtual Symbol.XamarinEMDK.EMDKResults ProcessProfile (string p0, Symbol.XamarinEMDK.ProfileManager.PROFILE_FLAG p1, string[] p2);**

Processes the given profile based on the data provided and the flag and return status of the action.

**Parameters:**

System.String **p0**  - Name of the profile. ex: 'Profile1' You can also specify just part of the profile when a fully qualified name of the following format is given: [profileName][featureType][name in profile parameter] to just edit part of the profile. For example, if my profile is called ‘EmdkSampleProfile-1’ and the name I gave to the Clock feature is 'clock1'. Passing 'profileName' as ' EmdkSampleProfile-1/Clock/clock1’ will just process this part of the profile. Valid [featureType]: ActivitySelection, Barcode, MSR, Intent, Keystroke, IP, Clock, PowerMgr, PersistMgr, CertMgr, AppMgr, AccessMgr, Wi-Fi, GprsMgr

Symbol.XamarinEMDK.ProfileManager.PROFILE_FLAG **p1**  - ProfileManager.PROFILE_FLAG If the profileFlag is set to SET, and if the given profile is not available in the EMDKConfig.xml, it will look for valid profile in extraData argument and if present, the profile will be added to the internal XML volatile repository and also applied to the device. If the profile is present in the EMDKConfig.xml, it will be applied to the device. If profileFlag is set to GET and if the profile is present in the internal repository, it will be returned in extraData.

System.String[] **p2**  - This can be used to provide data for processing action.

**Returns** - Symbol.XamarinEMDK.EMDKResults

###ProcessProfileAsync

**public virtual Symbol.XamarinEMDK.EMDKResults ProcessProfileAsync (string p0, Symbol.XamarinEMDK.ProfileManager.PROFILE_FLAG p1, Org.W3c.Dom.IDocument p2);**

Processes the given profile based on the data provided and the flag and return status of the request. This is an asynchronous method and result will be returned through the registered callback.

**Parameters:**

System.String **p0**  - Name of the profile.

Symbol.XamarinEMDK.ProfileManager.PROFILE_FLAG **p1**  - ProfileManager.PROFILE_FLAG - If the profileFlag is set to SET, and if the given profile is not available in the EMDKConfig.xml, it will look for valid profile in extraData argument and if present, the profile will be added to the internal XML volatile repository and also applied to the device. If the profile is present in the EMDKConfig.xml, it will be applied to the device. The result will be returned to the application via data listener callback. If profileFlag is set to GET and if the profile is present in the internal repository, it will be returned via data listener callback.

Org.W3c.Dom.IDocument **p2**  - This can be used to provide data for processing action.

**Returns** - Symbol.XamarinEMDK.EMDKResults

###ProcessProfileAsync

**public virtual Symbol.XamarinEMDK.EMDKResults ProcessProfileAsync (string p0, Symbol.XamarinEMDK.ProfileManager.PROFILE_FLAG p1, string[] p2);**

Processes the given profile based on the data provided and the flag and return status of the request. This is an asynchronous method and result will be returned through the registered callback.

**Parameters:**

System.String **p0**  - Name of the profile.

Symbol.XamarinEMDK.ProfileManager.PROFILE_FLAG **p1**  - ProfileManager.PROFILE_FLAG - If the profileFlag is set to SET, and if the given profile is not available in the EMDKConfig.xml, it will look for valid profile in extraData argument and if present, the profile will be added to the internal XML volatile repository and also applied to the device. If the profile is present in the EMDKConfig.xml, it will be applied to the device. If profileFlag is set to GET and if the profile is present in the internal repository, it will be returned data listener callback.

System.String[] **p2**  - This can be used to provide data for processing action.

**Returns** - Symbol.XamarinEMDK.EMDKResults

##Properties

###IsPreviousRequestPending
This method tells whether the previous process profile request is pending or not. If the previous request is pending, you can't submit the next request till the current request completes and calling the process profile method will return error.

**Type** - System.Boolean
##Events

###Data


        


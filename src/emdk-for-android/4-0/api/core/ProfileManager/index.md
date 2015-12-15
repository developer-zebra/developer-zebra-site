---
title: ProfileManager
---

This class handles all the profile related functions.
 
 

**Example Usage:**
	
	:::java	
	private ProfileManager profileManager = (ProfileManager) EMDKManager.getInstance(EMDKManager.FEATURE_TYPE.PROFILE);


##Public Methods

### isPreviousRequestPending

**public boolean isPreviousRequestPending()**

This method tells whether the previous process profile request is pending or not.
 If the previous request is pending, you can't submit the next request till the current request completes 
 and calling the process profile method will return error.

**Returns:**

boolean

### CreateNameValuePair

**public String CreateNameValuePair(java.lang.String emdkName, java.lang.String paramName, java.lang.String paramValue)**

This function creates a name value pair string according to the 
 Name-Value pair request. The return string is compatible with 
 com.symbol.emdk.ProfileManager. processProfile(String profileName, 
 					PROFILE_FLAG profileFlag, String[] extraData) function's 
 extraData array element. If this function failed it throws InvalidParameterException
 exception.

**Parameters:**

`emdkName`

`paramName`

`paramValue`

**Returns:**

java.lang.String - - Name value pair string

### processProfile

**public EMDKResults processProfile(java.lang.String profileName, ProfileManager.PROFILE_FLAG profileFlag, org.w3c.dom.Document extraData)**

Processes the given profile based on the data provided and the flag and return status of the action. 
 
 

**Example Usage:**
	
	:::java	
	DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
	DocumentBuilder db = dbf.newDocumentBuilder();
	Document extraData;
	extraData = db.newDocument();
	profileManager.processProfile("Profile1", PROFILE_FLAG.GET, extraData);
	}


**Parameters:**

`profileName` - Name of the profile.

`profileFlag` -  ProfileManager.PROFILE_FLAG <br><br>
 
 If the profileFlag is set to SET, and if the given profile is not available in 
 the EMDKConfig.xml, it will look for valid profile in extraData argument and if present, the profile 
 will be added to the internal XML volatile repository and also applied to the device. 
 If the profile is present in the EMDKConfig.xml, it will be applied to the device.<br><br>
 
 If profileFlag is set to GET and if the profile is present in the internal repository, it will be 
 returned in extraData.

`extraData` - This can be used to provide data for processing action.

**Returns:**

com.symbol.emdk.EMDKResults

### processProfile

**public EMDKResults processProfile(java.lang.String profileName, ProfileManager.PROFILE_FLAG profileFlag, java.lang.String extraData)**

Processes the given profile based on the data provided and the flag and return status of the action. 
 
 

**Example Usage:**
	
	:::java	
	profileManager.processProfile("Profile1", PROFILE_FLAG.GET, new String[]{""});


**Parameters:**

`profileName` - Name of the profile.

`profileFlag` -  ProfileManager.PROFILE_FLAG <br><br>
 
 If the profileFlag is set to SET, and if the given profile is not available in 
 the EMDKConfig.xml, it will look for valid profile in extraData argument and if present, the profile 
 will be added to the internal XML volatile repository and also applied to the device. 
 If the profile is present in the EMDKConfig.xml, it will be applied to the device.<br><br>
 
 If profileFlag is set to GET and if the profile is present in the internal repository, it will be 
 returned in extraData.

`extraData` - This can be used to provide data for processing action.

**Returns:**

com.symbol.emdk.EMDKResults

### processProfile

**public EMDKResults processProfile(java.lang.String profileName, ProfileManager.PROFILE_FLAG profileFlag, ProfileConfig extraData)**

Processes the given profile based on the data provided and the flag and return status of the action. 
 
 

**Example Usage:**
	
	:::java	
	profileManager.processProfile("Profile1", PROFILE_FLAG.GET, ???);


**Parameters:**

`profileName` - Name of the profile.

`profileFlag` -  ProfileManager.PROFILE_FLAG <br><br>
 
 If the profileFlag is set to SET, and if the given profile is not available in 
 the EMDKConfig.xml, it will look for valid profile in extraData argument and if present, the profile 
 will be added to the internal XML volatile repository and also applied to the device. 
 If the profile is present in the EMDKConfig.xml, it will be applied to the device.<br><br>
 
 If profileFlag is set to GET and if the profile is present in the internal repository, it will be 
 returned in extraData.

`extraData` -  ProfileConfig This can be used to provide data for processing action.

**Returns:**

com.symbol.emdk.EMDKResults

### processProfileAsync

**public EMDKResults processProfileAsync(java.lang.String profileName, ProfileManager.PROFILE_FLAG profileFlag, org.w3c.dom.Document extraData)**

Processes the given profile based on the data provided and the flag and return status of the request. 
 This is an asynchronous method and result will be returned through the registered callback.
 
 

**Parameters:**

`profileName` - Name of the profile.

`profileFlag` -  ProfileManager.PROFILE_FLAG <br><br>
 
 If the profileFlag is set to SET, and if the given profile is not available in 
 the EMDKConfig.xml, it will look for valid profile in extraData argument and if present, the profile 
 will be added to the internal XML volatile repository and also applied to the device. 
 If the profile is present in the EMDKConfig.xml, it will be applied to the device.
 The result will be returned to the application via data listener callback.
 <br><br>
 
 If profileFlag is set to GET and if the profile is present in the internal repository, it will be 
 returned via data listener callback.

`extraData` - This can be used to provide data for processing action.

**Returns:**

com.symbol.emdk.EMDKResults

### processProfileAsync

**public EMDKResults processProfileAsync(java.lang.String profileName, ProfileManager.PROFILE_FLAG profileFlag, java.lang.String extraData)**

Processes the given profile based on the data provided and the flag and return status of the request. 
 This is an asynchronous method and result will be returned through the registered callback.
 

**Parameters:**

`profileName` - Name of the profile.

`profileFlag` -  ProfileManager.PROFILE_FLAG <br><br>
 
 If the profileFlag is set to SET, and if the given profile is not available in 
 the EMDKConfig.xml, it will look for valid profile in extraData argument and if present, the profile 
 will be added to the internal XML volatile repository and also applied to the device. 
 If the profile is present in the EMDKConfig.xml, it will be applied to the device.<br><br>
 
 If profileFlag is set to GET and if the profile is present in the internal repository, it will be 
 returned data listener callback.

`extraData` - This can be used to provide data for processing action.

**Returns:**

com.symbol.emdk.EMDKResults

### processProfileAsync

**public EMDKResults processProfileAsync(java.lang.String profileName, ProfileManager.PROFILE_FLAG profileFlag, ProfileConfig extraData)**

Processes the given profile based on the data provided and the flag and return status of the request. 
 This is an asynchronous method and result will be returned through the registered callback.
 
 

**Parameters:**

`profileName` - Name of the profile.

`profileFlag` -  ProfileManager.PROFILE_FLAG <br><br>
 
 If the profileFlag is set to SET, and if the given profile is not available in 
 the EMDKConfig.xml, it will look for valid profile in extraData argument and if present, the profile 
 will be added to the internal XML volatile repository and also applied to the device. 
 If the profile is present in the EMDKConfig.xml, it will be applied to the device.<br><br>
 
 If profileFlag is set to GET and if the profile is present in the internal repository, it will be 
 returned via data listener callback..

`extraData` -  ProfileConfig This can be used to provide data for processing action.

**Returns:**

com.symbol.emdk.EMDKResults

### addDataListener

**public void addDataListener(ProfileManager.DataListener listener)**

The client can register to get data notification via callbacks.

**Parameters:**

`listener`

**Returns:**

void

### removeDataListener

**public void removeDataListener(ProfileManager.DataListener listener)**

The client can un-register to get data notification via callbacks.

**Parameters:**

`listener`

**Returns:**

void

##Public Enums

###ProfileManager.PROFILE_FLAG

All the possible actions for  ProfileManager#processProfile(String, PROFILE_FLAG, Document) 
 and  ProfileManager#processProfile(String, PROFILE_FLAG, String[])is enumerated here.
 
 

**Example Usage:**
	
	:::java	
	PROFILE_FLAG.SET


**Values:**

* **SET** -Creates a profile with given XML data. If the profile is already created, 
 this activates the profile if it is not bound to any activity.

* **GET** -Retrieves a profile from internal repository.

* **RESET** -Resets the modified profile data available on the application cache to default profile created during the application development.
 This flag will not set/modify any profile to any component on the device without calling the process profile with SET flag. 
 After resetting, calling process profile with GET flag returns the reseted profile.

* **CHECK_COMPATIBILITY** -Validates the characteristic feature version in the existing profile if extraData is null, otherwise extra data profiles characteristic feature version.
 This validates only the profile version of the each feature (characteristic node version in the profile data), but not the individual fields.
 Calling process profile with this flag internally gets version of the different DSDs, the time required depends on numbers of characteristic features in a profile.



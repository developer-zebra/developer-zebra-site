---
title: ProfileManager
---
#ProfileManager
This class handles all the profile related functions.

**Example Usage:**

	:::java
	@Override
	public void onOpened(EMDKManager emdkmanager)
	{
	ProfileManager profileManager = (ProfileManager)emdkmanager.getInstance(FEATURE_TYPE.PROFILE);
	}

**Version:**

1.0

##Public Methods
###isPreviousRequestPending()
This method tells whether the previous process profile request is pending or not. If the previous request is pending, you can't submit the next request till the current request completes and calling the process profile method will return error.

**Returns:**

boolean - Returns whether the previous process profile request is pending or not.

###processProfile(String profileName, ProfileManager.PROFILE_FLAG profileFlag, Document extraData)
Processes the given profile based on the data provided and the flag and return status of the action.

**Example Usage:**

	:::java
	DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
	DocumentBuilder db = dbf.newDocumentBuilder();
	Document extraData;
	extraData = db.newDocument();
	profileManager.processProfile("Profile1", PROFILE_FLAG.GET, extraData);

**Parameters:**

* **profileName** - Name of the profile. ex: 'Profile1'.
	* You can also specify just part of the profile when a fully qualified name of the following format is given: `[profileName][featureType][name in profile parameter]` to just edit part of the profile. For example, if my profile is called 'Profile1' and the name in profile parameter is 'myName'. Passing 'profileName' as 'Profile1/ActivitySelection/myName' will just process this part of the profile.
	* Valid `[featureType]`: ActivitySelection, Barcode, MSR, Intent, Keystroke, IP.

* **profileFlag** - [ProfileManager.PROFILE_FLAG](ProfileManager.PROFILE_FLAG) If the profileFlag is set to SET, and if the given profile is not available in the EMDKConfig.xml, it will look for valid profile in extraData argument and if present, the profile will be added to the internal XML volatile repository and also applied to the device. If the profile is present in the EMDKConfig.xml, it will be applied to the device. If profileFlag is set to GET and if the profile is present in the internal repository, it will be returned in extraData.

* **extraData** - This can be used to provide data for processing action.

**Returns:**

com.symbol.emdk.EMDKResults - [EMDKResults](EMDKResults) object.

###processProfile(String profileName, ProfileManager.PROFILE_FLAG profileFlag, .String[] extraData)
Processes the given profile based on the data provided and the flag and return status of the action.

**Example Usage:**

	:::java
	profileManager.processProfile("Profile1", PROFILE_FLAG.GET, new String[]{""});

**Parameters:**

* **profileName** - Name of the profile. ex: 'Profile1'
	* You can also specify just part of the profile when a fully qualified name of the following format is given: `[profileName][featureType][name in profile parameter]` to just edit part of the profile. For example, if my profile is called ‘EmdkSampleProfile-1’ and the name I gave to the Clock feature is 'clock1'. Passing 'profileName' as ' EmdkSampleProfile-1/Clock/clock1’ will just process this part of the profile.
	* Valid `[featureType]`:	ActivitySelection, Barcode, MSR, Intent, Keystroke, IP, Clock, PowerMgr, PersistMgr, CertMgr, AppMgr, AccessMgr, Wi-Fi, GprsMgr

* **profileFlag** - [ProfileManager.PROFILE_FLAG](ProfileManager.PROFILE_FLAG) If the profileFlag is set to SET, and if the given profile is not available in the EMDKConfig.xml, it will look for valid profile in extraData argument and if present, the profile will be added to the internal XML volatile repository and also applied to the device. If the profile is present in the EMDKConfig.xml, it will be applied to the device. If profileFlag is set to GET and if the profile is present in the internal repository, it will be returned in extraData.

* **extraData** - This can be used to provide data for processing action.

**Returns:**

com.symbol.emdk.EMDKResults - [EMDKResults](EMDKResults) object.

###processProfile(String profileName, ProfileManager.PROFILE_FLAG profileFlag, ProfileConfig extraData)
Processes the given profile based on the data provided and the flag and return status of the action.

**Example Usage:**

	:::java
	//Create the ProfileConfig object
	ProfileConfig profileConfigObj = new ProfileConfig();
	//Get the ProfileConfig from the profile XML
	EMDKResults results = mProfileManager.processProfile(profileName, ProfileManager.PROFILE_FLAG.GET, profileConfigObj);
	//Set the code128
	profileConfigObj.dataCapture.barcode.decoders.code128 = ENABLED_STATE.TRUE;
	//call processPrfoile with profile name, SET flag and config data to update the profile
	EMDKResults results = mProfileManager.processProfile(profileName, ProfileManager.PROFILE_FLAG.SET, profileConfigObj);

**Parameters:**

* **profileName** - Name of the profile. ex: 'Profile1'
	* You can also specify just part of the profile when a fully qualified name of the following format is given: `[profileName][featureType][name in profile parameter]` to just edit part of the profile. For example, if my profile is called 'Profile1' and the name in profile parameter is 'myName'. Passing 'profileName' as 'Profile1/ActivitySelection/myName' will just process this part of the profile.
	* Valid `[featureType]`:	ActivitySelection, Barcode, MSR, Intent, Keystroke, IP

* **profileFlag** - [ProfileManager.PROFILE_FLAG](ProfileManager.PROFILE_FLAG) If the profileFlag is set to SET, and if the given profile is not available in the EMDKConfig.xml, it will look for valid profile in extraData argument and if present, the profile will be added to the internal XML volatile repository and also applied to the device. If the profile is present in the EMDKConfig.xml, it will be applied to the device. If profileFlag is set to GET and if the profile is present in the internal repository, it will be returned in extraData.

* **extraData** - [ProfileConfig](ProfileConfig) This can be used to provide data for processing action. This parameter is only supported for DataCapture profile features.

**Returns:**

com.symbol.emdk.EMDKResults - [EMDKResults](EMDKResults) object.

###CreateNameValuePair(String emdkName, String paramName, String paramValue)
This function creates a name value pair string according to the Name-Value pair request. The return string is compatible with com.symbol.emdk.ProfileManager. processProfile(String profileName, PROFILE_FLAG profileFlag, String[] extraData) function’s extraData array element. If this function failed it throws InvalidParameterException exception.

**Parameters:**

**emdk_name** - emdk name String

**param_name** - Parameter name String

**param_value** - Parameter value String

**Returns:**

This function returns the String in the format:

	:::xml
	<emdk_name>.<param_name>=<param_value>


###processProfileAsync(String profileName, ProfileManager.PROFILE_FLAG profileFlag, Document extraData)
Processes the given profile based on the data provided and the flag and return status of the request. This is an asynchronous method and result will be returned through the registered callback.

**Example Usage:**

	:::java
	public class MainActivity extends Activity implements EMDKListener, DataListener {

        profileManager.addDataListener(this);

        profileManager.processProfileAsync("Profile1", PROFILE_FLAG.GET, null);

**Parameters:**

**profileName** - Name of the profile.

**profileFlag** - ProfileManager.PROFILE_FLAG

If the profileFlag is set to SET, and if the given profile is not available in the EMDKConfig.xml, it will look for valid profile in extraData argument and if present, the profile will be added to the internal XML volatile repository and also applied to the device. If the profile is present in the EMDKConfig.xml, it will be applied to the device. The result will be returned to the application via data listener callback.

If profileFlag is set to GET and if the profile is present in the internal repository, it will be returned via data listener callback.

**extraData** - This can be used to provide data for processing action.

**Returns:**

[EMDKResults](EMDKResults) object.


###processProfileAsync(String profileName, ProfileManager.PROFILE_FLAG profileFlag, String[] extraData)
Processes the given profile based on the data provided and the flag and return status of the request. This is an asynchronous method and result will be returned through the registered callback.

**Example Usage:**

	:::java
	public class MainActivity extends Activity implements EMDKListener, DataListener {

        profileManager.addDataListener(this);

        profileManager.processProfileAsync("Profile1", PROFILE_FLAG.SET, extraData);

**Parameters:**

**profileName** - Name of the profile.

**profileFlag** - ProfileManager.PROFILE_FLAG

If the profileFlag is set to SET, and if the given profile is not available in the EMDKConfig.xml, it will look for valid profile in extraData argument and if present, the profile will be added to the internal XML volatile repository and also applied to the device. If the profile is present in the EMDKConfig.xml, it will be applied to the device.

If profileFlag is set to GET and if the profile is present in the internal repository, it will be returned data listener callback.

**extraData** - This can be used to provide data for processing action.

**Returns:**

[EMDKResults](EMDKResults) object.


###processProfileAsync(String profileName, ProfileManager.PROFILE_FLAG profileFlag, ProfileConfig extraData)
Processes the given profile based on the data provided and the flag and return status of the request. This is an asynchronous method and result will be returned through the registered callback.

**Example Usage:**

	:::java
	public class MainActivity extends Activity implements EMDKListener, DataListener {

        profileManager.addDataListener(this);

        profileManager.processProfileAsync("Profile1", PROFILE_FLAG.SET, null);

**Parameters:**

**profileName** - Name of the profile.

**profileFlag** - ProfileManager.PROFILE_FLAG

If the profileFlag is set to SET, and if the given profile is not available in the EMDKConfig.xml, it will look for valid profile in extraData argument and if present, the profile will be added to the internal XML volatile repository and also applied to the device. If the profile is present in the EMDKConfig.xml, it will be applied to the device.

If profileFlag is set to GET and if the profile is present in the internal repository, it will be returned via data listener callback.

**extraData** - ProfileConfig This can be used to provide data for processing action. This parameter is only supported for DataCapture profile features.

**Returns:**

[EMDKResults](EMDKResults) object.


###addDataListener([ProfileManager.DataListener](ProfileManager.DataListener) listener)
The client can register to get data notification via callbacks.

**Parameters:**

listener

**Returns:**

void

###removeDataListener([ProfileManager.DataListener](ProfileManager.DataListener) listener)
The client can un-register to get data notification via callbacks.

**Parameters:**

listener

**Returns:**

void



##Public Enums

###ProfileManager.PROFILE_FLAG
All the possible actions for [ProfileManager.processProfile(String, PROFILE_FLAG, Document)](ProfileManager#ProfileManager.processProfile(String, PROFILE_FLAG, Document)) and [ProfileManager.processProfile(String, PROFILE_FLAG, String[])](ProfileManager#ProfileManager.processProfile(String, PROFILE_FLAG, String[]))is enumerated here.

**Example Usage:**

	:::java
	PROFILE_FLAG.SET

**Values:**

* **SET** - Creates a profile with given XML data. If the profile is already created, this activates the profile if it is not bound to any activity.

* **GET** - Retrieves a profile from the EMDK internal repository.

* **RESET** - Resets the modified profile data available on the application cache to default profile created during the application development. This flag will not set/modify any profile to any component on the device without calling the process profile with SET flag. After resetting, calling process profile with GET flag returns the reseted profile.

* **CHECK_COMPATIBILITY** - Validates the characteristic feature version in the existing profile if extraData is null, otherwise extra data profiles characteristic feature version. This validates only the profile version of the each feature (characteristic node version in the profile data), but not the individual fields. Calling process profile with this flag internally gets version of the different DSDs, the time required depends on numbers of characteristic features in a profile.

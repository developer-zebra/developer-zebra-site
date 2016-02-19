---
title: ProfileManager.PROFILE_FLAG
type: api
---


All the possible actions for [ ProfileManager.processProfile(String, PROFILE_FLAG, Document)](../ProfileManager#processprofile) 
 and 

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


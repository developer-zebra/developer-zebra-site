---
title:  Persistence Manager Profile Feature Reference
---

## Overview

The Persist Manager is used to create and remove persistent profile features. These features and their parameters will survive and be automatically applied after a 'Enterprise Reset'. 

>Note:  
>Data Capture Manager profile features will not be persisted.

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](/emdk-for-android/4-0/api/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](/emdk-for-android/4-0/guide/profiles/usingwizard) for more information.

## Main Functionality

* Configure Dealt Device Settings After an Enterprise Reset
* Add a Persistent Settings Profile
* Remove a Persistent Settings Profile
* Enable a Persistent Settings Profile
* Disable a Persistent Settings Profile
* Set if XML should Persist if Error

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](/emdk-for-android/4-0/api/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](/emdk-for-android/4-0/guide/profiles/usingwizard) for more information.

## Make Current XML Persistent
This will make the specified Profile features persistent. The combination of Name, Version and Order will be used to 'identify' the profile set to be persisted. The same combination must be used when trying to remove the features from being persisted.

* Persist as Name - This name is used to identify the profile features that will be persisted, so that you can reference it for removal from the persist list.
	* Generic/Absolute - can be used to further clarify the name/scenario
	* Staging-Specific/Relative - can be used to further clarify the name/scenario
* Persist as Version - Provide the version of the profile features that will be persisted, so that you can reference it for removal from the persist list.
* Persist as Order - Provide the optional order in which the profile features with the specified name will be persisted.
* Persist if Error - Specifies whether the profile features will be persisted if any errors occur.


## Remove Persistent XML
This will remove the specified profile features from being persistent. The combination of the Name, Version and Order features must match a previously persisted profile with those same features.

* Persist as Name - This name is used to identify the persisted profile setting to remove
	* Generic/Absolute 
	* Staging-Specific/Relative 
* Persist as Version - The version of the persisted profile setting to be removed
* Persist as Order - The optional order of the persisted profile setting to be removed

## Enable the specified persistent profile
It will enable the persistent profile that you specify with the help of supply details about a specific persist action to be performed.

## Disable the specified persistent profile
It will disable the specified persistent profile with the help of supply details about a specific persist action to be performed.

## Usage Notes
###Using PersistsManager on TC55 after performing a FactoryReset
The following issue is limited to the TC55 only: 
 
During the installation on the TC55, the EMDK Device Runtime package creates the "enterprise/usr/persist/" folder required for the PersistManager feature to function.  If a factory reset is done after installing the EMDK Device Runtime, this folder will get deleted and the PersistManager will no longer work. 
 
This problem can be fixed by reinstalling the EMDK Device Runtime Package on the TC55.

## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=PersistMgr&os=All&embed=true"></iframe> 



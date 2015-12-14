# Persist

## About Persist

### Overview

The Persist Manager setting type creates and removes persistent profile settings. These settings and their parameters survive and are automatically applied after a 'Enterprise Reset'. 

>Note:  
>Data Capture Manager profile settings are not persisted.

### Main Functionality

* Configure Dealt Device Settings After an Enterprise Reset
* Add a Persistent Settings Profile
* Remove a Persistent Settings Profile
* Enable a Persistent Settings Profile
* Disable a Persistent Settings Profile
* Set if XML should Persist if Error

##Parameter Notes
### Make Current XML Persistent
This makes the specified Profile settings persistent. The combination of Name, Version and Order are used to 'identify' the profile set to persist. The same combination must be used when trying to remove the settings from being persisted.

* Persist as Name - This name is used to identify the profile settings to be persisted, so that you can reference it for removal from the persist list.
	* Generic/Absolute - can be used to further clarify the name/scenario
	* Staging-Specific/Relative - can be used to further clarify the name/scenario
* Persist as Version - Provide the version of the profile settings to be persisted, so that you can reference it for removal from the persist list.
* Persist as Order - Provide the optional order in which the profile settings with the specified name are persisted.
* Persist if Error - Specifies whether the profile settings are persisted if any errors occur.


### Remove Persistent XML
This removes the specified profile settings from being persistent. The combination of the Name, Version and Order features must match a previously persisted profile with those same features.

* Persist as Name - This name is used to identify the persisted profile setting to remove
	* Generic/Absolute 
	* Staging-Specific/Relative 
* Persist as Version - The version of the persisted profile setting to remove
* Persist as Order - The optional order of the persisted profile setting to remove

### Enable the specified persistent profile
Enables the persistent profile that you specify with the help of details about a specific persist action to perform.

### Disable the specified persistent profile
Disables the specified persistent profile with the help of details about a specific persist action to perform.

### Usage Notes
####Using PersistsManager on TC55 after performing a FactoryReset
The following issue is limited to the TC55 only: 
 
During the installation on the TC55, the EMDK Device Runtime package creates the "enterprise/usr/persist/" folder required for the PersistManager setting type to function.  If a factory reset is done after installing the EMDK Device Runtime, this folder is deleted and the PersistManager no longer works. 
 
To correct this problem, reinstall the EMDK Device Runtime Package on the TC55.


## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=PersistMgr&os=All&embed=true"></iframe> 

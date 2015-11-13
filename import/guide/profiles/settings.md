# Settings Manager Profile Feature Reference

## Overview

Settings Manager feature allows you to manage settings UI configuration by providing the ability to invoke Enterprise Reset in Settings application of your device.

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](../api/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](../guide/profiles/usingwizard) for more information.

## Main Functionality

* Enable/Disable the Ability to Perform an Enterprise Reset from the Settings Menu

* Enable/Disable the Ability to turn Wi-Fi on or off from the Settings Menu

* Enable/Disable the Ability to turn Install Apps from Unknown Sources on or off from the Settings Menu

* Enable/Disable the Ability to to turn Airplane Mode on or off from the Settings Menu

##Enterprise Reset
Enable or disable the ability to access the `Enterprise Reset` option in the Settings application.

##Wi-Fi 
Enable or disable the ability to access the `Wi-Fi` option in the Settings application.

##Unknown Sources 
Enable or disable the ability to access the `Install Apps from Unknown Sources` option in the Settings application.

##Airplane Mode
Enable or disable the ability to access the `Airplane Mode` option in the Settings application.

##Access Applications
Enable or disable the ability to access the `Applications` option in the Settings application.

## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=SettingsMgr&os=All&embed=true"></iframe> 



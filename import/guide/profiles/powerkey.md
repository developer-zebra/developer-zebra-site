# PowerKey Manager Profile Feature Reference


## Overview

The PowerKey Manager feature allows your application to control which options appear on the power menu on the device.

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](../api/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](../guide/profiles/usingwizard) for more information.

## Main Functionality

* Show/Hide Airplane Mode Power Menu Option
* Show/Hide Touch Panel Power Menu Option
* Show/Hide Safe Mode Power Menu Option
* Enable/Disable Auto Screen Lock when Device is Powered off using the Power Key

> The Power menu is displayed by holding down the power button on a device

##Airplane Mode
This profile feature will allow your application to control the visibility of the Airplane Mode option in the Power Key Menu

##Touch Panel
This profile feature will allow your application to control the visibility of the Touch Panel option in the Power Key Menu.

##Safe Mode
This profile feature will allow your application to control the visibility of the Safe Mode option in the Power Key Menu.

##Auto Screen Lock on Power Key Option
This profile feature will allow your application to control the visibility of the Auto Screen Lock option in the settings menu.

##Auto Screen Lock on Power Key State
This profile feature will allow your application to control the visibility of the Auto Screen Lock option in the Power Key Menu( Menu that appears when power button is long pressed).

## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=PowerKeyMgr&os=All&embed=true"></iframe> 
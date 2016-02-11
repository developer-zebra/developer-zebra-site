---
title:  Power Manager Profile Feature Reference
---


## Overview

This feature allows you to put the device into Sleep mode, re-power or perform an OS Update. The action will be performed when the configuration is set.

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](../../../api/core/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](../usingwizard) for more information.

## Main Functionality

* Put the Device to Sleep
* Reboot the Device
* Enterprise Reset a Device
* Factory Reset a Device
* Wipe a Device
* Update the OS


## Do Nothing
Will not perform any action

## Sleep Mode
Will put the device into Sleep mode.

## Reboot
Will reboot or re-power the device.

## Enterprise Reset
Will perform an Enterprise Reset.

> Note: This feature is supported on devices that are running KitKat versions of Android like the TC70.

## Factory Reset
Will perform a Factory Reset.

> Note: This feature is supported on devices that are running KitKat versions of Android like the TC70.

## Full Device Wipe
Will perform a full device wipe.

> Note: This feature is supported on devices that are running KitKat versions of Android like the TC70.

## OS Update
Will initiate an OS Update using the provided OS Update Zip File

* OS Update Zip File - The full path to the OS Update Zip File that resides on the device

> Note: The OS Update file should already exist on the device. When using this feature on the TC55 the update package must be placed on the external SD card. Any attempt to use the internal SD card for this purpose will fail.

## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=PowerMgr&os=All&embed=true"></iframe> 




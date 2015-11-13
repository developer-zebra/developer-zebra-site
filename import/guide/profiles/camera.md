# Camera Manager Profile Feature Reference

## Overview

The Camera Manager feature allows your application to control access to the cameras in the device. For example you can disable the user from using all cameras on the device. 

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](../api/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](../guide/profiles/usingwizard) for more information.

## Main Functionality

* Enable/Disable the use of all Cameras
* Enable/Disable the use of the Front Camera
* Enable/Disable the use of the Rear Camera

## All Cameras
This option will allow you to enable or disable both front and rear cameras on a device. 

## Front Camera
This option will allow you to enable/disable the front camera.

## Rear Camera
This option will allow you to enable/disable the rear camera.

## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=CameraMgr&os=All&embed=true"></iframe> 
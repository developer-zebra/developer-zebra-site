---
title:  Touch Manager Profile Feature Reference
---


## Overview

Touch Manager feature allows you set the Touch Mode on your device in order to interact with User Interface.

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](/emdk-for-android/4-0/api/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](/emdk-for-android/4-0/guide/profiles/usingwizard) for more information.

## Main Functionality

* Configure the Screen for Stylus and Finger Input
* Configure the Screen for Glove and Finger Input

## TouchAction
Specify Touch Mode to interact with User Interface on the device.

* Do not change - Keep the existing Touch Mode settings.
* Stylus and Finger - Set the Touch Mode to Stylus and Finger.
* Glove and Finger - Set the Touch Mode to Glove and Finger.

## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=TouchMgr&os=All&embed=true"></iframe> 




---
title:  Cellular Manager Profile Feature Reference
---

## Overview

The Cellular Manager feature allows you to configure options of the  cellular radio on your device. 

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](../../../api/core/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](../usingwizard) for more information.

## Main Functionality

* Data Roaming State on/off
* Data Roaming Enabled/Disabled 
* Background Data State on/off
* Background Data Enabled/Disabled 

## Data Roaming
This feature will allow you to control a devices ability to use cellular data while roaming. You can independently set the state as well as if it is enabled or disabled.

## Background Data
This feature will allow your application to control background data usage on devices equipped with a cellular radio. You can independently set the state as well as if it is enabled or disabled.

## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=CellularMgr&os=All&embed=true"></iframe> 

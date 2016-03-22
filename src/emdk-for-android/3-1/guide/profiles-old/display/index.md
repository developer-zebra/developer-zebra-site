---
title: Display Manager Profile Feature Reference
layout: guide.html
product: EMDK For Android
productversion: '2.3'
---

## Overview

The Display Manager feature allows your application to control the screen timeout value to conserve power.

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](../../../api/core/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](../usingwizard) for more information.

## Main Functionality
* Set the Screen Timeout Interval


##Screen Timeout Interval
This profile feature will allow your application to set how many seconds a device can be inactive before the screen turns off.


## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=DisplayMgr&os=All&embed=true"></iframe> 









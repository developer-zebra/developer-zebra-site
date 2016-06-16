---
title: Battery Manager Profile Feature Reference
layout: guide.html
product: EMDK For Android
productversion: '2.3'
---

## Overview
Zebra's Device batteries store information in their internal memory, for instance, the number of charge cycles a battery has accumulated.  Zebra's Android devices expose this through a battery settings menu that displays the accumulated information.  These Android devices are configured with a Decommission Threshold Value that is the maximum number of charge cycles a battery can accumulate before being flagged as a battery that should be replaced. Battery Manager allows the developer to modify that Decommission Threshold from its factory setting.


## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](../../../api/core/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](../usingwizard) for more information.

## Main Functionality

* Set Battery Usage Decommissioned Threshold
* Set Battery Percentage Decommissioned Threshold

##Smart Battery Threshold
This setting would be used to modify the Decommissioned Threshold for Zebra Smart Batteries.

* Set the threshold value of the Battery Usage Number as an Integer ranging from 0 to 65535 (value 0 for no change or not applicable)

##Gifted Battery Threshold
This setting would be used to modify the Decommissioned Threshold for Zebra Gifted Batteries.

* Set the threshold value of the Battery Health Percentage as an Integer ranging from 0 to 100 (value 0 for no change or not applicable)

## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=BatteryMgr&os=All&embed=true"></iframe>













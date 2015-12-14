---
title:  Battery
---

## About Battery

### Overview
Zebra's device batteries store information in internal memory, for instance the number of charge cycles a battery has accumulated. Zebra's Android devices expose this through a battery settings menu that displays the accumulated information.  These Android devices are configured with a Decommission Threshold Value that is the maximum number of charge cycles a battery can accumulate before being flagged as a battery that should be replaced. Battery Manager allows the developer to modify that Decommission Threshold from its factory setting.

### Main Functionality

* Set Battery Usage Decommissioned Threshold
* Set Battery Percentage Decommissioned Threshold

##Parameter Notes

### Smart Battery Threshold
Use this feature to modify the Decommissioned Threshold for Zebra Smart Batteries.

* Set the threshold value of the Battery Usage Number as an integer ranging from 0 to 65535 (value 0 for no change or not applicable).

### Gifted Battery Threshold
Use this feature to modify the Decommissioned Threshold for Zebra Gifted Batteries.

* Set the threshold value of the Battery Health Percentage as an integer ranging from 0 to 100 (value 0 for no change or not applicable)

## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=BatteryMgr&os=All&embed=true"></iframe>


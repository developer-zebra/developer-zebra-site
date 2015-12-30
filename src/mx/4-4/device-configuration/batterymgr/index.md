---
title: Battery Manager
description: The BatteryMgr allows configuration of the thresholds used to determine when a battery needs to be decommissioned.
---

## About BatteryMgr

### Overview
The BatteryMgr allows configuration of the thresholds used to determine when a battery needs to be decommissioned.

Zebra Android devices can support three classes of batteries: Regular (dumb), Smart, and Gifted. Regular batteries provide only basic support for battery level. Smart Batteries add capabilities to identify batteries uniquely, and to track battery provenance and usage history. Gifted batteries add capabilities that can be used to provide more accurate gas gauging, monitor battery charging and track battery health.

A key capability that is lacking for Regular batteries but is provided for both Smart and Gifted batteries is the ability to determine when a battery is nearing the end of its useful lifetime and needs to be decommissioned (replaced). In the case of Smart batteries, decommissioning must be based strictly on the charge history of the device. In the case of Gifted batteries, which are more capable of tracking battery health, decommissioning can be based on the actual condition of the battery. In either case, the determination of when a battery needs to be decommissioned is configurable, to account for different demands that are likely to be placed on batteries in different environments.

The BatteryMgr allows configuration of the thresholds used to determine when a battery needs to be decommissioned. Once configured, these values (along with other battery parameters) will be used by battery management software to determine the value of the decommission flag that will be stored in a Smart or Gifted battery and carried with it thereafter.

The supported thresholds are:

* Battery Usage Decommission Threshold
	* A battery is considered to be decommissioned if the battery usage number is greater than or equal to Battery Usage Decommission Threshold.
	* Battery Usage Decommission Threshold is applicable for Smart Batteries, TC50 batteries, and TC75 batteries.
	* **Note:** Battery usage number is Aggregatecharge/RatedCapacity of the battery.
* Percent Decommission Threshold
	* A battery is considered to be decommissioned if the Health percentage of the battery is less than or equal to Percent Decommission Threshold.
	* Percent Decommission Threshold is applicable for Gifted Batteries.
	* **Note:** Health percentage is the ratio of "present_capacity" to "design_capacity" at a discharge rate of "design_capacity".

The values that are set for the threshold values are persisted across reboots by the use of shared preferences which will save the configuration data. The configured threshold values will also be persisted across an enterprise reset.

An error will be reported if the OS does not support the battery decommission feature, which will be determined by whether or not the syfs files, either batteryusage_decommission_threshold or percent_decommission_threshold, are present on the device.

### Main Functionality
 
* Set the Battery Usage Decommission Threshold for Smart Batteries
* Set the Battery Percentage Decommission Threshold Gifted Batteries

##Parameter Notes
###Battery Usage Decommissioned Threshold
Pivotal parm: No

Parm name: SetBatteryUsageDecommissionThreshold

Description: 

>This parm allows you to set the Battery Usage Decommissioned Threshold on devices that have support for Smart Batteries.

>Smart Batteries accumulate the total amount of charge that is placed into the battery over time. This accumulation is referred to as Aggregated Charge. Over time, the Aggregated Charge will grow, and it is a reasonable expectation that a battery with a larger Aggregated Charge has a shorter remaining useful lifetime than a device with a smaller Aggregated Charge.

>The Battery Number is determined by dividing the Aggregated Charge of a Smart Battery by its Rated Capacity. Battery Number is therefore an attempt to assess how much impact on the health of the battery has occurred as a result of the absolute amount of charging and discharging that battery has undergone.

>**Note:** It is not possible to say with any certainty what the relative impact on battery health will be as a result of partial charge cycles vs. full charge cycles. Two batteries will have similar Battery Numbers if they have similar amounts of Aggregated Charge. But if those batteries had very different charging and discharging patterns, then comparing their Battery Numbers may not tell us anything useful about their relative health. One thing we can say with certainty is that the health of a given battery will reduce as its computed Battery Number battery increases. Nonetheless, it is likely reasonable to assume that batteries with very high Battery Numbers are "less healthy" than batteries with very low Battery Numbers. Therefore, by setting a threshold based on a very high Battery Number, it should be possible to identify batteries that are most likely to need replacement.

>A Smart Battery is considered to be ready to be decommissioned if the Battery Usage Number is greater than or equal to the currently configured Battery Usage Decommissioned Threshold. The default value for the Battery Usage Decommissioned Threshold is 400, indicating that a Smart Battery should be decommissioned once it has undergone an approximate of 400 "full discharge/charge" cycles.

>**Note:** This parm can be used on a Zebra Android device that has the ability to support Smart Batteries, whether or not a Smart Battery is currently present in the device. For example, a device could support both Regular and Smart Batteries. In such a case, this parm could be used to configure how the device will handle a Smart Battery in the future, should one be inserted, even if the device currently has a Regular Battery inserted. If this parm is on a device that does not support Smart Batteries, then an error will be returned in the Result XML document.

Parm value input rules: 

* The input value must be an integer between 0 and 65535
* Setting this parm to 0 (or the absence of this parm from the XML) indicates no change or not applicable

###Battery Percentage Decommissioned Threshold
Pivotal parm: No

Parm name: SetPercentDecommissionThreshold

Description: 

>This parm allows you to set the Battery Percentage Decommissioned Threshold on devices that have support for Gifted Batteries.

>Gifted Batteries have the ability to determine their Actual Capacity under specific discharge conditions. Based on this, Gifted Batteries can estimate their Battery Health as the percentage the Actual Capacity is of the Rated Capacity. Over time, both the Actual Capacity and the Battery Health will reduce and it is a reasonable expectation that a battery with a lower Battery Health has a shorter remaining useful lifetime than a device with a larger Battery Health.

>A Gifted Battery is considered to be ready to be decommissioned if the Battery Health is less than the currently configured Battery Percentage Decommissioned Threshold. The default value for the Battery Percentage Decommissioned Threshold is 75, indicating that a Smart Battery should be decommissioned once its Actual Capacity is less than 75% of its original Rated Capacity.

>**Note:** This parm can be used on a Zebra Android device that has the ability to support Gifted Batteries, whether or not a Gifted Battery is currently present in the device. For example, a device could support both Smart and Gifted Batteries. In such a case, this parm could be used to configure how the device will handle a Gifted Battery in the future, should one be inserted, even if the device currently has a Smart Battery inserted. If this parm is on a device that does not support Gifted Batteries, then an error will be returned in the Result XML document.

Parm value input rules: 

* The input value must be an integer between 0 and 100
* Setting this parm to 0 (or the absence of this parm from the XML) indicates no change or not applicable


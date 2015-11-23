---
title: DiagnosticData
---

The diagnostic data.

##Public Fields

###batteryTimeToEmpty

The remaining capacity of the battery in minutes. 
 The default value -1 is assigned when this parameter not requested or failed to get it.

**Type:**

int

###batteryStateOfCharge

The predicted Battery capacity in terms of Percentage. 
  The default value -1 is assigned when this parameter not requested or failed to get it.

**Type:**

int

###batteryStateOfHealth

Battery health in percentage.
  State of Health (SOH) is the battery capacity as Percentage of the battery rated capacity.
  The default value -1 is assigned when this parameter not requested or failed to get it.

**Type:**

int

###batteryChargingTime

The remaining time needed for the terminal to be in cradle to reach capacity that will be enough
  for a requested duration of shopping trip. 
  The default value -1 is assigned when this parameter not requested or failed to get it.
  If Device is not charging , then this parameter is not available and displays 65535.
  Note: This parameter is not supported now. Hence returns 0xFFFFh(65535)

**Type:**

int

###batteryChargingTimeElapsed

The duration in minutes in which battery was charged during the current charge cycle. 
  The default value -1 is assigned when this parameter not requested or failed to get it.
  If Device is not charging , then this parameter is not available and displays 65535

**Type:**

int

###timeSinceBatteryReplaced

The duration in days battery was last replaced.
 The default value -1 is assigned when this parameter not requested or failed to get it.

**Type:**

int

###timeSinceReboot

The time in minutes since the device cold booted the last time. 
 The default value -1 is assigned when this parameter not requested or failed to get it.

**Type:**

int

###batteryDateOfManufacture

The manufacture date of the battery in the format year/mm/date.  Empty string is assigned when this parameter not request or failed to get it.

**Type:**

java.lang.String



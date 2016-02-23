---
title: DiagnosticParamId
type: api
---


The diagnostic parameter IDs.

##Constructors

###DiagnosticParamId



##Public Fields

###BATTERY_STATE_OF_HEALTH

Battery health in percentage. State of Health (SOH) is the battery capacity as percentage of its rated capacity.

**Type:**

int

###BATTERY_TIME_TO_EMPTY

The remaining capacity of the battery in minutes.

**Type:**

int

###BATTERY_STATE_OF_CHARGE

The remaining capacity of the battery in percentage.

**Type:**

int

###BATTERY_DATE_OF_MANUFACTURE

Battery Manufacturing date in dd/mm/year format.

**Type:**

int

###BATTERY_CHARGING_TIME

The remaining time needed for the terminal to be in cradle to reach capacity 
 that will be enough for a requested duration of shopping trip.
 Currently this parameter is not supported .Hence returns 0xFFFFh or 65535 .

**Type:**

int

###TIME_SINCE_BATTERY_REPLACED

The duration in days battery was last replaced.

**Type:**

int

###TIME_SINCE_REBOOT

The time in minutes since the device cold booted the last time.

**Type:**

int

###BATTERY_CHARGING_TIME_ELAPSED

The duration in minutes in which which battery was charged during the current charge cycle.

**Type:**

int

###BATTERY_STATUS_ALL

Gets all the Battery parameters.Except Time since Reboot .

**Type:**

int

###ALL

Gets all the diagnostics parameter including Time since Reboot.

**Type:**

int


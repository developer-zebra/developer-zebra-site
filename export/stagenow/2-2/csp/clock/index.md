---
title:  Clock
---

## About Clock

### Overview

The Clock setting type sets the date and time. To account for time zone nuances including daylight saving time, Clock expects the date and time to be entered as normalized values to UTC (GMT) time. In other words, the date and time set as parameters for Clock must be the UTC (GMT) equivalent of the local time being set. 

### Main Functionality

* Set the Time Zone
* Set the Date
* Set the Time
* Enable Auto Time
* Disable Auto Time
* Set NTP Server Address
* Set Sync Interval

##Parameter Notes
### AutoTime
Use an NTP server to automatically set the time, date and timezone. The NTP server is synced at the specified interval.

* NTP Server - the IP address of the NTP server
* SyncInterval - time is automatically synced at this interval

### TimeZone 
Provide the TimeZone that to which the device is set. Note: The supported values for time zone are the same as Android supported values. For example, GMT-5 or Olson name such as America/New_York.

### Date 
Provide the Date to which the device is set when the profile is enabled. It must have a length of 10 and be in the format 'yyyy-MM-dd' (for example : 2014-12-31). It must be specified in UTC (Universal Time Coordinates) and not in LTC (Local Time Coordinates).

### Time
Provide the Time to which the device is set when the profile is enabled. It must have a length of 8 and be in the format HH:mm:ss (for example : 23:59:59). It must be specified in UTC (Universal Time Coordinates) and not in LTC (Local Time Coordinates).

### Usage Notes

####Example #1
Set the clock with the following settings:

* Set the date to 15-Jan-2010
* Set the time to 2:15PM local time
* Set the time zone to New York, New York, USA

15-Jan is eastern standard time in New York and not daylight saving time, meaning it is GMT-04:00. Set the following parameters for Clock:

* TimeZone = New York, New York, USA
* Date = 15-Jan-2010 (2010-01-15)
* Time = 6:15PM (18:15:00)

####Example #2
Set the clock with the following settings:

* Set the date to 11-Jul-2014
* Set the time to 2:55AM local time
* Set the time zone to Bangalore, India

The time zone for Bangalore is GMT+05:30. Set the following parameters for Clock:

* TimeZone Bangalore, India
* Date = 10-Jul-2010 (2010-07-10)
* Time = 9:25PM (21:25:00)

Note the change of date as well as time. In this case, as the device converts this to local time, the date and time are automatically set properly when the offset is applied.


## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=Clock&os=All&embed=true"></iframe> 


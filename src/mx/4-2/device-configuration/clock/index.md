---
title: Clock Manager
description: The Clock Manager allows the setting of Date, Time, and Time Zone or to configure the device to automatically acquire it via NTP.
---

## About Clock

### Overview

Zebra Android devices contain Clock functionality that tracks the current Date and Time on the device in Coordinated Universal Time (UTC), and that can calculate the current Date and Time in Local Time Coordinates (LTC), for a device's configured location. UTC is effectively the same as the LTC at the Prime Meridian in Greenwich, England. LTC is computed from UTC by using an offset based on a configured Time Zone that us suitable for the location where the device is being used and any Daylight Saving Time offset that is required for that Time Zone.

The Clock allows theprogrammatic setting of the Date, Time, and Time Zone or to configure the device to automatically acquire the Date and Time from a Network Time Protocol (NTP) Server. To avoid complications related to LTC, all Date and Time values used by the Clock must be represented as UTC.

Using UTC reduces complexity and ensures a deterministic result when setting the Date and Time, regardless of the configured Time Zone or any Daylight Saving Time offset that might apply. For example, if the Date and Time were set in LTC, then the order of setting Date, Time, and Time Zone could affect the actual results. Also, if LTC were used, then certain combinations would become invalid such as the times "skipped" during adjustment for Daylight Saving Time.

### Main Functionality

* Turn Auto Time On or Off
* Set the Time Zone
* Set the current Date
* Set the current Time
* Set the Auto Time NTP Server Address
* Set the Auto Time Sync Interval

##Parameter Notes
### AutoTime
Pivotal parm: Yes

Description: 

>This parm allows you to control whether the Date and Time on the device should be set automatically or manually.

>When AutoTime is turned On, the time will be acquired automatically, if possible. For devices operating on a Cellular network, AutoTime will typically cause the Date and Time to be from the carrier network and set on the device. For other devices, AutoTime will cause a specified NTP server to be automatically contacted on a specified interval and the Date and Time of the device to be set based on the UTC received from that server.

>When AutoTime is turned Off, the Date, Time, and Time Zone can be set explicitly and will count forward unless/until explicitly changed again.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>False</td>
    <td>"false"</td>
	<td>This value (or the absence of this parm from the XML) will turn AutoTime Off, thus preventing the automatic contacting of an NTP Server and automatic setting of the Date and Time of the device.</td>
  </tr>
  <tr>
    <td>True</td>
    <td>"true"</td>
	<td>This value will turn AutoTime On, thus enabling the automatic contacting of an NTP Server and automatic setting of the Date and Time of the device.</td>
  </tr>
</table>
</div>	

####NTPServer
Settable if: AutoTime is "true"

Pivotal parm: No

Parm name: NTPServer

Description: 

>This parm allows you to specify the URL of the NTP server that will be contacted periodically to acquire the Date and Time and set them on the device. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause a default NTP server to be used.

>**Note:** For devices operating on Cellular networks, the Date and Time may be obtained directly from the carrier network and may not require contacting an NTP server. On such devices, the Time Zone may also be automatically acquired from the carrier network and set onto the device.

####SyncInterval
Settable if: AutoTime is "true"

Pivotal parm: No

Parm name: SyncInterval

Description: 

>This parm allows you to specify the interval at which an NTP server will automatically be contacted to acquire the Date and Time to set on the device.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>30 minutes</td>
    <td>"00:30:00"</td>
	<td>This value will cause the device to attempt to contact the NTP server every 30 minutes.</td>
  </tr>
  <tr>
    <td>60 minutes</td>
    <td>"00:60:00"</td>
	<td>This value will cause the device to attempt to contact the NTP server every 60 minutes.</td>
  </tr>
  <tr>
    <td>6 hours</td>
    <td>"06:00:00"</td>
	<td>This value will cause the device to attempt to contact the NTP server every 6 hours.</td>
  </tr>
  <tr>
    <td>24 hours</td>
    <td>"24:00:00"</td>
	<td>This value will cause the device to attempt to contact the NTP server every 24 hours.</td>
  </tr>
</table>
</div>	

### TimeZone 
Settable if: AutoTime is "false"

Pivotal parm: No

Parm name: TimeZone

Description: 

>This parm allows you to set the TimeZone that will be used to calculate LTC on the device. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause a the TimeZone currently in use on the device to be unchanged.

Parm value input rules: 

* String with a maximum of 255 characters
* The string must be one of the following:
	* A value equal to "GMT", indicating that the Time Zone should be the Greenwich Mean Time.
	* A value equal to "UTC", which is equivalent to GMT
	* A value that starts with the prefix "GMT" with an offset in hours or hours and minutes, for example:
		* GMT-10 (10 hours before GMT)
		* GMT+05:30 (5 1/2 hours after GMT)
	* An Olsen/tz Time Zone identifier (e.g. "America/New_York")
		* See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

### Date 
Settable if: AutoTime is "false"

Pivotal parm: No

Parm name: Date

Description: 

>This parm allows you to set the Date on the device. The Date must be specified in UTC and not in LTC. This means that the Date specified in UTC might be the same as the Date in LTC or might be one day earlier or later, depending on any offsets applied due to Time Zone and/or Daylight Saving Time. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause the current Date on the device to be left unchanged.

Parm value input rules: 

* String with a size of exactly 0 or 10 characters
* If non-empty, the string must be in the format of "yyyy-MM-dd" (e.g. "2013-12-31" would set the Date to UTC December 31, 2013".

### Time
Settable if: AutoTime is "false"

Pivotal parm: No

Parm name: Time

Description: 

>This parm allows you to set the Time on the device. The Time must be specified in UTC and not in LTC. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause the current Time on the device to be left unchanged.

Parm value input rules: 

* String with a size of exactly 0 or 8 characters
* If non-empty, the string must be in the format of "HH:mm:ss", (e.g. "23:59:59" specifies one second before midnight).

### Usage Notes

####Example #1
We want to set local time of the device as follows:

* Device Location = New York, New York, USA
* Date = January 15, 2010
* Time = 2:15PM (14:15:00)

We can then make the following observations:

* The Device Location is in the Eastern USA Time Zone
* The GMT offset for that Time Zone is -5 hours
* That Time Zone does not observe Daylight Time on that Date

The values specified to the Clock would therefore be:

* TimeZone = "America/New_York"
* Date = "2010-01-15"
* Time = "19:15:00"

The above UTC values would be converted to the desired LTC by:

* Applying the GMT offset for the selected Time Zone, which is -5 hours (-5 or -05:00)
	* 19:15:00 - 05:00 = 14:15:00
* Applying Daylight Saving Time offset, since it is not in effect in that Time Zone on that Date
	* Daylight Saving Time began March 14, 2010
	* Daylight Saving Time ended November 7, 2019
* Applying no Date offset, since the Time offset did not cause "roll over" or "roll under"

####Example #2

We want to set the local time of the device as follows:

* Device Location = Bangalore, India
* Date = July 11, 2014
* Time = 2:55AM (02:00:00)

We can then make the following observations:

* The Device Location is in the India Time Zone
* The GMT offset for that Time Zone is +5 1/2 hours (+05:00)
* That Time Zone does not observe Daylight Time

The values specified to the Clock would therefore be:

* TimeZone = "Asia/Calcutta"
* Date = "2010-07-10"
* Time = "21:25:00"

The above UTC values would be converted to the desired LTC by:

* Applying the GMT offset for the selected Time Zone, which is +5 1/2 hours (+05:30)
	* 21:25:00 + 05:30 = 26:55:00 = 02:55:00 + 1 day
* Applying no Daylight Saving Time offset
	* India does not observe Daylight Saving Time
* Applying a +1 day Date offset, since the Time offset caused a "roll over"
	* 26:55:00 = 02:55:00 +1 day

##Example XML
### Set the Time Zone, Date, and Time

    :::XML
    <wap-provisioningdoc>
        <characteristic type="Clock" version="4.2" >
            <parm name="AutoTime" value="false"/>
            <parm name="TimeZone" value="GMT-5"/>
			<parm name="Date" value="2015-07-09"/>
            <parm name="Time" value="10:25:33"/>
        </characteristic>
    </wap-provisioningdoc>
	
###Set the NTP Server Interval

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Clock" version="4.2" >
			<parm name="AutoTime" value="true"/>
			<characteristic type="AutoTimeDetails">
				<parm name="SyncInterval" value="00:30:00"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>
	
###Set the NTP Server IP Address and Interval

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Clock" version="4.2" >
			<parm name="AutoTime" value="true"/>
			<characteristic type="AutoTimeDetails">
				<parm name="NTPServer" value="1.2.3.4"/>
				<parm name="SyncInterval" value="00:30:00"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>



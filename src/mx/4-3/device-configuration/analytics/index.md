---
title: Analytics Manager
description: The AnalyticsMgr controls collection of data by the Analytics Engine in the form of groups of metrics.
---

## About AnalyticsMgr

### Overview

The AnalyticsMgr controls collection of data by the Analytics Engine in the form of groups of metrics.

Zebra Android devices are equipped with an Analytics Engine that can collect information pertaining to the operation and health of a device. Such data can be used to detect devices that need attention or potentially could be used to detect trends that could allow problems to be prevented through preventative action.

AnalyticsMgr also controls which data is collected and how often, and whether collected data is stored on the device or in the Cloud.

### Main Functionality
 
* Enable or Disable all data collection by the Analytics Engine
* Control whether data is stored locally on the device or is sent to the Cloud
* Control which data is collected by groups of metrics:
	* WWAN Performance
	* WLAN Performance
	* Battery and CPU Status
	* System Information
	* GPS Information
* Control the frequency of data collection by levels:
	* None
	* Low
	* Medium
	* High

##Parameter Notes
###Analytics Action
Pivotal parm: No

Parm name: AnalyticsAction

Description: 

>This parm allows you to enable or disable the collection of data on the device by the Analytics Engine.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no change to whether the Analytics Engine collects data on the device.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the Analytics Engine to be enabled and hence to collect data on the device.</td>
  </tr>  
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the Analytics Engine to be disabled and hence to not collect data on the device.</td>
  </tr>
</table>
</div>	

###Transport Method
Pivotal parm: No

Parm name: TransportMethod

Description: 

>This parm allows you to control whether data collected by the Analytics Engine is stored on the device or sent to the Cloud.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no change to whether data is stored on the device or sent to the Cloud by the Analytics Engine.</td>
  </tr>
  <tr>
    <td>Select Cloud Transport</td>
    <td>"1"</td>
	<td>This value will cause the Analytics Engine to send data to the Cloud. A corresponding client capable of performing the transport must be present on the device for this option to function properly.</td>
  </tr>
  <tr>
    <td>Select File Transport</td>
    <td>"2"</td>
	<td>This value will cause the Analytics Engine to store data locally on the device in a file in the device file system.</td>
  </tr>
</table>
</div>	

###Group Action
Pivotal parm: Yes

Description: 

>This parm allows you to decide whether you want to configure which groups of metrics will be collected by the Analytics Engine and how frequently they are collected.

>The setting of one or more groups would not affect any other group that is not selected. Also, previously selected settings would be retained on the device. For example, the Analytics CSP could be used to collect WWAN Performance metrics and the other groups could be set to "Do not change". Then at another time, the CSP could be used to collect WLAN Performance metrics and the other groups could be set to "Do not change". Both WWAN and WLAN Performance metrics would then be set to collect data.


<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no change to which groups of metrics are collected by the Analytics Engine or how often they are collected.</td>
  </tr>
  <tr>
    <td>Configure Levels for Multiple Groups</td>
    <td>"1"</td>
	<td>This value will allow configuration of the groups of metrics to be collected by the Analytics Engine. Each group can configured independently of other groups, but all metrics in a group must be collected or not collected as a set. If collected, all metrics in a group have the same frequency.</td>
  </tr>
</table>
</div>	

####WWAN Performance
Settable if: Group Action is "Configure Levels for Multiple Groups"

Pivotal parm: No

Parm name: WWANPerf

Description: 

>This parm allows you to control whether the Analytics Engine collects data for the metrics in the WWAN Performance Group and, if so, at what frequency.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no change to whether this group of metrics is collected by the Analytics Engine or how often it is collected.</td>
  </tr>
  <tr>
    <td>None</td>
    <td>"1"</td>
	<td>This value will cause the Analytics Engine to skip collecting data for all of the metrics in the group, meaning that data collection is disabled.</td>
  </tr>
  <tr>
    <td>Low</td>
    <td>"2"</td>
	<td>This value will cause the Analytics Engine to collect data for all of the metrics in the group at low frequency. Data is collected at a 60 minute interval.</td>
  </tr>
  <tr>
    <td>Medium</td>
    <td>"3"</td>
	<td>This value will cause the Analytics Engine to collect data for all of the metrics in the group at medium frequency. Data is collected at a 30 minute interval</td>
  </tr>
  <tr>
    <td>High</td>
    <td>"4"</td>
	<td>This value will cause the Analytics Engine to collect data for all of the metrics in the group at high frequency. Data is collected at a 10 minute interval.</td>
  </tr>
</table>
</div>

####WLAN Performance
Settable if: Group Action is "Configure Levels for Multiple Groups"

Pivotal parm: No

Parm name: WLANPerf

Description: 

>This parm allows you to control whether the Analytics Engine collects data for the metrics in the WLAN Performance Group and, if so, at what frequency.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no change to whether this group of metrics is collected by the Analytics Engine or how often it is collected.</td>
  </tr>
  <tr>
    <td>None</td>
    <td>"1"</td>
	<td>This value will cause the Analytics Engine to skip collecting data for all of the metrics in the group, meaning that data collection is disabled.</td>
  </tr>
  <tr>
    <td>Low</td>
    <td>"2"</td>
	<td>This value will cause the Analytics Engine to collect data for all of the metrics in the group at low frequency. Data is collected at a 60 minute interval.</td>
  </tr>
  <tr>
    <td>Medium</td>
    <td>"3"</td>
	<td>This value will cause the Analytics Engine to collect data for all of the metrics in the group at medium frequency. Data is collected at a 30 minute interval</td>
  </tr>
  <tr>
    <td>High</td>
    <td>"4"</td>
	<td>This value will cause the Analytics Engine to collect data for all of the metrics in the group at high frequency. Data is collected at a 10 minute interval.</td>
  </tr>
</table>
</div>	

####Battery and CPU Status
Settable if: Group Action is "Configure Levels for Multiple Groups"

Pivotal parm: No

Parm name: SmartBattery

Description: 

>This parm allows you to control whether the Analytics Engine collects data for the metrics in the Battery and CPU Status Group and, if so, at what frequency.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no change to whether this group of metrics is collected by the Analytics Engine or how often it is collected.</td>
  </tr>
  <tr>
    <td>None</td>
    <td>"1"</td>
	<td>This value will cause the Analytics Engine to skip collecting data for all of the metrics in the group, meaning that data collection is disabled.</td>
  </tr>
  <tr>
    <td>Low</td>
    <td>"2"</td>
	<td>This value will cause the Analytics Engine to collect data for all of the metrics in the group at low frequency. Data is collected at a 60 minute interval.</td>
  </tr>
  <tr>
    <td>Medium</td>
    <td>"3"</td>
	<td>This value will cause the Analytics Engine to collect data for all of the metrics in the group at medium frequency. Data is collected at a 30 minute interval</td>
  </tr>
  <tr>
    <td>High</td>
    <td>"4"</td>
	<td>This value will cause the Analytics Engine to collect data for all of the metrics in the group at high frequency. Data is collected at a 10 minute interval.</td>
  </tr>
</table>
</div>

####System Information
Settable if: Group Action is "Configure Levels for Multiple Groups"

Pivotal parm: No

Parm name: SystemInfo

Description: 

>This parm allows you to control whether the Analytics Engine collects data for the metrics in the System Information Group and, if so, at what frequency.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no change to whether this group of metrics is collected by the Analytics Engine or how often it is collected.</td>
  </tr>
  <tr>
    <td>None</td>
    <td>"1"</td>
	<td>This value will cause the Analytics Engine to skip collecting data for all of the metrics in the group, meaning that data collection is disabled.</td>
  </tr>
  <tr>
    <td>Low</td>
    <td>"2"</td>
	<td>This value will cause the Analytics Engine to collect data for all of the metrics in the group at low frequency. Data is collected at a 60 minute interval.</td>
  </tr>
  <tr>
    <td>Medium</td>
    <td>"3"</td>
	<td>This value will cause the Analytics Engine to collect data for all of the metrics in the group at medium frequency. Data is collected at a 30 minute interval</td>
  </tr>
  <tr>
    <td>High</td>
    <td>"4"</td>
	<td>This value will cause the Analytics Engine to collect data for all of the metrics in the group at high frequency. Data is collected at a 10 minute interval.</td>
  </tr>
</table>
</div>	

####GPS Information
Settable if: Group Action is "Configure Levels for Multiple Groups"

Pivotal parm: No

Parm name: GPSInfo

Description: 

>This parm allows you to control whether the Analytics Engine collects data for the metrics in the GPS Information Group and, if so, at what frequency.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no change to whether this group of metrics is collected by the Analytics Engine or how often it is collected.</td>
  </tr>
  <tr>
    <td>None</td>
    <td>"1"</td>
	<td>This value will cause the Analytics Engine to skip collecting data for all of the metrics in the group, meaning that data collection is disabled.</td>
  </tr>
  <tr>
    <td>Low</td>
    <td>"2"</td>
	<td>This value will cause the Analytics Engine to collect data for all of the metrics in the group at low frequency. Data is collected at a 60 minute interval.</td>
  </tr>
  <tr>
    <td>Medium</td>
    <td>"3"</td>
	<td>This value will cause the Analytics Engine to collect data for all of the metrics in the group at medium frequency. Data is collected at a 30 minute interval</td>
  </tr>
  <tr>
    <td>High</td>
    <td>"4"</td>
	<td>This value will cause the Analytics Engine to collect data for all of the metrics in the group at high frequency. Data is collected at a 10 minute interval.</td>
  </tr>
</table>
</div>


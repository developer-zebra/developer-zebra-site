---
title: Cellular Manager
description: The CellularMgr allows you to control how a device's Cellular data connection is used.
---
## About CellularMgr

### Overview

The CellularMgr Feature Type allows you to control how a device's Cellular data connection is used. The CellularMgr Feature Type is supported only on Zebra Android devices that are equipped with Wireless Wide Area Network (WWAN) network adapters that enable access to a Cellular data network.

**Note:** If a device does not have a Wireless Wide Area Network (WWAN) network adapter, then it will not support the Cellular data connections and hence will not support the CellularMgr Feature Type. Attempting to use the CellularMgr Feature Type on such a device will cause an error to be returned in the Result XML document.

The CellularMgr Feature Type provides the ability to change the state of various options On or Off, thus controlling whether the capability is operational. The CellularMgr Feature Type also provides the ability to enable or disable use of the same options. Disabling an option means that the option cannot be turned On or Off by the device user or programmatically, using the CellularMgr Feature Type. Enabling an option means that the option can be turned On or Off by the device user or programmatically, using the CellularMgr Feature Type. You can think of Turn On/Off as being like a switch and the Enable/Disable as being like a cover over the switch. When the cover is closed, the position of the switch cannot be changed.

In Android, the Data Roaming Option determines whether a device is allowed to communicate over Cellular data networks other than the one provided by its configured "home" mobile operator. Communicating over such "foreign" networks is called roaming and can be quite convenient, allowing a device user to operate seamlessly in many different locations.  But, depending on the networks involved and the terms of a specific Cellular data service plan, turning on the Data Roaming Option significantly increase telecom expenses. Turning off the Data Roaming Option can help limit such costs but limiting Cellular data connections to the "home" network.

In Android, the Background Data Option determines whether applications that are capable of performing communications in the background (i.e. while they are not the current visible running foreground application) should do so over a Cellular data network. Turning on the Background Data Option allows background communications over a Cellular data network and can improve the experience of the device user by allowing applications to have data ready "when you ask for it". For example, an email application might download emails while the device user is using another application or when the device's screen is turned off. Turning off the Background Data Option tells applications to utilize Cellular data connections only when running in the foreground.

### Main Functionality

* Enable or disable Data Roaming
* Enable or disable Background Data
* Turn Data Roaming On or Off  
* Turn Background Data On or Off

##Parameter Notes
###Set the state of Data Roaming
Pivotal parm: No

Parm name: DataRoamingState

Description: 

>This parm allows you to change the state of the Data Roaming Option to On or Off.

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
	<td>This value (or the absence of this parm from the XML) will cause no change to the current state of the Data Roaming Option.</td>
  </tr>
  <tr>
    <td>Turn On</td>
    <td>"1"</td>
	<td>This value will cause the Data Roaming Option to be turned On, thus allowing Cellular data connections when roaming.</td>
  </tr>
  <tr>
    <td>Turn Off</td>
    <td>"2"</td>
	<td>This value will cause the Data Roaming Option to be turned Off, thus disallowing Cellular data connections when roaming.</td>
  </tr>
</table>
</div>	

###Set the state of Background Data
Pivotal parm: No

Parm name: BackgroundDataState

Description: 

>This parm allows you to change the state of the Background Data Option to On or Off.

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
	<td>This value (or the absence of this parm from the XML) will cause no change to the current state of the Background Data Option.</td>
  </tr>
  <tr>
    <td>Turn On</td>
    <td>"1"</td>
	<td>This value will cause the Background Data Option to be turned On, thus allowing applications to communicate in the background over Cellular data connections.</td>
  </tr>
  <tr>
    <td>Turn Off</td>
    <td>"2"</td>
	<td>This value will cause the Background Data Option to be turned Off, thus disallowing applications from communicating in the background over Cellular data connections.</td>
  </tr>
</table>
</div>	

###Enable/Disable Data Roaming
Pivotal parm: No

Parm name: DataRoamingUsage

Description: 

>This parm allows you to control whether the state of the Data Roaming Option can be changed.

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
	<td>This value (or the absence of this parm from the XML) will cause no change to whether the state of the Data Roaming Option can be changed.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the state of the Data Roaming Option to be unlocked allowing it to be changed, either by the device user or by the CellularMgr Feature Type.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the state of the Data Roaming Option to be locked, preventing it from being changed, either by the device user or by the CellularMgr Feature Type.</td>
  </tr>
</table>
</div>	

###Enable/Disable Background Data
Pivotal parm: No

Parm name: BackgroundDataUsage

Description: 

>This parm allows you to control whether the state of the Background Data Option can be changed.

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
	<td>This value (or the absence of this parm from the XML) will cause no change to whether the state of the Background Data Option can be changed.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the state of the Background Data Option to be unlocked allowing it to be changed, either by the device user or by the CellularMgr Feature Type.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the state of the Background Data Option to be locked, preventing it from being changed, either by the device user or by the CellularMgr Feature Type.</td>
  </tr>
</table>
</div>	

##Example XML
### Turn Off Data Roaming and Background Data
	:::xml
	<wap-provisioningdoc>
		<characteristic type="CellularMgr" version="4.3" >
			<parm name="DataRoamingState" value="2"/>
			<parm name="BackgroundDataState" value="2"/>
		</characteristic>
	</wap-provisioningdoc>


## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=CellularMgr&os=JB&embed=true"></iframe> 
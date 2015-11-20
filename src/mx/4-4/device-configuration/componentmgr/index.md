---
title: Component Manager
description: The ComponentMgr allows you to configure the state and usage of specific subsystems on the device, such as Ethernet.
---

## About ComponentMgr

### Overview

The ComponentMgr Feature Type allows you to configure the state and usage of specific subsystems on the device, such as Ethernet. State allows you to control whether the subsystem is On (active) or Off (inactive). Usage allows you to control (enable or disable) whether the state of a subsystem can be changed (turned On or Off) by the device user using the System Settings Menu or programmatically using the ComponentMgr Feature Type. If you try to use the ComponentMgr Feature Type to control the state of a subsystem for which usage is currently disabled, then an error will be returned in the Result XML document.

>**Note:** Not every device will support every subsystem. For example, some devices have no support for Ethernet. If you try to use the ComponentMgr Feature Type to control the state or usage of a subsystem that is not supported on a given device, then an error will be returned in the Result XML document.

### Main Functionality

* Turn Ethernet On or Off
* Enable or Disable Ethernet Usage

##Parameter Notes
###Ethernet Usage

Pivotal parm: No

Parm name: EthernetUsage

Description: 

>This parm allows you to control whether the state of the Ethernet Option can be changed.

>If the usage of Ethernet is Disabled and then Enabled, the state of Ethernet, either On or Off, will be the same as it was before it was Disabled.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to whether the Ethernet can be used.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the state of the Ethernet Option to be unlocked, allowing it to be changed, either by the device user or by the ComponentMgr Feature Type.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the state of the Ethernet Option to be locked, preventing it from being changed, either by the device user or by the ComponentMgr Feature Type.</td>
  </tr>
</table>
</div>	

###Ethernet State

Pivotal parm: No

Parm name: EthernetState

Description: 

>This parm allows you to change the state of the Ethernet Option to On or Off.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to whether the Ethernet Option is turned On or Off.</td>
  </tr>
  <tr>
    <td>Turn On</td>
    <td>"1"</td>
	<td>This value will cause the Ethernet Option to be turned On, thus allowing the use of an Ethernet connection on the device.</td>
  </tr>
  <tr>
    <td>Turn Off</td>
    <td>"2"</td>
	<td>This value will cause the Ethernet Option to be turned Off, thus disallowing the use of an Ethernet connection on the device.</td>
  </tr>
</table>
</div>	

##Example XML

###Enabling Ethernet Usage and Turning On Ethernet

####Input

	:::XML
	<wap-provisioningdoc>
		<characteristic type="ComponentMgr" version="4.4">
			<parm name="EthernetUsage" value="1"/>
			<parm name="EthernetState" value="1"/>
		</characteristic>
	</wap-provisioningdoc>

####Error Output
	
The following XML is an example of an error that is returned when trying to set Ethernet features on a device that does not support Ethernet functionality.

	:::XML
	<wap-provisioningdoc>
		<characteristic-error desc="exception" type="ComponentMgr" version="4.4" >
			<parm-error	name="EthernetUsage" desc="Error in enabling Ethernet UI" value="1" />
			<parm-error name="EthernetState" desc="Failed to Turn On. Ethernet is disabled by admin" value="1" />
		</characteristic-error>
	</wap-provisioningdoc> 

##Queries

###Get the Ethernet Usage Value

This query will indicate if the state of the Ethernet Option can be changed. 

####Input

	:::XML
	<wap-provisioningdoc>
		<characteristic type="ComponentMgr">
			<parm-query name="EthernetUsage"/>
		</characteristic>
	</wap-provisioningdoc>

####Output

	:::XML
	<wap-provisioningdoc>
		<characteristic type="ComponentMgr" version="4.4">
			<parm name="EthernetUsage" value="1"/>
		</characteristic>
	</wap-provisioningdoc>


###Get the Ethernet State Value

This query will indicate if the Ethernet State of the device is currently set to On or Off.

####Input

	:::XML
	<wap-provisioningdoc>
		<characteristic type="ComponentMgr">
			<parm-query name="EthernetState"/>
		</characteristic>
	</wap-provisioningdoc>

####Output

	:::XML
	<wap-provisioningdoc>
		<characteristic type="ComponentMgr" version="4.4">
			<parm name="EthernetState" value="1"/>
		</characteristic>
	</wap-provisioningdoc>

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=ComponentMgr&os=JB&embed=true"></iframe> 
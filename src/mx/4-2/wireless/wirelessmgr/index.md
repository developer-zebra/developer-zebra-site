---
title: Wireless Manager
description: The WirelessMgr turns wireless radios On or Off, including Bluetooth, GPRS, NFC, etc.
---
## About WirelessMgr

### Overview

The WirelessMgr turns wireless radios On or Off, including Bluetooth, GPRS, NFC, etc.

Android devices often support a variety of wireless communication interfaces, including bidirectional interfaces, such as Wireless Wide Area Network (WWAN/cellular data), Bluetooth, and Near Field Communications (NFC), and including unidirectional (receive only) interfaces, such as the Global Positioning System (GPS). Wireless radios that can transmit may significantly affect battery life if turned on unnecessarily and may also need to be turned off in certain situations (e.g. when on an airplane or in "incendiary" environments). Wireless radios that can only receive may affect battery life if turned on unnecessarily.

The WirelessMgr Feature allows you to prevent the state of various wireless radios from being changed, this providing a sort of "lock" to prevent the state from being changed by the device user.

### Main Functionality

* Enable or Disable changing the state (on/off) of various wireless radios
	* Bluetooth

##Parameter Notes
###Enable/Disable Bluetooth
Pivotal parm: No

Parm name: Bluetooth

Description: 

>This parm will allow you to control whether the state (On/Off) of the Bluetooth radio can be changed.

>**Note:** On JellyBean devices, this parm allows you to change the state of the Bluetooth radio by Turning it On or Off. 

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to be made as to whether the state of the Bluetooth radio can be changed.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will allow changes to be made to the state of the Bluetooth radio. On JellyBean devices, this will cause the Bluetooth radio to be Turned On.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will prevent changes from being made to the state of the Bluetooth radio. On JellyBean devices, this will cause the Bluetooth radio to be Turned Off.</td>
  </tr>
</table>
</div>	


##Example XML
###Enable Changes to be made to Bluetooth State

>**Note:** In JellyBean devices, this XML will change the state of the Bluetooth radio by Turning it On.

	:::xml
	<wap-provisioningdoc>
		<characteristic type="WirelessMgr" version="4.3" >
			<parm name="Bluetooth" value="1"/>
		</characteristic>
	</wap-provisioningdoc>

###Disable Changes from being made to Bluetooth State

>**Note:** In JellyBean devices, this XML will change the state of the Bluetooth radio by Turning it Off.

	:::xml
	<wap-provisioningdoc>
		<characteristic type="WirelessMgr" version="4.3" >
			<parm name="Bluetooth" value="2"/>
		</characteristic>
	</wap-provisioningdoc>
	

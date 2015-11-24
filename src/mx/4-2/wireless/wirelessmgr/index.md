---
title: Wireless Manager
description: The WirelessMgr allows you to turn various wireless radios On or Off, like Bluetooth, GPRS, NFC, etc.
---
## About WirelessMgr

### Overview

Android devices often support a variety of wireless communication interfaces, including bidirectional interfaces, such as Wireless Wide Area Network (WWAN/cellular data), Bluetooth, and Near Field Communications (NFC), and including unidirectional (receive only) interfaces, such as the Global Positioning System (GPS). Wireless radios that can transmit may significantly affect battery life if turned on unnecessarily and may also need to be turned off in certain situations (e.g. when on an airplane or in "incendiary" environments). Wireless radios that can only receive may affect battery life if turned on unnecessarily.

The WirelessMgr Feature Type allows you to turn various wireless radios On or Off, thus allowing them to use battery power only when they are needed and allowing you to prevent radios from transmitting when it would be undesirable or unsafe to do so. The WirelessMgr Feature Type also allows you to prevent the state of various wireless radios from being changed, this providing a sort of "lock" to prevent the state from being changed by the device user.

### Main Functionality

* Turn selected wireless radios On or Off
	* Bluetooth
	* Near Field Communication (NFC)
	* Global Positioning System (GPS)
	* Wireless Wide Area Network (WWAN/cellular data)
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

###Turn On/Off Bluetooth
Pivotal parm: No

Parm name: BluetoothState

Description: 

>This parm allows you to change the state of the Bluetooth radio by Turning it On or Off. Turning the Bluetooth radio On would allow the device to connect to other to other Bluetooth devices that have previously been paired or would allow the setup of a new pairing.

>**Note:** This parm is only available from KitKat onwards. It is not supported on JellyBean devices.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to the state (On/Off) of the Bluetooth radio.</td>
  </tr>
  <tr>
    <td>Turn On</td>
    <td>"1"</td>
	<td>This value will cause the Bluetooth radio to be Turned On.</td>
  </tr>
  <tr>
    <td>Turn Off</td>
    <td>"2"</td>
	<td>This value will cause the Bluetooth radio to be Turned Off.</td>
  </tr>
</table>
</div>	

###Turn On/Off NFC
Pivotal parm: No

Parm name: NFCState

Description: 

>This parm allows you to change the state of the Near Field Communications (NFC) radio by Turning it On or Off. Turning the NFC radio On would allow the device to communicate with NFC tags by reading or writing them when they are in near proximity to the device.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to be made to the state (On/Off) of the NFC radio.</td>
  </tr>
  <tr>
    <td>Turn On</td>
    <td>"1"</td>
	<td>This value will cause the NFC radio to be Turned On.</td>
  </tr>
  <tr>
    <td>Turn Off</td>
    <td>"2"</td>
	<td>This value will cause the NFC radio to be Turned Off.</td>
  </tr>
</table>
</div>	

###Turn On/Off GPS
Pivotal parm: No

Parm name: GPSState

Description: 

>This parm allows you to change the state of the Global Positioning System (GPS) radio by Turning it On or Off. Turning the GPS radio On would allow the device to receive information from GPS satellites and thereby determine the position of the device.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to be made to the state (On/Off) of the GPS radio.</td>
  </tr>
  <tr>
    <td>Turn On</td>
    <td>"1"</td>
	<td>This value will cause the GPS radio to be Turned On.</td>
  </tr>
  <tr>
    <td>Turn Off</td>
    <td>"2"</td>
	<td>This value will cause the GPS radio to be Turned Off.</td>
  </tr>
</table>
</div>	

###Turn On/Off WWAN
Pivotal parm: No

Parm name: WWANState

Description: 

>This parm allows you to change the state of the Wireless Wide Area Network (WWAN) cellular radio by Turning it On or Off. Turning the WWAN radio On would allow the device to establish a cellular data connection and would also enable cellular voice connections, if supported.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to be made to the state (On/Off) of the WWAN radio.</td>
  </tr>
  <tr>
    <td>Turn On</td>
    <td>"1"</td>
	<td>This value will cause the WWAN radio to be Turned On.</td>
  </tr>
  <tr>
    <td>Turn Off</td>
    <td>"2"</td>
	<td>This value will cause the WWAN radio to be Turned Off.</td>
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
	
###Turn On All Radios (For JellyBean Devices)

	:::xml
	<wap-provisioningdoc>
		<characteristic type="WirelessMgr" version="4.3" >
			<parm name="Bluetooth" value="1"/>
			<parm name="NFCState" value="1"/>
			<parm name="GPSState" value="1"/>
			<parm name="WWANState" value="1"/>
		</characteristic>
	</wap-provisioningdoc>

###Turn Off All Radios (For JellyBean Devices)
	:::xml
	<wap-provisioningdoc>
		<characteristic type="WirelessMgr" version="4.3" >
			<parm name="Bluetooth" value="2"/>
			<parm name="NFCState" value="2"/>
			<parm name="GPSState" value="2"/>
			<parm name="WWANState" value="2"/>
		</characteristic>
	</wap-provisioningdoc>
	
###Turn On All Radios (For KitKat Devices)

	:::xml
	<wap-provisioningdoc>
		<characteristic type="WirelessMgr" version="4.3" >
			<parm name="BluetoothState" value="1"/>
			<parm name="NFCState" value="1"/>
			<parm name="GPSState" value="1"/>
			<parm name="WWANState" value="1"/>
		</characteristic>
	</wap-provisioningdoc>

###Turn Off All Radios (For KitKat Devices)
	:::xml
	<wap-provisioningdoc>
		<characteristic type="WirelessMgr" version="4.3" >
			<parm name="BluetoothState" value="2"/>
			<parm name="NFCState" value="2"/>
			<parm name="GPSState" value="2"/>
			<parm name="WWANState" value="2"/>
		</characteristic>
	</wap-provisioningdoc>


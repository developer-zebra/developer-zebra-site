---
title: USB Manager
description: The UsbMgr allows you to control which USB functions can be used on the device.
---
## About UsbMgr

### Overview

Android devices generally have one or more Universal Serial Bus (USB) ports that can be used for various purposes. A given USB port could implement "Host" mode, which is used to connect various USB peripherals (e.g. mice, keyboards, USB storage devices) to the Android device. A given USB port could implement "Peripheral" mode, which is used to connect the Android device to a Host, such as a PC.  A given USB port could implement On The Go (OTG) support, which can act in either "Host" or "Peripheral" mode, based on the cable connected.

The UsbMgr Feature Type allows you to control which USB functions can be used on the device.

### Main Functionality

* Allow or prevent use of the following:
	* All modes and functions of USB
	* External USB storage devices
	* Connection to a PC via (Android Debug Bridge) ADB
	* All access by a PC to device storage via USB
	* Access by a PC to device storage using USB Mass Storage (UMS) via USB
	* Access by a PC to device storage using Media Transfer Protocol (MTP) via USB
	* Access by a PC to device storage using Picture Transfer Protocol (PTP) via USB

##Parameter Notes
###USB Module Usage
Pivotal parm: Yes

Description: 

>This parm allows you to specify whether the use of USB module will be allowed. Setting this parm would cause all of the USB features to be enabled or disabled.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to be made as to whether or not the USB module can be used.  This value will also cause other parms to be presented to allow individual USB functions to be controlled.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause usage of the USB module to be allowed.  This value will also cause other parms to be presented to allow individual USB functions to be controlled.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause all usage of the USB module to be prevented.  This value will also prevent other parms from being presented since individual USB functions cannot be used if all usage of the USB module is being prevented.</td>
  </tr>
</table>
</div>	

###USB External Storage Usage
Settable if: The "USB Module Usage" value is not "Disable" 

Pivotal parm: No

Parm name: UsbExternalStorageUsage

Description: 

>This parm allows you to control whether the use of USB External Storage devices will be allowed. When allowed, a USB External Storage device could have to be connected via a USB port that supports Host mode or via an OTG USB port with an OTG adapter cable or OTG compliant storage device. Use of USB External Storage could represent a security risk since it could be used as a path to extract sensitive data from a device or to inject unwanted data or applications into a device.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to be made as to whether or not use of USB External Storage will be allowed.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause use of USB External Storage to be allowed.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause use of USB External Storage to be prevented.</td>
  </tr>
</table>
</div>	

###USB ADB Usage
Settable if: The "USB Module Usage" value is not "Disable" 

Pivotal parm: No

Parm name: UsbADBUsage

Description: 

>This parm allows you to control whether the use of the Android Debug Bridge (ADB) Mode will be allowed. When allowed, a PC could be connected to the device via a USB port that supports Peripheral mode or via an OTG USB port.  ADB is a line tool that allows communication between the PC and the Android device and can be used to copy files, install apps, run shell commands, etc. Use of ADB could represent a security risk since it could be used as a path to extract sensitive data from a device, to inject unwanted data or applications into a device, or to remove or modify the operation of important applications on a device.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to be made as to whether or not USB ADB mode can be used.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause use of USB ADB mode to be allowed.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause use of USB ADB mode to be prevented.</td>
  </tr>
</table>
</div>	

###Access device storage from PC via USB
Settable if: The "USB Module Usage" value is not "Disable" 

Pivotal parm: Yes

Description: 

>This parm allows you to control whether the use of all direct methods of access device storage from PC via USB is allowed. This controls the use of USB Mass Storage (UMS), Media Transfer Protocol (MTP), and Picture Transfer Protocol (PTP) but does not control the use of ADB mode, which can be controlled separately. When these modes are allowed, a PC could be connected to the device via a USB port that supports Peripheral mode or via an OTG USB port. Once connected, such a PC could browse exposed portions of the device file system, copy files to or from the device, delete files, etc. Use of these modes could represent a security risk since it could be used as a path to extract sensitive data from a device, to inject unwanted data or applications into a device, or to delete important information from a device.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to be made as to whether or not all of the methods to access device storage from a PC via USB can be used.  This value will also cause other parms to be presented to allow individual modes to be controlled.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause all of the methods to access device storage from a PC via USB to be allowed.  This value will also prevent other parms from being presented since individual modes cannot be controlled if all modes are being allowed.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause all of the methods to access device storage from a PC via USB to be prevented. This value will also prevent other parms from being presented since individual modes cannot be controlled if all modes are being prevented.</td>
  </tr>
</table>
</div>	

####Access device storage from PC via USB UMS
Settable if: The "USB Module Usage" value is not "Disable" *AND* the "Access device storage from PC via USB" value is not "Enable" or "Disable"

Pivotal parm: No

Parm name: UsbUMSAccessDeviceStorageUsage

Description: 

>This parm allows you to control whether the use of USB Mass Storage (UMS) is allowed.  When this mode is allowed, a PC could be connected to the device via a USB port that supports Peripheral mode or via an OTG USB port. Once connected, such a PC could browse exposed portions of the device file system, copy files to or from the device, delete files, or even format an entire storage volume.  Use of this mode could represent a security risk since it could be used as a path to extract sensitive data from a device, to inject unwanted data or applications into a device, or to delete important information from a device.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to be made as to whether or not access to the device storage from a PC via USB UMS can be used.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause access to the device storage from a PC via USB UMS to be allowed.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause access to the device storage from a PC via USB UMS to be prevented.</td>
  </tr>
</table>
</div>

####Access device storage from PC via USB MTP
Settable if: The "USB Module Usage" value is not "Disable" *AND* the "Access device storage from PC via USB" value is not "Enable" or "Disable"

Pivotal parm: No

Parm name: UsbMTPAccessDeviceStorageUsage

Description: 

>This parm allows you to control whether the use of Media Transfer Protocol (MTP) is allowed. When this mode is allowed, a PC could be connected to the device via a USB port that supports Peripheral mode or via an OTG USB port. Once connected, such a PC could browse exposed portions of the device file system, copy files to or from the device, or delete files. Use of this mode could represent a security risk since it could be used as a path to extract sensitive data from a device, to inject unwanted data or applications into a device, or to delete important information from a device.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to be made as to whether or not access to the device storage from a PC via USB MTP can be used.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause access to the device storage from a PC via USB MTP to be allowed.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause access to the device storage from a PC via USB MTP to be prevented.</td>
  </tr>
</table>
</div>

####Access device storage from PC via USB PTP
Settable if: The "USB Module Usage" value is not "Disable" *AND* the "Access device storage from PC via USB" value is not "Enable" or "Disable"

Pivotal parm: No

Parm name: UsbPTPAccessDeviceStorageUsage

Description: 

>This parm allows you to control whether the use of Picture Transfer Protocol (PTP) is allowed.  When this mode is allowed, a PC could be connected to the device via a USB port that supports Peripheral mode or via an OTG USB port. Once connected, such a PC could browse exposed portions of the device file system, copy files to or from the device, or delete files. Use of this mode could represent a security risk since it could be used as a path to extract sensitive data from a device, to inject unwanted data or applications into a device, or to delete important information from a device.

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
	<td>This value (or the absence of this parm from the XML) will cause changes to be made as to whether or not access to the device storage from a PC via USB PTP can be used.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause access to the device storage from a PC via USB PTP to be allowed.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause access to the device storage from a PC via USB PTP to be prevented.</td>
  </tr>
</table>
</div>

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=UsbMgr&os=JB&embed=true"></iframe> 
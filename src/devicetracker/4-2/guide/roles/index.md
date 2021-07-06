---
title: User Roles
layout: guide.html
product: Device Tracker
productversion: "4.2"
---

## Overview

Device Tracker features and functionality depend on the role of the user logged in: Associate, Manager, or Administrator.

## <!-- -->

## Administrator Role

Administrators track devices across multiple sites. The Administrator role encompasses both the Manager and Associate roles.<br>

Features and functions of administrators:

- Configuration:<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="../config/#webportal">Create/Manage administrator and manager user logins</a><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="../config/#siteaccesspointanddevicedata">Import Site and AP data with friendly name (via .CSV)</a><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="../config/#siteaccesspointanddevicedata">Import device data with friendly name and site assignment (via .CSV)</a><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="../config/#siteaccesspointanddevicedata">Delete device data (via .CSV)</a><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="../config/#devicecheckout">Enable check-out/check-in feature to associate users to devices for accountability _(optional)_</a><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="../config/#devicecheckout">Configure prefix for check-out barcode _(optional)_</a><br>

- View:<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="../mgmt/#administration">Dashboard to view corporate-level data across all sites</a><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="../use/#devicecheckout">Use device check-out/check-in _(optional)_</a><br>

- Includes all Manager and Associate actions
  <br><br>

## Manager Role

Managers track devices within a single site or location. The Manager role encompasses the Associate role.
<br>
Features and functions of managers:

- View:<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="../mgmt/#administration">Dashboard on device to view site-level data</a><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="../mgmt/#administration">View list of misplaced or at-risk devices for retrieval</a>
  <br>

- Actions:<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ **[Set To Find](../use/#markadevicetobefound) –** marks the device to be found; initiates the finding process<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ **[Recommission](../use/#decommissionrecommissiondevice) –** marks the device **In Service** to place into the active device pool, the collection of devices with active server communication<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ **[Decommission](../use/#decommissionrecommissiondevice) –** removes the device from the active device pool<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ **[View Details](../mgmt/#administration) –** provides device data: friendly name, device model, serial number, last connected AP, battery level, battery status, device state, site name, last reported, display on, note<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ **[Add/Edit a note](../use/#addeditanote) -** add text to capture the reason for decommissioning a device, for example: “device screen damaged”.
  <br>

- Includes all Associate actions<br><br>

## Associate Role

Associates have the capability to find misplaced devices.
<br>
Features and functions of associates:<br>

- No login required
- [Actions:](../use) <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ View list of devices to find (**To Be Found** device list)<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ Locate a device using last connected AP location, visual Bluetooth proximity indicator and play sound<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ Mark device as **Found** or **Cannot Find**<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ Use device check-out/check-in _(optional)_

<br>
<br>
<!-- -->
-----

## See Also

- [Install](../setup)
- [Configuration](../config)
- [Device Management](../mgmt)
- [Device Tracking](../use)

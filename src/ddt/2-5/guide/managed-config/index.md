---
title: Managed Configurations
layout: guide.html
product: Device Diagnostic Tool
productversion: "2.5"
---

## Overview

Features from Device Diagnostic Tool (DDT) are remotely configured with the use of Managed Configurations developed by Google and the Android community. A Zebra schema defines the DDT features available for consumption by an EMM (Enterprise Mobility Management) system, providing the information necessary to present the corresponding data-driven UI. This mechanism integrates DDT remote configuration within the EMM for seamless operation and allows Zebra to release a new schema as soon as new features are available for use. DDT and the Zebra schema are available from the Google Play Store and must be used together to configure Zebra Android devices. 

## Requirements

Requirements for use of Managed Configurations with DDT:
* Android 10 or Android 11
* DDT with the Zebra schema downloaded from the Google Play Store
* DDT installed on the device and _launched at least once_ prior to using managed configuration. See [Launch DDT via OEMConfig](#launchddtviaoemconfig) below.
* An EMM which supports Android's Managed Configurations.

### Launch DDT via OEMConfig

One of the requirements for use of Managed Configuration is DDT must be launched at least once. Instructions follow on how DDT can be launched remotely with [OEMConfig](/oemconfig).

Prerequisites: 
* DDT 2.5 or higher is installed on the device
* [OEMConfig](/oemconfig/setup) is installed on the device

Instructions to launch DDT with OEMConfig:
1. In OEMConfig, open Device Administration Configuration.
2. Select **Action** > **Submit XML.**
3. Under Submit XML input field, enter the text below to launch DDT:

        <wap-provisioningdoc>
        <characteristic type="AppMgr">
        <parm name="Action" value="LaunchApplication" />
        <parm name="ApplicationName" value="Diagnostic Tool" />
        </characteristic>
        </wap-provisioningdoc>

4. Apply OEMConfig configuration to the device. 
After DDT launches on the device, Managed Configurations can be applied.

## General EMM Setup

The EMM retrieves the schema and presents the managed configuration UI based on the data defined in the schema. The UI may vary depending on the EMM. General instructions follow for EMM setup:

1. Point the EMM console to the Zebra schema to display data-driven UI for configuring Zebra devices.
2. Configure app restrictions using Managed Configurations as described in the schema. See [App Restrictions](#apprestrictions) section that follows.
3. Push the managed configurations to the device(s).


## App Restrictions

There are 2 [modes of operations](../usage/#overview) for DDT: admin mode and user mode. Currently only admin mode is supported with managed configuration to schedule recurring tests and configure log uploads.

### Admin Mode

In admin mode, the DDT app restrictions are as follows:
1. **[Test Plan](#testplan) -** Create or modify a test plan that includes Schedule, Activity, and Delivery.
2. **[Test Log Retention](#testlogretention) -** Select whether to keep or discard test plans on device after automatic upload to server.

## App Restriction Options

This section provides the options available for each app restriction.

### Test Plan

Test Plan creates or modifies a test plan that includes the weekly test schedule, specifying the test to perform and configuring the server to receive the test results.

<table class="facelift" align="center" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Restriction Name</th>
    <th>Option</th>
    <th>Description</th>
    <th>Value(s)</th>
  </tr>

  <tr>
    <td rowspan="2">Schedule</td>
    <td>Test Day</td>
    <td>Day of the week to automatically perform the weekly test</td> 
    <td>• Monday<br>• Tuesday<br>• Wednesday<br>• Thursday<br>• Friday<br>• Saturday<br>• Sunday</td>
  </tr>
  
  <tr>
    <td>Test Time</td>
    <td>Designated time to run the test and upload the result log file</td>
    <td>[Time in HH:MM 24-hour format] </td>
  </tr>

  <tr>
    <td>Activity</td>
    <td>System to Test</td>
    <td>Test to perform on the device</td> 
    <td>• Bluetooth<br>• WiFi<br>• Battery<br>• WWAN<br>• SD card</td>
  </tr>
  
  <tr>
    <td rowspan="4">Delivery</td>
    <td>Protocol</td>
    <td>Protocol used by the server that receives DDT file uploads</td> 
    <td>FTP</td>
  </tr>

  <tr>
    <td>IP Address</td>
    <td>IP address for the user to access the DDT upload server</td> 
    <td>[valid IP address]</td>
  </tr>

  <tr>
    <td>User Name</td>
    <td>User name to access the DDT upload server</td> 
    <td>[valid user name]</td>
  </tr>

  <tr>
    <td>Password</td>
    <td>Password to access the DDT upload server</td> 
    <td>[valid password]</td>
  </tr>

</table>


### Test Log Retention

Test Log Retention specifies the action to take for all test plan files on the device after uploading them to the designated server.

<table class="facelift" align="center" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Restriction Name</th>
    <th>Description</th>
    <th>Value</th>
  </tr>

  <tr>
    <td rowspan="2">Test Log Retention</td>
    <td>Retain or discard test plan files on device after file upload to server</td>
    <td>• Keep after upload<br>• Delete after upload</td> 
  </tr>
</table>

<br><br>

---

## See Also

* [OEMConfig](/oemconfig) - for launching apps remotely

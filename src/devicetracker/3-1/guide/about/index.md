---
title: About Device Tracker
layout: guide.html
product: Device Tracker
productversion: '3.1'
---

## Overview

Device Tracker is a centralized software solution that tracks and finds misplaced devices within a facility to help prevent inventory shrinkage. It leverages existing WiFi network infrastructure, Bluetooth Low Energy (BLE) and audio chirping to locate devices. Device Tracker continuously monitors device presence, tracking status, connection state, and battery charge to ensure visibility of devices prior to reaching a disconnected or loss of battery state.

When locating a device, Device Tracker identifies the general area where the misplaced device is located based on the Access Point (AP) it is connected to within the facility.  The BLE proximity indicator uses Bluetooth beacon transmissions to determine the approximate location of the misplaced device in comparison to the finding device.  Chirping audio can be played on the misplaced device to further determine its specific location. 

## New in Device Tracker 2.3.1
* New feature on the server to toggle BLE for device proximity tracking.
* New BLE proximity indicator to determine proximity of device based on BLE beacon transmissions.
* Ability to delete "Never connected" devices in the web portal that have been uploaded but never connected to the server. This option helps to remove devices uploaded to the console via .CSV file in error. 
* Self-signed certificates are now supported to help simplify deployment of product demos and trials.
* Enhanced Device Tracker mobile client with support for Google API 28, providing greater consistency of application user interfaces and icons.

## Version History

<table class="facelift" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th style="text-align:center">Solution<br>Release<br>Version</th>
    <th style="text-align:center">Server/<br>Client</th>
    <th style="text-align:center">Version</th>
    <th style="text-align:center">New Features/Updates</th>
  </tr>
  <tr>
    <td style="text-align:center" rowspan="2">2.3.1</td>
    <td style="text-align:center">Server</td>
    <td style="text-align:center">2.3.1</td>
    <td style="text-align:left">• New feature to toggle BLE for device proximity tracking.<br>• Ability to delete "Never connected" devices in the web portal that have been uploaded but never connected to the server. This option helps to remove devices uploaded to the console via .CSV file in error. <br>• Self-signed certificates are now supported to help simplify deployment of product demos and trials.</td>
  </tr>
  <tr>
    <td style="text-align:center">Client</td>
    <td style="text-align:center">2.3</td>
    <td style="text-align:left">• New BLE device proximity indicator to locate a misplaced device by leveraging BLE device-to-device beacon transmissions.<br>• Enhanced Device Tracker mobile client with support for Google API 28, providing greater consistency of application user interfaces and icons.</td>
  </tr>
   <tr>
    <td style="text-align:center" rowspan="2">2.2.1</td>
    <td style="text-align:center">Server</td>
    <td style="text-align:center">2.2.1</td>
    <td style="text-align:left">Added method to start server background services to run on startup and without a logged-in user.</td>
  </tr>
  <tr>
    <td style="text-align:center">Client</td>
    <td style="text-align:center">2.2.1</td>
    <td style="text-align:left">New Android P devices supported: TC52, TC72, PS20 </td>
  </tr>
  <tr>
    <td style="text-align:center" rowspan="2">2.1</td>
    <td style="text-align:center">Server</td>
    <td style="text-align:center">2.1</td>
    <td style="text-align:left">• <b>Disconnect Threshold Time</b> removed from Application Configuration screen and integrated with <b>Reporting Frequency</b>. <br>• Ability to upgrade server from previous version to current version without the need to reinstall. </td>
  </tr>
  <tr>
    <td style="text-align:center">Client</td>
    <td style="text-align:center">2.1</td>
    <td style="text-align:left">• New devices supported: ET50/ET55, WT6000, TC25, ET51/ET56, TC20, MC9300, TC8300, EC30, L10 Android <br>• Known issues fixed:<br>   1. During network congestion, when pressing the back button in the proximity screen it takes about 10 seconds to show a status message.<br>   2. When a user clicks on the play sound button before 5 minutes (reporting interval) has elapsed after marking a misplaced device as "To Be Found" in ZDVC console, the proper message is not displayed on the finding device. </td>
  </tr>
  <tr>
    <td style="text-align:center" rowspan="2">1.0</td>
    <td style="text-align:center">Server</td>
    <td style="text-align:center">2.0</td>
    <td style="text-align:left">Initial release</td>
  </tr>
  <tr>
    <td style="text-align:center">Client</td>
    <td style="text-align:center">1.0</td>
    <td style="text-align:left">Initial release</td>
  </tr>
</table>

<br>

##Main Features

Device Tracker main features:
*	General location information for all supported WiFi devices based on connected AP
* Real-time device proximity tracking with BLE
*	Misplaced device prevention by monitoring low power and disconnection state
*	Centralized dashboard to easily view device information: WiFi connectivity (connection status, connected AP), tracking status (To Be Found, Being Found, Found, Cannot Find), battery information (percent battery remaining, charging status), and other information from deployed Zebra mobile computers. 
 * Filter and sort data
 * Search by status, AP name, device name, device model, device serial number, battery state, and tags
 * Device tagging for easier organization, identification, and tracking
 * Admin action to mark device "To be found", which adds the device to the search list on the associate's client app
*	Find and retrieve misplaced devices with client app using audio sound
*	Secure communications between the Device Tracker Client application and server
*	Friendly name assignment for APs and devices for ease of identification and tracking
*	Report generation to export data 
* Capability for device staging with the use of an EMM such as Zebra's [StageNow](/stagenow/latest/about) with [Battery Manager CSP](/mx/batterymgr).


##How it works

The Device Tracker client app registers the device with the server and reports device information based on the defined reporting frequency from the server settings. The Admin uploads a list of friendly names of Access Points within the facility, which identifies the general area or zone where the device is located while connected to the AP. From the web portal, the Admin marks the misplaced device "To be found". On the associate’s device, the Device Tracker client displays a list of devices to be found. The associate selects the target device to find from the list and uses the AP friendly name (if configured) to identify the general area where the device is last seen. If BLE is enabled, a proximity meter appears indicating how close or far the user is to the misplaced device. <!--"Out of Bluetooth range" message appears if the user walks beyond the distance which the Bluetooth signal can be received from the target device.--> Audio can be played on the target device to further locate it by sound. 

The web portal provides a dashboard for administrators to monitor the status of all tracked devices, identifying any misplaced devices. The last known status is provided from devices so action can be taken to prevent lost or misplaced devices.


##Supported Devices
Supported Devices (including GMS and non-GMS versions):

<table class="facelift" align="center" style="width:80%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Device</th>
    <th style="text-align:center">Android 6.x <br>(Marshmallow)</th>
    <th style="text-align:center">Android 7.x <br>(Nougat)</th>
    <th style="text-align:center">Android 8.x <br>(Oreo)</th>
     <th style="text-align:center">Android 9.x <br>(Pie)</th>
  </tr>
  <tr>
    <td>EC30</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>ET50/ET55</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>ET51/ET56</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>L10 Android</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>MC3300 </td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>MC9300</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>PS20</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>TC20</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>TC25</td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>TC51/TC51-HC/TC56 </td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>TC52</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>TC57</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>TC70X/TC75X</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>TC72</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>TC77</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>TC8300</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>WT6000</td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
  </tr>
</table>




  
<br>
<br>

-----

## See Also

* [Install & Setup](../setup)
* [Admin View](../admin)
* [Device Tracking](../mgmt)
* [Configuration](../config)
* [Troubleshooting & FAQ](../troubleshooting)

---
title: About Device Tracker
layout: guide.html
product: Device Tracker
productversion: '3.0'
---

<div class="alert alert-danger alert-dismissible fade in" role="alert"><b>Important information about Device Tracker:</b> <br>Device Tracker 3.0 or higher contains significant changes transforming the software to a cloud-based solution. <a href="/devicetracker/2-3/guide/about">Device Tracker Basic 2.3.1</a> or lower (the on-premise version) cannot be upgraded to Device Tracker 3.0 since they are incompatible. <br><br>For access to Device Tracker 3.0, contact your local Zebra account manager.
</div>

## Overview

Device Tracker is a cloud-based scalable solution that easily tracks Zebra Android mobile devices, finds missing devices and helps prevent device inventory shrinkage. Misplaced or lost devices within a facility are tracked by leveraging existing Wi-Fi network infrastructure and utilizing Bluetooth technology and audio chirping to locate devices. When locating a device, Device Tracker identifies the general area where the device is located based on the Access Point (AP) it is connected to within the facility. The visual proximity indicator relies on Bluetooth beacon transmissions to determine the approximate location of the device. Audio can be played on the misplaced device to further pinpoint its location. 
<br><br>
Main features:
<br>

* Cloud-based scalable solution hosted and maintained by Zebra.
* Support for up to 100K devices with multi-site capability.
* Support for central administrator, site manager, and site associate roles. 
* Registration of sites and access points with friendly names to easily identify device location.
* Registration of devices to assigned site with user friendly names for simple device identification. 
* Web portal for centralized administration of system settings and admin and site manager login credentials.
* Simple to deploy – install and configure the mobile application using StageNow and Enterprise Mobility Management tools.
* Device dashboard for administrator to centrally track devices across multiple sites with ability to view at site-level.
* Device dashboard for site manager to track devices at the site-level and mark a misplaced or at-risk (e.g. low battery) device for retrieval.
* Easily find a misplaced device with the connected AP location, the Bluetooth-based visual proximity indicator and play sound feature. 
* Check-out/Check-in feature to associate users to devices for accountability. (Optional)
<br>

## Supported Devices

Supported Devices (including GMS and non-GMS versions):

<table class="facelift" align="center" style="width:80%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Device</th>
    <th style="text-align:center">Android 8.x <br>(Oreo)</th>
     <th style="text-align:center">Android 9.x <br>(Pie)</th>
  </tr>
  
  <tr>
    <td>TC51</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>TC52</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>TC72</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
</table>
<br>

## Device Requirements

* **Operating System:** 
    * Android Oreo with Google Mobile Services (GMS, non-restricted)
* **Bluetooth** must be enabled to find devices using the visual proximity indicator. In some circumstances, if the client application cannot automatically enable Bluetooth (e.g. due to EMM control), then user intervention is required to turn on Bluetooth.
* **Wi-Fi** must be enabled and connected to the network to communicate with the server.
* **Location Services** must be enabled on all devices to find devices using the Bluetooth-based proximity indicator. 
<br>

## Network Requirements

* The client application sends device status and events to the server over HTTPS. Network port 443 must be enabled to reach the Google Cloud Firebase platform.
* Device Tracker web portal URL, supplied by Zebra, must be accessible.
* The following URL is accessible: <br><br>

&nbsp;&nbsp;&nbsp;`https://[ProjectID].firebaseio.com`
<br><br>
where [ProjectID] is located in the server config.xml supplied by Zebra.  
<br><br>
<!-- -->
-----

## See Also

* [Install & Setup](../setup)
* [Device Management](../mgmt)
* [Device Tracking](../use) 


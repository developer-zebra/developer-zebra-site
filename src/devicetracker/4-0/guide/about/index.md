---
title: About Device Tracker
layout: guide.html
product: Device Tracker
productversion: "4.0"
---

<div class="alert alert-danger alert-dismissible fade in" role="alert"><b>Important information about Device Tracker:</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp; <b>Device Tracker 4.0</b> is the cloud-based solution, which replaces Device Tracker On-Prem 2.3.1 or lower. For access, contact your local Zebra account manager.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp; <a href="/devicetracker-onprem/2-3/guide/about">Device Tracker On-Prem 2.3.1</a> or lower is the on-premise version, which is incompatible with Device Tracker 4.0 and cannot be upgraded. Android 10 is the last Android platform supported on Device Tracker Basic 2.3.1.
</div>

## Overview

Device Tracker is a cloud-based scalable solution that easily tracks Zebra Android mobile devices, finds missing devices and helps prevent device inventory shrinkage. Misplaced or lost devices within a facility are tracked by leveraging existing Wi-Fi network infrastructure and utilizing Bluetooth technology and audio chirping to locate devices. When locating a device, Device Tracker identifies the general area where the device is located based on the Access Point (AP) it is connected to within the facility. The visual proximity indicator relies on Bluetooth beacon transmissions to determine the approximate location of the device. Audio can be played on the misplaced device to further pinpoint its location.
<br><br>

<!-- <video width="400" height="240" controls>
  <source src="NG_DTRK.mp4" type="video/mp4">
</video> -->

**Main features:**
<br>

* Cloud-based scalable solution hosted and maintained by Zebra with support for up to 100K devices in multiple sites.
* Support for central administrator, site manager, and site associate roles.
        * Device dashboard for administrator to centrally track devices across multiple sites with ability to view at site-level.
        * Device dashboard for site manager to track devices at the site-level and mark a misplaced or at-risk (e.g. low battery) device for retrieval. 
        * Web portal for centralized administration of system settings and admin and site manager login credentials.
* Registration of:
        * Sites and access points with friendly names to easily identify device location.
        * Devices to assigned site with user friendly names for simple device identification.
* Simple to deploy – install and configure the mobile application using StageNow and Enterprise Mobility Management tools.
* Easily find a misplaced device with the connected AP location, the Bluetooth-based visual proximity indicator and play sound feature.
* Check-out/Check-in feature to associate users to devices for accountability. (Optional)
<br><br>

## Supported Devices

Supported devices require GMS (Google Mobile Services):

<table class="facelift" align="center" style="width:50%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Device</th>
    <th style="text-align:center">Android 8.x <br>(Oreo)</th>
    <th style="text-align:center">Supported BSP</th>
  </tr>
  <!--
  <tr>
    <td>EC50</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>  -->
  <tr>
    <td>TC51</td>
    <td style="text-align:center">&#x25cf;</td>
    <td>02-13-15.00-OG-U20-STD</td>
  </tr>
  <tr>
    <td>TC52</td>
    <td style="text-align:center">&#x25cf;</td>
    <td>01-23-18.00-OG-U09-STD</td>
  </tr>
  <tr>
    <td>TC72</td>
    <td style="text-align:center">&#x25cf;</td>
    <td>01-30-04-OG-00-U01-STD</td>
  </tr>
</table>
<br><br>

## Requirements

### Device Requirements

Requirements for Device Tracker client:

* **Operating System:** Android Oreo with GMS
* **Bluetooth** must be enabled to find devices using the visual proximity indicator. In some circumstances, if the client application cannot automatically enable Bluetooth (e.g. due to EMM control), user intervention is required to turn on Bluetooth.
* **WiFi** must be enabled and connected to the network to communicate with the server.
* **Location** services must be enabled on all devices to find devices using the Bluetooth-based proximity indicator.

<p>See <a href="./#supporteddevices">Supported Devices.</a></p>

### Network Requirements

Network requirements for communication between the device client app and the cloud server:

* Network port 443 must be enabled to reach the Google Cloud Firebase platform. The client application sends device status and events to the server over HTTPS.

* The following URLs must be allowed through the firewall or proxy:
        * URLs accessed by device:
            * *.google.com
            * *.googleapis.com
            * http://connectivitycheck.gstatic.com (required by Google for Android to connect to a wireless network)
            * https://[ProjectID].firebaseio.com (URL accessed by the client app, where <i>[ProjectID]</i> is supplied by Zebra during the cloud setup process)
        * URL accessed by the admin on a PC:
            * Web portal URL - supplied by Zebra during the cloud setup process
<br>

<p>If the firewall or proxy does not support wildcards, add the following URLs to the allow list:</p>

* https://www.googleapis.com
* https://firestore.googleapis.com
* https://cloudfunctions.googleapis.com
* https://firebaseinstallations.googleapis.com
* https://android.googleapis.com
* https://play.googleapis.com
* https://update.googleapis.com
* https://growth-pa.googleapis.com
* https://www.google.com
* https://android.clients.google.com
<!-- -->
-----

## See Also

* [User Roles](../roles)
* [Install & Setup](../setup)
* [Device Management](../mgmt)
* [Device Tracking](../use)
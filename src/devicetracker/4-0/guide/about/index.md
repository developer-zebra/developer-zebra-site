---
title: About Device Tracker
layout: guide.html
product: Device Tracker
productversion: "4.0"
---

<div class="alert alert-danger alert-dismissible fade in" role="alert"><b>Important information about Device Tracker:</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp; <b>Device Tracker</b> v4.0 is the cloud-based version, which replaces Device Tracker On-Prem v2.3.1 or lower. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp; <a href="/devicetracker-onprem/2-3/guide/about">Device Tracker On-Prem</a> v2.3.1 or lower is the on-premise version, which is incompatible with Device Tracker v4.0 and cannot be upgraded. Android Pie is the last Android platform supported on Device Tracker On-Prem.
</div>

## Overview

Device Tracker is a cloud-based scalable solution that easily tracks Zebra Android mobile devices, finds missing devices and helps prevent device inventory shrinkage. Misplaced or lost devices within a facility are tracked by leveraging existing Wi-Fi network infrastructure and utilizing Bluetooth technology and audio chirping to locate devices. When locating a device, Device Tracker identifies the general area where the device is located based on the Access Point (AP) it is connected to within the facility. The visual proximity indicator relies on Bluetooth beacon transmissions to determine the approximate location of the device. Audio can be played on the misplaced device to further pinpoint its location.

<iframe width="560" height="315" src="https://www.youtube.com/embed/MzCWdLUhEPY" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<i>Video: Track and find misplaced devices with Device Tracker</i>

<p><b>Main features:</b></p>

* Cloud-based scalable solution hosted and maintained by Zebra with support for up to 100K devices in multiple locations up to 5K sites.
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

<!-- -->
-----
## Device Tracker Comparison
Comparison of **[Device Tracker On-Prem](/devicetracker-onprem/latest/guide/about)** and **Device Tracker** cloud-based:

<table class="facelift" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th style="text-align:center">Features</th>
    <th style="text-align:center">Device Tracker<br>On-Prem</th>
    <th style="text-align:center">Device Tracker</th>
  </tr>
  <tr>
    <td style="text-align:left">Host platform</td>
    <td style="text-align:left">On-premise server, requires manual install and setup</td>
    <td style="text-align:left">Cloud-based solution managed by Zebra</td>
  </tr>
  <tr>
    <td>Maximum Devices Supported</td>
    <td>500</td>
    <td>100,000</td>
  </tr>
  <tr>
    <td>Site support</td>
    <td>Single; multiple sites require individual server installation at each location</td>
    <td>Multi-site; centralized in-the-cloud supporting multiple locations up to 5,000 sites without any additional install required</td>
  </tr>
  <tr>
    <td>Server setup required</td>
    <td>Yes, Windows server with required software and other system requirements</td>
    <td>No, server is in the cloud and managed by Zebra</td>
  </tr>
  <tr>
    <td>Android platform support</td>
    <td>Select devices only up to Android Pie</td>
    <td>Select Android Oreo and Android 10 devices upon release</td>
  </tr>
  <tr>
    <td>Common Features</td>
    <td colspan="2">• Simple real-time device locationing with connected AP identification, Bluetooth-based visual proximity indicator and remote play sound feature<br>• Registration of sites, APs and devices with friendly names for ease of identification<br>• Misplaced and at-risk device prevention by monitoring low power and disconnection device states<br>• Role-based access to find and manage devices based on administrator, site manager and associate roles<br>• Centralized dashboard</td>
  </tr>
  <tr>
    <td>Device Check-out/<br>Check-in</td>
    <td>No</td>
    <td>Yes, identifies device user</td>
  </tr>
  <tr>
    <td>Dashboard</td>
    <td>Server-based dashboard view</td>
    <td>Device-based dashboard view</td>
  </tr>
  <tr>
    <td>Cost</td>
    <td>Free</td>
    <td>Licensed subscription service</td>
  </tr>
</table>


<!-- -->
-----

## Supported Devices

See the supported devices table on [Zebra support portal](https://www.zebra.com/us/en/support-downloads/software/productivity-apps/device-tracker.html).

<!--
Supported devices require GMS (Google Mobile Services):

<table class="facelift" align="center" style="width:50%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th style="text-align:center">Device</th>
    <th style="text-align:center">Android 8.x <br>(Oreo)</th>
    <th style="text-align:center">Android 10</th>
  </tr>
  <tr>
    <td style="text-align:center">TC51</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td style="text-align:center">TC52</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td style="text-align:center">TC72</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
</table>

-->
-----

## Requirements

### Device Requirements

Requirements for Device Tracker client:

* **Operating System:** select Android Oreo and Android 10 GMS only devices.
* **Bluetooth** must be enabled to find devices using the visual proximity indicator. Zebra provides a tool (StageNow) for EMMs to configure the device remotely to enable Bluetooth. 
* **WiFi** must be enabled and connected to the network to communicate with the server. Zebra provides a tool (StageNow) for EMMs to configure the device remotely to enable WiFi. 
* **Location** services must be enabled on all devices to find devices using the Bluetooth-based proximity indicator.

<p>See <a href="./#supporteddevices">Supported Devices.</a></p>

### Network Requirements

Network requirements for communication between the device client app and the cloud server:

* Network port 443 must be enabled to reach the Google Cloud Firebase platform. The client application sends device status and events to the server over HTTPS.

* The following URLs must be allowed through the firewall or proxy:
        * URLs accessed by device:
            * `*.google.com`
            * `*.googleapis.com`
            * `http://connectivitycheck.gstatic.com`  <br>(required by Google for Android to connect to a wireless network)
            * `https://[ProjectID].firebaseio.com`  <br>(URL accessed by the client app, where <i>[ProjectID]</i> is supplied by Zebra during the cloud setup process)
            * `https://us-central1-[projectID].cloudfunctions.net`  <br>(required for the execution of Cloud Functions for Firebase, where <i>[ProjectID]</i> is supplied by Zebra during the cloud setup process)
        * URL accessed by the admin on a PC:
            * Web portal URL - supplied by Zebra during the cloud setup process
<br>

<p>If the firewall or proxy does not support wildcards, add the following URLs to the allow list:</p>

* `https://www.googleapis.com`
* `https://firestore.googleapis.com`
* `https://cloudfunctions.googleapis.com`
* `https://firebaseinstallations.googleapis.com`
* `https://play.googleapis.com`
* `https://www.google.com`

<!-- * https://android.googleapis.com
* https://update.googleapis.com
* https://growth-pa.googleapis.com
* https://android.clients.google.com -->


<!-- -->
-----
## Known Issues

Known issues in Device Tracker 4.0:
* When installing the application on a mobile device using an EMM, some EMMs do not grant all the required permissions for the application to run in the background to track the device. Alternatively, an XML file can be generated from the StageNow profile and consumed by the EMM granting all permissions. Refer to the [Install guide](../setup)
* After repeatedly launching the Device Tracker application over several weeks without rebooting the device, the app may become unresponsive. If this occurs, relaunch the application to continue operation. A fix will be provided in the next release.
* When there are multiple pools of licenses with different expiration dates, an incorrect or negative license count is reported when the licenses expire.


<!-- -->
-----

## See Also

* [User Roles](../roles)
* [Install & Setup](../setup)
* [Device Management](../mgmt)
* [Device Tracking](../use)

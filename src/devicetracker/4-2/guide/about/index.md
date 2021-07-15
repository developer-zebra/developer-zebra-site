---
title: About Device Tracker
layout: guide.html
product: Device Tracker
productversion: "4.2"
---

<div class="alert alert-danger alert-dismissible fade in" role="alert"><b>Important information about Device Tracker:</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp; <b>Device Tracker</b> 4.0 and later is the cloud-based version of the solution. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp; <a href="/devicetracker-onprem/3-0/guide/about">Device Tracker On-Prem</a> 3.0 and earlier is the on-premise server-based version.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp; The cloud and on-premise solutions are incompatible with one another.<br>
</div>

## Overview

Device Tracker is a cloud-based scalable solution that easily tracks Zebra Android mobile devices, finds missing devices and helps prevent device inventory shrinkage. Misplaced or lost devices within a facility are tracked by leveraging existing Wi-Fi network infrastructure and utilizing Bluetooth technology and audio chirping to locate devices. When locating a device, Device Tracker identifies the general area where the device is located based on the Access Point (AP) it is connected to within the facility. The visual proximity indicator relies on Bluetooth beacon transmissions to determine the approximate location of the device. Audio can be played on the misplaced device to further pinpoint its location.

<iframe width="560" height="315" src="https://www.youtube.com/embed/MzCWdLUhEPY" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<i>Video: Overview of Device Tracker</i>

--- 

## Main Features

Main features of Device Tracker:
- Cloud-based scalable solution hosted and maintained by Zebra with support for up to 100K devices in multiple locations up to 5K sites.
- Support for central administrator, site manager, and site associate roles.
  - Device dashboard for administrator to centrally track devices across multiple sites with ability to view at site-level.
  - Device dashboard for site manager to track devices at the site-level and mark a misplaced or at-risk (e.g. low battery) device for retrieval.
  - Web portal for centralized administration of system settings and admin and site manager login credentials.
- Registration of:
  - Sites and access points with friendly names to easily identify device location.
  - Devices to assigned site with user friendly names for simple device identification.
- Simple to deploy – install and configure the mobile application using StageNow and Enterprise Mobility Management tools.
- Easily find a misplaced device with the connected AP location, the Bluetooth-based visual proximity indicator and play sound feature.
- Locate a device even when that device is powered off (for a limited time) if it has secondary BLE (Bluetooth low energy) beaconing capability.
- Check-out/Check-in feature to associate users to devices for accountability. (Optional)

---

## New in Device Tracker 4.1

- Locate a device even when that device is powered off (for a limited time) if it has [secondary BLE beaconing](../config/#secondaryble) capability.
- New device support for EC50. See <a href="./#supporteddevices">Supported Devices.</a>
- Added support to [silently deploy](../setup) Device Tracker on mobile devices using EMM and StageNow, allowing uninterrupted device operation for the end user (if Check-out is not enabled).
- Administrator or manager can scan a barcode for user name and password during login, eliminating manual entry.
- Resolved Issues:
  - After repeatedly launching Device Tracker over several weeks without rebooting the device, the app may become unresponsive.
  - When there are multiple pools of licenses with different expiration dates, an incorrect license count is reported after the licenses expire.
- Known Issue: When installing the application on a mobile device using an EMM, some EMMs may not have implemented the Zebra value-added features for seamless deployment. Alternatively, an XML file can be generated from the StageNow profile and consumed by the EMM for seamless deployment. Refer to the [Install & Setup guide](../setup).

<!-- 

## Supported Devices

See the supported devices table on [Zebra support portal](https://www.zebra.com/us/en/support-downloads/software/productivity-apps/device-tracker.html).

-->

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

<!-- 
---

## Requirements

### Device Requirements

Requirements for Device Tracker client:

- **Operating System -** Only supported on select Android Oreo and Android 10 GMS devices. See [Zebra support portal](https://www.zebra.com/us/en/support-downloads/software/productivity-apps/device-tracker.html) for supported devices.
- **Bluetooth** must be enabled to find devices using the visual proximity indicator. Zebra provides a tool (StageNow) for EMMs to configure the device remotely to enable Bluetooth.
- **WiFi** must be enabled and connected to the network to communicate with the server. Zebra provides a tool (StageNow) for EMMs to configure the device remotely to enable WiFi.
- **Location** services must be enabled on all devices to find devices using the Bluetooth-based proximity indicator.

### Network Requirements

Network requirements for communication between the device client app and the cloud server:

- Device Tracker client uses HTTPS to communicate with Device Tracker cloud server. All HTTPS communication normally uses port 443 by default, but this may vary based on network configuration. This port designated for HTTPS communication must be open.
- The following domains must be allowed through the firewall or proxy. <br>

      Domain names accessed by device:

      * `*.google.com` (Required for Android to check internet connectivity.)
      * `connectivitycheck.gstatic.com` (Required for Android to check internet connectivity.)
      * `*.googleapis.com` (Required for Device Tracker to authenticate device communication and connect with the cloud server.)
      * `*.firebaseio.com` (Required for Device Tracker to access the cloud database.)
      * `*.cloudfunctions.net` (Required for Device Tracker to access the cloud server.)
      * `[ProjectID].firebaseapp.com` (Required for accessing password reset link, where `[ProjectID]` is supplied by Zebra during onboarding.)

  <br>

      Domain name accessed by the admin on a PC:
      * Web portal - supplied by Zebra during onboarding.

  <br>

<p>If the firewall or proxy does not support wildcards, add the following domains to the allow list:</p>

- `www.google.com` (Required for Android to check internet connectivity.)
- `connectivitycheck.gstatic.com` (Required for Android to check internet connectivity.)
- `www.googleapis.com` (Required for Device Tracker to authenticate device communication with the cloud server.)
- `firestore.googleapis.com` (Required for Device Tracker to access the cloud database.)
- `cloudfunctions.googleapis.com` (Required for Device Tracker to connect with the cloud server.)
- `us-central1-[ProjectID].cloudfunctions.net` (Required for Device Tracker to connect with the cloud server, where `[ProjectID]` is supplied by Zebra during onboarding.)
- `[ProjectID].firebaseio.com` (Required for Device Tracker to access the cloud database, where `[ProjectID]` is supplied by Zebra during onboarding.)
- `[ProjectID]-default-rtdb.firebaseio.com` (Required for Device Tracker to access the cloud database, where `[ProjectID]` is supplied by Zebra during onboarding.)
- `s-usc1c-nss-*.firebaseio.com` (Required for Device Tracker to access the cloud database, where `*` represents multiple characters. Since `*` can change over time, the firewall needs to allow any domain with this pattern for the app to function.)
- `[ProjectID].firebaseapp.com` (Required for accessing password reset link, where `[ProjectID]` is supplied by Zebra during onboarding.)
  <br>

If the password is reset, an email is sent from `zdtrksupport@zebra.com`.
-->

---

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
    <td>Only supported on select devices up to Android 10</td>
    <td>Only supported on select Android Oreo and Android 10 devices</td>
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

---

## See Also

- [Installation](../setup)
- [Configuration](../config)
- [Track Devices](../use)
- [License](../license)

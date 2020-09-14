---
title: About Zebra Device Tracker
layout: guide.html
product: Zebra Device Tracker
productversion: '3.0'
---

<div class="alert alert-danger alert-dismissible fade in" role="alert"><b>Important information about Device Tracker:</b> <br>Device Tracker 3.0 or higher significantly upgrades the software to a cloud based solution.<br> <a href="/devicetracker/2-3/guide/about">Device Tracker 2.3.1</a> or lower is the on-premise version of the solution, to be replaced by Device Tracker 3.0 in the future..... 
</div>
<br>

## Overview

Zebra Device Tracker is a cloud-based scalable solution that easily tracks Zebra Android mobile devices, finds missing devices and helps prevent device inventory shrinkage. Misplaced or lost devices within a facility are tracked by leveraging existing Wi-Fi network infrastructure and utilizing Bluetooth technology and audio chirping to locate devices. When locating a device, Zebra Device Tracker identifies the general area where the device is located based on the Access Point (AP) it is connected to within the facility. The visual proximity indicator relies on Bluetooth beacon transmissions to determine the approximate location of the device. Audio can be played on the misplaced device to further pinpoint its location. 
<br><br>
Main features:
<br>

* Cloud-based scalable solution hosted by Zebra with multi-site capability and support up to 100K devices.
* Role-based access and device actions based on central administrator, site manager, and associate roles.
* Simple registration of sites and access point locations within a site to easily identify device location.  Assign devices to site with friendly names for easy device identification.
* Web portal for central administrator to manage administrator and site manager login credentials and configure solution settings.
* Simple to deploy – install and configure the mobile application using StageNow and Enterprise Mobility Management tools.
* Device dashboard for central administrator to centrally track devices across multiple sites with ability to view at site-level.
* Device dashboard for site manager to track devices at the site-level and mark a misplaced or at-risk (e.g. low battery) device for retrieval.
* Easily find a misplaced device with the connected AP location, the Bluetooth-based visual proximity indicator (Geiger-counter-like mechanism) and play sound feature. 
* Basic check-out/check-in feature to associate users to devices for accountability witih the scan of a barcode. (Optional)

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

* Operating System: 
    * Android Oreo with Google Mobile Services (GMS, non-restricted)
* Bluetooth must be enabled to find devices using the visual proximity indicator.  In some circumstances, if the client application cannot automatically enable Bluetooth (e.g. due to EMM control), then user intervention is required to turn on Bluetooth.
* Wi-Fi must be enabled and connected to the network to communicate with the server.
* Location must be enabled on all devices to find devices using the Bluetooth-based proximity indicator. 

## Network Requirements

* The client application sends device status and events to the server over HTTPS.  Network port 443 must be enabled to reach the Google Cloud Firebase platform.
* Zebra Device Tracker web portal URL, supplied by Zebra, is accessible.
* The following URL is accessible: <br><br>

&nbsp;&nbsp;&nbsp;`https://[ProjectID].firebaseio.com`
<br><br>
where [ProjectID] is located in the server config.xml supplied by Zebra.  
<br><br>
<!-- -->
-----

## See Also

* [Install](../setup)
* [Usage Guide](../usage)
* [Device Central Manager CSP](/mx/devicecentralmgr) - configures Device Central settings
* [Bluetooth Manager CSP](/mx/bluetoothmgr) - controls whether a device can pair with other Bluetooth devices


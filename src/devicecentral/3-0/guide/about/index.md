---
title: About Device Central
layout: guide.html
product: Device Central
productversion: '3.0'
---

## Overview

**Device Central** provides a centralized way for an organization to connect and monitor supported Bluetooth peripherals.  Using the simple user interface, Device Central easily pairs and unpairs Bluetooth peripherals, monitors connection status, and provides details on supported peripherals. If supported by the peripheral, additional capabilities may exist such as paging the peripheral or updating the firmware. 

<p>Starting with Android 10, <b>Device Central</b> is no longer built-in the device. It is required to be installed through Google Play or downloaded through the <a href="https://www.zebra.com/us/en/support-downloads/software.html">Zebra support portal</a>. </p>

Device Central features:

* Simple scan and pair to a [supported Bluetooth peripheral](#supporteddevices)
* Display pairing and connection status of paired Bluetooth peripherals
* Display peripheral details, such as device type, Bluetooth Mac address, firmware version, battery status, serial number, etc.
* Unpair the paired Bluetooth peripheral 
* Paging to locate a paired and connected peripheral (applies to supported Bluetooth scanners)
* Firmware update utility for supported peripherals (applies to supported Bluetooth scanners)

<p><i>Note: Unpairing a Bluetooth Scanners peripheral is currently not supported. Zebra Bluetooth scanners act as a master device which controls the pairing and connection with mobile computers. These Bluetooth scanners have the re-connect feature which may be initiated on the scanner itself. Therefore, unpairing the Bluetooth scanner from a mobile computer will not remove the paired information completely. To address this, pressing the re-connect button on the Bluetooth scanner will re-establish the pairing and connection with mobile computers.</i></p>

## New in Device Central 3.0
* **Support added for Android 10**
* **Install via Google Play or .APK -** On Android 10 or higher, Device Central is required to be installed from Google Play or Zebra support portal. Android 9 devices or lower are no longer supported.
* **Mobility DNA Enterprise License Required –** For Zebra Professional-series devices, Device Central requires a Mobility DNA Enterprise License.  See [Zebra Licensing](/licensing/about) for more information. 
* **Connection Management for any Bluetooth Peripheral -** Device Central now supports Pairing/Unpairing of any Bluetooth peripheral that follows the Bluetooth standards. Such devices are listed in the app with a standard Bluetooth icon. 
* **Addressed issue pairing with printers and other accessories if authentication is set with user PIN entry.** Previously, only devices with a default PIN value of "0000" were supported. 

## Version History
**New in Device Central 2.1:**
* **Hardware scan trigger support** added in the main app screen for [Scan and Pair](../usage/#scanandpair), utilizing DataWedge profile. 
* **New supported devices:** 
      * Android Devices: CC600/CC6000, EC30, L10A, VC83
      * Bluetooth Scanners: DS2278, DS8178
      * Bluetooth Mobile Payment Modules: Verifone

## Supported Devices

Device Central is approved for use with the following Zebra Android device:

<table class="facelift" style="width:25%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Device</th>
    <th style="text-align:center">Android 10.x <br>(Q)</th>
  </tr>
  <tr>
    <td>TC21</td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
</table>

<br>
Device Central is approved for use with the following Bluetooth peripherals:

<table class="facelift" style="width:60%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Device Category</th>
    <th>Zebra Device Model</th>
  </tr>
  <tr>
    <td rowspan="6">Bluetooth Scanner</td>
    <td>DS2278 Handheld Scanner</td>
  </tr>
   <tr>
    <td>DS3678 Handheld Scanner</td>
  </tr>
 
  <tr>
    <td>DS8178 Handheld Imager</td>
  </tr>
  <tr>
    <td>LI3678 Handheld Scanner</td>
  </tr>
  <tr>
    <td>RS507/RS507x Ring Scanner</td>
  </tr>
  <tr>
    <td>RS6000 Bluetooth Ring Scanner</td>
  </tr>
  <tr>
    <td>Bluetooth Headset</td>
    <td>HS3100 Bluetooth Headset</td>
  </tr>
  <tr>
    <td>Bluetooth Printer</td>
    <td>Zebra Bluetooth Printers: QLN320, ZQ110</td>
  </tr>
  <!--
  <tr>
    <td>Bluetooth Mobile Payment Modules</td>
    <td>Verifone Bluetooth Payment Terminals (for example e355)</td>
  </tr>
  -->
</table>

<br><br><br>

<!-- -->
-----

## See Also

* [Device Central Setup](../setup)
* [Device Central Usage Guide](../usage)


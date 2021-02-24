---
title: About Device Central
layout: guide.html
product: Device Central
productversion: '2.0'
---

## Overview

Zebra Device Central is an Android app that simplifies the pairing and unpairing of Bluetooth peripherals with Zebra devices and helps with Bluetooth device management. Using the simple user interface, Device Central easily pairs and unpairs Bluetooth peripherals, monitors connection status, and provides details on supported peripherals. If supported by the peripheral, additional capabilities may exist such as paging the peripheral or updating the firmware. Device Central is pre-installed on all [supported Zebra devices](#supporteddevices).

Device Central features:

* Simple scan and pair to a [supported Bluetooth peripheral](#supporteddevices)
* Display pairing and connection status of paired Bluetooth peripherals
* Display peripheral details, such as device type, Bluetooth Mac address, firmware version, battery status, serial number, etc.
* Unpair the paired Bluetooth peripheral 
* Paging to locate a paired and connected peripheral (applies to supported Bluetooth scanners)
* Firmware update utility for supported peripherals (applies to supported Bluetooth scanners)


### Supported Devices

Device Central is approved for use with the following Zebra Android devices:

<table class="facelift" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Device</th>
    <th style="text-align:center">Android 7.x <br>(Nougat)</th>
    <th style="text-align:center">Android 8.x <br>(Oreo)</th>
  </tr>
  <tr>
    <td>ET51/ET56</td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>MC33</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>MC9300</td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>PS20</td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>TC51/TC51-HC/TC56</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>TC52/TC52-HC/TC57</td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>TC70x/TC75x</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>TC72/TC77</td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>TC8300</td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>VC80</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>WT6000</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
</table>

<br>
Device Central is approved for use with the following Bluetooth peripherals:

<table class="facelift" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Device Category</th>
    <th>Device Model</th>
  </tr>
  <tr>
    <td rowspan="4">Bluetooth Scanner</td>
    <td>Zebra RS6000 Bluetooth Ring Scanner</td>
  </tr>
  <tr>
    <td>Zebra RS507/RS507x Ring Scanner</td>
  </tr>
  <tr>
    <td>Zebra LI3678 Handheld Scanner</td>
  </tr>
  <tr>
    <td>Zebra DS3678 Handheld Scanner</td>
  </tr>
  <tr>
    <td>Bluetooth Headset</td>
    <td>Zebra HS3100 Bluetooth Headset</td>
  </tr>
  <tr>
    <td>Bluetooth Printer</td>
    <td>Zebra Bluetooth Printers: QLN320, ZQ110</td>
  </tr>
  <!-- ** Payment Support removed **
  <tr>
    <td>Bluetooth Payment Terminal</td>
    <td>Verifone Bluetooth Payment Terminals (for example e355)</td>
  </tr>
  -->
</table>

_Note: Unpairing a Bluetooth Scanner peripheral is currently not supported. Zebra Bluetooth scanners act as a master device which controls the pairing and connection with mobile computers. These Bluetooth scanners have the re-connect feature which may be initiated on the scanner itself. Therefore, unpairing the Bluetooth scanner from a mobile computer will not remove the paired information completely. To address this, pressing the re-connect button on the Bluetooth scanner will re-establish the pairing and connection with mobile computers._

<br>

-----

## See Also

* [Device Central Usage Guide](../usage)


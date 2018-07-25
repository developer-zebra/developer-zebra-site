---
title: About Device Central
layout: guide.html
product: Device Central
productversion: '2.0'
---

## Overview

Device Central provides a centralized way for an organization to track Bluetooth peripherals and their connection status, to pair and unpair peripherals, and to view detailed peripheral information. If supported by the peripheral, additional capabilities may exist such as paging the peripheral or updating the firmware. Device Central is a utility that is available by default on Zebra mobile computers.

Device Central features:

* Simple scan and pair to a Bluetooth peripheral, such as: headset, printer, ring scanner, handheld scanner and payment device
* Display pairing and connection status of paired Bluetooth peripherals
* Display peripheral details, such as device type, Bluetooth Mac address, firmware version, battery status, serial number, etc.
* Unpair the paired Bluetooth peripheral 
* Paging to locate a paired and connected peripheral (if supported by the peripheral)
* Firmware update utility for supported peripherals

_Note: Unpairing a Bluetooth Scanner peripheral is currently not supported.  Alternatively, `disconnectOnExit()` may be called in applications utilizing DataWedge and EMDK to unpair automatically when the Bluetooth scanner disconnects._

### Supported Devices

Device Central is approved for use with the following Zebra Android devices:

<table class="facelift" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Device</th>
    <th style="text-align:center">Android 5.x <br>(Lollipop)</th> 
    <th style="text-align:center">Android 6.x <br>(Marshmallow)</th>
    <th style="text-align:center">Android 7.x <br>(Nougat)</th>
    <th style="text-align:center">Android 8.x <br>(Oreo)</th>
  </tr>
  <tr>
    <td>MC33</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>TC51/TC56</td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>TC52/TC57</td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>TC70x/TC75x</td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>TC72/TC77</td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>TC97</td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>VC80x</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>WT6000</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
</table>

<br>
Device Central is approved for use with the following approved Bluetooth peripherals:

* Zebra RS6000 Bluetooth Ring Scanner
* Zebra RC507/RS507x Ring Scanner
* Zebra LI3678 Handheld Scanner
* Zebra DS3678 Handheld Scanner
* Zebra HS3100 Bluetooth Headset
* Zebra Bluetooth Printers (for example iMZ320)
* Verifone Bluetooth Payment Terminals (for example e355)

-----

## See Also

* [Device Central Usage Guide](../usage)


---
title: About DEX Scan & Pair
layout: guide.html
product: DEX Scan & Pair
productversion: '1.8'
---

## Overview

**DEX Scan & Pair** is a Bluetooth utility for pairing the DX30 Bluetooth accessory device to a mobile computer. The wireless DEX solution brings DEX communications to Zebra’s Android™ mobile computers, eliminating cable failures. <br><br>

This utility applies to Direct Store Delivery (DSD) Direct Exchange (DEX) protocol applications that have traditionally used serial communications over a DEX cable, enabling them to communicate over Bluetooth via the DX30. **DEX Scan & Pair** pairs the DX30 over Bluetooth by scanning the MAC address of the DX30 with a mobile computer. After pairing with the DX30, the custom DEX app must setup a Serial Port Profile connection to communicate with DX30 over Bluetooth.<br><br>

Direct EXchange (DEX) is a digital communication protocol that extends the UCS (Uniform Communication Standard), which enables direct store delivery drivers to transmit digital invoices to the retailer's receiving clerk at the loading dock. Created by the Uniform Code Council (UCC), DEX has been adopted by most national grocery chains. This standardized system reduces time, costs and inaccuracies inherent in paper invoices.
<br><br>
Refer to [DX30 Quick Start Guide](https://www.zebra.com/us/en/support-downloads/software/utilities/dx30.html) from _Zebra Support and Downloads_ for information on DX30.

## Supported Devices

<table class="facelift" align="center" style="width:90%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Device</th>
    <th style="text-align:center">Android 6.x <br>(Marshmallow)</th>
    <th style="text-align:center">Android 7.x <br>(Nougat)</th>
    <th style="text-align:center">Android 8.x <br>(Oreo)</th>
  </tr>
  <tr>
    <td>ET56</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>L10</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>MC33</td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>TC20/TC25</td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>TC51</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
  </tr>
    <tr>
    <td>TC56</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>TC57</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <!--
  <tr>
    <td>TC70/TC75</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  -->
  <tr>
    <td>TC70X/TC75X</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>TC77</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
</table>


## Usage Notes
1. When a user attempts to pair a new DX30 with a mobile computer, the Scan & Pair application removes any existing pairings i.e. at any point in time there will only be one DX30 paired with a mobile computer.
2. A DEX Retrofit or DEX protocol application may receive unintended data in the form of AT commands if the application closes and quickly re-opens connection with the DX30. The application can ignore such data. 
<br>
<br>

## See Also

* [Installation](../install)
* [Configuration](../configuration)


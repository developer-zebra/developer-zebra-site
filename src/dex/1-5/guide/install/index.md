---
title: Installation
layout: guide.html
product: DEX Scan & Pair
productversion: '1.5'
---

## Overview
Diagnostic Tool tests the properties based on the subsystems listed in the following table. If pass/fail criteria exists, the result is one of the following:
* **Pass** - if the criteria is met
* **Fail** - if the criteria is not met
* **Info** - displays an informational message (pass/fail is not applicable) 

<table class="facelift" style="width:70%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Subsystem</th>
    <th style="text-align:center">Property</th>
    <th style="text-align:center">Pass/Fail Criteria</th>
  </tr>
  <tr>
    <td rowspan="8">Battery</td>
    <td style="text-align:center">Level</td>
    <td style="text-align:center">&#62;5</td>
  </tr>
  <tr>
    <td style="text-align:center">Voltage</td>
    <td style="text-align:center">info</td>
  </tr>
  <tr>
    <td style="text-align:center">Status</td>
    <td style="text-align:center">info</td>
  </tr>
  <tr>
    <td style="text-align:center">Power Source</td>
    <td style="text-align:center">info</td>
  </tr>
  <tr>
    <td style="text-align:center">Temperature</td>
    <td style="text-align:center">&#60;47 Celsius</td>
  </tr>
  <tr>
    <td style="text-align:center">Charge Cycles</td>
    <td style="text-align:center">&#60;1000</td>
  </tr>
  <tr>
    <td style="text-align:center">Backup Voltage</td>
    <td style="text-align:center">info</td>
  </tr>
  <tr>
    <td style="text-align:center">Manufacturing Date</td>
    <td style="text-align:center">info</td>
  </tr>
  <tr>
    <td rowspan="7">GPS</td>
    <td style="text-align:center">State</td>
    <td style="text-align:center">enabled or disabled</td>
  </tr>
  <tr>
    <td style="text-align:center">Latitude</td>
    <td style="text-align:center">info</td>
  </tr>
  <tr>
    <td style="text-align:center">Longitude</td>
    <td style="text-align:center">info</td>
  </tr>
  <tr>
    <td style="text-align:center">Altitude</td>
    <td style="text-align:center">info</td>
  </tr>
  <tr>
    <td style="text-align:center">Bearing</td>
    <td style="text-align:center">info</td>
  </tr>
  <tr>
    <td style="text-align:center">Speed</td>
    <td style="text-align:center">info</td>
  </tr>
  <tr>
    <td style="text-align:center">Accuracy</td>
    <td style="text-align:center">info</td>
  </tr>
  <tr>
    <td rowspan="4">System</td>
    <td style="text-align:center">CPU Load</td>
    <td style="text-align:center">Average CPU &#60;97%</td>
  </tr>
  <tr>
    <td style="text-align:center">Free Physical Memory</td>
    <td style="text-align:center">&#62;10b</td>
  </tr>
  <tr>
    <td style="text-align:center">Free Storage</td>
    <td style="text-align:center">&#62;50b</td>
  </tr>
  <tr>
    <td style="text-align:center">Process Count</td>
    <td style="text-align:center">&#60;500</td>
  </tr>
  <tr>
    <td rowspan="7">WLAN</td>
    <td style="text-align:center">State</td>
    <td style="text-align:center">enabled or disabled</td>
  </tr>
  <tr>
    <td style="text-align:center">Status</td>
    <td style="text-align:center">connected or disconnected</td>
  </tr>
  <tr>
    <td style="text-align:center">ESSID</td>
    <td style="text-align:center">info</td>
  </tr>
  <tr>
    <td style="text-align:center">BSSID</td>
    <td style="text-align:center">info</td>
  </tr>
<tr>
    <td style="text-align:center">Mac Address</td>
    <td style="text-align:center">info</td>
  </tr>
  <tr>
    <td style="text-align:center">Signal</td>
    <td style="text-align:center">info</td>
  </tr>
  <tr>
    <td style="text-align:center">IP Address</td>
    <td style="text-align:center">info</td>
  </tr>
  <tr>
    <td rowspan="5">WWAN</td>
    <td style="text-align:center">State</td>
    <td style="text-align:center">enabled or disabled</td>
  </tr>
  <tr>
    <td style="text-align:center">Type</td>
    <td style="text-align:center">info</td>
  </tr>
  <tr>
    <td style="text-align:center">Signal Strength</td>
    <td style="text-align:center">info</td>
  </tr>
  <tr>
    <td style="text-align:center">Phone Number</td>
    <td style="text-align:center">info</td>
  </tr>
  <tr>
    <td style="text-align:center">Device ID</td>
    <td style="text-align:center">info</td>
  </tr>
  <tr>
    <td rowspan="5">Bluetooth</td>
    <td style="text-align:center">State</td>
    <td style="text-align:center">enabled or disabled</td>
  </tr>
  <tr>
    <td style="text-align:center">Status</td>
    <td style="text-align:center">Paired or unpaired</td>
  </tr>
  <tr>
    <td style="text-align:center">Connectable/Discoverable</td>
    <td style="text-align:center">info</td>
  </tr>
  <tr>
    <td style="text-align:center">Address</td>
    <td style="text-align:center">info</td>
  </tr>
  <tr>
    <td style="text-align:center">Name</td>
    <td style="text-align:center">info</td>
  </tr>
</table>

<br>
<br>
<br>

## See Also

* [About Diagnostic Tool](../about)
* [Usage Guide](../usage)
* [Configuration](../configuration)


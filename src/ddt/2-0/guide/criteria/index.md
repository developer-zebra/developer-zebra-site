---
title: Test Criteria
layout: guide.html
product: Diagnostic Tool
productversion: '2.0'
---

## Overview
Diagnostic Tool tests for the operation of device hardware features based on specific criteria, with the following results:
* **Pass** - if the criteria is met
* **Fail** - if the criteria is not met
* **Information** - displays informational data (pass/fail is not applicable) 

<table class="facelift" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th style="text-align:center">Test</th>
    <th style="text-align:center">Requires User Intervention</th>
    <th style="text-align:center">Properties/Action</th>
    <th style="text-align:center">Pass/Fail Criteria</th>
  </tr>
  <tr>
    <td style="text-align:center">Scanner</td>
    <td style="text-align:center">Yes</td>
    <td style="text-align:center">Scan a barcode</td>
    <td style="text-align:left">Passes when a barcode is scanned successfully.</td>
  </tr>
  <tr>
    <td style="text-align:center">Battery</td>
    <td style="text-align:center">Yes</td>
    <td style="text-align:left">Button press:<br>&nbsp;&nbsp;- scan trigger (left or right)<br>&nbsp;&nbsp;- push-to-talk<br>&nbsp;&nbsp;- volume up<br>&nbsp;&nbsp;- volume down</td>
    <td style="text-align:left">Passes when the button press is detected for each of the buttons.</td>
  </tr>
  <tr>
    <td style="text-align:center">Touch Screen</td>
    <td style="text-align:center">Yes</td>
    <td style="text-align:center">Touch grid</td>
    <td style="text-align:left">Passes when touch is detected within each grid box on the screen.</td>
  </tr>
  <tr>
    <td style="text-align:center">Bluetooth</td>
    <td style="text-align:center">No</td>
    <td style="text-align:left">Information returned:<br>&nbsp;&nbsp;- name<br>&nbsp;&nbsp;- radio<br>&nbsp;&nbsp;power cycle<br>&nbsp;&nbsp;- functional/non-functional<br>&nbsp;&nbsp;- connectable/<br>discoverable</td>
    <td style="text-align:left">Passes if the Bluetooth radio can be power cycled and the information is returned successfully.</td>
  </tr>
  <tr>
    <td style="text-align:center">WLAN</td>
    <td style="text-align:center">No</td>
    <td style="text-align:left">Information returned:<br>&nbsp;&nbsp;- <font color="red">MAC Address</font><br>&nbsp;&nbsp;- Ping Test<br>&nbsp;&nbsp;- Radio Power Cycle<br>&nbsp;&nbsp;- signal strength (i)<br>&nbsp;&nbsp;- ESSID (i)<br>&nbsp;&nbsp;- IP address (i)<br>&nbsp;&nbsp;- <font color="red">BSSID (i)</font><br>&nbsp;&nbsp;- speed (i)</td>
    <td style="text-align:left">Passes when the button press is detected for each of the buttons.</td>
  </tr>
  <tr>
    <td style="text-align:center">WAN</td>
    <td style="text-align:center">No</td>
    <td style="text-align:left">Information returned:<br>&nbsp;&nbsp;- Sim State<br>&nbsp;&nbsp;- Voice State<br>&nbsp;&nbsp;- Data State<br>&nbsp;&nbsp;- WAN type (i)<br>&nbsp;&nbsp;- Signal Strength (i)<br>&nbsp;&nbsp;- <font color="red">Phone Number (i)</font><br>&nbsp;&nbsp;- <font color="red">Device ID (i)</font></td>
    <td style="text-align:left">Passes when the sim card is present. Passes automatically on non-WAN devices.</td>
  </tr>
  <tr>
    <td style="text-align:center">Battery</td>
    <td style="text-align:center">No</td>
    <td style="text-align:left">Information returned:<br>&nbsp;&nbsp;- part number<br>&nbsp;&nbsp;- serial number<br>&nbsp;&nbsp;- model number<br>&nbsp;&nbsp;- decommission status<br>&nbsp;&nbsp;- voltage (i)<br>&nbsp;&nbsp;- current (i)<br>&nbsp;&nbsp;- temperature (i)</td>
    <td style="text-align:left">Passes if the decommission status is normal and the battery information is retrieved successfully.</td>
  </tr>
  <tr>
    <td style="text-align:center">Audio</td>
    <td style="text-align:center">Yes</td>
    <td style="text-align:left">Record and play file</td>
    <td style="text-align:left">User manual intervention is required. The user manually records audio then listens to the recording. Test pass/fail is based on user discretion. Device speakers should be used for this test - use of headphones is not acceptable. This test should be conducted in an environment with minimal background noise for successful testing. Set the device to maximum volume during playback for best results. </td>
  </tr>
</table>

<br />
<font color="red">Red colored text</font> indicates sensitive information that is not displayed.  Instead, “valid” or “invalid” is shown to indicate whether the information is detected in the proper format. “Valid” indicates the appropriate value was retrieved. “Invalid” indicates the value retrieved is null, empty, or does not match the expected MAC address pattern (only applies to MAC address).<br /><br />
<b>(i)</b> indicates informational data that is considered as extra data, which is displayed if <b>show_extra_data</b> is set to “true” in the `configuration.xml` file.
<br/>
<br/>

Refer to [Configure Tests](../configuration#configuretests) section for a description of each test.
<br>
<br>

------

## See Also

* [About Diagnostic Tool](../about)
* [Usage Guide](../usage)
* [Configuration](../configuration)


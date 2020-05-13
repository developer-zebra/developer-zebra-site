---
title: About Diagnostic Tool
layout: guide.html
product: Diagnostic Tool
productversion: '2.1'
---

## Overview

Diagnostic Tool instantly tests and diagnoses the hardware operability on Zebra mobile devices to determine system health and functionality. Where appropriate, Zebra Help Desk uses this tool for troubleshooting device issues, relying on the results to provide optimum steps to reach a resolution.  It is useful for quickly troubleshooting device issues, resulting to increased worker productivity, limited device downtime, and unnecessary returns to the Zebra Repair Center. 

Hardware features tested:

* **Scanner Test** – checks whether the scanner is operable
* **Button Test** – checks the operation of push-to-talk, left or right scan trigger, volume up and volume down device buttons
* **Touch Screen Test** – checks for operation of the device touch display
* **Bluetooth Tests** – checks whether the Bluetooth radio is operable and returns Bluetooth related information: Bluetooth name, radio power cycle result, radio functional/non-functional, and discoverable/connectable.
* **WiFi Tests** – checks for operation of the WiFi radio and returns WiFi related information: MAC address, network test results from specified address, radio power cycle result, signal strength, ESSID, IP address, BSSID, and speed
* **Battery Tests** – checks the battery status and returns battery related information: part number, serial number, manufacture date, decommission status, voltage, current, and temperature
* **WWAN Tests** – checks for operation of the WWAN radio and returns related WWAN information: SIM state, voice state, data state, WAN type, signal strength, phone number, and device ID
* **Audio Test** – checks for operation of the device microphone and speaker

<br>
<p>For more information on each test, refer to <a href="../criteria">Test Criteria.</a></p>

## New in Diagnostic Tool 2.1
* Introduced 2 modes of operation: [admin mode and user mode](../usage).
* Changes in supported tests:
     * Tests added: Scanner, Button, Touch Screen, Audio
     * Tests removed: GPS, System
* Added capability to [import or export configuration files](../configuration).
* New [Settings](../configuration) and [Configure Tests](../configuration) app screens for administrators. 
* Added and removed device support. See **Supported Devices** table below.
* Known Issues:
     * On TC20 Android Nougat, when performing the Battery test the <i>Decommission status</i> may return incorrect information.
     * On TC20 and TC25 Android Oreo, when performing the Button test the scan trigger press fails.
     * When the app is already running (in the foreground or background) and the EMM command is executed to run the test remotely, if the user tries to launch the app manually after the test completes, the app may encounter unexpected behavior. In this case the user must manually restart Diagnostic Tool to recover.

## Supported Devices
<p>Download <b>Diagnostic Tool</b> from <a href="https://www.zebra.com/us/en/support-downloads/software.html">Zebra Support and Downloads</a>. Upon launching the app after installation, the user must grant all permissions to avoid any unexpected behavior. The following table lists the supported GMS devices, except for MC33 which only supports non-GMS: </p>

<table class="facelift" align="center" style="width:90%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Device</th>
    <th style="text-align:center">Android 4.4 <br>(KitKat)</th>
    <th style="text-align:center">Android 5.x <br>(Lollipop)</th>
    <th style="text-align:center">Android 6.x <br>(Marshmallow)</th>
    <th style="text-align:center">Android 7.x <br>(Nougat)</th>
    <th style="text-align:center">Android 8.x <br>(Oreo)</th>
    <th style="text-align:center">Android 9.x <br>(Pie)</th>
  </tr>
  <!--
  <tr>
    <td>CC600</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>EC30</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>PS20</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>ET50/ET55</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>L10</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  -->
  <tr>
    <td>MC18</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>MC32</td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>MC33</td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
  </tr>
  <!--
  <tr>
    <td>MC40</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>-->
  <tr>
    <td>MC67</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <!--
  <tr>
    <td>MC92</td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>MC93</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>PS20</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>-->
  <tr>
    <td>TC20</td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>TC25</td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>TC51</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>TC52</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>TC55</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>TC56</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>TC57</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>TC70</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>TC70X</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>TC75</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>TC75X</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>TC8000</td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <!--
  <tr>
    <td>TC72/TC77</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>TC80</td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>TC8300</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>VC80</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>VC8300</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
  </tr>
  <tr>
    <td>WT6000</td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td></td>
    <td></td>
  </tr>-->
</table>

<br>

**Note:** 
* **Multiple instances of app -** If Diagnostic Tool v1.0 is already present on the device and Diagnostic Tool v2.1 is then installed on the same device, there will be 2 versions of the app that exist. To avoid this scenario, the administrator can disable Diagnostic Tool v1.0 using [AppManager CSP](/mx/appmgr) for the device to run a single version of the app.
* **Setting persistence -** Upon initial app install, any setting changes made through the UI persist since configuration.xml does not exist. However, after exporting the .xml file, any changes in the UI no longer persist until the .xml file is imported into the device.

## Important Notes
1. **Multiple Android user accounts -** When using multiple Android user accounts on a single device, Diagnostic Tool use and functionality only applies to the active primary user.
2.	**Limitation due to low memory on the device -** Once the available device memory is less than 3 MB, a message appears indicating there is no space on the device and logging will no longer take place. Additionally the Audio Test cannot be executed.
3. **Device orientation -** Diagnostic Tool is only supported in the default orientation of the device. It does not support switching between both portrait and landscape modes.
4. **Split screen support -** On Android N and above, Diagnostic Tool does not support split screen mode.

<br>

<!-- -->
------

## See Also

* [Usage Guide](../usage)
* [Test Criteria](../criteria)
* [Configuration](../configuration)


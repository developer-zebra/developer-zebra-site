---
title: About PowerPrecision Console
layout: guide.html
product: PowerPrecision Console
productversion: '2.2.1'
---

## Overview

PowerPrecision Console (PPC) is a battery management solution that gives organizations using Zebra mobile computing devices a centralized view of the health, state of charge and performance statistics of device batteries in their organization. Starting with PPC v2.0, it is part of Zebra DNA Visibility Console (ZDVC), which consists of a suite of solutions including [Device Tracker](/devicetracker/latest/guide/about). Using data gathered and stored in Zebra's [PowerPrecision](https://www.zebra.com/content/dam/zebra_new_ia/en-us/solutions-verticals/product/accessories/Mobile%20Computer%20Accessories/Batteries/Power%20Precision%20Battery%20Solutions/white-paper/power-precision-batteries-white-paper-en-us.pdf) batteries, PPC provides administrators with insight that can help them determine when battery health could affect productivity and when a device battery should be removed from service. The PPC centralized management system continuously monitors battery health data analyzed in real time, and can trigger customized notifications to alert device users of actions needed for battery swapping or decommissioning, helping to ensure optimized deployment of healthy batteries at all times.

> PowerPrecision Console operates on WiFi networks and does not support WWAN.

##Main Features
PowerPrecision Console main features:
* Centralized dashboard to easily view battery information tracking: state-of-health (SOH), state-of-charge (SOC), battery status, and other information from deployed Zebra mobile computer batteries 
  * Color-coded battery health indicator for SOH categories: green for good, amber for nearing end-of-life (EOL), and red for EOL
  * Historical trend of battery health 
  * Filter and sort data 
* Admin actions on batteries to segregate and decommission nearing EOL or EOL batteries
* Customizable EOL message notifying end-users to prepare to decommission their poor health battery
* Customizable snooze options to give end-users an opportunity to complete a task before taking action to decommission the battery
* HTTPS support for secure connections 
* Battery tagging for easier organization and identification
* Report generation to export data collected 
* Capability for device staging with the use of an EMM such as Zebra's [StageNow](/stagenow/latest/about) with [Battery Manager CSP](/mx/batterymgr).

##How it works
PowerPrecision Console consists of the following components:
* Client – Device app collects and sends battery and device information to server.
* Server – Part of Zebra DNA Visibility Console, which collects and analyzes device battery data.
* Web portal - Part of Zebra DNA Visibility Console, which provides a centralized dashboard for monitoring battery status information, sends notifications and generates reports.

The PPC client software registers the device with the on-premise PPC server and reports battery information based on preset configurations such as frequency of reporting and event triggers including new battery inserted, battery low and device power-off. The state of battery health is monitored continuously, with multiple electrical and historical characteristics used to determine each battery’s health relative to a new battery. As battery life diminishes over time, custom messages can be triggered based on pre-determined thresholds to notify users of required actions. 

## New in PPC 2.2.1
* Added method to start server background services to run at startup and without a logged-in user.
* New device support for: 
  * Android P: TC52, TC72, PS20
  * Android O: ET51/ET56, L10 Android, EC30, MC9300, TC8300
  * Android N: WT6000
* Behavior changes due to new Android 9 Pie requirements:
  * When opening PPC client app after initial install, permission needs to be granted to allow the device to register to the server.
  * A PPC Client and PPCClientMgr notification message is displayed in the device notifications drawer when the respective app is running.  


## Recent Version History
### New in PPC 2.0
* New Zebra DNA Visibility Console (ZDVC) server 2.0 support with updated server URL root path.
* Support added for Server Auth Name and Password in:
  * PPC Client
  * PPC Plug-in

##Device Requirements
This section provides the device requirements.

See [Install & Setup](../setup) for System Requirements.

1. Supported Devices:
  <table class="facelift" align="center" style="width:70%" border="1" padding="5px">
    <tr bgcolor="#dce8ef">
      <th>Device</th>
      <th style="text-align:center">Android 6.x <br>(Marshmallow)</th>
      <th style="text-align:center">Android 7.x <br>(Nougat)</th>
      <th style="text-align:center">Android 8.x <br>(Oreo)</th>
      <th style="text-align:center">Android 9.x <br>(Pie)</th>
    </tr>
    <tr>
      <td>EC30</td>
      <td></td>
      <td></td>
      <td style="text-align:center">&#x25cf;</td>
      <td></td>
    </tr>
    <tr>
      <td>ET51/ET56</td>
      <td></td>
      <td></td>
      <td style="text-align:center">&#x25cf;</td>
      <td></td>
    </tr>
    <tr>
      <td>L10 Android</td>
      <td></td>
      <td></td>
      <td style="text-align:center">&#x25cf;</td>
      <td></td>
    </tr>
    <tr>
      <td>MC3300 </td>
      <td></td>
      <td style="text-align:center">&#x25cf;</td>
      <td style="text-align:center">&#x25cf;</td>
      <td></td>
    </tr>
    <tr>
      <td>MC9300</td>
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
      <td style="text-align:center">&#x25cf;</td>
    </tr>
    <tr>
      <td>TC70X/TC75X</td>
      <td style="text-align:center">&#x25cf;</td>
      <td style="text-align:center">&#x25cf;</td>
      <td style="text-align:center">&#x25cf;</td>
      <td></td>
    </tr>
    <tr>
      <td>TC51/TC56 </td>
      <td style="text-align:center">&#x25cf;</td>
      <td style="text-align:center">&#x25cf;</td>
      <td style="text-align:center">&#x25cf;</td>
      <td></td>
    </tr>
    <tr>
      <td>TC52</td>
      <td></td>
      <td></td>
      <td style="text-align:center">&#x25cf;</td>
      <td style="text-align:center">&#x25cf;</td>
    </tr>
    <tr>
      <td>TC57</td>
      <td></td>
      <td></td>
      <td style="text-align:center">&#x25cf;</td>
      <td></td>
    </tr>
    <tr>
      <td>TC72</td>
      <td></td>
      <td></td>
      <td style="text-align:center">&#x25cf;</td>
      <td style="text-align:center">&#x25cf;</td>
    </tr>
    <tr>
      <td>TC77</td>
      <td></td>
      <td></td>
      <td style="text-align:center">&#x25cf;</td>
      <td></td>
    </tr>
    <tr>
      <td>TC8300</td>
      <td></td>
      <td></td>
      <td style="text-align:center">&#x25cf;</td>
      <td></td>
    </tr>
    <tr>
      <td>WT6000</td>
      <td></td>
      <td style="text-align:center">&#x25cf;</td>
      <td></td>
      <td></td>
    </tr>
  </table>
  
2. Supported Battery Types: [Zebra PowerPrecision Plus](https://www.zebra.com/us/en/products/accessories/powerprecision-battery-solutions.html), [Zebra PowerPrecision](https://www.zebra.com/us/en/products/accessories/powerprecision-battery-solutions.html)  (limited support and [additional setup required](../mgmt/#powerprecisionbatteries))  <br>
Refer to [PowerPrecision and Battery Management Fact Sheet](https://www.zebra.com/content/dam/zebra_new_ia/en-us/solutions-verticals/product/Software/Mobility%20Software/powerprecision/fact-sheets/data-capture-dna-power-precision-fact-sheet-en-us.pdf) for more information.
3. Zebra Data Services agent is required to be running on the mobile computer. This agent collects battery health data from the device and sends it to the ZDVC server. 
4. The ZDVC server is installed and running.

## Important Notes
Important notes for consideration during PPC use:
* **For Android Oreo devices or higher, when the device is rebooted after the PPC app is force stopped, the user must manually launch PPC.** If the user force stops PPC (through Android Settings > Apps & notifications > PowerPrecision Console > Force Stop) then reboots the device, PPC does not automatically restart on startup, requiring the user to manually launch PPC. This is due to an Android restriction that considers the app in a stopped state and thus requires the app to be launched manually even after reboot. 
<br>
<br>

-----

## See Also

* [PowerPrecision Console Install & Setup](../setup)
* [Admin View](../admin)
* [Battery Management](../mgmt)
* [EOL Management](../eol)
* [Configuration](../config)
* [Troubleshooting & FAQ](../troubleshooting)


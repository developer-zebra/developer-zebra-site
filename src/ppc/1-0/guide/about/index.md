---
title: About PowerPrecision Console
layout: guide.html
product: PowerPrecision Console
productversion: '1.0'
---

## Overview

PowerPrecision Console (PPC) is a battery management solution that gives organizations using Zebra mobile computing devices a centralized view of the health, state of charge and performance statistics of device batteries in their organization. Using data gathered and stored in Zebra's [PowerPrecision](https://www.zebra.com/content/dam/zebra_new_ia/en-us/solutions-verticals/product/accessories/Mobile%20Computer%20Accessories/Batteries/Power%20Precision%20Battery%20Solutions/white-paper/power-precision-batteries-white-paper-en-us.pdf) batteries, PPC provides administrators with insight that can help them determine when battery health could affect productivity and when a device battery should be removed from service. The PPC centralized management system continuously monitors battery health data analyzed in real time, and can trigger customized notifications to alert device users of actions needed for battery swapping or decommissioning, helping to ensure optimized deployment of healthy batteries at all times.

##How it works
The PPC client software registers the device with the on-premise PPC server and reports battery information based on preset configurations such as frequency of reporting and event triggers including new battery inserted, battery low and device power-off. The state of battery health is monitored continuously, with multiple electrical and historical characteristics used to determine each battery’s health relative to a new battery. As battery life diminishes over time, custom messages can be triggered based on pre-determined thresholds to notify users of required actions. 
PowerPrecision Console consists of two software components:
* Client – Device app collects and sends battery and device information to server.
* Server – Collects and analyzes device battery data, presents centralized dashboard for monitoring battery information, sends notifications and generates reports. 

PPC supports a maximum of 10,000 devices and 20,000 batteries per installation.

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

##System Requirements
This section provides the server and device requirements.

###Server Requirements
1. Windows Operating Systems supported:
   * Windows® 2012 server, 64-bit processor
   * Windows® 2016, 64-bit processor

2. Browsers supported (connect over https):  
   * Chrome Browser version 63 or higher
   * Internet Explorer 11
   * Microsoft Edge for Windows 10
   * Safari for Mac version 9 or higher

3. Software Required (included in server installation):
   * Java runtime
   * Node.js version 6.11
   * PostgreSQL 9.6.3-3 or higher
   * PowerPrecision Console software (server and client) 

4. Network Access Requirements:
   * If required, open incoming and outgoing ports for communication between server and mobile devices through the server firewall. The default ports used are: 
        * Data Port 8080 for PPC client to register and upload battery data 
        * Web Portal Port 8443 for accessing PPC web portal  
   * If required, perform DNS setup to add server IP address to the DNS server. 

5. Hardware Requirements: 
   * Minimum CPU cores: 8  
   * Minimum memory (RAM): 4 GB  
   * Minimum available hard drive space: 300 GB 

  Recommended hardware requirements based on number of devices and batteries:
   <table class="facelift" align="center" style="width:70%" border="1" padding="5px">
   <tr bgcolor="#dce8ef">
      <th>Number of Devices</th>
      <th>Number of Batteries</th>
      <th style="text-align:center">RAM</th>
      <th style="text-align:center">CPU Cores</th>
      <th style="text-align:center">Hard Drive Space</th>
    </tr>
    <tr>
      <td>Up to 1,000 devices</td>
      <td style="text-align:center">Up to 2,000 batteries</td>
      <td style="text-align:center">4 GB</td>
      <td style="text-align:center">8 cores</td>
      <td style="text-align:center">300 GB</td>
    </tr>
    <tr>
      <td>1,000 to 5,000 devices</td>
      <td style="text-align:center">2,000 to 10,000 batteries</td>
      <td style="text-align:center">8 GB</td>
      <td style="text-align:center">8 cores</td>
      <td style="text-align:center">600 GB</td>
    </tr>
    <tr>
      <td>Up to 10,000 devices</td>
      <td style="text-align:center">Up to 20,000 batteries</td>
      <td style="text-align:center">16 GB</td>
      <td style="text-align:center">16 cores</td>
      <td style="text-align:center">750 GB</td>
    </tr>
   </table>

###Device Requirements

1. Supported Devices:
  <table class="facelift" align="center" style="width:70%" border="1" padding="5px">
    <tr bgcolor="#dce8ef">
      <th>Device</th>
      <th style="text-align:center">Android 6.x <br>(Marshmallow)</th>
      <th style="text-align:center">Android 7.x <br>(Nougat)</th>
      <th style="text-align:center">Android 8.x <br>(Oreo)</th>
    </tr>
    <tr>
      <td>TC70X/TC75X</td>
      <td style="text-align:center">&#x25cf;</td>
      <td style="text-align:center">&#x25cf;</td>
      <td style="text-align:center">&#x25cf;</td>
    </tr>
    <tr>
      <td>TC51/TC56 </td>
      <td style="text-align:center">&#x25cf;</td>
      <td style="text-align:center">&#x25cf;</td>
      <td style="text-align:center">&#x25cf;</td>
    </tr>
    <tr>
      <td>TC52/TC57</td>
      <td></td>
      <td></td>
      <td style="text-align:center">&#x25cf;</td>
    </tr>
    <tr>
      <td>TC72/TC77</td>
      <td></td>
      <td></td>
      <td style="text-align:center">&#x25cf;</td>
    </tr>
    <tr>
      <td>MC3300 </td>
      <td></td>
      <td style="text-align:center">&#x25cf;</td>
      <td style="text-align:center">&#x25cf;</td>
    </tr>
    <tr>
      <td>PS20</td>
      <td></td>
      <td></td>
      <td style="text-align:center">&#x25cf;</td>
    </tr>
  </table>
  
2. Supported Battery Types: [Zebra PowerPrecision Plus](https://www.zebra.com/us/en/products/accessories/powerprecision-battery-solutions.html), [Zebra PowerPrecision](https://www.zebra.com/us/en/products/accessories/powerprecision-battery-solutions.html)  (limited support and [additional setup required](../mgmt/#powerprecisionbatteries))  <br>
Refer to [PowerPrecision and Battery Management Fact Sheet](https://www.zebra.com/content/dam/zebra_new_ia/en-us/solutions-verticals/product/Software/Mobility%20Software/powerprecision/fact-sheets/data-capture-dna-power-precision-fact-sheet-en-us.pdf) for more information.
3. Zebra Data Services agent is required to be running on the mobile computer. This agent collects battery health data from the device and sends it to the PPC server. 
<br>
<br>
-----

## See Also

* [PowerPrecision Console Install & Setup](../setup)
* [Admin View](../admin)
* [Battery Management](../mgmt)
* [EOL Management](../eol)
* [Configuration](../config)


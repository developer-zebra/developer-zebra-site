---
title: About PowerPrecision Console
layout: guide.html
product: PowerPrecision Console
productversion: '1.0'
---

## Overview

PowerPrecision Console (PPC) is an on-premise solution that provides proactive, centralized battery management for Zebra device batteries, tracking battery health and metrics. All batteries have a limited lifespan - with the continual gradual decline of battery lifespan over time, Zebra's PowerPrecision Console provides visibility into battery performance and health to easily identify and remove unhealthy batteries prior to any disruption in workforce productivity. Zebra's [PowerPrecision batteries](https://www.zebra.com/content/dam/zebra_new_ia/en-us/solutions-verticals/product/accessories/Mobile%20Computer%20Accessories/Batteries/Power%20Precision%20Battery%20Solutions/white-paper/power-precision-batteries-white-paper-en-us.pdf) provide intelligent battery data that includes [state-of-health (SOH)](../mgmt/#whatissoh) and state-of-charge (SOC), giving insight into critical battery health data to help determine when battery health could affect productivity and should be replaced. The battery health data is uploaded into a centralized management system for processing so the admin can send customized notifications to the device user to take action for battery decommissioning, maintaining an optimal inventory of healthy batteries.

The PPC client on the devices register with the server and report battery information based on set configurations such as frequency and event trigger type (low battery, battery insertion, power off event, etc.). The SOH, a real-time analytics modeling of multiple electrical characteristics of the battery to determine its performance compared to that of a new battery, is monitored and historical data is recorded. As the battery depletes over time and the defined threshold level is reached, the administrator can take action and notify the user to decommission the battery. 

PPC is available for download from the Zebra Support and Software Download site. Deployment is currently limited to up to 10,000 devices and 20,000 batteries per installation.

PowerPrecision Console consists of two software components: 
* Client – Runs on the device to collect battery and device information sent to the server. 
* Server – Runs on a server providing a centralized dashboard for administrators to monitor battery information on the deployed devices.

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


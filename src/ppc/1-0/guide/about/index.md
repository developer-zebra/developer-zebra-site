---
title: About PowerPrecision Console
layout: guide.html
product: PowerPrecision Console
productversion: '1.0'
---

## Overview

PowerPrecision Console (PPC) is an on-premise web-based solution providing the capability to continuously monitor Zebra battery health and metrics to easily identify and remove any unhealthy batteries prior to disruption in workforce productivity. It collects device battery condition and health information, uploads the data to a centralized management system for processing, and can send customized notifications to the device user to maintain an optimal inventory of healthy batteries.   

Devices with the PPC client register with the server and report battery information based on configurations set on the server such as frequency and trigger type (low battery, battery insertion, power off event, etc.).  The state-of-health is monitored and historical data is recorded. As the battery depletes over time and the defined threshold level is reached, the administrator can take action and notify the user to prepare for battery decommissioning.  PPC is available for download from the Zebra Support and Software Download site <add link>. Deployment is currently limited to up to 10,000 devices and 20,000 batteries per installation. 

PowerPrecision Console consists of two software components: 
* Client – Runs on the device to collect battery and device information and send to the server.   
* Server – Runs on a PC providing a centralized dashboard for administrators to monitor battery information for the deployed Zebra Mobile devices.

##Main Features
The PowerPrecision Console main features are:
* Centralized dashboard to easily view battery information tracking [state-of-health (SOH)](https://www.zebra.com/content/dam/zebra_new_ia/en-us/solutions-verticals/product/Software/Mobility%20Software/powerprecision/fact-sheets/data-capture-dna-power-precision-fact-sheet-en-us.pdf) <sup>*</sup>, state-of-charge (SOC), and other metrics of deployed Zebra mobile computer batteries
  * Color-coded battery health indicator 
  * Historical trend of battery health 
  * Customizable device triggers 
  * Filtering based on SOH, SOC, IP address, status, etc. 
* Send customized messages to notify end-users to swap or decommission their poor health battery
* Customizable snooze to give users a chance to complete a task before taking action to decommission the battery
* HTTPS support for secure connections 
* User management for web portal access 
* Battery tagging for organization  
* Report generation to export data collected 
* Capability for device staging with the use of an EMM such as [StageNow](/stagenow/latest/about) or Zebra's [Battery Manager CSP](/mx/batterymgr).

<sup>*</sup> State-of-Health: performs real-time analytics modeling of multiple electrical characteristics of the battery to determine its performance compared to that of a new battery

##System Requirements
This section provides the server and device requirements.

###Server Requirements
1. Windows Operating Systems supported:
   * Windows® 2012 server, 64-bit processor  
   * Windows® 2016, 64-bit processor
2. Hardware Requirements: 
   * Minimum CPU cores: 4  (8 cores recommended)
   * Minimum memory (RAM): 8 GB  (16 GB recommended)
   * Minimum available hard drive space: 250GB  (500 GB recommended) 
3. Browsers supported (connectivity over https):  
   * Chrome Browser version 63 or higher 
   * Microsoft Edge 
   * Safari for Mac 
4. Network Access Requirements:
   * If required, open incoming and outgoing ports for communication between server and mobile devices through the server firewall. The default ports used are: 
        * Data Port 8080 for PPC client to register and upload battery data 
        * Web Portal Port 8443 for accessing PPC web portal  
   * If required, perform DNS setup to add server IP address to the DNS server. 

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
  
2. Supported Battery Types:
        * [Zebra PowerPrecision Plus](https://www.zebra.com/us/en/products/accessories/powerprecision-battery-solutions.html)
        * [Zebra PowerPrecision](https://www.zebra.com/us/en/products/accessories/powerprecision-battery-solutions.html)  (limited support and additional setup required)  
3. Zebra Data Services agent is required to be running on the mobile computer. This agent collects battery health data from the device and sends it to the PPC server. 
<br>

-----

## See Also

* [PowerPrecision Console Install & Setup](../setup)
* [PowerPrecision Console Usage Guide](../usage)


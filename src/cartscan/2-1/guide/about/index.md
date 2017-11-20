---
title: About CartScan
layout: guide.html
product: CartScan
productversion: '2.1'
---

## Overview

CartScan is an app for Zebra Android devices that scans barcode data and delivers it as keystrokes to a nearby Windows PC via Bluetooth. CartScan enables users in healthcare and other industries to collect data wirelessly, helping to increase productivity and workflow efficiency. CartScan communicates only with CartScan PC Wedge, a Windows service that must be on the PC running the line-of-business application that is collecting the scanned data. 

-----

The CartScan solution includes both required components, which include:

* The CartScan app for Android (`cartscan/apk`): 

* CartScan PC Wedge (`CartScanPCwedge.exe`): 

<img alt="" style="height:350px" src="cartscan_01.png"/>


On the computer, PC Wedge continuously monitors the Bluetooth connection that tethers it to a Zebra mobile device. By design, only one mobile device can be connected with the PC at a time. When the PC receives scanned data, it inserts the data (as ordinary keystrokes) into the active field of the foreground application. 

If the need is to populate multiple fields with separate types of scanned data (for example patient and doctor names plus an administered medication), the mobile device can be configured to move the cursor to a subsequent field after each segment of scanned data is transmitted. For more information, see [Settings](../settings). 


<!-- 
<iframe width="560" height="315" src="https://www.youtube.com/embed/dPzyDFMcJzI" frameborder="0" allowfullscreen></iframe>
 -->

<!-- 
-----

#### Learn more about:
* [Text correction features](../settings#textcorrection)
* The "Loadable" [Personal Dictionary](../../../../mx/personaldictionarymgr) 
-->
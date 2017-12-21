---
title: About CartScan
layout: guide.html
product: CartScan
productversion: '2.1'
---

## Overview

CartScan was developed to simplify patient data collection by healthcare workers as they make their rounds through a facility. This process often involves a computer wheeled from room to room on a cart, with the worker manually entering patient data using the keyboard. The CartScan solution saves trips to the keyboard by sending collected data to the computer as keystrokes over Bluetooth. The solution also has applications in the warehouse, transportation and logistics, and numerous other industries. 

### System Requirements

* **PC running Microsoft Windows 7, 8 or 10** (32- or 64-bit)
* **Built-in Bluetooth 4.0** or a Bluetooth 4.0 dongle, connected
* **Supported Zebra device Android**

### Supported Devices

* **MC40 HC KitKat**
* **MC40 HC Lollipop**
* **TC51 HC Marshmallow**

-----

## How It Works

The CartScan solution includes two components:

* The CartScan app for Android (`"cartscan.apk"`)
* The CartScan PC Wedge service for Windows (`"CartScanPCwedge.exe"`)

<img alt="" style="height:350px" src="cartscan_01.png"/>
_The CartScan app for Android_
<br>

The CartScan app runs on a supported Zebra device and connects to a PC via Bluetooth. The device is brought into patient rooms (or wherever barcodes need to be scanned) and used to acquire the data. The PC Wedge service continuously monitors the Bluetooth connection, and whenever it receives scanned data from the device, it inserts the data as ordinary keystrokes into the active field of the foreground application. 

If the need is to populate multiple fields with separate pieces of scanned data (for example patient and doctor names plus an administered medication), the mobile device can be configured to send keystrokes that will move the cursor on the PC to a subsequent field after each segment of scanned data is transmitted. Data also can be processed on the device as needed before being sent to the PC. See [Settings](../settings) for more information. 

By design, **only one mobile device can be connected with the PC at a time, and the CartScan app can communicate only with PC Wedge**. 


<!-- 
<iframe width="560" height="315" src="https://www.youtube.com/embed/dPzyDFMcJzI" frameborder="0" allowfullscreen></iframe>
 -->

<!-- 

#### Learn more about:
* [Text correction features](../settings#textcorrection)
* The "Loadable" [Personal Dictionary](../../../../mx/personaldictionarymgr) 
-->
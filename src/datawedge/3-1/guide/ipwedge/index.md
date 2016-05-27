---
title: IPWedge 
layout: guide.html
product: DataWedge
productversion: '3.1'
---

## Overview

IPWedge is a small Windows app that monitors a network port and receives scanned data sent by devices using the DataWedge IP Output Plug-in. The receiving PC inserts the data as keystrokes into the foreground application or the Windows Clipboard, essentially using the device as a wireless scanner. 

## IPWedge Set-up 

### Prerequisites
To use IPWedge, start with the following: 

* A PC with Windows XP, Vista, 7 or 8
* Microsoft .NET Framework 3.5 Service Pack 1 (or later)
* A Zebra device running Android 4.1 Jelly Bean (or later)
* DataWedge for Android 1.5 (or later)

&#49;. [Visit the Zebra Solutions Portal](https://portal.motorolasolutions.com/Support/US-EN/Search?searchType=simple&searchTerm=datawedge%20ip) and download the latest version of IPWedge. 

&#50;. **Install the .zip file** on the system to which the scanned data will be sent. 

&#51;. **Run the IPWedge app**. A screen appears similar to the image below. **Make a note of the IP address and port number** (highlighted). 
<img style="height:200px" src="04_ipwedge.jpg"/>
_IPWedge System Tray menu_. 
<br>

> **Note: This default port number is the same as that of the IP Output Plug-in**.

&#52;. **Open the IPWedge app** from the Windows Start menu or tap on the IPWedge icon in the System Tray and select Options. 

The IPWedge Options panel appears similar to the image(s) below. 
<img style="height:250px" src="01_ipwedge.jpg"/>
_General Options_. 
<br>

<img style="height:250px" src="02_ipwedge.jpg"/>
_Keystroke Options_. 
<br>

<img style="height:250px" src="03_ipwedge.jpg"/>
_Clipboard Options_. 
<br>

&#53;. **Make any required changes** to Options in the General, Keystroke and Clipboard tabs. **Click OK on each tab** to save settings. 

The PC is now ready to receive data from devices running DataWedge that are configured to use the IP Output Plug-in with IP address and port settings that match those of the PC. To set up a device, see "IP Output" in the [DataWedge Setup Guide](../setup). 

**Note: IPWedge does not work with Profile0**.

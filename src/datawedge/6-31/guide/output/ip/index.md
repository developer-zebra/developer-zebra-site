---
title: IP Output
layout: guide.html
product: DataWedge
productversion: '6.3'
---

## Overview
IP Output allows captured data to be sent to a specified IP address and port using either TCP or UDP transport protocols to a Windows server running Zebra IPWedge software. 

IPWedge is a small Windows app that monitors a network port and receives scanned data sent by devices using the DataWedge IP Output Plug-in. The receiving PC inserts the data as keystrokes into the foreground application or the Windows Clipboard, essentially using the device as a wireless scanner. 

**DataWedge Output Options**:

* [Intent](../intent) (programmatic data hand-off)
* [Internet Protocol](../ip) (network output via TCP or UDP) 
* [Keystroke](../keystroke) (keyboard emulation)

### Prerequisites
Using IPWedge requires the following: 

* A PC with Windows XP, Vista or 7 amd .NET Framework 3.5 Service Pack 1 (or later)
* A Zebra device running Android 4.4 KitKat (or later)
* DataWedge for Android 1.5 (or later)

-----

## IP Output
The IP Output Plug-in enables captured data to be transferred over a network to a computer running IPWedge, a small Windows app made by Zebra. The PC receives the data as keystrokes or in its Clipboard, in essence turning the device into a wireless scanner for the PC. 

To configure a device to use the IP Output Plug-in, it's necessary to know the IP address of the PC as well as the port number to which the PC will be listening. To set up the PC first, see the [IPWedge Guide](../ipwedge) for IPWedge download and set-up instructions. Then resume from here.

### Set Up IP Output: 

**From the Profile in which to activate the IP Output Plug-in**:  

&#49;. Locate the IP Output section of the Profile.  

&#50;. **Check "Enabled" and "Remote Wedge" boxes** to enable IP Output and communication with the IPWedge server component.

<img style="height:350px" src="../ip_output.png"/>
_IP Output Plug-in options_. 
<br>

&#51;. **Select the desired Protocol** for data transport (TCP or UDP) or accept the default (TCP).

&#52;. **Enter the IP address** of the server running IPWedge software.

&#53;. **Enter the Port number** if other than the default of 58627. 

### Using IP Output Plug-in without IPWedge

It is possible to use IP Output to send captured data to a remote device that's not running IPWedge. At the data receiving end, the PC or Mobile device should have a client application that listens to TCP or UDP data coming from the IP address and port specified in IP Output on the device. 

**Configure IP Output to send captured data to a remote computer or device**:

&#49;. Locate the IP Output section of the Profile.  

&#50;. **Check "Enabled" box** and **_uncheck_ the "Remote Wedge" box**.

&#51;. **Select the desired Protocol** for data transport (TCP or UDP) or accept the default (TCP).

&#52;. **Enter the IP address** of the server or device to receive the data.

&#53;. **Enter the Port number** (if other than the default of 58627). 

**Warning: Zebra does not support this usage scenario**.

-----

## Set Up IPWedge

&#49;. **Windows devices**: Visit the [IP Wedge page](https://www.zebra.com/us/en/support-downloads/software/utilities/ipwedge-for-datawedge.html) on the Zebra Support Portal and download the appropriate version for the target device. (For Android devices, skip to Step 2). 

&#50;. **Install the .zip file** on the system to which the scanned data will be sent. 

&#51;. **Run the IPWedge app**. A screen appears similar to the image below. **Make a note of the IP address and port number** (in the red box). 
<img style="height:200px" src="04_ipwedge.jpg"/>
_IPWedge System Tray menu_. 
<br>

> **Note: This default port number is the same as that of the IP Output Plug-in** on the device.

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

The PC is now ready to receive data from devices running DataWedge with the IP Output Plug-in (with IP address and port settings matching those of the PC). For device setup instructions, see "IP Output" in the [DataWedge Setup Guide](../setup). 

-----

**Related guides**:

* [Profiles/Plug-ins](../../profiles)
* [DataWedge APIs](../../api) 


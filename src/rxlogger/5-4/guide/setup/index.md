---
title: RxLogger Setup
layout: guide.html
product: RxLogger
productversion: '5.4'
---

## Overview

Overview
This chapter provides system requirements, installation procedures, and post installation tasks for associating the mobile device to a PC.

<!-- 
System Requirements
Supported PC
Microsoft® Windows 7, 8 or 10 (with Built-in Bluetooth or Bluetooth 4.0 Dongle connected)
Supported Devices
MC40 HC KitKat
MC40 HC Lollipop
TC51 HC Marshmallow


Installation
Installation requires two steps.
Install RxLogger PC Wedge on a PC
Install RxLogger on a Device
Install RxLogger PC Wedge on a PC
To install RxLogger PC Wedge on a PC:
Double-click setup.exe to install RxLogger PC Wedge on a supported PC.

Click Next.
Figure 1    Welcome to the Zebra RxLogger PC Wedge Setup Wizard Screen

Specify the installation folder or click Browse.
(Optional) Click Disk Cost to view the drives you can install Zebra RxLogger PC Wedge to, along with each drive’s available and required disk space and click OK.
To specify who to install Zebra RxLogger PC Wedge for, select Everyone or Just Me.



Click Next.
Figure 2    Select Installation Folder Screen

Click Next.
Figure 3    Confirm Installation Screen

Click Close.
Figure 4    Installation Complete Screen

Install RxLogger on a Device
To install RxLogger on a Device:
Copy the RxLogger.apk file to the internal or external storage of the device.
Using a file manager app, locate and tap RxLogger.apk to install (alternatively, execute the .apk with the adb command: adb install cartscan.apk).


Post Installation Tasks
After installing RxLoggerPCWedge on a PC and RxLogger on a device, the mobile device must be associated with the PC. By design, only one mobile device can be connected with the PC at a time. When connecting a device for the first time to a PC that is not already connected with another device, follow the steps below to associate the mobile device to a PC.
Associate Mobile Device to PC
To associate the mobile device to the PC, perform the following steps on the PC and on the device.
On the PC
To associate the mobile device to the PC, perform the following steps on the PC:
In Windows Bluetooth settings, enable Bluetooth and allow Bluetooth mobile devices to connect to the computer. If the PC does not support Bluetooth, insert a Bluetooth dongle and follow the setup instructions.

Run the RxLogger PC Wedge application shortcut from the desktop or click Start > All Programs > Zebra RxLogger PC Wedge > RxLoggerPCwedge.
Figure 5    Run RxLogger PC Wedge from Desktop Shortcut or from Start Menu

Instructions appear for connecting the device, including a barcode to scan.
The pairing barcode contains the PC name and the last four digits of the PC’s BT MAC address. For example, TestPC-1234.
Figure 6    Connect Device


On the Device
To associate the mobile device to the PC, perform the following steps on the device:
From the Home Screen, touch   Settings >  Bluetooth.
Slide the Bluetooth switch to the ON position.
Touch the Home Screen icon.


Touch    All Apps > RxLogger.
Figure 7    RxLogger App


Scan the barcode displayed on the PC by pressing a scan trigger or the scan button on the device.
Figure 8    Device is Not Connected to PC


Touch PAIR or follow the prompts for pairing the device with the PC (if connecting for the first time, as shown below).
Figure 9    Pair Device to PC

The Bluetooth pairing request dialog displays only if the mobile device has not been paired previously with the PC. On the dialog box, the user does not need to select the check box Allow xxxxxx to access your contacts and call history.

NOTE During the pairing process, on the PC side, the user may see a Windows notification pop up similar to A Bluetooth device is trying to connect, click to allow this. Ignore this message, and do not click it.
When successfully connected, a message displays on the device, similar to the one below.
Figure 10    Device is Connected to PC

The device model plus the last four digits of the MAC address and the PC name plus the last four digits of the MAC address display.


RxLogger is ready to use.


Uninstallation
Uninstallation requires two steps.
Uninstall RxLoggerPCWedge on a PC
Uninstall RxLogger on a Device
Uninstall RxLoggerPCWedge from a PC
To uninstall RxLoggerPCWedge from a PC:
Click Start > Control Panel > Programs.
On the Uninstall or change a program screen, locate Zebra RxLogger PC Wedge.
Right-click Zebra RxLogger PC Wedge and select Uninstall.
Uninstall RxLogger from a Device
To uninstall RxLogger from a device:
Touch    Settings >  Apps.
Touch RxLogger.
Touch UNINSTALL.
Touch OK to confirm.
Touch the Home Screen icon.
 -->


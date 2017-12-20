---
title: CartScan Setup
layout: guide.html
product: CartScan
productversion: '2.1'
---

## Overview

Upon receipt and processing of a valid software order, Zebra Software Distribution Services sends an email to the provided customer contact with an entitlement activation ID and software download instructions for both CartScanPCWedge for the PC and CartScan for the mobile device.

Installation requires two steps:
Install CartScanPCWedge on a PC.
Install CartScan on a mobile device.

Installing CartScanPCWedge on a PC

To install CartScan PC Wedge on a PC:
Upon receipt of an entitlement activation ID from Zebra Software Distribution Services, use the software download instructions to locate and unzip the download files.

Click the setup.exe to install CartScan PC Wedge on a supported PC. The Welcome screen displays.


Figure 1 (below) Welcome to the Zebra CartScan PC Wedge Setup Wizard Screen

figure_01.png
figure_02.png

<img alt="" style="height:350px" src="cartscan_01.png"/>
_The CartScan app for Android_
<br><img alt="" style="height:350px" src="cartscan_01.png"/>
_The CartScan app for Android_
<br>

Click Next. The Select Installation Folder screen displays.


Figure 2 (below) Select Installation Folder Screen


Specify the installation folder or click Browse.

(Optional) Click Disk Cost to view the drives to which you can install Zebra CartScan PC Wedge, along with available and required disk space on each drive. Click OK to exit.

To specify for whom to install Zebra CartScan PC Wedge, select Everyone or Just me.

Click Next.

Figure 3 (below) Confirm Installation Screen

figure_03.png
figure_04.png

<img alt="" style="height:350px" src="cartscan_01.png"/>
_The CartScan app for Android_
<br><img alt="" style="height:350px" src="cartscan_01.png"/>
_The CartScan app for Android_
<br>

Click Next to begin the installation.

The Installation Complete screen displays when the installation completes successfully.

Figure 4 (below) Installation Complete Screen

Click Close.

Installing CartScan on a Mobile Device

Upon receipt of an entitlement activation ID from Zebra Software Distribution Services, follow the instructions in email to install the CartScan Mobile application.


Post-Installation Tasks

After installing CartScanPCWedge on a PC and CartScan on a mobile device, the mobile device must be paired to the PC.

IMPORTANT:  Multiple mobile devices can be paired to a single PC, but only one mobile device at a time can connect to CartScanPCWedge.


Associating the Mobile Device the PC

NOTE:  The first time a mobile device is associated with a PC, it initiates a pairing request and tries to connect. This step can take a some time. Zebra recommends that an IT associate performs the pairing ahead of time.

On the PC

To associate the mobile device to the PC, perform the following steps on the PC: 

In Windows Bluetooth settings, enable Bluetooth and allow Bluetooth mobile devices to connect to the computer. If the PC does not support Bluetooth, insert a Bluetooth dongle and follow the setup instructions 
Run the CartScanPCWedge application shortcut from the desktop or click Start > All Programs > Zebra CartScan PC Wedge > CartScanPCwedge.

Figure 5 (below) Run CartScan PC Wedge from Desktop Shortcut or from Start Menu


figure_05.png
figure_06.png

<img alt="" style="height:350px" src="cartscan_01.png"/>
_The CartScan app for Android_
<br><img alt="" style="height:350px" src="cartscan_01.png"/>
_The CartScan app for Android_
<br>


Instructions appear for connecting the mobile device, including a barcode to scan.

NOTE:  For best scanning results, remove any privacy screens covering the monitor before scanning a barcode.

The pairing barcode contains the PC name and the last four digits of the PC BT MAC address. For example, TestPC-1234.

Figure 6 (below) Connect Mobile Device

On the Mobile Device

To associate the mobile device to the PC, perform the following steps on the mobile device:

From the Home screen, tap   Settings >  Bluetooth.

Slide the Bluetooth switch to the ON position.

Tap the Home screen icon (  ).

Tap		All Apps > CartScan. Figure 7	CartScan App

figure_07.png
figure_08.png

<img alt="" style="height:350px" src="cartscan_01.png"/>
_The CartScan app for Android_
<br><img alt="" style="height:350px" src="cartscan_01.png"/>
_The CartScan app for Android_
<br>

Scan the barcode displayed on the PC by pressing a scan trigger or the scan button on the mobile device.
Figure 8 (below) Mobile Device is Not Connected to PC

Tap PAIR or follow the prompts for pairing the mobile device with the PC (if connecting for the first time, as shown below).

Figure 9 (below) Pair Mobile Device to PC

figure_09.png
figure_10.png

<img alt="" style="height:350px" src="cartscan_01.png"/>
_The CartScan app for Android_
<br><img alt="" style="height:350px" src="cartscan_01.png"/>
_The CartScan app for Android_
<br>


NOTE: The Bluetooth pairing request dialog displays only if the mobile device was not paired previously with the PC.

Allowing access to contacts and call history is not required for CartScan functionality. Tapping the check box is not required.

When successfully connected, a message displays on the mobile device, similar to the one below.

Figure 10 (below) Mobile Device is Connected to PC



CartScan App (Mobile Device)	CartScan PC Wedge (PC)

CartScan is ready to use.

## Uninstallation

Uninstallation

Uninstallation requires two steps.

Uninstall CartScanPCWedge on a PC

Uninstall CartScan on a mobile device

Uninstalling CartScanPCWedge from a PC

To uninstall CartScanPCWedge from a PC:

Click Start > Control Panel > Programs.

On the Uninstall or change a program screen, locate Zebra CartScan PC Wedge.

Right-click Zebra CartScan PC Wedge and select Uninstall.

Uninstalling CartScan from a Mobile Device

To uninstall CartScan from a mobile device:

Tap   Settings >  Apps.

Tap CartScan.

Tap UNINSTALL.

Tap OK to confirm.

Tap the Home screen icon (	).


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
Install CartScan PC Wedge on a PC
Install CartScan on a Device
Install CartScan PC Wedge on a PC
To install CartScan PC Wedge on a PC:
Double-click setup.exe to install CartScan PC Wedge on a supported PC.

Click Next.
Figure 1    Welcome to the Zebra CartScan PC Wedge Setup Wizard Screen

Specify the installation folder or click Browse.
(Optional) Click Disk Cost to view the drives you can install Zebra CartScan PC Wedge to, along with each drive’s available and required disk space and click OK.
To specify who to install Zebra CartScan PC Wedge for, select Everyone or Just Me.



Click Next.
Figure 2    Select Installation Folder Screen

Click Next.
Figure 3    Confirm Installation Screen

Click Close.
Figure 4    Installation Complete Screen

Install CartScan on a Device
To install CartScan on a Device:
Copy the CartScan.apk file to the internal or external storage of the device.
Using a file manager app, locate and tap CartScan.apk to install (alternatively, execute the .apk with the adb command: adb install cartscan.apk).


Post Installation Tasks
After installing CartScanPCWedge on a PC and CartScan on a device, the mobile device must be associated with the PC. By design, only one mobile device can be connected with the PC at a time. When connecting a device for the first time to a PC that is not already connected with another device, follow the steps below to associate the mobile device to a PC.
Associate Mobile Device to PC
To associate the mobile device to the PC, perform the following steps on the PC and on the device.
On the PC
To associate the mobile device to the PC, perform the following steps on the PC:
In Windows Bluetooth settings, enable Bluetooth and allow Bluetooth mobile devices to connect to the computer. If the PC does not support Bluetooth, insert a Bluetooth dongle and follow the setup instructions.

Run the CartScan PC Wedge application shortcut from the desktop or click Start > All Programs > Zebra CartScan PC Wedge > CartScanPCwedge.
Figure 5    Run CartScan PC Wedge from Desktop Shortcut or from Start Menu

Instructions appear for connecting the device, including a barcode to scan.
The pairing barcode contains the PC name and the last four digits of the PC’s BT MAC address. For example, TestPC-1234.
Figure 6    Connect Device


On the Device
To associate the mobile device to the PC, perform the following steps on the device:
From the Home Screen, touch   Settings >  Bluetooth.
Slide the Bluetooth switch to the ON position.
Touch the Home Screen icon.


Touch    All Apps > CartScan.
Figure 7    CartScan App


Scan the barcode displayed on the PC by pressing a scan trigger or the scan button on the device.
Figure 8    Device is Not Connected to PC


Touch PAIR or follow the prompts for pairing the device with the PC (if connecting for the first time, as shown below).
Figure 9    Pair Device to PC

The Bluetooth pairing request dialog displays only if the mobile device has not been paired previously with the PC. On the dialog box, the user does not need to select the check box Allow xxxxxx to access your contacts and call history.

NOTE During the pairing process, on the PC side, the user may see a Windows notification pop up similar to A Bluetooth device is trying to connect, click to allow this. Ignore this message, and do not click it.
When successfully connected, a message displays on the device, similar to the one below.
Figure 10    Device is Connected to PC

The device model plus the last four digits of the MAC address and the PC name plus the last four digits of the MAC address display.


CartScan is ready to use.


Uninstallation
Uninstallation requires two steps.
Uninstall CartScanPCWedge on a PC
Uninstall CartScan on a Device
Uninstall CartScanPCWedge from a PC
To uninstall CartScanPCWedge from a PC:
Click Start > Control Panel > Programs.
On the Uninstall or change a program screen, locate Zebra CartScan PC Wedge.
Right-click Zebra CartScan PC Wedge and select Uninstall.
Uninstall CartScan from a Device
To uninstall CartScan from a device:
Touch    Settings >  Apps.
Touch CartScan.
Touch UNINSTALL.
Touch OK to confirm.
Touch the Home Screen icon.
 -->


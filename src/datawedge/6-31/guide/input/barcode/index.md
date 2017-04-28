---
title: Barcode Input Plug-ins
layout: guide.html
product: DataWedge
productversion: '6.3'
---

## Overview

Barcode Input Plug-ins specify the device hardware to be used to acquire barcode data before sending it for processing. Those included with DataWedge are explained below. **DataWedge also provides audio and other feedback to alert the user of scanning results and barcode type. The the [Scanner Parameters](../../decoders/#scanparams) section for more information**. 

For input using SimilScan, see the [SimulScan Input Plug-in](../simulscan). 

Barcode Input Plug-ins are used to specify: 

* Device cameras 
* 1D and 2D and imagers 
* Laser-based barcode scanners 
* Bluetooth-connected scanners 

**The Barcode Scanner Input Plug-in** reads data from the integrated barcode scanner built into the device, attached via cable or Bluetooth or implemented as a snap-on module. This Plug-in supports laser, imager and internal cameras. The raw barcode data that's acquired is processed or formatted as required using Process Plug-ins. 

**Note**: DataWedge concatenates all text captured through SimulScan into a single string, and performs processing on the concatenated string. See **SimulScan section** later in this guide. 

## Scanner Selection
For the Barcode Input Plug-in, the Scanner selection panel determines which scanning device will be used for data capture. The list of available scanners will be based devices that are present on (or connected to) the unit being configured. 
<img style="height:350px" src="../11_select_input.png"/>
<br>

The "Auto" option will automatically determine the best scanning device from the list of available devices based on the rules below. 

**Auto Scanner Selection Rules**:
* If a Zebra Scan Module or Scan/MSR Module is installed, the 2D imager will be selected. 
* If no Scan Module is installed, the camera will be selected. 
* When the camera is selected, scanning is performed with the rear-facing camera.
* When 2D Imager is selected, scanning is performed using the installed Scan or Scan/MSR module.

#### Bluetooth Scanners
DataWedge supports the following Zebra Bluetooth scanners: 

* **RS507** Cordless Ring Scanner
* **RS6000** Ring Scanner
* **DS3678** Ultra-Rugged Scanner

Bluetooth scanners are supported according to the following rules:

* **To initially configure the RS507** in a Profile, the scanner must be paired and connected.
* **After initial configuration**, the Bluetooth scanner can be enabled and disabled in the Profile even if it is disconnected from the device. However, to configure reader parameters, decoders and other scanner settings, the Bluetooth scanner must be connected.
* **DataWedge will not automatically reconnect** to a Bluetooth scanner if that scanner is connected while DataWedge is using a different auto-selected scanner. To re-enable a Bluetooth scanner, connect the scanner and select it in the Profile or re-choose the Auto select option.
* **Auto-selection and Battery Swap -** If Scanner selection is set to Auto and the RS507 was enabled prior to a battery swap, DataWedge will continue working with that RS507 scanner upon reconnection after the battery is swapped. If the RS507 does not reconnect with after the swap, DataWedge will revert to the current default scanner.
* **Keep Enabled on Suspend -** This mode is supported on Bluetooth and pluggable scanners, and might result in faster battery drain than would otherwise be expected while in suspend mode. **Note: The Zebra computing device will wake from suspend mode when the RS507 scan trigger is pressed**.

------

**Related guides**:

* [Process Plug-ins](../process)
* [Output Plug-ins](../output)
* [DataWedge APIs for Android](../../api) 

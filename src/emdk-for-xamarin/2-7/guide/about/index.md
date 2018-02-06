---
title: EMDK For Xamarin
layout: guide.html
product: EMDK For Xamarin
productversion: '2.7'
---

## Overview

EMDK for Xamarin is an IDE extension that provides developers with a comprehensive set of tools to easily create powerful line-of-business applications for Zebra Android devices using C# skills and tools. EMDK for Xamarin includes class libraries, sample applications and source code, and all associated documentation for building applications that take full advantage of the power of Zebra devices.

EMDK for Xamarin inserts the Zebra-exclusive Profile Manager technology within the IDE, providing a GUI-based development tool for configuring Zebra devices. This allows developers to write fewer lines of code, produce fewer errors, and reduce overall development time and effort.

-----

## New in v2.7

**Enhanced Barcode Manager API**:

* Supports Multi-barcode decoding
* New `MULTI_BARCODE` value in `enum` ScanMode enables simultaneous decoding of multiple barcodes
* New `MultiBarcodeParams` class in `ScannerConfig` adds `barcodeCount` parameter to set the barcode count to be scanned
* New `PRESS_AND_SUSTAIN` AimType avoids canceling a read by subsequently pressing the trigger button (TC20/TC25 devices only)

**Enhanced SerialComm API**:

* `flowControlMode` under Serial Config takes `RTS_CTS`, `XON_XOFF` and `NONE` values

**Enhanced Profile Manager DataCapture**: 

* Supports Serial Input plug-in
* Support Zebra DS-3608 scanner
* **Support for Multi-barcode decoding**:
 * New `Multi Barcode` Scanning Mode option in Reader parameters enables simultaneous decoding of multiple barcodes
 * New `Barcode count` field under Multi-barcode parameters allows a barcode count to be set
* Supports sending ENTER command as a string
* Enhanced support for Inter-character delay
* New `PRESS_AND_SUSTAIN` AimType avoids canceling a read by subsequently pressing the trigger button (TC20/TC25 devices only)

-----

**Support for MX 7.2** adds the following Setting Types and features:
* **Enhanced [Display Manager](../../mx/displaymgr) CSP**:
 * On VC80 devices, adds the ability to force the display to “Stay Awake” and remain on.
* **Enhanced [Power Manager](../../mx/powermgr) CSP**:
	* Turn ON/OFF “Doze Mode” energy saving features on the device. When enabled, only specially designated apps can prevent the device from entering a low-power state to preserve battery life. 
* **Enhanced [Remote Scanner Manager](../../mx/remotescannermgr) CSP**:
 * Supports RS-507 and DS-3608 scanners
* **Enhanced [Settings Manager](../../mx/settingsmgr) CSP**:
 * Enable/Disable application notification control on devices running Android Nougat

<!-- 2/6/18- removed per eng. 
* **New [Audio Manager](../../mx/audio) CSP**:
 * Controls whether audio on a device plays only through a connected handset or through the handset and the built-in device speaker (supported on the Zebra VC80x only).
 -->

-----

### Devices Supported

EMDK for Xamarin has been designed to work with all Zebra mobile computers running Android. 

**The following devices have been tested and validated**:

### Mobile devices

* ET5X   - Lollipop
* MC33   - Nougat
* TC20   - Nougat
* TC25   - Nougat
* TC51   - Marshmallow, Nougat
* TC56   - Marshmallow, Nougat
* TC70   - Lollipop
* TC70x  - Marshmallow, Nougat
* TC75   - Lollipop
* TC75x  - Marshmallow, Nougat 
* TC8000 - Lollipop
* VC80x  - Nougat
* WT6000 - Lollipop

### Scanners and imagers

* RS507
* RS6000
* RS5000
* RS4000
* DS3678
* DS3608

### Development Tools Supported

* **Windows**
    * Visual Studio
        * 2013
        * 2015
        * 2017
* **Mac OS X**
    * Xamarin Studio
        * 6.x

> **This version cannot target devices running KitKat**. 

-----

### Deprecations

* **Support for configuring DataWedge using EMDK Profile Manager is deprecated**. Profile Manager capabilities categorized under Data Capture are still supported but will no longer be advanced. Zebra recommends using [DataWedge intent-based APIs](/datawedge) to configure DataWedge profiles going forward.

* **Support for the** `ContinuousRead` **class is deprecated**. This class, which can be used to enable continuous scanning, is still supported but will no longer be advanced. Zebra recommends using the `aimType`, `sameSymbolTimeout`, `differentSymbolTimeout` reader parameters for the device camera, imager or laser.

* **Support for the** `picklist` **field is deprecated**. This field, which is used for enabling the `picklist` mode, is still support but will ultimately be replaced by the `picklistEx` field. 

-----

### Compatibility Notes

* When upgrading to a new version of EMDK for Xamarin, **previous versions must be uninstalled**. Failure to remove previous versions will result in an incomplete installation of the new extension. 
* Support for KitKat (Android 4.4.3 or higher) devices has been dropped. 
* For devices running Android Lollipop or higher, a device-specific update is distributed with the latest BSP or security incremental patch for that device.

-----

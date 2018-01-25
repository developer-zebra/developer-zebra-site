---
title: About EMDK For Android
layout: guide.html
product: EMDK For Android
productversion: '6.8'
---

## Overview

EMDK for Android is an extension for the Android Studio IDE that provides developers with a comprehensive set of tools to easily create powerful line-of-business applications for Zebra Android devices. EMDK for Android includes class libraries, sample applications with source code, and all associated documentation to help applications take full advantage of the power of Zebra devices.

EMDK for Android also inserts exclusive Profile Manager technology within the the IDE, providing a GUI-based development tool for configuring Zebra devices. This allows developers to write fewer lines of code, produce fewer errors, and reduce overall development time and effort.

## Requirements
The following software must be installed prior to using the EMDK for Android.

**Windows:**
* Microsoft Windows 7 (32-bit and 64-bit)  or Microsoft&copy; Windows 8 (32-bit and 64-bit) or Microsoft&copy; Windows 8.1 (32-bit and 64-bit)
* Java Development Kit (JDK) v7u45 or higher
* Android Studio v2.x or higher
 
**Mac OS X:**  
* Yosemite (10.10.x) | (64-bit)  or El Capitan (10.11.x) | (64-bit)
* Java for OS X 2014-10x or higher
* Java Development Kit (JDK) v7u75 or higher
* Installed via Android SDK manager 
	* The Android API 19 packages
	* The Android SDK Build-tools rev.21.1.x or higher

* Notes:
	* The appropriate Android SDK Platform package must be installed on the development machine in order to target the right EMDK APIs SDK add-on. For example, Android 6.0 (API 23) must be installed for targeting EMDK APIs (API 23) as Compile SDK Version in Android Studio.
	* For building EMDK samples, the Android SDK Build-tools rev.23.0.x or higher must be installed.
	* Prior to installing, all Android Studio sessions must be closed if already running.


## Devices Supported

* ET5X   - Lollipop
* MC18   - KitKat
* MC33   - Nougat
* MC40   - KitKat 
* MC67   - KitKat	 
* MC92   - KitKat 
* TC25   - Nougat
* TC51   - Marshmallow, Nougat
* TC55   - KitKat	 
* TC56   - Marshmallow, Nougat
* TC70   - KitKat, Lollipop
* TC70x  - Marshmallow, Nougat
* TC75   - KitKat, Lollipop
* TC75x  - Marshmallow, Nougat 
* TC8000 - KitKat,Lollipop
* WT6000 - Lollipop

-----

## New in v6.8

* Supports compiling applications to API 26 with new "EMDK APIs, Android 26, rev xx (API 26)" add-on

* **Enhanced Barcode Manager API**:
 * Supports MultiBarcode decoding
 * New `MULTI_BARCODE` value in `enum` ScanMode enables simultaneous decoding of multiple barcodes
 * New `MultiBarcodeParams` class in `ScannerConfig` adds `barcodeCount` parameter to set the barcode count to be scanned

* New `PRESS_AND_SUSTAIN` AimType avoids canceling a read by subsequently pressing the trigger button (TC20/TC25 devices only)

* **Enhanced SerialComm API**:
 * `flowControlMode` under Serial Config takes `RTS_CTS`, `XON_XOFF` and `NONE` values

* **Enhanced Profile Manager DataCapture**: 
 * Supports Serial Input plug-in
 * Support Zebra DS-3608 scanner

* Support for MultiBarcode decoding:
 * New `Multi Barcode` Scanning Mode option in Reader parameters enables simultaneous decoding of multiple barcodes
 * New `Barcode count` field under Multi-barcode parameters allows a barcode count to be set
 * Supports sending ENTER command as a string
 * Enhanced support for Inter-Character Delay
 * New `PRESS_AND_SUSTAIN` AimType avoids canceling a read by subsequently pressing the trigger button (TC20/TC25 devices only)

* **Support for MX 7.2** adds the following Setting Types and features:

* [Audio Manager](../../mx/audio) new CSP:
 * Controls whether audio on a device plays only through a connected handset or through the handset and the built-in device speaker (supported on the Zebra VC80x only).
* [Display Manager](../../mx/displaymgr) new feature:
 * On VC80 devices, adds the ability to force the display to “Stay Awake” and remain on.
* [Power Manager](../../mx/powermgr) new feature:
    * Turn ON/OFF “Doze Mode” energy saving features on the device. When enabled, only specially designated apps can prevent the device from entering a low-power state to preserve battery life. 
* [Remote Scanner Manager](../../mx/remotescannermgr) new feature:
 * Supports RS-507 and DS-3608 scanners
* [Settings Manager](../../mx/settingsmgr) new feature:
 * Enable/Disable application notification control on devices running Android Nougat

### Deprecations

* **Support for configuring DataWedge using EMDK Profile Manager is deprecated**. Profile Manager capabilities categorized under Data Capture are still supported but will no longer be advanced. Zebra recommends using [DataWedge intent-based APIs](/datawedge) to configure DataWedge profiles going forward.

* **Support for** `ProfileConfig` **class has been deprecated**. This class, which can be used to access profile data, remains supported but will no longer be advanced. Instead, Zebra recommends using the name-value pair function of Profile Manager or carefully modifying the Profile XML directly. Refer to the [Clock Sample](../../samples/clock) for information about modifying Profile XML data.

* **Support for the** `ContinuousRead` **class is deprecated**. This class, which can be used to enable continuous scanning, is still supported but will no longer be advanced. Zebra recommends using the `aimType`, `sameSymbolTimeout`, `differentSymbolTimeout` reader parameters for the device camera, imager or laser.

* **Support for the** `picklist` **field is deprecated**. This field, which is used for enabling the `picklist` mode, is still support but will ultimately be replaced by the `picklistEx` field. 

-----

## Components

### Profile Manager
The EMDK's exclusive [Profile Manager](../profile-manager) Technology is an additional advantage for developers giving you a GUI based development tool built on our open framework. This allows you to write fewer lines of code resulting in reduced development time, effort and errors. This innovative feature not only gives you easy access to critical functions such as bar code scanning and transaction processing via a magnetic stripe reader (MSR) but also functionality not available in Google's Android SDK.

### EMDK Device Runtime
In order for your application to use the EMDK For Android, you will need to install the EMDK Device Runtime on each device. This runtime is included with the EMDK For Android installation. Check the [Setup Guide](../setupDevice) for instructions. In the future the EMDK Services will be included with the default operating system for the device.

### Samples & Programmer's Guide
There are sample projects that are included as part of the EMDK For Android installation. You can import the project into your IDE and run on your device. Look at the [Sample Guide](../..//samples/) for more details on using these samples. You can also reference the [Programmers Guide](../../tutorial/) for a complete walk-through of building your first EMDK For Android application.

### Java APIs
The EMDK for Android offers access to the device's Barcode capabilities through traditional native Java Barcode APIs.

### Intent APIs
The EMDK for Android will continue to support the [DataCapture](../reference/refdatacaptureintent) and [Battery Intent](../reference/refbatteryintent) APIs that were previously available on individual device types. 


























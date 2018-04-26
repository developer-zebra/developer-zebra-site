---
title: About EMDK For Android
layout: guide.html
product: EMDK For Android
productversion: '6.9'
---

## Overview

EMDK for Android is an extension for the Android Studio IDE that provides developers with a comprehensive set of tools to easily create powerful line-of-business applications for Zebra Android devices. EMDK for Android includes class libraries, sample applications with source code and all associated documentation to help applications take full advantage of the power of Zebra devices.

EMDK for Android also inserts exclusive Profile Manager technology within the the IDE, providing a GUI-based development tool for configuring Zebra devices. This allows developers to write fewer lines of code, produce fewer errors and reduce overall development time and effort.

## Requirements
The following software must be installed prior to using the EMDK for Android:

**Windows**:
* Windows 7, 8, 8.1 (32- or 64-bit)
* Java Development Kit (JDK) v7u45 or higher
* Android Studio v2.x or higher
 
**Mac OS X**:  
* Mac OS X 10.10.x Yosemite or 10.11.x El Capitan (64-bit)
* Java for OS X 2014-10x or higher
* Java Development Kit (JDK) v7u75 or higher

<!-- 1/30/18- removed per eng. TUT-22799
* Installed via Android SDK manager: 
	* The Android API 19 packages
	* The Android SDK Build-tools rev.21.1.x or higher
 -->

**Notes**:

* **Install the Android SDK Platform package on the development host** appropriate for targeting the corresponding EMDK API SDK add-on. For example, Android 6.0 (API 23) must be installed for targeting EMDK APIs (API 23) as Compile SDK Version in Android Studio.
* **Android SDK 23.0.x or higher build tools must be installed** for building EMDK samples.
* **Close any running Android Studio sessions** prior to installing.

-----

## Devices Supported
_Devices/OSes new to this version are shown **in bold**_

### Mobile devices

* ET5X   - Lollipop, Marshmallow
* MC18	 - Lollipop
* MC32N0 - Lollipop
* MC33   - Nougat
* MC40   - Lollipop
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
* WT6000 - Lollipop, **Nougat**

### Scanners and imagers

* DS3608
* DS3678
* **LI3608**
* **LI3678**
* RS507
* RS4000
* RS5000
* RS6000

-----

## New in v6.9

### Device Support
EMDK for Android 6.9 adds support for the following Zebra devices/OSes:

* **LI3608** rugged USB scanner
* **LI3678** rugged Bluetooth scanner 
* **WT6000 running Android Nougat** 

### API Enhancements

**Enhanced Barcode Manager API**:
* Adds support for LI3608 rugged USB scanner
 * A new enum under `BarcodeManager.DeviceIdentifier` can be used to select the LI3608
* Adds support for LI3678 rugged Bluetooth scanner
 * A new enum under `BarcodeManager.DeviceIdentifier` can be used to select the LI3678

**Enhanced Notification Manager API**:
* A new `getDeviceIdentifier()` method in `DeviceInfo` class identifies the notification device
 * A new enum `DeviceIdentifier` supports `getDeviceIdentifier()` with following values:
	DEFAULT - default
	BLUETOOTH_IMAGER_RS6000 - Bluetooth imager RS6000
	EXTERNAL_VIBRATOR1 - External Vibrator

### Software Support

**Now supports [Android Studio v3.1](https://android-developers.googleblog.com/2018/03/android-studio-3-1.html)**

**Now supports MX v8.0** in Profile Manager adds the following Settings Types and features:

* **Enhanced [License Manager](../../mx/licensemgr)** adds these new actions: 
 * Select a licensing file to be embedded in the XML
 * Select a preactivated license source 
 * Query product-specific license information
 * Specify product name to be queried
 * Select the method used to supply the license .bin file
* **Enhanced [App Manager](../../mx/appmgr)** adds these new actions:  
 * Clear Application Cache 
 * Enable/disable All GMS Applications on the "Safe to Disable" list
* **Enhanced [Settings Manager](../../mx/settingsmgr)** adds these new actions: 
 * Enable/disable tethering and portable hotspot features
* **Enhanced [UI Manager](../../mx/uimgr)** adds these new actions:
 * Enable/disable the Magnification Gesture
 * Show/hide the Virtual KeyBoard while Physical Keyboard is active

-----

### Deprecations

* **SecureNFC APIs** allow applications to perform secure communications with the NFC tags such as MifareDesfire, MifarePlus SL3 using the Secure Access Module (SAM). These APIs remain supported but are no longer being advanced.
* **The ProfileConfig class**, used to access profile data, remains supported but is no longer being advanced. Zebra recommends using the name-value pair function of the Profile Manager. Profile XML data also can be modified directly. See the [Clock Sample](../../samples/clock) for information about how to modify Profile XML data.
* **The ContinuousRead class**, used to enable continuous scanning, remains supported but is no longer being advanced. Zebra recommends using the `aimType`, `sameSymbolTimeout`, `differentSymbolTimeout` of the camera-, imager- and laser-specific reader parameters.
* **The picklist field**, used for enabling picklist mode, remains supported but is no longer being advanced. Use the `picklistEx` field instead.

-----

## Version History

### Added in v6.8

* Supports compiling applications to Android API level 26 with new "EMDK APIs, Android 26, rev xx (API 26)" add-on

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

### Deprecations

* **Support for configuring DataWedge using EMDK Profile Manager is deprecated**. Profile Manager capabilities categorized under Data Capture are still supported but will no longer be advanced. Zebra recommends using [DataWedge intent-based APIs](/datawedge) to configure DataWedge profiles going forward.

* **Support for** `ProfileConfig` **class has been deprecated**. This class, which can be used to access profile data, remains supported but will no longer be advanced. Instead, Zebra recommends using the name-value pair function of Profile Manager or carefully modifying the Profile XML directly. Refer to the [Clock Sample](../../samples/clock) for information about modifying Profile XML data.

* **Support for the** `ContinuousRead` **class is deprecated**. This class, which can be used to enable continuous scanning, is still supported but will no longer be advanced. Zebra recommends using the `aimType`, `sameSymbolTimeout`, `differentSymbolTimeout` reader parameters for the device camera, imager or laser.

* **Support for the** `picklist` **field is deprecated**. This field, which is used for enabling the `picklist` mode, is still support but will ultimately be replaced by the `picklistEx` field. 

-----

## Components

### Profile Manager
The EMDK's exclusive [Profile Manager](../profile-manager) Technology is an additional advantage for developers giving you a GUI based development tool built on our open framework. This allows you to write fewer lines of code resulting in reduced development time, effort and errors. This innovative feature not only gives you easy access to critical functions such as bar code scanning and transaction processing via a magnetic stripe reader (MSR) but also functionality not available in Google's Android SDK.

<!-- 1/29/18- removed per eng. 
### EMDK Device Runtime
In order for your application to use the EMDK For Android, you will need to install the EMDK Device Runtime on each device. This runtime is included with the EMDK For Android installation. Check the [Setup Guide](../setupDevice) for instructions. In the future the EMDK Services will be included with the default operating system for the device.
 -->
### Samples & Programmer's Guide
There are sample projects that are included as part of the EMDK For Android installation. You can import the project into your IDE and run on your device. Look at the [Sample Guide](../..//samples/) for more details on using these samples. You can also reference the [Programmers Guide](../../tutorial/) for a complete walk-through of building your first EMDK For Android application.

### Java APIs
The EMDK for Android offers access to the device's Barcode capabilities through traditional native Java Barcode APIs.

<!-- 1/29/18- removed per eng. 
### Intent APIs
The EMDK for Android will continue to support the [DataCapture](../reference/refdatacaptureintent) and [Battery Intent](../reference/refbatteryintent) APIs that were previously available on individual device types. 
-->
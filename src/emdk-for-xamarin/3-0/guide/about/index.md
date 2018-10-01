---
title: About EMDK For Xamarin
layout: guide.html
product: EMDK For Xamarin
productversion: '3.0'
---

## Overview

EMDK for Xamarin is an IDE extension that provides developers with a comprehensive set of tools to easily create powerful line-of-business applications for Zebra Android devices using C# skills and tools. EMDK for Xamarin includes class libraries, sample applications and source code, and all associated documentation for building applications that take full advantage of the power of Zebra devices.

EMDK for Xamarin inserts the Zebra-exclusive Profile Manager technology within the IDE, providing a GUI-based development tool for configuring Zebra devices. This allows developers to write fewer lines of code, produce fewer errors, and reduce overall development time and effort.

-----

### Supported Devices

EMDK-X has been designed to work with all Zebra mobile computers running Android. 

**Devices tested and validated**:

### Mobile devices

* ET5X   - Lollipop
* MC33   - Nougat, Oreo `NEW`
* **PS20** - Oreo `NEW`
* TC20   - Nougat
* TC25   - Nougat
* TC51   - Marshmallow, Nougat
* **TC52** - Oreo `NEW`
* TC56   - Marshmallow, Nougat
* **TC57** - Oreo `NEW`
* TC70   - Lollipop
* TC70x  - Marshmallow, Nougat
* **TC72** - Oreo `NEW`
* TC75   - Lollipop
* TC75x  - Marshmallow, Nougat 
* **TC77** - Oreo `NEW`
* TC8000 - Lollipop
* VC80x  - Nougat
* **WT6000** - Lollipop, **Nougat** `NEW`

### Scanners and imagers

* RS507
* RS6000
* RS5000
* RS4000
* **DS2278**
* DS3678
* DS3608
* **LI3608** `NEW`
* **LI3678** `NEW`

-----

## What's New in 3.0

### Development Environment 

* **Now fully supports NuGet package management** 
* **Now supports for Visual Studio for Mac OS**

### Device Support

Adds support for the following mobile computers running Android 8.1 Oreo: 

* **PS20** Personal Shopper 
* **TC52** Touch Computer
* **TC57** Touch Computer
* **TC72** Touch Computer
* **TC77** Touch Computer

**Also added support for**:

* **LI3608** Rugged USB scanner
* **LI3678** Rugged Bluetooth scanner 
* **WT6000** Wearable computer running Android 7.x Nougat
* **DS2278** Standard range barcode scanner

### New Features

**Support for MX 8.2** provides the following enhancements:

* **Enhanced [UI Manager](../../mx/uimgr)** adds these new features: 
 * Enable/disable long-press on HOME key
 * Enable/disable date in Notification panel
 * Enable/disable long press on Recent Apps header icon to control access to app info

**Support for MX 8.1** provides the following enhancements:
* **Enhanced [Power Manager](../../mx/powermgr)** adds these new actions:
 * Specify an on-device file to verify an OS update
 * Specify whether to suppress auto-reboot following an A/B upgrade
* **Enhanced [Battery Manager](../../mx/batterymgr)** adds these new actions:
 * Enable/disable use of Battery Swap Mode UI
 * Enable/disable “battery charging” LED
* **Enhanced [Bug Report Manager](../../mx/bugreportmgr)** adds a new action:
 * Specify a time before expiration (in days) to store or email bug reports or send them to the cloud 
* **Enhanced [Cellular Manager](../../mx/cellularmgr)** adds these new actions:
 * Enable/disable user access to public land mobile network (PLMN) a device uses
 * Specify the MCC/MNC network PLMN LockSet
 * Show/hide PLMN lock UI
 * Determine the status of PLMN lock UI
 * Enable/disable Dual SIM Standby
 * Get the status of DSDS
* **Enhanced [DHCP Option Manager](../../mx/dhcp)** adds these new actions:
 * Enable/disable requests for a custom DHCP option from server
 * Request or disable a specified DHCP Option
 * Enable/disable sending of a custom DHCP Option to server
 * Send or disable a specified DHCP Option
 * Send a value with a specified custom DHCP Option
* **Enhanced [License Manager](../../mx/licensemgr)** adds these new actions:
 * Specify an Activation ID to return a license from the device
 * Specify server friendly name for returning one or all licenses and for deleting license source
 * Select the license source type to be used to return one or all licenses
* **Enhanced [Settings Manager](../../mx/settingsmgr)** adds these new actions:
 * Enable/disable the slide out drawer for accessing Android system settings
* **Enhanced [UI Manager](../../mx/uimgr)** adds these new actions: 
 * Enable/disable Split Screen mode
 * Enable/disable Do Not Disturb mode
 * Enable/disable Multi-user mode
* **Enhanced [Wi-Fi](../../mx/wifi)** adds these new actions:
 * Enable/disable MAC address randomization
 * Enable/disable Call Admission Control
 * Enable/disable user control of Hotspot state (active/inactive)

### Sample Code

* **[Sample code](../../samples) for EMDK for Xamarin are now available only online**; sample code is no longer installed on the development host as part of the EMDK installation.
* *** **Help files for EMDK for Xamarin are now available only online**; help is no longer installed on the development host as part of the EMDK installation.

-----

### API Enhancements

**Enhanced Barcode Manager API**:
* Adds support for LI3608 rugged USB scanner
 * A new enum under `BarcodeManager.DeviceIdentifier` can be used to select the LI3608
* Adds support for LI3678 rugged Bluetooth scanner
 * A new enum under `BarcodeManager.DeviceIdentifier` can be used to select the LI3678

**Enhanced Notification Manager API**:
* A new `getDeviceIdentifier()` method in `DeviceInfo` class identifies the notification device
* A new enum `DeviceIdentifier` supports `getDeviceIdentifier()` with following values:
 * DEFAULT - default
 * BLUETOOTH_IMAGER_RS6000 - Bluetooth imager RS6000
 * EXTERNAL_VIBRATOR1 - External Vibrator

-----

### Software Support

**On Windows, now supports <u>only</u> [Visual Studio 2017](https://www.visualstudio.com/vs/win)**

**On Mac OS X, now supports [Visual Studio for Mac](https://www.visualstudio.com/vs/mac/)**

**Now supports MX v8.0** in Profile Manager, adding the following features:

* **Enhanced [App Manager](../../mx/appmgr)** adds these new actions:  
 * Clear Application Cache 
 * Enable/disable All GMS Applications on the "Safe to Disable" list
* **Enhanced [License Manager](../../mx/licensemgr)** adds these new actions: 
 * Select a licensing file to be embedded in the XML
 * Select a preactivated license source 
 * Query product-specific license information
 * Specify product name to be queried
 * Select the method used to supply the license .bin file
* **Enhanced [Power Manager](../../mx/powermgr)** adds a new action:
 * Enable/disable PTT and scan buttons to wake the device from suspend mode 
* **Enhanced [Settings Manager](../../mx/settingsmgr)** adds a new action: 
 * Enable/disable tethering and portable hotspot features
* **Enhanced [UI Manager](../../mx/uimgr)** adds these new actions:
 * Enable/disable the Magnification Gesture
 * Show/hide the Virtual KeyBoard while Physical Keyboard is active


-----

### Deprecations

* **SecureNFC APIs** allow applications to perform secure communications with the NFC tags such as MifareDesfire, MifarePlus SL3 using the Secure Access Module (SAM). These APIs remain supported but are no longer being advanced.

* **The ContinuousRead class**, used to enable continuous scanning, remains supported but is no longer being advanced. Zebra recommends using the `aimType`, `sameSymbolTimeout`, `differentSymbolTimeout` of the camera-, imager- and laser-specific reader parameters (since v2.7). 

* **The picklist field**, used for enabling picklist mode, remains supported but is no longer being advanced. Use the `picklistEx` field instead (since v2.7).

* **Configuring DataWedge using EMDK Profile Manager has been deprecated**. Zebra recommends using DataWedge intent-based APIs to configure DataWedge profiles going forward (since v2.7).

* **No longer supports Visual Studio 2013 or Xamarin Studio (Mac/Windows)**

* **This is the last version to support Visual Studio 2015**

-----

## Version History

### New in v2.7

* **<u>No longer supports</u> Visual Studio 2013 for Windows 
* **<u>No longer supports</u> Xamarin Studio for Mac and Windows**

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

**Beta support for Visual Studio on Mac OS X**

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

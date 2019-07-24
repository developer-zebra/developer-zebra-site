---
title: About EMDK For Xamarin
layout: guide.html
product: EMDK For Xamarin
productversion: '5.0'
---

## Overview

EMDK for Xamarin is an IDE extension that provides developers with a comprehensive set of tools to easily create powerful line-of-business applications for Zebra Android devices using C# skills and tools. EMDK for Xamarin includes class libraries, sample applications and source code, and all associated documentation for building applications that take full advantage of the power of Zebra devices.

EMDK for Xamarin inserts the Zebra-exclusive Profile Manager technology within the IDE, providing a GUI-based development tool for configuring Zebra devices. This allows developers to write fewer lines of code, produce fewer errors, and reduce overall development time and effort.

-----

OLD OLD OLD

### Supported Devices

EMDK-X has been designed to work with all Zebra mobile computers running Android. **Devices and/or dessert flavors in bold are newly added** in the current release. 

**Devices tested and validated**:

### Mobile devices

* **EC30 - Oreo**
* **ET51 - Oreo**
* **ET56 - Oreo**
* **L10 - Oreo**
* MC33 - Oreo
* PS20 - Oreo, **Pie**
* TC51 - **Oreo**
* TC52 - Oreo, **Pie**
* TC56 - **Oreo**
* TC57 - Oreo
* TC72 - Oreo, **Pie**
* TC75x  - Marshmallow, Nougat 
* TC77 - Oreo
* **VC8300 - Oreo**

### Scanners and imagers

* RS507
* RS6000
* RS5000
* RS4000
* DS2278
* DS3678
* DS3608
* LI3608
* LI3678

-----

## New in v5.0


### Device Support
**Support <u>added</u> for these Zebra devices running Android 8.x Oreo**:<br>
* EC30 
* ET51 
* ET56 
* L10 
* VC8300 

**Support <u>added</u> for these Zebra devices running Android 9.x Pie**:<br>
* PS20
* TC52 
* TC72

**Support <u>terminated</u> for these Zebra devices running Android 7.x Nougat**:<br>
* MC33
* TC20 
* TC25
* TC51
* TC56 
* TC70x 
* TC75x 
* VC80x
* WT6000 

### Software Support
#### Support added: 
* Microsoft Visual Studio 2019
* Android 9.x Pie 

#### Support ends: 
* Android 7.x Nougat

To target Zebra devices running Android 7.x Nougat, please use [EMDK for Xamarin 4.0](/emdk-for-xamarin/4-0/guide/about).  

#### Deprecations:
Support for Unique Device Identification (UDI) standard barcodes such as GS1, HIBCC and ICCBBA in Barcode APIs has been deprecated; support will be terminated in Android 10 Q. 

-----

## Version History

### Added in v4.0
 
**Now supports MX 9.0**, which adds the following features and enhancements on devices running Android Oreo 8.1 and newer:
* **Enhanced [Battery Manager](../../mx/batterymgr)** now allows an admin to:
 * Specify a critically low battery threshold
* **Enhanced [UI Manager](../../mx/uimgr)** now allows an admin to:
 * Control user access to the Large Key Indicator (MC93 device only)
 * Turn the Large Key Indicator on or off (MC93 device only)

**Also now supports MX 8.4**, which adds the following features and enhancements on devices running Android Oreo 8.1 and newer:
* **Enhanced [GPRS Manager](../../mx/gprsmgr)**  now allows an admin to:
 * Specify the Mobile Virtual Network Operator (MVNO) type for an Access Point Name (APN)
 * Specify APN MVNO Match Data
* **Enhanced [UI Manager](../../mx/uimgr)**  now allows an admin to:
 * Control user access to the On-Screen Power Button
 * Control user access to the Status Bar
* **Enhanced [Wi-Fi](../../mx/wifi) CSP** can now enable/disable:
  * Aggregated MAC Protocol Data Unit (AMPDU)
  * Gratuitous ARP address resolution protocol
  * 2g Channel Bonding (40MHz-wide channel in 2.4GHz band)
  * Configuration of Extended WLAN settings

**Now supports Secure Access Module (SAM) APIs** for conducting secure NFC transactions on Oreo-based TC77 and TC72 devices with SAM hardware. 

**SAM APIs can be used to**:
* Enumerate available SAMs in the device
* Connect to a SAM
* Close a connection with a SAM
* Send APDU commands
* Retrieve the active SAM slot
* Check current SAM status (regardless of SAM connection status)
* Check the SAM type (supports Calypso, FeliCA and MIFARE)

Note: SAM APIs support only transceiver commands with the SAM. For NFC tag reading and tag-related transactions, Zebra recommends using the standard [Android NFC APIs](https://developer.android.com/guide/topics/connectivity/nfc).

### API Enhancements

**Enhanced Barcode Manager API** adds the following features on devices running Android 8.1 Oreo:
* Support for GridMatrix Symbology and Label type:
 * ScannerConfig enum `GridMatrixInverse` describes Enable/Disable/Auto options for decoding GridMatrix barcodes with inverse reflectance.
 * ScannerConfig enum `GridMatrixMirror` describes Enable/Disable/Auto options for decoding mirrored GridMatrix barcodes.
 * `ScannerConfig.DecoderParams.GridMatrix` parameter inverse allows selection of an option from GridMatrixInverse enum.
 * `ScannerConfig.DecoderParams.GridMatrix` parameter mirror allows selection of an option from GridMatrixMirror enum.
* Added the following `ScannerConfig.DecoderParams.Signature` decoder parameters:
 * **width** sets the width of the image.
 * **height** sets the height of the image. 
 * **format** sets the image format.
 * **jpegQuality** sets image quality to `.jpeg`.
 * **bpp** sets the bits-per-pixel for a monochromatic image.
* Added `ScannerConfig.DecoderParams.I2of5` decoder parameter:
 * **febraban** can enable or disable insertion of special "check" characters in the transmitted data stream of Interleaved 2 of 5 barcodes that are of length 14 and meet specific Febraban criteria.
* Added `ScannerConfig.ScanParams` scanner parameters:
 * `decodeScreenNotificationTime` sets the length of time (in milliseconds) to display the screen overlay upon successful decode.
 * `decodeScreenTranslucencyLevel` sets the percentage of translucency of the decode screen notification overlay.
* Added a `ScannerConfig.MultiBarcodeParams` parameter:
 * `instantReporting` can enable or disable instantaneous reporting of unique barcodes. Enabling this parameter ignores the value of `multiBarcodeParams.barcodeCount` param and reports the scanned data to the user instantaneously, without waiting until the end of the scanning session.
* Added support for Bluetooth scanner DS8178:
 * New `BarcodeManager.DeviceIdentifier` enum for selecting the DS8178 Bluetooth Scanner.
 * **Digimarc decoding support for rear camera** (formerly supported only on internal imagers).

### Deprecations

**Support ends for targeting devices running Android 6.x Marshmallow**. EMDK for Xamarin 3.0 was the final version to support Marshmallow targets. EMDK for Xamarin 4.0 supports only devices running Android 7.1.2 Nougat or newer.

<!-- copied from EMDK-A 7.3, but not mentioned in X release notes. 
**Support ends for SecureNFC APIs**. EMDK-A 7.2 was the final version to support these legacy APIs. For secure NFC transactions with EMDK for Android 7.3, Zebra recommends using Secure Access Module (SAM) APIs.
 -->

### Added in 3.0

#### Development Environment 

* **Now fully supports NuGet package management** 
* **Now supports for Visual Studio for Mac OS**

#### Device Support

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

-----

#### API enhancements
*Applies only to devices running Android 8.1.0 (Oreo) and higher*.

**Enhanced Barcode Manager API**
* Supports new symbologies and label types: GS1 Datamatrix and GS1 QR Code
   * Differentiates between Datamatrix and GS1 Datamatrix label types
   * Differentiates between QR Code and GS1 QR Code label types 
* Added Digimarc decoding through a reader parameter:
   * New digimarcDecoding parameter in `ImagerSpecific` class (supported on internal imagers only)
* Supports character set selection, including the following new parameters in `ImagerSpecific`, `CameraSpecific` and `LaserSpecific` classes:
   * `characterSetSelection` - Sets the character set used to decode the returned barcode data. Generally set to match the encoding of the physical barcode to be scanned (AUTO, ISO_8859_1, Shift_JIS, GB18030, UTF_8).
   * `autoCharacterSetPreferredOrder` - Sets the preferred character set order to decode the barcode data when character set selection is set to "Auto." 
   * `autoCharacterSetFailureOption` - Used as the character set (NONE, ISO_8859_1, Shift_JIS, GB18030, UTF_8) if the system cannot find a character set from the preferred order that can correctly decode the data.
* Supports Zebra DS2278 Bluetooth scanner:
   * New enum under `BarcodeManager.DeviceIdentifier` for selecting the DS2278.
* Supports `PRESS_AND_SUSTAIN` AimType for RS6000 and RS507 Bluetooth scanners. 

**Personal Shopper API**
* Supports `PersonalShopper` API for use with Zebra PS20 Personal Shopper device. 
   * Supports Cradle API
   * Supports Diagnostic API

<!-- 10/5/18- above added and below removed- remnent of work done on "2.8" version, now defunct?
 -->

#### Other API Enhancements

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

#### Software Support

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

#### Sample Code

* **[Code samples](../../samples) for EMDK for Xamarin are now available only online**; sample code is no longer installed on the development host as part of the EMDK installation.
* **Help files for EMDK for Xamarin are now available only online**; help is no longer installed on the development host as part of the EMDK installation.

#### End of Support

**IMPORTANT**: EMDK-X 3.0 no longer targets devices running Android 5.x Lollipop or older. 

**DEVICES NO LONGER SUPPORTED with Lollipop (and older)**:

* ET5x
* MC18
* MC32N0
* MC40
* TC70
* TC75
* TC8000
* WT6000

-----

#### Software Support

<!-- not true. supports 2015 up to v15.5.  
**On Windows, now supports <u>only</u> [Visual Studio 2017](https://www.visualstudio.com/vs/win)**
 -->
 **On Mac OS, now supports [Visual Studio for Mac](https://www.visualstudio.com/vs/mac/)**

**Also supports MX v8.0** in Profile Manager, which added the following features:

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

#### Deprecations

* **SecureNFC APIs** allow applications to perform secure communications with the NFC tags such as MifareDesfire, MifarePlus SL3 using the Secure Access Module (SAM). These APIs remain supported but are no longer being advanced.

* **The ContinuousRead class**, used to enable continuous scanning, remains supported but is no longer being advanced. Zebra recommends using the `aimType`, `sameSymbolTimeout`, `differentSymbolTimeout` of the camera-, imager- and laser-specific reader parameters (since v2.7). 

* **The picklist field**, used for enabling picklist mode, remains supported but is no longer being advanced. Use the `picklistEx` field instead (since v2.7).

* **Configuring DataWedge using EMDK Profile Manager has been deprecated**. Zebra recommends using DataWedge intent-based APIs to configure DataWedge profiles going forward (since v2.7).

* **No longer supports Visual Studio 2013 or Xamarin Studio (Mac/Windows)**

* **This is the last version to support Visual Studio 2015**

-----

### Added in 2.7

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

* **<u>Support ends for</u> Visual Studio 2013 for Windows** 
* **<u>Support ends for</u> Xamarin Studio for Mac and Windows**

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

#### Deprecations

* **Support for configuring DataWedge using EMDK Profile Manager is deprecated**. Profile Manager capabilities categorized under Data Capture are still supported but will no longer be advanced. Zebra recommends using [DataWedge intent-based APIs](/datawedge) to configure DataWedge profiles going forward.

* **Support for the** `ContinuousRead` **class is deprecated**. This class, which can be used to enable continuous scanning, is still supported but will no longer be advanced. Zebra recommends using the `aimType`, `sameSymbolTimeout`, `differentSymbolTimeout` reader parameters for the device camera, imager or laser.

* **Support for the** `picklist` **field is deprecated**. This field, which is used for enabling the `picklist` mode, is still support but will ultimately be replaced by the `picklistEx` field. 

-----

#### Compatibility Notes

* When upgrading to a new version of EMDK for Xamarin, **previous versions must be uninstalled**. Failure to remove previous versions will result in an incomplete installation of the new extension. 
* Support for KitKat (Android 4.4.3 or higher) devices has been dropped. 
* For devices running Android Lollipop or higher, a device-specific update is distributed with the latest BSP or security incremental patch for that device.

-----

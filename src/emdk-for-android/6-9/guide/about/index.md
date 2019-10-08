---
title: About EMDK For Android
layout: guide.html
product: EMDK For Android
productversion: '6.9'
---

## Overview

EMDK for Android is an extension for the Android Studio IDE that provides developers with a comprehensive set of tools to easily create powerful line-of-business applications for Zebra Android devices. EMDK for Android includes class libraries, sample applications with source code and all associated documentation to help applications take full advantage of the power of Zebra devices.

EMDK for Android also inserts exclusive Profile Manager technology within the the IDE, providing a GUI-based development tool for configuring Zebra devices. This allows developers to write fewer lines of code, produce fewer errors and reduce overall development time and effort.

## Prerequisites
The following software must be installed prior to using EMDK for Android:

**Windows**:
* Windows 7, 8, 8.1, 10 (32- or 64-bit)
* Java Development Kit (JDK) v7u45 or higher
* Android Studio v2.x or higher
(EMDK for Android validated on Android Studio 2.2.x, 2.3.x, 3.0 and 3.1)

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
* **WT6000** - Lollipop, **Nougat** `NEW`

### Scanners and imagers

* DS3608
* DS3678
* **LI3608** `NEW`
* **LI3678** `NEW`
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

**Now supports [Android Studio v3.1](https://android-developers.googleblog.com/2018/03/android-studio-3-1.html)**

**Now supports MX v8.0** in Profile Manager adds the following Settings Types and features:

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
* **The ProfileConfig class**, used to access profile data, remains supported but is no longer being advanced. Zebra recommends using the name-value pair function of the Profile Manager. Profile XML data also can be modified directly. See the [Clock Sample](../../samples/clock) for information about how to modify Profile XML data.
* **The ContinuousRead class**, used to enable continuous scanning, remains supported but is no longer being advanced. Zebra recommends using the `aimType`, `sameSymbolTimeout`, `differentSymbolTimeout` of the camera-, imager- and laser-specific reader parameters.
* **The picklist field**, used for enabling picklist mode, remains supported but is no longer being advanced. Use the `picklistEx` field instead.

-----

## Usage Notes

### General Interest

1. Initial settings for a project can be found at **[Creating a Project using Android Studio](../../tutorial/tutCreateProjectAndroidStudio/)**.
1. Integrator is a utility included with EMDK that can be used to install EMDK for Android components to installations of Android Studio development environment on the host PC.
1. If two applications are making modifications to the same profile, the settings of last modification will be effective for that profile. If both applications need their own settings to be effective and still want to use the same profile name, both applications must set the profile every time they come to foreground. However, if both applications create or modify the same DataCapture profile simultaneously, one of the operations will fail.
1. Zebra recommends closing all Android Studio windows before proceeding with uninstallation. Failure to do so might not remove the plug-in component from Android Studio. To remove it manually, go to plug-ins folder (`<Android Studio installation path>\plugins`) and delete folder: `com.symbol.emdk.wizard.intellijIdea`.
1. **Wi-Fi**: To use the Advanced Options under Wi-Fi, follow these steps:
	* PMKID must be enabled to enable PreAuth (PreAuth=1 and PMKID=1)   
	* FT must be enabled to enable FTRIC (FT=1 and FTRIC=1)
	* OKC must be disabled (OKC=0 and PMKID=1) to use PMKID caching
	* **Important Note**: The default “Fast Power Savings” value must be used for the “Power Save” parameter under the Advanced Options. Using the “Do Not Change” value will fail.   
1. **Analytics Manager**: “Enable File Upload” option is deprecated and removed (in MX 6.0). Use “File Upload” switch under newly introduced “Feature Switch” section instead. When migrating the profile to new MX version, please note that the configuration will lose the user selection for this field. Zebra recommends editing the configuration to set the “File Upload” options as required in the Analytics Manager configuration.
1. If the Bluetooth pairing information for RS507 in previous connection attempts has been deleted on the device side, the next connection attempt might fail. The workaround is to clean-boot the RS507 and retry.
1. When a BarcodeManager instance is created, EMDK disables DataWedge, effecting any application using DataWedge. When BarcodeManager is released, EMDK re-enables DataWedge.
1. If an application is to use BarcodeManager and ScanAndPairManager features, the first feature instance must be released before getting the other feature instance. Simultaneous use of BarcodeManager and ScanAndPairManager is not allowed.
1. ProfileManager has been enhanced to support simultaneous usage in multiple applications. This means that an individual application is need required to release **EMDKManager > ProfileManager** before going to the background. In previous versions, if an application going to the background did not release the ProfileManager, no other applications could access ProfileManager. However, the following restrictions still apply:
	* Only one instance of EMDKManager can be used in an application.
	* Only one instance of ProfileManager can be used in an application.
	* Other than the ProfileManager, all other features (i.e. EMDKManager > BarcodeManager) used in an application must be released before another application can use that feature.
	* All instances of all features including EMDKManager must be released before exiting the application.
1. A specific EMDK Profile Manager feature such as KeyMapping Manager might not be supported on all devices supported by EMDK. For details about feature support for specific devices, see the [MX Feature Matrix](/mx) and follow instructions there.
1. EMDK does not support Managed Profiles in devices running Android Marshmallow and higher. In a device with Managed Profiles enabled, when an EMDK sample app is installed via File Browser, MDM, etc. only a Personal (unmanaged) app of the EMDK sample will be created and function properly. A Work (managed) app of the EMDK sample will not be created. If an EMDK sample app is installed via Android Debug Bridge (ADB) in a device with Managed Profiles enabled, the Work app as well as the Personal app of the EMDK sample will be created in the device. Only the Personal app will behave as expected, not the Work (Managed) app.
1. To EMDK applications cannot use the same serial port at the same time. In addition, if DataWedge serial input is enabled for a port in an active profile, it should be disabled before using the port in EMDK. If the port is already in use, attempts to use the port by EMDK will fail.
1. If a VC80x device is connected to a computer via USB cable, serial port communications are blocked. Zebra recommends removing the USB cable before using the serial port.

-----

### API-related Usage

1. A profile name argument (the first argument of `processProfile` API) is mandatory.
1. If the profile name is given in the `extraData` (third argument of processProfile API) and if it does not match the profile name (first argument of `processProfile` API), the profile will NOT be modified.
1. The profile name provided in `extraData` (third argument of `processProfile` API) is ignored if a profile segment is present in `criteria` (first argument of `processProfile` API).
1. Developers must implement `EMDKListener` and wait for `onOpened()` before making any API call. If making any API calls inside `onResume()`, check the status of the `EMDKManager` object first. In some cases, `onResume()` can be called before the `onOpened()` callback, and the `EMDKManager` object can become null.
1. The `EMDKManager.release()` without an argument specifying the specific feature type (ex: FEATURE_TYPE.BARCODE) releases all the resources bound to underlying features. **This API must be called <u>before exiting the application only</u>**. Zebra recommends the using `onDestroy()` callback for this purpose.
1. **Profile API**: The profile applied by passing `extraData` in Profile Manager's process profile method is stored in the memory until the Profile Manager is released or process profile method is called with `PROFILE_FLAG.RESET`.
1. To determine if the `processProfile` API is successful, check the “statusCode." If the statusCode is set to “CHECK_XML," traverse through the response XML (embedded in `EMDKResults`) to obtain the error. The EMDK samples demonstrate the manipulation of response XML for errors.
1. In some cases the `EMDKResults.getExtendedStatusMessage()` might not provide correct status information.
1. **Barcode API**: Setting scanner configurations is not allowed while a read is pending. This behavior is demonstrated in the [BarcodeSample1](../../samples/barcode) code as well.
1. **Barcode API**: To handle barcode scanning during device suspend-resume cycle (ex: pressing Power key) or background-foreground switching (ex: pressing Home key), it is required to release BarcodeManager instance by calling `EMDKManager.release(FEATURE_TYPE.BARCODE)` during suspend/switching to background and gain new BarcodeManager instance by calling `EMDKManager.getInstance(FEATURE_TYPE.BARCODE)` during resume/switching to foreground. Zebra recommends using `onPause()` and `onResume()` callbacks for this purpose. This behavior is demonstrated in the [BarcodeSample1](../../samples/barcode) code as well.
1. **Barcode API**: The RS507 Bluetooth scanner supports device wake-up from suspend by pressing RS507 trigger. To use this feature, the RS507 scanner should not be disabled when the device goes to suspend. The generally recommended practice is to release the barcode scanner during device suspend or moving an app to the background.
1. EMDK API calls such as Barcode, SimulScan and SerialComm are designed to be called sequentially. If called within separate threads, such as from AsyncTasks, some kind of synchronization mechanism should be employed to prevent multiple EMDK API calls getting called simultaneously.
1. **Barcode API** While using Bluetooth and Pluggable scanners such as RS507, RS6000, RS4000, when the scanner DISCONNECTED event is received, the created scanner object must be released and cannot be used for future scanning tasks. When the subsequent CONNECTED event is received, a new scanner object must be created and used for scanning. See the [Using Bluetooth Scanner](../../tutorial/tutBluetoothScannerAPI/) tutorial or the [BarcodeSample1](../../samples/barcode) application for more programming information. Zebra recommends maintaining a time gap between every DISCONNECT and CONNECT for the Pluggable scanner devices.
1. The beam timer for RS507 scanners has a maximum value of 10 (seconds).
1. **Barcode API** Specifying any custom audio file with the same name as one of the system audio files (/system/media/audio/notifications/) for `decodeAudioFeedbackUri` in `ScannerConfig.ScannerParams` will play a system audio file instead of the specified custom audio file. This is working as designed.
1. **SimulScan API** When `SimulScanReader.read()` is called and if there are any unlicensed features in the selected template, an ERROR state is returned with extended status as "`UNLICENSED_FEATURE`" for each unlicensed feature in the template. Use `SimulScanStatusData.getStatusDescription()` to view the name of the unlicensed feature(s).
1. **ScanAndPair API**: Using the Bluetooth Name requires location permission to discover the nearby Bluetooth devices on devices running Android Marshmallow and higher. These permissions are enabled by default in EMDK. Turning off these permissions manually (**Settings > Apps > EMDK Service > Permissions**) in the EMDK service would result in failure to pair the Bluetooth device using ScanAndPair.
1. **Barcode and SimulScan APIs** require camera permission to use the device camera for scanning and document capture on devices running Android Marshmallow and higher. These permissions are enabled by default in EMDK. Turning off these permissions manually (**Settings > Apps > EMDK Service > Permissions**) in the EMDK service would result in failure to use the camera in Barcode and SimulScan.
1. **SerialComm API** Calling `SerialComm.enable()`, `SerialComm.read()` and `SerialComm.write()` while serial cables are disconnected might not throw an exception. Some kind of a mechanism should be employed to determine whether a cable is connected.
1. **MultiBarcode scanning**:
	* Barcodes can be of multiple label types. If the required number of barcodes (from 1-10, as set using the `BarcodeCount` parameter) is not in view of the scanner, the scanner will not decode any data. 
	* If the scanner's field of view contains a number of barcodes greater than the value set by `BarcodeCount`, the scanner will randomly decode any barcode(s) until the count is reached. For example, if the count is set to two and eight barcodes are in the field of view, the scanner returns data for the first two barcodes it sees, and returns the data in random order.
	* There is no guarantee that the order of returned data will be the same on any two scans; order of individual barcode data can vary with each scan.
	* In multi-barcode scanning mode, when a picklist reader parameter is set to a value other than “Disabled," the user is expected to move the crosshair to the specified number of barcodes to be scanned. Set this value (from 2-10) using the `BarcodeCount` parameter. Data is returned only after the specified number of barcodes is read.

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
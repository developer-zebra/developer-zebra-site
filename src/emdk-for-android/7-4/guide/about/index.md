---
title: About EMDK For Android
layout: guide.html
product: EMDK For Android
productversion: '7.4'
---

<div class="alert alert-danger alert-dismissible fade in" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> <h4>Important information about Data Capture interfaces:</h4> <p>Zebra <u>strongly recommends using DataWedge</u> for all applications that require barcode scanning and data capture. If using EMDK native Barcode APIs, migration to DataWedge interfaces is strongly advised.</p> <p> 
    </p><ul>
        <li>DataWedge APIs have the <b>same capabilities</b> currently available in EMDK.</li>
        <li>DataWedge Intent based APIs are <b>easier and faster to implement</b>.</li>
        <li><b>New features are always added to DataWedge first</b> and are then considered for addition to EMDK; there is no guarantee that the same features will be exposed in EMDK APIs.</li>
    </ul>
    <br>
    <a href="/datawedge" class="btn btn-danger">Learn About DataWedge</a>  <p></p> </div>


## Overview

EMDK for Android extends the Android Studio IDE for Mac OS and Windows with tools for easily creating powerful line-of-business applications for Zebra Android devices. EMDK for Android includes class libraries, sample apps and source code that enables developers to easily build apps that take full advantage of the power of Zebra devices.

Also included is Profile Manager, which enhances Android IDE with a GUI-based tool for generating all the code required to access and configure Zebra device features and settings. This enables developers to target Zebra devices with fewer lines of code, fewer errors and reduced overall development time.

> **Important**: Zebra distributes the EMDK SDK through a JCenter repository, and the EMDK Profile Manager plug-in through the JetBrains plug-in repository. To install, see the [EMDK-A Setup guide](../setup).

-----

### Supported Devices

#### Mobile devices

* CC600 - Oreo
* CC6000 - Oreo 
* MC33 - Oreo
* MC9300 - Oreo
* PS20 - Oreo
* TC20 - Oreo
* TC25 - Oreo
* TC51 - Oreo
* TC52 - Oreo
* TC56 - Oreo
* TC57 - Oreo
* TC70x - Oreo
* TC72 - Oreo
* TC75x - Oreo
* TC77 - Oreo
* TC8300 - Oreo
* VC80x - Oreo

<!-- 6/27/19- per eng, there will be no Nougat support for WT6000; device no longer supported by EMDK. 

* WT6000 - (OS support info to come)
 -->
<!-- **Bold text** indicates support added after initial release; device refresh might be required. 
 -->
#### Scanners and imagers

* DS2278
* DS3608
* DS3678
* LI3608
* LI3678
* RS507
* RS4000
* RS5000
* RS6000

-----

## New in v7.4 

#### Nougat Support Ends
**EMDK-A 7.4 and higher no longer targets devices running Android 7.x Nougat or older, including the WT6000 wearable computer**. To target the WT6000 (which currently supports up to Nougat), please use [EMDK-A 7.3](../../7-3/guide/about) or earlier.   

#### FAQ Page
EMDK-A 7.3 and 7.4 now present a page of [frequently asked questions](../../faq) submitted to Zebra customer- and partner-support departments. Answers are provided as a mixture of simple guidance, links to relevant guides and/or sample code. Access the page through the "FAQs" tab at the top of any EMDK-A guide page or the "FAQs" button in the EMDK-A tile on the [TechDocs main page](../../../../). 

#### SmartCradle API
**EMDK-A 7.4 introduces [Locking SmartCradle APIs](../../intents/cradle)** for the EC30, intent-based interfaces for controlling the secure charging station of Zebra's latest small form-factor mobile computing device. 

#### IrDA API
**EMDK-A 7.3 (and later) now contains [IrDA APIs](../../intents/irda)**, intent-based interfaces for controlling hardware that conforms to the Infrared Data Association (IrDA) specification** commonly found in mobile computers, printers, handheld remote controls and some medical devices. 

#### NFC Sample App
**An [NFC SAM sample app](../../samples/sam)** demonstrates usage of the NFC Secure Access Module, which allows secure communication with NFC tags from NFC-equipped Zebra devices. 

-----

## Version History

### Added in 7.3

* **EMDK for Android 7.3 (and later) has been certified to support [Android Studio 3.4](https://developer.android.com/studio/)**, which was released to the stable channel on Apr. 17.
* **[Android Intent APIs](../../intents) are now available**. 

#### Supported Devices
No new device support added in this version. 

#### New Features
 
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

#### API Enhancements

**Enhanced Barcode Manager API** adds the following features on devices running Android 8.1 Oreo:
* Support for GridMatrix Symbology and Label type:
 * ScannerConfig enum `GridMatrixInverse` describes Enable/Disable/Auto options for decoding GridMatrix barcodes with inverse reflectance.
 * ScannerConfig enum `GridMatrixMirror` describes Enable/Disable/Auto options for decoding mirrored GridMatrix barcodes.
 * `ScannerConfig.DecoderParams.GridMatrix` parameter inverse allows selection of an option from GridMatrixInverse enum.
 * `ScannerConfig.DecoderParams.GridMatrix` parameter mirror allows selection of an option from GridMatrixMirror enum.
* Added the following `ScannerConfig.DecoderParams.Signature` decoder parameters:
 * **width** sets the width of an image.
 * **height** sets the height of an image. 
 * **format** sets the image format.
 * **jpegQuality** sets image quality to `.jpeg`.
 * **bpp** sets the bits-per-pixel for a monochromatic image.
* Added `ScannerConfig.DecoderParams.I2of5` decoder parameter:
 * **Febraban** can enable or disable insertion of special "check" characters in the transmitted data stream of Interleaved 2 of 5 barcodes that are of length 14 and meet specific Febraban criteria.
* **Support for Presentation mode** activates continuous scene detection; scanning begins upon motion detection without a trigger press. Supports the following parameters:
 * enum `SceneDetectionQualifier` under `ScannerConfig` acts as a qualifier for starting scene detection when Presentation is selected as Aim Type.
 * Reader parameter `sceneDetectionQualifier` in `ScannerConfig.ReaderParams.ReaderSpecific.ImagerSpecific` activates the Presentation mode of scanning based on a Scene Detection Qualifier.
 * enum `AimType` in `ScannerConfig` Presentation option enables this mode.
* Added a `ScannerConfig.MultiBarcodeParams` parameter:
 * `instantReporting` can enable or disable instantaneous reporting of unique barcodes. Enabling this parameter ignores the value of `multiBarcodeParams.barcodeCount` param and reports the scanned data to the user instantaneously, without waiting until the end of the scanning session.
* Added support for Bluetooth scanner DS8178:
 * New `BarcodeManager.DeviceIdentifier` enum for selecting the DS8178 Bluetooth Scanner.
 * **Digimarc decoding support for rear camera** (formerly supported only on internal imagers).

#### Deprecations

**Support ends for SecureNFC APIs**. EMDK-A 7.2 was the final version to support these legacy APIs. For secure NFC transactions with EMDK for Android 7.3, Zebra recommends using Secure Access Module (SAM) APIs.

-----

### Added in 7.2

#### New Features
<!-- 
EMDK for Android v7.2 was not publicly released on the Zebra Support Web site.  Refer to the v7.2 TechDocs web page for more information.
 -->

**Now supports MX 8.3**, which adds the following features and enhancements on devices running Android Oreo 8.1 and newer:

* **New [NFC Manager](../../mx/nfcmgr)** CSP adds these new capabilities:  
   * **Enable/Disable**: 
    * NFC radio and its ability to communicate
    * NFC Data Exchange Format
    * Peer-to-Peer mode
    * CPU boost mode
    * Card Emulation mode
    * NFC usage when the Android "lock screen" is displayed
 * Select type A, B, F, or V tags for use
 * Select communication speed for Types A and B cards (TC55)
 * Select communication speed for ISO 14443-4 cards (TC75)
 * Select the Polling mode to balance performance with battery usage
 * Reset device to default NFC settings
* **Enhanced [Access Manager](../../mx/accessmgr)** adds these new features:
 * Select the Action to perform for Access to Protected Services
 * Specify a Service Identifier for a Service
 * Specify Package Name of a Service Caller
 * Specify a File name for the Signature of a Caller
* **Enhanced [Cellular Manager](../../mx/cellularmgr)** adds this new feature:
 * Specify an APN authentication type
* **Enhanced [KeyMapping Manager](../../mx/keymappingmgr)** added this new feature:
 * Select a key behavior for 'Diamond' mode
* **Enhanced [Wi-Fi](../../mx/wifi) CSP** adds this new feature:
 * Enable/Disable Wi-Fi verbose logging

#### API Enhancements

**Enhanced Barcode Manager API** adds the following features on devices running Android Oreo 8.1 and newer: 
* Adds support for new DotCode Symbology and Label type:
 * **enum DotCodeInverse under ScannerConfig** describes Enable/Disable/Auto options for decoding DotCode barcodes with inverse reflectance.
 * **enum DotCodeMirror under ScannerConfig** describes Enable/Disable/Auto options for decoding mirrored DotCode barcodes.
 * **inverse parameter under `ScannerConfig.DecoderParams.DotCode`** allows selection of one option from DotCodeInverse enum.
 * **mirror parameter under `ScannerConfig.DecoderParams.DotCode`** allows selection of an option from DotCodeMirror enum.
 * **A new zoom reader parameter in `ScannerConfig.ReaderParams.ReaderSpecific.CameraSpecific`** sets the zoom level (from 1&ndash;8 in increments of 1) for the camera.
* **Support for Decode Screen Notification** displays a screen overlay as a notification on a successful decode. Supports the following parameters in `ScannerConfig.ScanParams`:
 * `decodeScreenNotification` enables/disables decode screen notification
* Added `ScannerConfig.ScanParams` scanner parameters:
 * `decodeScreenNotificationTime` sets the length of time (in milliseconds) to display the screen overlay upon successful decode.
 * `decodeScreenTranslucencyLevel` sets the percentage of translucency (from 20&ndash;50; in increments of 5) of the decode screen notification overlay.


-----

### Added in 7.1


* Support for Zebra TC20 device running Android 8.1 Oreo (added Feb., 2019)
* Supports Android Multi-user mode. See the [Multi-user Programming guide](../multiuser) for more information. 

####`UPDATED FEB. 12 2019:` 
* **EMDK for Android 7.0 (and later) has been certified to support [Android Studio 3.3](https://developer.android.com/studio/)**, which was released to the stable channel on Feb. 5. 
* **The EMDK-A 7.1 plug-in will be released soon**. The EMDK-A 7.0 plug-in is fully compatible for use in the meantime.

####`UPDATED MAR. 13 2019:` 

**Enhanced Barcode Manager API** includes the following features for devices running Android 8.1 Oreo:
* **Support for Decode Screen Notification** enables a screen overlay to be displayed after successful decodes.
* **New scanner parameter** in `ScannerConfig.ScanParams`:
 * `decodeScreenNotification` enables/disables decode screen notifications
* **New Presentation mode** enables motion-based scanning without trigger press:
 * **Updated** `ScannerConfig` enum AimType enables this mode

-----

### Added in 6.10, 7.0

> **Important**: Zebra now distributes the EMDK SDK through a JCenter repository, and the EMDK Profile Manager plug-in through the JetBrains plug-in repository. To install, see the [EMDK-A Setup guide](../setup).

#### Device Support

EMDK 7.0 adds support for the following mobile computers running Android 8.1 Oreo: 

* **PS20** Personal Shopper 
* **TC52** Touch Computer
* **TC57** Touch Computer
* **TC72** Touch Computer
* **TC77** Touch Computer

This version adds support for the following scanners and/or imagers: 

* **DS2278** Standard range barcode scanner

#### End of Support

**IMPORTANT**: EMDK 7.0 no longer targets devices running Android 5.x Lollipop or older. 

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

-----

#### Deprecations

**SecureNFC APIs**, which allow applications to perform secure communications with NFC tags such as MifareDesfire, MifarePlus SL3 using the Secure Access Module (SAM), remain supported but are no longer being advanced.

-----

#### End of Support

**EMDK 7.0 no longer supports target devices running Android 5.x Lollipop** or older; support for Lollipop devices ended with EMDK 6.9. In general, EMDK updates for specific devices are distributed with the latest BSP or [LifeGuard patch](https://www.zebra.com/us/en/support-downloads/lifeguard-security.html). 

#### Other Notes

* EMDK code samples no longer include `ProfileDataCaptureSample1` and `SecureNFCSample1`.

* EMDK-A 7.0 is the last version able to target devices running Android 6.x Marshmallow.

-----

### Added in 6.9

EMDK 6.9 added support for the following Zebra devices/OSes:

* **LI3608** rugged USB scanner
* **LI3678** rugged Bluetooth scanner 
* **WT6000 running Android Nougat** 

#### API Enhancements

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

#### Software Support

**Now supports [Android Studio 3.1](https://android-developers.googleblog.com/2018/03/android-studio-3-1.html)**

**Now supports MX 8.0** in Profile Manager adds the following Settings Types and features:

* **Enhanced [App Manager](../../mx/appmgr)** adds these new actions:  
 * Clear Application Cache 
 * Enable/disable All GMS Applications on the "Safe to Disable" list
* **Enhanced [License Manager](../../mx/licensemgr)** adds these new actions: 
 * Select a licensing file to be embedded in the XML
 * Select a pre-activated license source 
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

#### Deprecations

* **SecureNFC APIs** allow applications to perform secure communications with the NFC tags such as MifareDesfire, MifarePlus SL3 using the Secure Access Module (SAM). These APIs remain supported but are no longer being advanced.
* **The ProfileConfig class**, used to access profile data, remains supported but is no longer being advanced. Zebra recommends using the name-value pair function of the Profile Manager. Profile XML data also can be modified directly. See the [Clock Sample](../../samples/clock) for information about how to modify Profile XML data.
* **The ContinuousRead class**, used to enable continuous scanning, remains supported but is no longer being advanced. Zebra recommends using the `aimType`, `sameSymbolTimeout`, `differentSymbolTimeout` of the camera-, imager- and laser-specific reader parameters.
* **The picklist field**, used for enabling picklist mode, remains supported but is no longer being advanced. Use the `picklistEx` field instead.

-----

#### Usage Notes

#### General Interest

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

#### API-related Usage

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
	* In multi-barcode scanning mode, when a picklist reader parameter is set to a value other than “Disabled," the user is expected to move the cross-hair to the specified number of barcodes to be scanned. Set this value (from 2-10) using the `BarcodeCount` parameter. Data is returned only after the specified number of barcodes is read.

-----

### Added in 6.8

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

#### Deprecations

* **Support for configuring DataWedge using EMDK Profile Manager is deprecated**. Profile Manager capabilities categorized under Data Capture are still supported but will no longer be advanced. Zebra recommends using [DataWedge intent-based APIs](/datawedge) to configure DataWedge profiles going forward.

* **Support for** `ProfileConfig` **class has been deprecated**. This class, which can be used to access profile data, remains supported but will no longer be advanced. Instead, Zebra recommends using the name-value pair function of Profile Manager or carefully modifying the Profile XML directly. Refer to the [Clock Sample](../../samples/clock) for information about modifying Profile XML data.

* **Support for the** `ContinuousRead` **class is deprecated**. This class, which can be used to enable continuous scanning, is still supported but will no longer be advanced. Zebra recommends using the `aimType`, `sameSymbolTimeout`, `differentSymbolTimeout` reader parameters for the device camera, imager or laser.

* **Support for the** `picklist` **field is deprecated**. This field, which is used for enabling the `picklist` mode, is still support but will ultimately be replaced by the `picklistEx` field. 

-----

## EMDK-A Components

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
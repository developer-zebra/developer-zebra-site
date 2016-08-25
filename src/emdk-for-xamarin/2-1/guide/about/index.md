---
title: EMDK For Xamarin
layout: guide.html
product: EMDK For Xamarin
productversion: '2.1'
---
The EMDK for Xamarin provides developers with a comprehensive set of tools to easily create powerful line of business applications for Android enterprise mobile computing devices while retaining their C# skills and tools. The EMDK for Xamarin includes class libraries, sample applications with source code, as well as all of the associated documentation to help your applications take full advantage of what Zebra Technologies devices have to offer.


## Devices Supported
Although EMDK for Android has been designed to work with all Symbol mobile computers running Android, the following devices have been used for validation:

* MC18 - KitKat
* MC40 - ( KitKat, Lollipop)
* MC92 - KitKat
* TC55 - KitKat
* TC70 -( KitKat, Lollipop) 
* TC75 - ( KitKat, Lollipop) 
* WT6000 -Lollipop

>Note: Be sure to run the [device update](/emdk-for-xamarin/2-1/guide/deviceupdate) on all devices before using the EMDK for Xamarin.



##What's New
**Version 2.1**


* Enhanced the EMDKManager > ProfileManager to support simultaneous usage in multiple applications. Refer to the “Usage Notes” for a complete description and restriction on using this feature.

* Added support for the MX v6.0 in the Profile Manager:
    * Clock
        * Added new feature to manage Auto Time Zone - whether to automatically acquire time zone from the network.
        * Added new feature to manage Military Time - whether to use Military (24 hour) time format.
        * Updated to allow Manual Time Zone setting when Auto Time is On.

    * Camera Manager - Some of the latest devices can now be used to take pictures using Imager. The Camera manager is enhanced to block the Imager from taking pictures.
    * Analytics Manager - Added new capability to enable or disable features such as File Upload, ANR (Application Not Respond) Info Collection, Ruggedness Info Collection, Feature Usage Info Collection, Restrict SelfUpdate WiFi Only, Device Info Collection and custom feature.

* Added support for the MX v5.2 in the Profile Manager:
    * Remote Scanner Manager - Ability to manage the remote scanners (tasks such as query the remote scanner information, update firmware, reset, etc). This feature currently supports RS6000 only.
    * UI Manager - Specify whether the access to QuickSettings will be allowed or not.

* Added support for the following MX v4.4 features in the Profile Manager:
    * Key Mapping Manager - Enhanced to support P1, P2, P3 and Left/ Right Trigger buttons.

* Enhanced the DataCapture feature in the Profile Manager:
    * Added support for choosing the remote scanners such as RS507, RS4000 and RS6000. Following are the expected values:
        * Bluetooth Imager 1 (Please note this value is for use with RS507 only)
        * Pluggable Laser 1
        * RS6000 Bluetooth Imager
    * Added support for controlling the barcode decode notifications:
        * Aim Mode - Enable/Disable scanner aim during scanning.
        * Illumination Brightness - Controls illumination brightness of the imager.
        * Decode Audio Feedback Mode - Controls the Audio feedback mode to be given by the host device (WT6000) and remote scanner (RS6000) upon barcode decode.
        * Decode LED Feedback Mode - Controls the LED feedback mode to be given by the host device (WT6000) and remote scanner (RS6000) upon barcode decode.

* Added support for new WT6000 Lollipop (Android 5.1.1) devices along with RS4000 and RS6000 scanner support.

* Enhanced Barcode Manager APIs for the following features:
    * Added support for new pluggable scanner RS4000 to be used with WT6000 device
        * Added new enum value "PLUGGABLE_LASER1" to BarcodeManager.DeviceIdentifier to specifically select RS4000 Scanner.
        * Added new enum value "PLUGGABLE_SSI" to ScannerInfo.ConnectionType for RS4000.
        * Connection event now fired for pluggable scanner RS4000 connection and disconnection. Earlier it was fired only for Bluetooth scanner connection and disconnection.
    * Added support for new Bluetooth Scanner RS6000 to be used with WT6000 device
        * Added new enum value "BLUETOOTH_IMAGER_RS6000" to BarcodeManager.DeviceIdentifier to specifically select RS6000 Scanner.
        * Connection event now fired for Bluetooth scanner RS6000 connection and disconnection.
    * Added new scanner configurations parameters in ScannerConfig.ScanParams
        * decodeAudioFeedbackMode - Controls the Audio feedback mode to be given by the host device (WT6000) and remote scanner (RS6000) upon barcode decode.
        * decodeLEDFeedbackMode - Controls the LED feedback mode to be given by the host device (WT6000) and remote scanner (RS6000) upon barcode decode.
        * Added new enums: DecodeLEDFeedbackMode, DecodeAudioFeedbackMode.
        * Connection idle timeout value 0 is supported. Device will not get disconnected when set to 0.
    * Enhanced the ScannerInfo class for selecting the scanner:
        * Added new method GetDeviceIdentifier() for selecting the scanner from the supported scanner devices. This method provides the information returned by the GetConnectionType() and GetDeviceType() methods in one call.

*  Added support for Notification APIs to send notifications to remote devices. This feature currently supports RS6000 and pluggable External Vibrator. The Notification APIs can be used for controlling following notifications:
    * Line Of Sight LED
    * Beeping
    * Vibration

* All samples written in Xamarin will support both landscape and portrait devices. Now it works with default/native device orientation. In WT6000, it is working in Landscape mode.

* Added support for ScanAndPair API. The ScanAndPair API provides a simple function to scan the barcode containing MAC address and pair with the Bluetooth remote device using the Serial Port Profile (SPP).

* Enhanced the Password fields in the Profile Manager to accept special characters.

* `Fixed:` BarcodeManager.GetSupportedDevicesInfo() returns outdated ScannerInfo when the remote scanner is connected and disconnected.

* `Fixed:` Using the DataCapture > Data Delivery > Intent field in the ProfileManager is returning the unsupported error.

*  `EMDK OS Update for TC8000 using Xamarin 2.1 is not supported.`










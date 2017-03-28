---
title: EMDK For Xamarin
layout: guide.html
product: EMDK For Xamarin
productversion: '2.3'
---
The EMDK for Xamarin provides developers with a comprehensive set of tools to easily create powerful line of business applications for Android enterprise mobile computing devices using their C# skills and tools. The EMDK for Xamarin includes class libraries, sample applications with source code, and all of the associated documentation for building applications take full advantage of what Zebra devices have to offer.

## Devices Supported
EMDK for Xamarin has been designed to work with all Zebra mobile computers running Android. 

**The following devices have been tested and validated**:

* MC18 - KitKat
* MC40 - KitKat
* MC92 - KitKat
* TC55 - KitKat
* TC70 - KitKat, Lollipop 
* TC75 - KitKat, Lollipop 
* WT6000 - Lollipop
* TC8000 - KitKat, Lollipop
* ET5X - Lollipop
* TC51 - Marshmallow
* TC56 - Marshmallow
* MC67 - KitKat
* TC75x - Marshmallow

>**Zebra recommends** running a [device update](/emdk-for-xamarin/2-3/guide/deviceupdate) on any device that will be using EMDK for Xamarin.

##What's New in Version 2.3

1. Xamarin Studio 6.0 Support (Xamarin Studio support is applicable only for Mac System, for Windows Visual studio should be used).
2. Added support for MX v6.2 in Profile Manager:
    * Touch Manager
        * Device Type - Select the Device Type to configure touch sensitivity.
        * Protector - Enable or disable the screen protector on the supported devices.
    * Cellular Manager
        * SimSocketSelect - Select the SIM card to connect to the network.
        * SimSocketUsage - Allow or disallow the SIM card selection for network connection.
    * KeyMapping Manager - Added key mapping support for NAV PAD Button.
3. Enhanced Barcode Manager APIs with the following features:
    * Added support for new pluggable scanner RS5000 to be used with WT6000 device. The following enhanced feature available in this release is for beta use only. It must not be used in production environment. A future version of EMDK will formally support this feature:
        * Added "PLUGGABLE_IMAGER_RS5000" under BarcodeManager.DeviceIdentifier for selecting this scanner.
    * Added new reader parameters in each ImagerSpecific, CameraSpecific and LaserSpecific classes under ScannerConfig.ReaderParams.ReaderSpecific:
        * aimTimer - Sets the duration for timed aim types such as timed hold and timed release.
        * sameSymbolTimeout - This setting is used to prevent the scanner driver from decoding the same symbol within this time interval during continuous scan.
        * differentSymbolTimeout - This setting is used to prevent the scanner from decoding another symbol within this time interval during continuous scan.
        * picklistEx - Allows the imager or camera to decode only the barcode that is directly under the cross-hair (+)/ center of the reticle part of the pattern. This replaces the Picklist field under the imager specific class . This feature also allows selecting the hardware or software picklist.
        * aimType - Allows selecting the aim type such as continuous, press & release, timed hold and timed release.
    * The ContinuousRead class which can be used to enable the continuous scanning has been deprecated. It is recommended to use the aimType, sameSymbolTimeout, differentSymbolTimeout of camera, imager and laser specific reader parameters.
4. Enhanced Profile Manager for the following features:
    *   DataCapture feature:
        * Support for selecting RS5000 as the scanning device. This enhanced feature available in this release is for beta use only. It must not be used in production environment. A future version of EMDK will formally support this feature.
        * Support for the new "Data Capture Plus (DCP)" feature. This feature Data Capture Plus (formerly known as the "Data Capture Panel") enables areas of the device screen to be designated as scan triggers. By tapping on a designated screen area, DataWedge will respond as it would to a scanner button-press or other hardware trigger.
        * Support for the new "Keep enabled on suspend" feature. Enabling this feature will keep the Bluetooth scanner enabled when the device is in suspend mode. Pressing the Bluetooth scan trigger will wake up the device for scanning.
    * Added new parameter “Receiver foreground flag” in Intent Output for delivering the captured data via Broadcast Intent to broadcast recipient permission to run at the foreground priority with a shorter timeout interval.
    * Added the following new parameters in Keystroke Output feature:
        * Multi byte character delay - Sets an inter character delay in milliseconds for multi byte characters. This setting was required to be set in-order to overcome data dispatching errors when dispatching multi byte characters to browser.
        * Key event delay - Sets a delay in milliseconds for dispatching control characters as keystrokes correctly to the foreground application.
5. Enhanced Serial Comm APIs with the following features:
    * Added getConfig() and setConfig() for accessing the current configuration settings such as baudRate, parity, dataBit and stopBit.
    * getSignalState() to query the signal status such as DTR, DCD, DSR, RI, RTS and CTS.
    * Added new method setSignalState() to set the signal status such as RTS and DTR.
    * Added getPortInfo() to query the port name.

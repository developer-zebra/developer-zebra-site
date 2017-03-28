---
title: EMDK For Xamarin
layout: guide.html
product: EMDK For Xamarin
productversion: '2.3'
---
The EMDK for Xamarin provides developers with a comprehensive set of tools to easily create powerful line of business applications for Android enterprise mobile computing devices while retaining their C# skills and tools. The EMDK for Xamarin includes class libraries, sample applications with source code, as well as all of the associated documentation to help your applications take full advantage of what Zebra Technologies devices have to offer.


## Devices Supported
EMDK for Xamarin has been designed to work with all Zebra mobile computers running Android. The following devices have been tested and validated:

* MC18 - KitKat, ~~Lollipop~~
* MC40 - KitKat, ~~Lollipop~~
* MC92 - KitKat
* TC55 - KitKat
* TC70 - KitKat, Lollipop 
* TC75 - KitKat, Lollipop 
* WT6000 - Lollipop
* TC8000 - **KitKat**, Lollipop
* ET5X - Lollipop, ~~Marshmallow~~
* **TC51 - Marshmallow**
* **TC56 - Marshmallow**
* **MC67 - KitKat**
* **TC75x - Marshmallow**

**Bold** indicates support added
-Strikethrough- indicates support removed 

>Note: Be sure to run the [device update](/emdk-for-xamarin/2-3/guide/deviceupdate) on all devices before using EMDK for Xamarin.

##What's New
**Version 2.3**

1.     Xamarin Studio 6.0 Support (Xamarin Studio support is applicable only for Mac System, for Windows Visual studio should be used).
2.     Added support for MX v6.2 in Profile Manager:
    * Touch Manager
        * Device Type - Select the Device Type to configure touch sensitivity.
        * Protector - Enable or disable the screen protector on the supported devices.
    * Cellular Manager
        * SimSocketSelect - Select the SIM card to connect to the network.
        * SimSocketUsage - Allow or disallow the SIM card selection for network connection.
    * KeyMapping Manager - Added key mapping support for NAV PAD Button.
3.     Enhanced Barcode Manager APIs with the following features:
    * Added support for new pluggable scanner RS5000 to be used with WT6000 device. The following enhanced feature available in this release is for beta use only. It must not be used in production environment. A future version of EMDK will formally support this feature.
        * Added "PLUGGABLE_IMAGER_RS5000" under BarcodeManager.DeviceIdentifier for selecting this scanner.
    * Added new reader parameters in each ImagerSpecific, CameraSpecific and LaserSpecific classes under ScannerConfig.ReaderParams.ReaderSpecific:
        * aimTimer - Sets the duration for timed aim types such as timed hold and timed release.
        * sameSymbolTimeout - This setting is used to prevent the scanner driver from decoding the same symbol within this time interval during continuous scan.
        * differentSymbolTimeout - This setting is used to prevent the scanner from decoding another symbol within this time interval during continuous scan.
        * picklistEx - Allows the imager or camera to decode only the barcode that is directly under the cross-hair (+)/ center of the reticle part of the pattern. This replaces the Picklist field under the imager specific class . This feature also allows selecting the hardware or software picklist.
        * aimType - Allows selecting the aim type such as continuous, press & release, timed hold and timed release.
        * The ContinuousRead class which can be used to enable the continuous scanning has been deprecated. It is recommended to use the aimType, sameSymbolTimeout, differentSymbolTimeout of camera, imager and laser specific reader parameters.
4.     Enhanced Profile Manager for the following features:
    *   DataCapture feature:
        * Support for selecting RS5000 as the scanning device. This enhanced feature available in this release is for beta use only. It must not be used in production environment. A future version of EMDK will formally support this feature.
        * Support for the new "Data Capture Plus (DCP)" feature. This feature Data Capture Plus (formerly known as the "Data Capture Panel") enables areas of the device screen to be designated as scan triggers. By tapping on a designated screen area, DataWedge will respond as it would to a scanner button-press or other hardware trigger.
        * Support for the new "Keep enabled on suspend" feature. Enabling this feature will keep the Bluetooth scanner enabled when the device is in suspend mode. Pressing the Bluetooth scan trigger will wake up the device for scanning.
    * Added new parameter “Receiver foreground flag” in Intent Output for delivering the captured data via Broadcast Intent to broadcast recipient permission to run at the foreground priority with a shorter timeout interval.
    * Added the following new parameters in Keystroke Output feature:
        * Multi byte character delay - Sets an inter character delay in milliseconds for multi byte characters. This setting was required to be set in-order to overcome data dispatching errors when dispatching multi byte characters to browser.
        * Key event delay - Sets a delay in milliseconds for dispatching control characters as keystrokes correctly to the foreground application.
5.     Enhanced Serial Comm APIs with the following features:
        * Added getConfig() and setConfig() for accessing the current configuration settings such as baudRate, parity, dataBit and stopBit.
        * getSignalState() to query the signal status such as DTR, DCD, DSR, RI, RTS and CTS.
        * Added new method setSignalState() to set the signal status such as RTS and DTR.
        * Added getPortInfo() to query the port name.


New in 2.2

1. Xamarin Studio 6.0 Support (Xamarin Studio support is applicable only for Mac System, for Windows Visual studio should be used).
2. Added support for ET50, ET55 and TC8000 Lollipop (Android 5.1.1) devices.
3. Added support for MX v6.1 in Profile Manager:
     * Threat Manager – Added new feature to configure the detection of rooting and to apply a countermeasure when the device is detected as being rooted.
     * UI Manager – Added new feature to allow or disallow network monitored messages/notifications.
     * Bluetooth Manager – Added new feature to enable or disable the mobile device discoverability.
     * GPRS Manager – Added new capability to add APN and set certain parameters such as proxy, server, port.
     * Wi-Fi – Added new feature to enable or disable the password protected encryption.
     * Device Administrator – Added new feature to select the type of screen lock such as no password, password, pattern and swipe.
     * Wireless Manager – Added new feature to specify balance between accuracy and battery life when using GPS.
     * KeyMapping Manager – Added key mapping support for Rear Button and Grip Trigger 2. 
4. Enhanced Barcode Manager APIs with the following features:
     * Added new decoder parameter in Code128, Code39, I2of5 and UpcEan decoders in ScannerConfig.DecoderParams:
         * ReducedQuietZone - Flag to enable or disable the decoding of margin less barcodes. 
     * Added new parameter to ScannerConfig.DecoderParams.Gs1DatabarLim:
         * SecurityLevel - Sets the four levels of decode security for GS1 Databar Lim barcodes.
     * Added new reader parameters in ScannerConfig.ReaderParams.ReaderSpecific.ImagerSpecific:
         * OneDQuietZoneLevel - This parameter sets the effort at which the decoder will attempt to decode margin-less barcodes.
         * PoorQualityDecodeEffortLevel - This parameter permits selection of enhancement modes for decoding barcodes of poor or degraded quality.
     * Added new reader parameters in ScannerConfig.ReaderParams.ReaderSpecific. CameraSpecific:
         * ViewfinderSize - Sets the View Finder window size in camera scanner as a percentage of full width and full height.
         * ViewfinderOffsetX - Sets the X axis position of the top left corner of the view finder.
         * ViewfinderOffsetY - Sets the Y axis position of the top left corner of the view finder.
         * OneDQuietZoneLevel - This parameter sets the effort at which the decoder will attempt to decode margin-less barcodes.
         * PoorQualityDecodeEffortLevel - This parameter permits selection of enhancement modes for decoding barcodes of poor or degraded quality.
     * Added new reader parameters in ScannerConfig.ReaderParams.ReaderSpecific.LaserSpecific:
         * AdaptiveScanning - This parameter enables or disables the adaptive scanning.
         * BeamWidth - Controls the beam width of the laser scanner. Laser beam width can be shortened or widened using this parameter.
         * OneDQuietZoneLevel - This parameter sets the effort at which the decoder will attempt to decode margin-less barcodes.
         * PoorQualityDecodeEffortLevel - This parameter permits selection of enhancement modes for decoding barcodes of poor or degraded quality.
     * Added new enums in ScannerConfig:
         * OneDQuietZoneLevel - Describes the effort at which the decoder will attempt to decode margin-less barcodes.
         * PoorQualityDecodeEffortLevel - Describes the selection of enhancement modes for decoding barcodes of poor or degraded quality.
         * AdaptiveScanning - Enable or Disable Adaptive scanning.
         * BeamWidth - Controls the beam width of the laser scanner
         * GS1LimitedSecurityLevel - Security level addition of GS1 DataBar lim decoder.
5. Enhanced DataCapture feature in the Profile Manager:
     * Added new reader parameters:
         * Aim Timer - Sets the duration (in ms) for timed aim modes.
         * Viewfinder Size - Sets the View Finder window size in camera scanner as a percentage of full width and full height.
         * Viewfinder X Offset - Sets the X axis position of the top left corner of the view finder.
         * Viewfinder Y Offset - Sets the Y axis position of the top left corner of the view finder.
         * Character Set Selection - Allows the user to convert the barcode data if different from default encoding type.
     * Added new values for Aim Type:
         * Timed Hold - Once trigger is pressed, an aiming session is started for a time specified by Aim Timer. When this time expires, a decode session is started and scan beam will be visible. The decode session will remain active until the Beam Timer expires, the trigger is released or a barcode is decoded.
         * Timed Release - Once the trigger is pressed, an aiming session is started and will continue until the trigger is released. If the Aim Timer is expired when the trigger is released, a decode session will be started with scan beam visible for a remaining time equal to Beam Timer or a barcode is decoded.
         * Press And Release - The scan beam starts when the trigger is pressed and released. The decode session will remain active until the Beam Timer expires or a barcode is decoded.
     * Added new values for Character Set Selection:
         * ISO-8859-1 - Allows the user to convert the barcode data using ISO-8859-1 character encoding type.
         * Shift_JIS - Allows the user to convert the barcode data using Shift_JIS character encoding type.
         * UTF-8 - Allows the user to convert the barcode data using UTF-8 character encoding type.
6. Enhanced the performance of using decodeAudioFeedbackUri in ScannerConfig.ScannerParams in Barcode Manager API.
7. Added PersonalShopper APIs for supporting MC18 specific features such as Cradle and Diagnostic.
8. Added support for Serial Communication APIs for devices such as TC75 and TC70. This feature provides simple APIs to enable/disable serial communication port, read and write data to/from remote devices attached.
9. Added support for TC5X Marshmallow Support.











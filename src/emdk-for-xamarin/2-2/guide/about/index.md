---
title: EMDK For Xamarin
layout: guide.html
product: EMDK For Xamarin
productversion: '2.2'
---
The EMDK for Xamarin provides developers with a comprehensive set of tools to easily create powerful line of business applications for Android enterprise mobile computing devices while retaining their C# skills and tools. The EMDK for Xamarin includes class libraries, sample applications with source code, as well as all of the associated documentation to help your applications take full advantage of what Zebra Technologies devices have to offer.


## Devices Supported
Although EMDK for Android has been designed to work with all Symbol mobile computers running Android, the following devices have been used for validation:

* MC18 - ( KitKat, Lollipop)
* MC40 - ( KitKat, Lollipop)
* MC92 - KitKat
* TC55 - KitKat
* TC70 -( KitKat, Lollipop) 
* TC75 - ( KitKat, Lollipop) 
* WT6000 - Lollipop
* TC8000 - Lollipop
* ET5X - (Lollipop, Marshmallow)

>Note: Be sure to run the [device update](/emdk-for-xamarin/2-2/guide/deviceupdate) on all devices before using the EMDK for Xamarin.



##What's New
**Version 2.2**

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











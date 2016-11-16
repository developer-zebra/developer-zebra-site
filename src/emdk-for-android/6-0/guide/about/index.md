---
title: About EMDK For Android
layout: guide.html
product: EMDK For Android
productversion: '6.0'
---

## Overview
The EMDK for Android provides developers with a comprehensive set of tools to easily create powerful line of business applications for enterprise mobile computing devices and is designed for use with Google's Android SDK and Android Studio. The EMDK for Android includes class libraries, sample applications with source code, as well as all of the associated documentation to help your applications take full advantage of what our devices have to offer.

It also includes an exclusive Profile Manager Technology within the your IDE, providing a GUI based development tool. This allows you to write fewer lines of code resulting in reduced development time, effort and errors.

## Requirements
The following software must be installed prior to using the EMDK for Android.

**Windows:**
* Microsoft Windows 7 (32-bit and 64-bit)  or Microsoft&copy; Windows 8 (32-bit and 64-bit) or Microsoft&copy; Windows 8.1 (32-bit and 64-bit)
* Java Development Kit (JDK) v7u45 or higher
* Android Studio 1.1.x or higher
* Installed via Android SDK manager
	* The Android API 19 packages
	* The Android SDK Build-tools rev.21.1.x or higher
 
**Mac OS X:**  
* Yosemite (10.10.x) | (64-bit)  or El Capitan (10.11.x) | (64-bit)
* Java for OS X 2014-10x or higher
* Java Development Kit (JDK) v7u75 or higher
* Installed via Android SDK manager 
	* The Android API 19 packages
	* The Android SDK Build-tools rev.21.1.x or higher


## Devices Supported
Although EMDK for Android has been designed to work with all Symbol mobile computers running Android, the following devices have been used for validation:

* MC18 - KitKat (4.4.4)
* MC40 - KitKat (4.4.4)
* MC92 - KitKat (4.4.4)
* TC55 - KitKat (4.4.3)
* TC70 - KitKat (4.4.3)
* TC75 - KitKat (4.4.3)
* TC8000 - KitKat (4.4.3),Lollipop (5.1.1)
* WT6000 - Lollipop (5.1.1)
* ET50 - Lollipop (5.1.1)
* ET55 - Lollipop (5.1.1)



## Important News
* EMDK for Android support for Payment APIs is **terminated** - With EMDK for Android v6.0, the support for Payment APIs is terminated. Even though this feature is available in this release, it must not be used in production environment. EMDK for Android v5.0 will continue to support Payment APIs.

* EMDK Support for all Jelly Bean (Android 4.1.2) and TC70 KitKat (Android 4.4.2) BSP version 112414 devices is **terminated** - EMDK for Android v6.0 and higher will support KitKat (except TC70 KitKat BSP version 112414) and higher OS versions. EMDK for Android v5.0 will continue to support Jelly Bean and TC70 KitKat BSP version 112414 devices.
	
* The following EMDK features are not supported on the **TC51** Marshmallow device:

	* Barcode scanning using Camera scanner
	* Notification API
	* SimulScan API
	* Payment API
	* Secure NFC API
	* Personal Shopper API
	* Serial Communication API


## What's New
1.  Added support for ET50, ET55 and TC8000 Lollipop (Android 5.1.1) devices.
2.  Added support for MX v6.1 in Profile Manager:
	*   Threat Manager – Added new feature to configure the detection of rooting and to apply a countermeasure when the device is detected as being rooted.
	*   UI Manager – Added new feature to allow or disallow network monitored messages/notifications.
	*   Bluetooth Manager – Added new feature to enable or disable the mobile device discoverability.
	*   GPRS Manager – Added new capability to add APN and set certain parameters such as proxy, server, port.
	*   Wi-Fi – Added new feature to enable or disable the password protected encryption.
	*   Device Administrator – Added new feature to select the type of screen lock such as no password, password, pattern and swipe.
	*   Wireless Manager – Added new feature to specify balance between accuracy and battery life when using GPS.
	*   KeyMapping Manager – Added key mapping support for Rear Button and Grip Trigger 2\.
		>Note: A specific EMDK Profile Manager feature such as Keymapping Manager may not be supported on all the devices supported by EMDK for Android. To find out the details about the support f
		or a such feature, please refer to the online help documentation and select the [specific feature](../../mx/) in Profile Manager.
3.  Enhanced Barcode Manager APIs with the following features:
	* Added new decoder parameter in Code128, Code39, I2of5 and UpcEan decoders in ScannerConfig.DecoderParams:
		* reducedQuietZone - Flag to enable or disable the decoding of margin less barcodes.
	* Added new parameter to ScannerConfig.DecoderParams.Gs1DatabarLim:
		* securityLevel - Sets the four levels of decode security for GS1 Databar Lim barcodes.
	* Added new reader parameters in ScannerConfig.ReaderParams.ReaderSpecific.ImagerSpecific:
		* oneDQuietZoneLevel - This parameter sets the effort at which the decoder will attempt to decode margin-less barcodes.
		* poorQualityDecodeEffortLevel - This parameter permits selection of enhancement modes for decoding barcodes of poor or degraded quality.
	 * Added new reader parameters in ScannerConfig.ReaderParams.ReaderSpecific. CameraSpecific:
		* viewfinderSize - Sets the View Finder window size in camera scanner as a percentage of full width and full height.
		* viewfinderOffsetX - Sets the X axis position of the top left corner of the view finder.
		* viewfinderOffsetY - Sets the Y axis position of the top left corner of the view finder.
		* oneDQuietZoneLevel - This parameter sets the effort at which the decoder will attempt to decode margin-less barcodes.
		* poorQualityDecodeEffortLevel - This parameter permits selection of enhancement modes for decoding barcodes of poor or degraded quality.
	* Added new reader parameters in ScannerConfig.ReaderParams.ReaderSpecific.LaserSpecific:
		* adaptiveScanning - This parameter enables or disables the adaptive scanning.
		* beamWidth - Controls the beam width of the laser scanner. Laser beam width can be shortened or widened using this parameter.
		* oneDQuietZoneLevel - This parameter sets the effort at which the decoder will attempt to decode margin-less barcodes.
		* poorQualityDecodeEffortLevel - This parameter permits selection of enhancement modes for decoding barcodes of poor or degraded quality.
	* Added new enums in ScannerConfig:
		* OneDQuietZoneLevel - Describes the effort at which the decoder will attempt to decode margin-less barcodes.
		* PoorQualityDecodeEffortLevel - Describes the selection of enhancement modes for decoding barcodes of poor or degraded quality.
		* AdaptiveScanning - Enable or Disable Adaptive scanning.
		* BeamWidth - Controls the beam width of the laser scanner.
		* GS1LimitedSecurityLevel - Security level addition of GS1 DataBar lim decoder.
4.  Enhanced DataCapture feature in the Profile Manager:
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
5. Enhanced the performance of using decodeAudioFeedbackUri in ScannerConfig.ScannerParams in Barcode Manager API.
6. The ProfileConfig class which can be used to access the profile data has been deprecated. It is recommended to use the [name-value pair](../xmlresponseguide/#createnamevaluepair) function of Profile Manager feature. The Profile XML can also be directly modified. Refer to the [Clock Sample](../../samples/clock/) for information on modifying Profile XML data.
7. `Fixed:` Toggling Hard trigger and soft trigger sometimes results into cancel read exception.
8. `Fixed:` In earlier versions, selecting EMDK APIs as target Compile Sdk Version in the Android Studio project would result in the compilation error. This issue is now fixed.


## Components

### Profile Manager
The EMDK's exclusive [Profile Manager](../profile-manager) Technology is an additional advantage for developers giving you a GUI based development tool built on our open framework. This allows you to write fewer lines of code resulting in reduced development time, effort and errors. This innovative feature not only gives you easy access to critical functions such as bar code scanning and transaction processing via a magnetic stripe reader (MSR) but also functionality not available in Google's Android SDK.   

### EMDK Device Runtime
In order for your application to use the EMDK For Android, you will need to install the EMDK Device Runtime on each device. This runtime is included with the EMDK For Android installation. Check the [Setup Guide](../setupDevice) for instructions. In the future the EMDK Services will be included with the default operating system for the device.

### Samples & Programmer's Guide
There are sample projects that are included as part of the EMDK For Android installation. You can import the project into your IDE and run on your device. Look at the [Sample Guide](../..//samples/) for more details on using these samples. You can also reference the [Programmers Guide](../../tutorial/) for a complete walk-through of building your first EMDK For Android application.

### Java APIs
The EMDK for Android offers access to the device's Barcode capabilities through [traditional native Java Barcode APIs](/emdk-for-android/6-0/api/barcode). Be sure to look at the [Barcode Scanning API tutorial.](../../tutorial/tutBasicScanningAPI)

### Intent APIs
The EMDK for Android will continue to support the [DataCapture](../reference/refdatacaptureintent) and [Battery Intent](../reference/refbatteryintent) APIs that were previously available on individual device types. 

























---
title: About EMDK For Android
layout: guide.html
product: EMDK For Android
productversion: '6.3'
---

## Overview
The EMDK for Android provides developers with a comprehensive set of tools to easily create powerful line of business applications for enterprise mobile computing devices and is designed for use with Google's Android SDK and Android Studio. The EMDK for Android includes class libraries, sample applications with source code, as well as all of the associated documentation to help your applications take full advantage of what our devices have to offer.

It also includes an exclusive Profile Manager Technology within the your IDE, providing a GUI based development tool. This allows you to write fewer lines of code resulting in reduced development time, effort and errors.

## Requirements
The following software must be installed prior to using the EMDK for Android.

**Windows:**
* Microsoft Windows 7 (32-bit and 64-bit)  or Microsoft&copy; Windows 8 (32-bit and 64-bit) or Microsoft&copy; Windows 8.1 (32-bit and 64-bit)
* Java Development Kit (JDK) v7u45 or higher
* Android Studio v2.x or higher
 
**Mac OS X:**  
* Yosemite (10.10.x) | (64-bit)  or El Capitan (10.11.x) | (64-bit)
* Java for OS X 2014-10x or higher
* Java Development Kit (JDK) v7u75 or higher
* Installed via Android SDK manager 
	* The Android API 19 packages
	* The Android SDK Build-tools rev.21.1.x or higher

* Notes:
	* The appropriate Android SDK Platform package must be installed on the development machine in order to target the right EMDK APIs SDK add-on. For example, Android 6.0 (API 23) must be installed for targeting EMDK APIs (API 23) as Compile SDK Version in Android Studio.
	* For building EMDK samples, the Android SDK Build-tools rev.23.0.x or higher must be installed.
	* Prior to installing, all Android Studio sessions must be closed if already running.


## Devices Supported
* ET5X   - Lollipop
* MC18   - KitKat, Lollipop
* MC32N0 - Lollipop
* MC40   - KitKat, Lollipop
* MC67   - KitKat	 
* MC92   - KitKat 
* TC51   - Marshmallow
* TC55   - KitKat	 
* TC56   - Marshmallow
* TC70   - KitKat, Lollipop
* TC70x  - Marshmallow
* TC75   - KitKat, Lollipop
* TC75x  - Marshmallow
* TC8000 - KitKat,Lollipop
* WT6000 - Lollipop

## Devices Not - Supported

* All Jelly Bean (Android 4.1.2)
* TC70 - KitKat (Android 4.4.2) with BSP version 112414 


## Important News
* EMDK OS update support for installation on Lollipop (Android 5.1.1) devices will be dropped -  The EMDK OS update which will be distributed with future EMDK installations will not support installation on Lollipop devices. EMDK for Android v6.3 will be the final version supporting installation on Lollipop (Android 5.1.1) devices. All future versions will support installation only on KitKat (Android 4.4.2) devices.

* Support for ProfileConfig class has been deprecated - The ProfileConfig class which can be used to access the profile data has been deprecated. It is recommended to use the name-value pair function of Profile Manager feature. The Profile XML can also be directly modified. Refer to the Clock Sample for information on modifying Profile XML data.

* Support for ContinuousRead class is deprecated - The ContinuousRead class which can be used to enable the continuous scanning has been deprecated. It is recommended to use the aimType, sameSymbolTimeout, differentSymbolTimeout of camera, imager and laser specific reader parameters.

* Support for picklist field is deprecated - The picklist field used for enabling the picklist mode has been deprecated and it is replaced by the field picklistEx.

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
1.  Added support for MX v6.2 in Profile Manager:
    * Cellular Manager 
        * SimSocketSelect - Select the SIM card to connect to the network.
        * SimSocketUsage - Allow or disallow the SIM card selection for network connection.
    * KeyMapping Manager 
        * Added key mapping support for Touch NAV_PAD.
    * Touch Manager 
        * Device Type - Select the Device Type to configure touch sensitivity.
        * Protector - Enable or disable the screen protector on the supported devices.
2.  Enhanced Barcode Manager APIs with the following features:
    * Added support for new pluggable scanner RS5000 to be used with WT6000 device. Use "PLUGGABLE_IMAGER_RS5000" under BarcodeManager.DeviceIdentifier for selecting this scanner.
    * Added new reader parameters in each ImagerSpecific, CameraSpecific and LaserSpecific classes under ScannerConfig.ReaderParams.ReaderSpecific:
        * aimTimer - Sets the duration for timed aim types such as timed hold and timed release.
        * sameSymbolTimeout - This setting is used to prevent the scanner driver from decoding the same symbol within this time interval during continuous scan.
        * differentSymbolTimeout - This setting is used to prevent the scanner from decoding another symbol within this time interval during continuous scan.
        * picklistEx - Allows the imager or camera to decode only the barcode that is directly under the cross-hair (+)/ center of the reticle part of the pattern. This replaces the Picklist field under the imager specific class . This feature also allows selecting the hardware or software picklist.
        * aimType - Allows selecting the aim type such as continuous, press & release, timed hold and timed release.
	* The ContinuousRead class which can be used to enable the continuous scanning has been deprecated. It is recommended to use the aimType, sameSymbolTimeout, differentSymbolTimeout of camera, imager and laser specific reader parameters.
3. Enhanced Profile Manager for the following features:
    * DataCapture feature:
        * Support for selecting RS5000 as the scanning device.
        * Support for the new "Data Capture Plus (DCP)" feature. This feature Data Capture Plus (formerly known as the "Data Capture Panel") enables areas of the device screen to be designated as scan triggers. By tapping on a designated screen area, DataWedge will respond as it would to a scanner button-press or other hardware trigger.
        * Support for the new "Keep enabled on suspend" feature. Enabling this feature will keep the Bluetooth scanner enabled when the device is in suspend mode. Pressing the Bluetooth scan trigger will wake up the device for scanning.
    * Added new parameter “Receiver foreground flag” in Intent Output for delivering the captured data via Broadcast Intent to broadcast recipient permission to run at the foreground priority with a shorter timeout interval.
    * Added the following new parameters in Keystroke Output feature:
        * Multi byte character delay -  Sets an inter character delay in milliseconds for multi byte characters. This setting was required to be set in-order to overcome data dispatching errors when dispatching multi byte characters to browser.
    * Key event delay - Sets a delay in milliseconds for dispatching control characters as keystrokes correctly to the foreground application.
4. Enhanced Serial Comm APIs with the following features:
    * Added getConfig() and setConfig() for accessing the current configuration settings such as baudRate, parity, dataBit and stopBit.
    * Added getSignalState() to query the signal status such as DTR, DCD, DSR, RI, RTS and CTS.
    * Added new method setSignalState() to set the signal status such as RTS and DTR.
    * Added getPortInfo() to query the port name.

## Components

### Profile Manager
The EMDK's exclusive [Profile Manager](../profile-manager) Technology is an additional advantage for developers giving you a GUI based development tool built on our open framework. This allows you to write fewer lines of code resulting in reduced development time, effort and errors. This innovative feature not only gives you easy access to critical functions such as bar code scanning and transaction processing via a magnetic stripe reader (MSR) but also functionality not available in Google's Android SDK.   

### EMDK Device Runtime
In order for your application to use the EMDK For Android, you will need to install the EMDK Device Runtime on each device. This runtime is included with the EMDK For Android installation. Check the [Setup Guide](../setupDevice) for instructions. In the future the EMDK Services will be included with the default operating system for the device.

### Samples & Programmer's Guide
There are sample projects that are included as part of the EMDK For Android installation. You can import the project into your IDE and run on your device. Look at the [Sample Guide](../..//samples/) for more details on using these samples. You can also reference the [Programmers Guide](../../tutorial/) for a complete walk-through of building your first EMDK For Android application.

### Java APIs
The EMDK for Android offers access to the device's Barcode capabilities through [traditional native Java Barcode APIs](/emdk-for-android/6-3/api/barcode). Be sure to look at the [Barcode Scanning API tutorial.](../../tutorial/tutBasicScanningAPI)

### Intent APIs
The EMDK for Android will continue to support the [DataCapture](../reference/refdatacaptureintent) and [Battery Intent](../reference/refbatteryintent) APIs that were previously available on individual device types. 


























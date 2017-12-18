---
title: About EMDK For Android
layout: guide.html
product: EMDK For Android
productversion: '6.7'
---

## Overview
The EMDK for Android provides developers with a comprehensive set of tools to easily create powerful line of business applications for enterprise mobile computing devices and is designed for use with Google's Android SDK and Android Studio. The EMDK for Android includes class libraries, sample applications with source code, as well as all of the associated documentation to help your applications take full advantage of what our devices have to offer.

It also includes an exclusive Profile Manager Technology within the your IDE, providing a GUI based development tool. This allows you to write fewer lines of code resulting in reduced development time, effort and errors.

## Requirements
The following software must be installed prior to using the EMDK for Android.

<!-- 
>**EMDK for Android 6.7 does not support Android Studio 3.0**
 -->
 
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
* MC18   - KitKat
* MC33   - Nougat
* MC40   - KitKat 
* MC67   - KitKat	 
* MC92   - KitKat 
* TC25   - Nougat
* TC51   - Marshmallow, Nougat
* TC55   - KitKat	 
* TC56   - Marshmallow, Nougat
* TC70   - KitKat, Lollipop
* TC70x  - Marshmallow, Nougat
* TC75   - KitKat, Lollipop
* TC75x  - Marshmallow, Nougat 
* TC8000 - KitKat,Lollipop
* WT6000 - Lollipop

## Important News

* EMDK for Android support for all KitKat (Android 4.4.x) devices has been dropped. - EMDK for Android v6.6 was the final version supporting KitKat (Android 4.4.3 or higher) devices. Starting from EMDK for Android v6.7, only the Lollipop or higher devices are supported.
* EMDK OS update package for KitKat devices will no longer be distributed- The EMDK for Android v6.6 was the final version distributing EMDK OS update package with the PC/MAC installations for KitKat devices. For all Lollipop or higher devices, the EMDK update for a specific device will be distributed with the latest BSP or security incremental patch.
* EMDK for Android support for all Jelly Bean (Android 4.1.2) and TC70 KitKat (Android 4.4.2) BSP version 112414 devices has been terminated - EMDK for Android v5.0 was the final version supporting these devices.
* EMDK for Android support for Payment APIs is terminated - The EMDK for Android v5.0 is the final version that supports Payment APIs.
* Support for ProfileConfig class has been deprecated - The ProfileConfig class which can be used to access the profile data has been deprecated. It is recommended to use the name-value pair function of Profile Manager feature. The Profile XML can also be directly modified. Refer to the Clock Sample for information on modifying Profile XML data.
* Support for ContinuousRead class is deprecated - The ContinuousRead class which can be used to enable the continuous scanning has been deprecated. It is recommended to use the aimType, sameSymbolTimeout, differentSymbolTimeout of camera, imager and laser specific reader parameters.


## What's New

* Added support for Nougat devices
* Added support to scan barcode using Camera on TC51, TC56, TC70x and TC75x Nougat (Android 7.1.2) devices. This is supported if the system has Scanner Framework 19.0.8.0 or above.
* Added support for MX v7.1 in Profile Manager:
    * License Manager – Added new feature to perform license management operations such as configure license source, license activation etc.
    * Display Manager – Added ability to control display blanking.
    * Key Mapping Manager – Added macro keys, brightness keys and keyboard as options
    * Wireless Manager – Added ability to select antenna to use for both WiFi and Bluetooth.
    * Power Manager
        * Added ability to select ports and specify port action.
        * Added ability to select the Heater and specify heater action
        * Added ability to configure auto power options
        * Added ability to disable GMS Welcome Screen on Enterprise Reset
        * Added ability to specify the temperature at which the heater should turn ON or OFF
    * UI Manager
        * Added ability to enable/disable Navigation Bar.
        * Added ability to enable/disable Recent App button.
    * Wi-Fi
        * Added ability to enable/disable Wireless Network Management (802.11v).
* Enhanced SerialComm API:
    * Added a feature to concurrently communicate with the multiple connected serial devices on VC80x
* Enhanced Barcode Manager API with the following features:
    * Added support for new USB Scanner DS3608; A new enum under BarcodeManager.DeviceIdentifier for selecting the DS3608 USB Scanner was added.
    * This scanner is supported with VC80x and ET5X devices.
* Terminated EMDK for Android support for all KitKat (Android 4.4.x) devices. - The Xamarin EMDK v2.5 was the final version supporting KitKat (Android 4.4.x) devices. Starting from Xamarin EMDK v2.5, only the Lollipop or higher devices are supported.

## Components

### Profile Manager
The EMDK's exclusive [Profile Manager](../profile-manager) Technology is an additional advantage for developers giving you a GUI based development tool built on our open framework. This allows you to write fewer lines of code resulting in reduced development time, effort and errors. This innovative feature not only gives you easy access to critical functions such as bar code scanning and transaction processing via a magnetic stripe reader (MSR) but also functionality not available in Google's Android SDK.

### EMDK Device Runtime
In order for your application to use the EMDK For Android, you will need to install the EMDK Device Runtime on each device. This runtime is included with the EMDK For Android installation. Check the [Setup Guide](../setupDevice) for instructions. In the future the EMDK Services will be included with the default operating system for the device.

### Samples & Programmer's Guide
There are sample projects that are included as part of the EMDK For Android installation. You can import the project into your IDE and run on your device. Look at the [Sample Guide](../..//samples/) for more details on using these samples. You can also reference the [Programmers Guide](../../tutorial/) for a complete walk-through of building your first EMDK For Android application.

### Java APIs
The EMDK for Android offers access to the device's Barcode capabilities through traditional native Java Barcode APIs.

### Intent APIs
The EMDK for Android will continue to support the [DataCapture](../reference/refdatacaptureintent) and [Battery Intent](../reference/refbatteryintent) APIs that were previously available on individual device types. 


























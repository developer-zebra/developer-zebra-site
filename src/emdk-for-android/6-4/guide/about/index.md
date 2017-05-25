---
title: About EMDK For Android
layout: guide.html
product: EMDK For Android
productversion: '6.4'
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
* MC18   - KitKat
* MC40   - KitKat 
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


## Important News

* **EMDK OS update package support limited to KitKat devices** - The EMDK v6.4 OS update package distributed with the PC/MAC installation will only support installation on KitKat devices. For all Lollypop+ devices, the EMDK update for a specific device will be distributed with the latest BSP or security incremental patch.
* **EMDK for Android support for all Jelly Bean (Android 4.1.2) and TC70 KitKat (Android 4.4.2) BSP version 112414 devices has been terminated** - Starting from EMDK for Android v6.0, KitKat and higher OS versions (except TC70 KitKat BSP version 112414) are supported. EMDK for Android v5.0 will continue to support Jelly Bean and TC70 KitKat BSP version 112414 devices.
* **EMDK for Android support for Payment APIs is terminated** - The EMDK for Android v5.0 is the only version that supports Payment APIs.
* **Support for ProfileConfig class has been deprecated** - The ProfileConfig class which can be used to access the profile data has been deprecated. It is recommended to use the name-value pair function of Profile Manager feature. The Profile XML can also be directly modified. Refer to the Clock Sample for information on modifying Profile XML data.
* **Support for ContinuousRead class is deprecated** - The ContinuousRead class which can be used to enable the continuous scanning has been deprecated. It is recommended to use the aimType, sameSymbolTimeout, differentSymbolTimeout of camera, imager and laser specific reader parameters.
* **Support for picklist field is deprecated** - The picklist field used for enabling the picklist mode has been deprecated and it is replaced by the field picklistEx.


## What's New

* Added support for MX v6.3 in Profile Manager:
	* Bug Report Manager – Added new custom bug reporting feature for gathering software bug reports in addition to the standard Android bug reporting mechanism.
	* Cellular Manager – Added new feature to enable/disable mobile data and set the data usage limit.
	* DHCP Manager – Added new feature to enable/disable features such as client identifier, FQDN and add custom DHCP options such as Vendor Specific 230.
	* Remote Scanner Manager – Added support for DS3678 Bluetooth scanner with the features such as firmware update, paging.
	* Touch Manager – Added Touch Mode support for ET5x devices.
* Added support for Android Studio v2.3.
* Enhanced Barcode Manager API with the following features:
	* Added support for new Bluetooth Scanner DS3678:
	* Added new enum under BarcodeManager.DeviceIdentifier for selecting the DS3678 Bluetooth Scanner.
	* Added support to enable/disable automatic re-connection after DS3678 scanner reboot. Refer to the parameter “ScannerConfig.ReaderParams.ReaderSpecific.ImagerSpecific.pairAfterScannerReboot” for details.
* Enhanced SimulScan API with the following features:
	* Added new API to fetch the template from the SimulScan Template Build Server.
	* Added support for additional status information to get more details about states such as IDLE, ERROR.
* Enhanced DataCapture feature in the Profile Manager:
	* Added support for new Bluetooth Scanner DS3678:
	* Added support selecting the DS3678 Bluetooth Scanner.
	* Added support to enable/disable automatic re-connection after DS3678 scanner reboot. Refer to the parameter “Keep Pairing Info After Reboot” for details.
* `Fixed:` NotificationDevice.release() fails after re-connection of RS6000 if BarcodeManager.addconnectionlistener() is called.
* `Fixed:` The vibrating functionality will continue for the remaining period when the External Vibrator accessory is disconnected and reconnected.



## Components

### Profile Manager
The EMDK's exclusive [Profile Manager](../profile-manager) Technology is an additional advantage for developers giving you a GUI based development tool built on our open framework. This allows you to write fewer lines of code resulting in reduced development time, effort and errors. This innovative feature not only gives you easy access to critical functions such as bar code scanning and transaction processing via a magnetic stripe reader (MSR) but also functionality not available in Google's Android SDK.   

### EMDK Device Runtime
In order for your application to use the EMDK For Android, you will need to install the EMDK Device Runtime on each device. This runtime is included with the EMDK For Android installation. Check the [Setup Guide](../setupDevice) for instructions. In the future the EMDK Services will be included with the default operating system for the device.

### Samples & Programmer's Guide
There are sample projects that are included as part of the EMDK For Android installation. You can import the project into your IDE and run on your device. Look at the [Sample Guide](../..//samples/) for more details on using these samples. You can also reference the [Programmers Guide](../../tutorial/) for a complete walk-through of building your first EMDK For Android application.

### Java APIs
The EMDK for Android offers access to the device's Barcode capabilities through [traditional native Java Barcode APIs](/emdk-for-android/6-4/api/barcode). Be sure to look at the [Barcode Scanning API tutorial.](../../tutorial/tutBasicScanningAPI)

### Intent APIs
The EMDK for Android will continue to support the [DataCapture](../reference/refdatacaptureintent) and [Battery Intent](../reference/refbatteryintent) APIs that were previously available on individual device types. 


























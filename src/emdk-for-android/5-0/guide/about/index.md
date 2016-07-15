---
title: About EMDK For Android
layout: guide.html
product: EMDK For Android
productversion: '5.0'
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
	* The Android 4.1.2 (API 16) and the Android 4.4.2 (API 19) packages
	* The Android SDK Build-tools rev.21.1.x or higher
 
**Mac OS X:**  
* Yosemite (10.10.x) | (64-bit)  or El Capitan (10.11.x) | (64-bit)
* Java for OS X 2014-10x or higher
* Java Development Kit (JDK) v7u75 or higher
* Installed via Android SDK manager 
	* The Android 4.1.2 (API 16) and the Android 4.4.2 (API 19) packages
	* The Android SDK Build-tools rev.21.1.x or higher


## Devices Supported
Although EMDK for Android has been designed to work with all Symbol mobile computers running Android, the following devices have been used for validation:

* MC18 - KitKat (4.4.4)
* MC32 - JellyBean (4.1.1)
* MC40 - KitKat (4.4.4), JellyBean(4.1.1)
* MC67 - KitKat (4.4.4)
* MC92 - KitKat (4.4.4)
* TC55 - KitKat (4.4.3), JellyBean (4.1.2)
* TC70 - KitKat (4.4.2,4.4.3)
* TC75 - KitKat (4.4.3)
* TC8000 - KitKat (4.4.3)
* WT6000 - Lollipop (5.1.1)



## What's New
**EMDK for Android v5.0**

* The EMDK support for ADT and Eclipse is terminated. The supported development tool now is Android Studio. Therefore all the existing Eclipse and ADT projects must be migrated to Android Studio. Please refer to the [Google documentation](https://developer.android.com/studio/install.html?hl=en) Migrating to Android Studio for an overview of the migration process.
* Enhanced the EMDKManager > ProfileManager to support simultaneous usage in multiple applications. 
* Added support for the MX v6.0 in the Profile Manager:
	* [Clock](../../mx/clock/)
		* Added new feature to manage Auto Time Zone - whether to automatically acquire time zone from the network.
		* Added new feature to manage Military Time - whether to use Military (24 hour) time format.
		* Updated to allow Manual Time Zone setting when Auto Time is On.
	* [Camera Manager](../../mx/cameramgr/) - Some of the latest devices can now be used to take pictures using Imager. The Camera manager is enhanced to block the Imager from taking pictures.
	* [Analytics Manager](../../mx/analytics/) - Added new capability to enable or disable features such as File Upload, ANR (Application Not Respond) Info Collection, Ruggedness Info Collection, Feature Usage Info Collection, Restrict SelfUpdate WiFi Only, Device Info Collection and custom feature.
* Enhanced the [Notification Manager](../../api/notification/NotificationManager/) APIs with the following features:
	* Added support for using the pluggable External Vibrator with WT6000 device. The earlier version of EMDK Notification Manager API supported only RS6000.
	* Added new enum value "EXTERNAL_VIBRATOR1" to NotificationManager.DeviceIdentifier to specifically select External Vibrator.
	* Added new enum value "VIBRATOR" to DeviceType for External Vibrator.
	* Added new enum value "PLUGGABLE" to ConnectionType for External Vibrator.
	 Enhanced the DeviceInfo class for determining the notification capability of RS6000 and External Vibrator.
	* Added new method isLEDSupported() to determine the support for Line Of Sight LED.
	* Added new method isBeepSupported() to determine the support for Beeping.
	* Added new method isVibrateSupported() to determine the support for Vibration.
	* Enhanced the NotificationDevice class for canceling the active notifications on the remote device.
	* Added new method cancelNotification().
* Enhanced the Password fields in the Profile Manager to accept special characters.
* `Fixed:` BarcodeManager.getSupportedDevicesInfo() returns outdated ScannerInfo when the remote scanner is connected and disconnected.
* `Fixed:` NotificationManager.getSupportedDevicesInfo() returns outdated DeviceInfo when the remote scanner is connected and disconnected.
* `Fixed:` The DISABLE state was not getting fired in the StatusListener.OnStatus() event when the RS6000 scanner is disabled using the Scanner.disable() method.
* Fixed: Using the DataCapture > Data Delivery > Intent field in the ProfileManager is returning the unsupported error.



## Components

### Profile Manager
The EMDK's exclusive [Profile Manager](/emdk-for-android/5-0/guide/profile-manager) Technology is an additional advantage for developers giving you a GUI based development tool built on our open framework. This allows you to write fewer lines of code resulting in reduced development time, effort and errors. This innovative feature not only gives you easy access to critical functions such as bar code scanning and transaction processing via a magnetic stripe reader (MSR) but also functionality not available in Google's Android SDK.   

### EMDK Device Runtime
In order for your application to use the EMDK For Android, you will need to install the EMDK Device Runtime on each device. This runtime is included with the EMDK For Android installation. Check the [Setup Guide](/emdk-for-android/5-0/guide/setupDevice) for instructions. In the future the EMDK Services will be included with the default operating system for the device.

### Samples & Programmer's Guide
There are sample projects that are included as part of the EMDK For Android installation. You can import the project into your IDE and run on your device. Look at the [Sample Guide](/emdk-for-android/5-0/samples/) for more details on using these samples. You can also reference the [Programmers Guide](/emdk-for-android/5-0/tutorial/) for a complete walk-through of building your first EMDK For Android application.

### Java APIs
The EMDK for Android offers access to the device's Barcode capabilities through [traditional native Java Barcode APIs](/emdk-for-android/5-0/api/barcode). Be sure to look at the [Barcode Scanning API tutorial.](/emdk-for-android/5-0/tutorial/tutBasicScanningAPI)

### Intent APIs
The EMDK for Android will continue to support the [DataCapture](/emdk-for-android/5-0/guide/reference/refdatacaptureintent) and [Battery Intent](/emdk-for-android/5-0/guide/reference/refbatteryintent) APIs that were previously available on individual device types. 






















---
title: About EMDK For Android
layout: guide.html
product: EMDK For Android
productversion: '6.6'
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

## Important News

* **EMDK for Android support for all KitKat (Android 4.4.3 or higher) devices will be dropped.** - The EMDK for Android v6.6 will be the final version supporting KitKat (Android 4.4.3 or higher) devices. All future EMDK versions will support Lollipop or higher devices only.
* **EMDK OS update package support limited to KitKat devices** - The EMDK v6.6 OS update package distributed with the PC/MAC installation will only support installation on KitKat devices. For all Lollipop or higher devices, the EMDK update for a specific device will be distributed with the latest BSP or security incremental patch.


## What's New

* Added support for MX v7.0 in Profile Manager:
	* App Manager – Added new feature to add/remove app form battery optimization list.
	* Cert Manager – Fixed: Deleting uninstalled certificate from UI.
	* Bug Report Manager
		* Added ability to disable triggering reports via intent.
		* Added ability to disable taking snapshots.
	* Cellular Manager
		* Fixed: Gracefully handle invalid OSX version in CellularMgr CSP: reject only those parameters that depend on OSX.
		* Fixed: Improve error handling for SIM selection and CellularData parameters.
	* Wi-Fi
		* Added support for 802.11ac and 802.11n.
		* Added 802.11ac and 802.11n parameters in advanced parameters.
	* File Manager – Added support for HTTPS.
	* License Manager – Fixed: Sensitive information is not getting logged.
	* Bluetooth Manager – Added new feature to support for admin to add new silent pairing rule by providing just the name of the remote Bluetooth device.
* Enhanced Barcode Manager API to support Unique Device Identification (UDI) barcodes to be used with TC51/TC56 healthcare devices:
	* Added support to enable/disable the UDI Standards such as GS1, HIBCC and ICCBBA. Refer to the parameter “ScannerConfig.ReaderParams.ReaderSpecific.ImagerSpecific.udiParams” for details.
	* Added new enum in ScannerConfig:
		* ScanMode - Descries the available scanning modes such as Single and UDI.
	* Added new reader parameter in ScannerConfig.ReaderParams.ReaderSpecific.ImagerSpecific:
		* scanMode - Sets the scan mode. This allows to select one type from the ScanMode enum.
	* Enhancements to ScanDataCollection class:
		* Added new method "getLabelIdentifier()" to get the decoded type of the barcode. Note: This is especially applicable for UDI decoding. Use getLabelType() defined in each data item to get the individual barcode label types.
		* Added new method "getTokenizedData()" to get the list of tokenized data received after processing the raw scanner data.
	* Added new class TokenizedData to provide access to tokenized scan data:
		* getTokens() - Returns all the tokens with it's data.
		* getTokensByKey(String key) - Returns the tokens for the given token key. If data has multiple values, it returns all the tokens.
	* Update to ScannerResults enum:
		* Added new enum value "DATA_PARSING_FAILURE" to notify when data parsing failed.
* Enhanced DataCapture feature in the Profile Manager:
	* Added support to enable/disable the UDI Standards such as GS1, HIBCC and ICCBBA to be used with TC51/TC56 healthcare devices. Refer to “UDI parameters” section for details.
	* Scanning Mode - Sets the scanning mode. This allows to select one mode (Single or UDI) at a time.
	* Use auto when not supported - Use auto when the scanner type is not supported while importing the profile to a different device.
* Enhanced SerialComm API:
	* Feature type SERIALCOMM has been deprecated and introduced a new feature type SERIALCOMM_EX.
	* New classes added “SerialCommManager”. You may get a new SerialCommManager instance by calling EMDKManager.getInstance(FEATURE_TYPE.SERIALCOMM_EX).
	* Added support to enumerate available serial ports on a device.
		* SerialCommManager.getSupportedPorts() - Returns list of supported serial ports information.
	* Added support to select a single serial port by passing a PortInfo object.
		* SerialCommManager.getPort(SerialPortInfo serialPortInfo) - This method returns the SerialComm object if the serial port info specified is valid. The SerialComm object created will be singleton object for a specific serial port.
	* The SerialCommSample1 has been updated to demonstrate above features.
	* `Fixed`: First read() fails after a disable() call.
* Changes to SDK Add-on:
	* With EMDK 6.6 onwards, Compile Sdk Version has been changed from “Symbol Technologies LLC:EMDK APIs:XX” to “Zebra Technologies Corp:EMDK APIs:XX”. Note: If you have any applications that were using previous EMDK APIs, please re-select EMDK API from Compile Sdk Version drop down in Android studio for changes to take effect. This will not have any effect on the already deployed applications.
* `Fixed`: SimulScan issue where template parameters are not getting set after a timeout or cancel event.

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


























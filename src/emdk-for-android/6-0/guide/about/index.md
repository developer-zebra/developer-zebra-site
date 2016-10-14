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
* MC67 - KitKat (4.4.4)
* MC92 - KitKat (4.4.4)
* TC55 - KitKat (4.4.3)
* TC70 - KitKat (4.4.2,4.4.3)
* TC75 - KitKat (4.4.3)
* TC8000 - KitKat (4.4.3)
* WT6000 - Lollipop (5.1.1)



## What's New
**EMDK for Android v6.0**




## Components

### Profile Manager
The EMDK's exclusive [Profile Manager](/emdk-for-android/6-0/guide/profile-manager) Technology is an additional advantage for developers giving you a GUI based development tool built on our open framework. This allows you to write fewer lines of code resulting in reduced development time, effort and errors. This innovative feature not only gives you easy access to critical functions such as bar code scanning and transaction processing via a magnetic stripe reader (MSR) but also functionality not available in Google's Android SDK.   

### EMDK Device Runtime
In order for your application to use the EMDK For Android, you will need to install the EMDK Device Runtime on each device. This runtime is included with the EMDK For Android installation. Check the [Setup Guide](/emdk-for-android/6-0/guide/setupDevice) for instructions. In the future the EMDK Services will be included with the default operating system for the device.

### Samples & Programmer's Guide
There are sample projects that are included as part of the EMDK For Android installation. You can import the project into your IDE and run on your device. Look at the [Sample Guide](/emdk-for-android/6-0/samples/) for more details on using these samples. You can also reference the [Programmers Guide](/emdk-for-android/6-0/tutorial/) for a complete walk-through of building your first EMDK For Android application.

### Java APIs
The EMDK for Android offers access to the device's Barcode capabilities through [traditional native Java Barcode APIs](/emdk-for-android/6-0/api/reference/com/symbol/emdk/barcode/package-summary.html). Be sure to look at the [Barcode Scanning API tutorial.](/emdk-for-android/6-0/tutorial/tutBasicScanningAPI)

### Intent APIs
The EMDK for Android will continue to support the [DataCapture](/emdk-for-android/6-0/guide/reference/refdatacaptureintent) and [Battery Intent](/emdk-for-android/6-0/guide/reference/refbatteryintent) APIs that were previously available on individual device types. 

























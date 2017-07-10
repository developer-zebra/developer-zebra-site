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

## Important News

## What's New

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


























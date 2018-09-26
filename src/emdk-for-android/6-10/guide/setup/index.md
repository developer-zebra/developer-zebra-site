---
title: EMDK Setup
layout: guide.html
product: EMDK For Android
productversion: '6.10'
---

## Overview

EMDK for Android provides the interface for developing Enterprise applications that access Zebra value-adds such as scanners and magstripe readers on its Android devices. This document describes how to set up a macOS or Windows computer to work with the EMDK and Profile Manager tools.

### Prerequisites
The following software is required to use EMDK for Android:

**Windows**:
* Windows 7, 8, 8.1, 10 (32- or 64-bit)
* Android Studio 2.2 or higher (includes OpenJDK) 
* Optional: [Java Development Kit (JDK)](https://www.oracle.com/technetwork/java/javase/downloads/index.html) 7u45 or higher [(How to install)](https://www.java.com/en/download/help/windows_offline_download.xml)

**Mac OS X**:  
* Mac OS X (aka macOS) 10.10.5 Yosemite later
* Android Studio 2.2 or higher (includes OpenJDK)

* Optional: [Java Development Kit (JDK)](https://www.oracle.com/technetwork/java/javase/downloads/index.html) 7u75 or higher [(How to install)](https://java.com/en/download/help/mac_install.xml)


> **Note**: Zebra recommends OpenJDK, which comes bundled with Android Studio 2.2 and higher (See below to activate). 


<!-- 1/30/18- removed per eng. TUT-22799
* Installed via Android SDK manager: 
	* The Android API 19 packages
	* The Android SDK Build-tools rev.21.1.x or higher

removed 
* Java for macOS 2014-10x or later

repo: 
https://raw.githubusercontent.com/meipitakotuwa/plugin/master/6.9/updatePlugins.xml

 -->

### Prepare a macOS PC

1. Install (or update to) the latest version of Java SE. 
2. 


### Prepare a Windows PC


No harm keeping that JDK 1.7 requirement as separately installed JDK can be updated as per the developers preference whereas it may not be possible with the bundled one unless they update the Android Studio. However, as an additional information, we can mention OpenJDK as well.

Set the JDK version

A copy of the latest OpenJDK comes bundled with Android Studio 2.2 and higher, and this is the JDK version we recommend you use for your Android projects. To use the bundled JDK, proceed as follows:

1.      Open your project in Android Studio and select File > Project Structure in the menu bar.

2.      In the SDK Location page and under JDK location, check the Use embedded JDK checkbox.

3.      Click OK.

By default, the Java language version used to compile your project is based on your project's compileSdkVersion(because different versions of Android support different versions of Java).

Ref: https://developer.android.com/studio/intro/studio-config#jdk

 

 

Screens of macOS-based browsers vary slightly. 

OLD OLD OLD OLD
**Notes**:

* **Install the Android SDK Platform package on the development host** appropriate for targeting the corresponding EMDK API SDK add-on. For example, Android 6.0 (API 23) must be installed for targeting EMDK APIs (API 23) as Compile SDK Version in Android Studio.
* **Android SDK 23.0.x or higher build tools must be installed** for building EMDK samples.
* **Close any running Android Studio sessions** prior to installing.

## Configuring Development Environment
In order to develop Android applications with Android Studio you must first install the Java Development Kit.

### Installing Java Development Kit (JDK) for Windows

1.	Go to [http://www.oracle.com/technetwork/java/javase/downloads/index.html](http://www.oracle.com/technetwork/java/javase/downloads/index.html).
2.	Download and install JDK v7u45 or newer.

### Installing Java Development Kit (JDK) for Mac

**Installing Java for OS X 2014-10x:**
1. Go to https://support.apple.com/kb/dl1572?locale=en_US.
2. Download and install Java for OS X 2014 (ex: JavaForOSX2014-101.dmg).

**Installing Java Development Kit (JDK) 7:**
1. Go to http://www.oracle.com/technetwork/java/javase/downloads/index.html.
2. Download and install JDK 7 (v7u75 – the JRE alone is not sufficient) or newer for Mac OS X x64 (ex: jdk-7u75-macosx-x64.dmg).  

##Choosing a Development Environment
###Android Studio
Android studio is now Google's official IDE for Android development. Using Android Studio will give you access to the latest IDE updates.

**Windows** - Follow this [**guide**](/emdk-for-android/6-10/guide/setupAndroidStudio) to setup the EMDK for Android in Android Studio.

**Mac** - Follow this [**guide**](/emdk-for-android/6-10/guide/setupAndroidStudioMac) to manually setup the EMDK for Android in Android Studio.




















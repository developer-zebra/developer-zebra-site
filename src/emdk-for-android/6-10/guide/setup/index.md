---
title: EMDK For Android Setup
layout: guide.html
product: EMDK For Android
productversion: '6.10'
---

## Overview

EMDK for Android provides the interface to Zebra value-adds such as scanners and magstripe readers for developing Enterprise applications on Zebra Android devices. This document is a guide to start working EMDK for Android in your preferred development environment.

### Prerequisites
The following software must be installed prior to using EMDK for Android:

**Windows**:
* Windows 7, 8, 8.1, 10 (32- or 64-bit)
* Java Development Kit (JDK) v7u45 or higher
* Android Studio v2.x or higher
(EMDK for Android validated on Android Studio 2.2.x, 2.3.x, 3.0 and 3.1)

**Mac OS X**:  
* Mac OS X 10.10.x Yosemite or 10.11.x El Capitan (64-bit)
* Java for OS X 2014-10x or higher
* Java Development Kit (JDK) v7u75 or higher

<!-- 1/30/18- removed per eng. TUT-22799
* Installed via Android SDK manager: 
	* The Android API 19 packages
	* The Android SDK Build-tools rev.21.1.x or higher
 -->

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

**Windows** - Follow this [**guide**](/emdk-for-android/6-9/guide/setupAndroidStudio) to setup the EMDK for Android in Android Studio.

**Mac** - Follow this [**guide**](/emdk-for-android/6-9/guide/setupAndroidStudioMac) to manually setup the EMDK for Android in Android Studio.




















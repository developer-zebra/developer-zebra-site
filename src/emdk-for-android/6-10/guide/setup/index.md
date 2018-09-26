---
title: EMDK Setup
layout: guide.html
product: EMDK For Android
productversion: '6.10'
---

## Overview

This document describes how to set up Mac OS and Windows computers to work with the EMDK for Android SDK. EMDK extends Android Studio with tools to interface with imagers, scanners, magstripe readers and other peripherals found on Zebra Android devices, and lets developers easily create powerful line-of-business applications to help maximize workflow efficiency. 

### Prerequisites
The following software is required to use EMDK for Android:

**Windows**:
* Windows 7, 8, 8.1, 10 (32- or 64-bit)
* [Android Studio](https://developer.android.com/studio/) 2.2 or higher (includes OpenJDK) 
* [Java Development Kit (JDK)](https://www.oracle.com/technetwork/java/javase/downloads/index.html) 7u45 or higher (**optional**)

**Mac OS**:  
* Mac OS X (aka macOS) 10.10.5 Yosemite or later
* [Android Studio](https://developer.android.com/studio/) 2.2 or higher (includes OpenJDK)
* [Java Development Kit (JDK)](https://www.oracle.com/technetwork/java/javase/downloads/index.html) 7u75 or higher (**optional**)


> **Note**: Zebra recommends OpenJDK, which is bundled with Android Studio 2.2 and higher.

<!-- 1/30/18- removed per eng. TUT-22799
* Installed via Android SDK manager: 
	* The Android API 19 packages
	* The Android SDK Build-tools rev.21.1.x or higher

removed 
* Java for macOS 2014-10x or later

repo: 
https://raw.githubusercontent.com/meipitakotuwa/plugin/master/6.9/updatePlugins.xml

 -->

### Prepare the development workstation

1. Download [Android Studio](https://developer.android.com/studio/) and install.
2. **Activate OpenJDK**:<br>
   a. Open an Android Studio project (if not already open).<br>
   b. Select **File -> Project Structure**.<br>
   c. In the left-hand pane **select "SDK Location"** (if not already selected).<br>
   d. Confirm that "Use embedded JDK (recommended)" is checked.
3. **Install the EMDK plug-in**:<br>
   a. In Android Studio, select **File -> Settings.**<br>
   b. In the left-hand pane, **select "Plugins"** settings page.<br>
   c. **Enter "emdk" in the search box**:<br> 
    •  If no result appears, skip to Step d.<br>
    •  If any version prior to 6.10 appears, **click the "Uninstall" button**.<br>
    •  Click the **"Restart Android Studio"** button.<br>
    •  Select **File -> Settings.**<br>
    •  In the left-hand pane, **select "Plugins"** settings page.<br>
    •  Proceed to Step d.<br>
   d. **Click "Browse repositories..."** button.<br>
   e. **Click "Manage repositories..."** button.<br> 
   f. **Click "+"** and enter URL of the repository containing the EMDK plug-in:<br> 
   `https://raw.githubusercontent.com/meipitakotuwa/plugin/master/6.9/updatePlugins.xml`<br>
   g. **Click "Check Now"** button.<br>
   h. **Click OK** on all confirmation boxes that appear.<br> 

> **Note**: The Java version used to compile a project is based on the `compileSdkVersion` selected for the project. Different versions of Android support different versions of Java. If necessary, the default Java version can be overridden. [Learn more](https://developer.android.com/studio/intro/studio-config#jdk). 

**Note**: MacOS and Windows dialog boxes vary slightly. 

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




















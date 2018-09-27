---
title: EMDK Setup
layout: guide.html
product: EMDK For Android
productversion: '6.10'
---

## Overview

**This document describes how to set up Mac OS and Windows computers to work with the EMDK for Android SDK**. EMDK extends Android Studio with tools to interface and configure Zebra Android devices and their peripherals, including imagers, scanners and magstripe and RFID readers. EMDK tools enable developers to easily create powerful line-of-business applications that help maximize workflow efficiency. 

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

### Install EMDK

1. [Remove previous EMDK installers](#uninstallemdk) and related files, if any.  
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
   <img alt="image" style="height:350px" src="uninstall_02.png"/>
_Click to enlarge_.<br>
    •  If any version prior to 6.10 appears (as shown above), **select it and click the "Uninstall" button**.<br>
<img alt="image" style="height:350px" src="uninstall_03.png"/>
_Click to enlarge_.<br>
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

**Note**: MacOS and Windows dialog boxes might vary slightly. 

#### `MORE IMAGES TO FOLLOW`


-----

### Uninstall EMDK

#### Windows 

1. **Close Android Studio**, if open.
2. From the Windows Menu, **select "Uninstall"** from the "Symbol EMDK for Android" menu.  
3. **Follow prompts** to complete the uninstallation. 

#### Mac OS

1. **Remove SDK add-ons**:
 a. Navigate to the /Users/[user]/Library/Android/sdk/add-ons directory.
2. Remove addon-symbol_emdk-symbol-XX folders.

**Removing Wizard Core**
1. Navigate to /Users/Shared directory.
2. Remove Symbol EMDK for Android folder.

**Removing Wizard plug-in**
1. Launch Finder and go to Applications (on the left side panel)
2. Locate Android Studio.app right click and select Show Package Contents.
2. Locate the Contents\plugins directory.
4. Remove the com.symbol.emdk.wizard.intellijIdea folder.

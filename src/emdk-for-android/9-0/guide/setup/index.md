---
title: Zebra EMDK Setup
layout: guide.html
product: EMDK For Android
productversion: '9.0'
---

## Overview

**This document describes how to set up macOS and Windows computers running Android Studio to work with Zebra's EMDK for Android software development kit**. Android Studio enables Java developers to easily create powerful line-of-business apps for Android. EMDK extends Android Studio with tools to interface with and configure Zebra Android devices and their scanners, ports and other peripherals needed for data acquisition or other enterprise application requirements. 

### Prerequisites
The following software is required to use EMDK for Android:

#### Windows
* Windows 7, 8, 8.1, 10 (32- or 64-bit)
* [Android Studio](https://developer.android.com/studio/) 2.2 or later  
* A Java Development Kit (JDK)

#### macOS  
* macOS 10.10.5 Yosemite or later
* [Android Studio](https://developer.android.com/studio/) 2.2 or later
* A Java Development Kit (JDK)<br>

>**`IMPORTANT:`** Be sure to read and understand the licensing agreement for any selected JDK or SDK.

-----

### Install EMDK Plug-ins

The following instructions apply to Android Studio, which is required to use EMDK for Android and must be installed to complete the steps below. 

**[Install Android Studio](https://developer.android.com/studio/)** before proceeding. 

> **NOTE**: Dialog boxes of macOS, Windows and Android Studio versions vary slightly. 

#### Set up EMDK for Android:

1. [Uninstall prior EMDK installations](#uninstallemdk) and related files, if any.  
2. **Select a Project SDK**:<br>
   a. Open an Android Studio project (if not already open).<br>
   b. Select **File -> Project Structure**.<br>
   c. In the left-hand pane **under Project Settings, select "Project"** (if not already selected).<br>
   d. In the right-hand pane **under "Project SDK," select an SDK from the drop-down** or add or download one, as in the image below.<br>
   **NOTE:** The [Android development community recommends](https://developer.android.com/studio/intro/studio-config#jdk) using the latest OpenJDK.<br>
   <img alt="image" style="height:350px" src="sdk_dropdown.png"/>
   _Click to enlarge; ESC to exit_.<br>
   e. **Click "Apply" and then "OK"** to close.<br>
3. **Install the EMDK for Android plug-in**:<br>
   a. Go to **Android Studio -> Preferences.**<br>
   b. In the left-hand pane, **select "Plugins"** to show Installed Plugins and the Plugin Marketplace:
   <img alt="image" style="height:350px" src="emdk_plugins_01.png"/>
_Click to enlarge; ESC to exit_.<br>
   c. **Click "Marketplace"** (if necessary) to show available Plugins.<br>
   d. **Enter "emdk" in the search box** and **hit ENTER**.<br>
   e. **Click "Install**" button.<br>
   <img alt="image" style="height:350px" src="emdk_plugins_02.png"/>
_Click to enlarge; ESC to exit_.<br>
   f. **Click "Apply" to activate the Plugin, then **Click "OK"** to close.<br>
<img alt="image" style="height:350px" src="emdk_plugins_03.png"/>
_Click to enlarge; ESC to exit_.<br>
4. **Enable the EMDK SDK**:<br>
   a. **Go to the app module** in the Android project in which to to use EMDK.<br>
   b. **Navigate to the** `build.gradle` **file**:<br>
   <img alt="image" style="height:350px" src="gradle_01.png"/>
_Click to enlarge; ESC to exit_.<br>
   c. **Add the following line to the dependencies section**:<br>

        :::java
            dependencies {
            compileOnly 'com.symbol:emdk:x.x.x' //  e.g. ‘com.symbol:emdk:7.6.10’
                ...
            }
5. **Rebuild the project** (Build -> Make Project). 

<!--     
    •  If no result appears, skip to Step 3e.<br>
    •  If any version prior to 7.1 appears, **select it and click the "Uninstall" button**.<br>
    •  Click the **"Restart Android Studio"** button.<br>
    •  Select **File -> Settings.**<br>
    •  In the left-hand pane, **select "Plugins"** to bring up Plug-in settings.<br>
   e. **Click "Marketplace."**<br>
   f. **Enter "emdk" in the search box**.<br>
   g. **Select "EMDK for Android"** and **hit "Install"** as below:<br> 
   <img alt="image" style="height:350px" src="install_plugin_02.png"/>
_Click to enlarge; ESC to exit_.<br>
   h. Click the **"Restart Android Studio"** button:<br>
    <img alt="image" style="height:350px" src="install_plugin_03.png"/>
_Click to enlarge; ESC to exit_.<br>
   i. **Click "Restart"** to confirm and restart Android Studio.<br> 
   <img alt="image" style="height:100px" src="install_plugin_05.png"/>
_Click to enlarge; ESC to exit_.<br>

 -->

##### EMDK APIs are now ready to use. 

#### Notes:
* A plus sign ("+") can be substituted for a major or minor version number in the dependencies section. For example, declaring `com.symbol:emdk:7.6+` uses SDK versions 7.6 and newer.
* **See the [full list of EMDK versions](https://bintray.com/zebratechnologies/EMDKAndroid/com.symbol.emdk)**.
* The Java version used to compile a project is based on the `compileSdkVersion` selected for the project. Different versions of Android support different versions of Java. If necessary, the default Java version can be overridden. [Learn more](https://developer.android.com/studio/intro/studio-config#jdk). 

-----

### Uninstall EMDK

#### Windows 

1. **Close Android Studio**, if open.
2. From **Windows -> All Programs -> EMDK for Android [vX.X], select "Uninstall."**  
3. **Follow prompts** to complete the uninstallation.

#### Mac OS

**Note**: This process references folders that are hidden by default. To unhide, see section below. 

**In the Mac OS Finder**:

1. **Remove SDK add-ons**:
   * Navigate to the `/Users/[userName]/Library/Android/sdk/add-ons` directory.<br>
   * Remove all `addon-symbol_emdk-symbol-XX` folders, if present.<br>
2. **Remove Wizard Core**:
   * Navigate to the `/Users/Shared` directory.
   * **Remove the "EMDK for Android" folder**, if present.
3. **Remove Wizard plug-in**:
   * **Open Applications** folder.
   * Locate and **right-click Android Studio** app.
   * **Select "Show Package Contents"** from the menu.
   * Navigate to `Contents` -> `plugins` directory.
   * **Remove** `com.symbol.emdk.wizard.intellijIdea` **folder**, if present.

-----

**To unhide Mac OS folders**:

1. **Open Terminal** app (in Finder -> Applications -> Utilities).
2. **Paste the following into Terminal** window (and hit RETURN): 

		:::term
		defaults write com.apple.finder AppleShowAllFiles YES


3. **Right-click on the Finder icon** (in the Dock) while holding the "Option/alt" key.
4. **Select "Relaunch"** from the menu to make hidden files visible. 
5. **To reverse, replace "YES" with "NO"** in the Terminal command and repeat Step 3. 


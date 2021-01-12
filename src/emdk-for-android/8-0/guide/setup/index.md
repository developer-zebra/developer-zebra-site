---
title: EMDK Setup
layout: guide.html
product: EMDK For Android
productversion: '8.0'
---

## Overview

**This document describes how to set up Mac OS and Windows computers to work with Zebra's EMDK for Android software development kit**. EMDK extends Android Studio with tools to interface and configure Zebra Android devices and their peripherals, including imagers, scanners and serial ports. EMDK tools enable developers to easily create powerful line-of-business applications that help maximize workflow efficiency. 

### Prerequisites
The following software is required to use EMDK for Android:

#### Windows
* Windows 7, 8, 8.1, 10 (32- or 64-bit)
* [Android Studio](https://developer.android.com/studio/) 2.2 or higher (includes OpenJDK) 
* [Java Development Kit (JDK)](https://www.oracle.com/technetwork/java/javase/downloads/index.html) 7u45 or later (**optional**)

#### Mac OS  
* Mac OS X (aka macOS) 10.10.5 Yosemite or later
* [Android Studio](https://developer.android.com/studio/) 2.2 or later (includes OpenJDK)
* [Java Development Kit (JDK)](https://www.oracle.com/technetwork/java/javase/downloads/index.html) 7u75 or later (**optional**)


> **Note: Zebra recommends using OpenJDK**, which is bundled with Android Studio 2.2 and later.

-----

### Install EMDK Plug-ins

The following instructions apply to Android Studio, which is required to use EMDK for Android and must be installed to complete the steps below. If necessary, [install Android Studio](https://developer.android.com/studio/) before proceeding. 

**Note**: Mac OS and Windows dialog boxes might vary slightly. 

1. [Uninstall prior EMDK installations](#uninstallemdk) and related files, if any.  
2. **Activate OpenJDK**:<br>
   a. Open an Android Studio project (if not already open).<br>
   b. Select **File -> Project Structure**.<br>
   c. In the left-hand pane **select "SDK Location"** (if not already selected).<br>
   d. Confirm a **valid "JDK location."** To use the OpenJDK (bundled with Android Studio), select "Embedded JDK."
3. **Install the EMDK Profile Manager plug-in**:<br>
   a. Go to **File -> Settings.**<br>
   b. In the left-hand pane, **select "Plugins"** to bring up Plug-in settings.<br>
   c. **Enter "emdk" in the search box**.<br>
   d. **Select "installed.**"<br>
    •  If no result appears, skip to Step 3e.<br>
   <img alt="image" style="height:350px" src="uninstall_02.png"/>
_Click to enlarge; ESC to exit_.<br>
    •  If any version prior to 7.1 appears, **select it and click the "Uninstall" button**.<br>
<img alt="image" style="height:350px" src="uninstall_03.png"/>
_Click to enlarge; ESC to exit_.<br>
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
4. **Enable the EMDK SDK**:<br>
   a. **Create or open an Android project**.<br>
   b. **Navigate to the** `build.gradle` **file** in the app module:<br>
   <img alt="image" style="height:350px" src="gradle_01.png"/>
_Click to enlarge; ESC to exit_.<br>
   c. **Add the following line to the dependencies section**:<br>


        :::java
            dependencies {
            compileOnly 'com.symbol:emdk:x.x.x' //  e.g. ‘com.symbol:emdk:7.6.10’
                ...
            }
5. **Rebuild the project** (Build -> Make Project). 

##### EMDK APIs are now ready to use. 

#### Notes 
* A plus sign ("+") can be substituted for a major or minor version number in the dependencies section. For example, declaring `com.symbol:emdk:7.6+` uses SDK versions 7.6 and newer.
* **See the [full list of EMDK versions](https://bintray.com/zebratechnologies/EMDKAndroid/com.symbol.emdk)**
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


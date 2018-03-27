---
title: Staging API
layout: guide.html
product: EMM Toolkit
productversion: '2.0'
---

## Overview

The Staging API does this and that. 

-----

### Section

<img alt="image" style="height:350px" src="img1.jpg"/>
_caption_
<br>

**Settings configured through this panel**:
* **Start or Stop ActiveEdge Service -** toggles the ActiveEdge service on and off, which enables and disables the ActiveEdge Touch Zones. **Service must be stopped before changing other settings**. 
* **Start ActiveEdge Service on Boot Up -** determines whether ActiveEdge runs when the device boots up (**enabled by default**).
* **Left ActiveEdge Zone -** configures the left-hand Touch Zone for Scanner, App Drawer or None.
* **Right ActiveEdge Zone -** configures the right-hand Touch Zone for Scanner, App Drawer or None.
* **Select Apps for Drawer -** permits selection of as many as three applications to appear in the Drawer. Apps must already be installed on the device. 
* **Restore -** returns all settings to factory defaults.

**NOTES**: 
* **The ActiveEdge service must be stopped** before making changes through the settings panel.
* **The settings panel is read-only** if the app has been configured remotely (via XML file).
* **The settings panel <u>cannot</u> be used to configure**: 
 * **ActiveEdge Operation Mode** (open, black, white) 
 * **Apps on the Op Mode's black or white lists**
 * **LaunchAppLeft or LaunchAppRight settings**
* **Only one Touch Zone can contain an App Drawer** at a time. 
* **To display the ActiveEdge version number**, tap the Settings (dots) menu->About.

-----

## XML Configuration

Zebra recommends using the file-based approach when configuring multiple devices. The administrative process involves three basic steps:

1. **Create an XML file** containing the desired ActiveEdge settings
2. **Deploy the XML file to device(s)** using an enterprise mobile management (EMM) system
3. **Trigger an intent** to run the ActiveEdge Service and activate settings in the file

Each of these steps is detailed below. 

-----

### 1. Create XML File

Use a text or XML editor to create an XML file and configure it for the desired ActiveEdge behavior based on the settings described below. 

1. As a starting point, copy the sample `ActiveEdgeConfig.xml` file below.
2. Paste it into the editor and change settings as desired.
3. Save the file on the host computer as "`ActiveEdgeConfig.xml`" (note spelling and letter case).


		:::xml
		<?xml version="1.0" encoding="UTF-8"?>
		<wap-provisioningdoc>
		  <characteristic type="Profile">
		    <characteristic type="ActiveEdge" version="0.1">
		      <parm name="ServiceAction" value="StartService"/>
		      <parm name="RunAtStartup" value="True"/>
		      <parm name="OperationMode" value="White"/>
		      <parm name="LeftZone" value="Scanner"/>
		      <parm name="RightZone" value="Drawer"/>
		      <parm name="DrawerPackageNames" value=" com.symbol.datawedge/com.symbol.datawedge.DWDemoActivity,com.android.dialer"/>
		      <parm name="WhiteListPackageNames" value="com.android.launcher3/.Launcher,com.zebra.hotswap/.MainActivity,com.symbol.datawedge"/>
		      <parm name="BlackListPackageNames" value="com.android.launcher3/.Launcher,com.zebra.hotswap/.MainActivity,com.symbol.datawedge"/>
		      <parm name="LaunchAppLeft" value="com.android.browser"/>
		      <parm name="LaunchAppRight" value="com.android.calculator2"/>
		    </characteristic>
		  </characteristic>
		</wap-provisioningdoc>



-----

#### ActiveEdge XML configuration file settings:

**ServiceAction -** controls whether the ActiveEdge service is running. Disable the service to change settings or reset all to default settings. **Possible values**:
* **StopService -** stops the ActiveEdge service on the device
* **StartService -** starts the ActiveEdge service on the device
* **Restore -** reset the configuration to factory defaults:
	* **Service not running**
	* **Left ActiveEdge Zone configured with scan button**
	* **Right ActiveEdge Zone configured as App Drawer** 
	* **App Drawer populated with three default apps**

**RunAtStartup -** determines whether ActiveEdge is runs at boot-up: 
* True
* False

**OperationMode -** determines the ActiveEdge mode:
* **Open -** ActiveEdge Touch Zone available in all applications
* **White -** ActiveEdge is enabled only for pre-specified apps (whitelist)
* **Black -** ActiveEdge is enabled for all **_except_** specified apps (blacklist)

**WhiteListPackageNames / BlackListPackageNames -** a comma-separated string containing the package name/activity of each app specified as white (enable) or black (disable). The ActiveEdge Mode parameter determines which list is used for WhiteListing or BlackListing. The values are saved even if mode "All" is specified. 
* **String format**: `[package name]/.[activity name]`
* **Example**: `com.android.launcher3/.Launcher,com.zebra.hotswap/.MainActivity, com.symbol.datawedge/.DWDemoActivity`
* **To activate all app activities**, specify package name without an Activity (i.e. `com.symbol.datawedge`).

**LeftZone / RightZone -** controls the behavior of the Left and Right ActiveEdge Touch Zones using the following possible values:
* **Scanner -** configures the zone for barcode scanning
* **Drawer -** configures the zone as an App Drawer
* **LaunchApp -** configures the zone to launch an application
* **LaunchIntent -** configures the zone to launch an intent 
* **DrawerPackageNames -** configures the list of apps in the App Drawer through a comma-separated string containing the package name(s) of app(s) to be placed in the drawer. The maximum number of apps in a drawer is three. Listed apps beyond the first three are ignored. Specify package name only (i.e. `com.android.dialer`) to launch the default activity. Specify a specific activity (i.e. `com.symbol.datawedge/com.symbol.datawedge.DWDemoActivity`) to launch app with that activity. **Note**: The list of drawer package names is saved regardless of whether an App Drawer is enabled.
* **LaunchAppLeft / LaunchAppRight-** allows an application package name to be specified (i.e. `com.android.browser`) for launch if/when the LaunchApp parameter is enabled for the Touch Zone. **Note**: The specified package name is saved regardless of whether a Touch Zone is configured to launch an app.

-----

### 2. Deploy XML File
The XML file is typically deployed by an organization's EMM system, but can be pushed to devices by any available means. Deployment is governed by the rules below. 

#### Deployment Rules:
* The XML file must be deployed to the device file system 
* File must be accessible by the the EMM client and ActiveEdge apps 
* File should not be included in any client application as an embedded resource
* **File names are case sensitive; all references to the file (i.e. from EMM commands or intents) must match exactly**.  

-----

### 3. Trigger the Intent
An admin or EMM system can trigger the ActiveEdge Service to process a new configuration file by sending an intent with the following values:

* **Intent Type:** `StartService` 
* **Package Name:** `com.symbol.activeedge`
* **Class Name:** `ConfigParserService`
* **Extras:**
	* `SET_CONFIG_FILE`: fully qualified path to the `ActiveEdgeConfig.xml` file (case sensitive)

#### Example:

		:::term 
		adb shell am startservice -a com.symbol.activeedge.ConfigParserService -e SET_CONFIG_FILE "/sdcard/ActiveEdgeConfig.xml”
<br>

#### XML Processing

**When ActiveEdge receives an intent**, it performs the following:

1.	**Open the file**:
	* The XML file is opened and its XML validated. If the XML is invalid, processing stops, a message is appended to the system log, and an ActiveEdge result intent is broadcast (see below for details).
2.	**Parse the file**:
	* If unexpected or erroneous elements are present, an error is reported via the ActiveEdge result intent, processing is stopped and no ActiveEdge Service changes occur. 
	* If the file is valid, the settings are saved.
	Aside from malformed XML parameters, an “invalid XML” message results if left and right ActiveEdge Zones are both set to "Drawer" (check settings panel for the end result). 
3.	**Save the settings from the XML file**:
	* Settings are saved only if all XML is valid. If valid XML contains only some settings, the included settings are changed. Each XML parameter has a corresponding Android Shared Preferences reference used by both the AE Service and AE setting panel.
4.	**Change the ActiveEdge behavior as needed**:
	* After XML is processed successfully, the ActiveEdge settings panel UI is locked; settings can be read but no longer changed by the user. **Note**: To restore the settings panel UI to user control, push an `ActiveEdgeConfig.xml` file containing a "Restore" Service Action to the device. This action returns ActiveEdge to its factory default settings.
5.	**Send the ActiveEdge result intent**:
	* When processing is complete (or an error occurs during processing), an intent is broadcast to notify the EMM system of the results:
	* **Intent Type:** Broadcast 
	* **Action Name:** com.symbol.activeedge
	* **Extras:**
		* `STATUS`: Pass or Fail
		* `ERROR_MESSAGE`: "[error description]"


-----

## See Also

* [About ActiveEdge](../about)
* [ActiveEdge Usage Guide](../usage)



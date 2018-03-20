---
title: ActiveEdge Setup & Configuration
layout: guide.html
product: ActiveEdge
productversion: '2.5'
---

## Overview

ActiveEdge can be configured through:

* The ActiveEdge settings panel  
* An XML file configured by a system admin or MDM solution

> Note: Once an XML-based configuration is deployed, the settings panel changes to read-only mode, and might not display all settings.

-----

### ActiveEdge Settings Panel

<img alt="" style="height:350px" src="img1.jpg"/>

After launching the ActiveEdge settings panel, ActiveEdge behavior can be configured regardless of whether it the app is running.

The following settings can be configured:

* Start or Stop ActiveEdge Service - Touch to start/stop the ActiveEdge Service to enable/disable the ActiveEdge Zone.
* Start ActiveEdge Service on Boot Up - Automatically start the ActiveEdge Service when the device boots up. The Service is always running and always available.
* Left ActiveEdge Zone - Configure the left ActiveEdge Zone to Scanner, Drawer or None.
* Right ActiveEdge Zone - Configure the right ActiveEdge Zone to Scanner, Drawer or None.
* Select Apps for Drawer - Select up to three applications to appear on the Drawer.
* Restore - Restore the settings to the factory defaults.

> Select the Settings menu: About to open the About ActiveEdge window, which displays the version number.

-----

### ActiveEdge Configuration By XML
When configuring multiple devices, using an XML based approach may be preferred. In this scenario, an admin would

1. Create XML with the ActiveEdge configuration settings
2. Deploy the XML file to a device using MDM methods
3. Trigger an intent to the ActiveEdge Service


-----

#### 1) Creating the XML
Use a text or XML editor to create a file using the options and settings to control the behavior of ActiveEdge. 

The following is an example of ActiveEdgeConfig.xml : 

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

> Note: There may be more options available through XML than what is presented in the ActiveEdge Settings app.

##### ServiceAction
This parameter controls if the ActiveEdge service is running or if you need to reset the configuration back to default.

The following are valid values:

* StopService: This will Stop the service
* StartService: This will Start the ActiveEdge Service 
* Restore: This will reset the configuration to factory defaults (not running, Scan/Drawer, Default Apps on Drawer)


##### RunAtStartup
This parameter configures whether ActiveEdge is running at device startup.

The following are valid values:

* True: This will cause ActiveEdge to start at device boot
* False: This will cause ActiveEdge to not start at device boot


##### OperationMode
This parameter determines the mode that ActiveEdge is using while running.

The following are valid values:

* Open: This will put ActiveEdge into a mode where it functions for all applications
* White: This will put ActiveEdge into a mode where it is only enabled for applications on the White List
* Black: This will put ActiveEdge into a mode where it will be enabled for ALL applications and be disabled for applications on the BlackList

##### WhiteListPackageNames/ BlackListPackageNames
This is a comma separated string that contains the package names/activity of applications that should be placed on the White/BlackList. The ActiveEdge Mode will determine what list to be used for WhiteListing or BlackListing. The values will also be saved even if the mode is `All`

Format of string: `[package name]/.[activity name]`

Ex: `com.android.launcher3/.Launcher,com.zebra.hotswap/.MainActivity, com.symbol.datawedge/.DWDemoActivity`

The package name can also be supplied without an Activity to have all activities covered:
Ex: `com.symbol.datawedge`

##### LeftZone / RightZone
These parameters control the behavior of either the Left or Right ActiveEdge Zone (respectively). 

The following are valid values:

* Scanner: The zone will be configured for barcode scanning
* Drawer: The zone will be configured for an application drawer
* LaunchApp: The zone will be configured to launch an application
* LaunchIntent: The zone will be configured to launch an Intent 

##### DrawerPackageNames
This paremeter is a comma separated string that contains the package names of applications that should be placed on the ActiveEdge Drawer. 

The format can be package name only (in which case it will launch the default activity):
Ex: `com.android.dialer`

Or it can include a specific activity:
Ex: `com.symbol.datawedge/com.symbol.datawedge.DWDemoActivity`

> Note: A zone does not have to be configured for a drawer for this setting to be saved. The setting will always be saved regardless if the current configuration is for a drawer. A maximum of 3 applications are accepted. Anything beyond (3) will be ignored.

##### LaunchAppLeft / LaunchAppRight
This parameter may contain an application name of (1) application that should be launched when a ActiveEdge Zone is configured for launching an application for that particular zone. 

Format of string: `[package name]`
Ex: `com.android.browser`

> Note: this setting can be saved even if the current ActiveEdge Zone is not configured for Launching an Application.

-----

#### 2) Deploying the XML
The XML file that was created above can be deployed by any means, but will typically be deployed by standard MDM tools. The location of the XML file should be on the device file system, and accessible by the application (usually the MDM client). It should not be included in the client application as an embedded resource.

-----

#### 3) Triggering the Intent
An admin or MDM solution can trigger the ActiveEdge Service to process a new configuration file by sending an Intent with the following values:

* **Intent Type:** StartService 
* **Package Name:** com.symbol.activeedge
* **Class Name:** ConfigParserService
* **Extras:**
	* `SET_CONFIG_FILE` : fully qualified path to the ActiveEdgeConfig.XML file

Ex: 
		adb shell am startservice -a com.symbol.activeedge.ConfigParserService -e SET_CONFIG_FILE "/sdcard/ActiveEdgeConfig.xml”

##### XML Processing
When ActiveEdge receives the intent it will:

1.	Open the File
	* The XML file will be opened and validated to be valid XML. If the XML is not valid then a message will be logged to the system log and the ActiveEdge Result Intent will be broadcasted (see below for details on ActiveEdge Result Intent)
2.	Parse the File
	* If any elements are present that are not expected, then an error will be reported via the ActiveEdge Result Intent. The processing will then be stopped and no effects on the AE Service will occur.
	* If the file passes both the XML validity test and AE XML config test, then the settings will be saved.
	Besides malformed XML parameters the following conditions will result in “invalid XML”:
		* LeftZone and Right Zone both set to Drawer (the end result of the settings will be used to verify, not what is in the XML file)
3.	Save the settings from the XML File
	* The settings will only be saved if all XML is valid. The XML can contain partial settings and only the settings that are included will be effected. Each XML parameter has a corresponding Android Shared Preferences reference that both the AE Service and AE Settings app uses.
4.	Change the ActiveEdge behavior as needed
	* After an XML is processed successfully, the ActiveEdge Settings UI will be locked and not editable from an end user. It can only be unlocked if an admin sends a Restore to factory defaults.
5.	Send the ActiveEdge Result Intent
	* When the processing is complete (or an error occurs during processing), an Broadcast Intent will be sent so that any MDM application can be notified of the results:
	* **Intent Type:** Broadcast 
	* **Action Name:** com.symbol.activeedge
	* **Extras:**
		* `STATUS` : Pass or Fail
		* `ERROR_MESSAGE`: Error Message


-----

## See Also

* [About ActiveEdge](../about)
* [ActiveEdge Usage Guide](../usage)



---
title: Multi-session Guide
productversion: '2.5'
product: Enterprise Browser
layout: guide.html
---
## Overview
Enterprise Browser 2.5 (and higher) supports the ability to run multiple EB apps at the same time, each accessing different `Config.xml` files with different groups of configuration settings. This provides a convenient way to deploy multiple apps and feature-sets that can be toggled without re-launching EB. **Multi-session capabilities can be invoked in two ways**, each with benefits and drawbacks. 

-----

### Shortcut Method

The **Shortcut Method** involves creating two or more EB-app shortcuts that can be launched independently, and when run simultaneously appear side-by-side in multiple webview instances (browser tabs). 

##### ADVANTAGES 
* Apps can be deployed and launched individually, and are combined in browser tabs only when needed.
* Creation and deployment of shortcuts is simplfied by Zebra's [Shortcut Utility](../ShortcutCreator), a Windows-based tool that supports Android and Windows Mobile/CE targets.

##### DISADVANTAGES
* App-page content is persistent; it does not automatically update when the page is revisited.
* Shortcuts deployed to Android 8.x Oreo and later (called "Pinned" Shortcuts) require permission from the device user at installation. ***Helpful Hint***: Pinned Shortcuts can be mass-deployed using Zebra's [Enterprise Home Screen](/ehs) 3.2 (or later) with no need for the device user to grant permission.
* Only these config tags are supported in `Config.xml` files deployed through shortcuts: 
 * WebPageCapture
 * DebugButtonsEnabled
 * WebFiltering
 * DebugModeEnable
 * CustomKioskMode
 * TTS
 * JSLibraries
 * SplashScreen
 * DisableHardwareAcceleration
 * ClearWebData
 * NavigateToHomePage
 * IntentReceiver
 * JavascriptEnabled

Please see the [Shortcut Utility guide](../ShortcutCreator) For more information about creation and deployment of shortcuts. 

-----

### Tab Bar Method

With **the Tab Bar method**, tabs are pre-defined in a file and deployed to the device. These apps are always run as a group. 

##### ADVANTAGES 
* An option exists to automatically update the page whenever it returns to focus.
* Tab colors and titles can be customized. 

##### DISADVANTAGES
* Tabs must be defined and deployed to the device in advance. 
* Apps must always be launched as a group of tabs. 
* Only these config tags are supported in `Config.xml` files deployed through Tab Bars: 
 * FullScreen
 * PageZoom
 * EnableZoom
 * DisplayZoomControls
 * FontFamily
 * WebServer
 * DisableHardwareAcceleration
 * ClearWebData
 * NavigateToHomePage
 * IntentReceiver
 * JavascriptEnabled
 * DatabaseEnabled
 * DomStorageEnabled

-----

## Tab Bar Usage

Tabs are a convenient way to employ multiple apps or multiple feature sets with a simple and familiar way of switching between them. 

#### Tab Bar Rules

* **EB tabs must be defined in advance using the** `tabbar.xml` **file**. They cannot be created by the device user. 
* The `tabbar.xml` file resides on the device, and its path must be specified in the app's `Config.xml` file. [More info](../configreference/#usetabbar).
* Tabs are created when the EB app launches. To deploy or change one or more tabs, push a new `tabbar.xml` file to the device and relaunch the app.  
* The size of the device screen and its orientation effect tab display and the ease of switching between them. **Zebra recommends deploying no more than 10 browser tabs**. 

> **NOTE**: Similar functionality is available through the [NativeTabbar API](../../api/NativeTabbar). 

-----

## Tab Bar Tags

### TabGroup Attributes

Attributes under the &lt;TabGroup&gt; apply to all defined tabs. **There can be zero or one TabGroups**. If this node is missing, default values (shown in **bold**) are used. 

#### placeTabsBottom
* Controls whether tabs are shown at the bottom of the display; otherwise shown at the top (**default**) 
* *true* or ***false***

#### hiddenTabs
* Controls whether tags are hidden or shown (**default**) 
* *true* or ***false*** 

#### backgroundColor
* Controls the content background color of all tabs. If this tag is missing or unspecified, uses app default color. 
* Accepts hexadecimal [HTML color codes](https://htmlcolorcodes.com/) 
* **Default = 0x000000** (black)

-----

### Tab Attributes

Attributes under each &lt;tab&gt; tag apply to only to the tab defined in that node. 

####action 
* **MANDATORY**: Used to specify the start page to be loaded when the tab is brought to the foreground 
* Accepts a URL or fully qualified path and file name of a device-resident HTML file
* string

####label
* **MANDATORY**: Used to specify a title displayed in the tab. **Must include at least one character**.
* **Overridden if an icon is specified** (but must still be present)
* string

####disabled
* **Optional**: Controls whether tab creation is blocked (**disabled by default**) 
* boolean (*true* or ***false***) 

####reload
* **Optional**: Controls whether to refresh the URL (or file) specified in the Action parameter whenever the tab comes into focus (**disabled by default**) 
* boolean (*true* or ***false***) 

####config
* **Optional**: Used to specify the path of the `Config.xml` file containing properties to use when creating the tab 
* Accepts a fully qualified path and file name of the `Config.xml` file relevant to the Action  
* If missing or blank, uses the parent app's `Config.xml` file
* string

####icon
* **Optional**: Used to specify the path (relative to the Enterprise Browser %INSTALL% directory) to an icon (image) file on the device to display ***in place of*** the specified tab label
* Accepts a valid path and file name in the device file system
* Supports `.jpg` and `.png` file formats
* **Overrides label tag**
* string

####backgroundColor
* **Optional**: Controls the content background color of the selected tab. If tag is missing or unspecified, uses 0xFFFFFF (white). 
* Accepts hexadecimal [HTML color codes](https://htmlcolorcodes.com/) 
* **Default = 0xFFFFFF** (white)
* hex value (accepts FFFFFF or 0xFFFFFF notation)

####selectedColor
* **Optional**: Controls the color of the selected (active) tab
* Accepts hexadecimal [HTML color codes](https://htmlcolorcodes.com/) 
* hex value (accepts FFFFFF or 0xFFFFFF notation)

**Android Note**: Color assignment using the &lt;selectedColor&gt; attribute works only when applied to ***every tab <u>and</u>*** a &lt;backgroundColor&gt; is assigned in the tab bar.

-----

### Example
The example `tabbar.xml` file below creates a tabgroup of two (2) tabs, both of which are **NOT** hidden, do **NOT** appear at the bottom of the screen and do **NOT** use a custom background color.   


	:::xml
	<?xml version = "1.0"?>
		<TabGroup>
			<placeTabsBottom>false</placeTabsBottom>
			<hiddenTabs>false</hiddenTabs>
			<backgroundColor>false</backgroundColor>
				<Tab>
					<action>https://www.zebra.com/us/en.html</action>
					<label>Zebra Tech</label>
					<disabled></disabled>
					<reload>false</reload>
					<config>/sdcard/Android/data/com.symbol.enterprisebrowser/s1/Config.xml
					</config>
				</Tab>
				<Tab>
					<action>https://techdocs.zebra.com</action>
					<label>Zebra Home</label>
					<disabled></disabled>
					<config>/sdcard/Android/data/com.symbol.enterprisebrowser/s2/Config.xml</config>
					<reload>false</reload>
				</Tab>
		</TabGroup> 

-----

### See Also

* [Config.xml Reference](../configreference)
* [Enterprise Browser APIs](../apioverview)
* [Function Key Mapping Guide](../keycapture/#mappingproprietaryfunctionkeycodes)
* [DOM Injection guide](../dom)








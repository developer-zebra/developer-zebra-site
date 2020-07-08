---
title: Using the Tab Bar
productversion: '2.6'
product: Enterprise Browser
layout: guide.html
---
## Overview
Enterprise Browser 2.5 (and later) permits the use of tabs similar to those found on many desktop browsers, each with its own `Config.xml` file and potentially different sets of functions. Tabs are a convenient way to employ multiple apps or multiple feature sets with a simple and familiar way of switching between them. 

> **NOTE**: Similar functionality is available through the [Multi-session feature](../multisession) and the [NativeTabbar API](../../api/NativeTabbar). 

#### Tab Bar Rules

* **EB tabs must be defined in advance using the** `tabbar.xml` **file**. They cannot be created by the device user. 
* The `tabbar.xml` file resides on the device, and its path must be specified in the app's `Config.xml` file. [More info](../configreference/#usetabbar).
* Tabs are created when the EB app launches. To deploy or change one or more tabs, push a new `tabbar.xml` file to the device and relaunch the app.  
* The size of the device screen and its orientation effect tab display and the ease of switching between them. **Zebra recommends deploying no more than 10 browser tabs**. 

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
* Controls the background color of the tab bar. If this tag is missing or unspecified, tab bar uses app's default color. 
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
* **MANDATORY**: Used to specify a title displayed in the tab. Must include at least one character.
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
* **Optional**: Used to specify the path (relative to the Enterprise Browser %INSTALL% directory) to an icon (image) file on the device to display ***in place of*** the specified tab title
* Accepts a valid path and file name in the device file system
* Supports `.bmp`, `.gif`, `.jpg`, `.png` file formats 
* **Overrides title tag**
* string

####backgroundColor
* **Optional**: Controls the background color of the tab contents. If this tag is missing or unspecified, defaults to 0xFFFFFF (white). 
* Accepts hexadecimal [HTML color codes](https://htmlcolorcodes.com/) 
* **Default = 0xFFFFFF** (white)
* hex value (accepts FFFFFF or 0xFFFFFF notation)

####selectedColor
* **Optional**: Controls the color of the selected (active) tab
* Accepts hexadecimal [HTML color codes](https://htmlcolorcodes.com/) 
* hex value (accepts FFFFFF or 0xFFFFFF notation)

**Android Note**: Color assignment works only when a selectedColor attribute is applied to every tab ***and*** a backgroundColor is assigned to the tab bar.

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
* [Native Tabbar API](../../api/NativeTabbar)
* [Function Key Mapping Guide](../keycapture/#mappingproprietaryfunctionkeycodes)
* [DOM Injection guide](../dom)








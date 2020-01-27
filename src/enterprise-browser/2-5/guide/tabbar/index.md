---
title: Using the Tabbar
productversion: '2.5'
product: Enterprise Browser
layout: guide.html
---
## Overview
Enterprise Browser 2.5 (and higher) permits the use of tabs similar to those found on many desktop browsers, each with its own `Config.xml` file and potentially different sets of functions. Tabs are a convenient way to employ multiple apps or multiple feature sets with a simple and familiar way of switching between them. 

#### Tabbar Rules

* **EB tabs must be defined in advance using the** `tabbar.xml` **file**. They cannot be created by the device user. 
* The `tabbar.xml` file resides on the device, and its path must be specified in the app's `Config.xml` file. 
* Tabs are created when the EB app launches. To deploy or change one or more tabs, push a new `tabbar.xml` file to the device and relaunch the app.  
* The size of the device screen and its orientation effect tab display and the ease of switching between them. **Zebra recommends deploying no more than 10 browser tabs**. 

-----

## Tab Bar Tags

### TabGroup Attributes

Attributes under the &lt;TabGroup&gt; apply to all tabs defined in that node. 

#### placeTabsBottom
* Controls whether tabs are shown at the bottom of the display; otherwise shown at the top (**default**) 
* *true* or ***false***

#### hiddenTabs
* Controls whether tags are shown or hidden (**default**) 
* *true* or ***false*** 

#### backgroundColor
* Controls the background color of the tab bar. If this tag is missing or unspecified, tab bar uses app's default color. 
* Accpets 32-bit hexadecimal [HTML color codes](https://htmlcolorcodes.com/) 

-----

### Tab Attributes

Attributes under the &lt;tab&gt; tag apply to only to the tab defined in that node.
 

####action 
* The page to be loaded with the tab is brought to the foreground 
* Accepts a web URL or fully qualified path and name of a device-resident file 

####label
* Used to enter a title for the tab (on-screen space permitting)
* Accepts a string of alphanumeric characters

####disabled
* Controls whether tab creation is blocked (**disabled by default**) 
* *true* or ***false*** 

####reload
* Controls whether to refresh the URL or file specified in the Action parameter whenever the tab comes into focus (**disabled by default**) 
* *true* or ***false*** 

####config
* Used to specify the path of the `Config.xml` file containing properties to use when creating the tab 
* Accepts a fully qualified path and file name of the `Config.xml` file relevant to the Action  


####icon
* Used to specify the path (relative to the Enterprise Browser %INSTALL directiory) to local files on the device
* Accepts a valid path in the device file system

####backgroundColor
* Controls the background color of the tab contents. If this tag is missing or unspecified, tab bar uses app's default color. 
* Accepts 32-bit hexadecimal [HTML color codes](https://htmlcolorcodes.com/) 

**NOTE**: Use this option to remove "blinking" that sometimes occurs when switching tabs when the app's background color is not white.

####selectedColor
* Controls the color of the tab.  
* Accepts 32-bit hexadecimal [HTML color codes](https://htmlcolorcodes.com/) 

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
* [Enterprise Browser APIs](../apioverview)
* [Function Key Mapping Guide](/keycapture/#mappingproprietaryfunctionkeycodes)
* [DOM Injection guide](../dom)








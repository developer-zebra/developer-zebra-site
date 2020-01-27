---
title: Multi-session Guide
productversion: '2.5'
product: Enterprise Browser
layout: guide.html
---
## Overview
Enterprise Browser 2.5 (and higher) supports the ability to run multiple EB apps at the same time, each accessing different `Config.xml` files and with different set of configuration settings. This provides a convenient way to launch multiple apps and feature-sets with multiple easy ways of switching between them.

The multi-session can be implemeted in two ways: 

**Shortcut method**

**Tab method**


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








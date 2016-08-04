---
title: PocketBrowser 2.x Migration Guide
productversion: '1.4'
product: Enterprise Browser
layout: guide.html
---
##Overview
Enterprise Browser supports PocketBrowser 2.x applications, which in many cases will run within EB after just a few small changes. This guide explains the changes that will always be required for migrating to EB from PocketBrowser 2.x, and a few others that might be. 

**Prerequisites**:
These instructions require a development host (desktop or laptop) connected to a Zebra device, both containing the Enterprise Browser software, as well as a familiarity with the process of editing the Enterprise Browser `Config.xml` file. For help, see the guides below. 

**Related Guides**: 
* **[Installing Enterprise Browser](/enterprise-browser/1-4/guide/setup)**
* **[Editing the Config.xml file](/enterprise-browser/1-4/guide/ConfigEditor/)**

-----

## Common Steps For All Platforms
The instructions in this section apply to all migrations from Android, Windows Mobile and Windows CE. Platform-specific differences will be indicated as such in corresponding sections that follow. Most of the activities related to app migration involve editing the Enterprise Browser `Config.xml` file, which stores all app settings and parameters for runtime behavior. See the [Config Editor Utility Guide](/enterprise-browser/1-4/guide/ConfigEditor/) for information about how to connect to devices and access this file.  

####Config.xml
The single change that is always necessary when migrating to Enterprise Browser from any other platform is to specify the [StartPage](/enterprise-browser/1-4/guide/configreference#startpage) of the app in the Enterprise Browser `Config.xml` file. For PocketBrowser apps, it's also necessary to enable the backward compatibility engine. Some apps also require replication and/or adjustment of other settings from an old config file to the new, and to copy page files and/or relevant JavaScript API files to the device. This section covers all of those steps; perform as necessary.

**Note for Windows CE devices**: Zebra recommends a persistent installation for most EB scenarios on WinCE. Before proceeding, see the [Windows Mobile/CE section](#windowsmobileceusingwebkit) (below) for details, **including special instructions for editing the** `Config.xml` **file** so changes are preserved.
<br>

####Path to Config.xml file: 
* **On Android devices**: `/sdcard/Android/data/com.symbol.enterprisebrowser/Config.xml`
* **On Windows devices**: `\Program Files\EnterpriseBrowser\Config\Config.xml`

**Perform Steps 1-4 as needed**: 

**&#49;. Specify the StartPage of the EB app** in the new `Config.xml` file. This will be the first page that loads with Enterprise Browser, and can be on a server (specify the URL) or local to the device (specify the full path), as below: 

		:::xml
		<Configuration>
		    <Applications>
		        <Application>
		            <General>
		                <Name value="Menu"/>
		                <StartPage value="file://%INSTALLDIR%/menu.html" name="Menu"/>
		            </General>

**For Android devices, skip to Step 3**.

**&#50;. Enable backward compatibility** by specifying a value of '1' in the [UseRegularExpressions](/enterprise-browser/1-4/guide/configreference#useregularexpressions) parameter, as below:    

		:::xml
		<Configuration>
			<Applications>
				<Application>
					<General>
						<Name value="Menu"/>
						<StartPage value="file://%INSTALLDIR%/menu.html" name="Menu"/>
						<UseRegularExpressions value='1'/>
							</General>


This enables the regular expressions engine for translation to EMML 1.0 syntax, which is stored in an XML file called `RegEx.xml`. After EB installation, the regular expressions engine can be found on the device at `\Program Files\EnterpriseBrowser\Config\RegEx.xml`. **Applies only to Windows Mobile/CE devices**. 

> **Warning: Do not alter the RegEx.xml file in any way**. 

**&#51;. Verify that the [Engine in Use]() parameter contains a value of 'Webkit' (as below) to enable the correct rendering engine**:
	

		:::xml
		<Configuration>
			<Engine>
				<EngineInUse value='Webkit'/>
			</Engine>
		

**&#52;. Copy any required off-line files** (i.e. ["BadLink"](/enterprise-browser/1-4/guide/configreference/#badlinkuri) pages, etc.) to the device, take note of their paths, and specify those paths in the relevant sections of the `Config.xml` file, as necessary. 

> **Note**: The file systems of some operating systems are case-sensitive. For cross-platform compatibility, letter case for URL, file and path references in the `Config.xml` file should be identical to those of the sources.

See the **[Enterprise Browser Config.xml Reference](/enterprise-browser/1-4/guide/configreference)** for more information about settings, parameters and other requirements.

####Display Rendering
**Applies to most migration scenarios**. If migrating from a Windows device to one running Android, or from Windows Mobile to Windows CE or vice-versa, adjustments to some display settings will likely be necessary since those migrations involve the use of different webkits. Other considerations might include display of the soft input panel, its position on the screen and the ability to hide the input panel, if desired. The relevant parameters are listed below; all should be checked as part of the migration process. 

**Render-related `Config.xml` parameters**: 

* **[Enable SIP](../configreference/#enablesip)**
* **[Engine In Use](../configreference/#engineinuse)**
* **[Fit To Screen](../configreference/#fittoscreenenabled)**
* **[Font Family](../configreference/#fontfamily)**
* **[Page Zoom](../configreference/#pagezoom)**
* **[Resize on SIP](../configreference/#resizeonsip)**
* **[Scroll Technique](../configreference/#scrolltechnique)**
* **[Use Native Fonts](../configreference/#usenativefonts)**

-----

## Windows Mobile/CE using Webkit 
**Complete this section only after following the [Common Steps For All Platforms](#commonstepsforallplatforms) above**, and only if migrating to Windows Mobile or Windows CE with Webkit. If using the IE rendering engine, skip to the next section. 

####Persistence
**For Windows CE devices, Zebra recommends the "Enterprise Browser - Webkit (Persistent)" installation option** when [deploying EB to the device](/enterprise-browser/1-4/guide/setup#deploymenttodevices). This allows Enterprise Browser settings to persist following a cold boot. On persistent installations, **the location of the** `Config.xml` **file to be edited is different** than that of non-persistent installations, and **changes could be lost after a cold boot if an edited file is placed in the wrong location on the device**. 

After a device with a persistent installation is cold-booted, the Enterprise Browser executable (i.e. `EnterpriseBrowser_v1.3_IE.Cab` file) and the `Config.xml` file are copied from the persistence directory:

* `\Application\EnterpriseBrowser\Config\` 

to this non-persistent directory, which is overwritten as part of the cold-boot process:  

* `\Program Files\EnterpriseBrowser\Config\`

It is from the `\Program Files` directory that Enterprise Browser is launched.  

> To preserve changes to the `Config.xml` file, **the edited file must be placed in the** `\Application\EnterpriseBrowser\Config\` **directory**. 

If no `Config.xml` file is present in the source directory following a cold boot, a new `Config.xml` file with default values will be generated and copied to the destination directory, overwriting any prior settings. 

####Notes:
* The generic methods RasConnect and RasDisconnect are not supported.
* The NOSIP control for preventing display of the soft input panel is not supported. See the [disabling the SIP](/enterprise-browser/1-4/api-Sip?Disabling%20the%20SIP) section of the SIP API reference for alternative methods.
* [FitToScreenEnabled](/enterprise-browser/1-4/guide/configreference?FitToScreenEnabled) is not supported on WinCE.

-----

## Windows Mobile/CE using IE
**Complete this section only after following the [Common Steps For All Platforms](#commonstepsforallplatforms) above**, and only if migrating to Windows Mobile or Windows CE with the IE rendering engine. If using Webkit, go back to the previous section. 

When using IE as the rendering engine, **only PocketBrowser APIs will be available**. Enterprise Browser APIs will not. This might represents the best choice for target devices with limited memory and/or CPU resources, or for apps that don't require Webkit features or functionality offered by Enterprise Browser APIs.

####Persistence
**For Windows CE devices, Zebra recommends the "Enterprise Browser - IE (Persistent)" installation option** when [deploying EB to the device](/enterprise-browser/1-4/guide/setup#deploymenttodevices). This allows Enterprise Browser settings to persist following a cold boot. On persistent installations, **the location of the** `Config.xml` **file to be edited is different** than that of non-persistent installations, and **changes could be lost after a cold boot if an edited file is placed in the wrong location on the device**. 

After a device with a persistent installation is cold-booted, the Enterprise Browser executable (i.e. `EnterpriseBrowser_v1.3_IE.Cab` file) and the `Config.xml` file are copied from the persistence directory:

* `\Application\EnterpriseBrowser\Config\` 

to this non-persistent directory:   

* `\Program Files\EnterpriseBrowser\Config\`

It is from The `\Program Files\EnterpriseBrowser\` directory that Enterprise Browser is launched. This directory is overwritten by a cold boot. To preserve changes to the `Config.xml` file, **the edited file must be placed in the** `\Application\EnterpriseBrowser\Config\` **directory**. If no `Config.xml` file is present in the source directory following a cold boot, a new `Config.xml` file with default values will be generated and copied to the destination directory, overwriting any prior settings. 

####Engine in Use
**Verify that the [Engine in Use]() parameter contains a value of 'IE'** (as below) to enable the correct rendering engine:


		:::xml
		<Configuration>
				<Engine>
					<EngineInUse value='IE'/>


####Notes:
* Generic methods RasConnect and RasDisconnect are not supported.
* [PageZoom](/enterprise-browser/1-4/guide/configreference?PageZoom) is not supported on IE. This web view supports text zoom only.
* Javascript events onkeydown, onkeypress, onkeyup are not supported in Windows mobile devices running IE. Use Enterprise Browser [Keycapture APIs](/enterprise-browser/1-4/api/keycapture) instead to capture the hardware keypresses.

------

## Android
**Complete this section only after following the [Common Steps For All Platforms](#commonstepsforallplatforms) above**, and only if migrating to Android.

####Deploy Legacy APIs
Running a PocketBrowser 2.x app in Enterprise Browser on Android requires that the legacy APIs (contained in the `elements.js` file) be available to any HTML page rendered on the device that needs access to an API. For example, if a page exists for controlling the device scanner, that page's HTML must contain a reference to `elements.js`. The file should generally be located in the same place as the HTML pages themselves, which can be on the device or a server. See the [API Usage Guide](/enterprise-browser/1-4/guide/apioverview/) for more information. 

**To Deploy the** `elements.js` **file**:

**&#49;. Locate the `elements.js` file**, which by default is located in the following directory on the development host:

* `C:/EnterpriseBrowser/JavaScriptFiles/BackwardCompatibility/`

**&#50;. Place a copy of `elements.js` on the device or a server** accessible by all of the app's HTML pages. 

**&#51;. Add a reference to the API file in every HTML page** that will access the APIs, as below: 


		:::html

		// This example applies when elements.js is in a web server's "js" folder:

	<html>
		<head>
		<script type="text/javascript" charset="utf-8" src="/js/elements.js"></script>
				

####Notes:
* The generic methods RasConnect and RasDisconnect are not supported.
* The NOSIP control for preventing display of the soft input panel is not supported. See the [disabling the SIP](/enterprise-browser/1-4/api-Sip?Disabling%20the%20SIP) section of the SIP API reference for alternative methods.
* [FitToScreenEnabled](/enterprise-browser/1-4/guide/configreference?FitToScreenEnabled) is not supported on Android.
* EMML profiles are not supported.
* Check the device for hardware compatibility, especially the [barcode scanning](http://docs.rhomobile.com/en/2.2.0/rhoelements/scanner) options.

-----

**Related Guides**: 
* **[PocketBrowser 3.x Migration Guide](/enterprise-browser/1-4/guide/pb3/)**
* **[RhoElements Migration Guide](/enterprise-browser/1-4/guide/elements)**
* **[RhoMobile Migration guide](/enterprise-browser/1-4/guide/rhomobile)**
* **[Optimization Guide](/enterprise-browser/1-4/guide/optimization) -** for help minimizing device memory footprint

* **[PocketBrowser 2.x online docs](http://goo.gl/H1Fuik)**

* **[Enterprise Browser Config.xml Reference](/enterprise-browser/1-4/guide/configreference) -** for more information about settings, parameters and other requirements.



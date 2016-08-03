---
title: PocketBrowser 2.x Migration Guide
productversion: '1.4'
product: Enterprise Browser
layout: guide.html
---
##Overview
Enterprise Browser supports PocketBrowser 2.x applications, which in many cases will run in EB with just a few small changes. This guide explains the changes that will always be required for migrating PowcketBrowser 2.x apps to EB, and a few that might be. 

####Prerequisites
These instructions require a development host (desktop or laptop) connected to a Zebra device, both containing the Enterprise Browser software, as well as a familiarity with the process of editing a device configuration file. For help installing Enterprise Browser, see the [Enterprise Browser Setup Guide](/enterprise-browser/1-4/guide/setup). **For Windows CE devices, Zebra recommends selecting a persistent installation for Webkit** in the [device deployment step](/enterprise-browser/1-4/guide/setup#deploymenttodevices), which allows Enterprise Browser settings to persist following the cold boot that is necessary to complete the installation.

-----

## Common Steps For All Platforms
The instructions in this section apply to all migrations from Android, Windows Mobile and Windows CE. Platform-specific differences will be indicated as such in corresponding sections that follow. Most of the activities related to app migration involve editing the Enterprise Browser `Config.xml` file, which stores all app settings and parameters. See the [Config Editor Utility Guide](/enterprise-browser/1-4/guide/ConfigEditor/) for information about how to connect to devices and access this file.  

###Config.xml
The single change that is always necessary when migrating to Enterprise Browser from any other platform is to specify the [StartPage](/enterprise-browser/1-4/guide/configreference#startpage) of the app in the Enterprise Browser `Config.xml` file. For PocketBrowser apps, it's also necessary to enable the backward compatibility engine. For some apps, it also might be necessary to replicate and/or adjust other relevant settings from old config file to the new, and to copy page files and/or relevant JavaScript API files to the device. 

####Location of the Enterprise Browser `Config.xml` file: 
* **On Android devices**: `/sdcard/Android/data/com.symbol.enterprisebrowser/`
* **On Windows devices**: `\Program Files\EnterpriseBrowser\Config\`

&#49;. **Specify the StartPage of the EB app** in the new `Config.xml` file. This will be the first page that loads with Enterprise Browser, and can be on a server (specify the URL) or local to the device (specify the full path), as below: 

		:::xml
		<Configuration>
		    <Applications>
		        <Application>
		            <General>
		                <Name value="Menu"/>
		                <StartPage value="file://%INSTALLDIR%/menu.html" name="Menu"/>
		            </General>


&#50;. **Enable backward compatibility** by specifying a value of "1" in the [UseRegularExpressions](/enterprise-browser/1-4/guide/configreference#useregularexpressions) parameter, as below:  

		:::xml
		<Configuration>
			<Applications>
				<Application>
					<General>
						<Name value="Menu"/>
						<StartPage value="file://%INSTALLDIR%/menu.html" name="Menu"/>
						<UseRegularExpressions value='1'/>
							</General>


This enables the regular expressions engine for translation to EMML 1.0 syntax based on an XML file called `RegEx.xml`. After EB installation, the regular expressions engine can be found on the device at `\Program Files\EnterpriseBrowser\Config\RegEx.xml`. 

&#51;. **Verify that the [Engine in Use]() parameter contains a value of 'Webkit' (as below) to enable the correct rendering engine**:
	

		:::xml
		<Configuration>
			<Engine>
				<EngineInUse value='Webkit'/>
			</Engine>
		

&#52;. **Copy any required off-line files** (i.e. ["BadLink"](/enterprise-browser/1-4/guide/configreference/#badlinkuri) pages, etc.) to the device, take note of their paths, and specify those paths in the relevant sections of the `Config.xml` file, as necessary. 

> **Note**: The file systems of some operating systems are case-sensitive. For cross-platform compatibility, letter case for URL, file and path references in the `Config.xml` file should be identical to those of the sources.

See the **[Enterprise Browser Config.xml Reference](/enterprise-browser/1-4/guide/configreference)** for more information about settings, parameters and other requirements.

-----

## Display Rendering
If migrating from a Windows device to one running Android, or from Windows Mobile to Windows CE or vice-versa, adjustments to some display settings will likely be necessary since those migrations involve the use of different webkits. Other considerations might include display of the soft input panel, its position on the screen and the ability to hide the input panel, if desired. The relevant parameters are listed below; all should be checked as part of the migration process. 

**Render-related settings**: 

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
**Complete this section only after following the [Common Steps For All Platforms](#commonstepsforallplatforms) above, and only if migrating to Windows Mobile or Windows CE with Webkit. If using the IE rendering engine, 


NEW FOR CHECKING


coldCAD (CE)
cold boot will not do a cold boot. Zebra offers ColdCAD, which forces a cold boot. (HW, PWR, remove BATT)

warm
cold
coldCAD

EB cab file persistent and non

copy content of EB content from app folder to pgm files location

pgm
app
temp
win

persistent goes to app
on cold boot it copies from app to pgm files
changes to config must be made in enterprise folder

launches from /pgm/ent

edit config in app folder
cold boot ciopies to pgm files
change become live



### Usage Notes
* Generic methods RasConnect & RasDisconnect are not supported.
* NOSIP not supported. The NOSIP control was a solution for placing a text box onto the page that did not trigger the Soft Input Panel. This predates the APIs that now allow us to hide the SIP or place it off screen. There is no support for NOSIP on Enterprise Browser.  To disable the SIP, see the [disabling the SIP](/enterprise-browser/1-4/api-Sip?Disabling%20the%20SIP) section in the SIP API reference.
* [FitToScreenEnabled](/enterprise-browser/1-4/guide/configreference?FitToScreenEnabled) not supported. This is a function for Windows Mobile only.

-----

## Windows Mobile/CE using IE
When using IE as the rendering engine, only PocketBrowser APIs will be available; Enterprise Browser APIs will not. This might be fine for apps that don't require features of the Webkit or other Enterprise Browser functionality, or for devices with limited memory and/or CPU resources.

### Installation
To install Enterprise Browser please take a look at the [installation section](/enterprise-browser/1-4/guide/setup?Device Deployment).  If deploying to a Windows CE device, a persistent installation for IE should be selected so that Enterprise Browser persists over a cold boot.

> Note: Do not forget to cold boot the device to complete the installation.

### Configuration Settings
The [Config.xml](/enterprise-browser/1-4/guide/configreference) file needs to be updated:

1. Set the [StartPage](/enterprise-browser/1-4/guide/configreference?StartPage).

	:::xml
	<Configuration>
			<Applications>
					<Application>
							<General>
									<Name value="Menu"/>
									<StartPage value="file://%INSTALLDIR%/menu.html" name="Menu"/>
							</General>

2. Switch backwards compatibility on. Enterprise Browser supports PocketBrowser 2.x (EMML 1.0) through the use of a regular expressions engine. The regular expressions engine can be activated from within the configuration file by setting the value of [UseRegularExpressions](/enterprise-browser/1-4/guide/configreference?UseRegularExpressions) to 1.EMML 1.0 syntax is translated based on an XML file. After a default installation this file can be located: `\Program Files\\EnterpriseBrowser\Config\RegEx.xml`

	:::xml
	<Configuration>
			<Applications>
					<Application>
							<General>
									<Name value="Menu"/>
									<StartPage value="file://%INSTALLDIR%/menu.html" name="Menu"/>
									<UseRegularExpressions value='1'/>
							</General>

3. Verify that Webkit is the rendering engine to use.

		:::xml
		<Configuration>
				<Engine>
								<EngineInUse value='IE'/>

4. Move any offline files to the device.

>If you have any BadLink pages or offline resources (on the device), copy them over now.

### Usage Notes
* Generic methods RasConnect & RasDisconnect are not supported.
* [PageZoom](/enterprise-browser/1-4/guide/configreference?PageZoom) is not supported on IE. This web view supports text zoom only.
* Javascript events onkeydown, onkeypress, onkeyup are not supported in Windows mobile devices running Internet explorer. Use EnterpriseBrowser [Keycapture APIs](/enterprise-browser/1-4/api/keycapture) instead to capture the hardware keypresses.

## Android
Since you have chosen Android to run a PocketBrowser v2 application, you should expect some major differences with regard to rendering. The rendering that is used on Android is the stock Webview that comes with the Android SDK.

### Installation
To install Enterprise Browser please take a look at the [installation section](/enterprise-browser/1-4/guide/setup?Device Deployment).

### Configuration Settings
The [Config.xml](/enterprise-browser/1-4/guide/configreference) file needs to be updated:

1. Set the [StartPage](/enterprise-browser/1-4/guide/configreference?StartPage).

		:::xml
		<Configuration>
				<Applications>
						<Application>
								<General>
										<Name value="Menu"/>
										<StartPage value="file://%INSTALLDIR%/menu.html" name="Menu"/>
								</General>


2. Switch backwards compatibility on. Enterprise Browser supports PocketBrowser 2.x (EMML 1.0) through the use of a regular expressions engine. The regular expressions engine can be activated from within the configuration file by setting the value of [UseRegularExpressions](/enterprise-browser/1-4/guide/configreference?UseRegularExpressions) to 1.EMML 1.0 syntax is translated based on an XML file. After a default installation this file can be located: `\Program Files\\EnterpriseBrowser\Config\RegEx.xml`

		:::xml
		<Configuration>
				<Applications>
						<Application>
								<General>
										<Name value="Menu"/>
										<StartPage value="file://%INSTALLDIR%/menu.html" name="Menu"/>
										<UseRegularExpressions value='1'/>
								</General>

3. Move any offline files to the device.
>If you have any BadLink pages or offline resources (on the device), copy them over now.

4. Copy the `elements.js` file that comes with the installation to the location of your HTML pages and reference it appropriately in your application

		:::html
		<html>
			<head>
				<script type="text/javascript" charset="utf-8" src="/js/elements.js"></script>
				<!-- assumes I have copied the elements.js file to my web server's JS folder -->

### Usage Notes
* Generic methods RasConnect & RasDisconnect are not supported.
* NOSIP not supported. The NOSIP control was a solution for placing a text box onto the page that did not trigger the Soft Input Panel. This predates the APIs that now allow us to hide the SIP or place it off screen. There is no support for NOSIP on Enterprise Browser. To disable the SIP, see the [disabling the SIP](/enterprise-browser/1-4/api-Sip?Disabling%20the%20SIP) section in the SIP API reference.
* [FitToScreenEnabled](/enterprise-browser/1-4/guide/configreference?FitToScreenEnabled) not supported. This is a function for Windows Mobile only.
* EMML profiles do not work.
* Check the device for hardware compatibility, especially the [barcode scanning](http://docs.rhomobile.com/en/2.2.0/rhoelements/scanner) options.

-----

**Related Guides**: 
* **[PocketBrowser 3.x Migration Guide](/enterprise-browser/1-4/guide/pb3/)**
* **[RhoElements Migration Guide](/enterprise-browser/1-4/guide/elements)**
* **[RhoMobile Migration guide](/enterprise-browser/1-4/guide/rhomobile)**
* **[Optimization Guide](/enterprise-browser/1-4/guide/optimization) -** for help minimizing device memory footprint

* **[PocketBrowser 2.x online docs](http://goo.gl/H1Fuik)**

* **[Enterprise Browser Config.xml Reference](/enterprise-browser/1-4/guide/configreference) -** for more information about settings, parameters and other requirements.



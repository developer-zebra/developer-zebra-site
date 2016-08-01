---
title: RhoElements 2.x Migration Guide
productversion: '1.4'
product: Enterprise Browser
layout: guide.html
---
##Overview
Enterprise Browser supports RhoElements 2.x applications, and in many cases such apps can run in EB with little or no changes required. This guide is intended to assist in making the few changes that might be required for migration. 

**Related Guides**: 
* **[PocketBrowser 2.x Migration Guide](/enterprise-browser/1-4/guide/pb2/)** 
* **[PocketBrowser 3.x Migration Guide](/enterprise-browser/1-4/guide/pb3/)**
* **[RhoMobile Migration guide](/enterprise-browser/1-4/guide/rhomobile)**
* **[Optimization Guide](/enterprise-browser/1-4/guide/optimization) -** for help minimizing device memory footprint

-----

## Config.xml
The single change that is always necessary when migrating from another platform to Enterprise Browser is to move any relevant settings from the config file of the former platform to the Enterprise Browser `Config.xml` file. 

1. Set the [StartPage](/enterprise-browser/1-4/guide/configreference#startpage) of the app. This will be the first page that loads with Enterprise Browser, and can be on a server (specify the URL) or local to the device (specify the full path), as below: 

		:::xml
		<Configuration>
		    <Applications>
		        <Application>
		            <General>
		                <Name value="Menu"/>
		                <StartPage value="file://%INSTALLDIR%/menu.html" name="Menu"/>
		            </General>

2. Copy any required off-line files (i.e. ["BadLink"](/enterprise-browser/1-4/guide/configreference/#badlinkuri) pages, etc.) to the device, take note of their paths and specify those paths in the relevant sections of the `Config.xml` file, as necessary. 

> **Note**: The file systems of some operating systems are case-sensitive. Best practices for cross-platform compatibility therefore dictate that the use of upper and lower case for URL, file and path references in the `Config.xml` file be identical to those of the actual sources.

See the [Config.xml Reference Guide](/enterprise-browser/1-4/guide/configreference) for more information about settings, parameters and other requirements.

-----

## Meta Tags
RhoElements 2.x and Enterprise Browser both support the configuration of app functionality "on-the-fly" through the use of meta tags. Enterprise Browser was engineered to be backward compatible with this feature, and therefore should implement RE 2.x meta tags for Android and Windows Mobile/CE with no changes required. **As a precaution, confirm that the tags were specified properly, as below**. 

Example meta-tag specification:

	:::html
	<META HTTP-Equiv="scanner" Content="Enable">
	<META HTTP-Equiv="scanner" Content="AutoEnter:Enabled">
	<META HTTP-Equiv="scanner" Content="Start"> 

## Display Rendering
If migrating from a Windows device to one running Android, adjustments to some display settings will likely be necessary since the two platforms use different webkits. Other considerations might include display of the soft input panel and its position on the screen. Some of the relevant parameters are listed below. 

**Render-related settings**: 

* **[Enable SIP](../configreference/#enablesip)**
* **[Engine In Use](../configreference/#engineinuse)**
* **[Fit To Screen](../configreference/#fittoscreenenabled)**
* **[Font Family](../configreference/#fontfamily)**
* **[Page Zoom](../configreference/#pagezoom)**
* **[Resize on SIP](../configreference/#resizeonsip)**
* **[Scroll Technique](../configreference/#scrolltechnique)**
* **[Use Native Fonts](../configreference/#usenativefonts)**

### JavaScript APIs
RhoElements 2.x suported the ability to access functionality directly through JavaScript:

	:::javascript
	// scanner is a RhoElments 2.x API
	scanner.start();

	// generic is a JavaScript object in PocketBrowser and RhoElements
	generic.InvokeMETAFunction('SignatureCapture', 'Visibility:Visible');

For access to the same functionality with Enterprise Browser on Android, the `elements.js` file must be copied to the device and referenced within the HTML code. The `elements.js` file is located in the Enterprise Browser installation folder:

<!-- TBD Insert ScreenShot -->

	:::html
	<html>
		<head>
			<script type="text/javascript" charset="utf-8" src="elements.js"></script>

See [Using the APIs](../../api/apioverview/) for details about how and where to reference the `elements.js` in HTML.  

## Enterprise Browser Does not support the following: 
* The generic methods RasConnect and RasDisconnect
* The NOSIP control. This control placed a text box onto any page that did not trigger the Soft Input Panel. This predates the APIs that now can hide the SIP or place it off screen. To hide the SIP, see the [SIP API page](/enterprise-browser/1-4/api/Sip).
* The [FitToScreenEnabled](/enterprise-browser/1-4/guide/configreference?FitToScreenEnabled) parameter applies to Windows Mobile only.
* EMML profiles do not work.
* Check the device for hardware compatibility, especially the [barcode scanning](http://docs.rhomobile.com/en/2.2.0/rhoelements/scanner) options.


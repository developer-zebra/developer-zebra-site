---
title: RhoMobile 4.x Migration guide
productversion: '1.4'
product: Enterprise Browser
layout: guide.html
---

## Overview
Enterprise Browser supports applications that were using RhoElements 4.x Shared Runtime or HTML based Hybrid RhoMobile applications on Windows Mobile/CE and Android using HTML and JavaScript. It does not support any Ruby APIs or usage from RhoMobile applications. 

See also the **[RhoMobile 2.x online docs](http://docs.rhomobile.com/en/5.4/guide/rhoArchitecture)**. 

## JavaScript Usage
In RhoElements 4.x, access to the features were made available through JavaScript objects under the `Rho.` namespace:

	:::javascript
	// Scan with default options
	Rho.Barcode.take({}, scan_received);

To use the `Rho.` namespace, replace the `rhoapi-modules.js` file that came with RhoMobile Suite 4.x with the file `rhoapi-modules.js`. By default, this file is located in the following directory on the development host:

* `C:/EnterpriseBrowser/JavaScriptFiles/BackwardCompatibility/`

##Intents Android Limitation
On Android, Broadcast Intents are set up at build time. To listen to broadcasts from other applications, include an entry in the Manifest file for the application to receive them. Enterprise Browser uses a fixed APK, and therefore does not support Broadcast listening. 

NOTE NOTE NOTE NOTE

In order to receive intent, one approach is to register receiver in manifest file. But registering a receiver can also be done dynamically.

In case of EnterpriseBrowser, we are facilitating the same via config tag as mentioned below:

http://ebzebra.github.io/docs/1.3/index.html#guide-configreference?Intent

	<IntentReceiver>
	       <EnableReceiver value="0" />
	       <IntentAction value="" />
	       <IntentCategory value="" />
	</IntentReceiver>

Using the above tag, one can register a receiver and can receive the same.

Hence the below content is no longer valid from EB 1.3 onwards.

Intents Android Limitation
“On Android Broadcast Intents are set up at build time. To listen to broadcasts from other applications, an entry must be included in the Manifest file for the application to receive them. Since Enterprise Browser is a fixed APK, Broadcast listening will not be possible.”

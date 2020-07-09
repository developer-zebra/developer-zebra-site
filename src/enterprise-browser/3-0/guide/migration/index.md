---
title: Migration Options
productversion: '2.6'
product: Enterprise Browser
layout: guide.html
---

##Overview 

Enterprise Browser offers several options for migrating apps from different operating systems, competitive solutions and legacy systems so they can run on modern hardware and EB versions. Below is a summary of EB migration options with links to the relevant documentation for each. 

-----

### From EB 1.8 and Older

Enterprise Browser 2.0 (and later) for Android supports the HTML5 ViewPort metatag and changes the way licensing is implemented. Apps running on older versions of EB might render improperly or display unexpected client certificate requests when launched with EB 2.x.  

The [Backward Compatibility Guide](../backward) explains the minor changes that might be required to solve these issues. 

-----

### From PocketBrowser

**[PocketBrowser](https://www.zebra.com/us/en/support-downloads/software/utilities/pocketbrowser.html) is an app development toolkit for Windows Mobile/CE** that's built on the mobile version of Internet Explorer. It enables developers to quickly build mobile apps for a wide range of functions, including barcode scanning, signature capture and printing. 
 
In many cases, PocketBrowser 2.x/3.x apps can run within Enterprise Browser after just a few small changes. The [PocketBrowser Migration Guide](../pb2) explains the changes that will always be required for migrating to EB from PB, and a few others that might be.

-----

### From RhoElements

RhoElements is an extension of the RhoMobile HTML5 development environment that enables connected and non-connected apps to perform seamlessly on Android and Windows Mobile/CE devices. Enterprise Browser supports RhoElements 2.x applications, which in many cases will run in EB with just a few small changes. The [RhoElements Migration Guide explains](../elements) explains the changes that will always be required for migration to EB, and a few others that might be.

-----

### From RhoMobile

The RhoMobile HTML5 development environment allows apps to target Android and Windows Mobile/CE devices using the same code. Enterprise Browser supports RhoElements 4.x Shared Runtime applications and HTML-based hybrid RhoMobile applications for Android and Windows Mobile/CE that use HTML and JavaScript. **Ruby APIs and Ruby-language program code are NOT supported**.

The [RhoMobile Migration Guide](../rhomobile) explains the changes required for migrating RhoMobile apps to EB.

-----

### From SAP Console / TekTerm

For companies moving away from terminal-based mobile applications that use SAPConsole, [Zebra TekTerm](https://www.zebra.com/us/en/support-downloads/software/demo/Terminal-Emulators-Open-TekTerm.html) or similar character-based front-end solutions, Enterprise Browser should be considered for its simple means of developing portable UIs with industry-standard HTML, CSS and JavaScript. 

Learn more [about Enterprise Browser](../about).

-----

### From Windows Mobile/CE

Enterprise Browser 2.5 (and later) supports meta tag filtering, which can be used to block meta tags or meta-tag properties from being applied if they're not supported on Android devices. Meta tag filtering supports whitelisting (allowing) and blacklisting (blocking) of meta tags as well as individual meta tag properties and is configured in the `Config.xml` file. 

Go to the [meta tag filtering section](../configreference/#metatagfiltering) of the `Config.xml` Reference. 

-----

Related guides: 

* [Configuration Reference](../configreference)
* [Enterprise Browser APIs](../../api)
* [API Compatibility Matrix](../compatibility)
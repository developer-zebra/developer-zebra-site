---
title: Multi-session Guide
productversion: '2.5'
product: Enterprise Browser
layout: guide.html
---
## Overview
Enterprise Browser 2.5 (and higher) supports the ability to run multiple EB apps at the same time, each accessing different `Config.xml` files with different sets of configuration settings. This provides a convenient way to deploy multiple apps and feature-sets and switch easily between them. 

**Multi-session capabilities can be invoked in two ways**: 

**The shortcut method** involves creating two or more EB-app shortcuts that when launched, appear side-by-side in multiple webview instances or browser tabs. 

##### ADVANTAGES 
* Multiple apps can be deployed and launched in stand-alone mode first, and combined into browser tabs only when needed.
* Zebra offers the [Shortcut Utility](../ShortcutCreator), a tool to simplify shortcut creation and deployment.  

##### DISADVANTAGES
* App-page content is persistent; it does not automatically update when the page is revisited.
* Only these config tags are supported: 
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
 
-----

With **the tab method**, tabs are pre-defined in a file and deployed to the device and always run as a group.

##### ADVANTAGES 
* An option exists to automatically update the page whenever it returns to focus.

##### DISADVANTAGES
* Tabs must be defined and deployed to the device in advance. 
* Apps must always be launched as a group of tabs. 
* Only these config tags are supported: 
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

### See Also

* [Config.xml Reference](../configreference)
* [Enterprise Browser APIs](../apioverview)
* [Function Key Mapping Guide](/keycapture/#mappingproprietaryfunctionkeycodes)
* [DOM Injection guide](../dom)








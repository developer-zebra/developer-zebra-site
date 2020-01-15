---
title: Web Page Capture 
productversion: '2.0'
product: Enterprise Browser
layout: guide.html
---

## Overview
Apps made with Enterprise Browser 1.7 (and higher) come with Web Page Capture, a diagnostic feature that captures app screen images and source files for each app screen that comes to the foreground.

> **This feature is available only on devices running Android**. 

-----

## Enable Screen Capture

**To enable Screen Capture functions for an app**:

**&#49;. Place a value of "1" in the [&lt;WebPageCapture&gt; tag](../configreference/#webpagecapture)** of the app's `Config.xml` file and push the file to the device.<br>
**&#50;. Launch the app and activate all screens** for which Web Page Capture is desired. The following functions are performed every time the app is launched: 
* **Files from any prior screen captures are deleted**.<br>
* **Two folders are created on the device**: <br>
 * `/Android/data/com.symbol.enterprisebrowser/Diagnostic/WebPageSource`
 * `/Android/data/com.symbol.enterprisebrowser/Diagnostic/WebPageScreen`<br>

* **Until the app is exited, screenshots are saved for all app screens that come to the foreground** and source files for those screens are saved once for each session. Files are saved to the folders above in the formats described below. 

**Note: Screen source files are saved only when screens appear for the first time during a session; sources are <u>NOT SAVED</u> for subsequent visits to a page**. 

-----

## WebPageSource folder
After a capture, this folder contains an additional folder named after the displayed file in the (last index name of the) source URL plus a date and time stamp (`_YYMMDD_HHMMSS`). 

For example: 

The folder created for the URL...

* `http://test.url.com/myApp/myAppScreen01.html`<br>

...created on March 23, 2017, at 2:23:03 p.m. <br>

...will be called: 

* `/myAppScreen01.html_170323_142303`<br>

Inside this folder will be all the source files for the captured page (.css, .html, .jpg, .js, etc.) named using the displayed file in the (last index name of the) source URL (just as for the folder naming, above) plus the file's original extension. Any special characters (such as " * / : < > ? \ |) are removed. 

**Note: Screen source files are saved only when screens appear for the first time during a session; sources are not saved for subsequent visits to a page**. 

-----

## WebPageScreen folder
After a capture, this folder will contain screenshots of each app screen that comes to the foreground named after the displayed file in the (last index name of the) source URL plus a date and time stamp (_YYMMDD_HHMMSS) and .jpg extension. Any special characters (such as " * / : < > ? \ |) are removed. 

For example: 

A screenshot file for the URL...

* `http://test.url.com/myApp/myAppScreen01.html`<br>

...created on March 23, 2017, at 2:23:03 p.m. <br>

...will be called: 

* `myAppScreen01.html_170323_142303.jpg`<br>

-----

## Notes

* **Screen source files are saved only when each screen appears for the first time** during a session; sources are not saved for subsequent visits to a page. 

* **Screenshots are captured for all app pages that come into the foreground**, including those previously viewed and captured at earlier times in the session. 

* **Screenshot quality varies**. Page rendering is based on download times, which can vary due to page content and network latency. This can result in partially captured, cut off or blank screenshots. 

* **Screenshots capture only content that appears in the WebView window**. Native buttons, debug buttons, alert windows and the System and Notification Bars are not captured. 

* **Android will capture a blank or all-white screenshot** if an alert window is called before page content is drawn in the WebView window. 

-----

**Related Guides**

* **[WebPageCapture config tag](../configreference/#webpagecapture)**
* **[Config.xml Reference](../configreference)**
* **[Enterprise Browser Guides](../)**
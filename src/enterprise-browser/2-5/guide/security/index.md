---
title: Security Features
productversion: '2.5'
product: Enterprise Browser
layout: guide.html
---

##Overview 

Enterprise Browser offers numerous security features implemented in various ways and through different interfaces. Below is a summary of EB security features with links to the relevant documentation for each. 

-----

### Basic/Digest Authentication
Enterprise Browser supports pages that are password-protected with basic and digest authentication. The tags for this feature are located in the [&lt;authentication&gt;](../configreference/#authentication) node of the EB app's `config.xml` file.   

-----

### Client and Server Certificates 
Enterprise Browser supports access to web sites that are protected with client- or server-side certificates. This is documented in the [&lt;Certificates guide&gt;](../certificates). 

-----

### Compliance with TLS 1.2, SSL3
Enterprise Browser supports Secure Sockets Layer (SSL) and the newer Transport Layer Security (TLS) protocols, detailed in the [EB Compliance Guide](../compliance). 

-----

### Device Lock-down
When tight control over device settings and/or apps is required, Enterprise Browser 1.6 and higher integrates with [Enterprise Home Screen](../../../../ehs), Zebra's free Android device lock-down solution. 

See the [Enterprise Browser Device Lock-down Guide](../ehs) for complete instructions. 

Also see **Kiosk Mode Enhancements**, below. 

-----

### Security Config Tags
The following security features can be implemented in an app's `config.xml` file. 

##### Web Security Features
* [&lt;ApplicationCacheEnabled&gt;](../configreference#applicationcacheenabled) - allows an HTML5 app to be stored locally for added security, off-line operation, improved speed and reduced server load.
* [&lt;ApplicationCacheOnExit&gt;](../configreference#applicationcacheonexit) - erases a cached HTML5 app upon exiting it. 
* [&lt;SetCacheMode&gt;](../configreference#setcachemode) - controls rules for loading pages from cache vs. loading from the server.
* [&lt;DeleteCacheOnExit&gt;](../configreference#deletecacheonexit) - erases cached data upon exiting.
* [&lt;DomStorageEnabled&gt;](../configreference#domstorageenabled) - controls whether application data is stored locally using HTML5 Web Storage.
* [&lt;DatabaseEnabled&gt;](../configreference#databaseenabled) - controls whether to enable the WebSQL database.
* [&lt;GeoLocationEnabled&gt;](../configreference#geolocationenabled) - controls whether location data from device sensors can be consumed by the EB app.
* [&lt;JavascriptEnabled&gt;](../configreference#javascriptenabled) - permits JavaScript code execution within an EB app to be toggled on and off.
* [&lt;SaveFormData&gt;](../configreference#saveformdata) - determines whether an app will retain data entered by a user into forms, checkboxes and other input elements.
* [&lt;BlockNetworkImage&gt;](../configreference#blocknetworkimage) - prevents the app from loading images over a network while allowing non-image resources to load.
* [&lt;BlockNetworkLoads&gt;](../configreference#blocknetworkloads) - prevents the app from loading all network resources, including images.
* [&lt;ClearWebData&gt;](../configreference#clearwebdata) - determines whether WebView data stored by the EB app will be retained when app returns to the foreground after the device HOME key is pressed.
* [&lt;NavigateToHomePage&gt;](../configreference#navigatetohomepage) - causes an EB app to display its Start Page when the app returns to the foreground.
* [&lt;MixedContentMode&gt;](../configreference#mixedcontentmode) - security feature that can prevent loading of content from insecure sites.
* [&lt;WebFilteringEnabled&gt;](../configreference#webfilteringenabled) - controls whether web sites will be filtered by the addresses specified in the related tags (below). 
* [&lt;WhiteListingUrls&gt;](../configreference#whitelistingurls) - explicitly allows one or more websites to be visited by an app.
* [&lt;BlackListingUrls&gt;](../configreference#blacklistingurls) - explicitly blocks one or more websites. 
* [&lt;DeleteCookiesOnExit&gt;](../configreference#deletecookiesonexit) - automatically erases cookies stored by Enterprise Browser when exiting. 
* [&lt;ExitPasswordEnabled&gt; tag](../configreference/#exitpasswordenabled) - forces the app to require a password to exit. 

##### Kiosk Mode Enhancements
**The following tags work only on devices running Android Lollipop (and higher)**. These features are intended to enhance Kiosk Mode, a Lollipop feature that restricts device usage to a single app. The tags also work independently.  

* [&lt;setHomeKeyDisable&gt;](../configreference#sethomekeydisable) - prevents the HOME key  (or capacitive button) on the device from exiting the current app. 
* [&lt;setStatusBarDisable&gt;](../configreference#setstatusbardisable) - prevents the status bar from being displayed (either automatically or by dragging down from the top of the screen). 
* [&lt;setBackKeyDisable&gt;](../configreference#setbackkeydisable) - disables the BACK key (or capacitive button), which could otherwise exit the current app and invoke the previously active app or Launcher screen. 
* [&lt;setVolumeButonDisable&gt;](../configreference#setvolumebutondisable) - prevents the user from controlling the speaker volume using device hardware keys. 
* [&lt;setRecentAppDisable&gt;](../configreference#setrecentappdisable) - prevents display of the Recent Apps list, which could otherwise allow the user exit the current app by selecting an app from the "recents" list. 

-----

### Settings Lock-out
An EB app can prevent a user from accessing the Settings panel on a device by using the [&lt;SettingsPageProtectionEnabled&gt; tag](../configreference/#settingspageprotectionenabled) in the EB app's `config.xml` file 

-----

Related guides: 

* [Configuration Reference](../configreference)
* [Enterprise Browser APIs](../../api)
* [API Compatibility Matrix](../compatibility)
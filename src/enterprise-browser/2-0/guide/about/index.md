---
title: About Enterprise Browser
productversion: '2.0'
product: Enterprise Browser
layout: guide.html
---

## Overview
Enterprise Browser is a powerful, industrial browser that provides everything needed to quickly build device apps for **barcode scanning, signature capture, payment processing, printing** and most other enterprise applications for a long list of [supported Zebra devices](../about#mobile) running Android and Windows Mobile/CE. EB includes a runtime environment inside which a company's application logic can be executed and controlled using HTML5 and CSS3 for presentation and JavaScript to access EB APIs for scanners, cameras, card readers and other device peripherals. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/4RMP9wSL1nY?list=PLce6-npz5dKcUY98npViY6QbuL3yhAXCx" frameborder="0" allowfullscreen></iframe>
<br>

The base [EB installation](../setup) includes all necessary components to allow a Windows development host to easily build device apps and set [runtime settings](../configreference) for local or mass-deployment using [Zebra StageNow](../../../../stagenow) or a mobile device management (MDM) system. **If migrating from another platform**, Enterprise Browser also can run apps built for PocketBrowser, RhoElements and the RhoMobile Shared Runtime, making it an ideal path for moving apps to a newer UI, device or platform. For more information about API crossover, see the [API Compatibility matrix](../compatibility). 

**Note: Zebra recommends avoiding the use of the JavaScript Alert function on any Enterprise Browser page**. Use of the syntax `window.alert("some alert message")` or `alert("some other message")` can result in unpredictable behavior when such code is used in Enterprise Browser apps.  

-----

## New in v2.0

> **NOTICE**: Android 8.x Oreo has changed the way application shortcuts are implemented. Therefore, <u>**app shortcuts are no longer supported on devices running Android Oreo and higher**</u>. Documentation relating to shortcuts remains visible for devices running earlier versions of Android. 

### Device Support 

EB 2.0 now supports the following mobile computing devices and operating systems: 

* **MC33X** Android Oreo
* **PS20J** Android Oreo
* **TC20** Android Nougat, Oreo
* **TC25** Android Nougat, Oreo
* **TC51** Android Oreo 
* **TC51 Healthcare** Android Oreo 
* **TC52** Android Oreo
* **TC56** Android Oreo 
* **TC57** Android Oreo
* **TC57 Healthcare** Android Oreo
* **TC70X** Android Oreo 
* **TC75X** Android Oreo 
* **TC72** Android Oreo
* **TC77** Android Oreo
* **VC80X** Android Oreo 
* **WT6000** Android Nougat

### Scanner Support
EB 2.0 is now supported for use with the following scanners when connected to Zebra devices and operating systems listed:

**Handheld Scanner Support**
* **DS2278** support added for use with Android Nougat devices
* **LI3678** support added for use with Android Nougat devices

See all [supported Zebra devices](../about#mobile). 

### New Features

* **Now supports [Hardware Key Remapping](../keycapture/#mappinghardwarekeys) -** to allow hardware keys of Zebra devices to be remapped to perform predefined actions or execute JavaScript code blocks residing on the device or on a server. 
* Android apps running on **EB 2.0 (and higher) can use [substitution variables](../configreference/#substitutionvariables)** to simplify file-path coding.
* **EB 2.0 and higher now supports [page-based actions](../pageactions)**, which can execute JavaScript code and/or predefined commands based on the contents of a page. In some instances, this feature can be used as a substitute for DOM injection with similar effect. 
* **An enhanced SAP support bundle** includes ready-to-use config files for SAP ITSmobile apps, simplifying device set-up for SAP customers. SAP config files can be modified for specific use cases. **SAP-specific features**:
 * UI auto-customization via ViewPort
 * SAP button height adjustment
 * Ready-to-use function key layouts
 * Transparent keyboards for WT6000
 * Button keyboard show/hide feature mapped to hardware key
 * Ready to use with DataWedge scanning 
 * Ready-to-use indicator buttons
 * Hardware keys remapped to quit, back, zoom in, zoom out actions
 * Orientation can be locked in portrait or landscape modes
 * Option to hide the system/nav bar (HOME, BACK and RECENT buttons)

### New/Enhanced APIs

The following new methods, properties and/or callbacks were added to Android APIs:

**The [Barcode API](../../api/barcode)** includes these enhancements: 
* **New AimType properties**:
 * barcodeCount
 * characterSetSelection
 * autoCharacterSetFailureOption
 * triggerType
 * aimType: AIMTYPE_PRESS_AND_SUSTAIN
 * scanMode: MULTI_BARCODE
* **New AimType methods**:
 * setautoCharacterSetPreference()
 * getautoCharacterSetPreference() 

**The [RFID API](../../api/re2x/rfid)** adds many new methods and properties and now supports the following RFID readers:
* RFD8500
* RFD2000
* MC33 long- and mid-range RFID reader

**A new [Bluetooth API](../../api/bluetooth)** allows Enterprise Browser apps to connect with disconnect from Bluetooth printers and scanners and to read from and write to them as applicable.

**Enhancements to the [WebView API](../../api/webview)** include: 
* **New Method**:
 * captureWebPageScreen() 
* **New Properties**:
 * useWideViewPort 
 * loadWithOverviewMode 
* **Other configuration parameters**:
 * &lt;ClearApplicationCacheOnLaunch &gt;
 * &lt;ClearApplicationCacheOnExit &gt;
 * &lt;DeleteCookiesOnLaunch &gt;
 * &lt;VerifyClientCertificate&gt;
 * &lt;DisplayZoomControls&gt;

### New/Updated Features/Guides

* **An updated [Licensing Guide](../licensing)** describes the all-new processes for licensing EB apps on a device and across an organization. 
* **New [Backward Compatibility Guide](../backward)** explains the minor adjustments required to avoid rendering issues and other problems when moving older apps to EB 2.0. 
* **New [DataWedge Intents User Guide](../dwintents)** covers programmatic control of DataWedge from within an EB app.   
* **New [Page-based Actions Guide](../pageactions)** defines a new set of actions that can execute JavaScript code or predefined commands whenever certain conditions are found on a page. 
* A new **[Voice Input/Output Guide](../voice)** describes how to use Page-based actions to enable voice input in an app. 
* **Enhanced [Key Remapping Guide](../keycapture/#mappinghardwarekeys)** describes how to map hardware keys on Zebra devices running Android. 
* **Enhanced SAP support** includes SAP applications running Warehouse Management or Extended Warehouse Management apps as well as apps built with SAP’s UI5 SDKs and Fiori UX tools.
* **Enhanced ButtonBar Features** include:  
 * **Unicode support**, with special keys and characters from other languages in Basic Multilingual Plane.
 * **New config parameters**: 
 	* &lt;ResizeOnButtonbar&gt;
 	* &lt;ButtonBarMaxHeight&gt;
 * **New Button XML tags**: 
 	* &lt;buttonTextColor&gt;
 	* &lt;buttonTextStyle&gt;
 	* &lt;buttonFontSize&gt;
 	* &lt;buttonColor&gt;
 	* &lt;buttonColorPressed&gt;
 	* &lt;buttonTransparency&gt;
 * **New Properties**:
 	* Show or Hide the layout using layout name
 	* buttonBarLayout enable/disable

<!-- 
Buttonbar Designer Utility:
A new desktop tool (now in BETA) provides graphical UI for creating and modifying buttonbar layouts in the device.
For more information, see the ButtonBar Usage Guide.
-->

* **Now supports [ViewPort](../configreference/#viewport) configuration parameters** for better screen fitting, including:
 * &lt;UseWideViewPort&gt;
 * &lt;ViewPortWidth&gt;
 * &lt;ViewPortInitialScale&gt;

* A new [&lt;LockOrientation&gt; configuration tag](../configreference/#lockorientation) automatically fits UI elements of EB apps. 

* **Enhancements for [SAP apps](../sapandroid)** include new configuration tags for automatically adjusting UI elements in SAP ITSmobile apps for better auto-fitting:
 * &lt;SapButtonHeight&gt;
 * &lt;SapButtonFontSize &gt;
 * &lt;MobileEditDisabledWidth&gt;
 * &lt;SapForceFitToScreen&gt;

* **[DOM injection](../dom)** has been simplified and made more powerful with:
 * Page-based Actions, which allow page contents to determine DOM injection.
 * Support for EB substitution variables to simplify file-path coding.

-----

## Version History

### Added in v1.8

#### Device Support 
EB 1.8 now supports the following mobile computing devices and operating systems: 

* **CC5000-10** Android Lollipop
* **MC33X** Android Nougat
* **MC55X** Windows Embedded Handheld 6.5
* **MC55X Healthcare** Windows Embedded Handheld 6.5
* **TC51** Android Nougat
* **TC51 Healthcare** Android Nougat
* **TC56** Android Nougat
* **TC70X** Android Nougat
* **TC75X** Android Nougat
* **VC80X** Android Nougat

#### Scanner Support
EB 1.8 is now supported for use with the following scanners when connected to the Zebra devices and operating systems listed:

* **DS3678 Ultra-Rugged Scanner** 
	* Running Android 7.0 (Nougat) on:
 		* MC33X
 		* TC51
 		* TC51-HC
 		* TC56
 		* TC70X
 		* TC75X
 		* VC80X

See all [supported Zebra devices](../about#mobile). 

-----

#### Updated Installation SKUs

**Enterprise Browser 1.8 (and higher) no longer downloads as a single SKU** for targeting devices running Android and/or Windows Mobile/CE. Separate downloads are now required for each target platform and each host platform. 

See the [EB download page](../../download) for more information. 

-----

#### Updated Guides

* **[SAP ITSmobile Usage Guide](../sap) -** Now offers a new UserAgent section and enhanced Function Key Mapping information. 
* **[Migration Overview](../migration) -** Lists all options for migrating to Enterprise Browser from other platforms or solutions. 
* **[Shortcut Utility Guide](../ShortcutCreator) -** Updated to reflect separate utilities for targeting Android and Windows Mobile/CE. 

-----

#### New Config.xml tags

* **[&lt;DisableHardwareAcceleration&gt;](../configreference#disablehardwareacceleration) -** Optionally disables hardware acceleration at WebView level within an Enterprise Browser app. 
* **[&lt;ClientCertificate&gt;](../configreference#clientcertificate) -** Optionally allows the alias name of a client certificate to be specified. **Applies only to devices running Android Lollipop and higher**. 
* **[&lt;DisableAllIME&gt;](../configreference#disableallime) -** Controls whether to use the input method editors (IMEs) in the Enterprise Browser app. **Applies to Android devices running Lollipop and higher.** 
* **[&lt;HideSystemBar&gt;](../configreference#hidesystembar) -** Controls whether the System bar (also known as the Navigation bar, which contains HOME, BACK and RECENT buttons) is displayed within the Enterprise Browser app. **Applies only to the Zebra MC18 devices running Android Lollipop and higher or other devices with MX 7.1/OSX 6.2 and higher**. 
* **Enterprise Browser version info is now captured in the** `Config.xml` **file**. On startup, EB apps compare and log information about possible mismatches between the `Config.xml` in use and the version of EB installed on the device. [More info](../configreference#eb_versiontag). 

#### Enhanced Config.xml tags

* **[&lt;setHomeKeyDisable&gt;](../configreference#sethomekeydisable) -** Now supported on all Android devices with MX 4.3/OSX 1.0 and higher; no longer limited to Lollipop.
* **[&lt;setStatusBarDisable&gt;](../configreference#setstatusbardisable) -** Now supported on all Android devices with MX 5.1/OSX 5.1 and higher; no longer limited to Lollipop.
* **[&lt;setBackKeyDisable&gt;](../configreference#setbackkeydisable) -** Now supported on all Android devices; no longer limited to Lollipop.
* **[&lt;setVolumeButtonDisable&gt;](../configreference#setvolumebuttondisable) -** Now supported on all Android devices; no longer limited to Lollipop.
* **[&lt;setRecentAppDisable&gt;](../configreference#setrecentappdisable) -** Now supported on all Android devices; no longer limited to Lollipop.
* **[&lt;DomStorageEnabled&gt;](../configreference#domstorageenabled) -** New "enabled" default setting helps preserve Enterprise Browser app data.

-----

#### API Enhancements

The following new methods, properties and/or callbacks were added to Android APIs:

* **[System API](../../api/system)** - Added `deviceHostName` property.
* **[SignalIndicators API](../../api/signalindicators)** - Added `deviceHostName` callback parameter to `wlanStatus` method. 
* **[Signal API](../../api/re2x/signal)** - Added `deviceHostName` parameter added to `signalEvent` method. 
* **[Barcode API](../../api/barcode)** - Added Multi-barcode UDI support, including the following new callback parameters and properties added to the `enable` method (applicable on Android with EMDK version 6.6 and higher):
	* **Callbacks**:
 		* isUDIData
 		* label
 		* UDITokenizedData
	* **Properties**:
		* scanMode
		* enableGS1
		* enableHIBCC
		* enableICCBBA
		* adaptiveScanning
		* aimingPattern
		* connectionIdleTime
		* codeIdType
		* disconnectOnExit
		* gs1LimitedSecurityLevel
		* hanXin
		* hanXinInverse
		* mailMark
		* pairAfterScannerReboot
		* upcEanCouponReport

**[ButtonBar API family](../../api/re2x/ButtonBar)** - Now contains 40 new ButtonBar APIs.

**[EzNFC API](../../api/EzNFC)**
* The following new callback parameters have been added to the `enableRead` method:
 * Callback Parameter - TagManufacturerName
 * Callback Parameter - TagTechnologies
 * Callback Parameter - ATQA
 * Callback Parameter - SAK
 * Callback Parameter - ATS
* The default value of the `proximitySensorType` property has been changed from 22 to 65538 for Android Lollipop and higher

-----

#### ButtonBar Enhancements
The following enhancements to existing custom on-screen buttons and keyboard features for Android have been added:

* Custom On-screen Buttons/Keyboard Usage Guide
* ButtonBar XML Guide - New ButtonBar and Button-Specific parameters have been introduced.
* ButtonBar parameters
 * barTextColor
 * barTextStyle
 * barGapBtwnButtons
* Button-specific parameters
 * buttonSecondaryText
 * buttonActionClick
 * buttonActionLongClick
 * buttonActionDown
 * buttonActionUp
 * buttonClickable
 * buttonPreview
 * buttonHapticfeedback
 * buttonHapticfeedbackduration
 * delay

**[ButtonBar API family](../../api/re2x/ButtonBar)** - Now contains 40 new ButtonBar APIs.

-----

### Added in v1.7

#### ButtonBar API
A new Android-only ButtonBar API permits a series of custom buttons or keys to be displayed on the screen and configured to launch an app, execute a JavaScript snippet or perform other operations available to the device. 
![img](EB_ButtonBar_API.png)
<br>

**Related links**:

* [Custom Button guide](../customize)
* [Button XML file parameter](../configreference/#buttonxmlfile) in `Config.xml` reference
* [ButtonBar API](../../api/re2x/ButtonBar)
* [Other new and updated APIs](#neworupdatedapis)

-----

#### Device Support

EB 1.7 now supports the following **new devices** (shown in **bold**) and/or existing devices running Android 5.0 Lollipop and Android 6.0 Marshmallow: 

* **TC51HC (HealthCare) Android Marshmallow**
* **TC56 Android Marshmallow**
* **DS3678 Ultra Rugged Scanner** (when used with Android TC51/TC51HC Marshmallow)
* **CBL-NGWT-HDVBAP-01 External Vibrator** (when used with WT6000 Lollipop)
* ET50 Android Marshmallow
* ET55 Android Marshmallow
* MC32 Android Lollipop
* TC75X Android Marshmallow
* RS5000 Ring Scanner (when used with WT6000 Lollipop)
* RS6000 Ring Scanner when used with: 
 * TC51 Marshmallow
 * TC51HC Marshmallow
 * TC8000 Lollipop

[See all supported devices](#mobile)

-----

#### WebView Control
Enterprise Browser 1.7 now permits many features of the Android WebView to be controlled through the `Config.xml` file, helping to simplify access to device- and web-related security capabilities and user-experience features. EB 1.7 also increases the methods and properties provided in the [WebView API](../../api/webview). 

> **These tags apply only to devices running KitKat and higher**. 

#### New WebView Config tags:

* **[&lt;LayoutLeft&gt;](../configreference#webviewlayout) -** Optionally sets the horizontal start position of an EB app
* **[&lt;LayoutTop&gt;](../configreference#webviewlayout) -** Optionally sets the vertical start position of an EB app
* **[&lt;LayoutWidth&gt;](../configreference#webviewlayout) -** Optionally sets the width (not to exceed device screen width) 
* **[&lt;LayoutHeight&gt;](../configreference#webviewlayout) -** Optionally sets the height (not to exceed device screen height)

#### Other new UI-related tags

* **[&lt;customxmlfile&gt;](../configreference#customxmlfile) -** specifies the location of the `CustomScript.xml`, an optional file containing custom JavaScript snippets to be called by custom on-screen buttons or other app functions.  

* **[&lt;JSLibraries&gt;](../configreference#jslibraries) -** can be used to inject JavaScript API libraries (`ebapi-modules.js` and `elements.js`) into the DOM of every HTML page when it's not otherwise possible or convenient to edit the source. 

-----

#### New Substitution Variables
The following new substitution variables are now supported by Enterprise Browser for use in Config.xml parameters: 

* **%PRIMARYDIR% -** resolves to the root directory of internal device storage (i.e. `/storage/sdcard0`)
* **%SECONDARYDIR% -** resolves to the root directory of external storage (i.e. `/storage/sdcard1`)
* **%PERSISTCONFDIR% -** resolves to a directory that persists after an Enterprise Reset of the device (i.e. `/enterprise/device/enterprisebrowser`)

For details, see the [Config.xml Reference](../configreference/#substitutionvariables). 

-----

#### Web Security Features
* **[&lt;ApplicationCacheEnabled&gt;](../configreference#applicationcacheenabled) -** allows an HTML5 app to be stored locally for off-line operation, improved speed and reduced server load.
* **[&lt;ApplicationCacheOnExit&gt;](../configreference#applicationcacheonexitdeprecated) -** controls whether to erase a cached HTML5 app upon exiting it. 
* **[&lt;SetCacheMode&gt;](../configreference#setcachemode) -** controls rules for loading pages from cache vs. loading from the server.
* **[&lt;DeleteCacheOnExit&gt;](../configreference#deletecacheonexit) -** controls whether to erase contents of the browser cache when exiting an app.
* **[&lt;DomStorageEnabled&gt;](../configreference#domstorageenabled) -** controls whether application data is stored locally using HTML5 Web Storage.
* **[&lt;DatabaseEnabled&gt;](../configreference#databaseenabled) -** controls whether to enable the WebSQL database.
* **[&lt;GeoLocationEnabled&gt;](../configreference#geolocationenabled) -** controls whether location data from the device can be consumed by the EB app.
* **[&lt;JavascriptEnabled&gt;](../configreference#javascriptenabled) -** permits JavaScript code execution within an EB app to be toggled on and off.
* **[&lt;SaveFormData&gt;](../configreference#saveformdata) -** determines whether an app will retain data entered by a user into forms, checkboxes and other input elements.
* **[&lt;BlockNetworkImage&gt;](../configreference#blocknetworkimage) -** prevents the app from loading images over a network while allowing non-image resources to load.
* **[&lt;BlockNetworkLoads&gt;](../configreference#blocknetworkloads) -** prevents the app from loading all network resources, including images.
* **[&lt;ClearWebData&gt;](../configreference#clearwebdata) -** determines whether WebView data stored by the EB app will be retained when app returns to the foreground after the device HOME key is pressed.
* **[&lt;NavigateToHomePage&gt;](../configreference#navigatetohomepage) -** causes an EB app to display its Start Page when the app returns to the foreground.
* **[&lt;MixedContentMode&gt;](../configreference#mixedcontentmode) -** security feature that can prevent loading of content from insecure sites.
* **[&lt;WebFilteringEnabled&gt;](../configreference#webfilteringenabled) -** controls whether web sites will be filtered by the addresses specified in the related tags (below). 
* **[&lt;WhiteListingUrls&gt;](../configreference#whitelistingurls) -** explicitly allows one or more websites to be visited by an app.
* **[&lt;BlackListingUrls&gt;](../configreference#blacklistingurls) -** explicitly blocks one or more websites. 
* **[&lt;DeleteCookiesOnExit&gt;](../configreference#deletecookiesonexit) -** automatically erases cookies stored by Enterprise Browser when exiting. 

##### Additional Web-related Features
* **[&lt;BackgroundColor&gt;](../configreference#backgroundcolor) -** controls the color of the screen in areas apart from those of the app (if not already set by HTML).
* **[&lt;WebPageCapture&gt;](../configreference#webpagecapture) -** diagnostic tool captures screenshots and source files for all app screens. 

##### Device Security Features (for kiosk mode--Lollipop and higher only)
* **[&lt;setHomeKeyDisable&gt;](../configreference#sethomekeydisable) -** prevents the HOME key (or capacitive button) on the device from exiting the current app. 
* **[&lt;setStatusBarDisable&gt;](../configreference#setstatusbardisable) -** prevents the status bar from being displayed (either automatically or by dragging down from the top of the screen). 
* **[&lt;setBackKeyDisable&gt;](../configreference#setbackkeydisable) -** disables the BACK key (or capacitive button), which could otherwise exit the current app and invoke the previously active app or Launcher screen. 
* **[&lt;setVolumeButtonDisable&gt;](../configreference#setvolumebuttondisable) -** prevents the user from controlling the speaker volume using device hardware keys. 
* **[&lt;setRecentAppDisable&gt;](../configreference#setrecentappdisable) -** prevents display of the Recent Apps list, which could otherwise allow the user exit the current app by selecting one from the "recents" list. 

----

#### New or Updated APIs

* An **updated [WebView API](../../api/webview)** provides programmatic control over the Android WebView using new **clearApplicationCache, clearCache, clearHistory, clearCookies, resizeWebviewLayout and resetWebviewLayout** methods, and **blockNetworkImage, blockNetworkLoads and contentHeight** properties.  
* An **updated [Device API](../../api/device) -** adds a **reboot** method for Android. 
* An **updated [SIP API](../../api/sip) -** adds **disableAIIIME** and **resetToDefault** methods for Android. 
* An **updated [RemoteNotification API](../../api/remotenotification) -** introduces a **cancelNotification** method and **isLEDSupported, isBeepSupported and isVibrateSupported** properties for Android. 
* An **updated [Barcode API](../../api/barcode) -** gives Android devices new **resetToDefault** and **isParamSupported** methods and properties for **aimType, timesAimDuration, sameSymbolTimeout, differentSymbolTimeout, picklistEx, decodeLEDtime, decodeLEDFeedback, decodeLEDFeedbackMode, OneDQuietZoneLevel** and **PoorQualityDecideZoneLevel**.

-----

#### New or Updated Guides

* A **new [Web Page Capture guide](../capture)** covers diagnostic features introduced in EB 1.7 that can capture screenshots and source code files for all app pages. 

* The **new [Customization guide](../customize)** shows how to customize the on-screen buttons on a device and how to include custom JavaScript snippets for use by the buttons or apps.

* An **updated [Security Overview guide](../security)** includes the new security-related `Config.xml`-file tags.  

-----

### Added in v1.6

#### Android Jelly Bean - End of Support
Enterprise Browser 1.6 and higher will no longer support devices running Android Jelly Bean. For Jelly Bean support, please use [Enterprise Browser 1.5](../../../../enterprise-browser/1-5/guide/about) or lower.


#### Device Support
EB 1.6 now supports the following new devices and/or existing devices running Android 5.0 Lollipop and Android 6.0 Marshmallow: 

* **ET50** with Android Lollipop
* **ET55** with Android Lollipop
* **MC18** with Android Lollipop
* **MC40** with Android Lollipop
* **TC51** with Android Marshmallow
* **TC75** with Android Marshmallow
* **TC8000** with Android Lollipop

[See all supported devices](#mobile)

This release also adds a range of additional new features for all supported Android devices.

#### New or Updated APIs

* **New [Enterprise Keyboard API](../../api/ekb) -** provides programmatic access to Zebra's software keyboard and some of its settings (**applies only to Android devices with EKB 1.2 and higher**). 

* **Updated [Barcode API](../../api/barcode) -** now includes **decodeSound**, **decodeVolume**, **decodeFrequency** and **decodeDuration** properties for Android (formerly available only for Windows Mobile/CE). 

* **Updated [Scanner API](../../api/re2x/scanner) -** adds KitKat support for the **connectionListenerEvent**. 

* **Updated [Sensor API](../../api/sensor) -** implements a **proximitySensorType** property to **set** the value of proximity sensor type or **get** its current value.

##### Ring Scanner Support

* **[RS6000 Ring Scanner](#wearable) -** is now supported on TC75x devices running Android Marshmallow.

#### Enterprise Browser Kiosk Mode

* **New [Enterprise Browser Lockdown Option](../ehs) -** integrates with Zebra [Enterprise Home Screen](../../../../ehs) (EHS) to provide an easily configurable lock-down feature for any Enterprise Browser app, preventing access to device settings and other apps installed on the device.

#### New Tags for Android
The following Enterprise Browser configuration tags are now supported on Android (formerly Windows-only).

* **[&lt;ScanDecodeWav&gt;](../configreference#scandecodewav) -** allows specification of a .wav or .ogg file to be played when a scanned barcode is successfully decoded.

* **[&lt;DecodeVolume&gt;](../configreference#decodevolume) -** controls the volume of the device beeper when a barcode is scanned.

* **[&lt;DecodeFrequency&gt;](../configreference#decodefrequency) -** controls the frequency of the device beeper when a barcode is successfully decoded.

* **[&lt;DecodeDuration&gt;](../configreference#decodeduration) -** controls the duration (in milliseconds) of the device beeper sound when a barcode is scanned.

#### New or Updated Guides

* **New [Security Guide](../security) -** explains Enterprise Browser's numerous security features and provides links to their individual guides or guide sections.

* **Updated [DataWedge Usage Guide](../datawedge) -** adds detailed steps for enabling and disabling DataWedge based on the version installed on the device.

##### Android Jelly Bean Deprecated
Enterprise Browser 1.6 and higher will no longer support devices running Android Jelly Bean. For Jelly Bean support, please use [Enterprise Browser 1.5](../../../../enterprise-browser/1-5/guide/about) or lower versions for Android Jelly Bean device support.

-----

#### Key EB Features

* **A development toolkit for mobile cross-platform enterprise apps**. Supports all enterprise devices: mobile computers, tablets, kiosks, wearables and vehicle-mounted devices. Supports multiple operating systems: Android, Windows Embedded Handheld and Windows Mobile/CE.
* **Build apps using HTML5, CSS and JavaScript**. Use web skills to create great-looking applications. Based on open source and standard technologies, not proprietary toolkits. Access to the world's largest developer community.
* **Common APIs across all enterprise devices**. Single code base; does not require different APIs for different OSes to create a true write-once, run-anywhere apps with a consistent UI. Easily access native device hardware with JavaScript APIs
* **Backward-compatible with PocketBrowser and RhoElements**. Compatible with legacy PocketBrowser APIs, enabling a clear path forward for legacy apps. EMML (Meta Tag) support extended to Android. Compatible with legacy RhoElements JavaScript APIs, enabling a clear path forward for "RhoElements Shared Runtime" users. 
* **Unparalleled access to device capabilities**. Access all device features, including bar code scanning, signature capture, printing, RFID and more. 
* **Thin client architecture**. Simplifies device deployment and management by enabling instant application updates on devices; ensures version consistency. 
* **Offers operating system "lock out"**. Hides access to distractions, such as web-browsing and games; simplifies user interface and eliminates risk of unauthorized changes to device settings. Password-protect settings screen and prevent any app from exiting. 
* **Full-screen display**. Maximizes available display space for a richer, more effective user interface; hides command bar and Start menu. 
* **Extensive logging capability**. Flexibility to easily capture logging information, reducing management and support effort. 

#### Key EB Benefits

* **Reduces application and development costs** and eliminates the need to develop, manage and maintain multiple versions of an application to support different types of devices and operating systems; provides highly cost effective support for a mixed-OS environment.
* **Protects the business from OS market uncertainty**. Devices and platforms can continue to churn without impacting the business. These OS-agnostic applications work on Symbol, Motorola and Zebra Technologies platforms of yesterday (MPA2), today and tomorrow.
* **Reduces end-user training costs**. Enterprise Browser app development is incredibly intuitive for developers skilled in HTML5, CSS and JavaScript.
* **Leverage every feature on every device and attached peripheral**. Easily design rich applications that take advantage of all the available features on a device and its attached peripherals, including barcode scanners, RFID tag readers and payment processing devices.
* **Create consumer-style apps for business** Without OS constraints to impact app design, a graphical user interface can be created that is every bit as engaging, intuitive and interactive as today's consumer applications. Provides complete control of application behavior on different devices. With automatic screen resizing, apps can look, feel and behave identically on all devices, or display new features or expand the presentation of existing features to take advantage of larger screens.
* **Faster time to market**. A simplified application development approach allows for shorter time to market than ever before.

-----

## Supported Devices

###Mobile
<table cellspacing="0" cellpadding="0" class="table table-striped">
 <tbody><tr>
  <th width="15%" class="clsSyntaxHeadings"></th>
  <th width="10%" class="clsSyntaxHeadings">Device family</th>
  <th width="25%" class="clsSyntaxHeadings">Device</th>
  <th width="25%" class="clsSyntaxHeadings">Operating System(s)</th>
  <th width="25%" class="clsSyntaxHeadings">Supported WebView(s)</th>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="es400Pic" src="../../images/es400.jpeg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>ES400</b></td>
  <td class="clsSyntaxCells clsOddRow">ES400</td>
  <td class="clsSyntaxCells clsOddRow">Windows Embedded Handheld 6.5</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer, Webkit</td>
 </tr>
  <tr>
  <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="et5xPic" src="../../images/et5x.jpg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>ET5X</b></td>
  <td class="clsSyntaxCells clsOddRow">ET50, ET55</td>
  <td class="clsSyntaxCells clsOddRow">Android 5.0 (Lollipop)<br>Android 6.0 (Marshmallow)</td>
  <td class="clsSyntaxCells clsOddRow">Android Stock Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="mc18Pic" src="../../images/mc18.jpeg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>MC18</b></td>
  <td class="clsSyntaxCells clsOddRow">MC18</td>
  <td class="clsSyntaxCells clsOddRow">Windows CE 7.0<br>Android 4.4 (KitKat)<br>Android 5.0 (Lollipop)</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer, Webkit, Android Stock Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="mc3000Pic" src="../../images/mc3090.jpeg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>MC3090</b></td>
  <td class="clsSyntaxCells clsOddRow">MC3000, MC3090</td>
  <td class="clsSyntaxCells clsOddRow">Windows CE 5.0<br>Windows Mobile 6.1</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="mc3100Pic" src="../../images/mc3100.jpeg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>MC3100</b></td>
  <td class="clsSyntaxCells clsOddRow">MC3100R, MC3100S, MC3190G, MC3190R, MC3190S, MC3190Z</td>
  <td class="clsSyntaxCells clsOddRow">Windows CE 6.0 Professional<br>Windows Embedded Handheld 6.5</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer, Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="mc32Pic" src="../../images/mc3200.jpeg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>MC32N0</b></td>
  <td class="clsSyntaxCells clsOddRow">MC32N0</td>
  <td class="clsSyntaxCells clsOddRow">Android 5.0 (Lollipop)<br>Windows CE 7.0</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer, Webkit, Android Stock Webkit</td>
 </tr>
<tr>
  <td class="clsSyntaxCells clsOddRow"><img id="mc33Pic" src="../../images/mc33x.png" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>MC33X</b></td>
  <td class="clsSyntaxCells clsOddRow">MC3300</td>
  <td class="clsSyntaxCells clsOddRow">Android 7.0 (Nougat)<br>Android 8.0 (Oreo)</td>
  <td class="clsSyntaxCells clsOddRow">Android Stock Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="mc40Pic" src="../../images/mc40.jpeg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>MC40</b></td>
  <td class="clsSyntaxCells clsOddRow"><nobr>MC40</nobr></td>
  <td class="clsSyntaxCells clsOddRow">Android 4.4 (KitKat)<br>Android 5.0 (Lollipop)</td>
  <td class="clsSyntaxCells clsOddRow">Android Stock Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="mc45Pic" src="../../images/mc45.jpeg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>MC45</b></td>
  <td class="clsSyntaxCells clsOddRow">MC45</td>
  <td class="clsSyntaxCells clsOddRow">Windows Embedded Handheld 6.5</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer, Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="mc55Pic" src="../../images/mc55.jpeg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>MC55</b></td>
  <td class="clsSyntaxCells clsOddRow">MC5574, MC5590</td>
  <td class="clsSyntaxCells clsOddRow">Windows Embedded Handheld 6.5</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer, Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="mc55a0Pic" src="../../images/mc55.jpeg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>MC55A0</b></td>
  <td class="clsSyntaxCells clsOddRow">MC55A0</td>
  <td class="clsSyntaxCells clsOddRow">Windows Embedded Handheld 6.5</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer, Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="mc55n0Pic" src="../../images/mc55.jpeg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>MC55N0</b></td>
  <td class="clsSyntaxCells clsOddRow">MC55N0</td>
  <td class="clsSyntaxCells clsOddRow">Windows Embedded Handheld 6.5</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer, Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="mc55xPic" src="../../images/mc55x.png" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>MC55X</b></td>
  <td class="clsSyntaxCells clsOddRow">MC55-HC Healthcare</td>
  <td class="clsSyntaxCells clsOddRow">Windows Embedded Handheld 6.5</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer, Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="mc65Pic" src="../../images/mc65.jpeg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>MC65</b></td>
  <td class="clsSyntaxCells clsOddRow">MC659B</td>
  <td class="clsSyntaxCells clsOddRow">Windows Embedded Handheld 6.5</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer, Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="mc67Pic" src="../../images/mc67.jpeg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>MC67</b></td>
  <td class="clsSyntaxCells clsOddRow">MC67</td>
  <td class="clsSyntaxCells clsOddRow">Windows Embedded Handheld 6.5<br>Android 4.4 (KitKat)</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer, Webkit, Android Stock Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="mc70Pic" src="../../images/mc70.jpeg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>MC70</b></td>
  <td class="clsSyntaxCells clsOddRow">MC7004, MC7090, MC7094, MC7095</td>
  <td class="clsSyntaxCells clsOddRow">Windows Mobile 6.1</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="mc75Pic" src="../../images/mc75.jpeg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>MC75</b></td>
  <td class="clsSyntaxCells clsOddRow">MC7506, MC7508, MC7596, MC7598</td>
  <td class="clsSyntaxCells clsOddRow">Windows Embedded Handheld 6.5</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="mc75aPic" src="../../images/mc75a.jpeg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>MC75a</b></td>
  <td class="clsSyntaxCells clsOddRow">MC75A0, MC75A6, MC75A8</td>
  <td class="clsSyntaxCells clsOddRow">Windows Embedded Handheld 6.5</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer, Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="mc9000Pic" src="../../images/mc9000.jpeg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>MC9000</b></td>
  <td class="clsSyntaxCells clsOddRow">MC9090, MC9097, MC9094</td>
  <td class="clsSyntaxCells clsOddRow">Windows CE 5.0<br>Windows Mobile 6.1</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="mc9190Pic" src="../../images/mc9100.jpeg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>MC9100</b></td>
  <td class="clsSyntaxCells clsOddRow">MC9190-G, MC9190Z</td>
  <td class="clsSyntaxCells clsOddRow">Windows CE 6.0 Professional<br>Windows Embedded Handheld 6.5</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer, Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="mc92Pic" src="../../images/mc9100.jpeg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>MC9200</b></td>
  <td class="clsSyntaxCells clsOddRow">MC92N0</td>
  <td class="clsSyntaxCells clsOddRow">Windows CE 7.0<br>Windows Embedded Handheld 6.5<br>Android 4.4 KitKat</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer, Webkit, Android Stock Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="mc95Pic" src="../../images/mc9500.gif" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>MC9500</b></td>
  <td class="clsSyntaxCells clsOddRow">MC9590, MC9596, MC9598, MC959B (WM6.1)</td>
  <td class="clsSyntaxCells clsOddRow">Windows Mobile 6.1<br>Windows Embedded Handheld 6.5</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer, Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="xt15pic" src="../../images/xt15.png" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>Omnii XT15</b></td>
  <td class="clsSyntaxCells clsOddRow">XT15</td>
  <td class="clsSyntaxCells clsOddRow">Windows CE 6.0 (Omnii CE-12.2.44149 BSP or higher)<br>Windows Embedded Handheld 6.5 (Omnii CE-12.2.44149 BSP or higher)</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer, Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="ps20J.jpg" src="../../images/ps20J.jpg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>PS20</b></td>
  <td class="clsSyntaxCells clsOddRow">PS20J</td>
  <td class="clsSyntaxCells clsOddRow">Android 8.0 (Oreo)</td>
  <td class="clsSyntaxCells clsOddRow">Android Stock Webkit</td>
 </tr>
<tr>
  <td class="clsSyntaxCells clsOddRow"><img id="tc2x" src="../../images/tc2x.png" height="25"></img></td>
  <td class="clsSyntaxCells clsOddRow"><b>TC2X</b></td>
  <td class="clsSyntaxCells clsOddRow">TC20, TC25</td>
  <td class="clsSyntaxCells clsOddRow">Android 7.0 (Nougat)<br>Android 8.x (Oreo)</td>
  <td class="clsSyntaxCells clsOddRow">Android Stock Webkit</td>
 </tr>
<tr>
  <td class="clsSyntaxCells clsOddRow"><img id="tc51IronmanPic" src="../../images/tc51Ironman.jpg" height="25"></img></td>
  <td class="clsSyntaxCells clsOddRow"><b>TC5X</b></td>
  <td class="clsSyntaxCells clsOddRow">TC51, TC51HC, TC52, TC56, TC57, TC57HC</td>
  <td class="clsSyntaxCells clsOddRow">Android 6.0 (Marshmallow)<br>Android 7.0 (Nougat)<br>Android 8.x (Oreo)</td>
  <td class="clsSyntaxCells clsOddRow">Android Stock Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="tc55Pic" src="../../images/tc55.jpeg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>TC55</b></td>
  <td class="clsSyntaxCells clsOddRow">TC55</td>
  <td class="clsSyntaxCells clsOddRow">Android 4.4 (KitKat)</td>
  <td class="clsSyntaxCells clsOddRow">Android Stock Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="tc70Pic" src="../../images/tc70.jpeg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>TC70</b></td>
  <td class="clsSyntaxCells clsOddRow">TC70 GA1, TC70 GA2</td>
  <td class="clsSyntaxCells clsOddRow">Android 4.4 (KitKat)<br>Android 5.0 (Lollipop)</td>
  <td class="clsSyntaxCells clsOddRow">Android Stock Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="tc70xPic" src="../../images/tc75Falcon.jpg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>TC70x</b></td>
  <td class="clsSyntaxCells clsOddRow">TC70x</td>
  <td class="clsSyntaxCells clsOddRow">Android 6.0 (Marshamallow)<br>Android 7.0 (Nougat)<br>Android 8.x (Oreo)</td>
  <td class="clsSyntaxCells clsOddRow">Android Stock Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="tc75Pic" src="../../images/tc75.png" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>TC75</b></td>
  <td class="clsSyntaxCells clsOddRow"><nobr>TC75, TC75x</nobr></td>
  <td class="clsSyntaxCells clsOddRow">Android 4.4 (KitKat)<br>Android 5.0 (Lollipop)</td>
  <td class="clsSyntaxCells clsOddRow">Android Stock Webkit</td>
 </tr>
 <tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="tc75FalconPic" src="../../images/tc75Falcon.jpg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>TC75x</b></td>
  <td class="clsSyntaxCells clsOddRow">TC75x</td>
  <td class="clsSyntaxCells clsOddRow">Android 6.0 (Marshmallow)<br>Android 7.0 (Nougat)<br>Android 8.x (Oreo)</td>
  <td class="clsSyntaxCells clsOddRow">Android Stock Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="tc77" src="../../images/TC77.png" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>TC77</b></td>
  <td class="clsSyntaxCells clsOddRow">TC77</td>
  <td class="clsSyntaxCells clsOddRow">Android 7.0 (Nougat)<br>Android 8.x (Oreo)</td>
  <td class="clsSyntaxCells clsOddRow">Android Stock Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="tc8000Pic" src="../../images/tc8000.png" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>TC8000</b></td>
  <td class="clsSyntaxCells clsOddRow"><nobr>TC8000</nobr></td>
  <td class="clsSyntaxCells clsOddRow">Android 4.4 (KitKat)<br>Android 5.0 (Lollipop)</td>
  <td class="clsSyntaxCells clsOddRow">Android Stock Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="wap4Pic" src="../../images/wap4.png" ></td>
  <td class="clsSyntaxCells clsOddRow"><b>Workabout Pro 4</b></td>
  <td class="clsSyntaxCells clsOddRow"><nobr>7528</nobr></td>
  <td class="clsSyntaxCells clsOddRow">Windows CE 6.0 (WAP4 CE-2.4 BSP or higher)<br>Windows Embedded Handheld 6.5 (WAP4 WEH-3.0.1 BSP or higher)</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer, Webkit</td>
 </tr>
</tbody>
</table>

###Vehicle
<table cellspacing="0" cellpadding="0" class="table table-striped">
 <tbody><tr>
  <th width="15%" class="clsSyntaxHeadings"></th>
  <th width="10%" class="clsSyntaxHeadings">Device family</th>
  <th width="25%" class="clsSyntaxHeadings">Device</th>
  <th width="25%" class="clsSyntaxHeadings">Operating System(s)</th>
  <th width="25%" class="clsSyntaxHeadings">Supported WebView(s)</th>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="vh10pic" src="../../images/vh10.png" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>VH10</b></td>
  <td class="clsSyntaxCells clsOddRow">VH10</td>
  <td class="clsSyntaxCells clsOddRow">Windows CE 6.0 (Omnii CE-12.2.44149 BSP or higher)</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer, Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="vc5090Pic" src="../../images/vc5090.jpeg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>VC5090</b></td>
  <td class="clsSyntaxCells clsOddRow">VC5090</td>
  <td class="clsSyntaxCells clsOddRow">Windows CE 5.0</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="vc6090Pic" src="../../images/vc6000.jpeg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>VC6000</b></td>
  <td class="clsSyntaxCells clsOddRow">VC6000, VC6096</td>
  <td class="clsSyntaxCells clsOddRow">Windows Embedded Handheld 6.5</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="vc70Pic" src="../../images/vc70N0.png" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>VC70</b></td>
  <td class="clsSyntaxCells clsOddRow">VC70</td>
  <td class="clsSyntaxCells clsOddRow">Windows CE 7.0</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer, Webkit</td>
 </tr>
<tr>
  <td class="clsSyntaxCells clsOddRow"><img id="vc80xPic" src="../../images/vc80x.jpg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>VC80X</b></td>
  <td class="clsSyntaxCells clsOddRow">VC80C</td>
  <td class="clsSyntaxCells clsOddRow">Android 7.0 (Nougat)<br>Android 8.x (Oreo)</td>
  <td class="clsSyntaxCells clsOddRow">Stock Android Webkit</td>
 </tr>
</tbody>
</table>

###Micro-Kiosk
<table cellspacing="0" cellpadding="0" class="table table-striped">
 <tbody>
 <tr>
  <th width="15%" class="clsSyntaxHeadings"></th>
  <th width="10%" class="clsSyntaxHeadings">Device family</th>
  <th width="25%" class="clsSyntaxHeadings">Device</th>
  <th width="25%" class="clsSyntaxHeadings">Operating System(s)</th>
  <th width="25%" class="clsSyntaxHeadings">Supported WebView(s)</th>
 </tr>
  <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="cc5000" src="../../images/cc5000.png" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>CC5000-10</b></td>
  <td class="clsSyntaxCells clsOddRow">Customer Concierge</td>
  <td class="clsSyntaxCells clsOddRow">Android 5.0 (Lollipop)</td>
  <td class="clsSyntaxCells clsOddRow">Android Stock Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="mk3000Pic" src="../../images/mk3000.jpeg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>MK3000</b></td>
  <td class="clsSyntaxCells clsOddRow">MK3000, MK3090</td>
  <td class="clsSyntaxCells clsOddRow">Windows CE 5.0</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="mk3100Pic" src="../../images/mk3100.jpeg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>MK3100</b></td>
  <td class="clsSyntaxCells clsOddRow">MK3100, MK3190</td>
  <td class="clsSyntaxCells clsOddRow">Windows CE 7.0</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer, Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="mk4000Pic" src="../../images/mk4000.png" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>MK4000</b></td>
  <td class="clsSyntaxCells clsOddRow">MK4000, MK4090</td>
  <td class="clsSyntaxCells clsOddRow">Windows CE 5.0</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer</td>
 </tr>
</tbody>
</table>

###Wearable
<table cellspacing="0" cellpadding="0" class="table table-striped">
 <tbody>
 <tr>
  <th width="15%" class="clsSyntaxHeadings"></th>
  <th width="10%" class="clsSyntaxHeadings">Device family</th>
  <th width="25%" class="clsSyntaxHeadings">Device</th>
  <th width="25%" class="clsSyntaxHeadings">Operating System(s)</th>
  <th width="25%" class="clsSyntaxHeadings">Supported WebView(s)</th>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="wt4000Pic" src="../../images/wt4090.png" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>WT4090</b></td>
  <td class="clsSyntaxCells clsOddRow">WT4070, WT4090</td>
  <td class="clsSyntaxCells clsOddRow">Windows CE 5.0</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="wt41n0Pic" src="../../images/wt41N0.png" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>WT41N0</b></td>
  <td class="clsSyntaxCells clsOddRow">WT41N0</td>
  <td class="clsSyntaxCells clsOddRow">Windows CE 7.0</td>
  <td class="clsSyntaxCells clsOddRow">Internet Explorer, Webkit</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="wt6000Pic" src="../../images/wt6000.png" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>WT6000</b></td>
  <td class="clsSyntaxCells clsOddRow"><nobr>WT6000</nobr></td>
  <td class="clsSyntaxCells clsOddRow">Android 5.0 (Lollipop)<br>Android 7.x (Nougat)</td>
  <td class="clsSyntaxCells clsOddRow">Android Stock Webkit</td>
 </tr>
 </tbody>
 </table>
 
<h3>Ring Scanners</h3>
<table cellspacing="0" cellpadding="0" class="table table-striped">
 <tbody>
 <tr>
  <th width="15%" class="clsSyntaxHeadings"></th>
  <th width="10%" class="clsSyntaxHeadings">Device family</th>
  <th width="25%" class="clsSyntaxHeadings">Device</th>
  <th width="25%" class="clsSyntaxHeadings">Device type</th>
  <th width="25%" class="clsSyntaxHeadings">Supported for use with:</th>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="rs5000Pic" src="../../images/rs5000.jpg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>RS5000</b></td>
  <td class="clsSyntaxCells clsOddRow">Bluetooth Ring Scanner</td>
  <td class="clsSyntaxCells clsOddRow">Accessory</td>
  <td class="clsSyntaxCells clsOddRow">WT6000 Android 5.0 (Lollipop)</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="rs6000Pic" src="../../images/rs6000.png" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>RS6000</b></td>
  <td class="clsSyntaxCells clsOddRow">Bluetooth Ring Scanner</td>
  <td class="clsSyntaxCells clsOddRow">Accessory</td>
  <td class="clsSyntaxCells clsOddRow">TC75, TC8000 Android 5.0 (Lollipop)<br>TC51, TC56, TC70X Android 6.0 (Marshmallow)<br>MC33X, TC51, TC51-HC, TC56, TC70X, TC75X, VC80X Android 7.0 (Nougat)</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="rs4000Pic" src="../../images/rs4000.png" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>RS4000</b></td>
  <td class="clsSyntaxCells clsOddRow">1D Corded Ring Scanner</td>
  <td class="clsSyntaxCells clsOddRow">Accessory</td>
  <td class="clsSyntaxCells clsOddRow">WT6000 Android 5.0 (Lollipop)</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="rs507Pic" src="../../images/rs507.png" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>RS507</b></td>
  <td class="clsSyntaxCells clsOddRow">Cordless Ring Imager</td>
  <td class="clsSyntaxCells clsOddRow">Accessory</td>
  <td class="clsSyntaxCells clsOddRow">TC70 Android 4.4 (KitKat)<br>TC75, TC8000 Android 5.0 (Lollipop)<br>TC51, TC51-HC, TC56, TC70X Android 6.0 (Marshmallow)<br>MC33X, TC51, TC51-HC, TC56, TC70X, TC75X, VC80X Android 7.0 (Nougat)<br>See RS507 Support Notes below.</td>
 </tr>
</tbody>
</table>

**RS507 Support Notes**: 

* Works with the Enterprise Browser Barcode API on all supported devices running KitKat or higher (relies on the EMDK service, which is standard on such devices).

* Works with RhoElements 2.x and PocketBrowser 2.x/3.x APIs on all supported devices running KitKat or higher **except the TC70-GA1**. 

<h3>Handheld Scanners</h3>
<table cellspacing="0" cellpadding="0" class="table table-striped">
 <tbody>
 <tr>
  <th width="15%" class="clsSyntaxHeadings"></th>
  <th width="10%" class="clsSyntaxHeadings">Device family</th>
  <th width="25%" class="clsSyntaxHeadings">Device</th>
  <th width="25%" class="clsSyntaxHeadings">Device type</th>
  <th width="25%" class="clsSyntaxHeadings">Supported for use with:</th>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="ds3678" src="../../images/ds3678.jpg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>DS3678</b></td>
  <td class="clsSyntaxCells clsOddRow">Ultra-Rugged Scanner</td>
  <td class="clsSyntaxCells clsOddRow">Accessory</td>
  <td class="clsSyntaxCells clsOddRow">TC51, TC51-HC, TC56 and TC70X devices running Android 6.0 (Marshmallow)<br>
MC33X, TC51, TC51-HC, TC56, TC70X, TC75X and VC80X devices running Android 7.0 (Nougat) and 8.0 (Oreo)</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="li3678" src="../../images/li3678_2.jpg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>LI3678</b></td>
  <td class="clsSyntaxCells clsOddRow">Ultra-Rugged Scanner</td>
  <td class="clsSyntaxCells clsOddRow">Accessory</td>
  <td class="clsSyntaxCells clsOddRow">MC33X, TC51, TC51-HC, TC56, TC70X, TC75X and VC80X devices running Android 7.0 (Nougat)</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="ds2278" src="../../images/ds2278_2.png" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>DS2278</b></td>
  <td class="clsSyntaxCells clsOddRow">Handheld Scanner</td>
  <td class="clsSyntaxCells clsOddRow">Accessory</td>
  <td class="clsSyntaxCells clsOddRow">MC33X, TC51, TC51-HC, TC56, TC70X, TC75X and VC80X devices running Android 7.0 (Nougat)</td>
 </tr>
</tbody>
</table>

<h3>Misc. Accessories</h3>
<table cellspacing="0" cellpadding="0" class="table table-striped">
 <tbody>
 <tr>
  <th width="15%" class="clsSyntaxHeadings"></th>
  <th width="10%" class="clsSyntaxHeadings">Device family</th>
  <th width="25%" class="clsSyntaxHeadings">Device</th>
  <th width="25%" class="clsSyntaxHeadings">Operating System(s)</th>
  <th width="25%" class="clsSyntaxHeadings">Supported WebView(s)</th>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="CBL-NGWT-HDVBAP-01pic" src="../../images/CBL-NGWT-HDVBAP-01.jpg" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>Vibrator CBL-NGWT-HDVBAP-01</b></td>
  <td class="clsSyntaxCells clsOddRow">Vibrating Cable</td>
  <td class="clsSyntaxCells clsOddRow">Accessory</td>
  <td class="clsSyntaxCells clsOddRow">Supported for use with WT6000 (Lollipop)</td>
 </tr>
</tbody>
</table>

###Printers

The printers shown below have been tested for compatibility with USB printing from Enterprise Browser. Printing wirelessly from EB apps is supported on many other Zebra printer models. **NOTE**: Zebra's QL Plus and QLn series printers do not support USB printing.

<table cellspacing="0" cellpadding="0" class="table table-striped">
 <tbody><tr>
  <th width="15%" class="clsSyntaxHeadings"></th>
  <th width="10%" class="clsSyntaxHeadings">Device family</th>
  <th width="25%" class="clsSyntaxHeadings">Device models</th>
  <th width="25%" class="clsSyntaxHeadings">Operating System(s)</th>
  <th width="25%" class="text-centered">Interface(s)</th>
 </tr>
<tr>
<td class="clsSyntaxCells clsOddRow"><img id="mz220pic" src="https://raw.githubusercontent.com/EBZebra/docs/d05601dc71f2531672f39c00238de2ea250d851f/edge/images/zebra-mz220.jpg"></img></td>
<td class="clsSyntaxCells clsOddRow"><b>MZ</b></td>
<td class="clsSyntaxCells clsOddRow">MZ 220, MZ 320</td>
<td class="clsSyntaxCells clsOddRow">Android, Windows Mobile/CE</td>
<td class="clsSyntaxCells clsOddRow">Bluetooth, USB, Wi-Fi</td>
</tr>
<tr>
<td class="clsSyntaxCells clsOddRow"><img id="imz220pic" src="../../images/imz320.jpg"></img></td>
<td class="clsSyntaxCells clsOddRow"><b>iMZ</b></td>
<td class="clsSyntaxCells clsOddRow">iMZ 220, iMZ 320</td>
<td class="clsSyntaxCells clsOddRow">Android, Windows Mobile/CE</td>
<td class="clsSyntaxCells clsOddRow">Bluetooth, USB, Wi-Fi</td>
</tr>
<tr>
<td class="clsSyntaxCells clsOddRow"><img id="rw420pic" src="../../images/rw420_inCradle.jpg"></img></td>
<td class="clsSyntaxCells clsOddRow"><b>RW</b></td>
<td class="clsSyntaxCells clsOddRow">RW 220, RW 420, RW 420 Print Station</td>
<td class="clsSyntaxCells usb comp">Android, Windows Mobile/CE</td>
<td class="clsSyntaxCells clsOddRow">Bluetooth, USB, Wi-Fi</td>
</tr>
<tr>
<td class="clsSyntaxCells clsOddRow"><img id="rp4tpic" src="https://raw.githubusercontent.com/EBZebra/docs/d05601dc71f2531672f39c00238de2ea250d851f/edge/images/zebra-p4t.jpg"></img></td>
<td class="clsSyntaxCells clsOddRow"><b>P4T</b></td>
<td class="clsSyntaxCells clsOddRow">P4T, RP4T Passive RFID Printer</td>
<td class="clsSyntaxCells clsOddRow">Android, Windows Mobile/CE</td>
<td class="clsSyntaxCells clsOddRow">Bluetooth, USB, Wi-Fi</td>
</tr>
<tr>
<td class="clsSyntaxCells clsOddRow"><img id="zd500rpic" src="../../images/zd500r.jpg"></img></td>
<td class="clsSyntaxCells clsOddRow"><b>ZD500R</b></td>
<td class="clsSyntaxCells clsOddRow">ZD500R RFID Printer</td>
<td class="clsSyntaxCells clsOddRow">Android, Windows Mobile/CE</td>
<td class="clsSyntaxCells clsOddRow">Bluetooth, USB, Wi-Fi</td>
</tbody>
</table>



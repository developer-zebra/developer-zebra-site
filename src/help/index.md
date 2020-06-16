---
publish: false
title: I Need Tools For...
layout: guide.html
menu:
  items:
    - title: About Zebra TechDocs
      url: /about
    - title: I Need Tools For...
      url: /help
    - title: Feedback
      url: /contact
    - icon: fa fa-comment
      url: https://developer.zebra.com/welcome
    - icon: fa fa-sitemap
      url: /sitemap
    - icon: fa fa-search
      url: /search
---

## Overview

Zebra Technologies provides devices for the enterprise to acquire, process and consume data from barcodes, magnetic stripe cards, RFID tags, smart cards, images, text and other technologies. To enable Zebra partners and customers of varying skills and requirements to make use of its devices, Zebra offers a broad array of tools designed to suit the requirements and capabilities of most any organization. 

<!-- -->
-----

## Scanning
Zebra mobile and touch computers are equipped with a variety of scanning devices, each of which can be accessed through software included with the device or with apps developed by a partner or customer. Zebra's solutions are described below in order from easiest (and with the least coding required) to the most powerful and complex.  

### DataWedge
##### PROS: Free; Easy to set up; Built into all Zebra devices; Controlled with UI or intents
##### CONS: Fixed feature set; Programmatic access requires coding

###### Zebra recommends considering DataWedge before other Zebra solutions. 

[DataWedge](../datawedge) provides barcode scanning and processing services for devices running Android, and is the fastest and easiest way to perform scanning out of the box or add it to an existing app. Included with every Zebra device, DataWedge enables any app on the device to acquire scanned data without the need to access the scanner APIs directly. DataWedge can be configured in minutes to automatically activate the desired scanner or reader whenever a particular app is launched, and can modify and pass acquired data to an app according to simple or complex rules. 

##### Go to [DataWedge docs](../datawedge) 
##### Need help deciding between DataWedge vs EMDK? See [DataWedge vs EMDK Comparison](#datawedgevsemdkcomparison)

<!-- -->
-----

### SimulScan
##### PROS: Easy to set up; Built into many devices; No coding required; Controlled with APIs 
##### CONS: Limited device support; Setup can be complex; Some features require licensing

[SimulScan](../simulscan) can optimize workflow by acquiring multiple points of data in a single step. It's included with [supported devices](../simulscan/1-1/guide/about/#supporteddevices) and is free for many scanning scenarios. SimulScan is well suited to organizations in which scanning is frequent and scanned forms have either one or more barcodes or contain multiple data types to acquire (such as barcodes, text and images). Optionally, SimulScan can integrate with an organization's native Android app and parse captured data directly into the app. **A per-device licensing requirement applies to some scenarios**. 

##### Go to [SimulScan docs](../simulscan)

<!-- -->
-----

### Enterprise Browser
##### PROS: Build cross-platform apps with HTML5 that access device APIs; Broad device support
##### CONS: Requires some JavaScript coding; Longer setup times; Licensing required 

[Enterprise Browser](../enterprise-browser) is a small-footprint web browser platform that uses industry-standard HTML5 for building cross-platform scanning apps with minimal coding. Runtime settings are stored in a single config file that's simple to understand, easy to modify and suitable for mass-deployment. Tools included with the platform simplify initial on-ramping and device configuration and debugging. 

##### Go to [Enterprise Browser docs](../enterprise-browser)

<!-- -->
-----

### EMDK
##### PROS: Most customizable solution; Complete control over all source code 
##### CONS: Requires Java or C# coding; Potentially long setup and testing times

Organizations with access to Java and/or C# developers can use [EMDK for Android](../emdk-for-android) and/or [EMDK for Xamarin](../emdk-for-xamarin) SDKs to build or modify Java or C# apps that acquire data on Android devices. Both SDKs offer simplified access to device APIs through Profile Manager, which automatically generates the XML to drive Zebra's device management layer.  

##### Go to [EMDK for Android docs](../emdk-for-android)
##### Go to [EMDK for Xamarin docs](../emdk-for-xamarin)
##### Need help deciding between DataWedge vs EMDK? See [DataWedge vs EMDK Comparison](#datawedgevsemdkcomparison)
<!-- -->
-----

### DataWedge vs EMDK Comparison

It is common for developers to be faced with the decision to choose between DataWedge or EMDK to integrate barcode scanning within their app. This comparison chart describes the differences and similarities between both, with DataWedge being the simpler route:
<table class="facelift" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th></th>
    <th>DataWedge</th>
    <th>EMDK</th>
  </tr>

  <tr bgcolor="#B0B0B0">
    <td colspan="3"><font color="#003399"><b>Differences</b></font></td>
  </tr>
  
  <tr>
	  <td><b>Ease of coding</b></td>
	  <td>- <a href="http://techdocs.zebra.com/datawedge/latest/guide/profiles/">Using Profiles</a>: No coding required <br>- <a href="http://techdocs.zebra.com/datawedge/latest/guide/api/">Using Intents</a>: Minimal coding required. Common coding practices to receive input data from intents: barcode, serial/USB port, Simulscan, magnetic stripe reader, Data Capture Plus</td>
	  <td><a href="http://techdocs.zebra.com/emdk-for-android/latest/guide/about/">API based</a> - major coding required. Entirely different code required to receive each input data: barcode, serial/USB port, Simulscan, magnetic stripe reader, Data Capture Plus</td>
  </tr>

  <tr>
    <td><b>Format scanned data</b></td>
    <td>- Using Profiles: Configuration available with <a href="http://techdocs.zebra.com/datawedge/latest/guide/process/bdf/">Basic/Advanced Data Formatting</a> <br>- Using Intents: Some coding required</td>
    <td>Requires app coding</td>
  </tr>

  <tr>
    <td><b>API responsiveness</b></td>
    <td>Responses pass through Android’s intent mechanism</td>
    <td>Responses received through API callback</td>
  </tr>

  <tr>
    <td><b>Soft Scan Trigger (scan via screen tap)</b></td>
    <td>Using Profiles: <a href="http://techdocs.zebra.com/datawedge/latest/guide/input/dcp/">Data Capture Plus</a> profile enables areas of the device screen to be designated as scan triggers (ie. floating button, full-screen mode, button-only mode) <br>Using Intents: Use <a href="http://techdocs.zebra.com/datawedge/latest/guide/api/softscantrigger/">Soft Scan Trigger API</a></td>
    <td>Requires app coding </td>
  </tr>

  <tr>
    <td><b>Configuration deployment</b></td>
    <td><a href="http://techdocs.zebra.com/datawedge/latest/guide/settings/#massdeployment">Deploy profile(s) via EMM</a></td>
    <td>EMDK is an SDK and is configured by the consuming application</td>
  </tr>
  
  <tr>
    <td><b>Impact of abnormal app behavior</b></td>
    <td>Does not impact any other apps since resources are managed by DataWedge</td>
    <td>Locks down scanner resources if app exits or crashes without releasing the scanner, after which a device reboot is required. See <b><i>Scanner resource handling</i></b> below.</td>
  </tr>

  <tr>
    <td><b>Development environment</b></td>
    <td>- Using Profiles: None required <br>- Using Intents: Standard Android development environment required
</td>
    <td>EMDK setup required in addition to standard Android or Xamarin development environment</td>
  </tr>

  <tr>
    <td><b>Ease of scan behavior modification</b></td>
    <td>- Using Profiles: Easily accomplished with no app code modification required <br>- Using Intents: Code modification required</td>
    <td>Requires app code modification</td>
  </tr>

  <tr>
    <td><b>Scanner resource handling</b></td>
    <td>DataWedge handles major resource handling including profile switching, acquiring and releasing scanner, and activity switching between the foreground and background</td>
    <td>The hardware scanner must be shared between applications. Developer must take account of their application going to the background or coming to the foreground to release and re-acquire the scanner resource as required.</td>
  </tr>

  <tr>
    <td><b>Asynchronous or synchronous calls</b></td>
    <td>Calls are asynchronous – the app is required to wait for the intent data.  Status notification is recommended to determine status of parameter changes.</td>
    <td>Some calls are synchronous (i.e. device enumeration, getconfig, setconfig) and some are asynchronous (i.e. enable/disable scanner, read)</td>
  </tr>

  <tr>
    <td><b>Special thread handling</b></td>
    <td>None required</td>
    <td>App cannot block main thread during EMDK initialization</td>
  </tr>

  <tr bgcolor="#B0B0B0">
    <td colspan="3"><font color="#003399"><b>Similarities</b></font></td>
  </tr>

  <tr>
    <td><b>Scanner capability</b></td>
    <td>Full control with use of intents</td>
    <td>Full control with use of APIs</td>
  </tr>

  <tr>
    <td><b>Documentation</b></td>
    <td><a href="http://techdocs.zebra.com/datawedge/latest/guide/about/">Available online</a></td>
    <td><a href="http://techdocs.zebra.com/emdk-for-android/latest/guide/about/">Available online</a></td>
  </tr>

  <tr>
    <td><b>Device dependencies</b></td>
    <td colspan="2" style="text-align:center;">Built-in</td>
  </tr>

  <tr>
    <td><b>Barcode scanning and camera capture in same activity</b></td>
    <td>Requires app coding to use intents for barcode scanning and camera capture within the same activity simultaneously</td>
    <td>Scanner resource must be released prior to using the device camera</td>
  </tr>

  <tr>
    <td><b>Status notifications</b></td>
    <td>An app can register with DataWedge to <a href="http://techdocs.zebra.com/datawedge/latest/guide/api/registerfornotification/">receive notifications</a> for events such as scanner status changes, profile switching and configuration updates</td>
    <td>OnStatus() notifications provide scanner status information</td>
  </tr>

</table>

<!-- -->
-----

## Printing

Zebra output solutions range from simple line printing with [Zebra's printers](https://www.zebra.com/us/en/products/printers.html) to the development of printer apps and firmware using the [Link-OS Multiplatform SDK](../link-os/).

##### [Printing from Enterprise Browser](http://techdocs.zebra.com/enterprise-browser/1-7/tutorial/printing/)
##### [LinkOS Code Samples](https://km.zebra.com/kb/index?page=content&channel=SAMPLE_CODE) 
<!-- -->
-----

## Security

### Application Security
Zebra security ranges from simple, feature-based solutions to whole-device lock-down with or without encryption. 

**[Enterprise Home Screen](../ehs)** is a simple way to control user access to apps, settings and files on Zebra devices running Android without the need for custom code.  

**[Enterprise Browser security options](../enterprise-browser/1-7/guide/security)** protect devices and data with a variety of solutions including basic authentication, client-server certificates, encryption, kiosk mode, and settings lock-out.  

**[Zebra StageNow manages security](../stagenow/2-7/Profiles/managesecurity/)** with Zebra Mobility DNA, which can lock down peripherals, keys and ports, implement application whitelists and blacklists and set up services to monitor threats and send alerts in real time. Learn more about Zebra Mobility DNA features, which can:  
* **[Verify the signature of an app before launching](../mx/accessmgr)**
* **[Set up encryption on a device](../mx/encryptmgr/)**
* **[Control device persistence settings](../mx/persistmgr/)**
* **[Lock down one or more device cameras](../mx/cameramgr/)**
* **[Prevent use of the device Clipboard, Notification panel and other potential leaks](../mx/uimgr)**

### Whole-device Security

#### Create a Single-Use Device (Kiosk)
When a device will be dedicated to a single task&mdash;an information kiosk, patient check-in system or price scanner, for example&mdash;Zebra's Enterprise Home Screen might be a good choice. Kiosk Mode opens one app in full-screen mode and prevents exiting when BACK and HOME keys are pressed.

Learn more about [EHS Kiosk Mode](../ehs/2-6/guide/features/#kioskmode) 
<!-- -->
-----

## App Migration
When there's a need to move an existing app from one device platform to another&mdash;such as from Windows CE to Android&mdash;Zebra offers multiple solutions to help ease the transition. Migration tools can put a new face on older apps or help move apps from older platforms to new ones.

### Enterprise Browser

[Migrate from Pocket Browser](../enterprise-browser/1-6/guide/pb2/)

[Migrate from Rho Elements](../enterprise-browser/1-6/guide/elements/)

[Migrate from Rho Mobile](../enterprise-browser/1-6/guide/rhomobile/)

### EMDK for Xamarin

[Migrate a C# Windows Mobile/CE app](../emdk-for-xamarin)

<!-- -->
-----

#### Feedback

**Have an idea for a feature? [Let Us Know!](../contact)**

[Back to Main page](../)

<!--

## Modernize An App

Some legacy apps are simply too mission-critical to risk losing, even for a day. For such situations, Zebra offers solutions that can put a modern face on green-screen and other types of legacy apps while leaving the underlying business logic intact.  

All Touch TE (fake)
/link-os/latest/android

SAP ITSmobile



Modernize user interface


## Manage and Staging Devices
StageNow is Zebra's world-class device staging and management system. 

StageNow
/stagenow

 -->

<!-- 
layout: list-products.html
products: 
  - title: Scan
    description: DataWedge adds scanning to any app without coding; SimulScan captures all data from forms without coding; Enterprise Browser builds cross-platform scanning apps with minimal coding. 
    url: ../usecases
    image: /datawedge/datawedge_logo.png
    btn-text: Latest Docs
    sections:
      - title: DataWedge
        url: ../../datawedge
      - title: SimulScan
        url: ../../simulscan
      - title: Enterprise Browser
        url: ../../enterprise-browser
    versions:
      - url: /techdocs/usecases
        label: 'Select a Tool'      
      - url: ../../datawedge
        label: 'DataWedge'
      - url: ../../simulscan
        label: 'SimulScan'
      - url: ../../enterprise-browser
        label: 'Enterprise Browser'
  - title: Scanning (full app coding)
    description: Use EMDK for Android or Xamarin SDKs to build or modify Java or C# apps that acquire data on Android devices. 
    url: ../usecases
    image: /images/products/emdk-for-android.png
    btn-text: Latest Docs
    sections:
      - title: EMDK for Android
        url: ../../emdk-for-android
      - title: EMDK for Xamarin
        url: ../../emdk-for-xamarin
  - title: Printing
    description: Zebra output solutions range from simple line printing from an Enterprise Browser to the development of printer apps and firmware using Link-OS.     
    url: ../usecases
    image: /images/products/emdk-for-android.png
    btn-text: Latest Docs
    sections:
      - title: Enterprise Browser
        url: /enterprise-browser/1-6/guide/printingGuide/
      - title: Android Printing
        url: /link-os/latest/android_btle
      - title: Xamarin Printing
        url: /link-os/latest/xamarin
      - title: iOS Printing
        url: /link-os/latest/ios
      - title: Windows Mobile/CE Printing
        url: /link-os/latest/pc
      - title: C# to Android
        url: /link-os/latest/webservices
      - title: Samples
        url: https://km.zebra.com/kb/index?page=content&channel=SAMPLE_CODE
    versions:
      - url: /techdocs/usecases
        label: 'Select a Tool'      
      - url: /enterprise-browser/1-6/guide/printingGuide/
        label: 'Enterprise Browser'
      - url: /link-os/latest/android_btle
        label: 'Android Printing'
      - url: /link-os/latest/xamarin
        label: 'Xamarin Printing'
      - url: /link-os/latest/ios
        label: 'iOS Printing'
      - url: /link-os/latest/pc
        label: 'Windows Mobile/CE Printing'
      - url: /link-os/latest/webservices
        label: 'C# to Android Printing'
  - title: Security
    description: Zebra security ranges from simple, feature-based solutions to whole-device lock-down and encryption.
    url: ../usecases
    btn-text: Latest Docs
    image: /ehs/ehs-logo.png
    sections:
      - title: Enterprise Home Screen
        url: /ehs
      - title: Enterprise Browser
        url: /enterprise-browser/1-6/guide/security
      - title: Android Security
        url: /stagenow/2-3/Profiles/managesecurity/
      - title: Device Encryption
        url: /mx/encryptmgr/
      - title: Scanner Security Level (Android app)
        url: /emdk-for-android/6-3/.../ScannerConfig.SecurityLevel.html
      - title: Device Persistence
        url: /mx/persistmgr/
    versions:
      - url: /techdocs/usecases
        label: 'Select a Tool'      
      - url: /enterprise-browser/1-6/guide/security
        label: 'Enterprise Browser'
      - url: /stagenow/2-3/Profiles/managesecurity/
        label: 'Android Security'
      - url: /mx/encryptmgr/
        label: 'Device Encryption'
      - url: /emdk-for-android/6-3/.../ScannerConfig.SecurityLevel.html
        label: 'Scanner Security Level (Android app)'
      - url: /mx/persistmgr/
        label: 'Device Persistence'
  - title: Android Development
    description: Enterprise Browser apps use HTML5 and work with most Zebra devices; EMDK uses Java or Xamarin to target Zebra devices with full enterprise control of features and source code.
    url: ../usecases
    image: /enterprise-browser/enterprise_browser_logo.png
    btn-text: Latest Docs
    sections:
      - title: Enterprise Browser
        url: ../../enterprise-browser 
      - title: EMDK for Android
        url: ../../emdk-for-android
      - title: EMDK for Xamarin
        url: ../../emdk-for-xamarin
    versions:
      - url: /techdocs/usecases
        label: 'Select a Tool'      
      - url: ../../enterprise-browser
        label: 'Enterprise Browser'
      - url: ../../emdk-for-xamarin/
        label: 'EMDK for Xamarin (C#)'
  - title: Windows Development
    description: Enterprise Browser apps use HTML5 and work with most Zebra devices. WHAT ELSE DOES ZEBRA OFFER WINDOWS DEVELOPERS?
    url: ../usecases
    image: /enterprise-browser/enterprise_browser_logo.png
    btn-text: Latest Docs
    sections:
      - title: fake
        url: /ehs/2-5/guide/about
      - title: fake
        url: /ehs/2-5/guide/setup
      - title: fake
        url: /ehs/2-5/guide/settings
      - title: fake
        url: /ehs/2-5/guide/features
      - title: fake
        url: /ehs/2-5/download
    versions:
      - url: /techdocs/usecases
        label: 'Select a Tool'      
      - url: ../../enterprise-browser
        label: 'Enterprise Browser'
      - url: ../../emdk-for-xamarin/
        label: 'EMDK for Xamarin (C#)'
  - title: Migration and Modernization
    description: Migration tools can put a new face on older apps, modernize apps for terminal emulation or help move apps from older platforms to new ones.  
    url: ../usecases
    image: /images/products/link-os.png
    sections:
      - title: All Touch TE (fake)
        url: /link-os/latest/android
      - title: Pocket Browser
        url: /enterprise-browser/1-6/guide/pb2/
      - title: Rho Elements
        url: /enterprise-browser/1-6/guide/elements/
      - title: Rho Mobile
        url: /enterprise-browser/1-6/guide/rhomobile/
      - title: Windows Mobile/CE
        url: /emdk-for-xamarin/2-4/guide/about/
      - title: C# to Android
        url: /emdk-for-xamarin/2-4/guide/about/
    versions:
      - url: /techdocs/usecases
        label: 'Select a Tool'      
      - url: ../../enterprise-browser
        label: 'Enterprise Browser'
      - url: ../../emdk-for-xamarin/
        label: 'EMDK for Xamarin (C#)'
  - title: Scan (minimal coding)
    description: DataWedge adds scanning to any app without coding; SimulScan captures all data from forms without coding; Enterprise Browser builds cross-platform scanning apps with minimal coding. 
    url: ../usecases
    image: /datawedge/datawedge_logo.png
    btn-text: Latest Docs
    versions:
      - url: /techdocs/usecases
        label: 'Select a Tool'      
      - url: ../../datawedge
        label: 'DataWedge'
      - url: ../../simulscan
        label: 'SimulScan'
      - url: ../../enterprise-browser
        label: 'Enterprise Browser'

-->


<!-- from the "full app coding" section:

    versions:
      - url: /techdocs/usecases
        label: 'Select a Tool'      
      - url: ../../emdk-for-android
        label: 'EMDK for Android'
      - url: ../../emdk-for-xamarin/
        label: 'EMDK for Xamarin'

-->
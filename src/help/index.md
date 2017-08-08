---
publish: false
title: I Need Tools for...
layout: guide.html
menu:
  items:
    - title: About TechDocs
      url: /about
    - title: I Need To...
      url: /help
    - title: Feedback
      url: /contact
    - icon: fa fa-search
      url: /search
---
## Overview

Zebra Technologies provides devices for the enterprise to acquire, process and consume myriad forms of data, be it from a barcode, magnetic stripe, RFID tag, smart card, image, text or other technology. To enable Zebra partners and customers of varying skills and requirements to make use of its devices, we offer a broad array of tools designed to suit the requirements and capabilities of most any organization. 

-----

## Scanning
Zebra mobile and touch computers are equipped with a variety of scanning devices, each of which can be accessed through software included with the device or with apps developed by a partner or customer. Zebra's solutions are described below in order from easiest (and with the least coding required) to the most powerful and complex.  

### DataWedge - Easiest; Coding Optional

[DataWedge](../datawedge) provides barcode scanning and processing services for devices running Android, and is the fastest and easiest way to add scanning to an existing app. Included with every Zebra device, DataWedge enables any app on the device to acquire scanned data without using the scanner APIs directly. DataWedge can be configured in minutes to automatically activate a particular scanner or reader whenever a particular app is launched, and can manipulate and hand off acquired data according to simple or complex rules. 

**PROS**: **No coding required**, APIs increase power and versatility

**CONS**: Fixed feature set

-----

### SimulScan - Easy, No Coding; Some Setup Required

[SimulScan](../simulscan) is included only with [supported devices](../simulscan/1-1/guide/about/#supporteddevices), and is designed to optimize workflow by enabling acquisition of multiple points of data in a single step. SimulScan is well suited to organizations in which scanning is frequent, and scanned forms have one or more barcodes, or if multiple data types (such as barcodes, text and images) are to be acquired. Optionally, SimulScan can integrate with an organization's native Android app and parse captured data directly into the app. 

**PROS**: **No coding required**, APIs increase efficiency, effectiveness

**CONS**: Limited device support; longer setup time than DataWedge; subject to per-device licensing

-----

[Enterprise Browser](../enterprise-browser) is a small-footprint web browser for which apps can be built   

builds cross-platform scanning apps with minimal coding. 

Use EMDK for Android or EMDK for Xamarin SDKs to build or modify Java or C# apps that acquire data on Android devices. 

**PROS**: Uses familiar HTML interface; apps are cross-platform; broad device support

**CONS**: Longer setup time; some JavaScript coding; per-device licensing required 

-----

## Printing
Zebra output solutions range from simple line printing from an Enterprise Browser to the development of printer apps and firmware using Link-OS.

-----

## Security

### Secure an App
Zebra security ranges from simple, feature-based solutions to whole-device lock-down and encryption.

Enterprise Home Screen 
/ehs

Enterprise Browser
/enterprise-browser/1-6/guide/security

Android Security
/stagenow/2-3/Profiles/managesecurity/

Scanner Security Level (Android app)
/emdk-for-android/6-3/.../ScannerConfig.SecurityLevel.html

### Secure a Device

### Device Encryption
/mx/encryptmgr/

### Device Persistence
/mx/persistmgr/

### Lock Down Device Camera(s)
/mx/cameramgr/

### Create a Single-Use Device (Kiosk)
For use cases in which a device will be dedicated to a single task&mdash;such as that of an information kiosk, patient check-in system or price scanner&mdash;Zebra's Enterprise Home Screen can be used  >>> BLAH BLAH BLAH. 



Kiosk Mode also can be useful when dedicating a device to a single user and/or task, such as a retail clerk's hand-held barcode scanner. Kiosk Mode opens the app in full-screen mode and prevents exit by blocking the BACK and HOME keys.

EHS can be used with or without an Enterprise Browser app. For an concise overview of EHS configuration, see the [Device Lock-down With EHS](http://techdocs.zebra.com/enterprise-browser/1-6/guide/ehs/) section of the Enterprise Browser docs. The [EHS User Guide](http://techdocs.zebra.com/ehs/2-5/guide/features/) contains complete instructions. 

-----

## Migrating Apps
When the need arises to migrate existing apps from one device platform to another, such as from Windows CE to Android,  

Migration tools can put a new face on older apps, modernize apps for terminal emulation or help move apps from older platforms to new ones.

All Touch TE (fake)
/link-os/latest/android

Pocket Browser
/enterprise-browser/1-6/guide/pb2/

Rho Elements
/enterprise-browser/1-6/guide/elements/

Rho Mobile
/enterprise-browser/1-6/guide/rhomobile/

Windows Mobile/CE
/emdk-for-xamarin/2-4/guide/about/

C# to Android
/emdk-for-xamarin/2-4/guide/about/

-----

## Modernize the UI of an app

-----

## Managing and Staging Devices
StageNow is Zebra's world-class device staging and management system. 

StageNow
/stagenow



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
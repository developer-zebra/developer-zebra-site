---
title: About EMDK For Android
layout: guide.html
product: EMDK For Android
productversion: '4.1'
---

## Overview
The EMDK for Android provides developers with a comprehensive set of tools to easily create powerful line of business applications for enterprise mobile computing devices and is designed for use with Google's Android SDK and Android Studio. The EMDK for Android includes class libraries, sample applications with source code, as well as all of the associated documentation to help your applications take full advantage of what our devices have to offer.

It also includes an exclusive Profile Manager Technology within the your IDE, providing a GUI based development tool. This allows you to write fewer lines of code resulting in reduced development time, effort and errors.

## Requirements
The following software must be installed prior to using the EMDK for Android.

**Windows:**
* Microsoft Windows 7 (32-bit and 64-bit)  or Microsoft&copy; Windows 8 (32-bit and 64-bit) or Microsoft&copy; Windows 8.1 (32-bit and 64-bit)
* Java Development Kit (JDK) v7u45 or higher
* Android Studio 1.1.x or higher
* Installed via Android SDK manager
	* The Android 4.1.2 (API 16) and the Android 4.4.2 (API 19) packages
	* The Android SDK Build-tools rev.21.1.x or higher
 
**Mac OS X:**  
* Yosemite (10.10.x) | (64-bit)  or El Capitan (10.11.x) | (64-bit)
* Java for OS X 2014-10x or higher
* Java Development Kit (JDK) v7u75 or higher
* Installed via Android SDK manager 
	* The Android 4.1.2 (API 16) and the Android 4.4.2 (API 19) packages
	* The Android SDK Build-tools rev.21.1.x or higher


## Devices Supported
Although EMDK for Android has been designed to work with all Symbol mobile computers running Android, the following devices have been used for validation:

* MC18 - KitKat
* MC32 - OS Update image v00002 or higher (JellyBean)
* MC40 - OS Update image v02.08.0520 or higher (JellyBean)
* MC40 - KitKat
* MC67 - OS Update image v01.28.14 or higher (JellyBean)
* MC92 - KitKat
* TC55 - OS Update image v01.74.00 or higher (JellyBean)
* TC55 - OS Update image v02.52.02 or higher (KitKat)
* TC70 - OS Update image v11.24.14 or higher (KitKat)
* TC70 - KitKat Rev B
* TC75 - KitKat


## What's New
**EMDK for Android v4.1**
* Profile Manager Updates
	* [Hosts Manager](/emdk-for-android/4-1/mx/hostsmgr/) - The HostsMgr allows the device to be assigned a Host Name by which the device can be identified by admins, applications and other devices on local and DNS-enabled IP networks.
	* [Launch application by simple name](/emdk-for-android/4-1/mx/appmgr/#application-simple-name) - new action for [App Manager](/emdk-for-android/4-1/mx/appmgr).
	* [UI Manager](/emdk-for-android/4-1/mx/uimgr) updates
		* [Extended Locale Options](/emdk-for-android/4-1/mx/uimgr/#set-an-extended-locale) - 4 new options for existing param "ExtendedLocale": SWEDEN_SWEDISH, NORWAY_NORWEGIAN-BOKMAL, FINLAND_FINISH, DENMARK_DANISH
		* [Custom Locale](/emdk-for-android/4-1/mx/uimgr/#set-a-custom-locale) - This parm value permits the selection of the device's Custom Locale. A locale is the combination of a language and a region in which that language is spoken.
		* [Notification Pulldown Enable/Disable](/emdk-for-android/4-1/mx/uimgr/#notification-pulldown-enabledisable) - controls whether a user will be allowed to "pull down" the Notifications/Status bar and access the Notifications panel. 
		* [Quick Settings Show/Hide](/emdk-for-android/4-1/mx/uimgr/#quick-settings-icons-showhide) -  controls whether Quick Settings icons will be displayed in the Android Notifications panel.

**EMDK for Android v4.0**

* IDE Support
	* **Support for ADT/Eclipse has been deprecated**. Future versions of the EMDK for Android will only support Android Studio for development. 

* New Profile Manager Features
	* [Multipule MX version support](/emdk-for-android/4-1/guide/profile-manager) - Profile manager now supports multiple MX versions. You can now choose between  MX 4.2, 4.4 and 5.0 when creating a new profile.
	* [Profile Upgrade](/emdk-for-android/4-1/guide/profile-manager) - Profile manager now provides a method to upgrade an existing profile to use a higher version of MX.
	* [Data Capture Activity Selection Wildcard](/emdk-for-android/4-1/mx/data-capture/activity) - When using an Activity Selector in a Data Capture profile and wish to include all activities in an application package, you no longer have to manually enter each activity. You can now enter a single asterisk ( \* ) and all activities in that package will be selected. 
	* New MX 4.4 features
		* Additional Locale support for SPANISH, US_SPANISH, BRAZILIAN PORTUGUESE and PORTUGUESE.
		* Password Masking / Encryption for sensitive values in Certificate Manager and GPRS Manager.
	* New MX 5.0 features
		* PAC File – Allows the central control of proxy settings for KitKat devices
		* Screen Capture Control – Enable / Disable ability to perform a screen capture
		* Vendor Specific DHCP Options – Supports vendor specific options for granular configuration control

* New API's
	* [Mobile Payment](/emdk-for-android/4-1/api/payment) - Provides API's to perform EMV and Magstripe Payment transactions when using the PD40 Payment device with MC40 JB and MC40 KK devices.
	* [Serial Communication](/emdk-for-android/4-1/api/serialcomm) - Allows you to add DEX support in your application.
    
        >Note: In order to use Serial **Read** functionality, you must first apply a patch provided in [SPR-28877](https://spr.motorolasolutions.com/ViewSPR.aspx?sprID=28877). To obtain this patch, contact Zebra Support.

* New Guides
	* [Barcode Scanner States](/emdk-for-android/4-1/guide/scanner)

**EMDK for Android v3.1 Update 1**

* New Profile Manager Features
	* Audio Manager -  allows you to manage enhanced audio volume control configurations
	* Battery Manager - allows the developer to modify that Decommission Threshold from its factory setting
	* Component Manager - allows you to manage the state of Components, such as a devices Ethernet Port
	* DHCP Manager - allows you to control various DHCP configuration options.
	* KeyMap Manager - allows you to remap functionality of keys.
* New Device Support
	* MC18 - KitKat
	* MC40 - KitKat
	* MC92 - KitKat
* New API's
	* PersonalShopper APIs for MC18
	* SecureNFC APIs
* New Guides
	* Personal Shopper](/emdk-for-android/4-1/guide/personalshopper)
	* Secure NFC](/emdk-for-android/4-1/guide/securenfc)

**EMDK for Android v3.1**

* TC55 KitKat and TC75 KitKat are now supported
* Android Studio  - EMDK for Android is now fully supported in Android Studio
* SimulScan APIs  - data capture solution to extract critical data from documents
* Scan and Pair APIs  - easily pair to a bluetooth device through barcode scanning
* Continuous Trigger mode  - new aim type supported for continuous trigger
* Name Value Pair API  - new method for ProfileManager
* Extended EMDK Results Enum  - Further details available when processing profiles
* New Profile Manager Features
	* Browser Manager - configures web browser behavior
	* Camera Manager - control access to the cameras in the device
	* Cellular Manager - configure options of the  cellular radio on your device
	* DevAdmin Manager -  manage configuration settings on the device
	* Display Manager -  control the screen timeout value to conserve power
	* Encrypt Manager -  set encryption policies
	* Powerkey Manager -  control which options appear on the power menu
	* SD Card Manager -  manage the use of the devices SD card
	* Threat Manager -  Control what security threats a device actively monitors
* Support for Bluetooth scanners (RS507) in Barcode API's 

**EMDK For Android v3.0 Update 1**

* TC70 Support - Our first KitKat supported device
* EMDK for Android Device Runtime Update v3.0.4


**EMDK For Android v3.0**

* Native Java Barcode Scanning APIs
* New EMDK Profiles  features:
	* Settings Manager  - turn on/off ability to invoke Enterprise Reset in settings UI
	* Touch Manager  - set the device's touch mode
	* UI Manager  - configure clipboard behavior
	* USB Manager  - manage USB configurations behavior
	* Wireless Manager - enable or disable Bluetooth
* Updated EMDK Profiles  features:
	* Access Manager  - new Whitelist features
	* App Manager  - new Dynamic Protected List ability
	* Clock - new NTP server synchronization
* New Tutorials
	* Barcode Scanning API (Basic) 
	* Barcode Scanning API (Advanced) 
	* Invoke Enterprise Reset in Settings UI 
	* Specify Touch Mode using Mx Touch Manager 
	* Configure Clipboard using Mx UI Manager 
	* Manage USB Configurations 
	* Configure Bluetooth using Mx Wireless Manager 

## Components

### Profile Manager
The EMDK's exclusive [Profile Manager](/emdk-for-android/4-1/guide/profile-manager) Technology is an additional advantage for developers giving you a GUI based development tool built on our open framework. This allows you to write fewer lines of code resulting in reduced development time, effort and errors. This innovative feature not only gives you easy access to critical functions such as bar code scanning and transaction processing via a magnetic stripe reader (MSR) but also functionality not available in Google's Android SDK.   

### EMDK Device Runtime
In order for your application to use the EMDK For Android, you will need to install the EMDK Device Runtime on each device. This runtime is included with the EMDK For Android installation. Check the [Setup Guide](/emdk-for-android/4-1/guide/setupDevice) for instructions. In the future the EMDK Services will be included with the default operating system for the device.

### Samples & Programmer's Guide
There are sample projects that are included as part of the EMDK For Android installation. You can import the project into your IDE and run on your device. Look at the [Sample Guide](/emdk-for-android/4-1/samples/) for more details on using these samples. You can also reference the [Programmers Guide](/emdk-for-android/4-1/tutorial/) for a complete walk-through of building your first EMDK For Android application.

### Java APIs
The EMDK for Android offers access to the device's Barcode capabilities through [traditional native Java Barcode APIs](/emdk-for-android/4-1/api). Be sure to look at the [Barcode Scanning API tutorial.](/emdk-for-android/4-1/tutorial/tutBasicScanningAPI)

### Intent APIs
The EMDK for Android will continue to support the [DataCapture](/emdk-for-android/4-1/guide/reference/refdatacaptureintent) and [Battery Intent](/emdk-for-android/4-1/guide/reference/refbatteryintent) APIs that were previously available on individual device types. 

<a name="faqs"></a>













---
title:  About EMDK For Android
---

## Overview
The EMDK for Android provides developers with a comprehensive set of tools to easily create powerful line of business applications for enterprise mobile computing devices and is designed for use with Google's Android SDK and Android Development Tools (ADT). The EMDK for Android includes class libraries, sample applications with source code, as well as all of the associated documentation to help your applications take full advantage of what our devices have to offer.

It also includes an exclusive Profile Manager Technology within the your IDE, providing a GUI based development tool. This allows you to write fewer lines of code resulting in reduced development time, effort and errors.

## Requirements
The following software must be installed prior to using the EMDK for Android.

* Microsoft Windows 7 (32-bit and 64-bit)  or Microsoft&copy; Windows 8 (32-bit and 64-bit) or Microsoft&copy; Windows 8.1 (32-bit and 64-bit)
* Java Development Kit (JDK) v7u45 or higher
* Android Developer Tools (ADT) v22.3.0-887826 or higher


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
* TC75 - KitKat


## What's New
**EMDK for Android v4.0**

* IDE Support
	* **Support for ADT/Eclipse has been deprecated**. Future versions of the EMDK for Android will only support Android Studio for development. 

* New Profile Manager Features
	* [Multipule MX version support](/emdk-for-android/4-0/guide/profile-manager) - Profile manager now supports multiple MX versions. You can now choose between  MX 4.2, 4.4 and 5.0 when creating a new profile.
	* [Profile Upgrade](/emdk-for-android/4-0/guide/profile-manager) - Profile manager now provides a method to upgrade an existing profile to use a higher version of MX.
	* [Data Capture Activity Selection Wildcard](/emdk-for-android/4-0/mx/data-capture/activity) - When using an Activity Selector in a Data Capture profile and wish to include all activities in an application package, you no longer have to manually enter each activity. You can now enter a single asterisk ( \* ) and all activities in that package will be selected. 
	* New MX 4.4 features
		* Additional Locale support for SPANISH, US_SPANISH, BRAZILIAN PORTUGUESE and PORTUGUESE.
		* Password Masking / Encryption for sensitive values in Certificate Manager and GPRS Manager.
	* New MX 5.0 features
		* PAC File – Allows the central control of proxy settings for KitKat devices
		* Screen Capture Control – Enable / Disable ability to perform a screen capture
		* Vendor Specific DHCP Options – Supports vendor specific options for granular configuration control

* New API's
	* [Mobile Payment](/emdk-for-android/4-0/api/payment) - Provides API's to perform EMV and Magstripe Payment transactions when using the PD40 Payment device with MC40 JB, TC70 KK, TC75 KK and TC55 KK devices.
	* [Serial Communication](/emdk-for-android/4-0/api/serialcomm) - Allows you to add DEX support in your application.

**EMDK for Android v3.1 Update 1**

* New Profile Manager Features
	* [Audio Manager](/emdk-for-android/4-0/guide/profiles/audio)-  allows you to manage enhanced audio volume control configurations
	* [Battery Manager](/emdk-for-android/4-0/guide/profiles/battery)- allows the developer to modify that Decommission Threshold from its factory setting
	* [Component Manager](/emdk-for-android/4-0/guide/profiles/component)- allows you to manage the state of Components, such as a devices Ethernet Port
	* [DHCP Manager](/emdk-for-android/4-0/guide/profiles/dhcp)- allows you to control various DHCP configuration options.
	* [KeyMap Manager](/emdk-for-android/4-0/guide/profiles/keymap)- allows you to remap functionality of keys.
* New Device Support
	* MC18 - KitKat
	* MC40 - KitKat
	* MC92 - KitKat
* New API's
	* [PersonalShopper APIs](/emdk-for-android/4-0/api?PersonalShopper) for MC18
	* [NFC APIs](/emdk-for-android/4-0/api?SecureNfcManager)
* New Guides
	* [Personal Shopper](/emdk-for-android/4-0/guide/personalshopper)
	* [Secure NFC](/emdk-for-android/4-0/guide/securenfc)

**EMDK for Android v3.1**

* TC55 KitKat and TC75 KitKat are now supported
* [Android Studio](/emdk-for-android/4-0/guide/setupAndroidStudio) - EMDK for Android is now fully supported in Android Studio
* [SimulScan APIs](/emdk-for-android/4-0/api?SimulScan%20APIs) - data capture solution to extract critical data from documents
* [Scan and Pair APIs](/emdk-for-android/4-0/api?ScanAndPair%20APIs) - easily pair to a bluetooth device through barcode scanning
* [Continuous Trigger mode](/emdk-for-android/4-0/api/ScannerConfig?ScannerConfig.AimType) - new aim type supported for continuous trigger
* [Name Value Pair API](/emdk-for-android/4-0/api/ProfileManager?CreateNameValuePair%28java.lang.String%2520emdkName%2C%2520java.lang.String%2520paramName%2C%2520java.lang.String%2520paramValue%29) - new method for ProfileManager
* [Extended EMDK Results Enum](/emdk-for-android/4-0/api/EMDKResults?EMDKResults.%E2%80%8BEXTENDED_STATUS_CODE) - Further details available when processing profiles
* New Profile Manager Features
	* [Browser Manager](/emdk-for-android/4-0/guide/profiles/browser)- configures web browser behavior
	* [Camera Manager](/emdk-for-android/4-0/guide/profiles/camera)- control access to the cameras in the device
	* [Cellular Manager](/emdk-for-android/4-0/guide/profiles/cellular)- configure options of the  cellular radio on your device
	* [DevAdmin Manager](/emdk-for-android/4-0/guide/profiles/devadmin)-  manage configuration settings on the device
	* [Display Manager](/emdk-for-android/4-0/guide/profiles/display)-  control the screen timeout value to conserve power
	* [Encrypt Manager](/emdk-for-android/4-0/guide/profiles/encrypt)-  set encryption policies
	* [Powerkey Manager](/emdk-for-android/4-0/guide/profiles/powerkey)-  control which options appear on the power menu
	* [SD Card Manager](/emdk-for-android/4-0/guide/profiles/sdcard)-  manage the use of the devices SD card
	* [Threat Manager](/emdk-for-android/4-0/guide/profiles/threat)-  Control what security threats a device actively monitors
* Support for Bluetooth scanners (RS507) in [Barcode API's](/emdk-for-android/4-0/api/BarcodeInterfaceConfig) 

**EMDK For Android v3.0 Update 1**

* TC70 Support - Our first KitKat supported device
* EMDK for Android Device Runtime Update v3.0.4


**EMDK For Android v3.0**

* Native [Java Barcode Scanning APIs](/emdk-for-android/4-0/api)
* New [EMDK Profiles](/emdk-for-android/4-0/guide/profile-manager) features:
	* [Settings Manager](/emdk-for-android/4-0/guide/profiles/settings) - turn on/off ability to invoke Enterprise Reset in settings UI
	* [Touch Manager](/emdk-for-android/4-0/guide/profiles/touch) - set the device's touch mode
	* [UI Manager](/emdk-for-android/4-0/guide/profiles/ui) - configure clipboard behavior
	* [USB Manager](/emdk-for-android/4-0/guide/profiles/usb) - manage USB configurations behavior
	* [Wireless Manager](/emdk-for-android/4-0/guide/profiles/wireless) - enable or disable Bluetooth
* Updated [EMDK Profiles](/emdk-for-android/4-0/guide/profile-manager) features:
	* [Access Manager](/emdk-for-android/4-0/guide/profiles/access) - new Whitelist features
	* [App Manager](/emdk-for-android/4-0/guide/profiles/app) - new Dynamic Protected List ability
	* [Clock](/emdk-for-android/4-0/guide/profiles/clock) - new NTP server synchronization
* New Tutorials
	* [Barcode Scanning API (Basic)](/emdk-for-android/4-0/tutorial/tutBasicScanningAPI)
	* [Barcode Scanning API (Advanced)](/emdk-for-android/4-0/tutorial/tutAdvancedScanningAPI)
	* [Invoke Enterprise Reset in Settings UI](/emdk-for-android/4-0/tutorial/tutMxSettingsManager)
	* [Specify Touch Mode using Mx Touch Manager](/emdk-for-android/4-0/tutorial/tutMxTouchManager)
	* [Configure Clipboard using Mx UI Manager](/emdk-for-android/4-0/tutorial/tutMxUIManager)
	* [Manage USB Configurations](/emdk-for-android/4-0/tutorial/tutMxUSBManager)
	* [Configure Bluetooth using Mx Wireless Manager](/emdk-for-android/4-0/tutorial/tutMxWirelessManager)

## Components

### Profile Manager
The EMDK's exclusive [Profile Manager](/emdk-for-android/4-0/guide/profile-manager) Technology is an additional advantage for developers giving you a GUI based development tool built on our open framework. This allows you to write fewer lines of code resulting in reduced development time, effort and errors. This innovative feature not only gives you easy access to critical functions such as bar code scanning and transaction processing via a magnetic stripe reader (MSR) but also functionality not available in Google's Android SDK.   

### EMDK Device Runtime
In order for your application to use the EMDK For Android, you will need to install the EMDK Device Runtime on each device. This runtime is included with the EMDK For Android installation. Check the [Setup Guide](/emdk-for-android/4-0/guide/setupDevice) for instructions. In the future the EMDK Services will be included with the default operating system for the device.

### Samples & Programmer's Guide
There are sample projects that are included as part of the EMDK For Android installation. You can import the project into your IDE and run on your device. Look at the [Sample Guide](/emdk-for-android/4-0/samples/) for more details on using these samples. You can also reference the [Programmers Guide](/emdk-for-android/4-0/tutorial/) for a complete walk-through of building your first EMDK For Android application.

### Java APIs
The EMDK for Android offers access to the device's Barcode capabilities through [traditional native Java Barcode APIs](/emdk-for-android/4-0/api). Be sure to look at the [Barcode Scanning API tutorial.](/emdk-for-android/4-0/tutorial/tutBasicScanningAPI)

### Intent APIs
The EMDK for Android will continue to support the [DataCapture](/emdk-for-android/4-0/guide/reference/refdatacaptureintent) and [Battery Intent](/emdk-for-android/4-0/guide/reference/refbatteryintent) APIs that were previously available on individual device types. 

<a name="faqs"></a>
<!--
## Frequently Asked Questions
**Q: Where can I download a copy of the EMDK for Android?**

A: The EMDK for Android can be downloaded from Support Portal [here](https://portal.motorolasolutions.com/Support/US-EN/Mobile+Networks+RFID+and+BarCode+Scanners/Mobile+Computers/Developer+Kits+and+Software+Tools/Mobile%20Computer%20Software%20and%20Developer%20Tools_US-EN)

**Q: Is there a cost for the EMDK for Android?**

A: No, EMDK for Android is available for free and can be downloaded from Support Portal [here](https://portal.motorolasolutions.com/Support/US-EN/Mobile+Networks+RFID+and+BarCode+Scanners/Mobile+Computers/Developer+Kits+and+Software+Tools/Mobile%20Computer%20Software%20and%20Developer%20Tools_US-EN)

**Q: Which device does the EMDK for Android support and which operating systems?**

A: The EMDK for Android supports the following devices only:

* MC32 (Jellybean)
* MC40 (Jellybean)
* MC67 (Jellybean)
* TC55 (Jellybean)
* TC70 (Kit Kat)

**Q: Which desktop operating systems are supported by the EMDK for Android support?**

A: The EMDK for Android  is supported on Windows 7, Windows 8 and Windows 8.1.

**Q: Can the EMDK for Android be installed on Windows XP?**

A: No, the EMDK for Android does not support Windows XP and there are no current plans to support this operating system.

**Q: Can the EMDK for Android be installed on a MAC?**

A: No, the EMDK for Android does not support MAC OS. MAC support will be considered in a future release of the EMDK for Android. However you can use virtualization solutions such as VMware fusion to run one of the supported Windows operating systems on a MAC.

**Q: Can the EMDK for Android be used with Android Studio?**

A: You may be able to import existing projects and build successfully with Android Studio. However full integration, like Profile Manager, will not work and the EMDK for Android at this time does not support Android Studio. Official support for Android Studio will be made available in a future release of the EMDK for Android.

**Q: What documentation is available for EMDK for Android and where can I obtain it?**

A: Besides this self contained set of documentation, additional and/or updated documentation for the EMDK can be found on the LaunchPad here:

* [EMDK Landing page](https://developer.motorolasolutions.com/community/android/emdk) 
* [Tutorials](https://developer.motorolasolutions.com/community/android/emdk/tutorials) 
* [Samples](https://developer.motorolasolutions.com/community/android/emdk/samples) 
* [API Reference](https://developer.motorolasolutions.com/community/android/emdk/reference) 
* [Profile Manager](https://developer.motorolasolutions.com/community/android/emdk/profiles)

**Q: Will my app run across the entire MSI android portfolio?**

A: EMDK for Android is designed to be compatible with all Symbol devices, Android OS and BSPs. However, the compatibility of your application will depend on not just the EMDK architecture, but also on Google's SDK. See above for what versions were validated.

**Q: Can the EMDK for Android be used as a staging tool?**

A: The EMDK for Android is targeted for developers and the development of applications. Customers may develop an application which configures aspects of a device however the EMDK is not a staging tool.

**Q: I understand the EMDK for Android offers a feature called Profile Manager, what is this?**

A: The Profile Manager is provided as an Eclipse plug-in that offers developers a GUI development tool. The tool creates a "profile" which is comprised of "profile features" defined by the developer for value-add capabilities such as Barcode Scanning & MSR as well as device configuration features like Clock, Power, Certificates and Application Access. These features can then be invoked and modified within the applications through the Profile Manager API.

**Q: What are the benefits of the Profile Manager GUI and API?**

A: The Profile Manager GUI and APIs allow you to, quickly and easily leverage device value-add features. The user interface makes it easy for developers to pick and choose the features they need, eliminating the need to code these options. With the Profile Manager API, developers can invoke and modify features as needed within their application. This gives you the fine level of control you need while reducing development time, effort and errors.

**Q: Does the EMDK for Android offer APIs for direct control of device value adds?**

A: Yes, the since version 3.0 of EMDK for Android, traditional Java APIs have been made available to provide Barcode scanning abilities. Other device value adds may be provided using this mechanism in the future.

**Q: I understand that the EMDK for Android supports Intents; what is an Intent?**

A: An Intent is a standard Android inter-application messaging mechanism. For more information please see Google's documentation on Android Intent; http://developer.android.com/reference/android/content/Intent.html

**Q: How does Mobility Extensions (MX) relate to the EMDK for Android?**

A: The EMDK for Android provides developers with a programmatic interface to the MX value-add features on our devices. Future releases of the EMDK for Android will offer additional features as we continue to expand MX capabilities.

**Q: I have started developed of my application with the EMDK for Android, what are the features of the EMDK and what are my alternatives?**

A: The EMDK for Android is designed to expose MX value-add features and provides developers with a GUI tool to help reduce the development effort. Many of the device specific features such as Barcode scanning and MSR will be provided as part of the EMDK for Android. However standard Android APIs from Google such as Audio and Keyboard will not.
 
The intent of the EMDK is to provide developers with commonly required programmatic features for Line of Business applications. The EMDK for Android is meant to be used alongside the Google Android SDK to provide developers a comprehensive set of features without having to have a signed application. Below is a list of key features and there availability within the EMDK for Android and Google's Android SDK. This is meant to be used as a reference guide to provide clarity on when to use the EMDK versus the Android SDK. 


<table>
<tr>
<th>Feature</th>
<th>EMDK for Android</th>
<th>Google Android SDK</th>
</tr>
<tr>
<td>Barcode / Scanning</td>
<td> Data Capture Intent <br/>Barcode Profile<br/>Barcode API</td>
<td></td>
</tr>
<tr>
<td>Image Capture</td>
<td></td>
<td>android.hardware.camera</td>
</tr>
<tr>
<td>MagStripe Reader</td>
<td>Data Capture Intent<br/>MSR Profile</td>
<td></td>
</tr>
<tr>
<td>Wi-Fi Settings</td>
<td>Wi-Fi Profile</td>
<td>android.net.wifi.WifiManager <br/>android.net.wifi.p2p.WifiP2pManager</td>
</tr>
<tr>
<td>Fusion Settings</td>
<td>Wi-Fi Profile</td>
<td></td>
</tr>
<tr>
<td>Battery Mgt (Symbol.ResCoord)</td>
<td>Battery Intent</td>
<td>android.os.BatteryManager</td>
</tr>
<tr>
<td>Keyboard (Symbol.Keyboard)</td>
<td></td>
<td>android.inputmethodservice.Keyboard.Key</td>
</tr>
<tr>
<td>Battery Management</td>
<td>Battery Intent</td>
<td>android.os.BatteryManager</td>
</tr>
<tr>
<td>GPRS (APN) Settings</td>
<td>GPRS Profile</td>
<td></td>
</tr>
<tr>
<td>File management</td>
<td>Application Mgr Profile</td>
<td>java.io.File</td>
</tr>
<tr>
<td>Silent APK Install</td>
<td>Application Mgr Profile</td>
<td></td>
</tr>
<tr>
<td>Application White Listing</td>
<td>Access Mgr Profile</td>
<td></td>
</tr>
<tr>
<td>Display Attributes</td>
<td>Touch Profile Manager</td>
<td>android.view.Display</td>
</tr>
<tr>
<td>Audio Settings</td>
<td></td>
<td>android.media.AudioManager</td>
</tr>
<tr>
<td>Sensor (Symbol.Sensor)</td>
<td></td>
<td>android.hardware.SensorManager</td>
</tr>
<tr>
<td>Bluetooth Settings</td>
<td>Wireless Profile Manager</td>
<td>android.BluetoothAdapter</td>
</tr>
<tr>
<td>SQL Database Management</td>
<td></td>
<td>android.database.sqlite</td>
</tr>
<tr>
<td>NFC</td>
<td></td>
<td>android.nfc</td>
</tr>
<tr>
<td>Notifications</td>
<td></td>
<td>android.service.notification</td>
</tr>
<tr>
<td>Printing</td>
<td></td>
<td>android.print</td>
</tr>
<tr>
<td>XML Serialization</td>
<td></td>
<td>org.xmlpull.v1.XmlSerializer <br/> org.xml.sax</td>
</tr>
<tr>
<td>Interop Services</td>
<td></td>
<td>Java Native Interface</td>
</tr>
<tr>
<td>Threading</td>
<td></td>
<td>java.lang.Thread</td>
</tr>
<tr>
<td>Encryption</td>
<td></td>
<td>javax.crypto</td>
</tr>
<tr>
<td>Message Queue</td>
<td></td>
<td>android.os.MessageQueue</td>
</tr>
<tr>
<td>Network Communications</td>
<td></td>
<td>java.net.Socket</td>
</tr>
</table>

-->






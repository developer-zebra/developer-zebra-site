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

###Android Studio
Since Google released Android Studio, the ADT bundle is no longer available for download. You can still however use the ADT plugin for Eclipse with full EMDK For Android integration.  Users of Android Studio now have full access to the EMDK features as well. Check the [Setup Guide](../../guide/setup) for more details on how to use the EMDK in your preferred IDE.

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

**EMDK for Android v3.1 Update 1**

* New Profile Manager Features
	* [Audio Manager](../../guide/profiles/audio)-  allows you to manage enhanced audio volume control configurations
	* [Battery Manager](../../guide/profiles/battery)- allows the developer to modify that Decommission Threshold from its factory setting
	* [Component Manager](../../guide/profiles/component)- allows you to manage the state of Components, such as a devices Ethernet Port
	* [DHCP Manager](../../guide/profiles/dhcp)- allows you to control various DHCP configuration options.
	* [KeyMap Manager](../../guide/profiles/keymap)- allows you to remap functionality of keys.
* New Device Support
	* MC18 - KitKat
	* MC40 - KitKat
	* MC92 - KitKat
* New API's
	* [PersonalShopper APIs](../../api/personalshopper) for MC18
	* [NFC APIs](../../api/securenfc)
* New Guides
	* [Personal Shopper](../../guide/personalshopper)
	* [Secure NFC](../../guide/securenfc)

**EMDK for Android v3.1**

* TC55 KitKat and TC75 KitKat are now supported
* [Android Studio](../../guide/setupAndroidStudio) - EMDK for Android is now fully supported in Android Studio
* [SimulScan APIs](../../api/simulscan) - data capture solution to extract critical data from documents
* [Scan and Pair APIs](../../api/scanandpair) - easily pair to a bluetooth device through barcode scanning
* [Continuous Trigger mode](../../api/barcode/ScannerConfig-ReaderParams-ReaderSpecific-ContinuousRead/) - new aim type supported for continuous trigger
* [Name Value Pair API](../../api/core/ProfileManager) - new method for ProfileManager
* [Extended EMDK Results Enum](../../api/core/EMDKResults-EXTENDED_STATUS_CODE) - Further details available when processing profiles
* New Profile Manager Features
	* [Browser Manager](../../guide/profiles/browser)- configures web browser behavior
	* [Camera Manager](../../guide/profiles/camera)- control access to the cameras in the device
	* [Cellular Manager](../../guide/profiles/cellular)- configure options of the  cellular radio on your device
	* [DevAdmin Manager](../../guide/profiles/devadmin)-  manage configuration settings on the device
	* [Display Manager](../../guide/profiles/display)-  control the screen timeout value to conserve power
	* [Encrypt Manager](../../guide/profiles/encrypt)-  set encryption policies
	* [Powerkey Manager](../../guide/profiles/powerkey)-  control which options appear on the power menu
	* [SD Card Manager](../../guide/profiles/sdcard)-  manage the use of the devices SD card
	* [Threat Manager](../../guide/profiles/threat)-  Control what security threats a device actively monitors
* Support for Bluetooth scanners (RS507) in [Barcode API's](../../api/barcode/InterfaceConfig/) 

**EMDK For Android v3.0 Update 1**

* TC70 Support - Our first KitKat supported device
* EMDK for Android Device Runtime Update v3.0.4
* [Help Update](../../guide/abouthelp) - Instructions for updating your local documentation

**EMDK For Android v3.0**

* Native [Java Barcode Scanning APIs](../../api/barcode)
* New [EMDK Profiles](../../guide/profiles/usingwizard) features:
	* [Settings Manager](../../guide/profiles/settings) - turn on/off ability to invoke Enterprise Reset in settings UI
	* [Touch Manager](../../guide/profiles/touch) - set the device's touch mode
	* [UI Manager](../../guide/profiles/ui) - configure clipboard behavior
	* [USB Manager](../../guide/profiles/usb) - manage USB configurations behavior
	* [Wireless Manager](../../guide/profiles/wireless) - enable or disable Bluetooth
* Updated [EMDK Profiles](../../guide/profiles/usingwizard) features:
	* [Access Manager](../../guide/profiles/access) - new Whitelist features
	* [App Manager](../../guide/profiles/app) - new Dynamic Protected List ability
	* [Clock](../../guide/profiles/clock) - new NTP server synchronization
* New Tutorials
	* [Barcode Scanning API (Basic)](../../tutorial/tutBasicScanningAPI)
	* [Barcode Scanning API (Advanced)](../../tutorial/tutAdvancedScanningAPI)
	* [Invoke Enterprise Reset in Settings UI](../../tutorial/tutMxSettingsManager)
	* [Specify Touch Mode using Mx Touch Manager](../../tutorial/tutMxTouchManager)
	* [Configure Clipboard using Mx UI Manager](../../tutorial/tutMxUIManager)
	* [Manage USB Configurations](../../tutorial/tutMxUSBManager)
	* [Configure Bluetooth using Mx Wireless Manager](../../tutorial/tutMxWirelessManager)

## Components

### Profile Manager
The EMDK's exclusive [Profile Manager](../../guide/profiles/usingwizard) Technology is an additional advantage for developers giving you a GUI based development tool built on our open framework. This allows you to write fewer lines of code resulting in reduced development time, effort and errors. This innovative feature not only gives you easy access to critical functions such as bar code scanning and transaction processing via a magnetic stripe reader (MSR) but also functionality not available in Google's Android SDK.   
### EMDK Device Runtime
In order for your application to use the EMDK For Android, you will need to install the EMDK Device Runtime on each device. This runtime is included with the EMDK For Android installation. Check the [Programmers Guide](../../tutorial/tutdatacaptureprofile) for instructions. In the future the EMDK Services will be included with the default operating system for the device.

### Samples & Programmer's Guide
There are sample projects that are included as part of the EMDK For Android installation. You can import the project into Eclipse and run on your device. Look at the [Sample Guide](../../samples/data-capture) for more details on using these samples. You can also reference the [Programmers Guide](../../tutorial/tutdatacaptureprofile) for a complete walk-through of building your first EMDK For Android application.

### Java APIs
The EMDK for Android offers access to the device's Barcode capabilities through [traditional native Java Barcode APIs](../../api/barcode). Be sure to look at the [Barcode Scanning API tutorial.](../../tutorial/tutBasicScanningAPI)

### Intent APIs
The EMDK for Android will continue to support the [DataCapture](../../guide/reference/refdatacaptureintent) and [Battery Intent](../../guide/reference/refbatteryintent) APIs that were previously available on individual device types. 

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






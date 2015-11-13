# EMDK V 3.0 Release

## Overview

When applications require tight integration and performance, the EMDK for Android delivers the feature set and capabilities you have grown to expect from Symbol.

The EMDK V 3.0 provides developers with a comprehensive set of tools to easily create powerful line of business applications for enterprise mobile computing devices and is designed for use with Google's Android SDK and Android Development Tools (ADT). The EMDK for Android includes class libraries, sample applications with source code, as well as all of the associated documentation to help your applications take full advantage of what our devices have to offer.

The EMDK for Android V 3.0 has updated few of its existing features and introduced some new APIs and features with respective tutorials to configure Symbol devices.  

## Requirements
The following software must be installed prior to using the EMDK for Android V 3.0.

* Microsoft Windows 7 (32-bit and 64-bit)  or Microsoft&copy; Windows 8 (32-bit and 64-bit) or Microsoft&copy; Windows 8.1 (32-bit and 64-bit)
* Java Development Kit (JDK) v7u45 or higher
* Android Developer Tools (ADT) v22.3.0-887826 or higher

## Devices Supported
Although EMDK for Android V 3.0 has been designed to work with all Symbol mobile computers running Android, the following devices have been used for validation:

* MC32 - OS Update image v00002 or higher (JellyBean)
* MC40 - OS Update image v02.08.0520 or higher (JellyBean)
* MC67 - OS Update image v01.28.14 or higher (JellyBean)
* TC55 - OS Update image v01.74.00 or higher (JellyBean)
* TC70 - OS Update image v01.74.00 or higher (JellyBean)

## What's New

###New APIs and Features
The EMDK for Android V 3.0 offers following new APIs and features: 

* Native [Java Barcode Scanning APIs](https://developer.motorolasolutions.com/docs/DOC-2190#barcode-apis)

* New [EMDK Profiles](https://developer.motorolasolutions.com/docs/DOC-2169) features:
	* [Settings Manager](https://developer.motorolasolutions.com/docs/DOC-2646) - turn on/off ability to invoke Enterprise Reset in settings UI
	* [Touch Manager](https://developer.motorolasolutions.com/docs/DOC-2652) - set the device's touch mode
	* [UI Manager](https://developer.motorolasolutions.com/docs/DOC-2653) - configure clipboard behavior
	* [USB Manager](https://developer.motorolasolutions.com/docs/DOC-2647) - manage USB configurations behavior
	* [Wireless Manager](https://developer.motorolasolutions.com/docs/DOC-2654) - enable or disable Bluetooth

### Updated Features 
The EMDK for Android V 3.0 has following updated [EMDK Profiles](https://developer.motorolasolutions.com/docs/DOC-2169) features:

* [Access Manager](https://developer.motorolasolutions.com/docs/DOC-2283) - new Whitelist features
* [App Manager](https://developer.motorolasolutions.com/docs/DOC-2284) - new Dynamic Protected List ability
* [Clock](https://developer.motorolasolutions.com/docs/DOC-2286) - new NTP server synchronization

### New Tutorials
The EMDK for Android V 3.0 provides following new tutorials for you to take advantage of:

* [Barcode Scanning API (Basic)](https://developer.motorolasolutions.com/docs/DOC-2659)
* [Barcode Scanning API (Advanced)](https://developer.motorolasolutions.com/docs/DOC-2658)
* [Invoke Enterprise Reset in Settings UI](https://developer.motorolasolutions.com/docs/DOC-2662)
* [Specify Touch Mode using Mx Touch Manager](https://developer.motorolasolutions.com/docs/DOC-2663)
* [Configure Clipboard using Mx UI Manager](https://developer.motorolasolutions.com/docs/DOC-2672)
* [Manage USB Configurations](https://developer.motorolasolutions.com/docs/DOC-2664)
* [Configure Bluetooth using Mx Wireless Manager](https://developer.motorolasolutions.com/docs/DOC-2666)

###Sample Guide
The EMDK for Android V 3.0 provides sample projects that come as a part of EMDK V 3.0 Installation. You can go through this [Sample Guide](https://developer.motorolasolutions.com/community/android/emdk/samples), import the projects in your Eclipse and run them on your Symbol devices. 

## EMDK V 3.0 Components

### Profile Manager
The EMDK's exclusive [Profile Manager](https://developer.motorolasolutions.com/docs/DOC-2169#using-the-emdk-profile-manager) Technology is an additional advantage for developers giving you a GUI based development tool built on our open framework. This allows you to write fewer lines of code resulting in reduced development time, effort and errors. This innovative feature not only gives you easy access to critical functions such as bar code scanning and transaction processing via a magnetic stripe reader (MSR) but also functionality not available in Google's Android SDK.
   
### EMDK Device Runtimes
In order for your application to use the EMDK For Android, you will need to install the EMDK Device Runtime on each device. This runtime is included with the EMDK For Android installation. Check the [Programmers Guide](https://developer.motorolasolutions.com/docs/DOC-2184) for instructions. In the future the EMDK Services will be included with the default operating system for the device.

### Samples & Programmer's Guide
There are sample projects that are included as part of the EMDK For Android installation. You can import the project into Eclipse and run on your device. Look at the [Sample Guide](https://developer.motorolasolutions.com/community/android/emdk/samples) for more details on using these samples. You can also reference the [Programmers Guide](https://developer.motorolasolutions.com/docs/DOC-2184) for a complete walk-through of building your first EMDK For Android application.

### Java APIs
The EMDK for Android offers access to the device's Barcode capabilities through [traditional native Java Barcode APIs](https://developer.motorolasolutions.com/docs/DOC-2190#barcode-apis). Be sure to look at the [Barcode Scanning API tutorial.](https://developer.motorolasolutions.com/docs/DOC-2659)

### Intent APIs
The EMDK for Android will continue to support the [DataCapture](https://developer.motorolasolutions.com/docs/DOC-2191) and [Battery Intent](https://developer.motorolasolutions.com/docs/DOC-2192) APIs that were previously available on individual device types. 

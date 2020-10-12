---
title: About MX
layout: guide.html
---

## Overview

The MX Management System (MXMS) is an XML-based communication framework that provides a common interface for managing the capabilities and behaviors of Zebra Android devices. The XML documents used by the framework conform to the [Open Mobile Alliance specification for Client Provisioning](http://www.openmobilealliance.org/wp/) (OMA-CP) and the Microsoft [MSPROV DTD format](https://msdn.microsoft.com/en-us/library/bb737266.aspx) on which it's based ([read more](http://www.advancedinstaller.com/user-guide/wince-winmobile-xmlprov.html)). The framework affords developers and administrators an extensible, efficient, reliable and scalable means to configure and administer devices in their organization. MXMS exposes capabilities provided by the underlying CSPs on a device, which provide uniform access to privileged and unprivileged APIs. Each CSP exposes its capabilities using DSD files included with the MDM Toolkit. A DSD tool, loaded with the DSD files for a particular device or set of devices, can generate XML code that when sent to the MXMS running on the device, can change the devices' configuration and/or behavior.

-----

## Version History

The following section lists the major features and enhancements added to the MX versions indicated. 

### Added in MX 10.2

**MX 10.2 adds the following major features and enhancements**: 

* **New [Access Manager](/mx/accessmgr) features**: 
 * Enter the Token received from a caller 
* **New [Beacon Manager](/mx/beaconmgr) CSP**: 
 * Controls Bluetooth Low Energy beacon on mobile computers 
* **New [Bluetooth Manager](/mx/bluetoothmgr) features**: 
 * Configure single pairing of accessories 
 * Define trusted devices
 * Enhancements to silent pairing rules  
* **New [Clock](/mx/clock) features**: 
 * Enter date and time in local or Universal Coordinate format  
* **New [Display Manager](/mx/displaymgr) features**: 
 * Control automatic screen rotation 
 * Enable/disable adaptive brightness 
 * Set device brightness level  
* **New [KeyMapping Manager](/mx/keymappingmgr) features**: 
 * Support for additional key codes
* **New [License Manager](/mx/licensemgr) features**: 
 * Supports URI-based license sources 
* **New [Power Manager](/mx/powermgr) features**: 
 * Enable/disable/configure battery saver options 
* **New [PowerKey Manager](/mx/powerkeymgr) features**: 
 * Set touch mode options 
* **New [Touch Manager](/mx/touchmgr) features**: 
 * Support and control latest Zebra devices   
* **New [UI Manager](/mx/uimgr) features**: 
 * Show/hide percentage of battery charge on screen 
* **New [Wi-fi](/mx/wifi) features**: 
 * Configure Fine Timing Measurement  
 * Control encryption options

### Added in MX 10.1

**MX 10.1 adds the following major features and enhancements**: 

* **Enhanced [Display Manager](/mx/displaymgr)** now allows an admin to:
 * Control device-screen orientation (automatic rotation on/off)
* **Enhanced [File Manager](/mx/filemgr)** now allows an admin to configure the following file upload actions:
 * Enter a target URI
 * Enter source path and file name
 * Select the upload order (oldest or newest first, or alpha-sorted by file name)
 * Delete source file(s) after uploading
 * Name uploaded files using a naming pattern
 * Replace the destination file with source if duplicate name
 * Skip copying and remove file from the source
 * Skip copying and keep file at the source
* **Enhanced [Power Manager](/mx/powermgr)** now allows an admin to:
 * Control state of Battery Saver mode (on/off)
 * Control Battery Saver Control mode (automatic/manual)
 * Set Battery percentage of charge to automatically turn Battery Saver Mode on
* **Enhanced [UI Manager](/mx/uimgr)** now allows an admin to:
 * Control Battery Percentage display in status bar (show/hide)

-----

### Added in MX 10.0

**MX 10.0** adds the following major features and enhancements: 

* **Enhanced [Power Manager](/mx/powermgr)** now allows an admin to: 
 * OS Upgrade via streaming (full-package upgrade only using http or https; supported on Android 10 and later)
 * OS Downgrade via streaming (full-package downgrade only using http or https; supported on Android 10 and later)
* **Enhanced [Access Manager](/mx/accessmgr)** now allows an admin to: 
 * Auto-grant permissions to an app to prevent permission "pop-up" to appear on device
 * Designate a CSP as "Protected" from unauthorized use 
 * Designate a Function Group (features selected from different CSPs) as "Protected" from unauthorized use

-----

### Added in MX 9.3

* **Enhanced [File Manager](/mx/filemgr)** now allows an admin to:
 * Download a file or files from a redirected URL (i.e. Tiny URL)
 * Download a file from multiple redirected URLs
* **Enhanced [App Manager](/mx/appmgr)** now allows an admin to control background data usage on a per-application basis. 
* **Enhanced [Bluetooth Manager](/mx/bluetoothmgr)** now allows silent pairing using a Bluetooth MAC address or PIN. 
* **Enhanced [GPRS Manager](/mx/gprsmgr)** APN parameters now support IPv4, IPv6 and the IPv4/IPv6 "dual-stack" protocol.  
* **Enhanced [KeyMapping Manager](/mx/keymappingmgr)** now supports the "grey" key and W1 and W2 buttons.  

-----

### Added in MX 9.2

* **Enhanced [Power Manager](/mx/powermgr)** now allows an admin to control individual hardware wake up methods (buttons, keycodes) 
* **Enhanced [Display Manager](/mx/displaymgr)** now allows an admin to control device font and display size. 
* **Enhanced [Access Manager](/mx/accessmgr)** can now: 
 * Prevent one application from stopping another without explicit permission 
 * Perform remote device troubleshooting with enhanced visibility and control
* **Enhanced [Cellular Manager](/mx/cellularmgr)** implements several new device locking mechanisms. 
* **Enhanced [Keymapping Manager](/mx/keymappingmgr)** now supports: 
  * Intent extras 
  * "Rotate" and "minus" keys 

-----

### Added in MX 9.1

* **Enhanced [UI Manager](/mx/uimgr)** now allows an admin to:
 * Control whether password characters are displayed briefly on the screen as they're entered (otherwise masked at all times)
* **Enhanced [App Manager](/mx/appmgr)** now allows an admin to:
 * Erase all data created by an app specified in the Package parameter
* **Enhanced [Power Manager](/mx/powermgr)** now allows an admin to:
 * Select hardware signals as the device wake-up method
 * Select mappable keycodes as the device wake-up method 
* **Enhanced [GMS Manager](/mx/gmsmgr)** now allows an admin to:
 * Select and enable a subset of GMS apps and services to run on a device (i.e. Chrome browser, Google Maps, Firebase Cloud messaging)

-----

### Added in MX 9.0

* **Enhanced [Battery Manager](/mx/batterymgr)** now allows an admin to:
 * Specify a critically low battery threshold
* **Enhanced [UI Manager](/mx/uimgr)** now allows an admin to:
 * Control user access to the Large Key Indicator (MC93 device only)
 * Turn the Large Key Indicator on or off (MC93 device only)

-----

### Added in MX 8.4 

* **Enhanced [GPRS Manager](/mx/gprsmgr)**  now allows an admin to:
 * Specify the Mobile Virtual Network Operator (MVNO) type for an Access Point Name (APN)
 * Specify APN MVNO Match Data
* **Enhanced [UI Manager](/mx/uimgr)**  now allows an admin to:
 * Control user access to the On-Screen Power Button
 * Control user access to the Status Bar
* **Enhanced [Wi-Fi](/mx/wifi) CSP** can now enable/disable:
  * Aggregated MAC Protocol Data Unit (AMPDU)
  * Gratuitous ARP address resolution protocol
  * 2g Channel Bonding (40MHz-wide channel in 2.4GHz band)
  * Configuration of Extended WLAN settings

-----

### Added in MX 8.3

* **New [NFC Manager](/mx/nfcmgr)** CSP adds these new capabilities:  
   * **Enable/Disable**: 
    * NFC radio and its ability to communicate
    * NFC Data Exchange Format
    * Peer-to-Peer mode
    * CPU boost mode
    * Card Emulation mode
    * NFC usage when the Android "lock screen" is displayed
 * Select type A, B, F, or V tags for use
 * Select communication speed for Types A and B cards (TC55)
 * Select communication speed for ISO 14443-4 cards (TC75)
 * Select the Polling mode to balance performance with battery usage
 * Reset device to default NFC settings
* **Enhanced [Access Manager](/mx/accessmgr)** adds these new features:
 * Select the Action to perform for Access to Protected Services
 * Specify a Service Identifier for a Service
 * Specify Package Name of a Service Caller
 * Specify a File name for the Signature of a Caller
* **Enhanced [Cellular Manager](/mx/cellularmgr)** adds this new feature:
 * Specify an APN authentication type
* **Enhanced [KeyMapping Manager](/mx/keymappingmgr)** added this new feature:
 * Select a key behavior for 'Diamond' mode
* **Enhanced [Wi-Fi](/mx/wifi) CSP** adds this new feature:
 * Enable/Disable Wi-Fi verbose logging
* **Enhanced [File Manager](/mx/filemgr)** can download and expand archive files by from a local PC or a server

-----

### Added in MX 8.2

* **Enhanced [UI Manager](/mx/uimgr)** adds these new features: 
 * Enable/disable long-press on HOME key
 * Enable/disable date in Notification panel
 * Enable/disable long press on Recent Apps header icon to control access to app info

----

### Added in MX 8.1

* **Enhanced [Power Manager](/mx/powermgr)** adds these new actions:
 * Specify an on-device file to verify an OS update
 * Specify whether to suppress auto-reboot following an A/B upgrade
* **Enhanced [Battery Manager](/mx/batterymgr)** adds these new actions:
 * Enable/disable use of Battery Swap Mode UI
 * Enable/disable “battery charging” LED
* **Enhanced [Bug Report Manager](/mx/bugreportmgr)** adds a new action:
 * Specify a time before expiration (in days) to store or email bug reports or send them to the cloud 
* **Enhanced [Cellular Manager](/mx/cellularmgr)** adds these new actions:
 * Enable/disable user access to public land mobile network (PLMN) a device uses
 * Specify the MCC/MNC network PLMN LockSet
 * Show/hide PLMN lock UI
 * Determine the status of PLMN lock UI
 * Enable/disable Dual SIM Standby
 * Get the status of DSDS
* **Enhanced [DHCP Option Manager](/mx/dhcp)** adds these new actions:
 * Enable/disable requests for a custom DHCP option from server
 * Request or disable a specified DHCP Option
 * Enable/disable sending of a custom DHCP Option to server
 * Send or disable a specified DHCP Option
 * Send a value with a specified custom DHCP Option
* **Enhanced [License Manager](/mx/licensemgr)** adds these new actions:
 * Specify an Activation ID to return a license from the device
 * Specify server friendly name for returning one or all licenses and for deleting license source
 * Select the license source type to be used to return one or all licenses
* **Enhanced [Settings Manager](/mx/settingsmgr)** adds these new actions:
 * Enable/disable the slide out drawer for accessing Android system settings
* **Enhanced [UI Manager](/mx/uimgr)** adds these new actions: 
 * Enable/disable Split Screen mode
 * Enable/disable Do Not Disturb mode
 * Enable/disable Multi-user mode
* **Enhanced [Wi-Fi](/mx/wifi)** adds these new actions:
 * Enable/disable MAC address randomization
 * Enable/disable Call Admission Control
 * Enable/disable user control of Hotspot state (active/inactive)

 -----

### Added in MX 8.0

* **Enhanced [App Manager](/mx/appmgr)** adds these new actions:  
 * Clear Application Cache 
 * Enable/disable All GMS Applications on the "Safe to Disable" list
* **Enhanced [License Manager](/mx/licensemgr)** adds these new actions: 
 * Select a licensing file to be embedded in the XML
 * Select a pre-activated license source 
 * Query product-specific license information
 * Specify product name to be queried
 * Select the method used to supply the license .bin file
* **Enhanced [Power Manager](/mx/powermgr)** adds a new action:
 * Enable/disable PTT and scan buttons to wake the device from suspend mode 
* **Enhanced [Settings Manager](/mx/settingsmgr)** adds a new action: 
 * Enable/disable tethering and portable hotspot features
* **Enhanced [UI Manager](/mx/uimgr)** adds these new actions:
 * Enable/disable the Magnification Gesture
 * Show/hide the Virtual KeyBoard while Physical Keyboard is active
* **New [AutoTrigger Manager](/mx/autotriggermgr) CSP** is used to configure automatic scan-triggering, which initiates scanning when a scan target is brought within proximity of the device sensor. Currently supports the Zebra PS20 Personal Shopper device only.
* **New [DeviceCentral Manager](/mx/devicecentralmgr) CSP** allows configuration of settings on the device for Zebra Device Central, an enterprise tool for viewing connection state, battery status, firmware version and other device conditions from a central console.
* **New [Fota Manager](/mx/fotamgr) CSP** controls the Firmware Over The Air (FOTA) Client on the device, allowing administrators to perform OS updates on Zebra devices without a physical connection. The FOTA Client app comes preinstalled on supported devices and is configured to communicate with the Zebra update server.

<br>

#### See the [MX Feature Matrix](/mx) for complete feature lists 

-----

## Definition of Terms

### Android Open Source Project (AOSP)

AOSP is the method that Google uses to release and distribute the source code for the Android Operating System for royalty-free use by the open source community. OEMs are free to use, modify, and extend AOSP as needed, subject to certain standard licensing requirements. Each BSP for any of the Zebra Android devices includes an operating system that was derived--directly or indirectly--from AOSP. These BSPs also generally include modifications and/or enhancements beyond AOSP that provide additional value to Zebra customers.

### Board Support Package (BSP)

A BSP is the method used by Zebra device teams to deliver the operating system for Zebra devices. Every device ships with a specific BSP version--reported via the "Build number" field--pre-installed that is suitable for use on that device model. The BSP version that ships in devices of a particular model may or may not be updated when a new BSP becomes available for that device model. A BSP generally can be updated by downloading a newer (or sometimes older) BSP from the Zebra support website and applying it to the device via the OS Update Process for that device.

### Configuration Service Provider (CSP)

A CSP is a device code module that implements the ability to set and query the configuration of a subsystem on a device (e.g. Clock, Wi-Fi, etc.). The capabilities that are supported and exposed by a CSP are defined by a corresponding DSD. 

A CSP is a plug-in to the MXMF which can ship as part of the MXMF, be included in a BSP along with the MXMF, or be downloaded to a device as needed. Before it can be used on a device, a CSP must be registered with the MXMF on that device and all calls to a CSP must go through the MXMF. The MXMF and CSPs communicate through XML files that conform to the **XML.DTD**, as described in the **MX MF XML DTD** document.

### Document Type Definition (DTD)

A DTD is a standards-based non-XML document that defines the syntax of a class of related XML documents. It is used to enter the elements that are allowed to appear within all XML documents that are used for a specific purpose. 

The following DTDs are used by the MXMF:

* **XML.DTD** (described in the document **MX MF XML DTD**)
	* This DTD defines the syntax of XML Documents that can be consumed by CSPs that registered with the MXMF and that can be used to set and query the configuration of the device systems associated with those CSPs
* **DSD.DTD** (described in the document **MX MF DSD DTD**)
	* This DTD defines the syntax of DSD documents that are used to define the capabilities of CSPs

### Document Semantics Definition (DSD)

A DSD is an XML document that conforms to the **DSD.DTD** as described in the document **MX MF DSD DTD**, and that corresponds to and describes the capabilities of a CSP. It is used by tools to enable programmatic generation of XML that can then be consumed by a CSP. Some examples of these tools are EMDK Profile Manager, StageNow, and MDM Console.

A DSD is created and maintained by the author of a CSP and each CSP must have a corresponding DSD that must be supplied when the CSP registers with the MXMF. A CSP and its corresponding DSD should generally be produced, maintained, and distributed together.

### Mobility Extensions (MX)

MX is the umbrella term used to refer collectively to the experience and configuration capabilities offered by Zebra Android devices. MX represents all the value that a BSP offers over and above that provided by the Android operating system, including:

* Changes and extensions to the Android OS (implemented by Zebra OSX)
* Value-Add features such as key mapping and threat management
* The MX Management Framework (MXMF)
* Configuration Service Providers (CSPs)
* Changes and extensions to standard applications (i.e. Settings UI, Browser, Email Client, etc.)

### MX Management Framework (MXMF)

MXMF is a device subsystem that provides an interface to applications that wish to set or query the configuration of device subsystems. It does not directly implement any set or query functions, but provides a framework that supports and hosts CSPs that do so. MXMF can be built into a BSP or can be added to a BSP after a device is shipped (via a patch applied via the OS update process). Applications and the MXMF communicate through an interchange of XML files that conform to the **XML.DTD**, as described in the **MX MF XML DTD** document.

### Operating System Extensions (OSX)

OSX is the term used to refer to a Zebra-proprietary implementation of changes and extensions to the standard AOSP as included in a BSP. The version of OSX in a device is the primary way to determine which changes and extensions are present in the operating system of that device. **The root OSX version number always matches the root number of the Android version that it extends**. For example, Android 5.x would always be extended by OSX 5.x. As a general rule, the version of OSX in a device can be changed ONLY by loading a different BSP (containing a different version of OSX) into that device using the OS update process. 

### MX Management System (MXMS)

MXMS is a term used to refer to the MXMF and all CSPs that are registered with the MXMF at a given point in time. It provides the ability to set and/or query the configuration of the device subsystems for which CSPs are registered with MXMF. Two types of CSPs are included:

* CSPs that are built into the MXMF, such as the CertMgr CSP
* CSPs that are built into a device and pre-registered with MXMF, such as the Wi-Fi CSP

MXMS can be thought of as "the MXMF and a collection of currently registered CSPs." Although applications submit XML to the MXMF, it is more accurate to describe the MXMS (not just the MXMF) as the entity through which applications set and/or query configuration settings.

>**Note:** All components described above may or may not be present on a device. Specifically, MXMF and the CSPs may be absent. Therefore, some or all of the components required for the device might need to be installed before they could be configured.

### Multi-user Capabilities

**Zebra devices and MX support Android Multi-user capabilities** with the following provisions: 

* **MX works <u>only</u> in the Primary user/profile** and <u>never</u> in a secondary user/profile. 
* If Android Multi-user mode is enabled and a secondary user is created, **MX will fail if invoked in the secondary user**. 
* Secondary users inherit settings applied using MX in the Primary user. If a Work Profile is created (by enrolling a Profile Owner), MX fails if invoked in the Work Profile but the Work Profile inherits settings applied using MX in the Primary user's profile. 

### Operating System Extensions (OSX)

OSX is the term used to refer to a Zebra-proprietary implementation of changes and extensions to the standard AOSP as included in a BSP. The version of OSX in a device is the primary way to determine which changes and extensions are present in the operating system of that device. **The root OSX version number always matches the root number of the Android version that it extends**. For example, Android 5.x would always be extended by OSX 5.x. As a general rule, the version of OSX in a device can be changed ONLY by loading a different BSP (containing a different version of OSX) into that device using the OS update process. 

-----

## MX Architecture and Data Flow

System components:

* MXMS
	* MXMF
	* CSPs
		* Unprivileged
		* Privileged
	* AOSP APIs
		* Unprivileged
		* Privileged
	* OSX APIs
		* Privileged
	* Core Applications

### Overview
![img](architecture-overview.PNG)

### Android Device BSP

![img](architecture-bsp.PNG)


## MX on Devices

The MX version on a specific device can be effected by:

* OS Updates
* EMDK for Android Device Runtime Updates

While new CSPs can be introduced with each version of MX, and pre-existing CSPs can receive new capabilities, MX updates will not generally remove or change pre-existing behaviors or capabilities unless specifically noted.

-----

Related guides: 

* [Which version of MX/OSX is installed?](/mx/mx-version-on-device)

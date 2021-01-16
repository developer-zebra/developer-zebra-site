---
title: StageNow 3.1
layout: guide.html
product: StageNow
productversion: '3.1'
languages:
  - lang: 'ch'
	label: 'Chinese'

---

StageNow 3.1 User Guide, Revision A; StageNow MN001501A12; October, 2018

#### Covers StageNow 3.1.x and higher

## Overview

This guide provides the staging administrator with instructions for using StageNow 3.1 to create XML-based profiles for staging devices.

### Prerequisites
The following software must be installed on the staging workstation prior to using StageNow:

* **Windows 7, 10 Pro** (English or Chinese)
* **A supported web browser**:
 * Firefox 29 or higher
 * Google Chrome 35 or higher 
 * Internet Explorer 9 or higher

-----

### Sections of This Guide

* [Installing StageNow](../installing) provides instructions for installing, uninstalling, and upgrading the StageNow staging solution, including system requirements.

* [Getting Started](../gettingstarted) describes the StageNow solution, including information about users, use cases and supported devices.

* [Profiles](../stagingprofiles) provides information about StageNow Wizards, which allow the staging administrator to define software configurations and installation scenarios for enterprise devices.

* [Profile Wizards](../ProfileWizards) describes how to use the profile-creation Wizards.

* [Settings](../settingconfig) provides information for the staging administrator about configuring and managing settings for use in profile creation.

* [Setting Types](../settingtypes) lists the parameters and values available when creating settings.

* [Device Staging](../stageclient) provides information for the staging operator about selecting a profile for configuring the target devices and deploying the profile material to the devices.

* [Troubleshooting](../troubleshooting) describes errors that can occur in the StageNow Tool and provides possible solutions.

-----

## What's New in v3.1

### Device Support

> **StageNow supports all Zebra devices running Android 4.x KitKat and later with MX 4.3 or higher**.

**StageNow v3.1 has been validated on devices with the following operating systems and MX versions**: 

* Android 8.x Oreo
* Android 7.x Nougat
* Android 6.x Marshmallow
* MX 8.2
* MX 8.1
* MX 8.0
* MX 7.2
* MX 7.1
* MX 7.0
* MX 6.3
* MX 6.2
* MX 6.1
* MX 6.0

> **IMPORTANT NOTE**:<br> 
> <u>**StageNow 3.1 has been validated only on devices running Android 6.x Marshmallow and newer**</u>.<br>Validation is no longer performed on devices running Android 5.x Lollipop or older.

-----

### New Features

### Enhanced User experience

**Xpert mode Enhancements**
* Profiles can now be edited as soon as steps/settings are viewable
* Profiles can be saved after clicking the "Continue" button the first time 
* A new “Cancel Changes” option reverts all changes to their original values
* An additional field was added for entering "user-friendly" step descriptions to help during profile review 

**Support for MX 8.2** provides the following enhancements:

* **Enhanced [UI Manager](../csp/uimgr)** adds these new features: 
 * Enable/disable long-press on HOME key
 * Enable/disable date in Notification panel
 * Enable/disable long press on Recent Apps header icon to control access to app info

**Support for MX 8.1** provides the following enhancements:
* **Enhanced [Power Manager](../csp/powermgr)** adds these new actions:
 * Specify an on-device file to verify an OS update
 * Specify whether to suppress auto-reboot following an A/B upgrade
* **Enhanced [Battery Manager](../csp/batterymgr)** adds these new actions:
 * Enable/disable use of Battery Swap Mode UI
 * Enable/disable “battery charging” LED
* **Enhanced [Bug Report Manager](../csp/bugreportmgr)** adds a new action:
 * Specify a time before expiration (in days) to store or email bug reports or send them to the cloud 
* **Enhanced [Cellular Manager](../csp/cellularmgr)** adds these new actions:
 * Enable/disable user access to public land mobile network (PLMN) a device uses
 * Specify the MCC/MNC network PLMN LockSet
 * Show/hide PLMN lock UI
 * Determine the status of PLMN lock UI
 * Enable/disable Dual SIM Standby
 * Get the status of DSDS
* **Enhanced [DHCP Option Manager](../csp/dhcp)** adds these new actions:
 * Enable/disable requests for a custom DHCP option from server
 * Request or disable a specified DHCP Option
 * Enable/disable sending of a custom DHCP Option to server
 * Send or disable a specified DHCP Option
 * Send a value with a specified custom DHCP Option
* **Enhanced [License Manager](../csp/license)** adds these new actions:
 * Specify an Activation ID to return a license from the device
 * Specify server friendly name for returning one or all licenses and for deleting license source
 * Select the license source type to be used to return one or all licenses
* **Enhanced [Settings Manager](../csp/settingsmgr)** adds these new actions:
 * Enable/disable the slide out drawer for accessing Android system settings
* **Enhanced [UI Manager](../csp/uimgr)** adds these new actions: 
 * Enable/disable Split Screen mode
 * Enable/disable Do Not Disturb mode
 * Enable/disable Multi-user mode
* **Enhanced [Wi-Fi](../csp/wifi)** adds these new actions:
 * Enable/disable MAC address randomization
 * Enable/disable Call Admission Control
 * Enable/disable user control of Hotspot state (active/inactive)
* **New [AutoTrigger Manager](../csp/autotriggermgr) CSP** is used to configure automatic scan-triggering, which initiates scanning when a scan target is brought within proximity of the device sensor. Currently supports the Zebra PS20 Personal Shopper device only. 
* **New [DeviceCentral Manager](../csp/devicecentralmgr) CSP** allows configuration of settings on the device for Zebra Device Central, an enterprise tool for viewing connection state, battery status, firmware version and other device conditions from a central console.
* **New [Fota Manager](../csp/fotamgr) CSP** controls the Firmware Over The Air (FOTA) Client on the device, allowing administrators to perform OS updates on Zebra devices without a physical connection. The FOTA Client app comes preinstalled on supported devices and is configured to communicate with the Zebra update server.

> **IMPORTANT NOTE**:<br> 
> <u>**StageNow 3.1 supports devices running Android 6.x Marshmallow and newer only**</u>.<br>Support for Android 5.x Lollipop (and older) is discontinued in StageNow 3.1.

-----

## Version History

### Added in v3.0

**Support for Chinese language**. The StageNow tool and device client now support localization for the Chinese language and Chinese version of Windows. 

**TechDocs Chinese**. TechDocs, the technical documentation site for Zebra solutions, now offers a language selector for StageNow in the upper-right corner of the English-language screen. **Note**: The selector disappears after selecting the Chinese language. 

**Support for server-based device staging on devices with MX 4.4 and higher**.<br>
**IMPORTANT**: Network transport protocols are subject to the following MX dependencies: 
* **MX 4.4+ - FTP only**
* **MX 7.0+ - HTTP/HTTPS** 
* **MX 7.1+ - FTPS**

**Supports MX v8.0**, adding the following features:
* **Enhanced [App Manager](../csp/app)** adds these new actions:  
 * Clear Application Cache 
 * Enable/disable All GMS Applications on the "Safe to Disable" list
* **Enhanced [License Manager](../csp/license)** adds these new actions: 
 * Select a licensing file to be embedded in the XML
 * Select a preactivated license source 
 * Query product-specific license information
 * Specify product name to be queried
 * Select the method used to supply the license .bin file
* **Enhanced [Personal Dictionary](../csp/personaldictionary)** now accepts shortcuts when bulk-adding terms from a file.
* **Enhanced [Power Manager](../csp/power)** adds a new action:
 * Enable/disable PTT and scan buttons to wake the device from suspend mode 
* **Enhanced [Settings Manager](../csp/settingsmgr)** adds a new action: 
 * Enable/disable tethering and portable hotspot features
* **Enhanced [UI Manager](../csp/ui)** adds these new actions:
 * Enable/disable the Magnification Gesture
 * Show/hide the Virtual KeyBoard while Physical Keyboard is active

**Supports Windows 10 Pro** (English and Chinese)

-----

### Added in v2.10

* The [Wipe a Device guide](../Profiles/wipedevice) now includes instructions for bypassing the Android Setup Wizard following an Enterprise Reset. 

* **External Staging Server Support**
 * Staging and deployment content can now be hosted on a server or system other than the StageNow workstation
 * An external staging server can use FTP, FTPS, HTTP or HTTPS protocols 

* **Zebra VC80 devices can now be staged using a serial scanner (RS232)**

* **When staging Zebra TC20/TC25 devices, administrators can now prevent Analytics Manager from being disabled**

* **[Support for MX 7.2](../stagingprofiles/#mxselection)** adds the following Setting Types and features:

* [Audio Manager](../csp/audiomgr) new CSP:
 * Controls whether audio on a device plays only through a connected handset or through the handset and the built-in device speaker (supported on the Zebra VC80x only).
* [Display Manager](../csp/display) new feature:
 * On VC80 devices, adds the ability to force the display to “Stay Awake” and remain on.
* [Power Manager](../csp/power) new feature:
	* Turn ON/OFF “Doze Mode” energy saving features on the device. When enabled, only specially designated apps can prevent the device from entering a low-power state to preserve battery life. 
* [Remote Scanner Manager](../csp/rsm) new feature:
 * Supports RS-507 and DS-3608 scanners
* [Settings Manager](../csp/settingsmgr) new feature:
 * Enable/Disable application notification control on devices running Android Nougat

-----

### Additional information

**Included in the StageNow 3.0 download package**: 

* `staging_solution_signed.3.0.exe` - StageNow v3.0 Tool Installable 

* `StagingInstallGuide_V3.0.pdf` - StageNow v3.0 Install Guide 

### Compatibility Notes
 
* See the full list of [Zebra Android devices that support StageNow 3.0](../gettingstarted/)

* Zebra devices running Android Nougat and Marshmallow ship with the StageNow Client and support all device configuration options offered by the StageNow tool.

* The MX features supported by a given device depends on the versions of Android, OSX, and MX versions in the device BSP. Refer to the [MX feature matrix](/mx/compatibility/) to determine features supported by devices in your organization.    
 
* The free StageNow application can be downloaded and installed on any Windows 7 PC with no pre-requisite software and with no need to purchase, locate, license or install other components. 

-----


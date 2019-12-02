---
title: StageNow 3.0
layout: guide.html
product: StageNow
productversion: '3.0'
languages:
  - lang: 'ch'
	label: 'Chinese'

---

StageNow 3.0 User Guide, Revision A
#### Covers StageNow 3.0.x and higher

StageNow MN-003004 

April 20, 2018

## Overview

This guide provides the staging administrator with instructions for using StageNow 3.0 to create XML-based profiles for staging devices.

### Prerequisites
The following software must be installed on the staging workstation prior to using StageNow:

* **Windows 7, 10 Pro** (English or Chinese)
* **A supported web browser**:
 * Firefox 29 or higher
 * Google Chrome 35 or higher 
 * Internet Explorer 9 or higher

-----

### Device Support

> **StageNow supports all Zebra devices running Android 4.x KitKat and later with MX 4.3 or higher**.

**StageNow v3.0 has been validated on devices with the following operating systems and MX versions**: 

* Android Nougat
* Android Marshmallow
* Android Lollipop
* Android KitKat
* MX 8.0
* MX 7.2
* MX 7.1
* MX 7.0
* MX 6.3
* MX 6.2
* MX 6.1
* MX 6.0
* MX 5.2
* MX 5.1

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

## New in v3.0

**Support for Chinese language**. The StageNow tool and device client now support localization for the Chinese language and Chinese version of Windows. 

**Techdocs Chinese**. Techdocs, the technical documentation site for Zebra solutions, now offers a language selector for StageNow in the upper-right corner of the English-language screen. **Note**: The selector disappears after selecting the Chinese language. 

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

## Version History

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

* Zebra devices running Android Nougat, Marshmallow, Lollipop, KitKat and Jelly Bean that ship with the StageNow Client support all device configuration options offered by the StageNow tool.

* The MX features supported by a given device depends on the versions of Android, OSX, and MX versions in the device BSP. Refer to the [MX feature matrix](/mx/compatibility/) to determine features supported by devices in your organization.    
 
* The free StageNow application can be downloaded and installed on any Windows 7 PC with no pre-requisite software and with no need to purchase, locate, license or install other components. 

-----


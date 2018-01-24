---
title: StageNow 2.10
layout: guide.html
product: StageNow
productversion: '2.10'
---

StageNow 2.10 User Guide, Revision A

StageNow MN-002910 

January, 2018

## Introduction

#### This guide covers StageNow 2.10.x and higher. 

This guide provides the staging administrator with instructions for using StageNow 2.10 to create profiles for staging devices.

### Supported Web Browsers

* Firefox 29 or newer

* Google Chrome 35 or newer 

* Internet Explorer 9 or newer

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

## New in v2.10

### Important News 

* StageNow 2.10 no longer supports the OSupdatepackage for Jelly Bean or KitKat devices.
* The StageNow update file for devices running Android Lollipop and higher is distributed with the latest BSP or security incremental patch for the specific device(s). 

### New Features

* **External Staging Server Support**
 * Staging and deployment content can now be hosted on a server or system other than the StageNow workstation
 * An external staging server can use FTP, FTPS, HTTP or HTTPS protocols 

* **Zebra VC80 devices can now be staged using a serial scanner (RS232)**

* **When staging Zebra TC20/TC25 devices, administrators can now prevent Analytics Manager from being disabled**

* **Support for MX 7.2** adds the following Setting Types and features:

* [Audio Manager](../mx/audio) new CSP:
 * Controls whether audio on a device plays only through a connected handset or through the handset and the built-in device speaker (supported on the Zebra VC80x only).
* [Display Manager](../mx/displaymgr) new feature:
 * On VC80 devices, adds the ability to force the display to “Stay Awake” and remain on.
* [Power Manager](../mx/powermgr) new feature:
	* Turn ON/OFF “Doze Mode” energy saving features on the device. When enabled, only specially designated apps can prevent the device from entering a low-power state to preserve battery life. 
* [Remote Scanner Manager](../mx/remotescannermgr) new feature:
 * Supports RS-507 and DS-3608 scanners
* [Settings Manager](../mx/settingsmgr) new feature:
 * Enable/Disable application notification control on devices running Android Nougat

**StageNow v2.10 now supports these operating systems and extensions**: 

* Android Nougat
* Android Marshmallow
* Android Lollipop
* Android KitKat
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

### Additional information

**Included in the StageNow 2.10 download package**: 

* `staging_solution_signed.2.10.exe` - StageNow v2.10 Tool Installable 

* `StagingInstallGuide_V2.10.pdf` - StageNow v2.10 Install Guide 

### Compatibility Notes
 
* See the full list of [Zebra Android devices that support StageNow 2.10](http://techdocs.zebra.com/stagenow/2-10/gettingstarted/)

* Zebra devices running Android Nougat, Marshmallow, Lollipop, KitKat and Jelly Bean that ship with the StageNow Client support all device configuration options offered by the StageNow tool.

* The MX features supported by a given device depends on the versions of Android, OSX, and MX versions in the device BSP. Refer to the [MX feature matrix](http://techdocs.zebra.com/mx/compatibility/) to determine features supported by devices in your organization.    
 
* The free StageNow application can be downloaded and installed on any Windows 7 PC with no pre-requisite software and with no need to purchase, locate, license or install other components. 

-----


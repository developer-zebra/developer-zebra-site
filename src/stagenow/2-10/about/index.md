---
title: StageNow 2.10
layout: guide.html
product: Stagenow
productversion: '2.10'
---

StageNow 2.10 User Guide, Revision A


## Introduction
This help file provides the staging administrator instructions for using StageNow 2.10 to create profiles to use for staging devices.

#### This guide covers StageNow 2.10.x and higher. 

## Supported Web Browsers

* Firefox 29 or newer

* Google Chrome 35 or newer 

* Internet Explorer 9 or newer

## Section Descriptions
Topics covered in this guide:

* [Installing StageNow](../installing) provides instructions for installing, uninstalling, and upgrading the StageNow Staging Solution, including system requirements.

* [Getting Started](../gettingstarted) describes StageNow and includes information on users, use cases, and devices supported.

* [Profiles](../stagingprofiles) provides information on the StageNow Wizards which allow the staging administrator to define software configuration and installation for enterprise devices.

* [Profile Wizards](../ProfileWizards) describes how to use each available profile creation Wizard.

* [Settings](../settingconfig) provides information for the staging administrator on configuring and managing settings for use in creating profiles.

* [Setting Types](../CSPreference) lists the parameters and values available when creating settings.

* [Device Staging](../stageclient) provides information for the staging operator on selecting a profile for configuring the target devices, and deploying the profile material to the devices.

* [Troubleshooting](../troubleshooting) discusses errors that can occur in the StageNow Tool, and possible solutions.

## New in StageNow 2.10

### IMPORTANT NEWS 

* StageNow 2.10 no longer supports the OSupdatepackage for Jelly Bean (JB) or KitKat (KK) devices.
* The StageNow update file for devices running Android Lollipop and higher will be distributed with the latest BSP or security incremental patch for the specific device(s). 

### New Features

**External Staging Server Support**
* Staging and deployment content can now be hosted on a server or system other than the StageNow workstation
* An external staging server can use FTP, FTPS, HTTP or HTTPS protocols 

**Zebra VC80 devices can now be staged using a serial scanner (RS232)**

**When staging Zebra TC20/TC25 devices, administrators can now prevent Analytics Manager from being disabled**

**[Support for MX 7.2](../stagingprofiles/#mx6xselection) adds the following device setting types and features**:
* [Power Manager](../csp/power) new feature:
	* Turn ON/OFF “Doze Mode” energy saving features on the device. When enabled, only specially designated apps can prevent the device from entering a low-power state to preserve battery life. 
* [Display Manager](../csp/display) new feature:
 * On VC80 devices, adds the ability to force the display to “Stay Awake” and remain on.
* [Remote Scanner Manager](../csp/rsm) new feature:
 * Supports RS-507 and DS-3608 scanners
* [Settings Manager](../csp/settingsmgr) new feature:
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

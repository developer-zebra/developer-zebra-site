---
title: StageNow 2.6
layout: guide.html
product: Stagenow
productversion: '2.7'
---

StageNow 2.6 User Guide, Revision A

P/N MN-002672-04

## Introduction
This help file provides the staging administrator instructions on using StageNow 2.6 to create profiles to use for staging devices.

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

## What's New
StageNow 2.6 now offers support for Regional PC settings for most of the formats on the Windows 7 workstation. 

The release also supports [MX 6.2](../stagingprofiles/#mx6xselection), which introduces or enhances the following CSPs and capabilities:

* A new [Ethernet Manager](../csp/ethernetmgr) CSP administers settings for devices connected to a network through an Ethernet-equipped cradle, including:
 * **DHCP** enable/disable
 * **Set static IP** address, default gateway, subnet mask, DNS
 * **Ethernet proxy** enable/disable
 * **Set proxy host** name, port number
 * **Set proxy bypass** host name(s) and/or IP address(es) 
* [Persist Manager](../csp/persistence) adds the following behaviors/features: 
 * **Device Lock** prevents touch and USB inputs on the device following an enterprise reset until profiles are applied.
 * **Graceful recovery from battery removal** reapplies persisted settings if battery is removed while device is in enterprise reset mode.
 * **OS Upgrade** feature prevents Device Lock while an OS Upgrade is being performed. 
* [Touch Manager](../csp/touch) adds support for:
 * **Device Type** allows a set of Zebra devices to be specified for which to apply settings for touch-screen sensitivity.
 * **Screen Protector** checkbox compensates for the presence of a screen protector on TC51, TC56, TC70x, or TC75x devices.
* [Cellular Manager](../csp/cellular) adds support for:
  * **Select the active SIM socket** (SIM1, SIM2, SIM3 or SIM4)
  * **SIM socket selection enable/disable**
* [KeyMapping Manager](../csp/keymap) adds key mapping support for the NAV_PAD button. 
* [Hosts Manager](../csp/hostsmgr) now retains the device Host Name after a reboot. 
* [Wifi Manager](../csp/wifi) now handles advanced options on unsupported devices.

---
title: StageNow 2.7
layout: guide.html
product: Stagenow
productversion: '2.7'
---

StageNow 2.7 User Guide, Revision A

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
StageNow 2.7 now supports [MX 6.3](../stagingprofiles/#mx6xselection), which introduces or enhances the following CSPs and capabilities:

* [Bug Report Manager](../csp/bugreportmgr) – New Feature
 * Set Bug Report Handling to default (Android) or custom (Zebra)
 * Present device-user questionnaire to collect additional information
 * Store an unlimited number of bug report files in available flash
 * Capture audio and attach to bug reports
 * Trigger "silent" bug reports with an intent
 * Enable or Disable:
    * Generate Bug Report from Power Off Menu
    * Store reports in flash memory
    * Send reports to a specified email address
    * Upload reports to the Zebra Cloud

* [Cellular Manager](../csp/cellular) - Added new feature 
 * Avoid garbled UI when CellularDataWarningValue was higher than CellularDataLimitValue
 * Accept the value 2 for CellularDataLimitState

* [Threat Manager](../csp/threat) - Added feature to detect rooted device detection
* [Key Mapping Manager](../csp/keymap) – Added key mapping support for NAV PAD Button
* [Touch Manager](../csp/touch) – Touch Mode support for ET5X M devices
* [License Manager](../csp/license) - Bug fixes
 * Ability to select custom feature name or standard feature name

* [DHCP Option Manager](../csp/dhcp) - Added new Feature
 * Added new feature to enable/disable features such as client identifier, FQDN and add custom DHCP options such as Vendor Specific 230

* [Remote Scanner Manager](../csp/rsm) –  Added support for DS3678 Bluetooth scanner with the features such as firmware update, paging
* [Enterprise Keyboard](/enterprise-keyboard/1-4/guide/about/) - Feature is removed; this tool can now be downloaded a user app
* [Personal Dictionary](../csp/personaldictionary) - Added an option to bulk-add dictionary words from a file

---
title: StageNow 2.8
layout: guide.html
product: Stagenow
productversion: '2.8'
---

StageNow 2.8 User Guide, Revision A

P/N MN-002672-04

## Introduction
This help file provides the staging administrator instructions on using StageNow 2.8 to create profiles to use for staging devices.

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
StageNow 2.8 now supports [MX 7.0](../stagingprofiles/#mx6xselection), which introduces or enhances the following CSPs and capabilities:

* [App Manager](../csp/app) – New CSP features:
 * Adding/Removing App form Battery optimization List

* [Cert Manager](../csp/cert) - Fixes: 
 * Fix for Customer issue provided (deleting uninstalled cert from UI)

* [Intent Manager](../csp/intent) - Setting applications as Device owner.
* [Key Mapping Manager](../csp/keymap) – Added key mapping support for NAV PAD Button

* [BugReportManager ](../csp/bugreportmgr) – New CSP features:
 * Ability to disable triggering reports via intent
 * Ability to disable taking snapshots Android N changes.
 * Block user from taking a new report while one is being collected

* [Cellular Manager ](../csp/cellular) – Bug fixes:
 * Gracefully handle invalid OSX version in CellularMgr CSP: reject only those parameters  that depend on OSX
 * Improve error handling for SIM selection and CellularData parameters.

* [Wifi Manager ](../csp/wifi) – New Feature:
 * 802.11ac implementation and 802.11n Implementation
 * 802.11ac,802.11n parameters are added in advanced parameters

* [File Manager ](../csp/file) – New Feature:
 * HTTPS support.

* [License Manager](../csp/license) – Bug fixes:
 * Sensitive information is not getting logged.

* [Analytics Manager](../csp/analyticsmgr) – New Feature:
 * Support for “N” Device.

* [Bluetooth Manager](../csp/bluetoothmgr) – New Feature:
 * Provided support for admin to add new silent pairing rule by providing just the name of the remote Bluetooth device

* Fix for upgrade from 2.5 to 2.8
* Audio gain fix for Frenzy by ZVC

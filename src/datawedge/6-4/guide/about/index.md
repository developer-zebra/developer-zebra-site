---
title: About DataWedge
layout: guide.html
product: DataWedge
productversion: '6.4'
---

## Overview

DataWedge provides barcode scanning and processing services for Zebra devices running Android. Included with every Zebra device, DataWedge enables all apps on the device (whether stock or added later) to acquire scanned data without using scanner APIs directly. DataWedge can be easily configured to automatically provide scanning services whenever a particular app is launched; to use a particular scanner, reader or other sensor; and to manipulate acquired data according to simple options or complex rules. 

#### This document applies to:
* **DataWedge 6.4.x**, which requires:
* **Scanner Framework 5.1.0** or higher, and
* **SimulScan 1.9 or higher** (on [devices that support SimulScan](../../../../simulscan))

#### New in DataWedge 6.4

OLD OLD OLD

**New APIs**: 

* **[CLONE_PROFILE](../api/cloneprofile) -** creates a copy of an existing DataWedge Profile wuth settings.
* **[DELETE_PROFILE](../api/deleteprofile) -** deletes Profile(s) from the device. 
* **[ENABLE_DATAWEDGE](../api/enabledatawedge) -** switches DataWedge on or off. 
* **[GET_ACTIVE_PROFILE](../api/getactiveprofile) -** retrieves the name of the Profile currently in use. 
* **[GET_DATAWEDGE_STATUS](../api/getdatawedgestatus) -** returns the DataWedge state (enabled/disabled). 
* **[GET_PROFILES_LIST](../api/getprofileslist) -** retrieves a list of DataWedge Profiles on the device.
* **[GET_VERSION_INFO](../api/getversioninfo) -** gets version numbers of DataWedge and of scanner and SimulScan frameworks on the device. 
* **[RESTORE_CONFIG](../api/restoreconfig) -** restores a DataWedge configuration to its default settings.
* **[REGISTER_FOR_NOTIFICATION](../api/registerfornotification) -** tells DataWedge to inform specified app or activity of updates to scanner and/or Profile status. 
* **[RENAME_PROFILE](../api/renameprofile) -** changes the name of an existing Profile. 
* **[SET_CONFIG](../api/setconfig) -** create new, or overwrite or update an existing Profile 
* **[UNREGISTER_FOR_NOTIFICATION](../api/registerfornotification) -** cancels request for app notification.

**DataWedge 6.4 continues to build on the new structure for launching Android intents introduced with DataWedge 6.2**, and can launch multiple intents as extras in a single intent action. DataWedge continues to support all original commands using their original syntax. For details, see the [DataWedge API guide](../api/overview).

### Main Functionality
The version of DataWedge documented in this guide provides the following primary functions and options: 

* Scan and process all [major barcode symbologies](../input/barcode/#decoderselection)
* Acquire barcodes, images, text, phone numbers, mag-stripe and other data
* Set DataWedge to acquire scanned data for one or more apps
* Create Profiles to implement specific DataWedge features for individual apps 
* Enable/Disable decoding of individual symbologies to improve speed
* Set parameters for individual barcodes, scanners and readers
* Format output according to simple or custom rules
* Use plug-ins for data input, output and processing
* Import and export settings 
* Remotely configure and mass-deploy settings via MDM  
* Restore settings to factory defaults
* Apply remote settings changes immediately 
* Handle escape characters with "string at" criteria in Advanced Data Formatting rules

Availability and operation of DataWedge features varies by device and operating system (which determine the DataWedge version installed on the device). 

<!-- _**This guide describes DataWedge for Android. Features and usage of Windows versions may vary slightly. Please refer to Windows documentation**_. 10/20/16- Windows reference removed per eng. --> 

> Ready to get started? Go to the [DataWedge Setup guide](../setup).

### Which Version is Installed? 

**To determine which DataWedge version is installed on a device**:

<!--
<img style="height:350px" src="01_datawedge_launcher.png"/>
_Launcher icon for DataWedge 3.x_
<br>
-->

&#49;. On the device, locate and **tap the DataWedge icon** in the Launcher screen or App Drawer: 
<img style="height:350px" src="02_datawedge_launcher.png"/>
_Launcher icon for DataWedge 6.x_
<br>

&#50;. **Tap the "hamburger" menu**. The DataWedge menu appears: 
<img style="height:350px" src="02_datawedge_settings_menu.png"/>
<br>

&#51;. **Tap About**. The "About DataWedge" screen appears. The DataWedge version number is highlighted in the image below. Notice that the Scanner Framework version also is shown.     
<img style="height:350px" src="03_datawedge_about_screen.png"/>
_The "About DataWedge" box showing version numbers_ 
<br>

&#52;. If the DataWedge version on the device is different than that of this guide, visit the [Zebra support site](https://www.zebra.com/us/en/support-downloads.html) and download a device-specific Integrator Guide for reference. 

<!--
#### Download an Integrator Guide
For each of its devices, Zebra publishes an Integrator Guide containing information specific to that device. For products that include DataWedge, **the Integrator Guide includes a chapter covering only those DataWedge capabilities available on the device**. A search for the term "integrator" at the [Zebra Support Portal](https://portal.motorolasolutions.com/Support/US-EN/Search?searchType=simple&searchTerm=integrator) yields a result similar to the image below. Narrow the seach by adding the device model. 
<br>
<br>
<img style="height:450px" src="support_central_guides.png"/>
_The Zebra Support Central site showing search results for the search term "integrator_" 
<br>



#### Update DataWedge (Windows only)
**DataWedge is part of the device OS image** and relies on specific components built into that image. It cannot be downloaded separately or updated without also updating the entire device, a process that **can result in loss of user data and/or user-installed applications**. It should therefore be considered only after all other options have been eliminated. **Zebra recommends consulting with a Zebra partner before upgrading a device OS image**. 

**This option is not available for Android devices**. 
-->

-----

Related Guides: 

* [DataWedge Setup Guide](../setup)
* [DataWedge Demo app](../demo)

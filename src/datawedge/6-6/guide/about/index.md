---
title: About DataWedge
layout: guide.html
product: DataWedge
productversion: '6.6'
---

## Overview

DataWedge provides barcode scanning and processing services for Zebra devices running Android. Included with every Zebra device, DataWedge enables all apps on the device (whether stock or added later) to acquire scanned data without using scanner APIs directly. DataWedge can be easily configured to automatically provide scanning services whenever a particular app is launched; to use a particular scanner, reader or other sensor; and to manipulate acquired data according to simple options or complex rules. 

### Language Support

DataWedge has been approved to run on device operating systems localized for the following languages:

* English
* French
* German
* Italian
* Spanish
* Simplified Chinese
* Traditional Chinese

For more information about approved languages or to download a localized operating system, please [contact Zebra Technical Support](https://www.zebra.com/us/en/about-zebra/contact-zebra/contact-tech-support.html).

-----

#### This document applies to:
* **DataWedge 6.6.x**, which requires:
* **Scanner Framework 18.0.9.0** or higher, and
* **SimulScan 1.9 or higher** (on [devices that support SimulScan](../../../../simulscan))

To learn more about DataWedge APIs, read [DataWedge APIs - Benefits & Usage Scenarios](https://developer.zebra.com/community/home/blog/2017/06/27/datawedge-apis-benefits-challenges) by Zebra engineer Darryn Campbell. 

-----

### New in DataWedge 6.6

* **New [serial input options](../input/serial) allow DataWedge to specify communications parameters for a scanner or other device connected to a serial port and used to acquire data**.

* **[Import Reporting](../settings/#reporting) displays the results of imported databases and Profiles, allowing administrators to easily identify source/destination differences and make adjustments to compensate**.

* **A new [SET_REPORTING_OPTIONS](../api/setreportingoptions) API provides control of Reporting features with intents**. 

* **The [SET_CONFIG](../api/setconfig) API now configures multiple plug-ins with a single intent action**. 

* **The [SWITCH_SCANNER](../api/switchscanner) API now supports friendly device names with a new extra**. 


-----

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

&#52;. If the DataWedge version on the device is different than that of this guide, [return to the TechDocs tile page](../../../../) and select the appropriate version from the drop-down menu in the DataWedge tile.

It also might be helpful to visit the [Zebra support site](https://www.zebra.com/us/en/sitesearch.html?q=integrator%20guide) and download a device-specific Integrator Guide for reference. 

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

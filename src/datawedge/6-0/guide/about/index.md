---
title: About DataWedge
layout: guide.html
product: DataWedge
productversion: '6.0'
---

## Introduction

DataWedge provides barcode scanning and processing services for Zebra devices running Android and Windows. Included with every Zebra device, DataWedge enables all apps on the device (whether stock or added later) to acquire scanned data without using scanner APIs directly. DataWedge can be easily configured to automatically provide scanning services whenever a particular app is launched; to use a particular scanner, reader or other sensor; and to manipulate acquired data according to simple options or complex rules. 

### This document applies to:
* **DataWedge 6.0.x**, which requires:
* **Scanner Framework 5.1.0** or higher
* **SimulScan 1.9 or higher** (for devices that support SimulScan)

### Main Functionality
The version of DataWedge documented in this guide provides the following primary functions and options: 

* Scan and process all [major barcode symbologies](../decoders)
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

_**This guide describes DataWedge for Android. Features and usage of Windows versions may vary slightly**_.

> Ready to get started? Go to the [DataWedge Setup Guide](../setup).

### Which Version is Installed? 

**To determine which DataWedge version is installed on a device**:

&#49;. On the device, locate and **tap the DataWedge icon** in the Launcher screen or App Drawer: 
<img style="height:350px" src="01_datawedge_launcher.png"/>
_Launcher icon for Android 4.x_
<br>

<img style="height:350px" src="02_datawedge_launcher.png"/>
_Launcher icon for Android 5.x_
<br>

&#50;. **Tap the "hamburger" menu**. The DataWedge menu appears: 
<img style="height:350px" src="02_datawedge_settings_menu.png"/>
<br>

&#51;. **Tap About**. The "About DataWedge" screen appears. The DataWedge version number is highlighted in the image below. Notice that the Scanner Framework version also is shown.     
<img style="height:350px" src="03_datawedge_about_screen.png"/>
_The 'About DataWedge' box showing version 3.1.10_. 
<br>

&#52;. If the DataWedge version on the device is different than that of this guide, consider the following options, explained further below.  

* **Download the device-specific Integrator Guide** as an additional reference.
* **Upgrade the device OS** to one with a newer version of DataWedge (Windows only). 

------

#### Download an Integrator Guide
For each of its devices, Zebra publishes an Integrator Guide containing information specific to that device. For products that include DataWedge, **the Integrator Guide includes a chapter covering only those DataWedge capabilities available on the device**. A search for the term "integrator" at the [Zebra Support Portal](https://portal.motorolasolutions.com/Support/US-EN/Search?searchType=simple&searchTerm=integrator) yields a result similar to the image below. Narrow the seach by adding the device model. 
<br>
<img style="height:450px" src="support_central_guides.png"/>
_The Zebra Support Central site showing search results for "integrator_" 
<br>

------

#### Update DataWedge (Windows only)
**DataWedge is part of the device OS image** and relies on specific components built into that image. It cannot be downloaded separately or updated without also updating the entire device, a process that **can result in loss of user data and/or user-installed applications**. It should therefore be considered only after all other options have been eliminated. **Zebra recommends consulting with a Zebra partner before upgrading a device OS image**. 

**This option is not available for Android devices**. 

------

> Learn more about DataWedge. See the [DataWedge Setup Guide](../setup) and the [DataWedge Demo app](../demo). 

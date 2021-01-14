---
title: About DataWedge
layout: guide.html
product: DataWedge
productversion: '7.0'
---

## Overview

DataWedge provides “zero-code” barcode scanning and processing services for Zebra devices running Android. Included with every Zebra device, DataWedge enables all apps on the device (whether stock or added later) to acquire scanned data without using scanner APIs directly. DataWedge can be easily configured to automatically provide scanning services whenever a particular app is launched; to use a particular scanner, reader or other sensor; and to manipulate acquired data according to simple options or complex rules. 

When programmatic control is required, [DataWedge APIs](../api) provide the ability to control, modify and query the DataWedge configuration settings and operations through Android intents. This allows new or existing Android apps to be easily modified with an organization's current development resources to acquire data using Zebra devices. 

To learn more about DataWedge APIs, read [DataWedge APIs - Benefits & Usage Scenarios](https://developer.zebra.com/community/home/blog/2017/06/27/datawedge-apis-benefits-challenges) by Zebra engineer Darryn Campbell. 

>**Note**: The appearance of sample app screens displayed throughout this guide can vary by DataWedge version, Android version, and screen size.

-----

**Go to ["What's New" section](#newindatawedge70)**

### Main Functionality
The version of DataWedge documented in this guide provides the following primary functions and options: 
#### Data Capture
* Scan and process all [major barcode symbologies](../input/barcode/#decoderselection)
* Use existing apps to [acquire barcodes](../input/barcode), images, text, phone numbers, mag-stripe and other data
* Set DataWedge to [acquire scanned data for one or multiple apps](../setup)
* Use voice capture to acquire data with [Voice Input](../input/voice)
* Acquire multiple types of data in a single scan [using SimulScan](../input/simulscan) 
* Designate device screen areas as scan triggers using [Data Capture Plus](../input/dcp)
* [Create Profiles](../overview) to implement DataWedge features for individual apps 
* Configure DataWedge to [automatically scan with external Zebra peripherals](../input/barcode/#autoswitchtodefaultonevent): 
	* [USB SSI scanners](../input/barcode/#usbssiscanners)
	* [Bluetooth scanners](../input/barcode/#bluetoothscanners)
	* [Serial scanners](../input/serial)

#### Data Processing
* [Enable/Disable decoding](../input/barcode/#decoderselection) of individual symbologies to improve speed
* [Set parameters](../input/barcode) for individual barcodes, scanners and readers
* Format output according to [simple](../process/bdf/) or [custom](../process/adf/) rules
* Use [Plug-ins](../profiles) for data input, output and processing
* [Create custom string handling](../process/adf/#settingcriteria) and other processing criteria

#### Deployment
* [Import and export settings](../settings) 
* Remotely configure and [mass-deploy settings](../settings/#massdeployment) via MDM  
* [Restore settings](../settings/#restoredefaults) to factory defaults
* [Apply changes remotely](../settings/#autoimport) to update devices in the field 
* [Generate reports](../settings/#reporting)

**Note**: Availability and operation of DataWedge features varies by device and operating system (which determine the DataWedge version installed on the device). 

> Ready to get started? Go to the [DataWedge Setup guide](../setup).

-----

### Supported Devices

Supported scanners and imagers:

* DS2278
* DS3608
* DS3678
* DS8178
* LI3608
* LI3678
* RS507
* RS4000
* RS5000
* RS5100
* RS6000

-----

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

## New in DataWedge 7.0
New updates are identical to DataWedge 6.9.
* New **[Voice Input (beta)](../input/voice)** for voice-to-data capture. 
* New **[Global Scanner Configuration](../input/barcode#globalscannerconfiguration)** enables a generic scanner configuration to apply to all supported scanners.
* New **[Character Set Configuration](../input/barcode/#charactersetconfiguration)** provides options to make adjustments with the decoder character set for barcode input.
* Updated **[Decoder Selection](../input/barcode/#decoderselection)** now supports:
 * GS1 Datamatrix
 * GS1 QRCode
* Added support for [DS2278 Bluetooth Scanner](../input/barcode/#bluetoothscanners).

###Other Changes
* Improved layout for **[SET_CONFIG API](../api/setconfig/#scannerinputparameters)** scanner input parameters.

-----
## Recent Version History

### Added in DataWedge 6.9
* New **[Voice Input (beta)](../input/voice)** for voice-to-data capture. 
* New **[Global Scanner Configuration](../input/barcode#globalscannerconfiguration)** enables a generic scanner configuration to apply to all supported scanners.
* New **[Character Set Configuration](../input/barcode/#charactersetconfiguration)** provides options to make adjustments with the decoder character set for barcode input.
* Updated **[Decoder Selection](../input/barcode/#decoderselection)** now supports:
 * GS1 Datamatrix
 * GS1 QRCode
* Added support for [DS2278 Bluetooth Scanner](../input/barcode/#bluetoothscanners).

####Other Changes
* Improved layout for **[SET_CONFIG API](../api/setconfig/#scannerinputparameters)** scanner input parameters.

-----

### Added in 6.8

* **[Scanner auto-switching](../input/barcode/#autoswitchtodefaultonevent) behavior is now controllable** after connecting and disconnecting external scanners
* **[DataWedge Settings](../settings/#datawedgesettings) allows disabled Profiles to be ignored** to help maintain full functionality at all times 
* New **[SET_IGNORE_DISABLED_PROFILES API](../api/setignoredisabledprofiles)** configures DataWedge to avoid switching to Profiles are are not enabled. 
* New **[GET_IGNORE_DISABLED_PROFILES API](../api/getignoredisabledprofiles)** returns the status of the IGNORE_DISABLED_PROFILES flag. 
* Updated **[SET_CONFIG API](../api/setconfig)** now supports: 
 * Advanced Data Formatting
 * Digimarc decoding
* New **[SWITCH_SIMULSCAN_PARAMS API](../api/switchsimulscanparams)** enables runtime changes to SimulScan parameters 
* **Automatic Profile importing is enhanced** to improve reliability and reduce extra coding 

#### Other changes

The SimulScan Input Plug-in default template is now "Default - Barcode4.xml" 

-----

### Added in v6.7

* **This version supports devices running Android Lollipop and higher only**. 

* **Supports [multi-barcode input](../input/barcode/#readerparams)** for simultaneous acquisition of more than one barcode at a time (**TC20/TC25 devices only**).  

* **Enhanced [inter-character delay](../output/keystroke/#keystrokeoutputsetup) function** allows a delay to be specified for all characters or for multi-byte characters only.  

* **AimType now supports [Press and Sustain](../input/barcode/#readerparams)** function continues a decode session until the Beam Timer is expired, barcode is decoded or the read is canceled.  

* **A [Dynamic Templates parameter](../input/simulscan)** allows the number of barcodes to be specified (from 1-99) for decoding on a form when using SimulScan Dynamic Templates.

* **A new [IMPORT_CONFIG API](../api/importconfig)** allows Config and Profile settings files to be imported using an intent. 

-----

### Added in v6.6

* **New [serial input options](../input/serial) allow DataWedge to specify communications parameters for a scanner or other device connected to a serial port and used to acquire data**.

* **[Import Reporting](../settings/#reporting) displays the results of imported databases and Profiles, allowing administrators to easily identify source/destination differences and make adjustments to compensate**.

* **A new [SET_REPORTING_OPTIONS](../api/setreportingoptions) API provides control of Reporting features with intents**. 

* **The [SET_CONFIG](../api/setconfig) API now configures multiple plug-ins with a single intent action**. 

* **The [SWITCH_SCANNER](../api/switchscanner) API now supports friendly device names with a new extra**. 

-----


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
<img style="height:350px" src="dw_6.7_about_screen.jpg"/>
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
* [DataWedge Demo app](../samples/dwdemo)

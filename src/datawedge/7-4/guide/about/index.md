---
title: About DataWedge
layout: guide.html
product: DataWedge
productversion: '7.4'
---

## Overview

DataWedge provides the capability for any application on the device to acquire data from various input sources (such as barcode scanner, MSR, RFID, voice, and serial port) and manipulate the data as needed based on simple options or complex rules. Available out-of-the-box with every Zebra Android device, DataWedge can easily be configured to automatically provide data capture services within any particular app; to use a particular scanner, reader or other peripheral device; and to properly format and transmit data to the right app.

There are two approaches to capture data:
* **DataWedge “zero-code” approach** eliminates the need for any programming or app modification by capturing and processing data with the use of [DataWedge profiles](../profiles) configured from the user interface.
* **[DataWedge APIs](../api)** provide the ability to programmatically control, modify and query the DataWedge configuration settings and operations through Android intents. This allows new or existing Android apps to be easily modified to acquire data using Zebra devices without concern of the underlying hardware. 

Follow the [Getting Started](../gettingstarted) guide, which discusses both approaches and includes a programmer's guide on common use cases and best practices.

<!--
DataWedge provides “zero-code” barcode scanning and processing services for Zebra devices running Android with the use of profiles. Included with every Zebra device, DataWedge enables all apps on the device (whether stock or added later) to acquire scanned data without using scanner APIs directly. DataWedge can be easily configured to automatically provide scanning services whenever a particular app is launched; to use a particular scanner, reader or other sensor; and to manipulate acquired data according to simple options or complex rules. 

When programmatic control is required, [DataWedge APIs](../api) provide the ability to control, modify and query the DataWedge configuration settings and operations through Android intents. This allows new or existing Android apps to be easily modified with an organization's current development resources to acquire data using Zebra devices. 
-->
To learn more about DataWedge APIs, read [DataWedge APIs - Benefits & Usage Scenarios](https://developer.zebra.com/community/home/blog/2017/06/27/datawedge-apis-benefits-challenges) by Zebra engineer Darryn Campbell. 

-----

**Go to ["What's New" section](#newindatawedge71)**

### Main Functionality
DataWedge provides the following primary functions and options (feature availability may vary by version - refer to [Version History](./#recentversionhistory)): 
#### Data Capture
* Scan and process all [major barcode symbologies](../input/barcode/#decoderselection)
* Use existing apps to [acquire barcodes](../input/barcode), images, text, phone numbers, mag-stripe and other data
* Set DataWedge to [acquire scanned data for one or multiple apps](../setup)
* Read RFID (radio-frequency identification) tags with [RFID Input](../input/rfid)
* Use voice capture to acquire data with [Voice Input](../input/voice)
* Use a [magnetic stripe reader (MSR)](../input/msr) to capture data
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

### Multi-User Support

DataWedge supports the use of multiple Android user accounts on a single device, enabling separate user profiles to maintain data privacy. The supported Zebra devices are:
* Android Oreo: TC52/TC57, TC72/TC77

Features and functionality:
* **If DataWedge is enabled, its functionality applies only for the active user** - Each user has a separate DataWedge process running. DataWedge usage and functionality only applies for the active user.
* **Any DataWedge profile change takes into effect globally across all users** - A DataWedge configuration or profile change by a user (through DataWedge UI or profile import) applies to all users regardless of which user is logged in when the change is made. For example, if User A makes a change to a profile, User B sees the change in the same profile. The configuration file is stored in a location (by default /enterprise/device/settings/datawedge/config/datawedge.db) where the DataWedge process across all users utilize the same configuration file.
* **Camera scanning functions only for the primary (admin) user** - Camera scanning is not available for secondary (non-primary) users. 
* **Bluetooth scanner disconnects when switching between primary user and other users** - This applies to profiles which have a Bluetooth scanner enabled. If the primary user is active, when switching to a different user with an active profile that also enables a Bluetooth scanner, the Bluetooth scanner disconnects and does not automatically re-connect to the device. The non-primary user needs to press the reset button on the Zebra Bluetooth scanner to reconnect, even if it shows that the Bluetooth scanner is connected to the device. 
* **No external SD card access** - If multiple Android user accounts exist, users cannot access the external SD card. This prevents the ability to export or import the Datawedge configuration database files from the SD card. 
* **Limited folder access** - Each user profile has its own folder structure that is not accessible from a different user. Therefore, a user cannot access the exported DataWedge configuration database of another user, preventing the ability to import/export configurations across users.

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

## New in DataWedge 7.4
* **New [Enterprise Keyboard Configuration](../utilities/ekb) feature introduced in DataWedge 7.4.44.**
* **DataWedge 7.4 and later versions only support Android Oreo (v8.0) and later.**
* Introduced **voice capture activation by PTT** (push-to-talk) button with new [Data capture start option](../input/voice).
* Added new **[DPM support](../input/barcode#readerparams)** for barcode reader and [SetConfig](../api/setconfig) API.
* **Enterprise Keyboard** option visible in the DataWedge profile screen is an upcoming feature for future use. 
* **Support for Unique Device Identification (UDI) barcodes, such as GS1, HIBCC and ICCBBA, is being deprecated** – UDI is supported on [selected Zebra devices](../input/barcode/#udidecoding) up to Android P (version 9.x) only.
<!--* New **[Enterprise Keyboard Configuration](../utilities/ekb)** feature. // moved to DW 7.5 -->
-----
## Recent Version History

### Added in DataWedge 7.3
* Added support for new **[Grid Matrix decoder](../input/barcode).**
 * Set **[Grid Matrix decoder parameters](../api/setconfig/#scannerinputparameters)** with SetConfig API.
* New **[Decoder Signature](../input/barcode/#decoderselection)** feature added to capture a special formatted area (e.g. signature) as an image. 
 * New **[Signature Capture sample](../samples/signaturecapture)** app.
* New **[Key Event Options](../output/keystroke)** added for Keystroke output.
 * **[Keystroke output parameters](../api/setconfig/#keystrokeoutputparameters)** can be toggled by using SetConfig API.
* **[Rear camera support](../input/barcode)** added for Digimarc decoding.
* **[DS8178 Bluetooth Scanner](../input/barcode)** now supported.
* New **[Febraban decoder parameter](../input/barcode)** supported for I2of5.
* New **[Instant Reporting parameter](../input/barcode)** for MultiBarcode scanning mode.
* **New in DataWedge 7.3.22:** New **[RFID Input plugin](../input/rfid)** feature to read RFID tags.

### Added in DataWedge 7.2
* New **[Decode Screen Notification](../input/barcode/#scanparams)** parameters added for deocde screen time and translucency level.
* Added new **[DotCode decoder](../input/barcode/#decoderselection)** support.

### Added in DataWedge 7.1
* New **[Decode Screen Notification](../input/barcode/#scanparams)** support added for decode feedback in Scan Params.
* **[Voice Input](../input/voice)** for voice-to-data capture officially released (non-beta). 
* New **[End Detection Timeout](../input/voice/#configuration)** option for Voice Input.
* New **[Multi-User Support](#multiusersupport)** for multiple Android user profiles.
* New **[SEND_RESULT](../api/resultinfo)** result code for multiple plugins.
* New **Hardware Trigger** feature to toggle the hardware trigger for [barcode input](../input/barcode#hardwaretrigger) and [Simulscan input](../input/simulscan). 
* New **[Simulscan Trigger Mode](../api/switchsimulscanparams)** to programmatically toggle hardware trigger in simulscan input 
* New SET_CONFIG/GET_CONFIG parameters for:
 * **[Data Capture Plus (DCP)](../api/setconfig/#datacaptureplusdcpinputparameters)**
 * **[Simulscan](../api/setconfig/#simulscaninputparameters)**
 * **[Magnetic Stripe Reader (MSR)](../api/setconfig/#setmsrinputconfiguration)**
 * **[IP Output](../api/setconfig/#setipoutput)**
 * **[Multiple modules (full profile)](../api/setconfig/#setconfigurationformultiplemodulesfullprofileinasingleintent)** using a single intent
 * **[New Tokens for UDI data output](../api/setconfig/#tokenparameters)**
  * **[Barcode Trigger Mode](../api/setconfig)** to toggle the hardware trigger mode for barcode inputs

### Added in DataWedge 7.0
New updates are identical to DataWedge 6.9.
* New **[Voice Input (beta)](../input/voice)** for voice-to-data capture. 
* New **[Global Scanner Configuration](../input/barcode#globalscannerconfiguration)** enables a generic scanner configuration to apply to all supported scanners.
* New **[Character Set Configuration](../input/barcode/#charactersetconfiguration)** provides options to make adjustments with the decoder character set for barcode input.
* Updated **[Decoder Selection](../input/barcode/#decoderselection)** now supports:
 * GS1 Datamatrix
 * GS1 QRCode
* Added support for [DS2278 Bluetooth Scanner](../input/barcode/#bluetoothscanners).

####Other Changes
* Improved layout for **[SET_CONFIG API](../api/setconfig/#scannerinputparameters)** scanner input parameters.

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

* **Supports [multi-barcode input](../input/barcode/#readerparams)** for simultaneous acquisition of more than one barcode at a time.  

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

&#52;. If the DataWedge version on the device is different than that of this guide, [return to the Techdocs tile page](../../../../) and select the appropriate version from the drop-down menu in the DataWedge tile.

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

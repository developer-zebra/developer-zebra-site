---
title: SimulScan Input Plug-in
layout: guide.html
product: DataWedge
productversion: '6.3'
---

## Overview

The SimulScan Input Plug-in BLAH B:AH 

For more information, please refer to the [SimulScan User Guide](../../../../simulscan). 

on [devices that support SimulScan](../simulscan) is supported devices 

Input Plug-ins specify the device hardware to be used to acquire the data before sending it for processing. Those included with DataWedge are explained below. **DataWedge also provides beep sounds and other feedback to alert the user of scanning results and barcode type. Refer to Scanner Parameters section for more information**. 

Input Plug-ins are used to specify: 

* Barcode scanners (laser, imager, camera, bluetooth scanner)
* Magnetic Stripe Readers (MSR)
* SimulScan hardware


**The Barcode Scanner Input Plug-in** reads data from the integrated barcode scanner built into the device, attached by cable or implemented as a snap-on module. This Plug-in supports laser, imager and internal cameras. The raw barcode data that's acquired is processed or formatted as required using Process Plug-ins. 

**The MSR Input Plug-in** is for magnetic stripe reader modules. This plug-in reads data from an integrated MSR reader or attached Scan/MSR Module, after which the raw data from the reader can be processed or formatted as required using Process Plug-ins.

**The SimulScan Input Plug-in** permits simultaneous capture of barcodes, images, text, signatures, phone numbers and other data on multi-part forms. The SimulScan Input Plug-in adds this capability to DataWedge. When form data is captured according to a designated SimulScan template, data can be processed or formatted as required using Process Plug-ins. 

**Note**: DataWedge concatenates all text captured through SimulScan into a single string, and performs processing on the concatenated string. See **SimulScan section** later in this guide. 

## Scanner Selection
For the Barcode Input Plug-in, the Scanner selection panel determines which scanning device will be used for data capture. The list of available scanners will be based devices that are present on (or connected to) the unit being configured. 
<img style="height:350px" src="11_select_input.png"/>
<br>

The "Auto" option will automatically determine the best scanning device from the list of available devices based on the rules below. 

**Auto Scanner Selection Rules**:
* If a Zebra Scan Module or Scan/MSR Module is installed, the 2D imager will be selected. 
* If no Scan Module is installed, the camera will be selected. 
* When the camera is selected, scanning is performed with the rear-facing camera.
* When 2D Imager is selected, scanning is performed using the installed Scan or Scan/MSR module.

#### Bluetooth Scanners
DataWedge supports the following Zebra Bluetooth scanners: 

* **RS507** Cordless Ring Scanner
* **RS6000** Ring Scanner
* **DS3678** Ultra-Rugged Scanner

Bluetooth scanners are supported according to the following rules:

* **To initially configure the RS507** in a Profile, the scanner must be paired and connected.
* **After initial configuration**, the Bluetooth scanner can be enabled and disabled in the Profile even if it is disconnected from the device. However, to configure reader parameters, decoders and other scanner settings, the Bluetooth scanner must be connected.
* **DataWedge will not automatically reconnect** to a Bluetooth scanner if that scanner is connected while DataWedge is using a different auto-selected scanner. To re-enable a Bluetooth scanner, connect the scanner and select it in the Profile or re-choose the Auto select option.
* **Auto-selection and Battery Swap -** If Scanner selection is set to Auto and the RS507 was enabled prior to a battery swap, DataWedge will continue working with that RS507 scanner upon reconnection after the battery is swapped. If the RS507 does not reconnect with after the swap, DataWedge will revert to the current default scanner.
* **Keep Enabled on Suspend -** This mode is supported on Bluetooth and pluggable scanners, and might result in faster battery drain than would otherwise be expected while in suspend mode. **Note: The Zebra computing device will wake from suspend mode when the RS507 scan trigger is pressed**.

## SimulScan Input 
The SimulScan Input Plug-in permits simultaneous capture of barcodes, images, text, signatures, phone numbers and other data on multi-part forms. The SimulScan Input Plug-in adds this capability to DataWedge. When form data is captured according to a designated SimulScan template, data can be processed or formatted as required using Process Plug-ins. 

<img style="height:350px" src="keystroke-output.png"/>
_SimulScan Input Plug-in options_.
<br>

**SimulScan Capture Notes**:

* **Text captured through SimulScan** is concatenated into a single string and processing is performed on that string.
* **If the Barcode Input Plug-in is enabled** in a Profile, enabling SimulScan in that Profile will cause the Barcode Input Plug-in to be disabled. 

**Device Selection -** permits selection between the device camera or the default scanning device set by the system.  

**Template selection -** sets a SimulScan template for the Profile being configured. 

**Templates included with DataWedge**:

* **BankCheck.xml -** captures the account number and routing number from the machine-readable zone (MRZ) of a check.

* **Barcode1.xml -** decodes a single barcode of any symbology.

* **Barcode2.xml -** decodes two barcodes of the same or differing symbologies.

* **Barcode4.xml -** decodes four barcodes of the same or differing symbologies.

* **Barcode5.xml -** decodes five barcodes of the same or differing symbologies.

* **Barcode10.xml -** decodes 10 barcodes of the same or differing symbologies.

* **BookNumber.xml -** decodes 10- or 13-digit ISBN codes.

* **DocCap+Optional-Barcode.xml -** captures the form as an image and optionally decodes a barcode if present. This is the default form if none is selected.

* **DocCap+Required-Barcode.xml -** captures the form and decodes any available barcode.

* **TravelDoc.xml -** captures information from the machine-readable zone (MRZ) of a travel document such as a passport.

* **Unstructured Multi-Line.xml -** uses OCR to acquire multiple lines of alpha/numeric text.

* **Unstructured Single Line.xml -** uses OCR to acquire a single line of alpha/numeric text.

_The names of all Templates included with SimulScan are preceded by the word "Default" plus a hyphen_.

Custom template XML files copied to the following device directory will be available for selection using this option:

`/enterprise/device/settings/datawedge/templates` 

**Note: Files and folders within the /enterprise directory are invisible to Android File Browser** by default; they can be made visible by manually inputting the path.

Partners and other authorized users can create custom templates online using Zebra's [SimulScan Template Builder](../../../../simulscan/1-1/guide/templatebuilder). 

**Region separator -** is used to configure a separator character for SimulScan text-region data. When multiple text regions exist, the region separator will be inserted between the data strings from each region on the acquisition form. Region separators can be used with the Keystrokes Plug-in Action key character setting (see below) to dispatch SimulScan region data to separate text fields.

Possible values:
* None (default)
* Tab
* Line feed 
* Carriage return 

**Notes**: 
* **Barcode, OCR and OMR regions** are considered text regions. When using keystroke output and IP output, only text-region data will be dispatched to the foreground application or the remote server.
* **Picture-region data** can be retrieved only through the Intent Output Plug-in.

## Data Capture Plus (DCP)
Data Capture Plus (formerly known as the "Data Capture Panel") enables areas of the device screen to be designated as scan triggers. By tapping on a designated screen area, DataWedge will respond as it would to a scanner button-press or other hardware trigger.

DCP is disabled by default. The DataWedge Profile configuration screen allows an app user to configure the appearance of DCP on the screen once a particular Profile is loaded. If the user checks the option to enable the DCP, the five parameters shown below appear on the preference screen and can be configured as desired.

**Note: The DCP will not appear if the scanner is disabled in the current Profile**.

<img style="height:350px" src="dcp_settings.png"/>
_Data Capture Plus options for setting scan triggers_. 
<br>

Data Capture Plus offers these configurable parameters:

**Dock button on -** Sets the initial docking location of the floating DCP button. Changes by the user at runtime are saved to the active Profile. Docking options:  
* Right side only
* Left side only
* Either side

**Start in -** Sets the mode that DCP will startup with. If configured to launch as a button, the DCP mode can be changed at runtime by dragging, but the launch state will not be changed in the Profile. Start-in options: 
* Button mode (floating button)
* Full-screen mode
* Button-only mode

**Button highest position -** Sets a ceiling for button position expressed as a percent of screen height. For example, on a screen measuring four inches vertically, a setting of 75 (%) would prevent the upper edge of the DCP button from being positioned less than one inch from the top of the screen. 

**Bottom lowest position -** Sets a floor for button position expressed as a percent of screen height. For example, on a screen measuring four inches vertically, a setting of 25 (%) would prevent the lower edge of the DCP button from being positioned less than one inch from the bottom of the screen.

**Drag Detect Time -** The wait time (in ms) that DCP should wait after a screen tap before triggering a scanner action. This can help prevent accidental triggers when dragging the DCP button to a new location.

**Note**: A quick touch and release of the DCP can sometimes start the viewfinder when using camera as a scanner. To exit, press the back button.

<img style="height:350px" src="dcp_minimized.png"/>
_Data Capture Plus shown in minimized mode_. 
<br>

**Note**: If configured to launch as a button, the DCP mode can be changed at runtime by dragging, but the launch state will not be changed in the Profile. However, runtime changes to the vertical position and the docking side of device screen _**will**_ be saved to the active Profile.

<img style="height:350px" src="dcp_maximized.png"/>
_Data Capture Plus shown in maximized mode_. 
<br>

### Scanning with DCP

**To scan a barcode with DCP**: 

&#49;. With DCP enabled, **tap and hold the area of the screen designated for DCP**. The scan beam (or camera viewfinder) will be active while the tap is held. 

&#50;. **Aim the scan beam or camera reticle at the barcode** to be scanned. DCP will use the preferences configured in the Barcode Input Plug-in for the current Profile.

&#51;. * **Release finger to stop scanning** or to close the camera viewfinder.

**Note**: A quick touch and release of the DCP control sometimes will start the viewfinder when using camera as a scanner. To exit, press the BACK button.

------

**Related guides**:

* [Profiles/Plug-ins](../../profiles)
* [DataWedge APIs](../../api) 

* [SimulScan User Guide](../../../../simulscan) 


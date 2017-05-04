---
title: SimulScan Input
layout: guide.html
product: DataWedge
productversion: '6.3'
---

## Overview
**SimulScan Input** permits simultaneous capture of barcodes, images, text, signatures, phone numbers and other data on multi-part forms. SimulScan Input adds this capability to DataWedge. When form data is captured according to a designated SimulScan template, data can be processed or formatted as required using Process Plug-ins. 

> This feature can be used only on [devices that support SimulScan](../../../../../simulscan). 

**Note**: DataWedge concatenates all text captured through SimulScan into a single string, and performs processing on the concatenated string. For more information, please refer to the [SimulScan User Guide](../../../../../simulscan). 

<img style="height:350px" src="simulscan_input.png"/>
_SimulScan Input options_
<br>

**Device Selection -** permits selection between the device camera and the default scanning device set by the system (recommended).

**Template selection -** sets a SimulScan template for the Profile being configured. **Templates included with DataWedge**:

 * **BankCheck.xml -** captures the account number and routing number from the machine-readable zone (MRZ) of a check.
 * **Barcode1.xml -** decodes a single barcode of any symbology.
 * **Barcode2.xml -** decodes two barcodes of the same or differing symbologies.
 * **Barcode4.xml -** decodes four barcodes of the same or differing symbologies.
 * **Barcode5.xml -** decodes five barcodes of the same or differing symbologies.
 * **Barcode10.xml -** decodes 10 barcodes of the same or differing symbologies.
 * **BookNumber.xml -** decodes 10- or 13-digit ISBN codes.
 * **DocCap+Optional-Barcode.xml -** captures the form as an image and optionally decodes a barcode, if present. **This is the default form if none is selected**.
 * **DocCap+Required-Barcode.xml -** captures the form and decodes any available barcode.
 * **TravelDoc.xml -** captures information from the machine-readable zone (MRZ) of a travel document such as a passport.
 * **Unstructured Multi-Line.xml -** uses OCR to acquire multiple lines of alpha/numeric text.
 * **Unstructured Single Line.xml -** uses OCR to acquire a single line of alpha/numeric text.
_The names of all Templates included with SimulScan are preceded by the word "Default" plus a hyphen_.

Custom template XML files copied to the `/enterprise/device/settings/datawedge/templates` directory are added to the list above and available for selection. 

**Note: Files and folders in the** `/enterprise` **directory are invisible to the Android File Browser**; they can be made visible in File Browser by manually inputting the path.

Zebra partners and other authorized users can create custom templates online using Zebra's [SimulScan Template Builder](../../../../../simulscan/1-1/guide/templatebuilder). 

**Region separator -** used to configure a separator character for SimulScan text-region data (see Notes, below). When multiple text regions exist, the region separator will be inserted between the data strings from each region on the acquisition form. Region separators can be used with the [Keystrokes Output Action key](../../output/keystroke) character settings to dispatch SimulScan region data to separate text fields.

**Possible values**:
* None (default)
* Tab
* Line feed 
* Carriage return 

### SimulScan Notes 

* **Barcode, OCR and OMR regions** are considered text regions. When using keystroke output and/or IP output, only text-region data will be dispatched to the foreground application or to a remote server.
* **Picture-region data** (images) can be retrieved only through Intent Output.
* **Text captured through SimulScan** is concatenated into a single string and processing is performed on that string.
* **If Barcode Input is enabled in a Profile**, enabling SimulScan in that Profile will cause the Barcode Input Plug-in to be disabled. 

-----

**Related guides**:

* [Profiles](profiles)
* [DataWedge APIs](api) 

* [SimulScan User Guide](../../../../../simulscan) 


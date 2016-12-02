---
title: SimulScan Setup
layout: guide.html
product: SimulScan
productversion: '1.1'
---
## Overview

SimulScan can be accessed either by selecting [SimulScan as an Input Plug-in](../../../../datawedge/6-0/guide/setup/#simulscaninput) within Zebra's [DataWedge](../../../../datawedge) app (included with all devices) or by invoking its functions from within a custom Android app using the SimulScan APIs (which requires licensing). SimulScan advanced features can be explored without a license by using the [SimulScan Demo App](../demo), which exposes all features and functions except the ability to save acquired data. The Demo App also can be used to test user-created Templates.

**This guide covers [SimulScan usage with DataWedge](#accessthroughdatawedge) only**. To access SimulScan functions programmatically, see the [SimulScan API guide](../../api). 

-----

### About Templates

Templates are central to the power of SimulScan; they control its ability to decode and parse data, and determine how acquired data is consumed by an application. At least one Template must be present and selected on the device before SimulScan can be used; a number of generic Templates are included.

Custom Templates can either be Structured or Unstructured. A **Structured Template** is used when the Document to be scanned has a fixed layout--one that doesn't change from one instance of the form to another. Structured Templates are used to acquire multiple types of data at once (barcodes, text, images, etc.). **Unstructured Templates** are for target Documents that vary in layout. These Templates are limited to capturing a single data type (only barcodes, only text, etc.), but the target data can be located anywhere on the form.

#### Structured Templates
Structured Templates work on the principle that the _**location**_ and _**type**_ of data in each field of a form (i.e. barcodes, alphanumeric characters, signatures, etc.) will remain consistent whenever the form is used, and that **only the data** will change with each new instance of the form. By creating a SimulScan Template to uniquely identify each region and data type, SimulScan learns what to expect from each region of a form, letting the developer map the data from each region to specific fields of their application. 

For example, if a form like the one shown in the image below was encountered regularly, a Structured Template using **Mixed Data-type** mode could be created to acquire the barcode, numbers, text, checkboxes and signature in a single pass. For a demonstration using this form, see the [SimulScan Demo App](../demo). 

<img style="height:300px" src="template.png"/>
_This form calls for a Structured Template using Multi Data-type mode_. 
<br>

**Notes**:

* **Zebra recommends using the camera for capturing in Mixed Data-type mode**.
* **The camera is automatically selected** when a Mixed Data-type Template is used.
* Structured Templates are generally associated with Mixed Data-type mode.  
<br>

#### Unstructured Templates
Unstructured Templates are useful for scenarios in which the target Document varies, or when acquiring a single type of data--such as barcodes or text--from a form. For example, if the only data ever acquired in a company's warehouse is from barcodes, then warehouse operations might be completely satisfied by using one or more of the generic barcode-only templates included with SimulScan. Those Templates can handle from 1-10 barcodes ([see below](#accessthroughdatawedge)).

Alternatively, the company could help improve scanning performance by creating an Unstructured Template that's configured only for the types of barcodes it knows about in advance or receives on a regular basis. **Multi-barcode** mode can handle an unlimited number of 1D/2D barcodes of the same or differing symbologies, but can work more quickly if the universe of symbologies is narrowed. 

<img style="height:250px" src="AIAG B-10 Label File P, Q, K, V, 4S.jpg"/>
_This form calls for an Unstructured Template using Multi-barcode mode_.  
<br>

**Notes**:

* **Zebra recommends using the 2D imager for capturing in Multi-barcode mode**.
* The device imager is automatically selected for Barcode-only Templates.
* The camera is automatically selected for OCR Templates.  
* All [Zebra devices that support SimulScan](../about/#supporteddevices) are equipped with 1D/2D imagers (except early TC70 models).

-----

### Access Through DataWedge
SimulScan includes a number of generic Templates for common scanning scenarios that DataWedge can use when SimulScan is selected as the Input Plug-in. For more advanced use-cases, custom Templates can be created [Using Template Builder](../templatebuilder/#usingtemplatebuilder) or downloaded from Zebra's library of [Pre-built Templates](../templates) and imported and modified with Template Builder. 

**Templates included with DataWedge**:

* **BankCheck.xml -** captures the account number and routing number from the machine-readable zone (MRZ) of a check. 

* **Barcode1.xml -** decodes a single barcode of any symbology. 

* **Barcode2.xml -** decodes two barcodes of the same or differing symbologies. 

* **Barcode4.xml -** decodes four barcodes of the same or differing symbologies. 

* **Barcode5.xml -** decodes five barcodes of the same or differing symbologies. 

* **Barcode10.xml -** decodes 10 barcodes of the same or differing symbologies. 

* **BookNumber.xml -** decodes 10- or 13-digit [ISBN codes](http://www.isbn.org/about_ISBN_standard).

* **DocCap+Optional-Barcode.xml -** captures the form as an image and optionally decodes a barcode if present. This is the default form if none is selected.

* **DocCap+Required-Barcode.xml -** captures the form and decodes any available barcode.

* **TravelDoc.xml -** captures information from the machine-readable zone (MRZ) of a travel document such as a passport.

* **Unstructured Multi-Line.xml -** uses OCR to acquire multiple lines of alpha/numeric text. 

* **Unstructured Single Line.xml -** uses OCR to acquire a single line of alpha/numeric text. 

_The names of all Templates included with SimulScan are preceded by the word "Default" plus a hyphen_. 

-----

#### Create a Template

If using Templates already present on the device, skip to the "Activate SimulScan" section. 

1. **Log in** to the [Template Builder web site](http://simulscan.zebra.com).
2. **Select the Template type** to create. 
3. **Upload an image** of the Document to be scanned (.bmp, .jpg, .png or PDF; 5MB max.).
4. **Identify regions** of the Document and the data types (barcodes, text, etc.) of each.
5. **Save and download** the completed Template(s) to the development host (local PC). 
6. **Copy Template(s) to** `/enterprise/device/settings/datawedge/templates` on the device. 
7. **Activate the Template** from within DataWedge (see below) or other scanning app. 

See the [Template Builder guide](../templatebuilder) for details and access information. 

-----

#### Activate SimulScan

When the desired Templates are stored on the device, **activate SimulScan by setting it as the Input source** when configuring an Input Plug-in (see below) in DataWedge. See the [SimulScan Input section](http://techdocs.zebra.com/datawedge/6-0/guide/setup/#simulscaninput) of the DataWedge documentation for full details. 

**&#49;. Open DataWedge** and the Profile that will use SimulScan.

**&#50;. Select "Input Plug-in,"** scrolling as necessary.

**&#51;. Select SimulScan** as the Input Source. A screen appears similar to the image below: 

<img style="height:350px" src="Figure_13_SimulScan_prefs.png"/>
_SimulScan options within DataWedge_
<br>

**&#52;. Tap and select the desired options** as needed: 

**Device Selection -** permits selection of the device camera or the default scanning device set by the system (recommended).

**Template selection -** sets a SimulScan Template for the Profile being configured. Custom Templates installed in the `/enterprise/device/settings/datawedge/templates` directory on the device will appear along with the templates included with SimulScan (listed above). **Note: Files and folders within the** `/enterprise` **directory are invisible to Android File Browser by default**; they can be made visible by manually inputting the path. 

**Region separator -** used to configure a separator character for SimulScan text-region data. When multiple text regions exist, the region separator will be inserted between the data strings from each region on the acquisition form. Region separators can be used with the Keystrokes Plug-in Action key character setting (see below) to dispatch data acquired in SimulScan regions to specific fields of an app.

**Region Separator possible values**:

* **None** (default)
* **Tab**
* **Line feed**
* **Carriage return**

**SimulScan Capture Notes**:

* **Text captured through SimulScan is concatenated** into a single string, and processing is performed on that string.
* **If the Barcode Input Plug-in is enabled** in a Profile, enabling SimulScan in that Profile will cause the Barcode Input Plug-in to be disabled.
* **Barcode, OCR and OMR regions are considered text regions**. When using keystroke output and IP output, only text-region data will be dispatched to the foreground application or the remote server.
* **Picture-region data** can be retrieved only through the Intent Output Plug-in.

**SimulScan is now ready to use**. 

-----

Related guides: 

* [DataWedge](../../../../datawedge)
* [Template Builder](../templatebuilder)
* [Enterprise Browser](../../../../enterprise-browser)

<!--
* **Default-One-Barcode.xml -** decodes a single barcode in the form and returns a single data region as the output.

* **Default-Two-Barcodes.xml -** decodes two barcodes in a form and returns the data as two data regions.
-->

<!--

### Multi-barcode Template
**A Multi-barcode Template** is designed for use on forms from which only barcode data will be acquired. In theory, there's no limit to the number of barcodes and symbologies that can be captured at one time. The unlicensed version of SimulScan permits a maximum of nine (9) barcodes to be captured from a form without [licensing](../license).  

<img style="height:350px" src="msi_reader.png"/>
*A typical barcode-only form for a common and effective SimulScan use case*.
<br>

<!-- ![img](msi_reader.png)--> 

<!-- When the data to be captured is of one type (i.e. barcodes) or contained in a single field (i.e. an address), SimulScan can be used to acquire the data regardless of whether it is presented on a structured form. In such instances, it is often the case that data must be captured only from a small portion of a form, and the remaining form data can be ignored.

Some data-acquisition scenarios call for creation of a type-specific Template, for example to capture all the barcodes on the form, or to use (OCR) to capture only an address (not shown). For another example application, a Template might be created to capture only the machine-readable zone (MRZ) data from travel documents.

### Mixed Data-type Template  
**The Mixed Data-type Template** captures multiple data types from a variety of sources. For example, the form below contains a barcode, account numbers and other numerical shipper information, company names and addresses for the shipper and receiver, checkboxes with various values, and a signature and date. Acquiring all of this data separately would be time-consuming and error-prone. But SimulScan can do it in seconds once a Template is made. See this form in action using the [SimulScan Demo App](../demo). 

-->


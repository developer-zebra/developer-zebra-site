---
title: SimulScan Setup
layout: guide.html
product: SimulScan
productversion: '1.1'
---
## Overview

SimulScan can be accessed by selecting it as an Input Plug-in with Zebra's [DataWedge](../../../../datawedge) service or by invoking its functions from within an Android app using the SimulScan APIs, which requires licensing. SimulScan advanced features can be explored without a License by using the [SimulScan Demo App](../demo), which exposes all features and functions except the ability to save acquired data. The Demo App also can be used to test user-created Templates.

**This guide covers SimulScan usage with DataWedge only**. See the [SimulScan API guide](../../api) for accessing SimulScan functions programmatically. 

-----

### Access SimulScan with DataWedge
Before SimulScan can be used, at least one Template must be present on the device. DataWedge includes four generic templates that might be adequate for some scenarios (explained below). For more advanced use-cases, Templates can be created [Using Template Builder](../templatebuilder/#usingtemplatebuilder) or downloaded from Zebra's library of [Pre-built Templates](../templates) and modified with Template Builder. 

If using Templates already on the device, skip to the "Activate SimulScan" section. 

#### Create a Template:  

1. Log into the [Template Builder web site](http://simulscan.zebra.com).
2. Select a Template type. 
3. Upload an image of the Document to be scanned (.bmp, .jpg, .png or PDF).
4. Identify regions of the Document and the data types (barcodes, text, etc.) of each.
5. **Save work often**. Template Builder does not automatically save changes. 
6. Download the completed Template(s) to the development host (local PC). 
7. Copy the Template file(s) to the device that will be performing the scans. 
8. Select the Template from within the scanning app. 

See the [Template Builder guide](../templatebuilder) for details and access information. 

#### Activate SimulScan:

When the desired Templates are stored on the device, activate SimulScan by setting it as the Input source when configuring an Input Plug-in (see below) in DataWedge. See the [SimulScan Input section](http://techdocs.zebra.com/datawedge/6-0/guide/setup/#simulscaninput) of the DataWedge documentation for full details. 

**&#49;. Open DataWedge** and the Profile that will use SimulScan.

**&#50;. Select "Input Plug-in,"** scrolling as necessary.

**&#51;. Select SimulScan** as the Input Source. A screen appears similar to the image below: 

<img style="height:350px" src="Figure_13_SimulScan_prefs.png"/>
_SimulScan options within DataWedge_
<br>

**&#52;. Tap the desired options** as needed: 

**Device Selection -** permits selection of the device camera or the default scanning device set by the system.

**Template selection -** sets a SimulScan Template for the Profile being configured. Custom Templates installed in the `/enterprise/device/settings/datawedge/` directory on the device will appear along with the following four templates included with DataWedge:

* **Default-DocCap+Optional-Barcode.xml -** captures the form as an image and optionally decodes a barcode if present on the form. This is the default form if none is selected.

* **Default-DocCap+Required-Barcode.xml -** captures the form and decodes any available barcode.

* **Default-One-Barcode.xml -** decodes a single barcode in the form and returns a single data region as the output.

* **Default-Two-Barcodes.xml -** decodes two barcodes in a form and returns the data as two data regions.

**Region separator -** is used to configure a separator character for SimulScan text-region data. When multiple text regions exist, the region separator will be inserted between the data strings from each region on the acquisition form. Region separators can be used with the Keystrokes Plug-in Action key character setting (see below) to dispatch SimulScan region data to separate text fields.

**Possible values**:

* None (default)
* Tab
* Line feed
* Carriage return

**SimulScan Capture Rules**:

* **Text captured through SimulScan is concatenated** into a single string, and processing is performed on that string.

* **If the Barcode Input Plug-in is enabled** in a Profile, enabling SimulScan in that Profile will cause the Barcode Input Plug-in to be disabled.

* **Barcode, OCR and OMR regions are considered text regions**. When using keystroke output and IP output, only text-region data will be dispatched to the foreground application or the remote server.

* **Picture-region data** can be retrieved only through the Intent Output Plug-in.

**SimulScan is now ready for use**. 

-----

Related guides: 

* [DataWedge](../../../../datawedge)
* [Template Builder](../templatebuilder)
* [Enterprise Browser](../../../../enterprise-browser)

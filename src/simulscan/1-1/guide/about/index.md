---
title: About SimulScan
layout: guide.html
product: SimulScan
productversion: '1.1'
---

<div class="alert alert-danger alert-dismissible fade in" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> <h4>Important information about SimulScan:</h4> <p><b>The most important SimulScan capabilities, including multi-barcode scanning and OCR A/B capture for travel documentation, are being migrated to the internal scanning framework that runs on all Zebra devices</b>. Once complete, capabilities formerly available only through SimulScan will be accessible through DataWedge and Android intent APIs. Therefore, Zebra strongly recommends that partners develop a migration plan to DataWedge for all applications that currently use SimulScan.</p><p><b>Key migration dates</b>:
    </p><ul>
        <li>Dec. 31, 2019 - Sale of SimulScan licenses ended</li>
        <li>Dec. 31, 2020 - Support for licensed SimulScan API features ends</li>
        <li>Device end-of-life - End of support for non-licensed SimulScan API features</li>
        <li>For more information, refer to <b>the full alert</b>:</li>
    </ul>
    <br>
    <a href="../alert" class="btn btn-danger">See Full Alert</a> <br></div>


## Overview

Zebra's SimulScan is a set of productivity tools that can optimize the efficiency of data-capture workflow by enabling workers to acquire multiple points of data in a single step. When integrated with SimulScan APIs, captured data can be parsed directly into an organization's native Android applications. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/PQ8gPtY7Z3M" frameborder="0" allowfullscreen></iframe>
[More SimulScan videos](https://www.youtube.com/playlist?list=PLce6-npz5dKf_5mTtakWU1ostOIaeGXzz)
<br>

-----

**SimulScan Can Help Optimize Work-flows If...** 

* **Scanning is frequent** in the organization, and...
* **Forms have one or more barcodes of the same of differing symbologies**.

Such scenarios are well-suited to SimulScan [Multi-barcode mode](../templatebuilder/#unstructuredtemplates).

Alternatively, SimulScan [Document Capture](../templatebuilder/#structuredtemplates) mode is suited to data-capture scenarios in which...

* **Multiple data types are to be acquired**, and... 
* **Scanned forms are of a** [fixed layout](../glossary), and...
* **Forms have well-defined borders**.

-----

### Requirements

* A Zebra TC51/TC56, TC55, TC70/TC75, TC70x/TC75x, TC8000 device running Android
* Camera or supported 2D imager ([see table](#supporteddevices), below)
* An app (or [DataWedge](../../../../datawedge)) configured to access SimulScan
* A per-device [license](../license) if using [advanced features](../license)

**Note**: SimulScan features also can be explored using the [SimulScan Demo App](../demo), which exposes all features and functions except the ability to save acquired data. The Demo App is included on all supported devices.  

-----

## How it Works
Most acquisition tasks involve capturing data from printed documents. These "target" documents often vary in size, shape and layout, and present a challenge for accurate data acquisition. Templates solve this problem by "teaching" SimulScan about the documents it will encounter, and defining how to scan and process data for each instance of that target document. 

### Document Capture Mode
[Document Capture mode](../templatebuilder/#structuredtemplates) captures a snapshot of the document and extracts 1D/2D barcode data, alpha/numeric characters and images, and can detect the presence of check marks and signatures as defined in the document's Template. 

These so-called "Structured" Templates define "Form Regions* of interest" on Documents to be scanned, "Field Regions of interest" within those forms, the types of data (barcode, text, etc.) to be extracted, and how it will be processed. **Scan targets must be of a fixed layout and a Template must be created for each target encountered by the organization**.  
![img](regions_of_interest.png)
_A sample document on which Document Capture would be employed_.

### Multi-barcode Mode
[Multi-barcode mode](../templatebuilder/#unstructuredtemplates) is designed to capture one or more 1D/2D barcodes of the same or differing symbologies from a single scan target. The target layout can be fixed or varied from one scan to another, and the Templates when used here are referred to as "Unstructured." Templates are optional for Multi-barcode mode, and are generally required only when it's necessary to specifically include certain barcodes and ignore others. **This mode also supports barcode prefixes, which can be parsed to provide processing information for the data being acquired from each barcode**. 

<img style="height:300px" src="msi_reader_captions.png"/>
_A Multi-barcode mode Template can specify barcodes to include and which to ignore_.

-----

### Using SimulScan
**SimulScan is free for many scanning scenarios**, including when used with DataWedge and its default Templates or from a custom app to scan only barcodes and/or for certain types of OCR acquisition. A per-device license is required for advanced SimulScan features. For licensing details, please see the [Licensing guide](../license). 

**SimulScan can be accessed either by**: 

1. Selecting SimulScan as an Input Plug-in using Zebra's free [DataWedge](../../../../datawedge) service, **or** 
2. Calling it directly from within an Android app using the [SimulScan APIs](../../api)

SimulScan features also can be explored using the [SimulScan Demo App](../demo), which exposes all features and functions except the ability to save acquired data. The Demo App also can be used to test custom Templates.

See the [SimulScan Glossary](../glossary) for a complete list of terms. 

<!--
![img](regions_of_interest.png)

In addition, some Fields are designated as "Anchor Elements," which help SimulScan to identify a form and also set a reference for other Fields to compensate for changes in the orientation of the Document or the scanning device. 
-->

-----

## Supported Devices
SimulScan works with all device cameras, and **on devices with a supported 2D imager; 1D imagers are not supported**. To identify the imager installed on a device, see **About Device > Hardware Configuration** in the device Settings panel.<!--  or refer to the table below for a supported device model code in place of the "?" character as indicated -->

<IFRAME WIDTH=1000 HEIGHT=1700 FRAMEBORDER=0 SRC="https://app.smartsheet.com/b/publish?EQBCT=f40c04e31a2c4193b4ee455955ce237a"></IFRAME>



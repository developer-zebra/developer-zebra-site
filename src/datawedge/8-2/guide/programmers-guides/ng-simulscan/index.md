---
title: Document Capture Programmer's Guide
layout: guide.html
product: DataWedge
productversion: '8.2'
---

## Overview

[Document Capture](../../input/barcode/#documentselectiondocumentcapture), as part of [NextGen (NG) SimulScan](../../input/barcode/#nextgensimulscanconfiguration), is a data capture solution for retrieving data from documents, forms, and labels by scanning barcodes or capturing partial or entire documents as images. It relies on <!--[templates](../../templatebuilder)-->templates to capture and process the data to be consumed by an application. 

-----

## Requirements

* See supported devices for Document Capture in the [Feature Matrtix](../../matrix).
* Camera or supported 2D imager
* DataWedge v8.0.28 or higher configured to access [NG SimulScan](../../input/barcode/#nextgensimulscanconfiguration)
* Device with [Mobility DNA license](/licensing), required for NG SimulScan's Document Capture feature

-----

## Document Capture

In summary, the steps to use Document Capture are:
1. **Generate the template** to identify the data to acquire.
2. **Deploy template to device** so it can be used by DataWedge.
3. **Create DataWedge profile** and associate it to the application receiving the data.
4. **Configure the profile** with the Document Capture settings.
5. **Use Content Provider** to acquire, process, and output the data.

These steps are explained in detail in the following subsections.

-----

### 1. Generate the Template

Templates are an important component of Document Capture, identifying the data to be acquired and processed so it can be consumed by an application. Each template is associated with a target document, such as a shipping or manufacturing label. The template specifies the form region of interest (encompasses all data in the entire form) and the Field region of interest (specific regions, such as barcode, text, picture, etc.) of the data to be captured.

**Contact your local Zebra sales representative for assistance to create a Document Capture/NextGen SimulScan template.**

<!--See [Template Builder](../../templatebuilder/#usingtemplatebuilder) for instructions to generate the template as an .XML file. -->

### 2. Deploy Template to Device

After the template is created, deploy the template to the device so it can be used by DataWedge. Use [StageNow](/stagenow), which leverages [DataWedge Mgr CSP](/mx/datawedgemgr), to generate the barcode to scan and deploy the template to the device. Alternatively, an .XML file can be created through StageNow to deploy the template through an EMM (Enterprise Mobile Management) system.

Refer to [Import NextGen SimulScan Templates](../../admin/#importnextgensimulscantemplates) for step-by-step instructions.

### 3. Create the DataWedge Profile

Follow steps to [create the DataWedge profile](../../createprofile/#createanewprofile) and associate it to the application that is receiving the acquired data.

### 4. Configure the Profile

Configure the DataWedge profile for Document Capture as follows:
1. Under **NG SimulScan Configuration**, set the **[Scanning mode](../../input/barcode/#scanningmodes-1)** to **Document Capture**.
2. Select the imported template in [Document Selection](../../input/barcode/#documentselectiondocumentcapture). The selection is populated after template deployment from step 2.

### 5. Use Content Provider

It is required to use DataWedge's content provider to acquire, process, and output the data from document capture. Within the DataWedge profile, enable **Use Content Providers** option under Intent Output. Follow the [Content Provider Programmer's Guide](../../programmers-guides/content-provider/) to retrieve and process the acquired data so it can be output to the application.

<br>

-----

Related Guides: 

* [NextGen SimulScan](../../input/barcode/#nextgensimulscanconfiguration)
* [Use Content Provider](../../programmers-guides/content-provider/)
* [DataWedgeMgr CSP](/mx/datawedgemgr)
<!-- * [Template Builder](../../templatebuilder) -->


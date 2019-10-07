---
title: SimulScan Licensing
layout: guide.html
product: SimulScan
productversion: '1.1'
---

<div class="alert alert-danger alert-dismissible fade in" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> <h4>Important information about SimulScan:</h4> <p><b>The most important SimulScan capabilities, including multi-barcode scanning and OCR A/B capture for travel documentation, are being migrated to the internal scanning framework that runs on all Zebra devices</b>. Once complete, capabilities formerly available only through SimulScan will be accessible through DataWedge and Android intent APIs. Therefore, Zebra strongly recommends that partners develop a migration plan to DataWedge for all applications that currently use SimulScan.</p><p><b>Key migration dates</b>:
    </p><ul>
        <li>Dec. 31, 2019 - Final day to buy SimulScan licenses</li>
        <li>Dec. 31, 2020 - End of support for licensed SimulScan API features</li>
        <li>Device end-of-life - End of support for non-licensed SimulScan API features</li>
        <li>For more information, refer to <b>the full alert</b>:</li>
    </ul>
    <br>
    <a href="../alert" class="btn btn-danger">See Full Alert</a> <br></div>


## Overview

**SimulScan is free for many scanning scenarios, including when used with Zebra's [DataWedge](../../../../datawedge) service** and its default Templates, from a custom app to scan only barcodes, and/or for certain types of optical character recognition (OCR). A per-device license is required for advanced SimulScan features such as detection and capture of checkmarks and for scanning highly complex targets. A complete breakdown is below and shown in the [Licensing Matrix](#licensingmatrix). 

### When a License is Not Required 

**SimulScan is free when**: 

* SimulScan is **used to scan a fixed number of barcodes fewer than 10** ([Multi-barcode mode](../glossary/#multibarcodemode))
* **No more than 10 barcodes** are captured on any single scan 
* **Text is captured using OCR-A, OCR-B or MRZ** barcode symbologies
* **Capturing the presence of a signature**
* **Capturing an image** 
<!-- 
* **SimulScan is accessed through DataWedge** using many of its default Templates (except OCR)
-->
### When a License is Required 

**A per-device License is required when**: 

<!-- 
* **Capturing an entire Document** ([Document Capture mode](../glossary/#documentcapturemode))
* **SimulScan is used with [Enterprise Browser](../../../../enterprise-browser)** -->
* **Capturing more than 10 barcodes** (or other fields) on any single scan
* **The number of barcodes changes from one scan to another** (Dynamic or Variable Quantity Groups) 
* **Capturing text using optical character recognition** (other than OCR-A or OCR-B)
* **Using Optical Mark Recognition (OMR)** to capture check marks  

### Licensing General Rules

* **A SimulScan License is required for each device** that will access SimulScan advanced features. 
* **A Device-specific License** is assigned based on a product name and serial number, and will fail if transferred to a different device.
* **A Deployment License** works on all devices in a deployment, and is intended for remote- or mass-deployment scenarios. 
* **The Deployment License Key** is user-generated on the licensing website.
* **Demo licenses are available** for evaluation and early integration. 
* **A license is not required to use the [SimulScan Demo App](../demo)**.
* **A Factory Reset clears the license** from the device; license redeployment is required. 

-----

## Licensing Matrix

<IFRAME WIDTH=1000 HEIGHT=800 FRAMEBORDER=0 SRC="https://app.smartsheet.com/b/publish?EQBCT=fdb2e12c9d6440649e09cf2fae055b8a"></IFRAME>

### License Types

* **SimulScan_MB-PREM -** required for advanced barcoding features
* **SimilScan_PREM -** required for advanced barcoding features and OCR/OMR

-----

## Obtain a License
SimulScan Licenses are purchased directly from Zebra Technologies or through resellers of Zebra products. The section below explains the process for licensing devices for SimulScan use. 

### I. Contact a Reseller 
The first step in obtaining a license is to engage with Zebra or a reseller. To get started, use one of the following Zebra resources: 

* **[Find a Zebra Partner](https://www.zebra.com/us/en/partners/find-a-zebra-partner.html) -** form for submitting an inquiry via the web
* **[How to Select a Channel Partner](https://www.zebra.com/us/en/partners/find-a-zebra-partner/selecting-the-right-channel-partner.html) -** explains the types of partners that engage with Zebra and some of their technologies and specialties
* **[Partner Interaction Center](https://www.zebra.com/us/en/partners/partner-interaction-center.html) -** info for contacting Zebra's existing global partner network
* **[Zebra Corporate Numbers and Links](https://www.zebra.com/us/en/about-zebra/contact-zebra.html) -** broken down by global region
* **[Global Marketing Contact Center](https://www.zebra.com/us/en/about-zebra/contact-zebra/marketing-contact-center.html) -** broken down by global region and country

-----

### II. Access Licensing System
After a licensing agreement is arranged with Zebra or a Zebra reseller, an email containing user credentials will be sent to the licensing company's representative for access to the Zebra Enterprise Software Licensing system. 

* **Log into the [Zebra Enterprise Software Licensing system](https://softwarelicensing.zebra.com/) to:** 
	* Place an order for device licenses (see image)
	* View the status of existing orders
	* Assign licenses to devices 
	* Generate Deployment License Keys
	* View current license inventory and assignment(s)

![img](addorder.png)
_Options for SimulScan licensing might vary from the image shown_.  
<br>

-----

### III. Assign License(s)
Once the desired license(s) are purchased, they must be assigned to device(s) before being deployed commercially. Licenses can be deployed manually or remotely using [Zebra StageNow](../../../../stagenow) or a compatible mobile device management (MDM) system.

#### Manual Deployment
**&#49;. Enter the device model and serial number** (as shown) and other required information.<br>
**Press Submit** when done. 
![img](assignlicense.png)
_Individual licenses must be applied manually at the device. Deployment licenses can be deployed remotely en mass_.
<br>

**&#50;. Download the** `SDC_License.xml` **file** from the licensing server to a local PC:
![img](downloadlicense.png)
_Licenses are tied to the device model and serial number and will fail if transferred to a different device_.
<br>

**&#51;. Push the License file to any location on the device**.

**&#52;. This step varies by Android version**:
* **Marshmallow and later**:
 * In the SimulScan Demo app, **select Menu -> License** and tap the "Install" button.<br>
* **Lollipop and earlier**:
 * In the Settings panel, **select About Phone -> Legal Information -> Symbol Licenses -> Menu -> Install license**.

**&#53;. Navigate to the License file** pushed to the device in Step 3.

**&#54;. Tap on the License file**. On success, a confirmation message appears.

**Manual License deployment is complete**. 

#### Mass deployment

1. **Generate a Deployment Key** on the licensing website. 
2. **Launch the StageNow wizard** and select "SimulScan mass-deployment."
3. **Input the Deployment Key** when prompted. 
4. **Deploy the Key to devices**.  

Once deployed to the device, SimulScan Licenses are installed automatically. For details, please refer to [StageNow documentation](../../../../stagenow). 

-----

<!-- 9/7/19- Removed demo section; product scheduled for EOL 12/31/19.  
## Demo License
Demo Licenses are available for companies wishing to evaluate SimulScan or while integrating a custom app using SimulScan APIs. To request a demo License to enable SimulScan advanced features and APIs on a device:

* [Send email to NMV386@zebra.com](mailto:NMV386@zebra.com?Subject=SimulScan%20Demo%20License%20Request) 
* Include **"SimulScan Demo License Request"** in the subject header

A reply will be sent with access credentials for [Zebra's Software Licensing Portal](https://softwarelicensing.zebra.com/), generally on the next business day. 

* **Follow directions** to [assign the license](#iiiassignlicenses). 

 -->

 <!--
## Device License
SimulScan licenses are purchased through Zebra Technologies product resellers. Licensees receive an email with access credentials for the [Zebra Enterprise Software Licensing system](https://softwarelicensing.zebra.com/), where licenses are allocated to devices by an administrator. The general process is explained below. For additional help, please refer to [Licensing documentation](https://softwarelicensing.zebra.com/documentation/index.html). 

**License types**:
* **Device-specific License -** assigned to a specific device based on the product name and serial number. This License will fail if an attempt is made to apply it to a device other than the device to which it was originally assigned.

* **Deployment License -** works across an entire device deployment. This is useful for remote or mass-deployment scenarios. The Deployment key is generated on the licensing website.

Both license types can be applied using either of the methods below.  




-->
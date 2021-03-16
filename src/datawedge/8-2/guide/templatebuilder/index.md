---
title: Template Builder
layout: guide.html
product: DataWedge
productversion: '8.2'
---

## Overview
Template Builder is a web-based tool for creating templates, which define the information captured by NextGen (NG) SimulScan and determine how it will be processed and made available to DataWedge. [NG SimulScan](../input/barcode/#nextgensimulscanconfiguration) is a data capture solution for retrieving data from documents, forms, and labels by scanning barcodes or capturing partial or entire documents as images. Templates are the key to controlling NG SimulScan data capture features and for processing the acquired data so it can be consumed by an application. Each template is associated with a target document (e.g. shipping receipt, part label) to capture and process as part of a workflow.

This guide provides step-by-step instructions for using the interface of Template Builder to [create Templates](#usingtemplatebuilder) and deploy them to devices. 

-----

## Requirements ??

* A Zebra TC51/TC56, TC55, TC70/TC75, TC70x/TC75x, TC8000 device running Android
* Camera or supported 2D imager
* DataWedge v8.0.28 or higher configured to access [NG SimulScan](../input/barcode/#nextgensimulscanconfiguration)
* Device with [Mobility DNA license](/licensing), required for NG SimulScan's Document Capture feature
* The correct NG SimulScan app version installed on your zebra device that support the features you are going to include to your template.  See [TechDocs/supporteddevices](/simulscan/1-1/guide/about/#supporteddevices)
 
-----

## Prerequisites

Before attempting to create a Template, the following assets are required: 

* **Sample(s) of the Document(s)** (forms, labels, etc.) for which the Template(s) are being created
* **Photos or image scans** of those same documents (for upload)
* **An account on the [Template Builder web site](https://ng-simulscan.zebra.com)**
* **A familiarity with [Template concepts](#abouttemplates)** 
* **Camera or 2D Imager is selected** under [Scanner Selection](../input/barcode/#scannerselection) in the DataWedge profile of the Template

-----

## About Templates

Most acquisition tasks involve capturing data from printed documents, forms or labels. These "target" documents often vary in size, shape and layout, and present a challenge for accurate data acquisition. Templates solve this problem by "teaching" NG SimulScan about the documents it will encounter, and defining how to scan and process data for each instance of that target document. 

![img](regions_of_interest.png)

A Template is associated with a "target" document (e.g. shipping receipt or shipping label) that can contain multiple types of data: barcodes, text fields, images, etc. Form Region of Interest defines the border that encompasses all the data on the entire form. "Fields" are defined to identify specific Field Region(s) of Interest on the form from which data is to be extracted from. These Fields can contain different types of data (barcode, text, picture, etc.) to be extracted. 

The Template is generated based on two types of documents, described in the following subsections: 
* **[Image Capture](#imagecapture)**  
* **[MultiBarcode](#multibarcode)** 

Templates are output as an .xml files containing details about the data to extract and other parameters. They are saved on the Template Builder server, unless downloaded to the local host.

> **Warning: Do not attempt to modify the Template file by hand**. Templates contain machine-generated XML stored in Base64-encoded files, and are not intended to be edited manually. 

Using [DataWedge Mgr CSP](/mx/datawedgemgr), templates can be mass deployed to Zebra mobile computers for use by the end-user application employing NG SimulScan.

For step-by-step instructions on Template creation, see [Using Template Builder](#usingtemplatebuilder) below. 

### Image Capture

**Image Capture** is used to acquire mixed types of data at once (barcodes, text, images, etc.) when the document to be scanned ("Target") has a fixed layout - the _**location**_ and _**type**_ of data in each field of a Target remain consistent whenever the form is used, and  **only the data** changes with each new instance of the form. By creating a Template to uniquely identify each region and data type, NG SimulScan learns what to expect from each region of a form, which allows the developer to map the data from each region to specific fields of an application. 

Image Capture Templates are used to: 

* **Scan barcodes**, text and other data types from a single form 
* **Acquire mixed types of data at once** (barcodes, text, images, signatures, etc.)
* **Capture an image** of the entire form or a region on the form, such as a photo, signature, etc.
* **Detect for presence of a handwritten signature** on the form

Field Types supported for Image Capture:
* **Barcode -** scan single or multiple barcodes in the field of view  
* **Picture -** capture signature(s), photo(s), or entire document(s) as an image.

<img style="height:300px" src="template.png"/>
_Example of an Image Capture-type document_. 

For example, a company that uses a fixed-format form such as the Postal/T&L example (shown above) would create an Image Capture template to identify the location of each field to be captured and the type of data to be processed from each identified field. 
<br>

<!--
**Notes**:

* **Zebra recommends using the camera for Mixed Data-type** capture.
* The camera is automatically selected when a Mixed Data-type Template is used.
* Structured Templates are generally associated with Mixed Data-type mode.  
<br>
-->
### MultiBarcode

**MultiBarcode** is used to acquire data from forms that contain barcodes. This applies to cases where multiple barcodes are required to be captured simultaneously, or specific barcode(s) need to be read from a multitude of barcodes. For the latter, a template can be generated to capture only certain barcode(s) from that form, and use the data captured to populate specific fields within an application. 

Scanning performance and workflow can be improved by creating a Template that is configured only for the specific types of barcodes it receives on a regular basis. **MultiBarcode** can simultaneously handle a large number of 1D/2D barcodes of the same or differing symbologies, but works most efficiently if the symbologies are narrowed to just a few.

MultiBarcode Templates are used to:
* **Scan barcode(s)** from a form that can contain multiple barcodes.
* **Scan multiple barcodes simultaneously**
* **Scan a specific barcode** from a multitude of barcodes.
* **Automatically group barcodes** based on a common pattern identified, e.g. same symbology, same data length, same first 1 or 2 characters of data

Field Type supported for MultiBarcode:
* **Barcode -** scan single or multiple barcodes in the field of view

<img style="height:350px" src="msi_reader.png"/>
_Example of a MultiBarcode form._
<br>


<!--
<img style="height:250px" src="AIAG B-10 Label File P, Q, K, V, 4S.jpg"/>
_Example of a Multi-Barcode form_.  
-->

<!--

**Notes**:

* **Zebra recommends using the 2D imager for capturing in Multi-barcode mode**.
* The device imager is automatically selected for Barcode-only Templates. 
* All [Zebra devices that support SimulScan](../about/#supporteddevices) are equipped with 1D/2D imagers (except early TC70 models).
-->
For example, a company that receives regular shipments accompanied with a label (like the one above) could create a MultiBarcode Template to map the part number and supplier number from the barcodes in the upper row, and the quantity-received information from the lower row to the corresponding fields of an application. 

-----

## Using Template Builder 
Template Builder is free for Zebra partners and other registered users. Existing Zebra customers, partners and ISVs with access to Partner Central can use their existing credentials to gain access to Template Builder. Others must register using the instructions below. <!-- Credentials are generally sent within one or two business days. -->

### Procedure Overview  
Below is a summary of the steps for creating a Template. The process is explained in detail in the sections that follow. 

1. **Log in** to the [Template Builder web site](https://ng-simulscan.zebra.com).
2. **Select the Document Type** required and **upload an image** of the Target Document to be scanned (.bmp, .jpg, .png or .pdf; 5MB max.).
3. **Identify Fields** of the Document and the data types (barcodes, text, etc.) of each. **Configure settings** where appropriate.
4. **Validate the Template** to verify the Fields and properties are set properly.
5. **Save and download** the completed Template(s) to the local host computer. 
6. **Copy Template(s) to the device** that will be performing the scans. 
7. **Activate the Template** from within DataWedge. 

-----

### 1. Create an Account, Log In

Visit the **[Zebra NG SimulScan registration page](https://signup.zebra.com/register.html?appId=SIMS).** Follow prompts to create a free account and enter all requested information. Once an account is created, Zebra administrators will send login information to the registered address. Zebra recommends planning ahead; this process could take several days.

In a browser, go to the **NG SimulScan Template Builder site: [ng-simulscan.zebra.com](https://ng-simulscan.zebra.com)**. Enter the login credentials. A screen appears similar to the image below: 
<img style="height:350px" src="login.png"/>
_Template Builder login screen_
<br>

<!--
![img](image6.png)
<br>
-->

-----

### 2. Upload Image for Template

Prior to uploading the image for the template, make sure the image was taken with the document placed flat against a constrasting background with the camera perpendicular to the surface, and make sure the image was captured without any shape distortion. 

To upload the image for the template:

1. Select one of the following Document Types:
    * **[Image Capture](#imagecapture) -** for layouts that do not change from one instance to another and contain different types of data (barcodes, text, images, etc.)
    * **[MultiBarcode](#multibarcode) -** decode multiple barcodes simultaneously or read specific barcode(s) from a multitude of barcodes on the form
2. An Open... dialog appears.
3. Select and upload an image of the Target Document for which to create the Template, observing the following parameters:
    * Supported file types: **.bmp, .jpg, .png or .pdf** 
    * Min. resolution: **640x480**
    * Max. resolution: **6000x6000**
    * Max. file size: **5MB**
    * MP size: **2 MP** for MultiBarcode, **3 MP** for Image Capture
    * For a .pdf, select page number from the drop-down (if necessary) <br>
Confirm that the **AutoCrop** feature (enabled by default) has accurately identified the Document boundaries. 
4. If boundary adjustments are necessary, click **Disable AutoCrop** and set the blue bounding box so that it is just outside the borders of the Document. Click **OK** when done. This creates the "Form Region of Interest" for the Document.
5. After saving the new Template, the uploaded image appears. Drag a box from the <u>upper-left corner to the lower-right corner</u> over each Region of the Document that contains data to be acquired. This creates the Field Regions of Interest, also known as Fields.
6. When finished, [configure Field settings](#3configuresettings) as required. 

**NOTE: Barcode Regions must <u>include only the bars and spaces</u>** - no surrounding characters should be included.

![img](upload-image.png)
_Upload sample image and designate Fields._
<br> 

**Alternative ways to create Fields**:

 * From the menu, select **Edit > Create New Field**. Enter a name for the field and draw a box around the corresponding Region.
 * Right-click in the Fields panel and select **Create New Field**. Enter a name for the field and draw a box around the corresponding Region.

![img](create-new-field.png)
_Add a Field to the Template._
<br>

-----

### 3. Configure Settings

Provide (or confirm) the following required settings for each Field: 
 * A name for the field, if desired 
 * Field Information (identify form, mandatory, read value from Field)
 * Field Type (barcode, picture) 
    * Field Settings - specific processing-mode settings (decoder type, decoder data options, image adjustments, etc.)
 
Available options are described in the following subsections and differ depending on the Document Type: **Image Capture** or **MultiBarcode**.

After configuring the settings, select **File > Save Template** to save the changes. **Save work often!** Unsaved changes could be lost if the screen is dismissed or a session timeout is reached.

<!--
![img](image6c.png)
_Click image to enlarge_
<br>
-->

-----

#### Image Capture Settings

The Field Properties panel is visible in the far-left column, and presents the Properties of the selected Field. Image Capture is _restricted to a maximum of 3 Fields._ 

<br>

##### Field Information

* **Use Field to Identify Form -** Designates the field as an Anchor Element, a unique attribute of a Document to positively identify it and determine its orientation relative to the scanner (ie. whether it is upside down). Anchor Elements in a given Document remain in the same location and are fixed (do not change), such as a company logo or static text. Enabling this option aids in increasing the accuracy in reading the form in different conditions, e.g. lighting.
    * **Also Read Value from Field -** sets the Template to acquire data from a Field that is designated as an Anchor Element (**Use Field to Identify Form** is checked). Enabled by default.
<br>

##### Field Type: Barcode (used to scan single or multiple barcodes)
* **Field Settings:**
    * **Barcode Type -** select the barcode symbology. Zebra recommends to select the appropriate symbology to filter out other symbologies and prevent them from being scanned, thus improving performance. If the symbology is not known, select ANY_BARCODE.
    * **Enable Character Checking -** enable this to use the barcode data to aid in identification of the barcode with the following option(s):
        * **Starts With -** nter character(s) to filter barcodes that must begin with the specified character(s). Leave this field blank if not needed.
        * **Contains -** enter character(s) to accept barcodes that contain the specified character(s)
        * **String Length -** enter the number of characters the barcode data must contain.
    * **Barcode Orientation -** select one of the following if the barcode is known to be rotated in a position other than the default position (0° Portrait):
        * **0° -** the barcode is right-side up on the form.
        * **90° -** the barcode is rotated 90 degrees to the left (counterclockwise).
        * **180° -** the barcode is upside down.
        * **270° -** the barcode is rotated 270 degrees to the left (counterclockwise).
<br>

##### Field Type: Picture (used to capture signatures, photos, or entire documents as images)
* **Field Settings (Image Adjustments):**
   * **Brighten Selection -** increase the brightness of the image
   * **Sharpen Selection -** increase the contrast between light and dark regions to bring out features.
   * **Normalize Selection -** change the range of pixel intensity values to increase the contrast, e.g. in cases of poor contrast due to glare
   * **Compress output image -** enter the percentage to compress the file
* **Signature Presence -** detect for the presence of a handwritten signature 
* **Output:** select the orientation to rotate the output of the region:
    * **0° -** the barcode is right-side up on the form
    * **90° -** the barcode is rotated 90 degrees to the left (counterclockwise)
    * **180° -** the barcode is upside down
    * **270° -** the barcode is rotated 270 degrees to the left (counterclockwise)
<br>

-----

#### MultiBarcode Settings

##### Field Information

* **Mandatory Field -** the barcode field must be present on the Target document. Enabled by default. Disable this option if the barcode field is not required to be present.
    * **Also Read Value from Field -** sets the Template to acquire data from a Field that is designated as a **Mandatory Field**. 

##### Field Type: Barcode (used to scan single or multiple barcodes)

* **Auto Group Identification -** rather than defining the decode data options of the group (e.g. Starts With or Contains), NG SimulScan can automatically group (n) number of barcodes when a common pattern is detected, such as same symbology, same first 1 or 2 characters of data, and same string length. The quantity (n) of the group of common barcodes is not fixed, the quantity will change but is dictated by one of the following quantity options:
    * **Barcode -** a separate mandatory “Quantity Barcode”, specifying the quantity of barcodes to capture, must be present on the Document along with the data barcode. The Quantity Barcode must: 1) start with the letter "Q" or "q", and 2) barcode length must be 3 digits or less.
        * **Return quantity barcode data with results -** the quantity of barcodes is output along with the scanned barcode data
    * **User/System Defined -** a user can manually set the quantity through the DataWedge UI, or the quantity can be set using the DataWedge intent API ?? [add link to DW docs]
* **Barcode Type -** select the barcode symbology. Zebra recommends to select the appropriate symbology to filter out other symbologies and prevent them from being scanned, thus improving performance. If the symbology is not known, select ANY_BARCODE.
* **Enable Character Checking -** uses the barcode data to aid in identification of the barcode with the following option(s):
    * **Starts With -** Enter character(s) to filter barcodes that must begin with the specified character(s). Leave this field blank if not needed.
    * **Contains -** Enter character(s) to accept barcodes that contain the specified character(s)
    * **String Length -** Enter the number of characters the barcode data must contain.

-----
<!-- 
#### Barcode Options
Some barcode options vary based on the symbology selected. For a complete list of options, see the [DataWedge Decoders guide](../../../../datawedge/6-0/guide/decoders/). 

#### Decode Data Options

**Enable Character Checking -** enables the barcode data to assist in the identification or verification of the barcode data being decoded. When selected, the following options become available:
 * **Starts With...** checks for the specified character(s) starting with the first character (index 0) of the acquired barcode data.
 * **Contains -** checks for the specified character(s) in the acquired data starting at the index specified in the "at" field (index 0 = the first character). 
 * **String Length -** the number of characters the barcode data must contain. Leave blank to leave length unspecified.

**Field settings:**
* **Barcode Type -** select the barcode symbology. Zebra recommends to select the symbology, if known, to filter out other symbologies and prevent them from being scanned.  If the symbology is not known, select ANY_BARCODE.
* **Enable Character Checking -** Enable this to use the barcode data to aid in identification of the barcode with the following option(s):
    * **Starts With -** Enter character(s) to filter barcodes that must begin with the specified character(s). Leave this field blank if not needed.
    * **Contains -** Enter character(s) 
    * **String Length -** Enter the number of characters the barcode data must contain.

**Barcode Orientation -**sets the orientation of the barcode relative to the scanner:

* **0° -** the barcode is right-side up on the form.
* **90° -** the barcode is rotated 90 degrees to the left (counterclockwise).
* **180° -** the barcode is upside down.
* **270° -** the barcode is rotated 270 degrees to the left (counterclockwise).

Orientation must be consistent across the entire Document. 

_**Different or additional Field Property settings appear under certain conditions**_.

-----
-->

#### Template Settings	
The Template Settings panel is used to configure settings such as form identifier, output, image correction and other settings that apply generally across the Template. 

**To access the Template Settings panel**: 

1. Log into the [Template Builder web site](https://ng-simulscan.zebra.com). 
2. Open the Template in need of settings adjustment. 
3. Click on **Template Settings** or from the top menu select **Edit > Template Settings.**
A dialog appears similar to the image below. 
![img](template-settings.png)
_Template Settings for an Image Capture sample._
4. Adjust settings as needed according to descriptions that follow depending on the Document Type of the Template.
<!-- ![img](image32.png) -->
<br>

##### Image Capture Template Settings

* **Form Identifier -** detects the form based on:
    * **Border -** ?? Use cases?
    * **Anchor Barcode -** if the location of a barcode is fixed, it is referred to as an Anchor Barcode. It is used to identify and crop other region types (e.g. image) of a given structured document. ?? Use cases?

* **Output Entire Form -** output the entire Document as an image, along with the extracted data. Enabling this feature affects scanning performance.
    * **Output Form As Region -** the entire form is output as a region. ?? Use cases?
    * **Normalize -** change the range of pixel intensity values to increase the contrast, e.g. in cases of poor contrast due to glare, prior to outputting the entire form
    **Advanced Image Correction –** enable image correction to parse targets that are slightly curved or crumpled.

* **Reset all Settings -** reset all template settings to the default settings.
<br><br>

##### MultiBarcode Template Settings

* **Data Formatting:**
    * **Prefix to Data -** enter alphanumeric character to prepend to data prior to output
    * **Suffix to Data -** enter alphanumeric character to append to data prior to output

* **Variable Field Presence Template Timeout -** ?? applies where specific barcodes can be uniquely defined but their presence varies from label to label. The time-out applies to all barcodes fields in the Template.
Select one of the following based on the number of barcodes on the Template:
    <ul>
    <li><b>Low -</b> ?? Less than 5 barcodes. Use when barcodes are close to each other and can be decoded in a single field of view and it is not necessary to move the device to decode.</li>
    <li><b>Medium -</b> ?? Less than 10 barcodes. Use when barcodes are close to each other but cannot be decoded in a single field of view, therefore it is necessary to move device/aimer slightly in order to capture all fields of interest.</li>
    <li><b>High -</b> ?? Less than 20 barcodes or less. Use when barcodes are far from each other and requires the device to be physically moved to aim and capture each barcode.</li>
    </ul>

<!--
![img](image6b.png)
<br>

![img](image6d.png)
<br>
-->

-----

### 4. Validate Template
Template Builder provides a Validation feature, which verifies template Fields and returns useful information about Field properties and settings prior to actual use. 

**To Validate Template**: 

Open the Template to be validated and select **Edit > Validate Template.** 

![img](validate_template.png)
_Validate Template option._
<br>

A Validation Summary is displayed with one of more of the following messages:

**Form Decoded:**

* The Template successfully identified the target Document. 
* At least two Fields have been designated "Use field to identify the form" to identify the document.
* Barcode Field(s) designated as “Use field to identify the form" use a supported symbology and its length is within the supported range.
* The uploaded image of the target Document is clear and its resolution is correct (2 MP for MultiBarcode, 3 MP for Image Capture).

**Key field(s) identified in template**:

* Required attribute(s) (e.g. name, number) found for each marked region. 

**Final result**: 

* (√) = "Success!" 
* (X) = "Error!" 

-----

#### Validation Preview

Following validation, test results can be reviewed by clicking on **View Preview** button as in the image below. 

![img](validation_success.png)
_Access Validation Preview for validation results._
<br>

The image below shows a validation preview. Clicking on any Field in the image area displays in the left-hand column the data that is parsed by that Field. 

![img](image28.png)
_Validation Preview of an Image Capture sample._

<!-- ![img](validation_failure.png)
<br> -->

-----

#### Validation Troublshooting

The Validation process may fail due to any of the following reasons, based on the template type.
<br><br>

##### Image Capture Templates

For Anchor Barcode-based forms:
* **Error Message:** "Anchor barcode orientation is not properly set."<br>
**Suggested Solution:** Properly set the orientation of the anchor barcode.
* **Error Message:** "Contents are widely spread."<br>
**Suggested Solution:** If the contents on the form are widely spread apart, one Anchor barcode may not be sufficient. More than one Anchor barcode would be required.

For Border-based forms:
* **Error Message:** "Form image is not cropped properly."<br>
**Suggested Solution:** If **Auto Crop** does not crop the image of the form properly, disable **Auto Crop** and manually crop the image.
<br><br>

##### MultiBarcode Templates
* **Error Message:** "Image Resolution is too poor for barcodes fields to be processed/decoded."<br>
**Suggested Solution:** Download the template to the device and perform a test with a physical label. If it fails, try recreating the template with a better image resolution.
* **Error Message:** "At least one Template Field cannot be found (i.e. it is looking for a barcode with character checking and it is not found)."<br>
**Suggested Solution:** Decode each barcode individually on the form to ensure that all the rules of the template can be met. If at least one field is missing, then the Template will not work.
* **Error Message:** "One or more Barcodes are damaged and cannot be decoded."<br>
**Suggested Solution:** Ensure that each barcode can be decoded with the mobile computer. Once validated, the template should work successfully on the device. If the barcode cannot be decoded on the device, then try another label that can be decoded.
<br>

-----

### 5. Deploy Templates
After settings are configured and validated, select **File > Download Template** to download a copy to the local host.  **Zebra recommends testing all Templates before deployment to devices** to ensure proper operation.

![img](image40.png)
_Download Template option._
<br>

Once downloaded, the Template can be deployed to mobile computer devices.

**Methods of Template Deployment**: 

* **Manually via USB** cable to the device using the Android Debug Bridge (ADB), copy the .XML file to `/enterprise/device/settings/datawedge/templates/`.
* **Remotely using [StageNow](../../../../stagenow)** and the [UI Manager](/mx/uimgr/) service
* Remotely through a company's own mobile device management (MDM) system (if supported by that system)
* **[DataWedge Mgr CSP](/mx/datawedgemgr)** enables secure mass deployment of templates. Refer to:
    * [Document Capture](../input/barcode/#decoderselection), DataWedge's equivalent of Image Capture
    * [Import NextGen SimulScan Templates](../admin/#importnextgensimulscantemplates)
    * [NG SimulScan Template Action](/mx/datawedgemgr/#ng-simulscan-template-action)

-----

## Modify a Template
Existing Templates can be modified to address changes that occur to incoming Documents, to allow for workflow changes, to make adjustments to settings based on input from the field, or for any other reason. 

> **Warning: Do not attempt to modify the Template file by hand**. Templates contain machine-generated XML stored in Base64-encoded files, and are not intended to be edited manually. 

**To modify an existing Template**:

1. Log into the [Template Builder web site](https://ng-simulscan.zebra.com). 
2. Click the **Open Template button** or select **File > Open Template** to Open the template to be modified.
3. Edit Template settings as required.
4. Save using **File > Save Template** or **File > Save As...** to create a new version. 
5. Test, Validate and Deploy as explained above. 

![img](save_as.png)
_Save Template after making modifications._
<br>


-----

**Related Guides**: 

* [DataWedge](../../../../datawedge)

		
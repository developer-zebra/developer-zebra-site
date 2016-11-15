---
title: Template Builder
layout: guide.html
product: SimulScan
productversion: '1.1'
---

## Overview
Template Builder is a web-based tool for defining the information captured by SimulScan and determining how it will be processed and made available to applications. Templates are the key to controlling SimulScan data-capture features and for processing acquired data as needed. 

Most acquisition tasks involve capturing data from printed documents, which often vary in size, shape and layout and can be a challenge to accuracy. Templates solve this problem by "teaching" SimulScan about the documents it will encounter and defining how to scan and process data for each instance of a "Templated" document. 

<img style="height:350px" src="msi_reader.png"/>
*A typical barcode-only form, SimulScan's most common and effective usage scenario*.
<br>

Templates work on the principle that the _**location**_ and _**type**_ of data in each region of a form (i.e. barcodes, alpha/numeric characters, signatures, etc.) will remain consistent and that _**only the data will change**_ with each new instance of that form. Templates that uniquely identify each region and data type of a particular form allow SimulScan to capture the data quickly and accurately, and permit developers to map the acquired data to specific fields of their application. 

For example, a company that receives regular shipments accompanied with a label like the one above could create a [Multi-barcode](../about/#multibarcodemode) Template that maps the part number and supplier number from the barcodes in the upper row, and the quantity-received information from the barcode in the lower-left corner to the corresponding fields of an application. 

-----

### What's in This Guide
This guide provides step-by-step instructions for using the GUI-based Template Builder tool to [create Templates](#usingtemplatebuilder) and them to the devices. For those not familiar with SimulScan concepts and terminology, please see the [About SimulScan](../about) page before proceeding. 

-----

### Template Builder Terms

**Anchor Element(s) -** one or more unchanging images or other Document attributes (i.e. company logo) that SimulScan can use to determine Document orientation.

**Data Type -** defines the source (barcode, OCR, etc.) of data being acquired from a Region of a Document. 

**Document -** printed form containing data to be acquired (i.e. a shipping receipt). Documents should be associated with no more than one Template. 

**Field -** region of a form associated with a data type and processing method (i.e. a barcode).

**Grouped Regions -** refers to sections of a Document that require Fields (i.e. an address) to be grouped logically as an aid to processing the acquired data. 

**Mixed-Data Mode -** captures multiple data types from mixed sources, such as barcodes, alpha/numeric characters, checkboxes and images. 

**Multi-barcode Mode -** used on forms from which only barcode data will be acquired. This is the most common usage scenario. 

**Multi-Line -** acquisition using OCR of multiple lines of alpha/numeric characters (i.e. a complete address).

**Multi-Template -** a beta feature that allows multiple Templates to be treated as one to simplify workflow. 

**OCR -** Optical Character Recognition, a processing mode for acquiring alpha/numeric characters.

**OMR -** Optical Mark Recognition, a processing mode for acquiring binary (yes/no) data from checkboxes.

**Picture -** graphical image to be acquired as a file (i.e. `.jpg` file).

**Secure Storage -** the online area accessible only by credentialed user(s) in which Templates are stored. 

**Signature -** generally of the recipient of a shipment (captured as an image).

**Single-Line -** acquisition using OCR of a single line of alpha/numeric characters (i.e. a product number).

**Target, Structured -** a Document with a layout that doesn't change from one instance to another.

**Target, Unstructured -** a Document with no fixed layout, or a Document that has not been defined with a Template.

**Template -** XML document that defines the fields (Regions) of a shipping receipt or other document to be scanned. Templates are always associated with exactly one Document. 

**Template Persistence -** keeps Templates in sync between a development host and the Template Builder host server.    

**Validation -** a beta feature that checks whether the Fields and their properties are correct for a given Document before a Template is deployed to devices. 

-----

## Using Template Builder 
Template Builder is free but registration might be required. Zebra customers, partners and ISVs with access to Partner Central can use their existing credentials for access. Others must register using the instructions below.

**Note**: SimulScan can be used without a License if the requirement is to scan only barcodes through an app using [DataWedge](../../../../datawedge). A SimulScan License is required for access to OCR and OMR features and/or SimulScan APIs. For more information, please see the [Licensing page](../license).

### Quick Steps
1. Log in, Select the Template Type.
2. Upload an image of the Document to be scanned (.bmp, .jpg, .png or PDF).
3. Identify regions of the Document and their data types (barcodes, text, etc.).
4. **Save work often**. Template Builder does not automatically save changes. 
4. Download the completed Template(s) to the development host (local PC). 
5. Copy the Template file(s) to the device that will be performing the scans. 
6. If applicable, select the Template from within the scanning app.  

-----

### Create an Account
**&#49;. Visit the [Zebra SimulScan registration page](https://signup.zebra.com/register.html?appId=SIMS)**, follow prompts to create a free account and enter all requested information. Once an account is created, Zebra administrators will send login information to the registered address. **Zebra recommends planning ahead; this process could take several days**.

![img](image5.png)
<br>

**&#50;. Point a browser to [simulscan.zebra.com](https://simulscan.zebra.com)** and enter the login credentials. A screen appears similar to the image below: 

![img](image6.png)
<br>

-----

### Select Template Type

**&#51;. Select the desired template type**: 

* **Structured Targets -** for layouts that **do not** change from one instance to another. Select this option to: 
 * Scan barcodes
 * Recognize characters (OCR)
 * Recognize check marks (OMR)
 * Capture Signature(s) or other images
 * Extract other key fields of interest

* **Unstructured Targets -** for layouts that change or that **have not** been defined with a Template. Select this option to: 
 * Scan multiple barcodes simultaneously 
 * Use OCR for a single line of alpha/numeric text 
 * Use OCR for a multiple lines of alpha/numeric text 

**&#51;a. If selecting Structured Targets**:
* An Open... dialog appears
* Select the image (.bmp, .jpg, .png or PDF) of the Document for which to create the Template**
* Minimum image resolution is 640x480 pixels
* Maximum image resolution is 6000x6000 pixels
* Maximum image file size is 5MB
* For a PDF, select page number from the drop-down (if necessary) 

**&#51;b. If selecting Unstructured Targets**:

 * Select "Multi-barcode" to capture barcodes or "OCR" for alpha/numeric text (see below)

![img](image6a.png)
<br>

**&#52;. Save the Template to proceed**:

![img](image6b.png)
<br>

> **Warning: Do not attempt to modify the Template file by hand**. Templates contain machine-generated XML stored in Base64-encoded files. They are not intended to be edited manually. 

-----

### Identify Document Regions

> **Skip to Step 7 for Unstructured Targets**. 

After uploading an image of the target Document...

**&#53;. Confirm that the "AutoCrop" feature (enabled by default) has accurately identified the Document boundaries**:

![img](image6d.png)
<br>

**To adjust, click "Disable AutoCrop" and set Blue bounding box so that it's just outside the borders of the Document. Click "OK" when done. This serves as the base reference for identifying the form and processing its contents**.  

**&#54;. Drag a box <u>from the upper-left corner to the lower-right corner</u> of each Region of the Document that contains data to be acquired**:

![img](image6c.png)
<br>

Alternative ways to create Fields:

 * Select **Edit --> Create New Field**, enter a name for the field and draw a box around the corresponding Region.
 * Click the **Add Field** button (arrow, below), enter a name and draw a box around the corresponding Region.

![img](image6e.png)
<br>

Fields not specifically named will be assigned a generic name (as shown). These can be edited later as desired (see [Modify a Template](modifyatemplate)). 

Provide (or confirm) the following required settings for each Field created: 
 * A name for the field, if desired.
 * Properties (length/width and X-Y coordinates)
 * The required Processing mode (barcode, OCR, etc.) 
 * Processing-mode settings (decoder type, text-type, etc.)
 * Select at least three "Anchor Elements" (explained below) 

> **Be sure to save work often!** Template Builder does not automatically save changes. Unsaved changes will be lost if the screen is dismissed or the session timeout is reached.  

### Select Anchor Elements
In addition its use of Document border dimensions, SimulScan uses Fields, company logos or other unique attributes of a Document to positively identify it and determine its orientation relative to the scanner (i.e. whether it's upside down). Optionally, Anchor Elements can contain data to be acquired, such as a barcode or image. Zebra recommends that at least two Anchor Elements be identified in accordance with the guidelines below. 

**Anchor Element Guidelines**:

* Select two or three Fields per document as Anchor Elements. 
* Anchor Elements should be spread across the top, bottom and side(s) of the Document.   
* For Structured Targets, static fields such as logos and preprinted content work best.
* For barcode-only targets, barcodes with a fixed location on instances of a label work best.
* For fixed barcodes, select the “Barcode’s location is fixed” option in the Properties panel.
* Anchor Elements need not contain data to be acquired ("Also Read Value from Field" is optional).

![img](image36a.png)
<br>

For example, in the Postal T&L Document above, the logo in the upper-left corner and the barcode in the upper-right would identify this form adequately for SimulScan to activate its template. When using a fixed barcode as an Anchor Element, be sure to **select the “Barcode’s location is fixed” in the Properties panel**, as below: 

![img](image29.png)
_This attribute appears only in "Structured Targets" Templates that use non-postal symbologies_.
<br>

Zebra recommends selecting the fixed-location attribute to help improve processing time whenever it is known that a barcode will be in a consistent location. 

**&#55;. When the Template is finished, Download it to the local development host**:

![img](image40.png)
<br>

**The Template can now be deployed to scanning devices**. 

----

### Deploy Templates 
The deployment location of Templates to the device varies depending on whether SimulScan is to be used through Zebra's [DataWedge service](../../../../datawedge) or through an organization's own app written with [EMDK](../../../../emdk-for-android) and using the SimulScan APIs. 

**Zebra recommends [validating Templates](#templatevalidation) before deployment**. While this feature is still currently in beta, validation can provide useful information about the completeness of a Template and its Field properties and settings. 

**Methods of Template deployment**: 

* **Manually** via USB cable to the device using the Android Debug Bridge (ADB) 
* **Programmatically** through [EMDK for Android](../../../../emdk-for-android) development tools
* **Remotely** using [StageNow](../../../../stagenow) and the [UI Manager](/mx/uimgr/) service
* Remotely through a company's own mobile device management (MDM) system (if supported by that system)

Alternatively, Templates saved to the `/<accountID>/templates/release/` folder on the Template Builder web site can be accessed programmatically through EMDK APIs using the `FetchTemplate()` method. The path will appear similar to the image below: 

![img](image6g.png)
<br>

**If using SimulScan through DataWedge, deploy Template(s) to the device in**: 

* `/enterprise/device/settings/datawedge/templates/` folder

**If using SimulScan through EMDK, deploy Template(s) to** 

* `/Android/data/` or any other folder accessible to the app

**Note: All files deployed within the** `/enterprise/` **folder will persist on the device following an Enterprise Reset**. 

-----

MODIFY A TEMPLATE

REMANING THE TEMPLATE saved only the mappings, not the image  

Licensing
Templates that include OCR or OMR functionality will require an additional license to be purchased to unlock its full functionality. Below are the details to purchase, deploy and install licenses.


Purchasing a license
- Licenses can be purchased from https://softwarelicensing.zebra.com/
- Documentation at https://softwarelicensing.motorolasolutions.com/documentation/index.html 
- Licenses can be purchased for a specific device based on the serial number or for larger deployments using the enterprise-wide deployment license
 
Installation 
- Licenses are presently only supported only on TC55 and TC75 devices right now.
- Licenses can be installed in one of the below two ways:
Option 1 : Using the built-in Settings app 
Use this option to install an Individual license or a fewer number of licenses.
- Copy the License.xml file downloaded from the licensing server to an accessible location on the device.
- Launch the Settings app -> About Phone –> Legal Information -> Symbol Licenses -> Menu -> Install license -> point to the file on the device.
- This will install the license. 
Option 2:  Using StageNow.
Use this option for larger deployments.
Please refer StageNow’s documention for further details.
StageNow includes wizards to deploy content specific to SimulScan to make this deployment simpler.
 
Usage 
- Nothing required.  Once a license is installed, the full functionality of SimulScan will be unlocked. 
- A given license enables SimulScan features leveraged via DW, EMDK or Rho [in the future] for a given device.
- A factory reset will remove the license entitlement.

Multi-Template 
A Template is associated with a single document. A user can then create a Template XML file that stitches together multiple single Templates to form one larger Template, called as “multi-template”. This would serve well in use-cases given an end-user workflow where the user works with a small set of multiple document in a given day (around two to six). A single multi-template can be created for all Documents, so the app would only need to load a single Template to cater to all forms in a workflow. The software auto-selects one of the four documents providing the user with feedback as well. This feature is presently is still in Beta.

Grouped Regions
This feature serves well in use-cases where a logical entity is split into multiple fields in a document (e.g. address). These multiple fields can be grouped logically into one group to help in the next level of processing like address validation or translation.

Secure Storage
All Templates created by a user are stored in a secure location for future reference. Folders are created with the login user name and the user can use the File -> Manage Templates option to manage their folder. The user can create folders, cut, copy or move templates. A default “Release” folder is pre-created which is visible from the SimulScan client on the device when provided the right login credentials.

Validation
Validation provides a mechanism with which a Template can be verified on the Template Builder before they are deployed to devices for use. This feature validates if the “fields” marked on the document and the properties set for each of the field are correct, prompting the user to rectify the Template if required. Validation is still in Beta. 

Template Persistence
Template Builder provides a mechanism to save Templates into a dedicated space for your User ID on the server. Open/Save opens or saves a given Template into your space in the server.
Upload/Download allows for uploading/downloading a Template from/to your local machine. It is automatically saved in the server as well.


Template Builder Window


File Menu
The File menu has been updated to distinguish open/save from Upload/Download. Open and Save are actions based to the server-based store for the user. Upload and Download are actions performed on the local computer environment.
NB. AutoSave will background save changes to the Template.
Save As… has been added to allow easy duplication of Templates & Multi-Templates.
Rename Multi Template has been added. Template renaming is handled in the Fields panel.
Manage Template opens the O/S File dialogue to enable organization of Templates within the server store.
Create New… menu has two child options. Template & Multi Template creation.

--image--

File Menu Options
Create New (Ctrl+Alt+N) – Create a new Template or Multi Template.
Open Template (Ctrl+O) – Open an existing Template from your space on the server.
Save Template (Ctrl+S) – Saves the current Template to your space on the server.
Save As – Saves the current Template to your space on the server under a different file name.
Rename Multi Template – Change the name of a multi-template to a new name.
Manage Templates – Open up file browser on server to perform various tasks on Templates stored.
Upload Template (Ctrl+I) – Upload Template from local computer to the server.
Download Template (Ctrl+E) – Download Template from server to local computer.
Sign Out – Closes the application (prompting to save if there is still a file in the workspace and it has not been saved).

--image--

Edit Menu Options
Undo (Ctrl+Z) – Undo the previous action.
Redo (Ctrl+Y) – Redo the previous undone action.
Create New Field (Ctrl+F) – create a new field on the Template.
Rename Field – Change the name of the current field. Opens the field name text box.
Duplicate Field (Ctrl+D) – Make a copy of the current field.
Change Image – Remove the current image and replace with a new image.
Validate Template – Perform validation on the Template, ensuring that the created Template will work on a device.
Template Settings – Opens window that allows changing various parameters associated with the Template.

--image--

Template Settings	

--image--


Input Source – Use to specify a particular inputs source Camera or Imager or Default. Choosing “Default” results in the input sources being activated as below on the device: 
Camera for Structured and Unstructured targets 
Imager for Barcode only targets
In the absence of an Imager on the device, the camera is picked for Barcode only targets as well
If the Camera is disabled, the Imager is picked as a fall back. If the Imager is also absent, an error message is shown.


Flash Mode – Choose between Off or On


Audio Feedback – Enabled by default. Uncheck to disable audio feedback. 


Haptic Feedback – Enabled by default. Uncheck to disable haptic feedback.


LED Feedback – Enabled by default. Uncheck to disable LED feedback.


UI Result Confirmation - Check to require confirmation by the user before the app receives the results. Disabled by default for “Barcode only” targets. Enabled by default for “Structured and Unstructured Targets”.


Identification Timeout – Set the maximum amount of time to identify the target document.


Processing Timeout – Set the maximum amount of time to process the target document after it is identified.


Automatic Image Capture – Check to automatically trigger processing forms once identified. Uncheck to manually trigger processing forms when the user taps the screen or presses a trigger button, once identified.


Auto Capture Sensitivity – Set the sensitivity of the auto capture on a scale of 1 to 10, 10 being the highest. Valid only when the Automatic Image Capture is enabled.   


Output Entire Form – Check to output the image of the entire form along with the results of the extracted data. Checking this will affect the performance. Setting valid only for “Structured Targets”.


Advanced Image Correction – Check to enable advanced image correction to parse targets that are slightly curved or crumpled.


Properties Panel
The Properties Panel can be found on the left side of the screen. Each field has the following options that can be configured.


Field Information
Use Field to Identify Form:- Check this box to use  the field to identify the form. The field will not be                output by default for “Structured Targets” Templates.
      Also Read Value from Field:- Enabled by default. Editable when the “Use Field to Identify Form” is checked. Check this box to also output the value from the field. 


Field Adjustments
Width - Set the width of the field.
Height - Set the height of the field.
X - Set the horizontal position of the field in pixels.
Y - Set the vertical position of the field in pixels.
Here the X and Y values are with respect to the top left hand corner (0, 0) of the document.


Processing
Presently four processing modes are supported: Picture, Barcode, OCR, and OMR.
Barcode: Used to scan single or multiple barcodes in the field of view.
OCR: used to read text, such as names, addresses, etc.
OMR: Used to read check marks and bubbles.
Picture: Used for signatures, photos, entire documents (if it’s a busy document with lot of handwritten content).


Additional options may appear under certain conditions.
 Signature Presence: Editable when the field is of “Picture processing” mode. Check this box to determine whether or not a signature is present in the selected region, and flag an error to the user if a signature is not found.


      Barcode’s location is fixed: Editable when the field is of “Barcode processing” mode and the Barcode Type is set to one of the supported symbologies for this feature. Check this box if the selected barcode will always be in the same location on a given document. It helps improve the form identification accuracy drastically.




Settings
Each processing mode has various settings associated with it that can be set.








Barcode 
Barcode Type
Select the Barcode symbology.

--image-- TABLE

Most of the above supported symbologies are Anchors except below barcode types.


composite AB 
composite C 
US Postnet 
US Planet 
UK Postal 
Japanese Postal 
Australian Postal 
Canadian Postal 
Dutch Postal 
US4state 
US4State FICS 
TLC39 
Decoder Signature 
Webcode








Barcode Options
This option will appear depending on which symbology is chosen. Refer to additional documentation regarding Barcode Options.




Decode Data Options
   Enable Character Checking: Check this box to use the barcode data to assist in the identification of the
         barcode.
Starts With / Contains: Only enabled if “Enable Character Checking” is checked. Enter character(s) into this field to filter barcode by characters at the beginning or at some index in a String. Leave blank if characters should not be checked.
At: Only enabled if “Enable Character Checking” is checked and “Contains” is chosen. Enter the index at which the character checking will begin. The index is “0” based, staring from Left most character. 
String Length: Only enabled if “Enable Character Checking” is checked. Enter the number of characters the barcode data must contain. Leave blank if no length is specified.


Barcode Orientation
Select the direction that the barcode is facing.
0°: Select this if the barcode is upright with respect to the form.
90°: Select this if the barcode is rotated 90 degrees to the left with respect to the form.
180°: Select this if the barcode is upside down with respect to the form.
270°: Select this if the barcode is rotate 270 degrees to the left with respect to the form.


OCR 
Character Sub-Set
Set the allowed characters for the OCR region.
All caps alphabets: OCR region contains only alphabets in the upper case All small alphabets: OCR region contains only alphabets in the lower case Only Alphabets: OCR region contains only alphabets
All digits: OCR region contains only digits
Alphanumeric: OCR region contains both digits and alphabets in both cases
Enter custom sub string set here: Enter a user-defined character set here


















Regular Expression
Set the regular expression describing the string.

 --- TABLE ---

The PCRE (Perl Compatible Regular Expressions) library is referenced for regular expression pattern matching. 
    http://www.pcre.org/
    http://perldoc.perl.org/perlre.html   (Perl regular expressions man page)
                
 Specifying both the character subset and regex narrow the range of pos

--image-- UNION

Verification
    Word Check: Check this box to indicate that regions contain words in the English dictionary (as opposed to ID numbers, serial numbers, etc.).


Pick English or other European languages
Choose the language that an OCR region is in.
English: OCR region is in English and contains standard characters found in the English language. European: OCR region is in a European language and contains additional characters, such as umlauts, digraphs, etc.










OMR 
Bounding Box Shape
Choose the shape that the OCR mark is in. Circle: OCR mark is inside of a circle boundary. Oval: OCR mark is inside of an oval boundary.
Square: OCR mark is inside of a square boundary.


Picture 
Image Adjustments
Brighten Selection: Brightens Picture region.
Sharpen Selection: sharpens Picture region.
Compress Output Image: Reduce size of output region.


Output
This feature facilitates to set information orientation with respect to the form before it is outputted. Here you have to mark the region’s anticlockwise orientation with respect to the form. 

multi-template --image--

other image - --image--

0°: Rotate the region anticlockwise by 0deg before output.
90°: Rotate the region anticlockwise by 90deg before output.
180°: Rotate the region anticlockwise by 180deg before output.
270°: Rotate the region anticlockwise by 270deg before output.


Creating a New Template
Creating a New Template

1. Log into https://simulscan-uat.motorolasolutions.com using your PartnerKey credentials or Zebra Core ID and password. If you don’t have one, go to  https://myaccount.motorolasolutions.com/euri/user_registration.xhtml to register and obtain one.


Upon logging in successfully, the below landing page is displayed:

--image--

2 Choose “Open Template” to open a previously created and saved Template and edit it, or choose “Create Template” to create a new Template. Alternatively, if you press “Cancel”, you can choose one of these two options by clicking on File -> Create New -> Template or File -> Open Template.

--image--


3 For the purposes of this help document, we will assume that the user wants to create a Template; thus, the “Create Template” option will be chosen. After clicking on this option, the following screen will appear:

--image--

Choose “Barcodes only” , “Structured Targets” or “Unstructured Targets” depending on the type of your Template you would like to create.


4 Load an image of the document you’d like to describe (BMP and JPEG files are supported) and ensure the size of this pic is 1.5 MB or less; higher resolution images may work, but performance may be slower. It is also recommended the image be taken with the document placed flat against a contrasting background, facing perpendicular to the camera, and captured without any shape distortion.


5 In the “Structured Targets” mode, after loading the sample image, the form border needs to be defined by adjusting the blue window as in the picture below. This serves as the base reference frame that the software detects for further processing. Ensure that this border matches the border of the uploaded form; if these borders do not match, the resulting output may be incorrect.

--image--

The control buttons on the left can be used to tweak the image while adjusting the blue crop window. Press OK when done.


Note: This does not need to be done for forms in the “Barcode only” mode.










Next, the following screen will be displayed:

--image--

Define the Template by entering a suitable Template name in the upper left box. Please note that Template name cannot start with “Default –“.


7 For “Unstructured Targets” a static image is loaded automatically and you can create either “Single” or “Multi” line freeform OCR templates.  

--image--

8 Create fields for the regions of interest on the form. To create a field, you can do one of two things:
Hover your cursor over the top-left corner of a region of interest on the form, then click and drag the cursor to the bottom-right corner. A text label will then appear on the left side corresponding to the field. Rename the field as desired.




Go to Edit -> Create New Field. A text label will then appear on the left side. Rename the field as desired. Next, hover your cursor over the top-left corner of a region of interest on the form, then click and drag the cursor to the bottom-right corner. The rectangle created will then be associated with the field previously created from the Edit menu.


Fields must be marked as used for form identification, output, or both. By default, a field is output (i.e. returned to the user when used on the device); more on this below.


9 Ensure that 2-3 fields are marked as used for identification (by checking the “Use Field to Identify Form” checkbox on such regions). These fields will be used to identify the form.


In the “Barcodes only” mode, all the barcodes to be output need to have this checkbox marked.


In the “Structured Targets” mode, it is recommended regions with empty spaces around it (e.g. logos, static text, etc.) are used to identify the form. Also in this mode, it is recommended that fields on different sides of the form be used for identification.


If the same field should be output by decoder engines (i.e. displayed to the user), the “Also Read Value from Field” checkbox must be marked as well.


10 For each field, enter the field name and set the various properties. For additional help in creating regions, refer to the section titled “Creating a New Field”.


--image--

Download the Template and save it to your local machine.


11 If you intend to use :
Datawedge, copy the Template to /enterprise/device/settings/simulscan/templates/ 
The SimulScan Showcase app, copy it to /sdcard/simulscan/templates/ folder
For all else, copy to a convenient location on the sdcard or /enterprise/usr folder

--image--

Creating a New Field
1 Mark the processing mode for the field. Fields may be marked with one of four different processing modes: Barcode, OCR, OMR, and Picture as illustrated below :

--image--

2 Set the various settings for the field once the processing mode has been selected.
Barcode

--image--

First, choose the barcode symbology in the “Barcode Type” field. It is recommended that the symbology be set if it is known, as a form can only contain one barcode with type ANY_BARCODE. Next, set the Barcode Options associated with the symbology chosen, if applicable.






Following this, if the barcode always follows some pattern in its text (e.g. always 2 characters, always starts with “Q”, etc.), you can enable character checking. If enabled, fill out the appropriate sections with the known information.


Finally, if the barcode is known to be at a rotation other than the normal one, change the orientation accordingly.




OCR

--image--

In an OCR region, if the types of characters for the field will always be limited to a subset of all characters, it is recommended that the “Character Sub-set” option be set. This allows the number of possible characters to be reduced, thus increasing OCR accuracy. Several predefined sets are available, or you can enter a custom set instead.


Next, if the information follows a regular pattern all of the time (e.g. for a field with content “08-08- 14”, one possible way of describing the format is “two digits, followed by dash, followed by two digits, followed by dash, followed by two digits”), one can elect to define a regular expression to govern the region’s output. This should only be used if the format defined can be guaranteed for the region; otherwise, the output may be incorrect.


If the region contains words in a language (as opposed to ID numbers, serial numbers, etc.), the “Word Check” option should be marked.


Finally, if the region will contain characters typically found in European language (e.g. umlauts, digraphs, etc.), the language option should be changed to “European”.






OMR

--image--

Change the OMR box shape to the shape found on the form.


Picture

--image--

Use the Image Adjustments screen to modify the output picture. Currently, these options are not required to be set in order to output a Picture region correctly.










Creating a Multi-template

--image--

Here from above screen you can set the name of the Multi template.

POPULATING THE MULTI TEMPLATE

--image--

MULTI TEMPLATE PANEL OPEN

--image--


Validating a Template
Validation feature makes sure the Template created on “Template Builder” web-tool is working well on devices prior to its deployment. Thus it facilitates the user to make appropriate changes/settings before finalizing a Template to be built & distributed on devices. If the Template is validated successfully, that means the “Fields” marked on the form and the properties/settings applied for each of the field are correct and accurate.




Validation workflow
1 By selecting either of below options you can start “Validation” process as give below.

--image--


2 Select OK on the confirmation dialog that pops up.

--image--

When a Template is validated, first it shows a “Validation Summary” as given below.

--image--

Validation Summary


Form Decoded -
Displays a tick (√) it means the document was identified successfully using the created Template. Displays a cross (X), if one or more of the below checks failed:
2 or 3 fields marked as “Use field to identify the form” to help identify the document.
Field marked as Barcode and “Use field to identify the form”, has the right symbology enabled and its length is within the supported range in the Barcode Settings.
Image uploaded is clear.
For “Barcode only” Templates image resolution is 2MP & it’s 3MP for “Structured Targets”.  


Keyfield(s) identified in template –
This sanity checks the Template structure. 
Displays a tick (√) if it’s in good order.
Displays a cross (X), if below check failed:
Any of the mandatory attribute(s) for each of the marked regions. Eg:- name, number, x, y, width, height, etc are found.


Field setup & data parsing - 
Displays a tick (√) if all the fields on the form cover the valid vicinity of the data of interest. 
Displays a cross (X) in examples like below. Mainly relevant to fields marked as Barcode processing mode.


--image--

--image--


Final result- 
Displays “Success!” if form is parsed successfully against the given Template else an “Error!” is displayed.


4 Validation Preview.

When a form is parsed by decoder engine successfully, you can review the results by clicking on “View Preview” button on the above screen.

By clicking on each of the field you can navigate through the parsed data on the left-hand side window. For OCR data it also shows the accuracy level for each line of the region it parsed as “high”, “medium” or “low” in addition to the decoded output. Accuracy level for each of the line is separated by the last colon(:) of that line. And for OMR regions it indicates “Checked”, “UnChecked” or “Undecided” states.

--image--
deploy removed

Appendix


Barcode Advance Settings


Code39
Length1 - Use to set decode lengths (default - 0).
Length2 - Use to set decode lengths 4 (default - 55).
Verify Check Digit - Enable this feature to check the integrity of all Code 39 symbols to verify that the data complies with a specified check digit algorithm. The digital scanner decodes only those Code 39 symbols that include a modulo 43 check digit. Enable this feature only if the Code 39 symbols contain a modulo 43 check digit (default - disabled).
Report Check Digit - Transmit Code 39 data with or without the check digit. A check in the checkbox indicates to send Code 39 data with check digit (default - disabled).
Full ASCII - Code 39 Full ASCII is a variant of Code 39 that pairs characters to encode the full ASCII character set. To enable or disable Code 39 Full ASCII (default - disabled),
Redundancy - Sets the reader to read the bar code twice before accepting data. A check in the checkbox indicates that redundancy is enabled (default - disabled).
Convert Code39 To Code32 - Code 32 is a variant of Code 39 used by the Italian pharmaceutical industry. Scan the appropriate bar code below to enable or disable converting Code 39 to Code 32 (default - disabled).
Report Code32 Prefix - Scan the appropriate bar code to enable or disable adding the prefix character “A” to all Code 32 bar codes (default - disabled).
Security Level - Options: Security level 0, Security Level 1, Security Level 2 and Security Level 3 (default - Security level 1).


MSI
Length 1 - Use to set decode lengths (default - 4).
Length 2 - Use to set decode lengths (default - 55).
Redundancy - Sets the reader to read the bar code twice before accepting data. A check in the checkbox indicates that redundancy is enabled (default - enabled).
Check Digit - With MSI symbols, one check digit is mandatory and always verified by the reader. The second check digit is optional.
·        One Check Digit - Verify one check digit (default).
·        Two Check Digits - Verify two check digits.
Check Digit Scheme - Two algorithms are possible for the verification of the second MSI check digit. Select the algorithm used to encode the check digit.
·        Mod-11-10 - First check digit is MOD 11 and second check digit is MOD 10 (default).
·        Mod-10-10 - Both check digits are MOD 10.
Report Check Digit - Transmit MSI data with or without the check digit. A check in the checkbox indicates to send MSI data with check digit (default - disabled).


Discrete 2 0f 5
Length1 - Use to set decode lengths (default - 0).
Length2 - Use to set decode lengths (default - 14).
Redundancy - Sets the reader to read the bar code twice before accepting data. A check in the checkbox indicates that redundancy is enabled (default - enabled).






Code 11
Length1 - Use to set decode lengths (default - 4).
Length2 - Use to set decode lengths (default - 55).


Redundancy - Sets the reader to read the bar code twice before accepting data. A check in the checkbox indicates that redundancy is enabled (default - enabled).
Verify Check Digit - Check the integrity of all Code 11 symbols to verify that the data complies with the specified check digit algorithm. This selects the check digit mechanism for the decoded Code 11 bar code.
·        No Check Digit - Do not verify check digit.
·        1 Check Digit - Bar code contains one check digit (default).
·        2 Check Digits - Bar code contains two check digits.
Report Check Digit - Transmit Code 11 data with or without the check digit. A check in the checkbox indicates to send Code 11 data with check digit (default - disabled).


UPCA
Report Check Digit - The check digit is the last character of the symbol used to verify the integrity of the data. Enables or disables this option. A check in the checkbox indicates that the option is enabled (default - enabled).
Preamble - Preamble characters are part of the UPC symbol consisting of Country Code and System Character. Select the appropriate option to match the host system.
There are three options for transmitting a UPCA preamble:
·        Preamble None - Transmit no preamble.
·        Preamble Sys Char - Transmit System Character only (default).
·        Preamble Country and Sys Char - Transmit System Character and Country Code (“0” for USA). Select the appropriate option to match the host system.


Interleave 2of5
Length1 - Use to set decode lengths (default - 14).
Length2 - Use to set decode lengths (default - 10).
Redundancy - Sets the reader to read the bar code twice before accepting data. A check in the checkbox indicates that redundancy is enabled (default - enabled).
Check Digit
·        No Check Digit - A check digit is not used. (default)
·        USS Check Digit - Select to check the integrity of all Interleaved 2 of 5 symbols to verify the data complies with either the Uniform Symbology Specification (USS) check digit algorithm.
·        OPCC Check Digit - Select to check the integrity of all Interleaved 2 of 5 symbols to verify the data complies with either the Optical Product Code Council (OPCC) check digit algorithm.
Report Check Digit - Transmit Interleaved 2 of 5 data with or without the check digit. A check in the checkbox indicates to send Interleaved 2 of 5 data with check digit (default - disabled).
Convert ITF-14 To EAN13 - Convert 14-character Interleaved 2 of 5 bar codes to EAN-13, and transmit as EAN-13. The Interleaved 2 of 5 bar code must be enabled and must have a leading zero and a valid EAN-13 check digit. A check in the checkbox indicates that the option is enabled (default - disabled).


UK Postal
Report Check Digit - Transmit UK Postal data with or without the check digit. A check in the checkbox indicates to send UK Postal data with check digit (default - disabled).






Code93
Length1 - Use to set decode lengths (default - 0).
Length2 - Use to set decode lengths (default - 55).
Redundancy - Sets the reader to read the bar code twice before accepting data. A check in the checkbox indicates that redundancy is enabled (default - disabled).


Matrix 2 of 5
Length1 - Use to set decode lengths (default - 10).
Length2 - Use to set decode lengths (default - 0).
Redundancy - Sets the reader to read the bar code twice before accepting data. A check in the checkbox indicates that redundancy is enabled (default - disabled).
Report Check Digit - Transmit Matrix 2 of 5 data with or without the check digit. A check in the checkbox indicates to send Matrix 2 of 5 data with check digit (default - enabled).
Verify Check Digit - Enable this feature to check the integrity of all Matrix 2 of 5 symbols to verify that the data complies with a specified check digit algorithm (default - enabled).


UPCE0
Report Check Digit - The check digit is the last character of the symbol used to verify the integrity of the data. Enables or disables this option. A check in the checkbox indicates that the option is enabled (default -  disabled).
Preamble - Preamble characters are part of the UPC symbol consisting of Country Code and System Character. Select the appropriate option to match the host system.
There are three options for transmitting a UPCE0 preamble:
·        Preamble Sys Char - Transmit System Character only.
·        Preamble Country and Sys Char - Transmit System Character and Country Code (“0” for USA).
·        Preamble None - Transmit no preamble (default).
Convert UPCE0 To UPCA - Enable to convert UPCE0 (zero suppressed) decoded data to UPC-A format before transmission. After conversion, the data follows UPC-A format and is affected by UPC-A programming selections. Disable to transmit UPCE0 decoded data as UPCE0 data, without conversion (default - disabled).


Code128
Length1 -  Use to set decode lengths (default - 0).
Length2 - Use to set decode lengths (default - 55).
Redundancy - Sets the reader to read the bar code twice before accepting data. A check in the checkbox indicates that redundancy is enabled (default - disabled).
Enable Plain Code 128 - Flag to enable other 128 sub types (besides GS1-128 and ISBT-128).
Enable GS1-128 - Set the GS1 128 subtype. A check in the checkbox indicates that the option is enabled (default - enabled).
Enable ISBT128 - Set the ISBT128 subtype. A check in the checkbox indicates that the option is enabled (default - enabled).
ISBT128 Concatenation Mode - Select an option for concatenating pairs of ISBT code types:
·        Concat Mode Never - Do not concatenate pairs of ISBT codes encountered (default).
·        Concat Mode Always - There must be two ISBT codes in order to decode and perform concatenation. Does not decode single ISBT symbols.
·        Concat Mode Auto - Decodes and concatenates pairs of ISBT codes immediately. If only a single ISBT symbol is present, the device must decode the symbol the number of times set via DataWedge Configuration 4 - 11 Redundancy - Code128 before transmitting its data to confirm that there is no additional ISBT symbol.
Check ISBT Table - The ISBT specification includes a table that lists several types of ISBT bar codes that are commonly used in pairs. If ISBT128 Concat Mode is set, enable Check ISBT Table to concatenate only those pairs found in this table. Other types of ISBT codes are not concatenated. A check in the checkbox indicates that redundancy is enabled (default - disabled).
Security Level - The scanner offers four levels of decode security for Code 128 bar codes. Select increasing levels of security for decreasing levels of bar code quality. There is an inverse relationship between security and scanner aggressiveness, so choose only that level of security necessary for any given application.
·        Security Level 0 - This setting allows the scanner to operate in its most aggressive state, while providing sufficient security in decoding most “in-spec” bar codes.
·        Security Level 1 - This setting eliminates most misdecodes (default).
·        Security Level 2 - Select this option if Security level 1 fails to eliminate misdecodes.
·        Security Level 3 - If Security Level 2 is selected and misdecodes still occur, select this security level. Be advised, selecting this option is an extreme measure against mis-decoding severely out of spec bar codes. Selecting this level of security significantly impairs the decoding ability of the scanner. If this level of security is needed, try to improve the quality of the bar codes.


Composite AB
UCC Link Mode
·        Link Flag ignored - 1D component is transmitted regardless of whether a 2D component is detected.
·        Always Linked - 1D and the 2D components are transmitted. If 2D is not present, the 1D component is not transmitted.
·        Auto Discriminate - the digital scanner determines if there is a 2D portion, then transmits the 1D component, as well as the 2D portion if present. (default).


Codabar
Length1 - Use to set decode lengths (default - 6).
Length2 - Use to set decode lengths (default - 55).
Redundancy - Sets the reader to read the bar code twice before accepting data. A check in the checkbox indicates that redundancy is enabled (default - enabled).
CLSI Editing - Enable this parameter to strip the start and stop characters and insert a space after the first, fifth, and tenth characters of a 14-character Codabar symbol. Enable this feature if the host system requires this data format (default - disabled).
NOTIS Editing - Enable this parameter to strip the start and stop characters from a decoded Codabar  symbol. Enable this feature if the host system requires this data format (default - disabled).


UPCE1
Report Check Digit - The check digit is the last character of the symbol used to verify the integrity of the data. Enables or disables this option. A check in the checkbox indicates that the option is enabled (default - disabled).
Preamble - Preamble characters are part of the UPC symbol consisting of Country Code and System Character. Select the appropriate option to match the host system.
There are three options for transmitting a UPCE1 preamble:
·        Preamble Sys Char - Transmit System Character only.
·        Preamble Country and Sys Char - Transmit System Character and Country Code (“0” for USA).
·        Preamble None - Transmit no preamble (default).
Convert UPCE1 To UPCA - Enable this to convert UPCE1 decoded data to UPC-A format before transmission. After conversion, the data follows UPC-A format and is affected by UPC-A programming selections. Disable this to transmit UPCE1 decoded data as UPCE1 data, without conversion (default - disabled).
		
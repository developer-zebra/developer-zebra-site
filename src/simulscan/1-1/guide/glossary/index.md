---
title: Glossary
layout: guide.html
product: SimulScan
productversion: '1.1'
---

### Anchor Element(s)
One or more unchanging images, barcodes or other Document attributes (i.e. company logo) created as part of a Template that SimulScan can use to identify a Document and determine its orientation. 

### Bounding Box 
An oval, round or square object on the printed form that contains a mark to be acquired using OMR. 

### Data Type 
Defines the source (barcode, OCR, etc.) of data being acquired from a Region of a Document.

### Document
Printed form containing data to be acquired (i.e. a shipping receipt). Documents should be associated with no more than one Template.

### Document Capture (mode) 
A SimulScan mode that captures multiple data types from mixed sources, such as barcodes, alpha/numeric characters, checkboxes and images. This mode requires a Structured Template and generally uses the device camera.  

### Field
See Field of Interest, Region.

### Fixed layout
A Document with a layout that doesn't change from one instance to another. Also known as a Structured Target. 

### Grouped Regions
Refers to sections of a Document that require Fields to be grouped logically, as with an address, as an aid to processing the acquired data. 

### Image
See Picture. 

### Input Plug-in 
Defines (as in a DataWedge Profile) the means by which data is acquired with SimulScan using Zebra's DataWedge app. See the [SimulScan Input section](../../../../datawedge/6-0/guide/setup/#simulscaninput) of the DataWedge docs for details. 

### Multi-barcode (mode) 
A SimulScan mode that captures only barcode data, which can be from 1D/2D barcodes of the same or differing symbologies. When templates are used, this mode accepts an Unstructured Template and generally uses the device imager.  

### Multi-Line 
Acquisition using OCR of multiple lines of alpha/numeric characters (i.e. a complete address). See also Grouped Regions. 

### Multi-Template 
Allows multiple Templates to be treated as one to simplify deployment and workflow. 

### OCR 
Optical Character Recognition, a processing mode for acquiring alpha/numeric characters. SimulScan 1.1 supports English, French, German, Spanish and Portuguese. 

### OMR 
Optical Mark Recognition, a processing mode for acquiring binary (present/not present) data from checkboxes. Also includes an "undecided" state. 

### Picture 
Graphical image to be acquired as a file (i.e. `.jpg` file). Minimum image size: 128 x 128 pixels; maximum: 2600 x 2000 pixels.  

### Region of Interest, Field
Area of a Document within a Form Region of Interest that is associated with a data type and processing method (i.e. a barcode). Also referred to as a "Field." 

### Region of Interest, Form 
The area within the outer-most borders of a Document that defines a form, which generally contains Fields with data to be acquired. See Field Region of Interest. 

### Secure Storage 
The online area accessible only by credentialed user(s) in which Templates are stored. 

### Signature 
Refers to an image captured from the signature region of a form, generally of the recipient of a shipment.

### SimulScanRegion 
Name of the Java object that references a SimulScan Field Region of Interest.   

### Single-Line 
Acquisition using OCR of a single line of alpha/numeric characters (i.e. a product number).

### Target, Structured 
A Document with a layout that doesn't change from one instance to another. Such targets are referred to as having a fixed layout. 

### Target, Unstructured 
A Document with no fixed layout, or a Document that has not been defined with a Template.

### Template 
An XML document that defines "regions of interest" on Documents to be scanned, "fields of interest" within those regions, and the type of data (barcode, text, etc.) to be extracted from the fields. Each Template is associated with exactly one Document. 

### Template, Structured 
A Template made for a Structured Target and generally associated with Mixed Data-type mode. Work on the principle that location and type of data in each field of a form (i.e. barcodes, alphanumeric characters, signatures, etc.) will remain consistent whenever the form is used. Use the device camera by default.  

### Template, Unstructured 
Generally used for Unstructured Targets and when acquiring data of a single type. The device imager is automatically selected for Barcode-only mode; the camera for OCR.  

<!-- 
**Template Persistence -** keeps Templates in sync between a development host and the Template Builder host server. 
-->

### Validation 
Checks whether the Fields and their properties are correct for a given Document before a Template is deployed to devices. 

### Well-defined Border
The area surrounding a Target Document that contains: 1) a single, unbroken perimeter that defines the form, 2) a solid frame with a minimum 20% contrast from the target, 3) a minimum 5% margin between the Document and its outer-most border (see examples below). 

![img](acceptable_borders.png)
_Well-defined borders provide an unbroken perimeter as well as space and contrast from surrounding areas_. 
<br>

-----

**Related Guides**: 

* [DataWedge](../../../../datawedge)
* [SimulScan APIs](../../api)
* [Enterprise Browser](../../../../enterprise-browser)


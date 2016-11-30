---
title: SimulScan Demo App
layout: guide.html
product: SimulScan
productversion: '1.1'
---
##Overview
A Demo App is included with all [devices that support SimulScan](../about/#supporteddevices) and is intended to quickly demonstrate how SimulScan works and what it can do. The Demo App also provides a way without a license to test user-created Templates that implement Multi-barcode, signature capture, OCR, OMR and other SimulScan features.

**The Demo App cannot save acquired data and is not suitable for production environments**. 

### Demo App Main Features

* Form identification and data capture
* Scan multiple barcodes and symbologies from a structured or unstructured form
* Single- and multi-line OCR scanning to acquire alphanumeric characters
* Optical Mark Recognition (OMR) for checkboxes
* Machine Readable Zone (MRZ) for passports and other travel documents

-----

### How to Use the Demo App

**To use the SimulScan Demo app**:

**&#49;. Locate and tap the SimulScan Demo** app icon: 
<img style="height:350px" src="01_app_icon.png"/>
<br>

**&#50;. Tap the "hamburger" menu**:
<img style="height:350px" src="02_splash.png"/>
<br>

**&#51;. Select the desired Template**:
<img style="height:350px" src="03_select_template.png"/>
<br>


**&#52;. Tap "Start SimulScan** to activate the camera or imager and begin scanning. A message appears similar to the one in Step 5, below.  
<img style="height:350px" src="08_splash2.png"/>
<br>

**If selecting the Postal, Transport & Logistics Template, try scanning from the image below** or [download the form](https://zebra.box.com/s/gnpxp4w99aks75vu96pjqeg7mzcrewfr) and scan from the screen or a printout. 
![img](postal_form.png)
_**Click to enlarge image**_. 
<br>

**&#53;. Orient the scanner** so the target Document fills the screen: 
<img style="height:350px" src="04_place_doc.png"/>
<br>

**&#54;. Stop moving when the green frame appears**. This indicates that the Document is aligned properly. A screen appears showing the parsed data similar to the image in Step 7. 
<img style="height:350px" src="05_capturing.png"/>
<br>

**&#55;. Verify that acquired data is correct**, scrolling as necessary: 
<img style="height:350px" src="06_parsed.png"/>
<br>

**&#56;. Warnings appear with results** that SimulScan considers questionable along with an image of the scanned area to aid in validation or correction:    
<img style="height:350px" src="07_check_results.png"/>
<br>

**&#57;. Tap any field in need of correction** to bring up the keyboard:
<img style="height:350px" src="08_correction.png"/>
<br>

**&#49;&#48;. Press OK to return to the Parsed Data screen**. Repeat Step 9 until all errors are corrected. SimulScan tracks edited Fields with color coding:  
<img style="height:350px" src="07_check_results.png"/>
<br>

-----

###Test a Custom Template
The SimulScan Demo app exposes all SimulScan features (except the ability to save data), and can be used to test Templates built by an organization. Custom Templates stored on the Template Builder web site can be pulled from within the Demo app. Locally stored Templates must be pushed to the device manually. 

####Before You Begin
Before testing a custom Template, complete the following steps: 

* Have on hand a printed version of the target Document(s) for which the Template(s) were created.  
* If pulling from the server, Template(s) must be in:
 * `/<accountID>/templates/release/`
* If pushing to the device, push Template(s) to: 
 * `/sdcard/simulscan/templates/`

For more, see [Deploy Templates](../templatebuilder/#deploytemplates). 

**To open a custom Template**: 

**&#49;. Open SimulScan and press Start**. A screen appears similar to the image below. Notice that the most recently used Template (if any) remains selected (in this case it's the "Postal, Transport & Logistics" Template from the exercise). 

**To switch Templates, press the "My Template" button**. A screen appears similar to the image in Step 2. 
<img style="height:350px" src="11_mytemplate_button.png"/>
<br>

**&#50;. Tap the appropriate drop-down** to open the Template to be tested. "Select from server" will present a login prompt. Enter credentials for the Template Builder web site. 
<img style="height:350px" src="12_select_template.png"/>
<br>

**&#51;. Resume beginning with Step 5**, above.  

-----

Related guides: 

* [Template Builder](../templatebuilder)
* [DataWedge](../../../../datawedge)

---
title: SimulScan Demo App
layout: guide.html
product: SimulScan
productversion: '1.1'
---
##Overview
A Demo App is preloaded onto all [devices that support SimulScan](../about/#supporteddevices) and is intended to quickly demonstrate how SimulScan works and what it can do. The Demo App also provides a means of testing custom Templates that implement Multi-barcode, signature capture, OCR, OMR and other advanced SimulScan features.

**Note: The Demo App cannot save acquired data and is not suitable for production environments**. 

### Main Features

* Identify forms and data capture
* Scan multiple barcodes and symbologies from a structured or unstructured form
* Use single- and multi-line OCR to acquire alphanumeric characters
* Capture checkboxes using Optical Mark Recognition (OMR)
* Capture Machine Readable Zone (MRZ) data from passports and other travel documents
* Create demos from custom forms  
* Download Templates from the Template Builder server 
* Configure audio feedback, timeout interval, auto-capture sensitivity and other Advanced Settings

-----

### How to Use the Demo App

![img](postal_form.png)
_**Click image to enlarge**_ 
<br>

**To use the SimulScan Demo app** for Mixed Data-types:

1. **[Download the Transport & Logistics (T&L) Demo Form](https://zebra.box.com/s/gnpxp4w99aks75vu96pjqeg7mzcrewfr)** (shown above) and print it. 
2. **Locate and tap the SimulScan Demo App** icon on the scanning device (see numbered images, below). 
3. **Tap the "hamburger" menu**.
4. **Select the "Postal, Transport & Logistics" Template**. 
5. **Tap "Start SimulScan"** and begin scanning. The data acquisition device (camera or imager) is selected automatically by SimulScan based on type of data to be acquired and/or settings defined in the Template (this demo uses the camera). The screen should look like image 6, below.
6. **Orient the scanning device** so the target Document fills most of the screen. Orientation can be horizontal or vertical (shown). 
![img](demo_app_group1.png)
_Click images to enlarge_
<br>
7. **Hold the scanner still when the green frame appears**. Upon acquisition, parsed data is displayed as in Image 8. See the [Advanced Settings section](#advancedsettings) for access to auto-capture and sensitivity settings. 
8. **Verify that acquired data is correct**, scrolling as necessary. *If SimulScan has less than absolute confidence in the correctness of a decoded value, that value will be presented along with an image of the corresponding area from the scanned Document to aid in validation or correction*.
9. **Tap red-highlighted fields** to confirm or correct the captured data. The keyboard appears; correct as needed. 
10. **Press OK** to return to the Parsed Data screen.
11. **Repeat Steps 9 and 10 until all errors are corrected**. SimulScan tracks edited Fields with color coding. 
![img](demo_app_group2.png)
_Click images to enlarge_
<br>

-----

###Test a Custom Template
The SimulScan Demo app exposes all SimulScan features (except the ability to save data), and can be used to test Templates built by an organization. Custom Templates stored on the Template Builder web site can be pulled from within the Demo app. Locally stored Templates must be pushed to the device manually. 

####Before You Begin
Before testing a custom Template, complete the following steps: 

* Create a printed version of the target Document(s) for which the Template(s) were created.  
* If using the Demo App to pull from the server, Template(s) to be tested must be in:
 * `/<accountID>/templates/release/`
* If pushing from a local PC to the device, push Template(s) to: 
 * `/<internal storage>/simulscan/templates/`

For more, see [Deploy Templates](../templatebuilder/#deploytemplates). 

**To open a custom Template**: 

**&#49;. Open SimulScan and press Start**. A screen appears similar to the image below. Notice that the most recently used Template (if any) remains selected (shown is the "Postal, Transport & Logistics" Template from the exercise above). 

**To switch Templates, press the "My Template" button**. A screen appears similar to the image in Step 2. 
<img style="height:350px" src="11_mytemplate_button.png"/>
<br>

**&#50;. Tap the appropriate drop-down** to open the Template to be tested: 
<img style="height:350px" src="12_select_template.png"/>
<br>

**Browse external storage -** lists Templates in the `/<internal storage>/simulscan/templates/` folder on the device.

**Default templates -** lists Templates included with SimulScan, which are stored in the `/enterprise/device/settings/datawedge/templates` folder on the device. Custom Templates pushed to this location will be displayed with included ones. 

**Select from server -** lists Templates in the `/<accountID>/templates/release/`
folder on the [Template Builder web site](http://simulscan.zebra.com) after logging into the Template Builder web site. When using this option, a copy of the specified Template is placed in the `/<internal storage>/simulscan/templates/` folder on the device. 

**&#51;. Go to [How to Use the Demo App](#howtousethedemoapp) Step 4**.  

-----

### Advanced Settings
Advanced Settings allow the device user to make adjustments before scanning to help optimize data acquisition. For example, capturing a specific portion of a borderless Document, disabling Auto Capture will prevent capture until the desired portion of the Document is lined up. As another example, increasing Capture Sensitivity can reduce blurriness of the acquired images for Documents that are heavily populated with barcores or other data objects. **Note: The Advanced Settings panel is accessible only when SimulScan is actively scanning. 

**To access Advanced Settings**: 

**&#49;. Tap "Start SimulScan"** to enter scanning mode. 

**&#50;. Tap on the "hamburger menu"** to invoke the Advanced Settings panel. 
<img style="height:250px" src="demo_settings_button.png"/>
<br>

**&#51;. Tap on a feature to change its setting** as defined below:
<img style="height:350px" src="demo_advanced_1.png"/>
<img style="height:357px" src="demo_advanced_2.png"/>
_SimulScan's Advanced Settings panel_.
<br>

**Advanced Settings**:

**Identification Timeout -** sets the number of seconds (from 5-30) after which SimulScan will stop trying to identify a Document described by the selected Template. 

**Processing Timeout -** sets the number of seconds (from 5-30) after which SimulScan will stop trying to process an identified Document. 

**Audio Feedback -** plays a beep sound to indicate processing success.   

**Haptic Feedback -** vibrates to indicate processing success.

**LED Feedback -** flashes the LED light to indicate processing success.

**Debug Mode -** if enabled, allows a session to write form-capture data to device storage.

**Auto Capture -** controls whether a document is automatically captured once identified or waits for the a user action.

**Image Correction -** enables image correction for parsing targets that are slightly curved or crumpled.

**Capture Sensitivity -** for Auto Capture, sets a stillness threshold for the scanning device from 1-10 (most still).

-----

Related guides: 

* [Template Builder](../templatebuilder)
* [DataWedge](../../../../datawedge)


<!-- 
**&#49;. Locate and tap the SimulScan Demo** app icon: 
<img style="height:350px" src="01_app_icon.png"/>
<br>
**&#50;. Tap the "hamburger" menu**:
<img style="height:350px" src="02_splash.png"/>
<br>
**&#51;. Select the "Postal, Transport & Logistics" Template**:
<img style="height:350px" src="03_select_template.png"/>
<br>
**&#52;. Tap "Start SimulScan"** to activate the camera or imager and begin scanning. A message appears similar to the one in Step 5, below.  
<img style="height:350px" src="08_splash2.png"/>
<br>
**Try scanning from the image below** (click to enlarge) or [download the form](https://zebra.box.com/s/gnpxp4w99aks75vu96pjqeg7mzcrewfr) and scan from the screen or a printout. 
![img](postal_form.png)
_**Click image to enlarge**_. 
<br>
**&#53;. Orient the scanner** so the target Document fills most of the screen. Orientation can be horizontal or vertical (shown):
<img style="height:350px" src="04_place_doc.png"/>
<br>
**&#54;. Stop moving the scanner when the green frame appears**. This indicates that the Document is aligned properly. A screen appears showing the parsed data similar to the image in Step 7. 
<img style="height:350px" src="05_capturing.png"/>
<br>
**&#55;. Verify that acquired data is correct**, scrolling as necessary: 
<img style="height:350px" src="06_parsed.png"/>
<br>

**If SimulScan has less than absolute confidence in the correctless of a decoded value**, that value will be presented along with an image of the corresponding area from the scanned Document to aid in validation or correction. 

**&#56;. Tap any red-highlighted fields** to confirm or correct the captured data:
<img style="height:350px" src="07_check_results.png"/>
<br>
**&#57;. Tapping any field invokes the keyboard**. Correct as needed. **Press OK to return to the Parsed Data screen**.
<img style="height:350px" src="08_correction.png"/>
<br>
**&#49;&#48;. Repeat Step 9 until all errors are corrected**. SimulScan tracks edited Fields with color coding:  
<img style="height:350px" src="09_checked_area.png"/>
<br>
-->

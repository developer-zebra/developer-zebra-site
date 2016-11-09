---
title: About SimulScan
layout: guide.html
product: SimulScan
productversion: '1.1'
---

##Overview
SimulScan is an end-to-end data capture solution for Android devices designed to extract critical data from scanned documents. It contains powerful image capture technology that can acquire of the contents of an entire form in a single scan. Forms can include bar codes, text fields, phone numbers, images, signatures, even checkboxes; SimulScan can capture them all simultaneously. Once acquired, data can be instantly used to populate business forms, be further processed according to simple or complex rules, or simply stored for later retrieval. Incorporating SimulScan into the workflow can increase process automation and worker proficiency, improve data accuracy and reduce cycle times.

###Benefits

* **Decodes multiple barcodes** with a single scan (Multi-Barcode)
* **Automates data entry** with character recognition (OCR)
* **Simplifies workflow exceptions** with check-mark recognition (OMR) and Signature presence detection
* **Improves overall worker efficiency** and accuracy


**Forms for simultaneous capture can include**: 

* Barcodes, including multiple symbologies on a single form
* Text fields (names, addresses, product names, etc.)
* Phone numbers, invoice numbers, tracking and stock numbers, etc.
* Images
* Signatures
* Checkboxes

###Requirements
* **Supported on TC55, TC70, TC75, TC8000** only
* **Camera and 2D imager supported** (except the camera-only TC70)
* **SimulScan is preinstalled** on supported devices
* **Per-device License required** for 10+ Multi-barcode and API support

## How it Works
Templates are the key to controlling the power of SimulScan and directing its capabilities as needed. SimulScan can capture **multiple data types** (i.e. barcodes and plain text) from a single structured form configured in advance, or it can capture a **single data type** (i.e. barcodes) multiple times from a structured or unstructured form. Both of these methods use Templates and are explained below. 

### Multiple Data Types  
The form below contains data of multiple types; it includes a barcode containing the waybill number, numerical data that denotes various account numbers and shipper information, alpha-numerical data such as company name and address for the shipper and receiver, checkboxes with various values, and a signature and date. 

![img](template.png)

Collecting all of this data separately would be time-consuming and error-prone. SimulScan can digitize all data seen here in a single scan through the use of a Template, a structured form created in advance and programmed specifically for collecting the data on this form. 

While the data on incoming forms will change based on the shipment, date and other factors, the location and type of data in each field (i.e. barcode, alphanumeric characters, signature, etc.) remains consistent whenever this form is used. By creating a SimulScan Template to uniquely identify each region and data type, the developer is able to assign the data from each region of the form to a specific field in an application. 

For example, in the upper-right corner of the sample form above will always be located a barcode identifying the waybill number. The lower-right corner will always contain the signature and date. Data from those fields can then be used to automatically populate a receiving record with each incoming shipment that's accompanied by this form. 

### Single Data Type
When the data to be captured is of one type (i.e. barcodes) or contained in a single field (i.e. an address), SimulScan can be used to acquire the data regardless of whether it is presented on a structured form. In such instances, it is often the case that data must be captured only from a small portion of a form, and the remaining form data can be ignored. 

<img style="height:350px" src="msi_reader.png"/>
<br>
<!-- ![img](msi_reader.png)--> 

Some data-acquisition scenarios call for creation of a type-specific Template, for example to capture all the barcodes on the form, or to use (OCR) to capture only an address (not shown). For another example application, a Template might be created to capture only the machine-readable zone (MRZ) data from travel documents. 

## Supported Devices

<table cellspacing="0" cellpadding="0" class="table table-striped">
 <tbody><tr>
  <th class="clsSyntaxHeadings"></th>
  <th class="clsSyntaxHeadings">Device</th>
  <th class="clsSyntaxHeadings">Camera support</th>
  <th class="clsSyntaxHeadings">2D Imager support</th>
  <th class="clsSyntaxHeadings">Link</th>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="tc55Pic" src="tc55.png" height="25"></td>
  <td class="clsSyntaxCells clsOddRow"><b>TC55</b></td>
  <td class="clsSyntaxCells clsOddRow">√</td>
  <td class="clsSyntaxCells clsOddRow">√</td>
  <td class="clsSyntaxCells clsOddRow">Specs?</td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="tc70Pic" src="tc70.png" height="25px"></td>
  <td class="clsSyntaxCells clsOddRow"><b>TC70</b></td>
  <td class="clsSyntaxCells clsOddRow">√</td>
  <td class="clsSyntaxCells clsOddRow"></td>
  <td class="clsSyntaxCells clsOddRow"></td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="tc75Pic" src="tc75.png" height="75"></td>
  <td class="clsSyntaxCells clsOddRow"><b>TC75</b></td>
  <td class="clsSyntaxCells clsOddRow">√</td>
  <td class="clsSyntaxCells clsOddRow">√</td>
  <td class="clsSyntaxCells clsOddRow"></td>
 </tr>
 <tr>
  <td class="clsSyntaxCells clsOddRow"><img id="tc8000Pic" src="tc8000.png" height="75"></td>
  <td class="clsSyntaxCells clsOddRow"><b>TC8000</b></td>
  <td class="clsSyntaxCells clsOddRow">√</td>
  <td class="clsSyntaxCells clsOddRow">√</td>
  <td class="clsSyntaxCells clsOddRow"></td>
 </tr>
 <tr>
</tbody></table>


<div class="content-large"><div class="jive-widget-formatted-body"><!-- [DocumentBodyStart:46152d05-7ceb-43ba-ab72-2acee060ee0c] --><div class="jive-rendered-content"><table border="1" class="jiveBorder" jive-data-cell="{&quot;color&quot;:&quot;#3D3D3D&quot;,&quot;textAlign&quot;:&quot;center&quot;,&quot;padding&quot;:&quot;6&quot;,&quot;backgroundColor&quot;:&quot;transparent&quot;,&quot;fontFamily&quot;:&quot;Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" jive-data-header="
{&quot;color&quot;:&quot;#505050&quot;,&quot;backgroundColor&quot;:&quot;#FFFFFF&quot;,&quot;textAlign&quot;:&quot;center&quot;,&quot;padding&quot;:&quot;6&quot;,&quot;fontFamily&quot;:&quot;Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif&quot;,&quot;verticalAlign&quot;:&quot;baseline&quot;}" style="border: 1px solid #c6c6c6; width: 100%;">

<thead>
<tr>
<th style="border:1px solid black;border: 1px solid #c6c6c6;width: 40%;vertical-align: middle;text-align: center;font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;padding: 6px;color: #505050;background-color: #ffffff;" valign="middle">
<h3><strong><br/></strong>
</h3>
<span style="color: #343434; font-family: proximanova, Arial, sans-serif;">Feature Support</span>
</th>

<th style="border:1px solid black;border: 1px solid #c6c6c6;width: 5%;vertical-align: middle;text-align: center;font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;padding: 6px;color: #505050;background-color: #ffffff;" valign="middle">
<h3><strong>
<span style="text-decoration: underline;"><a class="jive-link-external-small" href="https://www.zebra.com/us/en/products/mobile-computers/handheld/TC55.html" rel="nofollow">TC55</a></span><br/></strong></h3></th><th style="border:1px solid black;border: 1px solid #c6c6c6;width: 15%;vertical-align: middle;text-align: center;font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;padding: 6px;color: #505050;background-color: #ffffff;" valign="middle">
<h3>
<strong>
<span style="text-decoration: underline;"><a class="jive-link-external-small" href="https://www.zebra.com/us/en/products/mobile-computers/handheld/tc7x-touch-computer-series.html" rel="nofollow">TC70</a></span><a class="jive-link-external-small" href="https://www.zebra.com/content/dam/zebra_new_ia/en-us/solutions-verticals/product/Mobile_Computers/Hand-Held%20Computers/Symbol%20TC70%20Touch%20Computer/spec%20sheet/tc70-product-spec-sheet-en-us.pdf" rel="nofollow"><br/>
</a>
</strong>
</h3>
</th>

<th style="border:1px solid black;border: 1px solid #c6c6c6;width: 15%;vertical-align: middle;text-align: center;font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;padding: 6px;color: #505050;background-color: #ffffff;" valign="middle"><h3><strong><span style="text-decoration: underline;"><a class="jive-link-external-small" href="https://www.zebra.com/us/en/products/mobile-computers/handheld/tc7x-touch-computer-series.html" rel="nofollow">TC75</a></span><br/></strong></h3></th><th style="border:1px solid black;border: 1px solid #c6c6c6;width: 15%;vertical-align: middle;text-align: center;font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;padding: 6px;color: #505050;background-color: #ffffff;" valign="middle"><h3><span style="text-decoration: underline;"><strong><a class="jive-link-external-small" href="https://www.zebra.com/us/en/products/mobile-computers/handheld/tc8000.html" rel="nofollow">TC8000</a></strong></span></h3><p><span style="text-decoration: underline;">SE4750</span>
</p>
</th>
</tr>
</thead>
<tbody><tr><td style="border:1px solid black;border: 1px solid #c6c6c6;"></td><td style="border:1px solid black;border: 1px solid #c6c6c6;vertical-align: middle;text-align: center;padding: 0px;"><a href="https://www.zebra.com/content/zebra1/us/en/products/mobile-computers/handheld/TC55/jcr:content/mainpar/productoverview_4e72/productimage/image.adapt.full.png"><img alt="image.adapt.full.png" class="image-6 jive-image" height="153" src="https://www.zebra.com/content/zebra1/us/en/products/mobile-computers/handheld/TC55/jcr:content/mainpar/productoverview_4e72/productimage/image.adapt.full.png" style="height: 154px; width: 154.87px;" width="156"/></a></td><td style="border:1px solid black;border: 1px solid #c6c6c6;vertical-align: middle;text-align: center;padding: 0px;"><a href="https://www.zebra.com/content/zebra1/us/en/products/mobile-computers/handheld/tc7x-touch-computer-series/jcr:content/mainpar/productoverview_928a/productimage/image.adapt.full.png"><img alt="image.adapt.full.png" class="image-4 jive-image" height="167" src="https://www.zebra.com/content/zebra1/us/en/products/mobile-computers/handheld/tc7x-touch-computer-series/jcr:content/mainpar/productoverview_928a/productimage/image.adapt.full.png" style="height: 167px; width: 167.918px;" width="168"/></a></td><td style="border:1px solid black;border: 1px solid #c6c6c6;padding: 0px;vertical-align: middle;text-align: center;"><a href="https://www.zebra.com/content/zebra1/us/en/products/mobile-computers/handheld/tc7x-touch-computer-series/jcr:content/mainpar/productoverview_928a/productimage/image.adapt.full.png"><img alt="image.adapt.full.png" class="image-4 jive-image" height="167" src="https://www.zebra.com/content/zebra1/us/en/products/mobile-computers/handheld/tc7x-touch-computer-series/jcr:content/mainpar/productoverview_928a/productimage/image.adapt.full.png" style="text-align: center;" width="168"/></a></td><td style="border:1px solid black;border: 1px solid #c6c6c6;vertical-align: middle;text-align: center;padding: 0px;"><a href="https://www.zebra.com/content/zebra1/us/en/products/mobile-computers/handheld/tc8000/jcr:content/mainpar/productoverview_dea/productimage/image.adapt.full.png"><img alt="image.adapt.full.png" class="image-5 jive-image" height="198" src="https://www.zebra.com/content/zebra1/us/en/products/mobile-computers/handheld/tc8000/jcr:content/mainpar/productoverview_dea/productimage/image.adapt.full.png" style="height: 198px; width: 198px;" width="198"/></a></td></tr><tr style="height: 47px;"><td style="border:1px solid black;border: 1px solid #c6c6c6;vertical-align: middle;font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;background-color: transparent;padding: 6px;text-align: right;color: #3d3d3d;"><span style="font-size: 12pt;">
<em>Camera</em>
</span>
</td>
<td style="border:1px solid black;border: 1px solid #c6c6c6;vertical-align: middle;text-align: center;padding: 0px;font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;background-color: transparent;color: #3d3d3d;"><p><em><a href="https://developer.zebra.com/servlet/JiveServlet/showImage/73-4090-98674/yes.png"><img alt="yes.png" class="image-1 jive-image" height="22" src="https://developer.zebra.com/servlet/JiveServlet/downloadImage/73-4090-98674/23-22/yes.png" style="text-align: center;" width="23"/></a></em></p></td><td style="border:1px solid black;border: 1px solid #c6c6c6;vertical-align: middle;text-align: center;padding: 0px;font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;background-color: transparent;color: #3d3d3d;">
<em>
<a href="https://developer.zebra.com/servlet/JiveServlet/showImage/73-4090-98674/yes.png"><img alt="yes.png" class="image-1 jive-image" height="22" src="https://developer.zebra.com/servlet/JiveServlet/downloadImage/73-4090-98674/23-22/yes.png" style="text-align: right;" width="23"/>
</a>
</em>
</td>
<td style="border:1px solid black;border: 1px solid #c6c6c6;padding: 0px;vertical-align: middle;text-align: center;font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;background-color: transparent;color: #3d3d3d;">
<em>
<a href="https://developer.zebra.com/servlet/JiveServlet/showImage/73-4090-98674/yes.png">
<img alt="yes.png" class="image-1 jive-image" height="22" src="https://developer.zebra.com/servlet/JiveServlet/downloadImage/73-4090-98674/23-22/yes.png" style="text-align: right;" width="23"/>
</a>
</em>
</td>
<td style="border:1px solid black;border: 1px solid #c6c6c6;vertical-align: middle;text-align: center;padding: 0px;font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;background-color: transparent;color: #3d3d3d;">
<em>
<a href="https://developer.zebra.com/servlet/JiveServlet/showImage/73-4090-98674/yes.png">
<img alt="yes.png" class="image-1 jive-image" height="22" src="https://developer.zebra.com/servlet/JiveServlet/downloadImage/73-4090-98674/23-22/yes.png" style="text-align: right;" width="23"/>
</a>
</em>
</td>
</tr>
<tr style="height: 47px;"><td style="border:1px solid black;border: 1px solid #c6c6c6;vertical-align: middle;font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;background-color: transparent;padding: 6px;text-align: right;color: #3d3d3d;"><p><span style="font-size: 12pt;"><em>2D Imager</em>
</span>
</p>
</td>
<td style="border:1px solid black;border: 1px solid #c6c6c6;vertical-align: middle;text-align: center;padding: 0px;font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;background-color: transparent;color: #3d3d3d;">
<p>
<a href="https://developer.zebra.com/servlet/JiveServlet/showImage/73-4090-98674/yes.png">
<img alt="yes.png" class="image-1 jive-image" height="22" src="https://developer.zebra.com/servlet/JiveServlet/downloadImage/73-4090-98674/23-22/yes.png" style="" width="23"/>
</a>
</p>
</td>
<td style="border:1px solid black;border: 1px solid #c6c6c6;vertical-align: middle;text-align: center;padding: 0px;font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;background-color: transparent;color: #3d3d3d;">
<p>
<span style="font-size: 8pt;">&#160; </span><a href="https://developer.zebra.com/servlet/JiveServlet/showImage/73-4090-98675/no.png"><img alt="no.png" class="image-2 jive-image" height="23" src="https://developer.zebra.com/servlet/JiveServlet/downloadImage/73-4090-98675/24-23/no.png" style="width:24px; height: 23.4848px;" width="24"/>
</a>
</p>
</td>
<td style="border:1px solid black;border: 1px solid #c6c6c6;padding: 0px;vertical-align: middle;text-align: center;font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;background-color: transparent;color: #3d3d3d;"><p><a href="https://developer.zebra.com/servlet/JiveServlet/showImage/73-4090-98674/yes.png"><img alt="yes.png" class="image-1 jive-image" height="22" src="https://developer.zebra.com/servlet/JiveServlet/downloadImage/73-4090-98674/23-22/yes.png" style="text-align: right;" width="23"/></a></p></td><td style="border:1px solid black;border: 1px solid #c6c6c6;vertical-align: middle;text-align: center;padding: 0px;font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;background-color: transparent;color: #3d3d3d;">
<p>
<a href="https://developer.zebra.com/servlet/JiveServlet/showImage/73-4090-98674/yes.png"><img alt="yes.png" class="image-1 jive-image" height="22" src="https://developer.zebra.com/servlet/JiveServlet/downloadImage/73-4090-98674/23-22/yes.png" style="text-align: right;" width="23"/></a></p></td></tr></tbody></table></div><!-- [DocumentBodyEnd:46152d05-7ceb-43ba-ab72-2acee060ee0c] --></div>
</div>
</div>
</div>

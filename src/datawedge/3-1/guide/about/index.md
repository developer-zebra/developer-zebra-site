---
title: About DataWedge
layout: guide.html
product: DataWedge
productversion: '3.1'
---

## Introduction

DataWedge provides barcode scanning and processing services for Zebra devices running Android and Windows. This useful tool, included with every device, enables all apps on the device (whether stock or added later) to acquire barcode data without using scanner APIs directly. DataWedge can be easily configured to automatically provide scanning services whenever a particular app is launched, and to manipulate the acquired data according to simple options or complex rules. 

Since DataWedge is included with the device's OS image, it cannot be downloaded separately or updated like other apps. Installing a new version requires a completely new OS, which sometimes can result in loss of data, apps or both. 

_**This guide describes DataWedge for Android. Features and usage of Windows versions may vary slightly**_.


**Refer to the [Zebra Support Portal](../../download) for version information**. 

###Main Functionality
DataWedge provides the following primary functions and options: 

* Scan and process numerous barcode symbologies (see table below)
* Acquire barcodes, images, text, phone numbers, mag-stripe and other data
* Set DataWedge as the default scanner for one or more apps
* Create Profiles to implement specific DataWedge features for individual apps 
* Enable/Disable decoding of individual symbologies to improve speed
* Format output according to simple or custom rules
* Uses plug-ins for data input, output and processing
* Import and export settings 
* Remotely configure and mass-deploy via MDM  
* Restore settings to factory defaults
* Import and apply new settings at each launch 

> Ready to get started? Go to the [DataWedge Setup Guide](../setup).

###Is DataWedge Installed?
To verify that DataWedge is installed on a device, look for its icon in the Launcher screen or App Drawer of the device: 
<img style="height:350px" src="datawedge_launcher.png"/>

<br>

> Want to learn more? Check out the [DataWedge Demo app](../demo). 

###Decoders
DataWedge decodes all major barcode symbologies. Most are shown on the table below; popular formats are enabled by default (*). To help improve scanning performance, individual symbologies can be enabled and disabled based on the needs of a specific app or usage profile. See "Profiles" below. 

<div class="tableblock">
<table rules="none"
width="100%"
frame="void"
cellspacing="0" cellpadding="4">
<col width="33%" />
<col width="33%" />
<col width="33%" />
<tbody>
<tr>
<td align="left" valign="top"><p class="table">UPC-E0<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">UPC-E1</p></td>
<td align="left" valign="top"><p class="table">UPC-A<sup>*</sup></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">MSI</p></td>
<td align="left" valign="top"><p class="table">EAN-8<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">EAN-13<sup>*</sup></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Codabar<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">Code 39<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">Discrete 2 of 5</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Interleaved 2 of 5</p></td>
<td align="left" valign="top"><p class="table">Code 11</p></td>
<td align="left" valign="top"><p class="table">Code 93</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Code 128<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">PDF417<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">Trioptic 39</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">MicroPDF<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">MacroPDF<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">Maxicode<sup>*</sup></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Datamatrix<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">QR Code<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">MacromicroPDF<sup>*</sup></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">GS1 DataBar</p></td>
<td align="left" valign="top"><p class="table">GS1 DataBar Limited</p></td>
<td align="left" valign="top"><p class="table">GS1 DataBar Expanded</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Composite AB<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">Webcode</p></td>
<td align="left" valign="top"><p class="table">Composite C<sup>*</sup></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">TLC 39<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">USPostnet</p></td>
<td align="left" valign="top"><p class="table">USPlanet</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">UK Postal</p></td>
<td align="left" valign="top"><p class="table">Japanese Postal</p></td>
<td align="left" valign="top"><p class="table">Australian Postal</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Canadian Postal</p></td>
<td align="left" valign="top"><p class="table">Dutch Postal</p></td>
<td align="left" valign="top"><p class="table">Chinese 2 of 5</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Aztec<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">MicroQR</p></td>
<td align="left" valign="top"><p class="table">Korean 3 of 5</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">US4state</p></td>
<td align="left" valign="top"><p class="table">US4state FICS</p></td>
<td align="left" valign="top"><p class="table">Matrix 2 of 5</p></td>
</tr>
</tbody>
</table>
</div>
    

###Profiles
DataWedge Profiles permit custom groups of settings to be created to match the needs of specific apps, users or scanning scenarios. Profiles can be created for different applications that require the same data processed in different ways. A Profile can be set to output scanned data in the format required for a particular app whenever that app comes to the foreground. Profiles also can enable just the barcode symbologies needed by the app to help improve performance and reduce input errors and delays. 

**Refer to the [Setup section](../setup)** for more information. 

### Which Version Do I Have?










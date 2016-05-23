---
title: About DataWedge
layout: guide.html
product: DataWedge
productversion: '3.1'
---

## Introduction

DataWedge provides barcode scanning and processing services for Zebra devices running Android and Windows. This useful tool enables device apps to acquire barcode data without the modifications necessary to use scanner APIs. DataWedge is included with all Zebra devices and can be easily configured to automatically provide scanning services whenever a particular app is launched, and format the acquired data according to need. 

**Important: Control of barcode scanning hardware is exclusive**. When DataWedge is active, the Scanner and Barcode APIs of Enterprise Browser and other apps will be inoperative. Likewise, when an app such as Enterprise Browser controls the scanning hardware, other apps (including DataWedge) are locked out. It is therefore important to understand how to take control of a device's scanner hardware and release it when scanning operations are complete. Refer to the [DataWedge Guides](../../gettingstarted) for further instructions. 

###Main Functionality
DataWedge provides the following primary functions and options: 

* Scan and process numerous barcode symbologies (see table below)
* Set DataWedge to become the default scanner for one or more apps
* Create Profiles to implement specific DataWedge features for individual apps 
* Enable/Disable decoding of individual symbologies based on need
* Format output according to custom rules
* Accept plug-ins for input, output and processing
* Import and export settings 
* Restore settings to factory defaults
* Remotely configure and mass-deploy via MDM  
* Import and apply new settings at each launch 

###Is DataWedge Installed?
To verify that DataWedge is installed on a device, look for its icon in the Launcher screen or App Drawer of the device: 
<img style="height:350px" src="datawedge_launcher.png"/>
<br>

**Refer to the [DataWedge download page](../../download) for version information**. 

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

<!-- To programmatically verify that DataWedge is present,


[Download Enterprise Home Screen](https://portal.motorolasolutions.com/Support/US-EN/Resolution?solutionId=100676&redirectForm=search&searchQuery=%3FsearchType%3Dsimple%26searchTerm%3Denterprise%20home%20screen)
-->

<!-- ## Supported Devices
This version of Enterprise Home Screen has been approved for use with the Zebra Android devices listed below.

<table class="MsoNormalTable" style="" id="table2" border="1" cellpadding="3" cellspacing="0">
<tbody>

<tr>
<td style="width: 200pt;" width="250">
<p class="MsoNormal"><b><font color="#333399" size="4">Device</font></b></p>
</td>
<td style="width: 140px;">
<p class="MsoNormal" style="text-align: center;" align="center"><b><font color="#333399" size="4">
    Android name</font></b></p>
</td>
<td style="width: 140px;">
<p class="MsoNormal" style="text-align: center;" align="center"><b><font color="#333399" size="4">
    Android version</font></b></p>
</td>
</tr>

<tr bgcolor="#ccffcc" >
<td style="width: 118.35pt;"  width="250">
<p class="MsoNormal"><font color="#333399" size="3">ET1 </font></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" style="text-align: center;" align="center"><font color="#333399" size="4">
    Jelly Bean</font></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><font color="#333399" size="4">4.1</font></p>
</td>
</tr>

<tr>
<td style="width: 118.35pt;" width="158">
<p class="MsoNormal"><font color="#333399" size="3">MC40</font></p>
</td>
<td style="width: 96px;">
<p class="MsoNormal" align="center"><font color="#333399" size="4">Jelly Bean</font></p>
</td>
<td style="width: 96px;">
<p class="MsoNormal" align="center"><font color="#333399" size="4">4.1</font></p>
</td>
</tr>

<tr>
<td style="width: 118.35pt;" width="158">
<p class="MsoNormal"><font color="#333399" size="3">MC40</font></p>
</td>
<td style="width: 96px;">
<p class="MsoNormal" align="center"><font color="#333399" size="4">KitKat</font></p>
</td>
<td style="width: 96px;">
<p class="MsoNormal" align="center"><font color="#333399" size="4">4.4</font></p>
</td>
</tr>

<tr bgcolor="#ccffcc" >
<td style="width: 118.35pt;"  width="158">
<p class="MsoNormal"><font color="#333399" size="3">TC55</font></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" style="text-align: center;" align="center"><font color="#333399" size="4">
    Jelly Bean</font></p></td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><font color="#333399" size="4">4.1</font></p>
</td>

</tr>
<tr bgcolor="#ccffcc" >
<td style="width: 118.35pt;"  width="158">
<p class="MsoNormal"><font color="#333399" size="3">TC55</font></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" style="text-align: center;" align="center"><font color="#333399" size="4">
    KitKat</font></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><font color="#333399" size="4">4.4</font></p>
</td>
</tr>

<tr>
<td style="width: 118.35pt;"  width="158">
<p class="MsoNormal"><font color="#333399" size="3">MC67</font></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" style="text-align: center;" align="center"><font color="#333399" size="4">
    Jelly Bean</font></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><font color="#333399" size="4">4.1</font></p>
</td>
</tr>

<tr bgcolor="#ccffcc" >
<td style="width: 118.35pt;"  width="158">
<p class="MsoNormal"><font color="#333399" size="3">MC32</font></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" style="text-align: center;" align="center"><font color="#333399" size="4">
    Jelly Bean</font></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><font color="#333399" size="4">4.1</font></p>
</td>
</tr>

<tr>
<td style="width: 118.35pt;"  width="158">
<p class="MsoNormal"><font color="#333399" size="3">TC70</font></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" style="text-align: center;" align="center"><font color="#333399" size="4">
    KitKat</font></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><font color="#333399" size="4">4.4.2</font></p>
</td>
</tr>

<tr >
<td style="width: 118.35pt;"  width="158">
<p class="MsoNormal"><font color="#333399" size="3">TC70</font></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" style="text-align: center;" align="center"><font color="#333399" size="4">
    KitKat</font></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><font color="#333399" size="4">4.4.3</font></p>
</td>
</tr>

<tr bgcolor="#ccffcc" >
<td style="width: 118.35pt;"  width="158">
<p class="MsoNormal"><font color="#333399" size="3">TC75</font></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" style="text-align: center;" align="center"><font color="#333399" size="4">
    KitKat</font></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><font color="#333399" size="4">4.4</font></p>
</td>
</tr>

<tr>
<td style="width: 118.35pt;"  width="158">
<p class="MsoNormal"><font color="#333399" size="3">MC18</font></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><font color="#333399" size="4">KitKat</font></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" style="text-align: center;" align="center"><font color="#333399" size="4">
    4.4</font></p>
</td>
</tr>

<tr bgcolor="#ccffcc" >
<td style="width: 118.35pt;"  width="158">
<p class="MsoNormal"><font color="#333399" size="3">MC92</font></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><font color="#333399" size="4">KitKat</font></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" style="text-align: center;" align="center"><font color="#333399" size="4">
    4.4</font></p>
</td>
</tr>

<tr >
<td style="width: 118.35pt;"  width="158">
<p class="MsoNormal"><font color="#333399" size="3">TC8000</font></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><font color="#333399" size="4">KitKat</font></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" style="text-align: center;" align="center"><font color="#333399" size="4">
    4.4</font></p>
</td>
</tr>
</tbody>
</table>

## What's New

New features in Enterprise Home Screen 2.3:

* [Enable/disable device reboot](../settings#rebootoninstallenabled) when EHS is first launched after installation. 
* TC8000 KitKat version 4.4 support (added January, 2016)

-->








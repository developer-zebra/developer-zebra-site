---
title: DataWedge
layout: guide.html
product: DataWedge
productversion: '3.1'
---

## Overview

DataWedge provides barcode scanning and processing services for Zebra devices running Android and Windows. This enables device apps to scan and acquire barcode data without using scanner APIs. DataWedge is included with all Zebra devices and can be easily configured to automatically provide scanning services whenever a particular app is launched. 

Important: Control of barcode scanning hardware is exclusive. When DataWedge is active, Scanner and Barcode APIs of Enterprise Browser and other apps will be inoperative. Likewise, an Enterprise Browser app that uses Barcode APIs will prevent other apps (including DataWedge) from using the scanner. This guide includes instructions for taking control of a device's scanner hardware and releasing it to other apps when scanning operations are complete.


###Is DataWedge Installed?
To physically verify that DataWedge is installed on a device, look for its icon in the Launcher screen or App Drawer of the device: 
<img style="height:350px" src="datawedge_launcher.png"/>

To programmatically verify that DataWedge is present, 

###Main Functionality
DataWedge provides the following primary functionality: 

* Scan and process numerous barcode symbologies (see table below)
* Enable/Disable symbology decoding based on need
* Associate with one or more apps to become the default scanner
* Format output according to custom rules
* Accept plug-ins for input, output and processing
* Import and export settings 
* Restore settings to factory defaults
* Remote configuration and mass-deployment via MDM  
* Automatically imports and applies new settings at each launch 

Administrators can grant or restrict access to individual features or hide the settings panel entirely. 

[Download Enterprise Home Screen](https://portal.motorolasolutions.com/Support/US-EN/Resolution?solutionId=100676&redirectForm=search&searchQuery=%3FsearchType%3Dsimple%26searchTerm%3Denterprise%20home%20screen)

## Supported Devices
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














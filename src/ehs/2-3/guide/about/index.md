---
title: About Enterprise Home Screen
layout: guide.html
product: Enterprise Home Screen
productversion: '2.3'
---

## Overview
Enterprise Home Screen is a free Android app from Zebra Technologies that provides a simple way for administrators to control access to apps and settings on a Zebra device without the need to write custom code. Using a simple touch interface, EHS easily limits usage to one or more specified applications, prevents changes to device settings and locks down the file system. It can be configured in seconds, and settings can be deployed via MDM. EHS settings are stored in a simple XML file that's easy to read and edit by hand, if necessary. 

EHS works by inserting itself in place of the stock Android app launcher and home screen. When first run, it presents a screen like the one below, offering a choice of which home app to open and whether to make the selection permanent. EHS also can be installed as the default launcher, bypassing the selector dialog. 

<b>Note</b>: Many of the capabilities of EHS can be accomplished manually on the device, programmatically through [EMDK](/emdk-for-android/4-0/guide/about) or remotely using [StageNow](/stagenow/2-2/about/) or a third-party mobile device management (MDM) system (if supported by that MDM system). EHS simply puts the capabilities into a single tool.

_Enterprise Home Screen does not support localization_. 

The first time it's installed, EHS offers a simple choice: 
<img style="height:150px" src="homePrompt.png"/>

Selecting 'Always' locks EHS in as the default home app and locks users out of the following device features by default:

* Airplane mode
* USB debugging
* Access to the file system
* Keyguard (for unlocking the screen)
* Keyguard-screen camera and search functions
* The status-bar Settings icon  
* Full access to the System Settings panel  

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














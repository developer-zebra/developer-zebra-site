---
title: About Enterprise Keyboard
layout: guide.html
product: Enterprise Keyboard
productversion: '1.2'
---

## Overview
Enterprise Keyboard is a soft input device that's designed to provide the most productive means possible of inputting data into Zebra devices. Building on the stock Android keyboard, Enterprise Keyboard adds programmable keys, switches quickly between languages and key layouts, and has the ability to scan data directly into an application. 

Enterprise Keyboard 1.1 (and higher) can be activated and configured manually on the device, programmatically through [EMDK for Android](../../../../emdk-for-android) development tools, remotely using [StageNow](../../../../) and the [UI Manager](/mx/uimgr/) service or through a company's own mobile device management (MDM) system (if supported by that system). 

Zebra's keyboard also makes use of the Android Personal Dictionary for spelling suggestions and corrections, and permits customers and partners to populate the device with industry-specific terms to help improve the speed and accuracy of keyboard input. A Personal dictionary can be populated and mass-deployed through Zebra's Mobility Extensions [(MX)](../../../../mx) and [StageNow](../../../../) tools. 

Learn more [about Personal Dictionary](../settings#personaldictionary).

This version of Enterprise Keyboard includes the following languages: 

* English (UK)
* English (US) 
* French
* German
* Italian
* Spanish
* Russian

### New in Enterprise Keyboard 1.2

<b>A Calculator Mode</b> arranges numerical keys for input with financial apps: 
<img alt="" style="height:350px" src="calculator_mode.png"/>
<br>

<b>A Telephone Mode</b> arranges numerical keys like a phone:  
<img alt="" style="height:350px" src="telephone_mode.png"/> 
<br>

<b>New portrait layouts cater to tablets and wearables</b> such as the ET50/ET55 and WT6000:  
<img alt="" style="height:250px" src="alpha_portrait.png"/>
<br>
<img alt="" style="height:250px" src="numeric_portrait.png"/>
<br>

<b>A Flick Enable/Disable switch</b> simplifies control of this time-saving input feature:  
<img alt="" style="height:350px" src="flick_enable-disable.png"/> 
<br>

<b>Supports dynamic selection of text- and scan-tab focus</b> to match the desired input:  
<img alt="" style="height:350px" src="text_input.png"/> 
<br>
<img alt="" style="height:350px" src="scan_input.png"/> 
<br>


### Unique features  
All versions of Enterprise Keyboard offer these other unique capabilities to help improve the speed and accuracy of input:  

<b>Switch layouts with taps or swipes</b> across the keypad:  
<img alt="" style="height:350px" src="sample_1.png"/>
_The Tab bar automatically hides away when spelling suggestions appear, maximizing screen space for applications_. 
<br>

<b>Scan directly with the Barcode tab</b> to collect data where and when it's needed:
<img alt="" style="height:350px" src="sample_5.png"/>
<br>

<b>Input long-press characters with a finger-flick</b> of the main key:
<img alt="" style="height:350px" src="emailAddress.png"/>
<br>

<!--
The <b>Language tab</b> quickly selects languages to include:  
<img alt="" style="height:350px" src="sample_2.png"/>
<br>
-->

<b>Quickly page through selected languages</b> using the "globe" key:  
<img alt="" style="height:150px" src="keyboard_globe.png"/>
<br>

<!--
The <b>Numerical tab provides sub-tabs</b> for symbol key and custom function key layouts: 
<img alt="" style="height:350px" src="sample_3.png"/>
<br>
-->

<b>Design custom key layouts easily</b> with five remappable keys: 
<img alt="" style="height:150px" src="keyboard_alpha.png"/>

<img alt="" style="height:150px" src="keyboard_numerical.png"/>
_Shown here with the EMOJI key (top) and other default key assignments_. 
<br>

<b>View the keyboard indoors or out</b> thanks to a specially designed color scheme: 
<br>
_Enterprise Keyboard_:
<img alt="" style="height:150px" src="keyboard_alone.png"/>

_Stock Android keyboard_:
<img alt="" style="height:150px" src="keyboard_android.png"/>
<br>

<!--
## Supported Devices
This version of Enterprise Keyboard has been approved for use with the Zebra Android devices listed below. It also works on non-Zebra many devices running Android  KitKat and Lollipop. 

FROM BERNAKE:
We tested on MC40, TC55, TC70, Frenzy and TC8000
@Nader, implied support of derivative products based on the representative products
KitKat and Lollipop

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
<p class="MsoNormal"><font color="#333399" size="3">WT-6000</font></p>
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
-->

## How to Get It

Enterprise Keyboard 1.2 comes preinstalled on Zebra devices running Android 5.0 Lollipop and higher, and can be downloaded as an OS update for Zebra MC40, TC70 and TC75 devices running Android 4.4 KitKat.

* [Download Enterprise Keyboard 1.2](https://www.zebra.com/us/en/support-downloads.html) as an OS update for MC40/TC70/TC75 KitKat devices.

* [Use Enterprise Keyboard Manager](../../../../mx/enterprisekeyboardmgr) to remotely configure EKB with EMDK, StageNow or a compatible MDM system.

For more information, please [contact a Zebra representative or partner](https://www.zebra.com/us/en/about-zebra/contact-zebra.html). 

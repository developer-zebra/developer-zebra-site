---
title: Keystroke Output
layout: guide.html
product: DataWedge
productversion: '6.3'
---

## Overview
Keystroke Output collects the processed data and sends it to the associated application as a series of keystrokes, emulating the actions of a user pressing keys on the device. DataWedge supports TAB, ENTER and other special characters that might be required by an application to submit acquired data for further processing, to advance the cursor to another input field or for other reasons. Special characters are added to acquired data by using the Action key character (shown below) and in the [Basic Data Formatting](../../process/bdf) or [Advanced Data Formatting](../../process/bdf) Process functions. 

-----

## Keystroke Output Setup
To enable Keystroke output for a Profile, place a check in the checkbox:
<img style="height:350px" src="../keystroke-output.png"/>
_Keystroke Output options_
<br>

**Action key character -** enables injection of a special character embedded within barcode or MSR data.

Possible values:

* **None -** inject no action key
* **Tab -** inject action key in place of a ASCII Tab (0x09) character
* **Line feed -** inject action key in place of ASCII LF (0x0A) character
* **Carriage return -** inject action key in place of ASCII CR (0x0D) character

**Multi byte character delay -** used to set an inter-character delay (in ms) for sending multibyte characters. This parameter can help avoid problems that arise when sending Unicode and multibyte characters to the Android browser. Value is set to zero by default. If experiencing errors in the delivery of keystrokes, increase the delay value in increments of 100 ms.

**Key event delay -** used to set a delay (in ms) for dispatching control characters as keystrokes to the foreground application. 

<!-- 
Send data - Set to transfer the captured data to the foreground application. Disabling this option prevents the actual data from being transmitted. However, the prefix and suffix strings, if present, are still transmitted even when this option is disabled (default - enabled).
-->

------

**Other DataWedge Output Options**:

* [Intent](../intent) (programmatic data hand-off)
* [Internet Protocol](../ip) (network output via TCP or UDP) 

**Related guides**:

* [DataWedge Profiles](../../profiles)
* [DataWedge APIs](../../api) 


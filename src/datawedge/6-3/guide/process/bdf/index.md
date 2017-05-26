---
title: Basic Data Formatting
layout: guide.html
product: DataWedge
productversion: '6.3'
---

## Overview
Process Plug-ins manipulate the acquired data in a specified way before sending it via the Output Plug-in to the associated application or server. Controls for Process Plug-ins appear as "Basic Data Formatting" and "Advanced Data Formatting," and are grouped in a Profile's settings panel along with its Output Plug-in. 

**Process Plug-ins specify**: 
* Basic data formatting (i.e. append with keystrokes, a prefix, a suffix, etc.)
* Advanced data formatting (rules-based data manipulation, action triggers, etc.)

**The Basic Formatting Process Plug-in** allows DataWedge to add a prefix and/or a suffix to captured data before passing it to an Output Plug-in. It also permits the insertion of TAB and ENTER keystrokes, which can be used to move the cursor to from one field of an app to another to facilitage a series of data acquisition tasks.  

If desired, BDF also can convert acquired data to hexidecimal notation. For example, if an acquired barcode data is 012345, this option could convert and send the hex equivalent data of 30**31**32**33**34**35**. 

Get more info about [how Profiles work](../../overview). 

-----

## Basic Data Formatting
The Basic Format Process Plug-in provides an easy way to append or prepend acquired data with custom values or keystrokes before passing it to an Output Plug-in. It also permits the conversion of data to hexadecimal format. If the Basic Formatting Plug-in is not enabled, captured data is passed to the selected Output Plug-in without modification.

<img style="height:350px" src="../basic_data_formatting.png"/>
_Basic Data Formatting Output Plug-in options_. 
<br>

**Prefix to data -** adds (prepends) the specified characters(s) **to the beginning** of the acquired data before sending.

**Suffix to data -** adds (appends) the specified characters(s) **to the end** of the acquired data before sending.

**Send data -** Enabled by default, this allows transfer of the captured data to the associated application when it comes to the foreground. **Note**: Disabling this option prevents only the _captured_ data from being transferred; any prefix and/or suffix strings will be handed to the associated application(s), even when this option is disabled.

**Send as hex -** sends the data in hexadecimal format. For example, if the acquired barcode data is 012345, this option would send the hex equivalent of 30**31**32**33**34**35**. 

**Send TAB key -** appends a TAB character to the processed data. 

**Send ENTER key -** appends an Enter character to the processed data. 

-----

**Related guides**:

* [Advanced Data Formatting](../adf)
* [DataWedge Profiles](../../profiles)
* [DataWedge APIs](../../api) 

---
title: About Enterprise Keyboard Designer
layout: guide.html
product: Enterprise Keyboard Designer
productversion: '1.2'
---

## Overview

Enterprise Keyboard Designer (EKD) is a free GUI tool for Windows that can be used to create customized key layouts to enhance an application and enable efficient and accurate data entry. **Layouts created with EKD work on Zebra Android devices that use Zebra's [Enterprise Keyboard](/enterprise-keyboard) 3.2 (and higher)**, and can be displayed **programmatically using Android intents or through DataWedge 7.5 (and higher)** when specific input situations arise. Enterprise Keyboard offers many enhancements over the stock Android Keyboard, including tabbed layouts with "swipe-to-switch" functionality, programmable keys and a color scheme is designed to be visible in a variety of dark and light conditions. Learn more [about Enterprise Keyboard](/enterprise-keyboard)

>**NOTE**: This tool is ***NOT*** intended for creating layouts to replace any general-purpose keyboard.

EKD employs a drag-and-drop interface with control over fonts, images, key codes, layout transparency and many other layout properties. As many as 20 custom key layouts can be created and stored in a file, deployed to devices and called by apps as needed to match specific types of input. **Zebra Enterprise Keyboard (EKB) must be installed and set as the default input method to make use of custom EKD layouts**. EKB is preinstalled on many Zebra devices and available as a side-load for others. See [supported Zebra devices](/enterprise-keyboard/3-2/download/) for more information. 

#### USE EKD FOR:
* Numerical and/or symbolic input layouts 
* Function-key layouts
* Layouts that combine function keys with buttons for scanning or other purposes
* Key and button layouts with custom colors, images and levels of transparency
* Layouts of custom size or shape (i.e. narrow, vertical, horizontal, etc.)

#### DO NOT USE EKD:
* To create a general-purpose device keyboard replacement
* On devices that do not have Zebra Enterprise Keyboard 3.2 (or higher) installed and set as the default

### Prerequisites

* Computer running Windows 7, 8 or 10
* Enterprise Keyboard Designer 1.2 (or higher) installed [(how to download)](../../download)
* One or more [supported Zebra devices](/enterprise-keyboard/3-2/download/) running Android 7.x Nougat or higher 

-----

## Usage Snapshot

EKD features a simple drag-and-drop UI to allow quick creation of purpose-built key layouts configured for specific key actions that can be modified for different devices and screen resolutions. A device simulator helps ensure that what is seen in the tool is similar to the layouts being deployed.  

<img alt="" style="height:450px" src="ekd_main_steps.png"/>
***Click image to enlarge, ESC to exit***. 
<br>

### `IMPORTANT - PLEASE READ`
* <u>**Enterprise Keyboard Designer must be used only in full screen mode**</u>. Resizing the EKD application window after starting a project can result in unpredictable behavior.
* **Enterprise Keyboard 3.2 (or higher) must be installed and set as the default input method on the device** to display layouts made with EKD.<br> Learn more [about Enterprise Keyboard](/enterprise-keyboard). 
* **<u>Only one keyboard or custom key layout can be displayed on the device screen at a time</u>**. When a custom key layout is displayed, all other keyboards are hidden, including the standard Enterprise Keyboard alpha-numeric layout. 
* **To display an EKD layout, it must be called by an app using intents** (see [EKB APIs section](/enterprise-keyboard/latest/guide/apis)).
* **Apps on the device can access <u>only a single EKD project file</u>**, but as many as 20 layouts can be saved in that single project file and called independently through intents.  
* EKD projects are saved and deployed as encrypted files that can be decrypted on the device only by **Enterprise Keyboard and Enterprise Browser**. 
* Layout files can be imported into EKD and modified or supplemented with additional keys and/or layouts. 

> **Note**: In this guide, the terms “button” and “key” are used interchangeably. 

-----
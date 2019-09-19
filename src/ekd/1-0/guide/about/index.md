---
title: About Enterprise Keyboard Designer
layout: guide.html
product: Enterprise Keyboard Designer
productversion: '1.0'
---

## Overview

The Enterprise Keyboard Designer (EKD) is a powerful key-Layout editor for Windows 7, 8 and 10. It provides a graphical interface for creating and modifying custom key Layouts for Enterprise Keyboard, Zebra's replacement for the stock Android keyboard designed specifically for the workplace. 

An unlimited number of custom key Layouts can be created, deployed to devices and called by customer apps (through Android intents) as needed to match specific types of input. Zebra Enterprise Keyboard (EKB) must be installed to make use of custom EKD Layouts. EKB is preinstalled on many Zebra devices and available as a side-load for others. Enterprise Keyboard, Zebra's soft input device for enhancing workplace productivity, is not required to use EKD layouts on a device. 

<img alt="" style="height:350px" src="ekd_main_steps.png"/>

***Click image to enlarge, ESC to exit***<br>*EKD features a simple drag-and-drop UI with device simulator to allow quick creation of purpose-built key Layouts <br>configured for specific key actions that can be modified for different devices and screen resolutions*.

### `IMPORTANT - PLEASE READ`
* **<u>Only one keyboard or custom key Layout can be displayed on the device screen at a time</u>**. When a custom key Layout is displayed, all other keyboards are hidden, including the standard Enterprise Keyboard alpha-numeric Layout. 
* **Layouts made with EKD must be called by an app using intents** to be displayed (see [Intent APIs section](#intentapis)).
* **Apps on the device can access <u>only a single EKD project file</u>**, but multiple Layouts can be saved in that single project file and called independently through intents.  
* EKD projects are saved and deployed as encrypted files that can be decrypted on the device only by **DataWedge, Enterprise Browser and Enterprise Keyboard** and applications running on a Zebra Android device. 
* Layout files can be imported into Enterprise Keyboard Designer and modified or supplemented with additional keys and/or Layouts. 
* **Zebra recommends resetting to the default input device when quitting an app that uses EKB**. 
* In this guide, the terms “button” and “key” are used interchangeably. 

-----

## General Usage Notes

* **The Enterprise Keyboard Designer <u>must be used only in full screen mode**</u>. Resizing the Enterprise Keyboard Designer application window after starting a Project can result in unpredictable behavior. 
* **The number of allowable characters in a button label field is dependent on width of the key**. To avoid automatic key resizing, button label should not exceed available width. 
* **The font size used for a button label is dependent on the size of the key being labeled**. To avoid automatic key resizing, select a point size appropriate for the size of the button.
* **The secondary text button label field is dependent on the width of the key**. To avoid automatic key resizing, the secondary button label should not exceed available width.
* **Zebra recommends that button image size not exceed 100 KB**. Larger images are supported but might impact performance of the Layout. 
* When switching Layouts, a thin white line is sometimes shown at the bottom or sides of the background key Layout in the device simulator, but has no effect on the simulated display.
* The following reserved names must not be used in Model Input fields (PressAction, LongPressAction, etc.) or in KeyEvents: 
 * Scantrigger
 * deviceInfo
 * calculator
 * switch-abc
 * switch-123
 * switch-&#35;&#42;&#47;
 * switch-scan
 * customLayout
 * key-keyincaps

-----
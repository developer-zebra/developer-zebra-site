---
title: Enterprise Keyboard Designer
layout: guide.html
product: Enterprise Keyboard
productversion: '2.1'
---

## Overview
The Enterprise Keyboard Designer (EKD) is a powerful key-layout editor for Windows 7, 8 and 10. It provides a graphical interface for creating and modifying custom key layouts for Enterprise Keyboard, Zebra's replacement for the stock Android keyboard designed specifically for the workplace. 

An unlimited number of custom key layouts can be created, deployed to devices and called by customer apps (through Android intents) as needed to match specific types of input.  Pre-installed on many Zebra devices and also available as a side-load, Zebra Enterprise Keyboard (EKB) must be installed to make use of custom EKD layouts. 

EKD features a simple drag-and-drop UI with device emulation allows quick creation of purpose-built key layouts configured for specific key actions that can be modified for different devices and screen resolutions. An optional layout grid ensures precise and uniform key placement.

##### IMPORTANT USAGE NOTES - PLEASE READ
* **The Zebra Enterprise Keyboard MUST be installed on the device and selected as the default input source** to make use of custom layouts created with EKD. 
* **<u>Only one keyboard or custom key layout can be displayed on the device screen at a time</u>**. When a custom key layout is displayed, all other keyboards are hidden, including the (alpha-numeric) Enterprise Keyboard. 
* **Custom layouts must be called by an app using intents** (see [Intent APIs section](#intentapis)).
* Multiple layouts can be saved in a single file, but only a single file can be accessed by apps on the device.  
* EKD projects are automatically saved and deployed as encrypted files that can be decrypted only by **DataWedge, Enterprise Browser and Enterprise Keyboard**, applications running on a Zebra Android device, or by the **Enterprise Keyboard Designer** tool itself. 
* Layout files can be imported into the Enterprise Keyboard Designer and modified or supplemented with additional keys or layouts. 
* **Zebra recommends resetting to the default input device when quitting an app that uses EKB**. 
* In this guide, the terms “button” and “key” are used interchangeably. 

-----

### Installation
EKD is instaled in the same was as any Windows application. 

1. Download the “CustomKeyboardDesignerUtility.exe” onto the target Windows system. 
2. Double-click .exe file to install.
3. Enterprise Keyboard Designer launches automatically after installation.

-----

### Using EKD

Each Enterprise Keyboard Designer project contains one or more key layouts saved as a single encrypted file. The project name becomes the file name, with “`.encrypted`” as the file extension (i.e. “`myTC75Layout.encrypted`”). 

#### I. Create a Project

In the Custom Enterprise Keyboard Designer Utility: 
Click “New keyboard Project” 
Enter a project name and click “Submit” or press ENTER
Select a target device from the drop-down and click “Confirm” 
Select the device orientation and click “Confirm”

When the project name is seen in the top-left corner, the workspace is ready to create new Layouts. Note: Project-level settings cannot be changed later.

For a demo of the steps above, see the "createProject.mp4” video.

Create a Layout
A Layout is defined as any grouping of keys. Layouts are created using “drag and drop” or the “grid layout” option. Layout names must be unique and contain only alpha-numeric characters.


1. Click on the Menu button to open the sidebar:
<b>Switch layouts with taps or swipes</b> across the keypad:  
<img alt="" style="height:350px" src="sample_1.png"/>
_The Tab bar can be set to automatically hide away, maximizing screen space for applications_. 
<br>
2. Click the add button icon (+):
<b>Switch layouts with taps or swipes</b> across the keypad:  
<img alt="" style="height:350px" src="sample_1.png"/>
_The Tab bar can be set to automatically hide away, maximizing screen space for applications_. 
<br>
3. Specify a name and press ENTER:
<b>Switch layouts with taps or swipes</b> across the keypad:  
<img alt="" style="height:350px" src="sample_1.png"/>
_The Tab bar can be set to automatically hide away, maximizing screen space for applications_. 
<br>
4. To modify an existing Layout, click the EDIT icon; <br>To delete, click the TRASH icon: 
<b>Switch layouts with taps or swipes</b> across the keypad:  
<img alt="" style="height:350px" src="sample_1.png"/>
_The Tab bar can be set to automatically hide away, maximizing screen space for applications_. 
<br>

Using drag and drop
1. Select the Layout to edit (if not already selected).
2. With the mouse pointer on the (simulated) device screen, drag to create a Key Layout Background in approximately the desired position on the simulator. Once created, the Layout can be repositioned on the device by dragging. To resize, grab and drag the right or bottom edges. 
3. Drag the desired key(s) from the key panel (at right) to the new Key Layout Background. Drag to reposition. 
4. Save your progress using the “Save Layout” button. There is no confirmation window when saving.

`**IMPORTANT**:` Always save the current Layout before switching to another. Otherwise changes to the current Layout are lost. 

Using Grid Layout
The Grid Layout option permits button Layouts to be created more quickly and with more precision than the drag-and-drop method. When a Grid is initially created, it is automatically placed with its left and bottom edges flush with the left and bottom edges of the simulator.  

1. Create or open a Layout to edit (if not already open). 
2. Check the “Create Grid Layout” checkbox. This enables parameters to be entered in the Grid Properties input fields shown below. Configure the values as required (in pixels or count, as applicable). Changes are immediately visible in the Layout. 
Grid Properties:

** Left -** Layout offset (in pixels) from the left edge of the screen.

**Top -** Layout offset (in pixels) from the top edge of the screen.

**Width -** Overall width (in pixels) of the Layout.

**Height -** Overall height (in pixels) of the Layout.

**Rows -** Number of rows in the Layout, divided equally across the specified Height.

**Columns -** Number of columns in the Layout, divided equally across the specified Width. 

**Margin -** Distance (in pixels) between Grid boxes, each of which stores one Button.

3. Click on “Save Grid Layout” button (in the Layout Properties panel) to store changes to the Layout.
4. Configure Button Properties and functions as required (see below).  
5. Configure Layout Properties as required (see below).

IMAGE

Notes: 
Layout drag and resize features are disabled when using Grid Layout. 
Button drag and resize features are enabled only after saving the Grid Layout clicking the “Save Grid Layout” button, in the Layout Properties panel.


<!--  EMBEDDED VIDEO CODING

<iframe width="560" height="315" src="https://www.youtube.com/embed/dPzyDFMcJzI" frameborder="0" allowfullscreen></iframe>

 -->

<!-- LINKS
* **Manually** on the device
* **Programmatically** through [EMDK for Android](../../../../emdk-for-android) development tools
* **Remotely** using [StageNow](../../../../) and the [UI Manager](/mx/uimgr/) service
* Remotely through a company's own enterprise mobile management (EMM) system (if supported by that system)

<b>Switch layouts with taps or swipes</b> across the keypad:  
<img alt="" style="height:350px" src="sample_1.png"/>
_The Tab bar can be set to automatically hide away, maximizing screen space for applications_. 
<br>

 -->



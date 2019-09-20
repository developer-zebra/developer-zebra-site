---
title: Enterprise Keyboard Designer
layout: guide.html
product: Enterprise Keyboard Designer Designer
productversion: '1.0'
author: Eddie Correia
created: 9/9/2019
---

## Overview

Each Enterprise Keyboard Designer project contains one or more key layouts, which are defined as any grouping of keys. Layouts are created using “drag and drop” or the “grid layout” option and are saved as a single encrypted file. The project name becomes the file name, with “`.encrypted`” as the file extension (i.e. `myTC75Layout.encrypted`). 

-----

### I. Create a Project

1. Launch the Enterprise Keyboard Designer utility: 
 <img alt="" style="height:250px" src="EKD_app_icon.png"/>
 <br>
2. **Click the “NEW KEYBOARD PROJECT”** button:
 <img alt="" style="height:268px" src="ekd_splash_0.png"/>
 <br>
2. **Enter a project name and click “Submit”** or press ENTER:
 <img alt="" style="height:250px" src="EKD_splash.png"/>
 <br>
3. **Select a target device** from the drop-down and click the “Confirm” button:  
 <img alt="" style="height:367px" src="ekd_select_device.png"/>
 <br>

**When the project name is displayed in the upper-left corner of the main designer screen (as below), EKD is ready to create custom layouts**.

> **Note**: Once a project is created, its target device and other project-level settings cannot be changed.

<!-- 
For a demo of the steps above, see the "createProject.mp4” video.
 -->

-----

### II. Create Layout(s)

1. From the main designer screen, **click the menu button** in the upper-left corner:  
 <img alt="" style="height:350px" src="ekd_main_Layout_screen.png"/>
 _Click image to enlarge, ESC to exit_.
 <br>
 <br>
2. **Click the [+] icon to create a new layout** or select an existing layout to edit: <br>
 <img alt="" style="height:350px" src="ekd_Layout_names.png"/>
 _Click image to enlarge, ESC to exit_.
 <br>
 <br>
3. **Select the device orientation** and click the “Confirm” button:
 <img alt="" style="height:350px" src="ekd_orientation_screen.png"/>
 _Click image to enlarge, ESC to exit_.
 <br>
 <br>
4. **Enter a layout name and press ENTER**. **`NOTE:`** Each layout name within a project must be unique and contain only alpha-numeric characters. <br>The name of the current layout appears in the upper-left corner of the screen: 
 <img alt="" style="height:350px" src="ekd_Layout_name_location.png"/>
 _Click image to enlarge, ESC to exit_.
 <br>
 <br>
5. With the mouse pointer on the simulated device screen, **drag to create a layout background** in approximately the desired position on the simulator: 
 <img alt="" style="height:350px" src="ekd_drag_Layout.gif"/>
 _Click image to enlarge, ESC to exit_.
 <br>
 <br>
6. **Drag the layout on the device screen** to reposition and resize as needed:  
 <img alt="" style="height:350px" src="ekd_resize_Layout.gif"/>
 _Click image to enlarge, ESC to exit_.
 <br>
 <br>
7. **Drag the desired key(s) from the key panel** (at right) to the layout, dragging to resize and/or reposition as needed:
 <img alt="" style="height:350px" src="ekd_drag_buttons.gif"/>
 _Click image to enlarge, ESC to exit_.
 <br>
 **To move a key**, drag it within the key layout background or double-click it (to select) and move it using the arrow keys on the host computer keyboard.<br>
 **To resize a key**, drag the key's right and bottom edges within the key layout background or select it and edit the "layout Properties" fields in the Button Properties panel.
 <br>
 <br>
 **Alternatively, use the Grid layout option (checkbox)** to automatically fill the layout with a matrix of equally spaced buttons based on the specified number of columns and rows. The new layout is placed along the left and bottom edges of the simulator and can be resized as in Step 5, if needed.<br>**WARNING**: Checking this box clears the current layout, if any. 
  <img alt="" style="height:350px" src="ekd_grid_Layout.png"/>
 _Click image to enlarge, ESC to exit_.
 <br>
 <br> 
8. Click on the layout and/or key(s) to **modify properties using the [Button and Layout Properties](#properties) panels**: 
 <img alt="" style="height:350px" src="ekd_properties_panels.png"/>
 _Click image to enlarge, ESC to exit_.
 <br>
 <br>
9. **Click "Save Layout" or "Save Grid Layout" button** often to preserve settings. 
10. **Repeat Steps 7&ndash;9** until the layout is configured as desired. 
11. **Click "Save Project" to create a project file for deployment**.
<br>

-----

### III. Set Button Properties

#### Button Position 

**Double-click a button to select it and adjust its properties**. The currently selected key is indicated by a red border, and input fields for its Button Properties are enabled. Changes to properties appear immediately on the selected button.

**The Layout Properties** section of the Button Properties panel refers to the left and top offsets and the width and height of the selected button. All measurements are in pixels. 

**If the layout was created using drag-and-drop**, a key must be selected from the key panel and dropped into the layout. Double-click the key to change its default settings.

**If the layout was created using Grid Layout**, double-click on any box in the grid to configure its properties.

#### Layout Properties (within Button Properties panel)

**Left -** Layout offset (in pixels) from the left edge of the screen. 

**Top -** Layout offset (in pixels) from the top edge of the screen.

**Width -** Specifies the width (in pixels) of the selected button.

**Height -** Specifies the height (in pixels) of the selected button.

-----

#### Text Properties

**Text -** Specifies the Button label (displayed text) for the selected Button. **Applies only if an image is NOT selected**.

**Font Size -** Specifies the font size (in points) of the Button label text for the selected Button. 

**TextColor -** Specifies the color of the Button label text for the selected button. 

**TextStyle –** Specifies the style of the Button label text for the selected button. Drop-down values: Normal, Bold, BoldItalic, Italic. 

**SecondaryText -** Specifies the secondary Button label displayed in the upper-right corner of the selected button. Indicates the key’s output or Action when long-pressed. **Applies only if an image is NOT specified**.

##### Notes
* The text input field accepts all characters, including Chinese.
* All key-label text (including secondary text) is ignored if a key image is specified.
* The number and size of characters in the button text and secondary text fields should correspond to the key size to avoid automatic changes to the size.

-----

#### Action Properties

**PressAction -** Defines the action taken when the selected Button is pressed and released. Accepts a predefined command string only (see below). Overridden by ActionDown property. 

**LongPressAction –** Defines the action taken when the selected Button is long-pressed. Accepts a predefined command string only (see below). Overridden by ActionUp property. 

**ActionDown -** Defines the action to be taken immediately upon Button press (before it is released). Accepts a predefined command string only (see below). Overrides PressAction property. 

**ActionUp -** Defines the action to be taken when the selected key is released (after being pressed). Accepts a predefined command string only (see below). Overrides Long Press Action property.

-----

#### Style Properties
**Preview -** Used to expose the value of a key when pressed. The key value is previewed only if the preview value is set to “true” (default for all keys).

**Transparency -** Used to specify the transparency for the selected key from 0 (opaque) to 100 (fully transparent). Changes appear immediately on the device simulator. 

**Button Color -** Used to specify the color of the selected key. Changes appear immediately on the device simulator.

**ColorPressed -** Used to specify the color of the selected key when the key is pressed. Changes appear on the device simulator when the key is pressed. 

**Image -** Used to specify an image to fill the space of the selected key. After selection, the image appears immediately on the device simulator. When the layout is saved, selected image(s) are embedded within the “.encrypted” file. Supports `.jpg` and `.png` image file formats. 

**ImagePressed -** Used to specify an image to be displayed when the button is pressed. After selection, the image appears on the device simulator when the button is pressed. When the layout is saved, selected image(s) are embedded within the “.encrypted” file. Supports `.jpg` and `.png` image file formats.

-----

#### Feedback Properties

**HapticFeedback -** Used to control whether the device vibrates when the selected button is clicked. Set the value to “true” to vibrate (default = false).

**Duration -** Used to specify the duration (in ms) of vibration when the “Haptic Feedback” property is set to true (default = 40 ms). 

-----

### IV. Set Layout Properties

#### Grid Properties

**Left -** Layout position offset (in pixels) from the left edge of the screen.

**Top -** Layout position offset (in pixels) from the top edge of the screen.

**Width -** Overall width (in pixels) of the layout.

**Height -** Overall height (in pixels) of the layout.

**Rows -** Number of rows in the layout, divided equally across the specified Height.

**Columns -** Number of columns in the layout, divided equally across the specified Width. 

**Margin -** Distance (in pixels) between Grid boxes, each of which stores one Button.

##### Grid Usage Notes
* **Once a grid is created, the number of its columns and rows cannot be changed**.  
* **Layout drag-and-drop and resize features are disabled** when using Grid Layout. 
* **Button drag and resize features are enabled** only after saving the Grid Layout.
* Style Properties can be configured when using drag-and-drop or grid layout functions. 

-----

#### Style Properties

**Background Color -** Specifies the color of the Key Layout. Changes appear in the layout immediately after clicking OK in the color picker. 

**Transparency -** Used to select of the transparency from 0 (opaque) to 100 (fully transparent) of the Key Layout Background using a slider. Changes appear immediately.

-----

#### Simulator Properties

**Status Bar -** Used to show/hide the Status bar (which contains notifications and system icons) at the top of the device simulator screen. The layout “Top” coordinate changes based on this setting, which depends on status bar setting configured at the application level. **Must be hidden for full-screen applications**.

**System Bar -** Used to show/hide the System (navigation) bar at the bottom of the device simulator screen. The layout “Top” coordinate changes based on this setting, which depends on System bar setting configured at the application level. **Must be hidden for full-screen applications**. 

-----

#### Predefined Command Strings

**Perform KeyEvent action -** Used to generate a particular KeyEvent or output as a character. Specify the key and value in key-value format from among the standard Android KeyEvent values. The KeyEvent for a key can be captured inside JavaScript onKeyDown events and output the value, if associated. It should be written in the format below. 

**Note**: Command strings are case sensitive. 

* To capture a lower-case "a" the action should be “key-29”
* To capture an upper-case "A" the action should be “keyincaps-29”
* To capture a Unicode, the action should be “uc-003C”

<b>Switch layouts with taps or swipes</b> across the keypad:  
<img alt="" style="height:150px" src="ekd_07.png"/>

**Action to Switch Layout -** Use the key-value pairs below to switch to a specific layout when using Zebra Enterprise Keyboard.

-----

#### Predefined commands

**switch-abc -** switches to the default “abc” (alphabetic) layout

**switch-123 -** switches to the “123” (numeric) layout

**switch-scan -** switches to the “scan” (scanning button) layout

**switch-&#35;&#42;&#47; -** switches to the “&#35;&#42;&#47;” (symbolic) layout

**switch- [LayoutName] -** switches to the named custom layout

-----

#### Layout Usage Notes 	
* The layout names shown above (“abc," “123," “scan” and “&#35;&#42;&#47;”) are reserved for default Enterprise Keyboard layouts and cannot be used as custom layout names. 
* **Switching layouts is supported on Enterprise Keyboard only**.
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
* While the key action can be configured to execute a command, Enterprise Keyboard currently supports only the “scantrigger” action command, which scans a barcode using DataWedge.
* The Enterprise Browser ButtonBar API accepts several predefined commands as button actions. Refer to the Enterprise Browser TechDocs for more information. 

-----

#### To Save Layout:

To save the current layout data, click the “Save Layout” button in the lower-right corner of the main designer screen or the “Save Grid Layout” button in the Layout Properties panel.

#### To Save Project:

To save the current keyboard layout project, click the “Save Project” button. A dialog appears indicating the location of the saved “`.encrypted`” file. Take note of the save directory for later reference. 

#### To Delete a Key:

1. In the layout that contains the key to be deleted, **double-click on the the key to be deleted**; the selected key is surrounded by a dotted red line. 
3. **Press the “Delete” key on the host computer’s keyboard**. A confirmation dialog appears. 
4. **Click “Yes”** on the confirmation dialog to delete. 

#### To Clear a Layout: 
1. In the layout to be cleared, **Click the red “Clear Layout” button**. 
3. **Click “Yes”** to confirm the deletion of all layout elements. 

> Data for custom layout(s) and key-value assignment(s) is stored in the keyboard definition file, a single encrypted file on the development host computer. To deploy, simply push this file to the desired mobile device(s) and activate custom layouts through application intents. Layouts are available immediately upon deployment.<br> **Deployment instructions follow below**. 

-----

### V. Deploy Layout(s)

The data for custom keyboard layout(s) is stored in the custom keyboard definition file, an encrypted file generated by the Enterprise Keyboard Designer. This file contains information about key locations, key-value assignments, etc. for each keyboard layout created. This single file can contain multiple layout groups, each of which defines a layout. **It's important to note that an app can access only a single layout file on the device, so all layouts required on a device MUST be stored in that single file**. 

**To push a keyboard definition file**:

1. **Locate the keyboard definition file** (i.e. `LayoutProjectName.encrypted`) on the development host computer. <br>
 By default, the files are saved in the download directory of the current user: <br>
 `c:\Users\userName\Downloads\LayoutProjectName.encrypted`<br>
 **NOTE**: When clicking EKD's "Save Project" button, the default folder is shown similar to the image below: 
 <img alt="" style="height:250px" src="ekd_project_saved.png"/>
 _Click image to enlarge, ESC to exit_.
 <br>
2. In the Settings panel on the device, set Enterprise Keyboard as a default IME.
3. Push definition file to the device folder:<br>
 `/enterprise/device/settings/ekb/config/`

**Custom keyboard layouts are available on the device immediately upon file deployment**. 

-----

## Import Keyboard Project
Keyboard projects created earlier can be modified for use on different devices, adapted for different screen sizes and features or for any reason. 

**To import a project**: 

1. On the Enterprise Keyboard Designer’s launch screen, click the “IMPORT KEYBOARD PROJECT” button. 
2. Navigate to and double-click the project (“`.encrypted`” file) to import.
3. Select the target device using the drop-down menu and click the “Confirm” button. 
4. Select the device orientation and click the “Confirm” button.
5. When the Project name is seen at top-left corner, the workspace is ready for use.
6. Click on the menu button and select a layout to edit.
7. When the layout name is seen in the top-left corner (after the Project name) and layout keys are visible in the device simulator, the layout is ready to be edited.

-----

## General Usage Notes

* **The Enterprise Keyboard Designer <u>must be used only in full screen mode**</u>. Resizing the Enterprise Keyboard Designer application window after starting a Project can result in unpredictable behavior. 
* **The number of allowable characters in a button label field is dependent on width of the key**. To avoid automatic key resizing, button label should not exceed available width. 
* **The font size used for a button label is dependent on the size of the key being labeled**. To avoid automatic key resizing, select a point size appropriate for the size of the button.
* **The secondary text button label field is dependent on the width of the key**. To avoid automatic key resizing, the secondary button label should not exceed available width.
* **Zebra recommends that button image size not exceed 100 KB**. Larger images are supported but might impact performance of the layout. 
* When switching layouts, a thin white line is sometimes shown at the bottom or sides of the background key layout in the device simulator, but has no effect on the simulated display.
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

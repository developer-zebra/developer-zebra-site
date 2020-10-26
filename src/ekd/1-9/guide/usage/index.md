---
title: Using Zebra EKB Designer
layout: guide.html
product: Enterprise Keyboard Designer
productversion: '1.9'
author: Eddie Correia
created: 9/9/2019
---

## Overview

Each Enterprise Keyboard Designer project contains one or more key layouts, which are defined as any grouping of keys. Layouts are created using “drag and drop” or the “grid layout” option and are saved as a single encrypted file. The project name becomes the file name, with “`.encrypted`” as the file extension (i.e. `myTC75Layout.encrypted`). 


### Change Log

* `ADDED in v1.4:` **[Create "canned text"](#cannedtext)** to appear in a list for easy selection (requires EKB 3.4 or later). 
* `ADDED in v1.4:` **[Set a default layout](#iicreatelayouts)** to display on input field focus (EKB 3.4+).
* `ADDED in v1.9:` **[RepeatKeys function](#repeatkeys)** causes a specified keyCode to be repeated when long-pressing the key (EKB 3.9+). 
* `ADDED in v1.9:` **[Macros feature](#actionproperties)** combines multiple keyCodes, presses or Actions into a single key-press (EKB 3.9+).
* `ADDED in v1.9:` **[Undo function (CTRL-Z)](#iicreatelayouts)** reverses up to 10 operations.
* `ADDED in v1.9:` **[Deploy button](#vdeploylayouts)** exports the current layout file to a USB-connected device.  

-----

### General Usage Notes

* **The Enterprise Keyboard Designer <u>must be used only in full screen mode**</u>. Resizing the Enterprise Keyboard Designer application window after starting a Project can cause unpredictable behavior. 
* **To display EKD layouts on a device, Enterprise Keyboard must be installed on that device** and set as the default input source.
* **The "Switch-Scan" Press Action** (intended to invoke the EKB "scan" layout) sometimes brings up a different layout. 
* **When opening a layout using the "Switch-abc," "Switch-123," "Switch-#&#42;/" and "Switch-Scan" Actions**, the layout tab name shown is sometimes NOT that of the layout being displayed.
* **Use of switch actions (Switch-abc, Switch-123, etc.) requires the respective tab(s) (Alpha, Numeric, etc.) to be enabled** in [Enterprise Keyboard Preferences](https://techdocs.zebra.com/enterprise-keyboard/latest/guide/settings/#preferences) on the target device(s).
* **The order of layout names shown in the EKD layout menu can vary** from the list returned by the `GET available keyboard layouts` intent API. See [Enterprise Keyboard APIs](https://techdocs.zebra.com/enterprise-keyboard/latest/guide/apis) for details.
* **Deployed layouts sometimes look slightly different** than their appearance in the device simulator.    
* **Do NOT deploy empty key layouts**; they can cause Enterprise Keyboard to behave unpredictably.
* **When using DataWedge to switch layouts**, the EKB fixed layout is sometimes shown briefly or until the focus changes again. See DataWedge Notes, below. 
* **When custom layouts are displayed, <u>all EKB settings, preferences and functions are suspended</u>**.
* If a custom layout is the default, **an IME change request from the Google keyboard sets that custom layout as the default**.

### DataWedge Notes
The DataWedge service is included on every Zebra device and when enabled, allows any application on the device to acquire data from various input sources. The following rules apply when DataWedge is used. 

* **DataWedge default layout settings always takes precedence over those set by EKD**. 
* **If DataWedge is enabled at the time a custom layout file is deployed**, the EKD default setting is ignored and the Enterprise Keyboard fixed layout is shown when an input field gets focus. 
* **If DataWedge is enabled *after* a custom layout had been set as the default**, the DataWedge setting takes precedence (and is enabled). 
* **If DataWedge is *disabled* after a custom layout file is deployed**, <u>the custom file must be redeployed</u> to use that custom file as the default layout. 

> **Note**: In this guide, the terms “button” and “key” are used interchangeably. 

-----

### Also See

* [Dynamically Switching Keyboards](https://developer.zebra.com/blog/dynamically-switching-keyboards-zebra-android-devices) | **Article by Zebra Engineering** on implementing custom layouts, with sample code
* [Exploring the Enterprise Keyboard API](https://developer.zebra.com/blog/exploring-enterprise-keyboard-api) | **Article by Zebra Engineering** on working with EKD-made layouts

-----

## I. Create Project

1. Launch the Enterprise Keyboard Designer utility: 
 <img alt="" style="height:250px" src="EKD_app_icon.png"/>
 <br>
2. **Click the “NEW KEYBOARD PROJECT”** button:
 <img alt="" style="height:250px" src="ekd_splash_0.png"/>
 <br>
2. **Enter a project name and click “Submit”** or press ENTER (recommended 15 character max):<br>
 <img alt="" style="height:250px" src="EKD_splash.png"/>
 <br>
3. **Select a target device** from the drop-down and click the “Confirm” button:  
 <img alt="" style="height:367px" src="ekd_select_device.png"/>
 <br>

**When the project name is displayed in the upper-left corner of the main designer screen (as below), EKD is ready to create custom layouts**.

> **Note**: Once a project is created, its target device and other project-level settings cannot be changed.

<hr>

## II. Create Layout(s)

Before beginning a layout, please make note of the following: 

#### Layout Creation Usage Notes

* **Press CTRL-Z to Undo the most recent operations(s)**. 
* **There is no "Redo" function**; changes made using CTRL-Z must be reverted manually.  
* **The Undo "stack" stores as many as 10 actions**, and works only within the active layout. 
* **The <u>Undo stack is cleared</u> when**:
 * Switching layouts
 * Creating a new layout
 * Clearing the current layout
 * Switching layout type (i.e. from Grid to Drag-and-Drop or vice-versa)
* Changes to **Grid layout properties** cannot be undone.
* Actions performed on **multi-selected keys** cannot be undone. 
* All buttons should be placed within the bounds of the layout background. A layout must not be resized so that it hides any key or button.
* When switching from one layout to another during design, a thin white line is sometimes visible at the bottom or sides of the layout background in the device simulator. This has no effect on the simulated display.
* Button positions sometimes shift slightly when switching layouts during design. 

> **IMPORTANT:** Layout-creation UI elements become available when applicable to the layout being created.

### Using Drag-and-drop

1. From the main designer screen, **click the menu button** in the upper-left corner:  
 <img alt="" style="height:350px" src="ekd_main_layout_screen.png"/>
 _Click image to enlarge, ESC to exit_.
 <br>
 <br>
2. **Click the [+] icon to create a new layout**:
 <img alt="" style="height:350px" src="EKD_14_set_default_layout_2.png"/>
 _Click image to enlarge, ESC to exit_.
 <br>
 <br>
3. **Select the device orientation** and click the “Confirm” button:
 <br>
 **`NOTE:`** Orientation option **NOT** available on CC600, CC6000, MC33, MC93, PS20, TC8x, VC80x or VC83x devices.
 <img alt="" style="height:350px" src="device_orientation.png"/>
 _Click image to enlarge, ESC to exit_.
 <br>
 <br>
4. **Enter a layout name and press ENTER**.<br> **`NOTE:`** Layout names are case-sensitive, must be unique within a project and may contain only alpha-numeric characters. <br>**Zebra recommends layout names contain a <u>maximum of 15 characters</u>**. <br>The name of the current layout appears in the upper-left corner of the screen: 
 <img alt="" style="height:350px" src="ekd_layout_name_location.png"/>
 _Click image to enlarge, ESC to exit_.
 <br>
 <br>
 **Note: Buttons shown in the sample images are for illustration purposes. They DO NOT appear in layouts created with EKD**.
 <br>
 <br>
5. With the mouse pointer on the simulated device screen, **drag to create a layout background** in approximately the desired position on the simulator: 
 <img alt="" style="height:350px" src="ekd_drag_layout.gif"/>
 _Click image to enlarge, ESC to exit_.
 <br>
 <br>
6. **Drag the layout on the device screen** to reposition and resize as needed:  
 <img alt="" style="height:350px" src="ekd_resize_layout.gif"/>
 _Click image to enlarge, ESC to exit_.
 <br>
 <br>
7. **Drag the desired key(s) from the key panel** (at right) to the layout, dragging to resize and/or reposition as needed:
 <img alt="" style="height:350px" src="ekd_drag_buttons.gif"/>
 _Click image to enlarge, ESC to exit_.
 <br>
8. **Repeat Step 7** until the layout is configured as desired. 
9. **Click "Save Layout" button** to store the project settings.<br>
 **NOTE**: To set layout as the default (to appear whenever EKB is used), click on the layout's star icon:
 <img alt="" style="height:150px" src="EKD_14_set_default_layout.png"/>
10. **Click "Save Project" to create a project file for deployment**.

> **NOTE: Setting the default layout from EKD requires Enterprise Keyboard 3.4 or later on the device**. 

-----

### Using Grid Layout

**The Grid layout option** automatically fills the layout with a matrix of equally spaced buttons based on the specified number of columns and rows. The new layout is placed along the left and bottom edges of the simulator and can be resized (and buttons relocated) as needed.<br>**`WARNING:`** Checking the Grid Layout box clears any existing layout. 

> `WARNING:` Changes to Grid Properties **CANNOT be undone** using CTRL-Z. 

1. From the main designer screen, **click the menu button** in the upper-left corner:  
 <img alt="" style="height:350px" src="ekd_main_layout_screen.png"/>
 _Click image to enlarge, ESC to exit_.
 <br>
 <br>
2. **Click the [+] icon to create a new layout**:
 <img alt="" style="height:350px" src="EKD_14_set_default_layout_2.png"/>
 _Click image to enlarge, ESC to exit_.
 <br>
 <br>
3. **Select the device orientation** and click the “Confirm” button:
 <br>
 **`NOTE:`** Orientation option **NOT** available on CC600, CC6000, MC33, MC93, PS20, TC8x, VC80x or VC83x devices.
 <img alt="" style="height:350px" src="device_orientation.png"/>
 _Click image to enlarge, ESC to exit_.
 <br>
 <br>
4. **Enter a layout name and press ENTER**.<br> **`NOTE:`** Layout names are case-sensitive, must be unique within a project and may contain only alpha-numeric characters. <br>**Zebra recommends layout names contain a <u>maximum of 15 characters</u>**. <br>The name of the current layout appears in the upper-left corner of the screen: 
 <img alt="" style="height:350px" src="ekd_layout_name_location.png"/>
 _**Note**: Buttons shown in the sample images are for illustration; they DO NOT appear in EKD layouts_.
 <br>
 <br>
5. **Check the Grid Layout checkbox** and set grid properties.<br> 
 **`WARNING:`** Checking this box clears the current layout, if any. **This action cannot be undone**.
 <img alt="" style="height:350px" src="ekd_grid_checkbox.png"/>
 _Click image to enlarge, ESC to exit_.
 <br>
 <br>
 <font face="arial" font size="4" color="black"> Grid Properties</font><br>
 <ul>
 <li><b>Left -</b> Layout position offset (in pixels) from the left edge of the screen. **Min = 0; max = 90% of device horizontal resolution (deviceWidth property)**.</li>
 <li><b>Top -</b> Layout position offset (in pixels) from the top edge of the screen. **Min = 0; max = 90% of device vertical resolution (deviceHeight property) with softSystemBar, if any**.</li>
 <li><b>Width -</b> Overall width (in pixels) of the layout **(min = 80; max = deviceWidth)**. </li>
 <li><b>Height -</b> Overall height (in pixels) of the layout **(min = 80; max = deviceHeight)**. </li>
 <li><b>Rows -</b> Number of rows in the layout, divided equally across the specified Height **(min = 1)**.</li>
 <li><b>Columns -</b> Number of columns in the layout, divided equally across the specified Width **(min = 1)**.</li> 
 <li><b>Margin -</b> Distance (in pixels) between Grid boxes, each of which stores one button **(min = 2; max = 10)**. </li></ul>
  **See [Zebra device specs](https://www.zebra.com/us/en/support-downloads/mobile-computers.html) for device resolution information**.<br>
  **See Grid Usage Notes below for important restrictions**.<br>
  <br>
6. **Double-click within each grid box to select it**. Then set its button properties: 
 <img alt="" style="height:350px" src="ekd_properties_panels.png"/>
 _Click image to enlarge, ESC to exit_.
 <br>
 <br>
7. **Click "Save Grid Layout" button** to store settings.<br> **`NOTE:` Once a grid is saved, its properties cannot be changed**.
8. **Repeat Step 6** until all buttons in the layout are configured as desired. 
9. **Click "Save Layout" button** to store the project settings.<br>
 **NOTE**: To set layout as the default (to appear whenever EKB is used), click on the layout's star icon:
 <img alt="" style="height:150px" src="EKD_14_set_default_layout.png"/>
10. **Click "Save Project" to create a project file for deployment**.
<br>

> **NOTE: Setting the default layout from EKD requires Enterprise Keyboard 3.4 or later on the device**. 

#### Grid Usage Notes
* Button and layout property settings are enabled only after saving the Grid layout.
* **Once a grid is created, its properties&ndash;including the number of columns and rows&ndash; cannot be changed**.
* **For the best layout performance, Zebra recommends the following**: 
 * **Horizontal layouts**: max rows = 5; max columns = 15
 * **Vertical layouts**: max rows = 15; max columns = 5
* Departure from recommended values might cause unpredictable button positioning or layout performance. 
* **Layout drag-and-drop and resize features are disabled** when using Grid Layout. 
* **Button-drag and -resize features are enabled** only after saving the Grid Layout.
* Style Properties can be configured when using drag-and-drop or grid layout functions. 
* When switching between layouts in a project, resizing or changing layout position might effect a Grid layout design.

-----

## III. Set Button Properties

### Button Positioning
Buttons can be positioned and resized within a layout by dragging manually, by using the keys on the host computer's keyboard, or by setting their coordinates in the Layout Properties panel. 

> **Note**: In this guide, the terms “button” and “key” are used interchangeably. 

#### Manual Positioning

**Double-click a button to select it and adjust its position and properties**. Selected key(s) are indicated by a red border, and supported input fields for Button Properties are enabled. Changes to most properties appear immediately on the selected button(s).

**To move a key**, drag it within the key layout background or double-click it (to select) and move it using the arrow keys on the host computer keyboard. **To resize a key**, drag the key's right and bottom edges within the key layout background or select it and edit the "Layout Properties" fields in the Button Properties panel.

**The Layout Properties** section of the Button Properties panel refers to the left and top offsets and the width and height of the selected button. All measurements are in pixels. **If the layout was created using drag-and-drop**, at least one key must be selected from the key panel and dropped into the layout before these properties can be set. Double-click a key to change its default property settings. **If the layout was created using Grid Layout**, double-click on box(es) in the grid to configure button properties.

-----

### (Button) Layout Properties

* **Left -** Layout offset (in pixels) from the left edge of the screen. **Value must fall between the layout's left and right boundaries**.  
* **Top -** Layout offset (in pixels) from the top edge of the screen. **Value must fall between the layout's upper and lower boundaries**.
* **Width -** Specifies the width (in pixels) of the selected button. **Value must be less than the layout width (min = 50)**.
* **Height -** Specifies the height (in pixels) of the selected button. **Value must be less than the layout height (min = 50)**.

> `IMPORTANT:` **The button layout properties above DO NOT support multi-key selection**; behavior is unpredictable.  

-----

### Text Properties

* **Text -** Specifies the button label (displayed text) for the selected button **(max = 5)**; **<u>must be blank if an image is selected</u> as button background**.
* **Font Size -** Specifies the font size (in points) of the button label text for the selected button **(min = 10; max = 25)**. 
* **TextColor -** Specifies the color of the button label text for the selected button. 
* **TextStyle –** Specifies the style of the button label text for the selected button. Drop-down values: Normal, Bold, BoldItalic, Italic. 
* **SecondaryText -** Specifies the secondary button label displayed in the upper-right corner of the selected button. Indicates the key’s output or Action when long-pressed  **(max = 2); <u>must be blank if an image is selected</u> as button background**.

#### Text Properties Usage Notes

* **Button property minimum and maximum value rules** are the same for individual and multi-key selections. 
* **Deleting a group of multi-selected keys** using the “Delete” key on the host computer’s keyboard is not supported. Keys must be deleted individually. 
* The text input field accepts all characters, including Chinese.
* All key-label text (including secondary text) is ignored if a key image is specified.
* The font size used for a button label is dependent on the size of the button being labeled. To avoid automatic button resizing, select a font size appropriate for the size of the button.
* The number and size of characters in the button text and secondary text fields should correspond to the key size to avoid automatic size changes.
* The position of secondary text can exceed button height (and be positioned out of view) if button is too small. To avoid this issue, increase button height.

-----

### Action Properties

* **PressAction -** Defines the action taken when the selected Button is pressed and released. Accepts only the predefined command strings in drop-down menu (see below). <br>
**Overridden by ActionDown property. Default = no action**.
* **LongPressAction –** Defines the action taken when the selected button is pressed and held. Accepts only the predefined command strings in drop-down menu (see below). <br>
**Overridden by ActionUp property. Default = no action**.
* **ActionDown -** Defines the action to be taken immediately upon button press (before it is released). Accepts only the predefined command strings in the drop-down menu (see below). <br>
**Overrides PressAction property. Default = no action**.
* **ActionUp -** Defines the action to be taken when the selected key is released (after being pressed). Accepts only the predefined command strings in the drop-down (see below). <br>
**Overrides LongPressAction property. Default = no action**.

`IMPORTANT:` **The Action properties above DO NOT support multi-key selection**.

-----

### Button Actions
Button Actions supported by EKD include predefined command strings for generating keyEvent output and for switching the key layout currently displayed on the device. 

**Perform keyEvent Action -** Used to generate a particular keyEvent or output a character. Enter the key and value in key-value format from among the standard [Android keyEvent values](https://developer.android.com/reference/android/view/keyEvent). The keyEvent for a key can be captured inside JavaScript onKeyDown events and outputs the value, if associated. The drop-down action commands are selected using the steps below. 

-----

#### To assign a keyEvent value: 

1. In the Action section of the Button Properties panel, **select the desired Action from the drop-down**: 
<img alt="" style="height:250px" src="ekd_keyaction.png "/>
 _Click image to enlarge, ESC to exit_.
<br>
2. For keyCodes (i.e. key in caps, Unicode, etc), a box pops up <u>similar</u> to the one below. <br>**Enter a single value corresponding to the type of Action selected**:  
<img alt="" style="height:150px" src="ekd_keyaction_entry.png"/>
 _Click image to enlarge, ESC to exit_.
<br>
3. **Repeat Steps 1 and 2** until each button contains the desired Action.  
4. **Click "Save Layout" button** to store the project settings. 
5. **Click "Save Project" to create a project file for deployment**.
* **Predefined command strings -** Enter an Android keyEvent value in the pop-up:
 * **key in caps -** Outputs an upper-case letter corresponding to the keyValue entered.
 * **key -** Outputs the lower-case character corresponding to the keyValue entered.
 * **Canned text -** Displays a list of [predefined responses](#cannedtext) (see below).
 * **UC -** Outputs the Unicode character corresponding to the Unicode value entered.
* **Actions to switch the layout -** Use the key-value pairs below to switch to a specific layout. 
 * **Switch-abc -** Switches to the Enterprise Keyboard standard alpha-numeric layout.
 * **Switch-123 -** Switches to the fixed numeric layout.
 * **Switch-Scan -** Switches to the “scanning button" layout.
 * **Switch-&#35;&#42;&#47; -** Switches to the “&#35;&#42;&#47;” (symbolic) layout.
 * **Switch-CustomLayout -** Switches to a custom layout (enter a valid layout name in the pop-up).
 * **Scan Trigger -** Scans a barcode using DataWedge. **Supported only with Press Action**. Note: DataWedge must be configured before use of this command. **<u>Disabled if DataWedge APIs are protected</u>**. More [about DataWedge Secure APIs](https://techdocs.zebra.com/datawedge/latest/guide/programmers-guides/secure-intent-apis/). <br>Also see **[DataWedge EKB guide](https://techdocs.zebra.com/datawedge/latest/guide/utilities/ekb/)**.  

**See [all Unicode characters](https://unicode-table.com/en/)**<br>
**See [all Android keyEvent values](https://developer.android.com/reference/android/view/KeyEvent)**

> **Note: All entries are case-sensitive**. 

-----

### Macros

Multiple events can be assigned to a single key-press using Macros. Any key can be configured to send any number of keyCodes, events or Actions as listed below. 

**Supported Key-press Actions**:

* PressAction
* LongPressAction
* ActionDown
* ActionUp

**Supported Events**:

* Send keyEvent
* Send uppercase or lowercase keyCode or Unicode character
* Switch to a fixed or custom layout
* Set a delay between Actions (required&#42;)

&#42;_A delay of at least 500ms is required between key events to ensure desired execution order_. 

#### To Assign a Macro:

1. Select a key to which to assign a Macro. 
2. In the Action section of the Button Properties panel, **select "Macros" from the desired Press Action drop-down** (Press, LongPress, ActionDown or ActionUp):  
 <img alt="" style="height:200px" src="ekd16_macros_1.png"/>
 _Click image to enlarge, ESC to exit_.
 <br>
3. In the input box that appears **click the drop-down**.<br>
  A partial list of available key events is shown in Step 4.
 <img alt="" style="height:200px" src="ekd16_macros_2.png"/>
 _Click image to enlarge, ESC to exit_.
 <br>
4. From the drop-down, **select an event (and enter a value if applicable)**. <br>
 Then **click the "Add" button**: 
 <img alt="" style="height:200px" src="ekd16_macros_3.png"/>
 _Click image to enlarge, ESC to exit_.
 <br>
5. **Select "Delay" and enter a value of at least 500 (ms)** between each key event.  
6. **Repeat Steps 4 and 5 until all desired events are added** to the Macro as desired. <br>
 <img alt="" style="height:200px" src="ekd16_macros_4.png"/>
 _Click image to enlarge, ESC to exit_.
 <br>
7. When finished, **click the "Save" button**:
 <img alt="" style="height:200px" src="ekd16_macros_5.png"/>
 _Click image to enlarge, ESC to exit_.

#### The Macro is now assigned to the selected key 

-----

#### To Edit or Delete a Macro

1. **Click on the key containing the Macro to edit or delete**.<br> 
The list of the Macro's key events appears. 
2. **Click the "X" for each key event** to be removed from the sequence:
  <img alt="" style="height:200px" src="ekd16_macros_6.png"/>
 _Click image to enlarge, ESC to exit_.
 <br>
3. Add events as desired as in Steps 4 and 5 above.<br>
 If deleting the Macro, remove all events. 
4. Click the "Save" button to finish.

`WARNING:` If all events are deleted from a Macro, the key will perform no function. 

-----

### Canned text

A list of Canned text or predefined responses can be assigned to any key and appear in a pop-up list when that key is pressed. This can help improve the speed and accuracy of responses when using Enterprise Keyboard. Tapping on a predefined response enters the text into the focused field as if it had been typed in manually. 

`IMPORTANT:` **Use of the plus sign (+) in Canned text list items can cause unpredictable behavior**. 

**Example Responses**:
* "I'm in a meeting...please call back later"
* "Unable to talk now...please send a text"
* "Application busy...try again later"
* "Please refer to patient record"
* "Item out of stock"

> **NOTE: This feature requires Enterprise Keyboard 3.4 or later on the device**. 

#### To create Canned text response(s): 

1. **Create (or select) a button** in the current layout.  
2. **In the Action section** of the Button Properties panel, **select "Canned text" from the drop-down**: 
<img alt="" style="height:200px" src="EKD-14_pre-defined_text_1.png"/>
 _Click image to enlarge, ESC to exit_.
<br>
3. **Enter a desired response** in the pop-up:
 <img alt="" style="height:200px" src="EKD-14_pre-defined_text_2.png"/>
 `IMPORTANT:` **Use of the plus sign (+) in Canned text list items can cause unpredictable behavior**. <br>
4. Click "Add" to store the response and add another.
5. Repeat Steps 3 and 4 until all responses are stored.
6. Click "Save" to store all responses and exit pop-up.
<!-- 6/18/20 Steps 7 and 8 removed per eng. TUT-40406
7. **Click "Save Layout" button** to store the new project settings.<br>
 **NOTE**: To set layout as the default (to appear whenever EKB is used), click on the layout's star icon:
 <img alt="" style="height:150px" src="EKD_14_set_default_layout.png"/>
8. **Click "Save Project" to create a project file for deployment**.
-->

#### Canned text responses are stored and deployed with the layout.

> **NOTE: Setting the default layout from EKD requires Enterprise Keyboard 3.4 or later on the device**. 

-----

#### To edit or delete Canned text Response(s): 

1. **Open the key layout project that contains the response list(s)** to be modified.
2. In the layout, **select the button that contains the response list(s)** to be edited.  
3. **In the Action section** of the Button Properties panel, **select "Canned text" from the drop-down**:
 <img alt="" style="height:200px" src="EKD-14_pre-defined_text_1.png"/>
 _Click image to enlarge, ESC to exit_.
<br>
 A pop-up appears with the list of responses currently stored with that button:
 <img alt="" style="height:200px" src="edit_predefined_message_1.png"/>
 _Click image to enlarge, ESC to exit_.
4. **To Delete response(s)**, click the "X" for the response(s). **<u>Then skip to Step 8</u>**.<br>
 `WARNING:` Responses are deleted immediately. **This action cannot be undone**. 
5. **To Edit, click the edit button** for the response to be edited:<br>
 <img alt="" style="height:200px" src="edit_predefined_message_2.png"/>
 _Click image to enlarge, ESC to exit_.
6. **Edit the response** as desired and **click Submit**.<br>
 `IMPORTANT:` **Use of the plus sign (+) in Canned text responses can cause unpredictable behavior**. 
7. **Repeat Steps 5 and 6** until all Canned text responses appear as desired.  
8. **Click Save to store changes and exit the pop-up**. 
<!--  6/18/20 Steps 9 and 10 removed per eng. TUT-40406
9. **Click "Save Layout" button** to store the new project settings.<br>
 **NOTE**: To set layout as the default (to appear whenever EKB is used), click on the layout's star icon:
 <img alt="" style="height:150px" src="EKD_14_set_default_layout.png"/>
10. **Click "Save Project" to create a project file for deployment**.
 -->

#### Canned text responses are stored and deployed with the layout.

> **NOTE: Setting the default layout from EKD requires Enterprise Keyboard 3.4 or later on the device**. 

-----

### Repeat Keys

EKD 1.9 (and later) adds three Action Properties for repeatedly sending keyCodes when a key is long-pressed. **Enterprise Keyboard 3.9 or later is required**. 

<img alt="" style="height:200px" src="ekd16_repeat_key.png"/>
_Click image to enlarge, ESC to exit_.

* **Repeat keyinCaps** continuously sends an uppercase letter corresponding to the key being long-pressed as long as the key is held down, regardless of whether the shift key was used.
* **Repeat key** continuously sends a lowercase letter corresponding to the key being long-pressed as long as the key is held down.
* **Repeat UC** continuously sends the specified Unicode character when the key is long-pressed as long as the key is held down.

> **Note**: These actions apply only to Long-Press Action properties.

-----

### Style Properties

Changes to these settings appear immediately in the device simulator unless otherwise noted. 

* **Preview -** When True, displays the value of a key when pressed **(default = True)**.
* **Transparency -** Used to select the transparency for the selected key from 0 (opaque) to 100 (fully transparent) **(default = opaque)**. 
* **Button Color -** Used to select the color of the selected key using the standard Windows color picker **(default = blue)**. 
* **ColorPressed -** Used to select the color of the selected key when the key is pressed using the standard Windows color picker.  
* **Image -** Used to select an image to fill the space of the selected key. When the layout is saved, selected image(s) are embedded within the “.encrypted” file. **Supports** `.jpg` **and** `.png` **image files. Zebra recommends using files of 100 KB or less for optimal layout performance. File name must begin with an alpha-numeric character**. 
* **ImagePressed -** Used to select an image to be displayed when the button is pressed. After selection, the image appears on the device simulator when the button is pressed. When the layout is saved, selected image(s) are embedded within the “.encrypted” file. **Supports** `.jpg` **and** `.png` **image files. Zebra recommends using files of 100 KB or less for optimal layout performance. File name must begin with an alpha-numeric character**. 

#### Style Properties Usage Notes
* **Button property minimum and maximum value rules** are the same for individual and multi-key selections. 
* **Deleting a group of multi-selected keys** using the “Delete” key on the host computer’s keyboard is not supported. Keys must be deleted individually. 

-----

### Feedback Properties
_Applies only to devices that support vibration_.  

* **HapticFeedback -** Used to control whether the device vibrates when the selected button is clicked. Set the value to “true” to vibrate (**default = false**).
* **Duration -** Used to enter the duration (in ms) of vibration when the “Haptic Feedback” property is set to true **(min = 40 (default); max = 1000)**. 

**NOTE:** Button property minimum and maximum value rules are the same for individual and multi-key selections. 

-----

### Multi-key Selection
Use the CTRL key on the host computer's keyboard to select multiple keys simultaneously. Selected key(s) are indicated by a red border, and supported input fields for Button Properties are enabled. Changes to properties appear immediately on the selected button(s). Properties are described in their relevant sections above. 

<img alt="" style="height:200px" src="ekd_selected_key.png"/>
<img alt="" style="height:200px" src="ekd_multi-select.png"/>
_Click image to enlarge, ESC to exit_.
<br>

**These properties can be assigned to multiple buttons simultaneously**: 

* **Text**
* **Secondary Text**
* **Font Size** 
* **Text Color**
* **Text Style** 
* **Preview value** 
* **Transparency**
* **Button Color**
* **Color pressed** 
* **Haptic Feedback**
* **Duration**

**These properties CANNOT be assigned <u>to multi-selected keys</u>**: 

* **Button action properties**: 
 * **Press Action**
 * **Long Press Action**
 * **Action Up**
 * **Action Down**
 * **Image**
 * **Image pressed**
* **Layout properties**:
 * **Left**
 * **Top**
 * **Width**
 * **Height** 

#### Multi-key Usage Notes
* **Button property minimum and maximum value rules** are the same for individual and multi-key selections. 
* **Deleting a group of multi-selected keys** using the “Delete” key on the host computer’s keyboard is not supported. Keys must be deleted individually.  
* **Button layout (i.e. width, height, etc.) and action properties (Press, LongPress, etc.) <u>MUST NOT be changed using multi-key selection</u>**; behavior is unpredictable.

-----

## IV. Set Layout Properties

### Style Properties

* **Background Color -** Specifies the color of the key layout. Changes appear in the layout immediately after clicking OK in the color picker. 
* **Transparency -** Used to select of the transparency from 0 (opaque) to 100 (fully transparent) of the key layout Background using a slider. Changes appear immediately.

-----

### Simulator Properties

* **Status Bar -** Used to show/hide the Status bar (which contains notifications and system icons) at the top of the device simulator screen. The layout “Top” coordinate changes based on this setting, which depends on status bar setting configured at the application level. **Must be hidden for full-screen applications**.
* **System Bar -** Used to show/hide the System (navigation) bar at the bottom of the device simulator screen. The layout “Top” coordinate changes based on this setting, which depends on System bar setting configured at the application level. **Must be hidden for full-screen applications**. 

-----

### Save Layout

To save the current layout data, click the “Save Layout” button in the lower-right corner of the main designer screen or the “Save Grid Layout” button in the Layout Properties panel.

### Save Project

#### To save the current key layout project: 

1. **Click the “Save Project” button**. 
<br>A dialog appears indicating the location of the saved “`.encrypted`” file: 
 <img alt="" style="height:250px" src="ekd_project_saved.png"/>
_EKD's "Save Project" button invokes a dialog showing the default save-to folder_. 
2. **Take note of the save directory** for reference during deployment. 

-----

### Delete a Key

1. In the layout that contains the key to be deleted, **double-click on the the key to be deleted**; the selected key is surrounded by a dotted red line. 
2. **Press the “Delete” key on the host computer’s keyboard**. A confirmation dialog appears. 
3. **Click “Yes”** on the confirmation dialog to delete. 

**NOTE**: Keys must be deleted individually; multi-select is not supported for key deletion. 

### Clear a Layout 
1. In the layout to be cleared, **Click the red “Clear Layout” button**. 
2. **Click “Yes”** to confirm the deletion of all layout elements in the current layout. 
**`WARNING:` This action cannot be undone**. 

-----

## V. Deploy Layout(s)

The data for custom key layout(s) is stored in the custom key-layout definition file, an encrypted file generated by the Enterprise Keyboard Designer. This file contains information about key locations, key-value assignments, etc. for each key layout created. This single **file can contain as many as 20 layout groups**, each of which defines one key layout. **NOTE: An app can access only a single layout file on the device; all layouts required for a device MUST be stored in that single file**. 

#### Deployment methods:  
* **Manual push** from host PC to USB-connected device **using the "Deploy" button** or adb commands  
* **Mass deployment** using StageNow and (optionally) an Enterprise Mobile Management (EMM) system

-----

### Single Device Deployment

#### Deploy button requirements:
* **Development host**:
 * <u>No more than one target device connected</u>
 * [Android Debug Bridge (adb)](https://developer.android.com/studio/command-line/adb) installed and operable
* **Target device**: 
 * Enterprise Keyboard 3.9 (or later) installed and enabled as default input source
 * Connected to host via USB

1. **Press the "Deploy" button** (see below) to push the current layout to the USB-connected device.
<br> Layout file is saved to `/enterprise/device/settings/ekb/config` on the device. 
 <img alt="" style="height:250px" src="ekd16_deploy_button.png"/>
  _Click image to enlarge, ESC to exit_.
  <br>
2. **If an older config file already exists**, a message like the image below is displayed. 
<br>**Press "Yes" to proceed**, "No" to cancel. 
 <img alt="" style="height:250px" src="ekd16_delete_warning.png"/>
  _Click image to enlarge, ESC to exit_.
  <br>

**Custom key layouts are available on the device immediately upon deployment**. 

-----

### Mass Deployment

1. **Locate the key layout definition file** (i.e. `LayoutProjectName.encrypted`) on the development host computer. <br>
 By default, the files are saved in the download directory of the current user: <br>
 `c:\Users\userName\Downloads\LayoutProjectName.encrypted`<br>
 **NOTE**: When clicking EKD's "Save Project" button, the default save-to folder is shown as in the image below: 
 <img alt="" style="height:250px" src="ekd_project_saved.png"/>
 _Click image to enlarge, ESC to exit_.
 <br>
2. In the "Language and input" Settings panel on the device, **set Enterprise Keyboard as a default input source**.
3. **Push definition file to the device** folder:<br>
 `/enterprise/device/settings/ekb/config/`<br>

 **Custom key layouts are available on the device immediately upon file deployment**. 

### Also See

* **[Enterprise Keyboard deployment guide](https://techdocs.zebra.com/enterprise-keyboard/latest/guide/deploy)** | Mass deployment of EKB and key layout files
* **[Enterprise Keyboard APIs](https://techdocs.zebra.com/enterprise-keyboard/latest/guide/apis)** | Switching key layouts programmatically
* **[DataWedge Configuration](https://techdocs.zebra.com/datawedge/latest/guide/utilities/ekb/)** | Using key layouts with DataWedge 

-----
  
## VI. Switch Layouts

This section explains the program logic involved when switching layouts with Android intents when focus of an input field changes. 

> For programming guidance, see [Enterprise Keyboard APIs](https://techdocs.zebra.com/enterprise-keyboard/latest/guide/apis). <br>
> For changing layouts through DataWedge, see the [DataWedge EKB configuration guide](https://techdocs.zebra.com/datawedge/latest/guide/utilities/ekb/). 

### Requirements

* **EKB v3.2 installed and activated on the target device(s)** and set as the default input source
* **A *<u>single</u>* EKD layout file** (i.e. `myProject.encrypted`) in the following device folder: <br>
 `/enterprise/device/settings/ekb/config/`
* **Layout file must contain ALL layouts** being used by apps on the device

-----

### Use Case 1

This case describes an Android app with two text input fields. Substitute sample names shown below with those in the deployed layout definition file (i.e. `myLayout.encrypted`). [More info](https://techdocs.zebra.com/enterprise-keyboard/latest/guide/deploy/). 

* `editText1` input field uses the standard Enterprise Keyboard fixed layout, which includes numeric, alpha-numeric, scan and symbol keyboards manually switchable by the user as needed.  
* `editText2` input field uses a custom layout made with EKD that contains keys specifically designed for a particular type of input. 

**Program logic for switching between standard and custom layouts** according to changes from `onFocus` listener: 

#### When the `editText1` field gets focus, send the following intents to display the EKB fixed layout:

1. Send `ENABLE` intent to Enterprise Keyboard fixed layout.
2. Send `RESET` to the custom EKB layout.
3. When the `onReceive()` method receives a result type value of `DEFAULT_LAYOUT`, **send a** `SHOW` **intent to the EKB fixed layout** to display it. 

#### When the focus changes to `edittext2`, send the following intents to show the custom layout:

1. Send a `SET` intent to set the custom layout.<br>
**Note**: If the custom layout name is not known, send a `GET` intent <u>**_before_** the calling the onFocus change listener</u> to receive a list of all available layout names in the layout file. Then send the `SET` intent with the name of the desired layout. 
2. On `focusOut` of `editText1`, send `ENABLE` "false" intent the EKB fixed layout to disable it.

> **`IMPORTANT:` Enterprise Keyboard must be enabled if the application goes to the background** to avoid a device user resetting the layout from outside the app.

-----

### Use Case 2

This case describes an Android app with two text input fields, both requiring custom layouts alternated within a specific time interval: 

* `editText1` input field uses a custom layout called `numericLayout.encrypted`  
* `editText2` input field uses a custom layout called `functionLayout.encrypted`

**Program logic for switching between two custom layouts** according to changes from `onFocus` listener: 

#### When the `editText1` field gets focus, send the following intents to display `numericLayout`:

1. Send a `SET` intent for `numericLayout.encrypted` to set the custom numeric layout.<br>
**Note**: If the custom layout name is not known, send a `GET` intent <u>**_before_** the calling the onFocus change listener</u> to receive a list of all available layout names in the layout file. Then send the `SET` intent with the name of the desired layout. 

#### When the focus changes to `edittext2`, send the following intents to show the custom layout:

1. Send a `SET` intent for `functionLayout.encrypted` to set the custom function-key layout.<br>
**Note**: If the custom layout name is not known, send a `GET` intent <u>**_before_** the calling the onFocus change listener</u> to receive a list of all available layout names in the layout file. Then send the `SET` intent with the name of the desired layout. 

> **`IMPORTANT:` Enterprise Keyboard must be enabled if the application goes to the background** to avoid a device user resetting the layout from outside the app.

-----

#### Layout Switching Usage Notes 	

* **Switching layouts is supported on Zebra Enterprise Keyboard only**.
* **Do NOT use the terms shown below as custom names**; they are reserved for default Enterprise Keyboard layouts: 
 * abc
 * 123
 * scan
 * &#35;&#42;&#47;
 * Scantrigger
 * switch-abc
 * switch-123
 * switch-&#35;&#42;&#47;
 * switch-scan
 * customLayout
 * key-[any Content]

-----

## Import an EKD Project
Layout projects can be saved and modified later for use on different devices, adapted for different applications or screen sizes and appended with additional keys and/or key layouts. 

#### To import a project: 

1. On the Enterprise Keyboard Designer’s launch screen, **click the “IMPORT KEYBOARD PROJECT” button**. 
2. **Navigate to and double-click the project** (“`.encrypted`” file) to import.
3. **Select the target device** using the drop-down menu and click the “Confirm” button.
4. **Click the EKD menu button** to view a list of layouts available for editing. 
5. **Select the layout to be edited and click the edit icon**. The layout is displayed in the device simulator and its name is displayed the top-left corner. 
6. **Edit the layout as desired**.
7. **To add a new layout to the project**, click the [+] icon on the EKD menu and follow steps in the [Create Layout(s)](#iicreatelayouts) section. 
8. **Repeat Step 7** until the layout is configured as desired. 
9. **Click "Save Layout" button** to store the new project settings. 
10. **Click "Save Project" to create a project file for deployment**.

-----

## Also See

* [Dynamically Switching Keyboards](https://developer.zebra.com/blog/dynamically-switching-keyboards-zebra-android-devices) | **Article by Zebra Engineering** on implementing custom layouts, with sample code
* [Exploring the Enterprise Keyboard API](https://developer.zebra.com/blog/exploring-enterprise-keyboard-api) | **Article by Zebra Engineering** on working with EKD-made layouts

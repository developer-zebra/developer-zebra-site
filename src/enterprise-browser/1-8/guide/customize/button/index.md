---
title: Button Parameter Guide
productversion: '1.8'
product: Enterprise Browser
layout: guide.html
---

## Overview

Apps made with Enterprise Browser 1.7 (and higher) for Android can be accompanied by a series 1-10 custom on-screen buttons or keys that can perform virtually any function available to the device, including launching an app or activity, scanning a barcode, sending an intent or executing a JavaScript code snippet. 

The number of buttons or keys and the appearance, layout, on-screen position, functions and all other attributes are controlled through a file called `button.xml`. If one or more of the buttons is to execute JavaScript, the code is contained in a second file called `CustomScript.xml`. Both files are stored on the device, and their paths are specified in corresponding tags in the app's `Config.xml` file. ButtonBars can be shown and hidden programmatically as required by an app's pages through methods implemented in one of 10 [ButtonBar APIs](../../../api/re2x/ButtonBar) currently supported. See [Customize Enterprise Browser](../) for details. 

-----

## Button.xml File

The `button.xml` file stores all configuration settings for custom on-screen buttons of an app. Enterprise Browser currently supports 10 ButtonBars (ButtonBar1 through ButtonBar10) and all definitions are maintained in the `button.xml` file. 

The positional attributes, action, color, transparency and all other view related parameters can be fully customized by specifying those values as key value pair in this xml file.  


The positional and size related attributes (left, top, height and width) should be defined as per target device screen resolution and current screen orientation. One may have to create different button.xml for different screen resolution device.  

In Enterprise Browser, it is always recommended to set auto-rotate to off for Enterprise web applications. However if someone wants to set auto-rotate to on, they should ensure to create different ButtonBars for Landscape and Portrait mode and apply them accordingly through the screen orientation event.  

If user sets any invalid value for button parameters, ButtonBar may not show up and the behavior is undefined. User should pass valid values for all button/bar related parameters.  

### Sample Button.xml File


    :::xml
    <?xml version = "1.0"?>
    <!-- Enterprise Browser Button Configuration Parameter file -->
    <Buttonbargroup>
        <ButtonBar1>
            <barOrientation value="Horizontal" />
            <barColor value="#AF7AC5" />
            <barColorPressed value="#3498DB" />
            <barTransparency value="50" />
            <barFontSize value="14" />
            <barLeft value="2" />
            <barTop value="942" />
            <barWidth value="720" />
            <barHeight value="120" />
            <Buttons>
                <Button1>
                    <buttonText value="F1" />
                    <buttonAction value="key-131" />
                </Button1>
                <Button2>
                    <buttonText value="F2" />
                    <buttonAction value="key-132" />
                </Button2>
                <Button3>
                    <buttonText value="0" />
                    <buttonAction value="key-7" />
                </Button3>
                <Button4>
                    <buttonText value="1" />
                    <buttonAction value="key-8" />
                </Button4>
                <Button5>
                    <buttonText value="A" />
                    <buttonAction value="key-29" />
                </Button5>
                <Button6>
                    <buttonText value="B" />
                    <buttonAction value="key-57" />
                </Button6>
                <Button7>
                    <buttonText value="Ent" />
                    <buttonAction value="key-66" />
                </Button7>
            </Buttons>
        </ButtonBar1>
        <ButtonBar2>
            <barColor value="#AF7AC5" />
            <barColorPressed value="#3498DB" />
            <barTransparency value="100" />
            <barFontSize value="14" />
            <Buttons>
                <Button1>
                    <buttonLeft value="2" />
                    <buttonTop value="1063" />
                    <buttonWidth value="102" />
                    <buttonHeight value="120" />
                    <buttonImage value="file://%INSTALLDIR%/UpArrow.png" />
                    <buttonImagePressed value="file://%INSTALLDIR%/UpArrow.png" />
                    <buttonAction value="key-19" />
                </Button1>
                <Button2>
                    <buttonLeft value="105" />
                    <buttonTop value="1063" />
                    <buttonWidth value="102" />
                    <buttonHeight value="120" />
                    <buttonImage value="file://%INSTALLDIR%/DownArrow.png" />
                    <buttonImagePressed value="file://%INSTALLDIR%/DownArrow.png" />
                    <buttonAction value="key-20" />
                </Button2>
                <Button3>
                    <buttonLeft value="208" />
                    <buttonTop value="1063" />
                    <buttonWidth value="204" />
                    <buttonHeight value="120" />
                    <buttonImage value="file://%INSTALLDIR%/scan.png" />
                    <buttonImagePressed value="file://%INSTALLDIR%/scan_pressed.png" />
                    <buttonAction value="runscript-scantriggerscript" />
                </Button3>
                <Button4>
                    <buttonLeft value="413" />
                    <buttonTop value="1063" />
                    <buttonWidth value="204" />
                    <buttonHeight value="120" />
                    <buttonImage value="file://%INSTALLDIR%/space_bar.png" />
                    <buttonImagePressed value="file://%INSTALLDIR%/space_bar.png" />
                    <buttonAction value="key-62" />
                </Button4>
                <Button5>
                    <buttonLeft value="618" />
                    <buttonTop value="1063" />
                    <buttonWidth value="102" />
                    <buttonHeight value="120" />
                    <buttonText value="Quit" />
                    <buttonAction value="quit" />
                </Button5>
            </Buttons>
        </ButtonBar2>
        <ButtonBar3>
            <barLeft value="0" />
            <barTop value="0" />
            <barWidth value="720" />
            <barHeight value="140" />
            <Buttons>
                <Button1>
                    <buttonAction value="runscript-deviceinfoscript" />
                    <buttonImage value="file://%INSTALLDIR%/deviceinfo.png" />
                </Button1>
                <Button2>
                    <buttonAction value="runscript-camerascript" />
                    <buttonImage value="file://%INSTALLDIR%/camera.png" />
                </Button2>
                <Button3>
                    <buttonAction value="runscript-barcodescript" />
                    <buttonImage value="file://%INSTALLDIR%/button1image.bmp" />
                </Button3>
                <Button4>
                    <buttonAction value="runscript-signaturescript" />
                    <buttonImage value="file://%INSTALLDIR%/signature.png" />
                </Button4>
                <Button5>
                    <buttonAction value="quit" />
                    <buttonImage value="file://%INSTALLDIR%/quit.png" />
                </Button5>
            </Buttons>
        </ButtonBar3>
    </Buttonbargroup>

-----

## Nodes

### Buttonbargroup
This is the head or parent node of the `button.xml` file; all tags should be contained with this node as shown in the example below. 

#### Example

    :::xml 
      <Buttonbargroup>
        <ButtonBar1>
            ...
            //ButtonBar1 parameters and attributes (color, transparency, position, etc.)
            ...
            <Buttons>
              <Button1>
                //Button1 attributes, parameters, text (label) and action 
              </Button1>
              ...            
            </Buttons>
        </ButtonBar1>
        <ButtonBar2>  
        ...
        //Supports up to ButtonBar10  
    </Buttonbargroup>

-----

### ButtonBarN
Numbered ButtonBar1 through ButtonBar10, this node contains all the specific [ButtonBar parameters](#buttonbarparameters) (color, transparency, position, etc.) and attributes of a particular numbered ButtonBar, as well as the &lt;ButtonN&gt; nodes. If multiple ButtonBars are required, they must be defined one after another within the the &lt;Buttonbargroup&gt; parent node (as explained above).

**Note**: If an attribute defined for a ButtonBar conflicts with one or more [Button-specific parameters](#buttonspecificparameters), the individual Button setting will take precedence.   

#### Example

    :::xml
    <ButtonBarN>
      <Button1>
      </Button1>
      ...
    </ButtonBarN>

-----

## ButtonBar Parameters

ButtonBar-specific parameters are used to specify attributes that apply to the entire ButtonBar. These tags must be enclosed within the ButtonBar node for which the settings are intended. 

#### Example

    :::xml
    <ButtonBar1>
        <barOrientation value="Horizontal" />
        <barColor value="#AF7AC5" />
        <barColorPressed value="#3498DB" />
        <barTransparency value="50" />
        <barFontSize value="14" />
        <barLeft value="2" />
        <barTop value="942" />
        <barWidth value="720" />
        <barHeight value="120" />
    </ButtonBar1>

-----

### barColor
Used to specify the color of the entire ButtonBar using [HTML hexadecimal color values](https://www.w3schools.com/colors/colors_hexadecimal.asp). Uses hex format #RRGGBB. 

**Notes**:

* Setting the color for individual buttons is not supported.
* If no color is specified, the default color is blue.
* If an image is specified as a button background, barColor setting is ignored.
* If the WebView is resized and the ButtonBar is not rendered on top of the WebView layout, button color can sometimes render improperly. In such cases, Zebra recommends using the [buttonImage](#buttonimage) parameter.
    
#### Example

    :::xml
    <ButtonBar1>
      ...
      <barColor value="#AF7AC5"/>
      ...
    </ButtonBar1>

-----

### barColorPressed

Used to specify the color of the entire ButtonBar using [HTML hexadecimal color values](https://www.w3schools.com/colors/colors_hexadecimal.asp) when any button in the bar is pressed. Uses hex format #RRGGBB. 

**Notes**:

* Setting the color for individual buttons is not supported.
* If no color is specified, the default color is yellow.
* If an image is specified as a button background, barColor setting is ignored.
* If the WebView is resized and the ButtonBar is not rendered on top of the WebView layout, button color can sometimes render improperly. In such cases, Zebra recommends using the [buttonImagePressed](#buttonimagepressed) parameter.

#### Example

    :::xml
    <ButtonBar1>
      ...
      <barColorPressed value="#3498DB"/>
      ...
    </ButtonBar1>
   
-----

### barFontSize

Used to specify the default text size interpreted as "scaled pixel" units. This size is adjusted based on the current density and user font size preference. If left unspecified, text size will be chosen based on the device default. **Note**: Setting the font size for individual buttons is not supported.

#### Example

    :::xml
    <ButtonBar1>
      ...
      <barFontSize value="100"/>
      ...
    </ButtonBar1>

-----

### barTransparency

Used to specify ButtonBar transparency as a percentage from 0-100 (0=none; 100=full).

#### Example

    :::xml
    <ButtonBar1>
      ...
      <barTransparency value="14"/>
      ...
    </ButtonBar1>

-----

### barOrientation

Used to select the horizontal or vertical orientation of buttons on the ButtonBar. The horizontal setting will position the bar across the screen from left to right; vertical from top to bottom. If unspecified, horizontal orientation will be selected. If button-specific positional attributes (left, top, height, width) are not set, the values for all individual buttons will be calculated based on the &lt;barOrientation&gt; value (if any) and [Positional Attributes](#positionalattributes).

#### Example

    :::xml
    <ButtonBar1>
      ...
      <barOrientation value="Vertical"/>
      ...
    </ButtonBar1>

-----

## Positional Attributes

Used to specify the placement of the ButtonBar on the device screen. 

> **Important**: If any of the four positional attributes (barLeft, barTop, barHeight, barWidth) are unspecified, a buttonBar with horizontal orientation will be placed at the bottom of the screen and occupy the full screen width; and with vertical orientation placed along the right edge of the screen and occupy the full screen height. 

-----

### barLeft

Used to specify the left coordinate (in pixels) of the ButtonBar. 

#### Example

    :::xml
    <ButtonBar1>
      ...
      <barLeft value="0"/>
      ...
    </ButtonBar1>  

-----

### barTop

Used to specify the top coordinate (in pixels) of the ButtonBar.

#### Example

    :::xml
    <ButtonBar1>
      ...
      <barTop value="0"/>
      ...
    </ButtonBar1>

-----

### barHeight

Used to specify the height (in pixels) of the ButtonBar.

#### Example

    :::xml
    <ButtonBar1>
      ...
      <barHeight value="0"/>
      ...
    </ButtonBar1>
  

-----

### barWidth

Used to specify the width (in pixels) of the ButtonBar.

#### Example

    :::xml
    <ButtonBar1>
      ...
      <barWidth value="0"/>
      ...
    </ButtonBar1>

-----

## Button-Specific Parameters

Button-specific parameters are used to specify attributes that apply to an individual Button. These tags must be enclosed within the ButtonN node for which the settings are intended. Buttons effect one another only in terms of the total number of buttons created on a given ButtonBar. 

**The space occupied by each button is calculated as the number of available horizontal or vertical pixels (as determined by [barOrientation](#barorientation)) divided by the total number of ButtonN tags in the ButtonBarN node**. For example, if four buttons are created (as Button1 through Button4), a horizontally oriented ButtonBar will display four buttons of equal size across the screen.  

**Note**: If an attribute defined in one or more [ButtonBar parameters](#buttonbarparameters) conflicts with one or more individual Button parameters, the individual Button setting will take precedence.   

#### Example

    :::xml
    <ButtonBar1>
      <Buttons>
        <Button1>
            <buttonLeft value="2" />
            <buttonTop value="1063" />
            <buttonWidth value="102" />
            <buttonHeight value="120" />
            <buttonImage value="file://%INSTALLDIR%/UpArrow.png" />
            <buttonImagePressed value="file://%INSTALLDIR%/UpArrow.png" />
            <buttonAction value="key-19" />
        </Button1>
        <Button2>
        ...
      </Buttons>
    </ButtonBar1>

-----

### buttonLeft

Used to specify the left coordinate value of the particular button inside the ButtonBar. **Use only if the size of a particular button must be larger or smaller than others in the ButtonBar**. If left unspecified, this value is calculated as described under [Button-specific Parameters](#buttonspecificparameters), above.

#### Example

    :::xml
    <ButtonBar1>
      ...
      <buttonLeft value="413"/>
      ...
    </ButtonBar1>
  

-----

### buttonTop

Used to specify the top coordinate value of the button inside the ButtonBar. **Use only if the placement of a particular button must be larger or smaller than others in the ButtonBar**. If left unspecified, this value is calculated as described under [Button-specific Parameters](#buttonspecificparameters), above.

#### Example

    :::xml
    <ButtonBar1>
      ...
      <buttonTop value="1063"/>
      ...
    </ButtonBar1>
  

-----

### buttonHeight

Used to specify the height of the button inside the ButtonBar. **Use only if the size of a particular button must be larger or smaller than others in the ButtonBar**. If left unspecified, this value is calculated as described under [Button-specific Parameters](#buttonspecificparameters), above.

#### Example

    :::xml
    <ButtonBar1>
      ...
      <buttonHeight value="120"/>
      ...
    </ButtonBar1>

-----

### buttonWidth

Used to specify the width of the particular button inside the ButtonBar. **Use only if the size of a particular button must be larger or smaller than others in the ButtonBar**. If left unspecified, this value is calculated as described under [Button-specific Parameters](#buttonspecificparameters), above.

#### Example

    :::xml
    <ButtonBar1>
      ...
      <buttonWidth value="204"/>
      ...
    </ButtonBar1>  

-----

### buttonText

Used to specify the text to be displayed for the particular button inside the ButtonBar. **Applies only if a background image is not specified**. 

can accept  unless otherwise noted. Entering non-text characters (< > \ / " ') in these fields could cause the Config.xml file to become corrupt.

If any special characters such as (< > \ / " ') need to be set as a [buttonText](#buttontext) then .

**Notes**:

* **The buttonText field accepts alpha-numeric characters only**. Use of non-text characters (i.e. < > \ / " ') will corrupt the `Button.xml` file.
* **Non-text characters, if required, can be incorporated into an image and displayed using the [buttonImage](#buttonimage) parameter. 
* **The buttonText tag will be ignored if a background image is specified**.
* Text size should be selected based on button size and the [barFontSize](#barfontsize) parameter value.
* Over-sized text might not be fully visible.
* If the WebView is resized and the ButtonBar is not rendered on top of the WebView layout, button color can sometimes render improperly. In such cases, Zebra recommends using the [buttonImage](#buttonimage) and [buttonImagePressed](#buttonimagepressed) parameters.

#### Example

    :::xml
    <ButtonBar1>
      ...
      <buttonText value="Submit"/>
      ...
    </ButtonBar1>

-----

### buttonImage

Used to specify a device-resident image file (.png format only) for the particular button inside the ButtonBar. Supports [substitution variables](../../configreference/#substitutionvariables) (recommended) or full path plus file name.

**Supported substitution variables**:

* `%INSTALLDIR%`
* `%PRIMARYDIR%`
* `%SECONDARYDIR%`
* `%PERSISTCONFDIR%`

#### Example

    :::xml
    <ButtonBar1>
      ...
      <buttonImage value="file://%INSTALLDIR%/space_bar.png"/>
      <buttonImage value="/storage/emulated/0/deviceinfo.png"/>
      ...
    </ButtonBar1>

-----

### buttonImagePressed

Used to specify a device-resident image file (.png format only) for the particular button inside the ButtonBar to be displayed while the button is pressed. Supports [substitution variables](../../configreference/#substitutionvariables) (recommended) or full path plus file name.

**Supported substitution variables**:

* `%INSTALLDIR%`
* `%PRIMARYDIR%`
* `%SECONDARYDIR%`
* `%PERSISTCONFDIR%`

#### Example

    :::xml
    <ButtonBar1>
      ...
      <buttonImagePressed value="file://%INSTALLDIR%/scan_pressed.png"/>
      <buttonImagePressed value="/storage/emulated/0/scan_pressed.png"/>
      ...
    </ButtonBar1>


-----

### buttonAction

Used to specify the action to be taken when a particular button is pressed. Accepts predefined command strings only.

#### Example

    :::xml
    <ButtonBar1>
      ...
      <buttonAction value="key-62"/>
      <buttonAction value="key-131"/>
      <buttonAction value="quit"/>
      <buttonAction value="runscript-camerascript"/>
      ...
    </ButtonBar1>
    
The following Button Actions are supported:

* For performing [keyevent](#keyevent) actions
* For executing [JavaScript](#javascriptexecution) operations
* For invoking specific [Commands](#commandexecution)

-----

### keyevent
Used to generate a particular keyevent or to output a character. Specify the key and value in **key-value** format from among the standard [Android KeyEvent values](https://developer.android.com/reference/android/view/KeyEvent.html).

**This feature can be used to create custom keyboard layouts by invoking multiple ButtonBars placed in rows or columns on the screen**. Generating a keyevent for a particular key can be captured inside JavaScript onkeydown events, and also will output the value, if associated.

#### Example

    :::xml
    <ButtonBar1>
      ...
      <barColor value="#AF7AC5"/>
      ...
    </ButtonBar1>


#### Key Event Examples

**To generate an F1 key as a buttonAction** for a particular button in a ButtonBar, set the buttonAction syntax as follows:

    :::xml        
    <buttonAction value ="key-131"/>


**To set the scan trigger key as a buttonAction**, send the trigger KeyEvent code (key-104) to the Enterprise Browser app, which will pass it to the barcode scanning framework and activate the scanner. The example below also selects images for the button states: 
        
    :::xml
    <Button1>
    	<buttonImage value ="file://%INSTALLDIR%/scan.png"/>
    	<buttonImagePressed value ="file://%INSTALLDIR%/scan_pressed.png"/>
    	<buttonAction value ="key-104"/>
    </Button1>


-----

## JavaScript Execution

A button can be used to invoke any JavaScript code block, including any of the [Enterprise Browser APIs](../../../api/). Code is assigned to a **buttonAction** value using the **runscript-scriptname** format. 

* **runscript -** indicates that a **buttonAction** is associated with a JavaScript code block.
* **scriptname -** specifies the name of the script (an .xml file) containing the desired JavaScript block. [More about this file](../script)

**Notes**:

* If a **buttonAction** is to be associated with JavaScript execution, the .xml file containing the code must be stored on the device and identified as above. 
* See the [Custom JavaScript Guide](../script) for details on creating custom script .xml files.
* See also the [&lt;customxmlfile&gt; tag](../../configreference/#customxmlfile) in the `Config.xml` reference to specify or change the name and/or location of the script .xml file.

-----

### Example Code

#### Scan Trigger Button

The two snippets below show the code required to configure a button as a scan trigger using the Enterprise Browser Barcode API. **Both snippets are required**. 

##### In the `button.xml` file: 
        :::xml
        ...
        <Button1>
        	<buttonImage value ="file://%INSTALLDIR%/scan.png"/>
        	<buttonImagePressed value ="file://%INSTALLDIR%/scan_pressed.png"/>
        	<buttonAction value ="runscript-scantriggerscript"/>
        </Button1>
        ...

##### In the `CustomScript.xml` file:

        <?xml version = "1.0"?>
        <!--  Enterprise Browser Custom Script definition file -->
        <CustomScripts>
        	<scantriggerscript>
        		EB.Barcode.start();
        	</scantriggerscript>
        </CustomScripts>

-----

#### Display Device Info

The two snippets below show how to use a button to fetch and display information from within a device using the Enterprise Browser System API. **Both snippets are required**. 

##### In the `button.xml` file:

      :::xml
      <Button1>
        <buttonAction value ="runscript-deviceinfoscript"/>
      </Button1>
           
##### In the `CustomScript.xml` file:
      
        :::xml
        <?xml version = "1.0"?>
        <!--  Enterprise Browser Custom Script definition file -->
        <CustomScripts>
        	<deviceinfoscript>
        		var deviceInfo = "DeviceName:- " + EB.System.deviceName + "\n"+
        			   "Platform:- " + EB.System.platform + "\n"+
        			   "OS Vesrion:- " + EB.System.osVersion+ "\n" +
        			   "OEM Vesrion:- " + EB.System.oemInfo + "\n"+
        			   "RealScreenHeight:- " + EB.System.realScreenHeight+ "\n"+
        			   "RealScreenWidth:- " + EB.System.realScreenWidth+ "\n"+
        			   "UUID:- "+EB.System.uuid;
        		alert(deviceInfo);
        	</deviceinfoscript>
        </CustomScripts>

-----

## Command Execution

A button can be configured to execute a command. **Enterprise Browser currently supports only the ability to quit the app**. 

### Example Code

#### 'Quit App' Button

The example below shows how to use a button to execute a command to quit the app: 

##### In the `button.xml` file:

    :::xml
    <Button5>
        <buttonAction value ="quit"/>
        <buttonImage value ="file://%INSTALLDIR%/quit.png"/>
    </Button5>

-----

**Related Guides**:

* **[JavaScript Guide](../script)**
* **[Customize Enterprise Browser](../)**
* **[&lt;customxmlfile&gt; tag](../../configreference/#customxmlfile)** in the `Config.xml` reference

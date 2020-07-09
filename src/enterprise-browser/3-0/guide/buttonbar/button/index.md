---
title: Button Parameter Guide
productversion: '3.0'
product: Enterprise Browser
layout: guide.html
---

## Overview

Apps made with Enterprise Browser 1.7 (and higher) for Android can be accompanied by a series 1-50 (40 more added in Enterprise Browser 1.8) custom on-screen buttons or keys that can perform virtually any function available to the device, including launching an app or activity, scanning a barcode, sending an intent or executing a JavaScript code snippet. 

The number of buttons or keys and the appearance, layout, on-screen position, functions and all other attributes are controlled through a file called `button.xml`. If one or more of the buttons is to execute JavaScript, the code is contained in a second file called `CustomScript.xml`. Both files are stored on the device, and their paths are specified in corresponding tags in the app's `Config.xml` file. ButtonBars can be shown and hidden programmatically as required by an app's pages through methods implemented in one of 50 [ButtonBar APIs](../../../api/re2x/ButtonBar) currently supported. See [Customize Enterprise Browser](../) for details. 

-----

## Button.xml File

The `button.xml` file stores all configuration settings for custom on-screen buttons of an app. Enterprise Browser currently supports 50 ButtonBars (ButtonBar1 through ButtonBar50) and all definitions are maintained in the `button.xml` file. 

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
            <barTextColor value="#AF7AC5" />
            <barTextStyle value="bold" />
            <barGapBtwnButtons value="10" /> 
            <Buttons>
                <Button1>
                    <buttonText value="F1" />
                    <buttonActionClick value="key-131" />
                </Button1>
                <Button2>
                    <buttonText value="F2" />
                    <buttonActionClick value="key-132" />
                </Button2>
                <Button3>
                    <buttonText value="0" />
                    <buttonActionClick value="key-7" />
                </Button3>
                <Button4>
                    <buttonText value="1" />
                    <buttonActionClick value="key-8" />
                </Button4>
                <Button5>
                    <buttonText value="A" />
                    <buttonActionClick value="key-29" />
                </Button5>
                <Button6>
                    <buttonText value="B" />
                    <buttonActionClick value="key-57" />
                </Button6>
                <Button7>
                    <buttonText value="Ent" />
                    <buttonActionClick value="key-66" />
                </Button7>
            </Buttons>
        </ButtonBar1>
        <ButtonBar2>
            <barColor value="#AF7AC5" />
            <barColorPressed value="#3498DB" />
            <barTransparency value="100" />
            <barFontSize value="14" />
            <barTextColor value="#AF7AC5" />
            <barTextStyle value="bold" />
            <barGapBtwnButtons value="10" /> 
            <Buttons>
                <Button1>
                    <buttonLeft value="2" />
                    <buttonTop value="1063" />
                    <buttonWidth value="102" />
                    <buttonHeight value="120" />
                    <buttonImage value="file://%INSTALLDIR%/UpArrow.png" />
                    <buttonImagePressed value="file://%INSTALLDIR%/UpArrow.png" />
                    <buttonActionClick value="key-19" />
                </Button1>
                <Button2>
                    <buttonLeft value="105" />
                    <buttonTop value="1063" />
                    <buttonWidth value="102" />
                    <buttonHeight value="120" />
                    <buttonImage value="file://%INSTALLDIR%/DownArrow.png" />
                    <buttonImagePressed value="file://%INSTALLDIR%/DownArrow.png" />
                    <buttonActionClick value="key-20" />
                </Button2>
                <Button3>
                    <buttonLeft value="208" />
                    <buttonTop value="1063" />
                    <buttonWidth value="204" />
                    <buttonHeight value="120" />
                    <buttonImage value="file://%INSTALLDIR%/scan.png" />
                    <buttonImagePressed value="file://%INSTALLDIR%/scan_pressed.png" />
                    <buttonActionClick value="runscript-scantriggerscript" />
                </Button3>
                <Button4>
                    <buttonLeft value="413" />
                    <buttonTop value="1063" />
                    <buttonWidth value="204" />
                    <buttonHeight value="120" />
                    <buttonImage value="file://%INSTALLDIR%/space_bar.png" />
                    <buttonImagePressed value="file://%INSTALLDIR%/space_bar.png" />
                    <buttonActionClick value="key-62" />
                </Button4>
                <Button5>
                    <buttonLeft value="618" />
                    <buttonTop value="1063" />
                    <buttonWidth value="102" />
                    <buttonHeight value="120" />
                    <buttonText value="Quit" />
                    <buttonActionClick value="quit" />
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
                    <buttonActionClick value="runscript-deviceinfoscript" />
                    <buttonImage value="file://%INSTALLDIR%/deviceinfo.png" />
                </Button1>
                <Button2>
                    <buttonActionClick value="runscript-camerascript" />
                    <buttonImage value="file://%INSTALLDIR%/camera.png" />
                </Button2>
                <Button3>
                    <buttonActionClick value="runscript-barcodescript" />
                    <buttonImage value="file://%INSTALLDIR%/button1image.bmp" />
                </Button3>
                <Button4>
                    <buttonActionClick value="runscript-signaturescript" />
                    <buttonImage value="file://%INSTALLDIR%/signature.png" />
                </Button4>
                <Button5>
                    <buttonActionClick value="quit" />
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
Numbered ButtonBar1 through ButtonBar50, this node contains all the specific [ButtonBar parameters](#buttonbarparameters) (color, transparency, position, etc.) and attributes of a particular numbered ButtonBar, as well as the &lt;ButtonN&gt; nodes. If multiple ButtonBars are required, they must be defined one after another within the the &lt;Buttonbargroup&gt; parent node (as explained above).

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
        <barTextColor value="#AF7AC5" />
        <barTextStyle value="bold" />
        <barGapBtwnButtons value="10" /> 
    </ButtonBar1>

-----

### barColor
Used to specify the color of the entire ButtonBar using [HTML hexadecimal color values](https://www.w3schools.com/colors/colors_hexadecimal.asp). Uses hex format #RRGGBB or #AARRGGBB. 

**Notes**:

* Setting the color for individual buttons is not supported.
* If no color is specified, the default color is blue.
* If an image is specified as a button background, barColor setting is ignored.
* If the WebView is resized and the ButtonBar is not rendered on top of the WebView layout, button color can sometimes render improperly. In such cases, Zebra recommends using the [buttonImage](#buttonimage) parameter.
* The following standard color names are also accepted: *red, blue, green, black, white, gray, cyan, magenta, yellow, lightgray, darkgray, grey, lightgrey, darkgrey, aqua, fuchsia, lime, maroon, navy, olive, purple, silver, and teal*.
    
#### Example

    :::xml
    <ButtonBar1>
      ...
      <barColor value="#AF7AC5"/>
      ...
    </ButtonBar1>

-----

### barColorPressed

Used to specify the color of the entire ButtonBar using [HTML hexadecimal color values](https://www.w3schools.com/colors/colors_hexadecimal.asp) when any button in the bar is pressed. Uses hex format #RRGGBB or #AARRGGBB. 

**Notes**:

* Setting the color for individual buttons is not supported.
* If no color is specified, the default color is yellow.
* If an image is specified as a button background, barColor setting is ignored.
* If the WebView is resized and the ButtonBar is not rendered on top of the WebView layout, button color can sometimes render improperly. In such cases, Zebra recommends using the [buttonImagePressed](#buttonimagepressed) parameter.
* The following standard color names are also accepted: *red, blue, green, black, white, gray, cyan, magenta, yellow, lightgray, darkgray, grey, lightgrey, darkgrey, aqua, fuchsia, lime, maroon, navy, olive, purple, silver, and teal*.

#### Example

    :::xml
    <ButtonBar1>
      ...
      <barColorPressed value="#3498DB"/>
      ...
    </ButtonBar1>
   
-----

### barTextColor

Used to specify the text color of the entire ButtonBar using [HTML hexadecimal color values](https://www.w3schools.com/colors/colors_hexadecimal.asp) when any button in the bar is pressed. Uses hex format #RRGGBB or #AARRGGBB. 

**Notes**:

* Setting the text color for individual buttons is not supported.
* If no color is specified, the default color is white.
* The following standard color names are also accepted: *red, blue, green, black, white, gray, cyan, magenta, yellow, lightgray, darkgray, grey, lightgrey, darkgrey, aqua, fuchsia, lime, maroon, navy, olive, purple, silver, and teal*.

#### Example

    :::xml
    <ButtonBar1>
      ...
      <barTextColor value="#AF7AC5"/>
      ...
    </ButtonBar1>
   
-----

### barTextStyle

Used to specify the style of the text of all buttons of that particular ButtonBar. All buttons in that particular ButtonBar will have the same style. Allowed values are: `bold`, `bolditalic`, `italic` and `normal`. 

#### Example

    :::xml
    <ButtonBar1>
      ...
      <barTextStyle value="bold"/>
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

### barGapBtwnButtons

Used to specify the space in between the buttons of the particular ButtonBar. Value should be given as pixels in INTEGER format. 

#### Example

    :::xml
    <ButtonBar1>
      ...
      <barGapBtwnButtons value="10"/>
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

### Using Relative Co-ordinates For ButtonBar Positioning

For positioning related tags you can give the value as either the absolute measure in pixel or you can use the constants like `deviceheight` and `devicewidth` and perform some basic mathematical operations on them. The `deviceheight` and `devicewidth` will be automatically substituted internally with that respective device screenheight and screenwidth. By using these constants we can generate single generic button.xml for all similar devices. Only one mathematical operation should be used for this.

#### Valid Examples

    :::xml
    <barLeft value="0.25*devicewidth"/>    
    <barTop value="0.25*deviceheight"/>
    <barLeft value="0.5*devicewidth"/>
    <barheight value="deviceheight-100"/>
    <barwidth value="devicewidth/2"/>

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
            <buttonTop value="0.25*deviceheight"/>
            <buttonHeight value="0.5*devicewidth"/>
            <buttonWidth value="deviceheight-100"/>
            <buttonImage value="file://%INSTALLDIR%/UpArrow.png" />
            <buttonImagePressed value="file://%INSTALLDIR%/UpArrow.png" />
            <buttonSecondaryText value="5"/>
            <buttonPreview value="false"/>
            <buttonHapticfeedback value="true"/>
            <buttonHapticfeedbackduration value="100"/>
            <buttonClickable value="false"/>
            <buttonActionClick value="key-19" />
            <buttonActionLongClick value="runscript-camerascript"/>
            <buttonActionDown value="quit" />
            <buttonActionUp value="key-62 + delay-500 + key-53"/>
        </Button1>
        <Button2>
        ...
      </Buttons>
    </ButtonBar1>

-----


## Using Relative Co-ordinates For Button-Specific Positioning

For positioning related tags(buttonLeft, buttonTop, buttonHeight, buttonWidth) you can give the value as either the absolute measure in pixel or you can use the constants like `deviceheight` and `devicewidth` and perform some basic mathematical operations on them. The `deviceheight` and `devicewidth` will be automatically substituted internally with that respective device screenheight and screenwidth. By using these constants we can generate single generic button.xml for all similar devices. Only one mathematical operation should be used for this.

#### Valid Examples

    :::xml
    <buttonLeft value="0.25*devicewidth"/>    
    <buttonTop value="0.25*deviceheight"/>
    <buttonHeight value="0.5*devicewidth"/>
    <buttonWidth value="deviceheight-100"/>

-----


### buttonLeft

Used to specify the left coordinate value of the particular button inside the ButtonBar. **Use only if the size of a particular button must be larger or smaller than others in the ButtonBar**. If left unspecified, this value is calculated as described under [Button-specific Parameters](#buttonspecificparameters), above.

#### Example

    :::xml
    <Button1>
      ...
      <buttonLeft value="413"/>
      ...
    </Button1>
  

-----

### buttonTop

Used to specify the top coordinate value of the button inside the ButtonBar. **Use only if the placement of a particular button must be larger or smaller than others in the ButtonBar**. If left unspecified, this value is calculated as described under [Button-specific Parameters](#buttonspecificparameters), above.

#### Example

    :::xml
    <Button1>
      ...
      <buttonTop value="1063"/>
      ...
    </Button1>
  

-----

### buttonHeight

Used to specify the height of the button inside the ButtonBar. **Use only if the size of a particular button must be larger or smaller than others in the ButtonBar**. If left unspecified, this value is calculated as described under [Button-specific Parameters](#buttonspecificparameters), above.

#### Example

    :::xml
    <Button1>
      ...
      <buttonHeight value="120"/>
      ...
    </Button1>

-----

### buttonWidth

Used to specify the width of the particular button inside the ButtonBar. **Use only if the size of a particular button must be larger or smaller than others in the ButtonBar**. If left unspecified, this value is calculated as described under [Button-specific Parameters](#buttonspecificparameters), above.

#### Example

    :::xml
    <Button1>
      ...
      <buttonWidth value="204"/>
      ...
    </Button1>  

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
    <Button1>
      ...
      <buttonText value="Submit"/>
      ...
    </Button1>

-----

### buttonSecondaryText

Used to specify the secondary text to be displayed for the particular button at the top right corner of that button when that particular button is long pressed. **Applies only if a background image is not specified**. 

can accept  unless otherwise noted. Entering non-text characters (< > \ / " ') in these fields could cause the Config.xml file to become corrupt.

If any special characters such as (< > \ / " ') need to be set as a [buttonSecondaryText](#buttonSecondaryText) then .

**Notes**:

* **The buttonSecondaryText field accepts alpha-numeric characters only**. Use of non-text characters (i.e. < > \ / " ') will corrupt the `Button.xml` file.

#### Example

    :::xml
    <Button1>
      ...
      <buttonSecondaryText value="5"/>
      ...
    </Button1>

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
    <Button1>
      ...
      <buttonImage value="file://%INSTALLDIR%/space_bar.png"/>
      <buttonImage value="/storage/emulated/0/deviceinfo.png"/>
      ...
    </Button1>

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
    <Button1>
      ...
      <buttonImagePressed value="file://%INSTALLDIR%/scan_pressed.png"/>
      <buttonImagePressed value="/storage/emulated/0/scan_pressed.png"/>
      ...
    </Button1>


-----

### buttonPreview 

Used for previewing the value of button whenever pressed. Button value is previewed if and only if the value is set to true. By default, the value is set to true for all the buttons.

#### Example

    :::xml
    <Button1>
      ...
      <buttonPreview value="false"/>
      ...
    </Button1>

-----

### buttonHapticfeedback 

Used to specify the Haptic feedback property for the button. Set the value as true to vibrate on click of button. By default, the value is set to false for all the buttons.

#### Example

    :::xml
    <Button1>
      ...
      <buttonHapticfeedback value="true"/>
      ...
    </Button1>

-----

### buttonHapticfeedbackduration 

Used to specify the vibrate duration of the particular button. By default, the duration value is set to 40 milliseconds. 

**Notes**:

* The vibration will start if [buttonHapticfeedback](buttonhapticfeedback) is set to true.
* The vibration will stop either if duration is completed or button is released.
* Set any value in milliseconds in the range of 1 to 1000 milliseconds.
* The maximum allowed value for duration is 1000 milliseconds. Setting value more than the maximum range will override to 1000 milliseconds.

#### Example

    :::xml
    <Button1>
      ...
      <buttonHapticfeedback value="true"/>
      <buttonHapticfeedbackduration value="100"/>
      ...
    </Button1>

-----

### buttonClickable 

Used to specify the clickable property of the button. Button is clickable if and only if the value is set to true. By default, the value is set to true for all the buttons. This is useful when no action has to be performed on click of button but want to show the same in the ButtonBar layout.

#### Example

    :::xml
    <Button1>
      ...
      <buttonClickable value="false"/>
      ...
    </Button1>

-----

### buttonActionClick 

Used to specify the action to be taken when a particular button is pressed. Accepts predefined command strings only.

**Notes**:

* The parameter name has been changed from `buttonAction` to `buttonActionClick`. However the older tag name will also work.
* `buttonActionClick` doesnot gets executed if either of [buttonActionDown](#buttonactiondown) or [buttonActionUp](#buttonactionup) is defined for that particular button.

#### Example

    :::xml
    <Button1>
      ...
      <buttonActionClick value="key-62"/>
      <buttonActionClick value="key-131"/>
      <buttonActionClick value="quit"/>
      <buttonActionClick value="runscript-camerascript"/>
      ...
    </Button1>
    
The following Button Actions are supported:

* For [Adding Delay Between Actions](#adding-delay-between-actions)
* For performing [keyevent](#keyevent) actions
* For executing [JavaScript](#javascriptexecution) operations
* For invoking specific [Commands](#commandexecution)

-----

### buttonActionLongClick 

Used to specify the action to be taken when a particular button is long pressed. Accepts predefined command strings only.

**Notes**:

* `buttonActionLongClick` doesnot gets executed if either of [buttonActionDown](#buttonactiondown) or [buttonActionUp](#buttonactionup) is defined for that particular button.

#### Example

    :::xml
    <Button1>
      ...
      <buttonActionLongClick value="key-62"/>
      <buttonActionLongClick value="key-131"/>
      <buttonActionLongClick value="quit"/>
      <buttonActionLongClick value="runscript-camerascript"/>
      ...
    </Button1>
    
The following Button Actions are supported:

* For [Adding Delay Between Actions](#adding-delay-between-actions)
* For performing [keyevent](#keyevent) actions
* For executing [JavaScript](#javascriptexecution) operations
* For invoking specific [Commands](#commandexecution)

-----

### buttonActionDown 

Used to specify the action to be taken when a particular button is pressed(*similar to keydown event*). Accepts predefined command strings only. This is useful when seperate actions need to be associated with button down and up event.

**Notes**:

* [buttonActionClick](#buttonactionclick) & [buttonActionLongClick](#buttonactionlongclick) doesnot gets executed if either of [buttonActionDown](#buttonactiondown) or [buttonActionUp](#buttonactionup) is defined for that particular button.

#### Example

    :::xml
    <Button1>
      ...
      <buttonActionDown value="key-62"/>
      <buttonActionDown value="key-131"/>
      <buttonActionDown value="quit"/>
      <buttonActionDown value="runscript-camerascript"/>
      ...
    </Button1>
    
The following Button Actions are supported:

* For [Adding Delay Between Actions](#adding-delay-between-actions)
* For performing [keyevent](#keyevent) actions
* For executing [JavaScript](#javascriptexecution) operations
* For invoking specific [Commands](#commandexecution)

-----

### buttonActionUp 

Used to specify the action to be taken when a particular button is pressed and released(*similar to keyup event*). Accepts predefined command strings only. This is useful when seperate actions need to be associated with button down and up event.

**Notes**:

* [buttonActionClick](#buttonactionclick) & [buttonActionLongClick](#buttonactionlongclick) doesnot gets executed if either of [buttonActionDown](#buttonactiondown) or [buttonActionUp](#buttonactionup) is defined for that particular button.

#### Example

    :::xml
    <Button1>
      ...
      <buttonActionUp value="key-62"/>
      <buttonActionUp value="key-131"/>
      <buttonActionUp value="quit"/>
      <buttonActionUp value="runscript-camerascript"/>
      ...
    </Button1>
    
The following Button Actions are supported:

* For [Adding Delay Between Actions](#adding-delay-between-actions)
* For performing [keyevent](#keyevent) actions
* For executing [JavaScript](#javascriptexecution) operations
* For invoking specific [Commands](#commandexecution)

-----

### Adding Delay Between Actions

Used for generating the delay between actions. After execution of the first action, if the second action need to be executed with a delay then providing the delay command in between two actions will be useful. This can be used in all four kind of button actions i.e. (buttonActionClick, buttonActionLongClick, buttonActionup and buttonActionDown). The command name is  ***delay*-value**.

#### Example

    :::xml
    <Button1>
      ...
      <buttonActionUp value="key-62 + delay-500 + key-53"/>
      <buttonActionDown value="key-62 + delay-500 + key-53"/>
      <buttonActionClick value="key-62 + delay-500 + key-53"/>
      <buttonActionLongClick value="key-62 + delay-500 + key-53"/>
      ...
    </Button1>

-----

### keyevent
Used to generate a particular keyevent or to output a character. Specify the key and value in **key-value** format from among the standard [Android KeyEvent values](https://developer.android.com/reference/android/view/KeyEvent.html).

**This feature can be used to create custom keyboard layouts by invoking multiple ButtonBars placed in rows or columns on the screen**. Generating a keyevent for a particular key can be captured inside JavaScript onkeydown events, and also will output the value, if associated.

#### Key Event Examples

**To generate an F1 key as a button action** for a particular button in a ButtonBar, set the [buttonActionClick](#buttonactionclick) or [buttonActionLongClick](#buttonactionlongclick) or [buttonActionDown](#buttonactiondown) or [buttonActionUp](#buttonactionup) syntax as follows:

    :::xml        
    <buttonActionClick value ="key-131"/>
    <buttonActionLongClick value ="key-131"/>
    <buttonActionDown value ="key-131"/>
    <buttonActionUp value ="key-131"/>


**To set the scan trigger key as a button action**, send the trigger KeyEvent code (key-104) to the Enterprise Browser app, which will pass it to the barcode scanning framework and activate the scanner. The example below also selects images for the button states: 
        
    :::xml
    <Button1>
    	<buttonImage value ="file://%INSTALLDIR%/scan.png"/>
    	<buttonImagePressed value ="file://%INSTALLDIR%/scan_pressed.png"/>
    	<buttonActionClick value ="key-104"/>
    </Button1>


-----

## JavaScript Execution

A button can be used to invoke any JavaScript code block, including any of the [Enterprise Browser APIs](../../../api/). Code is assigned to a **button action** value using the **runscript-scriptname** format. 

* **runscript -** indicates that a **button action** is associated with a JavaScript code block.
* **scriptname -** specifies the name of the script (an .xml file) containing the desired JavaScript block. [More about this file](../script)

**Notes**:

* If a **button action** is to be associated with JavaScript execution, the .xml file containing the code must be stored on the device and identified as above. 
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
        	<buttonActionClick value ="runscript-scantriggerscript"/>
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
        <buttonActionClick value ="runscript-deviceinfoscript"/>
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
        <buttonActionClick value ="quit"/>
        <buttonImage value ="file://%INSTALLDIR%/quit.png"/>
    </Button5>

-----

**Related Guides**:

* **[JavaScript Guide](../script)**
* **[Customize Enterprise Browser](../)**
* **[&lt;customxmlfile&gt; tag](../../configreference/#customxmlfile)** in the `Config.xml` reference

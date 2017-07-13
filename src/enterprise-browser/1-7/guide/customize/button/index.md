---
title: Button Parameter Guide
productversion: '1.7'
product: Enterprise Browser
layout: guide.html
---

## Overview

Apps made with Enterprise Browser 1.7 (and higher) for Android can be accompanied by a series 1-10 custom on-screen buttons or keys that can perform virtually any function available to the device, including launching an app or activity, scanning a barcode, sending an intent or executing a JavaScript code snippet. 

The number of buttons or keys and the appearance, layout, on-screen position, functions and all other attributes are controlled through a file called `button.xml`. If one or more of the buttons is to execute JavaScript, the code is contained in a second file called `CustomScript.xml`. Both files are stored on the device, and their paths are specified in corresponding tags in the app's `Config.xml` file. ButtonBars can be shown and hidden programmatically as required by an app's pages through methods implemented in one of 10 [ButtonBar APIs](../../api/re2x/ButtonBar) currently supported. See [Customize Enterprise Browser](../) for details. 

-----

The Button.xml File

The `button.xml` file stores all the runtime configuration settings for custom on-screen buttons of an app. Enterprise Browser currently supports 10 ButtonBars (ButtonBar1 through ButtonBar10) and all definitions are maintained in the `button.xml` file. 

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
Numbered ButtonBar1 through ButtonBar10, this node contains all the specific [ButtonBar parameters](#buttonbarparameters) (color, transparency, position, etc.) and attributes of a particular numbered ButtonBar, as well as the &lt;ButtonN&gt; nodes. It multiple ButtonBars are required, they must be defined one after another within the the &lt;Buttonbargroup&gt; parent node (as explained above).

**Note**: If an attribute defined for a ButtonBar conflicts with one or more individual [Button parameters](#buttonparameters), the individual Button setting will take precedence.   

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

Notes:

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

Used to set the orientation (horizontal or vertical) of buttons on the ButtonBar. If left unspecified, defaults to horizontal. If button-specific positional attributes (left, top, height, width) are not set, the values for all individual buttons will be calculated based on the &lt;barOrientation&gt; value and ButtonBar positional attributes.

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

> **Important**: If any of the four positional attributes (barLeft, barTop, barHeight, barWidth) are not set, a buttonBar with horizontal orientation will be placed at the bottom of the screen and occupy the full screen width; a ButtonBar with vertical orientation will be placed along the right edge of the screen and occupy the full screen height. 

-----

### barLeft

Used to specify the left coordinate (in pixels) for the ButtonBar. 

#### Example

    :::xml
    <ButtonBar1>
      ...
      <barLeft value="0"/>
      ...
    </ButtonBar1>  

-----

### barTop

Used to specify the top coordinate (in pixels) for the ButtonBar.

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

Button-specific parameters are used to specify attributes that apply to an individual Button. These tags must be enclosed within the ButtonN node for which the settings are intended. 

Buttons effect one another only in terms of the total number of buttons created on a given ButtonBar. **The space occupied by each button is calculated as the number of available horizontal or vertical pixels (as determined by [barOrientation](#barorientation)) divided by the total number of ButtonN tags in the ButtonBarN node**. For example, if four buttons are created (as Button1 through Button4), a horizontally oriented ButtonBar will display four buttons of equal size across the screen.  

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

Note:

* If background image is specified this tag will be ignored.
* Please set the text according to the size of the buttons and as well as the [barFontSize](#barfontsize) parameter value.
* If the text is too big as compared to button size text may not be fully visible.
* If webview is resized and ButtonBar is not rendered on top of webview layout, the color of the button may be effected depending on the device display. Hence it is recommended to use [buttonImage](#buttonimage) and [buttonImagePressed](#buttonimagepressed)in those cases.
   
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

**Supported substitution variables:

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

**Supported substitution variables:

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


>>>>>CHECK CHECK CHECK -> still under construction


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
    
One can associate (i.e. **`buttonAction`**) for anyone of the below actions:
* For performing [keyevent](#keyevent) actions.
* For executing [JavaScript](#javascript-execution) operation.
* For invoking specific [Command](#commands).

-----

### keyevent
One can use a particular button to generate a keyevent and also for typing the character in the input boxes in the page.  

User has to provide the key and value in **`key-value`** format where value is the android keycode value for the particular key. Please refer to Android [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html) documentation for the values of different keys.

Note:

* Generating a keyevent for the particular key can be captured inside JavaScript onkeydown events and it will also key-in the values in the input areas if associated.
* User can also create their own keyboard creating multiple Horizontal ButtonBars placed in rows or multiple Vertical ButtonBars placed in columns.

#### Example

    :::xml
    <ButtonBar1>
      ...
      <barColor value="#AF7AC5"/>
      ...
    </ButtonBar1>


#### Key Event Examples

1. **F1** key as <buttonAction>: 
For generating **F1** keyevent as button action for the particular button inside the particular ButtonBar, one must set the **`buttonAction`** syntax in the below manner.
        
    **Inside button xml file (say _button.xml_ file):**
    * * *
        <buttonAction value ="key-131"/>

2. Scan Trigger key as <buttonAction>: 
To use a Button as a scan trigger one can send the trigger KeyCodes(104) to the Enterprise Browser app, which will be passed to Barcode scanning framework to activate the scanner. Please see the below example on how onscreen button can be used as a barcode scanner trigger.
        
    **Inside button xml file (say _button.xml_ file):**
  :::xml
  <Button1>
  	<buttonImage value ="file://%INSTALLDIR%/scan.png"/>
  	<buttonImagePressed value ="file://%INSTALLDIR%/scan_pressed.png"/>
  	<buttonAction value ="key-104"/>
  </Button1>

-----

## JavaScript Execution
One can use a particular button to invoke any JavaScript code block (including [Enterprise Browser APIs](../../../api/)).  
User has to assign the **`buttonAction`** value in **`runscript-scriptname`** format.

* `runscript` - _This indicate that `buttonAction` is associated with JavaScript code block_.
* `scriptname` - _This indicate the name of the script which is defined in another custom script xml file. The script definition can contain any JavaScript code block to perform any operation on press of that button. Inside JavaScript code block, user can invoke/use any Enterprise Browser APIs based on their requirement._
    
Notes:

1. If any button action is associted with JavaScript Execution, one must ensure to define the definition of that script (i.e. **`scriptname`**) inside the custom script xml file.
2. Refer Enterprise Browser [Custom JavaScript XML Guide](../../customscriptdefinition), for complete details on how to create the custom script xml file.
3. Also refer Enterprise Browser [customxmlfile](../../configreference/#customxmlfile) config tag for changing custom script xml file.

#### JavaScript Execution Examples:

1. Button to act as a Trigger: 
The below examples shows how button can be configured to be used as a trigger using Enterprise Browser Barcode API.

    **Inside button xml file (say _button.xml_ file):**
    * * *
        <Button1>
        	<buttonImage value ="file://%INSTALLDIR%/scan.png"/>
        	<buttonImagePressed value ="file://%INSTALLDIR%/scan_pressed.png"/>
        	<buttonAction value ="runscript-scantriggerscript"/>
        </Button1>
                
                
    **Inside custom script xml file (say _CustomScript.xml_ file):**
    * * *
        <?xml version = "1.0"?>
        <!--  Enterprise Browser Custom Script definition file -->
        <CustomScripts>
        	<scantriggerscript>
        		EB.Barcode.start();
        	</scantriggerscript>
        </CustomScripts>

2. Button to get device details: 
The below examples shows how button can be configured to fetch device information using Enterprise Browser System API.

    **Inside button xml file (say _button.xml_ file):**
    * * *
        <Button1>
        	<buttonAction value ="runscript-deviceinfoscript"/>
        </Button1>

            
    **Inside custom script xml file (say _CustomScript.xml_ file):**
    * * *
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

##### Commands
Apart from using the buttons as keyevent or executing specific JavaScript task, one can also use predefined command to achieve predefined actions inside Enterprise Browser application.  

As of now the only command supported is **`quit`** which can be used to exit from Enterprise Browser application.

###### Command Example:
* The below examples shows how buttonAction can be associated with the **`quit`** command for exiting the Enterprise Browser application when button is pressed.

**Inside button xml file (say _button.xml_ file):**

  :::xml
  <Button5>
      <buttonAction value ="quit"/>
      <buttonImage value ="file://%INSTALLDIR%/quit.png"/>
  </Button5>

---

## Remarks
* Do not assign values (i.e. inside any button related tags) which contains special characters such as (< > \ / " '). Doing so, will cause the button xml file to become corrupt. 

**Note**: If any special characters such as (< > \ / " ') need to be set as a [buttonText](#buttontext) then use [buttonImage](#buttonimage) instead.
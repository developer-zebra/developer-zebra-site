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



Button XML file enables the user to have runtime configuration settings for custom onscreen buttons. Enterprise Browser currently supports 10 ButtonBars (named ButtonBar1 through ButtonBar10) and its definition are maintained in the button.xml file. The positional attributes, action, color, transparency and all other view related parameters can be fully customized by specifying those values as key value pair in this xml file.  


The positional and size related attributes (left, top, height and width) should be defined as per target device screen resolution and current screen orientation. One may have to create different button.xml for different screen resolution device.  

In Enterprise Browser, it is always recommended to set auto-rotate to off for Enterprise web applications. However if someone wants to set auto-rotate to on, they should ensure to create different ButtonBars for Landscape and Portrait mode and apply them accordingly through the screen orientation event.  

If user sets any invalid value for button parameters, ButtonBar may not show up and the behavior is undefined. User should pass valid values for all button/bar related parameters.  

### Sample Button.xml File

Inside button.xml file:

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

---

## Nodes
Below mentioned code is the head node and all other tags should be inside this parent node.

**Inside button xml file:**

    :::xml 
    <Buttonbargroup>
      .......
    </Buttonbargroup>

All the specific parameters/attributes of a particular ButtonBar have to be mentioned inside this tag. As there are total of 10 ButtonBar supported currently in Enterprise Browser application, the possible values of N (of ButtonBarN) could be any value in the range of 1 to 10.

**Inside button xml file :**

    :::xml
    <ButtonBarN>
    .......
    </ButtonBarN>
    
**Example:** 
All parameters of **`ButtonBar1`** have to be enclosed inside `<ButtonBar1>.....</ButtonBar1>`.  

If there is a use case of multiple ButtonBar, user can define them one after another inside the **`<Buttonbargroup>`** tag.  

For a ButtonBar, one can set attributes specific to the whole ButtonBar or can set the parameters for individual buttons. But all parameters may not be exposed either for button bar or for individual buttons. There may be instances as same parameter is exposed for both bar and individual button, then the setting for individual button will take precedence.  

The parameter of Buttons are categorized as mentioned below:
1.  [ButtonBar Specific Parameters](buttonbar-specific-parameters)
2.  [Individual Button Specific Parameters](#individual-button-specific-parameters)

### ButtonBar Specific Parameters

All ButtonBar specific parameters should be enclosed inside particular ButtonBarN nodes.

#### Example

// All `ButtonBar1` bar specific parameters should be defined inside 

    :::xml
    <ButtonBar1>
    .....
    </ButtonBar1>

All ButtonBar specific parameters are mentioned below:

-----

### barColor
The color of the entire ButtonBar (as #RRGGBB) using [HTML hexadecimal color values](https://www.w3schools.com/colors/colors_hexadecimal.asp).

**Notes**:

* Setting the color for individual button is not supported.
* If no color is specified, the default color will be blue.
* If image is set as button background, background color will not apply.
* If WebView is resized and ButtonBar is not rendered on top of WebView layout, the color of the button may be effected depending on the device display. Hence it is recommended to use [buttonImage](#buttonimage) in those cases.
    
#### Example

    :::xml
    <ButtonBar1>
      ...
      <barColor value="#AF7AC5"/>
      ...
    </ButtonBar1>

-----

### barColorPressed
The color of the entire ButtonBar in Hex values(#RRGGBB format). When any individual button of that ButtonBar will be pressed, the background color of that particular button will be changed to this specified value. 

(as #RRGGBB) using [HTML hexadecimal color values](https://www.w3schools.com/colors/colors_hexadecimal.asp).

Notes:

* Currently, setting the color for individual button is not supported.
* If the tag is not mentioned, then the default color will be yellow.
* If image is set as button background, background color will not apply.
* If WebView is resized and ButtonBar is not rendered on top of WebView layout, the color of the button may be effected depending on the device display. Hence it is recommended to use [buttonImagePressed](#buttonimagepressed) in those cases.

#### Example

    :::xml
    <ButtonBar1>
      ...
      <barColorPressed value="#3498DB"/>
      ...
    </ButtonBar1>
   
-----

### barFontSize

Set the default text size to the given value, interpreted as "scaled pixel" units. This size is adjusted based on the current density and user font size preference.  

Notes:

* Currently, setting the font size for individual button is not supported.
* If the tag is not mentioned, then the default text size will apply and default font size will be device dependent.
    
#### Example

    :::xml
    <ButtonBar1>
      ...
      <barFontSize value="100"/>
      ...
    </ButtonBar1>


-----

### barTransparency

Transparency value in percentage. 0 means no transparency and 100 means fully transparent.

#### Example

    :::xml
    <ButtonBar1>
      ...
      <barTransparency value="14"/>
      ...
    </ButtonBar1>


-----

### barOrientation

It can be one of the values i.e. either "Horizontal" or "Vertical". Buttons will be placed vertically or horizontally in given buttonBar coordinates based on the specified value of this parameter.  

Note:

* Default value is "Horizontal".
* If the tag is not specified or any invalid string is specified, default value will be set.
* This is only ButtonBar specific parameter.
* If button specific positional attributes(left, top, height, width) are not set, the values for all individual buttons will be calculated based on the &lt;barOrientation&gt; value and ButtonBar positional attributes.
  
#### Example

    :::xml
    <ButtonBar1>
      ...
      <barOrientation value="Vertical"/>
      ...
    </ButtonBar1>
  

-----

### barLeft

Left coordinate in pixel for this particular buttonbar.
    
#### Example

    :::xml
    <ButtonBar1>
      ...
      <barLeft value="0"/>
      ...
    </ButtonBar1>  

-----

### barTop

Top coordinate in pixel for this particular buttonbar.

#### Example

    :::xml
    <ButtonBar1>
      ...
      <barTop value="0"/>
      ...
    </ButtonBar1>
  

-----

### barHeight
Height of this particular buttonbar in pixel.

#### Example

    :::xml
    <ButtonBar1>
      ...
      <barHeight value="0"/>
      ...
    </ButtonBar1>
  

-----

### barWidth
Width of this particular buttonbar in pixel.

#### Example

    :::xml
    <ButtonBar1>
      ...
      <barWidth value="0"/>
      ...
    </ButtonBar1>


#### Remarks
 1. If positional attributes (_barLeft, barTop, barHeight, barWidth_) are not set, Horizontal button bar will be placed in the bottom of the screen occupying the full screen width.
 2. If positional attributes (_barLeft, barTop, barHeight, barWidth_) are not set, Vertical button bar will be placed in the right of the screen occupying the full screen height.

-----

## Button-Specific Parameters

All individual buttons which is part of particular ButtonBar resides inside the `<Buttons>......</Buttons>` nodes. The `<Buttons>......</Buttons>` nodes resides inside the particular `<ButtonBarN>......</ButtonBarN>` nodes. Here N (of ButtonBarN) is any value in the range of 1 to 10. All individual button specific parameter should be enclosed inside the `<ButtonN>......</ButtonN>` nodes. Here N (of ButtonN) could be any positive number.

#### Example
* All individual button specific parameter for `<ButtonBar1>` should be defined inside the respective ButtonN tag.

    **Inside button xml file (say _button.xml_ file):**

      :::xml
      <ButtonBar1>
         <Buttons>
        	 <Button1>
        	 .......
        	 </Button1>
        	 <Button2>
        	 .......
        	 </Button2>
        	 <Button3>
        	 .......
        	 </Button3>
        	 <Button4>
        	 .......
        	 </Button4>
         </Buttons>
      </ButtonBar1>

Create an individual ButtonN tag for each button you need in particular ButtonBar and place all button specific parameter nodes inside those ButtonN tags. Example: If you place 3 ButtonN tags inside a ButtoBar, then number of buttons in that ButtonBar will be calculated as 3 and they will share equal space in the whole ButtonBar area, if their individual coordinates are not set.

All button specific parameters are mentioned below:

-----

### buttonLeft

Left coordinate value of the particular button inside the ButtonBar.  

Note:

* If this parameter is not specified then the value of this will be calculated based on the ButtonBar position, size, orientation and number of buttons in that particular ButtonBar.
* Please do not use this parameter if you need equal buttons in a particular ButtonBar. Use ButtonBar specific parameters instead.
* If you want to customize the size of the buttons inside a ButtonBar which are not equal, then set this particular parameter.

#### Example

    :::xml
    <ButtonBar1>
      ...
      <buttonLeft value="413"/>
      ...
    </ButtonBar1>
  

-----

### buttonTop

Top coordinate value of the particular button inside the ButtonBar.  

Note:

* If this parameter is not specified then the value of this will be calculated based on the ButtonBar position, size, orientation and number of buttons in that particular ButtonBar.
* Please do not use this parameter if you need equal buttons in a particular ButtonBar. Use ButtonBar specific parameters instead.
* If you want to customize the size of the buttons inside a ButtonBar which are not equal, then set this particular parameter.

#### Example

    :::xml
    <ButtonBar1>
      ...
      <buttonTop value="1063"/>
      ...
    </ButtonBar1>
  

-----

### buttonHeight

Height of the particular button inside the ButtonBar.  

Note:

* If this parameter is not specified then the value of this will be calculated based on the ButtonBar size, orientation and number of buttons in that particular ButtonBar.
* Please do not use this parameter if you need equal buttons in a particular ButtonBar. Use ButtonBar specific parameters instead.
* If you want to customize the size of the buttons inside a ButtonBar which are not equal, then set this particular parameter.

#### Example

    :::xml
    <ButtonBar1>
      ...
      <buttonHeight value="120"/>
      ...
    </ButtonBar1>

-----

### buttonWidth
Width of the particular button inside the ButtonBar.  

Note:

* If this parameter is not specified then the value of this will be calculated based on the ButtonBar, size, orientation and number of buttons in that particular ButtonBar.
* Please do not use this parameter if you need equal buttons in a particular ButtonBar. Use ButtonBar specific parameters instead.
* If you want to customize the size of the buttons inside a ButtonBar which are not equal, then set this particular parameter.

#### Example

    :::xml
    <ButtonBar1>
      ...
      <buttonWidth value="204"/>
      ...
    </ButtonBar1>  

-----

### buttonText

Used for setting the text which need to be displayed for the particular button inside the ButtonBar if the background image is not specified.  

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

Used for setting the image (in .png format) for the particular button inside the ButtonBar. One can either use absolute path of the image or specify the following substitute variables for specifying full path along with the file protocol.

* `%INSTALLDIR%`
* `%PRIMARYDIR%`
* `%SECONDARYDIR%`
* `%PERSISTCONFDIR%`

For further details on substitute variables, please refer to Enterprise Browser [Substitution Variables](../../configreference/#substitutionvariables) section.  
Note: 
   * It is recommended to use the substitute variable, as the full path may vary from device to device depending on the different factors.


>>>>>CHECK CHECK

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
Used for setting the image (in .png format) for the particular button when the button is pressed and hold inside the ButtonBar. This image will be shown as long as the button is pressed and hold and will be gone once the button is released. One can either use absolute path of the image or specify the following substitute variables for specifying full path along with the file protocol.

* `%INSTALLDIR%`
* `%PRIMARYDIR%`
* `%SECONDARYDIR%`
* `%PERSISTCONFDIR%`

For further details on substitute variables, please refer to Enterprise Browser [Substitution Variables](../../configreference/#substitutionvariables) section.  
Note: 
It is recommended to use the substitute variable, as the full path may vary from device to device depending on the different factors.


>>>>>CHECK CHECK

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

Action of a particular button pressed can be configuried via this tag. User has to provide the predefined command strings in order to achieve particular action.


>>>>>CHECK CHECK

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

>>>>>CHECK CHECK

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
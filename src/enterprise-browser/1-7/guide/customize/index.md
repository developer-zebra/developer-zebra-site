---
title: Custom On-screen Buttons/Keyboard Guide
productversion: '1.7'
product: Enterprise Browser
layout: guide.html
---
## Overview 
* Do you miss the rich GUI Features of the Android native applications as a JavaScript developer? 
* Are you getting bored with old HTML button controls which lacks the Native user experience?
* Do you want to create a native user experience using a JavaScript which you are familiar with?
* Do you want to create a Native Android Buttons and access enterprise device capabilities via JavaScript APIs?
* Does the device Keyboard functionality not suffice all your application requirements?
* Do you miss your keys in All touch devices when you have migrated from WM/CE legacy Hadwares?
* Are all your application keys not covered as part of Keyboard application?
* Do you want to customize the existing keyboard layout as per your device Screen size?
* Are your keyboard keys too big or too small?
* Does your keyboard have keys which you do not use and wasting your screen space? In other words, do you want to have the keys in keyboards which are really being used and not all?
* Do you want your keyboard to be placed vertically for your Landscape device?
* Do you want different keyboard layouts depending on your application or page context?
* Do you need your keyboard to be transparent?
* Do you want to use Enterprise device features as part of your keyboard?
* Do you have an existing application and still you want to add some new features without changing the server side application code?
* Are you using SAP application and want to add Data capture/Keyboard features without changing SAP system? 

**The solution for all the above mentioned use cases can be achieved by using **Custom On-screen Buttons/Keyboard Feature** which is introduced newly from Enterprise Browser 1.7 onwards.** 

### How the solution works? 
In this new solution, one can create their own custom on-screen buttons which is placed in the container called ButtonBar and all buttons related parameters/attributes is defined there. This is managed via button xml file. There are 10 ButtonBars which are currently supported on Enterprise Browser. For further details, refer [ButtonBar XML Guide](#buttonbar-xml-guide). **Note:** Also refer [Custom JavaScript XML Guide](#custom-javascript-xml-guide), if any button action is associated with custom JavaScript snippets. 
* After creation of the button xml file (_which contains custom on-screen buttons which is placed in the container called ButtonBar_), it must be placed inside the device and the same path must be configured in Enterprise Browser Config.xml file inside `<buttonxmlfile>` config tag. For further details, refer Enterprise Browser [buttonxmlfile](../configreference/#buttonxmlfile) config tag. 
* If any button action is associated with custom JavaScript snippets, then after creation of the custom xml files (_which contains the action definition of specific button_), it must be placed inside the device and the same path must be configured in Enterprise Browser Config.xml file inside `<customxmlfile>` config tag. For further details, refer Enterprise Browser [customxmlfile](../configreference/#customxmlfile) config tag.
* ButtonBar API should be used for showing/hiding the respective ButtonBars (_defined inside button xml file_) within Enterprise Browser application. Refer [ButtonBar API](../../api/re2x/ButtonBar/) to show/hide the ButtonBars. 
**Note:** The respective ButtonBars(_defined inside button xml file_) can be made visible/invisible within Enterprise Browser application in any one of the below manner. 
  * JavaScript Object
  * ActiveX Object
  * HTML Meta Tags
  * Enterprise Browser <defaultmetatags> config tag
  * DOM Injection
---
## ButtonBar XML Guide 
One can create their own custom on-screen buttons placed in the container called ButtonBar and all buttons related parameters/attributes is defined there. The custom on-screen buttons is managed via button xml file. After creation, the button xml file must be placed inside the device and the same path must be set inside Enterprise Browser [buttonxmlfile](../configreference/#buttonxmlfile) config tag. In runtime, Enterprise Browser will read the button xml file and will create the user defined custom on-screen buttons. 
#### ButtonBar and it's button 
* There are 10 ButtonBars which are currently supported on Enterprise Browser.
* Background color, background image, button text size, transparency and other UI related parameters of ButtonBars (_and its respective buttons_) can be configured via button xml file.
* The size and the coordinates of a particular button can also be set via button xml file which will be helpful to place the buttons in small screen size devices without loosing much space.
* One can even create a row/column of buttons and place them vertically/horizontally in the device screen as per their choice.
* The action of a button can be set as a particular keyevent which can be used as a replacement of a Hardware key or can be configured to run custom JavaScript snippet. For complete details, refer [Button Configuration Parameter Guide](../customize/buttonconfigparam) for creating **Custom On-screen Buttons/Keyboard** button xml file.

### buttonxmlfile 
**Applies only to Android devices running KitKat and higher**. Specifies the location of `button.xml`, an optional file containing configuration settings to customize the on-screen buttons on the device. For complete details, refer [buttonxmlfile](../configreference/#buttonxmlfile) configuration parameter.

---

## Custom JavaScript XML Guide 
Custom JavaScript XML file is used for defining custom javascript code block based on the user requirement. For complete details, refer [Custom JavaScript Definition Guide](../customscriptdefinition) for creating custom xml file which contains custom JavaScript snippets to be called by custom on-screen buttons or other app functions.

### customxmlfile 
**Applies only to Android devices running KitKat and higher**. Specifies the location of `CustomScript.xml`, an optional file containing custom JavaScript snippets to be called by custom on-screen buttons or other app functions. For complete details, refer [customxmlfile](../configreference/#customxmlfile) configuration parameter.

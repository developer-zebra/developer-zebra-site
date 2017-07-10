---
title: Customize Enterprise Browser
productversion: '1.7'
product: Enterprise Browser
layout: guide.html
---
##Overview

Enterprise Browser 1.7 (and higher) for Android includes [ButtonBar APIs](../../api/re2x/ButtonBar), which can deliver custom features and functions through on-screen buttons or keys. Functions can include simple actions such as launching an app or activity, sending an intent or virtually any action that can be executed using JavaScript. 

![img](EB_ButtonBar_API.png)
<br>
The [10 new ButtonBar APIs](../../api/re2x/ButtonBar/) can be used to: 

* Deliver a rich GUI more like native Android apps
* Access enterprise features through JavaScript APIs
* Implement key-press features missing after Windows Mobile/CE migration 
* Enhance existing keyboards with additional app functions
* Customize a key layout based on screen size
* Reduce or enlarge key size based on the app or screen
* Eliminate least-used keys and/or emphasize most-used ones
* Optimize keyboard orientation (portrait/landscape) based on app, page and/or device
* Change the opacity of the keyboard
* Add functions to existing apps without changing the server-side source code
* Add data capture and/or keyboard features to SAP apps without changes to source

> **This feature applies only to devices running Android KitKat and higher**. 

-----

## How it Works

The settings, parameters, actions and attributes of the desired on-screen button(s) are stored in an XML container called `Button.xml`. If any of the buttons are to execute JavaScript, the JavaScript code is contained in a second file called `CustomScript.xml`. Both files are stored on the device, and their paths specified in corresponding tags in the app's `Config.xml` file. 

ButtonBars can be shown and hidden programmatically as required by an app's pages through methods implemented one of 10 [ButtonBar APIs](../../api/re2x/ButtonBar) currently supported. Enterprise Browser can send API calls using any of the following in any combination: 

* JavaScript object
* ActiveX object (Windows Mobile/CE only)
* HTML meta tag
* [&lt;DefaultMetaTags&gt;](../configreference/#defaultmetatags) tag in the `Config.xml` file
* [DOM Injection](../DOMinjection)

**More Info**:

* [&lt;buttonxmlfile&gt;](../configreference/#buttonxmlfile) path tag in `Config.xml`
* [&lt;customxmlfile&gt;](../configreference/#customxmlfile)  path tag in `Config.xml`
* [ButtonBar APIs](../../api/re2x/ButtonBar) 

One can create their own custom on-screen buttons placed in the container called ButtonBar and all buttons related parameters/attributes is defined there. The custom on-screen buttons is managed via button xml file. After creation, the button xml file must be placed inside the device and the same path must be set inside Enterprise Browser buttonxmlfile config tag. In runtime, Enterprise Browser will read the button xml file and will create the user defined custom on-screen buttons.
ButtonBar and it's button

There are 10 ButtonBars which are currently supported on Enterprise Browser.
Background color, background image, button text size, transparency and other UI related parameters of ButtonBars (and its respective buttons) can be configured via button xml file.
The size and the coordinates of a particular button can also be set via button xml file which will be helpful to place the buttons in small screen size devices without loosing much space.
One can even create a row/column of buttons and place them vertically/horizontally in the device screen as per their choice.

The action of a button can be set as a particular keyevent which can be used as a replacement of a Hardware key or can be configured to run custom JavaScript snippet.
For complete details, refer Button Configuration Parameter Guide for creating Custom On-screen Buttons/Keyboard button xml file.

Custom JavaScript XML Guide

Custom JavaScript XML file is used for defining custom javascript code block based on the user requirement. For complete details, refer Custom JavaScript Definition Guide for creating custom xml file which contains custom JavaScript snippets to be called by custom on-screen buttons or other app functions.


-----

## buttonxmlfile Path Tag
Specifies the location of `button.xml`, an optional file containing configuration settings for the custom on-screen buttons on the device. **Note**: This tag is not included in the default `Config.xml` file. If added as shown below, Enterprise Browser will read the `button.xml` file (if present) from the specified folder when the app launches. For more information, see the [&lt;buttonxmlfile&gt; path tag](../configreference/#buttonxmlfile) in `Config.xml` reference.

**Possible Values**:

* Fully qualified path and file name
* Substitution variable representing the fully qualified path 
* Supports any valid internal or external storage device
* **Default path: "file://%INSTALLDIR%/button.xml" (Enterprise Browser installation folder)**

#### Example

	:::xml
	<Configuration>
		...
		<FileLocations>
		      <buttonxmlfile value="file://%INSTALLDIR%/button.xml"/>
		</FileLocations>
		...
	</Configuration>


## customxmlfile Path Tag
**Applies only to Android devices running KitKat and higher**. Specifies the location of `CustomScript.xml`, an optional file containing custom JavaScript snippets to be called by custom on-screen buttons or other app functions. **Note**: This tag is not included in the default `Config.xml` file. If added as shown below, Enterprise Browser will read the `CustomScript.xml` file (if present) from the specified folder when the app launches. For more information, see the [&lt;customxmlfile&gt; path tag](../configreference/#customxmlfile) in `Config.xml` reference. 

**Possible Values**:

* Fully qualified path and file name
* Substitution variable representing the fully qualified path 
* Supports any valid internal or external storage device
* **Default path: "file://%INSTALLDIR%/CustomScript.xml" (Enterprise Browser installation folder)**

#### Example

	:::xml
	<Configuration>
		...
		<FileLocations>
		      <customxmlfile value="file://%INSTALLDIR%/CustomScript.xml"/>
		</FileLocations>
		...
	</Configuration>



---
title: NativeMenubar
productversion: '3.0'
product: Enterprise Browser
layout: guide.html
---


## Overview
The NativeMenubar API lets you customize the Windows Mobile/CE native menu buttons.
## Enabling the API
There are two methods of enabling the NativeMenubar API:

* Include all ebapi modules
* Include only the required API modules

For either of these methods, you'll need to include files from the `/Enterprise Browser/JavaScript Files/Enterprise Browser` directory on the computer that you installed the Enterprise Browser.

### Include all JS API modules
To include all JS APIs, copy the ebapi-modules.js file to a location accessible by the app's files and include a reference to the JavaScript file in the app's HTML. For instance, to include the modules file in the app's `index.html`, copy the file to the same directory as that `index.html` and add the following line to the HTML's HEAD section:

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi-modules.js"></script>

> Note: that the pathing for this file is relative to the current page.

This will define the EB class within the page. Any page you need to use the modules will need to have the .js file included in this fashion.

### Include only the required modules
To include single APIs, you must first include the `ebapi.js` in your HTML as well as the API file you want to use. For instance, to use the NativeMenubar API, I would add the following code to my HTML file(s), assuming the API files have been copied to the same directory as the HTML.

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi.js"></script>
    <script type="text/javascript" charset="utf-8" src="eb.nativemenubar.js"></script>

The ebapi.js file is necessary for all single API inclusions.
        


##Properties



###extraButton

####Type
<span class='text-info'>HASH</span> 
####Description
Defined behavior of the Left menu button for Windows Mobile applications. This takes the same HASH as a menu item {label: 'Left Button', action: 'alert("You pressed the left button")'}. If your menu is using menu items via mainMenu, then be sure to not set an action for the extraButton. Setting an action for the extraButton will cause the mainMenu setting to be ignored. 
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.NativeMenubar.extraButton</code>



####Platforms

* Windows Mobile

###extraMenu

####Type
<span class='text-info'>ARRAY</span> 
####Description
The Left menu items for Windows Mobile applications. This defines the list of menu choices when the extraButton is pressed.
####Params
<li><i>Object</i> : <span class='text-info'>HASH</span><p>Same values as for mainMenu. </p></li>
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.NativeMenubar.extraMenu</code>



####Platforms

* Windows Mobile

###mainButton

####Type
<span class='text-info'>HASH</span> 
####Description
Defined behavior of the Right menu button for Windows Mobile applications. This takes the same HASH as a menu item {label: 'Right Button', action: 'javascript: alert("You pressed the right button");'}. If your menu is using menu items via mainMenu, then be sure to not set an action for the mainButton. Setting an action for the mainButton will cause the mainMenu setting to be ignored.
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.NativeMenubar.mainButton</code>



####Platforms

* Windows Mobile

###mainMenu

####Type
<span class='text-info'>ARRAY</span> 
####Description
The Right menu items in Windows Mobile applications. This defines the list of menu choices when the mainButton is pressed.
####Params
<li><i>Object</i> : <span class='text-info'>HASH</span><p> </p></li><ul><li>label : <span class='text-info'>STRING</span><p>Visible label. </p></li><li>action : <span class='text-info'>STRING</span><p>URL to page which will be loaded into tab. It may be a JavaScript method to call: 'javascript: methodOnTab();'. Or path to html page to load. </p></li><li>disabled : <span class='text-info'>BOOLEAN</span><span class='label '> Default: false</span><p>Menu item will be displayed as disabled. Platforms:
WM </p></li></ul>
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.NativeMenubar.mainMenu</code>



####Platforms

* Windows Mobile

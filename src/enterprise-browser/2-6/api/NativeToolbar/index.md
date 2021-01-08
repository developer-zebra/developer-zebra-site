---
title: NativeToolbar
productversion: '2.6'
product: Enterprise Browser
layout: guide.html
---


## Overview
The NativeToolbar method let you create and remove a toolbar at runtime.
## Enabling the API
There are two methods of enabling the Nativetoolbar API:

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
To include single APIs, you must first include the `ebapi.js` in your HTML as well as the API file you want to use. For instance, to use the Nativetoolbar API, I would add the following code to my HTML file(s), assuming the API files have been copied to the same directory as the HTML.

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi.js"></script>
    <script type="text/javascript" charset="utf-8" src="eb.nativetoolbar.js"></script>

The ebapi.js file is necessary for all single API inclusions.
        


##Methods



### create(<span class="text-info">ARRAY</span> toolbarElements, <span class="text-info">HASH</span> toolBarProperties)
Creates a new toolbar and removes the current toolbar and replaces it with this one. Any images used for UI elements should be specified by either an absolute path. i.e. '/sdcard/nmt/blabla.com.bla./data/public/img/button.png'

####Parameters
<ul><li>toolbarElements : <span class='text-info'>ARRAY</span><p>Array of Toolbar elements. Do not create more than five elements for maximum portability.Toolbar elements are not scrollable, so if some buttons will not fit into the screen dimensions, they will be invisible. </p></li><ul><li>toolbarElement : <span class='text-info'>HASH</span><p>Properties of Toolbar elements. Either :icon or :label must be specified. If both are specified, :icon is drawn and :label is discarded. </p></li><ul><li>label : <span class='text-info'>STRING</span><p>Visible label to display instead of an icon.For predefined actions, icon will be displayed. Android note: for predefined actions no label will be displayed. </p></li><li>action : <span class='text-info'>STRING</span><p>URL to call when button is pressed or special value.It may be a JavaScript method to call: 'javascript: methodOnButton();'. </p><p><strong>Possible Values</strong> :</p> <dl  ><dt>separator</dt><dd>Add a separator to the toolbar. If only one separator is specified, then elements after separator will be right-aligned. If more then one separator is added: on WM/CE, platform dependent separator will be displayed, on Android center-aligned groups will be created. Platforms: 
WM, CE, Win32, Android</dd><dt>exit</dt><dd>Exit the application.</dd><dt>close</dt><dd>Exit the application.</dd><dt>home</dt><dd>Navigate to Home page, defined in configuration file.</dd><dt>refresh</dt><dd>Refresh current page.</dd><dt>back</dt><dd>Perform back action or execute browser back.</dd><dt>log</dt><dd>Display Log View window. Platforms: 
WM, CE, Win32, Android</dd><dt>fullscreen</dt><dd>Expand application window to full screen. Platforms: 
WM, CE, Win32, Android</dd><dt>minimize</dt><dd>Minimize application window. Platforms: 
WM, CE, Win32</dd><dt>SIP</dt><dd>Display software keyboard window.Set `EB.System.keyboardState` to `EB.System.KEYBOARD_AUTOMATIC` to use this element. Platforms: 
WM</dd></dl></li><li>icon : <span class='text-info'>STRING</span><p>Icon absolute path, from root of the device. For example, on Android your path would look somethin like "/mnt/internal/filename.png" and for Windows Mobile it would look like "/Program Files/filename.png". If the path is not set correctly, the toolbar may not display correctly. Android: Icons must be no more than 30x30 pixels and must be in .png format. Windows Mobile: Icons can be any size, but all icons should have same size (default - 48x48). .png and .bmp formats are supported.  </p></li><li>width : <span class='text-info'>INTEGER</span><p>Button width in pixel. Used to define separator width when more than one separator specified. Platforms:
WM </p></li></ul></ul><li>toolBarProperties : <span class='text-info'>HASH</span><p>Properties of TabBar. </p></li><ul><li>backgroundColor : <span class='text-info'>INTEGER</span><p>Background color of the toolbar. </p></li><li>maskColor : <span class='text-info'>INTEGER</span><span class='label '> Default: 0xFFFFFF</span><p>Image mask color(transparent color). Platforms:
WM, CE, Win32 </p></li><li>viewHeight : <span class='text-info'>INTEGER</span><p>Toolbar height in pixels. Platforms:
WM, CE, Win32 </p></li></ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile
* Windows CE

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.NativeToolbar.create(<span class="text-info">ARRAY</span> toolbarElements, <span class="text-info">HASH</span> toolBarProperties)</code> 


### remove()
Removes the current toolbar. Does nothing if there is no active toolbar.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile
* Windows CE

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.NativeToolbar.remove()</code> 


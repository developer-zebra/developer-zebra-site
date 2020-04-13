---
title: WebView
productversion: '2.5'
product: Enterprise Browser
layout: guide.html
---


## Overview
This is the core container used for rendering application code. Certain behaviors of the WebView can be controlled by using this API class.

> Note: On CE devices that use the IE Engine, clicking a hyperlink while holding the (hardware) shift key on the device yields unpredictable results.

## Enabling the API
There are two methods of enabling the WebView API:

* Include all ebapi modules
* Include only the required API modules

Either way, the included files will be from: 
`/Enterprise Browser/JavaScript Files/Enterprise Browser`,
a directory on the computer that contains the Enterprise Browser installation.

### Include all JS API modules
To include all JavaScript APIs, copy the `ebapi-modules.js` file to a location accessible by the app's files and include the JavaScript modules file in the app. For instance, to include the modules file in the app's `index.html`, copy the modules file to the same directory as the `index.html` and add the following line to the HEAD section of the app's `index.html` file:

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi-modules.js"></script>

> This will define the EB class within the page. **Note that the path for this file is relative to the current page** (index.html). Any page on which the modules are required will need to have the required .js file(s) included in this fashion.

### Include only the required modules
To include individual APIs, include the `ebapi.js` in the HTML, and then the additional required API file(s). For instance, to use the WebView API, add the following code to the HTML file(s). Again, this assumes that relevant API files have been copied to the same directory as the HTML.

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi.js"></script>
    <script type="text/javascript" charset="utf-8" src="eb.webview.js"></script>


> In the code lines above, notice that `ebapi.js` is included first, followed by `eb.webview.js`, which is the WebView API for Enterprise Browser. **This coding is required on each HTML page whenever an individual API will be called from that page**.

##Methods

### captureWebPageScreen()
Used to capture the current application page and save it to a directory on the device.

####Parameters
* Void

####Returns
* Void

####Platforms
* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.WebView.captureWebPageScreen()</code>

-----

### clearApplicationCache()
Used for clearing HTML5 Application Cache data in Enterprise Browser application. Note: Use WebView clearCache API for clearing cache data.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.WebView.clearApplicationCache()</code>

-----

### clearCache()
Forces WebView to clear cache data in Enterprise Browser application. Note: This doesnot clear HTML5 Application Cache data.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.WebView.clearCache()</code>

-----

### clearCookies()
Forces WebView to clear cookies saved in Enterprise Browser application.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.WebView.clearCookies()</code>

-----

### clearHistory()
Forces WebView to clear history in Enterprise Browser application.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.WebView.clearHistory()</code>

-----

### navigate(<span class="text-info">STRING</span> url, <span class="text-info">INTEGER</span> tabIndex)
Force WebView to navigate to a URL. White page flickering during transition may happen if a controller action method doesn't return any rendered value, but instead performs a WebView.navigate(someUrl) call. <!--It is important to avoid using WebView.navigate in Ruby action methods because WebView.navigate is intended to be used in callback methods asynchronously.-->

####Parameters
<ul><li>url : <span class='text-info'>STRING</span><p>Navigate to this url. </p></li><li>tabIndex : <span class='text-info'>INTEGER</span> <span class='label label-info'>Optional</span><span class='label '> Default: -1</span><p>TabBar tab index. If no tab bar present, index is ignored. Please avoid of navigate in not opened tab - this is unsupported on Android. Refresh active WebView.</p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile
* Windows CE

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.WebView.navigate(<span class="text-info">STRING</span> url, <span class="text-info">INTEGER</span> tabIndex)</code> 

-----

### navigateBack(<span class="text-info">INTEGER</span> tabIndex)
Force WebView to navigate to the previous page using Browser back.

####Parameters
<ul><li>tabIndex : <span class='text-info'>INTEGER</span> <span class='label label-info'>Optional</span><span class='label '> Default: -1</span><p>TabBar tab index. If no tab bar present, index is ignored. Navigate back in active WebView.</p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile
* Windows CE

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.WebView.navigateBack(<span class="text-info">INTEGER</span> tabIndex)</code> 

-----

### refresh(<span class="text-info">INTEGER</span> tabIndex)
Force WebView to refresh the current page.

####Parameters
<ul><li>tabIndex : <span class='text-info'>INTEGER</span> <span class='label label-info'>Optional</span><span class='label '> Default: -1</span><p>TabBar tab index. If no tab bar present, index is ignored. Refresh active WebView.</p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile
* Windows CE

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.WebView.refresh(<span class="text-info">INTEGER</span> tabIndex)</code> 

-----

### resizeWebviewLayout(<span class="text-info">INTEGER</span> left, <span class="text-info">INTEGER</span> top, <span class="text-info">INTEGER</span> width, <span class="text-info">INTEGER</span> height)
Resize the WebView layout parameters with the specified left, top, width and height values in Enterprise Browser application.

####Parameters
<ul><li>left : <span class='text-info'>INTEGER</span><p>Specifies the initial horizontal position of the webView layout in pixels.</p></li><li>top : <span class='text-info'>INTEGER</span><p>Specifies the initial vertical position of the webView layout in pixels.</p></li><li>width : <span class='text-info'>INTEGER</span><p>Specifies the width of the webView layout in pixels. The maximum value should not be greater than device Width.</p></li><li>height : <span class='text-info'>INTEGER</span><p>Specifies the height of the webView layout in pixels. The maximum value should not be greater than device Height.</p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.WebView.resizeWebviewLayout(<span class="text-info">INTEGER</span> left, <span class="text-info">INTEGER</span> top, <span class="text-info">INTEGER</span> width, <span class="text-info">INTEGER</span> height)</code>

-----

### resetWebviewLayout()
Reset the WebView layout to default in Enterprise Browser application.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.WebView.resetWebviewLayout()</code>

-----

### save(<span class="text-info">STRING</span> format, <span class="text-info">STRING</span> path, <span class="text-info">INTEGER</span> tabIndex)
Save current page to file system.

####Parameters
<ul><li>format : <span class='text-info'>STRING</span><p>Format of the saved page. </p><p><strong>Possible Values</strong> :</p> <dl  ><dt>Constant: EB.WebView.SAVE_FORMAT_JPEG <br/> String:jpeg</dt><dd>Save as jpeg image.</dd></dl></li><li>path : <span class='text-info'>STRING</span><p>Path to the file / folder to save the page. </p></li><li>tabIndex : <span class='text-info'>INTEGER</span> <span class='label label-info'>Optional</span><span class='label '> Default: -1</span><p>TabBar tab index. If no tab bar present, index is ignored. If tabbar index omitted then active WebView will be saved.</p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.WebView.save(<span class="text-info">STRING</span> format, <span class="text-info">STRING</span> path, <span class="text-info">INTEGER</span> tabIndex)</code> 

-----

##Properties

### useWideViewPort

#### Type
<span class='text-info'>BOOLEAN</span> 

#### Description
Used to control whether the WebView supports the viewport HTML meta tag or a wide viewport. When false, layout width is always set to the width of the WebView control in device-independent (CSS) pixels. When true and the page contains the viewport meta tag, the value of the width specified in the tag is used. If the page does not contain the tag or does not specify a width, wide viewport id used. **Overrides any value set using the UseWideViewPort parameter of the [UseWideViewport config tag](../../guide/configreference/#viewport)**.

#### Access
* Class: This property can only be accessed via the API class object.
 * EB.WebView.useWideViewPort
 
#### Platforms

 * Android KitKat and higher

-----

### loadWithOverviewMode

#### Type
<span class='text-info'>BOOLEAN</span> 

#### Description
Used to control whether the WebView loads pages in "zoomed out" (Overview) mode, which allows the width of content to fit on screen. This mode is generally used when content width is greater than the width of the WebView control. 

#### Access
* Class: This property is accessed only through the API class object.
 * EB.WebView.loadWithOverviewMode

#### Platforms
* Android 5.x Lollipop and higher

##### Notes
* Takes affect only if `UseWideViewPort` parameter of the [ViewPort config tag](../../guide/configreference/#viewport) or useWideViewPort API property is set to true.

<!-- 12/4/18- Per eng., not exposed in Config.xml at this time
* Overrides any value set using the [LoadWithOverviewMode config tag](../configreference/#loadwithoverviewmode).

 -->

-----

###activeTab

####Type
<span class='text-info'>INTEGER</span> <span class='label label-warning'>Read Only</span>
####Description
Return an active tab index. For change active tab use Use EB.NativeTabbar.currentTab property.
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.WebView.activeTab</code>

####Platforms

* Android
* Windows Mobile
* Windows CE

-----

###blockNetworkImage

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Controls whether the WebView loads image resources from the network. Note that disabling all network loads using blockNetworkLoads property or via BlockNetworkLoads config tag also will prevent network images from loading, even if this flag is set to false. When the value of this setting is changed from true to false, network images resources referenced by content currently displayed by the WebView are fetched automatically. **Note**: This property overrides the value set using BlockNetworkImage configuration tag.

####Access

* Class: This property can only be accessed via the API class object.
	* <code>EB.WebView.blockNetworkImage</code>

####Platforms

* Android

-----

###blockNetworkLoads

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Controls whether the WebView loads resources from the network. Use blockNetworkImage property or BlockNetworkImage config tag to only avoid loading image resources. If the value of this setting is changed from true to false, network resources referenced by content currently displayed by the WebView are not fetched until reloading of page is not done. **Note**: This property overrides the value which was set using BlockNetworkLoads configuration tag.

####Access

* Class: This property can only be accessed via the API class object.
	* <code>EB.WebView.blockNetworkLoads</code>

####Platforms

* Android

-----

###cacheSize

####Type
<span class='text-info'>INTEGER</span> <span class='label label-warning'>Read Only</span>
####Description
The browser cache size, in whole MBs. Defined in the Navigation\\Cache parameter of the `config.xml` file.
####Access

* Class: This property can only be accessed via the API class object.
	* <code>EB.WebView.cacheSize</code>

####Platforms

* Windows Mobile (WebKit)

-----

###contentHeight

####Type
<span class='text-info'>INTEGER</span> <span class='label label-warning'>Read Only</span>

####Description
Gets the height of the HTML content.

####Access

* Class: This property can only be accessed via the API class object.
	* <code>EB.WebView.contentHeight</code>

####Platforms

* Android

-----

###enableZoom

####Type
<span class='text-info'>BOOLEAN</span> <span class='label label-warning'>Read Only</span>
####Description
Enable WebView zoom. Use 'EnableZoom' parameter in the `config.xml` file to configure this value.
####Params
<p><strong>Default:</strong> true</p>
####Access

* Class: This property can only be accessed via the API class object.
	* <code>EB.WebView.enableZoom</code>

####Platforms

* Android

-----

###fontFamily

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
Specifies the default font to use when rendering text in web pages. The specified font should be a TrueType font present on the device. On Windows, the default font has been set to 'Tahoma' as this is present on all Zebra devices running Windows Mobile/CE. Note that Tahoma has no italic or oblique variants. On the Enterprise Tablet, the default is Droid Sans Fallback. The font specified must be stored in \Windows for Windows Mobile/CE devices or /system/fonts folder for Enterprise Tablet. Defined in the HTMLStyles\\FontFamily parameter of the `config.xml` file.  

####Access

* Class: This property can be accessed only via the API class object.
	* <code>EB.WebView.fontFamily</code>

####Platforms

* Windows Mobile (WebKit)

-----

###framework

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
Same as System.webViewFramework.
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.WebView.framework</code>

####Platforms

* Android
* Windows Mobile
* Windows CE

###fullScreen

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Use full screen mode.
####Params
<p><strong>Default:</strong> false</p>
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.WebView.fullScreen</code>

####Platforms

* Android
* Windows Mobile
* Windows CE

-----

###navigationTimeout

####Type
<span class='text-info'>INTEGER</span> 
####Description
Number of milliseconds (max. = 45000) before the browser times out and navigates to the page specified in the badlink setting. Can be defined using the Navigation\\NavTimeout parameter of the `config.xml` file. If it is determined that the destination is unreachable regardless of wait time, the badlink may be loaded before NAVTIMEOUT. This is the time taken to establish communication with the server, not the time taken to fully load the page. Note that the navigation timeout will not be invoked when navigating to the start page. The best practice is to store the first page locally to avoid connectivity issues at start up, and then redirect to an online page if desired.

####Params
<p><strong>Default:</strong> 45000</p>
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.WebView.navigationTimeout</code>



####Platforms

* Windows Mobile (WebKit)

-----

###scrollTechnique

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
Specifies the technique used to scroll about the page. Defined in the Scrolling\\ScrollTechnique paramter of the `config.xml` file.
####Params
<p><strong>Default:</strong> FingerScroll</p>
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.WebView.SCROLL_NONE - String: (None). No scrollbars will be displayed and the page will not respond to finger swipes.
* Constant: EB.WebView.SCROLL_SCROLLBARS - String: "Scrollbars" When the size of the page is larger than the screen, scrollbars will be presented for scrolling the page.
* Constant: EB.WebView.SCROLL_FINGER - String: "FingerScroll" Scrolling is possible using finger swiping.

#### Access

* Class: This property can only be accessed via the API class object.
	* <code>EB.WebView.scrollTechnique</code>

####Platforms

* Windows Mobile (WebKit)

###textZoomLevel

####Type
<span class='text-info'>INTEGER</span> 
####Description
Sets the font size to be displayed on the page, set to 0 for the smallest font and 4 for the largest font.
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.WebView.textZoomLevel</code>

####Platforms

* Android
* Windows Mobile (WebKit)

-----

###userAgent

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
Defined in in the Navigation\\UserAgent parameter of the `config,.xml` file. When visiting a web server, the WebKit browser reports itself as the specified user agent. Use the following substitution variables:

* %p - platform name ("Windows CE " + version number)
* %w - WebKit version number
* %e - WebKit version number

Use the UserAgent setting to spoof the device to the server (i.e. to view content designed for the desktop on a mobile screen).

From RhoElements 2.1 onward, the default value was changed to work out of the box with a greater number of server configurations. Prior to RhoElements 2.1, the default user agent was "**Mozilla/5.0 (%p) AppleWebKit/%w (KHTML, like Gecko) WebKit/%e Safari/%w**"
                
####Access

* Class: This property can only be accessed via the API class object.
	* <code>EB.WebView.userAgent</code>

####Platforms

* Windows Mobile (WebKit)

-----

###viewportEnabled

####Type
<span class='text-info'>BOOLEAN</span> <span class='label label-warning'>Read Only</span>

####Description
Get whether viewport meta tag processing is enabled or disabled in the Navigation\\ViewportEnabled parameter of the `config.xml` file.

####Params
<p><strong>Default:</strong> true</p>

####Access

* Class: This property can only be accessed via the API class object.
	* <code>EB.WebView.viewportEnabled</code>

####Platforms

* Windows Mobile (WebKit)

-----

###viewportWidth

####Type
<span class='text-info'>INTEGER</span> <span class='label label-warning'>Read Only</span>
####Description
Default viewport width to use for pages that do not have a viewport meta tag (uses 1:1 scaling if not specified). Defined in the Navigation\\ViewportWidth parameter of the `config.xml` file.

####Access

* Class: This property can only be accessed via the API class object.
	* <code>EB.WebView.viewportWidth</code>

####Platforms

* Windows Mobile (WebKit)

-----

###zoomPage

####Type
<span class='text-info'>FLOAT</span> 
####Description
Sets the zoom factor of the page. Factor 1.0 is no zoom, values less than 1.0 are zoomed out and values greater than 1.0 are zoomed in.It is recommended to not to use the zoom value less than 1.0 because the page doesn't look in readable format.In Android new Zoom value takes effect on current page, Previous page has to be revisited for the new zoom values to take effect 
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.WebView.zoomPage</code>

####Platforms

* Android
* Windows Mobile (WebKit)


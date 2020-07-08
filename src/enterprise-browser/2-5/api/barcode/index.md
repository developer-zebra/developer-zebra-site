---
title: Barcode
productversion: '2.5'
product: Enterprise Browser
layout: guide.html
---

## Overview


The Barcode Module controls functionality of the device scanner. The Barcode API of Enterprise Browser 2.0 (and higher) allows an app to simultaneously scan a specified number of barcodes in view of the scanner. This number is specified using the `BarcodeCount` parameter, which was introduced in EB 2.0. **This and other new features and properties are supported only on Android devices with EMDK version 6.8 and newer installed**.

If the use case involves capturing a single barcode type (for example, a pricing kiosk app) Zebra recommends using the `Barcode.take(callback)` method. If the app is to decode multiple barcode types common in enterprise scenarios (for example a warehouse inventory and receiving app), Zebra recommends using the `Barcode.enable(callback)` method. 

Check the platform indicators in each property or method section. If developing for a device with only a camera; scanning is possible only through that camera and the number of available symbologies is limited to the most common ones, such as EAN13 and UPCA. 


#### Other Notes 
* **Only foreground apps have access to scanning hardware**. When an app is sent to the background, its state is saved and scanner control is automatically relinquished. When a scanner app returns to the foreground, its previous state is reapplied. 
* **The VC70 scanner** works only if connected in SSI mode.
* **The RE 2.x Scanner API and the EB 1.x Barcode API should not be used simultaneously in any Enterprise Browser application**; please select one or the other.
* **EMDK 6.8 (or later) is required** to take full advantage of multi-barcode capabilities in this API. 

## Enabling the API
There are two methods of enabling the Barcode API:

* Include all 'ebapi' modules
* Include only the required API modules

For either of these methods, one or more files must be copied to the device from the `/Enterprise Browser/JavaScript Files/Enterprise Browser` directory on the computer that contains the Enterprise Browser installation.

### Include all API modules
To include all APIs, copy the `ebapi-modules.js` file to a location accessible by the app's files and include a reference to the JavaScript file in the app's HTML. For instance, to include the modules file in the app's `index.html`, copy the file to the same directory as that `index.html` and add the following line to the HTML's HEAD section:

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi-modules.js"></script>

> The code above defines the EB class within the page. **Note that the path for this file is relative to the current page** (`index.html`). Any page on which the modules are required must include a reference to the required .js file(s) in this fashion.

### Include only the required modules
To include individual APIs, first include a reference to the `ebapi.js` module in the HTML, and then the additional required API file(s). For instance, to use the Barcode API, add the following code to the HTML file(s), assuming the API files have been copied to the same directory as the HTML.

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi.js"></script>
    <script type="text/javascript" charset="utf-8" src="eb.barcode.js"></script>

> In the lines above, notice that `ebapi.js` is included first, followed by `eb.barcode.js`, which is the Barcode API for Enterprise Browser. **This coding is required on each HTML page whenever an individual API will be called from that page**.


<!-- 1/31/2020- original overview (below) replaced with above copy of prior version. 
The Barcode Module provides access to control the faddunctionality of the device's scanner. Check the platform indicators in each property or method section. In general if you are developing for a device with only a camera, the number of symbologies available to you will be limited to just the most common ones, eg EAN13, UPCA etc and your scanning will be via the device camera. If your application is running on more traditional Symbol Technologies' hardware you will have much finer control over a more fully featured Scanner, often with a choice of scanner hardware on the device. In general if you wish to capture a single barcode in a 'one shot' use case, eg your App just wants to capture a single barcode to be submitted to a price comparison website then use Barcode.take(callback); if your application is expecting a number of barcodes to be received, common in enterprise scenarios for example a user in a warehouse then use Barcode.enable(callback). Only the foreground application is given access to the scanning hardware, when an application is sent to the background its state will be saved and it will automatically relinquish control of the scanner. When brought back to the foreground, an application previously using the barcode API will have its previous configuration reapplied automatically. A VC70 scanner will work only if connected in SSI Mode.
       
## Enabling the API
There are two methods of enabling the Barcode API:

* Include all ebapi modules or
* Include only the API modules you need

For either of these methods, you'll need to include files from the `/Enterprise Browser/JavaScript Files/Enterprise Browser` directory on the computer that you installed the Enterprise Browser.

### Include all JS API modules
To include all JS APIs, you must copy the ebapi-modules.js file to a location accessible by your app's files and include the JavaScript file in your app. For instance, to include the modules file in your index.html, with the file in the same directory as your index.html, you would add the following line to the <head> section of your index.html:

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi-modules.js"></script>

> Note: that the pathing for this file is relative to the current page.

This will define the EB class within the page. Any page you need to use the modules will need to have the .js file included in this fashion.

### Include only the modules you need
To include single APIs, you must first include the `ebapi.js` in your HTML as well as the API file you want to use. For instance, to use the Barcode API, I would add the following code to my HTML file(s), assuming the API files have been copied to the same directory as the HTML.

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi.js"></script>
    <script type="text/javascript" charset="utf-8" src="eb.barcode.js"></script>

The ebapi.js file is necessary for all single API inclusions.
        
-->

##Methods



### addConnectionListener()
**If using an RS507, RS6000, or RS4000 barcode scanner**, use this method to add a connection listener to receive connected or disconnected callbacks.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li>connectionState : <span class='text-info'>STRING</span><p>The message describing the connection: Connected or Disconnected. </p></li><li>connectionType : <span class='text-info'>STRING</span><p>The message describes the connection type removed/attached scanner: Bluetooth_SSI, Serial_SSI etc. </p></li><li>decoderType : <span class='text-info'>STRING</span><p>The message describes the decode type of removed/attached scanner: ONE_DIMENSIONAL, TWO_DIMENSIONAL etc. </p></li><li>deviceType : <span class='text-info'>STRING</span><p>The message describes the device type of removed/attached scanner: IMAGER, CAMERA etc. </p></li><li>friendlyName : <span class='text-info'>STRING</span><p>The message describes the friendly name of removed/attached scanner: BLUETOOTH SCANNER,2D IMAGER,CAMERA SCANNER Disconnected. </p></li><li>isDefaultScanner : <span class='text-info'>STRING</span><p>The message describes wether removed/attached scanner is a default scanner: true or false. </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Zebra Devices Only

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.addConnectionListener()</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.addConnectionListener()</code> 


### barcode_recognize(<span class="text-info">STRING</span> imageFilePath)
Recognizes a barcode on an image. Returns a string with recognized code, or empty string if the barcode is not recognized.

####Parameters
<ul><li>imageFilePath : <span class='text-info'>STRING</span><p>Path to the image that contains the barcode to be recognized. </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>STRING</span></p><ul></ul>

####Returns
Synchronous Return:

* STRING : String with recognized code, or empty string if the barcode is not recognized.

####Platforms

* Android

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.barcode_recognize(<span class="text-info">STRING</span> imageFilePath)</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.barcode_recognize(<span class="text-info">STRING</span> imageFilePath)</code> 


### commandRemoteScanner(<span class="text-info">STRING</span> command)
Instruct the connected RS507 scanner to perform some action.

####Parameters
<ul><li>command : <span class='text-info'>STRING</span><p>The action the RS507 scanner should perform, can be 'Disconnect' which disconnects the Bluetooth RS507; 'unpair' which unpairs the RS507 from the device for association with another device; 'StartPaging' or 'StopPaging' which will cause the RS507 scanner to start or stop emitting a beep, to allow it to be located. </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Windows Mobile
* Zebra Devices Only

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.commandRemoteScanner(<span class="text-info">STRING</span> command)</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.commandRemoteScanner(<span class="text-info">STRING</span> command)</code> 


### disable()
Disables the barcode scanner. This reverts the scanner to its default state and flushes any current decoder settings.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.disable()</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.disable()</code> 


### enable(<span class="text-info">HASH</span> propertyMap)
Enabling the scanner puts it in a state where it will respond to the trigger (on devices with a hardware trigger) or will accept a command to initiate a soft scan (start method). Scanned barcodes will be available to the application through the callback provided to this method. Only one scanner on the device can be enabled at any one time, to switch between the imager and camera scanners (for example), first disable the currently enabled scanner. If a callback is not specified to this method, the scanned data is received as keystrokes. Note that it is necessary to enable the scanner on WM/CE devices prior to being able to retrieve the state of properties.

####Parameters
<ul><li>propertyMap : <span class='text-info'>HASH</span> <span class='label label-info'>Optional</span><p>Provide a set of properties to configure the scanner, for example enable specific symbologies or check digits. Valid `properties` for this parameter are the properties available to this API module. Check the <a href='#api-barcode?Properties'>property section</a> for applicable properties. Not providing properties to this function will use the scanner's default properties, or those previously set on the Scanner instance.</p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li>data : <span class='text-info'>STRING</span><p>The data decoded by the scanner or imaging device. </p></li><li>source : <span class='text-info'>STRING</span><p>The source device and human readable decoder type of the decoded barcode or symbol. </p></li><li>type : <span class='text-info'>STRING</span><p>Hex value representing the decoder type. </p></li><li>time : <span class='text-info'>STRING</span><p>The time at which the decode occurred (hh:mm:ss) </p></li><li>length : <span class='text-info'>STRING</span><p>The length of the decoded barcode or symbol. </p></li><li>direction : <span class='text-info'>STRING</span><p>The direction the barcode was scanned, either forward, reverse or unavailable. </p></li><li>isMULTIBARCODEData : <span class='text-info'>BOOLEAN</span><p>Whether the Scanned Data is MULTIBARCODE decoded data or not. </p></li><li>isUDIData : <span class='text-info'>BOOLEAN</span><p>Whether the Scanned Data is UDI decoded data or not. </p></li><li>label : <span class='text-info'>STRING</span><p>Get the decoder type of the decoded barcode or symbol. Note: This is specially applicable for UDI decoding. </p></li><li>UDITokenizedData : <span class='text-info'>ARRAY</span><p>Array of tokenized data received after processing the UDI barcode Data. The data read from a UDI Barcode labels contain embedded key/value pairs delimited by characters defined by their UDI type. Note: This is specially applicable for UDI decoding. </p></li><ul><li><i>Object</i> : <span class='text-info'>HASH</span><p> </p></li><ul><li>key : <span class='text-info'>STRING</span><p>Get key of the token data. </p></li><li>data : <span class='text-info'>STRING</span><p>Get data of the token data. </p></li><li>type : <span class='text-info'>STRING</span><p>Get data type of the token data. </p></li><li>format : <span class='text-info'>STRING</span><p>Get format of the token data </p></li><li>rawData : <span class='text-info'>STRING</span><p>Get raw data of the token data </p></li></ul></ul><li>MULTIBARCODETokenizedData : <span class='text-info'>ARRAY</span><p>Array of scanned data received after processing the Multi barcode Data.  </p></li><ul><li><i>Object</i> : <span class='text-info'>HASH</span><p> </p></li><ul><li>data : <span class='text-info'>STRING</span><p>Get data of the scanned data. </p></li><li>source : <span class='text-info'>STRING</span><p>The source device and human readable decoder type of the decoded barcode or symbol. </p></li><li>time : <span class='text-info'>STRING</span><p>Get time of the scanned data </p></li><li>rawData : <span class='text-info'>STRING</span><p>Get raw data of the scanned data </p></li></ul></ul></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.enable(<span class="text-info">HASH</span> propertyMap)</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.enable(<span class="text-info">HASH</span> propertyMap)</code> 


### enumerate()
Used to gain access to all scanner objects present on the device. Consumer devices will most likely have only a single scanner the device's camera. Enterprise-grade hardware often employs two or more scanning devices.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>ARRAY</span></p><ul><ul><li><i>Object</i> : <span class='text-info'>SELF_INSTANCE: EB.Barcode</span><p> </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile
* Windows CE

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Barcode.enumerate()</code> 


### getAllProperties()
This method will return all of object/value pairs for the property Names of the API class.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li> : <span class='text-info'>STRING</span><p> </p></li></ul></ul>

####Returns
Synchronous Return:

* HASH : Map of all available properties<ul><li> : <span class='text-info'>STRING</span><p> </p></li></ul>

####Platforms

* Android
* Windows Mobile

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.getAllProperties()</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.getAllProperties()</code> 


### getDefault()
This method will return an object that represents the default instance of the API Class. For example Camera.getDefault will return a Camera object that represents the default camera.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>SELF_INSTANCE</span></p><ul></ul>

####Returns
Synchronous Return:

* SELF_INSTANCE : Default object of Module.

####Platforms

* Android
* Windows Mobile

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Barcode.getDefault()</code> 


### getProperties(<span class="text-info">ARRAY</span> arrayofNames)
This method will return a set of object/value pairs for the list of the propertyName that is passed in. The propertyNames must be a valid property of the API class.

####Parameters
<ul><li>arrayofNames : <span class='text-info'>ARRAY</span><p>List of properties I want to know about </p></li><ul><li><i>Object</i> : <span class='text-info'>STRING</span><p> </p></li></ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li> : <span class='text-info'>STRING</span><p> </p></li></ul></ul>

####Returns
Synchronous Return:

* HASH : Map of properties I want to know about<ul><li> : <span class='text-info'>STRING</span><p> </p></li></ul>

####Platforms

* Android
* Windows Mobile

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.getProperties(<span class="text-info">ARRAY</span> arrayofNames)</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.getProperties(<span class="text-info">ARRAY</span> arrayofNames)</code> 


### getProperty(<span class="text-info">STRING</span> propertyName)
This method will return the value of the propertyName that is passed in. The propertyName must be a valid property of the API class.

####Parameters
<ul><li>propertyName : <span class='text-info'>STRING</span><p>The property to return info about. </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>STRING</span></p><ul></ul>

####Returns
Synchronous Return:

* STRING : The property to return info about.

####Platforms

* Android
* Windows Mobile

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.getProperty(<span class="text-info">STRING</span> propertyName)</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.getProperty(<span class="text-info">STRING</span> propertyName)</code> 


### getSupportedProperties()
Return array of properties supported by this scanner.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>ARRAY</span></p><ul><ul><li><i>Object</i> : <span class='text-info'>STRING</span><p> </p></li></ul></ul>

####Returns
Synchronous Return:

* ARRAY : Array of property names supported by this scanner.<ul><li><i>Object</i> : <span class='text-info'>STRING</span><p> </p></li></ul>

####Platforms

* Android
* Windows Mobile
* Zebra Devices Only

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.getSupportedProperties()</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.getSupportedProperties()</code> 


### getautoCharacterSetPreference()
Gives the array of Character Sets provided for Decoding

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>ARRAY</span></p><ul><ul><li><i>Object</i> : <span class='text-info'>STRING</span><p> </p></li></ul></ul>

####Returns
Synchronous Return:

* ARRAY : If nothing is set then default array is given ["GB2312","UTF8"].<ul><li><i>Object</i> : <span class='text-info'>STRING</span><p> </p></li></ul>

####Platforms

* Android
* Zebra Devices Only

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.getautoCharacterSetPreference()</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.getautoCharacterSetPreference()</code> 


### isParamSupported(<span class="text-info">STRING</span> propertyName)
This method is used for checking whether specified barcode property is supported or not by EMDK service which is installed in the device. It will return 'true' if the specified property is supported or else it will return 'false' for all other cases.

####Parameters
<ul><li>propertyName : <span class='text-info'>STRING</span><p>The propertyName name should be same as barcode property name like 'code128', 'code128isbt128'. </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>BOOLEAN</span></p><ul></ul>

####Returns
Synchronous Return:

* BOOLEAN

####Platforms

* Android
* Zebra Devices Only

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.isParamSupported(<span class="text-info">STRING</span> propertyName)</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.isParamSupported(<span class="text-info">STRING</span> propertyName)</code> 


### registerBluetoothStatus()
If using an RS507 barcode scanner, use this method to register to receive connected or disconnected events.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li>status : <span class='text-info'>STRING</span><p>The message describing the bluetooth connection: BluetoothConnected, BluetoothDisconnected or BTScanAssociationBarcode. See below for further descriptions. </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Windows Mobile
* Zebra Devices Only

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.registerBluetoothStatus()</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.registerBluetoothStatus()</code> 


### removeConnectionListener()
If using an RS507, RS6000 or RS4000 barcode scanner, use this method to remove a connection listener to receive connected or disconnected callbacks.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Zebra Devices Only

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.removeConnectionListener()</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.removeConnectionListener()</code> 


### resetToDefault()
Resets the scanner parameters to defaults values for the specified enable scanner.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Zebra Devices Only

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.resetToDefault()</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.resetToDefault()</code> 


### setDefault(<span class="text-info">SELF_INSTANCE: EB.Barcode</span> defaultInstance)
This method sets the attributes of the default object instance by passing in an object of the same class.

####Parameters
<ul><li>defaultInstance : <span class='text-info'>SELF_INSTANCE: EB.Barcode</span><p>An instance object that is of the same class. </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Barcode.setDefault(<span class="text-info">SELF_INSTANCE: EB.Barcode</span> defaultInstance)</code> 


### setProperties(<span class="text-info">HASH</span> propertyMap)
This method will set the values of a list of properties for the API class. The propertyName must be a valid property for the class and must also not be read only.

####Parameters
<ul><li>propertyMap : <span class='text-info'>HASH</span><p>Map of properties I want to set </p></li><ul><li><i>Object</i> : <span class='text-info'>STRING</span><p> </p></li></ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.setProperties(<span class="text-info">HASH</span> propertyMap)</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.setProperties(<span class="text-info">HASH</span> propertyMap)</code> 


### setProperty(<span class="text-info">STRING</span> propertyName, <span class="text-info">STRING</span> propertyValue)
This method will set the value of a property for the API class. The propertyName must be a valid property for the class and must also not be read only.

####Parameters
<ul><li>propertyName : <span class='text-info'>STRING</span><p>The one property name that I want to set </p></li><li>propertyValue : <span class='text-info'>STRING</span><p>The one property value that I want to set </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.setProperty(<span class="text-info">STRING</span> propertyName, <span class="text-info">STRING</span> propertyValue)</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.setProperty(<span class="text-info">STRING</span> propertyName, <span class="text-info">STRING</span> propertyValue)</code> 


### setautoCharacterSetPreference(<span class="text-info">ARRAY</span> charArray)
If you have set CharacterSetSelection as AUTO, then using this method you can give an array of preferred character sets to be decoded.

####Parameters
<ul><li>charArray : <span class='text-info'>ARRAY</span> <span class='label label-info'>Optional</span><p>Provide an ARRAY of Character Sets whose barcode should be decoded and given back. Default array is ["GB2312","UTF8"]</p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Zebra Devices Only

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.setautoCharacterSetPreference(<span class="text-info">ARRAY</span> charArray)</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.setautoCharacterSetPreference(<span class="text-info">ARRAY</span> charArray)</code> 


### start()
Performs a soft trigger start, initiating a scan without pressing the hardware trigger. If the scan does not result in a decode it is necessary to perform a soft stop before another soft start.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.start()</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.start()</code> 


### stop()
Performs a soft trigger stop.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.stop()</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.stop()</code> 


### take(<span class="text-info">HASH</span> propertyMap)
Enable the scanner and start capturing the barcode automatically. On Symbol Technologies' devices the amount of time to scan the barcode is defined by the scanTimeout property. On Android if a barcode is found, the user can confirm barcode recognition, or continue to try to recognize the barcode. When the user confirms or cancels, the callback is called. Once the callback has been called the barcode hardware is disabled.This method will work only on scanners which support soft scan.

####Parameters
<ul><li>propertyMap : <span class='text-info'>HASH</span> <span class='label label-info'>Optional</span><p>Provide a set of properties to configure the scanner, for example enable specific symbologies or check digits. Valid `properties` for this parameter are the properties available to this API module. Check the <a href='#api-barcode?Properties'>property section</a> for applicable properties. Not providing properties to this function will use the scanner's default properties, or those previously set on the Scanner instance.</p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li>barcode : <span class='text-info'>STRING</span><p>The data decoded by the scanner or imaging device. </p></li><li>status : <span class='text-info'>STRING</span><p>Whether or not the barcode was successfully scanned, status will be 'ok' or 'cancel' </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile
* Windows CE

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.take(<span class="text-info">HASH</span> propertyMap)</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.take(<span class="text-info">HASH</span> propertyMap)</code> 


##Properties



###adaptiveScanning

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables adaptive scanning. When set to true, the scan engine will automatically toggle between 2 scan angles, wide and narrow, allowing the scan engine to decode barcodes both in close proximity and far away (~100 inches). Adaptive scanning is only supported in high performance, long working range scan engines such as SE960. On Android platform, it supports only with Laser scanner such as RS4000.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.adaptiveScanning</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.adaptiveScanning</code> 



####Platforms

* Android
* Windows Mobile
* Zebra Devices Only(Laser Scanners on Symbol Technologies' devices)

###aimMode

####Type
<span class='text-info'>STRING</span> 
####Description
Defines the aiming mode to use.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.AIMMODE_NONE - String: none No Aiming (Can be overridden by picklistMode).
* Constant: EB.Barcode.AIMMODE_DOT - String: dot Laser barcode readers will show a dot for aiming.
* Constant: EB.Barcode.AIMMODE_SLAB - String: slab Laser barcode readers will show a slab for aiming.
* Constant: EB.Barcode.AIMMODE_RETICLE - String: reticle Imager barcode readers will show a reticle for aiming.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.aimMode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.aimMode</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###aimType

####Type
<span class='text-info'>STRING</span> 
####Description
Describes the type of aiming to use. It supports on Android with EMDK version 6.3 and above.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.AIMTYPE_TRIGGER - String: trigger Standard trigger mode. Holding the trigger will start a decoding session.
* Constant: EB.Barcode.AIMTYPE_TIMED_HOLD - String: timedHold Aiming lasts for the time specified by 'timedAimDuration' before decoding. The opportunity to scan will last until the barcode is decoded or scanTimeout occurs.
* Constant: EB.Barcode.AIMTYPE_TIMED_RELEASE - String: timedRelease Aiming lasts until trigger is released. If the timedAimDuration has expired when the trigger is released then a decode session is started until a barcode is decoded or for the remaining time equal to the scanTimeout value.
* Constant: EB.Barcode.AIMTYPE_PRESENTATION - String: presentation Provided to support Kiosk devices. The scanner illuminates when movement is detected in the range of the scanner window. In order to use this mode the scanner must be initiated with a softscan using the Rho.Barcode.start() method and again after each decode. The device must be equipped with a sensor to detect movement to use presentation mode. MK31XX devices come with presentation mode pre-enabled in the scanner driver and the aimType cannot be modified for these devices. In ANdroid it is supported from EB version 2.1 and above.
* Constant: EB.Barcode.AIMTYPE_PRESS_AND_RELEASE - String: pressAndRelease Scan will continue after the trigger is released until scanTimeout occurs.
* Constant: EB.Barcode.AIMTYPE_PRESS_AND_SUSTAIN - String: pressAndSustain Scanner will continue to decode session until the beamTimer is expired, barcode is decoded or cancels the read. It avoids unexpected cancellations of a read by pressing the trigger button of the device. If the trigger button of the device is pressed while the beam is ON, it has no effect.
* Constant: EB.Barcode.AIMTYPE_CONTINUOUS_READ - String: continuousRead Once the trigger is pulled barcodes will continue to be scanned as long as the trigger is held, enabling rapid scanning, to be used in conjunction with sameSymbolTimeout and differentSymbolTimeout. This value is ignored if viewfinderMode is set to 'dynamicReticle'
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.aimType</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.aimType</code> 



####Platforms

* Android
* Windows Mobile
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###aimingPattern

####Type
<span class='text-info'>STRING</span> 
####Description
Describes the aiming pattern to be turned ON or OFF. It supports on Android with EMDK version 6.6 and above.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.AIMINGPATTERN_OFF - String: OFF Aiming pattern is turned off.
* Constant: EB.Barcode.AIMINGPATTERN_ON - String: ON Aiming pattern is turned on.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.aimingPattern</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.aimingPattern</code> 



####Platforms

* Android
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###allDecoders

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When set to true, the barcode scanner will read all barcode types that the scanner is capable of reading. When set to false, the barcode scanner will not be able to decode any symbologies, this is most useful if you want to set the scanner to a default state before only enabling your required symbologies. The fewer symbologies that are enabled the faster the decoding performance of the scanning engine will be. This property will return true only if all supported symbologies by the scanner are enabled, if only a subset of supported symbologies are enabled then false will be returned. Note that some decoders will not be enabled as some symbologies use the same systems to encode data, making it impossible to differentiate between them. For example: "canpostal" and "auspostal" both use a 4-state system, so devices will only enable either "canpostal" OR "auspostal" when "alldecoders" is enabled. Note that other symbologies also share the 4-state system.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.allDecoders</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.allDecoders</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE(Scanners on Symbol Technologies' devices)

###ausPostal

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for Australian Postal barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.ausPostal</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.ausPostal</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###autoCharacterSetFailureOption

####Type
<span class='text-info'>STRING</span> 
####Description
 Describes the available Character Set Failure Option. This property allows you to set one type at a time. It supports on Android with EMDK version 6.10 and above.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.NONE - String: AUTO Set Auto Character Set Failure Option as NONE
* Constant: EB.Barcode.UTF_8 - String: UTF8 Set Auto Character Set Failure Option as UTF8
* Constant: EB.Barcode.ISO_8859_1 - String: ISO88591 Set Auto Character Set Failure Option as ISO88591
* Constant: EB.Barcode.Shift_JIS - String: SHIFTJIS Set Auto Character Set Failure Option as SHIFTJIS
* Constant: EB.Barcode.GB18030 - String: GB18030 Set Auto Character Set Failure Option as GB18030
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.autoCharacterSetFailureOption</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.autoCharacterSetFailureOption</code> 



####Platforms

* Android
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###autoEnter

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, automatically appends the character code for 'enter' to the end of any barcodes scanned. This is useful if you want to submit forms following a scan without further interaction. This property will only take effect if you have not specified a callback to the enable method. AutoEnter and AutoTab are mutually exclusive properties.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.autoEnter</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.autoEnter</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###autoTab

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, automatically appends the tab character to the end of any barcodes scanned. This is useful if you are populating a form and want to jump to the next field in the form without further interaction. This property will only take effect if you have not specified a callback to the enable method. AutoTab and AutoEnter are mutually exclusive properties.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.autoTab</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.autoTab</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###aztec

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for Aztec barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.aztec</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.aztec</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###barcodeCount

####Type
<span class='text-info'>INTEGER</span> 
####Description
When the barcodeCount property is applied this value defines the interval between which no of barcodes can be scanned. The value is specified in integer with minimum value as 2 and maximum value as 10. It supports on Android with EMDK version 6.8 and above.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.barcodeCount</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.barcodeCount</code> 



####Platforms

* Android
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###barcodeDataFormat

####Type
<span class='text-info'>STRING</span> 
####Description
Specifies the format in which the barcode data is returned, binary data is returned in Data URI format with the appropriate mime type. This parameter is designed to be used primarily with image based symbologies (eg. Signature). Binary data will not be output as keystrokes, you must set a decode callback in order to receive scanned data.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.FORMAT_BINARY - String: binary Scanned data will be returned in Data URI format.
* Constant: EB.Barcode.FORMAT_TEXT - String: text Scanned data will be returned in Text format.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.barcodeDataFormat</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.barcodeDataFormat</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Camera / Imager Scanners on Symbol Technologies' devices)

###beamWidth

####Type
<span class='text-info'>STRING</span> 
####Description
Specifies the width of the laser beam. All devices will support normal beam widths but other widths may not be supported on your device.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.BEAM_NORMAL - String: normal Laser beam width is normal.
* Constant: EB.Barcode.BEAM_WIDE - String: wide Laser beam width is wide.
* Constant: EB.Barcode.BEAM_NARROW - String: narrow Laser beam width is narrow.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.beamWidth</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.beamWidth</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Laser Scanners on Symbol Technologies' devices)

###bidirectionalRedundancy

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables bidirectional redundancy.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.bidirectionalRedundancy</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.bidirectionalRedundancy</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Laser Scanners on Symbol Technologies' devices)

###canPostal

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for Canadian Postal barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.canPostal</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.canPostal</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###characterSetSelection

####Type
<span class='text-info'>STRING</span> 
####Description
 Describes the available Character Sets for this particula Scanner. This property allows you to set one type at a time. It supports on Android with EMDK version 6.10 and above.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.AUTO - String: AUTO Set Character Selection as AUTO
* Constant: EB.Barcode.UTF_8 - String: UTF8 Set Character Selection as UTF8
* Constant: EB.Barcode.ISO_8859_1 - String: ISO88591 Set Character Selection as ISO88591
* Constant: EB.Barcode.Shift_JIS - String: SHIFTJIS Set Character Selection as SHIFTJIS
* Constant: EB.Barcode.GB18030 - String: GB18030 Set Character Selection as GB18030
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.characterSetSelection</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.characterSetSelection</code> 



####Platforms

* Android
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###chinese2of5

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for Chinese 2of5 barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.chinese2of5</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.chinese2of5</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###codabar

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for Codabar barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.codabar</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.codabar</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###codabarClsiEditing

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables Codabar CLSi formatting when set to true.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.codabarClsiEditing</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.codabarClsiEditing</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###codabarMaxLength

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the maximum number of allowable characters in a Codabar barcode. If your application only expects barcode lengths in a certain range, reducing the allowed range can improve scanning performance. Allowed values are 0 to 55.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.codabarMaxLength</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.codabarMaxLength</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###codabarMinLength

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the minimum number of allowable characters in a Codabar barcode. If your application only expects barcode lengths in a certain range, reducing the allowed range can improve scanning performance. Allowed values are 0 to 55.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.codabarMinLength</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.codabarMinLength</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###codabarNotisEditing

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables Codabar NotisEditing formatting when set to true.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.codabarNotisEditing</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.codabarNotisEditing</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###codabarRedundancy

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Sets the Codabar Redundancy property, if set the barcode must be decoded twice before being accepted. This will slow scanning but improve reliability.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.codabarRedundancy</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.codabarRedundancy</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code11

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for Code11 barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code11</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code11</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code11checkDigitCount

####Type
<span class='text-info'>STRING</span> 
####Description
Specifies whether to verify 0, 1 or 2 check digits.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.CODE11_CHECKDIGIT_NONE - String: none Scanning engine will verify no Code 11 check digits.
* Constant: EB.Barcode.CODE11_CHECKDIGIT_ONE - String: one Scanning engine will verify one Code 11 check digit.
* Constant: EB.Barcode.CODE11_CHECKDIGIT_TWO - String: two Scanning engine will verify two Code 11 check digits.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code11checkDigitCount</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code11checkDigitCount</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code11maxLength

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the maximum number of allowable characters in a Code 11 barcode. If your application only expects barcode lengths in a certain range, reducing the allowed range can improve scanning performance. Allowed values are 0 to 55.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code11maxLength</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code11maxLength</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code11minLength

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the minimum number of allowable characters in a Code 11 barcode. If your application only expects barcode lengths in a certain range, reducing the allowed range can improve scanning performance. Allowed values are 0 to 55.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code11minLength</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code11minLength</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code11redundancy

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Sets the Code 11 Redundancy property, if set the barcode must be decoded twice before being accepted. This will slow scanning but improve reliability.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code11redundancy</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code11redundancy</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code11reportCheckDigit

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, the barcode check digit(s) will be reported for scanned Code 11 barcodes.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code11reportCheckDigit</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code11reportCheckDigit</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code128

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for Code128 barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code128</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code128</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code128checkIsBtTable

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, decodes concatenated Code128 output only if the pair belongs to one of the commonly concatenated pairs as defined by the standard.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code128checkIsBtTable</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code128checkIsBtTable</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code128ean128

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, barcodes with the EAN128 subtype property set will be read.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code128ean128</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code128ean128</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code128isbt128

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, barcodes with the isbt128 subtype property set will be read.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code128isbt128</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code128isbt128</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code128isbt128ConcatMode

####Type
<span class='text-info'>STRING</span> 
####Description
Sets the Code128 ISBT concatenation mode property. This feature allows a pair of barcodes which meet certain criteria defined in the ISBT128 spec to be reported as a single barcode. This parameter describes the different concatenation modes available for ISBT128.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.CODE128ISBT_NEVER - String: never Will ignore the barcode pair and only output decode data for one of the barcodes.
* Constant: EB.Barcode.CODE128ISBT_ALWAYS - String: always Will not decode if both barcodes are not present or if one of them can not be decoded.
* Constant: EB.Barcode.CODE128ISBT_AUTO - String: auto Auto-Discriminate.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code128isbt128ConcatMode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code128isbt128ConcatMode</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code128maxLength

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the maximum number of allowable characters in a Code 128 barcode. If your application only expects barcode lengths in a certain range, reducing the allowed range can improve scanning performance. Allowed values are 0 to 55.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code128maxLength</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code128maxLength</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code128minLength

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the minimum number of allowable characters in a Code 128 barcode. If your application only expects barcode lengths in a certain range, reducing the allowed range can improve scanning performance. Allowed values are 0 to 55.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code128minLength</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code128minLength</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code128other128

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Sets the other 128 property which enables the non EAN and non ISBT 128 subtype.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code128other128</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code128other128</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code128redundancy

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Sets the Code 128 Redundancy property, if set the barcode must be decoded twice before being accepted. This will slow scanning but improve reliability.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code128redundancy</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code128redundancy</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code128securityLevel

####Type
<span class='text-info'>INTEGER</span> 
####Description
Sets the Code 128 security level and accepts a value between 0 and 3 inclusive. 0: Allows the scanner to operate in its most aggressive state, while providing sufficient security in decoding most 'in-spec' barcodes. 1: Eliminates most mis-decodes. 2: Select this option if security level 1 fails to eliminate mis-decodes. 3: Select this option if security level 1 and 2 fail to eliminate mis-decodes. Be advised that selecting level 3 is an extreme measure against mis-decoding and will significantly impair the decoding ability of the scanner.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code128securityLevel</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code128securityLevel</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code39

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for Code 39 barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code39</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code39</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code39code32Prefix

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables reporting of the Code32 prefix when a Code39 barcode is converted.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code39code32Prefix</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code39code32Prefix</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code39convertToCode32

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables conversion from Code39 to Code 32 barcodes, when set the decoded barcode is converted to Code 32.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code39convertToCode32</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code39convertToCode32</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code39fullAscii

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables full ASCII conversion of Code 39 barcodes.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code39fullAscii</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code39fullAscii</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code39maxLength

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the maximum number of allowable characters in a Code 39 barcode. If your application only expects barcode lengths in a certain range, reducing the allowed range can improve scanning performance. Allowed values are 0 to 55.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code39maxLength</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code39maxLength</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code39minLength

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the minimum number of allowable characters in a Code 39 barcode. If your application only expects barcode lengths in a certain range, reducing the allowed range can improve scanning performance. Allowed values are 0 to 55.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code39minLength</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code39minLength</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code39redundancy

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Sets the Code 39 Redundancy property, if set the barcode must be decoded twice before being accepted. This will slow scanning but improve reliability.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code39redundancy</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code39redundancy</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code39reportCheckDigit

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables reporting of the Code 39 check digit when a Code 39 barcode is scanned.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code39reportCheckDigit</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code39reportCheckDigit</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code39securityLevel

####Type
<span class='text-info'>INTEGER</span> 
####Description
Sets the Code 128 security level and accepts a value between 0 and 3 inclusive. 0: This setting allows the scanner to operate in its most aggressive state, while providing sufficient security in decoding most 'in-spec' barcodes. 1: This setting eliminates most mis-decodes. 2: Select this option if security level 1 fails to eliminate mis-decodes. 3: Select this option if security level 1 and 2 fail to eliminate mis-decodes. Be advised that selecting level 3 is an extreme measure against mis-decoding and will significantly impair the decoding ability of the scanner.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code39securityLevel</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code39securityLevel</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code39verifyCheckDigit

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Turns on verification of the Code 39 check digit.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code39verifyCheckDigit</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code39verifyCheckDigit</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code93

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for Code 93 barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code93</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code93</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code93maxLength

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the maximum number of allowable characters in a Code 93 barcode. If your application only expects barcode lengths in a certain range, reducing the allowed range can improve scanning performance. Allowed values are 0 to 55.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code93maxLength</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code93maxLength</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code93minLength

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the minimum number of allowable characters in a Code 93 barcode. If your application only expects barcode lengths in a certain range, reducing the allowed range can improve scanning performance. Allowed values are 0 to 55.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code93minLength</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code93minLength</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###code93redundancy

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Sets the Code 93 Redundancy property, if set the barcode must be decoded twice before being accepted. This will slow scanning but improve reliability.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.code93redundancy</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.code93redundancy</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###codeIdType

####Type
<span class='text-info'>STRING</span> 
####Description
Allows the code type of a scanned barcode and select a code ID character to insert between the prefix and the decoded symbol. This is useful when the reader is decoding more than one code type. It supports on Android with EMDK version 6.6 and above.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.CODEIDTYPE_NONE - String: NONE Disable the prefix.
* Constant: EB.Barcode.CODEIDTYPE_AIM - String: AIM Enables the standards based three character prefix.
* Constant: EB.Barcode.CODEIDTYPE_SYMBOL - String: SYMBOL Enables the defined single character prefix.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.codeIdType</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.codeIdType</code> 



####Platforms

* Android
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###compositeAb

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for Composite AB barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.compositeAb</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.compositeAb</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###compositeAbUccLinkMode

####Type
<span class='text-info'>STRING</span> 
####Description
Describes whether UCC link mode is enabled.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.UCC_NEVER - String: never Link flag is ignored.
* Constant: EB.Barcode.UCC_ALWAYS - String: always Composite AB barcodes are always linked.
* Constant: EB.Barcode.UCC_AUTO - String: auto Auto-discriminate whether Composite AB barcodes are linked.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.compositeAbUccLinkMode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.compositeAbUccLinkMode</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###compositeAbUseUpcPreambleCheckDigitRules

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
This setting causes the UPC rules specified in the UPC EAN parameters to be used when reporting composite decode data.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.compositeAbUseUpcPreambleCheckDigitRules</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.compositeAbUseUpcPreambleCheckDigitRules</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###compositeC

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for Composite C barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.compositeC</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.compositeC</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###connectionIdleTime

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the time, in seconds, that an external scanner will be allowed to remain idle before the connection between the terminal and the scanner is severed to conserve power. The value should be in mutilple of 5. This is currently applicable to Bluetooth scanners only. For Android L and above the valid range start from 0. When time is set to 0, BT scanner will remain connected with terminal.It supports on Android with EMDK version 6.6 and above.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.connectionIdleTime</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.connectionIdleTime</code> 



####Platforms

* Android
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###connectionIdleTimeout

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the time, in seconds, that an external scanner will be allowed to remain idle before the connection is terminated to conserve power.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.connectionIdleTimeout</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.connectionIdleTimeout</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Bluetooth Scanners on Symbol Technologies' devices)

###d2of5

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for D2of5 barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.d2of5</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.d2of5</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###d2of5maxLength

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the maximum number of allowable characters in a D2of5 barcode. If your application only expects barcode lengths in a certain range, reducing the allowed range can improve scanning performance. Allowed values are 0 to 55.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.d2of5maxLength</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.d2of5maxLength</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###d2of5minLength

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the minimum number of allowable characters in a D2of5 barcode. If your application only expects barcode lengths in a certain range, reducing the allowed range can improve scanning performance. Allowed values are 0 to 55.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.d2of5minLength</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.d2of5minLength</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###d2of5redundancy

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Sets the D2of5 Redundancy property, if set the barcode must be decoded twice before being accepted. This will slow scanning but improve reliability.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.d2of5redundancy</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.d2of5redundancy</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###dataBufferSize

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the number of bytes allocated to receive the scanned barcode. This parameter is designed to be used primarily with image based symbologies and should not be modified unless absolutely necessary (eg. Signature).
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.dataBufferSize</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.dataBufferSize</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###datamatrix

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for Datamatrix barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.datamatrix</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.datamatrix</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###dbpMode

####Type
<span class='text-info'>STRING</span> 
####Description
Describes the type of Digital Bar Pulse (DBP) being produced by the scan engine.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.DBP_NORMAL - String: normal Tells the scan engine to produce normal DBP.
* Constant: EB.Barcode.DBP_COMPOSITE - String: composite Tells the scan engine to produce composite DBP, which is 2 different sets of DBP data multiplexed together for better decode performance. In order to enable this mode it must be supported by the scanner.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.dbpMode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.dbpMode</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Laser Scanners on Symbol Technologies' devices)

###decodeDuration

####Type
<span class='text-info'>INTEGER</span> 
####Description
The duration of the device beeper when a barcode is scanned, in milliseconds.
####Params
<p><strong>Default:</strong> 250</p>
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.decodeDuration</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.decodeDuration</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###decodeFrequency

####Type
<span class='text-info'>INTEGER</span> 
####Description
The frequency of the device beeper when a barcode is successfully decoded. This should be within the range of the beeper but the API will accept values in the range 0 to 65535.
####Params
<p><strong>Default:</strong> 3000</p>
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.decodeFrequency</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.decodeFrequency</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###decodeLEDFeedback

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enable and Disable Decode LED notification. When set to true, The Decode LED Notification will glow RED on trigger press and glow Green when the scanner successfully decodes a barcode.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.decodeLEDFeedback</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.decodeLEDFeedback</code> 



####Platforms

* Android
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###decodeLEDFeedbackMode

####Type
<span class='text-info'>STRING</span> 
####Description
Specifies the Decode LED Notification Mode on the host device and remote scanner. This Barcode Property is only applicable for external scanner. It supports on Android with EMDK version 6.3 and above.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.LEDMODE_BOTH - String: both LED Notification is given by both Device and the remote scanner.
* Constant: EB.Barcode.LEDMODE_DISABLE - String: disable LED Notification is disabled on both Device and the remote scanner.
* Constant: EB.Barcode.LEDMODE_LOCAL - String: local LED Notification is given by the Device.
* Constant: EB.Barcode.LEDMODE_REMOTE - String: remote LED Notification is given by the External Scanner like RS507 BT Scanner.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.decodeLEDFeedbackMode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.decodeLEDFeedbackMode</code> 



####Platforms

* Android
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###decodeLEDTime

####Type
<span class='text-info'>INTEGER</span> 
####Description
Maximum time in milliseconds that the Decode LED notification will glow a green light when the scanner successfully decodes a barcode. The value is specified in the range 0 to 1000 in milliseconds. 
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.decodeLEDTime</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.decodeLEDTime</code> 



####Platforms

* Android
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###decodeScreenNotification

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or Disables Displaying a screen overlay as a notification on a successful decode.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.decodeScreenNotification</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.decodeScreenNotification</code> 



####Platforms

* Android
* Zebra Devices Only(Symbol Technologies' scanners.)

###decodeScreenNotificationTime 

####Type
<span class='text-info'>INTEGER</span> 
####Description
Sets the length of time (in milliseconds) to display the screen overlay upon successful decode. The value is specified in the range 0 to 1000 in milliseconds.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.decodeScreenNotificationTime </code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.decodeScreenNotificationTime </code> 



####Platforms

* Android
* Zebra Devices Only(Symbol Technologies' scanners.)

###decodeScreenTranslucencyLevel

####Type
<span class='text-info'>INTEGER</span> 
####Description
Sets the percentage of translucency of decode screen notification overlay. This value can be from 20 to 50 with a step of 5.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.decodeScreenTranslucencyLevel</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.decodeScreenTranslucencyLevel</code> 



####Platforms

* Android
* Zebra Devices Only(Symbol Technologies' scanners.)

###decodeSound

####Type
<span class='text-info'>STRING</span> 
####Description
Path to a local wave file to be played when the scanner successfully decodes a barcode. The wave file must reside on the device. This will override the existing scanner beeper settings. 
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.decodeSound</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.decodeSound</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###decodeVolume

####Type
<span class='text-info'>INTEGER</span> 
####Description
The volume of the device beeper when a barcode is scanned. Volume specified using 0 to 5, with 5 being the loudest. The value of 0 is device dependent, some Windows Mobile / CE devices interpret this as the quietest volume; if you wish to completely disable the beeper on scan please set decodeSound to an empty or invalid sound file.
####Params
<p><strong>Default:</strong> 5</p>
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.decodeVolume</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.decodeVolume</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###differentSymbolTimeout

####Type
<span class='text-info'>INTEGER</span> 
####Description
When the aimType:continuousRead property is applied this value defines the interval between which different barcodes can be scanned. The value is specified in milliseconds, use 0 to indicate no interval between successive reads. Use this setting to allow time for the operator to re-aim the device between successive scans. It supports on Android with EMDK version 6.3 and above.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.differentSymbolTimeout</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.differentSymbolTimeout</code> 



####Platforms

* Android
* Windows Mobile
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###digimarcDecoding

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the Digimarc decoding.
####Params
<p><strong>Default:</strong> false</p>
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.digimarcDecoding</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.digimarcDecoding</code> 



####Platforms

* Android
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###disableScannerDuringNavigate

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
By default if you have enabled the Scanner on a page, through either JavaScript or Ruby and navigate to a new page the Scanner will automatically disable. To override this behavior you can set this option to false and once enabled the Scanner will remain so in the foreground application until you disable it.
####Params
<p><strong>Default:</strong> true</p>
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.disableScannerDuringNavigate</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.disableScannerDuringNavigate</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###disconnectBtOnDisable

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Forces the scanner to disconnect from the terminal when it is 'disabled'. Since the scanner is disabled when you navigate to a new page, set this value to false if you want to maintain the bluetooth connection to your remote scanner.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.disconnectBtOnDisable</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.disconnectBtOnDisable</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Bluetooth Scanners on Symbol Technologies' devices)

###disconnectOnExit

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
It indicates to the scan driver to disconnect any existing connection between an external Bluetooth scanner and the terminal. When a BT scanner establishes connection to the terminal it will not automatically disconnect when the scanner is disabled by calling Scanner.disable(). If this parameter is set the scanning driver will force the scanner to disconnect. Please Note that If this parameter is set to true, it will not fire the DISCONNECTED state.It supports on Android with EMDK version 6.6 and above.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.disconnectOnExit</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.disconnectOnExit</code> 



####Platforms

* Android
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners)

###displayBtAddressBarcodeOnEnable

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
If set to true the bluetooth address will be displayed as a barcode on the screen during the pairing process, initiated by calling 'enable' on a bluetooth scanner. Not all devices support this functionality. Note you must specify this parameter before or within the call to 'enable'.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.displayBtAddressBarcodeOnEnable</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.displayBtAddressBarcodeOnEnable</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Bluetooth Scanners on Symbol Technologies' devices)

###dotCode

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for the Dotcode decoder. It supports on Android with EMDK version 7.2 and above.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.dotCode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.dotCode</code> 



####Platforms

* Android
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###dotCodeInverse

####Type
<span class='text-info'>STRING</span> 
####Description
This property allows the user to select decoding on inverse Dotcode barcodes. It supports on Android with EMDK version 7.2 and above.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.DOTCODEINVERSE_AUTO - String: AUTO It allows decoding of both positive as well as inverse Dotcode symbologies.
* Constant: EB.Barcode.DOTCODEINVERSE_DISABLED - String: DISABLED It disables decoding of inverse Dotcode symbologies.
* Constant: EB.Barcode.DOTCODEINVERSE_ENABLED - String: ENABLED it enables decoding of only inverse Dotcode symbologies.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.dotCodeInverse</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.dotCodeInverse</code> 



####Platforms

* Android
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###dotCodeMirror

####Type
<span class='text-info'>STRING</span> 
####Description
This property allows the user to select decoding on mirrored Dotcode barcodes. It supports on Android with EMDK version 7.2 and above.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.DOTCODEMIRROR_AUTO - String: AUTO It allows decoding of both positive as well as mirror Dotcode symbologies.
* Constant: EB.Barcode.DOTCODEMIRROR_DISABLED - String: DISABLED It disables decoding of mirror Dotcode symbologies.
* Constant: EB.Barcode.DOTCODEMIRROR_ENABLED - String: ENABLED it enables decoding of only mirror Dotcode symbologies.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.dotCodeMirror</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.dotCodeMirror</code> 



####Platforms

* Android
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###dpmMode

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Allows Direct Part Marking (DPM) barcodes to be read When true, but may adversely affect overall decoding performance. DPM is a way of stamping barcodes directly on physical objects and is only available on DPM terminals.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.dpmMode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.dpmMode</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Imager / Camera Scanners on Symbol Technologies' devices. The scanning engine must support DPM barcodes.)

###dutchPostal

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for Dutch Postal barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.dutchPostal</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.dutchPostal</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###ean13

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for EAN 13 barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.ean13</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.ean13</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###ean8

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for EAN 8 barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.ean8</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.ean8</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###ean8convertToEan13

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, EAN 8 barcodes will be converted to EAN 13 and EAN 13 parameters used.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.ean8convertToEan13</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.ean8convertToEan13</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###enableGS1

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enable or disable the GS1 decoding of UDI. It supports on Android with EMDK version 6.6 and above.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.enableGS1</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.enableGS1</code> 



####Platforms

* Android
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###enableHIBCC

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enable or disable the HIBCC decoding of UDI. It supports on Android with EMDK version 6.6 and above.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.enableHIBCC</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.enableHIBCC</code> 



####Platforms

* Android
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###enableICCBBA

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enable or disable the ICCBBA decoding of UDI. It supports on Android with EMDK version 6.6 and above.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.enableICCBBA</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.enableICCBBA</code> 



####Platforms

* Android
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###enableTimeout

####Type
<span class='text-info'>INTEGER</span> 
####Description
Configures the time (in seconds) allowed to pair with the external bluetooth scanner after calling the 'enable()' method. You must specify this parameter before calling 'enable' to change the default.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.enableTimeout</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.enableTimeout</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Bluetooth Scanners on Symbol Technologies' devices)

###focusMode

####Type
<span class='text-info'>STRING</span> 
####Description
Sets the focus mode in use.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.FOCUS_FIXED - String: fixed Use fixed focus.
* Constant: EB.Barcode.FOCUS_AUTO - String: auto Use auto focus.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.focusMode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.focusMode</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Imager / Camera Scanners on Symbol Technologies' devices)

###friendlyName

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
Returns the friendly name associated with the scanner.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.friendlyName</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.friendlyName</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###gridMatrix

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for the GridMatrix decoder. It supports on Android with EMDK version 7.3 and above.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.gridMatrix</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.gridMatrix</code> 



####Platforms

* Android
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###gridMatrixInverse

####Type
<span class='text-info'>STRING</span> 
####Description
This property allows the user to select decoding on inverse GridMatrix barcodes. It supports on Android with EMDK version 7.3 and above.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.GRIDMATRIXINVERSE_AUTO - String: AUTO It allows decoding of both positive as well as inverse GridMatrix symbologies.
* Constant: EB.Barcode.GRIDMATRIXINVERSE_DISABLED - String: DISABLED It disables decoding of inverse GridMatrix symbologies.
* Constant: EB.Barcode.GRIDMATRIXINVERSE_ENABLED - String: ENABLED it enables decoding of only inverse GridMatrix symbologies.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.gridMatrixInverse</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.gridMatrixInverse</code> 



####Platforms

* Android
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###gridMatrixMirror

####Type
<span class='text-info'>STRING</span> 
####Description
This property allows the user to select decoding on mirrored GridMatrix barcodes. It supports on Android with EMDK version 7.3 and above.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.GRIDMATRIXMIRROR_AUTO - String: AUTO It allows decoding of both positive as well as mirror GridMatrix symbologies.
* Constant: EB.Barcode.GRIDMATRIXMIRROR_DISABLED - String: DISABLED It disables decoding of mirror GridMatrix symbologies.
* Constant: EB.Barcode.GRIDMATRIXMIRROR_ENABLED - String: ENABLED it enables decoding of only mirror GridMatrix symbologies.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.gridMatrixMirror</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.gridMatrixMirror</code> 



####Platforms

* Android
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###gs1Datamatrix

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for GS1 Datamatrix barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.gs1Datamatrix</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.gs1Datamatrix</code> 



####Platforms

* Android
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###gs1LimitedSecurityLevel

####Type
<span class='text-info'>STRING</span> 
####Description
Specifies the Security level addition of GS1 DataBar lim decoder. Increasing the level of security may result in reduced aggressiveness in scanning, so choose only that level of security necessary. It supports on Android with EMDK version 6.6 and above.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.LEVEL_1 - String: LEVEL_1 No clear margin required. This complies with the original GS1 standard, yet might result in erroneous decoding of the DataBar Limited barcode when scanning some UPC symbols that start with digits "9" and "7".
* Constant: EB.Barcode.LEVEL_2 - String: LEVEL_2 Automatic risk detection. This level of security may result in erroneous decoding of DataBar Limited barcodes when scanning some UPC symbols.
* Constant: EB.Barcode.LEVEL_3 - String: LEVEL_3 Security level reflects newly proposed GS1 standard that requires a 5 times trailing clear margin.
* Constant: EB.Barcode.LEVEL_4 - String: LEVEL_4 Security level extends beyond the standard required by GS1. This level of security requires a 5 times leading and trailing clear margin.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.gs1LimitedSecurityLevel</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.gs1LimitedSecurityLevel</code> 



####Platforms

* Android
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###gs1QrCode

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for GS1 QrCode barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.gs1QrCode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.gs1QrCode</code> 



####Platforms

* Android
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###gs1dataBar

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for GS1 DataBar barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance. This symbology was previously known as rss.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.gs1dataBar</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.gs1dataBar</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###gs1dataBarExpanded

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for GS1 Databar Expanded barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance. This symbology was previously known as rssExp.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.gs1dataBarExpanded</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.gs1dataBarExpanded</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###gs1dataBarLimited

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for GS1 Databar Limited barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance. This symbology was previously known as rssLim.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.gs1dataBarLimited</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.gs1dataBarLimited</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###hanXin

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for the HanXin decoder. It supports on Android with EMDK version 6.6 and above.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.hanXin</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.hanXin</code> 



####Platforms

* Android
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###hanXinInverse

####Type
<span class='text-info'>STRING</span> 
####Description
This property allows the user to select decoding on inverse HanXin barcodes. It supports on Android with EMDK version 6.6 and above.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.HANXININVERSE_AUTO - String: AUTO It allows decoding of both positive as well as inverse HanXin symbologies.
* Constant: EB.Barcode.HANXININVERSE_DISABLED - String: DISABLED It disables decoding of inverse HanXin symbologies.
* Constant: EB.Barcode.HANXININVERSE_ENABLED - String: ENABLED it enables decoding of only inverse HanXin symbologies.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.hanXinInverse</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.hanXinInverse</code> 



####Platforms

* Android
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###hapticFeedback

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Controls the haptic feedback on decode. This means that if this is set to true, then the device will vibrate when a decode occurs.
####Params
<p><strong>Default:</strong> true</p>
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.hapticFeedback</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.hapticFeedback</code> 



####Platforms

* Android
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###i2of5

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for I2of5 barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.i2of5</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.i2of5</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###i2of5convertToEan13

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, EAN 8 barcodes will be converted to EAN 13 and EAN 13 parameters used.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.i2of5convertToEan13</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.i2of5convertToEan13</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###i2of5febraban

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, inserts special check characters in the transmitted data stream of Interleaved 2 of 5 barcodes which are of length 14 and meet specific Febraban criteria.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.i2of5febraban</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.i2of5febraban</code> 



####Platforms

* Android
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###i2of5maxLength

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the maximum number of allowable characters in a I2of5 barcode. If your application only expects barcode lengths in a certain range, reducing the allowed range can improve scanning performance. Allowed values are 0 to 55.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.i2of5maxLength</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.i2of5maxLength</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###i2of5minLength

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the minimum number of allowable characters in a I2of5 barcode. If your application only expects barcode lengths in a certain range, reducing the allowed range can improve scanning performance. Allowed values are 0 to 55.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.i2of5minLength</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.i2of5minLength</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###i2of5reducedQuietZone

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Flag to Enable or Disable decoding of I2of5 barcodes with reduced quiet zones. If you enable, select a OneDQuietZoneLevel to set the effort level.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.i2of5reducedQuietZone</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.i2of5reducedQuietZone</code> 



####Platforms

* Android
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###i2of5redundancy

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Sets the I2of5 Redundancy property, if set the barcode must be decoded twice before being accepted. This will slow scanning but improve reliability.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.i2of5redundancy</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.i2of5redundancy</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###i2of5reportCheckDigit

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, the barcode check digit(s) will be reported for scanned I2of5 barcodes.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.i2of5reportCheckDigit</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.i2of5reportCheckDigit</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###i2of5verifyCheckDigit

####Type
<span class='text-info'>STRING</span> 
####Description
Enables the verification of the I2of5 check digit.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.I2OF5_VERIFY_NONE - String: none Disables verification of the check digit.
* Constant: EB.Barcode.I2OF5_VERIFY_USS - String: uss Enables the USS format for the check digit.
* Constant: EB.Barcode.I2OF5_VERIFY_OPCC - String: opcc Enables the OPCC format for the check digit.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.i2of5verifyCheckDigit</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.i2of5verifyCheckDigit</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###illuminationBrightness

####Type
<span class='text-info'>STRING</span> 
####Description
Specifies the illumination brightness level. Minimum value is 0 and maximum value is 10.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.illuminationBrightness</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.illuminationBrightness</code> 



####Platforms

* Android
* Zebra Devices Only(Imager Scanners on Symbol Technologies devices)

###illuminationMode

####Type
<span class='text-info'>STRING</span> 
####Description
Selects the illumination mode to use.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.ILLUMINATION_AUTO - String: auto Auto-exposure algorithms will decide whether illumination is required. Not currently supported on Android.
* Constant: EB.Barcode.ILLUMINATION_ALWAYS_ON - String: alwaysOn External illumination is always on.
* Constant: EB.Barcode.ILLUMINATION_ALWAYS_OFF - String: alwaysOff External illumination is always off.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.illuminationMode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.illuminationMode</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Imager / Camera Scanners on Symbol Technologies devices)

###instantReporting

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables/Disables instantaneous reporting of unique barcodes. Enabling this parameter will ignore the value of multiBarcodeParams.barcodeCount param and will report the scanned data to the user instantaneously, without waiting to end the scanning session.
####Params
<p><strong>Default:</strong> false</p>
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.instantReporting</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.instantReporting</code> 



####Platforms

* Android
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###invalidDecodeFrequency

####Type
<span class='text-info'>INTEGER</span> 
####Description
The frequency of the device beeper when a barcode is scanned but not successfully decoded. This should be within the range of the beeper but the API will accept values in the range 0 to 65535.
####Params
<p><strong>Default:</strong> 2500</p>
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.invalidDecodeFrequency</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.invalidDecodeFrequency</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###invalidDecodeSound

####Type
<span class='text-info'>STRING</span> 
####Description
Path to a local wave file to be played when a barcode is scanned but not successfully decoded. This setting overrides the scanner beeper.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.invalidDecodeSound</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.invalidDecodeSound</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###inverse1dMode

####Type
<span class='text-info'>STRING</span> 
####Description
Allows the user to select inverse 1D barcodes for decoding.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.INVERSE_ENABLED - String: enabled Inverse 1D symbology decoding is enabled.
* Constant: EB.Barcode.INVERSE_DISABLED - String: disabled Inverse 1D symbology decoding is disabled.
* Constant: EB.Barcode.INVERSE_AUTO - String: auto Allows decoding of both positive and inverse 1D symbologies.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.inverse1dMode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.inverse1dMode</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Scanners on Symbol Technologies' devices. The scanning engine must support inverse barcodes)

###japPostal

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for Japanese Postal barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.japPostal</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.japPostal</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###klasseEins

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the Klasse Eins laser on time function.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.klasseEins</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.klasseEins</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Laser Scanners on Symbol Technologies' devices)

###korean3of5

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for Korean 3of5 barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.korean3of5</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.korean3of5</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###korean3of5maxLength

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the maximum number of allowable characters in a Korean 3of5 barcode. If your application only expects barcode lengths in a certain range, reducing the allowed range can improve scanning performance. Allowed values are 0 to 55.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.korean3of5maxLength</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.korean3of5maxLength</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###korean3of5minLength

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the minimum number of allowable characters in a Korean 3of5 barcode. If your application only expects barcode lengths in a certain range, reducing the allowed range can improve scanning performance. Allowed values are 0 to 55.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.korean3of5minLength</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.korean3of5minLength</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###korean3of5redundancy

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Sets Korean 3of5 Redundancy property, if set the barcode must be decoded twice before being accepted. This will slow scanning but improve reliability.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.korean3of5redundancy</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.korean3of5redundancy</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###lcdMode

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Controls whether LCD Mode is enabled on the scanner. LCD Mode makes it easier to scan barcodes off of LCD screens (like mobile device screens)
####Params
<p><strong>Default:</strong> false</p>
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.lcdMode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.lcdMode</code> 



####Platforms

* Android
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###linearSecurityLevel

####Type
<span class='text-info'>STRING</span> 
####Description
Describes the linear security level used during decoding. This determines the number of times a barcode must be read before it is decoded. If the successive reads of the barcode do not match, it will not be decoded.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.REDUNDANCY_AND_LENGTH - String: redundancyAndLength Double redundancy based on redundancy flags and code length. Only applicable to laser scanners, not BlockBuster imager scanners. Not supported on Android with EMDK version 3.1 and above.
* Constant: EB.Barcode.SHORT_OR_CODABAR - String: shortOrCodabar Double redundancy if short barcode or Codabar.
* Constant: EB.Barcode.LONG_AND_SHORT - String: longAndShort Double redundancy for long barcodes, triple for short barcodes.
* Constant: EB.Barcode.ALL_TWICE - String: allTwice Double redundancy for all barcodes.
* Constant: EB.Barcode.ALL_THRICE - String: allThrice Triple redundancy for all barcodes.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.linearSecurityLevel</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.linearSecurityLevel</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###lowBatteryScan

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Set to false to disable scanning when the battery is low / critical or set to true to enable it.
####Params
<p><strong>Default:</strong> false</p>
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.lowBatteryScan</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.lowBatteryScan</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###macroMicroPdf

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for MacroMicroPDF barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.macroMicroPdf</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.macroMicroPdf</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###macroMicroPdfBufferLabels

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
If true, the scanner driver will return the barcode data only after the complete macroMicroPdf sequence has been read. If false, the scanner driver will return each barcode in the macroMicroPdf sequence as it is read.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.macroMicroPdfBufferLabels</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.macroMicroPdfBufferLabels</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###macroMicroPdfConvertToMicroPdf

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
If true, MacroMicroPDF barcodes will be converted to MicroPDF codes.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.macroMicroPdfConvertToMicroPdf</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.macroMicroPdfConvertToMicroPdf</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###macroMicroPdfExclusive

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
If true, the scanner driver will not complete read requests while in the middle of a macroMicroPdf sequence. Once a macroMicroPdf sequence has been started it must be completed or canceled before the scan driver will complete other read requests.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.macroMicroPdfExclusive</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.macroMicroPdfExclusive</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###macroMicroPdfReportAppendInfo

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
If true, the appended info is concatenated to the decoded data before being returned.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.macroMicroPdfReportAppendInfo</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.macroMicroPdfReportAppendInfo</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###macroPdf

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for Macro PDF barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.macroPdf</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.macroPdf</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###macroPdfBufferLabels

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, the scanner driver will return  he barcode data only after the complete macroPdf sequence has been read. If false, the scan driver will return each barcode in the macroPdf sequence as it is read.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.macroPdfBufferLabels</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.macroPdfBufferLabels</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###macroPdfConvertToPdf417

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
If true, MacroPDF barcodes will be converted to PDF417 codes.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.macroPdfConvertToPdf417</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.macroPdfConvertToPdf417</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###macroPdfExclusive

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
If true, the scanner driver will not complete read requests while in the middle of a macroPdf sequence. Once a macroPdf sequence has been started it must be completed or canceled before the scan driver will complete other read requests.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.macroPdfExclusive</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.macroPdfExclusive</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###mailMark

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for MailMark decoder.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.mailMark</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.mailMark</code> 



####Platforms

* Android
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###matrix2of5

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for Matrix 2of5 barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.matrix2of5</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.matrix2of5</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###matrix2of5maxLength

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the maximum number of allowable characters in a Matrix 2of5 barcode. If your application only expects barcode lengths in a certain range, reducing the allowed range can improve scanning performance. Allowed values are 0 to 55.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.matrix2of5maxLength</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.matrix2of5maxLength</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###matrix2of5minLength

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the minimum number of allowable characters in a Matrix 2of5 barcode. If your application only expects barcode lengths in a certain range, reducing the allowed range can improve scanning performance. Allowed values are 0 to 55.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.matrix2of5minLength</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.matrix2of5minLength</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###matrix2of5reportCheckDigit

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, the barcode check digit(s) will be reported for scanned Matrix 2of5 barcodes.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.matrix2of5reportCheckDigit</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.matrix2of5reportCheckDigit</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###matrix2of5verifyCheckDigit

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables verification of the Matrix 2of5 symbology check digit.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.matrix2of5verifyCheckDigit</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.matrix2of5verifyCheckDigit</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###maxiCode

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for Maxicode barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.maxiCode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.maxiCode</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###microPdf

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for Micro PDF barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.microPdf</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.microPdf</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###microQr

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for Micro QR barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.microQr</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.microQr</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###msi

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for MSI barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.msi</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.msi</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###msiCheckDigitScheme

####Type
<span class='text-info'>STRING</span> 
####Description
Specifies the check digit scheme used to verify MSI barcodes.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.MSI_CHECKDIGITS_MOD11 - String: mod11 The first check digit is MOD 11, the second is MOD 10.
* Constant: EB.Barcode.MSI_CHECKDIGITS_MOD10 - String: mod10 Both check digits are MOD 10.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.msiCheckDigitScheme</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.msiCheckDigitScheme</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###msiCheckDigits

####Type
<span class='text-info'>STRING</span> 
####Description
Sets the number of MSI check digits to use.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.MSI_CHECKDIGITS_ONE - String: one Use one check digit for MSI barcodes.
* Constant: EB.Barcode.MSI_CHECKDIGITS_TWO - String: two Use two check digits for MSI barcodes.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.msiCheckDigits</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.msiCheckDigits</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###msiMaxLength

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the maximum number of allowable characters in a MSI barcode. If your application only expects barcode lengths in a certain range, reducing the allowed range can improve scanning performance. Allowed values are 0 to 55.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.msiMaxLength</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.msiMaxLength</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###msiMinLength

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the minimum number of allowable characters in a MSI barcode. If your application only expects barcode lengths in a certain range, reducing the allowed range can improve scanning performance. Allowed values are 0 to 55.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.msiMinLength</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.msiMinLength</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###msiRedundancy

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Sets the MSI Redundancy property, if set the barcode must be decoded twice before being accepted. This will slow scanning but improve reliability.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.msiRedundancy</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.msiRedundancy</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###msiReportCheckDigit

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, the barcode check digit(s) will be reported for scanned MSI barcodes.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.msiReportCheckDigit</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.msiReportCheckDigit</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###oneDQuietZoneLevel

####Type
<span class='text-info'>STRING</span> 
####Description
Specifies the effort at which the decoder will attempt to decode margin-less barcodes. It supports on Android with EMDK version 6.3 and above.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.QZ_LEVEL_0 - String: level_0 The decoder will perform margin decoding as usual.
* Constant: EB.Barcode.QZ_LEVEL_1 - String: level_1 The decoder will perform more aggressively.
* Constant: EB.Barcode.QZ_LEVEL_2 - String: level_2 The decoder requires only one side end of barcode.
* Constant: EB.Barcode.QZ_LEVEL_3 - String: level_3 The decoder can decode anything.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.oneDQuietZoneLevel</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.oneDQuietZoneLevel</code> 



####Platforms

* Android
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###pairAfterScannerReboot

####Type
<span class='text-info'>STRING</span> 
####Description
Enable and disable automatic reconnection after scanner reboot. Applicable to DS3678 Bluetooth scanner only. It supports on Android with EMDK version 6.6 and above.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.PASR_DISABLE - String: DISABLE Don't keep paring Info after bluetooth scanner reboot.
* Constant: EB.Barcode.PASR_ENABLE - String: ENABLE Keep pairing info after bluetooth scanner reboot.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.pairAfterScannerReboot</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.pairAfterScannerReboot</code> 



####Platforms

* Android
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model DS3678 )

###pdf417

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for PDF 417 barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.pdf417</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.pdf417</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###picklistEx

####Type
<span class='text-info'>STRING</span> 
####Description
Allows the imager or camera to decode only the barcode that is directly under the cross-hair (+)/center of the reticle part of the pattern. This feature is useful in applications where multiple barcodes may appear in the field of view during a decode session and only one of them is targeted for decode. It supports on Android with EMDK version 6.3 and above.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.PICKLISTEX_DISABLED - String: disabled Disables Picklist mode. Any barcode within the field of view can be decoded.
* Constant: EB.Barcode.PICKLISTEX_HARDWARE_RETICLE - String: hardwareReticle Enables the HARDWARE Picklist mode so that only the barcode that is directly under the cross-hair or center of reticle is decoded. This is useful when used in conjunction with the static and dynamic reticle viewfinder modes. This mode is not applicable when there is no projected reticle like camera scanning.
* Constant: EB.Barcode.PICKLISTEX_SOFTWARE_RETICLE - String: softwareReticle Enables the SOFTWARE Picklist mode so that only the barcode that is directly under the cross-hair or center of reticle is decoded. This is useful when used in conjunction with the static and dynamic reticle viewfinder modes.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.picklistEx</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.picklistEx</code> 



####Platforms

* Android
* Zebra Devices Only(Imager / Camera Scanners on Symbol Technologies' devices)

###picklistMode

####Type
<span class='text-info'>STRING</span> 
####Description
Allows the imager to decode only the barcode that is directly under the cross-hair on Android and center of the reticle on WM/CE. This feature is most useful in applications where multiple barcodes may appear in the field of view during a decode session and only one of them is targeted for decode. When enabled picklistMode will override aimMode or, if no aiming is chosen, and use aimMode:reticle. This mode will also interact with viewfinderMode, see the EMDK for C help file for more information. Enabling picklist mode may adversely affect overall decoding performance.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.PICKLIST_DISABLED - String: disabled Disables picklist mode so any barcode within the field of view can be decoded.
* Constant: EB.Barcode.PICKLIST_HARDWARE_RETICLE - String: hardwareReticle Enables picklist mode so that only the barcode under the projected reticle can be decoded. On Windows, if the imager does not support a projected reticle then the behavior is the same as softwareReticle. On Android, this is only supported for Imager (non-viewfinder) based scanners.
* Constant: EB.Barcode.PICKLIST_SOFTWARE_RETICLE - String: softwareReticle Enables picklist mode so that only the barcode in the center of the image is decoded on WM/CE and under the cross-hair on Android. This is most useful when used in conjunction with static and dynamic reticle viewfinder modes.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.picklistMode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.picklistMode</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Imager / Camera Scanners on Symbol Technologies' devices)

###poorQuality1dMode

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Allows poor quality 1D barcodes to be read When true, but this will adversely affect the overall decoding performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.poorQuality1dMode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.poorQuality1dMode</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Imager / Camera Scanners on Symbol Technologies' devices)

###poorQualityDecodeEffortLevel

####Type
<span class='text-info'>STRING</span> 
####Description
It provides enhancement modes for decoding barcodes of poor or degraded quality. It supports on Android with EMDK version 6.3 and above.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.PQD_LEVEL_0 - String: level_0 Decoding performance on regular 1D and 2D barcodes is not affected.
* Constant: EB.Barcode.PQD_LEVEL_1 - String: level_1 The scanner performance on regular 2-D barcodes is impacted while decoding performance on Tesco Thailand barcode and Suppository barcode is improved.
* Constant: EB.Barcode.PQD_LEVEL_2 - String: level_2 Same as Level_1
* Constant: EB.Barcode.PQD_LEVEL_3 - String: level_3 Same as Level_1.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.poorQualityDecodeEffortLevel</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.poorQualityDecodeEffortLevel</code> 



####Platforms

* Android
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###qrCode

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for QR Code barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.qrCode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.qrCode</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###rasterHeight

####Type
<span class='text-info'>INTEGER</span> 
####Description
Vertical rastering height to use, as a percentage, when rasterMode:openAlways is applied. This value must be between 0 and 100.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rasterHeight</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rasterHeight</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Laser Scanners on Symbol Technologies' devices)

###rasterMode

####Type
<span class='text-info'>STRING</span> 
####Description
Describes the type of vertical rastering to use.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.RASTER_NONE - String: none No vertical rastering.
* Constant: EB.Barcode.RASTER_OPEN_ALWAYS - String: openAlways Vertical rastering is always full open. To adjust the rastering height use the rasterHeight property.
* Constant: EB.Barcode.RASTER_SMART - String: smart Vertical rastering mode is 'Smart'.
* Constant: EB.Barcode.RASTER_CYCLONE - String: cyclone Vertical rastering mode is 'Cyclone'.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rasterMode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rasterMode</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###rsmBatteryCapacity

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
The remaining capacity of the battery, in the range 0 to 100. 'unknown' will be returned if the capacity could not be determined, for example if the scanner had no battery.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmBatteryCapacity</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmBatteryCapacity</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmBatteryId

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
One of 'simple', 'double', 'disabled' or 'unknown'
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmBatteryId</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmBatteryId</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmBatteryStatus

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
Indicates the status of the remote scanner's battery, will be one of 'unknown', 'full', 'medium', 'empty', 'chargingFullRate', 'chargingHalfRate', 'chargingTrickle' or 'discharging'
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmBatteryStatus</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmBatteryStatus</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmBluetoothAddress

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
Bluetooth address as FF:FF:FF:FF:FF:FF where FF is a hex number.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmBluetoothAddress</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmBluetoothAddress</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmBluetoothAuthentication

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
True if authentication is required.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmBluetoothAuthentication</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmBluetoothAuthentication</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmBluetoothAutoReconnect

####Type
<span class='text-info'>STRING</span> 
####Description
Bluetooth reconnection scheme.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.RSM_AUTORECONNECT_NONE - String: none No scheme.
* Constant: EB.Barcode.RSM_AUTORECONNECT_ON_POWER - String: onPower When powered on.
* Constant: EB.Barcode.RSM_AUTORECONNECT_ON_OUT_OF_RANGE - String: onOutOfRange When device goes out of range.
* Constant: EB.Barcode.RSM_AUTORECONNECT_ON_POWER_OUT_OF_RANGE - String: onPowerOutOfRange When powered on or when the device goes out of range.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmBluetoothAutoReconnect</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmBluetoothAutoReconnect</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmBluetoothBeepOnReconnectAttempt

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, scanner will emit 5 beeps every 5 seconds whilst re-connection in progress.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmBluetoothBeepOnReconnectAttempt</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmBluetoothBeepOnReconnectAttempt</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmBluetoothEncryption

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
True if encryption is required.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmBluetoothEncryption</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmBluetoothEncryption</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmBluetoothFriendlyName

####Type
<span class='text-info'>STRING</span> 
####Description
Friendly Bluetooth name, e.g. 'MyBTScanner'
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmBluetoothFriendlyName</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmBluetoothFriendlyName</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmBluetoothHidAutoReconnect

####Type
<span class='text-info'>STRING</span> 
####Description
'neverReconnect', 'reconnectOnData' or 'reconnectImmediately'
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmBluetoothHidAutoReconnect</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmBluetoothHidAutoReconnect</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmBluetoothInquiryMode

####Type
<span class='text-info'>STRING</span> 
####Description
To use a general inquiry mode, 'general' else, 'limited'
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmBluetoothInquiryMode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmBluetoothInquiryMode</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmBluetoothPinCode

####Type
<span class='text-info'>STRING</span> 
####Description
Up to 5 character PIN code used for Bluetooth authentication.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmBluetoothPinCode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmBluetoothPinCode</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmBluetoothPinCodeType

####Type
<span class='text-info'>STRING</span> 
####Description
'UseStored' will use the PIN code stored in the memory of the ring scanner, by default '12345'. 'PromptUser' indicates that the ring scanner should be used to scan 5 alpha numeric barcodes to define the PIN, eg. "1", "2", "3", "4", "5" (for PIN 12345). This parameter is not saved permanently on the ring scanner.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmBluetoothPinCodeType</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmBluetoothPinCodeType</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmBluetoothReconnectionAttempts

####Type
<span class='text-info'>INTEGER</span> 
####Description
How long the scanner tries to re-establish connection if it goes out of range, in seconds. This value must be a multiple of 5 and in the range 30 to 60 seconds.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmBluetoothReconnectionAttempts</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmBluetoothReconnectionAttempts</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmDateOfManufacture

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
Ring scanner date of manufacture as DDMMYY.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmDateOfManufacture</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmDateOfManufacture</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmDateOfService

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
Ring scanner date of service as DDMMYY.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmDateOfService</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmDateOfService</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmDecodeFeedback

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
If true, the remote scanner beeps and illuminates its green LED on a successful decode.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmDecodeFeedback</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmDecodeFeedback</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmDeviceClass

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
The device class of the ring scanner.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmDeviceClass</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmDeviceClass</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmFirmwareVersion

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
Scanner's operating system version.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmFirmwareVersion</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmFirmwareVersion</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmForceSavePairingBarcode

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Force saving the barcode assigned to the device to which the scanner has been paired.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmForceSavePairingBarcode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmForceSavePairingBarcode</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmGoodScansDelay

####Type
<span class='text-info'>INTEGER</span> 
####Description
Delay between good scans in proximity continuous mode, measured in milliseconds. Range 0 to 15000. This value must be a multiple of 100.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmGoodScansDelay</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmGoodScansDelay</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmIgnoreCode128Usps

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Feature for ignoring Code 128 barcodes beginning with 420 and 421.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmIgnoreCode128Usps</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmIgnoreCode128Usps</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmLowBatteryIndication

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Whether or not the ring scanner should give a low battery indication.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmLowBatteryIndication</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmLowBatteryIndication</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmLowBatteryIndicationCycle

####Type
<span class='text-info'>INTEGER</span> 
####Description
Low battery indication cycle time, in seconds. Must be one of 15, 30, 60, 90 or 120.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmLowBatteryIndicationCycle</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmLowBatteryIndicationCycle</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmMems

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
If you press the trigger on an RSM scanner, proximity enabled will be turned off, even though it still reports its self as being turned on if you query the property. In order to use ProximityEnable you need to also have Mems enabled, this is the motion sensor and if you disable Mems the scanner will not function.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmMems</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmMems</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmModelNumber

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
Ring scanner model number.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmModelNumber</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmModelNumber</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmPagingBeepSequence

####Type
<span class='text-info'>INTEGER</span> 
####Description
Range 0 to 15 to specify the pattern for the paging beep sequence.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmPagingBeepSequence</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmPagingBeepSequence</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmPagingEnable

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Specify whether paging the device is enabled.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmPagingEnable</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmPagingEnable</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmProximityContinuous

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Proximity continuous mode.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmProximityContinuous</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmProximityContinuous</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmProximityDistance

####Type
<span class='text-info'>STRING</span> 
####Description
Specify the distance for the proximity feature as 'short', 'medium' or 'long' 
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmProximityDistance</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmProximityDistance</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmProximityEnable

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
If you press the trigger on an RSM scanner, proximity enabled will be turned off, even though it still reports its self as being turned on if you query the property. In order to use ProximityEnable you need to also have Mems enabled, this is the motion sensor and if you disable Mems the scanner will not function.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmProximityEnable</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmProximityEnable</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmScanLineWidth

####Type
<span class='text-info'>STRING</span> 
####Description
The laser scan line width, 'wide' or 'narrow'.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmScanLineWidth</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmScanLineWidth</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmScanTriggerWakeup

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Scanner trigger will wakeup the device from a low power state.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmScanTriggerWakeup</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmScanTriggerWakeup</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###rsmSerialNumber

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
Ring scanner serial number.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.rsmSerialNumber</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.rsmSerialNumber</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Symbol Technologies' Bluetooth barcode scanners, model RS507)

###sameSymbolTimeout

####Type
<span class='text-info'>INTEGER</span> 
####Description
When the aimType:continuousRead property is applied this value defines the interval between which the same barcode can be decoded twice. The value is specified in milliseconds, use 0 to indicate no interval between successive reads. Use this value to prevent accidental duplicate scans. It supports on Android with EMDK version 6.3 and above.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.sameSymbolTimeout</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.sameSymbolTimeout</code> 



####Platforms

* Android
* Windows Mobile
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###scanMode

####Type
<span class='text-info'>STRING</span> 
####Description
 Describes the available scanning modes such as Single Barcode and UDI. This property allows you to set one type at a time. It supports on Android with EMDK version 6.6 and above.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.SCANMODE_SINGLE_BARCODE - String: single_barcode Decode only a single barcode at a time..
* Constant: EB.Barcode.SCANMODE_UDI - String: udi Decode UDI standard barcodes. This will decode AI fields of the barcodes as well. Note that the UDI scanning is only available with Imager based scanners
* Constant: EB.Barcode.SCANMODE_MULTI_BARCODE - String: multi_barcode Decode multiple barcodes at a time..
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.scanMode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.scanMode</code> 



####Platforms

* Android
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###scanTimeout

####Type
<span class='text-info'>INTEGER</span> 
####Description
Maximum time in milliseconds that laser scanners will emit a beam or imager scanners will enable the imager. A value of 0 indicates an infinite timeout. This parameter is compatible with aimType:trigger, aimType:timedHold, aimType:timedRelease and aimType:pressAndRelease. Note that for regulatory reasons scanTimeout is not configurable on all laser / imager scanners. Scan timeout is extent to hardware capabilities and limitations.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.scanTimeout</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.scanTimeout</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###scannerType

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
The type of scanner in use, will be one of 'Camera', 'Imager' or 'Laser'. Camera scanners capture and process an image taken via the devices camera. Imager scanners rely on capturing and processing an image of the barcode via dedicated scanning hardware. Both camera and imager scanners are capable of decoding 1D and 2D barcodes. Laser scanners are only capable of decoding 1D barcodes and rely on a sweeping laser.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.scannerType</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.scannerType</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE(All Scanners)

###sceneDetectionQualifier

####Type
<span class='text-info'>STRING</span> 
####Description
 Used to Activate the Presentation mode of scanning based on a Scene Detection Qualifier. e.g. Proximity sensor input. If not set, default value SceneDetectionQualifier.NONE is used.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.SCENEDETECTIONQUALIFIER_NONE - String: NONE Scene detection starts immediately after scanner read submission. Default value is NONE.
* Constant: EB.Barcode.SCENEDETECTIONQUALIFIER_PROXIMITY_SENSOR_INPUT - String: PROXIMITY_SENSOR_INPUT Scene detection is started upon the assertion received from proximity sensor.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.sceneDetectionQualifier</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.sceneDetectionQualifier</code> 



####Platforms

* Android
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###signature

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for Signature barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance. Signature barcodes return their data in Data URI format, it is recommended you adjust the dataBufferSize and barcodeDataFormat properties when scanning Signature barcodes.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.signature</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.signature</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###signatureImageHeight

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the output height of the captured signature barcode. Signature barcodes return their data in Data URI format, it is recommended you adjust the dataBufferSize and barcodeDataFormat properties when scanning Signature barcodes. Provide a number greater than or equal to 20.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.signatureImageHeight</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.signatureImageHeight</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###signatureImageQuality

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the output quality of the captured signature barcode. Signature barcodes return their data in Data URI format, it is recommended you adjust the dataBufferSize and barcodeDataFormat properties when scanning Signature barcodes. Provide a value between 10 and 100 inclusive.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.signatureImageQuality</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.signatureImageQuality</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###signatureImageWidth

####Type
<span class='text-info'>INTEGER</span> 
####Description
Specifies the output width of the captured signature barcode. Signature barcodes return their data in Data URI format, it is recommended you adjust the dataBufferSize and barcodeDataFormat properties when scanning Signature barcodes. Provide a number greater than or equal to 20.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.signatureImageWidth</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.signatureImageWidth</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###timedAimDuration

####Type
<span class='text-info'>INTEGER</span> 
####Description
Aim duration in milliseconds for aimType:timedHold and aimType:timedRelease. The duration must be less than the scanTimeout. It supports on Android with EMDK version 6.3 and above.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.timedAimDuration</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.timedAimDuration</code> 



####Platforms

* Android
* Windows Mobile
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###tlc39

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for TLC 39 barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.tlc39</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.tlc39</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###triggerConnected

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Only applies to an enabled laser or imaging scanner. Disconnecting the trigger will prevent the scan beam from being emitted, this can temporarily prevent a user from scanning without having to disable the scanner, which can take longer. By default the trigger will be connected when the scanner is first enabled, you do not have to connect it separately. Please note that disconnecting the trigger will also prevent the start method from emitting a laser. This property will only affect the scanner and will have no effect on the 'captureTrigger' API.
####Params
<p><strong>Default:</strong> true</p>
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.triggerConnected</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.triggerConnected</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Scanners on Symbol Technologies' devices)

###triggerType

####Type
<span class='text-info'>STRING</span> 
####Description
List of supported trigger type..
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.HARD - String: hard Hard trigger. When this mode is set, the user has to manually press the trigger on the device after issuing the EB.Barcode.enable() call.
* Constant: EB.Barcode.SOFT_ALWAYS - String: softAlways Soft trigger is used for all pending scans and for future reads issued.
* Constant: EB.Barcode.SOFT_ONCE - String: softOnce Soft trigger is used only once for a pending read or for the next issued read.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.triggerType</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.triggerType</code> 



####Platforms

* Android
* Zebra Devices Only(Imager Scanners on Symbol Technologies' devices)

###trioptic39

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for Trioptic 39 barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.trioptic39</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.trioptic39</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###trioptic39Redundancy

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Sets the Trioptic 39 Redundancy property, if set the barcode must be decoded twice before being accepted. This will slow scanning but improve reliability.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.trioptic39Redundancy</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.trioptic39Redundancy</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###ukPostal

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for UK Postal barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.ukPostal</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.ukPostal</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###ukPostalReportCheckDigit

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, the barcode check digit(s) will be reported for scanned UK Postal barcodes.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.ukPostalReportCheckDigit</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.ukPostalReportCheckDigit</code> 



####Platforms

* Android
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###upcEanBookland

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables decoding of UPC EAN Bookland barcodes.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.upcEanBookland</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.upcEanBookland</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###upcEanBooklandFormat

####Type
<span class='text-info'>STRING</span> 
####Description
Specifies the bookland format to use when decoding UPC EAN Bookland barcodes.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.BOOKLAND_ISBN10 - String: isbn10 Causes 978 bookland barcodes to be reported in 10 digit mode.
* Constant: EB.Barcode.BOOKLAND_ISBN13 - String: isbn13 Causes 978/979 bookland barcodes to be transmitted as EAN13 as per 2007 ISBN-13 protocol.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.upcEanBooklandFormat</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.upcEanBooklandFormat</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###upcEanConvertGs1dataBarToUpcEan

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
If true, RSS barcodes will be converted to UPC/EAN format. For this setting to work UPC/EAN symbologies must be enabled.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.upcEanConvertGs1dataBarToUpcEan</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.upcEanConvertGs1dataBarToUpcEan</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###upcEanCoupon

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables decoding of UPC EAN Coupon barcodes.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.upcEanCoupon</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.upcEanCoupon</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###upcEanCouponReport

####Type
<span class='text-info'>STRING</span> 
####Description
It Used to differentiate between old coupon (UPC/EAN and Code128) and new GS1 DataBar Coupons.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.COUPONREPORT_OLD - String: OLD Scanner will read only the old coupon format.
* Constant: EB.Barcode.COUPONREPORT_NEW - String: NEW Scanner will read only the new GS1 DataBar coupon format.
* Constant: EB.Barcode.COUPONREPORT_BOTH - String: BOTH Scanner will read both old coupon format as well as the new GS1 DataBar coupon format.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.upcEanCouponReport</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.upcEanCouponReport</code> 



####Platforms

* Android
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###upcEanLinearDecode

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Sets the linear decode property.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.upcEanLinearDecode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.upcEanLinearDecode</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###upcEanRandomWeightCheckDigit

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, enables random weight check digit verification.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.upcEanRandomWeightCheckDigit</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.upcEanRandomWeightCheckDigit</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###upcEanRetryCount

####Type
<span class='text-info'>INTEGER</span> 
####Description
Sets the retry count for auto-discriminating for supplementals. The value must be between 2 - 20 inclusive.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.upcEanRetryCount</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.upcEanRetryCount</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###upcEanSecurityLevel

####Type
<span class='text-info'>INTEGER</span> 
####Description
Sets the Security level for decoding UPC EAN barcodes and accepts a value between 0 and 3 inclusive. 0: This setting allows the scanner to operate in its most aggressive state, while providing sufficient security in decoding most 'in-spec' barcodes. 1: This setting eliminates most mis-decodes. 2: Select this option if security level 1 fails to eliminate mis-decodes. 3: Select this option if security level 1 and 2 fail to eliminate mis-decodes. Be advised that selecting level 3 is an extreme measure against mis-decoding and will significantly impair the decoding ability of the scanner.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.upcEanSecurityLevel</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.upcEanSecurityLevel</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###upcEanSupplemental2

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, enables the supplemental barcode decoding. Note you must have upcEanSupplementalMode:always set for this parameter to take effect.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.upcEanSupplemental2</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.upcEanSupplemental2</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###upcEanSupplemental5

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, enables the supplemental barcode decoding. Note you must have upcEanSupplementalMode:always set for this parameter to take effect.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.upcEanSupplemental5</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.upcEanSupplemental5</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###upcEanSupplementalMode

####Type
<span class='text-info'>STRING</span> 
####Description
Describes the UPC EAN Supplemental mode.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.UPCEAN_NONE - String: none Supplementals are ignored.
* Constant: EB.Barcode.UPCEAN_AUTO - String: auto Auto-discriminates supplementals.
* Constant: EB.Barcode.UPCEAN_ALWAYS - String: always Will not decode upc/ean without supplementals.
* Constant: EB.Barcode.UPCEAN_SMART - String: smart The decoder will return the decoded value of the main block right away if it does not belong to any of the supplemental types. If the barcode starts with one of the prefixes it will search the image more aggressively for a supplemental. The scanner will try to scan the supplemental if it is present but if that fails, the main barcode will be returned.
* Constant: EB.Barcode.UPCEAN_379 - String: 378or379 Auto-discriminates supplemental for upc/ean codes starting with 378 or 379. Will disable reading of supplementals for any other upc/ean barcodes not starting with these values. The supplemental will be scanned if present but if scanning fails then the main barcode will be returned.
* Constant: EB.Barcode.UPCEAN_979 - String: 978or979 Auto-discriminates supplemental for upc/ean codes starting with 978 or 979. Will disable reading of supplementals for any other upc/ean barcodes not starting with these values. The supplemental will be scanned if present but if scanning fails then the main barcode will be returned.
* Constant: EB.Barcode.UPCEAN_439 - String: 414or419or434or439 Auto-discriminates supplemental for upc/ean codes starting with 414 or 419 or 434 or 439. Will disable reading of supplementals for any other upc/ean barcodes not starting with these values. The supplemental will be scanned if present but if scanning fails then the main barcode will be returned.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.upcEanSupplementalMode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.upcEanSupplementalMode</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###upca

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for UPCA barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.upca</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.upca</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###upcaPreamble

####Type
<span class='text-info'>STRING</span> 
####Description
Controls the preamble applied to the UPCA barcode.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.UPCA_PREAMBLE_NONE - String: none Applies no preamble to the bar code.
* Constant: EB.Barcode.UPCA_PREAMBLE_SYSTEMCHAR - String: systemChar Applies system character preamble to the bar code.
* Constant: EB.Barcode.UPCA_PREAMBLE_COUNTRY - String: countryAndSystemChars Applies both system and country code preamble to the bar code.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.upcaPreamble</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.upcaPreamble</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###upcaReportCheckDigit

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, the barcode check digit(s) will be reported for scanned UPCA barcodes.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.upcaReportCheckDigit</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.upcaReportCheckDigit</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###upce0

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for UPCE0 barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.upce0</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.upce0</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###upce0convertToUpca

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, scanned UPCE0 barcodes will be converted to UPCA and UPCA parameters used.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.upce0convertToUpca</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.upce0convertToUpca</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###upce0preamble

####Type
<span class='text-info'>STRING</span> 
####Description
Controls the preamble applied to the UPCE0 barcode.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.UPCE0_PREAMBLE_NONE - String: none Applies no preamble to the bar code.
* Constant: EB.Barcode.UPCE0_PREAMBLE_SYSTEMCHAR - String: systemChar Applies system character preamble to the bar code.
* Constant: EB.Barcode.UPCE0_PREAMBLE_COUNTRY - String: countryAndSystemChars Applies both system and country code preamble to the bar code.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.upce0preamble</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.upce0preamble</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###upce0reportCheckDigit

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, the barcode check digit(s) will be reported for scanned UPCE0 barcodes.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.upce0reportCheckDigit</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.upce0reportCheckDigit</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###upce1

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for UPCE1 barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.upce1</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.upce1</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###upce1convertToUpca

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, scanned UPCE1 barcodes will be converted to UPCA and UPCA parameters used.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.upce1convertToUpca</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.upce1convertToUpca</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###upce1preamble

####Type
<span class='text-info'>STRING</span> 
####Description
Controls the preamble applied to the UPCE1 barcode.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.UPCE1_PREAMBLE_NONE - String: none Applies no preamble to the bar code.
* Constant: EB.Barcode.UPCE1_PREAMBLE_SYSTEMCHAR - String: systemChar Applies system character preamble to the bar code.
* Constant: EB.Barcode.UPCE1_PREAMBLE_COUNTRY - String: countryAndSystemChars Applies both system and country code preamble to the bar code.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.upce1preamble</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.upce1preamble</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###upce1reportCheckDigit

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, the barcode check digit(s) will be reported for scanned UPCE1 barcodes.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.upce1reportCheckDigit</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.upce1reportCheckDigit</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###us4state

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for US 4-State barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.us4state</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.us4state</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###us4stateFics

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for US 4-State FICS barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.us4stateFics</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.us4stateFics</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###usPlanet

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for US Planet barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.usPlanet</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.usPlanet</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###usPlanetReportCheckDigit

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, the barcode check digit(s) will be reported for scanned US Planet barcodes.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.usPlanetReportCheckDigit</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.usPlanetReportCheckDigit</code> 



####Platforms

* Android
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###usPostNet

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for US Post Net barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.usPostNet</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.usPostNet</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###usPostNetReportCheckDigit

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
When true, the barcode check digit(s) will be reported for scanned US Post Net barcodes.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.usPostNetReportCheckDigit</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.usPostNetReportCheckDigit</code> 



####Platforms

* Android
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###viewfinderFeedback

####Type
<span class='text-info'>STRING</span> 
####Description
Configures the feedback given after a successful scan. This value is ignored if aimType is set to continuousRead and no feedback will be given. Not supported on Android with EMDK version 3.1 and above.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.VF_FEEDBACK_ENABLED - String: enabled The last image that was successfully decoded is displayed. The time for which the image is displayed can be configured by the viewfinderFeedbackTime parameter.
* Constant: EB.Barcode.VF_FEEDBACK_DISABLED - String: disabled No feedback is given in the viewfinder after a successful decode.
* Constant: EB.Barcode.VF_FEEDBACK_RETICLE - String: reticle The last image that was successfully decoded is displayed along with a red reticle in the center of the image. The time for which the image is displayed can be configured by the viewfinderFeedbackTime parameter.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.viewfinderFeedback</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.viewfinderFeedback</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Camera Scanners on Symbol Technologies' devices)

###viewfinderFeedbackTime

####Type
<span class='text-info'>INTEGER</span> 
####Description
If the viewfinderFeedback:enabled or viewfinderFeedback:reticle are applied then the decoded barcode will remain on the screen for this duration, specified in milliseconds. Not supported on Android with EMDK version 3.1 and above.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.viewfinderFeedbackTime</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.viewfinderFeedbackTime</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Camera Scanners on Symbol Technologies' devices)

###viewfinderHeight

####Type
<span class='text-info'>INTEGER</span> 
####Description
When scanning a barcode using a Camera scanner the viewfinder preview window will be this number of pixels in height. The images displayed in the viewfinder will be scaled as appropriate.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.viewfinderHeight</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.viewfinderHeight</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Camera Scanners on Symbol Technologies' devices)

###viewfinderMode

####Type
<span class='text-info'>STRING</span> 
####Description
Configures the mode of the scanner viewfinder window. This attribute is not supported on all Scanners and will interact with the picklistMode parameter, see the EMDK for C help file for more information.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Barcode.VIEWFINDER_ENABLED - String: enabled Only the viewfinder is enabled (not the reticle). Displays a viewfinder on the screen showing the image being captured by the camera.
* Constant: EB.Barcode.VIEWFINDER_DISABLED - String: disabled The viewfinder will not be displayed during aiming or scanning.
* Constant: EB.Barcode.VIEWFINDER_STATIC_RETICLE - String: staticReticle Displays the viewfinder as well as draws a red reticle in the center of the image which helps with tracking the barcode.
* Constant: EB.Barcode.VIEWFINDER_DYNAMIC_RETICLE - String: dynamicReticle Displays the viewfinder as well as draws a red reticle in the center of the image. If the barcode in the image is 'decodable' the reticle turns green to indicate this. This mode requires a second trigger press to decode the barcode after the reticle turns green. Not supported on Android.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.viewfinderMode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.viewfinderMode</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Camera Scanners on Symbol Technologies' devices)

###viewfinderWidth

####Type
<span class='text-info'>INTEGER</span> 
####Description
When scanning a barcode using a Camera scanner the viewfinder preview window will be this number of pixels wide. The images displayed in the viewfinder will be scaled as appropriate.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.viewfinderWidth</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.viewfinderWidth</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Camera Scanners on Symbol Technologies' devices)

###viewfinderX

####Type
<span class='text-info'>INTEGER</span> 
####Description
When scanning a barcode using a Camera scanner the viewfinder preview window will appear this number of pixels from the left hand side of the screen. The images displayed in the viewfinder will be scaled as appropriate.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.viewfinderX</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.viewfinderX</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Camera Scanners on Symbol Technologies' devices)

###viewfinderY

####Type
<span class='text-info'>INTEGER</span> 
####Description
When scanning a barcode using a Camera scanner the viewfinder preview window will appear this number of pixels from the top of the screen. The images displayed in the viewfinder will be scaled as appropriate.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.viewfinderY</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.viewfinderY</code> 



####Platforms

* Windows Mobile
* Zebra Devices Only(Camera Scanners on Symbol Technologies' devices)

###webcode

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Enables or disables the symbology for Webcode barcodes. If your application does not expect to scan this symbology you should disable it to improve scanning performance. Deprecated in Android 4.1 (Jelly Bean).
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.webcode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.webcode</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###webcodeDecodeGtSubtype

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
If true, the GT Webcode subtype will be decoded. Deprecated in Android 4.1 (Jelly Bean).
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.webcodeDecodeGtSubtype</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.webcodeDecodeGtSubtype</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE
* Zebra Devices Only(Not all scanning engines support all symbologies or all symbology properties)

###zoom

####Type
<span class='text-info'>INTEGER</span> 
####Description
This parameter controls the zoom level for camera. Note: Supported value ranges from 1 to 8 in steps of 1. It is recommended to set Camera Zoom value to 2 for decoding DotCode symbology.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.zoom</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Barcode.zoom</code> 



####Platforms

* Android
* Zebra Devices Only(Symbol Technologies' scanners.)

##Remarks



###Limitation of Scanner and Barcode APIs

The RE 2.x Scanner API and the EB 1.x Barcode API should not be used simultaneously in any Enterprise Browser application; only one or the other should be used.
               

###Omnii XT15

On the Zebra Omnii XT15 device running Windows Mobile/CE, the decode success and failure sounds are not audible unless the decode sound is configured manually in the `Config.xml` file. To configure this setting, see the [<ScanDecodeWav> parameter](../../guide/configreference/#scandecodewav) in the Config.xml Reference Guide.
               

###Bluetooth Scanner Overview

Once associated with the Device a Bluetooth Scanner will remain associated even after losing the BT connection. In order to associate a different Bluetooth scanner with the device it is necessary to scan the 'unpairing' barcode and then invoke the 'disabled' method followed by the 'enabled' method, this will allow you to scan the BT association barcode with a different scanner. You can override this default behavior using the disconnectBtOnDisable property.

The following messages will be received from the Bluetooth Scanner in the bluetoothStatus event:

**'BTScanAssociationBarcode'**

Means the device is ready to be associated with a BT scanner. You must scan the
association barcode. It is only necessary to scan the association
barcode when you first associate a scanner with the device, this pairing will be remembered until
you scan the unpairing barcode.

**'BluetoothConnected'**

The remote scanner has successfully connected to the device.

**'BluetoothDisconnected'**

The remote scanner has become disconnected from the device, this may be due to loss of battery, being out
of range or scanning the 'unpairing' barcode. The scanner will attempt to reconnect automatically for
a period of time once it regains power or goes out of range, if it fails to reconnect after the specified
timeout the reconnect button on the device should be pushed. Once the unpairing barcode is scanned
it is necessary to disable the scanner and then re-enable it before another scanner can be associated.
                

###Bluetooth Scanner Support On Android Devices

On Android platform, Enterprise Browser doesnot support Bluetooth Scanner on TC70 GA1 device. 

On Android platform, Enterprise Browser supports Bluetooth Scanner from Android Kitkat version and above.
               

###Viewfinder Position Parameters

On Symbol Technologies' scanners the scanner viewfinder window is not infinitely resizable, when setting ViewFinderX, ViewFinderY, ViewFinderWidth and ViewFinderHeight ensure you do not exceed the size of the screen and it is recommended to use the same aspect ratio as your device. For applications designed to handle screen rotation it is recommended to use a scan window whose longest side will fit within both the screen width and screen height. If your viewfinder position fails to be applied it is recommended you query your log file to see which parameter is causing trouble, or reposition the window away from the edges of the screen.
                

###Scanning and Camera Interaction
In some device configurations the scanner and camera share the same hardware. Where two modules share the same physical hardware they cannot be enabled simultaneously, in this circumstance once the scanner is enabled it must be disabled before the camera can be used, and vice versa.

###Get Scanner Properties
On WM/CE, it is first necessary to enable the scanner before most of the properties can be retrieved. The case of scanner properties will differ across platforms. On WM/CE, some of the scanner properties are not exposed to set but can be retrieved. On Android, only supported scanner properties can be retrieved in "getAllProperties" method.

###Set Scanner Properties
On WM/CE, for some properties, it is first necessary to apply those properties before enabling the scanner.

###Android Camera Barcode limitation
As google barcode scanning library(Zxing library) supported only in Landscape mode. Barcode scanning window only appears at centre of screen in Landscape mode.

###Devices lacking support
Due to platform limitations this API is not available on the following Zebra Technologies devices on specific platform.  Note: However one can enable legacy scanner service and can scan the respective barcode.

* VH10 CE 6.0

##Examples



###Enable barcode scanner and scan a bacrode
This example shows how to enable your device's barcode scanner and access the data gathered by the scanner. Note that this example assumes that your ebapi-modules.js file is in the same folder as the HTML invoking it. On symbol devices, data wedge needs to be disabled or the Enterprise Browser will not be able to claim any of the scanners.
<pre><code>:::javascript
&lt;head&gt;
    &lt;title&gt;Barcode API Test&lt;/title&gt;
    &lt;script type="text/javascript" charset="utf-8" src="ebapi-modules.js"&gt;&lt;/script&gt;

    &lt;script type="text/javascript"&gt;
        function scanReceived(params){
            // No data or no timestamp, scan failed.
            if(params['data']== "" || params['time']==""){
                document.getElementById('display').innerHTML = "Failed!";
                return;
            }
            // Data and timestamp exist, barcode successful, show results
            var displayStr = "Barcode Data: " + params['data']+"&lt;br&gt;Time: "+params['time'];
            document.getElementById("display").innerHTML = displayStr;
        }

        function enableScanners(){
            EB.Barcode.enable({}, scanReceived);
            // Empty property hash, '{}' loads default values for the scanner.
        }

        function unloadEvent(){
            EB.Barcode.disable();
            // Disable Barcode on unload of page to free it up for other operations.
        }
    &lt;/script&gt;
&lt;/head&gt;

&lt;body onunload='unloadEvent()'&gt;
    &lt;h1&gt;Barcode API Test&lt;/h1&gt;
    &lt;div id="display"&gt;
        Barcode Data: &lt;br&gt;
        Time: &lt;br&gt;
    &lt;/div&gt;
    &lt;button onclick="enableScanners()"&gt;Enable Barcode Scanners&lt;/button&gt;
&lt;/body&gt;
                                
                            
</code></pre>
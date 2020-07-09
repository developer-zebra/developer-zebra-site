---
title: Enterprise Keyboard
productversion: '2.6'
product: Enterprise Browser
layout: guide.html
---

## Overview
The Enterprise Keyboard API provides programmatic access to Zebra's Enterprise Keyboard (EKB 1.2 and higher) soft input device and some of its settings. To use EKB with an Enterprise Browser app, EKB must be enabled and selected as the default input device. This can be done manually using the Settings panel on the Zebra device, programmatically using Zebra's [EMDK](../../../../emdk-for-android) development tools, or remotely using [StageNow](../../../../stagenow) or a compatible MDM. See the [Enterprise Keyboard usage guide](../../../../enterprise-keyboard) for details.

* **This API works only with EKB 1.2 and higher**.
* **This API is not for use with the standard Android (AOSP) keyboard**.

## Enabling the API

There are two methods of enabling the EKB API:

* Include all 'ebapi' modules
* Include only the required API modules

Both are explained below. 

For either method, one or more files must be copied to the device from `/Enterprise Browser/JavaScript Files/Enterprise Browser`, a directory on the computer that contains the Enterprise Browser installation.

### Include all API modules
To include all JavaScript APIs, copy the `ebapi-modules.js` file to a location accessible by the app's files and include a reference to the JavaScript modules file in the app. For instance, to include the modules file in the `index.html`, copy it to the same directory as the app's `index.html` file and add the following line to the HTML's HEAD section:

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi-modules.js"></script>

> The code above defines the EB class within the page. **Note that the path for this file is relative to the current page** (index.html). Any page on which the API modules are required must include a reference to the required .js file(s) in this fashion.

### Include only the required modules
To include individual APIs, first include a reference to the `ebapi.js` file in the HTML and then to the additional required API file(s). For instance, to use the Enterprise Keyboard API, add the following code to the HTML file(s). Again, this assumes that relevant API files have been copied to the same directory as the HTML.

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi.js"></script>
    <script type="text/javascript" charset="utf-8" src="eb.ekb.js"></script>

> In the lines above, notice that `ebapi.js` is included first, followed by `eb.ekb.js`, which is the Enterprise Keyboard API for Enterprise Browser. **Similar coding is required on any HTML page that calls an individual API**.

##Methods

### clearLayout()
Clears the layout set by calling the setLayout API.
				The Keyboard layout must be reset to its default by calling clearLayout API when the particular keyboard is no longer required.
				The user can call this API while going out of focus of a particular input box in webview.
				

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Ekb.clearLayout()</code> 


### connect()

					Connects to Enterprise Keyboard and binds with EKB service. All other APIs to configure the Enterprise Keyboard should be called after EKB service is connected.
						EB.Ekb.connect(connectioncallback);
				

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li>status : <span class='text-info'>STRING</span><p>'connected' or 'disconnected'. </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Ekb.connect()</code> 


### disable()
Disables the Enterprise Keyboard. If the user tries to put focus in input box, or tries to launch the Enterprise Keyboard programtically via the API, 
				Enterprise Keyboard will not appear. EKB must be re-enabled through an EB.Ekb.enable() API call. 
				Enterprise Keyboard will be enabled by default. It is the application developer's responsibilty to enable the API after disabling it. Otherwise Enterprise Keyboard will remain disabled after page navigation until re-enabled using the Enable API call.
		    

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Ekb.disable()</code> 


### disconnect()
Disconnects Enterprise Keyboard and unbinds the EKB service.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Ekb.disconnect()</code> 


### enable()
Enables EKB from a disabled state. User will be able to access Enterprise Keyboard either programmatically or by putting focus inside an input box.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Ekb.enable()</code> 


### getDefault()
This method will return an object that represents the default instance of the API Class. For example Camera.getDefault will return a Camera object that represents the default camera.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>SELF_INSTANCE</span></p><ul></ul>

####Returns
Synchronous Return:

* SELF_INSTANCE : Default object of Module.

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Ekb.getDefault()</code> 


### setDefault(<span class="text-info">SELF_INSTANCE: EB.Ekb</span> defaultInstance)
This method allows you to set the attributes of the default object instance by passing in an object of the same class.

####Parameters
<ul><li>defaultInstance : <span class='text-info'>SELF_INSTANCE: EB.Ekb</span><p>An instance object that is of the same class. </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Ekb.setDefault(<span class="text-info">SELF_INSTANCE: EB.Ekb</span> defaultInstance)</code> 


### setLayout(<span class="text-info">INTEGER</span> inputType, <span class="text-info">String</span> privateImeOption)
Sets the particular layout for Enterprise Keyboard. The user can configure the Keyboard layout by setting the input type and privateImeOption values. 

####Parameters
<ul><li>inputType : <span class='text-info'>INTEGER</span><p>The input type to be set for Enterprise Keyboard for getting the input type as Text when set to 1, Number when set to 2, Phone when set to 3 and DateTime when set to 4. See the link below for all other available input types.
						https://developer.android.com/reference/android/text/InputType.html
						 </p></li><li>privateImeOption : <span class='text-info'>String</span><p>The only value currently suppported is "scan," which will bring the  Enterprise Keyboard to the foreground with a scan trigger view.
						 </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Ekb.setLayout(<span class="text-info">INTEGER</span> inputType, <span class="text-info">String</span> privateImeOption)</code> 

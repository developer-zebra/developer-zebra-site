---
title: EzNFC
productversion: '1.6'
product: Enterprise Browser
layout: guide.html
---


## Overview
This API is used to enable/disable the NFC Adapter and read NFC Tags. **The EzNFC API is currently supported on Android only**.
## Enabling the API
There are two ways to enable Enterprise Browser APIs: 

* Include all 'ebapi' modules
* Include only the required API modules

Both methods are explained below. 

Either way, the included files will be from: 
`/Enterprise Browser/JavaScript Files/Enterprise Browser`,
a directory on the computer that contains the Enterprise Browser installation.

### Include all JS API modules
To include all JavaScript APIs, copy the `ebapi-modules.js` file to a location accessible by your app's files and include the JavaScript modules file in your app. For instance, to include the modules file in your `index.html`, copy the file to the same directory as your index.html and add the following line to the HEAD section of your index.html file:

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi-modules.js"></script>

> This will define the EB class within the page. **Note that the path for this file is relative to the current page** (index.html). Any page on which the modules are required will need to have the required .js file(s) included in this fashion.

### Include only the required modules

To include individual APIs, you must first include the `ebapi.js` in your HTML, and then the additional required API file(s). For instance, to use the EzNFC API, add the following code to the HTML file(s). Again, this assumes that relevant API files have been copied to the same directory as the HTML.

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi.js"></script>
    <script type="text/javascript" charset="utf-8" src="eb.eznfc.js"></script>

> In the code lines above, notice that `ebapi.js` is included first, followed by `eb.eznfc.js`, which is the EzNFC API for Enterprise Browser. **This coding is required on each HTML page whenever an individual API will be called from that page**.

        


##Methods



### disableRead()
Disables NFC read of the application.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.EzNFC.disableRead()</code> 


### enableAdapter()
Navigates to device NFC Adapter settings screen if device's NFC Adapter is not enabled.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.EzNFC.enableAdapter()</code> 


### enableRead()
Enables NFC read of the application if device supports NFC.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li>Type : <span class='text-info'>STRING</span><p>The Type of NFC Tag that has been read </p></li><li>ID : <span class='text-info'>STRING</span><p>The ID of the Tag that has been read </p></li><li>Payload : <span class='text-info'>STRING</span><p>Payload is the data overall data of NFC Tag </p></li><li>TNF : <span class='text-info'>STRING</span><p>TNF is last 3 bits of Payload </p></li><li>EncodingFormat  : <span class='text-info'>STRING</span><p>Text encoding format applied </p></li><li>data : <span class='text-info'>STRING</span><p>The String data that is read from Tag </p></li><li>TagIDHexa : <span class='text-info'>STRING</span><p>NFC Tag id in Hexacode </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.EzNFC.enableRead()</code> 


##Properties



###isEnabled

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Detects whether the NFC Adapter is enabled. Returns true if the NFC Adapter is enabled.
####Params
<p><strong>Default:</strong> false</p>
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.EzNFC.isEnabled</code>



####Platforms

* Android

###isSupported

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Determines whether NFC is supported on the device. Returns true if NFC is supported.
####Params
<p><strong>Default:</strong> false</p>
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.EzNFC.isSupported</code>



####Platforms

* Android

##Remarks



###General

                    
1. NFC reads are only possible when the application is in the foreground.
2. It is mandatory to disable default NFC application of the device before using this API.
3. The APIs are designed to read NON-Secure NFC Tags.
4. The NFC APIs are designed to work in Reader Mode only.
                    
                

###Recommended order of API calls

                    
1.	EB.EzNFC.isSupported;
2.	EB.EzNFC.isEnabled;
3.	EB.EzNFC.enableAdapter();
4.	EB.EzNFC.enableRead();
5.	EB.EzNFC.disableRead();
                    
                

##Examples



###Usage Guide
This example shows how to use the EzNFC API:
<pre><code>:::javascript
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Enterprise Browser NFC API Test&lt;/title&gt;
&lt;script type="text/javascript" charset="utf-8" src="ebapi-modules.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript"&gt;
/*
EB.EzNFC.isSupported
Property to check whether NFC is supported on the device.
Return
	true - if supported
	false - if not supported
*/
function isNfcSupported()
{
	var x=EB.EzNFC.isSupported;
	document.getElementById("demo1").innerHTML = x;
}
/*
EB.EzNFC.isEnabled
Property to check whether NFC Adapter is enabled on the device.
Return
	true - if enabled
	false - if not enabled
*/
function isNfcEnabled()
{
	var x=EB.EzNFC.isEnabled;
	document.getElementById("demo2").innerHTML = x;
}
/*
EB.EzNFC.enableAdapter();
Method to enable the NFC Adapter. Invoking this method brings up the Device settings Activity so user can manually enable the NFC Adapter.
Calling this method has no effect if NFC Adapter is already enabled.
*/
function EnableNfcAdapter()
{
	EB.EzNFC.enableAdapter();
}
/*
enableRead(enableNfcCallback1)
Method to enable NFC Tag Reading.
*/
function EnableNfcRead()
{
	EB.EzNFC.enableRead(enableNfcCallback1);
}
/*
disableRead();
Method to disable NFC Tag Reading.
*/
function DisableNfcRead()
{
	EB.EzNFC.disableRead();
	/* Clearing the div of previously read data*/
	document.getElementById("demo5").innerHTML = "";
}
/*
enableRead(enableNfcCallback1).
User-defined callback with the enableRead() method.
Gets fired when NFC Tag is Read.
Returns Tag
ID
Type
TNF
Payload
EncodingFormat
Result
*/
function enableNfcCallback1(dat) {
	var ID = dat.id;
	var Type = dat.type;
	var TNF = dat.tnf;
	var Payload = dat.payload;
	var EncodingFormat = dat.encodingformat;
	var Result = dat.result;
	var TagIDHexa = dat.tagidhexa;
	var ShowData = "ID:" + ID + "&lt;BR&gt;Type:" + Type + "&lt;BR&gt;TNF:" + TNF + "&lt;BR&gt;Payload:" + Payload + "&lt;BR&gt;EncodingFormat:" + EncodingFormat + "&lt;BR&gt;Result:" + Result + "&lt;BR&gt;TagIDHexa: " + TagIDHexa ;
	
	document.getElementById("demo5").innerHTML = ShowData;
}
&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h2  align="center"&gt;Enterprise Browser NFC API Test&lt;/h2&gt;
&lt;hr&gt;
&lt;br&gt;
&lt;DIV&gt;
&lt;table border=1&gt;
	&lt;tr&gt;
		&lt;td&gt;
			&lt;button onclick="isNfcSupported();"&gt;isSupported&lt;/button&gt;:
		&lt;/td&gt;
		&lt;td&gt;&lt;div id="demo1"&gt;&lt;/div&gt;&lt;/td&gt;
	&lt;/tr&gt;
	&lt;tr&gt;
		&lt;td&gt;
			&lt;button onclick="isNfcEnabled();"&gt;isEnabled&lt;/button&gt;:
		&lt;/td&gt;
		&lt;td&gt;&lt;div id="demo2"&gt;&lt;/div&gt;&lt;/td&gt;
	&lt;/tr&gt;
	&lt;tr&gt;
		&lt;td colspan=2&gt;
			&lt;button onclick="EnableNfcAdapter();"&gt;enableAdapter&lt;/button&gt;:
		&lt;/td&gt;
	&lt;/tr&gt;
	&lt;tr&gt;
		&lt;td colspan=2&gt;
			&lt;button onclick="EnableNfcRead();"&gt;enableRead&lt;/button&gt;:&lt;/td&gt;
		&lt;/td&gt;
	&lt;/tr&gt;
	&lt;tr&gt;
		&lt;td colspan=2&gt;
			&lt;button onclick="DisableNfcRead();"&gt;disableRead&lt;/button&gt;:&lt;/td&gt;
		&lt;/td&gt;
	&lt;/tr&gt;
&lt;/table&gt;
&lt;/DIV&gt;
&lt;DIV id="demo5"&gt;&lt;/DIV&gt;
&lt;/body&gt;
&lt;/html&gt;
                                
                            
</code></pre>

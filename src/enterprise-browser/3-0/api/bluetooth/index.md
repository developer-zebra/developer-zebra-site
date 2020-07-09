---
title: Bluetooth
productversion: '3.0'
product: Enterprise Browser
layout: guide.html
---

## Overview
The Bluetooth API allows Enterprise Browser apps to connect with and disconnect from Bluetooth devices, and to read from and write to (as applicable) connected devices such as printers and scanners.

**Introduced with EB 2.0**. 

**Supported on devices running Android 4.4 KitKat and newer**. 

-----

## Enabling the API

There are two methods of enabling the Bluetooth API:

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
    <script type="text/javascript" charset="utf-8" src="eb.bluetooth.js"></script>

> In the lines above, notice that `ebapi.js` is included first, followed by `eb.bluetooth.js`, which is the EB Bluetooth API. **Similar coding is required on any HTML page that calls this or any other individual API**.

-----

## Methods

### connect()
Used to connect with a Bluetooth device. 

#### Parameters

* **MacAddress**: <span class='text-info'>string</span><br>
MAC address of the Bluetooth device to connect with, expressed as a string of characters 
* **secureConnection**: <span class='text-info'>boolean</span> (true/false)<br>
Determines whether to apply Bluetooth Security to the connection (per device system setting)  
* **CallBackHandler**: <span class='text-info'>callback</span><br>
 * **Return parameters**: <span class='text-info'>HASH</span><br>
 	**Status**: string (“success” or “failure”)<br>
	**Message**: Returns a relevant message:<br>
	* Already connected to BT Device
	* Bluetooth is not available on the running device
	* Bluetooth is Off, Please turn on the Bluetooth
	* Successfully Connected
	* Something went wrong, Connection Failed


#### Example

	:::javascript
	function BTConnect(){
		EB.Bluetooth.connect("00:22:58:2B:B1:BD",true,connectCallback);
	}
	function connectCallback(dat) {
		document.getElementById("myDiv").innerHTML += dat.status;
		document.getElementById("otherDiv").innerHTML += dat. message;
	}

-----

### writeData()
Used to write data to a connected Bluetooth device such as a printer. 

#### Parameters

* **Data**: <span class='text-info'>string</span><br>
Data to be written to the connected Bluetooth device 
* **CallBackHandler**: <span class='text-info'>callback</span><br>
 * **Return parameters**: <span class='text-info'>HASH</span><br>
 	**Status**: string (“success” or “failure”)<br>
	**Message**: Returns a relevant message:<br>
	* Write data successfully
	* Something went wrong, failed to write
	* Failed to write, not connected to any device

#### Example

	:::javascript
	function BTWrite() {
		EB.Bluetooth.writeData("^XA^A2N,30,30,B:CYRI_UB.FNT^FO100,100^FD
		Hello Print ^FS^XZ" ,writeCallback);
	}
	function writeCallback(dat) {
		document.getElementById("myDiv").innerHTML += dat.status;
		document.getElementById("otherDiv").innerHTML += dat. message;
	}

-----

### readData()
Used to read data from the connected Bluetooth device. 

#### Parameters

* **Status**: <span class='text-info'>string</span> (“success” or “failure”)
* **CallBackHandler**: <span class='text-info'>callback</span><br>
 * **Return parameters**: <span class='text-info'>HASH</span><br>
 	**Status**: String (“success” or “failure”)<br>
	**Message**: String <br>
	**Data**: returns data (on success), empty string (on failure)<br>
	* Read data successfully
	* No data to read
	* Something went wrong, failed to read
	* Failed to read, not connected to any device


#### Example
	:::javascript
	function BTRead() {
		EB.Bluetooth.readData(readCallback);
	}
	function readCallback(dat) {
		document.getElementById("myDiv").innerHTML = "
		dat.status+"<br/> Data:"+dat.data +"<br/> message:"+dat.message ;
	}

-----

### disconnect()
Used to disconnect the Bluetooth device most recently connected using the `connect()` method. 

**Note**: If a Bluetooth device is disconnected without calling the `disconnect()` method, a disconnection notification is sent through the `connect()` method callback.

#### Parameters

* **CallBackHandler**: <span class='text-info'>callback</span><br>
 * **Return parameters**: <span class='text-info'>HASH</span><br>
 	**Status**: string (“success” or “failure”)<br>
 	**Message**: Returns a relevant message:<br>
	* Successfully Disconnected
	* Failed to disconnect
	* Not connected to any BT device


#### Example

	:::javascript
	function BTDisconnect() {
		EB.Bluetooth.disconnect(disConnectCallback);
	}
	function disConnectCallback(dat) {
		document.getElementById("myDiv").innerHTML += dat.status;
		document.getElementById("otherDiv").innerHTML += dat. message;
	}

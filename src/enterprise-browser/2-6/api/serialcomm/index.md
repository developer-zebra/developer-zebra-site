---
title: SerialComm
productversion: '2.6'
product: Enterprise Browser
layout: guide.html
---

## Overview
The SerialComm API is an extension to facilitate serial communications using Enterprise Browser.

### Version History
* **Introduced in EB 2.5**

##Methods

### disable()
Disables the serial channel, preventing communication with a remote device.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li>status : <span class='text-info'>STRING</span><p>Connection status will either be success or failure. </p></li><li>message : <span class='text-info'>STRING</span><p>Returns the appropriate message. </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.disable()</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.SerialComm.disable()</code> 


### enable()
Enables a serial channel for the application to communicate with a remote device.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li>status : <span class='text-info'>STRING</span><p>Connection status will either be success or failure. </p></li><li>message : <span class='text-info'>STRING</span><p>Returns the appropriate message. </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.enable()</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.SerialComm.enable()</code> 


### enumerate()
Gets a list of supported ports on the device.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>ARRAY</span></p><ul><ul><li><i>Object</i> : <span class='text-info'>SELF_INSTANCE: EB.SerialComm</span><p> </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can be accessed only using the API class object. 
	* <code>EB.SerialComm.enumerate()</code> 


### getDefault()
Returns an object that represents the default instance of the API class. For example, `Camera.getDefault` returns a Camera object that represents the default camera.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>SELF_INSTANCE</span></p><ul></ul>

####Returns
Synchronous Return:

* SELF_INSTANCE : Default object of Module.

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.SerialComm.getDefault()</code> 


### read(<span class="text-info">STRING</span> readTimeOut)
Reads the available data and returns it immediately. If no data is available, waits until a timeout occurs. Null is returned if no data is available.

####Parameters
<ul><li>readTimeOut : <span class='text-info'>STRING</span><p>Wait for data until timeout. The timeout unit is milli seconds. A timeout of zero means the calling read will wait forever unless interrupted by disable or release. </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li>status : <span class='text-info'>STRING</span><p>Read data status will either be success or failure. </p></li><li>message : <span class='text-info'>STRING</span><p>Returns the appropriate message. </p></li><li>data : <span class='text-info'>STRING</span><p>On Success, it will return the data. </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.read(<span class="text-info">STRING</span> readTimeOut)</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.SerialComm.read(<span class="text-info">STRING</span> readTimeOut)</code> 


### setDefault(<span class="text-info">SELF_INSTANCE: EB.SerialComm</span> defaultInstance)
Allows setting of attributes of the default object instance by passing in an object of the same class.

####Parameters
<ul><li>defaultInstance : <span class='text-info'>SELF_INSTANCE: EB.SerialComm</span><p>An instance object that is of the same class. </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can be accessed only via the API class object. 
	* <code>EB.SerialComm.setDefault(<span class="text-info">SELF_INSTANCE: EB.SerialComm</span> defaultInstance)</code> 


### write(<span class="text-info">STRING</span> data)
Writes  from buffer to the opened communication channel.

####Parameters
<ul><li>data : <span class='text-info'>STRING</span><p> Buffer which contains the data to write. </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li>status : <span class='text-info'>STRING</span><p>Write  data status will either be success or failure. </p></li><li>message : <span class='text-info'>STRING</span><p>Returns the appropriate message. </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Instance Method: This method can be accessed only via an instance object of this class: 
	* <code>myObject.write(<span class="text-info">STRING</span> data)</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.SerialComm.write(<span class="text-info">STRING</span> data)</code> 


##Properties



###ParityBit

####Type
<span class='text-info'>STRING</span> 
####Description
Parity bits are used for detecting error in the transmission.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.SerialComm.EVEN - String: EVEN Sets the parity bit so that the count of bits set is an even number
* Constant: EB.SerialComm.MARK - String: MARK Leaves the parity bit set to 1.
* Constant: EB.SerialComm.NONE - String: NONE No parity check occurs.
* Constant: EB.SerialComm.ODD - String: ODD Sets the parity bit so that the count of bits set is an odd number.
* Constant: EB.SerialComm.SPACE - String: SPACE Leaves the parity bit set to 0.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.ParityBit</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.SerialComm.ParityBit</code> 



####Platforms

* Android

###baudRates

####Type
<span class='text-info'>STRING</span> 
####Description
Specifies the baud at which the communications device operates.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.SerialComm.BR_300 - String: BR_300 Baud rate value is 300
* Constant: EB.SerialComm.BR_1200 - String: BR_1200 Baud rate value is 1200
* Constant: EB.SerialComm.BR_2400 - String: BR_2400 Baud rate value is 2400
* Constant: EB.SerialComm.BR_4800 - String: BR_4800 Baud rate value is 4800
* Constant: EB.SerialComm.BR_9600 - String: BR_9600 Baud rate value is 9600
* Constant: EB.SerialComm.BR_14400 - String: BR_14400 Baud rate value is 14400
* Constant: EB.SerialComm.BR_19200 - String: BR_19200 Baud rate value is 19200
* Constant: EB.SerialComm.BR_28800 - String: BR_28800 Baud rate value is 28800
* Constant: EB.SerialComm.BR_38400 - String: BR_38400 Baud rate value is 38400
* Constant: EB.SerialComm.BR_57600 - String: BR_57600 Baud rate value is 57600
* Constant: EB.SerialComm.BR_115200 - String: BR_115200 Baud rate value is 115200
* Constant: EB.SerialComm.BR_230400 - String: BR_230400 Baud rate value is 230400
* Constant: EB.SerialComm.BR_460800 - String: BR_460800 Baud rate value is 460800
* Constant: EB.SerialComm.BR_921600 - String: BR_921600 Baud rate value is 921600
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.baudRates</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.SerialComm.baudRates</code> 



####Platforms

* Android

###dataBit

####Type
<span class='text-info'>STRING</span> 
####Description
Specifies the number of data bits for each character.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.SerialComm.EIGHT - String: EIGHT Data bits per byte is 8
* Constant: EB.SerialComm.SEVEN - String: SEVEN Data bits per byte is 7.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.dataBit</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.SerialComm.dataBit</code> 



####Platforms

* Android

###flowControlMode

####Type
<span class='text-info'>STRING</span> 
####Description
Specifies the flow control to be used.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.SerialComm.DSR_DTR - String: DSR_DTR Hardware flow control DSR/DTR
* Constant: EB.SerialComm.NONE - String: NONE No flow control
* Constant: EB.SerialComm.RTS_CTS - String: RTS_CTS Hardware flow control RTS/CTS
* Constant: EB.SerialComm.XON_XOFF - String: XON_XOFF Software flow control
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.flowControlMode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.SerialComm.flowControlMode</code> 



####Platforms

* Android

###friendlyName

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
Returns the friendly name associated with the Serial Port.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.friendlyName</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.SerialComm.friendlyName</code> 



####Platforms

* Android

###stopBit

####Type
<span class='text-info'>STRING</span> 
####Description
Specifies the number of stop bits to be used.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.SerialComm.ONE - String: ONE One stop bit is used.
* Constant: EB.SerialComm.ONE_AND_HALF - String: ONE_AND_HALF 1.5 stop bits are used.
* Constant: EB.SerialComm.TWO - String: TWO two stop bits are used.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.stopBit</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.SerialComm.stopBit</code> 



####Platforms

* Android

##Examples



###Enable a Serial Comm  port and read/write data
This example shows how to enable/disable a device and to read and write data. Note that this example assumes that the `ebapi-modules.js` file is in the same folder as the HTML invoking it.

<pre><code>:::javascript

							 &lt;html&gt;
							  &lt;head&gt;
							  &lt;script type="text/javascript" src="ebapi-modules.js"&gt;&lt;/script&gt; 
							  &lt;script&gt;
							  var SerialPort;

								function enumCallBack(params){
									alert("enumCallBack");
										if(params){     // Most of these methods have callbacks but null 'params' sent.
											//alert(params);
										}
										

								}
								function Enumerate()
								{ 
								alert("enumerate");
								  SerialPort = EB.SerialComm.enumerate(enumCallBack); 
									alert(SerialPort[0].getId());		
								}   
								function Enable()
								{ 
									alert("Enable");
									
									EB.SerialComm.enable(enableCallback);
								
								} 

								function enableCallback(dat) {
								alert("enableCallback");
									document.getElementById("myDiv").innerHTML = "Enable:";
									document.getElementById("myDiv").innerHTML += "&lt;li&gt;Status:"+dat.status+"&lt;br/&gt;&lt;li&gt;message:"+dat.message ;
								}
								function disableCallback(dat) {
									alert("disableCallback");
									document.getElementById("myDiv").innerHTML = "Disable:";
									document.getElementById("myDiv").innerHTML += "&lt;li&gt;Status:"+dat.status+"&lt;br/&gt;&lt;li&gt;message:"+dat.message ;
								}	
								function Disable()
								{ 
								  alert("Disable");
								  EB.SerialComm.disable(disableCallback);    
								}   
								function Read()
								{ 
								  alert("Read");
								  EB.SerialComm.read("10000",readCallback);    
								} 
								function readCallback(dat) {
									alert("readCallback");
									document.getElementById("myDiv").innerHTML = "Read Data:&lt;br/&gt;";
									document.getElementById("myDiv").innerHTML += "&lt;li&gt;Status:"+dat.status+"&lt;br/&gt;&lt;li&gt;Data:"+dat.data +"&lt;br/&gt;&lt;li&gt;message:"+dat.message ;
								}
								function Write()
								{ 
								  alert("Write");
								  //SerialPort[0].write("100abcd011");
								  var writeData= document.getElementById("writeData").value;
								  EB.SerialComm.write(writeData,writeCallback);    
								}
									function writeCallback(dat) {
									alert("writeCallback");
									document.getElementById("myDiv").innerHTML = "Write Data:&lt;br/&gt;";
									document.getElementById("myDiv").innerHTML += "&lt;li&gt;Status:"+dat.status+"&lt;br/&gt;&lt;li&gt;message:"+dat.message ;
								}
								function SetConfig()
								{ 
								  alert("SetConfig");
								  alert("Friendly name "+EB.SerialComm.friendlyName);
									EB.SerialComm.baudRates= EB.SerialComm.BR_9600;
									alert("baudRates "+EB.SerialComm.baudRates);
									
									EB.SerialComm.flowControlMode=EB.SerialComm.NONE;
									alert("flowControlMode "+EB.SerialComm.flowControlMode);
									
									
									EB.SerialComm.ParityBit=EB.SerialComm.NONE;
									alert("ParityBit "+EB.SerialComm.ParityBit);	
									
									EB.SerialComm.stopBit=EB.SerialComm.ONE;
									alert("stopBit "+EB.SerialComm.stopBit);	
									
									EB.SerialComm.dataBit=EB.SerialComm.EIGHT;
									alert("dataBit "+EB.SerialComm.dataBit);
								}
							  &lt;/script&gt;
							  &lt;/head&gt; 
							  &lt;body&gt;
								&lt;br&gt;&lt;br&gt; &lt;div id="availableScanners"&gt;EnumScanners goes Here&lt;/div&gt;
								&lt;br&gt;&lt;br&gt; &lt;div id=myJsID&gt;&lt;/div&gt;
								&lt;br&gt;&lt;br&gt; &lt;div id="msg"&gt;Messages Go Here&lt;/div&gt;
								&lt;br&gt;&lt;br&gt; &lt;input type='button' onClick="Enumerate()" value="Enumerate"/&gt;
								&lt;br&gt;&lt;br&gt; &lt;input type='button' onClick="Enable()" value="Enable"/&gt;
								&lt;br&gt;&lt;br&gt; &lt;input type="button" onclick="Disable()" value="Disable"&gt;
								&lt;br&gt;&lt;br&gt; &lt;input type="button" onclick="Read()" value="Read" /&gt;   
								&lt;br&gt;&lt;br&gt; &lt;input type="button" onclick="Write()" value="Write" /&gt;
								&lt;input type="text" id="writeData" value="" /&gt;
								&lt;br&gt;&lt;br&gt; &lt;input type="button" onclick="SetConfig()" value="Set and Get Config" /&gt;
								&lt;div id="myDiv"&gt;&lt;/div&gt;
							  &lt;/body&gt;
							  &lt;/html&gt; 
                                
                            
</code></pre>
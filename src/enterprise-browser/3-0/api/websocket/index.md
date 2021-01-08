---
title: WebSocket
productversion: '3.0'
product: Enterprise Browser
layout: guide.html
---


## Overview
This API provides access to the WebSocket protocol for two-way communication with a remote host.
## Enabling the API
There are two methods of enabling the Websocket API: 

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
To include single APIs, you must first include the `ebapi.js` in your HTML as well as the API file you want to use. For instance, to use the Websocket API, I would add the following code to my HTML file(s), assuming the API files have been copied to the same directory as the HTML.

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi.js"></script>
    <script type="text/javascript" charset="utf-8" src="eb.websocket.js"></script>

The ebapi.js file is necessary for all single API inclusions.




##Methods



### <span class="label label-inverse"> Destructor</span> close()
Closes the connection.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method is a destructor and can only be accessed via the object that was created by the `new` constructor. 
	* <code>myObj.close()</code>


### send(<span class="text-info">STRING</span> message)
Transmits data using the connection.

####Parameters
<ul><li>message : <span class='text-info'>STRING</span><p>Data to transmit. </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.send(<span class="text-info">STRING</span> message)</code>

##Properties



###onclose

####Type
<span class='text-info'>CALLBACK</span> 
####Description
This callback is fired when connection is closed. It's argument provides two members - 'code' and 'reason'.'
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.onclose</code>

###onerror

####Type
<span class='text-info'>CALLBACK</span> 
####Description
This callback is fired if error occurs. Use callback argument's 'message' attribute to access error message.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.onerror</code>

###onmessage

####Type
<span class='text-info'>CALLBACK</span> 
####Description
This callback is fired when message is received. Use callback argument's 'data' attribute to access received message.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.onmessage</code>

###onopen

####Type
<span class='text-info'>CALLBACK</span> 
####Description
This callback is fired when connection is established.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.onopen</code>

###readyState

####Type
<span class='text-info'>INTEGER</span> <span class='label label-warning'>Read Only</span>
####Description
Represents the state of the connection.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.readyState</code>

###url

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
URL passed to Websocket constructor.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.url</code>

##Constants


* CONNECTINGThe connection has not yet been established.
* OPENThe WebSocket connection is established and communication is possible.
* CLOSINGThe connection is going through the closing handshake, or the close() method has been invoked.
* CLOSEDThe connection has been closed or could not be opened.

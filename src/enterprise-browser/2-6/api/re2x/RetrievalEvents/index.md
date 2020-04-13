---
title: Retrieval Events
productversion: '2.6'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---
Values are returned to the caller in RhoElements via events which will cause a navigation to a new URL to occur, a JavaScript function on the page to be invoked or in the case of a RhoElements native application, a Ruby callback function to be invoked.  Each event will in most cases have a number of parameters associated with it which will either be strings or JavaScript arrays and can be accessed in a number of ways as explained below.

##Retrieval Event Syntax

Retrieval tags are specified using the following notation:</p>
	<META HTTP-Equiv="[Module]" content="[RetrievalTag]:url('[URI]')">
Where [URI] can be either a URL or a JavaScript function.</p>

As an example, VersionEvent is a return event of the Application Module and is called in response to the GetVersion() method to provide the installed version of RhoElements.  To navigate to a new URL when the version is retrieved the following syntax can be used, this will navigate to 'version.php' with the data and event contained in the query string.

	<META HTTP-Equiv="Application" content="VersionEvent:url('http://www.page.com/version.php?Data=%s&EventType=%6')">

The equivalent event handled in JavaScript is specified as follows: 
	<META HTTP-Equiv="Application" content="VersionEvent:url('JavaScript:doVersion('%s', '%6');')">

A JavaScript function, 'doVersion(param1, param2)' needs to be defined on the current page which will be invoked each time the version information is requested.  

Events can also be specified using JavaScript notation:
	application.versionEvent = "doVersion('%s', '%6');";

To clear an event previously defined just set it to a blank string, as below:
	application.versionEvent = "";

The equivalent statement in a Ruby would look something like below. In this statement we specify a callback function called versionEvent_callback. Note that in Ruby we do not have to specify a parameter. The event parameters are referenced using the @params hash tag.
	def object_init
		Application.versionEvent=url_for(:action => :versionEvent_callback)
	end
	
	def versionEvent_callback
		eParams = @params
		WebView.execute_js("displayMessage('Product Version : " + eParams['productVersion'] + "');")
	end
	
	
##Event Parameters
Most events have parameters associated with them and these are detailed alongside the event in this help documentation.  E.g. the VersionEvent has the following parameters:
<table class="facelift" style="width:100%" border="1" padding="5px"> 
<col width="3%">
<col width="20%">
<col width="77%">
<tr>
<th class="syntaxHeadings">ID</th>
<th class="syntaxHeadings">Name</th>
<th class="syntaxHeadings">Description</th>
</tr>
<tr>
<td class="syntaxCells evenRow" valign="top">1</td>
<td class="syntaxCells evenRow" valign="top"><b>productVersion</b></td>
<td class="syntaxCells evenRow" style="text-align:left;">A string defining the released version running on the device, this will be in the form v.w.x.y.  E.g. 1.0.0.0</td>
</tr>
<tr>
<td class="syntaxCells" valign="top">2</td>
<td class="syntaxCells" valign="top"><b>hotFixes</b></td>
<td class="syntaxCells" style="text-align:left;">A JavaScript array of strings containing the hot fixes applied.  There may have been multiple hot fixes applied, e.g. ['1','3']</td>
</tr>
<tr>
<td class="syntaxCells evenRow" valign="top">3</td>
<td class="syntaxCells evenRow" valign="top"><b>componentVersions (Module, Version)</b></td>
<td class="syntaxCells evenRow" style="text-align:left;">A 2 dimensional array of strings which defined a mapping between each of the installed plugins' name and their version.  E.g. [['Scanner','1.0.0.0.0'],['CardReader','1.0.0.0.0']]</td>
</tr>
</table>

##JSON Objects:
To access the event parameters via a JSON object use the %json placeholder when declaring the event, e.g.
	<META HTTP-Equiv="Application" content="VersionEvent:url('JavaScript:doVersion(%json);')">

will call the function 'doVersion' as follows:
	function doVersion(jsonObject)
	{
		//  Use JSON object parameter in this function
		jsonObject.productVersion;
		jsonObject.hotFixes;
		jsonObject.componentVersions;
	}

JSON objects are always comprised as a string and a value, the strings to access each value are the parameter names as specified in this help document, i.e. productVersion, hotFixes and componentVersions in this example.  See the 'JSON Overview in RhoElements' section for more detail of how JSON is handled in RhoElements.
###%s Notation:
To access the event parameters in a sequential fashion the %s placeholder can be used when declaring the event, e.g.
	<META HTTP-Equiv="Application" content="VersionEvent:url('JavaScript:doVersion('%s', %s);')">

will call the function 'doVersion' as follows:
	function doVersion(productVersion, hotFixes)
	{
		//  Use parameters in this function
	}

Note that string parameters are declared as '%s' and JS arrays are declared as %s (without quotes).  In order to maintain compabitility with URLs, any data in the return event containing a '%' sign will be escaped to '%25', the JavaScript function 'unescape()' can be used to undo this on your returned data.

##%number Notation:
To access the event parameters directly the %number placeholder can be used when declaring the event, e.g.
	<META HTTP-Equiv="Application" content="VersionEvent:url('JavaScript:doVersion('%1', %3);')">

will call the function 'doVersion' as follows:
	function doVersion(productVersion, componentVersions)
	{
		//  Use parameters in this function
	}

note that string parameters are declared as '%number' and JS arrays are declared as %number (without quotes).

##@params Object:
To access the event parameters in a Ruby callback function, you reference the @params object within the callback function. This object is simply a ruby hash {"parameter1 name" => "parameter1 value", "parameter2 name" => "parameter2 value", ...}
	def object_init
		Application.versionEvent=url_for(:action => :versionEvent_callback)
	end
	
	def versionEvent_callback
		eParams = @params
		sproductVersion = eParams['productVersion']
		shotFixes = eParams['hotFixes']
		#do something
	end


##JSON Overview in RhoElements
JSON (JavaScript Object notation) is a way of expressing objects within JavaScript, at its simplest level it can be considered a collection of name / value pairs and value lists.  For a more formal description of JSON objects see <a href="http://www.json.org">http://www.json.org</a>

RhoElements events can receive a JSON object as a parameter.  The data structures contained in that object can be one of three types, each one of which is exhibited by the VersionEvent:
<table class="facelift" style="width:100%" border="1" padding="5px"> 
<tr><th class="syntaxHeadings">JavaScript Data Structure</th><th class="syntaxHeadings">JSON Equivalent</th><th class="syntaxHeadings">Example in VersionEvent</th></tr>
<tr><td class="syntaxCells">Simple Values</td><td class="syntaxCells">In JSON these are specified as Name:Value</td><td class="syntaxCells">productVersion</td></tr>
<tr><td class="syntaxCells evenRow">Array Values</td><td class="syntaxCells evenRow">In JSON these are specified as Name:[Value, Value, Value, Value]</td><td class="syntaxCells evenRow">potFixes</td></tr>
<tr><td class="syntaxCells">2D Array Values</td><td class="syntaxCells">In JSON these are specified as Name:[Object with name value pairs, Object with name value pairs]</td><td class="syntaxCells">componentVersions</td></tr>
</table>

The JSON object returned in the VersionEvent is encoded thusly (and is shown populated with example data)
	{
	  productVersion    :  '1.2.3.4',
	  hotFixes      :  ['1','4'],
	  componentVersions  :  [
					{
					  'Module'  :  'Timer',
					  'Version'  :  '1.0.6.0.1'
					},
					{
					  'Module'  :  'Scanner',
					  'Version'  :  '1.0.6.0.4'
					}
				  ]
	}

The following example code shows how to access the different data structures in the JSON object:

	function doVersion(jsonObject)
	{
		var theOutput = "Product Version: " + <b>jsonObject.productVersion</b> + "&lt;P&gt;";
		theOutput = theOutput + "Hot Fixes:&lt;P&gt;";
		for (var i=0; i&lt;<b>jsonObject.hotFixes.length</b>; i = i + 1)
		{
			theOutput = theOutput + " Hot Fix: " + <b>jsonObject.hotFixes[i]</b> + "&lt;BR /&gt;";
		}
		theOutput = theOutput + "&lt;P&gt;Installed Components:&lt;P&gt;";
		for (var j=0; j&lt;<b>jsonObject.componentVersions.length</b>; j = j + 1)
		{
			theOutput = theOutput + " Module: " + <b>jsonObject.componentVersions[j].module</b> + 
								', Version: ' + <b>jsonObject.componentVersions[j].version</b> + "&lt;BR /&gt;";
		}
		outputDiv.innerHTML = theOutput;
	}




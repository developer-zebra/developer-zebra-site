---
title: Lightsensor Module
productversion: '2.5'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---


<b>
The Lightsensor Module is used to retrieve the intensity of the ambient light falling on the device..
</b>

##Syntax

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">lightsensor (Module) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="LightSensor" content="[parameter]"&gt;</p></td></tr><tr><td class="clsSyntaxCells clsEvenRow"><p>&lt;META HTTP-Equiv="LightSensor" content="LightSensorEvent:url('[jsFunction | url]')"&gt;</p></td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">Lightsensor JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'lightsensor'</b> will exist on the current page and can be used to interact directly with the lightsensor.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Invoke lightsensor methods via JavaScript use the following syntax: lightsensor.method();
<P />e.g. <b>lightsensor</b>.getSensorData();
</td></tr><tr><td class="clsSyntaxCells clsOddRow">
To Set lightsensor parameters via JavaScript use the following syntax: lightsensor.parameter = 'value'; remembering to enclose your value in quotes where appropriate.  
<P />e.g. <b>lightsensor</b>.status = 'value';
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">						
To Set lightsensor return events via JavaScript use the following syntax: lightsensor.event = JavaScript Function;
<P />e.g. <b>lightsensor</b>.LightSensorEvent = 'doFunction(%json)';
<P />
<!-- For more details on the event syntax and parameters see the <a href="/rhoelements/RetrievalEvents">Retrieval Events</a> page.-->

</td></tr><tr><td class="clsSyntaxCells clsOddRow">							
To set multiple EMML parameters / events on a single line use the following syntax: lightsensor.setEMML("[Your EMML Tags]");
<P />
e.g. <b>lightsensor</b>.setEMML("status:<i>value</i>;LightSensorEvent:url('JavaScript:doFunction(%json)');getSensorData");							
</td></tr></table>


##Methods


Items listed in this section indicate methods or, in some cases, indicate parameters which will be retrieved.

<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="10%" /><col width="68%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>getSensorData</b></td><td class="clsSyntaxCells clsOddRow">This immediately returns the Ambient Light sensor via the LightSensorEvent</td><td class="clsSyntaxCells clsOddRow">N/A</td></tr></table>


##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>status:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Enabled, disabled</td><td class="clsSyntaxCells clsOddRow">Enables / disables the Light Sensor value retrieval</td><td class="clsSyntaxCells clsOddRow">disabled</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>minimumInterval:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Value in milli seconds</td><td class="clsSyntaxCells clsEvenRow">The minimum amount of time gap between two sensor update events, specified in milliseconds. The interval cannot be set to less than 200 milliseconds, if a value of less than 200 milli seconds is specified, the interval will be defaulted to 200 milli seconds.</td><td class="clsSyntaxCells clsEvenRow">1000 milliseconds</td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>	

##Events


Values are returned to the caller in RhoElements via Events.  Most modules contain events and those returned from this module are given below along with the event parameters.  Events can cause a navigation to a new URL or a JavaScript function on the page to be invoked.  Each event will in most cases have a number of parameters associated with it which will either be strings or JavaScript arrays.  Event parameters can be accessed either directly or via JSON objects.

<br />
###LightSensorEvent
The LightSensorEvent gives the LightSensor value. Once registered for you will receive a LightSensorEvent when it gets changed.
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="3%" /><col width="20%" /><col width="77%" /><tr><th class="tableHeading">ID</th><th class="tableHeading">Name</th><th class="tableHeading">Description</th></tr><tr><td style="text-align:left;" class="clsSyntaxCells clsOddRow">1</td><td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>LightSensorValue</b></td><td style="text-align:left;" class="clsSyntaxCells clsOddRow">LightSensor value in SI lux units</td></tr></table>





##Remarks


###minimum interval
As the light sensor value change rapidly the minimum interval between two updates should be specified as a reasonable value, otherwise there can be a performance impact.


###Cross platform consistency
As this plugin returns the raw sensor values reported by the operating system the values might differ between platforms.




##Requirements

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">2.1 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices. On Windows this is only supported in MPA3.0 devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">None.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Non Persistent - Changes to this module will not persist when navigating to a new page.</td></tr></table>


##HTML/JavaScript Examples

The following example retrieves the light sensor value when it is changed

	<META HTTP-EQUIV="LightSensor" CONTENT="LightSensorEvent:url('JavaScript:onSensor(%json);');status:enabled; ">
	
	<SCRIPT>
	    function onSensor(jsonObject)
	    {
	        var theOutput = "Light Sensor: " + jsonObject.LightSensorValue;                
	        outputDiv.innerHTML = theOutput;
	    }
	</SCRIPT>
	<div id="outputDiv">Light Sensor Output Goes Here</div>
	<P>
	  <INPUT align="center" type="button" value="Retrieve Light Sensor Data" onclick="LightSensor.getSensorData();"><br>
	






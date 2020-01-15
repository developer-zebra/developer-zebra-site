---
title: IoSystem Module
productversion: '2.0'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---


<b>
The IoSystem Module is used to interface with the device system input ports. System input ports provide the ability to retrieve system information on the vehicle ignition state and current device power source.
</b>

##Syntax

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">ioSystem (Module) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="IOSystem" content="[parameter]"&gt;</p></td></tr><tr><td class="clsSyntaxCells clsEvenRow"><p>&lt;META HTTP-Equiv="IOSystem" content="PortEvent:url('[jsFunction | url]');"&gt;</p></td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">IoSystem JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'ioSystem'</b> will exist on the current page and can be used to interact directly with the ioSystem.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Invoke ioSystem methods via JavaScript use the following syntax: iosystem.method();
<P />e.g. <b>ioSystem</b>.invokeIgnition();
</td></tr><tr><td class="clsSyntaxCells clsOddRow">
To Set ioSystem parameters via JavaScript use the following syntax: iosystem.parameter = 'value'; remembering to enclose your value in quotes where appropriate.  
<P />e.g. <b>ioSystem</b>.ignition = 'value';
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">						
To Set ioSystem return events via JavaScript use the following syntax: iosystem.event = JavaScript Function;
<P />e.g. <b>ioSystem</b>.portEvent = 'doFunction(%json)';
<P />
<!-- For more details on the event syntax and parameters see the <a href="/rhoelements/RetrievalEvents">Retrieval Events</a> page.-->

</td></tr><tr><td class="clsSyntaxCells clsOddRow">							
To set multiple EMML parameters / events on a single line use the following syntax: iosystem.setEMML("[Your EMML Tags]");
<P />
e.g. <b>ioSystem</b>.setEMML("ignition:<i>value</i>;portEvent:url('JavaScript:doFunction(%json)');invokeIgnition");							
</td></tr></table>

##Methods


Items listed in this section indicate methods or, in some cases, indicate parameters which will be retrieved.

<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="10%" /><col width="68%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>invokeIgnition</b></td><td class="clsSyntaxCells clsOddRow">The function specified by 'PortEvent' is called immediately with the current value of the ignition.</td><td class="clsSyntaxCells clsOddRow">N/A</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>invokePowerSource</b></td><td class="clsSyntaxCells clsEvenRow">The function specified by 'PortEvent' is called immediately with the current value of the power source, regardless of whether or not the port has been enabled.</td><td class="clsSyntaxCells clsEvenRow">N/A</td></tr></table>


##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>ignition:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">"Enable" or "Disabled"</td><td class="clsSyntaxCells clsOddRow">When 'Enable'd the value of the ignition will be returned to the application via 'PortEvent'.  The port's status will be returned when invoked or when it changes.</td><td class="clsSyntaxCells clsOddRow">Disabled</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>powerSource:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">"Enable" or "Disabled"</td><td class="clsSyntaxCells clsEvenRow">When 'Enable'd the value of the power source will be returned to the application via 'PortEvent'.  The port's status will be returned when invoked or when it changes.</td><td class="clsSyntaxCells clsEvenRow">Disabled</td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>	

##Events


Values are returned to the caller in RhoElements via Events.  Most modules contain events and those returned from this module are given below along with the event parameters.  Events can cause a navigation to a new URL or a JavaScript function on the page to be invoked.  Each event will in most cases have a number of parameters associated with it which will either be strings or JavaScript arrays.  Event parameters can be accessed either directly or via JSON objects.

<br />
###portEvent
See Remarks
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="3%" /><col width="20%" /><col width="77%" /><tr><th class="tableHeading">ID</th><th class="tableHeading">Name</th><th class="tableHeading">Description</th></tr><tr><td style="text-align:left;" class="clsSyntaxCells clsOddRow">1</td><td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>type</b></td><td style="text-align:left;" class="clsSyntaxCells clsOddRow">The type of the port a value is being received for, one of: Digital1 to Digital8, the 8 digital input ports; GeneralVoltage1; GeneralVoltage2; BatteryVoltage; BatteryCurrent; AmbientTemperature; HeaterTemperature; Ignition and PowerSource</td></tr><tr><td class="clsSyntaxCells clsEvenRow" style="text-align:left;">2</td><td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>value</b></td><td class="clsSyntaxCells clsEvenRow" style="text-align:left;">The value of the input port, this will depend on the type of the associated port.  For the ignition the value will be "on" or "off"; For the power source the value will be "Car Battery", "Wall Adapter" or "Cigarette Lighter"</td></tr></table>





##Remarks


###Port Event Scope
Note that the PortEvent callback is common between IODigital, IOAnalog and IOSystem and the same function will be called when an event occurs on any one of those port types, use the 'type' attribute to determine the source of the port event.




##Requirements

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">VC6090</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">The appropriate IO port drivers.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Persistent - Changes to this module will persist when navigating to a new page.</td></tr></table>


##HTML/JavaScript Examples

The following example registers to receive ignition port change events. PortEvent will be called when the state of the ignition changes.

	<META HTTP-Equiv="IOSystem" Content="PortEvent:uri('JavaScript:IOAction('%s', '%s');');">
	<META HTTP-Equiv="IOSystem" Content="Ignition:Enable">
	
	<script>
	   function IOAction(type, value)
	   {
	      //  PortEvent is called for all port Types, not just Digital Ports
	      if (type == "Ignition")
	      {
	         if (value == "on")
	            alert('Engine On');
	         else
	            alert('Engine Off');
	      }
	   }
	</script>
	






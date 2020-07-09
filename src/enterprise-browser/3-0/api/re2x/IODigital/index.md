---
title: IoDigital Module
productversion: '3.0'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---


<b>
The IoDigital Module is used to interface with the device digital input and output ports. The IODigital class provides an interface for two IO subsystems: * Digital Inputs: up to 8 general purpose external input ports that may sense an external short either to the vehicle ground or to the vehicle battery voltage. * Digital Outputs: up to 8 general purpose external output ports (relay drive) that may be controlled to close or release an external short circuit.
</b>

##Syntax

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">ioDigital (Module) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="IODigital" content="[parameter]"&gt;</p></td></tr><tr><td class="clsSyntaxCells clsEvenRow"><p>&lt;META HTTP-Equiv="IODigital" content="PortEvent:url('[jsFunction | url]');"&gt;</p></td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">IoDigital JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'ioDigital'</b> will exist on the current page and can be used to interact directly with the ioDigital.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Invoke ioDigital methods via JavaScript use the following syntax: iodigital.method();
<P />e.g. <b>ioDigital</b>.InvokeDigital1();
</td></tr><tr><td class="clsSyntaxCells clsOddRow">
To Set ioDigital parameters via JavaScript use the following syntax: iodigital.parameter = 'value'; remembering to enclose your value in quotes where appropriate.  
<P />e.g. <b>ioDigital</b>.input1 = 'value';
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">						
To Set ioDigital return events via JavaScript use the following syntax: iodigital.event = JavaScript Function;
<P />e.g. <b>ioDigital</b>.PortEvent = 'doFunction(%json)';
<P />
<!-- For more details on the event syntax and parameters see the <a href="/rhoelements/RetrievalEvents">Retrieval Events</a> page.-->

</td></tr><tr><td class="clsSyntaxCells clsOddRow">							
To set multiple EMML parameters / events on a single line use the following syntax: iodigital.setEMML("[Your EMML Tags]");
<P />
e.g. <b>ioDigital</b>.setEMML("input1:<i>value</i>;PortEvent:url('JavaScript:doFunction(%json)');InvokeDigital1");							
</td></tr></table>


##Methods


Items listed in this section indicate methods or, in some cases, indicate parameters which will be retrieved.

<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="10%" /><col width="68%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>InvokeDigital1</b></td><td class="clsSyntaxCells clsOddRow">The function specified by PortEvent is called immediately with the current value of the specified digital input port, regardless of whether or not the port has been enabled.</td><td class="clsSyntaxCells clsOddRow">N/A</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>InvokeDigital2</b></td><td class="clsSyntaxCells clsEvenRow">The function specified by PortEvent is called immediately with the current value of the specified digital input port, regardless of whether or not the port has been enabled.</td><td class="clsSyntaxCells clsEvenRow">N/A</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>InvokeDigital3</b></td><td class="clsSyntaxCells clsOddRow">The function specified by PortEvent is called immediately with the current value of the specified digital input port, regardless of whether or not the port has been enabled.</td><td class="clsSyntaxCells clsOddRow">N/A</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>InvokeDigital4</b></td><td class="clsSyntaxCells clsEvenRow">The function specified by PortEvent is called immediately with the current value of the specified digital input port, regardless of whether or not the port has been enabled.</td><td class="clsSyntaxCells clsEvenRow">N/A</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>InvokeDigital5</b></td><td class="clsSyntaxCells clsOddRow">The function specified by PortEvent is called immediately with the current value of the specified digital input port, regardless of whether or not the port has been enabled.</td><td class="clsSyntaxCells clsOddRow">N/A</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>InvokeDigital6</b></td><td class="clsSyntaxCells clsEvenRow">The function specified by PortEvent is called immediately with the current value of the specified digital input port, regardless of whether or not the port has been enabled.</td><td class="clsSyntaxCells clsEvenRow">N/A</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>InvokeDigital7</b></td><td class="clsSyntaxCells clsOddRow">The function specified by PortEvent is called immediately with the current value of the specified digital input port, regardless of whether or not the port has been enabled.</td><td class="clsSyntaxCells clsOddRow">N/A</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>InvokeDigital8</b></td><td class="clsSyntaxCells clsEvenRow">The function specified by PortEvent is called immediately with the current value of the specified digital input port, regardless of whether or not the port has been enabled.</td><td class="clsSyntaxCells clsEvenRow">N/A</td></tr></table>


##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>input1:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">"Enable", "Disabled", "Wakeup", "NoWakeup", "SwitchToGround" or "SwitchToBattery"</td><td class="clsSyntaxCells clsOddRow">When 'Enable'd causes the value of the specified digital input port to be returned to the application via 'PortEvent'.  The port's status will be returned when invoked or when its status changes.  Wakeup / NoWakeup indicate whether the device should wake up or not when the specified digital input port's state changes.  SwitchToGround / SwitchToBattery Indicates that the specified digital input port should read as switch-to-ground contacts or switch-to-battery.</td><td class="clsSyntaxCells clsOddRow">Disabled</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>outputState1:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">"Closed" or "Open"</td><td class="clsSyntaxCells clsEvenRow">Forces the state of the specified digital output port to either 'closed' or 'open'.  </td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>outputWarmBootState1:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">"Closed", "Open" or "Restore"</td><td class="clsSyntaxCells clsOddRow">Forces the state of the specified digital output port to 'closed' or 'open' following a warm boot of the device.  If set to restore the port state will remain unchanged across a warm boot.</td><td class="clsSyntaxCells clsOddRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>outputColdBootState1:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">"Closed", "Open" or "Restore"</td><td class="clsSyntaxCells clsEvenRow">Forces the state of the specified digital output port to 'closed' or 'open' following a cold boot of the device.  If set to restore the port state will remain unchanged across a cold boot.</td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>input2:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">"Enable", "Disabled", "Wakeup", "NoWakeup", "SwitchToGround" or "SwitchToBattery"</td><td class="clsSyntaxCells clsOddRow">When 'Enable'd causes the value of the specified digital input port to be returned to the application via 'PortEvent'.  The port's status will be returned when invoked or when its status changes.  Wakeup / NoWakeup indicate whether the device should wake up or not when the specified digital input port's state changes.  SwitchToGround / SwitchToBattery Indicates that the specified digital input port should read as switch-to-ground contacts or switch-to-battery.</td><td class="clsSyntaxCells clsOddRow">Disabled</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>outputState2:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">"Closed" or "Open"</td><td class="clsSyntaxCells clsEvenRow">Forces the state of the specified digital output port to either 'closed' or 'open'.  </td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>outputWarmBootState2:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">"Closed", "Open" or "Restore"</td><td class="clsSyntaxCells clsOddRow">Forces the state of the specified digital output port to 'closed' or 'open' following a warm boot of the device.  If set to restore the port state will remain unchanged across a warm boot.</td><td class="clsSyntaxCells clsOddRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>outputColdBootState2:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">"Closed", "Open" or "Restore"</td><td class="clsSyntaxCells clsEvenRow">Forces the state of the specified digital output port to 'closed' or 'open' following a cold boot of the device.  If set to restore the port state will remain unchanged across a cold boot.</td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>input3:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">"Enable", "Disabled", "Wakeup", "NoWakeup", "SwitchToGround" or "SwitchToBattery"</td><td class="clsSyntaxCells clsOddRow">When 'Enable'd causes the value of the specified digital input port to be returned to the application via 'PortEvent'.  The port's status will be returned when invoked or when its status changes.  Wakeup / NoWakeup indicate whether the device should wake up or not when the specified digital input port's state changes.  SwitchToGround / SwitchToBattery Indicates that the specified digital input port should read as switch-to-ground contacts or switch-to-battery.</td><td class="clsSyntaxCells clsOddRow">Disabled</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>outputState3:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">"Closed" or "Open"</td><td class="clsSyntaxCells clsEvenRow">Forces the state of the specified digital output port to either 'closed' or 'open'.  </td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>outputWarmBootState3:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">"Closed", "Open" or "Restore"</td><td class="clsSyntaxCells clsOddRow">Forces the state of the specified digital output port to 'closed' or 'open' following a warm boot of the device.  If set to restore the port state will remain unchanged across a warm boot.</td><td class="clsSyntaxCells clsOddRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>outputColdBootState3:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">"Closed", "Open" or "Restore"</td><td class="clsSyntaxCells clsEvenRow">Forces the state of the specified digital output port to 'closed' or 'open' following a cold boot of the device.  If set to restore the port state will remain unchanged across a cold boot.</td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>input4:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">"Enable", "Disabled", "Wakeup", "NoWakeup", "SwitchToGround" or "SwitchToBattery"</td><td class="clsSyntaxCells clsOddRow">When 'Enable'd causes the value of the specified digital input port to be returned to the application via 'PortEvent'.  The port's status will be returned when invoked or when its status changes.  Wakeup / NoWakeup indicate whether the device should wake up or not when the specified digital input port's state changes.  SwitchToGround / SwitchToBattery Indicates that the specified digital input port should read as switch-to-ground contacts or switch-to-battery.</td><td class="clsSyntaxCells clsOddRow">Disabled</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>outputState4:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">"Closed" or "Open"</td><td class="clsSyntaxCells clsEvenRow">Forces the state of the specified digital output port to either 'closed' or 'open'.  </td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>outputWarmBootState4:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">"Closed", "Open" or "Restore"</td><td class="clsSyntaxCells clsOddRow">Forces the state of the specified digital output port to 'closed' or 'open' following a warm boot of the device.  If set to restore the port state will remain unchanged across a warm boot.</td><td class="clsSyntaxCells clsOddRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>outputColdBootState4:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">"Closed", "Open" or "Restore"</td><td class="clsSyntaxCells clsEvenRow">Forces the state of the specified digital output port to 'closed' or 'open' following a cold boot of the device.  If set to restore the port state will remain unchanged across a cold boot.</td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>input5:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">"Enable", "Disabled", "Wakeup", "NoWakeup", "SwitchToGround" or "SwitchToBattery"</td><td class="clsSyntaxCells clsOddRow">When 'Enable'd causes the value of the specified digital input port to be returned to the application via 'PortEvent'.  The port's status will be returned when invoked or when its status changes.  Wakeup / NoWakeup indicate whether the device should wake up or not when the specified digital input port's state changes.  SwitchToGround / SwitchToBattery Indicates that the specified digital input port should read as switch-to-ground contacts or switch-to-battery.</td><td class="clsSyntaxCells clsOddRow">Disabled</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>outputState5:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">"Closed" or "Open"</td><td class="clsSyntaxCells clsEvenRow">Forces the state of the specified digital output port to either 'closed' or 'open'.  </td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>outputWarmBootState5:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">"Closed", "Open" or "Restore"</td><td class="clsSyntaxCells clsOddRow">Forces the state of the specified digital output port to 'closed' or 'open' following a warm boot of the device.  If set to restore the port state will remain unchanged across a warm boot.</td><td class="clsSyntaxCells clsOddRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>outputColdBootState5:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">"Closed", "Open" or "Restore"</td><td class="clsSyntaxCells clsEvenRow">Forces the state of the specified digital output port to 'closed' or 'open' following a cold boot of the device.  If set to restore the port state will remain unchanged across a cold boot.</td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>input6:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">"Enable", "Disabled", "Wakeup", "NoWakeup", "SwitchToGround" or "SwitchToBattery"</td><td class="clsSyntaxCells clsOddRow">When 'Enable'd causes the value of the specified digital input port to be returned to the application via 'PortEvent'.  The port's status will be returned when invoked or when its status changes.  Wakeup / NoWakeup indicate whether the device should wake up or not when the specified digital input port's state changes.  SwitchToGround / SwitchToBattery Indicates that the specified digital input port should read as switch-to-ground contacts or switch-to-battery.</td><td class="clsSyntaxCells clsOddRow">Disabled</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>outputState6:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">"Closed" or "Open"</td><td class="clsSyntaxCells clsEvenRow">Forces the state of the specified digital output port to either 'closed' or 'open'.  </td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>outputWarmBootState6:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">"Closed", "Open" or "Restore"</td><td class="clsSyntaxCells clsOddRow">Forces the state of the specified digital output port to 'closed' or 'open' following a warm boot of the device.  If set to restore the port state will remain unchanged across a warm boot.</td><td class="clsSyntaxCells clsOddRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>outputColdBootState6:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">"Closed", "Open" or "Restore"</td><td class="clsSyntaxCells clsEvenRow">Forces the state of the specified digital output port to 'closed' or 'open' following a cold boot of the device.  If set to restore the port state will remain unchanged across a cold boot.</td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>input7:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">"Enable", "Disabled", "Wakeup", "NoWakeup", "SwitchToGround" or "SwitchToBattery"</td><td class="clsSyntaxCells clsOddRow">When 'Enable'd causes the value of the specified digital input port to be returned to the application via 'PortEvent'.  The port's status will be returned when invoked or when its status changes.  Wakeup / NoWakeup indicate whether the device should wake up or not when the specified digital input port's state changes.  SwitchToGround / SwitchToBattery Indicates that the specified digital input port should read as switch-to-ground contacts or switch-to-battery.</td><td class="clsSyntaxCells clsOddRow">Disabled</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>outputState7:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">"Closed" or "Open"</td><td class="clsSyntaxCells clsEvenRow">Forces the state of the specified digital output port to either 'closed' or 'open'.  </td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>outputWarmBootState7:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">"Closed", "Open" or "Restore"</td><td class="clsSyntaxCells clsOddRow">Forces the state of the specified digital output port to 'closed' or 'open' following a warm boot of the device.  If set to restore the port state will remain unchanged across a warm boot.</td><td class="clsSyntaxCells clsOddRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>outputColdBootState7:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">"Closed", "Open" or "Restore"</td><td class="clsSyntaxCells clsEvenRow">Forces the state of the specified digital output port to 'closed' or 'open' following a cold boot of the device.  If set to restore the port state will remain unchanged across a cold boot.</td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>input8:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">"Enable", "Disabled", "Wakeup", "NoWakeup", "SwitchToGround" or "SwitchToBattery"</td><td class="clsSyntaxCells clsOddRow">When 'Enable'd causes the value of the specified digital input port to be returned to the application via 'PortEvent'.  The port's status will be returned when invoked or when its status changes.  Wakeup / NoWakeup indicate whether the device should wake up or not when the specified digital input port's state changes.  SwitchToGround / SwitchToBattery Indicates that the specified digital input port should read as switch-to-ground contacts or switch-to-battery.</td><td class="clsSyntaxCells clsOddRow">Disabled</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>outputState8:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">"Closed" or "Open"</td><td class="clsSyntaxCells clsEvenRow">Forces the state of the specified digital output port to either 'closed' or 'open'.  </td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>outputWarmBootState8:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">"Closed", "Open" or "Restore"</td><td class="clsSyntaxCells clsOddRow">Forces the state of the specified digital output port to 'closed' or 'open' following a warm boot of the device.  If set to restore the port state will remain unchanged across a warm boot.</td><td class="clsSyntaxCells clsOddRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>outputColdBootState8:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">"Closed", "Open" or "Restore"</td><td class="clsSyntaxCells clsEvenRow">Forces the state of the specified digital output port to 'closed' or 'open' following a cold boot of the device.  If set to restore the port state will remain unchanged across a cold boot.</td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>	

##Events


Values are returned to the caller in RhoElements via Events.  Most modules contain events and those returned from this module are given below along with the event parameters.  Events can cause a navigation to a new URL or a JavaScript function on the page to be invoked.  Each event will in most cases have a number of parameters associated with it which will either be strings or JavaScript arrays.  Event parameters can be accessed either directly or via JSON objects.

<br />
###PortEvent
See Remarks
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="3%" /><col width="20%" /><col width="77%" /><tr><th class="tableHeading">ID</th><th class="tableHeading">Name</th><th class="tableHeading">Description</th></tr><tr><td style="text-align:left;" class="clsSyntaxCells clsOddRow">1</td><td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>Type</b></td><td style="text-align:left;" class="clsSyntaxCells clsOddRow">The type of the port a value is being received for, one of: Digital1 to Digital8, the 8 digital input ports; GeneralVoltage1; GeneralVoltage2; BatteryVoltage; BatteryCurrent; AmbientTemperature; HeaterTemperature; Ignition and PowerSource</td></tr><tr><td class="clsSyntaxCells clsEvenRow" style="text-align:left;">2</td><td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>Value</b></td><td class="clsSyntaxCells clsEvenRow" style="text-align:left;">The value of the input port, this will depend on the type of the associated port. For digital ports the value will be either "Active" or "Closed".</td></tr></table>





##Remarks


###Port Event Scope
Note that the PortEvent callback is common between IODigital, IOAnalog and IOSystem and the same function will be called when an event occurs on any one of those port types, use the 'type' attribute to determine the source of the port event.




##Requirements

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">VC6090</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">The appropriate IO port drivers.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Persistent - Changes to this module will persist when navigating to a new page.</td></tr></table>


##HTML/JavaScript Examples

The following example opens digital output ports 1 and 2. PortEvent will be called when the digital input ports 7 or 8 have data.

	<META HTTP-Equiv="IODigital" Content="PortEvent:uri('JavaScript:IOAction('%s', '%s');');">
	<META HTTP-Equiv="IODigital" Content="Input7:Enable">
	<META HTTP-Equiv="IODigital" Content="Input8:Enable">
	
	<script>
	   function fnOpenPorts()
	   {
	      ioDigital.outputState1 = "Open";
	      ioDigital.outputState2 = "Open";
	   }
	   function IOAction(type, value)
	   {
	      //  PortEvent is called for all port Types, not just Digital Ports
	      if (type == "Digital7" || type == "Digital8")
	         alert('Digital Input Ports Open');
	   }
	</script>
	






---
title: IoAnalog Module
productversion: '1.7'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---


<b>
The IoAnalog Module is used to interface with the device analog input ports. Analog ports provide the ability to read 2 general purpose external analog voltage input ports and an additional 4 internal analog ports, i.e. ambient temperature, heater temperature, battery voltage and battery current.
</b>

##Syntax

<table class="re-table"><tr><th class="tableHeading">ioAnalog (Module) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="IOAnalog" content="[parameter]"&gt;</p></td></tr><tr><td class="clsSyntaxCells clsEvenRow"><p>&lt;META HTTP-Equiv="IOAnalog" content="PortEvent:url('[jsFunction | url]');"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">IoAnalog JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'ioAnalog'</b> will exist on the current page and can be used to interact directly with the ioAnalog.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Invoke ioAnalog methods via JavaScript use the following syntax: ioanalog.method();
<P />e.g. <b>ioAnalog</b>.invokeGeneralVoltage1();
</td></tr><tr><td class="clsSyntaxCells clsOddRow">
To Set ioAnalog parameters via JavaScript use the following syntax: ioanalog.parameter = 'value'; remembering to enclose your value in quotes where appropriate.  
<P />e.g. <b>ioAnalog</b>.generalVoltage1 = 'value';
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">						
To Set ioAnalog return events via JavaScript use the following syntax: ioanalog.event = JavaScript Function;
<P />e.g. <b>ioAnalog</b>.portEvent = 'doFunction(%json)';
<P />
<!-- For more details on the event syntax and parameters see the <a href="/rhoelements/RetrievalEvents">Retrieval Events</a> page.-->

</td></tr><tr><td class="clsSyntaxCells clsOddRow">							
To set multiple EMML parameters / events on a single line use the following syntax: ioanalog.setEMML("[Your EMML Tags]");
<P />
e.g. <b>ioAnalog</b>.setEMML("generalVoltage1:<i>value</i>;portEvent:url('JavaScript:doFunction(%json)');invokeGeneralVoltage1");							
</td></tr></table>
	

##Methods


Items listed in this section indicate methods or, in some cases, indicate parameters which will be retrieved.

<table class="re-table"><col width="10%" /><col width="68%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>invokeGeneralVoltage1</b></td><td class="clsSyntaxCells clsOddRow">The function specified by 'PortEvent' is called immediately with the current value of the specified analog port, regardless of whether or not the port has been enabled..</td><td class="clsSyntaxCells clsOddRow">N/A</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>invokeGeneralVoltage2</b></td><td class="clsSyntaxCells clsEvenRow">The function specified by 'PortEvent' is called immediately with the current value of the specified analog port, regardless of whether or not the port has been enabled..</td><td class="clsSyntaxCells clsEvenRow">N/A</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>invokeBatteryVoltage</b></td><td class="clsSyntaxCells clsOddRow">The function specified by 'PortEvent' is called immediately with the current value of the specified analog port, regardless of whether or not the port has been enabled..</td><td class="clsSyntaxCells clsOddRow">N/A</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>invokeBatteryCurrent</b></td><td class="clsSyntaxCells clsEvenRow">The function specified by 'PortEvent' is called immediately with the current value of the specified analog port, regardless of whether or not the port has been enabled..</td><td class="clsSyntaxCells clsEvenRow">N/A</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>invokeAmbientTemperature</b></td><td class="clsSyntaxCells clsOddRow">The function specified by 'PortEvent' is called immediately with the current value of the specified analog port, regardless of whether or not the port has been enabled..</td><td class="clsSyntaxCells clsOddRow">N/A</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>invokeHeaterTemperature</b></td><td class="clsSyntaxCells clsEvenRow">The function specified by 'PortEvent' is called immediately with the current value of the specified analog port, regardless of whether or not the port has been enabled..</td><td class="clsSyntaxCells clsEvenRow">N/A</td></tr></table>


##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>generalVoltage1:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">"Enable", "Disabled", "Wakeup" or "NoWakeup"</td><td class="clsSyntaxCells clsOddRow">When 'Enable'd causes the value of the specified analog input port to be returned to the application via 'PortEvent'.  The port's value will be returned when invoked or when it remains outside of the threshold region greater than the debounce duration.  Use Wakeup or NoWakeup to indicate that the device should wake up when the specified port's value remains outside of the threshold region greater than the debounce duration.</td><td class="clsSyntaxCells clsOddRow">Disabled</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>generalVoltage1MaximumThreshold:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Value must lie within the limits of the port type.  See 'PortEvent' return value 'value' for the appropriate type for limits.</td><td class="clsSyntaxCells clsEvenRow">Sets the maximum threshold of a 'notification area' to the specified threshold on the specified port.  Entering this area and remaining there longer than the 'Debounce' duration will trigger a notification, realised by a PortEvent.</td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>generalVoltage1MinimumThreshold:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Value must lie within the limits of the port type.  See 'PortEvent' return value 'value' for the appropriate type for limits.</td><td class="clsSyntaxCells clsOddRow">Sets the minimum threshold of a 'notification area' to the specified threshold on the specified port.  Entering this and remaining there longer than the 'Debounce' duration will trigger a notification, realised by a PortEvent.</td><td class="clsSyntaxCells clsOddRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>generalVoltage1Debounce:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Specified in 100 milliseconds (a value of 50 is equal to 5 seconds) and must be in the range 0 to 63.</td><td class="clsSyntaxCells clsEvenRow">Sets the duration the input on the specified port should remain stable within the 'notification area' to generate a notification event.  A notification event, when triggered, will be realised by a PortEvent.</td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>generalVoltage2:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">"Enable", "Disabled", "Wakeup" or "NoWakeup"</td><td class="clsSyntaxCells clsOddRow">When 'Enable'd causes the value of the specified analog input port to be returned to the application via 'PortEvent'.  The port's value will be returned when invoked or when it remains outside of the threshold region greater than the debounce duration.  Use Wakeup or NoWakeup to indicate that the device should wake up when the specified port's value remains outside of the threshold region greater than the debounce duration.</td><td class="clsSyntaxCells clsOddRow">Disabled</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>generalVoltage2MaximumThreshold:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Value must lie within the limits of the port type.  See 'PortEvent' return value 'value' for the appropriate type for limits.</td><td class="clsSyntaxCells clsEvenRow">Sets the maximum threshold of a 'notification area' to the specified threshold on the specified port.  Entering this area and remaining there longer than the 'Debounce' duration will trigger a notification, realised by a PortEvent.</td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>generalVoltage2MinimumThreshold:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Value must lie within the limits of the port type.  See 'PortEvent' return value 'value' for the appropriate type for limits.</td><td class="clsSyntaxCells clsOddRow">Sets the minimum threshold of a 'notification area' to the specified threshold on the specified port.  Entering this and remaining there longer than the 'Debounce' duration will trigger a notification, realised by a PortEvent.</td><td class="clsSyntaxCells clsOddRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>generalVoltage2Debounce:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Specified in 100 milliseconds (a value of 50 is equal to 5 seconds) and must be in the range 0 to 63.</td><td class="clsSyntaxCells clsEvenRow">Sets the duration the input on the specified port should remain stable within the 'notification area' to generate a notification event.  A notification event, when triggered, will be realised by a PortEvent.</td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>BatteryVoltage:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">"Enable", "Disabled", "Wakeup" or "NoWakeup"</td><td class="clsSyntaxCells clsOddRow">When 'Enable'd causes the value of the specified analog input port to be returned to the application via 'PortEvent'.  The port's value will be returned when invoked or when it remains outside of the threshold region greater than the debounce duration.  Use Wakeup or NoWakeup to indicate that the device should wake up when the specified port's value remains outside of the threshold region greater than the debounce duration.</td><td class="clsSyntaxCells clsOddRow">Disabled</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>BatteryVoltageMaximumThreshold:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Value must lie within the limits of the port type.  See 'PortEvent' return value 'value' for the appropriate type for limits.</td><td class="clsSyntaxCells clsEvenRow">Sets the maximum threshold of a 'notification area' to the specified threshold on the specified port.  Entering this area and remaining there longer than the 'Debounce' duration will trigger a notification, realised by a PortEvent.</td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>BatteryVoltageMinimumThreshold:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Value must lie within the limits of the port type.  See 'PortEvent' return value 'value' for the appropriate type for limits.</td><td class="clsSyntaxCells clsOddRow">Sets the minimum threshold of a 'notification area' to the specified threshold on the specified port.  Entering this and remaining there longer than the 'Debounce' duration will trigger a notification, realised by a PortEvent.</td><td class="clsSyntaxCells clsOddRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>BatteryVoltageDebounce:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Specified in 100 milliseconds (a value of 50 is equal to 5 seconds) and must be in the range 0 to 63.</td><td class="clsSyntaxCells clsEvenRow">Sets the duration the input on the specified port should remain stable within the 'notification area' to generate a notification event.  A notification event, when triggered, will be realised by a PortEvent.</td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>BatteryCurrent:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">"Enable", "Disabled", "Wakeup" or "NoWakeup"</td><td class="clsSyntaxCells clsOddRow">When 'Enable'd causes the value of the specified analog input port to be returned to the application via 'PortEvent'.  The port's value will be returned when invoked or when it remains outside of the threshold region greater than the debounce duration.  Use Wakeup or NoWakeup to indicate that the device should wake up when the specified port's value remains outside of the threshold region greater than the debounce duration.</td><td class="clsSyntaxCells clsOddRow">Disabled</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>BatteryCurrentMaximumThreshold:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Value must lie within the limits of the port type.  See 'PortEvent' return value 'value' for the appropriate type for limits.</td><td class="clsSyntaxCells clsEvenRow">Sets the maximum threshold of a 'notification area' to the specified threshold on the specified port.  Entering this area and remaining there longer than the 'Debounce' duration will trigger a notification, realised by a PortEvent.</td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>BatteryCurrentMinimumThreshold:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Value must lie within the limits of the port type.  See 'PortEvent' return value 'value' for the appropriate type for limits.</td><td class="clsSyntaxCells clsOddRow">Sets the minimum threshold of a 'notification area' to the specified threshold on the specified port.  Entering this and remaining there longer than the 'Debounce' duration will trigger a notification, realised by a PortEvent.</td><td class="clsSyntaxCells clsOddRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>BatteryCurrentDebounce:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Specified in 100 milliseconds (a value of 50 is equal to 5 seconds) and must be in the range 0 to 63.</td><td class="clsSyntaxCells clsEvenRow">Sets the duration the input on the specified port should remain stable within the 'notification area' to generate a notification event.  A notification event, when triggered, will be realised by a PortEvent.</td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>AmbientTemperature:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">"Enable", "Disabled", "Wakeup" or "NoWakeup"</td><td class="clsSyntaxCells clsOddRow">When 'Enable'd causes the value of the specified analog input port to be returned to the application via 'PortEvent'.  The port's value will be returned when invoked or when it remains outside of the threshold region greater than the debounce duration.  Use Wakeup or NoWakeup to indicate that the device should wake up when the specified port's value remains outside of the threshold region greater than the debounce duration.</td><td class="clsSyntaxCells clsOddRow">Disabled</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>AmbientTemperatureMaximumThreshold:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Value must lie within the limits of the port type.  See 'PortEvent' return value 'value' for the appropriate type for limits.</td><td class="clsSyntaxCells clsEvenRow">Sets the maximum threshold of a 'notification area' to the specified threshold on the specified port.  Entering this area and remaining there longer than the 'Debounce' duration will trigger a notification, realised by a PortEvent.</td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>AmbientTemperatureMinimumThreshold:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Value must lie within the limits of the port type.  See 'PortEvent' return value 'value' for the appropriate type for limits.</td><td class="clsSyntaxCells clsOddRow">Sets the minimum threshold of a 'notification area' to the specified threshold on the specified port.  Entering this and remaining there longer than the 'Debounce' duration will trigger a notification, realised by a PortEvent.</td><td class="clsSyntaxCells clsOddRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>AmbientTemperatureDebounce:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Specified in 100 milliseconds (a value of 50 is equal to 5 seconds) and must be in the range 0 to 63.</td><td class="clsSyntaxCells clsEvenRow">Sets the duration the input on the specified port should remain stable within the 'notification area' to generate a notification event.  A notification event, when triggered, will be realised by a PortEvent.</td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>HeaterTemperature:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">"Enable", "Disabled", "Wakeup" or "NoWakeup"</td><td class="clsSyntaxCells clsOddRow">When 'Enable'd causes the value of the specified analog input port to be returned to the application via 'PortEvent'.  The port's value will be returned when invoked or when it remains outside of the threshold region greater than the debounce duration.  Use Wakeup or NoWakeup to indicate that the device should wake up when the specified port's value remains outside of the threshold region greater than the debounce duration.</td><td class="clsSyntaxCells clsOddRow">Disabled</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>HeaterTemperatureMaximumThreshold:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Value must lie within the limits of the port type.  See 'PortEvent' return value 'value' for the appropriate type for limits.</td><td class="clsSyntaxCells clsEvenRow">Sets the maximum threshold of a 'notification area' to the specified threshold on the specified port.  Entering this area and remaining there longer than the 'Debounce' duration will trigger a notification, realised by a PortEvent.</td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>HeaterTemperatureMinimumThreshold:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Value must lie within the limits of the port type.  See 'PortEvent' return value 'value' for the appropriate type for limits.</td><td class="clsSyntaxCells clsOddRow">Sets the minimum threshold of a 'notification area' to the specified threshold on the specified port.  Entering this and remaining there longer than the 'Debounce' duration will trigger a notification, realised by a PortEvent.</td><td class="clsSyntaxCells clsOddRow">Device Dependant</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>HeaterTemperatureDebounce:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Specified in 100 milliseconds (a value of 50 is equal to 5 seconds) and must be in the range 0 to 63.</td><td class="clsSyntaxCells clsEvenRow">Sets the duration the input on the specified port should remain stable within the 'notification area' to generate a notification event.  A notification event, when triggered, will be realised by a PortEvent.</td><td class="clsSyntaxCells clsEvenRow">Device Dependant</td></tr></table>
<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>	

##Events


Values are returned to the caller in RhoElements via Events.  Most modules contain events and those returned from this module are given below along with the event parameters.  Events can cause a navigation to a new URL or a JavaScript function on the page to be invoked.  Each event will in most cases have a number of parameters associated with it which will either be strings or JavaScript arrays.  Event parameters can be accessed either directly or via JSON objects.

<br />
###portEvent

<table class="re-table"><col width="3%" /><col width="20%" /><col width="77%" /><tr><th class="tableHeading">ID</th><th class="tableHeading">Name</th><th class="tableHeading">Description</th></tr><tr><td style="text-align:left;" class="clsSyntaxCells clsOddRow">1</td><td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>type</b></td><td style="text-align:left;" class="clsSyntaxCells clsOddRow">The type of the port a value is being received for, one of: Digital1 to Digital8, the 8 digital input ports; GeneralVoltage1; GeneralVoltage2; BatteryVoltage; BatteryCurrent; AmbientTemperature; HeaterTemperature; Ignition and PowerSource</td></tr><tr><td class="clsSyntaxCells clsEvenRow" style="text-align:left;">2</td><td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>value</b></td><td class="clsSyntaxCells clsEvenRow" style="text-align:left;">The value of the input port, this will depend on the type of the associated port. For analog ports representing a voltage the value will be the text representation of a float in the range 0.0 to 32.5; For analog ports representing an electrical current the value will be the text representation of a float in the range 0.0 to 6.25; For analog ports representing temperature the value will be the text representation of an integer in the range -127 to 128. Float precision will always be given to two decimal places</td></tr></table>






##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">VC6090</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">The appropriate IO port drivers.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Persistent - Changes to this module will persist when navigating to a new page.</td></tr></table>


##HTML/JavaScript Examples

The following example registers to receive heater temperature port change events and displays a warning when the temperature exceeds 50 degrees Celsius.

	<META HTTP-Equiv="IOAnalog" Content="PortEvent:uri('JavaScript:IOAction('%s', '%s');');">
	<META HTTP-Equiv="IOAnalog" Content="HeaterTemperature:Enable">
	<META HTTP-Equiv="IOAnalog" Content="HeaterTemperatureMaximumThreshold:50">
	<META HTTP-Equiv="IOAnalog" Content="HeaterTemperatureDebounce:10">
	
	
	<script>
	   function IOAction(type, value)
	   {
	      //  PortEvent is called for all port Types, not just Digital Ports
	      if (type == "HeaterTemperature")
	         OutputBox.text = 'Current Temperature too warm: (' + value + ' degrees Celsius)';
	   }
	</script>
	






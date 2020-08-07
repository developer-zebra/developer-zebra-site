---
title: Telemetry Module
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---


<b>
The Telemetry Module is used to interface with vehicle telemetry.
</b>

##Syntax

<table class="re-table"><tr><th class="tableHeading">telemetry (Module) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="Telemetry" content="[parameter]"&gt;</p></td></tr><tr><td class="clsSyntaxCells clsEvenRow"><p>&lt;META HTTP-Equiv="Telemetry" content="TelemetryDataEvent:url('[jsFunction | url]');"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">Telemetry JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'telemetry'</b> will exist on the current page and can be used to interact directly with the telemetry.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Invoke telemetry methods via JavaScript use the following syntax: telemetry.method();
<P />e.g. <b>telemetry</b>.invoke();
</td></tr><tr><td class="clsSyntaxCells clsOddRow">
To Set telemetry parameters via JavaScript use the following syntax: telemetry.parameter = 'value'; remembering to enclose your value in quotes where appropriate.  
<P />e.g. <b>telemetry</b>.queryFrequency = 'value';
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">						
To Set telemetry return events via JavaScript use the following syntax: telemetry.event = JavaScript Function;
<P />e.g. <b>telemetry</b>.telemetryDataEvent = 'doFunction(%json)';
<P />
<!-- For more details on the event syntax and parameters see the <a href="/rhoelements/RetrievalEvents">Retrieval Events</a> page.-->

</td></tr><tr><td class="clsSyntaxCells clsOddRow">							
To set multiple EMML parameters / events on a single line use the following syntax: telemetry.setEMML("[Your EMML Tags]");
<P />
e.g. <b>telemetry</b>.setEMML("queryFrequency:<i>value</i>;telemetryDataEvent:url('JavaScript:doFunction(%json)');invoke");							
</td></tr></table>

##Methods


Items listed in this section indicate methods or, in some cases, indicate parameters which will be retrieved.

<table class="re-table"><col width="10%" /><col width="68%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>invoke</b></td><td class="clsSyntaxCells clsOddRow">Invokes all registered filters to return values to the application via their navigate tags</td><td class="clsSyntaxCells clsOddRow">N/A</td></tr></table>


##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>queryFrequency:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Frequency to query, in milliseconds</td><td class="clsSyntaxCells clsOddRow">Registered filters' values are sent to the application every xx milliseconds, See Remarks.</td><td class="clsSyntaxCells clsOddRow">2000</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>enabled:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">A Filter, See Remarks</td><td class="clsSyntaxCells clsEvenRow">Causes the value of the specified filter to be returned to the application via 'TelemetryDataEvent' when invoked or periodically at the frequency specified by 'QueryFrequency'.</td><td class="clsSyntaxCells clsEvenRow">All filters disabled</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>disabled:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">A Filter, See Remarks</td><td class="clsSyntaxCells clsOddRow">Stops the value of the specified filter being returned to the application.</td><td class="clsSyntaxCells clsOddRow">All filters disabled</td></tr></table>
<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>	

##Events


Values are returned to the caller in RhoElements via Events.  Most modules contain events and those returned from this module are given below along with the event parameters.  Events can cause a navigation to a new URL or a JavaScript function on the page to be invoked.  Each event will in most cases have a number of parameters associated with it which will either be strings or JavaScript arrays.  Event parameters can be accessed either directly or via JSON objects.

<br />
###telemetryDataEvent
The TelemetryDataEvent is used to obtain filter values. Every x milliseconds (as specified by the QueryFrequency parameter) or when 'Invoked' the TelemetryDataEvent is called for every 'Enabled' filter.
<table class="re-table"><col width="3%" /><col width="20%" /><col width="77%" /><tr><th class="tableHeading">ID</th><th class="tableHeading">Name</th><th class="tableHeading">Description</th></tr><tr><td style="text-align:left;" class="clsSyntaxCells clsOddRow">1</td><td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>filter</b></td><td style="text-align:left;" class="clsSyntaxCells clsOddRow">The filter to which the data relates, e.g. "EngineRPM", see Remarks.</td></tr><tr><td class="clsSyntaxCells clsEvenRow" style="text-align:left;">2</td><td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>data</b></td><td class="clsSyntaxCells clsEvenRow" style="text-align:left;">The value of the data represented by the filter.</td></tr><tr><td style="text-align:left;" class="clsSyntaxCells clsOddRow">3</td><td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>units</b></td><td style="text-align:left;" class="clsSyntaxCells clsOddRow">A human readable representation of the units in which the data is measured.</td></tr><tr><td class="clsSyntaxCells clsEvenRow" style="text-align:left;">4</td><td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>time</b></td><td class="clsSyntaxCells clsEvenRow" style="text-align:left;">The last time the data was updated (HH:MM:SS).  Note data may not always be updated on successive invocations of the filter, this parameter is the time the value was last set by the vehicle hardware.</td></tr></table>
<br />
###telemetryArrayEvent
The TelemetryArrayEvent is similar to the TelemetryDataEvent but all enabled filters are returned in a 2 dimensional array. Every x milliseconds (as specified by the QueryFrequency parameter) or when 'Invoked' the TelemetryArrayEvent is called once.
<table class="re-table"><col width="3%" /><col width="20%" /><col width="77%" /><tr><th class="tableHeading">ID</th><th class="tableHeading">Name</th><th class="tableHeading">Description</th></tr><tr><td style="text-align:left;" class="clsSyntaxCells clsOddRow">1</td><td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>filterValueArray (filterName, filterValue, unitOfMeasurement, lastUpdate)</b></td><td style="text-align:left;" class="clsSyntaxCells clsOddRow">2 Dimensional array of filter values, see Remarks.  Note if you have enabled lots of filters you may receive two or more TelemetryArrayEvents per update as to deliver all filters in a single 2D array would exceed the maximum URL length allowed in IE.</td></tr></table>





##Remarks


###Query Frequency Considerations
The QueryFrequency parameter is used to specify the frequency at which filters' values are sent to the application via the TelemetryDataEvent, consideration should be given not to overwhelm the device. The device's CPU speed, complexity of the TelemetryDataEvent JavaScript function and number of registered filters should all be taken into account when setting the QueryFrequency.


###Filter Values
Filters can be defined to be any of the following:

<pre>

Filter:                         Definition:
ABSControlStatus                ABS Control Status
ThrottlePosition                Throttle Position
ServiceBrakeSwitch              Service Break Switch Status
IgnitionStatus                  Ignition Status
ParkingBrakeSwitch              Parking Brake Switch Status
RoadSpeed                       Road Speed
CruiseControlSwitch             Cruise Control Switch
BrakesSwitch                    Brake Switch of Cruise Control
ClutchStatus                    Clutch Status in Cruise Control
CruiseControlSetSpeed           Speed in Cruise Control
AcceleratorPedalPos             Accelerator Pedal Position
EngineLoad                      Engine Load (%)
EngineOilPressure               Engine Oil Pressure
BoostPressure                   Boost Pressure
EngineCoolantTemperature        Engine Coolant Temperature
EngineRetarderStatus            Engine Retarder Status
ATC_ASR_Status                  Automatic Traction Control (ATC) and Acceleration Regulation System (ASR) Status
TransmissionRangeSelected       Selected Transmission Range Value selected by Driver
TransmissionRangeAttained       Attained Transmission Range Value Commanded by Transmission System
BatteryVoltage                  Battery Potential
EngineOilTemperature            Engine Oil Temperature
TransmissionOilTemperature      Transmission Oil Temperature
FuelRate                        Fuel Consumption per Time Unit
InstantaneousFuelEconomy        Current Fuel Economy at Current Vehicle Velocity
AverageFuelEconomy              Average of Instantaneous Fuel Economy
EngineRPM                       Engine Speed (RPM)
TransmitterDiagnosticTable      Transmitter Diagnostic Table
TransmitterDiagnosticCode       Transmitter Diagnostics Code
VehicleIDNumber                 Vehicle Identification Number
VehicleGlobalPosition           Latitude and Longitude
TotalDistance                   Total Distance Travelled
</pre>


###TelemetryArrayEvent Array Format
There is a single return value for this event which is a two dimensional array with the format below:

<pre>

(
  (                         //  Array for filter 1 (the first filter enabled)
      Filter Name           //  The name of the filter, e.g. RoadSpeed
      Filter Value          //  The value of the filter, e.g. 40
      Unit Of Measurement   //  The units, e.g. mph
      Last Update           //  The last time the value was updated in hardware, in the format HH:MM:SS
  )
  (                         //  Array for filter 2 (the second filter enabled)
      Filter Name           
      Filter Value          
      Unit Of Measurement   
      Last Update           
  )
  
)
</pre>




##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">VC6090</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">This tag requires appropriate hardware and drivers to run, i.e. a vehicle bus (VBus) and device capable of interfacing with such e.g. VC6000.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Partially Persistent - Changes to this module will persist when navigating to a new page with the exception of the TelemetryDataEvent which is reset when navigating to a new page.</td></tr></table>


##HTML/JavaScript Examples

The following example registers to receive vehicle speed via a TelemetryDataEvent:

	<META HTTP-Equiv="Telemetry" Content="TelemetryDataEvent:url('JavaScript:DataEv('%s', '%s', '%s', '%s');')">
	<META HTTP-Equiv="Telemetry" Content="Enable:RoadSpeed">
	
	<script>
	   function DataEv(filter, speed, units, time)
	   {
		if (filter == "RoadSpeed")
			alert('Speed at ' + time + ': ' + speed + ' ' + units);
	   }
	</script>
	
The following example registers to receive vehicle speed via a TelemetryArrayEvent:

	<META HTTP-Equiv="Telemetry" Content="QueryFrequency:3000"> 
	<META HTTP-Equiv="Telemetry" Content="Enable:RoadSpeed; Enable:EngineRPM; Enable:TotalDistance; Enable:EngineLoad; Enable:ABSControlStatus">
	<SCRIPT TYPE="TEXT/JAVASCRIPT">
	  function NavArray(arrayOfParams)
	  {
	    var TelemetryAsHTML = "<TABLE>";
	    for (var i=0; i<arrayOfParams.length; i++)
	    {
	      TelemetryAsHTML = TelemetryAsHTML + "<TR>";
	      TelemetryAsHTML = TelemetryAsHTML + "<TD>" + arrayOfParams[i][0];
	      TelemetryAsHTML = TelemetryAsHTML + "</TD>" + "<TD>" + arrayOfParams[i][1];
	      TelemetryAsHTML = TelemetryAsHTML + "</TD>" + "<TD>" + arrayOfParams[i][2];
	      TelemetryAsHTML = TelemetryAsHTML + "</TD>" + "<TD>" + arrayOfParams[i][3] + "</TD>";
	      TelemetryAsHTML = TelemetryAsHTML + "</TR>";
	    }
	    TelemetryAsHTML + "</TABLE>";
	    arrayOut.innerHTML = TelemetryAsHTML;
	  }
	
	  function beginTelemetry()
	  {
	    telemetry.TelemetryArrayEvent = "url('JavaScript:NavArray(%s);')";
	  }
	</SCRIPT>
	<BODY onload="beginTelemetry()">
	<div id=arrayOut></div>
	






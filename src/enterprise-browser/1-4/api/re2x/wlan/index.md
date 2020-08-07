---
title: Wlan Module
productversion: '1.4'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---


<b>
The Wlan Module controls the wireless LAN radio.
</b>

##Syntax

<table class="re-table"><tr><th class="tableHeading">wlan (Module) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="Wlan" content="[method / parameter]"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">Wlan JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'wlan'</b> will exist on the current page and can be used to interact directly with the wlan.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Invoke wlan methods via JavaScript use the following syntax: wlan.method();
<P />e.g. <b>wlan</b>.enableAdapter();
</td></tr><tr><td class="clsSyntaxCells clsOddRow">
To Set wlan parameters via JavaScript use the following syntax: wlan.parameter = 'value'; remembering to enclose your value in quotes where appropriate.  
<P />e.g. <b>wlan</b>.parameter = 'value';
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">						
To Set wlan return events via JavaScript use the following syntax: wlan.event = JavaScript Function;
<P />e.g. <b>wlan</b>.adapterPowerStateEvent = 'doFunction(%json)';
<P />
<!-- For more details on the event syntax and parameters see the <a href="/rhoelements/RetrievalEvents">Retrieval Events</a> page.-->

</td></tr><tr><td class="clsSyntaxCells clsOddRow">							
To set multiple EMML parameters / events on a single line use the following syntax: wlan.setEMML("[Your EMML Tags]");
<P />
e.g. <b>wlan</b>.setEMML("parameter:<i>value</i>;adapterPowerStateEvent:url('JavaScript:doFunction(%json)');enableAdapter");							
</td></tr></table>

##Methods


Items listed in this section indicate methods or, in some cases, indicate parameters which will be retrieved.

<table class="re-table"><col width="10%" /><col width="68%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>enableAdapter</b></td><td class="clsSyntaxCells clsOddRow">Enables the default wireless LAN NIC adapter.</td><td class="clsSyntaxCells clsOddRow">
N/A
</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>disableAdapter</b></td><td class="clsSyntaxCells clsEvenRow">Disables the currently enabled wireless LAN NIC adapter.</td><td class="clsSyntaxCells clsEvenRow">
N/A
</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>getAdapterPowerState</b></td><td class="clsSyntaxCells clsOddRow">Returns the current power state of the WLAN adapter. Immediately fires adapterPowerStateEvent. Subscribe to this event to receive this adapter state.</td><td class="clsSyntaxCells clsOddRow">
N/A
</td></tr></table>
	

##Events


Values are returned to the caller in RhoElements via Events.  Most modules contain events and those returned from this module are given below along with the event parameters.  Events can cause a navigation to a new URL or a JavaScript function on the page to be invoked.  Each event will in most cases have a number of parameters associated with it which will either be strings or JavaScript arrays.  Event parameters can be accessed either directly or via JSON objects.

<br />
###adapterPowerStateEvent
Returns data on if the radio is enabled or disabled.
<table class="re-table"><col width="3%" /><col width="20%" /><col width="77%" /><tr><th class="tableHeading">ID</th><th class="tableHeading">Name</th><th class="tableHeading">Description</th></tr><tr><td style="text-align:left;" class="clsSyntaxCells clsOddRow">1</td><td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>status</b></td><td style="text-align:left;" class="clsSyntaxCells clsOddRow">Either "AdapterEnabled" or "AdapterDisabled"</td></tr></table>






##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">2.2 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">SB1</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Fusion module</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Partially Persistent - Changes to the parameters and events of this module will not persist when navigating to a new page. Enable and Disable methods do persist.</td></tr></table>


##HTML/JavaScript Examples

Enable/disable the radio on a button click

	<html>
	<head>
	    <script type="text/javascript">
	        function enableRadio()
	        {
	            wlan.enableAdapter();
	        }
	    
	        function disableRadio()
	        {
	            wlan.disableAdapter();
	        }
	    </script>
	</head>
	<body>
	    <button onclick="enableRadio()">Enable Radio</button>
	    <button onclick="disableRadio()">Disable Radio</button>
	</body>
	</html>
	






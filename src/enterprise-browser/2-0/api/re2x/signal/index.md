---
title: Signal Module
productversion: '2.0'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

## Overview
The Signal Module is used to set position and display parameters of the wireless signal indicator on the screen. 

##Syntax
<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">signal (Module) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="Signal" content="[parameter]"&gt;</p></td></tr><tr><td class="clsSyntaxCells clsEvenRow"><p>&lt;META HTTP-Equiv="Signal" content="SignalEvent:url('[jsFunction | url]')"&gt;</p></td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">Signal JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'signal'</b> will exist on the current page and can be used to interact directly with the signal.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set signal parameters via JavaScript use the following syntax: signal.parameter = 'value'; remembering to enclose your value in quotes where appropriate.  
<P />e.g. <b>signal</b>.visibility = 'value';
</td></tr><tr><td class="clsSyntaxCells clsOddRow">						
To Set signal return events via JavaScript use the following syntax: signal.event = JavaScript Function;
<P />e.g. <b>signal</b>.signalEvent = 'doFunction(%json)';
<P />
<!-- For more details on the event syntax and parameters see the <a href="/rhoelements/RetrievalEvents">Retrieval Events</a> page.-->

</td></tr><tr><td class="clsSyntaxCells clsEvenRow">							
To set multiple EMML parameters / events on a single line use the following syntax: signal.setEMML("[Your EMML Tags]");
<P />
e.g. <b>signal</b>.setEMML("visibility:<i>value</i>;signalEvent:url('JavaScript:doFunction(%json)')");							
</td></tr></table>


##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>visibility:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Visible or Hidden</td><td class="clsSyntaxCells clsOddRow">Sets whether or not the battery indicator is shown</td><td class="clsSyntaxCells clsOddRow">Hidden</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>left:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Pixel value</td><td class="clsSyntaxCells clsEvenRow">Sets the horizontal position of the wireless signal indicator in pixels.  If negative the indicator will be off the screen</td><td class="clsSyntaxCells clsEvenRow">Top right of screen</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>top:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Pixel value</td><td class="clsSyntaxCells clsOddRow">Sets the vertical position of the wireless signal indicator in pixels. If negative then it will be off the screen</td><td class="clsSyntaxCells clsOddRow">Top right of screen</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>layout:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Left, Right, Up, Down</td><td class="clsSyntaxCells clsEvenRow">Sets the orientation of the signal icon.</td><td class="clsSyntaxCells clsEvenRow">Right</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>color:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Hex Values (#000000 - #FFFFFF)</td><td class="clsSyntaxCells clsOddRow">RGB value that sets the color of the wireless signal indicator using HTML web colors RR-Red, GG-Green and BB-Blue</td><td class="clsSyntaxCells clsOddRow">#000000</td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>	

##Events


Values are returned to the caller in RhoElements via Events.  Most modules contain events and those returned from this module are given below along with the event parameters.  Events can cause a navigation to a new URL or a JavaScript function on the page to be invoked.  Each event will in most cases have a number of parameters associated with it which will either be strings or JavaScript arrays.  Event parameters can be accessed either directly or via JSON objects.

<br />
###signalEvent
The SignalEvent gives an indication of the signal level and other associated information. Once registered for you will receive a SignalEvent at regular intervals, as specified by the SignalRefresh configuration setting.
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="3%" /><col width="20%" /><col width="77%" /><tr><th class="tableHeading">ID</th><th class="tableHeading">Name</th><th class="tableHeading">Description</th></tr><tr><td style="text-align:left;" class="clsSyntaxCells clsOddRow">1</td><td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>signalStrength</b></td><td style="text-align:left;" class="clsSyntaxCells clsOddRow">Signal strength value as a percentage</td></tr><tr><td class="clsSyntaxCells clsEvenRow" style="text-align:left;">2</td><td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>essid</b></td><td class="clsSyntaxCells clsEvenRow" style="text-align:left;">Current ESSID</td></tr><tr><td style="text-align:left;" class="clsSyntaxCells clsOddRow">3</td><td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>macAddress</b></td><td style="text-align:left;" class="clsSyntaxCells clsOddRow">WiFi MAC address</td></tr><tr><td class="clsSyntaxCells clsEvenRow" style="text-align:left;">4</td><td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>adapterName</b></td><td class="clsSyntaxCells clsEvenRow" style="text-align:left;">WiFi adapter name</td></tr><tr><td style="text-align:left;" class="clsSyntaxCells clsOddRow">5</td><td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>dhcpServer</b></td><td style="text-align:left;" class="clsSyntaxCells clsOddRow">Current DHCP servers address</td></tr><tr><td class="clsSyntaxCells clsEvenRow" style="text-align:left;">6</td><td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>dhcpStatic</b></td><td class="clsSyntaxCells clsEvenRow" style="text-align:left;">Whether the unit has a static or DHCP address</td></tr><tr><td style="text-align:left;" class="clsSyntaxCells clsOddRow">7</td><td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>gateway</b></td><td style="text-align:left;" class="clsSyntaxCells clsOddRow">Current gateway IP address</td></tr><tr><td class="clsSyntaxCells clsEvenRow" style="text-align:left;">8</td><td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>ipAddress</b></td><td class="clsSyntaxCells clsEvenRow" style="text-align:left;">Current IP address</td></tr><tr><td style="text-align:left;" class="clsSyntaxCells clsOddRow">9</td><td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>rssi</b></td><td style="text-align:left;" class="clsSyntaxCells clsOddRow">Signal strength in RSSI terms</td></tr><tr><td class="clsSyntaxCells clsEvenRow" style="text-align:left;">10</td><td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>subnetMask</b></td><td class="clsSyntaxCells clsEvenRow" style="text-align:left;">Current subnet mask</td></tr><tr><td style="text-align:left;" class="clsSyntaxCells clsOddRow">11</td><td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>wins</b></td><td style="text-align:left;" class="clsSyntaxCells clsOddRow">Current WINs server IP address</td></tr><tr><td style="text-align:left;" class="clsSyntaxCells clsOddRow">12</td><td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>deviceHostName</b></td><td style="text-align:left;" class="clsSyntaxCells clsOddRow">Hostname of the device. Supported only on Android Platform.</td></tr></table>





##Remarks


###Overlapping
Do not display the Battery indicator overlapping with the Signal indicator.


###Indicator Positions
For an illustrative guide to the meaning of the Layout parameter see the 'Indicator Positions' section.


###Unavailable Data on ET1
The WINS server address and dhcpStatic data are not available on the ET1. Also the dhcpServer address is always populated, even on static IP configurations.


###Parameter Deprecation
For users migrating their PocketBrowser apps to RhoElements please note that due to the difference in the signal indicator graphic, the GraphPosition and IconPosition parameters have been deprecated. Please use the Layout parameter instead.

###Devices lacking support
Due to platform limitations this API is not available on the following Zebra Technologies devices on specific platform:

* VH10 CE 6.0
* Omnii XT15 CE 6.0


##Requirements

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">None.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Partially Persistent - Changes to this module will persist when navigating to a new page with the exception of the return events.</td></tr></table>


##HTML/JavaScript Examples

The following example shows the wireless signal indicator, sets the position to (50, 50), the color of the indicator beneath the bars growing from right to left:

		:::html
		<META HTTP-Equiv="Signal" Content="Visibility:Visible">
		<META HTTP-Equiv="Signal" Content="Left:50">
		<META HTTP-Equiv="Signal" Content="Top:50">
		<META HTTP-Equiv="Signal" Content="Layout:Left">
		<META HTTP-Equiv="Signal" Content="Color:#FF0000">
	
Above example can also be written in EMML1.1 as given below

		:::html
		<META HTTP-Equiv="Signal" Content="Left:50; Top:50; Color:#FF0000; Layout:Left; Visibility:Visible">
	
In EMML1.1 it is also possible to concatenate the Parameter with the module name. The example above can also be written as:

		:::html
		<META HTTP-Equiv="Signal-Left" Content="50">
		<META HTTP-Equiv="Signal-Top" Content="50">
		<META HTTP-Equiv="Signal-Color" Content="#FF0000">
	
The following example navigates to a new page with parameters upon a wireless signal status change:

		:::html
		<META HTTP-Equiv="Signal" Content="signalevent:url('mypage.asp?Signal percentage=%s&ESSID=%s&MacAdd=%s&Adapter=%s&DHCPServ=%s&Mode=%s&Gateway=%s&IPAddress=%s&RSSI=%s&Subnet=%s&Wins=%s')">
	

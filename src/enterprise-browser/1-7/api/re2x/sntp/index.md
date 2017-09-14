---
title: SNTP Module
productversion: '1.7'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---



<b>
The SNTP Module is used to synchronize the device clock with a SNTP network server.
</b>

##Syntax

<table class="re-table"><tr><th class="tableHeading">sntp (Module) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="SNTP" content="[parameter]"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">Sntp JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'sntp'</b> will exist on the current page and can be used to interact directly with the sntp.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set sntp parameters via JavaScript use the following syntax: sntp.parameter = 'value'; remembering to enclose your value in quotes where appropriate.  
<P />e.g. <b>sntp</b>.serverIp = 'value';
</td></tr><tr><td class="clsSyntaxCells clsOddRow">							
To set multiple <a href="/rhoelements/EMMLOverview">EMML</a> parameters / events on a single line use the following syntax: sntp.setEMML("[Your EMML Tags]");
<P />
e.g. <b>sntp</b>.setEMML("serverIp:<i>value</i>");							
</td></tr></table>


##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>serverIp:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Valid IP Address</td><td class="clsSyntaxCells clsOddRow">The IP address of the SNTP time server</td><td class="clsSyntaxCells clsOddRow">N/A</td></tr></table>
<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>




##Remarks


###Latency
Once this tag is parsed RhoElements will request the time from the SNTP server immediately, however the clock will not be updated until a response is received. Network latency and connectivity issues can all affect the speed and success with which this tag is actioned.


###Proxy Settings
Windows Mobile 5.0 will not allow you to obtain SNTP time when requesting via a proxy server, it is recommended the proxy is bypassed for this to work.




##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices except: Enterprise Tablet.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">None.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Persistent - Changes to this module will persist when navigating to a new page.</td></tr></table>


##HTML/JavaScript Examples

The following example sets the device time from a network time server:

	<META HTTP-Equiv="SNTP" Content="serverIp:132.163.4.102">
	






---
title: Cradle Module
productversion: '1.7'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---


<b>
The Cradle Module returns cradle information.
</b>

##Syntax

<table class="re-table"><tr><th class="tableHeading">cradle (Module) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="Cradle" content="[method]"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">Cradle JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'cradle'</b> will exist on the current page and can be used to interact directly with the cradle.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Invoke cradle methods via JavaScript use the following syntax: cradle.method();
<P />e.g. <b>cradle</b>.getCradleId();
</td></tr><tr><td class="clsSyntaxCells clsOddRow">						
To Set cradle return events via JavaScript use the following syntax: cradle.event = JavaScript Function;
<P />e.g. <b>cradle</b>.cradleEvent = 'doFunction(%json)';
<P />
<!-- For more details on the event syntax and parameters see the <a href="/rhoelements/RetrievalEvents">Retrieval Events</a> page.-->

</td></tr><tr><td class="clsSyntaxCells clsEvenRow">							
To set multiple EMML parameters / events on a single line use the following syntax: cradle.setEMML("[Your EMML Tags]");
<P />
e.g. <b>cradle</b>.setEMML("cradleEvent:url('JavaScript:doFunction(%json)');getCradleId");							
</td></tr></table>

##Methods


Items listed in this section indicate methods or, in some cases, indicate parameters which will be retrieved.

<table class="re-table"><col width="10%" /><col width="68%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>getCradleId</b></td><td class="clsSyntaxCells clsOddRow">Returns the identification code of the cradle in which the device is situated.</td><td class="clsSyntaxCells clsOddRow">
N/A
</td></tr></table>
	

##Events


Values are returned to the caller in RhoElements via Events.  Most modules contain events and those returned from this module are given below along with the event parameters.  Events can cause a navigation to a new URL or a JavaScript function on the page to be invoked.  Each event will in most cases have a number of parameters associated with it which will either be strings or JavaScript arrays.  Event parameters can be accessed either directly or via JSON objects.

<br />
###cradleEvent
The cradleEvent is fired immediately after getCradleId is called.
<table class="re-table"><col width="3%" /><col width="20%" /><col width="77%" /><tr><th class="tableHeading">ID</th><th class="tableHeading">Name</th><th class="tableHeading">Description</th></tr><tr><td style="text-align:left;" class="clsSyntaxCells clsOddRow">1</td><td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>cradleId</b></td><td style="text-align:left;" class="clsSyntaxCells clsOddRow">The ID code of the cradle in which the device is situated. Cradles without this feature should return 0</td></tr></table>





##Remarks


###When to call getCradleId
GetCradleId should only be called when the device is in a cradle. This can be determined by the battery module's batteryEvent. This event includes the acLineStatus field which when has the value '1' means that the device is being charged, and therefore is probably in a cradle.




##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">2.2 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">SB1 only</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">None.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Immediate - These methods are actioned immediately.</td></tr></table>


##HTML/JavaScript Examples

The following example retreives the cradle ID:

	<html>
	<head>
	   <script type="text/javascript">
	      function onStart()
	      {
	         battery.batteryEvent = 'myBatteryEvent(%json)';
	      }
	      //Makes the function run when the DOM has loaded
	      window.addEventListener('load',onStart,false);
	      
	      function myBatteryEvent(jsonObject)
	      {
	         //if AC Line is connected
	         if(jsonObject.acLineStatus = '1')
	         {
	            cradle.cradleEvent = 'myCradleEvent(%json)';
	            cradle.getCradleId();
	         }
	      }
	      
	      function myCradleEvent(jsonObject)
	      {
	         document.getElementById('cradleIdSpan').innerHTML = jsonObject.cradleId;
	      }
	   </script>
	</head>
	<body>
	   <h1>CradleId Test</h1>
	   <p>Cradle Id = <span id="cradleIdSpan"></span></p>
	</body>
	</html>
	






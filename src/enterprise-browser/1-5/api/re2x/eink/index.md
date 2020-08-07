---
title: Eink Module
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---


<b>
The Eink Module Module to control display aspects specific to E Ink displays
</b>

##Syntax

<table class="re-table"><tr><th class="tableHeading">eink (Module) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="Eink" content="[method / parameter]"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">Eink JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'eink'</b> will exist on the current page and can be used to interact directly with the eink.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Invoke eink methods via JavaScript use the following syntax: eink.method();
<P />e.g. <b>eink</b>.forceFullScreenUpdate();
</td></tr><tr><td class="clsSyntaxCells clsOddRow">
To Set eink parameters via JavaScript use the following syntax: eink.parameter = 'value'; remembering to enclose your value in quotes where appropriate.  
<P />e.g. <b>eink</b>.screenUpdateBpp = 'value';
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">							
To set multiple <a href="/rhoelements/EMMLOverview">EMML</a> parameters / events on a single line use the following syntax: eink.setEMML("[Your EMML Tags]");
<P />
e.g. <b>eink</b>.setEMML("screenUpdateBpp:<i>value</i>forceFullScreenUpdate");							
</td></tr></table>
	

##Methods


Items listed in this section indicate methods or, in some cases, indicate parameters which will be retrieved.

<table class="re-table"><col width="10%" /><col width="68%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>forceFullScreenUpdate</b></td><td class="clsSyntaxCells clsOddRow">Does a full screen update. The full update mode is relatively slow and has visible large black block during update, but will generate little ghost image.</td><td class="clsSyntaxCells clsOddRow">N/A</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>pauseFullScreenUpdate</b></td><td class="clsSyntaxCells clsEvenRow">Stops Full Screen updates from occurring. The longer full screen updates are disabled, the more ghosting will appear on the eink display.</td><td class="clsSyntaxCells clsEvenRow">N/A</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>resumeFullScreenUpdate</b></td><td class="clsSyntaxCells clsOddRow">Resumes full screen updates. Full screen updates will occur automatically after a certain number of minor updates. This will remove ghost images from the eink display.</td><td class="clsSyntaxCells clsOddRow">N/A</td></tr></table>


##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>screenUpdateBpp:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">1, 2, 4</td><td class="clsSyntaxCells clsOddRow">Sets the bits per pixel (the color depth) for the area defined by regionLeft, regionTop, regionHeight, and regionWidth. One bit per pixel updates are faster than 4 bits per pixel. This can be used to improve the user interface for sections that are quick response critical. To disable special color depth updates, set this value to the default value.</td><td class="clsSyntaxCells clsOddRow">4</td></tr></table>
<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>





##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">2.2 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">Devices with E ink display panel</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">E ink display panel</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Not Persistent - Changes to this module will not persist when navigating to a new page.</td></tr></table>


##HTML/JavaScript Examples

The following JavaScript example switches off full screen updates when editing text boxes and resumes them after focus is lost from a text box

	<script type="text/javascript">
	window.onload = function()
	{
	    var inputs = getElementsByTagName('input');
	    for(var i = 0; i < inputs.length; i++)
	    {
	        inputs[i].onfocus = disableFullScreenUpdates;
	        inputs[i].onblur = enableFullScreenUpdates;
	    }
	};
	
	function disableFullScreenUpdates()
	{
	    eink.pauseFullScreenUpdate();
	}
	
	function enableFullScreenUpdates()
	{
	    eink.resumeFullScreenUpdate();
	}
	</script>
	
The following JavaScript will force a full screen refresh of the display after a large graphically intensive function completes. This will remove any graphical artifacts generated by non-fullscreen updates.

	<script>
	   function showGraphicalIntesiveOverlay()
	   {
	       document.getElementById('screenOverlay').style.visibility = 'visible';
	       forceRefresh();
	   }
	   
	   function forceRefresh()
	   {
	      eink.forceFullScreenUpdate();
	   }
	</script>
	
Enables one-bit color depth for all textboxes when focused, disabling one-bit color depth when focus is lost.

	<script>
	    window.onload = function()
	    {
	        var inputs = getElementsByTagName('input');
	        for(var i = 0; i < inputs.length; i++)
	        {
	            inputs[i].onfocus = start1Bit;
	            inputs[i].onblur = stop1Bit;
	        }
	    };
	
	    function start1Bit()
	    {
	        var a = event.target;
	        var position = getPosition(a);
	        
	        eink.regionLeft = '' + position.x;
	        eink.regionWidth = '' + a.offsetWidth;
	        eink.regionTop = '' + position.y;
	        eink.regionHeight = '' + a.offsetHeight;
	        eink.regionUpdateBpp = '1';
	    }
	    
	    function stop1Bit()
	    {
	        eink.regionUpdateBpp = '4';
	    }
	    
	    /**
	     * Returns the position on the screen of the object
	     * @param the object of which to get the position
	     * @return {x,y} the x and y positions of the top left of the object
	     *    in relation to screen size
	     */
	    function getPosition(object)
	    {
	        var xPosition = 0;
	        var yPosition = 0;
	        while(object != null)
	        {
	            xPosition += object.offsetLeft;
	            yPosition += object.offsetTop;
	            object = object.offsetParent;
	        }
	        return {x: xPosition, y: yPosition};
	    }
	}
	</script>
	






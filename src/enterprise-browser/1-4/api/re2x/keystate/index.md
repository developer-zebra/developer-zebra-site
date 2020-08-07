---
title: KeyState Module
productversion: '1.4'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

## Overview
The KeyState Module is used to set the parameters of the KeyState indicators, which display icons for Shift, Alt, Control, Function, Caps, Num lock, and the state of the Orange keys on some devices. Icons are placed beginning at the leftmost screen position in a row that extends toward the right, as necessary.

##Syntax

<table class="re-table"><tr><th class="tableHeading">keyState (Module) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="KeyState" content="[parameter]"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">KeyState JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'keyState'</b> will exist on the current page and can be used to interact directly with the keyState.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set keyState parameters via JavaScript use the following syntax: keystate.parameter = 'value'; remembering to enclose your value in quotes where appropriate.  
<P />e.g. <b>keyState</b>.right = 'value';
</td></tr><tr><td class="clsSyntaxCells clsOddRow">							
To set multiple <a href="/rhoelements/EMMLOverview">EMML</a> parameters / events on a single line use the following syntax: keystate.setEMML("[Your EMML Tags]");
<P />
e.g. <b>keyState</b>.setEMML("right:<i>value</i>");							
</td></tr></table>

##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>right:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Positive number, representing pixels</td><td class="clsSyntaxCells clsOddRow">Sets the X position of the right-hand edge of the KeyState indicators.</td><td class="clsSyntaxCells clsOddRow">Indicators start at the bottom right of the screen.</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>left:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Positive number, representing pixels</td><td class="clsSyntaxCells clsEvenRow">The same as Right, included for backward compatibility.</td><td class="clsSyntaxCells clsEvenRow">Indicators start at the bottom right of the screen.</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>top:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Positive number, representing pixels</td><td class="clsSyntaxCells clsOddRow">Sets the Y position of the KeyState indicators.</td><td class="clsSyntaxCells clsOddRow">Indicators start at the bottom right of the screen.</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>height:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Positive number, representing pixels</td><td class="clsSyntaxCells clsEvenRow">Sets the height of the KeyState Indicators.</td><td class="clsSyntaxCells clsEvenRow">Dependant on screen resolution</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>width:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Positive number, representing pixels</td><td class="clsSyntaxCells clsOddRow">Sets the width of each KeyState indicator.</td><td class="clsSyntaxCells clsOddRow">Dependant on screen resolution</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>visibility:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Visible, Hidden</td><td class="clsSyntaxCells clsEvenRow">Sets the visibility of the keystate indicators.</td><td class="clsSyntaxCells clsEvenRow">Hidden.</td></tr></table>
<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>




##Remarks


###Switching to Other Applications
All controls are designed to be shown on top of RhoElements. If you require to switch to an application other than RhoElements you should minimize RhoElements to ensure the buttons do not remain shown. (Not applicable to Enterprise Tablet)


###Screen Orientation
When the screen orientation changes, either using the ScreenOrientation tag or by rotating a device with hardware support, the command areas will automatically move and resize to fit the new layout. However the buttons themselves are not moved and in some cases this may result in them being off the screen or not in the expected position. If so they must be moved manually by detecting the ScreenOrientationEvent.

###Devices lacking support
Due to platform limitations this API is not available on the following Zebra Technologies devices:

* Workabout Pro 4


##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported Windows Mobile/CE devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">None.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Persistent - Changes to this module will persist when navigating to a new page.</td></tr></table>


##HTML/JavaScript Examples

The following example shows the KeyState indicators and sets the right and top coordinates to 50.

	<META HTTP-Equiv="KeyState" Content="Visibility:Visible">
	<META HTTP-Equiv="KeyState" Content="Right:50">
	<META HTTP-Equiv="KeyState" Content="Top:50">
	
The following example shows the KeyState and sets the right and top coordinates to 20.

	<META HTTP-Equiv="KeyState" Content="Visibility:Visible; Right:20; Top:20">
	        






---
title: ForwardButton Module
productversion: '1.7'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

## Overview
The ForwardButton Module is used to set the parameters of the Forward Button. When clicked the Forward button will navigate forward to the browser history, if possible.

##Syntax

<table class="re-table"><tr><th class="tableHeading">forwardButton (Module) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="ForwardButton" content="[parameter]"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">ForwardButton JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'forwardButton'</b> will exist on the current page and can be used to interact directly with the forwardButton.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set forwardButton parameters via JavaScript use the following syntax: forwardbutton.parameter = 'value'; remembering to enclose your value in quotes where appropriate.  
<P />e.g. <b>forwardButton</b>.left = 'value';
</td></tr><tr><td class="clsSyntaxCells clsOddRow">							
To set multiple <a href="/rhoelements/EMMLOverview">EMML</a> parameters / events on a single line use the following syntax: forwardbutton.setEMML("[Your EMML Tags]");
<P />
e.g. <b>forwardButton</b>.setEMML("left:<i>value</i>");							
</td></tr></table>


##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>left:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Positive number, representing pixels</td><td class="clsSyntaxCells clsOddRow">Sets the X position of the Forward Button.</td><td class="clsSyntaxCells clsOddRow">To the right of the address bar</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>top:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Positive number, representing pixels</td><td class="clsSyntaxCells clsEvenRow">Sets the Y position of the Forward Button.</td><td class="clsSyntaxCells clsEvenRow">To the right of the address bar</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>height:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Positive number, representing pixels</td><td class="clsSyntaxCells clsOddRow">Sets the height of the Forward Button.</td><td class="clsSyntaxCells clsOddRow">Dependant on screen resolution</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>width:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Positive number, representing pixels</td><td class="clsSyntaxCells clsEvenRow">Sets the width of the Forward Button.</td><td class="clsSyntaxCells clsEvenRow">Dependant on screen resolution</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>imageUp:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">URL</td><td class="clsSyntaxCells clsOddRow">Sets the image to be displayed when the Forward Button is in the up state.  See Remarks.</td><td class="clsSyntaxCells clsOddRow">Default image</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>imageDown:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">URL</td><td class="clsSyntaxCells clsEvenRow">Sets the image to be displayed when the Forward Button is in the down state.  See Remarks.</td><td class="clsSyntaxCells clsEvenRow">Default image</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>visibility:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Visible, Hidden</td><td class="clsSyntaxCells clsOddRow">Sets the visibility of the forward button.</td><td class="clsSyntaxCells clsOddRow">Hidden.</td></tr></table>
<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>




##Remarks


###Use of Images on Buttons.
Images can be specified as local to the device or on an HTTP / FTP server, just specify the required protocol as part of your URL (file://\, HTTP:// and FTP://). Image will be scaled to the size of the button. JPEG and GIF images are only supported on WM devices. Both CE and WM support BMP files.


###Interaction with Back Button
For compatibility reasons RhoElements maintains its own history stack independent of the underlying browser. This means the forward button is only compatible with the back button and will not navigate forward after the user calls JavaScript:history.back(1).


###Default Positions
By default this control will be placed a the top of the screen. On Windows Mobile if the 'FullScreen' configuration setting is disabled the control will need to be moved, otherwise it will appear beneath the task bar.


###Switching to Other Applications
All controls are designed to be shown on top of RhoElements. If you require to switch to an application other than RhoElements you should minimize RhoElements to ensure the buttons do not remain shown. (Not applicable to Enterprise Tablet)


###Screen Orientation
When the screen orientation changes, either using the ScreenOrientation tag or by rotating a device with hardware support, the command areas will automatically move and resize to fit the new layout. However the buttons themselves are not moved and in some cases this may result in them being off the screen or not in the expected position. If so they must be moved manually by detecting the ScreenOrientationEvent.


###Use in Production
This API is designed for debugging your application only and should not be used in production




##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported touch devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">None.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Persistent - Changes to this module will persist when navigating to a new page.</td></tr></table>


##HTML/JavaScript Examples

The following example shows the Forward button, sets its left and top coordinates to 50, and its width and height to 30 pixels.

	<META HTTP-Equiv="ForwardButton" Content="Visibility:Visible">
	<META HTTP-Equiv="ForwardButton" Content="Left:50">
	<META HTTP-Equiv="ForwardButton" Content="Top:50">
	<META HTTP-Equiv="ForwardButton" Content="Width:30">
	<META HTTP-Equiv="ForwardButton" Content="Height:30">
	
The following example shows the Forward button, sets its width to 30 pixels, its left coordinate to 50, and displays the forward_up.gif / forward_down.gif image on it (resizing the images if necessary).

	<META HTTP-Equiv="ForwardButton" Content="Width:30; Left:50; ImageUp:url('http://myaddress/forward_up.gif'); ImageDown:url('http://myaddress/forward_down.gif'); Visibility:Visible"> 
	






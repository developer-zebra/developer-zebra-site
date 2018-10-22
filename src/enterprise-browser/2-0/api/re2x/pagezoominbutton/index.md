---
title: ZoomInPageButton Module
productversion: '1.8'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---


<b>
The ZoomInPageButton Module is used to set the parameters of the ZoomInPageButton. When clicked, the ZoomInPage button zooms into the web page. There is a default zoom in step and a maximum zoom in level.
</b>

##Syntax

<table class="re-table"><tr><th class="tableHeading">zoomInPageButton (Module) &lt;META&gt; Syntax
</th></tr></table>
<table class="re-table"><tr><th class="tableHeading">ZoomInPageButton JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'zoomInPageButton'</b> will exist on the current page and can be used to interact directly with the zoomInPageButton.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set zoomInPageButton parameters via JavaScript use the following syntax: zoominpagebutton.parameter = 'value'; remembering to enclose your value in quotes where appropriate.  
<P />e.g. <b>zoomInPageButton</b>.left = 'value';
</td></tr><tr><td class="clsSyntaxCells clsOddRow">							
To set multiple <a href="/rhoelements/EMMLOverview">EMML</a> parameters / events on a single line use the following syntax: zoominpagebutton.setEMML("[Your EMML Tags]");
<P />
e.g. <b>zoomInPageButton</b>.setEMML("left:<i>value</i>");							
</td></tr></table>


##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>left:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Any valid pixel value</td><td class="clsSyntaxCells clsOddRow">Sets the left horizontal position of the ZoomInPage button in pixels.</td><td class="clsSyntaxCells clsOddRow">10</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>top:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Any valid pixel value</td><td class="clsSyntaxCells clsEvenRow">Sets the top vertical position of the ZoomInPage button in pixels.</td><td class="clsSyntaxCells clsEvenRow">10</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>height:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Any valid pixel range</td><td class="clsSyntaxCells clsOddRow">Sets the height of the PageZoomIn button in pixels.</td><td class="clsSyntaxCells clsOddRow">100</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>width:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Any valid pixel range</td><td class="clsSyntaxCells clsEvenRow">Sets the width of the ZoomInPage button in pixels.</td><td class="clsSyntaxCells clsEvenRow">100</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>imageup:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">String indicating the url address</td><td class="clsSyntaxCells clsOddRow">Sets the image to be displayed on the ZoomInPage button; the image shall be in bitmap(WinCE and WM devices),
                                JPEG(WM devices ONLY), or GIF(WM devices ONLY) format and will be scaled to the size of the button; the image can be stored 
                                either on the local device or remotely (http and ftp protocols supported); if the url address is
                                not valid or not given, the default image shall be displayed.
                                </td><td class="clsSyntaxCells clsOddRow">Default image</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>imagedown:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">String indicating the url address</td><td class="clsSyntaxCells clsEvenRow">
                      Sets the image to be displayed on the ZoomInPage button when pressed; the image shall be in bitmap(WinCE and WM devices),
                      JPEG(WM devices ONLY), or GIF(WM devices ONLY) format and will be scaled to the size of the button; the image can be stored
                      either on the local device or remotely (http and ftp protocols supported); if the url address is
                      not valid or not given, the default image shall be displayed.
                    </td><td class="clsSyntaxCells clsEvenRow">Default image</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>visibility:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">visible, hidden</td><td class="clsSyntaxCells clsOddRow">Sets the visibility of the ZoomInPage button.</td><td class="clsSyntaxCells clsOddRow">By default the ZoomInPage button is hidden.</td></tr></table>
<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>




##Remarks


###Screen Orientation
When the screen orientation changes, either using the ScreenOrientation tag or by rotating a device with hardware support, the command areas will automatically move and resize to fit the new layout. However the buttons themselves are not moved and in some cases this may result in them being off the screen or not in the expected position. If so they must be moved manually by detecting the ScreenOrientationEvent.




##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">None.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Persistent - Changes to this module will persist when navigating to a new page.</td></tr></table>


##HTML/JavaScript Examples

The following example shows the ZoomInPage button, sets its x and y coordinates to 50, and its height and width to 20 pixels.

	<META HTTP-Equiv="ZoomInPageButton" Content="visibility:visible">
	<META HTTP-Equiv="ZoomInPageButton" Content="left:50">
	<META HTTP-Equiv="ZoomInPageButton" Content="top:50">
	<META HTTP-Equiv="ZoomInPageButton" Content="height:20">
	<META HTTP-Equiv="ZoomInPageButton" Content="width:20">
	
	
The following example shows the ZoomInPage button, sets its top coordinate to 30 pixels, its left coordinate to 50 pixels, its width and height to 30 pixels, and displays the foo.gif image on it (resizing the image if necessary).

	<META HTTP-Equiv="ZoomInPageButton" Content="top:30 left:50 width:30 height:30 imageup:http://myaddress/foo.gif visibility:visible">
	






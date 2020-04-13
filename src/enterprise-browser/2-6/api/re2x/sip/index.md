---
title: SIP Module
productversion: '2.6'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

## Overview
The SIP Module is used to control attributes of the soft input panel (SIP), also known as the software keyboard. Settings apply to text boxes on the current page as well as the address bar. **The SIP module is not supported on Android**. 

##Syntax

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">sip (Module) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="SIP" content="[method / parameter]"&gt;</p></td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">Sip JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'sip'</b> will exist on the current page and can be used to interact directly with the sip.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Invoke sip methods via JavaScript use the following syntax: sip.method();
<P />e.g. <b>sip</b>.manual();
</td></tr><tr><td class="clsSyntaxCells clsOddRow">
To Set sip parameters via JavaScript use the following syntax: sip.parameter = 'value'; remembering to enclose your value in quotes where appropriate.  
<P />e.g. <b>sip</b>.left = 'value';
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">							
To set multiple <a href="/rhoelements/EMMLOverview">EMML</a> parameters / events on a single line use the following syntax: sip.setEMML("[Your EMML Tags]");
<P />
e.g. <b>sip</b>.setEMML("left:<i>value</i>manual");							
</td></tr></table>


##Methods


Items listed in this section indicate methods or, in some cases, indicate parameters which will be retrieved.

<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="10%" /><col width="68%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>manual</b></td><td class="clsSyntaxCells clsOddRow">The SIP will show or hide only when the SIP button is pressed.</td><td class="clsSyntaxCells clsOddRow">manual</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>automatic</b></td><td class="clsSyntaxCells clsEvenRow">Shows and hides the SIP when editable fields have focus.</td><td class="clsSyntaxCells clsEvenRow">manual</td></tr></table>


##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>left:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Horizontal position, in pixels</td><td class="clsSyntaxCells clsOddRow">Sets the horizontal position of the SIP in pixels. Not compatible with Finger Scrolling on Windows devices.</td><td class="clsSyntaxCells clsOddRow">Center of the screen</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>top:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Vertical position, in pixels</td><td class="clsSyntaxCells clsEvenRow">Sets the vertical position of the SIP in pixels. Not compatible with Finger Scrolling on Windows devices</td><td class="clsSyntaxCells clsEvenRow">Bottom of the screen</td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>


##Multi Instance
When multiple RhoElememts applications are running the following considerations should be made: The SIP settings are application specific.  Switching to another application which uses the SIP module will apply the focused application's settings to it, e.g. the SIP may move position.


##Remarks


###Disabling the SIP
If you want to completely disable to the use of the SIP, set it to appear off the visible area of the screen (see example above).  You can use a default meta tag to avoid pasting the tag on every page.


###Interaction with Hardware Keyboard
The SIP used is the standard keyboard input panel supplied with Windows. Certain incompatibilities exist when using the software keyboard on a device which also has a hardware keyboard though this will have no impact on the average user. For example moving the SIP will reset the alpha or function key (orange or blue key) lock and using the orange or blue keys may reset the position of the SIP on certain devices. Also note that if you press a hardware key the SIP will disappear if you are using the Internet Explorer engine and you will need to press the SIP button again or return focus to an editable field to get it to appear


###Interaction with Screen Rotation
Depending on the underlying operating system the SIP position may change following screen rotation. The SIP left and top parameters can be applied in a ScreenOrientationEvent to bypass this feature if required.


###Backward Compatibility
The SIP methods `manual` and `automatic` exhibit slightly different behavior when the &lt;EngineInUse&gt; `Config.xml` setting is set to "Internet Explorer." In manual mode, the SIP will be shown only after the SIP button is pressed, and from then on will show and hide whenever a text field has focus. In automatic, the SIP will appear automatically whenever a text field has focus and is otherwise hidden.

Applying `automatic` SIP control in an app will prevent the app from later invoking `manual` SIP control. Press any hardware key to return the device to manual SIP control. In backward compatibility mode, `manual` and `automatic` methods are supported on both Windows Mobile and Windows CE platforms.


##Requirements

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">Windows Only. No support for Android</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">None.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Persistent - Changes to this module will persist when navigating to a new page. Moving the SIP may also persist after RhoElements has been shut down, dependent on Operating System.</td></tr></table>


##HTML/JavaScript Examples

The following example moves the SIP to sit at the bottom of a 1/4 VGA screen:

	<META HTTP-Equiv="SIP" Content="Left:0;Top:240">
	
To completely disable the use of the SIP it can be positioned off the visible area of the screen.

	<META HTTP-Equiv="SIP" Content="Left:640;Top:640">
	
The following example sets the SIP to manual:

	<META HTTP-Equiv="SIP" Content="Manual">
	


---
title: Device Module
productversion: '2.6'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

## Overview
The Device Module controls device functions.

## Syntax
<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">device (Module) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="Device" content="[method]"&gt;</p></td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">Device JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'device'</b> will exist on the current page and can be used to interact directly with the device.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Invoke device methods via JavaScript use the following syntax: device.method();
<P />e.g. <b>device</b>.suspend();
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">							
To set multiple <a href="../EMMLOverview">EMML</a> parameters / events on a single line use the following syntax: device.setEMML("[Your EMML Tags]");
<P />
e.g. <b>device</b>.setEMML("suspend");							
</td></tr></table>
	

## Methods


Items listed in this section indicate methods or, in some cases, indicate parameters which will be retrieved.

<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="10%" /><col width="68%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>suspend</b></td><td class="clsSyntaxCells clsOddRow">puts the device into suspend mode</td><td class="clsSyntaxCells clsOddRow">Not in suspend mode</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>powerOff</b></td><td class="clsSyntaxCells clsEvenRow">puts the device into power off mode. In this mode the device will draw no power. Only supported on SB1.</td><td class="clsSyntaxCells clsEvenRow">Not in Power Off mode</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>wake</b></td><td class="clsSyntaxCells clsOddRow">Wakes the device from suspend mode</td><td class="clsSyntaxCells clsOddRow">wake mode</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>calibrate</b></td><td class="clsSyntaxCells clsEvenRow">Carries out the screen calibration routine</td><td class="clsSyntaxCells clsEvenRow">Not calibrating</td></tr></table>



## Multi Instance
When multiple RhoElememts applications are running the following considerations should be made: Only the application with Focus will have the ability to control device functions.


## Remarks


###Interaction with Unattended Method of the Push Module
The Suspend functionality is incompatible with the unattended functionality of the push module and they should not be used together.


### wake Method
The wake functionality can be used along with Push module. For eg: in the push detected event the user can call the wake method to wake the device. Please note that the Enterprise Tablet opens in Lock Screen mode if wake method is used and the screen stays active until the user swicthes it off and hence this method consumes more battery power.




## Requirements

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">None.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Immediate - These methods are actioned immediately.</td></tr></table>


## HTML/JavaScript Examples

The following example put the device into suspend mode:

	<META HTTP-Equiv="Device" Content="Suspend">
	
The following example wakes the device from Suspend mode:

	<META HTTP-Equiv="Device" Content="wake">
	



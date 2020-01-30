---
title: CompositeAb Decoder
productversion: '2.0'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

##Overview

The CompositeAb Decoder is used to enable or disable the Composite AB decoder.

##Syntax

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">compositeAb (Decoder) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="CompositeAb:[parameter]"&gt;</p></td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">compositeAb JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the compositeAb.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set compositeAb parameters via JavaScript use the following syntax: scanner.Parameter = Value;
<P />e.g. <b>scanner</b>.compositeAb = Value;
</td></tr></table>

##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>compositeAb:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">enabled/disabled</td><td class="clsSyntaxCells clsOddRow">Enables / Disables Composite AB decoder.</td><td class="clsSyntaxCells clsOddRow">
N/A
</td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>




##Remarks


###Requirements - Upca
In order to enable compositeAb barcode scanning, the upca decoder must also be enabled.




##Requirements

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Scanner or Imager module and device that supports Composite AB.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td></tr></table>


##HTML/JavaScript Examples

The following example enables the scanner to read only Composite AB labels:

	<META HTTP-Equiv="scanner" Content="allDecoders:disabled">
	<META HTTP-Equiv="scanner" Content="upca:enabled">
	<META HTTP-Equiv="scanner" Content="CompositeAb:enabled">
	<META HTTP-Equiv="scanner" Content="enabled">
	
Above example can also be written as shown below:

	<META HTTP-Equiv="scanner" Content="allDecoders:disabled;upca:enabled;compositeAb:enabled;enabled">
	
or

	function enableCompositeAb()
	{
		scanner.allDecoders = 'disabled';
		scanner.upca = 'enabled';
		scanner.compositeAb = 'enabled';
		scanner.enable();
	}
	





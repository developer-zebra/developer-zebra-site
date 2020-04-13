---
title: AusPostal Decoder
productversion: '2.5'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---


<b>
The AusPostal Decoder is used to enable or disable the auspostal decoder.
</b>

##Syntax

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">ausPostal (Decoder) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="auspostal:[parameter]"&gt;</p></td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">ausPostal JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the ausPostal.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set ausPostal parameters via JavaScript use the following syntax: scanner.Parameter = Value;
<P />e.g. <b>scanner</b>.ausPostal = Value;
</td></tr></table>


##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>ausPostal:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Enabled/Disabled</td><td class="clsSyntaxCells clsOddRow">Enables/Disables auspostal Decoder</td><td class="clsSyntaxCells clsOddRow">Device Specific</td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>





##Requirements

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Scanner or Imager module and device that supports auspostal.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td></tr></table>


##HTML/JavaScript Examples

The following example enables the scanner to read only auspostal labels:

	<META HTTP-Equiv="scanner" Content="all_decoders:disabled">
	<META HTTP-Equiv="scanner" Content="auspostal:enabled">
	<META HTTP-Equiv="scanner" Content="enabled">
	
Above example can also be written as shown below:

	<META HTTP-Equiv="scanner" Content="all_decoders:disabled;auspostal:enabled;enabled">
	
The following example enables the scanner to read all labels except auspostal:

	<META HTTP-Equiv="scanner" Content="all_decoders:enabled">
	<META HTTP-Equiv="scanner" Content="auspostal:disabled">
	<META HTTP-Equiv="scanner" Content="enabled">
	
Above example can also be written as shown below:

	<META HTTP-Equiv="scanner" Content="all_decoders:enabled;auspostal:disabled;enabled">
	
Above example can also be written as shown below:

	<META HTTP-Equiv="scanner-all_decoders" Content="enabled">
	<META HTTP-Equiv="scanner-auspostal" Content="disabled">
	<META HTTP-Equiv="scanner-enabled" Content="SCN1">
	






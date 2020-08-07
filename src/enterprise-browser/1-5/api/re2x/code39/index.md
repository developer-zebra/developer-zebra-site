---
title: Code39 Decoder
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

##Overview

The Code39 Decoder is used to enable or disable the Code39 decoder.

##Syntax

<table class="re-table"><tr><th class="tableHeading">code39 (Decoder) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="Code39:[parameter]"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">code39 JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the code39.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set code39 parameters via JavaScript use the following syntax: scanner.Parameter = Value;
<P />e.g. <b>scanner</b>.code39 = Value;
</td></tr></table>

##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>code39:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">enabled/disabled</td><td class="clsSyntaxCells clsOddRow">Enables/disables the Code39 decoder.</td><td class="clsSyntaxCells clsOddRow">Device specific</td></tr></table>
<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>





##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">RhoElements</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Scanner or Imager module and device supports Code39.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td></tr></table>


##HTML/JavaScript Examples

The following example enables the scanner to read only Code39 labels:

	<META HTTP-Equiv="scanner" Content="allDecoders:disabled">
	<META HTTP-Equiv="scanner" Content="Code39:enabled">
	<META HTTP-Equiv="scanner" Content="enabled">
	
Above example can also be written as shown below:

	<META HTTP-Equiv="scanner" Content="allDecoders:disabled;Code39:enabled;enabled">
	
or

	<META HTTP-Equiv="scanner-all_decoders" Content="disabled">
	<META HTTP-Equiv="scanner-Code39" Content="enabled">
	<META HTTP-Equiv="scanner-enabled" Content="SCN1">
	
The following example enables the scanner to read all labels except Code39:

	<META HTTP-Equiv="scanner" Content="allDecoders:enabled">
	<META HTTP-Equiv="scanner" Content="Code39:disabled">
	<META HTTP-Equiv="scanner" Content="enabled">
	






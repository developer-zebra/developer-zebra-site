---
title: Tlc39 Decoder
productversion: '1.4'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

##Overview

The Tlc39 Decoder is used to enable or disable the tlc39 decoder.

##Syntax

<table class="re-table"><tr><th class="tableHeading">tlc39 (Decoder) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="tlc39:[parameter]"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">tlc39 JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the tlc39.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set tlc39 parameters via JavaScript use the following syntax: scanner.Parameter = Value;
<P />e.g. <b>scanner</b>.tlc39 = Value;
</td></tr></table>

##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>tlc39:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">enabled/Disabled</td><td class="clsSyntaxCells clsOddRow">Enables/Disables the tlc39 decoder.</td><td class="clsSyntaxCells clsOddRow">Device specific</td></tr></table>
<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>




##Remarks


###Code39
In order to enable tlc39 barcode scanning, the code39 decoder must also be enabled.




##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Scanner or Imager module and device that supports tlc39.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td></tr></table>


##HTML/JavaScript Examples

The following example enables the scanner to read tlc39 labels:

	<META HTTP-Equiv="scanner" Content="allDecoders:disabled">
	<META HTTP-Equiv="scanner" Content="code39:enabled">
	<META HTTP-Equiv="scanner" Content="tlc39:enabled">
	<META HTTP-Equiv="scanner" Content="enabled">
	
Above example can also be written as shown below:

	<META HTTP-Equiv="scanner" Content="allDecoders:disabled;code39:enabled;tlc39:enabled;enabled">
	
Or:

	function enableTlc39()
	{
		scanner.allDecoders = 'disabled';
		scanner.tlc39 = 'enabled';
		scanner.code39 = 'enabled';
		scanner.enable();
	}
	
The following example enables the scanner to read all labels except tlc39:

	<META HTTP-Equiv="scanner" Content="allDecoders:enabled">
	<META HTTP-Equiv="scanner" Content="tlc39:disabled">
	<META HTTP-Equiv="scanner" Content="enabled">
	
Above example can also be written as shown below:

	function disableTlc39()
	{
		scanner.allDecoders = 'enabled';
		scanner.tlc39 = 'disabled';
		scanner.enable();
	}
	






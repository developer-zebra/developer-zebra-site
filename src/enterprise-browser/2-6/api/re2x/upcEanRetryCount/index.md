---
title: UpcEanRetryCount Decoder String
productversion: '2.5'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

##Overview

The UpcEanRetryCount Decoder String is used to set the upc_ean retrycount for auto-discriminating for supplementals. Possible values are 2 to 20 inclusive.

##Syntax

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">upcEanRetryCount (Decoder String) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="upcEanRetryCount:[parameter]"&gt;</p></td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">upcEanRetryCount JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the upcEanRetryCount.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set upcEanRetryCount parameters via JavaScript use the following syntax: scanner.Parameter = Value;
<P />e.g. <b>scanner</b>.upcEanRetryCount = Value;
</td></tr></table>

##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>upcEanRetryCount:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Numeric value (2 - 20)</td><td class="clsSyntaxCells clsOddRow">Sets the retry count for auto-discriminating for supplementals (2 - 20).</td><td class="clsSyntaxCells clsOddRow">Device specific</td></tr></table>






##Requirements

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Scanner or Imager module and device that supports upc_ean.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td></tr></table>


##HTML/JavaScript Examples

The following example sets the scanner to retry upc_ean codes 8 times:

	<META HTTP-Equiv="scanner" Content="allDecoders:disabled">
	<META HTTP-Equiv="scanner" Content="upcEanSupplementalMode:auto">
	<META HTTP-Equiv="scanner" Content="upcEanRetryCount:8">
	<META HTTP-Equiv="scanner" Content="enabled">
	
Above example can also be written as shown below:

	<META HTTP-Equiv="scanner" Content="allDecoders:disabled;upcEanSupplementalMode:auto;upcEanRetryCount:8;enabled">
	
or

	<META HTTP-Equiv="scanner-allDecoders" Content="disabled">
	<META HTTP-Equiv="scanner-upcEanSupplementalMode" Content="auto">
	<META HTTP-Equiv="scanner-upcEanRetryCount" Content="8">
	<META HTTP-Equiv="scanner-enabled" Content="SCN1">
	






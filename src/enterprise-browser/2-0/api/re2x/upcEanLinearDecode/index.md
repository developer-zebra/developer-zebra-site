---
title: UpcEanLinearDecode Decoder Setting
productversion: '1.8'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

##Overview

The UpcEanLinearDecode Decoder Setting is used to enable the linear decode property.

##Syntax

<table class="re-table"><tr><th class="tableHeading">upcEanLinearDecode (Decoder Setting) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="upcEanLinearDecode:[parameter]"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">upcEanLinearDecode JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the upcEanLinearDecode.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set upcEanLinearDecode parameters via JavaScript use the following syntax: scanner.Parameter = Value;
<P />e.g. <b>scanner</b>.upcEanLinearDecode = Value;
</td></tr></table>


##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>upcEanLinearDecode:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">true/false</td><td class="clsSyntaxCells clsOddRow">Sets the linear decode property to 'true' or 'false'.</td><td class="clsSyntaxCells clsOddRow">Device specific</td></tr></table>
<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>





##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices except: Enterprise Tablet.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Scanner or Imager module and device that supports the upcEanLinearDecode property.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td></tr></table>


##HTML/JavaScript Examples

The following example switches on the upcEanLinearDecode property:

	<META HTTP-Equiv="scanner" Content="allDecoders:enabled">
	<META HTTP-Equiv="scanner" Content="upcEanLinearDecode:true">
	<META HTTP-Equiv="scanner" Content="enabled">
	
Above example can also be written as shown below:

	<META HTTP-Equiv="scanner" Content="allDecoders:enabled;upcEanLinearDecode:true;enabled">
	
or

	<META HTTP-Equiv="scanner-all_decoders" Content="enabled">
	<META HTTP-Equiv="scanner-upcEanLinearDecode" Content="true">
	<META HTTP-Equiv="scanner-enabled" Content="SCN1">
	






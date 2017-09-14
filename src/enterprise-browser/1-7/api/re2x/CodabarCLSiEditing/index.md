---
title: CodabarClsiEditing Decoder Setting
productversion: '1.7'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

##Overview

The CodabarClsiEditing Decoder Setting is used to enable Codabar CLSi formatting.

##Syntax

<table class="re-table"><tr><th class="tableHeading">codabarClsiEditing (Decoder Setting) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="CodabarCLSiEditing:[parameter]"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">codabarClsiEditing JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the codabarClsiEditing.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set codabarClsiEditing parameters via JavaScript use the following syntax: scanner.Parameter = Value;
<P />e.g. <b>scanner</b>.codabarClsiEditing = Value;
</td></tr></table>

##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>codabarClsiEditing:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">true/false</td><td class="clsSyntaxCells clsOddRow">Enables/Disables CLSi formatting.</td><td class="clsSyntaxCells clsOddRow">Device specific</td></tr></table>
<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>





##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Scanner or Imager module and device supports Codabar.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td></tr></table>


##HTML/JavaScript Examples

The following example enables the scanner to read only Codabar labels with the CLSi formatting property set to true:

	<META HTTP-Equiv="scanner" Content="Codabar:enabled">
	<META HTTP-Equiv="scanner" Content="CodabarCLSiEditing:true">
	<META HTTP-Equiv="scanner" Content="enabled">
	
Above example can also be written as shown below:

	<META HTTP-Equiv="scanner" Content="Codabar:enabled;CodabarCLSiEditing:true;enabled">
	
or

	<META HTTP-Equiv="scanner-Codabar" Content="enabled">
	<META HTTP-Equiv="scanner-CodabarCLSiEditing" Content="true">
	<META HTTP-Equiv="scanner-enabled" Content="SCN1">
	






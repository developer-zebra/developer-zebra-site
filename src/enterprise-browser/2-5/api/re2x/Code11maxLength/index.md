---
title: Code11maxLength Decoder Setting
productversion: '2.0'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

##Overview

The Code11maxLength Decoder Setting is used to set the Code11 MaxLength property.

##Syntax

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">code11maxLength (Decoder Setting) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="code11maxLength:[parameter]"&gt;</p></td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">code11maxLength JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the code11maxLength.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set code11maxLength parameters via JavaScript use the following syntax: scanner.Parameter = Value;
<P />e.g. <b>scanner</b>.code11maxLength = Value;
</td></tr></table>


##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>code11maxLength:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Numeric value (0 - 55)</td><td class="clsSyntaxCells clsOddRow">Numeric value setting the maximum number of characters for the Code11 structure (1 - 55).</td><td class="clsSyntaxCells clsOddRow">Device Specific</td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>





##Requirements

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All Supported Devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Scanner or Imager module and device that supports Code11.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td></tr></table>


##HTML/JavaScript Examples

The following example enables the scanner to read only Code11 labels with the MaxLength property set to 30:

	<META HTTP-Equiv="scanner" Content="Code11:enabled">
	<META HTTP-Equiv="scanner" Content="code11maxLength:30">
	<META HTTP-Equiv="scanner" Content="enabled">
	
Above example can also be written as shown below:

	<META HTTP-Equiv="scanner" Content="Code11:enabled;code11maxLength:30;enabled">
	
or

	<META HTTP-Equiv="scanner-Code11" Content="enabled">
	<META HTTP-Equiv="scanner-code11maxLength" Content="30">
	<META HTTP-Equiv="scanner-enabled" Content="SCN1">
	






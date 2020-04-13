---
title: MsiCheckDigits Decoder Setting
productversion: '2.6'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

##Overview

The MsiCheckDigits Decoder Setting is used to set the msi checkdigits property.

##Syntax

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">msiCheckDigits (Decoder Setting) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="msicheckdigits:[parameter]"&gt;</p></td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">msiCheckDigits JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the msiCheckDigits.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set msiCheckDigits parameters via JavaScript use the following syntax: scanner.Parameter = Value;
<P />e.g. <b>scanner</b>.msiCheckDigits = Value;
</td></tr></table>

##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>msiCheckDigits:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">one/two</td><td class="clsSyntaxCells clsOddRow">Sets the msi checkdigits property to one or two.</td><td class="clsSyntaxCells clsOddRow">Device specific</td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>





##Requirements

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Scanner or Imager module and device that supports MSI.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td></tr></table>


##HTML/JavaScript Examples

The following example enables the scanner to read only msi labels with the checkdigits property set:

	<META HTTP-Equiv="scanner" Content="msi:enabled">
	<META HTTP-Equiv="scanner" Content="msicheckdigits:one">
	<META HTTP-Equiv="scanner" Content="enabled">
	
Above example can also be written as shown below:

	<META HTTP-Equiv="scanner" Content="msi:enabled;msicheckdigits:one;enabled">
	
or

	<META HTTP-Equiv="scanner-msi" Content="enabled">
	<META HTTP-Equiv="scanner-msicheckdigits" Content="one">
	<META HTTP-Equiv="scanner-enabled" Content="SCN1">
	






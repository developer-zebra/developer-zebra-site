---
title: MsiCheckDigitScheme Decoder Setting
productversion: '1.7'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

##Overview

The MsiCheckDigitScheme Decoder Setting is used to set the msiCheckDigitScheme property to describe the check digit scheme to verify.

##Syntax

<table class="re-table"><tr><th class="tableHeading">msiCheckDigitScheme (Decoder Setting) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="msiCheckDigitScheme:[parameter]"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">msiCheckDigitScheme JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the msiCheckDigitScheme.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set msiCheckDigitScheme parameters via JavaScript use the following syntax: scanner.Parameter = Value;
<P />e.g. <b>scanner</b>.msiCheckDigitScheme = Value;
</td></tr></table>

##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>msiCheckDigitScheme:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">mod11/mod10</td><td class="clsSyntaxCells clsOddRow">if value is "mod11 then the first check digit is MOD 11, the second is MOD 10. if value is "mod10" then both check digits are MOD 10.</td><td class="clsSyntaxCells clsOddRow">Device specific</td></tr></table>
<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>





##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Scanner or Imager module and device that supports MSI.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td></tr></table>


##HTML/JavaScript Examples

The following example enables the scanner to read only msi labels with the CheckDigitScheme property set to both check digits being MOD 10:

	<META HTTP-Equiv="scanner" Content="msi:enabled">
	<META HTTP-Equiv="scanner" content="msicheckdigits:true">
	<META HTTP-Equiv="scanner" Content="msiCheckDigitScheme:mod10">
	<META HTTP-Equiv="scanner" Content="enabled">
	
Above example can also be written as shown below:

	<META HTTP-Equiv="scanner" Content="msi:enabled;msicheckdigits:true;msiCheckDigitScheme:mod10;enabled">
	
or

	<META HTTP-Equiv="scanner-msi" Content="enabled">
	<META HTTP-Equiv="scanner-msicheckdigits" content="true">
	<META HTTP-Equiv="scanner-msiCheckDigitScheme" Content="mod10">
	<META HTTP-Equiv="scanner-enabled" Content="SCN1">
	






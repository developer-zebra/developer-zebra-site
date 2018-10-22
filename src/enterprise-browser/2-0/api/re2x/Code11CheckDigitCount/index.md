---
title: Code11checkDigitCount Decoder Setting
productversion: '2.0'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

##Overview

The Code11checkDigitCount Decoder Setting is used to set the Code11CheckDigitCount property. The property can be set to verify 0, 1 or 2 check digits.

##Syntax

<table class="re-table"><tr><th class="tableHeading">code11checkDigitCount (Decoder Setting) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="Code11CheckDigitCount:[parameter]"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">code11checkDigitCount JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the code11checkDigitCount.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set code11checkDigitCount parameters via JavaScript use the following syntax: scanner.Parameter = Value;
<P />e.g. <b>scanner</b>.code11checkDigitCount = Value;
</td></tr></table>

##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>code11checkDigitCount:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">none/one/two</td><td class="clsSyntaxCells clsOddRow">if value is "none" then String to verify no check digits,if value is one then String to verify 1 check digit.
                                if value is "two" then String to verify 2 check digits.</td><td class="clsSyntaxCells clsOddRow">
N/A
</td></tr></table>
<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>





##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Scanner or Imager module and device that supports Code11.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td></tr></table>


##HTML/JavaScript Examples

The following example enables the scanner to read only Code11 labels with the CheckDigitCount property set to verify one check digit

	<META HTTP-Equiv="scanner" Content="Code11:enabled">
	<META HTTP-Equiv="scanner" Content="Code11CheckDigitCount:one">
	<META HTTP-Equiv="scanner" Content="enabled">
	
Above example can also be written as shown below:

	<META HTTP-Equiv="scanner" Content="Code11:enabled;Code11CheckDigitCount:one;enabled">
	
or

	<META HTTP-Equiv="scanner-Code11" Content="enabled">
	<META HTTP-Equiv="scanner-Code11CheckDigitCount" Content="one">
	<META HTTP-Equiv="scanner-enabled" Content="SCN1">
	






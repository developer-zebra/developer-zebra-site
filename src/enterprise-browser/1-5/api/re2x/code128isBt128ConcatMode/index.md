---
title: Code128isBt128ConcatMode Decoder Setting
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

##Overview

The Code128isBt128ConcatMode Decoder Setting is used to set the Code128 ISBT Concatenation mode property. This feature allows a pair of barcodes which meet certain criteria defined in the ISBT128 spec to be reported as a single barcode. This parameter describes the different concatenation modes available for ISBT128.

##Syntax

<table class="re-table"><tr><th class="tableHeading">code128isBt128ConcatMode (Decoder Setting) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="code128isBt128ConcatMode:[parameter]"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">code128isBt128ConcatMode JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the code128isBt128ConcatMode.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set code128isBt128ConcatMode parameters via JavaScript use the following syntax: scanner.Parameter = Value;
<P />e.g. <b>scanner</b>.code128isBt128ConcatMode = Value;
</td></tr></table>



##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>code128isBt128ConcatMode:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">never / always / auto</td><td class="clsSyntaxCells clsOddRow">Never: Will ignore the barcode pair and only output decode data for one of the barcodes.  Always: Will not decode if both barcodes are not present or if one of them can not be decoded.  Auto: Auto-Discriminate</td><td class="clsSyntaxCells clsOddRow">Device specific</td></tr></table>
<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>





##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Scanner or Imager module and device that supports Code128.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td></tr></table>


##HTML/JavaScript Examples

The following example enables the scanner to read only Code128 labels with the code128isBt128ConcatMode property set

	<META HTTP-Equiv="scanner" Content="Code128:enabled">
	<META HTTP-Equiv="scanner" Content="code128isBt128ConcatMode:auto">
	<META HTTP-Equiv="scanner" Content="enabled">
					






---
title: SignatureImageWidth Decoder Setting
productversion: '1.4'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

##Overview

The SignatureImageWidth Decoder Setting is used to set the image width property of the signature decoder.

##Syntax

<table class="re-table"><tr><th class="tableHeading">signatureImageWidth (Decoder Setting) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="signatureImageWidth:[parameter]"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">signatureImageWidth JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the signatureImageWidth.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set signatureImageWidth parameters via JavaScript use the following syntax: scanner.Parameter = Value;
<P />e.g. <b>scanner</b>.signatureImageWidth = Value;
</td></tr></table>

##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>signatureImageWidth:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">number</td><td class="clsSyntaxCells clsOddRow">The width of the desired output image.  The barcode will be returned as a Data URI object with a jpeg mime type, you should specify the barcodeDataFormat and dataBufferSize parameters accordingly.</td><td class="clsSyntaxCells clsOddRow">Device specific</td></tr></table>
<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>





##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">2.1 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices except: Enterprise Tablet.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Scanner and device that supports the Signature decoder.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td></tr></table>


##HTML/JavaScript Examples

The following example enables the scanner to specify the signatureImageWidth parameter

	<META HTTP-Equiv="scanner" Content="signature:enabled">
	<META HTTP-Equiv="scanner" Content="signatureImageWidth:500">
	<META HTTP-Equiv="scanner" Content="barcodeDataFormat:binary;dataBufferSize:5000">
	<META HTTP-Equiv="scanner" Content="enabled">
					






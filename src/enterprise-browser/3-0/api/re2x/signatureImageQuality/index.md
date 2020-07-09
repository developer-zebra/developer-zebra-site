---
title: SignatureImageQuality Decoder Setting
productversion: '3.0'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

##Overview

The SignatureImageQuality Decoder Setting is used to set the image quality property of the signature decoder.

##Syntax

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">signatureImageQuality (Decoder Setting) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="signatureImageQuality:[parameter]"&gt;</p></td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">signatureImageQuality JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the signatureImageQuality.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set signatureImageQuality parameters via JavaScript use the following syntax: scanner.Parameter = Value;
<P />e.g. <b>scanner</b>.signatureImageQuality = Value;
</td></tr></table>

##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>signatureImageQuality:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">0 - 100</td><td class="clsSyntaxCells clsOddRow">Specifies the quality of the compressed JPEG image. 100 means optimize for the highest quality and 0 means optimize for image size.  The barcode will be returned as a Data URI object with a jpeg mime type, you should specify the barcodeDataFormat and dataBufferSize parameters accordingly.</td><td class="clsSyntaxCells clsOddRow">Device specific</td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>





##Requirements

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">2.1 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices except: Enterprise Tablet.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Scanner and device that supports the Signature decoder.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td></tr></table>


##HTML/JavaScript Examples

The following example enables the scanner to specify the signatureImageQuality parameter

	<META HTTP-Equiv="scanner" Content="signature:enabled">
	<META HTTP-Equiv="scanner" Content="barcodeDataFormat:binary;dataBufferSize:5000">
	<META HTTP-Equiv="scanner" Content="signatureImageQuality:100">
	<META HTTP-Equiv="scanner" Content="enabled">
	






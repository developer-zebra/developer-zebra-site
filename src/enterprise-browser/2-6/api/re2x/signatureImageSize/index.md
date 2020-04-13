---
title: SignatureImageSize Decoder Setting
productversion: '2.5'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

##Overview

The SignatureImageSize Decoder Setting is used to set the image size property of the signature decoder.

##Syntax

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">signatureImageSize (Decoder Setting) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="signatureImageSize:[parameter]"&gt;</p></td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">signatureImageSize JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the signatureImageSize.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set signatureImageSize parameters via JavaScript use the following syntax: scanner.Parameter = Value;
<P />e.g. <b>scanner</b>.signatureImageSize = Value;
</td></tr></table>

##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>signatureImageSize:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">size in KB</td><td class="clsSyntaxCells clsOddRow">Specifies the maximum compressed JPEG image size, in kilobytes.  Specifying a value of 0 means optimize for image quality.  Note JPEG image will be optimized for either quality or size, size restrictions take priority over quality restrictions.</td><td class="clsSyntaxCells clsOddRow">Device specific</td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>





##Requirements

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">2.1 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices except: Enterprise Tablet.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Scanner or Imager module and device that supports Signature.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td></tr></table>


##HTML/JavaScript Examples

The following example enables the scanner to specify the signatureImageSize parameter

	<META HTTP-Equiv="scanner" Content="signature:enabled">
	<META HTTP-Equiv="scanner" Content="signatureImageSize:0">
	<META HTTP-Equiv="scanner" Content="enabled">
					






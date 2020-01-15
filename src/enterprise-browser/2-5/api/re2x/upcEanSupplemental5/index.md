---
title: UpcEanSupplemental5 Decoder Setting
productversion: '2.0'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

##Overview

The UpcEanSupplemental5 Decoder Setting is used to enable or disable upcEanSupplemental5 supplemental barcodes.

##Syntax

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">upcEanSupplemental5 (Decoder Setting) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="upcEanSupplemental5:[parameter]"&gt;</p></td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">upcEanSupplemental5 JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the upcEanSupplemental5.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set upcEanSupplemental5 parameters via JavaScript use the following syntax: scanner.Parameter = Value;
<P />e.g. <b>scanner</b>.upcEanSupplemental5 = Value;
</td></tr></table>

##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>upcEanSupplemental5:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">true/false</td><td class="clsSyntaxCells clsOddRow">Enables/Disables the supplemental barcode decoding.  Note you must have upcEanSupplementalMode:always set for this parameter to take effect</td><td class="clsSyntaxCells clsOddRow">Device specific</td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>




##Remarks


###



###Picklist mode
UPC EAN Supplemental 5 is not compatible with picklist mode.




##Requirements

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Scanner or Imager module and device that supports decoding upcEanSupplemental5 barcodes.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td></tr></table>


##HTML/JavaScript Examples

The following example enables the scanner to decode upcEanSupplemental5 barcodes:

	<META HTTP-Equiv="scanner" Content="allDecoders:enabled">
	<META HTTP-Equiv="scanner" Content="upcEanSupplementalMode:always">   
	<META HTTP-Equiv="scanner" Content="upcEanSupplemental5:true">
	<META HTTP-Equiv="scanner" Content="enabled">
	
The following example enables the scanner to decode upcEanSupplemental5 barcodes:

	<META HTTP-Equiv="scanner" Content="allDecoders:enabled;upcEanSupplementalMode:always;upcEanSupplemental5:true;enabled">
	
The following example enables the scanner to decode upcEanSupplemental5 barcodes:

	<META HTTP-Equiv="scanner-allDecoders" Content="enabled">
	<META HTTP-Equiv="scanner-upcEanSupplementalMode" Content="always">   
	<META HTTP-Equiv="scanner-upcEanSupplemental5" Content="true">
	<META HTTP-Equiv="scanner-enabled" Content="SCN1">
	






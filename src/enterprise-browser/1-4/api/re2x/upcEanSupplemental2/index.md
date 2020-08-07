---
title: UpcEanSupplemental2 Decoder Setting
productversion: '1.4'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

##Overview

The UpcEanSupplemental2 Decoder Setting is used to enable or disable upcEanSupplemental2 supplemental barcodes.

##Syntax

<table class="re-table"><tr><th class="tableHeading">upcEanSupplemental2 (Decoder Setting) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="upcEanSupplemental2:[parameter]"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">upcEanSupplemental2 JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the upcEanSupplemental2.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set upcEanSupplemental2 parameters via JavaScript use the following syntax: scanner.Parameter = Value;
<P />e.g. <b>scanner</b>.upcEanSupplemental2 = Value;
</td></tr></table>

##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>upcEanSupplemental2:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">true/false</td><td class="clsSyntaxCells clsOddRow">Enables/disables the supplemental barcode decoding.  Note you must have upcEanSupplementalMode:always set for this parameter to take effect</td><td class="clsSyntaxCells clsOddRow">Device specific</td></tr></table>
<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>




##Remarks


###



###Picklist mode
UPC EAN Supplemental 2 is not compatible with picklist mode.




##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Scanner or Imager module and device that supports decoding upcEanSupplemental2 barcodes.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td></tr></table>


##HTML/JavaScript Examples

The following example enables the scanner to decode upcEanSupplemental2 barcodes:

	<META HTTP-Equiv="Scanner" Content="allDecoders:enabled">
	<META HTTP-Equiv="Scanner" Content="upcEanSupplementalMode:always">   
	<META HTTP-Equiv="Scanner" Content="upcEanSupplemental2:true">
	<META HTTP-Equiv="scanner" Content="enabled">
	
Above example can also be written as shown below:

	<META HTTP-Equiv="Scanner" Content="allDecoders:enabled;upcEanSupplementalMode:always;upcEanSupplemental2:true;enabled">
	
or

	<META HTTP-Equiv="Scanner-allDecoders" Content="enabled">
	<META HTTP-Equiv="Scanner-upcEanSupplementalMode" Content="always">   
	<META HTTP-Equiv="Scanner-upcEanSupplemental2" Content="true">
	<META HTTP-Equiv="scanner-enabled" Content="SCN1">
	






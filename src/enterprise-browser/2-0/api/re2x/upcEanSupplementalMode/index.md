---
title: UpcEanSupplementalMode Decoder Setting
productversion: '1.8'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

##Overview

The UpcEanSupplementalMode Decoder Setting is used to set the upcEanSupplementalMode.

##Syntax

<table class="re-table"><tr><th class="tableHeading">upcEanSupplementalMode (Decoder Setting) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="upcEanSupplementalMode:[parameter]"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">upcEanSupplementalMode JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the upcEanSupplementalMode.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set upcEanSupplementalMode parameters via JavaScript use the following syntax: scanner.Parameter = Value;
<P />e.g. <b>scanner</b>.upcEanSupplementalMode = Value;
</td></tr></table>

##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>upcEanSupplementalMode:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">See Description</td><td class="clsSyntaxCells clsOddRow">Describes the supplemental mode enabled.  Possible values:
<DESCDETAIL>
none:
  Supplementals are ignored.
auto:
  Auto-discriminates supplementals.
always:  
  Will not decode upc/ean without supplementals
smart:
  The decoder will return the decoded value of the main block right away if it does not belong 
  to any of the supplemental types.  If the barcode starts with one of the prefixes it will 
  search the image more aggressively for a supplemental.  The scanner will try to scan the 
  supplemental if it is present but if that fails, the main barcode will be returned.  
378or379:
  Auto-discriminates supplemental for upc/ean codes starting with 378 or 379.  Will disable 
  reading of supplementals for any other upc/ean barcodes not starting with these values.  
  The supplemental will be scanned if present but if scanning fails then the main barcode 
  will be returned.  
978or979:
  Auto-discriminates supplemental for upc/ean codes starting with 978 or 979.  Will disable 
  reading of supplementals for any other upc/ean barcodes not starting with these values.  
  The supplemental will be scanned if present but if scanning fails then the main barcode 
  will be returned.  
414or419or434or439:
  Auto-discriminates supplemental for upc/ean codes starting with 414 or 419 or 434 or 439.  
  Will disable reading of supplementals for any other upc/ean barcodes not starting with 
  these values.  The supplemental will be scanned if present but if scanning fails then 
  the main barcode will be returned.  
  </DESCDETAIL></td><td class="clsSyntaxCells clsOddRow">Device specific</td></tr></table>
<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>




##Remarks


###Picklist mode
UPC EAN Supplemental mode is not compatible with picklist mode.




##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Scanner or Imager module and device that supports decoding upcEanSupplemental barcodes.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td></tr></table>


##HTML/JavaScript Examples

The following will only read upc/ean codes with supplementals:

	<META HTTP-Equiv="scanner" Content="allDecoders:enabled">
	<META HTTP-Equiv="scanner" Content="upcEanSupplementalMode:always">
	<META HTTP-Equiv="scanner" Content="enabled">
	
Above example can also be written as shown below:

	<META HTTP-Equiv="scanner" Content="allDecoders:enabled;upcEanSupplementalMode:always;enabled">
	
or

	<META HTTP-Equiv="scanner-allDecoders" Content="enabled">
	<META HTTP-Equiv="scanner-upcEanSupplementalMode" Content="always">
	<META HTTP-Equiv="scanner-enabled" Content="SCN1">
	






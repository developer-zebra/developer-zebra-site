---
title: CompositeAbUseUpcPreambleCheckDigitRules Decoder Setting
productversion: '1.4'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

##Overview

The CompositeAbUseUpcPreambleCheckDigitRules Decoder Setting causes the UPC rules specified in the UPC EAN parameters to be used when reporting composite decode data.

##Syntax

<table class="re-table"><tr><th class="tableHeading">compositeAbUseUpcPreambleCheckDigitRules (Decoder Setting) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="compositeAbUseUpcPreambleCheckDigitRules:[parameter]"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">compositeAbUseUpcPreambleCheckDigitRules JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the compositeAbUseUpcPreambleCheckDigitRules.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set compositeAbUseUpcPreambleCheckDigitRules parameters via JavaScript use the following syntax: scanner.Parameter = Value;
<P />e.g. <b>scanner</b>.compositeAbUseUpcPreambleCheckDigitRules = Value;
</td></tr></table>

##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>compositeAbUseUpcPreambleCheckDigitRules:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">true / false</td><td class="clsSyntaxCells clsOddRow">Enables / Disables the property.</td><td class="clsSyntaxCells clsOddRow">Device specific</td></tr></table>
<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>





##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices except: Enterprise Tablet.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Scanner or Imager module and device that supports CompositeAB.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td></tr></table>


##HTML/JavaScript Examples

The following example enables the scanner to read barcodes with the compositeAbUseUpcPreambleCheckDigitRules property set

	<META HTTP-Equiv="scanner" Content="compositeAb:enabled">
	<META HTTP-Equiv="scanner" Content="compositeAbUseUpcPreambleCheckDigitRules:true">
	<META HTTP-Equiv="scanner" Content="enabled">
					





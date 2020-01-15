---
title: MacroPdfConvertToPdf417 Decoder Setting
productversion: '2.0'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

##Overview

The MacroPdfConvertToPdf417 Decoder Setting is used to set the macroPdfConvertToPdf417 property.

##Syntax

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">macroPdfConvertToPdf417 (Decoder Setting) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="macroPdfConvertToPdf417:[parameter]"&gt;</p></td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">macroPdfConvertToPdf417 JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the macroPdfConvertToPdf417.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set macroPdfConvertToPdf417 parameters via JavaScript use the following syntax: scanner.Parameter = Value;
<P />e.g. <b>scanner</b>.macroPdfConvertToPdf417 = Value;
</td></tr></table>


##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>macroPdfConvertToPdf417:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">true / false</td><td class="clsSyntaxCells clsOddRow">If true, MacroPDF barcodes will be converted to PDF417 codes.</td><td class="clsSyntaxCells clsOddRow">Device specific</td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>





##Requirements

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices except: Enterprise Tablet.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Scanner or Imager module and device that supports MacroPDF and PDF417.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td></tr></table>


##HTML/JavaScript Examples

The following example enables the scanner and sets macroPdfConvertToPdf417 property

	<META HTTP-Equiv="scanner" Content="macroPdf:enabled; pdf417:enabled">
	<META HTTP-Equiv="scanner" Content="macroPdfConvertToPdf417:true">
	<META HTTP-Equiv="scanner" Content="enabled">
					






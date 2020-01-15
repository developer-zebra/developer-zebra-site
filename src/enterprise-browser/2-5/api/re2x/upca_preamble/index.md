---
title: UpcaPreamble Decoder Setting
productversion: '2.5'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

##Overview

The UpcaPreamble Decoder Setting is used to set the upcapreamble property which controls the preamble applied to the bar code.

##Syntax

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">upcaPreamble (Decoder Setting) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="upcapreamble:[parameter]"&gt;</p></td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">upcaPreamble JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the upcaPreamble.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set upcaPreamble parameters via JavaScript use the following syntax: scanner.Parameter = Value;
<P />e.g. <b>scanner</b>.upcaPreamble = Value;
</td></tr></table>

##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>upcaPreamble:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">none / systemChar / countryAndSystemChars</td><td class="clsSyntaxCells clsOddRow">if value is none Applies no preamble to the bar code.if value is systemChar then Applies system character preamble to the bar code.if value is countryAndSystemChars Applies both system and country code preamble to the bar code.</td><td class="clsSyntaxCells clsOddRow">Device specific</td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>





##Requirements

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Scanner or Imager module and device that supports upca.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td></tr></table>


##HTML/JavaScript Examples

The following example enables the scanner to read only upca labels with the preamble property set to both system and country code preamble:

	<META HTTP-Equiv="scanner" Content="upca:enabled">
	<META HTTP-Equiv="scanner" Content="upcapreamble:countryAndSystemChars">
	<META HTTP-Equiv="scanner" Content="enabled">
	
Above example can also be written as shown below:

	<META HTTP-Equiv="scanner" Content="upca:enabled;upcapreamble:countryAndSystemChars;enabled">
	
or

	<META HTTP-Equiv="scanner-upca" Content="enabled">
	<META HTTP-Equiv="scanner-upcapreamble" Content="countryAndSystemChars">
	<META HTTP-Equiv="scanner-enabled" Content="SCN1">
	






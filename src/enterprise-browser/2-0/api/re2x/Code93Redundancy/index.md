---
title: Code93redundancy Decoder Setting
productversion: '2.0'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

##Overview

The Code93redundancy Decoder Setting is used to set the Code93 Redundancy property. If this flag is set, the bar code must be decoded twice before being accepted.

##Syntax

<table class="re-table"><tr><th class="tableHeading">code93redundancy (Decoder Setting) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="Code93Redundancy:[parameter]"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">code93redundancy JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the code93redundancy.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set code93redundancy parameters via JavaScript use the following syntax: scanner.Parameter = Value;
<P />e.g. <b>scanner</b>.code93redundancy = Value;
</td></tr></table>

##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>code93redundancy:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">true/false</td><td class="clsSyntaxCells clsOddRow">Enables/Disables the property.</td><td class="clsSyntaxCells clsOddRow">Device specific</td></tr></table>
<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>





##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Scanner or Imager module and device that supports Code93.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td></tr></table>


##HTML/JavaScript Examples

The following example enables the scanner to read only Code93 labels with the Redundancy property set

						<META HTTP-Equiv="scanner" Content="Code93:enabled">
						<META HTTP-Equiv="scanner" Content="Code93Redundancy:true">
						<META HTTP-Equiv="scanner" Content="enabled">
					
Above example can also be written as shown below:

						<META HTTP-Equiv="scanner" Content="Code93:enabled;Code93Redundancy:true;enabled">
					
or

						<META HTTP-Equiv="scanner-Code93" Content="enabled">
						<META HTTP-Equiv="scanner-Code93Redundancy" Content="true">
						<META HTTP-Equiv="scanner-enabled" Content="SCN1">
					






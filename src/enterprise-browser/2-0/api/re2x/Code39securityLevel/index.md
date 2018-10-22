---
title: Code39securityLevel Decoder Setting
productversion: '1.8'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

##Overview

The Code39securityLevel Decoder Setting is used to set the code39securityLevel which describes the Code 128 security level.

##Syntax

<table class="re-table"><tr><th class="tableHeading">Code39securityLevel (Decoder Setting) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="code39securityLevel:[parameter]"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">Code39securityLevel JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the Code39securityLevel.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set Code39securityLevel parameters via JavaScript use the following syntax: scanner.Parameter = Value;
<P />e.g. <b>scanner</b>.code39securityLevel = Value;
</td></tr></table>

##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>code39securityLevel:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">0 - 3 inclusive</td><td class="clsSyntaxCells clsOddRow">0: This setting allows the scanner to operate in its most aggressive state, while providing sufficient security in decoding most 'in-spec' barcodes.  1: This setting eliminates most mis-decodes.  2: Select this option if security level 1 fails to eliminate mis-decodes.  3: Select this option if security level 1 and 2 fail to eliminate mis-decodes.  Be advised that selecting level 3 is an extreme measure against mis-decoding and will significantly impair the decoding ability of the scanner.</td><td class="clsSyntaxCells clsOddRow">Device Specific</td></tr></table>
<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>





##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All Supported Devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Scanner or Imager module and device that supports code39securityLevel.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td></tr></table>


##HTML/JavaScript Examples

The following example sets the code39securityLevel to level 2:

	<META HTTP-Equiv="scanner" Content="allDecoders:enabled">
	<META HTTP-Equiv="scanner" Content="code39securityLevel:2">
	<META HTTP-Equiv="scanner" Content="enabled">
	
Above example can also be written as shown below:

	<META HTTP-Equiv="scanner" Content="allDecoders:enabled;code39securityLevel:2;enabled">
	
or

	<META HTTP-Equiv="scanner-allDecoders" Content="enabled">
	<META HTTP-Equiv="scanner-code39securityLevel" Content="2">
	<META HTTP-Equiv="scanner-enabled" Content="SCN1">
	






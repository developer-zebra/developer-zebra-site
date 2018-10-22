---
title: AllDecoders Module
productversion: '2.0'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

##Overview
The AllDecoders Module is used to set the barcode scanner to read all barcode types that the scanner is capable of reading.

## Syntax

<table class="re-table">
	<tr>
		<th class="tableHeading">allDecoders (Decoder) &lt;META&gt; Syntax</th>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="allDecoders:[parameter]"&gt;</p></td>
	</tr>
</table>

<table class="re-table">
	<tr>
		<th class="tableHeading">allDecoders JavaScript Object Syntax:</th>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow">
			By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the allDecoders.
		</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow">
			To Set allDecoders parameters via JavaScript use the following syntax: scanner.Parameter = Value;
			<br/><br/>
			e.g. <b>scanner</b>.allDecoders = Value;
		</td>
	</tr>
</table>

## Parameters
Items listed in this section indicate parameters, or attributes which can be set.

<table class="re-table"><col width="20%"/><col width="20%"/><col width="38%"/><col width="22%"/>
	<tr>
		<th class="tableHeading">Name</th>
		<th class="tableHeading">Possible Values</th>
		<th class="tableHeading">Description</th>
		<th class="tableHeading">Default Value</th>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>allDecoders:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">enabled / disabled</td>
		<td class="clsSyntaxCells clsOddRow">Enable / Disables all available decoders</td>
		<td class="clsSyntaxCells clsOddRow">N/A</td>
	</tr>
</table>

## Remarks
### Exception
Some decoders will not be enabled as some symbologies use the same systems to encode data, making it impossible to differentiate between them. For example: "canpostal" and "auspostal" both use a 4-state system, so devices will only enable either "canpostal" OR "auspostal" when "alldecoders" is enabled. Note that other symbologies also share the 4-state system.

## Requirements

<table class="re-table">
	<tr>
		<th class="tableHeading">RhoElements Version</th>
		<td class="clsSyntaxCell clsEvenRow">1.0.0 or above</td>
	</tr>
	<tr>
		<th class="tableHeading">Supported Devices</th>
		<td class="clsSyntaxCell clsOddRow">All supported devices.</td>
	</tr>
	<tr>
		<th class="tableHeading">Minimum Requirements</th>
		<td class="clsSyntaxCell clsOddRow">Zebra barcode scanner hardware.</td>
	</tr>
	<tr>
		<th class="tableHeading">Persistence</th>
		<td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td>
	</tr>
</table>

## HTML/JavaScript Examples
The following example enables all available decoders then turns on the scanner:

	:::html
	<META HTTP-Equiv="scanner" Content="allDecoders:enabled">
	<META HTTP-Equiv="scanner" Content="enable">
	
The following example enables all available decoders then turns on the scanner:

	:::html
	<META HTTP-Equiv="scanner" Content="allDecoders:enabled;enable">



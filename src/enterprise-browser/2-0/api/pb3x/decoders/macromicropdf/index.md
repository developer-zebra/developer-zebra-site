---
title: MacroMicroPDF Meta Tag
productversion: '2.0'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The MacroMicroPDF Meta Tag is an action tag used to enable or disable the MacroMicroPDF decoder.

﻿    <div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">MacroMicroPDF (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="scanner" content="MacroMicroPDF:[parameter&gt;</pre>
</td>
</tr>
</table>
</blockquote><br></div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('ParametersWSpan', 'imgParametersWToggle')"><img align="absmiddle" id="imgParametersWToggle" alt="ParametersW Toggle" onmouseover="this.style.cursor='hand'" src="../../Resources/ToggleCollapse.gif&#xA;					"></span>
Parameters
</p>
<div id="ParametersWSpan" style="display:block">
<blockquote>
Items listed in this section indicate parameters, or attributes which can be set.
<BR><BR><table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<col width="20%">
<col width="20%">
<col width="38%">
<col width="22%">
<tr>
<th class="clsSyntaxHeadings">Name</th>
<th class="clsSyntaxHeadings">Possible Values</th>
<th class="clsSyntaxHeadings">Description</th>
<th class="clsSyntaxHeadings">
<table cellspacing="0" cellpadding="0">
<tr>
  <td width="85%" class="clsSyntaxHeadings" style="border-bottom-style: none;">Default Value</td>
</tr>
</table>
</th>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>MacroMicroPDF:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">enabled/disabled</td>
<td valign="top" class="clsSyntaxCells">Enables/disables the MacroMicroPDF decoder.</td>
<td valign="top" class="clsSyntaxCells">Device specific</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="78%">
<col width="8%">
<col width="1%">
<col width="5%">
<col width="1%">
<col width="5%">
<col width="2%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><b>Copy parameters template to clipboard:</b></nobr></td>
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsW" alt="Copy META Tag template to clipboard" onclick="CopyTemplate('txtMETATemplateW')" onmouseover="this.style.cursor='hand'" src="../../Resources/CopyDefaults.gif">
	META Tags
</nobr></td>
<td></td>
<td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsW" alt="Copy Javascript template to clipboard" onclick="CopyTemplate('txtJavascriptTemplateW')" onmouseover="this.style.cursor='hand'" src="../../Resources/CopyDefaults.gif">
	Javascript
</nobr></td>
<td></td>
</tr>
</table>
<div style="display:none"><textarea id="txtMETATemplateW">&lt;!-- 
The MacroMicroPDF META Tag is an action tag used to enable or disable the MacroMicroPDF decoder.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="Scanner" Content="MacroMicroPDF:[Value]"&gt; --&gt;      &lt;!-- Enables/disables the MacroMicroPDF decoder. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The MacroMicroPDF META Tag is an action tag used to enable or disable the MacroMicroPDF decoder.
*/

function doMacroMicroPDFInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Scanner', 'MacroMicroPDF:[Value]');      /* Enables/disables the MacroMicroPDF decoder. */

}
&lt;/script&gt;</textarea></div>
</blockquote><br></div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('ExamplesSpan', 'imgExamplesToggle')"><img align="absmiddle" id="imgExamplesToggle" alt="Examples Toggle" onmouseover="this.style.cursor='hand'" src="../../Resources/ToggleCollapse.gif"></span>
Examples
</p>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example enables the scanner to read only MacroMicroPDF labels:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="scanner" Content="all_decoders:disabled"&gt;
&lt;META HTTP-Equiv="scanner" Content="MacroMicroPDF:enabled"&gt;
&lt;META HTTP-Equiv="scanner" Content="enabled"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EJB');">
	Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EJB">&lt;!-- 
The following example enables the scanner to read only MacroMicroPDF labels:
--&gt;

&lt;META HTTP-Equiv="scanner" Content="all_decoders:disabled"&gt;
&lt;META HTTP-Equiv="scanner" Content="MacroMicroPDF:enabled"&gt;
&lt;META HTTP-Equiv="scanner" Content="enabled"&gt;
</textarea></div>
<p>Above example can also be written as shown below:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="scanner" Content="all_decoders:disabled;MacroMicroPDF:enabled;enabled"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EQB');">
	Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EQB">&lt;!-- 
Above example can also be written as shown below:
--&gt;

&lt;META HTTP-Equiv="scanner" Content="all_decoders:disabled;MacroMicroPDF:enabled;enabled"&gt;
</textarea></div>
<p>or</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="scanner-all_decoders" Content="disabled"&gt;
&lt;META HTTP-Equiv="scanner-MacroMicroPDF" Content="enabled"&gt;
&lt;META HTTP-Equiv="scanner-enabled" Content="SCN1"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EXB');">
	Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EXB">&lt;!-- 
or
--&gt;

&lt;META HTTP-Equiv="scanner-all_decoders" Content="disabled"&gt;
&lt;META HTTP-Equiv="scanner-MacroMicroPDF" Content="enabled"&gt;
&lt;META HTTP-Equiv="scanner-enabled" Content="SCN1"&gt;
</textarea></div>
<p>The following example enables the scanner to read all labels except MacroMicroPDF:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="scanner" Content="all_decoders:enabled"&gt;
&lt;META HTTP-Equiv="scanner" Content="MacroMicroPDF:disabled"&gt;
&lt;META HTTP-Equiv="scanner" Content="enabled"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0E5B');">
	Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0E5B">&lt;!-- 
The following example enables the scanner to read all labels except MacroMicroPDF:
--&gt;

&lt;META HTTP-Equiv="scanner" Content="all_decoders:enabled"&gt;
&lt;META HTTP-Equiv="scanner" Content="MacroMicroPDF:disabled"&gt;
&lt;META HTTP-Equiv="scanner" Content="enabled"&gt;
</textarea></div>
</blockquote>
</div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('InfoSpan', 'imgInfoToggle')"><img align="absmiddle" id="imgInfoToggle" alt="Info Toggle" onmouseover="this.style.cursor='hand'" src="../../Resources/ToggleCollapse.gif"></span>
Additional Information
</p>
<div id="InfoSpan" style="display:block">
<blockquote>
<table>
<tr>
<th>Supported Platforms</th>
<td>Windows CE, Windows Mobile, Windows Mobile SE</td>
</tr>
<tr>
<th>Persistence</th>
<td>This tag is persistent.</td>
</tr>
<tr>
<th>Min. Requirements</th>
<td>Scanner or Imager module and device supports MacroMicroPDF.</td>
</tr>
</table>
</blockquote><br></div>
<div id="DefaultParamsSpan" style="display:none">
<pre><textarea id="DefaultParameters"></textarea></pre>
</div>
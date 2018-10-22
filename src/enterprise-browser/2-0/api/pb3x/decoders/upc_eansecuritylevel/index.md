---
title: upc_eansecuritylevel Meta Tag
productversion: '1.8'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The upc_eansecuritylevel Meta Tag is an action tag used to set the upc_eansecuritylevel, which describes the UPC/EAN security level.

﻿    <div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">upc_eansecuritylevel (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="scanner" content="upc_eansecuritylevel:[parameter&gt;</pre>
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
<td valign="top" class="clsSyntaxCells"><b>upc_eansecuritylevel:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">none/ambiguous/all</td>
<td valign="top" class="clsSyntaxCells">if value is 'none' then No security, if value is "ambiguous then Sets the security level to check ambiguous characters.if value is 'all' then sets
                   the security to check all characters.</td>
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
The upc_eansecuritylevel META Tag is an action tag used to set the upc_eansecuritylevel which describes the UPC/EAN security level.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="Scanner" Content="upc_eansecuritylevel:[Value]"&gt; --&gt;      &lt;!-- if value is 'none' then No security, if value is "ambiguous then Sets the security level to check ambiguous characters.if value is 'all' then sets
                   the security to check all characters. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The upc_eansecuritylevel META Tag is an action tag used to set the upc_eansecuritylevel which describes the UPC/EAN security level.
*/

function doupc_eansecuritylevelInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Scanner', 'upc_eansecuritylevel:[Value]');      /* if value is 'none' then No security, if value is "ambiguous then Sets the security level to check ambiguous characters.if value is 'all' then sets
                   the security to check all characters. */

}
&lt;/script&gt;</textarea></div>
</blockquote><br></div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('ExamplesSpan', 'imgExamplesToggle')"><img align="absmiddle" id="imgExamplesToggle" alt="Examples Toggle" onmouseover="this.style.cursor='hand'" src="../../Resources/ToggleCollapse.gif"></span>
Examples
</p>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example sets the upc_ean-securitylevel to check ambiguous characters:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="scanner" Content="all_decoders:enabled"&gt;
&lt;META HTTP-Equiv="scanner" Content="upc_eansecuritylevel:ambiguous"&gt;
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
The following example sets the upc_ean-securitylevel to check ambiguous characters:
--&gt;

&lt;META HTTP-Equiv="scanner" Content="all_decoders:enabled"&gt;
&lt;META HTTP-Equiv="scanner" Content="upc_eansecuritylevel:ambiguous"&gt;
&lt;META HTTP-Equiv="scanner" Content="enabled"&gt;
</textarea></div>
<p>Above example can also be written as shown below:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="scanner" Content="all_decoders:enabled;upc_eansecuritylevel:ambiguous;enabled"&gt;
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

&lt;META HTTP-Equiv="scanner" Content="all_decoders:enabled;upc_eansecuritylevel:ambiguous;enabled"&gt;
</textarea></div>
<p>or</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="scanner-all_decoders" Content="enabled"&gt;
&lt;META HTTP-Equiv="scanner-upc_eansecuritylevel" Content="ambiguous"&gt;
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

&lt;META HTTP-Equiv="scanner-all_decoders" Content="enabled"&gt;
&lt;META HTTP-Equiv="scanner-upc_eansecuritylevel" Content="ambiguous"&gt;
&lt;META HTTP-Equiv="scanner-enabled" Content="SCN1"&gt;
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
<td>Scanner or Imager module and device supports upc_ean-securitylevel.</td>
</tr>
</table>
</blockquote><br></div>
<div id="DefaultParamsSpan" style="display:none">
<pre><textarea id="DefaultParameters"></textarea></pre>
</div>

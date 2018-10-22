---
title: Keylight Meta Tag
productversion: '1.8'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The Keylight Meta Tag is an action tag used to control the keyboard backlight and its intensity.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">Keylight (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="Keylight" content="[method / parameter&gt;</pre>
</td>
</tr>
</table>
</blockquote><br></div>
<div id="ParametersWOSpan" style="display:block">
<blockquote>
Items listed in this section indicate methods or, in some cases, indicate parameters which will be retrieved.
<BR><BR><table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<col width="10%">
<col width="68%">
<col width="22%">
<tr>
<th class="clsSyntaxHeadings">Name</th>
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
<td valign="top" class="clsSyntaxCells"><b>On</b></td>
<td valign="top" class="clsSyntaxCells">Turns the keyboard backlight on.</td>
<td valign="top" class="clsSyntaxCells">Device Dependant</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Off</b></td>
<td valign="top" class="clsSyntaxCells">Turns the keyboard backlight off.</td>
<td valign="top" class="clsSyntaxCells">Device Dependant</td>
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><b>Copy methods template to clipboard:</b></nobr></td>
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsWO" alt="Copy META Tag template to clipboard" onclick="CopyTemplate('txtMETATemplateWO')" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif">
	META Tags
</nobr></td>
<td></td>
<td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsWO" alt="Copy Javascript template to clipboard" onclick="CopyTemplate('txtJavascriptTemplateWO')" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif">
	Javascript
</nobr></td>
<td></td>
</tr>
</table>
<div style="display:none"><textarea id="txtMETATemplateWO">&lt;!-- 
The Keylight META Tag is an action tag used to illuminate / extinguish the keyboard backlight as well as setting the intensity of the keylight.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="Keylight" Content="On"&gt; --&gt;      &lt;!-- Turns the keyboard backlight on. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Keylight" Content="Off"&gt; --&gt;      &lt;!-- Turns the keyboard backlight off. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateWO">&lt;script&gt;
/*
The Keylight META Tag is an action tag used to illuminate / extinguish the keyboard backlight as well as setting the intensity of the keylight.
*/

function doKeylightInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Keylight', 'On');      /* Turns the keyboard backlight on. */
//objGeneric.InvokeMETAFunction('Keylight', 'Off');      /* Turns the keyboard backlight off. */

}
&lt;/script&gt;</textarea></div>
</blockquote><br></div>
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
<td valign="top" class="clsSyntaxCells"><b>Intensity:[Value]
					</b></td>
<td valign="top" class="clsSyntaxCells">Positive Number, see remarks for range</td>
<td valign="top" class="clsSyntaxCells">Sets the keyboard backlight to the specified intensity.</td>
<td valign="top" class="clsSyntaxCells">Device Dependant</td>
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsW" alt="Copy META Tag template to clipboard" onclick="CopyTemplate('txtMETATemplateW')" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif">
	META Tags
</nobr></td>
<td></td>
<td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsW" alt="Copy Javascript template to clipboard" onclick="CopyTemplate('txtJavascriptTemplateW')" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif">
	Javascript
</nobr></td>
<td></td>
</tr>
</table>
<div style="display:none"><textarea id="txtMETATemplateW">&lt;!-- 
The Keylight META Tag is an action tag used to illuminate / extinguish the keyboard backlight as well as setting the intensity of the keylight.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="Keylight" Content="Intensity:[Value]"&gt; --&gt;      &lt;!-- Sets the keyboard backlight to the specified intensity. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The Keylight META Tag is an action tag used to illuminate / extinguish the keyboard backlight as well as setting the intensity of the keylight.
*/

function doKeylightInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Keylight', 'Intensity:[Value]');      /* Sets the keyboard backlight to the specified intensity. */

}
&lt;/script&gt;</textarea></div>
</blockquote><br></div>

<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example turns the keyboard backlight on with an intensity of 3:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="Keylight-On" Content="Intensity:3"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0E5B');">
	Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0E5B">&lt;!-- 
The following example turns the keyboard backlight on with an intensity of 3:
--&gt;

&lt;META HTTP-Equiv="Keylight-On" Content="Intensity:3"&gt;
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">General</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">The intensity tag will only have an observable effect if the keyboard backlight is turned on, setting the intensity by its self is insufficient to illuminate the backlight.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Device Limits</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">The levels of supported keylight intensity is device dependant.  When the Keylight module is first loaded it writes the supported levels to the log file as INFORMATION so you can determine the maximum setting from the log file.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
</blockquote><br></div>
<div id="InfoSpan" style="display:block">
<blockquote>
<table>
<tr>
<th>Supported Platforms</th>
<td>Windows CE, Windows Mobile</td>
</tr>
<tr>
<th>Persistence</th>
<td>This tag is persistent.</td>
</tr>
<tr>
<th>Min. Requirements</th>
<td>This tag requires appropriate hardware and drivers to run, i.e. a device with a keyboard backlight.</td>
</tr>
</table>
</blockquote><br></div>
<div id="DefaultParamsSpan" style="display:none">
<pre><textarea id="DefaultParameters"></textarea></pre>
</div>

﻿---
title: AddData Method
productversion: '1.4'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---
The AddData Method of the MicroFlash ActiveX Object appends data to the printer buffer of the specified MicroFlash object.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">AddData (Method of the MicroFlash ActiveX Object) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<p>Microflash.AddData(strData);</p>
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
<td valign="top" class="clsSyntaxCells"><b>strData</b></td>
<td valign="top" class="clsSyntaxCells">String</td>
<td valign="top" class="clsSyntaxCells">Data to be sent to the printer</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
</table>
</blockquote><br></div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('ExamplesSpan', 'imgExamplesToggle')"><img align="absmiddle" id="imgExamplesToggle" alt="Examples Toggle" onmouseover="this.style.cursor='hand'" src="../../Resources/ToggleCollapse.gif"></span>
Examples
</p>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following javascript code demonstrates the usage of this method:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;script&gt;
var MicroFlash= new ActiveXObject("PocketBrowser.MicroFlash");

MicroFlash.SetPort('COM1:');
MicroFlash.AddData('Hello');
MicroFlash.AddData(' ');
MicroFlash.AddData('World\n');
MicroFlash.AddLine('From the Motorola PocketBrowser Team');
MicroFlash.Print(10);

alert('printed');
MicroFlash.Clear();
&lt;/script&gt;
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
The following javascript code demonstrates the usage of this method:
--&gt;

&lt;script&gt;
var MicroFlash= new ActiveXObject("PocketBrowser.MicroFlash");

MicroFlash.SetPort('COM1:');
MicroFlash.AddData('Hello');
MicroFlash.AddData(' ');
MicroFlash.AddData('World\n');
MicroFlash.AddLine('From the Motorola PocketBrowser Team');
MicroFlash.Print(10);

alert('printed');
MicroFlash.Clear();
&lt;/script&gt;
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
<td>Windows CE, Windows Mobile</td>
</tr>
<tr>
<th>Persistence</th>
<td>Executes immediately.</td>
</tr>
<tr>
<th>Minimum Requirements</th>
<td>None.</td>
</tr>
</table>
</blockquote><br></div>
<div id="DefaultParamsSpan" style="display:none">
<pre><textarea id="DefaultParameters"></textarea></pre>
</div>

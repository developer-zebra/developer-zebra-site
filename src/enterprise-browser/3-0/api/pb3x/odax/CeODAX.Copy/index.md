---
title: CeODAX.Copy Method
productversion: '3.0'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The Copy Method of the ODAX ActiveX Object copies the specified source filename to the destination filename.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">Copy (Method of the ODAX ActiveX Object) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">var status = object.Copy(srcFileName, destFileName);</pre>
</td>
</tr>
</table>
</blockquote><br></div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('ParametersWSpan', 'imgParametersWToggle')"><img align="absmiddle" id="imgParametersWToggle" alt="ParametersW Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif&#xA;					"></span>
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
<td valign="top" class="clsSyntaxCells"><b>SrcFileName</b></td>
<td valign="top" class="clsSyntaxCells">String</td>
<td valign="top" class="clsSyntaxCells">Full path of the source file name that is to be copied</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>DestFileName</b></td>
<td valign="top" class="clsSyntaxCells">String</td>
<td valign="top" class="clsSyntaxCells">Full path of the destination file name</td>
<td valign="top" class="clsSyntaxCells">N/A</td>
</tr>
</table>
</blockquote><br></div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('axReturnsSpan', 'aximgReturnsToggle')"><img align="absmiddle" id="aximgReturnsToggle" alt="axReturns Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
Return Values
</p>
<div id="axReturnsSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<col width="20%">
<col width="80%">
<tr>
<th class="clsSyntaxHeadings">Name</th>
<th class="clsSyntaxHeadings">Description</th>
</tr>
<tr>
<td class="clsSyntaxCells" valign="top"><b>Status</b></td>
<td class="clsSyntaxCells" style="text-align:left;">Returns 0 if no error is received. If an error occur, returns the value from the windows API call GetLastError()</td>
</tr>
</table>
</blockquote><br></div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('ExamplesSpan', 'imgExamplesToggle')"><img align="absmiddle" id="imgExamplesToggle" alt="Examples Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
Examples
</p>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example displays how to copy a file:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;SCRIPT&gt;
var ax = new ActiveXObject("CeODAX.ODAX");
var srcFileName = '\\application\\test.xml';
var destFileName = '\\windows\\test.xml';

var status = ax.Copy(srcFileName, destFileName);
&lt;/SCRIPT&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EAC');">
Copy example to clipboard
</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EAC">&lt;!-- 
The following example displays how to copy a file:
--&gt;

&lt;SCRIPT&gt;
var ax = new ActiveXObject("CeODAX.ODAX");
var srcFileName = '\\application\\test.xml';
var destFileName = '\\windows\\test.xml';

var status = ax.Copy(srcFileName, destFileName);
&lt;/SCRIPT&gt;
</textarea></div>
</blockquote>
</div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('RemarksSpan', 'imgRemarksToggle')"><img align="absmiddle" id="imgRemarksToggle" alt="Remarks Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
Remarks
</p>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">General</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">It's good practice to check if the file exists before copying it. To do this use FileExists() method. This will support any file extension and will work as per normal file copy command.  If file already exists with the same name in the destination folder/path it would be overwritten.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
</blockquote><br></div>
<p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('InfoSpan', 'imgInfoToggle')"><img align="absmiddle" id="imgInfoToggle" alt="Info Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
Additional Information
</p>
<div id="InfoSpan" style="display:block">
<blockquote>
<table>
<tr>
<th>Supported Platforms</th>
<td>Windows Mobile, Windows CE</td>
</tr>
<tr>
<th>Persistence</th>
<td>Runs immediately.</td>
</tr>
<tr>
<th>Min. Requirements</th>
<td>None.</td>
</tr>
</table>
</blockquote><br></div>
<div id="DefaultParamsSpan" style="display:none">
<pre><textarea id="DefaultParameters"></textarea></pre>
</div>
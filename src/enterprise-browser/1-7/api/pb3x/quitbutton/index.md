---
title: QuitButton Meta Tag
productversion: '1.7'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The QuitButton Meta Tag is an action tag used to set the parameters of the quit button, which is used to exit the PocketBrowser application. 

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">QuitButton (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="QuitButton" content="[parameter&gt;</pre>
</td>
</tr>
</table>
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
<td valign="top" class="clsSyntaxCells"><b>Left:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">Positive number, representing pixels</td>
<td valign="top" class="clsSyntaxCells">Sets the X position of the Quit button.</td>
<td valign="top" class="clsSyntaxCells">Top right corner of the screen</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Top:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">Positive number, representing pixels</td>
<td valign="top" class="clsSyntaxCells">Sets the Y position of the Quit button in pixels.</td>
<td valign="top" class="clsSyntaxCells">Top right corner of the screen</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Height:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">Positive number, representing pixels</td>
<td valign="top" class="clsSyntaxCells">Sets the height of the Quit button.</td>
<td valign="top" class="clsSyntaxCells">Dependant on screen resolution</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Width:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">Positive number, representing pixels</td>
<td valign="top" class="clsSyntaxCells">Sets the width of the Quit button.</td>
<td valign="top" class="clsSyntaxCells">Dependant on screen resolution</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>ImageUp:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">URL</td>
<td valign="top" class="clsSyntaxCells">Sets the image to be displayed when the Quit Button is in the up state. See Remarks.</td>
<td valign="top" class="clsSyntaxCells">Default image</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Imagedown:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">URL</td>
<td valign="top" class="clsSyntaxCells">Sets the image to be displayed when the Quit Button is in the down state. See Remarks.</td>
<td valign="top" class="clsSyntaxCells">Default image</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Visibility:[Value]
						</b></td>
<td valign="top" class="clsSyntaxCells">Visible, Hidden</td>
<td valign="top" class="clsSyntaxCells">Sets the visibility of the Quit button.</td>
<td valign="top" class="clsSyntaxCells">Hidden.</td>
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
The QuitButton META Tag is an action tag used to set the parameters of the quit button. When clicked, the Quit button will exit the PocketBrowser application.
--&gt;

&lt;!-- &lt;META HTTP-Equiv="QuitButton" Content="Left:[Value]"&gt; --&gt;      &lt;!-- Sets the X position of the Quit button. --&gt;
&lt;!-- &lt;META HTTP-Equiv="QuitButton" Content="Top:[Value]"&gt; --&gt;      &lt;!-- Sets the Y position of the Quit button in pixels. --&gt;
&lt;!-- &lt;META HTTP-Equiv="QuitButton" Content="Height:[Value]"&gt; --&gt;      &lt;!-- Sets the height of the Quit button. --&gt;
&lt;!-- &lt;META HTTP-Equiv="QuitButton" Content="Width:[Value]"&gt; --&gt;      &lt;!-- Sets the width of the Quit button. --&gt;
&lt;!-- &lt;META HTTP-Equiv="QuitButton" Content="ImageUp:[Value]"&gt; --&gt;      &lt;!-- Sets the image to be displayed when the Quit Button is in the up state. See Remarks. --&gt;
&lt;!-- &lt;META HTTP-Equiv="QuitButton" Content="Imagedown:[Value]"&gt; --&gt;      &lt;!-- Sets the image to be displayed when the Quit Button is in the down state. See Remarks. --&gt;
&lt;!-- &lt;META HTTP-Equiv="QuitButton" Content="Visibility:[Value]"&gt; --&gt;      &lt;!-- Sets the visibility of the Quit button. --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The QuitButton META Tag is an action tag used to set the parameters of the quit button. When clicked, the Quit button will exit the PocketBrowser application.
*/

function doQuitButtonInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('QuitButton', 'Left:[Value]');      /* Sets the X position of the Quit button. */
//objGeneric.InvokeMETAFunction('QuitButton', 'Top:[Value]');      /* Sets the Y position of the Quit button in pixels. */
//objGeneric.InvokeMETAFunction('QuitButton', 'Height:[Value]');      /* Sets the height of the Quit button. */
//objGeneric.InvokeMETAFunction('QuitButton', 'Width:[Value]');      /* Sets the width of the Quit button. */
//objGeneric.InvokeMETAFunction('QuitButton', 'ImageUp:[Value]');      /* Sets the image to be displayed when the Quit Button is in the up state. See Remarks. */
//objGeneric.InvokeMETAFunction('QuitButton', 'Imagedown:[Value]');      /* Sets the image to be displayed when the Quit Button is in the down state. See Remarks. */
//objGeneric.InvokeMETAFunction('QuitButton', 'Visibility:[Value]');      /* Sets the visibility of the Quit button. */

}
&lt;/script&gt;</textarea></div>
</blockquote><br></div>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example shows the Quit button and sets the left and top coordinates to 50.</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="QuitButton" Content="Visibility:Visible"&gt;
&lt;META HTTP-Equiv="QuitButton" Content="Left:50"&gt;
&lt;META HTTP-Equiv="QuitButton" Content="Top:50"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EJD');">
		Copy example to clipboard
	</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EJD">&lt;!-- 
The following example shows the Quit button and sets the left and top coordinates to 50.
--&gt;

&lt;META HTTP-Equiv="QuitButton" Content="Visibility:Visible"&gt;
&lt;META HTTP-Equiv="QuitButton" Content="Left:50"&gt;
&lt;META HTTP-Equiv="QuitButton" Content="Top:50"&gt;
</textarea></div>
<p>The follwing example shows the Quit button and displays the quit_up.jpg / quit_down.jpg images on it (reszing the images if necessary).</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
<pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="QuitButton" Content="ImageUp:url('http://myaddress/quit_up.jpg'); ImageDown:url('http://myaddress/quit_down.jpg'); Visibility:Visible"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EQD');">
		Copy example to clipboard
	</nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EQD">&lt;!-- 
The follwing example shows the Quit button and displays the quit_up.jpg / quit_down.jpg images on it (reszing the images if necessary).
--&gt;

&lt;META HTTP-Equiv="QuitButton" Content="ImageUp:url('http://myaddress/quit_up.jpg'); ImageDown:url('http://myaddress/quit_down.jpg'); Visibility:Visible"&gt;
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>
<DIV class="clsRef">Use of Images on Buttons.</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">Images can be specified as local to the device or on an HTTP / FTP server, just specify the required protocol as part of your URL (file://\, HTTP:// and FTP://).  Image will be scaled to the size of the button.  JPEG and GIF images are only supported on WM devices.  Both CE and WM support BMP files.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Default Positions</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">By default this control will be placed a the top of the screen.  On Windows Mobile if the 'FullScreen' configuration setting is disabled the control will need to be moved, otherwise it will appear beneath the task bar.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Switching to Other Applications</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">All controls are designed to be shown on top of PocketBrowser.  If you require to switch to an application other than PocketBrowser you should minimize PB to ensure the buttons do not remain shown.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Screen Orientation</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">When the screen orientation changes, either using the ScreenOrientation tag or by rotating a device with hardware support, the command areas will automatically move and resize to fit the new layout. However the buttons themselves are not moved and in some cases this may result in them being off the screen or not in the expected position. If so they must be moved manually by detecting the ScreenOrientationEvent.</DIV>
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
<td>None.</td>
</tr>
</table>
</blockquote><br>
</div>
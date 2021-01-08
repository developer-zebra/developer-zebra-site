---
title: Scanner Meta Tag
productversion: '3.0'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x API
---

The Scanner Meta Tag is an action tag that controls the functionality of the device scanner.

<div id="SyntaxSpan" style="display:block">
<blockquote>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<th class="clsSyntaxHeadings">Scanner (META Tag) Syntax
</th>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="Scanner" content="[parameter / method&gt;</pre>
</td>
</tr>
<tr>
<td class="clsSyntaxCells">
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="Scanner" content="DecodeEvent:url('[jsFunction | url]')"&gt;</p>
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
<td valign="top" class="clsSyntaxCells"><b>Enumerate</b></td>
<td valign="top" class="clsSyntaxCells">Return a list of scanners present on the device via EnumScannerEvent.  
  This tag will be actioned immediately and should be called via JavaScript.</td>
<td valign="top" class="clsSyntaxCells">
        N/A
      </td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Enabled</b></td>
<td valign="top" class="clsSyntaxCells">Enables the default scanner</td>
<td valign="top" class="clsSyntaxCells">Device specific</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Disabled</b></td>
<td valign="top" class="clsSyntaxCells">Disables the scanner.  This reverts the scanner to its default state and flushes any current decoder settings.</td>
<td valign="top" class="clsSyntaxCells">Device specific</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Start</b></td>
<td valign="top" class="clsSyntaxCells">Performs a soft trigger start</td>
<td valign="top" class="clsSyntaxCells">
        N/A
      </td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>Stop</b></td>
<td valign="top" class="clsSyntaxCells">Performs a soft trigger stop</td>
<td valign="top" class="clsSyntaxCells">
        N/A
      </td>
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
The Scanner META Tag is an action tag which provides access to control the functionality of the device's scanner.
--&gt;
&lt;!-- &lt;META HTTP-Equiv="Scanner" Content="Enumerate"&gt; --&gt;      &lt;!-- Return a list of scanners present on the device via EnumScannerEvent.  
  This tag will be actioned immediately and should be called via JavaScript. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Scanner" Content="Enabled"&gt; --&gt;      &lt;!-- Enables the default scanner --&gt;
&lt;!-- &lt;META HTTP-Equiv="Scanner" Content="Disabled"&gt; --&gt;      &lt;!-- Disables the scanner.  This reverts the scanner to its default state and flushes any current decoder settings. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Scanner" Content="Start"&gt; --&gt;      &lt;!-- Performs a soft trigger start --&gt;
&lt;!-- &lt;META HTTP-Equiv="Scanner" Content="Stop"&gt; --&gt;      &lt;!-- Performs a soft trigger stop --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateWO">&lt;script&gt;
/*
The Scanner META Tag is an action tag which provides access to control the functionality of the device's scanner.
*/
function doScannerInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");
//objGeneric.InvokeMETAFunction('Scanner', 'Enumerate');      /* Return a list of scanners present on the device via EnumScannerEvent.  
  This tag will be actioned immediately and should be called via JavaScript. */
//objGeneric.InvokeMETAFunction('Scanner', 'Enabled');      /* Enables the default scanner */
//objGeneric.InvokeMETAFunction('Scanner', 'Disabled');      /* Disables the scanner.  This reverts the scanner to its default state and flushes any current decoder settings. */
//objGeneric.InvokeMETAFunction('Scanner', 'Start');      /* Performs a soft trigger start */
//objGeneric.InvokeMETAFunction('Scanner', 'Stop');      /* Performs a soft trigger stop */
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
<td valign="top" class="clsSyntaxCells"><b>Enabled:[Value]
              </b></td>
<td valign="top" class="clsSyntaxCells">ID of Scanner, obtained via EnumScanner</td>
<td valign="top" class="clsSyntaxCells">Enables the specified scanner.</td>
<td valign="top" class="clsSyntaxCells">SCN1 (or SCN2 if SCN1 not found on device)</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>[Decoder Name]:[Value]
              </b></td>
<td valign="top" class="clsSyntaxCells">Refer "Decoders and Parameters Tag" Section to know available decoders and Their Parameters</td>
<td valign="top" class="clsSyntaxCells">Sets each Decoder's parameters</td>
<td valign="top" class="clsSyntaxCells">Refer "Decoders and Parameters Tag" Section</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>AutoEnter:[Value]
              </b></td>
<td valign="top" class="clsSyntaxCells">Enabled / Disabled</td>
<td valign="top" class="clsSyntaxCells">If "Enabled" then automatically append an Enter to the end of any barcodes scanned.  This feature is only available when decodeevent is not specified and is useful for submitting forms.  See Remarks.</td>
<td valign="top" class="clsSyntaxCells">Disabled</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>AutoTab:[Value]
              </b></td>
<td valign="top" class="clsSyntaxCells">Enabled / Disabled</td>
<td valign="top" class="clsSyntaxCells">If "Enabled" then automatically appends a Bab to the end of any barcodes scanned. This feature is only available when decodeevent is not specified and is useful for advancing to the next input field.  See Remarks.</td>
<td valign="top" class="clsSyntaxCells">Disabled</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>RasterMode:[Value]
              </b></td>
<td valign="top" class="clsSyntaxCells">None / Open_Always / Smart / Cyclone</td>
<td valign="top" class="clsSyntaxCells">None: No vertical rastering.  Open_Always: Vertical rastering is always full open.  Smart: Vertical rastering mode is 'Smart'.  Cyclone: Vertical rastering mode is 'Cyclone'.</td>
<td valign="top" class="clsSyntaxCells">Device specific</td>
</tr>
<tr>
<td valign="top" class="clsSyntaxCells"><b>AimType:[Value]
              </b></td>
<td valign="top" class="clsSyntaxCells">Trigger / Timed_Hold / Timed_Release / Presentation</td>
<td valign="top" class="clsSyntaxCells">Trigger: Standard trigger mode.  Timed_Hold: Aiming lasts for a specified time before decoding.  Timed_Release: Aiming lasts until trigger is released.  Presentation: Only applicable to Kiosk devices, the scanner illuminates when movement is detected in the range of the scanner window.  The scanner must be initiated with a softscan using the start method.  Please see the example for usage</td>
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
The Scanner META Tag is an action tag which provides access to control the functionality of the device's scanner.
--&gt;
&lt;!-- &lt;META HTTP-Equiv="Scanner" Content="Enabled:[Value]"&gt; --&gt;      &lt;!-- Enables the specified scanner. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Scanner" Content="[Decoder Name]:[Value]"&gt; --&gt;      &lt;!-- Sets each Decoder's parameters --&gt;
&lt;!-- &lt;META HTTP-Equiv="Scanner" Content="AutoEnter:[Value]"&gt; --&gt;      &lt;!-- If "Enabled" then automatically append an Enter to the end of any barcodes scanned.  This feature is only available when decodeevent is not specified and is useful for submitting forms.  See Remarks. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Scanner" Content="AutoTab:[Value]"&gt; --&gt;      &lt;!-- If "Enabled" then automatically appends a Bab to the end of any barcodes scanned. This feature is only available when decodeevent is not specified and is useful for advancing to the next input field.  See Remarks. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Scanner" Content="RasterMode:[Value]"&gt; --&gt;      &lt;!-- None: No vertical rastering.  Open_Always: Vertical rastering is always full open.  Smart: Vertical rastering mode is 'Smart'.  Cyclone: Vertical rastering mode is 'Cyclone'. --&gt;
&lt;!-- &lt;META HTTP-Equiv="Scanner" Content="AimType:[Value]"&gt; --&gt;      &lt;!-- Trigger: Standard trigger mode.  Timed_Hold: Aiming lasts for a specified time before decoding.  Timed_Release: Aiming lasts until trigger is released.  Presentation: Only applicable to Kiosk devices, the scanner illuminates when movement is detected in the range of the scanner window.  The scanner must be initiated with a softscan using the start method.  Please see the example for usage --&gt;</textarea></div>
<div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
/*
The Scanner META Tag is an action tag which provides access to control the functionality of the device's scanner.
*/
function doScannerInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");
//objGeneric.InvokeMETAFunction('Scanner', 'Enabled:[Value]');      /* Enables the specified scanner. */
//objGeneric.InvokeMETAFunction('Scanner', '[Decoder Name]:[Value]');      /* Sets each Decoder's parameters */
//objGeneric.InvokeMETAFunction('Scanner', 'AutoEnter:[Value]');      /* If "Enabled" then automatically append an Enter to the end of any barcodes scanned.  This feature is only available when decodeevent is not specified and is useful for submitting forms.  See Remarks. */
//objGeneric.InvokeMETAFunction('Scanner', 'AutoTab:[Value]');      /* If "Enabled" then automatically appends a Bab to the end of any barcodes scanned. This feature is only available when decodeevent is not specified and is useful for advancing to the next input field.  See Remarks. */
//objGeneric.InvokeMETAFunction('Scanner', 'RasterMode:[Value]');      /* None: No vertical rastering.  Open_Always: Vertical rastering is always full open.  Smart: Vertical rastering mode is 'Smart'.  Cyclone: Vertical rastering mode is 'Cyclone'. */
//objGeneric.InvokeMETAFunction('Scanner', 'AimType:[Value]');      /* Trigger: Standard trigger mode.  Timed_Hold: Aiming lasts for a specified time before decoding.  Timed_Release: Aiming lasts until trigger is released.  Presentation: Only applicable to Kiosk devices, the scanner illuminates when movement is detected in the range of the scanner window.  The scanner must be initiated with a softscan using the start method.  Please see the example for usage */
}
&lt;/script&gt;</textarea></div>
</blockquote><br></div>
<div id="ReturnsSpan" style="display:block">
<blockquote>
<p>
Modules return information back to their web pages via retrieval tags, for example the scanner has a retrieval tag called 'DecodeEvent' which is called whenever it decodes a barcode.  To register to receive a retrieval tag call the module as follows:
<blockquote>
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="[Module]" content="[RetrievalTag]:url('[URI]')"&gt;</pre>
So to register to retrieve the Scanner's DecodeEvent the following syntax would be used:
<pre class="clsSyntaxCells">&lt;META HTTP-Equiv="Scanner" content="DecodeEvent:url('Javascript:doScan('%6', '%s', %3, '%2');')"&gt;</pre>
</blockquote><BR><P>
Retrieval tags return information by replacing the text in place holders, defined as '%s' or '%&lt;number&gt;'.  Each place holder represents 1 return value with '%s' being populated sequentially or '%&lt;number&gt;' providing direct acces to the desired value.
</P>
<blockquote>
<p>
    If the content for the Scanner's DecodeEvent is:<BR><pre class="clsSyntaxCells">"url('Javascript:doScan('%6', '%s', %3, '%2');')"</pre><BR>
    The function would be called as follows:<BR><pre class="clsSyntaxCells">"Javascript:doScan('Decode', '5449000053879', 0x35, 'SCN:EAN13');"</pre><BR></p>
</blockquote>
</p><br><DIV class="clsRef">DecodeEvent</DIV>
<DIV>A decode event is sent by the Scanner whenever a barcode is decoded or a Bluetooth connection / disconnection event occurs.</DIV><BR><table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<col width="3%">
<col width="20%">
<col width="77%">
<tr>
<th class="clsSyntaxHeadings">ID</th>
<th class="clsSyntaxHeadings">Name</th>
<th class="clsSyntaxHeadings">Description</th>
</tr>
<tr>
<td class="clsSyntaxCells" valign="top">1</td>
<td class="clsSyntaxCells" valign="top"><b>Data</b></td>
<td class="clsSyntaxCells" style="text-align:left;">The data decoded by the scanner or imaging device</td>
</tr>
<tr>
<td class="clsSyntaxCells" valign="top">2</td>
<td class="clsSyntaxCells" valign="top"><b>Source</b></td>
<td class="clsSyntaxCells" style="text-align:left;">The source device and human readable decoder type of the decoded barcode or symbol</td>
</tr>
<tr>
<td class="clsSyntaxCells" valign="top">3</td>
<td class="clsSyntaxCells" valign="top"><b>Type</b></td>
<td class="clsSyntaxCells" style="text-align:left;">Hex value representing the decoder type</td>
</tr>
<tr>
<td class="clsSyntaxCells" valign="top">4</td>
<td class="clsSyntaxCells" valign="top"><b>Time</b></td>
<td class="clsSyntaxCells" style="text-align:left;">The time at which the decode occured (hh:mm:ss)</td>
</tr>
<tr>
<td class="clsSyntaxCells" valign="top">5</td>
<td class="clsSyntaxCells" valign="top"><b>Length</b></td>
<td class="clsSyntaxCells" style="text-align:left;">The length of the decoded barcode or symbol</td>
</tr>
<tr>
<td class="clsSyntaxCells" valign="top">6</td>
<td class="clsSyntaxCells" valign="top"><b>Event</b></td>
<td class="clsSyntaxCells" style="text-align:left;">The type of event which has occured at the scanner.  This field will be either 'Decode' for barcode scanning or a message from a Bluetooth scanner.  See Remarks</td>
</tr>
</table>
<div style="display:none"><textarea id="ID0ECF">&lt;!-- &lt;META HTTP-Equiv="Scanner" Content="DecodeEvent:url('JavaScript:fnJSCallbackHandler('%1', '%2', %3, '%4', '%5', '%6');')"&gt; --&gt;</textarea></div>
<div style="display:none"><textarea rows="20" cols="200" id="ID0EIF">&lt;script&gt;
/*
function doScannerInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");

//objGeneric.InvokeMETAFunction('Scanner', 'DecodeEvent:url('JavaScript:fnJSCallbackHandler('%1', '%2', %3, '%4', '%5', '%6');')');      /* A decode event is sent by the Scanner whenever a barcode is decoded or a Bluetooth connection / disconnection event occurs. */
}
&lt;/script&gt;</textarea></div>
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><b>Copy this return value template to clipboard:</b></nobr></td>
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsReturn" alt="Copy META Tag template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0ECF');">
      META Tags
    </nobr></td>
<td></td>
<td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsWO" alt="Copy Javascript template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EIF');">
      Javascript
    </nobr></td>
<td></td>
</tr>
</table><br><br><DIV class="clsRef">EnumScannerEvent</DIV>
<DIV>The Enum Scanner Event is used to ascertain the scanners present on the device.</DIV><BR><table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<col width="3%">
<col width="20%">
<col width="77%">
<tr>
<th class="clsSyntaxHeadings">ID</th>
<th class="clsSyntaxHeadings">Name</th>
<th class="clsSyntaxHeadings">Description</th>
</tr>
<tr>
<td class="clsSyntaxCells" valign="top">1</td>
<td class="clsSyntaxCells" valign="top"><b>ScannerArray</b></td>
<td class="clsSyntaxCells" style="text-align:left;">2 dimensional array of scanners present on the device.</td>
</tr>
</table>
<div style="display:none"><textarea id="ID0EVG">&lt;!-- &lt;META HTTP-Equiv="Scanner" Content="EnumScannerEvent:url('JavaScript:fnJSCallbackHandler(%1);')"&gt; --&gt;</textarea></div>
<div style="display:none"><textarea rows="20" cols="200" id="ID0E2G">&lt;script&gt;
/*
function doScannerInit()
{
var objGeneric = new ActiveXObject("PocketBrowser.Generic");
//objGeneric.InvokeMETAFunction('Scanner', 'EnumScannerEvent:url('JavaScript:fnJSCallbackHandler(%1);')');      /* The Enum Scanner Event is used to ascertain the scanners present on the device. */
}
&lt;/script&gt;</textarea></div>
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><b>Copy this return value template to clipboard:</b></nobr></td>
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsReturn" alt="Copy META Tag template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EVG');">
      META Tags
    </nobr></td>
<td></td>
<td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsWO" alt="Copy Javascript template to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0E2G');">
      Javascript
    </nobr></td>
<td></td>
</tr>
</table><br><br></blockquote><br></div>
<div id="ExamplesSpan" style="display:block">
<blockquote>
<p>The following example enables the scanner, turns on autoenter and performs a soft trigger start:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="scanner" Content="Enabled"&gt;
&lt;META HTTP-Equiv="scanner" Content="AutoEnter:Enabled"&gt;
&lt;META HTTP-Equiv="scanner" Content="Start"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EIH');">
      Copy example to clipboard
    </nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EIH">&lt;!-- 
The following example enables the scanner, turns on autoenter and performs a soft trigger start:
--&gt;
&lt;META HTTP-Equiv="scanner" Content="Enabled"&gt;
&lt;META HTTP-Equiv="scanner" Content="AutoEnter:Enabled"&gt;
&lt;META HTTP-Equiv="scanner" Content="Start"&gt;
</textarea></div>
<p>The following example sets up the scanner on a page to submit the scanned data to an asp page upon successful decoding</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="scanner" Content="enabled"&gt;
&lt;META HTTP-Equiv="scanner" Content="DecodeEvent:url('mypage.asp?Data=%s&amp;Source=%s&amp;Type=%s&amp;Time=%s&amp;Length=%s')"&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EPH');">
      Copy example to clipboard
    </nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EPH">&lt;!-- 
The following example sets up the scanner on a page to submit the scanned data to an asp page upon successful decoding
--&gt;
&lt;META HTTP-Equiv="scanner" Content="enabled"&gt;
&lt;META HTTP-Equiv="scanner" Content="DecodeEvent:url('mypage.asp?Data=%s&amp;Source=%s&amp;Type=%s&amp;Time=%s&amp;Length=%s')"&gt;
</textarea></div>
<p>The following example sets up the scanner on a page to call a javascript function upon successful decoding:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="scanner" Content="enabled"&gt;
&lt;META HTTP-Equiv="scanner" Content="DecodeEvent:url('javascript:doScan('%s', '%s', %s, '%s', %s);')"&gt;

&lt;script&gt;
function doScan(data, source, type, time, length)
{
if(type == 0x35) //ean 13
{
alert('Please scan a non EAN 13 code!');
}
else
{
var amount = prompt('Enter an amount for code: ' + data', '');
}
}
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EWH');">
      Copy example to clipboard
    </nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EWH">&lt;!-- 
The following example sets up the scanner on a page to call a javascript function upon successful decoding:
--&gt;

&lt;META HTTP-Equiv="scanner" Content="enabled"&gt;
&lt;META HTTP-Equiv="scanner" Content="DecodeEvent:url('javascript:doScan('%s', '%s', %s, '%s', %s);')"&gt;
&lt;script&gt;
function doScan(data, source, type, time, length)
{
if(type == 0x35) //ean 13
{
alert('Please scan a non EAN 13 code!');
}
else
{
var amount = prompt('Enter an amount for code: ' + data', '');
}
}
&lt;/script&gt;
</textarea></div>
<p>The following example demonstrates how to set a device into presentation mode.</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;HTML&gt;
&lt;HEAD&gt;
&lt;Meta http-equiv="scanner" content="aimtype:presentation"&gt;
&lt;Meta http-equiv="scanner" content="DecodeEvent:url('Javascript:doScan('%s');')"&gt;
&lt;Meta http-equiv="scanner" content="enabled"&gt;
&lt;/HEAD&gt;
&lt;BODY onLoad="doSoftScan();"&gt;
&lt;SCRIPT LANGAUGE="JavaScript"&gt;
var Generic = new ActiveXObject("PocketBrowser.Generic");

function doSoftScan()
{
Generic.InvokeMetaFunction('scanner', 'start');
}

function doScan(data)
{
bcode.innerHTML = data;
doSoftScan();
}
&lt;/SCRIPT&gt;
&lt;div id="bcode"&gt;&lt;/div&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;
</pre>
</td>
</tr>
</table>
<table cellspacing="1" cellpadding="3" width="95%">
<col width="85%">
<col width="15%">
<tr align="right">
<td></td>
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0E4H');">
      Copy example to clipboard
    </nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0E4H">&lt;!-- 
The following example demonstrates how to set a device into presentation mode.
--&gt;
&lt;HTML&gt;
&lt;HEAD&gt;
&lt;Meta http-equiv="scanner" content="aimtype:presentation"&gt;
&lt;Meta http-equiv="scanner" content="DecodeEvent:url('Javascript:doScan('%s');')"&gt;
&lt;Meta http-equiv="scanner" content="enabled"&gt;
&lt;/HEAD&gt;
&lt;BODY onLoad="doSoftScan();"&gt;
&lt;SCRIPT LANGAUGE="JavaScript"&gt;
var Generic = new ActiveXObject("PocketBrowser.Generic");
function doSoftScan()
{
Generic.InvokeMetaFunction('scanner', 'start');
}
function doScan(data)
{
bcode.innerHTML = data;
doSoftScan();
}
&lt;/SCRIPT&gt;
&lt;div id="bcode"&gt;&lt;/div&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;
</textarea></div>
<p>The following example shows how an application might handle a Bluetooth Scanner whose ID is SCN2:</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;HTML&gt;
&lt;HEAD&gt;
&lt;!-- Status Updates are received via Scanner-Navigate along with Barcode Data --&gt;
&lt;META HTTP-Equiv="Scanner" Content="DecodeEvent:url('Javascript:ScanFunc('%s', '%s', '%s', '%s', '%s', '%s');')"&gt;
&lt;!-- Enable the Bluetooth Scanner, this will commence the BT pairing --&gt;
&lt;META HTTP-Equiv="Scanner" Content="Enabled:SCN2"&gt;
&lt;/HEAD&gt;
Barcode Data: &lt;DIV ID="bcode"&gt; &lt;/DIV&gt;
User Message: &lt;DIV ID="message"&gt; &lt;/DIV&gt;
&lt;P&gt;&lt;INPUT TYPE="button" VALUE="Change Associated Scanner" ONCLICK="onChangeScanner();"&gt;&lt;/P&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;
&lt;SCRIPT LANGUAGE="JavaScript"&gt;
//  Keep track of whether we have minimised PB for the user to scan the association barcode
var scanningAssociationBarcode = false;
//  Whether or not the next barcode data we receive will be the unpairing barcode
var expectingUnpairingBarcode = false;
function ScanFunc(data, source, type, time, length, theEvent)
{
var Generic = new ActiveXObject("PocketBrowser.Generic");
if (expectingUnpairingBarcode)
{
//  After we scan the Unpairing barcode ScanFunc will be called, 
//  restart the scanner component so it is ready
//  to accept a different Bluetooth Scanner
expectingUnpairingBarcode = false;
Generic.InvokeMETAFunction('Scanner', 'Disabled');
Generic.InvokeMETAFunction('Scanner', 'Enabled:SCN2');
return;
}
if (theEvent == 'BTScanAssociationBarcode')
{
scanningAssociationBarcode = true;
//  Minimise PocketBrowser and Show the Association barcode for the user to scan
Generic.InvokeMETAFunction('Application', 'minimize');
Generic.LaunchProcessNonBlocking('\\application\\BT_Information.exe', 'ShowBarcodeOnly');
}
else if(theEvent == 'BluetoothConnected')
{
//  Check to see if we are scanning the association barcode, if we are then return user control to PocketBrowser
if (scanningAssociationBarcode)
{
//  The Association barcode is currently shown
scanningAssociationBarcode = false;
Generic.InvokeMETAFunction('Application', 'restore');
}
message.innerHTML = "Bluetooth Scanner Connected";
}
else if(theEvent == 'BluetoothDisconnected')
{
message.innerHTML = "Bluetooth Disconnected, Please Reconnect";
}
else if(theEvent == 'Decode')
{
//  Consider a normal Barcode Scan (to test the BT connection)
bcode.innerHTML = data;
}
}
function onChangeScanner()
{
//  Change the BT Scanner associated with the device, the logic to do this is handled
//  once the 'unpairing' barcode is scanned.
message.innerHTML = "Please Scan Unpairing Barcode";
expectingUnpairingBarcode = true;
}
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EFAAC');">
      Copy example to clipboard
    </nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EFAAC">&lt;!-- 
The following example shows how an application might handle a Bluetooth Scanner whose ID is SCN2:
--&gt;
&lt;HTML&gt;
&lt;HEAD&gt;
&lt;!-- Status Updates are received via Scanner-Navigate along with Barcode Data --&gt;
&lt;META HTTP-Equiv="Scanner" Content="DecodeEvent:url('Javascript:ScanFunc('%s', '%s', '%s', '%s', '%s', '%s');')"&gt;
&lt;!-- Enable the Bluetooth Scanner, this will commence the BT pairing --&gt;
&lt;META HTTP-Equiv="Scanner" Content="Enabled:SCN2"&gt;
&lt;/HEAD&gt;
Barcode Data: &lt;DIV ID="bcode"&gt; &lt;/DIV&gt;
User Message: &lt;DIV ID="message"&gt; &lt;/DIV&gt;
&lt;P&gt;&lt;INPUT TYPE="button" VALUE="Change Associated Scanner" ONCLICK="onChangeScanner();"&gt;&lt;/P&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;
&lt;SCRIPT LANGUAGE="JavaScript"&gt;
//  Keep track of whether we have minimised PB for the user to scan the association barcode
var scanningAssociationBarcode = false;
//  Whether or not the next barcode data we receive will be the unpairing barcode
var expectingUnpairingBarcode = false;
function ScanFunc(data, source, type, time, length, theEvent)
{
var Generic = new ActiveXObject("PocketBrowser.Generic");
if (expectingUnpairingBarcode)
{
//  After we scan the Unpairing barcode ScanFunc will be called, 
//  restart the scanner component so it is ready
//  to accept a different Bluetooth Scanner
expectingUnpairingBarcode = false;
Generic.InvokeMETAFunction('Scanner', 'Disabled');
Generic.InvokeMETAFunction('Scanner', 'Enabled:SCN2');
return;
}
if (theEvent == 'BTScanAssociationBarcode')
{
scanningAssociationBarcode = true;
//  Minimise PocketBrowser and Show the Association barcode for the user to scan
Generic.InvokeMETAFunction('Application', 'minimize');
Generic.LaunchProcessNonBlocking('\\application\\BT_Information.exe', 'ShowBarcodeOnly');
}
else if(theEvent == 'BluetoothConnected')
{
//  Check to see if we are scanning the association barcode, if we are then return user control to PocketBrowser
if (scanningAssociationBarcode)
{
//  The Association barcode is currently shown
scanningAssociationBarcode = false;
Generic.InvokeMETAFunction('Application', 'restore');
}
message.innerHTML = "Bluetooth Scanner Connected";
}
else if(theEvent == 'BluetoothDisconnected')
{
message.innerHTML = "Bluetooth Disconnected, Please Reconnect";
}
else if(theEvent == 'Decode')
{
//  Consider a normal Barcode Scan (to test the BT connection)
bcode.innerHTML = data;
}
}
function onChangeScanner()
{
//  Change the BT Scanner associated with the device, the logic to do this is handled
//  once the 'unpairing' barcode is scanned.
message.innerHTML = "Please Scan Unpairing Barcode";
expectingUnpairingBarcode = true;
}
&lt;/SCRIPT&gt;
</textarea></div>
<p>The following example displays the available scanners on screen and enables the Bluetooth Scanner (if available)</p>
<table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
<tr>
<td>
  <pre class="clsSyntaxCells">
&lt;HTML&gt;
&lt;HEAD&gt;
&lt;META HTTP-Equiv="Scanner" Content="DecodeEvent:url('Javascript:ScanFunc('%s', '%s', '%s', '%s', '%s', '%s');')"&gt;
&lt;META HTTP-Equiv="Scanner" Content="EnumScannerEvent:url('Javascript:EnumScanners(%s);')"&gt;
&lt;/HEAD&gt;
&lt;BODY BGCOLOR="#FFFFEA" TEXT="#0000A0" LINK="#FF0000" VLINK="#808080" ALINK="#008040" onLoad="setEnumScannerTimer();"&gt;
&lt;DIV ID="message"&gt;&lt;/DIV&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;
&lt;SCRIPT LANGUAGE="JavaScript"&gt;
function ScanFunc(data, source, type, time, length, theEvent)
{
message.innerHTML = data + ' (' + theEvent + ')';
}
function EnumScanners(scannerArray)
{
var scannerInfo = "Scanners On Device: " + scannerArray.length + "&lt;BR&gt;ID  --  Name&lt;BR&gt;" 
for (i=0; i &lt; scannerArray.length; i++)
{
scannerInfo = scannerInfo + scannerArray[i][0] + ' -- ' + scannerArray[i][1] + '&lt;BR&gt;';
//  See if this is the Bluetooth Scanner
if (scannerArray[i][1].indexOf("Bluetooth") &gt;= 0)
{
//  This is the Bluetooth Scanner, Enable it
var Generic = new ActiveXObject("PocketBrowser.Generic");
Generic.InvokeMETAFunction('Scanner', 'Enabled:' + scannerArray[i][0]);
}
}
message.innerHTML = scannerInfo;
}
//  We can not call Scanner:Enumerate during page load on WM so give the page 3 seconds to finish loading
function setEnumScannerTimer()
{
setTimeout("onScannerEnable()", 3000);
}
function onScannerEnable()
{
var Generic = new ActiveXObject("PocketBrowser.Generic");
Generic.InvokeMETAFunction('Scanner', 'Enumerate');
}
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
<td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EMAAC');">
      Copy example to clipboard
    </nobr></td>
</tr>
</table>
<div id="Examples" style="display:none"><textarea id="ID0EMAAC">&lt;!-- 
The following example displays the available scanners on screen and enables the Bluetooth Scanner (if available)
--&gt;
&lt;HTML&gt;
&lt;HEAD&gt;
&lt;META HTTP-Equiv="Scanner" Content="DecodeEvent:url('Javascript:ScanFunc('%s', '%s', '%s', '%s', '%s', '%s');')"&gt;
&lt;META HTTP-Equiv="Scanner" Content="EnumScannerEvent:url('Javascript:EnumScanners(%s);')"&gt;
&lt;/HEAD&gt;
&lt;BODY BGCOLOR="#FFFFEA" TEXT="#0000A0" LINK="#FF0000" VLINK="#808080" ALINK="#008040" onLoad="setEnumScannerTimer();"&gt;
&lt;DIV ID="message"&gt;&lt;/DIV&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;
&lt;SCRIPT LANGUAGE="JavaScript"&gt;
function ScanFunc(data, source, type, time, length, theEvent)
{
message.innerHTML = data + ' (' + theEvent + ')';
}
function EnumScanners(scannerArray)
{
var scannerInfo = "Scanners On Device: " + scannerArray.length + "&lt;BR&gt;ID  --  Name&lt;BR&gt;" 
for (i=0; i &lt; scannerArray.length; i++)
{
scannerInfo = scannerInfo + scannerArray[i][0] + ' -- ' + scannerArray[i][1] + '&lt;BR&gt;';
//  See if this is the Bluetooth Scanner
if (scannerArray[i][1].indexOf("Bluetooth") &gt;= 0)
{
//  This is the Bluetooth Scanner, Enable it
var Generic = new ActiveXObject("PocketBrowser.Generic");
Generic.InvokeMETAFunction('Scanner', 'Enabled:' + scannerArray[i][0]);
}
}
message.innerHTML = scannerInfo;
}
//  We can not call Scanner:Enumerate during page load on WM so give the page 3 seconds to finish loading
function setEnumScannerTimer()
{
setTimeout("onScannerEnable()", 3000);
}
function onScannerEnable()
{
var Generic = new ActiveXObject("PocketBrowser.Generic");
Generic.InvokeMETAFunction('Scanner', 'Enumerate');
}
&lt;/SCRIPT&gt;
</textarea></div>
</blockquote>
</div>
<div id="RemarksSpan" style="display:block">
<blockquote>        
<DIV class="clsRef">General</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
If the Scanner Meta Tag is used without DecodeEvent, the data will be output as keystrokes.
Presentation trigger causes the scanner to illuminate when movement is detected in the range of the scanner window.  
The scanner must be initiated with a softscan using the scanner start parameter.  Please see the example for usage.
Note: Not all devices support presentation mode.
0
On unlicensed devices it is not recommended to enable the Scanner on the application's startup page, this can interfere with the license screen. 

The device's camera based scanner can not be used at the same time as the Imager.  Once the Imager is 'Enabled' the camera based scanner will be unavailable until the Imager is 'Disabled'. 
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Enabling/Disabling Scanner</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
The properties which was set before enabling the scanner will be lost if the scanner is disabled and re-enabled.
For Example: If all decoder is disabled before enabling the scanner then after enabling the scanner if we disable and re-enable the scanner, the previous set property will be lost.
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Enabling/Disabling Decoders</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
Before enabling/disabling decoders, it is recommended to first disable the scanner and then enable/disable the decoders and then enable the scanner. 
Note: If the decoder is disabled after enabling the scanner, it will not reflect the respective change at the first time during scanning. This is because of the enabled scanner which is actually waiting for the scan event to fire for scanning the barcode.
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">AutoEnter and AutoTab</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">AutoEnter and AutoTab are mutually exclusive, only one can be enabled at any one time.  If both are enabled then AutoEnter will take priority.  Also note that the default value for AccelerateKey is 'Norm', meaning by default the Enter key is disabled; for more information on AccelerateKey see the Key Capture Overview and Key Capture help file entry.</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">AutoEnter and AccelerateKey</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
The AccelerateKey Meta tag controls the behaviour of Accelerate keys on Windows CE, if the Enter key is configured to be non functional then AutoEnter will also appear to not function either
</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
<DIV class="clsRef">Bluetooth Scanner Overview</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">Once associated with the Device a Bluetooth Scanner will remain associated even after losing the BT 
connection.  In order to associate a different Bluetooth scanner with the device it is necessary to  
scan the 'unpairing' barcode and then invoke the 'disabled' meta tag followed by the 'enabled' meta tag, 
this will allow you to scan the BT association barcode with a different scanner.</DIV>
<pre style="font-family:courier;font-size:small;">
The following messages will be received from the Bluetooth Scanner:
* 'BTScanAssociationBarcode' 
Means the device is ready to be associated with a BT scanner.  You must scan the 
association barcode within a specified timeout (configured via the registry, see the EMDK help file).  
Either run 'Display_BD_Address.exe' to present the user with the barcode to scan or prompt them to scan 
a barcode physically stuck somewhere on the device.  It is only necessary to scan the association 
barcode when you first associate a scanner with the device, this pairing will be remembered until
you scan the unpairing barcode.(NOTE: Donot specify link to new page in decodeevent before connecting to BT
Scanner, Since BTScanAssocistionBarcode is passed in decodeevent url.)

* 'BluetoothConnected'
The remote scanner has successfully connected to the device.  If you have launched 'Display_BD_Address.exe' 
then return control to full user control to PocketBrowser at this stage.

* 'BluetoothDisconnected'
The remote scanner has become disconnected from the device, this may be due to loss of battery, being out
of range or scanning the 'unpairing' barcode.  The scanner will attempt to reconnect automatically for
a period of time once it regains power or goes out of range, if it fails to reconnect after the specified
timeout the reconnect button on the device should be pushed.  Once the unpairing barcode is scanned
it is necessary to disable the scanner and then re-enable it before another scanner can be associated.
</pre>
<DIV class="clsRef">ScannerArray attribute</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">The ScannerArray attribute returned from Scanner tag with parameter "EnumScannerEvent" will enumerate each scanner present 
on the device in a 2D array, associating each scanner's device name with a user friendly name.  
The device ID can be passed as a parameter to "Scanner" "Enabled:&lt;deviceID&gt;", the friendly
name is a user readable description of the scanner, e.g:</DIV>
<pre style="font-family:courier;font-size:small;">
"SCN1", "1D Scanner Driver"
"SCN2", "Camera"
"SCN3", "Bluetooth SSI Scanner Driver"
</pre>
<DIV class="clsRef">Use with Imager</DIV>
<DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">Scanner Tag can not be used along with Image Capture Tags in the same page due to Hardware Limitations</DIV>
<pre style="font-family:courier;font-size:small;"></pre>
</blockquote><br></div>
<div id="InfoSpan" style="display:block">
<blockquote>
<table>
<tr>
<th>Supported Platforms</th>
<td>Windows CE, Windows Mobile, Windows Mobile SE</td>
</tr>
<tr>
<th>Persistence</th>
<td>This tag is page specific, though once you enable a scanner you must disable it before enabling another scanner on the same device.</td>
</tr>
<tr>
<th>Min. Requirements</th>
<td>Scanner module.</td>
</tr>
</table>
</blockquote><br>
</div>
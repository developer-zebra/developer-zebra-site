---
title: About Zebra Licensing
layout: guide.html
product: Zebra Licensing
menu:
  items:
    - title: About
      url: /licensing/about
    - title: Process
      url: /licensing/process
    - title: FAQ
      url: /licensing/faq
    - icon: fa fa-search
      url: /licensing/search
---

## Overview

Zebra uses Flexera. 

<img alt="image" style="height:450px" src="mdna_matrix_2.png"/>
_Click image to enlarge; ESC to exit_. 
<br>

## MDNA Professional and Enterprise 

<table rules="all"
width="100%"
frame="border"
cellspacing="0" cellpadding="4">
<caption class="title"></caption>
<col width="22%" />
<col width="22%" />
<col width="55%" />
<thead>
<tr>
<th align="left" valign="top">Category</th>
<th align="left" valign="top">Action Type<br>Parameter(s) (if any)</th>
<th align="left" valign="top">Description</th>
<th align="left" valign="top">Description</th></tr>
</thead>
<tbody>
<tr>
<td rowspan="5" align="left" valign="top"><p class="table"><strong>Cursor Movement</strong></p></td>
<td align="left" valign="top"><p class="table">SKIP_AHEAD<br>action _param_1</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor forward by the specified number of characters (default=1)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">SKIP_BACK<br>action _param_1</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor back by the specified number of characters (default=1)</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor forward by the specified number of characters (default=1)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">SKIP_TO_START</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor to the beginning of the data</p></td>
</tr>
<td align="left" valign="top"><p class="table">Moves the cursor forward by the specified number of characters (default=1)</p></td>
<tr>
<td align="left" valign="top"><p class="table">MOVE_AHEAD_TO<br>action_param_1</p></td>
<td align="left" valign="top"><p class="table">Known as "Move to" in the DataWedge UI, advances the cursor until the specified string is found</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor forward by the specified number of characters (default=1)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">MOVE_PAST_A<br>action_param_1</p></td>
<td align="left" valign="top"><div><div class="paragraph"><p>Moves the cursor forward past the specified string</p></div></div></td>
<td align="left" valign="top"><p class="table">Moves the cursor forward by the specified number of characters (default=1)</p></td>
</tr>
<tr>
<td rowspan="14" align="left" valign="top"><p class="table"><strong>Data Modification</strong></p></td>
<td align="left" valign="top"><p class="table">CRUNCH_SPACES</p></td>
<td align="left" valign="top"><p class="table">Reduces spaces between words to one, and removes all spaces at the beginning and end of the data</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor forward by the specified number of characters (default=1)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">STOP_CRUNCH_SPACE</p></td>
<td align="left" valign="top"><p class="table">Disables the last <strong>Crunch spaces</strong> action</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">REMOVE_SPACES</p></td>
<td align="left" valign="top"><p class="table">Known as "Remove all spaces" in the DataWedge UI, removes all spaces in the data</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor forward by the specified number of characters (default=1)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">STOP_REMOVE_SPACES</p></td>
<td align="left" valign="top"><p class="table">Disables the last <strong>REMOVE_SPACES</strong> action</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">TRIM_LEFT_ZEROS</p></td>
<td align="left" valign="top"><p class="table">Known as "Remove leading zeros" in the DataWedge UI, removes all zeros at the beginning of the data</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor forward by the specified number of characters (default=1)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">STOP_TRIM_LEFT_ZEROS</p></td>
<td align="left" valign="top"><p class="table">Disables the previous <strong>TRIM_LEFT_ZEROS</strong> action</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">PAD_LEFT_ZEROS<br>action_param_1</p></td>
<td align="left" valign="top"><p class="table">Known as "Pad with zeros" in the DataWedge UI, left-pads the data with the specified number of zeros (default=0)</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor forward by the specified number of characters (default=1)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">STOP_PAD_LEFT_ZEROS</p></td>
<td align="left" valign="top"><p class="table">Disables the previous <strong>PAD_LEFT_ZEROS</strong> action</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor forward by the specified number of characters (default=1)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">PAD_LEFT_SPACES<br>action_param_1</p></td>
<td align="left" valign="top"><p class="table">Known as "Pad with spaces" in the DataWedge UI, left-pads the data with the specified number of spaces (default=0)</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor forward by the specified number of characters (default=1)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">STOP_PAD_LEFT_SPACES</p></td>
<td align="left" valign="top"><p class="table">Disables the previous <strong>PAD_LEFT_SPACES</strong> action</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor forward by the specified number of characters (default=1)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">REPLACE_STRING<br>action_param_1<br>  action_param_2</p></td>
<td align="left" valign="top"><p class="table">Replaces a specified string (action_param_1) with a new specified string (action_param_2). Both must be specified (default=empty)</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor forward by the specified number of characters (default=1)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">STOP_REPLACE_ALL</p></td>
<td align="left" valign="top"><p class="table">Known as "Stop all replace string" in the DataWedge UI, stops all <strong>REPLACE_STRING</strong> actions</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor forward by the specified number of characters (default=1)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">REMOVE_CHARACTERS<br>action_param_1<br>action_param_2<br>action_param_3</p></td>
<td align="left" valign="top"><p class="table">Removes the number of characters specified in given positions when send actions are executed<br>action_param_1: (0=front (default); 1=in between; 2=end; 3=center)<br>action_param_2: start position (default=0)<br>action_param_3: number of characters (default=0)</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor forward by the specified number of characters (default=1)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">STOP_REMOVE_CHARS</p></td>
<td align="left" valign="top"><p class="table">Stops removing characters from subsequent send actions</p></td>
</tr>
<tr>
<td rowspan="6" align="left" valign="top"><p class="table"><strong>Data Sending</strong></p></td>
<td align="left" valign="top"><p class="table">SEND_NEXT<br>action_param_1</p></td>
<td align="left" valign="top"><p class="table">Sends the specified number of characters from the current cursor position (default=0)</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor forward by the specified number of characters (default=1)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">SEND_REMAINING</p></td>
<td align="left" valign="top"><p class="table">Sends all data that remains from the current cursor position</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor forward by the specified number of characters (default=1)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">SEND_UP_TO<br>action_param_1</p></td>
<td align="left" valign="top"><p class="table">Sends all data up to the specified string</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">DELAY</p></td>
<td align="left" valign="top"><p class="table">Known as "Send pause" in the DataWedge UI, pauses the specified number of milliseconds (default = 0; max. = 120000) before executing the next action. <strong>Zebra recommends pausing 50 ms after sending any ENTER, LINE FEED or TAB character</strong>.</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor forward by the specified number of characters (default=1)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">SEND_STRING<br>action_param_1</p></td>
<td align="left" valign="top"><p class="table">Sends the specified string</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">SEND_CHAR<br>action_param_1</p></td>
<td align="left" valign="top"><p class="table">Sends the specified ASCII/ Unicode character. The maximum Unicode character value is U-10FFFF (1114111 in decimal)</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor forward by the specified number of characters (default=1)</p></td>
</tr>
</tbody>
</table>
</div>

-----

### [AudioVolUIMgr](/mx/audiovoluimgr) 
* All Zebra Volume Control parameters

### BluetoothMgr
* AllowDiscoverability
* AllowPairing
* AllowSilentPairing
* SilentPairingAction

### Wi-Fi 
* 2.4GHzChannels
* 5.0GHzChannels
* 802.11v
* 802.11w
* Authentication (LEAP option)
* Authentication (EAP-FAST-GTC option)
* AutoTimeConfig
* BandPreference
* CallAdmissionControl
* CaptivePortalDetection
* CCKM_Config
* EnableRestrictedSettingsUI
* Gratuitous_ARP
* Hotspot
* Hotspot24GHz
* Hotspot5GHz
* PasswordClearPEAPGTC
* PasswordEncryptedPEAPGTC
* PasswordProtectEncryption
* SubNetRoam
* UseHotspotOptions
* WMM-PS (PowerSave Option 4)

### WorryFreeWiFi 
* All parameters

<!-- 
menu:
  items:
    - title: About
      url: /oemconfig/9-3/about
    - title: Process
      url: /oemconfig/9-3/process
    - title: FAQs
      url: /oemconfig/9-3/faq
    - title: Managed Configurations
      url: /oemconfig/9-3/mc
    - icon: fa fa-search
      url: /oemconfig/9-3/search -->
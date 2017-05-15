---
title: Mag-Stripe Reader Input
layout: guide.html
product: DataWedge
productversion: '6.3'
---

## Overview
**Magnetic Stripe Reader (MSR) Input** is used when acquiring data from a credit or debit card about the carrier's bank, credit agency or other financial institution. Information is stored on "mag-stripe" cards in an open format using the ANSI x4.16 standard. Data is transferred to the device when the card is "swiped" through the MSR. DataWedge can acquire, process and output the data in its raw form or can encrypt it immediately upon acquisition, and keep secure it at all times thereafter. 

Under the ANSI x4.16 standard, data is stored on the card in three tracks. Unencrypted data can be acquired from any of the individual tracks or from all three at once. The same is true for data encrypted using Zebra's Enhanced Mode encryption. Data encrypted using Zebra Original Mode can be acquired only all at once. 

<img style="height:350px" src="msr_encryption_modes.png"/>
_The three modes of MSR card encoding, two of which include encryption_
<br>
<br>

#### Compatible Zebra Devices
The following Zebra devices can use DataWedge to acquire MSR data: 

* **MC40 with MSR** (model# [MC40N0-SLK3RM1](https://www.zebra.com/us/en/products/mobile-computers/handheld/mc40-mobile-computer-series.html)) 
* **TC70/TC75** with MSR snap-on module (part# [MSR-TC7X-SNP1-01](https://www.zebra.com/us/en/products/accessories/mobile-computer/mobile-payment-device/magnetic-card-reader.html))

See all [MC40 configuration options (.pdf)](https://www.zebra.com/content/dam/zebra_new_ia/en-us/solutions-verticals/product/Mobile_Computers/Hand-Held%20Computers/MC40%20Touch%20Computer/guide/MC40%20Configuration%20and%20Accessories%20Guide.pdf). 

<!-- 
MC40 model MC40N0-SCJ3R01 removed; not MSR-equipped.
-->
-----

## MSR Input

**To enable DataWedge to accept MSR input**:

Check the "Enabled" box in the MSR Input section of the desired Profile(s):    
<img style="height:350px" src="msr_input.png"/>
_MSR input enabled in the "DWDemo" Profile_
<br>

**Note**: DataWedge also provides beep sounds and other feedback to indicate scanning results. See the [Scan Params](../barcode/#scanparams) section for more information. 

-----

## MSR Output

Whether open or encrypted, **<u>MSR data is output from DataWedge only through intents</u>**. It is therefore necessary for the receiving application to be capable of accepting and processing data from an intent bundle. It's also important to note that **DataWedge offers a set of fixed data formatting options for modifying and/or appending the acquired data** based on the encryption setting. Formatting options are shown in the sections below. 

**To retrieve MSR data**: 

	:::java
	Intent.getStringtExtra()

Mag-stripe data is distributed across three tracks on the card and must be mapped to DataWedge tags according to the tables below. 

### Non-ISO Mode (no encryption)

Non-ISO mode does not encrypt the data and allows data to be obtained from any of the three tracks or from all three tracks at once, depending on the needs of the application. Tags for obtaining the data are shown below. 

**Obtain MSR data from all three tracks**:

* All MSR data - `com.symbol.datawedge.msr_data` (see Output Type table)

**Obtain MSR data from individual tracks**: 

* Track 1 status - `com.symbol.datawedge.msr_track1_status`
* Track 2 status - `com.symbol.datawedge.msr_track2_status`
* Track 3 status - `com.symbol.datawedge.msr_track3_status`

### Non-ISO Data Output Type
<!--
<p class="P7"> </p>
-->
<table border="0" cellspacing="0" cellpadding="0" class="Table7">
<tbody>
<colgroup>
<col width="125"/><col width="347"/><col width="249"/></colgroup>
<tr class="Table71" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table7_A1"><p class="P22"><span class="T12"><strong>Field Number</strong></span></p></td>
<td style="text-align:left;width:3.125in; " class="Table7_A1"><p class="P22"><span class="T12"><strong>Field Description</strong></span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_A1"><p class="P22"><span class="T12"><strong>Notes</strong></span></p></td>
</tr>
<tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A2"><p class="P22"><span class="T13">1</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B2"><p class="P23"><span class="T13">STX</span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C2"><p class="P26"> </p></td></tr>
<tr class="Table72" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table7_A3"><p class="P22"><span class="T13">2</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B3"><p class="P23"><span class="T13">Length</span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C3"><p class="P26"> </p></td>
</tr>
<tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A2"><p class="P22"><span class="T13">3</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B2"><p class="P23"><span class="T13">Card Encoding Type</span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C2"><p class="P26"> </p></td>
</tr>
<tr class="Table72" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table7_A5"><p class="P22"><span class="T13">4</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B5"><p class="P23"><span class="T13">Track 1-3 Status</span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C5"><p class="P26"> </p></td>
</tr>
<tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A2"><p class="P22"><span class="T13">5</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B2"><p class="P23"><span class="T13">Track 1 Unencrypted Length </span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C2"><p class="P23"><span class="T13">0 = "No track 1 data present"</span></p></td>
</tr>
<tr class="Table72" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table7_A7"><p class="P22"><span class="T13">6</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B7"><p class="P23"><span class="T13">Track 2 Unencrypted Length </span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C7"><p class="P23"><span class="T13">0 = "No track 2 data present"</span></p></td>
</tr>
<tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A2"><p class="P22"><span class="T13">7</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B2"><p class="P23"><span class="T13">Track 3 Unencrypted Length </span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C2"><p class="P23"><span class="T13">0 = "No track 3 data present"</span></p></td>
</tr>
<tr class="Table72" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table7_A9"><p class="P22"><span class="T13">8</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B9"><p class="P23"><span class="T13">Track 1 Data </span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C9"><p class="P23"><span class="T13">(if present)</span></p></td>
</tr>
<tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A2"><p class="P22"><span class="T13">9</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B2"><p class="P23"><span class="T13">Track 2 Data </span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C2"><p class="P23"><span class="T13">(if present)</span></p></td>
</tr>
<tr class="Table72" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table7_A11"><p class="P22"><span class="T13">10</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B11"><p class="P23"><span class="T13">Track 3 Data </span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C11"><p class="P23"><span class="T13">(if present)</span></p></td>
</tr>
<tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A2"><p class="P22"><span class="T13">11</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B2"><p class="P23"><span class="T13">LRC </span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C2"><p class="P26"> </p></td>
</tr>
<tr class="Table72" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table7_A13"><p class="P22"><span class="T13">12</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B13"><p class="P23"><span class="T13">Checksum</span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C13"><p class="P26"> </p></td>
</tr>
<tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A2"><p class="P22"><span class="T13">13</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B2"><p class="P23"><span class="T13">ETX</span></p></td>
<tr class="Table72" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table7_A13"><p class="P22"><span class="T13"></span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B13"><p class="P23"><span class="T13"></span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C13"><p class="P26"> </p></td>
</tr>
</tbody>
</table>


<!--
OLD INFO (incorrect and incomplete, per weissman)
* **String MSR_DATA_TAG = "com.symbol.datawedge.msr_data"**;
The data from the MSR tracks is concatenated and sent out as a byte array. The Start/end sentinels and track separators are included as configured.

* **String MSR_TRACK1_TAG = "com.symbol.datawedge.msr_track1"**; MSR track 1 data is returned as a byte array.

* **String MSR_TRACK2_TAG = "com.symbol.datawedge.msr_track2"**; MSR track 2 data is returned as a byte array.

* **String MSR_TRACK3_TAG = "com.symbol.datawedge.msr_track3"**; MSR track 3 data is returned as a byte array.

* **String MSR_TRACK1_STATUS_TAG = "com.symbol.datawedge.msr_track1_status"**; MSR track 1 decode status as an Integer where 0 indicates a successful decode.

* **String MSR_TRACK2_STATUS_TAG = "com.symbol.datawedge.msr_track2_status"**; MSR track 2 decode status as an Integer where 0 indicates a successful decode.

* **String MSR_TRACK3_STATUS_TAG = "com.symbol.datawedge.msr_track3_status"**; MSR track 3 decode status as an Integer where 0 indicates a successful decode.
-->

-----

**Related guides**:

* [Profiles](../../profiles)
* [DataWedge APIs](../../api) 


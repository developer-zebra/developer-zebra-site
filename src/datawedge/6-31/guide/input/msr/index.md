---
title: Mag-Stripe Reader Input
layout: guide.html
product: DataWedge
productversion: '6.3'
---

## Overview
**Magnetic Stripe Reader (MSR) Input** is used when acquiring data from a credit or debit card about the carrier's bank, credit agency or other financial institution. Information is stored on "mag-stripe" cards in an open format using the ANSI x4.16 standard. Data is transferred to the device when the card is "swiped" through the MSR. DataWedge can acquire and output the data in its raw form or can encrypt it immediately upon acquisition, securing it at all times thereafter. 

Under the ANSI x4.16 standard, data is stored on the card in three tracks. Unencrypted data can be acquired from any of the individual tracks or from all three at once. The same is true for data encrypted using Zebra's Enhanced Mode encryption. Zebra Original Mode encryption treats all three tracks as a single entity. Data encrypted using Original Mode must therefore be acquired all at once. 

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

The tag above returns all data readable from the card by the MSR head. The table below lists the data fields contained in the tag in order in which they appear in the data.

-----

## Non-ISO Mode

Non-ISO mode does not encrypt the data and allows data to be obtained from any of the three tracks or from all three tracks at once, depending on the needs of the application. Tags for obtaining the data are shown below. 

**Obtain MSR data from all three tracks**:

* All MSR data - `com.symbol.datawedge.msr_data`

The tag above returns all data readable from the card by the MSR head. The table below lists the data fields contained in the tag in order in which they appear in the data.

### Non-ISO Field-to-Tag Mapping 
<table border="0" cellspacing="0" cellpadding="0" class="Table4"><colgroup><col width="311"/><col width="403"/></colgroup>
<tr class="Table41" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8021in; " class="Table4_A1"><p class="P22"><span class="T18"><strong>Card Data Field:</strong></span></p></td>
<td style="text-align:left;width:3.6347in; " class="Table4_A1"><p class="P22"><span class="T18"><strong>Maps to DataWedge Tag:</strong></span></p></td></tr>
<tr class="Table42"><td style="text-align:left;width:2.8021in; " class="Table4_A2"><p class="P21"><span class="T26">Track 1 Status</span></p></td><td style="text-align:left;width:3.6347in; " class="Table4_B2"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track1_status</span></p></td></tr>
<tr class="Table42" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8021in; " class="Table4_A3"><p class="P21"><span class="T26">Track 2 Status</span></p></td><td style="text-align:left;width:3.6347in; " class="Table4_B3"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track2_status</span></p></td></tr>
<tr class="Table42"><td style="text-align:left;width:2.8021in; " class="Table4_A4"><p class="P21"><span class="T26">Track 3 Status</span></p></td><td style="text-align:left;width:3.6347in; " class="Table4_B4"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track3_status</span></p></td></tr>
<tr class="Table42"><td style="text-align:left;width:2.8021in; " class="Table4_A5"><p class="P21" bgcolor="#e0e0eb"><span class="T26">All MSR Data (see Data Types, below)</span></p></td><td style="text-align:left;width:3.6347in; " class="Table4_B5"><p class="P23"><span class="T27">com.symbol.datawedge.msr_data</span></p></td></tr>
</table>


### Non-ISO Field Types
<!--
<p class="P7"> </p>
-->
<table border="0" cellspacing="0" cellpadding="0" class="Table7">
<tbody>
<colgroup>
<col width="125"/><col width="347"/><col width="249"/></colgroup>
<tr class="Table71" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table7_A1"><p class="P22"><span class="T12"><strong>Field Number</strong></span></p></td>
<td style="text-align:left;width:3.125in; " class="Table7_A1"><p class="P22"><span class="T12"><strong>Description</strong></span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_A1"><p class="P22"><span class="T12"><strong>Notes</strong></span></p></td>
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

-----

## Enhanced Mode

Zebra Enhanced Mode encrypts data on each track separately, enabling data to from each track to be handled separately, if desired. Tags for obtaining the data are shown below. 

**Obtain MSR data from all three tracks**:

* All MSR data - `com.symbol.datawedge.msr_data`

The tag above returns all data readable from the card by the MSR head. The table below lists the data fields contained in the tag in order in which they appear in the data.

### Enhanced Mode Field-to-Tag Mapping
<table border="0" cellspacing="0" cellpadding="0" class="Table2"><colgroup><col width="319"/><col width="395"/></colgroup><tr class="Table21" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8743in; " class="Table2_A1"><p class="P22"><span class="T18">Card Data Field:</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_A1"><p class="P22"><span class="T18">Maps to DataWedge Tag:</span></p></td></tr>
<tr class="Table22"><td style="text-align:left;width:2.8743in; " class="Table2_A2"><p class="P21"><span class="T26">Track 1 Status</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B2"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track1_status</span></p></td></tr>
<tr class="Table22" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8743in; " class="Table2_A3"><p class="P21"><span class="T26">Track 2 Status</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B3"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track2_status</span></p></td></tr>
<tr class="Table22"><td style="text-align:left;width:2.8743in; " class="Table2_A4"><p class="P21"><span class="T26">Track 3 Status</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B4"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track3_status</span></p></td></tr>
<tr class="Table22" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8743in; " class="Table2_A5"><p class="P21"><span class="T26">Track 1 Encrypted data present</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B5"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track1_encrypted_status</span></p></td></tr>
<tr class="Table22"><td style="text-align:left;width:2.8743in; " class="Table2_A4"><p class="P21"><span class="T26">Track 2 Encrypted data present</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B4"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track2_encrypted_status</span></p></td></tr>
<tr class="Table22" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8743in; " class="Table2_A7"><p class="P21"><span class="T26">Track 3 Encrypted data present</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B7"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track3_encrypted_status</span></p></td></tr>
<tr class="Table22"><td style="text-align:left;width:2.8743in; " class="Table2_A4"><p class="P21"><span class="T26">Track 1 Masked Data (ASCII)</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B4"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track1</span></p></td></tr>
<tr class="Table22" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8743in; " class="Table2_A9"><p class="P21"><span class="T26">Track 2 Masked Data (ASCII)</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B9"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track2</span></p></td></tr>
<tr class="Table22"><td style="text-align:left;width:2.8743in; " class="Table2_A4"><p class="P21"><span class="T26">Track 3 Masked Data (ASCII)</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B4"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track3</span></p></td></tr>
<tr class="Table22" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8743in; " class="Table2_A11"><p class="P21"><span class="T26">All MSR Data (see Field Table for details)</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B11"><p class="P23"><span class="T27">com.symbol.datawedge.msr_data</span></p></td></tr>
<tr class="Table22"><td style="text-align:left;width:2.8743in; " class="Table2_A4"><p class="P21"><span class="T26">Track 1 Encrypted Data (HEX)</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B4"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track1_encrypted</span></p></td></tr>
<tr class="Table22" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8743in; " class="Table2_A13"><p class="P21"><span class="T26">Track 2 Encrypted Data (HEX)</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B13"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track2_encrypted</span></p></td></tr>
<tr class="Table22"><td style="text-align:left;width:2.8743in; " class="Table2_A4"><p class="P21"><span class="T26">Track 3 Encrypted Data (HEX)</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B4"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track3_encrypted</span></p></td></tr>
<tr class="Table22" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8743in; " class="Table2_A15"><p class="P21"><span class="T26">Track 1 Hashed</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B15"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track1_hashed</span></p></td></tr>
<tr class="Table22"><td style="text-align:left;width:2.8743in; " class="Table2_A4"><p class="P21"><span class="T26">Track 2 Hashed</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B4"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track2_hashed</span></p></td></tr>
<tr class="Table22" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8743in; " class="Table2_A17"><p class="P21"><span class="T26">Track 3 Hashed</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B17"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track3_hashed</span></p></td></tr>
<tr class="Table22"><td style="text-align:left;width:2.8743in; " class="Table2_A4"><p class="P21"><span class="T26">DUKPT Serial Number (KSN)</span></p></td><td style="text-align:left;width:3.5625in; " class="Table2_B4"><p class="P23"><span class="T26">com.symbol.datawedge.msr_ksn</span></p></td></tr>
</table>

### Enhanced Mode Field Types

Table 2 - For ISO/ABA Data Output Type Enhanced Encryption

<p class="P10"> </p><table border="0" cellspacing="0" cellpadding="0" class="Table6"><colgroup><col width="125"/><col width="347"/><col width="249"/></colgroup>
<tr class="Table61" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table6_A1"><p class="P22"><span class="T19"><strong>Field Number</strong></span></p></td><td style="text-align:left;width:3.125in; " class="Table6_A1"><p class="P22"><span class="T19"><strong>Description</strong></span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_A1"><p class="P22"><span class="T19"><strong>Notes</strong></span></p></td></tr>
<tr class="Table62"><td style="text-align:left;width:1.125in; " class="Table6_A2"><p class="P22"><span class="T13">1</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B2"><p class="P23"><span class="T13">STX </span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C2"><p class="P26"> </p></td></tr>
<tr class="Table62" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table6_A3"><p class="P22"><span class="T13">2</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B3"><p class="P23"><span class="T13">Length</span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C3"><p class="P26"> </p></td></tr>
<tr class="Table62"><td style="text-align:left;width:1.125in; " class="Table6_A2"><p class="P22"><span class="T13">3</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B2"><p class="P23"><span class="T13">Card Encoding Type</span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C2"><p class="P26"> </p></td></tr>
<tr class="Table62" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table6_A5"><p class="P22"><span class="T13">4</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B5"><p class="P23"><span class="T13">Track 1-3 Status</span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C5"><p class="P26"> </p></td></tr>
<tr class="Table62"><td style="text-align:left;width:1.125in; " class="Table6_A2"><p class="P22"><span class="T13">5</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B2"><p class="P23"><span class="T13">Track 1 Unencrypted Length </span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C2"><p class="P23"><span class="T13">0 = "No track 1 data present"</span></p></td></tr>
<tr class="Table62" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table6_A7"><p class="P22"><span class="T13">6</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B7"><p class="P23"><span class="T13">Track 2 Unencrypted Length </span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C7"><p class="P26"> </p></td></tr>
<tr class="Table62"><td style="text-align:left;width:1.125in; " class="Table6_A2"><p class="P22"><span class="T13">7</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B2"><p class="P23"><span class="T13">Track 3 Unencrypted Length </span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C2"><p class="P23"><span class="T13">0 = "No track 3 data present"</span></p></td></tr>
<tr class="Table62" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table6_A9"><p class="P22"><span class="T13">8</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B9"><p class="P23"><span class="T13">Clear/Masked Data Sent Status</span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C9"><p class="P26"> </p></td></tr>
<tr class="Table62"><td style="text-align:left;width:1.125in; " class="Table6_A2"><p class="P22"><span class="T13">9</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B2"><p class="P23"><span class="T13">Encrypted/Hashed Data Sent Status</span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C2"><p class="P26"> </p></td></tr>
<tr class="Table62" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table6_A11"><p class="P22"><span class="T13">10</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B11"><p class="P23"><span class="T13">Track 1 Masked </span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C11"><p class="P23"><span class="T13">(if present)</span></p></td></tr>
<tr class="Table62"><td style="text-align:left;width:1.125in; " class="Table6_A2"><p class="P22"><span class="T13">11</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B2"><p class="P23"><span class="T13">Track 2 Masked</span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C2"><p class="P26"> </p></td></tr>
<tr class="Table62" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table6_A13"><p class="P22"><span class="T13">12</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B13"><p class="P23"><span class="T13">Track 3 Masked </span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C13"><p class="P23"><span class="T13">(if present)</span></p></td></tr>
<tr class="Table62"><td style="text-align:left;width:1.125in; " class="Table6_A2"><p class="P22"><span class="T13">13</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B2"><p class="P23"><span class="T13">Track 1 Encrypted </span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C2"><p class="P23"><span class="T13">(if present)</span></p></td></tr>
<tr class="Table62" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table6_A15"><p class="P22"><span class="T13">14</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B15"><p class="P23"><span class="T13">Track 2 Encrypted </span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C15"><p class="P26"> </p></td></tr>
<tr class="Table62"><td style="text-align:left;width:1.125in; " class="Table6_A2"><p class="P22"><span class="T13">15</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B2"><p class="P23"><span class="T13">Track 3 Encrypted </span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C2"><p class="P23"><span class="T13">(if present)</span></p></td></tr>
<tr class="Table62" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table6_A17"><p class="P22"><span class="T13">16</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B17"><p class="P23"><span class="T13">Track 1 Hashed </span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C17"><p class="P23"><span class="T13">(if present)</span></p></td></tr>
<tr class="Table62"><td style="text-align:left;width:1.125in; " class="Table6_A2"><p class="P22"><span class="T13">17</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B2"><p class="P23"><span class="T13">Track 2 Hashed </span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C2"><p class="P26"> </p></td></tr>
<tr class="Table62" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table6_A19"><p class="P22"><span class="T13">18</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B19"><p class="P23"><span class="T13">Track 3 Hashed </span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C19"><p class="P23"><span class="T13">(if present)</span></p></td></tr>
<tr class="Table62"><td style="text-align:left;width:1.125in; " class="Table6_A2"><p class="P22"><span class="T13">19</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B2"><p class="P23"><span class="T13">KSN (DUKPT Serial Number)</span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C2"><p class="P26"> </p></td></tr>
<tr class="Table62" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table6_A21"><p class="P22"><span class="T13">20</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B21"><p class="P23"><span class="T13">LRC</span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C21"><p class="P26"> </p></td></tr>
<tr class="Table62"><td style="text-align:left;width:1.125in; " class="Table6_A2"><p class="P22"><span class="T13">21</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B2"><p class="P23"><span class="T13">Checksum</span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C2"><p class="P26"> </p></td></tr>
<tr class="Table62" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table6_A23"><p class="P22"><span class="T13">22</span></p></td><td style="text-align:left;width:3.125in; " class="Table6_B23"><p class="P23"><span class="T13">ETX</span></p></td><td style="text-align:left;width:2.2431in; " class="Table6_C23"><p class="P26"> </p></td></tr>
</table>

-----

## Original Mode

Zebra original Mode encrypts data on the three tracks as a single entity, preventing track data from be handled separately. Tags for obtaining the data are shown below. 

**Obtain MSR data from all three tracks**:

* All MSR data - `com.symbol.datawedge.msr_data`

The tag above returns all data readable from the card by the MSR head. The table below lists the data fields contained in the tag in order in which they appear in the data.

### Original Mode Field-to-Tag Mapping
<table border="0" cellspacing="0" cellpadding="0" class="Table3"><colgroup><col width="312"/><col width="402"/></colgroup><tr class="Table31" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8125in; " class="Table3_A1"><p class="P22"><span class="T18"><strong>Card Data Field:</strong></span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_A1"><p class="P22"><span class="T18"><strong>Maps to DataWedge Tag:</strong></span></p></td></tr>
<tr class="Table32"><td style="text-align:left;width:2.8125in; " class="Table3_A2"><p class="P21"><span class="T26">Track 1 Status</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B2"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track1_status</span></p></td></tr>
<tr class="Table32" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8125in; " class="Table3_A3"><p class="P21"><span class="T26">Track 2 Status</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B3"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track2_status</span></p></td></tr>
<tr class="Table32"><td style="text-align:left;width:2.8125in; " class="Table3_A4"><p class="P21"><span class="T26">Track 3 Status</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B4"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track3_status</span></p></td></tr>
<tr class="Table32" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8125in; " class="Table3_A5"><p class="P21"><span class="T26">Track 1 Masked Data (ASCII)</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B5"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track1</span></p></td></tr>
<tr class="Table32"><td style="text-align:left;width:2.8125in; " class="Table3_A4"><p class="P21"><span class="T26">Track 2 Masked Data (ASCII)</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B4"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track2</span></p></td></tr>
<tr class="Table32" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8125in; " class="Table3_A7"><p class="P21"><span class="T26">Track 3 Masked Data (ASCII)</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B7"><p class="P23"><span class="T27">com.symbol.datawedge.msr_track3</span></p></td></tr>
<tr class="Table32"><td style="text-align:left;width:2.8125in; " class="Table3_A4"><p class="P21"><span class="T26">All MSR Data (see Field Table for details)</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B4"><p class="P23"><span class="T27">com.symbol.datawedge.msr_data</span></p></td></tr>
<tr class="Table32" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8125in; " class="Table3_A9"><p class="P21"><span class="T26">Track 1 Encrypted Data (HEX)</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B9"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track1_encrypted</span></p></td></tr>
<tr class="Table32"><td style="text-align:left;width:2.8125in; " class="Table3_A4"><p class="P21"><span class="T26">Track 2 Encrypted Data (HEX)</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B4"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track2_encrypted</span></p></td></tr>
<tr class="Table32" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8125in; " class="Table3_A11"><p class="P21"><span class="T26">Track 3 Encrypted Data (HEX)</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B11"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track3_encrypted</span></p></td></tr>
<tr class="Table32"><td style="text-align:left;width:2.8125in; " class="Table3_A4"><p class="P21"><span class="T26">Track 1 Hashed</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B4"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track1_hashed</span></p></td></tr>
<tr class="Table32" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8125in; " class="Table3_A13"><p class="P21"><span class="T26">Track 2 Hashed</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B13"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track2_hashed</span></p></td></tr>
<tr class="Table32"><td style="text-align:left;width:2.8125in; " class="Table3_A4"><p class="P21"><span class="T26">Track 3 Hashed</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B4"><p class="P23"><span class="T26">com.symbol.datawedge.msr_track3_hashed</span></p></td></tr>
<tr class="Table32" bgcolor="#e0e0eb"><td style="text-align:left;width:2.8125in; " class="Table3_A15"><p class="P21"><span class="T26">DUKPT Serial Number (KSN)</span></p></td><td style="text-align:left;width:3.6243in; " class="Table3_B15"><p class="P23"><span class="T26">com.symbol.datawedge.msr_ksn</span></p></td></tr>
</table>


### Original Mode Data Types
<table border="0" cellspacing="0" cellpadding="0" class="Table5"><colgroup><col width="124"/><col width="347"/><col width="271"/></colgroup>
<tr class="Table51" bgcolor="#e0e0eb"><td style="text-align:left;width:1.1208in; " class="Table5_A1"><p class="P22"><span class="T17"><strong>Field Number</strong></span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_A1"><p class="P22"><span class="T17"><strong>Description</strong></span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_A1"><p class="P22"><span class="T17"><strong>Notes</strong></span></p></td></tr>
<tr class="Table52"><td style="text-align:left;width:1.1208in; " class="Table5_A2"><p class="P22"><span class="T13">1</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B2"><p class="P23"><span class="T13">STX</span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P26"> </p></td></tr>
<tr class="Table52" bgcolor="#e0e0eb"><td style="text-align:left;width:1.1208in; " class="Table5_A3"><p class="P22"><span class="T13">2</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B3"><p class="P23"><span class="T13">Length</span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C3"><p class="P26"> </p></td></tr>
<tr class="Table52"><td style="text-align:left;width:1.1208in; " class="Table5_A2"><p class="P22"><span class="T13">3</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B2"><p class="P23"><span class="T13">Card Encoding Type</span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P26"> </p></td></tr>
<tr class="Table52" bgcolor="#e0e0eb"><td style="text-align:left;width:1.1208in; " class="Table5_A5"><p class="P22"><span class="T13">4</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B5"><p class="P23"><span class="T13">Track 1-3 Status</span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C5"><p class="P26"> </p></td></tr>
<tr class="Table52"><td style="text-align:left;width:1.1208in; " class="Table5_A2"><p class="P22"><span class="T13">5</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B2"><p class="P23"><span class="T13">Track 1 Unencrypted Length </span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P23"><span class="T13">0 = "No track 1 data present"</span></p></td></tr>
<tr class="Table52" bgcolor="#e0e0eb"><td style="text-align:left;width:1.1208in; " class="Table5_A7"><p class="P22"><span class="T13">6</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B7"><p class="P23"><span class="T13">Track 2 Unencrypted Length </span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C7"><p class="P26"> </p></td></tr>
<tr class="Table52"><td style="text-align:left;width:1.1208in; " class="Table5_A2"><p class="P22"><span class="T13">7</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B2"><p class="P23"><span class="T13">Track 3 Unencrypted Length </span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P23"><span class="T13">0 = "No track 3 data present"</span></p></td></tr>
<tr class="Table52" bgcolor="#e0e0eb"><td style="text-align:left;width:1.1208in; " class="Table5_A9"><p class="P22"><span class="T13">8</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B9"><p class="P23"><span class="T13">Track 1 Masked </span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C9"><p class="P23"><span class="T13">(if present)</span></p></td></tr>
<tr class="Table52"><td style="text-align:left;width:1.1208in; " class="Table5_A2"><p class="P22"><span class="T13">9</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B2"><p class="P23"><span class="T13">Track 2 Masked</span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P26"> </p></td></tr>
<tr class="Table52" bgcolor="#e0e0eb"><td style="text-align:left;width:1.1208in; " class="Table5_A11"><p class="P22"><span class="T13">10</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B11"><p class="P23"><span class="T13">Track 3 Data </span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C11"><p class="P23"><span class="T13">(if present)</span></p></td></tr>
<tr class="Table52"><td style="text-align:left;width:1.1208in; " class="Table5_A2"><p class="P22"><span class="T13">11</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B2"><p class="P23"><span class="T13">Encrypted Data<br/>(Track 1 + Track 2 + Track 3)</span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P23"><span class="T13">Track 1 and Track 3 included only (if present)</span></p></td></tr>
<tr class="Table52" bgcolor="#e0e0eb"><td style="text-align:left;width:1.1208in; " class="Table5_A13"><p class="P22"><span class="T13">12</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B13"><p class="P23"><span class="T13">Track 1 Hashed </span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C13"><p class="P23"><span class="T13">(if present)</span></p></td></tr>
<tr class="Table52"><td style="text-align:left;width:1.1208in; " class="Table5_A2"><p class="P22"><span class="T13">13</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B2"><p class="P23"><span class="T13">Track 2 Hashed</span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P26"> </p></td></tr>
<tr class="Table52" bgcolor="#e0e0eb"><td style="text-align:left;width:1.1208in; " class="Table5_A15"><p class="P22"><span class="T13">14</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B15"><p class="P23"><span class="T13">KSN (DUKPT Serial Number)</span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C15"><p class="P26"> </p></td></tr>
<tr class="Table52"><td style="text-align:left;width:1.1208in; " class="Table5_A2"><p class="P22"><span class="T13">15</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B2"><p class="P23"><span class="T13">LRC </span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P26"> </p></td></tr>
<tr class="Table52" bgcolor="#e0e0eb"><td style="text-align:left;width:1.1208in; " class="Table5_A17"><p class="P22"><span class="T13">16</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B17"><p class="P23"><span class="T13">Checksum</span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C17"><p class="P26"> </p></td></tr>
<tr class="Table52"><td style="text-align:left;width:1.1208in; " class="Table5_A2"><p class="P22"><span class="T13">17</span></p></td><td style="text-align:left;width:3.1285in; " class="Table5_B2"><p class="P23"><span class="T13">ETX</span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P26"> </p></td></tr>
</table>

-----

**Related guides**:

* [Profiles](../../profiles)
* [DataWedge APIs](../../api) 
* [IDTech SecureHead User Manual](https://atlassian.idtechproducts.com/confluence/download/attachments/30479625/80101505-001-H%20User%20manual%20SecureHead%20USB%20UART.pdf?api=v2)
* [ANSI x9.24-2016 (DUKPT Specs)](http://webstore.ansi.org/RecordDetail.aspx?sku=ANSI+X9.24-2-2016)


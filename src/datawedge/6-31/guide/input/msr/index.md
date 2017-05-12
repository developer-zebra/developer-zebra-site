---
title: Mag-Stripe Reader Input
layout: guide.html
product: DataWedge
productversion: '6.3'
---

## Overview
**Magnetic Stripe Reader (MSR) Input** is used when acquiring data from a credit or debit card about the carrier's bank, credit agency or other financial institution. Zebra offers several device options for acquiring MSR data using DataWedge. 

#### Devices with MSR Support

**TC70/TC75**:
* **MSR snap-on module for TC7x devices** (part# MSR-TC7XSNP1-01) 

**MC40**: 
* **MC40 device with MSR and Wi-Fi** (model# MC40N0-SLK3RM1) 
* **MC40 device with MSR and WLAN** (model# MC40N0-SCJ3R01)  

Information is stored on "mag-stripe" cards in an open format using the ANSI x4.16 standard. Data is transferred by "swiping" the card through the MSR. DataWedge can acquire and output the raw data, or can encrypt the data once acquired to secure it at all times thereafter. Either way, **<u>DataWedge outputs MSR data only through intents</u>**, and offers a set of fixed data formatting options (shown in tables later in this guide). 

-----

## Enable MSR Input
To enable input from a mag-stripe reader, add check the "Enabled" box in the MSR Input section of the desired Profile(s):    
<img style="height:350px" src="msr_input.png"/>
_MSR input enabled in the "DWDemo" Profile_
<br>

**DataWedge also provides beep sounds and other feedback to alert the device user of scanning results. See the [Scan Params](../barcode/#scanparams) section for more information**. 

-----

## MSR Output

Data acquired from an MSR is output as part of an intent bundle. It is therefore necessary for the receiving  application to contain code to accept the intent and process its data. 

**To retrieve MSR data**: 

	:::java
	Intent.getStringtExtra()

Mag-stripe data is distributed across three tracks on the card and must be mapped to DataWedge tags according to the tables below. 

### Non-ISO Mode (no encryption)
Non-ISO mode does not encrypt the data. For this mode, track data must be obtained from the `com.symbol.datawedge.msr_data` tag. Information for substring operations of this tag are shown below:

* Track 1 status - `com.symbol.datawedge.msr_track1_status`
* Track 2 status - `com.symbol.datawedge.msr_track2_status`
* Track 3 status - `com.symbol.datawedge.msr_track3_status`
* All MSR data - `com.symbol.datawedge.msr_data`

MSR data is contained in the `com.symbol.datawedge.msr_data` tag as follows:


Table 3 - For Non-ISO (RAW) Data Output Type</h2><p class="P7"> </p><table border="0" cellspacing="0" cellpadding="0" class="Table7"><colgroup><col width="125"/><col width="347"/><col width="249"/></colgroup><tr class="Table71"><td style="text-align:left;width:1.125in; " class="Table7_A1"><p class="P22"><span class="T12">Field Number</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_A1"><p class="P22"><span class="T12">Field Description</span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_A1"><p class="P22"><span class="T12">Notes</span></p></td></tr><tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A2"><p class="P22"><span class="T13">1</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B2"><p class="P23"><span class="T13">STX</span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C2"><p class="P26"> </p></td></tr><tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A3"><p class="P22"><span class="T13">2</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B3"><p class="P23"><span class="T13">Length</span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C3"><p class="P26"> </p></td></tr><tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A2"><p class="P22"><span class="T13">3</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B2"><p class="P23"><span class="T13">Card Encoding Type</span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C2"><p class="P26"> </p></td></tr><tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A5"><p class="P22"><span class="T13">4</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B5"><p class="P23"><span class="T13">Track 1-3 Status</span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C5"><p class="P26"> </p></td></tr><tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A2"><p class="P22"><span class="T13">5</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B2"><p class="P23"><span class="T13">Track 1 Unencrypted Length </span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C2"><p class="P23"><span class="T13">0 for no track 1 data present</span></p></td></tr><tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A7"><p class="P22"><span class="T13">6</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B7"><p class="P23"><span class="T13">Track 2 Unencrypted Length </span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C7"><p class="P23"><span class="T13">0 for no track 1 data present</span></p></td></tr><tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A2"><p class="P22"><span class="T13">7</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B2"><p class="P23"><span class="T13">Track 3 Unencrypted Length </span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C2"><p class="P23"><span class="T13">0 for no track 3 data present</span></p></td></tr><tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A9"><p class="P22"><span class="T13">8</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B9"><p class="P23"><span class="T13">Track 1 Data </span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C9"><p class="P23"><span class="T13">if present</span></p></td></tr><tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A2"><p class="P22"><span class="T13">9</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B2"><p class="P23"><span class="T13">Track 2 Data </span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C2"><p class="P23"><span class="T13">if present</span></p></td></tr><tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A11"><p class="P22"><span class="T13">10</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B11"><p class="P23"><span class="T13">Track 3 Data </span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C11"><p class="P23"><span class="T13">if present</span></p></td></tr><tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A2"><p class="P22"><span class="T13">11</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B2"><p class="P23"><span class="T13">LRC </span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C2"><p class="P26"> </p></td></tr><tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A13"><p class="P22"><span class="T13">12</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B13"><p class="P23"><span class="T13">Checksum</span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C13"><p class="P26"> </p></td></tr><tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A2"><p class="P22"><span class="T13">13</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B2"><p class="P23"><span class="T13">ETX</span></p></td>



The call above is used with the following string tags:








OLD INFO (incorrect and incomplete, per weissman)
* **String MSR_DATA_TAG = "com.symbol.datawedge.msr_data"**;
The data from the MSR tracks is concatenated and sent out as a byte array. The Start/end sentinels and track separators are included as configured.

* **String MSR_TRACK1_TAG = "com.symbol.datawedge.msr_track1"**; MSR track 1 data is returned as a byte array.

* **String MSR_TRACK2_TAG = "com.symbol.datawedge.msr_track2"**; MSR track 2 data is returned as a byte array.

* **String MSR_TRACK3_TAG = "com.symbol.datawedge.msr_track3"**; MSR track 3 data is returned as a byte array.

* **String MSR_TRACK1_STATUS_TAG = "com.symbol.datawedge.msr_track1_status"**; MSR track 1 decode status as an Integer where 0 indicates a successful decode.

* **String MSR_TRACK2_STATUS_TAG = "com.symbol.datawedge.msr_track2_status"**; MSR track 2 decode status as an Integer where 0 indicates a successful decode.

* **String MSR_TRACK3_STATUS_TAG = "com.symbol.datawedge.msr_track3_status"**; MSR track 3 decode status as an Integer where 0 indicates a successful decode.

-----

**Related guides**:

* Processing 
 * [Advanced Data Formatting](../../process/adf)
 * [Basic Data Formatting](../../process/bdf) 
* Output
 * [Intent](../../output/intent) 
 * [Keystrokes](../../output/keystroke)
* [Profiles](../../profiles)
* [DataWedge APIs](../../api) 


---
title: Intent Output
layout: guide.html
product: DataWedge
productversion: '6.5'
---

## Overview
Intent Output sends the processed data to the associated foreground application as payload within an Android intent. This allows acquired data to be passed programmatically to an application, where it can be consumed or further processed. The core components of an application (its activities, services and broadcast receivers) also can be activated by intents. 

An intent object is a bundle of information that describes a desired action. It includes the data to be acted upon, the category of component that should perform the action and other pertinent data and/or instructions. When an intent is initiated, Android locates an appropriate component to respond to the intent, launches a new instance of the component (if needed), and passes the intent object to it.

Components advertise the kinds of intents they can handle through intent filters, which are specified in the `AndroidManifest.xml` file as &lt;intent-filter&gt; elements. A component may have any number of intent filters, each describing a different capability. 

-----

## Intent Output Setup
DataWedge invokes an intent though an **Intent action** in an **Intent category** as described in its `AndroidManifest.xml` file. For example, if the DataWedge manifest contains the lines...

    <intent-filter>
        ...
        <action android:name="com.myapp.action" />
		<category android:name="android.intent.category.DEFAULT" />
        ...
    </intent-filter>

...the **Intent action** is `com.myapp.action` and the **Intent category** is `android.intent.category.DEFAULT`.

When combined, these two values are like a "channel" to which an app can listen for intents that use the same combination, and filtering out the "noise" from other intents that use different value pairs. **Once these values are known, DataWedge Intent Output must be set to match**. 

**To set a DataWedge Action and Category pair**: 

&#49;. Locate the Intent Output section of the Profile being configured.

&#50;. **Check "Enabled" box** to activate Intent Output:  
<img style="height:350px" src="../intent_output 2.png"/>
_Intent Output options_
<br>

&#51;. **Specify action, category and delivery** as described below: 

**Intent action -** specifies the action to handle the intent 

**Intent category -** specifies the category of intent to be handled 

**Intent delivery -** used to select one of three delivery methods for intent-based data:
* **Send via startActivity** 
* **Send via startService** 
* **Broadcast Intent** 

**When Intent delivery is set to Broadcast Intent**, DataWedge sets the **Receiver foreground flag** `Intent.FLAG_RECEIVER_FOREGROUND` in the broadcast Intent, giving the broadcast recipient permission to run at foreground priority with a shorter timeout interval. **Zebra recommends using this flag <u>only if delays are seen</u> in delivery of intents immediately following device boot-up**.

-----

## UDI Decoding

When decoding a UDI-compliant object, data is acquired from multiple barcodes simultaneously and output as a multi-decode bundle. This differs slightly from a single-decode bundle. The parameters of both bundle types are explained below.

-----

### Single (normal) Decode Mode

<table border="0" cellspacing="0" cellpadding="0" class="Table7">
<tbody>
<colgroup>
<col width="125"/><col width="347"/><col width="249"/></colgroup>
<tr class="Table71" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table7_A1"><p class="P22"><span class="T12"><strong>Parameter</strong></span></p></td>
<td style="text-align:left;width:3.125in; " class="Table7_A1"><p class="P22"><span class="T12"><strong>Type</strong></span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_A1"><p class="P22"><span class="T12"><strong>Description</strong></span></p>
</td>
</tr>
<tr class="Table72" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table7_A3"><p class="P22"><span class="T13"></span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B3"><p class="P23"><span class="T13">[String]</span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C3"><p class="P26"> </p>
</td>
</tr>
<tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A2"><p class="P22"><span class="T13">"com.symbol.datawedge.source"</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B2"><p class="P23"><span class="T13">[String]</span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C2"><p class="P23"><span class="T13">Contains the scanner index number for barcode input</span></p>
</td>
</tr>
<tr class="Table72" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table7_A7"><p class="P22"><span class="T13">"com.symbol.datawedge.label_type"</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B7"><p class="P23"><span class="T13">[String]</span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C7"><p class="P23"><span class="T13">Contains the label type (i.e. "EAN128")</span></p>
</td>
</tr>
<tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A2"><p class="P22"><span class="T13">"com.symbol.datawedge.data_string"</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B2"><p class="P23"><span class="T13">[String]</span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C2"><p class="P23"><span class="T13">Contains the acquired barcode characters (i.e. "abcde12345")</span></p>
</td>
</tr>
<tr class="Table72" bgcolor="#e0e0eb"><td style="text-align:left;width:1.125in; " class="Table7_A9"><p class="P22"><span class="T13">"com.symbol.datawedge.decode_data"</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B9"><p class="P23"><span class="T13">[List]</span></p></td><td style="text-align:left;width:2.2431in; " class="Table7_C9"><p class="P23"><span class="T13">(description needed)</span></p>
</td>
</tr>
<tr class="Table72"><td style="text-align:left;width:1.125in; " class="Table7_A2"><p class="P22"><span class="T13">"com.symbol.datawedge.decode_mode"</span></p></td><td style="text-align:left;width:3.125in; " class="Table7_B2"><p class="P23"><span class="T13">[String]</span></p></td><td style="text-align:left;width:2.4382in; " class="Table5_C2"><p class="P23"><span class="T13">Determines UDI or Single (normal) mode. Possible values: "multiple_decode" or "single_decode"</span></p></td>
</td>
</tr>
</tbody>
</table>

-----

### Multiple (UDI) Decode Mode

**"com.symbol.datawedge.decode_mode" [String] -** determines decode mode. Possible values: "multiple_decode" or "single_decode"

**"com.symbol.datawedge.smart_decode_type" [String] -** possible values “udi”or “multibarcode” are the currently supported values

**"com.symbol.datawedge.data_string" [String] -** Full barcode in string format

**"com.symbol.datawedge.decode_data" [byte [ ] ] -** Same in byte format

**"com.symbol.datawedge.source" [String] -** “scanner” for barcode input

**"com.symbol.datawedge.label_id" [String] -** Possible values: “UDI_HIBCC”, “UDI_GS1”, “UDI_ICCBBA”, “UNDEFINED”

**"com.symbol.datawedge.barcodes" [List &lt;Bundle&gt;] -** See below for Bundle description

**"com.symbol.datawedge.tokenized_data" [List &lt;Bundle&gt;] -** See below for Bundle description

-----

### Bundle ("com.symbol.datawedge.barcodes")

**"com.symbol.datawedge.label_type" [String] -** Original symbology

**"com.symbol.datawedge.decode_data" - [byte [ ] ] -** Raw data

**"com.symbol.datawedge.data_string" - [String] -** String data

-----

### Bundle ("com.symbol.datawedge.tokenized_data")

**"token_id" [String] -** (blank)

**"token_data_type" [String] -** String/Date etc.

**"token_format" - [String] -** Format string e.g.: YYYYMMDD

**"token_string_data" - [String] -** String format

**"token_binary_data" [byte [ ] ] -** Binary format

-----

### Decode-related Data

The decode-related data added to an intent bundle can be retrieved using the following call: 

	:::java
	Intent.getStringtExtra()


This call can be used with the following String tags:

**LABEL_TYPE_TAG [String] = "com.symbol.datawedge.label_type"**; String contains the barcode label type

**DATA_STRING_TAG [String] = "com.symbol.datawedge.data_string"**; String contains the output data as a String. In the case of concatenated barcodes, the decode data is concatenated and sent out as a single string.

**DECODE_DATA_TAG [String] = "com.symbol.datawedge.decode_data"**; Decode data is returned as a list of byte arrays. In most cases there will be one byte array per decode. For barcode symbologies that support concatenation (i.e. Codabar, Code128, MicroPDF, etc.) the decoded data is stored in multiple byte arrays (one byte array per bar code). Clients can get data in each byte array by passing an index.

-----

**Other DataWedge Output Options**:

* **[Internet Protocol](../ip) -** network output via TCP or UDP 
* **[Keystroke](../keystroke) -** keyboard emulation

**Related guides**:

* [Profiles/Plug-ins](../../profiles)
* [DataWedge APIs](../../api) 


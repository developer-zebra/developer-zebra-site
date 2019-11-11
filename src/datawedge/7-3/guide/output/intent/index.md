---
title: Intent Output
layout: guide.html
product: DataWedge
productversion: '7.3'
---

## Overview

Intent Output allows data acquired and processed by DataWedge to be sent to the associated foreground application as payload within an Android intent object. This allows acquired data to be passed programmatically to an application, where it can be consumed or further processed. The core components of an application (its activities, services and broadcast receivers) also can be activated by intents, as can many DataWedge features through the [DataWedge APIs](../../api).   

### The Intent Object
An intent object is a bundle of information that describes a desired action. It includes the data to be acted upon, the category of component that should perform the action and other pertinent data and/or instructions. When an intent is initiated, Android locates an appropriate component to respond to the intent, launches a new instance of the component (if needed), and passes the intent object to it.

Components advertise their capabilities (the kinds of intents they can respond to) through intent filters. Since the system must learn which intents a component can handle before it launches the component, intent filters are specified in the app's `AndroidManifest.xml` file as &lt;intent-filter&gt; elements. A component can have any number of intent filters, each describing a different capability.  

For example, if the manifest contains...

	<intent-filter>
	...
	<action android:name="android.intent.action.DEFAULT" />
	<category android:name="android.intent.category.MAIN" />
	</intent-filter>

...the intent action in the Intent Output configuration would be:

`android.intent.category.DEFAULT`

and the Intent category would be:

`android.intent.category.MAIN`

-----

**SEE ALSO**:

* **[DataWedge APIs - Benefits & Usage Scenarios](https://developer.zebra.com/community/android/android-forums/android-blogs/blog/2017/06/27/datawedge-apis-benefits-challenges) -** by Zebra engineer Darryn Campbell 
* **[Sample DataWedge app](../../api/tutorials) -** Demonstrates how to receive scanned data through an intent

-----

### Outputting Raw Data

In addition to its normal plain-text and hexadecimal modes, DataWedge can output acquired data in its raw form, before the application of any encoders. This can be useful if custom encoders are needed for acquiring character sets not supported by Zebra.  

Raw data is received as a byte stream using the `com.symbol.datawedge.decode_data` intent extra. See the [Single Decode Mode section](#singledecodemode) below. 

> **Raw data cannot be output as keystrokes**. 

-----

## Intent Output Setup

DataWedge invokes an intent though an **Intent action** in an **Intent category** as described in its `AndroidManifest.xml` file. 

When combined, these two values are like a "channel" to which an app can listen for intents that use the same combination, filtering out "noise" from other intents that use different value pairs. **Once these values are known, DataWedge Intent Output must be set to match**. 

>**Important**: For scanning applications that output directly to an activity, **the activity must be designated as "singleTop"** in the app's `AndroidManifest.xml` file. Failure to designate an activity in this way will cause an instance of the activity to be launched with every decode, and the acquired data sent to each newly spawned instance. 


> The parameters of this feature can be configured through the UI or by using the [Set Config API](../../api/setconfig).

-----

**To set a DataWedge Action/Category pair**: 

**&#49;. Locate the Intent Output section of the Profile** being configured.

**&#50;. Check "Enabled" box** to activate Intent Output:  
<img style="height:350px" src="../intent_output 2.png"/>
_Intent Output options for the "Launcher" Profile_
<br>

**&#51;. Specify action, category and delivery** as described below: 

**Intent action -** specifies the action to handle the intent 

**Intent category -** specifies the category of intent to be handled 

**Intent delivery -** used to select one of four delivery methods for intent-based data:
* **Send via startActivity** 
* **Send via startService** 
* **Send via startForegroundService**
* **Broadcast Intent** 

**When Intent delivery is set to "Broadcast Intent"**, DataWedge sets the **Receiver foreground flag** `Intent.FLAG_RECEIVER_FOREGROUND` in the broadcast Intent, giving the broadcast recipient permission to run at foreground priority with a shorter timeout interval. **Zebra recommends using this flag <u>only if delays are seen</u> in delivery of intents immediately following device boot-up**.

**When Intent delivery is set to "Send via startForegroundService"**, startForegroundService() Android API is called to deliver data. This option applies to Android Oreo (v8.0) and above.

**When Intent delivery is set to "Send via startService"**, startService() Android API is called to deliver data for devices prior to Android Oreo (v8.0). For Android Oreo and above devices, the option "Use startForegroundService on failure" is available within this setting to call startForegroundService() if the startService() call fails. With this single option, it provides support for devices both prior and later than Android Oreo. 

-----

## Single Decode Mode

Single mode reads and decodes a single barcode at a time, and is the most common decoding mode. For decoding multiple barcodes simultaneously, such as with UDI-compliant objects, see [UDI/Multiple Decode Mode](#udimultipledecodemode). 

### Parameters

**Name**: "com.symbol.datawedge.source"<br>
**Type**: [String]<br>
**Contents**: Source of incoming data<br>
**Possible values**: 
* "msr"
* "scanner"
* "simulscan"

**NOTE**: Source of incoming data is "scanner" for camera, imager or scanner. 

-----

**Name**: "com.symbol.datawedge.label_type"<br>
**Type**: [String]<br>
**Contents**: Barcode label type (i.e. "EAN128")<br>
**Possible values**: 
* "LABEL-TYPE-CODE39"
* "LABEL-TYPE-CODABAR"
* "LABEL-TYPE-CODE128"
* "LABEL-TYPE-D2OF5"
* "LABEL-TYPE-IATA2OF5"
* "LABEL-TYPE-I2OF5"
* "LABEL-TYPE-CODE93"
* "LABEL-TYPE-UPCA"
* "LABEL-TYPE-UPCE0"
* "LABEL-TYPE-UPCE1"
* "LABEL-TYPE-EAN8"
* "LABEL-TYPE-EAN13"
* "LABEL-TYPE-MSI"
* "LABEL-TYPE-EAN128"
* "LABEL-TYPE-TRIOPTIC39"
* "LABEL-TYPE-BOOKLAND"
* "LABEL-TYPE-COUPON"
* "LABEL-TYPE-DATABAR-COUPON"
* "LABEL-TYPE-ISBT128"
* "LABEL-TYPE-CODE32"
* "LABEL-TYPE-PDF417"
* "LABEL-TYPE-MICROPDF"
* "LABEL-TYPE-TLC39"
* "LABEL-TYPE-CODE11"
* "LABEL-TYPE-MAXICODE"
* "LABEL-TYPE-DATAMATRIX"
* "LABEL-TYPE-QRCODE"
* "LABEL-TYPE-GS1-DATABAR"
* "LABEL-TYPE-GS1-DATABAR-LIM"
* "LABEL-TYPE-GS1-DATABAR-EXP"
* "LABEL-TYPE-USPOSTNET"
* "LABEL-TYPE-USPLANET"
* "LABEL-TYPE-UKPOSTAL"
* "LABEL-TYPE-JAPPOSTAL"
* "LABEL-TYPE-AUSPOSTAL"
* "LABEL-TYPE-DUTCHPOSTAL"
* "LABEL-TYPE-CANPOSTAL"
* "LABEL-TYPE-CHINESE-2OF5"
* "LABEL-TYPE-AZTEC"
* "LABEL-TYPE-MICROQR"
* "LABEL-TYPE-US4STATE"
* "LABEL-TYPE-US4STATE-FICS"
* "LABEL-TYPE-COMPOSITE-AB"
* "LABEL-TYPE-COMPOSITE-C"
* "LABEL-TYPE-WEBCODE"
* "LABEL-TYPE-SIGNATURE"
* "LABEL-TYPE-KOREAN-3OF5"
* "LABEL-TYPE-MATRIX-2OF5"
* "LABEL-TYPE-OCR"
* "LABEL-TYPE-HANXIN"
* "LABEL-TYPE-MAILMARK"
* "MULTICODE-DATA-FORMAT"
* "LABEL-TYPE-GS1-DATAMATRIX"
* "LABEL-TYPE-GS1-QRCODE"
* "LABEL-TYPE-DOTCODE"
* "LABEL-TYPE-GRIDMATRIX"
* "LABEL-TYPE-UNDEFINED"

-----

**Name**: "com.symbol.datawedge.data_string"<br>
**Type**: [String]<br>
**Contents**: Acquired barcode characters<br>
**Example**: "abcde12345"<br>

-----

**Name**: "com.symbol.datawedge.decode_data"<br>
**Type**: [List &lt;byte [ ]&gt;]<br>
**Contents**: Acquired raw (unmodified) data as an array list of byte arrays<br>
**Example**: List_Item_1(array_1(byte11,byte12,byte13)),List_Item_2(array_2(byte21,byte22,byte23)) ...<br>
**Sample code**: 

	ArrayList<byte[]> rawData =  
	     (ArrayList <byte[]>) initiatingIntent.getSerializableExtra("com.symbol.datawedge.decode_data"); 
		 
	if (rawData != null) 
	{ 
		byte[] rawBytes = rawData.get(0); 
		for (int i = 0; i < rawBytes.length; i++) 
			Log.d(LOG_TAG, i + ": " + rawBytes[i]); 
	}

-----

**Name**: "com.symbol.datawedge.decoded_mode"<br>
**Type**: [String]<br>
**Contents**: Mode used to decode the incoming data<br>
**Possible values**: 
* "multiple_decode"
* "single_decode"

-----

## UDI/Multiple Decode Mode

When decoding a UDI-compliant object, data is acquired from multiple barcodes simultaneously and output as a multi-decode bundle, which differs from a single-decode bundle. DataWedge also can acquire multiple non-UDI barcodes in a single scan. This section applies to both modes.

### Parameters

**Name**: "com.symbol.datawedge.decode_mode"<br>
**Type**: [String]<br>
**Contents**: Mode used to decode incoming data<br>
**Possible values**: 
* "multiple_decode"
* "single_decode"

-----

**Name**: "com.symbol.datawedge.smart_decode_type"<br>
**Type**: [String]<br>
**Contents**: Decode type <br>
**Possible values**:
* “udi”
* “multibarcode”

-----

**Name**: "com.symbol.datawedge.data_string"<br>
**Type**: [String]<br>
**Contents**: Acquired barcode characters <br>
**Example**: "abcde12345"<br>

-----

**Name**: "com.symbol.datawedge.decode_data"<br>
**Type**: [List &lt;byte [ ]&gt;]<br>
**Contents**: Acquired raw (unmodified) data as an array list of byte arrays<br>
**Example**: List_Item_1(array_1(byte11,byte12,byte13)), List_Item_2(array_2(byte21,byte22,byte23)) ...

-----

**Name**: "com.symbol.datawedge.source"<br>
**Type**: [String]<br>
**Contents**: Source of incoming data<br>
**Possible values**:
* "msr"
* "scanner" 
* "simulscan"

-----

**Name**: "com.symbol.datawedge.label_id"<br>
**Type**: [String]<br>
**Contents**: UDI type of incoming data<br>
**Possible values**:
* “UDI_HIBCC” 
* “UDI_GS1” 
* “UDI_ICCBBA” 
* “UNDEFINED”

-----

**Name**: "com.symbol.datawedge.barcodes"<br>
**Type**: [List &lt;Bundle&gt;]<br>
**Contents**: See Bundle description (below)<br>

-----

**Name**: "com.symbol.datawedge.tokenized_data"<br>
**Type**: [List &lt;Bundle&gt;]<br>
**Contents**: See Bundle description (below)<br>
**Note**: Source of incoming data is "scanner" for camera, imager or scanner<br>

-----

### Barcode Bundle

##### Bundle name: "com.symbol.datawedge.barcodes"

#### Parameters

**Name**: "com.symbol.datawedge.label_type"<br>
**Type**: [String]<br>
**Contents**: Barcode label type, original symbology (i.e. "EAN128")<br>

-----

**Name**: "com.symbol.datawedge.decode_data"<br>
**Type**: [byte [ ] ]<br>
**Contents**: Acquired raw (unmodified) data as a byte array<br>

-----

**Name**: "com.symbol.datawedge.data_string"<br>
**Type**: [String]<br>
**Contents**: Acquired barcode characters <br>
**Example**: "abcde12345"<br>

-----

### Tokenized Data Bundle

##### Bundle name: "com.symbol.datawedge.tokenized_data"

#### Parameters

**Name**: "token_id"<br>
**Type**: [String]<br>
**Contents**: Data in a UDI-defined tag <br>
**Possible values**: (see token IDs, below)<br>

-----

**Name**: "token_data_type"<br>
**Type**: [String]<br>
**Contents**: Incoming data type <br>
**Example**: date, long, string <br>

-----

**Name**: "token_format"<br>
**Type**: [String]<br>
**Contents**: Format of incoming string <br>
**Example**: YYYYMMDD<br>

-----

**Name**: "token_string_data"<br>
**Type**: [String]<br>
**Contents**: Acquired barcode characters <br>
**Example**: "abcde12345"<br>

-----

**Name**: "token_binary_data"<br>
**Type**: [byte [ ] ]<br>
**Contents**: Acquired barcode data as a byte array<br>

-----

### Token IDs

**Token ID**: di<br>
**Display Name**: Device identifier<br>

-----

**Token ID**: manufacturing_date_original<br>
**Display Name**: Manufacturing date<br>

-----

**Token ID**: expiration_date_original<br>
**Display Name**: Expiration date<br>

-----

**Token ID**: lot_number<br>
**Display Name**: Lot number<br>

-----

**Token ID**: serial_number<br>
**Display Name**: Serial number<br>

-----

**Token ID**: mpho_lot_number<br>
**Display Name**: Medical products of human origin (MPHO) lot number <br>

-----

**Token ID**: donation_id<br>
**Display Name**: Donation ID number<br>

-----

**Token ID**: labeler_identification_code<br>
**Display Name**: Labeler ID code<br>

-----

**Token ID**: product_or_catalog_number<br>
**Display Name**: Product or catalog number<br>

-----

**Token ID**: unit_of_measure_id<br>
**Display Name**: Unit of measure ID<br>

-----

**Token ID**: Quantity<br>
**Display Name**: Quantity<br>

-----

## Other Decode Tags

The decode-related data added to an intent bundle can be retrieved using specific string tags. Use the JavaScript call below with the string tags in the section that follows.

	:::java
	Intent.getStringtExtra()

**Tag**: LABEL_TYPE_TAG <br>
**Type**: [String]<br>
**Name**: "com.symbol.datawedge.label_type"<br>
**Contents**: Barcode label type <br>
**Example**: "LABEL-TYPE-EAN128"<br>

-----

**Tag**: DATA_STRING_TAG<br>
**Type**: [String]<br>
**Name**: "com.symbol.datawedge.data_string"<br>
**Contents**: Acquired barcode characters <br>
**Example**: "abcde12345"<br>

**Note**: When multiple barcodes are acquired simultaneously, the decoded data is concatenated and sent out as a single string.

-----

**Tag**: DECODE_DATA_TAG<br>
**Type**: [byte [ ] ]<br>
**Name**: "com.symbol.datawedge.decode_data"<br>
**Contents**: Decoded data returned as a list of byte arrays.<br>

**Note**: In most cases there will be one byte array per decode. <!-- REMOVED 10/5/17 PER ENG. EMAIL 10/4/17 2:06 pm << For barcode symbologies that support concatenation (i.e. Codabar, Code128, MicroPDF, etc.) the decoded data is stored in multiple byte arrays (one byte array per bar code). Data in each byte array can be retrieved by passing an index.
--> 

-----

**SEE ALSO**: 

* **[DataWedge APIs - Benefits & Usage Scenarios](https://developer.zebra.com/community/home/blog/2017/06/27/datawedge-apis-benefits-challenges) -** by Zebra engineer Darryn Campbell 
* **[Sample DataWedge app](../../api/tutorials) -** Demonstrates how to receive scanned data through an intent

-----

**Other DataWedge Output Options**:

* **[Keystroke](../keystroke) -** outputs acquired data as if the keyboard was pressed
* **[Internet Protocol](../ip) -** outputs data over a network using TCP or UDP

**Related guides**:

* [Profiles/Plug-ins](../../profiles)
* [DataWedge APIs](../../api) 


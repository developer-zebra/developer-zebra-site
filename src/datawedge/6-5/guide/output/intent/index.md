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

**&#49;. Locate the Intent Output section of the Profile** being configured.

**&#50;. Check "Enabled" box** to activate Intent Output:  
<img style="height:350px" src="../intent_output 2.png"/>
_Intent Output options for the "Launcher" Profile_
<br>

**&#51;. Specify action, category and delivery** as described below: 

**Intent action -** specifies the action to handle the intent 

**Intent category -** specifies the category of intent to be handled 

**Intent delivery -** used to select one of three delivery methods for intent-based data:
* **Send via startActivity** 
* **Send via startService** 
* **Broadcast Intent** 

**When Intent delivery is set to Broadcast Intent**, DataWedge sets the **Receiver foreground flag** `Intent.FLAG_RECEIVER_FOREGROUND` in the broadcast Intent, giving the broadcast recipient permission to run at foreground priority with a shorter timeout interval. **Zebra recommends using this flag <u>only if delays are seen</u> in delivery of intents immediately following device boot-up**.

-----

## Single (normal) Decode Mode

### Parameters

**Name**: "com.symbol.datawedge.source"

**Type**: [String]

**Contents**: Source of incoming data

**Possible values**: 
* "msr"
* "scanner"
* "simulscan"

**NOTE**: Source of incoming data is "scanner" for camera, imager or scanner. 

-----

**Name**: "com.symbol.datawedge.label_type"

**Type**: [String]

**Contents**: Barcode label type (i.e. "EAN128")

-----

**Name**: "com.symbol.datawedge.data_string"

**Type**: [String]

**Contents**: Acquired barcode characters

**Example**: "abcde12345"

-----

**Name**: "com.symbol.datawedge.decode_data"

**Type**: [List &lt;byte [ ]&gt;]

**Contents**: Acquired raw (unmodified) data as an array list of byte arrays

**Example**: List_Item_1(array_1(byte11,byte12,byte13)),List_Item_2(array_2(byte21,byte22,byte23)) ...

-----

**Name**: "com.symbol.datawedge.decoded_mode"

**Type**: [String]

**Contents**: Mode used to decode the incoming data

**Possible values**: 
* "multiple_decode"
* "single_decode"

-----

## UDI/Multiple Decode Mode

When decoding a UDI-compliant object, data is acquired from multiple barcodes simultaneously and output as a multi-decode bundle, which differs from a single-decode bundle. DataWedge also can acquire multiple non-UDI barcodes in a single scan. This section applies to both modes.

### Parameters

**Name**: "com.symbol.datawedge.decode_mode"

**Type**: [String]

**Contents**: Mode used to decode incoming data

**Possible values**: 
* "multiple_decode"
* "single_decode"

-----

**Name**: "com.symbol.datawedge.smart_decode_type"

**Type**: [String]

**Contents**: Decode type 

**Possible values**:
* “udi”
* “multibarcode”

-----

**Name**: "com.symbol.datawedge.data_string"

**Type**: [String]

**Contents**: Acquired barcode characters 

**Example**: "abcde12345"

-----

**Name**: "com.symbol.datawedge.decode_data"

**Type**: [List &lt;byte [ ]&gt;]

**Contents**: Acquired raw (unmodified) data as an array list of byte arrays

**Example**: List_Item_1(array_1(byte11,byte12,byte13)), List_Item_2(array_2(byte21,byte22,byte23)) ...

-----

**Name**: "com.symbol.datawedge.source"

**Type**: [String]

**Contents**: Source of incoming data. 

**Possible values**:
* "msr"
* "scanner" 
* "simulscan"

-----

**Name**: "com.symbol.datawedge.label_id"

**Type**: [String]

**Contents**: UDI type of incoming data

**Possible values**:
* “UDI_HIBCC” 
* “UDI_GS1” 
* “UDI_ICCBBA” 
* “UNDEFINED”

-----

**Name**: "com.symbol.datawedge.barcodes"

**Type**: [List &lt;Bundle&gt;]

**Contents**: See Bundle description (below)

-----

**Name**: "com.symbol.datawedge.tokenized_data"

**Type**: [List &lt;Bundle&gt;]

**Contents**: See Bundle description (below)

**Note**: Source of incoming data is "scanner" for camera, imager or scanner. 

-----

### Barcode Bundle

##### Bundle name: "com.symbol.datawedge.barcodes"

#### Parameters

**Name**: "com.symbol.datawedge.label_type"

**Type**: [String]

**Contents**: Barcode label type, original symbology (i.e. "EAN128")

-----

**Name**: "com.symbol.datawedge.decode_data"

**Type**: [byte [ ] ]

**Contents**: Acquired raw (unmodified) data as a byte array

-----

**Name**: "com.symbol.datawedge.data_string"

**Type**: [String]

**Contents**: Acquired barcode characters 

**Example**: "abcde12345"

-----

### Tokenized Data Bundle

##### Bundle name: "com.symbol.datawedge.tokenized_data"

#### Parameters

**Name**: "token_id"

**Type**: [String]

**Contents**: Data in a UDI-defined tag. 

**Possible values**: (see table below)

-----

**Name**: "token_data_type"

**Type**: [String]

**Contents**: Incoming data type 

**Example**: date, long, string 

-----

**Name**: "token_format"

**Type**: [String]

**Contents**: Format of incoming string 

**Example**: YYYYMMDD

-----

**Name**: "token_string_data"

**Type**: [String]

**Contents**: Acquired barcode characters 

**Example**: "abcde12345"

-----

**Name**: "token_binary_data"

**Type**: [byte [ ] ]

**Contents**: Acquired barcode data as a byte array

-----

### Token IDs

**Token ID**: di

**Display Name**: Device identifier

-----

**Token ID**: manufacturing_date_original

**Display Name**: Manufacturing date

-----

**Token ID**: expiration_date_original

**Display Name**: Expiration date

-----

**Token ID**: lot_number

**Display Name**: Lot number

-----

**Token ID**: serial_number

**Display Name**: Serial number

-----

**Token ID**: mpho_lot_number

**Display Name**: Medical products of human origin (MPHO) lot number 

-----

**Token ID**: donation_id

**Display Name**: Donation ID number

-----

**Token ID**: labeler_identification_code

**Display Name**: Labeler ID code

-----

**Token ID**: product_or_catalog_number

**Display Name**: Product or catalog number

-----

**Token ID**: unit_of_measure_id

**Display Name**: Unit of measure ID

-----

**Token ID**: Quantity

**Display Name**: Quantity

-----

## Other Decode Tags

The decode-related data added to an intent bundle can be retrieved using specific string tags. Use the JavaScript call below with the string tags in the section that follows.

	:::java
	Intent.getStringtExtra()

**Tag**: LABEL_TYPE_TAG 

**Type**: [String]

**Name**: "com.symbol.datawedge.label_type"

**Contents**: Barcode label type 

**Example**: "EAN128"

-----

**Tag**: DATA_STRING_TAG

**Type**: [String]

**Name**: "com.symbol.datawedge.data_string"

**Contents**: Acquired barcode characters 

**Example**: "abcde12345"

**Note**: When multiple barcodes are acquired simultaneously, the decoded data is concatenated and sent out as a single string.

-----

**Tag**: DECODE_DATA_TAG

**Type**: [String]

**Name**: "com.symbol.datawedge.decode_data"

**Contents**: Decoded data returned as a list of byte arrays. 

**Note**: In most cases there will be one byte array per decode. For barcode symbologies that support concatenation (i.e. Codabar, Code128, MicroPDF, etc.) the decoded data is stored in multiple byte arrays (one byte array per bar code). Data in each byte array can be retrieved by passing an index.

-----

**Other DataWedge Output Options**:

* **[Internet Protocol](../ip) -** network output via TCP or UDP 
* **[Keystroke](../keystroke) -** keyboard emulation

**Related guides**:

* [Profiles/Plug-ins](../../profiles)
* [DataWedge APIs](../../api) 


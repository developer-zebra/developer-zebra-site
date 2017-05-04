---
title: Intent Output
layout: guide.html
product: DataWedge
productversion: '6.3'
---

## Overview
Intent Output sends the processed data to the associated foreground application as payload within an Android Intent.

**DataWedge Output Options**:

* [Intent](../intent) (programmatic data hand-off)
* [Internet Protocol](../ip) (network output via TCP or UDP) 
* [Keystroke](../keystroke) (keyboard emulation)

## Intent Output
The Intent Output Plug-in allows acquired data to be passed programmatically to an application using the Android Intent mechanism. The core components of an application (its activities, services, and broadcast receivers) are activated by Intents. An Intent Object is a bundle of information that describes a desired action. It includes the data to be acted upon, the category of component that should perform the action and some other pertinent instructions. When an Intent is initiated, Android locates an appropriate component to respond to the Intent, launches a new instance of the component (if needed), and passes the Intent Object to it.

Components advertise the kinds of Intents they can handle through Intent Filters, which are specified in the `AndroidManifest.xml` file as &lt;intent-filter&gt; elements. A component may have any number of Intent Filters, each describing a different capability. 

<img style="height:350px" src="intent_output 2.png"/>
_Intent Output Plug-in options_. 
<br>

DataWedge invokes an Intent though an **Intent Action** in an **Intent Category** as described in its `AndroidManifest.xml` file. For example, if the DataWedge manifest contains the lines...

    <intent-filter>
        ...
        <action android:name="com.myapp.action" />
		<category android:name="android.intent.category.DEFAULT" />
        ...
    </intent-filter>

...then the **Intent Action** in the Intent Output Plug-in would be `com.myapp.action` and the **Intent Category** would be `android.intent.category.DEFAULT`.

The Intent Delivery option allows the method by which the Intent is delivered to be specified. Intent-based data is delivered through one of three delivery mechanisms:  

* **Send via startActivity** 

* **Send via startService** 

* **Broadcast Intent** 

When Intent delivery is sent via Broadcast Intent, DataWedge sets the **Receiver foreground flag** `Intent.FLAG_RECEIVER_FOREGROUND` in the broadcast Intent, giving the broadcast recipient permission to run at foreground priority with a shorter timeout interval. This flag is set only when Intent delivery is set to Broadcast Intent. **Note: Use this flag only if delays are seen in delivery of Intents immediately following device boot-up**.

####Decode-related data
The decode-related data added to an Intent bundle can be retrieved using the followng call: 

* `Intent.getStringtExtra()`
<!-- * `Intent.getSerializableExtra()`-->

The call above can be used with the following String tags:

* **String LABEL_TYPE_TAG = "com.symbol.datawedge.label_type"**; String contains the barcode label type

* **String DATA_STRING_TAG = "com.symbol.datawedge.data_string"**; String contains the output data as a String. In the case of concatenated barcodes, the decode data is concatenated and sent out as a single string.

* **String DECODE_DATA_TAG = "com.symbol.datawedge.decode_data"**; Decode data is returned as a list of byte arrays. In most cases there will be one byte array per decode. For barcode symbologies that support concatenation (i.e. Codabar, Code128, MicroPDF, etc.) the decoded data is stored in multiple byte arrays (one byte array, per bar code). Clients can get data in each byte array by passing an index.

-----

**Related guides**:

* [Profiles/Plug-ins](../../profiles)
* [DataWedge APIs](../../api) 


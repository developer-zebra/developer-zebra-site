---
title: Intent Output
layout: guide.html
product: DataWedge
productversion: '6.5'
---

## Overview
Intent Output sends the processed data to the associated foreground application as payload within an Android intent. This allows acquired data to be passed programmatically to an application, where it can be consumed or processed further. The core components of an application (its activities, services, and broadcast receivers) also can be activated by intents. 

An intent object is a bundle of information that describes a desired action. It includes the data to be acted upon, the category of component that should perform the action and other pertinent instructions. When an intent is initiated, Android locates an appropriate component to respond to the intent, launches a new instance of the component (if needed), and passes the intent object to it.

Components advertise the kinds of intents they can handle through intent filters, which are specified in the `AndroidManifest.xml` file as &lt;intent-filter&gt; elements. A component may have any number of intent filters, each describing a different capability. 

-----

### Intent Output Setup
DataWedge invokes an intent though an **Intent action** in an **Intent category** as described in its `AndroidManifest.xml` file. For example, if the DataWedge manifest contains the lines...

    <intent-filter>
        ...
        <action android:name="com.myapp.action" />
		<category android:name="android.intent.category.DEFAULT" />
        ...
    </intent-filter>

...the **Intent action** in the Intent is `com.myapp.action` and the **Intent category** is `android.intent.category.DEFAULT`.

When combined, these two values can be like a "channel" to which an app can listen for intents that use the same combination, filtering out the "noise" from other intents that use different value pairs. 

**Once these values are known, set DataWedge intent output to match**: 

&#49;. Locate the Intent Output section of the Profile being configured.

&#50;. **Check "Enabled" box** to activate intent output:  
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

## Decode-related data
The decode-related data added to an intent bundle can be retrieved using the following call: 

	:::java
	Intent.getStringtExtra()


This call can be used with the following String tags:

* **String LABEL_TYPE_TAG = "com.symbol.datawedge.label_type"**; String contains the barcode label type

* **String DATA_STRING_TAG = "com.symbol.datawedge.data_string"**; String contains the output data as a String. In the case of concatenated barcodes, the decode data is concatenated and sent out as a single string.

* **String DECODE_DATA_TAG = "com.symbol.datawedge.decode_data"**; Decode data is returned as a list of byte arrays. In most cases there will be one byte array per decode. For barcode symbologies that support concatenation (i.e. Codabar, Code128, MicroPDF, etc.) the decoded data is stored in multiple byte arrays (one byte array per bar code). Clients can get data in each byte array by passing an index.

-----

**Other DataWedge Output Options**:

* **[Internet Protocol](../ip) -** network output via TCP or UDP 
* **[Keystroke](../keystroke) -** keyboard emulation

**Related guides**:

* [Profiles/Plug-ins](../../profiles)
* [DataWedge APIs](../../api) 


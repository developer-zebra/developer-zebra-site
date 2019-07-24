---
title: Intent Profile Feature Reference
layout: guide.html
product: EMDK For Xamarin
productversion: '5.0'
---

## Overview
In order to get Barcode or MSR data in your application, you must create a profile that has both an Input feature and an Output feature:

* [Barcode](../barcode) / [MSR](../msr) (Input)
* [Keystroke](../keystroke),[Intent](../intent),[IP](../IP) (Output)

The `Barcode` feature in the Profile Manager is responsible for reading data from the device's integrated bar code scanner and supports different types of bar code readers including laser, imager and internal camera. It also contains detailed parameters for scanner behavior as well as individual barcode symbology parameters.

The `Intent`, `Keystroke` or `IP` feature in the Profile Manager is used to define how the output from the Barcode scanner should be handled

* Intent - The Intent feature, in the Profile Manager, collects and sends data received from the Barcode scanner to your application using the Android Intent mechanism. To use this, you should be familiar with how to register to receive intents in your application as well as handling the data that is passed in. You will have the ability to configure how the intent is sent to your application in the profile itself.

* Keystroke - The Keystroke feature, in the Profile Manager, collects and sends data received from the Barcode scanner to your application by emulating keystrokes. You will have the option to control how the data is sent as well as if it should have any prefix or suffix automatically added using basic data formatting.

* IP - IP Output allows DataWedge to send captured data to a host computer via a network connection. Captured data can be sent over an IP network to a specified IP address and port using either TCP or UDP transport protocols.

## Android Intent Overview
The core components of an Android application (its activities, services, and broadcast receivers) are activated by intents. An intent is a bundle of information (an Intent object) describing a desired action - including the data to be acted upon, the category of component that should perform the action, and other pertinent instructions. Android locates an appropriate component to respond to the intent, launches a new instance of the component if one is needed, and passes it the Intent object.

Components advertise their capabilities, the kinds of intents they can respond to, through intent filters. Since the system must learn which intents a component can handle before it launches the component, intent filters are specified in the manifest as &lt;intent-filter&gt; elements. A component may have any number of filters, each one describing a different capability.

For example, if the application manifest contains the following:

	:::xml
	<intent-filter . . . >  
  		<action android:name="com.symbol.emdksample.RECVR" />  
  		<category android:name="android.intent.category.DEFAULT" />  
	</intent-filter>

In the Intent Feature Profile configuration, the Intent action must be: 

	:::java
	com.symbol.emdksample.RECVR

and the Intent category must be: 

	:::java
	android.intent.category.DEFAULT


## EMDK Intent Output
Allows configuration of the Intent Feature for the profile. The Intent Output Feature allows the captured data to be sent to an application in the form of an implicit Intent. Refer to the Android Developer web site for more information, http://developer.android.com.

* Name - The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK ProfileManager API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. 
* Enabled - Enables or disables this feature. 
* Intent action - Enter the Intent Action name (required). The Intent Filter action must match this.
* Intent category - Enter the Intent Category name (required). The Intent Filter category must match this.
* Intent delivery - Select the method by which the intent is delivered:
	* Send via StartActivity
	* Send via startService
	* Broadcast intent
* Receiver Foreground Flag - When Intent delivery is sent via Broadcast Intent, DataCapture sets the **Receiver foreground flag** `Intent.FLAG_RECEIVER_FOREGROUND` in the broadcast Intent, giving the broadcast recipient permission to run at foreground priority with a shorter timeout interval. This flag is set only when Intent delivery is set to Broadcast Intent. **Note: Use this flag only if delays are seen in delivery of Intents immediately following device boot-up**.

> Note: Most scanning applications might want the user to be able to decode data and for that decode data to be sent to the *current* activity but not necessarily displayed. If this is the case, then the activity needs to be marked as ‘singleTop’ in its AndroidManifest.xml file. If your activity is not defined as singleTop, then on every decode, the system will create another copy of your Activity and send the decode data to this second copy.


## Basic Data Formatting
Allows configuration of any data formatting. When disabled, any data is passed on without modification.

* Enabled - Enables or disables Basic Data Formatting. 
* Prefix to data - Add characters to the beginning of the data when sent.
* Suffix to data - Add characters to the end of the data when sent.
* Send data - Set to transfer the captured data to the foreground application. Disabling this option prevents the actual data from being transmitted. However, the prefix and suffix strings, if present, are still transmitted even when this option is disabled (default - enabled).
* Send as hex - Set to send the data in hexadecimal format. 
* Send TAB key - Set to append a tab character to the end of the processed data. 
* Send ENTER key - Set to append an Enter character to the end of the processed data. 

## EMDK Intent Return Parameters
The decode related data added to the Intent's bundle can be retrieved using the Intent.getStringtExtra() and Intent.getSerializableExtra() calls, using the following String tags:

* `com.symbol.emdk.datawedge.label_type`: String contains the label type of the bar code.
* `com.symbol.emdk.datawedge.data_string`:
String contains the output data as a String. In the case of concatenated bar codes, the decode data is concatenated and sent out as a single string. In the case of MSR output, the data from the MSR tracks is concatenated and sent out as a single string.
* `com.symbol.emdk.datawedge.decode_data`:
Decode data is returned as a list of byte arrays. In most cases there will be one byte array per decode. For barcode symbologies that support concatenation e.g. Codabar, Code128, MicroPDF, etc., the decoded data is stored in multiple byte arrays (one byte array per bar code). Clients can get data in each byte array by passing an index.

The MSR related data added to the Intent's bundle can be retrieved using the Intent.getStringtExtra() and Intent.getSerializableExtra() calls, using the following String tags:

* `com.symbol.emdk.datawedge.msr_data`:
The data from the MSR tracks is concatenated and sent out as a byte array. The Start/end sentinels and
track separators are included as configured.
* `com.symbol.emdk.datawedge.msr_track1`: MSR track 1 data is returned as a byte array.
* `com.symbol.emdk.datawedge.msr_track2`: MSR track 2 data is returned as a byte array.
* `com.symbol.emdk.datawedge.msr_track3`: MSR track 3 data is returned as a byte array.
* `com.symbol.emdk.datawedge.msr_track1_status`: MSR track 1 decode status as an Integer where 0 indicates a successful decode.
* `com.symbol.emdk.datawedge.msr_track2_status`: MSR track 2 decode status as an Integer where 0 indicates a successful decode.
* `com.symbol.emdk.datawedge.msr_track3_status`: MSR track 3 decode status as an Integer where 0 indicates a successful decode.
* `com.symbol.emdk.datawedge.msr_track1_encrypted`: MSR track 1 encrypted data is returned as a byte array.
* `com.symbol.emdk.datawedge.msr_track2_encrypted`: MSR track 2 encrypted data is returned as a byte array.
* `com.symbol.emdk.datawedge.msr_track3_encrypted`: MSR track 3 encrypted data is returned as a byte array.
* `com.symbol.emdk.datawedge.msr_track1_hashed`: MSR track 1 hashed data is returned as a byte array.
* `com.symbol.emdk.datawedge.msr_track2_hashed`: MSR track 2 hashed data is returned as a byte array.
* `com.symbol.emdk.datawedge.msr_track3_hashed`: MSR track 3 hashed data is returned as a byte array.
















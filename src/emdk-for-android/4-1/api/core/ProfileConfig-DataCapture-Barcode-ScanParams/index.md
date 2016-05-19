---
title: ProfileConfig.DataCapture.Barcode.ScanParams
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.2'
---


Holds scanning configuration settings.  
 
 

**Example Usage:**
	
	:::java	
	ScanParams scanParams = profileConfig.dataCapture.barcode.scanParams;


##Public Fields

###code_id_type

A Code ID character identifies the code type of a scanned bar code. 
 This is useful when the reader is decoding more than one code type. Select a code ID character to insert between the prefix and the decoded symbol. 
 Use enum [ ProfileConfig.CODE_ID_TYPE](../ProfileConfig-CODE_ID_TYPE).
 
 

**Example Usage:**
	
	:::java	
	scanParams.code_id_type = CODE_ID_TYPE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.CODE_ID_TYPE

###volume_slider_type

Defines the notification type for a good decode. 
 Use enum [ ProfileConfig.VOLUME_SLIDER_TYPE](../ProfileConfig-VOLUME_SLIDER_TYPE).
 
 

**Example Usage:**
	
	:::java	
	scanParams.volume_slider_type = VOLUME_SLIDER_TYPE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.VOLUME_SLIDER_TYPE

###decode_audio_feedback_uri

Select an audio tone to sound upon a good decode. 
 
 The audio tones stored as Application's private data (i.e. cache, asset) should not be specified for this field 
 (decode_audio_feedback_uri in ScanParams) to avoid access violation. Therefore any audio tones meant for this 
 purpose must be stored under shared public directories (Music/ , Ringtones/) or shared "external storage".
 
 

**Example Usage:**
	
	:::java	
	String audioFeedback = scanParams.decode_audio_feedback_uri;


**Type:**

java.lang.String

###decode_haptic_feedback

Enable the device to vibrate upon a good decode (default - enabled). Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE).
 
 

**Example Usage:**
	
	:::java	
	scanParams.decode_haptic_feedback = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###good_decode_led_timer

Time for which Good Decode LED Notification Runs in milliseconds.
 
 

**Example Usage:**
	
	:::java	
	int ledTimer = scanParams.good_decode_led_timer;


**Type:**

int

###decoding_led_feedback

Enable the device to blink LED upon a good decode (default - disabled). Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE).
 
 

**Example Usage:**
	
	:::java	
	scanParams.decoding_led_feedback = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###bt_disconnect_on_exit

Bluetooth disconnect on exit. Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE).
 
 

**Example Usage:**
	
	:::java	
	scanParams.bt_disconnect_on_exit = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###connection_idle_time

If a bluetooth scanner associated application is opened, Bluetooth 
 scanner will be automatically disconnected after this Connection 
 Idle Time duration from inactivity
 
 

**Example Usage:**
	
	:::java	
	scanParams.connection_idle_time = 500;


**Type:**

int

###display_bt_address_barcode

If this value is set to true, the Bluetooth Pairing Utility
 Application will be opened when the enable method is called.
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE).
 
 

**Example Usage:**
	
	:::java	
	scanParams.display_bt_address_barcode = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###establish_connection_time

Timout in seconds that enable method will block before returning 
 if a bluetooth scanner connection is not established.
 
 

**Example Usage:**
	
	:::java	
	scanParams.establish_connection_time = 50;


**Type:**

int

###datacapture_led_id

Data Capture LED ID
 
 

**Example Usage:**
	
	:::java	
	int led = scanParams.datacapture_led_id;


**Type:**

int


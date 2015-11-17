---
title: ##ProfileConfig.ACTION_KEY_CHAR
---
###ProfileConfig.ACTION_KEY_CHAR

Keystroke Output Action key character enables decoding of a special character embedded within a bar code or MSR data for use in native Android applications.
 This feature is helpful when populating or executing a form.

 

**Example Usage:**
	
	:::java	
	ACTION_KEY_CHAR.NONE;


**Values:**

* **DEFAULT** -Default action key character configured on the device

* **NONE** -Action key character feature is disabled

* **TAB** -Tab character code in a bar code is processed.
 When DataWedge detects this character code in a bar code, move the focus to the next field.

* **LINEFEED** -Line feed character code in a bar code is processed.
 When DataWedge detects this character code in a bar code, move the focus to the next field.

* **CARRIAGERETURN** -Carriage return character code in a bar code is processed.
 When DataWedge detects this character code in a bar code, move the focus to the next field.


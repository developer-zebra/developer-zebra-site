---
title: Voice Input
layout: guide.html
product: DataWedge
productversion: '6.9'
---

## Overview
Voice Input enables DataWedge to accept spoken entries as if they were keystrokes or data acquired from scanning. It uses Google speech recognition. Voice data capture is beneficial in situations where barcodes have not been generated or barcode scanning is not possible, for example due to damaged barcodes or environmental factors (dust, mist, etc.)

When running, Voice Input is placed in the state "waiting for start phrase" (_see Figure 8_). Voice data capture begins after speaking the predefined "start phrase", which then changes the state to "waiting for data" (_see Figure 9_).  Voice capture stops automatically after speaking the data or after speaking an optional "end phrase", if defined. The data source can be identified as voice input to process the voice data according to any application requirements. Barcode scanning and voice input can exist in the same DataWedge profile so both data capture methods may be used interchangeably.

Other options available for Voice Input capture:
* Terminate voice capture by setting a timeout value rather than using an end phrase.
* Send a TAB character when speaking the "send tab" command.
* Send an ENTER character when speaking the "send enter" command.
* Specify the returned data to any (no restriction), alpha or numeric.
* Provide an optional audio prompt when waiting for a start phrase or data capture.
* Validate spoken data and edit acquired data if needed.
* Support offline speech recognition.

>This feature is supported only on Zebra GMS devices.

##Main Features

![img](Figures1-3.png) 
<br>
* **Enabled** - Enables voice input. _See Figure 1._

* **Data capture start phrase** - Required phrase to start the data capture. **The default value is "start."** _See Figure 1 and 2._

* **Data capture end phrase** - Optional phrase that ends the data capture. There is no default value. _See Figure 1 and 3._

* **End detection timeout** - Sets the timeout value (in seconds) for the data capture during the “waiting for data” state. **The default value is "0."** If the value is set to "0" and the end phrase is defined, it waits infinitely for the data capture. Whereas, when the end phrase is not defined, data is returned immediately. This timeout is approximate, as it may encounter a 1 to 2 second delay. _See Figure 1._

![img](Figures4-6.png) 
<br>

* **Tab command** - Sends a tab key when speaking the command "send tab". This command is supported only when the device is at the "waiting for start phrase" state. _See Figure 4._

* **Enter command** - Sends an enter key when speaking the command "send enter." This command is supported only when the device is at the "waiting for start phrase" state. _See Figure 4._

* **Data type** - Configures the data type to be returned, with selections of: Any, Alpha, or Numeric. The data type is required to restrict data captured according to the preferences. _See Figure 5._
Data type selections:
<ul style="margin-left: 16px;">
  <li>Any - All scanned data is returned. For example, if the barcode ABC123 is scanned, it will return ABC123 as is. </li>
  <li>Alpha - Only alpha characters are returned. For example, if the barcode ABC123 is scanned, it will return ABC only. </li>
  <li>Numeric - Only digits are returned. For example, if the barcode ABC123 is scanned, it will return 123 only. </li>
</ul>

* **Start phrase waiting tone** - Controls the start phrase waiting tone. It enables/disables the audio feedback for “waiting for start”, notifying that the device is waiting to start the speech engine in case the toast message notification is missed and there is a change in “waiting for data” state. _See Figure 6._

* **Data capture waiting tone** - Controls the data capture waiting tone. It enables/disables audio feedback for “waiting for data”, notifying that the device is waiting to capture data in case the toast message notification is missed. _See Figure 6._

* **Offline speech recognition** - Enables offline speech recognition when there is no access to the internet. This uses an offline recognition speech engine to detect the data spoken. _See Figure 6._

![img](Figures7-9.png) 
<br>

* **Validation window** - Validates the result after speaking, displaying the spoken data and provides for editing the data on the same screen, if needed. This is useful in offline mode, since the results received in this mode might not be accurate. _See Figure 7._


> See Limitations below.

##Configuration

###Voice Input Parameters

Refer to DataWedge Voice Input Plugin in [Set Config API](../../api/setconfig) to configure the following Voice Input parameters:

<table class="facelift" style="width:60%" border="1" padding="5px">
  <tr bgcolor="#dce8ef" align="center">
    <th>Param Name</th> 
    <th>Param Values</th> 
  </tr>

  <tr>
    <td>voice_input_enabled</td>
    <td>true, false</td>
  </tr>
  <tr>
    <td>voice_data_capture_start_phrase</td>
    <td>start (default value)</td>
  </tr>
  <tr>
    <td>voice_data_capture_end_phrase</td>
    <td>[blank] (default value)</td>
  </tr>
  <tr>
    <td>voice_end_detection_timeout</td>
    <td>0-30</td>
  </tr>
  <tr>
    <td>voice_tab_command</td>
    <td>true, false</td>
  </tr>
  <tr>
    <td>voice_enter_command</td>
    <td>true, false</td>
  </tr>
  <tr>
    <td>voice_data_type</td>
    <td>0 = Any, 1 = Alpha, 2 = Numeric</td>
  </tr>
  <tr>
    <td>voice_start_phrase_waiting_tone</td>
    <td>true, false</td>
  </tr>
  <tr>
    <td>voice_data_capture_waiting_tone</td>
    <td>true, false</td>
  </tr>
  <tr>
    <td>voice_validation_window</td>
    <td>true, false</td>
  </tr>
  <tr>
    <td>voice_data_capture_waiting_tone</td>
    <td>true, false</td>
  </tr>
  <tr>
    <td>voice_offline_speech</td>
    <td>true, false</td>
  </tr>
</table>

###Set Voice Input Configuration Sample

Refer to DataWedge [Set Config API](../../api/setconfig).

##Limitations
* Voice Input is validated only with English.
* Do not use Google Assistant while DataWedge Voice Input is in use, as it can lead to undesirable behavior. 
* Providing numbers and other special characters as part of the data capture start phrase is not supported.
* Voice Input is not supported if Enterprise Home Screen (EHS) is in restricted mode. However, enabling all the privilege settings in EHS will reinstate Voice Input in DataWedge.  
* In Restricted GMS mode, Voice Input will not work since it relies on Google speech recognition.

------

**Related guides**:

* [Profiles/Plug-ins](../../profiles)
* [DataWedge APIs](../../api) 
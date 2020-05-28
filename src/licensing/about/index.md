---
title: About Zebra Licensing
layout: guide.html
product: Zebra Licensing
menu:
  items:
    - title: About
      url: /licensing/about
    - title: Process
      url: /licensing/process
    - title: FAQ
      url: /licensing/faq
    - icon: fa fa-search
      url: /licensing/search
---

## Overview

Zebra uses Flexera. 

<img alt="image" style="height:450px" src="mdna_matrix_2.png"/>
_Click image to enlarge; ESC to exit_. 
<br>

-----

## MDNA Professional and MDNA Enterprise 
The table below shows features and software components included with Zebra Professional series and Enterprise series devices and the actions required to acquire and apply a Mobility DNA license.  

<!-- 
<table align-text="center" class="MsoNormalTable" style="" id="table2" border="1" cellpadding="3" cellspacing="0">
-->

<table class="faceliftCenter" style="width:100%" border="1" padding="5px">
<tbody>
  <tr bgcolor="#dce8ef">
    <th>Product/Feature</th>
    <th>Professional Series<br>TC21, TC25, TC22, TC26, etc.</th>
    <th>Enterprise Series<br>TC51, TC56, TC52, TC57</th>
    <th>Actions(s) Required to Upgrade</th>
  </tr>

  <tr>
  <td>DataWedge</td>
  <td>√</td>
  <td>√</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>decoder_datamatrix</td>
  <td>true<br>false</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>decoder_qrcode</td>
  <td>true<br>false</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td rowspan="2">decoder_grid_matrix</td>
  <td rowspan="2">true<br>false (default)</td>
  <td>decoder_grid_matrix_inverse</td>
  <td>Disabled (0) - default<br>Enabled (1)<br>Auto (2)</td>
  </tr>

  <tr>
  <td>decoder_grid_matrix_mirror</td>
  <td>Disabled (0) - default<br>Enabled (1)<br>Auto (2)</td>
  </tr>

  <tr>
  <td>decoder_gs1_datamatrix</td>
  <td>true<br>false</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>decoder_gs1_qrcode</td>
  <td>true<br>false</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>decoder_pdf417</td>
  <td>true<br>false</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>decoder_pdf417</td>
  <td>true<br>false</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>decoder_composite_ab</td>
  <td>true<br>false</td>
  <td>decoder_composite_ab_ucc_link_mode</td>
  <td>0 - Link Flag Ignored<br>1 - Always Linked<br>2 - Auto Discriminate</td>
  </tr>

  <tr>
  <td>decoder_composite_c</td>
  <td>true<br>false</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>decoder_microqr</td>
  <td>true<br>false</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>decoder_aztec</td>
  <td>true<br>false</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>decoder_maxicode</td>
  <td>true<br>false</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>decoder_micropdf</td>
  <td>true<br>false</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>decoder_micr_e13b</td>
  <td>true<br>false (default)</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>decoder_us_currency</td>
  <td>true<br>false (default)</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>decoder_uspostnet</td>
  <td>true<br>false</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>decoder_usplanet</td>
  <td>true<br>false</td>
  <td>decoder_usplanet_report_check_digit</td>
  <td>true<br>false</td>
  </tr>

  <tr>
  <td>decoder_uk_postal</td>
  <td>true<br>false</td>
  <td>decoder_uk_postal_report_check_digit</td>
  <td>true<br>false</td>
  </tr>

  <tr>
  <td>decoder_japanese_postal</td>
  <td>true<br>false</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>decoder_canadian_postal</td>
  <td>true<br>false</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>decoder_dutch_postal</td>
  <td>true<br>false</td>
  <td>decoder_dutch_postal_3S</td>
  <td>true<br>false (default)</td>
  </tr>

  <tr>
  <td>decoder_finnish_postal_4s</td>
  <td>true<br>false (default)</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>decoder_gs1_lim_security_level</td>
  <td>1 - Security Level 1<br>2 - Security Level 2<br>3 - Security Level 3<br>4 - Security Level 4</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>decoder_ocr_a</td>
  <td>true<br>false (default)</td>
  <td>ocr_a_variant</td>
  <td>FULL_ASCII (0) (default)<br>RESERVED_1 (1)<br>RESERVED_2 (2)<br>BANKING(3)</td>
  </tr>

  <tr>
  <td>decoder_ocr_b</td>
  <td>true<br>false (default)</td>
  <td>ocr_b_variant</td>
  <td>FULL_ASCII(0)(default)<br>BANKING(1)<br>LIMITED(2)<br>ISBN_1(6)<br>ISBN_2(7)<br>TRAVEL_DOCUMENT_1(3)<br>TRAVEL_DOCUMENT_2(8)<br>TRAVEL_DOCUMENT_3(20)<br>PASSPORT(4)<br>VISA_TYPE_A(9)<br>VISA_TYPE_B(10)<br>ICAO_TRAVEL_DOCUMENT(11)</td>
  </tr>

  <tr>
  <td>Upcean_security_level</td>
  <td>0 - Level 0<br>1 - Level 1<br>2 - Level 2<br>3 - Level 3</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>upcean_supplemental2</td>
  <td>true<br>false</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>upcean_supplemental5</td>
  <td>true<br>false</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>upcean_supplemental_mode</td>
  <td>0 - No Supplementals<br>1 - Supplemental Always<br>2 - Supplemental Auto<br>3 - Supplemental Smart<br>4 - Supplemental 378-379<br>5 - Supplemental 978-979<br>6 - Supplemental 414-419-434-439<br>7 - Supplemental 977</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>upcean_retry_count</td>
  <td>Integer from 2 to 20</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>upcean_random_weight_check_digit</td>
  <td>true<br>false</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>upcean_linear_decode</td>
  <td>true<br>false</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>upcean_bookland</td>
  <td>true<br>false</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>upcean_coupon</td>
  <td>true<br>false</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>upcean_coupon_report</td>
  <td>0 - Old Coupon Report Mode<br>1 - New Coupon Report Mode<br>2 - Both Coupon Report Modes</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>upcean_ean_zero_extend</td>
  <td>true<br>false</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

  <tr>
  <td>upcean_bookland_format</td>
  <td>0 - Format ISBN-10<br>1 - Format ISBN-13</td>
  <td>N/A</td>
  <td>N/A</td>
  </tr>

</table>
<!-- 
<br>
###OCR Parameters
For more information, see [Barcode Input](../../input/barcode#ocrparams).
<table class="facelift" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Parameter Name</th>
    <th>Parameter Value</th>
  </tr>

  <tr>
  <td>ocr_orientation</td>
  <td>DEGREE_0 (0) (default)<br>DEGREE_270 (1)<br>DEGREE_180 (2)<br>DEGREE_90 (3)<br>OMNIDIRECTIONAL (4)</td>
  </tr>

  <tr>
  <td>ocr_lines</td>
  <td>Set number of lines to scan during OCR reading:<br><br>LINE_1 (1) (default)<br>LINE_2 (2)<br>LINE_3 (3)</td>
  </tr>

  <tr>
  <td>ocr_min_chars</td>
  <td>Set minimum number of OCR characters (not including spaces) per line to decode during OCR reading. Integer value:<br><br>Low - 3 (default)<br>High - 100</td>
  </tr>

  <tr>
  <td>ocr_max_chars</td>
  <td>Set maximum number of OCR characters (not including spaces) per line to decode during OCR reading. Integer value:<br><br>Low - 3 (default)<br>High - 100</td>
  </tr>

  <tr>
  <td>ocr_subset</td>
  <td>Defines a custom group of characters in place of a preset font variant.<br><br>Minimum length - 1<br>Maximum Length - 100</td>
  </tr>

  <tr>
  <td>ocr_quiet_zone</td>
  <td>Set field width of blank space to stop scanning during OCR reading. The default is 50, indicating a six character width quiet zone. Integer values:<br><br>Low - 20<br>High - 99 (Default - 50)</td>
  </tr>

  <tr>
  <td>ocr_template</td>
  <td>Creates a template for precisely matching scanned OCR characters to a desired input format, which helps eliminate scanning errors. The template expression is formed by numbers and letters. The default is 99999999 which accepts any alphanumeric character OCR string. If there are less than 8 '9' characters, the '9' represents only digit values.<br><br>Minimum length - 3<br>Maximum Length - 100 (Default - 99999999)<br><br>
  See <a href="../../input/barcode/#ocrparams">OCR Params</a> for more information.
  </td>
  </tr>

  <tr>
  <td>ocr_check_digit_modulus</td>
  <td>Sets the Check Digit Modulus value for OCR Check Digit Calculation. Integer value:<br><br>Low - 1 (default)<br>High - 99</td>
  </tr>

  <tr>
  <td>ocr_check_digit_multiplier</td>
  <td>Sets OCR check digit multipliers for the character positions. <br><br>Minimum length - 1<br>Maximum Length - 100 (Default - 121212121212)</td>
  </tr>

  <tr>
  <td>ocr_check_digit_validation</td>
  <td>None - 0 (default)<br>Product Add Left to Right - 3<br>Product Add Right to Left - 1<br>Digit Add Left to Right - 4<br>Digit Add Right to Left - 2<br>Product Add Right to Left Simple Remainder - 5<br>Digit Add Right to Left Simple Remainder - 6<br>Health Industry - HIBCC43 - 9</td>
  </tr>

  <tr>
  <td>inverse_ocr</td>
  <td>White or light words on black or dark background. This option is used to select normal, inverse or both OCR scanning.<br><br>REGULAR_ONLY (0) (default)<br>INVERSE_ONLY (1)<br>AUTO_DISCRIMINATE (2)</td>
  </tr>

</table>

<br>
###Other Scanner Input Parameters

<table class="facelift" style="width:70%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Parameter Name</th>
    <th>Parameter Value</th>
  </tr>

  <tr>
    <td>presentation_mode_sensitivity</td>
  <td>80 - Low <br>120 - Medium<br>190 - High (default) <br><a href="../../input/barcode/#readerparams">More info</a></td>
  </tr>

  <tr>
    <td>barcode_trigger_mode</td>
  <td>0 - Disabled <br>1 - Enabled<br><a href="../../input/barcode/#hardwaretrigger">More info</a></td>
  </tr>

  <tr>
    <td>auto_switch_to_default_on_event</td>
  <td>0 - Disabled <br>1 - On connect<br>2 - On disconnect<br>3 - On connect/disconnect<br><a href="../../input/barcode/#autoswitchtodefaultonevent">More info</a></td>
  </tr>

  <tr>
  <td>digimarc_decoding</td>
  <td>true<br>false</td>
  </tr>

  <tr>
  <td>scanning_mode</td>
  <td>1 - Single<br>2 - UDI - supported on <a href="../../input/barcode/#readerparams">selected Zebra devices</a> up to Android P (version 9.x) only<br>3 - MultiBarcode</td>
  </tr>
 
   <tr>
  <td>multi_barcode_count</td>
  <td>Integer from 2–100</td>
  </tr>

  <tr>
  <td>instant_reporting_enable</td>
  <td>true<br>false</td>
  </tr>

  <tr>
  <td>report_decoded_barcodes</td>
  <td>true<br>false</td>
  </tr>

  <tr>
  <td>scanner_selection_by_identifier</td>
  <td>See <a href="#scanneridentifiers">Scanner Identifiers</a> table</td>
  </tr>

  <tr>
  <td>trigger-wakeup</td>
  <td>true<br>false</td>
  </tr>

  <tr>
  <td>scanner_input_enabled</td>
  <td>true<br>false</td>
  </tr>

  <tr>
  <td>scanner_selection</td>
  <td>auto<br>0-n (valid scanner index from <a href="../enumeratescanners">ENUMERATE_SCANNERS API</a>)</td>
  </tr>

  <tr>
  <td>databar_to_upc_ean</td>
  <td>true<br>false</td>
  </tr>

  <tr>
  <td>upc_enable_marginless_decode</td>
  <td>true<br>false</td>
  </tr>

  <tr>
  <td>aim_mode</td>
  <td>on - On<br>off - Off</td>
  </tr>

  <tr>
  <td>beam_timer</td>
  <td>Integer from 0–60000</td>
  </tr>

  <tr>
  <td>Adaptive_Scanning</td>
  <td>0 - Enable<br>1 - Disable</td>
  </tr>

  <tr>
  <td>Beam_Width</td>
  <td>0 - Narrow<br>1 - Normal<br>2 - Wide</td>
  </tr>

  <tr>
  <td>power_mode</td>
  <td>0 - Low Power Mode<br>1 - Optimized Power Mode<br>2 - High Power Mode<br>3 - Always On</td>
  </tr>

  <tr>
  <td>mpd_mode</td>
  <td>0 - Disable Mobile Phone Display Mode<br>3 - Enable Mobile Phone Display Mode</td>
  </tr>

  <tr>
  <td>reader_mode</td>
  <td>0 - Triggered Mode<br>7 - Presentation Mode</td>
  </tr>

  <tr>
  <td>linear_security_level</td>
  <td>1 - Security Short Or Codabar<br>2 - Security All Twice<br>3 - Security Long And Short<br>4 - Security All Thrice</td>
  </tr>

  <tr>
  <td>picklist</td>
  <td>0 - Disabled<br>1 – Enabled/HW picklist<br>2 – Software Picklist</td>
  </tr>

  <tr>
  <td>aim_type</td>
  <td>0 - Trigger<br>1 - Timed Hold<br>2 - Timed Release<br>3 - Press And Release<br>4 - Presentation<br>5 - Continuous Read<br>6 - Press and Sustain</td>
  </tr>

  <tr>
  <td>scene_detect_qualifier</td>
  <td>0 - None<br>1 - Proximity Sensor Input</td>
  </tr>

  <tr>
  <td>aim_timer</td>
  <td>Integer from 0–60000</td>
  </tr>

  <tr>
  <td>same_barcode_timeout</td>
  <td>Integer from 0–5000</td>
  </tr>

  <tr>
  <td>different_barcode_timeout</td>
  <td>Integer from 0–5000</td>
  </tr>

  <tr>
  <td>illumination_mode</td>
  <td>off - Off<br>torch - On</td>
  </tr>

  <tr>
  <td>illumination_brightness</td>
  <td>Integer from 0–10</td>
  </tr>

  <tr>
  <td>cd_mode</td>
  <td>0 - Disabled<br>3 - Enabled</td>
  </tr>

  <tr>
  <td>low_power_timeout</td>
  <td>Integer from 0–1000</td>
  </tr>

  <tr>
  <td>delay_to_low_power_mode</td>
  <td>16 - 1 Second<br>29 - 30 Seconds<br>32 - 1 Minute<br>37 - 5 Minutes</td>
  </tr>

  <tr>
  <td>inverse_1d_mode</td>
  <td>0 - Disable<br>1 - Enable<br>2 - Auto</td>
  </tr>

  <tr>
  <td>viewfinder_size</td>
  <td>Integer from 0–100</td>
  </tr>

  <tr>
  <td>viewfinder_posx</td>
  <td>Integer from 0–100</td>
  </tr>

  <tr>
  <td>viewfinder_posy</td>
  <td>Integer from 0–100</td>
  </tr>

  <tr>
  <td>1d_marginless_decode_effort_level</td>
  <td>0 - Level 0<br>1 - Level 1<br>2 - Level 2<br>3 - Level 3</td>
  </tr>

  <tr>
  <td>poor_quality_bcdecode_effort_level</td>
  <td>0 - Level 0<br>1 - Level 1<br>2 - Level 2<br>3 - Level 3</td>
  </tr>

  <tr>
  <td>charset_name</td>
  
<td>ISO-8859-1 - ISO-8859-1<br>Shift_JIS - Shift_JIS<br>UTF-8 - UTF-8</td> 
//original 
-->
  
  <!-- <td>AUTO<br>UTF-8<br>ISO-8859-1<br>Shift_JIS<br>GB18030</td>
  </tr>

  <tr>
  <td>auto_charset_preferred_order</td>
  <td>List preferred options in priority order within a single string separated by a semi-colon:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Example 1: "UTF-8;GB2312"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Example 2: "GB2312;UTF-8"</td>
  </tr>

  <tr>
  <td>auto_charset_failure_option</td>
  <td>NONE<br>UTF-8<br>ISO-8859-1<br>Shift_JIS<br>GB18030</td>
  </tr>

  <tr>
  <td>viewfinder_mode</td>
  <td>1 - Viewfinder Enabled<br>2 - Static Reticle</td>
  </tr>

  <tr>
  <td>code_id_type</td>
  <td>0 - Code Id Type None<br>1 - Code Id Type Aim<br>2 - Code Id Type Symbol</td>
  </tr>

  <tr>
  <td>volume_slider_type</td>
  <td>0 - Ringer<br>1 - Music and Media<br>2 - Alarms<br>3 - Notification</td>
  </tr>

  <tr>
  <td>decode_audio_feedback_uri</td>
  <td>URI – Can be a query of the available URIs from RingToneManager</td>
  </tr>

  <tr>
  <td>decode_haptic_feedback</td>
  <td>true<br>false</td>
  </tr>

  <tr>
  <td>bt_disconnect_on_exit</td>
  <td>true<br>false</td>
  </tr>

  <tr>
  <td>connection_idle_time</td>
  <td>Integer from 0–1800</td>
  </tr>

  <tr>
  <td>establish_connection_time</td>
  <td>Integer from 30–60</td>
  </tr>

  <tr>
  <td>remote_scanner_audio_feedback_mode</td>
  <td>Integer from 0–3</td>
  </tr>

  <tr>
  <td>remote_scanner_led_feedback_mode</td>
  <td>Integer from 0–3</td>
  </tr>

  <tr>
  <td>display_bt_address_barcode</td>
  <td>true<br>false</td>
  </tr>

  <tr>
  <td>good_decode_led_timer</td>
  <td>Integer from 0–1000</td>
  </tr>

  <tr>
  <td>decoding_led_feedback</td>
  <td>true<br>false</td>
  </tr>

  <tr>
  <td>decoder_usplanet_report_check_digit</td>
  <td>true<br>false</td>
  </tr>

  <tr>
  <td>decode_screen_notification</td>
  <td>true<br>false</td>
  </tr>

  <tr>
  <td>decode_screen_time</td>
  <td>Length of time (in milliseconds) to display the screen notification upon successful decode.<br><br>1000 (default)<br>500-1500</td>
  </tr>

  <tr>
  <td>decode_screen_translucency</td>
  <td>Sets the translucency value for the decode notification green screen - higher values result to more translucency. Values range from 20 to 50 in increments of 5: <br><br>20, 25, 30, 35 (default), 40, 45, 50
  </tr>
  
  <tr>
  <td>keep_pairing_info_after_reboot</td>
  <td>Enable/disable automatic re-connection to the connected Bluetooth scanner after device reboot. Applies only to connected Bluetooth scanners: <br><br>0 - Disable<br>1 - Enable</td>
  </tr>

  <tr>
  <td>dpm_illumination_control</td>
  <td>Controls the illumination for decoding DPM barcodes. Default value is 10. Values:<br><br>0 - Direct<br>11 - Indirect<br>10 - Cycle<br><br><a href="../../input/barcode#readerparams">More info</a></td>
  </tr>

  <tr>
  <td>dpm_mode</td>
  <td>Optimize DPM barcode decoding performance based on the barcode size. Default value is 2. Values:<br><br>0 – Disabled<br>1 – Mode 1<br>2 – Mode 2<br><br><a href="../../input/barcode#readerparams">More info</a></td>
  </tr>

</table> 
 -->
-----

### [AudioVolUIMgr](/mx/audiovoluimgr) 
* All Zebra Volume Control parameters

### BluetoothMgr
* AllowDiscoverability
* AllowPairing
* AllowSilentPairing
* SilentPairingAction

### Wi-Fi 
* 2.4GHzChannels
* 5.0GHzChannels
* 802.11v
* 802.11w
* Authentication (LEAP option)
* Authentication (EAP-FAST-GTC option)
* AutoTimeConfig
* BandPreference
* CallAdmissionControl
* CaptivePortalDetection
* CCKM_Config
* EnableRestrictedSettingsUI
* Gratuitous_ARP
* Hotspot
* Hotspot24GHz
* Hotspot5GHz
* PasswordClearPEAPGTC
* PasswordEncryptedPEAPGTC
* PasswordProtectEncryption
* SubNetRoam
* UseHotspotOptions
* WMM-PS (PowerSave Option 4)

### WorryFreeWiFi 
* All parameters

<!-- 
menu:
  items:
    - title: About
      url: /oemconfig/9-3/about
    - title: Process
      url: /oemconfig/9-3/process
    - title: FAQs
      url: /oemconfig/9-3/faq
    - title: Managed Configurations
      url: /oemconfig/9-3/mc
    - icon: fa fa-search
      url: /oemconfig/9-3/search -->
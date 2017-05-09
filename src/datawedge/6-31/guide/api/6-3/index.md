---
title: DataWedge 6.3 APIs 
layout: guide.html
product: DataWedge
productversion: '6.3'
---

## ENABLE_DATAWEDGE

Boolean value used to enable (true) or disable (false) DataWedge on the device.

###Function Prototype

	:::java
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.ENABLE_DATAWEDGE", <value>);

###Parameters

**ACTION**: String `com.symbol.datawedge.api.ACTION`

**EXTRA_DATA**: String `com.symbol.datawedge.api.ENABLE_DATAWEDGE`

**Boolean &lt;value&gt;**: True or False 

###Return Values
(None)

Error and debug messages are logged to the Android logging system, which then can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

###Example

	:::java
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.ENABLE_DATAWEDGE", false);
	context.this.sendBroadcast(i);

-----

## CLONE_PROFILE

Used to create a copy of an existing DataWedge Profile including all settings.

###Function Prototype

	:::java
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.CLONE_PROFILE", <values>);

###Parameters

**ACTION**: String `com.symbol.datawedge.api.ACTION`

**EXTRA_DATA**: String `com.symbol.datawedge.api.CLONE_PROFILE`

**String[ ] &lt;values&gt;**: Name of Profile to be copied, new Profile name

###Return Values
(None)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

###Example

	:::java
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	String[ ] values = {"Source profile","Destination Profile"};
	i.putExtra("com.symbol.datawedge.api.CLONE_PROFILE", values);
	context.this.sendBroadcast(i);

-----

## RENAME_PROFILE

Used to rename an existing DataWedge Profile.  

###Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.RENAME_PROFILE", <values>);

###Parameters

**ACTION**: String "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA**: String "com.symbol.datawedge.api.RENAME_PROFILE"

**String[ ] &lt;values&gt;**: Profile name to be renamed, New Profile name
 
###Return Values
(None)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters

###Example

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	String[] values = {"Old profile","Renamed Profile"};
	i.putExtra("com.symbol.datawedge.api.RENAME_PROFILE", values);
	context.this.sendBroadcast(i);


------

## DELETE_PROFILE

Used to delete an existing _**deletable**_ Profile, **including the "Launcher" Profile**.  

###Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.DELETE_PROFILE", <values>);


###Parameters

**ACTION**: String "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA**: String "com.symbol.datawedge.api.DELETE_PROFILE"

**String[ ] &lt;values&gt;**: List of Profiles to be deleted. 

**WARNING: Supports use of the wildcard character (“*”), which deletes all deletable Profiles from the configuration, including the "Launcher" Profile**.

###Return Values
(None)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters

###Example

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	String[] values = {"My profile"};
	i.putExtra("com.symbol.datawedge.api.DELETE_PROFILE", values);
	context.this.sendBroadcast(i);

------

## SET_CONFIG

Used to create, update or replace a DataWedge Profile and its settings. Supports [nested bundles](../overview/#nestedbundles). 

###Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SET_CONFIG", <mainbundle>);

###Parameters

**ACTION**: String "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA**: String "com.symbol.datawedge.api.SET_CONFIG"

**Bundle &lt;mainbundle&gt;**: (see parameters, below)

####MAIN BUNDLE
The main SetConfig bundle will include the following properties:

* **PROFILE_NAME** [String]: The name of the Profile on which to perform action(s)
* **CONFIG_MODE** [String]: (Default=OVERWRITE)
 * **CREATE_IF_NOT_EXIST**: Creates the Profile if string in PROFILE_NAME is not present on device 
 * **OVERWRITE**: If Profile exists, resets all options to default, then configures specified settings
 * **UPDATE**: Updates only specified settings
* **PROFILE_ENABLED** [String]: Optional; Controls whether to enable (true) or disable (false) a Profile (default=true). If not specified, no change is made to the Profile state.
* **PLUGIN_CONFIG** [Bundle]: A bundle (nested within the main bundle) that contains settings of a specific Plug-in
* **APP_LIST** [Array]: List of applications and/or activities to associate with the Profile

####PLUGIN_CONFIG BUNDLE
The PLUGIN_CONFIG bundle is configured with the following properties:

**RESET_CONFIG** [String]: Optional
  * True (Default) – Clear any existing configuration and create a new configuration with the specified parameter values  
  * False – Update the existing values and add values not already in the configuration

**PLUGIN_NAME** [String]: Name of the Plug-in to configure. See tables below for `PARAM_LIST` values. 

 * BARCODE input
 * KEYSTROKE output

To be implemented in the future: 
  * MSR input
  * SIMULSCAN input 
  * DCP input
  * BDF (basic data formatting) processing 
  * ADF (advanced data formatting) processing 
  * INTENT output
  * IP output

**PARAM_LIST** [Bundle]: A parameter list bundle nested within the `PLUGIN_CONFIG` bundle. Includes the list of parameters that should be updated under the specified Plug-in. Setting an empty string in any parameter value resets that parameter to its default setting. 

#### PARAM_LIST BUNDLE
The `PARAM_LIST` bundle is configured by specifying the parameter name and value from the table below. Applies to parameters matching the `PLUGIN_NAME` specified in `PLUGIN_CONFIG` bundle. 

* **BARCODE –** Use values from the [PARAM_LIST for Scanner input](#param_listforscannerinput) table below; specify decoder and other input settings as `EXTRA_DATA` in the `PARAM_LIST` nested bundle
* **KEYSTROKE -** Use values from the [PARAM_LIST for Keystroke output input](#param_listforkeystrokeoutput) table below; specify output settings as `EWXTRA_DATA` in the `PARAM_LIST` nested bundle

### PARAM_LIST for Scanner Input 

<table class="c19">
<tbody>
<tr class="c6" bgcolor="#e0e0eb">
<td class="c20" colspan="1" rowspan="1">
<p class="c1">
<span class="c9">
<strong>Param name</strong>
</span>
</p>
</td>
<td class="c14" colspan="1" rowspan="1">
<p class="c1"> <span class="c9"><strong>Param values</strong></span></p>
</td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">scanner_input_enabled</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c13" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1">
<span class="c0">ScannerSelection</span></p></td><td class="c2"  bgcolor="#e0e0eb" colspan="1" rowspan="1"><p class="c1"><span class="c0">Auto</span></p></td></tr><tr class="c7">><td class="c4" colspan="1" rowspan="1"><p class="c8 c7"><span class="c15"></span></p></td><td class="c2" bgcolor="#e0e0eb" colspan="1" rowspan="1"><p class="c8"><span class="c0" bgcolor="#e0e0eb">0 - n (valid scanner index no.)</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">trigger-wakeup</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upca</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upce0</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_ean13</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_ean8</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_i2of5</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_gs1_databar</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_gs1_databar_lim</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_gs1_databar_exp</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_datamatrix</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_qrcode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_pdf417</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_composite_ab</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_composite_c</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_microqr</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_aztec</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_maxicode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_micropdf</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_uspostnet</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_usplanet</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_uk_postal</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_japanese_postal</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_australian_postal</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_canadian_postal</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_dutch_postal</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_us4state</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_us4state_fics</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_codabar</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_msi</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code93</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_trioptic39</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_d2of5</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_chinese_2of5</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>

<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_korean_3of5</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code11</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_tlc39</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_mailmark</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_hanxin</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_signature</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_webcode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_matrix_2of5</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upce1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upca_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c5" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upca_preamble</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Preamble None</span></p><p class="c1"><span class="c0">1 - Preamble Sys Char</span></p><p class="c1"><span class="c0">2 - Preamble Country and Sys Char</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upce0_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c5" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upce0_preamble</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Preamble None</span></p><p class="c1"><span class="c0">1 - Preamble Sys Char</span></p><p class="c1"><span class="c0">2 - Preamble Country and Sys Char</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upce0_convert_to_upca</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_ean8_convert_to_ean13</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_enable_plain</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_enable_ean128</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_enable_isbt128</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c5"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_isbt128_concat_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Concat Mode Never</span></p><p class="c1"><span class="c0">1 - Concat Mode Always</span></p><p class="c1"><span class="c0">2 - Concat Mode Auto</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_check_isbt_table</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c10"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code128_security_level</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Security Level 0</span></p><p class="c1"><span class="c0">1 - Security Level 1</span></p><p class="c1"><span class="c0">2 - Security Level 2</span></p><p class="c1"><span class="c0">3 - Security Level 3</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">code128_enable_marginless_decode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">code128_ignore_fnc4</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_verify_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_full_ascii</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_convert_to_code32</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_report_code32_prefix</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c10" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code39_security_level</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Security Level 0</span></p><p class="c1"><span class="c0">1 - Security Level 1</span></p><p class="c1"><span class="c0">2 - Security Level 2</span></p><p class="c1"><span class="c0">3 - Security Level 3</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">code39_enable_marginless_decode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_i2of5_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_i2of5_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_i2of5_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c5"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_i2of5_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - No Check Digit</span></p><p class="c1"><span class="c0">1 - USS Check Digit</span></p><p class="c1"><span class="c0">2 - OPCC Check Digit</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_i2of5_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_itf14_convert_to_ean13</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c10" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_i2of5_security_level</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Security Level 0</span></p><p class="c1"><span class="c0">1 - Security Level 1</span></p><p class="c1"><span class="c0">2 - Security Level 2</span></p><p class="c1"><span class="c0">3 - Security Level 3</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">i20f5_enable_marginless_decode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c10" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_gs1_lim_security_level</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">1 - Security Level 1</span></p><p class="c1"><span class="c0">2 - Security Level 2</span></p><p class="c1"><span class="c0">3 - Security Level 3</span></p><p class="c1"><span class="c0">4 - Security Level 4</span></p></td></tr>
<tr class="c5"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_composite_ab_ucc_link_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Link Flag Ignored</span></p><p class="c1"><span class="c0">1 - Always Linked</span></p><p class="c1"><span class="c0">2 - Auto Discriminate</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_uk_postal_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_codabar_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_codabar_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_codabar_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_codabar_clsi_editing</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_codabar_notis_editing</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_msi_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_msi_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_msi_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_msi_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - One Check Digit</span></p><p class="c1"><span class="c0">1 - Two Check Digit</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_msi_check_digit_scheme</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Mod-11-10</span></p><p class="c1"><span class="c0">1 - Mod-10-10</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_msi_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code93_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code93_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code93_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_trioptic39_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_d2of5_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_d2of5_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_d2of5_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code11_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code11_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code11_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c5" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code11_verify_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - No Check Digit</span></p><p class="c1"><span class="c0">1 - 1 Check Digit</span></p><p class="c1"><span class="c0">2 - 2 Check Digits</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_code11_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c5" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_hanxin_inverse</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Disable</span></p><p class="c1"><span class="c0">1 - Enable</span></p><p class="c1"><span class="c0">2 - Auto</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_matrix_2of5_length1</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_matrix_2of5_length2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;55</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_matrix_2of5_redundancy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_matrix_2of5_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_matrix_2of5_verify_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upce1_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c5"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upce1_preamble</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Preamble None</span></p><p class="c1"><span class="c0">1 - Preamble Sys Char</span></p><p class="c1"><span class="c0">2 - Preamble Country and Sys Char</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoder_upce1_convert_to_upca</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c10"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_security_level</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Level 0</span></p><p class="c1"><span class="c0">1 - Level 1</span></p><p class="c1"><span class="c0">2 - Level 2</span></p><p class="c1"><span class="c0">3 - Level 3</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_supplemental2</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_supplemental5</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c11" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_supplemental_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - No Supplementals</span></p><p class="c1"><span class="c0">1 - Supplemental Always</span></p><p class="c1"><span class="c0">2 - Supplemental Auto</span></p><p class="c1"><span class="c0">3 - Supplemental Smart</span></p><p class="c1"><span class="c0">4 - Supplemental 378-379</span></p><p class="c1"><span class="c0">5 - Supplemental 978-979</span></p><p class="c1"><span class="c0">6 - Supplemental 414-419-434-439</span></p><p class="c1"><span class="c0">7 - Supplemental 977</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_retry_count</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integers from 2 to 20</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_random_weight_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_linear_decode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_bookland</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_coupon</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c5" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_coupon_report</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Old Coupon Report Mode</span></p><p class="c1"><span class="c0">1 - New Coupon Report Mode</span></p><p class="c1"><span class="c0">2 - Both Coupon Report Modes</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_ean_zero_extend</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upcean_bookland_format</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Format ISBN-10</span></p><p class="c1"><span class="c0">1 - Format ISBN-13</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">databar_to_upc_ean</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">upc_enable_marginless_decode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">aim_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">on - On</span></p><p class="c1"><span class="c0">off - Off</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">beam_timer</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;60000</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">Adaptive_Scanning</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">1 - Disable</span></p><p class="c1"><span class="c0">0 - Enable</span></p></td></tr>
<tr class="c5" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">Beam_Width</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Narrow</span></p><p class="c1"><span class="c0">1 - Normal</span></p><p class="c1"><span class="c0">2 - Wide</span></p></td></tr>
<tr class="c10"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">power_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Low Power Mode</span></p><p class="c1"><span class="c0">1 - Optimized Power Mode</span></p><p class="c1"><span class="c0">2 - High Power Mode</span></p><p class="c1"><span class="c0">3 - Always On</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">mpd_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Disable Mobile Phone Display Mode</span></p><p class="c1"><span class="c0">3 - Enable Mobile Phone Display Mode</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">reader_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">7 - Presentation Mode</span></p><p class="c1"><span class="c0">0 - Triggered Mode</span></p></td></tr>
<tr class="c10" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">linear_security_level</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">1 - Security Short Or Codabar</span></p><p class="c1"><span class="c0">2 - Security All Twice</span></p><p class="c1"><span class="c0">3 - Security Long And Short</span></p><p class="c1"><span class="c0">4 - Security All Thrice</span></p></td></tr>
<tr class="c5"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">picklist</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Disabled</span></p><p class="c1"><span class="c0">1 &ndash; Enabled/HW picklist</span></p><p class="c1"><span class="c0">2 &ndash; Software Picklist</span></p></td></tr>
<tr class="c18" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">aim_type</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Trigger</span></p><p class="c1"><span class="c0">1 - Timed Hold</span></p><p class="c1"><span class="c0">2 - Timed Release</span></p><p class="c1"><span class="c0">3 - Press And Release</span></p><p class="c1"><span class="c0">5 - Continuous Read</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">aim_timer</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;60000</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">same_barcode_timeout</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;5000</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">different_barcode_timeout</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;5000</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">illumination_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">off - Off</span></p><p class="c1"><span class="c0">torch - On</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">lcd_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Disabled</span></p><p class="c1"><span class="c0">3 - Enabled</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">low_power_timeout</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;1000</span></p></td></tr>
<tr class="c10"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">delay_to_low_power_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">16 - 1 Second</span></p><p class="c1"><span class="c0">29 - 30 Seconds</span></p><p class="c1"><span class="c0">32 - 1 Minute</span></p><p class="c1"><span class="c0">37 - 5 Minutes</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">illumination_brightness</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;10</span></p></td></tr>
<tr class="c5"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">inverse_1d_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Disable</span></p><p class="c1"><span class="c0">1 - Enable</span></p><p class="c1"><span class="c0">2 - Auto</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">viewfinder_size</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;100</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">viewfinder_posx</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;100</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">viewfinder_posy</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;100</span></p></td></tr>
<tr class="c10"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">1d_marginless_decode_effort_level</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Level 0</span></p><p class="c1"><span class="c0">1 - Level 1</span></p><p class="c1"><span class="c0">2 - Level 2</span></p><p class="c1"><span class="c0">3 - Level 3</span></p></td></tr>
<tr class="c10" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">poor_quality_bcdecode_effort_level</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Level 0</span></p><p class="c1"><span class="c0">1 - Level 1</span></p><p class="c1"><span class="c0">2 - Level 2</span></p><p class="c1"><span class="c0">3 - Level 3</span></p></td></tr>
<tr class="c5"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">charset_name</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">ISO-8859-1 - ISO-8859-1</span></p><p class="c1"><span class="c0">Shift_JIS - Shift_JIS</span></p><p class="c1"><span class="c0">UTF-8 - UTF-8</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">viewfinder_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">1 - Viewfinder Enabled</span></p><p class="c1"><span class="c0">2 - Static Reticle</span></p></td></tr>
<tr class="c5"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">code_id_type</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Code Id Type None</span></p><p class="c1"><span class="c0">1 - Code Id Type Aim</span></p><p class="c1"><span class="c0">2 - Code Id Type Symbol</span></p></td></tr>
<tr class="c10" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">volume_slider_type</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">0 - Ringer</span></p><p class="c1"><span class="c0">1 - Music and Media</span></p><p class="c1"><span class="c0">2 - Alarms</span></p><p class="c1"><span class="c0">3 - Notification</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decode_audio_feedback_uri</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">URI &ndash; can be query the available URIs from RingToneManager</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decode_haptic_feedback</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">bt_disconnect_on_exit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">connection_idle_time</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;1800</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">establish_connection_time</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 30&ndash;60</span></p></td></tr>
<tr class="c6" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">remote_scanner_audio_feedback_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer 0&ndash;3</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">remote_scanner_led_feedback_mode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer 0&ndash;3</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">display_bt_address_barcode</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c6"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">good_decode_led_timer</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;1000</span></p></td></tr>
<tr class="c3" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">decoding_led_feedback</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c17"><td class="c4" colspan="1" rowspan="1"><p class="c8"><span class="c0">decoder_usplanet_report_check_digit</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c8"><span class="c0">false</span></p><p class="c8"><span class="c0">true</span></p><p class="c1 c7"><span class="c0"></span></p></td></tr>
</tbody>
</table>

-----

### PARAM_LIST for Keystroke Output 
<!--
<table class="c19">
<tbody>
<tr class="c6" bgcolor="#e0e0eb">
<td class="c20" colspan="1" rowspan="1">
<p class="c1">
<span class="c9">
<strong>Param name</strong>
</span>
</p>
</td>
<td class="c14" colspan="1" rowspan="1">
<p class="c1"> <span class="c9"><strong>Param values</strong></span></p>
</td>
</tr>
-->

<table class="c19">
<tbody>
<tr class="c6" bgcolor="#e0e0eb">
<td class="c20" colspan="1" rowspan="1">
<p class="c1">
<span class="c9">
<strong>Param name</strong>
</span>
</p>
</td>
<td class="c14" colspan="1" rowspan="1">
<p class="c1"> <span class="c9"><strong>Param values</strong></span></p>
</td>
</tr>
<tr class="c3"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">keystroke_output_enabled</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">false</span></p><p class="c1"><span class="c0">true</span></p></td></tr>
<tr class="c10" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1"><span class="c0">keystroke_action_character</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">NONE - ASCII_NO_VALUE</span></p><p class="c1"><span class="c0">TAB - ASCII_TAB_VALUE</span></p><p class="c1"><span class="c0">LF - ASCII_LF_VALUE</span></p><p class="c1"><span class="c0">CR - ASCII_CR_VALUE</span></p></td></tr>
<tr class="c13"><td class="c4" colspan="1" rowspan="1"><p class="c1">
<span class="c0">keystroke_delay_extended_ascii</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;1000</span></p></td></tr>
<tr class="c13" bgcolor="#e0e0eb"><td class="c4" colspan="1" rowspan="1"><p class="c1">
<span class="c0">keystroke_delay_control_characters</span></p></td><td class="c2" colspan="1" rowspan="1"><p class="c1"><span class="c0">Integer from 0&ndash;1000 URI – can be query the available URIs from RingToneManager</span></p></td></tr>
</tbody>
</table>

-----

#### APP_LIST
The `APP_LIST` is an array of bundles that contains a set of `PACKAGE_NAMES` and an `ACTIVITY_LIST` to be associated with the Profile. 

##### APP_LIST BUNDLE
The `APP_LIST` bundle will contain the following properties:

**PACKAGE_NAME** [String]: ex: 'com.symbol.emdk.barcodesample1' or a wild card character ("*")

**ACTIVITY_LIST** [List]: A list of activities for the `PACKAGE_NAME`. Wildcard character ("*") also supported.

### Return Values
(None)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters

### Example

	//MAIN BUNDLE PROPERTIES
	Bundle bMain = new Bundle();
	bMain.putString("PROFILE_NAME","Profile12");
	bMain.putString("PROFILE_ENABLED","true");
	bMain.putString("CONFIG_MODE","CREATE_IF_NOT_EXIST");

	//PLUGIN_CONFIG BUNDLE PROPERTIES
	Bundle bConfig = new Bundle();
	bConfig.putString("PLUGIN_NAME","Barcode");
	bConfig.putString("RESET_CONFIG","true"); 


	//PARAM_LIST BUNDLE PROPERTIES
	Bundle bParams = new Bundle();
	bParams.putString("current-device-id","0");
	bParams.putString("scanner_input_enabled","true");

	//PUT bParams into bConfig
	bConfig.putBundle("PARAM_LIST", bParams);

	//PUT bConfig into bMain
	bMain.putBundle("PLUGIN_CONFIG", bConfig);

	// APP_LIST BUNDLES
	Bundle bundleApp1 = new Bundle();
	bundleApp1.putString("PACKAGE_NAME","com.symbol.emdk.simulscansample1");
	bundleApp1.putStringArray("ACTIVITY_LIST", new String[]{
	        "com.symbol.emdk.simulscansample1.DeviceControl",
	        "com.symbol.emdk.simulscansample1.MainActivity",
	        "com.symbol.emdk.simulscansample1.ResultsActivity.*",
	        "com.symbol.emdk.simulscansample1.ResultsActivity2",
	        "com.symbol.emdk.simulscansample1.SettingsFragment1"});


	Bundle bundleApp2 = new Bundle();
	bundleApp2.putString("PACKAGE_NAME","com.example.intents.datawedgeintent");
	bundleApp2.putStringArray("ACTIVITY_LIST", new String[]{
	        "com.example.intents.datawedgeintent.DeviceControl",
	        "com.example.intents.datawedgeintent.MainActivity",
	        "com.example.intents.datawedgeintent.ResultsActivity",
	        "com.example.intents.datawedgeintent.SettingsFragment1"});

	Bundle bundleApp3 = new Bundle();
	bundleApp3.putString("PACKAGE_NAME","*");
	bundleApp3.putStringArray("ACTIVITY_LIST", new String[]{"*"});


	Bundle bundleApp4 = new Bundle();
	bundleApp4.putString("PACKAGE_NAME","com.symbol.myzebraapp");
	bundleApp4.putStringArray("ACTIVITY_LIST", new String[]{"*"});

	//PUT THEM ALL TOGETHER INTO THE MAIN BUNDLE
	bMain.putParcelableArray("APP_LIST", new Bundle[]{
	        bundleApp1
	        ,bundleApp2
	        ,bundleApp3
	        ,bundleApp4
	});

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SET_CONFIG", bMain);

	this.sendBroadcast(i);

------

## GET_PROFILES_LIST

Used to get a list of available DataWedge Profiles on the device. 

###Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.GET_PROFILES_LIST", "");


###Parameters

**ACTION**: String "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA**: String "com.symbol.datawedge.api.GET_PROFILES_LIST"

**EXTRA VALUE: Empty String
 

###Return Values
Returns a String array of Datawedge Profiles

**EXTRA NAME**: Name: com.symbol.datawedge.api.RESULT_GET_PROFILES_LIST 

**EXTRA TYPE**: String [ ]

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

###Example

	//SENDING THE INTENT
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.GET_PROFILES_LIST", "");
	context.this.sendBroadcast(i);

	//RECEIVING THE RESULT
	private BroadcastReceiver myBroadcastReceiver = new BroadcastReceiver(){

		@Override
		public void onReceive(Context context, Intent intent){

			Bundle extras = getIntent().getExtras();
			if (intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_PROFILES_LIST")){
				String[] profilesList = intent.getStringArrayExtra("com.symbol.datawedge.api.RESULT_GET_PROFILES_LIST")
			

------

## GET_ACTIVE_PROFILE 

Gets the name of the Profile currently in use by DataWedge.

###Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.GET_ACTIVE_PROFILE", "");


###Parameters

**ACTION**: String "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA**: String "com.symbol.datawedge.api.GET_ACTIVE_PROFILE"

**EXTRA VALUE**: Empty String
 

###Return Values
Returns a String of the name of the active DataWedge Profile

**EXTRA NAME**: Name: com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE 

**EXTRA TYPE**: String 

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

###Example

	//SENDING THE INTENT
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.GET_ACTIVE_PROFILE", "");
	context.this.sendBroadcast(i);

	//RECEIVING THE RESULT
	private BroadcastReceiver myBroadcastReceiver = new BroadcastReceiver(){

		@Override
		public void onReceive(Context context, Intent intent){

			Bundle extras = getIntent().getExtras();
			if (intent.hasExtra("com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE")){
				String activeProfile = intent.getStringArrayExtra("com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE")
			

------

## ACTION_SOFTSCANTRIGGER 

Used to start, stop or toggle a software scanning trigger. **Valid only when Barcode Input is enabled in the active Profile**.  

###Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION_SOFTSCANTRIGGER");
	i.putExtra("com.symbol.datawedge.api.EXTRA_PARAMETER", "<parameter>");


###Parameters

**ACTION**: String "com.symbol.datawedge.api.ACTION_SOFTSCANTRIGGER"

**EXTRA_DATA**: String "com.symbol.datawedge.api.EXTRA_PARAMETER"

**&lt;parameter&gt;**: The parameter as a string, using any of the following: 

* "START_SCANNING" - to start scanning

* "STOP_SCANNING" - to stop scanning

* "TOGGLE_SCANNING" - to toggle between start scanning and stop scanning

###Return Values
(None)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters.

###Example

	// define action and data strings
	String softScanTrigger = "com.symbol.datawedge.api.ACTION_SOFTSCANTRIGGER";
	String extraData = "com.symbol.datawedge.api.EXTRA_PARAMETER";
	// create the intent
	Intent i = new Intent();
	// set the action to perform
	i.setAction(softScanTrigger);
	// add additional info
	i.putExtra(extraData, "START_SCANNING");
	// send the intent to DataWedge

	context.this.sendBroadcast(i);

###Comments 
The soft scan trigger command should be delayed sufficiently to enable the scanner to complete the task. For example, use of delay code similar to that shown below could be used.

	int triggerDelay = 250; // delay in milliseconds

	Handler handler = new Handler();
	handler.postDelayed(new Runnable() {
	        public void run() {
	                // for clarity, assume the following method contains the code in the example above
	                startSoftScan();
	        }
	}, triggerDelay);

------

## ACTION_SCANNERINPUTPLUGIN

Used to enable/disable the scanner plug-in being used by the currently active Profile. Disabling the scanner plug-in effectively disables scanning in that Profile, regardless of whether the Profile is associated with an app. **Valid only when Barcode Input is enabled in the active Profile**. 

**Note: Use of this API changes only the runtime status of the scanner; it does not make persistent changes to the Profile**. 

###Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION_SCANNERINPUTPLUGIN");
	i.putExtra("com.symbol.datawedge.api.EXTRA_PARAMETER", "<parameter>");


###Parameters

**ACTION**: String "com.symbol.datawedge.api.ACTION_SCANNERINPUTPLUGIN"

**EXTRA_DATA**: String "com.symbol.datawedge.api.EXTRA_PARAMETER"

**&lt;parameter**&gt;: The parameter as a string, using either of the following:

* "ENABLE_PLUGIN" - enables the plug-in
* "DISABLE_PLUGIN" - disables the plug-in

###Return Values
(None)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters. 


###Example

	// define action and data strings
	String scannerInputPlugin = "com.symbol.datawedge.api.ACTION_SCANNERINPUTPLUGIN";
	String extraData = "com.symbol.datawedge.api.EXTRA_PARAMETER";

	public void onResume() {
	        // create the intent
	        Intent i = new Intent();
	        // set the action to perform
	        i.setAction(scannerInputPlugin);
	        // add additional info
	        i.putExtra(extraData, "DISABLE_PLUGIN");
	        // send the intent to DataWedge
	        context.this.sendBroadcast(i);
	}

### Comments
This intent enables or disables the scanner plug-in for the currently enabled Profile. For example, let's say that activity A launches and uses the Data Capture API intent to switch to ProfileA in which the scanner plug-in is enabled, then at some point it uses the Data Capture API to disable the scanner plug-in. Activity B is launched. In DataWedge, ProfileB is associated with activity B. DataWedge switches to ProfileB. When activity A comes back to the foreground, in the `onResume` method, activity A must use the Data Capture API intent to switch back to ProfileA, then use the Data Capture API intent again to disable the scanner plug-in, to return back to the state it was in.

### Note
The above assumes that ProfileA is not associated with any applications/activities, therefore when focus switches back to activity A, DataWedge will not automatically switch to ProfileA, and therefore activity A must switch back to ProfileA in its `onResume` method.

Because DataWedge will automatically switch Profile when an activity is paused, it is recommended that this API function be called from the `onResume` method of the activity.

------

## ACTION_ENUMERATESCANNERS

Used to get the list of scanners available on the device.

###Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION_ENUMERATESCANNERS");

### Parameters
**ACTION**: String "com.symbol.datawedge.api.ACTION_ENUMERATESCANNERS"

### Return Values
The enumerated list of scanners is returned via the broadcast intent `com.symbol.datawedge.api.ACTION_ENUMERATEDSCANNERLIST`. The list of scanners is returned as a string array (see example below).

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions and parameters. 

### Example

	// First send the intent to enumerate the available scanners on the device
	
	// define action string:
	String enumerateScanners = "com.symbol.datawedge.api.ACTION_ENUMERATESCANNERS";
	
	// create the intent:
	Intent i = new Intent();
	
	// set the action to perform:
	i.setAction(enumerateScanners);
	
	// send the intent to DataWedge:
	context.this.sendBroadcast(i);

	// enable the app to receive the enumerated list of available scanners:
	String enumeratedList = "com.symbol.datawedge.api.ACTION_ENUMERATEDSCANNERLIST";
	String KEY_ENUMERATEDSCANNERLIST = "DWAPI_KEY_ENUMERATEDSCANNERLIST";

	// create a filter for the broadcast intent
	IntentFilter filter = new IntentFilter();
	filter.addAction(enumeratedList);
	registerReceiver(myBroadcastReceiver, filter);

	// create a broadcast receiver
	private BroadcastReceiver myBroadcastReceiver = new BroadcastReceiver() {
	        @Override
	        public void onReceive(Context context, Intent intent) {
	                String action = intent.getAction();
	                if (action.equals(enumeratedList)) {
	                        Bundle b = intent.getExtras();
	                        String[] scanner_list = b.getStringArray(KEY_ENUMERATEDSCANNERLIST);
	                }
	        }
	};

###Comments
The scanner and its parameters are set based on the currently active Profile.

------

## ACTION_SETDEFAULTPROFILE

The `setDefaultProfile` API function can be used to set the specified Profile as the default Profile.

**A Profile specified using this method MUST NOT already be associated with another application**. 

###DEFAULT PROFILE RECAP
Profile0 is the generic Profile used when there are no user-created Profiles associated with an application.	

Profile0 can be edited but cannot be associated with an application. That is, DataWedge allows manipulation of plug-in settings for Profile0 but it does not allow assignment of a foreground application. This configuration allows DataWedge to send output data to any foreground application other than applications associated with user-defined Profiles when Profile0 is enabled.

Profile0 can be disabled to allow DataWedge to send output data only to those applications that are associated in user-defined Profiles. For example, create a Profile associating a specific application, disable Profile0 and then scan. DataWedge only sends data to the application specified in the user-created Profile. This places an additional layer of security on DataWedge, permitting data to be sent only to specified applications. 

###Usage Scenario
If a launcher application has a list of apps that a user can launch and none has been associated with a DataWedge Profile, the `setDefaultProfile` method can be used to associate a Profile to any app selected by the user (otherwise Profile0 are used). When the user-selected app is launched, DataWedge auto-Profile switching will switch to the newly specified Profile. 

If the launched app already has an associated DataWedge Profile, the `setDefaultProfile` method call is ignored and its previously specified Profile is loaded. When control is returned to the Launcher application, `resetDefaultProfile` can be used to reset the default Profile.

###Function Prototype

	:::javascript
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION_SETDEFAULTPROFILE");
	i.putExtra("com.symbol.datawedge.api.EXTRA_PROFILENAME", "<profile name>");


###Parameters
**ACTION**: String "com.symbol.datawedge.api.ACTION_SETDEFAULTPROFILE"

**EXTRA_DATA**: String "com.symbol.datawedge.api.EXTRA_PROFILENAME"

**&lt;profile name**&gt;: The Profile name (a case-sensitive string) to set as the default Profile.

###Return Values
(None)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions, parameters and failures (e.g. Profile not found or associated with an application).

###Example

	:::javascript
	// define action and data strings
	String setDefaultProfile = "com.symbol.datawedge.api.ACTION_SETDEFAULTPROFILE";
	String extraData = "com.symbol.datawedge.api.EXTRA_PROFILENAME";

	public void onResume() {
	        // create the intent
	        Intent i = new Intent();
	        // set the action to perform
	        i.setAction(setDefaultProfile);
	        // add additional info
	        i.putExtra(extraData, "myProfile");
	        // send the intent to DataWedge
	        context.this.sendBroadcast(i);
	}

###Comments
The API command will have no effect if the specified Profile does not exist or if the specified Profile is already associated with an application. DataWedge will automatically switch Profiles when the activity is paused, so it is recommended that this API function be called from the onResume method of the activity.

Zebra recommends that this Profile be created to cater to all applications/activities that would otherwise default to Profile0. This will ensure that these applications/activities will not inadvertently switch scanner-device configurations. For example, let’s say that Profile0 is the default Profile, and it is configured to use the camera as the barcode scanner. If only the Browser application is used to scan barcodes with the camera, DataWedge always scans with the camera and enters the acquired data into the Browser as expected. But if an application is later launched that changes to a Profile using the blockbuster as the barcode scanner, the Browser application--which is set to use the default Profile--are unexpectedly reconfigured to use the blockbuster for scanning the next time it's used. **To ensure that the Browser continues to use the camera as the barcode scanner in this scenario, simply create a Profile that specifies the camera as the barcode scanner and associate it with the Browser**.

------

## ACTION_RESETDEFAULTPROFILE

Can be used to reset the default Profile to Profile0.

###Function Prototype

	:::javascript
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION_RESETDEFAULTPROFILE");
	i.putExtra("com.symbol.datawedge.api.EXTRA_PROFILENAME");


###Parameters

**ACTION**: String "com.symbol.datawedge.api.ACTION_RESETDEFAULTPROFILE"

**EXTRA_DATA**: String "com.symbol.datawedge.api.EXTRA_PROFILENAME"

###Return Values
(None)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions, parameters and failures (e.g. Profile not found or associated with an application).

###Example

	// define action string
	String resetDefaultProfile = "com.symbol.datawedge.api.ACTION_RESETDEFAULTPROFILE";

	public void onResume() {
	        // create the intent
	        Intent i = new Intent();
	        // set the action to perform
	        i.setAction(resetDefaultProfile);
	        context.this.sendBroadcast(i);
	}

###Comments
(None)

------

## ACTION_SWITCHTOPROFILE

The `SwitchToProfile` API Action can be used to switch to the specified Profile, **as long as that Profile is not already associated with another application**. A Profile can be associated with many applications, but an application cannot be associated with more than one Profile. 

###Profiles Recap
DataWedge is based on Profiles and Plug-ins. A Profile contains information about how DataWedge will behave with a given application.

Profile information consists of:

* Associated application
* Input plug-in configurations
* Output plug-in configurations
* Process plug-in configurations

DataWedge includes a default Profile, Profile0, which is created automatically the first time DataWedge runs.

Using Profiles, each application can have a specific DataWedge configuration. For example, each user application can have a Profile that outputs scanned data in the required format when that application comes to the foreground. DataWedge can be configured to process the same set of captured data differently based on the requirements of each application.

###Note
A single Profile can be associated with one or more activities or apps. However, an activity can be associated with no more than one Profile. 

###Usage Scenario
Let’s say an application has two activities. ActivityA only requires EAN13 barcodes to be scanned. ActivityB only requires MSR card data. ProfileB is configured to only scan EAN13 barcodes and is left unassociated. ProfileM is configured to only accept MSR input and is left unassociated. When ActivityA launches it uses `SwitchToProfile` to activate ProfileB. Similarly, when ActivityB launches it uses `SwitchToProfile` to activate ProfileM.

If another activity/app comes to the foreground, DataWedge auto Profile switching will set the DataWedge Profile accordingly either to the default Profile or to an associated Profile.

When ActivityA (or ActivityB) comes back to the foreground it will use `SwitchToProfile` to reset the Profile back to ProfileB (or ProfileM).

###Function Prototype

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION_SWITCHTOPROFILE");
	i.putExtra("com.symbol.datawedge.api.EXTRA_PROFILENAME", "<profile name>");

###Parameters
**ACTION**: String "com.symbol.datawedge.api.ACTION_SWITCHTOPROFILE"

**EXTRA_DATA**: String "com.symbol.datawedge.api.EXTRA_PROFILENAME"

**&lt;profile name**&gt;: The Profile name to switch to as a string (case-sensitive).

###Return Values
(None)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions, parameters and failures (e.g. Profile not found or associated with an application).

###Example
	// define action and data strings
	String switchToProfile = "com.symbol.datawedge.api.ACTION_SWITCHTOPROFILE";
	String extraData = "com.symbol.datawedge.api.EXTRA_PROFILENAME";

	public void onResume() {
	        super.onResume();
	        // create the intent
	        Intent i = new Intent();
	        // set the action to perform
	        i.setAction(switchToProfile);
	        // add additional info
	        i.putExtra(extraData, "myProfile");
	        // send the intent to DataWedge
	        context.this.sendBroadcast(i);
	}

###Comments
This API function will have no effect if the specified Profile does not exist or is already associated with an application.

DataWedge has a one-to-one relationship between Profiles and activities; a Profile can be associated only with a single activity. When a Profile is first created, it's not associated with any application, and will not be activated until associated. This makes it possible to create multiple unassociated Profiles.

This API function activates such Profiles.

For example, let's say that ProfileA is unassociated and ProfileB is associated with activity B. If activity A is launched and uses the `SwitchToProfile` function to switch to ProfileA, then ProfileA will be active whenever activity A is in the foreground. When activity B comes to the foreground, DataWedge will automatically switch to ProfileB. 

When activity A returns to the foreground, the app must use `SwitchToProfile` again to switch back to ProfileA. This would be done in the `onResume` method of activity A.

###Notes
* Because DataWedge will automatically switch Profile when the activity is paused, Zebra recommends that this API function be called from the onResume method of the activity.
* After switching to a Profile, this unassociated Profile does not get assigned to the application/activity and is available to be used in the future with a different app/activity.
* For backward compatibility, DataWedge’s automatic Profile switching is not affected by the above API commands. This why the commands work only with unassociated Profiles and apps.

DataWedge auto Profile switching works as follows: 

**Every second…**
* Sets **newProfileId** to the associated Profile ID of the current foreground activity. 
* If no associated Profile is found, sets **newProfileId** to the associated Profile ID of the current foreground app. 
* If no associated Profile is found, sets **newProfileId** to the current default Profile (which  MAY NOT be Profile0). 
* Checks the **newProfileId** against the **currentProfileId**. If they are different: 
	* deactivates current Profile
	* activates new Profile (**newProfileId**)
	* sets **currentProfileId** = **newProfileId**

------

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

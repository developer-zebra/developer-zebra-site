---
title: Keycode Mapping Guide
productversion: '2.5'
product: Enterprise Browser
layout: guide.html
---

## Overview

Keycodes are constants that uniquely identify the ASCII values of device keypresses (hard or soft). Android apps made with Enterprise Browser 1.4 and higher permit Android keycode values to be assigned from a file when an Enterprise Browser app starts up. **Note**: The keycodes for keys with multiple values accessed with the shift or other modifier key (such as upper and lower case) might not be capturable. See the [KeyCapture API remarks](../../api/keycapture/#remarks) for more information. 

**Note: EB 2.0 (and higher) also supports page-based actions**, which can execute JavaScript code and/or predefined commands based on the contents of a page. See the [Page-based Actions guide](../pageactions) for more information. 

### Support Notes

* **These keys CANNOT be remapped to any other action**:
 * HOME key 
 * RECENT APPS key
 * Brightness key(s)
 * Backlight on/off key 
* **The WorkAbout Pro 4 and Omnii XT15** are among a small group of Zebra devices running Windows Mobile that return proprietary keycode values inconsistent with those of other devices and incompatible with Windows. To address this issue, apps made with Enterprise Browser 1.5 or higher can remap those proprietary keycodes to Microsoft standard codes. See the [Mapping Proprietary Function Keycodes](#mappingproprietaryfunctionkeycodes) section below. 

#### Android Keycode Handling 
On Android devices, the keycode values of certain keys are sometimes not returned as expected or desired. To ensure control and accuracy of key presses, the desired keycode value(s) can be assigned through the current [KeyCapture 4.x API](../../api/keycapture) as well as legacy 2.x versions. The steps in this guide apply to all API versions. 

The following facts apply generally to Android keycode mapping for Enterprise Browser: 

* Keycode mapping **requires Enterprise Browser 1.4** or later.
* Mapping **requires a KeyCapture API**. [Read more](../../api/keycapture). 
* **[Enterprise Keyboard](enterprise-keyboard)) is required on some devices** that include a hardware keyboard.   
* Keycode mappings are contained in the `keycodemapping.xml` file.
* The `keycodemapping.xml` file is the same for all versions of the KeyCapture API.
* The mapping file is read each time Enterprise Browser is launched.
* Upon app install, a mapping-file template is placed in the EB installation directory, usually `sdcard0/android/data/com.symbol.enterprisebrowser`.
* Keycodes not mapped (or left blank in the mapping file) retain their default values. 
* [Additional restrictions](../../api/keycapture/#remarks) apply to keycapture and keycode mapping. 
* The `keycodemapping.xml` file must not be empty nor contain data not formatted according to the guidelines described in this guide. 

### File Location
The location of the `keycodemapping.xml` file on the device can be specified in the &lt;keycodemappingxmlfile&gt; tag of the app's `Config.xml` file using a fully qualified path (or substitution variable) and file name. This allows separate folders to be created for storing key mappings for different apps. If no path is specified, EB's default installation folder is used as the path: 

* `file://%INSTALLDIR%/keycodemapping.xml`

See the [Config.xml reference](../configreference/#keycodemappingxmlfile) for more information. 

-----

## Mapping Android Keycodes 
To assign custom keycodes to Android hard or soft keys, follow these simple steps:  

&#49;. [Deploy Enterprise Browser](../setup) to the device. 

&#50;. Navigate to the installation directory on the device. 
This is usually the `sdcard0/android/data/com.symbol.enterprisebrowser` directory.

&#51;. Copy the `keycodemapping.xml` template to a PC and open it for editing. 

The template should look similar to the image below:  

	:::xml
	<?xml version = "1.0"?>
	<!--
	.....KeyCode Mapping File....
	-->
	<KeyCodeConfiguration>

		<KeyCodes>

			<!-- Example -->
			<!-- <KEYCODE  name="KEYCODE_0" from="7" to="0x30" /> -->
	  
		</KeyCodes>

	</KeyCodeConfiguration>

&#52;. Copy and paste the example KEYCODE tag (omitting the comment tags) as shown:

	:::xml
	...
	<KeyCodes>

		<!-- Example -->
		<!-- <KEYCODE  name="KEYCODE_0" from="7" to="0x30" /> -->

		<KEYCODE  name="KEYCODE_0" from="7" to="0x30" />

	</KeyCodes>
	...

&#53;. Replace the values (within the quotes) for 'name,' 'from' and 'to' fields, as required. 

> **Note**: The 'from' field refers to the key's current keycode value; the 'to' will hold the value that replaces it. In the example above, pressing the '0' key (after mapping) will generate a keycode value of '0x30' instead of its former value of '7.' The 'name' field can hold any value; [standard Android key names](http://developer.android.com/reference/android/view/KeyEvent.html) are recommended.  

**For help exposing the keycodes, see the Handling Incorrect Keycodes section below**.

&#54;. Repeat steps 4 and 5 until all required keycodes are mapped.

For example:  

		:::xml     
		<?xml version = "1.0"?>
		<!--
		.....KeyCode Mapping File....
		-->
		<KeyCodeConfiguration>
			<KeyCodes>
				<!-- Example -->
				<!-- <KEYCODE  name="KEYCODE_0" from="7" to="0x30" /> -->
				<KEYCODE  name="KEYCODE_F1" from="131" to="20" />
				<KEYCODE  name="KEYCODE_ENTER" from="46" to="76" />
				<KEYCODE  name="KEYCODE_E" from="33" to="7" />
				<KEYCODE  name="KEYCODE_BACK" from="4" to="32" /> 
				<KEYCODE  name="KEYCODE_VOLUME_DOWN" from="25" to="175" />	
			</KeyCodes>
		</KeyCodeConfiguration>


&#55;. Copy the modified `keycodemapping.xml` file to its original location on the device, replacing the template. 

&#56;. Relaunch the Enterprise Browser app and check that its keycodes are mapped as specified.  

> **NOTE**: If keymapping failures occur or when working with devices that include a hardware keyboard, it might be necessary to disable the standard Android keyboard and install (or activate) the Zebra Enterprise Keyboard. See the [Enterprise Keyboard user guide](/enterprise-keyboard) for more information.  

-----

## Mapping Hardware Keys
The hardware keys of <!-- certain -->Zebra devices <!-- (see below) -->can be remapped to perform predefined actions or execute JavaScript code blocks residing on the device or on a server. This feature can be useful for many scenarios: 
* Zoom in and out of app page(s)
* Show/hide custom buttons or keyboard layouts
* Show/hide the address bar
* Quit the EB app and return to the OS
* Quit the app and return to a login page
* Reboot the device
* Enter special character(s) not available on the selected keyboard
* Enter foreign-language characters not available on the selected keyboard
* Activate DataWedge and/or the scanner beam
* Clear cookies and/or the application cache
* Enable voice input

<!-- removed per eng TUT-25446 
##### Hardware key remapping support:
* MC33xx
* MC92N0 
* VC80x

 -->
-----

### Predefined Commands
The remapping feature for hardware keys supports only the predefined actions and mapping commands shown below.  

#### Action Commands
* **back** - Navigates to the previous page in the EB app's history.
* **forward** - Navigates forward one page in the EB app's history.
* **quit** - Exits the EB app, executing any exit commands or actions defined in the `Config.xml` file.
* **refresh** - Reloads the current page. 

#### Mapping Commands
* **key-[KeyEvent]** - Sends the Android KeyEvent corresponding to the constant that follows (-) to the field in focus in the underlying app. For example, "key-11" sends a KeyEvent value of "11" (KEYCODE_4). See the full list of [Android KeyEvents](https://developer.android.com/reference/android/view/KeyEvent), constants and keycode values. 
* **runscript-[ScriptIdentifier]** - Executes the specified JavaScript code block as defined in the `CustomScript.xml` file. For example: "runscript-clearcookiescript" executes the user-defined JavaScript code block in the “cleaarcookiescript” section of the `CustomScript.xml` file. Learn more [about the CustomScript file](../customize/script). 
* **uc-[UnicodeValue]** - Sends the unicode character corresponding to the code that follows (-) to the field in focus in the underlying app. This is useful for injecting foreign-language or scientific characters or other special symbols. For example, "uc-03C0" sends the Greek character Pi. See all [Unicode characters](http://www.unicode.org/charts/). 

***All commands are case-sensitive.***

-----

### Remapping Hardware Keys

Hardware keys are remapped in the KeyActions section of the `KeyCodeMapping
.xml` file (EB 2.0 and higher only). Use the instructions in the [Mapping Android Keycodes section](#mappingandroidkeycodes) above to modify the file and push it to the device. 

#### Example 

	:::xml
	<KeyCodeConfiguration>
		<KeyCodes>
		  ...
		</KeyCodes>
		
		<KeyActions> 
			<KEYACTION  keyvalue="133" action="runscript-clearcookiescript"/>
			<KEYACTION  keyvalue="132" action="quit" />
			<KEYACTION  keyvalue="9" action="key-11" />
			<KEYACTION  keyvalue="135" action="uc-03C0"/>
			<KEYACTION  keyvalue="136" action="back"/>
			<KEYACTION  keyvalue="137" action="forward"/>
			<KEYACTION  keyvalue="139" action="refresh" />
		</KeyActions> 
	</KeyCodeConfiguration>

-----

## Handling Incorrect Keycodes
If it is determined that correct keypresses are generating incorrect keycodes, the incorrect keycode value must be determined before the correct one can be substituted. This process uses JavaScript to expose the keycodes that appear when pressing one or more keys. 

The first step is to confirm that Windows keycodes are not being forced as a result of the &lt;isWindowsKey&gt; tag:

&#49;. In the app's Config.xml file, **confirm that the &lt;isWindowsKey&gt; tag has a value of 0**. 

&#50;. Using one of the KeyCapture APIs, **reveal the keycodes generated by keypresses** to identify incorrect keycode value(s). The test code might look something like this: 

		:::javascript
		// KeyCapture API 4.x: 
		EB.KeyCapture.captureKey(false,'all',function(obj){alert(obj.keyValue)
		});

		// KeyCapture API 2.x: 
		<META HTTP-Equiv="KeyCapture" Content="KeyValue:All; Dispatch:False; KeyEvent:url('JavaScript:alert('Key Pressed: %s');')"> 


&#51;. **Map the incorrect keycode values to the correct ones** using the same syntax described in the earlier section: 
		
	:::xml
	<KEYCODE  name="[KEYCODE_X]" from="[incorrect_keycode]" to="[correct_keycode]" />

For example, if Step 2 determined that the keycode value being generated is 0x05 and the desired value is 0x06, then the correct mapping statement would be: 

	:::xml 
	<KEYCODE  name="KEYCODE_X" from="0x05" to="0x06" />

where "KEYCODE_X" = the name of the keycode. [Standard Android key names](http://developer.android.com/reference/android/view/KeyEvent.html) are recommended.

&#52;. Relaunch Enterprise Browser and **repeat Step 2 to confirm** that correct code(s) are generated.  

-----

## Mapping Proprietary Function Keycodes 
The function keys of certain Zebra devices running Windows Mobile, including the WorkAbout Pro 4 and Omnii XT15 (with Windows Embedded Handheld 6.5), return a proprietary set of Unicode values via Windows character messages rather than the values expected from Windows `keydown/keyup` messages. For example, pressing the F1 key returns the hexadecimal value E001 (57345 decimal) rather than the hex value 0x70 (112 decimal) as generally expected. This can lead to compatibility issues for Enterprise Browser apps when running on such devices with Windows Mobile. 

For such scenarios, Zebra developed and recommends a means of mapping the proprietary Unicode values of function keys used by an Enterprise Browser application to Microsoft virtual keycode values. 

> **Note**: This method should be used only for function keys. 

### Enable and specify mapping
Mapping the function keys on a qualifying device requires adding a few lines to the app's `Config.xml` file, creating a file to specify the mapping assignments and copying the file to the device. 

**To map proprietary function keys**: 

**&#49;. Add the three code lines shown below to the app's** `Config.xml` **file** as a child of the &lt;Configuration&gt; parent node:

	:::xml
	<Configuration> 
		...
	   // Copy the three lines below:

	   <FunctionKeyMapping> 
	     <FunctionKeyMappingToStandardMSValue value="1"/> 
	   </FunctionKeyMapping>   

	   // and paste them into the "Configuration" node 
	   // of the app's Config.xml file

	</Configuration>
*_Note: The maximum number of child tags is 65_*. 

**&#50;. Create a file called** `EBFunctionKeyMapping.xml`, and using one of the templates below, specify the function key(s) to be mapped to Microsoft virtual keycode values. 
 
#### Template 1- Map a Single Function Key
Use this template to map a single function key to a specific Microsoft keycode value. For example, to map the F1 key to a Microsoft virtual keycode, specify the proprietary Unicode value in hexadecimal (0xE001) first, followed by the Microsoft virtual keycode value in hexadecimal (0x70) as shown below: 

	:::xml
	<FUNCTION_KEY_MAPPING_TO_STANDARD_MS_VALUE> 
	    <SET_FUNCTION_KEY_TO_STANDARD_MS_VALUE  IF_CHAR_VALUE="0xE001" SEND_KEYDOWN_VALUE="0x70"/> 
	</FUNCTION_KEY_MAPPING_TO_STANDARD_MS_VALUE>
<br>

#### Template 2- Map Multiple Function Keys

To map multiple function key to Microsoft keycode values, simply repeat the `SET_FUNCTION_KEY_TO_STANDARD_MS_VALUE` (child tag) statements above within the `FUNCTION_KEY_MAPPING_TO_STANDARD_MS_VALUE` root tag. The example below maps the F1 through F5 function keys: 

	:::xml
	<FUNCTION_KEY_MAPPING_TO_STANDARD_MS_VALUE> 
	   <SET_FUNCTION_KEY_TO_STANDARD_MS_VALUE  IF_CHAR_VALUE="0xE001" SEND_KEYDOWN_VALUE="0x70"/> 
	   <SET_FUNCTION_KEY_TO_STANDARD_MS_VALUE  IF_CHAR_VALUE="0xE002" SEND_KEYDOWN_VALUE="0x71"/> 
	   <SET_FUNCTION_KEY_TO_STANDARD_MS_VALUE  IF_CHAR_VALUE="0xE003" SEND_KEYDOWN_VALUE="0x72"/> 
	   <SET_FUNCTION_KEY_TO_STANDARD_MS_VALUE  IF_CHAR_VALUE="0xE004" SEND_KEYDOWN_VALUE="0x73"/> 
	   <SET_FUNCTION_KEY_TO_STANDARD_MS_VALUE  IF_CHAR_VALUE="0xE005" SEND_KEYDOWN_VALUE="0x74"/> 
	</FUNCTION_KEY_MAPPING_TO_STANDARD_MS_VALUE>
 
&#51;. Once the `EBFunctionKeyMapping.xml` mapping file is complete, **copy the file to the** `\Program Files\EnterpriseBrowser\` **directory on the device**.  

**The function key(s) will be mapped as specified in the mapping file the next time Enterprise Browser is launched** and whenever an EB app is in the foreground. 

#### Contents of the Function Key Mapping File

* **FUNCTION_KEY_MAPPING_TO_STANDARD_MS_VALUE –** the root tag
* **SET_FUNCTION_KEY_TO_STANDARD_MS_VALUE -** the child tag associated with the root tag
* **IF_CHAR_VALUE -** sets the proprietary Unicode value
* **SEND_KEYDOWN_VALUE -** sets the Microsoft virtual keyCode value 

####Rules

* Proprietary function key mapping is supported on Enterprise Browser 1.5 and later.
* **Maximum number of child tags is 65**.
* Mapped values are used internally by Enterprise Browser apps only. 
* Whenver a function key is pressed, if the value of a Windows character message matches any of the IF_CHAR_VALUE attributes mapped in the `EBFunctionKeyMapping.xml` file, the set value of the associated SEND_KEYDOWN_VALUE attribute is sent to the Windows keydown message as the Microsoft virtual keycode value.
* This function key mapping applies only to certain Zebra devices running Windows Mobile only. These include the WorkAbout Pro 4 and Omnii XT15 (with Windows Embedded Handheld 6.5).
* The format of `EBFunctionKeyMapping.xml` file should not be altered in any way. 
* Use the table below for Proprietary and Microsoft keycode values for function keys F1 to F24.

<table style="color: #333333; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 16px; margin-bottom: 0 !important;">
<thead>
<tr style="border-top-width: 1px; border-top-color: #cccccc;"><th align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;font-weight: bold;padding: 6px 13px;">Function Keys</th>
<th align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;font-weight: bold;padding: 6px 13px;"> Proprietary Unicode Value</th>
<th align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;font-weight: bold;padding: 6px 13px;">Microsoft Virtual Keycode Value</th>
</tr>
</thead>
<tbody>
<tr style="border-top-width: 1px; border-top-color: #cccccc;">
<td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">F1</td>
<td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0xE001</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0x70</td>
</tr>
<tr style="border-top-width: 1px; border-top-color: #cccccc; background-color: #f8f8f8;"><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">F2</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0xE002</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0x71</td>
</tr>
<tr style="border-top-width: 1px; border-top-color: #cccccc;"><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">F3</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0xE003</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0x72</td>
</tr>
<tr style="border-top-width: 1px; border-top-color: #cccccc; background-color: #f8f8f8;"><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">F4</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0xE004</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0x73</td>
</tr>
<tr style="border-top-width: 1px; border-top-color: #cccccc;"><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">F5</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0xE005</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0x74</td>
</tr>
<tr style="border-top-width: 1px; border-top-color: #cccccc; background-color: #f8f8f8;"><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">F6</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0xE006</td>
<td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0x75</td>
</tr>
<tr style="border-top-width: 1px; border-top-color: #cccccc;"><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">F7</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0xE007</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0x76</td>
</tr>
<tr style="border-top-width: 1px; border-top-color: #cccccc; background-color: #f8f8f8;"><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">F8</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0xE008</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0x77</td>
</tr>
<tr style="border-top-width: 1px; border-top-color: #cccccc;"><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">F9</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0xE009</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0x78</td>
</tr>
<tr style="border-top-width: 1px; border-top-color: #cccccc; background-color: #f8f8f8;"><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">F10</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0xE00A</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0x79</td>
</tr>
<tr style="border-top-width: 1px; border-top-color: #cccccc;"><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">F11</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0xE00B</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0x7A</td>
</tr>
<tr style="border-top-width: 1px; border-top-color: #cccccc; background-color: #f8f8f8;"><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">F12</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0xE00C</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0x7B</td>
</tr>
<tr style="border-top-width: 1px; border-top-color: #cccccc;"><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">F13</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0xE00D</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0x7C</td>
</tr>
<tr style="border-top-width: 1px; border-top-color: #cccccc; background-color: #f8f8f8;"><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">F14</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0xE00E</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0x7D</td>
</tr>
<tr style="border-top-width: 1px; border-top-color: #cccccc;"><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">F15</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0xE00F</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0x7E</td>
</tr>
<tr style="border-top-width: 1px; border-top-color: #cccccc; background-color: #f8f8f8;"><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">F16</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0xE010</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0x7F</td>
</tr>
<tr style="border-top-width: 1px; border-top-color: #cccccc;"><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">F17</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0xE011</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0x80</td>
</tr>
<tr style="border-top-width: 1px; border-top-color: #cccccc; background-color: #f8f8f8;"><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">F18</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0xE012</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0x81</td>
</tr>
<tr style="border-top-width: 1px; border-top-color: #cccccc;"><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">F19</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0xE013</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0x82</td>
</tr>
<tr style="border-top-width: 1px; border-top-color: #cccccc; background-color: #f8f8f8;"><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">F20</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0xE014</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0x83</td>
</tr>
<tr style="border-top-width: 1px; border-top-color: #cccccc;"><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">F21</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0xE015</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0x84</td>
</tr>
<tr style="border-top-width: 1px; border-top-color: #cccccc; background-color: #f8f8f8;"><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">F22</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0xE016</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0x85</td>
</tr>
<tr style="border-top-width: 1px; border-top-color: #cccccc;"><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">F23</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0xE017</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0x86</td>
</tr>
<tr style="border-top-width: 1px; border-top-color: #cccccc; background-color: #f8f8f8;"><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">F24</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0xE018</td><td align="center" style="border-top-color: #cccccc;border-top-width: 1px;border: 1px solid #dddddd;padding: 6px 13px;">0x87</td>
</tr>
</tbody></table>

-----

## Also See

* **[KeyCapture API](../../api/keycapture) -** how to include the API and use its methods
* **[Keys that cannot be captured](../../api/keycapture/#remarks) -** including the SHIFT and ALT keys 
* **[Android KeyEvents documentation](http://developer.android.com/reference/android/view/KeyEvent.html) -** the official list of Android key names


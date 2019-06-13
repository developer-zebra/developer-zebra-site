---
title: Keycode Mapping Guide
productversion: '1.6'
product: Enterprise Browser
layout: guide.html
---
##Overview
Keycodes are constants that uniquely identify the ASCII values of device keypresses (hard or soft). Android apps made with Enterprise Browser 1.4 and higher permit Android keycode values to be assigned from a file when an Enterprise Browser app starts up. **Note**: The keycodes for keys with multiple values accessed with the shift or other modifier key (such as upper and lower case) might not be capturable. See the [KeyCapture API remarks](../../api/keycapture/#remarks) for more information. 

**Note: The WorkAbout Pro 4 and Omnii XT15** are among a small group of Zebra devices running Windows Mobile that return proprietary keycode values inconsistent with those of other devices and incompatible with Windows. To address this issue, apps made with Enterprise Browser 1.5 or higher can remap those proprietary keycodes to Microsoft standard codes. See the [Mapping Proprietary Function Keycodes](#mappingproprietaryfunctionkeycodes) section below. 

#### Android Keycode Handling 
On Android devices, the keycode values of certain keys are sometimes not returned as expected or desired. To ensure control and accuracy of key presses, the desired keycode value(s) can be assigned through the current [KeyCapture 4.x API](../../api/keycapture) as well as legacy 2.x versions. The steps in thie guide apply to all API versions. 

The following facts apply generally to Android keycode mapping for Enterprise Browser: 

* Keycode mapping **requires Enterprise Browser 1.4** or higher.
* Mapping **requires a KeyCapture API**. [Read more](../../api/keycapture). 
* Keycode mappings are contained in the `keycodemapping.xml` file.
* The `keycodemapping.xml` file is the same for all versions of the KeyCapture API.
* The mapping file is read each time Enterprise Browser is launched.
* Upon app install, a mapping-file template is placed in the EB installation directory, usually `sdcard0/android/data/com.symbol.enterprisebrowser`.
* Keycodes not mapped (or left blank in the mapping file) retain their default values. 
* [Additional restrictions](../../api/keycapture/#remarks) apply to keycapture and keycode mapping. 

## Mapping Android Keycodes 
For proper key remapping, the `keycodemapping.xml` file must not be blank, and must contain valid key codes and the XML and syntax described in this guide. 

To assign custom keycodes to Android hard or soft keys, follow these simple steps:  

&#49;. [Deploy Enterprise Browser](../setup) to the device. 

&#50;. Navigate to the installation directory on the device, which by default is `sdcard0/android/data/com.symbol.enterprisebrowser`.

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

&#53;. Replace the values (within the quotes) for the name=, from= and to= fields, as required. 

> **Note**: The "from=" field refers to the key's current keycode value and "to=" will hold the value that replaces it. In the example above, pressing the "0" key (after mapping) will generate a keycode value of "0x30" instead of "7" (its former value). The "name=" field can hold any value; Zebra recommends using [standard Android key names](http://developer.android.com/reference/android/view/KeyEvent.html). 

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

>**Important**: For proper key remapping, the `keycodemapping.xml` file must not be blank, and must contain valid key codes and the XML and syntax described in this guide. 

##Handling Incorrect Keycodes
Once it is determined that correct keypresses are generating incorrect keycodes, the incorrect keycode value must be determined before the correct one can be substituted. This process uses JavaScript to expose the keycodes that appear when pressing one or more keys. 

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

##More Information

* **[KeyCapture API](../../api/keycapture) -** how to include the API and use its methods
* **[Keys that cannot be captured](../../api/keycapture/#remarks) -** including the SHIFT and ALT keys 
* **[Android KeyEvents documentation](http://developer.android.com/reference/android/view/KeyEvent.html) -** the official list of Android key names

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
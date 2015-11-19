---
title: UI Manager
description: The UiMgr Feature Type allows you to manage a miscellaneous set of UI configurations, like Clipboard behavior.
---
## About UiMgr

### Overview

Android devices contain a variety of UI elements spread throughout the OS and many different System Applications. In some cases, one or more of these "standard" UI elements may be unacceptable for devices used in Enterprise situations or just may hinder the productivity of device users attempting to use devices for specific business tasks.

The UiMgr Feature Type allows you to manage a miscellaneous set of UI configurations that have been requested by various customers because the default Android behaviors were unacceptable or less than optimal.

### Main Functionality

* Enable or Disable use of the following:
	* The Clipboard function that allows a device user to copy and paste information between applications
	* The Auto Correct function that stores commonly entered words and allows them to be entered instead of similar words that were mistyped
	* The Home Key function which leaves the context of the currently running application and presents the current Home Screen Application
	* The Disable Bluetooth Paring Popup feature that requests device user involvement even if an application has supplied all required pairing information
* Configure localization settings
	* Set the Current Locale to switch to a desired language + region
	* Set the Default Input Method to enhance entry of localized data
* Clear the Clipboard to discard any prior data that might have been copied

##Parameter Notes
### Clipboard
Pivotal parm: No 

Parm name: ClipBoardUsage

Description: 

>This parm allows you to control whether or not the use of the Clipboard function will be allowed.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no changes to be made as to whether or not the Clipboard function can be used.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause use of the Clipboard function to be allowed.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td><p>This value will cause use of the Clipboard function to be prevented.</p><p><b>Note:</b> This will disallow the user from being able to copy and paste data to or from the clipboard. An attempt to use the clipboard when its use is prevented will result in a toast message to inform the device user that the use of the clipboard is not currently allowed.</p></td>
  </tr>
</table>
</div>	

###Clear Clipboard?
Pivotal parm: No

Parm name: ClipBoardClear

Description: 

>This parm allows you to specify that the clipboard should be immediately cleared. This would erase anything that was previously copied to the clipboard. If use of the Clipboard function is allowed, then it might be advisable on exit from any screen that requires the entry of sensitive information to clear the clipboard. This would ensure that such information could not later be pasted into another application.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>True</td>
    <td>"true"</td>
	<td>This value will cause the clipboard to be cleared, thus erasing any content that was previously copied into the clipboard and hence preventing such content from thereafter being pasted.</td>
  </tr>
  <tr>
    <td>False</td>
    <td>"false"</td>
	<td>This value will cause no change to be made to the contents of the clipboard.</td>
  </tr>
</table>
</div>	

###Enable/Disable AutoCorrect
Pivotal parm: No

Parm name: AutoCorrectUsage

Description: 

>This parm allows you to control whether the Auto Correct function can be used to save commonly entered words and offer them as corrections to potentially mistyped words. Saving previously entered words and offering them as replacements for mistyped words could be seen as a security risk since it could expose sensitive information to visible inspection or re-entry by device users that are not authorized to possess or enter that information.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no changes to be made as to whether or not the Auto Correct function is allowed to be used.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td><p>This value will cause use of the Auto Correct function to be allowed.</p><p><b>Note:</b> This value does not specify that the Auto Correct function will be enabled, or any specific configuration of that function. When the function is allowed, the device user can Turn the function On or Off and configure the operation of the function via the System Settings Menu.</p></td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td><p>This value will cause use of the Auto Correct function to be prevented.</p><p><b>Note:</b> This value does not change whether the Auto Correct function is Turned On or Off or any configure related the operation of the function configured via the System Settings Menu. But it does prevent the function from being used, thus making any such configuration performed by the device user irrelevant unless/until use of the feature is allowed.</p></td>
  </tr>
</table>
</div>	

###Enable/Disable HomeKey
Pivotal parm: No

Parm name: HomeKeyUsage

Description: 

>This parm allows you to control whether use of the use of Home Key is allowed. Preventing use of the Home Key may be desirable when using an application that should normally not be left.  By preventing the use of the Home Key, a common method of navigating away from the application (inadvertently or intentionally) can be eliminated.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no changes to be made as to whether or not the Home Key can be used.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause use of the Home Key to be allowed.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td><p>This value will cause use of the Home Key to be prevented, thus preventing the Home Key from being used to navigate away from the currently running application to the Current Home Screen Application.</p><p><b>Note:</b> Preventing use of the Home Key does not affect the "long press" behavior of the Home Key. To completely prevent all functionality of the Home Key, the <a href="../edge/index.html#guide-csp-keymappingmgr">KeyMappingMgr Feature Type</a> can be used (on supported devices) to remap the Home Key to some other behavior (or to no behavior).</p></td>
  </tr>
</table>
</div>	

###Enable/Disable Bluetooth Pairing Popup
Pivotal parm: No

Parm name: BluetoothPairingPopupUsage

Description: 

>This parm will allow you to control whether presentation of the Bluetooth Pairing Popup is allowed. The Bluetooth Pairing Popup is of most use when the device user will be left in charge of pairing of Bluetooth peripheral devices with an Android device. If one or more applications are expected to completely control all pairings of Bluetooth peripheral devices, then the Bluetooth Pairing Popup may be seen as an unnecessary and confusing intrusion on the device user and/or as introducing the potential for the device user to mistakenly interfere with the pairing process.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no changes to be made as to whether or not the Bluetooth Pairing Popup is will be presented.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the Bluetooth Pairing Popup to be presented whenever a pairing operation is performed.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the Bluetooth Pairing Popup to be suppressed when a pairing operation is performed.</td>
  </tr>
</table>
</div>	

###Set Current Locale
Pivotal parm: No

Parm name: CurrentLocale

Description: 

>This parm value allows you to set the device's current locale. A locale is a combination of a language and a region where that language is spoken. Languages are identified by two lower cases letters and regions are identified by two upper case letters. The language and region are separated by an underscore ("_") character. For example, "en_US" is the locale specification for "English spoken in the United States of America" and "fr_FR" is the locale specification for "French spoken in France".

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td></td>
  </tr>
  <tr>
    <td>CANADA</td>
    <td>"en_CA"</td>
	<td>English spoken in Canada</td>
  </tr>
  <tr>
    <td>CANADA_FRENCH</td>
    <td>"fr_CA"</td>
	<td>French spoken in Canada</td>
  </tr>
  <tr>
    <td>CHINA</td>
    <td>"zh_CN"</td>
	<td>Chinese spoken in China</td>
  </tr>
  <tr>
    <td>CHINESE</td>
    <td>"zh"</td>
	<td>Chinese (non-region specific)</td>
  </tr>
  <tr>
    <td>ENGLISH</td>
    <td>"en"</td>
	<td>English (non-region specific)</td>
  </tr>
  <tr>
    <td>FRANCE</td>
    <td>"fr_FR"</td>
	<td>French spoken in France</td>
  </tr>
  <tr>
    <td>FRENCH</td>
    <td>"fr"</td>
	<td>French (non-region specific)</td>
  </tr>
  <tr>
    <td>GERMAN</td>
    <td>"de"</td>
	<td>German (non-region specific)</td>
  </tr>
  <tr>
    <td>GERMANY</td>
    <td>"de_DE"</td>
	<td>German spoken in Germany</td>
  </tr>
  <tr>
    <td>ITALIAN</td>
    <td>"it"</td>
	<td>Italian (non-region specific)</td>
  </tr>
  <tr>
    <td>ITALY</td>
    <td>"it_IT"</td>
	<td>Italian spoken in Italy</td>
  </tr>
  <tr>
    <td>JAPAN</td>
    <td>"ja_JP"</td>
	<td>Japanese spoken in Japan</td>
  </tr>
  <tr>
    <td>JAPANESE</td>
    <td>"ja"</td>
	<td>Japanese (non-region specific)</td>
  </tr>
  <tr>
    <td>KOREA</td>
    <td>"ko_KR"</td>
	<td>Korean spoken in Korea</td>
  </tr>
  <tr>
    <td>KOREAN</td>
    <td>"ko"</td>
	<td>Korean (non-region specific)</td>
  </tr>
  <tr>
    <td>PRC</td>
    <td>"zh_CN"</td>
	<td>Alternate Chinese spoken in China</td>
  </tr>
  <tr>
    <td>SIMPLIFIED_CHINESE</td>
    <td>"zh_CN"</td>
	<td>Alternate Chinese spoken in China</td>
  </tr>
  <tr>
    <td>TAIWAN</td>
    <td>"zh_TW"</td>
	<td>Chinese spoken in Taiwan</td>
  </tr>
  <tr>
    <td>TRADITIONAL_CHINESE</td>
    <td>"zh_TW"</td>
	<td>Alternate Chinese spoken in Taiwan</td>
  </tr>
  <tr>
    <td>UK</td>
    <td>"en_GB"</td>
	<td>English spoken in Great Britain/United Kingdom</td>
  </tr>
  <tr>
    <td>US</td>
    <td>"en_US"</td>
	<td>English spoken in the United States of America (USA)</td>
  </tr>
</table>
</div>	

###Set Default Input Method?
Pivotal parm: Yes

Description: 

>This parm value allows you to determine whether or not to change the current Default Input Method that will be used when entry via the Input Method is requested programmatically or manually by the device user. Setting a particular Input Method as the Default Input Method does not prevent the device user from manually selecting a different Input Method, it merely determines which Input Method will come up automatically each time. When changing the Current Locale, it may desirable to change the Default Input Method to one that is suitable for entry of non-standard characters that are important in the language associated with the selected Locale.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no change to be made to the Current Default Input Method.</td>
  </tr>
  <tr>
    <td>Change Current Input Method</td>
    <td>"1"</td>
	<td>This value will cause a change to be made to the Current Default Input Method.</td>
  </tr>
</table>
</div>	

####Select a Default Input Method Option
Settable if: The "Set Default Input Method?" value is "Change Current Input Method"

Pivotal parm: Yes

Description: 

>This parm value allows you to select a desired Input Method to become the new Default Input Method. This will cause the selected Input Method to be enabled, if it is not already enabled, before it is set as the new default.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>English(US)</td>
    <td>"1"</td>
	<td>This value will cause the standard English Input Method to be made the new Default Input Method.</td>
  </tr>
  <tr>
    <td>Japanese</td>
    <td>"2"</td>
	<td>This value will cause the standard Japanese Input Method to be made the new Default Input Method.</td>
  </tr>
  <tr>
    <td>Chinese(China)</td>
    <td>"3"</td>
	<td>This value will cause the standard Chinese Input Method to be made the new Default Input Method.</td>
  </tr>
  <tr>
    <td>User defined Input Method</td>
    <td>"4"</td>
	<td>This value will cause a non-standard user-defined Input Method to be made the new Default Input Method. The desired Input Method (which must have already been installed) will need to be specified via its Android Package Name and Class Name.</td>
  </tr>
</table>
</div>	

#####**Package name of input Method**
Settable if: The "Set Default Input Method?" value is "Change Current Input Method" *AND* the "Select a Default Input Method Option" is "User defined Input Method"

Pivotal parm: No

Parm name: InputMethodPackageName

Description: 

>This parm allows you to specify the Android Package Name of a user defined Input Method that will be made the new Default Input Method.

>**Note:** The specified Package Name must match the Package Name of an Input Method that is already installed. If an attempt is made to specify a Package Name that does not match an installed Input Method, then an error will be returned in the Result XML document.

Parm value input rules: 

* String containing the valid Package Name of an Android application that is currently installed and that implements a valid Input Method.  For example, 'com.mycompany.myinputmethod'.
* String with a minimum size of 1 character

#####**Class name of input Method**
Settable if: The "Set Default Input Method?" value is "Change Current Input Method" *AND* the "Select a Default Input Method Option" is "User defined Input Method"

Pivotal parm: No

Parm name: InputMethodClassName

Description: 

>This parm allows you to specify the Android Class Name of a user defined Input Method that will be made the new Default Input Method.

>**Note:** The specified Class Name is used in conjunction with the Package Name and must match the name of the class that implements an Input Method within an Android application that is already installed and that has the specified Package Name. If an attempt is made to specify a Class Name that does not match an installed Input Method, then an error will be returned. This parm will allow you to provide the class name of the user defined input method that will be set to the default input method.

Parm value input rules: 

* String with a minimum size of 1 character

##Example XML
### Configuring Device Region and Keyboard

    :::XML
    <wap-provisioningdoc>
      <characteristic type="UiMgr" version="4.3" >
        <parm name="CurrentLocale" value="en_GB"/>
        <parm name="InputMethodAction" value="1"/>
        <characteristic type="InputMethodDetails">
          <parm name="InputMethodOption" value="1"/>
        </characteristic>
      </characteristic>
    </wap-provisioningdoc>

## Queries

### Get Current Locale

#### Input 

    :::XML
     <wap-provisioningdoc>
        <characteristic type="UiMgr" version="4.3" >
            <parm-query name="CurrentLocale"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="UiMgr" version="4.3" >
            <parm name="CurrentLocale" value="en"/>
        </characteristic>
    </wap-provisioningdoc>

### Get Home Key Usage

#### Input 

    :::XML
    <wap-provisioningdoc>
		<characteristic type="UiMgr" version="4.3" >
			<parm-query name="HomeKeyUsage"/>
		</characteristic>
	</wap-provisioningdoc>

#### Output

    :::XML
	<wap-provisioningdoc>
        <characteristic type="UiMgr" version="4.3" >
            <parm name="HomeKeyUsage" value="1"/>
        </characteristic>
    </wap-provisioningdoc>
	
### Get Clipboard Usage

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="UiMgr" version="4.3" >
            <parm-query name="ClipboardUsage"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="UiMgr" version="4.3" >
            <parm name="ClipboardUsage" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

### Get Auto Correct Usage

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="UiMgr" version="4.3" >
            <parm-query name="AutoCorrectUsage"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="UiMgr" version="4.3" >
            <parm name="AutoCorrectUsage" value ="1"/> 
        </characteristic>
    </wap-provisioningdoc>

### Get Paring Popup

#### Input 

    :::xml
    <wap-provisioningdoc>
        <characteristic type="UiMgr" version="4.3" >
            <parm-query name="BluetoothPairingPopupUsage"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
	<wap-provisioningdoc>
        <characteristic type="UiMgr" version="4.3" >
            <parm name="BluetoothPairingPopupUsage" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

### Get Input Methods

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="UiMgr" version="4.3" >
            <characteristic-query type="InputMethodDetails"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output Selected Input

	:::XML
	<wap-provisioningdoc>
		<characteristic type="UiMgr" version="4.3" >
			<parm name="InputMethodAction" value="1"/>
			<characteristic-query type="InputMethodDetails">
			  <parm name="InputMethodOption" value="1"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>
	
#### Output Custom Input

	:::XML
	<characteristic type="UiMgr" version="4.3" >
		<parm name="InputMethodAction" value="1"/>
		<characteristic type="InputMethodDetails">
			<parm name="InputMethodOption" value="4"/>
			<parm name="InputMethodPackageName" value="PackageName1"/>
			<parm name="InputMethodClassName" value="ClassName1"/>
		</characteristic>
	</characteristic>

### Get All Settings

#### Input 

    :::xml
    <wap-provisioningdoc>
        <characteristic-query type="UiMgr"/>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
	    <characteristic type="UiMgr" version="4.3" >
            <parm name="CurrentLocale" value="en"/>
            <parm name="HomeKeyUsage" value="1"/>
            <parm name="ClipboardUsage" value ="1"/>
            <parm name="AutoCorrectUsage" value ="1"/> 
            <parm name="InputMethodAction" value="1"/>
            <parm name="BluetoothPairingPopupUsage" value="1"/>
            <characteristic type="InputMethodDetails">
	            <parm name="InputMethodOption" value="4"/>
	            <parm name="InputMethodPackageName" value="PackageName1"/>
	            <parm name="InputMethodClassName" value="ClassName1"/>
            </characteristic>
        </characteristic>
    </wap-provisioningdoc>

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=UiMgr&os=JB&embed=true"></iframe> 
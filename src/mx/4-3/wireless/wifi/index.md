---
title: WiFi Manager
description: The Wi-Fi Manager administers a device's Wi-Fi settings and network profiles for remembering and connecting to networks.
---
## About Wi-Fi

### Overview

The Wi-Fi Manager  administers a device's Wi-Fi settings and network profiles for remembering and connecting to networks.

> **Note:** In other CSPs, the terms "enable" and "disable" refer to whether or not the user will be allowed to turn the device on or off at all. However, in this CSP, "enable" and "disable" are equivalent to "turn on" and "turn off."


### Main Functionality

* Enable Wi-Fi
* Disable Wi-Fi
* Set Wi-Fi to Never Sleep
* Set Wi-Fi to Never Sleep When Plugged In
* Set Wi-Fi to Always Sleep
* Use Network Notifications
* Do Not Use Network Notifications
* Enable Auto Country Selection
* Manually Select country
* Set the RF Band
* Enable Auto RF Band Selection
* Enable Fusion Advanced Logging
* Enable the Device to set the Clock off the AP (Access Point) Time
* Enable HF SR (Hyper Fast Secure Roam)
* Disable HF SR (Hyper Fast Secure Roam)
* Enable CCKM (Cisco Centralized Key Management)
* Disable CCKM (Cisco Centralized Key Management)
* Enable FT (Fast Transition)
* Disable FT (Fast Transition)
* Enable FTRIC (Fast Transition Resource Request)
* Disable FTRIC (Fast Transition Resource Request)
* Enable OKC (Opportunistic Key Caching)
* Disable OKC (Opportunistic Key Caching)
* Enable PMKID Caching
* Disable PMKID Caching
* Enable PreAuth
* Disable PreAuth
* Set Power Savings Mode to Always Active
* Set Power Savings Mode to WMM-PS
* Set Power Savings Mode to Null Data Power Save
* Set Power Savings Mode to PS-POLL
* Enable Advanced Logging
* Disable Advanced Logging
* Enable FIPS Compliance
* Disable FIPS Compliance
* Enable Restricted WLAN Settings UI
* Disable Restricted WLAN Settings UI
* Enable Radio Resource Measurement(802.?11K)
* Disable Radio Resource Measurement(802.?11K)
* Enable Management Frame Protection Mode(802.?11w)
* Disable Management Frame Protection Mode(802.?11w)
* Set the band preference
* Enable FTOverTheDS
* Disable FTOverTheDS
* Enable AggregatedFT
* Disable AggregatedFT
* Enable ScanAssist
* Disable ScanAssist
* Enable Coverage Hole Detection
* Disable Coverage Hole Detection
* Enable WANCountry
* Disable WANCountry
* Add a Wi-Fi Network
* Remove a Wi-Fi Network
* Connect to a Wi-Fi Network
* Disconnect from a Wi-Fi Network
* Enable an Existing Wi-Fi Network
* Disable an Existing Wi-Fi Network
* Disable all Existing Wi-Fi Networks
* Remove all Existing Wi-Fi Networks

##Parameter Notes
### Target OS
Pivotal parm: Yes

Description: 

>Specify the target OS of the device.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Android</td>
    <td>"2"</td>
    <td>This value (or the absence of this parm from the XML) will set the Target OS to Android.</td>
  </tr>
</table>
</div>
	
### Wi-Fi Enable 
Pivotal parm: No

Parm name: WiFiAction

Description: 

>Turn the Wi-Fi radio on or off.

> **Note:** In order for settings to be applied, Wi-Fi must be turned on. If you do not specify WiFi Enable in the profile, you will get an error when attempting to apply certain settings if the device's Wi-Fi is not already turned on. For example, all of the Network Actions, which are described later in this document, will require that Wi-Fi is turned on. However, other settings, such as Sleep Policy and Network Notification, do not require Wi-Fi to be turned on.

>As a best practice, it is recommended that this is turned on whenever setting another Wi-Fi parm that requires to be on, as it is not harmful to enable the Wi-Fi again if it is already on.

> **Note:** In other CSPs, the terms "enable" and "disable" refer to whether or not the user will be allowed to turn the device on or off at all. However, in this CSP, "enable" and "disable" are equivalent to "turn on" and "turn off".



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
	<td>This value (or the absence of this parm from the XML) will not make any change to the whether the Wi-Fi radio is on or off.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"enable"</td>
	<td>This value will cause the Wi-Fi radio to be turned on.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"disable"</td>
	<td>This value will cause the Wi-Fi radio to be turned off.</td>
  </tr>
</table>
</div>	

### Sleep Policy
Pivotal parm: No

Parm name: WifiSleepPolicy

Description: 
>Specifies the state of the Wi-Fi radio when the device suspends.

>For Android devices, the device is suspended when the display turns off after idling for a certain amount of time. While the device is suspended, the device's software continues running in a lower power mode, meaning that the device itself is not turned off and software can run when the device is in this state. The amount of power consumption while in this state partially depends on what features are left on.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>""</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the current sleep policy on the device.</td>
  </tr>
  <tr>
    <td>Never Sleep</td>
    <td>"AlwaysOn"</td>
	<td>This value will leave the Wi-Fi radio on while the device's display is turned off and Wi-Fi can continue to be used by any software that is running. Existing Wi-Fi connections will be maintained as if the device was not suspended. For example, emails will continue to come in. This behavior may be preferred in some situations. However, this could significantly increase the drain on the battery and reduce the battery life.</td>
  </tr>
  <tr>
    <td>Never Sleep When Plugged</td>
    <td>"PluggedIn"</td>
	<td>This value will leave the Wi-Fi radio on while the display is turned off if the device is not running from battery power.</td>
  </tr>
  <tr>
    <td>Always Sleep</td>
    <td>"NeverOn"</td>
	<td>This value turns the Wi-Fi radio off while the device's display is turned off. Existing Wi-Fi connections will be dropped and will need to be re-established, if needed, when the display (and Wi-Fi) are turned back on. Software that is running cannot use Wi-Fi while it is off. This can significantly increase the battery life if communications are not needed when the device is suspended.</td>
  </tr>
</table>
</div>

### Network Notification
Pivotal parm: No

Parm name: NetworkNotification

Description: 
>Specifies whether or not to notify the user when an unknown, open network comes in range. If this setting is turned on, the user will be asked if they want to join the network, which could be useful for personal or dual use devices which might want to use a public Wi-Fi connection at some point. However, turning these notifications on is not recommended for devices that are supposed to be used only on a single corporate Wi-Fi network since it might be harmful to offer a user the opportunity to connect to a rogue, non-secure network.

 <div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Values</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>""</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the current network notification setting.</td>
  </tr>
  <tr>
    <td>Use network notification</td>
    <td>"true"</td>
	<td>This value will cause the user to be notified when an unknown, open network comes into range</td>
  </tr>
  <tr>
    <td>Do not use network notification</td>
    <td>"false"</td>
	<td>This value will cause the user to not be notified when an unknown, open network comes into range</td>
  </tr>
</table>
</div>

### Country Selection Auto/Manual
Pivotal parm: Yes

Description: 
>By leaving this option unchecked, the country may be determined by the router or access point setting. To manually select the country, you should select the checkbox. When doing this a country drop-down will appear.

#### Country
Settable if: The "Configure Country (Auto/Manual)" box is not checked

Pivotal parm: No

Parm name: Country

Description: 
>Sets the country to use for Wi-Fi regulatory setting. 

>When you choose 'AUTO' in the drop-down, 802.11d will be enabled. 802.11d is a mode where the device will listen for a country-specific beacon. It also will not transmit unless it can auto-detect the country, which can be beneficial because the device cannot transmit with a frequency that is inconsistent with the Wi-Fi infrastructure and is therefore less likely to violate country-specific regulations.

>If a Wi-Fi infrastructure does not support, 802.11d, then the country that is used by this infrastructure will need to be selected so that the device can connect to it.

 <div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Values</th>
	</tr>
  <tr>
    <td>AUTO (Use 802.11d)</td>
    <td>"AUTO"</td>
  </tr>
  <tr>
    <td>Algeria</td>
    <td>"DZ"</td>
  </tr>
  <tr>
    <td>Anguilla</td>
    <td>"AI"</td>
  </tr>
  <tr>
    <td>Argentina</td>
    <td>"AR"</td>
  </tr> 
  <tr>
    <td>Australia</td>
    <td>"AU"</td>
  </tr> 
  <tr>
    <td>Austria</td>
    <td>"AT"</td>
  </tr> 
  <tr>
    <td>Bahamas</td>
    <td>"BS"</td>
  </tr> 
  <tr>
    <td>Bahrain</td>
    <td>"BH"</td>
  </tr> 
  <tr>
    <td>Barbados</td>
    <td>"BB"</td>
  </tr> 
  <tr>
    <td>Belarus</td>
    <td>"BY"</td>
  </tr> 
  <tr>
    <td>Belgium</td>
    <td>"BE"</td>
  </tr> 
  <tr>
    <td>Bermuda</td>
    <td>"BM"</td>
  </tr> 
  <tr>
    <td>Bolivia</td>
    <td>"BO"</td>
  </tr> 
  <tr>
    <td>Bonaire</td>
    <td>"BQ"</td>
  </tr> 
  <tr>
    <td>Bosnia and Herzegovina</td>
    <td>"BA"</td>
  </tr> 
  <tr>
    <td>Brazil</td>
    <td>"BR"</td>
  </tr> 
  <tr>
    <td>Bulgaria</td>
    <td>"BG"</td>
  </tr> 
  <tr>
    <td>Canada</td>
    <td>"CA"</td>
  </tr>
  <tr>
    <td>Cayman Islands</td>
    <td>"KY"</td>
  </tr> 
  <tr>
    <td>Chile</td>
    <td>"CL"</td>
  </tr>
  <tr>
    <td>China</td>
    <td>"CN"</td>
  </tr>
  <tr>
    <td>Christmas Island</td>
    <td>"CX"</td>
  </tr>  
  <tr>
    <td>Columbia</td>
    <td>"CO"</td>
  </tr> 
  <tr>
    <td>Costa Rica</td>
    <td>"CR"</td>
  </tr>
  <tr>
    <td>Croatia</td>
    <td>"HR"</td>
  </tr>
  <tr>
    <td>Curacao</td>
    <td>"CW"</td>
  </tr> 
  <tr>
    <td>Cyprus</td>
    <td>"CY"</td>
  </tr> 
  <tr>
    <td>Czech Republic</td>
    <td>"CZ"</td>
  </tr> 
  <tr>
    <td>Denmark</td>
    <td>"DK"</td>
  </tr> 
  <tr>
    <td>Dominican Republic</td>
    <td>"DO"</td>
  </tr> 
  <tr>
    <td>Ecuador</td>
    <td>"EC"</td>
  </tr> 
  <tr>
    <td>Egypt</td>
    <td>"EG"</td>
  </tr> 
  <tr>
    <td>El Salvador</td>
    <td>"SV"</td>
  </tr> 
  <tr>
    <td>Estonia</td>
    <td>"EE"</td>
  </tr> 
  <tr>
    <td>Falkland Islands(Malvinas)</td>
    <td>"FK"</td>
  </tr> 
  <tr>
    <td>Finland</td>
    <td>"FI"</td>
  </tr> 
  <tr>
    <td>France</td>
    <td>"FR"</td>
  </tr> 
    <tr>
    <td>French Guiana</td>
    <td>"GF"</td>
  </tr>
  <tr>
    <td>Germany</td>
    <td>"DE"</td>
  </tr>
  <tr>
    <td>Greece</td>
    <td>"GR"</td>
  </tr>
  <tr>
    <td>Guadelope</td>
    <td>"GP"</td>
  </tr> 
  <tr>
    <td>Guam</td>
    <td>"GU"</td>
  </tr> 
  <tr>
    <td>Guatemala</td>
    <td>"GT"</td>
  </tr> 
  <tr>
    <td>Guyana</td>
    <td>"GY"</td>
  </tr> 
  <tr>
    <td>Haiti</td>
    <td>"HT"</td>
  </tr> 
  <tr>
    <td>Honduras</td>
    <td>"HN"</td>
  </tr> 
  <tr>
    <td>Hong Kong</td>
    <td>"HK"</td>
  </tr> 
  <tr>
    <td>Hungary</td>
    <td>"HU"</td>
  </tr> 
  <tr>
    <td>Iceland</td>
    <td>"IS"</td>
  </tr> 
  <tr>
    <td>India</td>
    <td>"IN"</td>
  </tr> 
  <tr>
    <td>Indonesia</td>
    <td>"ID"</td>
  </tr> 
  <tr>
    <td>Ireland</td>
    <td>"IE"</td>
  </tr> 
  <tr>
    <td>Israel</td>
    <td>"IL"</td>
  </tr> 
  <tr>
    <td>Italy</td>
    <td>"IT"</td>
  </tr>
   <tr>
    <td>Jamaica</td>
    <td>"JM"</td>
  </tr> 
  <tr>
    <td>Japan</td>
    <td>"JP"</td>
  </tr> 
  <tr>
    <td>Jordan</td>
    <td>"JO"</td>
  </tr> 
  <tr>
    <td>Kazakhstan</td>
    <td>"KZ"</td>
  </tr> 
  <tr>
    <td>Kenya</td>
    <td>"KE"</td>
  </tr> 
  <tr>
    <td>Korea Republic</td>
    <td>"KR"</td>
  </tr> 
  <tr>
    <td>Kuwait</td>
    <td>"KW"</td>
  </tr> 
  <tr>
    <td>Latvia</td>
    <td>"LV"</td>
  </tr> 
  <tr>
    <td>Lebanon</td>
    <td>"LB"</td>
  </tr> 
  <tr>
    <td>Liechtenstein</td>
    <td>"LI"</td>
  </tr> 
  <tr>
    <td>Lithuania</td>
    <td>"LT"</td>
  </tr> 
  <tr>
    <td>Luxembourg</td>
    <td>"LU"</td>
  </tr> 
  <tr>
    <td>Macedonia, Former Yugoslav Republic</td>
    <td>"MK"</td>
  </tr> 
  <tr>
    <td>Malaysia</td>
    <td>"MY"</td>
  </tr> 
  <tr>
    <td>Malta</td>
    <td>"MT"</td>
  </tr> 
  <tr>
    <td>Martinique</td>
    <td>"MQ"</td>
  </tr> 
  <tr>
    <td>Mexico</td>
    <td>"MX"</td>
  </tr> 
  <tr>
    <td>Montenegro</td>
    <td>"ME"</td>
  </tr> 
  <tr>
    <td>Morocco</td>
    <td>"MA"</td>
  </tr> 
  <tr>
    <td>Netherlands, Antilles</td>
    <td>"AN"</td>
  </tr>
   <tr>
    <td>Netherlands</td>
    <td>"NL"</td>
  </tr> 
  <tr>
    <td>New Zealand</td>
    <td>"NZ"</td>
  </tr> 
  <tr>
    <td>Nicaragua</td>
    <td>"NI"</td>
  </tr> 
  <tr>
    <td>Nigeria</td>
    <td>"NG"</td>
  </tr> 
  <tr>
    <td>Niue</td>
    <td>"NU"</td>
  </tr> 
  <tr>
    <td>Norfolk Islands</td>
    <td>"NF"</td>
  </tr> 
  <tr>
    <td>Northern Marina Islands</td>
    <td>"MP"</td>
  </tr> 
  <tr>
    <td>Norway</td>
    <td>"NO"</td>
  </tr> 
  <tr>
    <td>Oman</td>
    <td>"OM"</td>
  </tr> 
  <tr>
    <td>Pakistan</td>
    <td>"PK"</td>
  </tr> 
  <tr>
    <td>Panama</td>
    <td>"PA"</td>
  </tr> 
  <tr>
    <td>Paraguay</td>
    <td>"PY"</td>
  </tr> 
  <tr>
    <td>Peru</td>
    <td>"PE"</td>
  </tr> 
  <tr>
    <td>Philippines</td>
    <td>"PH"</td>
  </tr> 
  <tr>
    <td>Poland</td>
    <td>"PL"</td>
  </tr> 
  <tr>
    <td>Portugal</td>
    <td>"PT"</td>
  </tr> 
  <tr>
    <td>Puerto Rico</td>
    <td>"PR"</td>
  </tr> 
  <tr>
    <td>Qatar</td>
    <td>"QA"</td>
  </tr> 
  <tr>
    <td>Romania</td>
    <td>"RO"</td>
  </tr> 
  <tr>
    <td>Russian Federation</td>
    <td>"RU"</td>
  </tr> 
  <tr>
    <td>St. Maarten</td>
    <td>"SX"</td>
  </tr> 
  <tr>
    <td>Saudi Arabia</td>
    <td>"SA"</td>
  </tr> 
  <tr>
    <td>Serbia</td>
    <td>"RS"</td>
  </tr> 
  <tr>
    <td>Singapore</td>
    <td>"SG"</td>
  </tr> 
  <tr>
    <td>Slovakia</td>
    <td>"SK"</td>
  </tr> 
  <tr>
    <td>Slovenia</td>
    <td>"SI"</td>
  </tr> 
  <tr>
    <td>South Africa</td>
    <td>"ZA"</td>
  </tr> 
  <tr>
    <td>Spain</td>
    <td>"ES"</td>
  </tr> 
  <tr>
    <td>Sri Lanka</td>
    <td>"LK"</td>
  </tr> 
  <tr>
    <td>Sweden</td>
    <td>"SE"</td>
  </tr> 
  <tr>
    <td>Switzerland</td>
    <td>"CH"</td>
  </tr> 
  <tr>
    <td>Taiwan, Province of China</td>
    <td>"TW"</td>
  </tr> 
  <tr>
    <td>Thailand</td>
    <td>"TH"</td>
  </tr> 
  <tr>
    <td>Trinidad and Tobago</td>
    <td>"TT"</td>
  </tr> 
  <tr>
    <td>Tunisia</td>
    <td>"TN"</td>
  </tr> 
  <tr>
    <td>Turkey</td>
    <td>"TR"</td>
  </tr> 
  <tr>
    <td>Ukraine</td>
    <td>"UA"</td>
  </tr> 
  <tr>
    <td>United Arab Emirates</td>
    <td>"AE"</td>
  </tr> 
  <tr>
    <td>United Kingdom</td>
    <td>"GB"</td>
  </tr> 
  <tr>
    <td>U.S.A.</td>
    <td>"US"</td>
  </tr> 
  <tr>
    <td>Uruguay</td>
    <td>"UY"</td>
  </tr> 
  <tr>
    <td>Venezuela</td>
    <td>"VE"</td>
  </tr> 
  <tr>
    <td>Vietnam</td>
    <td>"VN"</td>
  </tr> 
  <tr>
    <td>Virgin Islands(British)</td>
    <td>"VG"</td>
  </tr> 
  <tr>
    <td>Virgin Islands(US)</td>
    <td>"VI"</td>
  </tr>
</table> 
</div>

### RF Band
Pivotal parm: Yes

Description: 
>Specifies the 802.11 band(s) to use. The bands to use will usually be determined automatically through negotiation with the Wi-Fi infrastructure. However, in some cases, the Wi-Fi infrastructure may be shared amongst multiple uses, which may mean that it would be preferable to limit the devices to one band and leave the other bands for other purposes. 

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Unchanged</td>
    <td>""</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the current selected band on the device.</td>
  </tr>
  <tr>
    <td>2.4GHZ</td>
    <td>"2.4GHz"</td>
	<td>This value will enable 2.4GHz band</td>
  </tr>
  <tr>
    <td>5.0GHZ</td>
    <td>"5.0GHz"</td>
	<td>This value will enable 5.0GHz band</td>
  </tr>
  <tr>
    <td>Auto</td>
    <td>"Auto"</td>
	<td>This value will enable both bands and connect automatically to either</td>
  </tr>
</table>
</div>

#### 2.4GHz Channels 
Settable if: The RF Band that is selected is either 2.4GHz or Auto

Pivotal parm: No

Parm name: 2.4GHzChannels

Description: 
>Enable the specified channels in the 2.4GHz band. In most cases, if the 2.4GHZ band is allowed to be used, then the channels in this band that should be used can be determined automatically through negotiation with the Wi-Fi infrastructure. However, it may be beneficial to control the channels manually because different channels or sets of channels might be used for different uses. It may be preferable to limit the devices to only use certain channels so that other channels are left for other purposes. 

Parm value input rules: 

* String containing a set of valid channels.
	* Not all channels are available in all every country. Please see the link below for more information:
		* https://en.wikipedia.org/wiki/List_of_WLAN_channels
* The minimum length is 0 characters and the maximum length is 64 characters.
* Comma separated and may contain a range specified with a dash '-'. Example: 1,7-10

#### 5.0GHz Channels 
Settable if: The RF Band that is selected is either 5.0GHz or Auto

Pivotal parm: No

Parm name: 5.0GHzChannels

Description: 
>Enable the specified channels in the 5.0GHz band. In most cases, if the 5.0GHZ band is allowed to be used, then the channels in this band that should be used can be determined automatically through negotiation with the Wi-Fi infrastructure. However, it may be beneficial to control the channels manually because different channels or sets of channels might be used for different uses. It may be preferable to limit the devices to only use certain channels so that other channels are left for other purposes.

Parm value input rules: 

* String containing a set of valid channels. 
	* Not all channels are available in all every country. Please see the link below for more information:
		* https://en.wikipedia.org/wiki/List_of_WLAN_channels
* The minimum length is 0 characters and the maximum length is 64 characters.
* Comma separated and may contain a range specified with a dash '-'. Example: 36-60

### Specify Advanced Options

Description: 
>Specify whether Advanced Options will be used. In most cases, these options should not be used except under the direction of Zebra support staff. More information about the Advanced Options that can be set, please see [this page.](../guide/csp/wifiAdvancedOptions)

### Network Action
Pivotal parm: Yes

Description: 
>This is used to manage the Wi-Fi network profiles on the device. A given device can have zero or more Wi-Fi network profiles defined, which are used to specify the information that is needed for the device to connect to a single Wi-Fi network. These profiles can each be enabled or disabled. An enabled Wi-Fi network profile can be used to connect to a network and a disabled profile cannot be used to connect to a network. At any given time, the device can be connected to at most one network using a corresponding Wi-Fi network profile. The potential network connections are controlled by which profiles are defined and enabled on the device. It is also possible to force a connection to the network associated with a specific Wi-Fi network profile.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do Nothing</td>
    <td>""</td>
	<td>This value (or the absence of this parm from the XML) will not cause any Network Actions to be performed.</td>
  </tr>
  <tr>
    <td>Add a New Network</td>
    <td>"Add"</td>
	<td>This value will add a new profile with the provided profile settings. For the options that will be presented when choosing to add a new network, please see the following "SSID" parm and the "Add a New Network Options" section below</td>
  </tr>
  <tr>
    <td>Remove an Existing Network</td>
    <td>"Remove"</td>
	<td>This value will remove the a network profile based on the SSID</td>
  </tr>
  <tr>
    <td>Connect to an Existing Network</td>
    <td>"Connect"</td>
	<td>This value will initiate a connection to the network based on the SSID</td>
  </tr>
    <tr>
    <td>Disconnect from an Existing Network </td>
    <td>"Disconnect"</td>
	<td>This value will disconnect from a network based on the SSID</td>
  </tr>
  <tr>
    <td>Enable an Existing Network</td>
    <td>"Enable"</td>
	<td>This value will enable a network profile based on the SSID</td>
  </tr>
  <tr>
    <td>Disable an Existing Network</td>
    <td>"Disable"</td>
	<td>This value will disable a network profile based on the SSID</td>
  </tr>
  <tr>
    <td>Disable All Existing Networks</td>
    <td>"DisableAll"</td>
	<td>This value will disable all network profiles</td>
  </tr>
    <tr>
    <td>Remove All Existing Networks</td>
    <td>"RemoveAll"</td>
	<td>This value will remove all network profiles</td>
  </tr>
</table>
</div>

#### SSID
Settable if: The Network Action is any option other than "Do Nothing", "Disable All Existing Networks", or "Remove All Existing Networks"

Pivotal parm: No

Parm name: SSID

Description: 
>This is the SSID name of the network, which is the primary mechanism used to identify a Wi-Fi network and is used to identify the Wi-Fi network profile to be acted on. Therefore, any Network Action that is used to affect a single profile need to specify the SSID to select the desired profile.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 32 characters

### Add a New Network Options
The following parms are the parameters that are used for adding a network, in addition to the SSID parm above. 

#### Security Mode 
Settable if: The Network Action is "Add a New Network"

Pivotal parm: Yes

Description: 
>This specifies the Security Mode used by the network, which determines the degree or class of security to be used on the device. Based on the Security Mode, more or fewer security options will be offered.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Open</td>
    <td>"0"</td>
	<td>An open network indicates that the network uses no security. These kinds of networks are generally not advised to be used for transmitting sensitive data unless other protection mechanisms are used, such as VPNs, data encryption, etc. No additional security information will need to be supplied to configure these networks.</td>
  </tr>
  <tr>
    <td>Personal</td>
    <td>"1"</td>
	<td>This indicates that the network uses basic security. A Pre-Shared Key (PSK) or Wired Equivalency Privacy (WEP) key, which is known to both the device and the Wi-Fi infrastructure, is used to encrypt data. These networks are more secure than open networks, but may be compromised if the keys are not handled securely and/or are not changed periodically. Security information pertaining to the required key will need to be supplied to configure these networks.</td>
  </tr>
  <tr>
    <td>Enterprise</td>
    <td>"2"</td>
	<td>This indicates that the network uses 802.1x Extensible Authentication Protocol (EAP) security. These networks use authentication to establish the entitlement of a device to join the network and then distribute necessary keys once this entitlement has been verified. Security information pertaining to the EAP type and authentication credentials to be used will need to be supplied to configure these networks.</td>
  </tr>
</table>
</div>

#### WPA Mode
Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" or "Enterprise"

Pivotal parm: Yes

Description: 
>When the selected Security Mode is "Personal" or "Enterprise", the WPA Mode must be specified to determine what sort of key will then be used.

> **Note:** WEP is not supported with a Enterprise Security Mode. It is only supported using Personal Security Mode.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>WPA</td>
    <td>"1"</td>
	<td>This indicates that the network requires encryption using the Wi-Fi Protected Access (WPA) standard. WPA only performs encryption using the Temporal Key Integrity Protocol. A TKIP-compatible key will therefore need to be specified.</td>
  </tr>
  <tr>
    <td>WPA2</td>
    <td>"2"</td>
	<td>This indicates that the network requires encryption using the Wi-Fi Protected Access version 2 (WPA2) standard. WPA2 supports encryption using either the Temporal Key Integrity Protocol (TKIP) for backward compatibility with WPA, or the more secure Advanced Encryption Standard (AES) algorithm.  A decision about whether to use TKIP or AES (or auto-select) will need to be made and then a TKIP or AES-compatible key will need to be specified.</td>
  </tr>
  <tr>
    <td>WPA/WPA2</td>
    <td>"3"</td>
	<td>This indicates that the network supports both the Wi-Fi Protected Access (WPA) standard and the Wi-Fi Protected Access version 2 (WPA2) standard. This is essentially the same effect as selecting WPA2 since WPA2 supports backward compatibility with WPA.</td>
  </tr>
  <tr>
    <td>WEP</td>
    <td>"4"</td>
	<td>This indicates that the network requires encryption using the older, and less secure, Wired Equivalency Privacy (WEP) standard. A decision about the WEP key size to use will need to be made and then a WEP key of the selected size will need to be specified.</td>
  </tr>
</table>
</div>

#### Authentication
Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise"

Pivotal parm: No

Parm name: Authentication

Description: 
>This is the Authentication Mode used by the network. When a Security Mode of "Enterprise" is selected, an Authentication Mode will need to be specified to determine how authentication will be performed as part of the 802.1x EAP type used by the network.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>EAP-TLS</td>
    <td>"1"</td>
	<td>This indicates that the network requires authentication using the 802.1x Extensible Authentication Protocol - Transport Layer Security (EAP-TLS) standard (RFC 5216). EAP-TLS requires a device identity to be specified and requires that a client certificate be specified to prove the authenticity of the device identity. In all EAP modes, an optional certificate may be specified to help verify the identity of the authentication server.
</td>
  </tr>
  <tr>
    <td>EAP-FAST-GTC</td>
    <td>"13"</td>
	<td>This indicates that the network requires authentication using a token generated using a Generic Token Card (GTC) within an anonymous TLS tunnel established using the 802.1x Extensible Authentication Protocol - Flexible Authentication via Secure Tunneling (EAP-FAST) standard (RFC 5422). EAP-FAST-GTC requires a device identity to be specified and requires that a token value (typically obtained from a physical token device) be specified to prove the authenticity of that device identity.  An optional client certificate may also be specified to verify the authenticity of the device identity. In all EAP modes, an optional certificate may be specified to help verify the identity of the authentication server.
</td>
  </tr>
  <tr>
    <td>EAP-FAST-MSCHAPV2</td>
    <td>"11"</td>
	<td>This indicates that the network requires authentication using the Microsoft Challenge Authentication Protocol Version 2 (MSCHAPV2) within an anonymous TLS tunnel established using the 802.1x Extensible Authentication Protocol - Flexible Authentication via Secure Tunneling (EAP-FAST) standard (RFC 5422). EAP-FAST-MSCHAPV2 requires a device identity to be specified and requires that a password be specified to prove the authenticity of that device identity.  An optional client certificate may also be specified to verify the authenticity of the device identity. In all EAP modes, an optional certificate may be specified to help verify the identity of the authentication server.
</td>
  </tr>
  <tr>
    <td>EAP-TTLS-PAP</td>
    <td>"8"</td>
	<td>This indicates that the network requires authentication using the Password Authentication Protocol (PAP) within a secure TLS tunnel established using the 802.1x Extensible Authentication Protocol - Tunneled Transport Layer Security (EAP-TTLS) standard (RFC 5281). EAP-TTLS-PAP requires a device identity to be specified and requires that a password be specified to prove the authenticity of that device identity.  An optional client certificate may also be specified to verify the authenticity of the device identity. In all EAP modes, an optional certificate may be specified to help verify the identity of the authentication server.
</td>
  </tr>
   <tr>
    <td>EAP-TTLS-MSCHAP</td>
    <td>"6"</td>
	<td>This indicates that the network requires authentication using the Microsoft Challenge Authentication Protocol (MSCHAP) within a secure TLS tunnel established using the 802.1x Extensible Authentication Protocol - Tunneled Transport Layer Security (EAP-TTLS) standard (RFC 5281). EAP-TTLS-MSCHAP requires a device identity to be specified and requires that a password be specified to prove the authenticity of that device identity.  An optional client certificate may also be specified to verify the authenticity of the device identity. In all EAP modes, an optional certificate may be specified to help verify the identity of the authentication server.
</td>
  </tr>
  <tr>
    <td>EAP-TTLS-MSCHAPV2</td>
    <td>"7"</td>
	<td>This indicates that the network requires authentication using the Microsoft Challenge Authentication Protocol Version 2 (MSCHAPV2) within a secure TLS tunnel established using the 802.1x Extensible Authentication Protocol - Tunneled Transport Layer Security (EAP-TTLS) standard (RFC 5281). EAP-TTLS-MSCHAPV2 requires a device identity to be specified and requires that a password be specified to prove the authenticity of that device identity.  An optional client certificate may also be specified to verify the authenticity of the device identity. In all EAP modes, an optional certificate may be specified to help verify the identity of the authentication server.
</td>
  </tr>
  <tr>
    <td>LEAP</td>
    <td>"4"</td>
	<td>This indicates that the network requires authentication using the Lightweight Extensible Authentication Protocol (LEAP) defined by Cisco.  LEAP uses a modified version of MSCHAP without a secure tunnel and hence can be easily compromised. LEAP requires a device identity to be specified and requires that a password be specified to prove the authenticity of that device identity. Unlike standard EAP modes, LEAP does not support an optional certificate to help verify the identity of the authentication server.
</td>
  </tr>
  <tr>
    <td>PEAP-MSCHAPV2</td>
    <td>"2"</td>
	<td>This indicates that the network requires authentication using the Microsoft Challenge Authentication Protocol Version 2 (MSCHAPV2) within a secure TLS tunnel established using the Protected Extensible Authentication Protocol, (PEAP) defined by Cisco Systems, Microsoft, and RSA Security. PEAP-MSCHAPV2 requires a device identity to be specified and requires that a password be specified to prove the authenticity of that device identity.  An optional client certificate may also be specified to verify the authenticity of the device identity. In all EAP modes, an optional certificate may be specified to help verify the identity of the authentication server.
</td>
  </tr> 
  <tr>
    <td>PEAP-GTC</td>
    <td>"10"</td>
	<td>This indicates that the network requires authentication using a token generated using a Generic Token Card (GTC) within a secure TLS tunnel established using the Protected Extensible Authentication Protocol, (PEAP) defined by Cisco Systems, Microsoft, and RSA Security. PEAP-GTC requires a device identity to be specified and requires that a token value (typically obtained from a physical token device) be specified to prove the authenticity of that device identity.  An optional client certificate may also be specified to verify the authenticity of the device identity. In all EAP modes, an optional certificate may be specified to help verify the identity of the authentication server.
</td>
  </tr>
</table>
</div>

#### Authentication Details
Specific authentication settings when Enterprise Mode and specific Authentication modes are selected.

##### **Identity**
Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise"

Pivotal parm: No

Parm name: Identity

Description: 
>Identity is used only when Authentication is used, which also means that this is only used when the Security Mode is "Enterprise". 

>This parm is used by the device to specify to the Authentication Server the Identity that it wishes to authenticate as. The Identity is synonymous with "user name" in many cases. However, different Authentication Servers can be configured to require different types of Identity, such as email addresses, device unique ID, etc. 

>The Identity is used as a way of getting accepted by the Authentication Server so that you can receive the encryption key that is needed to operate on the network. Once you are authenticated, the Identity does not have any further meaning and is not used to identify the device on the network.

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause the Identity will not be set.


##### **Anonymous Identity** 
Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise" *AND* the Authentication is not "EAP-TLS" or "LEAP"

Pivotal parm: No

Parm name: AnonymousIdentity

Description: 
>When using an EAP type that has a secure tunnel over which authentication credentials can be delivered, it may be necessary to specify an Identity outside the tunnel as well as an Identity inside the tunnel. To protect the actual Identity from disclosure when sending it outside the tunnel, an Anonymous Identity can be sent outside the tunnel and the actual Identity, along with the password or other verifying credentials, can be sent inside the tunnel.

>If no Anonymous Identity is specified, then the actual Identity will be sent outside the tunnel, if required. This may not be a problem since the password or other verifying credentials is only sent inside the tunnel, in modes that use a tunnel for secure credential delivery. So, using the actual Identity outside the tunnel would only risk disclosure of part of the information needed to authenticate. A separate Anonymous Identity can only be used if the Authentication Server is set up to support such use.

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause the Anonymous Identity will not be set.

Parm value input rules: 

* String with a minimum of 0 characters and a maximum of 64 characters

##### **Protect Password**
Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise" *AND* the Authentication is not "EAP-TLS"

Pivotal parm: No

Parm name: ProtectPassword

Description: 
>A Password is an authentication credential that is used to prove the authenticity of an Identity and therefore, is only used when the Security Mode is "Enterprise". All Authentication types require a Password except EAP-TLS, which uses a client certificate instead of a Password.

>In most cases, it is important to protect a Password since, combined with the matching Identity, it can be used to authenticate and gain access to a network. Since the Password must be embedded within the XML, it is often desirable to encrypt the Password so that i cannot be extracted and exploited if the XML is intercepted. The ProtectPassword parm is used to indicate whether the Password will be specified in clear, unencrypted text or in encrypted form.

##### **Password** 
Pivotal parm: Yes

Description: 
>The password to be used to connect to the network. The parm name will change depending on the value of ProtectPassword.

> **Note:** Currently, the parm value encryption process is not documented and the key that is needed to encrypt is not published. Therefore, an MDM cannot currently use an encrypted password since there is no way to store an encrypted, server-supplied password in an XML.

Parm value input rules: 

* String with a minimum of 0 characters and a maximum of 64 characters

If Protect Password is false:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise" *AND* Authentication is not "EAP-TLS" *AND* Protect Password is false
* Parm name: PasswordClear

If Protect Password is true:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise" *AND* Authentication is not "EAP-TLS" *AND* Protect Password is true
* Parm name: PasswordEncrypted

##### **Server Certificate Name (optional)**
Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Enterprise" *AND* the Authentication is "EAP-TLS", "PEAP-MSCHAPV2", "EAP-TTLS-MSCHAP", "EAP-FAST-MSCHAPV2", "EAP-TTLS-PAP", "PEAP-GTC", "EAP-FAST-MSCHAPV2", or "EAP-FAST-GTC"

Pivotal parm: No

Parm name: OptionalServerCertificate

Description: 
>The name of the certificate alias that should be used to verify the server (Optional).

>When Security Mode is "Enterprise", the device will not need to authenticate to an Authentication Server using the defined Authentication type. This will involve sending potentially sensitive authentication credentials to the Authentication Server. It is usually not recommended to do this unless the authenticity of the Authentication Server can be verified, for example, ensuring it is not a "man in the middle".

>The device contacts and challenges the Authentication Server to assert and prove its Identity through the use of a server certificate. The device must be able to establish the validity of that certificate and must trust the chain of authority of the issuer of that certificate. This would all occur whether or not a Server Certificate Name is specified.

>By default, a certificate asserted by an Authentication Server will be trusted if it can be verified to have been validly issued by any trusted certificate authority. If a Server Certificate Name is supplied, then the certificate asserted by an Authentication Server will be trusted only if it is verified to have been validly issued by that specific trusted certificate authority. This increases the security by preventing the use of certificates issued by authorities that are not trusted to issue certificates to authentication servers.

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause the Optional Server Certificate to not be set.

Parm value input rules: 

* String with a minimum of 0 characters and a maximum of 64 characters

##### **Client Certificate Name (mandatory)**
Settable if: The Network Action is "Add a New Network" and the Security Mode is "Enterprise" and the Authentication is "EAP-TLS"

Pivotal parm: No

Parm name: MandatoryClientCertificate

Description: 
>The name of the certificate alias that should be used to join the network (Mandatory). When Authenticating using EAP-TLS, a client certificate is used instead of a Password. Consequently, when Authentication is EAP-TLS, a client certificate must be specified and a Password must not be specified.

Parm value input rules: 

* String with a minimum of 0 characters and a maximum of 64 characters

##### **Client Certificate Name (optional)**
Settable if: The Network Action is "Add a New Network" and the Security Mode is "Enterprise" the Authentication is "PEAP-MSCHAPV2", "EAP-TTLS-MSCHAP", "EAP-TTLS-MSCHAPV2", "EAP-TTLS-PAP", "PEAP-GTC", "EAP-FAST-MSCHAPV2", or "EAP-FAST-GTC"

Pivotal parm: No

Parm name: OptionalClientCertificate

Description: 
>The name of the certificate alias that should be used to join the network (Optional). When Authenticating using EAP types other than EAP-TLS, which would not require a client certificate, a client is still allowed. If used, the client certificate will be used to authenticate the device to the authentication server as part of the establishment of the secure tunnel over which further authentication credentials will be delivered. This means that the client certificate do not need to be unique, even if the authentication credentials are. The use of a client certificate can introduce an additional level of protection by requiring a device to possess a valid client certificate as well as valid authentication credentials. The client certificate serves as a first pass filter.

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause the Optional Server Certificate to not be set.

Parm value input rules: 

* String with a minimum of 0 characters and a maximum of 64 characters

#### Encryption Type
Pivotal parm: No

Description: 
>Type of encryption used by the network. The values that can be selected for Encryption Type will vary based on the selections made for Security Mode and WPA Mode. But a selection must always be made for Encryption Type whenever Security Mode is not "Open" (indicating no encryption).

If WPA is selected: 

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" or "Enterprise" *AND* the WPA Mode is WPA
* Parm name: EncryptionWPA
*  <div class="parm-table"><table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Default</td>
    <td>"0" </td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the encryption type that is currently used on the device.</td>
  </tr>
  <tr>
    <td>TKIP</td>
    <td>"1" </td>
	<td>This indicates that the network requires encryption to be performed using the Temporal Key Integrity Protocol (TKIP) standard with a per-packet key length of 128 bits.</td>
  </tr>
</table></div>

If WPA2 is selected:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" or "Enterprise" *AND* the WPA Mode is WPA2 or WPA/WPA2
* Parm name: EncryptionWPA2
*  <div class="parm-table"><table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Default</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the encryption type that is currently used on the device.</td>
  </tr>
  <tr>
    <td>AES-CCMP</td>
    <td>"1"</td>
	<td>This indicates that the network requires encryption to be performed using the Advanced Encryption Standard - Counter mode Cipher block chaining Message authentication code Protocol (AES-CCMP) standard, wherein the AES block cipher is used with a per-packet key length of 128 bits.</td>
  </tr>
  <tr>
    <td>TKIP</td>
    <td>"2"</td>
	<td>This indicates that the network requires encryption to be performed using the Temporal Key Integrity Protocol (TKIP) standard with a per-packet key length of 128 bits.</td>
  </tr>
  <tr>
    <td>AES-CCMP/TKIP</td>
    <td>"3"</td>
	<td>This indicates that the network allows the use of either the AES-CCMP standard or the TKIP encryption standard and the proper encryption type to use can be automatically determined by negotiation with the Wi-Fi infrastructure.</td>
  </tr>
</table></div>

If WEP is selected:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" or "Enterprise" *AND* the WPA Mode is WEP
* Parm name: EncryptionWEP
* <div class="parm-table"><table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>WEP-40</td>
    <td>"1"</td>
	<td>This indicates that the network requires encryption to be performed using the Wireless Equivalency Privacy (WEP) standard with a key size of 40 bits.</td>
  </tr>
  <tr>
    <td>WEP-104</td>
    <td>"2"</td>
	<td>This indicates that the network requires encryption to be performed using the Wireless Equivalency Privacy (WEP) standard with a key size of 104 bits.</td>
  </tr>
</table></div> 

#### Encryption Key Details	

##### **Key Type**
Settable if: The Network Action is "Add a New Network" and the Security Mode is "Personal"

Pivotal parm: Yes

Description: 
>Specify the type of encryption key to be used by the network. This key is only specified when the Security Mode is "Personal" since the "Open" Security Mode does not use encryption and the "Enterprise" Security Mode distributes keys automatically following Authentication.

>An encryption key can be specified using one of two methods: 

>* A hexadecimal value of the actual key
>* A passphrase that can be used to generate a key using a pre-defined algorithm

>The method that is used usually depends on the configuration of the Wi-Fi infrastructure that implements the network. This is because the key to be used must be known to both the Wi-Fi infrastructure and the client. Therefore, both must use a common method to specify that key.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Hex Key</td>
    <td>"HexKey" </td>
	<td>This indicates that the actual key used by the network to perform encryption will be specified.</td>
  </tr>
  <tr>
    <td>Passphrase</td>
    <td>"Passphrase"</td>
	<td>This indicates that a passphrase will be specified from which the actual key used by the network to perform encryption can be derived.</td>
  </tr>
</table>
</div>

##### **Protect Key**
Settable if: The Network Action is "Add a New Network" and the Security Mode is "Personal"

Pivotal parm: Yes

Description: 
>This enables encryption of the Key. 

>A Key, or the Passphrase used to generate a Key, is generally considered sensitive information since possession of the key for a network grants access to that network. Since the Key or Passphrase must be embedded within the XML, it is often desirable to encrypt the Key or Passphrase so it cannot be extracted and exploited if the XML is intercepted. The WPA Mode and the Key Type, which were previously specified, will determine what type of Key or Passphrase will need to be used. The value selected for the ProtectKey parm will deterime whether the Key or Passphrase will be specified in clear, unencrypted text or encrypted form.

##### **Passphrase**
Pivotal parm: No

Description: 
>When Key Type is Passphrase, then a Passphrase needs to be specified so it can be used to generate a Key. The type of Passphrase required will vary with the WPA Mode specified since it need to be either a WEP Passphrase or a WPA Passphrase.

> **Note:** Currently, the parm value encryption process is not documented and the key that is needed to encrypt is not published. Therefore, an MDM cannot currently use encrypted Keys or Passphrases since there is no way to store an encrypted, server-supplied password in an XML.

If WEP is selected and Protect Key is false:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Passphrase" *AND* the WPA Mode is "WEP" *AND* Protect Key is false
* Parm name: PassphraseWEPClear
* Parm value input rules: 
	* String with a minimum of 4 characters and a maximum of 32 characters

If WEP is selected and Protect Key is true:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Passphrase" *AND* the WPA Mode is "WEP" *AND* Protect Key is true
* Parm name: PassphraseWEPEncrypted
* Parm value input rules: 
	* String with a minimum of 4 characters and a maximum of 32 characters
* Currently, this parm cannot be used effectively by an MDM.
	
If WEP is not selected and Protect Key is false:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Passphrase" *AND* the WPA Mode is not "WEP" *AND* Protect Key is false
* Parm name: PassphraseWPAClear
* Parm value input rules: 
	* String with a minimum of 8 characters and a maximum of 63 characters

If WEP is not selected and Protect Key is true:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Passphrase" *AND* the WPA Mode is not "WEP" *AND* Protect Key is true
* Parm name: PassphraseWPAEncrypted
* Parm value input rules: 
	* String with a minimum of 8 characters and a maximum of 63 characters
* Currently, this parm cannot be used effectively by an MDM.
	
##### **Hex Key**
Pivotal parm: No

Description: 
>When Key Type is Hex Key, then a Key, which is expressed as a sequence of hexadecimal characters, needs to be specified. The type of Key required will vary based on the WPA Mode and Encryption Type specified, since it will need to be either a WEP 40 bit Key, a WEP 104 bit Key, or a 256 bit TKIP/AES-CCMP Key.

> **Note:** Currently, the parm value encryption process is not documented and the key that is needed to encrypt is not published. Therefore, an MDM cannot currently use encrypted Keys or Passphrases since there is no way to store an encrypted, server-supplied password in an XML.

If WEP is not selected and Protect Key is false:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Hex Key" *AND* the WPA Mode is not "WEP" *AND* Protect Key is false
* Parm name: HexKeyClear
* Description: Provide the hex key (64 hex chars) used by network
* Parm value input rules: 
	* String with exactly 64 valid hexadecimal characters (e.g. 0-9, A-F) that collectively specify a 256 bit binary key value that can be used for either TKIP or AES-CCMP encryption.
	
If WEP is not selected and Protect Key is true:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Hex Key" *AND* the WPA Mode is not "WEP" *AND* Protect Key is true
* Parm name: HexKeyEncrypted
* Description: Provide the hex key (64 hex chars) used by network
* Parm value input rules: 
	* String with exactly 64 valid hexadecimal characters (e.g. 0-9, A-F) that collectively specify a 256 bit binary key value that can be used for either TKIP or AES-CCMP encryption.
* Currently, this parm cannot be used effectively by an MDM.
	
If WEP is selected, the encryption type is WEP-40, and Protect Key is false:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Hex Key" *AND* the WPA Mode is "WEP" *AND* the Encryption Type is "WEP-40" *AND* Protect Key is false
* Parm name: HexKeyWep40Clear
* Description: Provide the shared secret WEP-40 key (10 hex chars) used by the network
* Parm value input rules: 
	* String with exactly 10 valid hexadecimal characters (e.g. 0-9, A-F) that collectively specify a 40 bit binary key value that can be used for either WEP encryption.
	
If WEP is selected, the encryption type is WEP-40, and Protect Key is true:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Hex Key" *AND* the WPA Mode is "WEP" *AND* the Encryption Type is "WEP-40" *AND* Protect Key is true
* Parm name: HexKeyWep40Encrypted
* Description: Provide the shared secret WEP-40 key (10 hex chars) used by the network
* Parm value input rules: 
	* String with exactly 10 valid hexadecimal characters (e.g. 0-9, A-F) that collectively specify a 40 bit binary key value that can be used for either WEP encryption.
* Currently, this parm cannot be used effectively by an MDM.
	
If WEP is selected, the encryption type is WEP-104, and Protect Key is false:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Hex Key" *AND* the WPA Mode is "WEP" *AND* the Encryption Type is "WEP-104" *AND* Protect Key is false
* Parm name: HexKeyWep104Clear
* Description: Provide the shared secret WEP-104 key (26 hex chars) used by the network
* Parm value input rules: 
	* String with exactly 26 valid hexadecimal characters (e.g. 0-9, A-F) that collectively specify a 104 bit binary key value that can be used for either WEP encryption.

If WEP is selected, the encryption type is WEP-104, and Protect Key is true:

* Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the Key Type is "Hex Key" *AND* the WPA Mode is "WEP" *AND* the Encryption Type is "WEP-104" *AND* Protect Key is true
* Parm name: HexKeyWep104Encrypted
* Description: Provide the shared secret WEP-104 key (26 hex chars) used by the network
* Parm value input rules: 
	* String with exactly 26 valid hexadecimal characters (e.g. 0-9, A-F) that collectively specify a 104 bit binary key value that can be used for either WEP encryption.
* Currently, this parm cannot be used effectively by an MDM.
	
##### **WEP Key Index**
Settable if: The Network Action is "Add a New Network" *AND* the Security Mode is "Personal" *AND* the WPA Mode is "WEP"

Pivotal parm: No

Parm name: WepKeyIndex

Description: 
>Some Wi-Fi infrastructure that implements a network using WEP encryption may support multiple WEP keys and a WEP index to indicate which key to use at any given time. 

> **Note:** Android does not currently support multiple WEP keys per network. Therefore, only the first WEP key (`wep[0]`) is supported. 

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
	</tr>
  <tr>
    <td>wep[0]</td>
    <td>"1"</td>
  </tr>
  <tr>
    <td>wep[1]</td>
    <td>"2"</td>
  </tr>
  <tr>
    <td>wep[2]</td>
    <td>"3"</td>
  </tr>
  <tr>
    <td>wep[3]</td>
    <td>"4"</td>
  </tr>
</table>
</div>

#### Use DHCP
Pivotal parm: Yes

Description: 

>When this parm is selected, DHCP will be used. When not selected, Static IP address is used.

>Most modern networks use DHCP to automatically assign IP Addresses to devices when they join the network. If DHCP is used, then all requisite IP Address information will be obtained automatically and no additional information will need to be provided.

>If DHCP cannot be used for a particular network, then all IP Address information that is needed to operate on that network will need to be specified. None of the following IP Address information parms can be left blank, but they may not all require meaningful values, depending on the network.

##### **Static IP Address**
Settable if: The Network Action is "Add a New Network" *AND* the "Use DHCP" box is not checked

Pivotal parm: No

Parm name: IpAddress

Description: 
>Provide the static IP address to be assigned to the device on this network. 

>When not using DHCP, a valid IP Address for the device to use on the network must be specified and that IP Address must not be assigned to any other device on the same network.

Parm value input rules: 

* Must be a valid IPV4 address, example: 191.168.0.1

##### **Gateway 1 IP Address**
Settable if: The Network Action is "Add a New Network" *AND* the "Use DHCP" box is not checked

Pivotal parm: No

Parm name: IpGateway1

Description: 
>Provide the IP address of the first gateway to the network.

>When not using DHCP, a valid Gateway IP Address may or may not be required. If there is a Gateway that can route traffic out of the current network, then the IP Address of that Gateway should be specified if the device will need to send traffic outside that network. If the network is essentially self-contained, then it may not be important what value is specified for this parm.

Parm value input rules: 

* Must be a valid IPV4 address, example: 191.168.0.1

##### **Subnet Mask**
Settable if: The Network Action is "Add a New Network" *AND* the "Use DHCP" box is not checked

Pivotal parm: No

Parm name: IpMask

Description: 
>Provide the subnet mask to be used on the network.

>When not using DHCP, a subnet mask must be specified that is consistent with the network and is consistent with the IP Address assigned to the device for use on that network.

Parm value input rules: 

* Must be a valid IPV4 subnet mask, example: 255.255.255.0

##### **DNS Server 1 IP Address**
Settable if: The Network Action is "Add a New Network" *AND* the "Use DHCP" box is not checked

Pivotal parm: No

Parm name: IpDns1

Description: 
>Provide the IP address of the first DNS server.

>When not using DHCP, a valid DNS Server IP Address may or may not be required. If there is a DNS Server that can resolve network names to IP Addresses on the current network, then the IP Address of that server should be specified if the device will need to resolve names for that network. If name resolution is not required, then it may not be important what value is specified for this parm.

Parm value input rules: 

* Must be a valid IPV4 address, example: 191.168.0.1

##### **DNS Server 2 IP Address**
Settable if: The Network Action is "Add a New Network" *AND* the "Use DHCP" box is not checked

Pivotal parm: No

Parm name: IpDns2

Description: 
>Provide the IP address of the second DNS server. When not using DHCP, a valid DNS Server IP Address may or may not be required. If there is a secondary DNS Server that can resolve network names to IP Addresses on the current network, then the IP Address of that server may be specified as a backup. If no alternate DNS Server is available or required, then it may not be important what value is specified for this parm.

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause the DNS Server 2 IP Address to not be set.

Parm value input rules: 

* Must be a valid IPV4 address, example: 191.168.0.1

#### Use Proxy
Pivotal parm: Yes

Description: 
>When selected, a Proxy is used for network connections. A proxy is a an intermediary service that routes HTTP requests and responses between clients on a device and another network (typically the internet or an intranet). When there is a proxy between the Wi-Fi network and some outer network, then HTTP-based applications, such as a Web Browser, may need to negotiate with that proxy to access the services of that outer network.

##### **Proxy Host Name**
Settable if: The Network Action is "Add a New Network" *AND* "Use Proxy" box is checked

Pivotal parm: No

Parm name: ProxyHostName

Description: 
>Provide the Host Name or IP Address of the computer on which the proxy is running. Host Name can be used only if the network provides suitable name resolution. Otherwise, an IP Address would need to be provided.

>Since different Wi-Fi networks may have different proxies connecting them to different outer networks, proxy information, if needed, must be configured for each network.

Parm value input rules: 

* String with a minimum of 1 characters and a maximum of 64 characters

##### **Proxy Port**
Settable if: The Network Action is "Add a New Network" *AND* "Use Proxy" box is checked

Pivotal parm: No

Parm name: ProxyPort

Description: 
>Provide the port number of the proxy server on the computer on which the proxy is running on which the proxy is listening.

##### **Bypass Proxy**
Settable if: The Network Action is "Add a New Network" *AND* "Use Proxy" box is checked

Pivotal parm: No

Parm name: BypassProxy

Description: 
>Once a proxy is configured for a given network, all HTTP traffic will generally be routed to the outer network via that proxy.  

>In some cases, it may be desirable to avoid routing selected Host Names or IP Addresses through the proxy. For example, you might want to access a local Web Server. This can be accomplished by listing the Host Names or IP Addresses for which the Proxy should be bypassed. To specify multiple Host Names or IP Addresses, separate them with commas.

Parm value input rules: 

* String with a maximum of 256 characters

##Example XML

### Managing Certificates Related to Wi-Fi Networks

#### Initialize the Android KeyStore

> **Note:** This must be done for a new device before you can install certificates.

Without a password

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CertMgr" version="4.2" >
			<parm name="CertAction" value="4"/>
		</characteristic>
	</wap-provisioningdoc>

With a password

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CertMgr" version="4.2" >
			<parm name="CertAction" value="4"/>
			<characteristic type="keystore-details">
				<parm name="KeystorePassword" value="password"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Remove a Certificate
	
	:::XML
	<wap-provisioningdoc>
		<characteristic type="CertMgr" version="4.2" >
			<parm name="CertAction" value="2"/>
			<characteristic type="cert-details">
				<parm name="CertAlias" value="certName1"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Install a CA certificate (.PEM file)

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CertMgr" version="4.2" >
			<parm name="CertAction" value="1"/>
			<characteristic type="cert-details">
				<parm name="CertAlias" value="certName2"/>
				<parm name="CertType" value="5"/>
				<parm name="CertMethod" value="2"/>
				<parm name="CertFileCA" value="/path/to/cert.pem"/>
				<parm name="CertAdjustClock" value="false"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Install a client certificate (.PEM file)

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CertMgr" version="4.2" >
			<parm name="CertAction" value="1"/>
			<characteristic type="cert-details">
				<parm name="CertAlias" value="certName2"/>
				<parm name="CertType" value="6"/>
				<parm name="CertMethod" value="2"/>
				<parm name="CertFileClient" value="/path/to/cert.pem"/>
				<parm name="CertAdjustClock" value="false"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Install a client certificate and private key (.PFX file)

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CertMgr" version="4.2" >
			<parm name="CertAction" value="1"/>
			<characteristic type="cert-details">
				<parm name="CertAlias" value="certName2"/>
				<parm name="CertType" value="8"/>
				<parm name="CertMethod" value="2"/>
				<parm name="CertFileClient" value="/path/to/cert.pem"/>
				<parm name="CertAdjustClock" value="false"/>
				<parm name="PrivateKeyPassword" value="pass"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Install a client certificate and private key (.P12 file)

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CertMgr" version="4.2" >
			<parm name="CertAction" value="1"/>
			<characteristic type="cert-details">
				<parm name="CertAlias" value="certName2"/>
				<parm name="CertType" value="9"/>
				<parm name="CertMethod" value="2"/>
				<parm name="CertFileClient" value="/path/to/cert.pem"/>
				<parm name="CertAdjustClock" value="false"/>
				<parm name="PrivateKeyPassword" value="pass"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Install a client certificate and private key (.PKCS12 file)

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CertMgr" version="4.2" >
			<parm name="CertAction" value="1"/>
			<characteristic type="cert-details">
				<parm name="CertAlias" value="certName2"/>
				<parm name="CertType" value="9"/>
				<parm name="CertMethod" value="10"/>
				<parm name="CertFileClient" value="/path/to/cert.pem"/>
				<parm name="CertAdjustClock" value="false"/>
				<parm name="PrivateKeyPassword" value="pass"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>
	
### Country Selection

#### Selecting a Country

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="1"/>
			<characteristic type="Regulatory">
				<parm name="Country" value="US"/>
			</characteristic>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
		</characteristic>
	</wap-provisioningdoc>

#### Using the Auto Option

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="1"/>
			<characteristic type="Regulatory">
				<parm name="Country" value="AUTO"/>
			</characteristic>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
		</characteristic>
	</wap-provisioningdoc>
	
### Band Selection

#### Set 2.4 GHz

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<characteristic type="Radio">
				<parm name="BandSelection" value="2.4GHz"/>
				<characteristic type="ChannelSelection">
					<parm name="2.4GHzChannels" value="1"/>
				</characteristic>
			</characteristic>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
		</characteristic>
	</wap-provisioningdoc>

#### Set 5.0 GHz

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<characteristic type="Radio">
				<parm name="BandSelection" value="5.0GHz"/>
				<characteristic type="ChannelSelection">
					<parm name="5.0GHzChannels" value="36"/>
				</characteristic>
			</characteristic>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
		</characteristic>
	</wap-provisioningdoc>

#### Set Auto (both 2.4 and 5.0 GHz)

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<characteristic type="Radio">
				<parm name="BandSelection" value="Auto"/>
				<characteristic type="ChannelSelection">
					<parm name="2.4GHzChannels" value="1"/>
					<parm name="5.0GHzChannels" value="36"/>
				</characteristic>
			</characteristic>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
		</characteristic>
	</wap-provisioningdoc>

	
### Add Wi-Fi Network

#### Adding an Open Network

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
			<parm name="NetworkAction" value="Add"/>
			<characteristic type="network-profile">
				<parm name="SSID" value="Zebra"/>
				<parm name="SecurityMode" value="0"/>
				<parm name="UseDHCP" value="1"/>
				<parm name="UseProxy" value="0"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Adding a Personal Network with WPA

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
			<parm name="NetworkAction" value="Add"/>
			<characteristic type="network-profile">
				<parm name="SSID" value="Zebra"/>
				<parm name="SecurityMode" value="1"/>
				<parm name="WPAMode" value="1"/>
				<characteristic type="key-details">
					<parm name="KeyType" value="Passphrase"/>
					<parm name="ProtectKey" value="0"/>
					<parm name="PassphraseWPAClear" value="KsdU6X3u"/>
				</characteristic>
				<parm name="UseDHCP" value="1"/>
				<parm name="UseProxy" value="0"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

	
#### Adding a Personal Network with WPA and TKIP

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
			<parm name="NetworkAction" value="Add"/>
			<characteristic type="network-profile">
				<parm name="SSID" value="Zebra"/>
				<parm name="SecurityMode" value="1"/>
				<parm name="WPAMode" value="1"/>
				<characteristic type="auth-details">
					<characteristic type="encryption-details">
						<parm name="EncryptionWPA" value="1"/>
					</characteristic>
				</characteristic>
				<characteristic type="key-details">
					<parm name="KeyType" value="Passphrase"/>
					<parm name="ProtectKey" value="0"/>
					<parm name="PassphraseWPAClear" value="KsdU6X3u"/>
				</characteristic>
				<parm name="UseDHCP" value="1"/>
				<parm name="UseProxy" value="0"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Adding a Personal Network with WPA2

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
			<parm name="NetworkAction" value="Add"/>
			<characteristic type="network-profile">
				<parm name="SSID" value="Zebra"/>
				<parm name="SecurityMode" value="1"/>
				<parm name="WPAMode" value="2"/>
				<characteristic type="key-details">
					<parm name="KeyType" value="Passphrase"/>
					<parm name="ProtectKey" value="0"/>
					<parm name="PassphraseWPAClear" value="KsdU6X3u"/>
				</characteristic>
				<parm name="UseDHCP" value="1"/>
				<parm name="UseProxy" value="0"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Adding a Personal Network with WPA/WPA2

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
			<parm name="NetworkAction" value="Add"/>
			<characteristic type="network-profile">
				<parm name="SSID" value="Zebra"/>
				<parm name="SecurityMode" value="1"/>
				<parm name="WPAMode" value="3"/>
				<characteristic type="key-details">
					<parm name="KeyType" value="Passphrase"/>
					<parm name="ProtectKey" value="0"/>
					<parm name="PassphraseWPAClear" value="KsdU6X3u"/>
				</characteristic>
				<parm name="UseDHCP" value="1"/>
				<parm name="UseProxy" value="0"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Adding a Personal Network with WEP

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
			<parm name="NetworkAction" value="Add"/>
			<characteristic type="network-profile">
				<parm name="SSID" value="Zebra"/>
				<parm name="SecurityMode" value="1"/>
				<parm name="WPAMode" value="4"/>
				<characteristic type="auth-details">
					<characteristic type="encryption-details">
						<parm name="EncryptionWEP" value="1"/>
					</characteristic>
				</characteristic>
				<characteristic type="key-details">
					<parm name="KeyType" value="Passphrase"/>
					<parm name="ProtectKey" value="0"/>
					<parm name="PassphraseWEPClear" value="KsdU6X3u"/>
					<parm name="WepKeyIndex" value="1"/>
				</characteristic>
				<parm name="UseDHCP" value="1"/>
				<parm name="UseProxy" value="0"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>
	
#### Adding an Enterprise Network with WPA

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
			<parm name="NetworkAction" value="Add"/>
			<characteristic type="network-profile">
				<parm name="SSID" value="Zebra"/>
				<parm name="SecurityMode" value="2"/>
				<parm name="WPAMode" value="1"/>
				<parm name="Authentication" value="1"/>
				<characteristic type="auth-details">
					<parm name="OptionalServerCertificate" value="serverCertName"/>
					<parm name="MandatoryClientCertificate" value="clientCertName"/>
				</characteristic>
				<parm name="UseDHCP" value="1"/>
				<parm name="UseProxy" value="0"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Adding an Enterprise Network with WPA2

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
			<parm name="NetworkAction" value="Add"/>
			<characteristic type="network-profile">
				<parm name="SSID" value="Zebra"/>
				<parm name="SecurityMode" value="2"/>
				<parm name="WPAMode" value="2"/>
				<parm name="Authentication" value="1"/>
				<characteristic type="auth-details">
					<parm name="OptionalServerCertificate" value="serverCertName"/>
					<parm name="MandatoryClientCertificate" value="clientCertName"/>
				</characteristic>
				<parm name="UseDHCP" value="1"/>
				<parm name="UseProxy" value="0"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Adding an Enterprise Network with WPA/WPA2

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
			<parm name="NetworkAction" value="Add"/>
			<characteristic type="network-profile">
				<parm name="SSID" value="Zebra"/>
				<parm name="SecurityMode" value="2"/>
				<parm name="WPAMode" value="3"/>
				<parm name="Authentication" value="1"/>
				<characteristic type="auth-details">
					<parm name="OptionalServerCertificate" value="serverCertName"/>
					<parm name="MandatoryClientCertificate" value="clientCertName"/>
				</characteristic>
				<parm name="UseDHCP" value="1"/>
				<parm name="UseProxy" value="0"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

#### Adding an Enterprise Network with WEP

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Wi-Fi" version="4.4" >
			<parm name="UseRegulatory" value="0"/>
			<parm name="UseDiagnosticOptions" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
			<parm name="NetworkAction" value="Add"/>
			<characteristic type="network-profile">
				<parm name="SSID" value="Zebra"/>
				<parm name="SecurityMode" value="2"/>
				<parm name="WPAMode" value="4"/>
				<parm name="Authentication" value="1"/>
				<characteristic type="auth-details">
					<characteristic type="encryption-details">
						<parm name="EncryptionWEP" value="1"/>
					</characteristic>
					<parm name="OptionalServerCertificate" value="serverCertName"/>
					<parm name="MandatoryClientCertificate" value="clientCertName"/>
				</characteristic>
				<parm name="UseDHCP" value="1"/>
				<parm name="UseProxy" value="0"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>


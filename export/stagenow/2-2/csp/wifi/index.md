---
title:  Wi-Fi
---

## About Wi-Fi

### Overview

The Wi-Fi setting type allows you to manage device Wi-Fi settings as well as the network profiles to use for connecting and remembering networks.

>Note: In order to apply settings, Wi-Fi must be enabled. If you do not specify WiFi Enable in the profile you receive an error when attempting to apply other settings if the device Wi-Fi is not already enabled.

### Main Functionality

* Enable/Disable Wi-Fi
* Set Wi-Fi to Never Sleep
* Set Wi-Fi to Never Sleep When Plugged In
* Set Wi-Fi to Always Sleep
* Enable/Disable Network Notifications
* Auto/Manual Country Selection
* Set the RF Band
* Enable Auto RF Band Selection
* Enable the Device to set the Clock off the AP (Access Point) Time
* Enable/Disable HF SR (Hyper Fast Secure Roam)
* Enable/Disable CCKM (Cisco Centralized Key Management)
* Enable/Disable FT (Fast Transition)
* Enable/Disable FTRIC (Fast Transition Resource Request)
* Enable/Disable OKC (Opportunistic Key Caching)
* Enable/Disable PreAuth
* Set Power Saving Mode to Fast Power Savings
* Set Power Savings Mode to Always Active
* Set Power Savings Mode to Maximum Power Savings
* Enable/Disable Advanced Logging
* Enable/Disable FIPS Compliance
* Enable/Disable Restricted WLAN Settings UI
* Add/Remove a Wi-Fi Network
* Connect to a Wi-Fi Network
* Disconnect from a Wi-Fi Network
* Enable/Disable an Existing Wi-Fi Network
* Disable all Existing Wi-Fi Networks
* Remove all Existing Wi-Fi Networks

##Parameter Notes
### Wi-Fi Enable
Enable or disable Wi-Fi Radio.

>Note: In order to apply other settings, Wi-Fi must be enabled. If you do not specify WiFi Enable in the profile you receive an error when attempting to apply other settings if the device Wi-Fi is not already enabled.

* Do not change - Use the current device configuration
* Enable - Enable the Wi-Fi radio
* Disable - Disable the Wi-Fi radio

### Country Selection Auto/Manual
Leave this option unchecked to allow the router or access point setting to determine the country. To manually select the country, select the checkbox, and then select a country from the drop-down menu.

### Country
This is the country to use for Wi-Fi regulatory setting. 802.11d is not enabled if you select 'U.S.A' in the Country drop-down. When you choose 'AUTO' in the drop-down, 802.11d is enabled. 

### RF Band
This specifies the 802.11 band(s) to use.

* Unchanged - Use the current device configuration.
* 2.4GHZ - Enable 2.4GHz band
* 5.0GHZ - Enable 5.0GHz band
* Auto - Enable both bands and connect automatically to either.

### Wi-Fi Channel
* 2.4GHz Channels - enable the specified channels in the 2.4GHz band. 
	* String containing a set of valid channels. Comma separated and may contain a range specified with a dash '-'. Example: 1,7-10
* 5.0GHz Channels - enable the specified channels in the 5.0GHz band.
	* String containing a set of valid channels. Comma separated and may contain a range specified with a dash '-'. Example: 36-60

### Sleep Policy
Specifies the state of the Wi-Fi radio when the device suspends.	

* Do not change - Use the current device configuration.
* Always Sleep - Power down the Wi-Fi radio.
* Never Sleep When Plugged - Leave Wi-Fi radio powered while it is connected to A/C power and power down the Wi-Fi radio while it is on battery.
* Never Sleep - Leave Wi-Fi radio powered.

### Network Notification
Specifies whether or not to notify the user when a open network comes in range.

* Do not change - Use the current device configuration.
* Use network notification - Notify the user when a network comes in range.
* Do not use network notification - Don't notify the user when a network comes in range.

### Network Action
Manages the network profiles on the device.

* Add a New Network - Add a new profile with the provided profile settings.
* Remove an Existing Network - Remove the a network profile based on the SSID.
* Connect to an Existing Network - Initiate a connection to the network based on the SSID.
* Disconnect from an Existing Network - Disconnect from a network based on the SSID.
* Enable an Existing Network - Enable a network profile based on the SSID.
* Disable an Existing Network - Disable a network profile based on the SSID.
* Disable All Existing Networks - Disable all network profiles.
* Remove All Existing Networks - Remove all network profiles.

### Wi-Fi Profiles
Parameters used for adding a network. SSID identifies the network profile to act upon when choosing '... an Existing Network' network action above.

* SSID - The SSID name of the network
* Security Mode 
	* Open - Open network
	* Personal - PSK or WEP
	* Enterprise - 802.1x EAP profiles
* WPA Mode - WPA mode used by the network, e.g., WPA, WPA2, WPA/WPA2, WEP.
>Note: WEP is not supported with Enterprise Security Mode. It is only supported using Personal Security Mode.

* Authentication Mode - Authentication mode used by the network. Used with Enterprise Security Mode. E.g., EAP-TLS, EAP-FAST-GTC, EAP-FAST-MSCHAPV2, EAP-TTLS-PAP, EAP-TTLS-MSCHAP, EAP-TTLS-MSCHAPV2, LEAP, PEAP-MSCHAPV2, PEAP-GTC
* DHCP - Select to use DHCP. When not selected, Static IP address is used and you must provide IP address settings, e.g., Static IP Address, Gateway IP Address, Subnet Mask, DNS Server IP Address.
* Proxy - Select to use a proxy for network connections. Provide proxy settings. E.g., Proxy Host Name, Port, Bypass Proxy

### Encryption Details
* Encryption Type - Type of encryption the network uses. The values in this drop-down changes based on the WPA Mode selected, e.g., TKIP, AES-CCMP, AES-CCMP/TKIP, WEP-40, WEP-104.
* Key Type - Passphrase or Hex Key.
* Protect Key - Enables encryption of the Key.
* Web Key Index - Only `wep[0]` is a valid option.

### Authentication Details
Specific authentication settings when Enterprise Mode and specific Authentication modes are selected.

* Identity - The name to use to join the network.
* Server Certificate - The name of the certificate alias to use to verify the server (optional).
* Client Certificate - The name of the certificate alias to use to join the network (mandatory).
* Anonymous Identity - The anonymous identity to use to join the network.
* Password - The password to use to connect to the network.
* Protect Password - Encrypt the password.

#### EAP-TLS and Certificate Alias 
Due to current limitations of the Certificate Manager setting type (in an EAP-TLS scenario), it is not possible to "override" the alias assigned to a client certificate and Private Key when they are installed into the Android KeyStore.

The only way to determine the actual alias assigned to a client certificate and Private Key when they are installed into the Android KeyStore is to examine the Android KeyStore after installation to determine which Alias was used:

* The same alias is ALWAYS assigned to a given client certificate and Private Key, no matter when, or on which device, it is installed.

* Whenever a different client certificate is used, a different alias is generally assigned to the client certificate and Private Key.

##### Manually Determining the Certificate Alias
You can use a device to capture the alias used for the certificate being installed. It is recommended that you clear the keystore before performing these steps (Settings > Security > Clear Credentials).

1. Use Certificate Manager to install the certificate onto a device.
2. Navigate to Settings > Wi-Fi >+ to add a network.
3. Scroll to security, tap and select 802.1x EAP.
4. Scroll to EAP method, tap and select TLS.
5. Scroll to client certificate, tap and note a drop-down box with "(unspecified)" and the alias of the installed certificate. The alias listed can become the value to use as the certificate when using WiFiConfig to configure a profile that uses EAP-TLS.

### Advanced Options

>Note: You must follow these steps in order to use the Advanced Options under the WiFi setting:
>
>* PMKID must be enabled in order to enable PreAuth (PreAuth =1 and PMKID =1)
>* FT must be enabled in order to enable FTRIC (FT=1 and FTRIC =1)
>* OKC must be disabled (OKC =0 and PMKID =1) in order to use PMKID caching
>
> Important Note: You must use the default Fast Power Savings value for the Power Save parameter under Advanced Options. Using the Do Not Change value results in failure.

* AutoTimeConfig - Enable AutoTimeConfig feature. Updates device timestamp based on Symbol IE in 802.11 beacon. This is a Symbol-specific feature.
* HFSR - Hyper Fast Secure Roam (HFSR) is Symbol's fast roam algorithm. 
* CCKM - Enable / disable CCX roam algorithm (CCKM).
* FT - Enable / disable Fast Transition roam algorithm (802.11r).
* FTRIC - Enable / disable Fast Transition Resource Request (802.11r).
* OKC - Enable / disable Opportunistic Key Caching (OKC).
* PMKID - Enable / disable PMKID Caching. Disable OKC and enable PMKID in order for PMKID caching to work.
* PreAuth - Enable / disable 802.1x Pre-Authentication.
* PowerSave - Configure different Power Save modes of radio.
	* Do not change - Use the current device configuration.
	* Always Active - Keep the radio active.
	* Fast Power Savings - Keep the radio in Auto Power Save.
	* Maximum Power Savings - Keep the radio in Auto Power Save.
* Advanced Logging - Start or stop advanced Wi-Fi logging.
* FIPS - Enable / disable FIPS data in motion supported in WLAN. WLAN FIPS 140-2, level 1 compliance.
* Enable Restricted Settings UI - Enable to place the Wi-Fi settings in Read-Only mode.


## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=Wi-Fi&os=All&embed=true"></iframe> 


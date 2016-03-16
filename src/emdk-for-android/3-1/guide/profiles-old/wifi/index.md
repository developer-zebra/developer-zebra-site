---
title: Wi-Fi Manager Profile Feature Reference
layout: guide.html
product: EMDK For Android
productversion: '2.3'
---

## Overview

The Wi-Fi feature allows you to manage your devices Wi-Fi settings as well as manage the network profiles to be used for connecting and remembering networks.

>Note: In order for settings to be applied, Wi-Fi must be enabled. If you do not specify WiFi Enable in the profile you will get an error when attempting to apply other settings if the device's Wi-Fi is not already enabled.

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](../../../api/core/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](../usingwizard) for more information.

## Main Functionality

* Enable Wi-Fi
* Disable Wi-Fi
* Set Wi-Fi to Never Sleep
* Set Wi-Fi to Never Sleep When Plugged In
* Set Wi-Fi to Always Sleep
* Use Network Notifications
* Do Not User Network Notifications
* Enable Auto Country Selection
* Manually Select country
* Set the RF Band
* Enable Auto RF Band Selection
* Enable the Device to set the Clock off the AP (Access Point) Time
* Enable HF SR (Hyper Fast Secure Roam)
* Disable HR SR (Hyper Fast Secure Roam)
* Enable CCKM (Cisco Centralized Key Management)
* Disable CCKM (Cisco Centralized Key Management)
* Enable FT (Fast Transition)
* Disable FT (Fast Transition)
* Enable FTRIC (Fast Transition Resource Request)
* Disable FTRIC (Fast Transition Resource Request)
* Enable OKC (Opportunistic Key Caching)
* Disable OKC (Opportunistic Key Caching)
* Enable PreAuth
* Disable PreAuth
* Set Power Saving Mode to Fast Power Savings
* Set Power Savings Mode to Always Active
* Set Power Savings Mode to Maximum Power Savings
* Enable Advanced Logging
* Disable Advanced Logging
* Enable FIPS Compliance
* Disable FIPS Compliance
* Enable Restricted WLAN Settings UI
* Disable Restricted WLAN Settings UI
* Add a Wi-Fi Network
* Remove a Wi-Fi Network
* Connect to a Wi-Fi Network
* Disconnect from a Wi-Fi Network
* Enable an Existing Wi-Fi Network
* Disable an Existing Wi-Fi Network
* Disable all Existing Wi-Fi Networks
* Remove all Existing Wi-Fi Networks


## Wi-Fi Enable
Enable Disable Wi-Fi Radio.

>Note: In order for other settings to be applied, Wi-Fi must be enabled. If you do not specify WiFi Enable in the profile you will get an error when attempting to apply other settings if the device's Wi-Fi is not already enabled.

* Do not change - will use whatever the device is currently configured as.
* Enable - enabled the Wi-Fi radio
* Disable - disabled the Wi-Fi radio

## Country Selection Auto/Manual
By leaving this option unchecked, the country may be determined by the router or access point setting. To manually select the country, you should select the checkbox. When doing this a country drop-down will appear.

## Country
Country to use for Wi-Fi regulatory setting. 802.11d will not be enabled if you select 'U.S.A' in the Country drop-down. When you choose 'AUTO' in the drop-down, 802.11d will be enabled. 

## RF Band
Specifies the 802.11 band(s) to use.

* Unchanged - will use whatever the device is currently configured as.
* 2.4GHZ - enable 2.4GHz band
* 5.0GHZ - enable 5.0GHz band
* Auto - enable both bands and connect automatically to either.

## Wi-Fi Channel
* 2.4GHz Channels - enable the specified channels in the 2.4GHz band. 
    * String containing a set of valid channels. Comma separated and may contain a range specified with a dash '-'. Example: 1,7-10
* 5.0GHz Channels - enable the specified channels in the 5.0GHz band.
    * String containing a set of valid channels. Comma separated and may contain a range specified with a dash '-'. Example: 36-60

## Sleep Policy
Specifies the state of the Wi-Fi radio when the device suspends.    

* Do not change - will use whatever the device is currently configured as.
* Always Sleep - Power down the Wi-Fi radio.
* Never Sleep When Plugged - Leave Wi-Fi radio powered while it is connected to A/C power and power down the Wi-Fi radio while it is on battery.
* Never Sleep - Leave Wi-Fi radio powered.

## Network Notification
Specifies whether or not to notify the user when a open network comes in range.

* Do not change - will use whatever the device is currently configured as.
* Use network notification - Notify the user when a network comes in range.
* Do not use network notification - Don't notify the user when a network comes in range.

## Network Action
Used to manage the network profiles on the device.

* Add a New Network - will add a new profile with the provided profile settings.
* Remove an Existing Network - will remove the a network profile based on the SSID.
* Connect to an Existing Network - will initiate a connection to the network based on the SSID.
* Disconnect from an Existing Network - will disconnect from a network based on the SSID.
* Enable an Existing Network - will enable a network profile based on the SSID.
* Disable an Existing Network - will disable a network profile based on the SSID.
* Disable All Existing Networks - will disable all network profiles.
* Remove All Existing Networks - will remove all network profiles.

## Wi-Fi Profiles
Parameters used for adding a network. SSID is used to identify the network profile to be acted on when choosing an '... an Existing Network' network action above.

* SSID - the SSID name of the network
* Security Mode 
    * Open - Open network
    * Personal - PSK or WEP
    * Enterprise - 802.1x EAP profiles
* WPA Mode:  WPA mode used by the network. Ex: WPA, WPA2, WPA/WPA2, WEP
>Note: WEP is not supported with a Enterprise Security Mode. It is only supported using Personal Security Mode.

* Authentication Mode: Authentication mode used by the network. used with Enterprise Security Mode. Ex: EAP-TLS, EAP-FAST-GTC, EAP-FAST-MSCHAPV2, EAP-TTLS-PAP, EAP-TTLS-MSCHAP, EAP-TTLS-MSCHAPV2, LEAP, PEAP-MSCHAPV2, PEAP-GTC
* DHCP: When selected DHCP will be used. When not selected, Static IP address is used and IP address settings should be provided ex: Static IP Address, Gateway IP Address, Subnet Mask, DNS Server IP Address
* Proxy: When selected, a Proxy is used for network connections. Proxy settings should be supplied. Ex: Proxy Host Name, Port, Bypass Proxy

## Encryption Details
* Encryption Type: Type of encryption used by the network. The values in this drop-down will change based on the WPA Mode selected. Ex: TKIP, AES-CCMP, AES-CCMP/TKIP, WEP-40, WEP-104
* Key Type: Passphrase or Hex Key
* Protect Key: Enables encryption of the Key
* Web Key Index: Only `wep[0]` is a valid option

## Authentication Details
Specific authentication settings when Enterprise Mode and specific Authentication modes are selected.

* Identity - the name that should be used to join the network.
* Server Certificate - the name of the certificate alias that should be used to verify the server (Optional).
* Client Certificate - the name of the certificate alias that should be used to join the network (Mandatory).
* Anonymous Identity - the anonymous identity to be used to join the network.
* Password - the password to be used to connect to the network.
* Protect Password - when selected will encrypt the password.

### EAP-TLS and Certificate Alias 
Due to current limitations of the Certificate Manager Feature (in an EAP-TLS scenario), it is not possible to "override" the Alias that is assigned to a Client Certificate and Private Key when they are installed into the Android KeyStore

The only way to determine the actual Alias that is assigned to a Client Certificate and Private Key when they are installed into the Android KeyStore is to examine the Android KeyStore after installation to determine which Alias was used:

1. The same Alias will ALWAYS be assigned to a given Client Certificate and Private Key, no matter when, or on which device, it is installed

2. Whenever a different Client Certificate is used, a different Alias will generally be assigned to the Client Certificate and Private Key

#### Manually Determining the Certificate Alias
A device can be used to capture the alias being used for the certificate being installed. It is recommended that the key store be cleared before performing these steps (Settings->Security->Clear Credentials)

1. Use Certificate Manager to install the certificate onto a device.
2. Navigate to Settings->Wi-Fi->'+'' to add a network
3. Scroll to security, tap and select 802.1x EAP
4. Scroll to EAP method, tap and select TLS
5. Scroll to client certificate, tap and note a drop down box with "(unspecified)" and the alias of the installed certificate. The alias listed can become the value to use as the certificate when using WiFiConfig to configure a profile that uses EAP-TLS.

## Advanced Options

>Note: The following steps must be followed in order to use the Advanced Options under the WiFi feature:
>
>* PMKID must be enabled in order to enable PreAuth (PreAuth =1 and PMKID =1)
>* FT must be enabled in order to enable FTRIC (FT=1 and FTRIC =1)
>* OKC must be disabled (OKC =0 and PMKID =1) in order to use PMKID caching
>
> Important Note: The default "Fast Power Savings" value must be used for the "Power Save" parameter under the Advanced Options. Using the "Do Not Change" value will result in failure.

* AutoTimeConfig- Enable AutoTimeConfig feature. Updates device timestamp based on based on Symbol IE in 802.11 beacon. This is a Symbol specific feature.
* HFSR - Hyper Fast Secure Roam (HFSR) is a Symbol's fast roam algorithm. 
* CCKM - This is to enable / disable CCX roam algorithm (CCKM).
* FT - This is to enable / disable Fast Transition roam algorithm (802.11r).
* FTRIC - This is to enable / disable Fast Transition Resource Request (802.11r).
* OKC- This is to enable / disable Opportunistic Key Caching (OKC).
* PMKID - This is to enable / disable PMKID Caching. We need to disable OKC and enable PMKID for PMKID caching to work.
* PreAuth- This is to enable / disable 802.1x Pre-Authentication.
* PowerSave - This option is to configure different Power Save Modes of Radio.
    * Do not change - will use whatever the device is currently configured as.
    * Always Active: This will keep the radio in active
    * Fast Power Savings: This will keep the radio in Auto Power Save.
    * Maximum Power Savings: This will keep the radio in Auto Power Save.
* Advanced Logging - Start or Stop advanced Wi-Fi logging.
* FIPS - We can use this option to enable disable FIPS data in motion supported in WLAN. WLAN FIPS 140-2, level 1 compliance.
* Enable Restricted Settings UI - When enabled the Wi-Fi settings will be in Read-Only mode.

## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=Wi-Fi&os=All&embed=true"></iframe> 












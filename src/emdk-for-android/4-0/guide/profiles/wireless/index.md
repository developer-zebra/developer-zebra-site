---
title:  Wireless Manager Profile Feature Reference
---

## Overview

The Wireless Manager allows you to configure wireless configurations on your device. (Ex. Configure device's Bluetooth)  

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](/emdk-for-android/3-1/api/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](/emdk-for-android/3-1/guide/profiles/usingwizard) for more information.

## Main Functionality

* Enable/Disable Bluetooth
* Turn on/off Bluetooth
* Turn on/off NFC
* Turn on/off GPS
* Turn on/off WWAN (Wireless WAN)


## Bluetooth
This profile feature allows your application to enable or disable usage of bluetooth on a device.

### Turn on/off Bluetooth
This profile feature allows your application to turn on or off a devices bluetooth radio. Bluetooth must be enabled
before turning it on.

## NFC
This profile feature allows your application to turn on or off a devices NFC radio.

## GPS
This profile feature allows your application to turn on or off a devices GPS radio.

## WWAN 
This profile feature allows your application to turn on or off a devices WAN (Wireless WAN) radio.


## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=WirelessMgr&os=All&embed=true"></iframe> 




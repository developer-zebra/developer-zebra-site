---
title:  USB Manager Profile Feature Reference
---
# USB Manager Profile Feature Reference

## Overview

The USB Manager feature allows you to manage USB configurations of your device.

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](../api/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](../guide/profiles/usingwizard) for more information.

## Main Functionality

* Enable/Disable USB Module Usage
* Enable/Disable External USB Storage
* Enable/Disable ADB (Android Debug Bridge) Over USB
* Enable/Disable Device Storage Access over USB
* Enable/Disable the Ability to Access the Device Using USM (USB Mass Storage) Mode
* Enable/Disable the Ability to Access the Device Using MTP (Media Transfer Protocol) Mode
* Enable/Disable the Ability to Access the Device Using PTP (Picture Transfer Protocol) Mode

## USB Module Usage
Enabling this feature would allow the use of external USB modules such as a barcode scanner module.  Disabling this feature will disable the use of any usb module attached to the device.

## External USB Storage
Enabling this feature would allow the device to access data an external USB mass storage device such as a flash drive through an OTG cable. Disabling would prevent access to an attached USB mass storage device.

## ADB Over USB
Enabling this feature will allow ADB (Android Debug Bridge)  access to a device from an external workstation via USB. Disabling would prevent adb connections to a device.

## Device Storage Access over USB
Enabling this feature would allow access to a devices storage via protocols such as USM, MTP and PTP. Disabling this feature would restrict any access to a devices storage via USB.

## USB Mass Storage Mode
Enabling the USM protocol would allow an external workstation to mount a devices storage, which disables a devices access to that storage until unmounted.  Device Storage Access over USB must first be enabled.

## Media Transfer Protocol Mode
Enabling the MTP protocol would allow an external workstation to access a devices storage without blocking the devices access to that storage.  Device Storage Access over USB must first be enabled.

## Picture Transfer Protocol Mode
Enabling the PTP protocol would allow an external workstation to access a devices storage without blocking the devices access to that storage.  Device Storage Access over USB must first be enabled.


## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=UsbMgr&os=All&embed=true"></iframe> 



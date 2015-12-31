---
title: Threat Manager
description: The Threat Manager allows an application to control the security threats a device actively monitors and how it responds.
---

## Overview
The Threat Manager feature allows an application to control the security threats a device actively monitors and how it responds.

## Main Functionality

* Enable Threat Detection
* Disable Threat Detection
* Perform Counter Measures when a Threat is Detected

##Enable/Disable
This profile feature will allow your application to enable or disable Threat detection on a device.

##Detectable threats:
* **Max Password Attempts** - User tries to login with with the wrong password
* **MDM Client Removal** - MDM client has been removed from the device
* **MDM Client Package Name** - Provide the package name of the MDM client to be observed (System app only)
* **Externally Detected** - An intent has been received that signifies and a custom threat
* **Exchange Active Sync Command** - While syncing with Exchange, and threat event occurred
* **Device is Rooted** - Device has detected that it is rooted

##Counter Measures
* **Format SdCard** - This counter measure would format the external SDCard, all existing data on card would be lost.

* **Factory Reset** - This counter measure would force the device to factory reset. Returning the device to its original configuration. 

* **Wipe Secure Storage Keys** - This counter measure would remove Secure Storage Keys

* **Lock Device** - This counter measure would lock the device, requiring the user to perform any device unlock procedure configured for the device.

* **Uninstall Application** - This counter measure would silently remove an application from the device. Provide the package name of the application to uninstall. 

* **Unsolicited Alert** - This counter measure would send an explicit intent to an application. Provide and alert message, and the package and class name of the application you would like to notify.

* **Signal Occurrence of Threat** - Select whether the occurrence of an externally detected Threat should be signaled.
* **Send Threat message** - Provide a message to be sent, stating what custom threat has occurred. 



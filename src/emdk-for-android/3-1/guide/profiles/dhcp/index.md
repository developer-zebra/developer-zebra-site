---
title:  DHCP Option Manager Profile Feature Reference
---

## Overview

The DHCP Option Manager feature allows you to control various DHCP configuration options.

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](/emdk-for-android/3-1/api/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](/emdk-for-android/3-1/guide/profiles/usingwizard) for more information.

## Main Functionality

* Option code 12
* Option code 77
* Option code 28
* Option code 42

##Option code 12
* **Send Host Name**
	* Host Name Option Value - Specify the host name you would like the client to send.

>Note: HostName identifies a client on a network.

##Option code 77
* **Send User Class**
	* User Class Value - Specify the Class name you would like to send

>Note: The class name value would allow a DHCP server to select an appropriate address pool to assign an address to the client and appropriate configuration parameters.

##Option code 28
* **Request Broadcast Address**

##Option code 42
* **Request NTP Server**
* **Request TFTP Server Name**
* **Request Boot File Name**
* **Request Domain Search**
* **Request TFTP Server Address**


## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=DHCPMgr&os=All&embed=true"></iframe> 





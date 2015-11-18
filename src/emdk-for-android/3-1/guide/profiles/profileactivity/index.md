---
title:  Activity Selection Profile Feature Reference
---

## Overview

When creating a profile for [Barcode](/emdk-for-android/3-1/guide/profiles/profilebarcode) or [MSR](/emdk-for-android/3-1/guide/profiles/profilemsr) data capture you can configure an Activity Selector to automate the process of activating and deactivating the profile. This allows for automated profile management of complex applications. 

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](/emdk-for-android/3-1/api/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](/emdk-for-android/3-1/guide/profiles/usingwizard) for more information.

##Activity Selector

* Applications - List of applications this profile may be active during. 
	* Applications names are the formal package definition of the application. For example "com.symbol.profiledatacapturesample1". 
* Activities -  List of activities within the selected application that a profile should be active for. 
	*  For Example "MainActivity".

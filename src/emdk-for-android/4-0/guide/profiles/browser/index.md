---
title:  Browser Manager Profile Feature Reference
---

## Overview

The Browser Manager feature allows your application to control the web browser on the device. For example you can set the browser homepage. 

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](/emdk-for-android/3-1/api/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](/emdk-for-android/3-1/guide/profiles/usingwizard) for more information.

## Main Functionality
* Set Default homepage
* Turn on/off Remember Password
* Turn on/off save form data

## Set Default homepage
When entering a url for the homepage, limit the string to 2000 characters.

## Remember Password
The Android browser can save and recall values placed in a password field. This profile feature will 
allow you to enable/disable the browsers password save/recall feature.


## Save form data
The Android browser can save and recall values placed into form fields. This profile feature will 
allow you to enable/disable the browsers form field save/recall feature.

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=BrowserMgr&os=All&embed=true"></iframe> 





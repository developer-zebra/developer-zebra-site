---
title:  UI Manager Profile Feature Reference
---

## Overview

The UI Manager feature allows you to manage UI configurations using its UI Manager parameters. 

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](../../../api/core/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](../usingwizard) for more information.

## Main Functionality

* Enable/Disable Clipboard
* Clear Clipboard 
* Enable/Disable Auto Correct
* Enable/Disable Home Key
* Enable/Disable Bluetooth Paring Popup
* Set Current Local
* Set Default Input Method 


## Clipboard
This profile feature allows your application to enable or disable a devices clipboard.


### Clear Clipboard
This profile feature allows your application to clear a devices clipboard.

* Check Box is marked: Clear the clipboard.
* Check Box is not marked: Don't clear the clipboard (leave unchanged).

##Auto Correct
This profile feature allows your application to enable or disable a devices Auto Correct feature.

##Home Key
This profile feature allows your application to enable or disable a devices Home Key.

##Bluetooth Paring Popup








##Set Current Local
This profile feature allows your application to set a devices local to one of the following values.

  * Canada
  * Canada French
  * China 
  * Chines
  * English 
  * France
  * French
  * German
  * Germany
  * Italian
  * Italy
  * Japan
  * Japanese
  * Korea
  * Korean
  * PRC
  * Simplified Chines
  * Taiwan 
  * Traditional Chines
  * UK
  * US

##Set Default Input Method 
This profile feature allows your application to set a devices Input Method to one of the following.
  * English (US)
  * Japanese
  * Chinese (China)
  * User Defined Input Method


## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=UiMgr&os=All&embed=true"></iframe> 




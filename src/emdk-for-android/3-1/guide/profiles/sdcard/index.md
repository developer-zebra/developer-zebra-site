---
title:  SDCard Manager Profile Feature Reference
---
# SDCard Manager Profile Feature Reference


## Overview

The SdCard Manager allows your application to manage the use of the devices SD card.

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](../api/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](../guide/profiles/usingwizard) for more information.

## Main Functionality

* Enable/Disable SdCard


##Enable/Disable
This profile feature will allow your application to enable or disable use of external SDCards.

## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=SdCardMgr&os=All&embed=true"></iframe> 
---
title: Component Manager Profile Feature Reference
layout: guide.html
product: EMDK For Android
productversion: '2.3'
---

## Overview

The Component Manager feature allows you to manage the state of Components, such as a devices Ethernet Port.

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](../../../api/core/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](../usingwizard) for more information.

## Main Functionality

* EthernetUsage
* EthernetState

## EthernetUsage
This feature can be used to enable or disable Ethernet Port Usage.

**Options**:

* Enable
* Disable

## EthernetState
Once an Ethernet Port Usage enabled, This feature can be used to turn the Ethernet Port On or Off.

**Options**:

* On
* Off


## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=ComponentMgr&os=All&embed=true"></iframe>










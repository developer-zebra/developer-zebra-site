---
title: OEMConfig Set-up
layout: guide.html
product: OEMConfig
productversion: '9.1'
menu:
  items:
    - title: About
      url: /oemconfig/9-1/about
    - title: Setup
      url: /oemconfig/9-1/setup
    - title: FAQs
      url: /oemconfig/9-1/faq
    - title: Managed Configurations
      url: /oemconfig/9-1/mc
    - icon: fa fa-search
      url: /oemconfig/9-1/search
---

## Overview

Zebra OEMConfig is an administrative tool for performing Actions and settings configurations on Zebra devices running Android. OEMConfig works with Zebra's [Mobility Extensions Management System (known simply as MX)](/mx/overview), an XML-based communication framework for managing the capabilities and behaviors of Zebra devices. 

OEMConfig is not pre-installed on Zebra devices; it must be installed through the Google Play store or downloaded from Zebra.com and pushed to the device via ADB before   

### System Requirements

* **Fully managed Zebra device(s)** with Android 7.x (Nougat) or higher
* **MX 9.1 or higher*** on device(s). [Which version is installed?](/mx/mx-version-on-device)
* A [UEM or EMM](../faq) system with support for [OEMConfig-compliant admin tools](../faq)

&#42;_OEMConfig works on devices with MX versions prior to 9.1, but attempts to access features implemented in later MX versions will result in error(s). See the [MX Feature Matrix](/mx) for a complete list of features in each MX version_. 

### Download and install

Google Play
etc. 

-----

## See Also

* **[FAQ](../faq)** | Frequently asked questions about OEMConfig 
* **[OEMConfig Managed Configurations](../mc)** | Descriptions of all configurable functions

<!-- 

**Managed Configurations can**:

* Be defined and published by any application developer. 
* Be used by an app to configure its own settings. 
* Be used by an EMM agent **<u>to configure device settings</u>**. 
* Be discovered and acted upon by an EMM agent or server.
* Be used by an EMM Server through its EMM agent and a data-driven UI.


**<u>The major advantage of the [AEDO+ZMC](../port/#unsigneddodaagentzmc) method is universality</u>; it allows a single agent to work with <u>any</u> Android device in the future**, regardless of brand. In the past, EMM vendors were required to develop and maintain multiple agents to support the proprietary management mechanisms required for each brand of device they chose to target. 

<img alt="image" style="height:350px" src="../port/timeline.jpg"/>
_Click image to enlarge_. 
<br>

> **IMPORTANT NOTES**: <br>
* **Zebra devices running Android 7.x Nougat and 8.x Oreo support DA <u>and</u> DO agents**.
* **Agents for Oreo (and later) must be <u>unsigned</u>**; Zebra devices running Android 8.x and later do not support signed agents.
> * Porting options described in the EMMTK include features implemented in [MX 8.1 and MX 8.2](/mx) ([See function map](../functionmap)).
> * **Support for MX ends with Android 9.x Pie**; devices running Android Pie must use [unsigned DO/DA+ZMC](../port/#unsigneddodaagentzmc) agents.

MAYBE: 
Since the release of Android Enterprise, capabilities once accessible only through MX can now be controlled by an agent designated as a "Android Enterprise Device Owner" (AEDO) using standardized Android APIs. Functions not configurable through an Android API can be handled using OEMConfig, which interfaces with MX through the Android Managed Configuration mechanism. 

-->

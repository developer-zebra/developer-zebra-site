---
title: About OEMConfig
layout: guide.html
product: OEMConfig
productversion: '9.3'
menu:
  items:
    - title: About
      url: /oemconfig/9-3/about
    - title: Setup
      url: /oemconfig/9-3/setup
    - title: FAQs
      url: /oemconfig/9-3/faq
    - title: Managed Configurations
      url: /oemconfig/9-3/mc
    - icon: fa fa-search
      url: /oemconfig/9-3/search
---

## Overview

Zebra OEMConfig is an administrative tool for configuring Zebra Android devices using Android Managed Configurations. To configure a feature for which no Android Enterprise API is available, the use of Managed Configurations is the only available method based on publicly available specifications developed by Google and the Android community. OEMConfig interfaces with Zebra's [Mobility Extensions Management System (known simply as MX)](/mx/overview), an XML-based communication framework for managing the capabilities and behaviors of Zebra Android devices. 

Over time, many of the capabilities once available only through proprietary mechanisms such as MX have been added by the Android development community. Starting as "Android for Work," these capabilities are now available as "Android Enterprise" APIs or Android Managed Configurations, both of which are based on publicly available specifications. Zebra is adopting both as part of the natural evolution of its device management system. 

### Using OEMConfig

OEMConfig provides a single interface for managing Zebra Android devices regardless of the underlying APIs required to get the job done. OEMConfig works through Android Enterprise APIs when possible, and through Managed Configurations when no Android Enterprise API is available. 

OEMConfig and the Zebra schema are available from the Google Play Store and must be used together to configure Zebra Android devices. The Schema defines the functions available for configuration and provides the data necessary to present the corresponding data-driven UI for configuring those functions. This mechanism allows Zebra to make a new Schema available as soon as new features are available for use. 

-----

## What's New in v9.3

### Device Support

* **Supports all Zebra running Android 7.x Nougat, Android 8.x Oreo**.
* **Supports devices available as of Dec. 31, 2019 running Android 9.x Pie**.  

### New Features

* **Supports MX 9.3**, adding the following features and enhancements: 
 * Applications can now be configured to handle background data on a per-app basis
 * Bluetooth now allows rules to be enforced based on Bluetooth MAC address 
 * GMS Configurations can now activate limited set of GMS apps 
 * GPRS Configurations now support APN protocol roaming 
 * Power Configurations can now control individual device wake-up sources such as buttons or keycodes
 * Audio Configurations now allow selection of whether the device plays a sound when a battery charger is connected

<!-- 12/6/19- leaving out until it's clear what it means:
OemConfig Schema should not specify default values for non-hidden fields
 -->

`IMPORTANT:` Features listed above are supported ONLY on devices with MX 9.3 and higher. [Which version is installed?](http://techdocs.zebra.com/mx/mx-version-on-device/)

For a detailed list of configuration parameters, see the [Managed Configurations](../mc) section. 

-----

## Version History

### Added in v9.2.2.3

**For Enrollment Configuration**, now supports configurable items defined in a plug-in CSP. 

**Now supports MX 9.2**, which adds the following features:  
* **Device Administration Configuration: Reserve and Unreserve UI**
* **Display Configuration: Control display size and font size**
* **Wireless WAN Configuration: Supports WWAN advanced features**
* **Wakeup Configuration: Control wake-up source method**
* **Service Access Configuration: Control access by apps to specific CSPs**
* **Worry Free WiFi Configuration: Supports Worry Free Wi-Fi password features**
* **DataWedge Configuration: Supports restrictions**
* **File Manager Configuration: Supports use of the hyphen (-) character in file names**. 

`IMPORTANT:` Features listed above are supported ONLY on devices with MX 9.2 and higher. [Which version is installed?](http://techdocs.zebra.com/mx/mx-version-on-device/)

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

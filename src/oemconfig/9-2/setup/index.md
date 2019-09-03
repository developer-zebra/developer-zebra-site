---
title: OEMConfig Setup
layout: guide.html
product: OEMConfig
productversion: '9.2'
menu:
  items:
    - title: About
      url: /oemconfig/9-2/about
    - title: Setup
      url: /oemconfig/9-2/setup
    - title: FAQs
      url: /oemconfig/9-2/faq
    - title: Managed Configurations
      url: /oemconfig/9-2/mc
    - icon: fa fa-search
      url: /oemconfig/9-2/search
---

## Overview

Zebra OEMConfig is an administrative tool for performing Actions and settings configurations on Zebra devices running Android. OEMConfig works with Zebra's [Mobility Extensions Management System (known simply as MX)](/mx/overview), an XML-based communication framework for managing the capabilities and behaviors of Zebra devices. 

OEMConfig is not pre-installed on Zebra devices; it must be installed through the Google Play store before it can be used to perform Actions and configure settings. These activities are typically done using an Enterprise Mobility Management (EMM) or Unified Endpoint Management (UEM) system.

### System Requirements

* **Fully managed Zebra device(s)** running Android 7.x (Nougat) or higher
* **MX 9.1 or higher*** on device(s) is recommended. [Which version is installed?](/mx/mx-version-on-device)
* A [UEM or EMM](../faq/#qwhatsauem) system with support for [OEMConfig-compliant admin tools](../faq)

<i><font size="2" color="black"> &#42;OEMConfig runs on devices with **MX versions <u>older</u> than MX 9.1**, but attempting to access newer MX features not implemented in older MX versions will result in error(s).</font></i>
<i><font size="2" color="black"> See the [MX Feature Matrix](/mx) for a complete list of features in each MX version.</font></i>

<!-- 
&#42;_The OEMConfig app runs on devices with **MX versions <u>older</u> than 9.1**. However, attempting to access newer MX features not implemented in older MX versions will result in error(s). See the [MX Feature Matrix](/mx) for a complete list of features in each MX version_. 
 -->
### Download and install
The exact process for setting up an EMM console to use Zebra OEMConfig varies widely depending on the device management system in use. For EMMs compatible with the Google Play system, the generally required steps are listed below. 

##### EMM General Setup:
* [Download OEMConfig app](https://play.google.com/store/apps/details?id=com.zebra.oemconfig.common&hl=en_US) from Google Play Store  
* Point EMM console to Zebra schema to display data-driven UI for configuring Zebra devices
* Create *Transaction(s)* using [Managed Configurations](../mc) described in schema
* Push `OEMConfig.apk` to the Zebra device(s) to be configured
* Push *Transaction(s)* to device(s) for consumption by OEMConfig tool

##### Using CloudDPC? 
For EMMs that use the Android Management APIs and CloudDPC as their EMM agent, Google offers an option to define a JSON document that specifies a set of `.apk`s to be installed, Managed Configurations to be applied to those `.apk`s, and other non-application-oriented management operations. In such a case, some of the steps above would happen together in a way that might not be obvious to the administrator or console operator.

##### About The Schema
Every `.apk` that supports Managed Configurations must provide a schema, which defines the Managed Configurations supported by that `.apk`. The Play Store provides server-to-server APIs that allow an EMM server to acquire the schema from the Play Store for the published `.apk`. There's more about schemas on the [FAQ page](../faq).

<!-- ##### Other EMMs; AOSP, GMS-restricted Devices
1. Download OEMConfig from the [Zebra Support Portal](http://zebra.com/support); the Zebra schema and other required files are automatically included. 
3. Push `OEMConfig.apk` to the Zebra device(s) to be configured.
4. Point the EMM to the Zebra schema to display the Zebra data-driven UI for configuring Zebra devices. 
5. Create *Transaction(s)* using the [Managed Configurations](../mc) described in the Zebra schema.
6. Push *Transaction(s)* to device(s). 
 -->
-----

## Also See

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

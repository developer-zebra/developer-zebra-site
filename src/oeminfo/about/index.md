---
title: About Zebra OEMinfo
layout: guide.html
product: OEMinfo
productversion:
menu:
  items:
    - title: About
      url: /oeminfo/about
    - title: Consume Data
      url: /oeminfo/consume
    - title: Publish Data
      url: /oeminfo/publish
    - title: FAQs
      url: /oeminfo/faq
    - icon: fa fa-search
      url: /oeminfo/search
---

## Overview

Zebra OEMinfo is a service included with Zebra devices that provides a set of standards-based APIs through which apps can acquire information about Zebra device capabilities and settings.

<!-- 
Zebra OEMinfo includes a set of APIs for the OEM Info Content Provider Framework for data consumer applications. 



This document covers the methodology for the Data Consumer Applications to read content from OEM Info Content Provider Framework.
The document identifies the major components of the software architecture and details the interactions between those components. 
1.3 Intended Audience
This document is intended for technical audiences and software developers who are designing the above said Data Consumer Applications.
Prior to ratification it is intended for reviewers of the proposed software architecture. After ratification, the document is intended as a technical reference for developers.


### Using OEMConfig

OEMConfig provides a single interface for managing Zebra Android devices regardless of the underlying APIs required to get the job done. OEMConfig works through Android Enterprise APIs when possible, and through Managed Configurations when no Android Enterprise API is available. 

OEMConfig and the Zebra schema are available from the Google Play Store and must be used together to configure Zebra Android devices. The Schema defines the functions available for configuration and provides the data necessary to present the corresponding data-driven UI for configuring those functions. This mechanism allows Zebra to make a new Schema available as soon as new features are available for use. 

-----

## See Also

* **[FAQ](../faq)** | Frequently asked questions about OEMConfig 
* **[OEMConfig Managed Configurations](../mc)** | Descriptions of all configurable functions
 -->
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

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

Zebra OEMinfo is a service included with Zebra devices that provides a set of APIs based on public specifications through which apps can acquire information about Zebra device capabilities and settings.

The mechanism provided by OEMinfo allows apps to acquire some or all of the information about a given Zebra device from a set of data published through OEMinfo. A data set can contain proprietary or non-proprietary information, and can be limited to “designated receivers” or open to all. 

 and one place so that consumer application need not call many different APIs
Zebra wants to allow access to certain information within the data set to be limited to selected
The mechanism used to share the data could be suitable to become a Google-promoted standard.


<!-- 
Zebra OEMinfo includes a set of APIs for the OEM Info Content Provider Framework for data consumer applications. 



This document covers the methodology for the Data Consumer Applications to read content from OEM Info Content Provider Framework.
The document identifies the major components of the software architecture and details the interactions between those components. 
1.3 Intended Audience
This document is intended for technical audiences and software developers who are designing the above said Data Consumer Applications.
Prior to ratification it is intended for reviewers of the proposed software architecture. After ratification, the document is intended as a technical reference for developers.
--> 

-----

## Also See

* **[FAQ](../faq)** | Frequently asked questions about OEMinfo
* **[Content Provider Basics](https://developer.android.com/guide/topics/providers/content-provider-basics.html)**
**[Content Observer](https://developer.android.com/reference/android/database/ContentObserver.html)**

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

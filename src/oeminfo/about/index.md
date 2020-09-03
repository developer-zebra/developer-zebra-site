---
title: About Zebra OEMinfo
layout: guide.html
product: Zebra OEMinfo
productversion:
menu:
  items:
    - title: About
      url: /oeminfo/about
    - title: Consume Data
      url: /oeminfo/consume
    - title: Provide Data
      url: /oeminfo/publish
    - title: FAQs
      url: /oeminfo/faq
    - icon: fa fa-search
      url: /oeminfo/search
---

## Overview

**Zebra OEMinfo is a service included with Zebra devices that provides app developers with a simple, unified and secure method of programmatically determining device capabilities and settings**. OEMinfo Content Provider Framework provides a set of APIs through which Zebra publishes information about a given device for consumption by apps running on the device. Based on publicly specified Android interfaces, OEMinfo can help an app determine whether a feature or operation it needs to perform is likely to be successful. 


<!-- ADD IF/WHEN DATA PUBLISHING IS PERMITTED BY CUSTOMERS
OEMinfo also can be used by apps as a "standard" mechanism for publishing data the app itself is collecting or creating. This can include inventory data, device location and other collected or changing information. 
 -->


### Scope and Audience

This guide describes major components of the OEMinfo Content Provider Framework, and includes methods for configuring an app to consume content through OEMinfo APIs. It is intended for software developers, administrators and other technical users designing apps that could benefit by acquiring information about device capabilities about the Zebra device on which they are running.

-----

### Requirements

Available on Zebra devices running...
* **Android 8.x Oreo​ or later** (preinstalled)
* **Android 7.x Nougat or earlier** (installed as a [LifeGuard update](https://www.zebra.com/us/en/support-downloads/lifeguard-security.html))

-----

## Also See

* **[Content Provider Basics](https://developer.android.com/guide/topics/providers/content-provider-basics.html)**
* **[Content Observer](https://developer.android.com/reference/android/database/ContentObserver.html)**
* **[FAQ](../faq)** | Frequently asked questions about OEMinfo

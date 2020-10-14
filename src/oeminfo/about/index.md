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

### Device Support

**OEMinfo is currently supported on Zebra devices running**...

* **Android 10.x or later** (OEMinfo preinstalled)
* **Android 8.x Oreo** (installed with [LifeGuard update](https://www.zebra.com/us/en/support-downloads/lifeguard-security.html))
* **Recommended updates** for MSM8937-platform devices:
 * **TC20 8.x Oreo**: [LifeGuard Update U07 September 2020](https://www.zebra.com/us/en/support-downloads/software/operating-system/tc20-operating-system.html)
 * **TC25 8.x Oreo**: [LifeGuard Update U07 September 2020](https://www.zebra.com/us/en/support-downloads/software/operating-system/tc25-operating-system.html)

>>For best results, **Zebra recommends using OEMinfo 9.0.0.198 or later**. 

-----

## Also See

#### Android Developer Docs 
* **[Android Content Provider Basics](https://developer.android.com/guide/topics/providers/content-providers)** | An Introduction
* **[Content Observer](https://developer.android.com/reference/android/database/ContentObserver.html)** | Get a callback when data changes

#### Articles by Zebra Engineers
* **[How to display serial and IMEI numbers on device](https://developer.zebra.com/blog/access-serial-number-and-imei-mobile-computers-running-android-10)** | Sample app, instructions, source code
* **[Save OEM identifiers to a file on the device](https://github.com/ZebraDevs/OEMIdentifiers-Java-Sample)** | Sample app, source code

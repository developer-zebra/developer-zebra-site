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
    - title: Provide Data
      url: /oeminfo/publish
    - title: FAQs
      url: /oeminfo/faq
    - icon: fa fa-search
      url: /oeminfo/search
---

## Overview

Zebra OEMinfo is a service included with Zebra devices running Android 10 (and later) that provides a set of APIs through which Zebra and authorized application developers can publish information about a Zebra device's capabilities and settings and allow other apps to acquire that data through the same interfaces.

By offering this information for consumption, app developers have a simple, unified method of programmatically determining whether a feature or operation they wish their app to perform is likely to be successful. OEMinfo also can be used by apps as a "standard" mechanism for publishing data the app itself is collecting or creating. This can include inventory data, device location and other collected or changing data points. 

The OEMinfo Content Provider Framework allows apps to acquire some or all of the information about a given Zebra device though a single set of publicly defined specifications rather than having to use separate proprietary interfaces and methods. A data set can contain proprietary or non-proprietary information, and can be limited to “designated receivers” or open to all. 

<!-- ### Requirements

Release to Oreo​

Marshmallow, Nougat via LG (PI 3.18)​

Follow-up releases to KK, L via LG

 -->

-----

### Scope and Audience

This guide describes the methodologies for Data Prover apps to publish static or semi-static data, for Data Consumer apps to read content from the OEMinfo Content Provider Framework, the major components of the software architecture, and the interactions between them. It is intended for software developers, administrators and other technical users designing apps that need to publish to or acquire information from Zebra devices on which they will run.

-----

## Also See

* **[Content Provider Basics](https://developer.android.com/guide/topics/providers/content-provider-basics.html)**
* **[Content Observer](https://developer.android.com/reference/android/database/ContentObserver.html)**
* **[FAQ](../faq)** | Frequently asked questions about OEMinfo

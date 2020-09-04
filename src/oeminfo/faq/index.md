---
title: Frequently Asked Questions
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

Below are some common questions related to OEMinfo and its related components and use cases. 

### What does ZDPI stand for? 

**A: ZDPI stands for Zebra Data Provider Interface**, and is the mechanism through which device data is published and consumed using OEMinfo.

-----

### What is a URI as it relates to OEMinfo? 

**A: URIs are the interface through which data is consumed**. See next question. 

-----

### What are the components of a URI? 

**A: **URIs are broken into four (4) parts** as`<scheme:>//<Authority>/<Provider name>/<API>`

**For example, the URI** `content://oem_info/oem.zebra.secure/build_serial` **can be broken down as follows**: 
* `content:` is the **scheme**, which tells Android that the URI points to a content provider  
* `oem_info` is the **authority name** of the content provider
* `oem.zebra.secure` is the **content provider name** unique within a given authority. Usually a package name.
* `build_serial` is the **API name** unique within a given package name

-----

### What is static data?

**A: Static data is data on a device that doesn't change, such as device model and serial number**.

### What is non-static data?

**A: Non-static data is data on a device that changes rarely, such as the Android version, build ID, and MX/OSX versions installed on the device**.

-----

### Which Zebra devices support OEMinfo?

**A: OEMinfo comes preinstalled on Zebra devices running Android 8.x Oreo and later. For other devices, OEMinfo can be installed with a [LifeGuard update](https://www.zebra.com/us/en/support-downloads/lifeguard-security.html).**  

-----

### How can I determine whether OEMinfo is already installed on my device(s)?

**A: OEMinfo appears in the Apps list of the Android Settings panel**.

-----

### FAQs appear as they become known 

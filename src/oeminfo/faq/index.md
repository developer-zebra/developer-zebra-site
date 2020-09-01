---
title: Frequently Asked Questions
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

Below are some common questions related to OEMinfo and its related components and use cases. 

### What does ZDPI stand for? 

**A: ZDPI stands for Zebra Data Provider Interface**, and is the mechanism through which device data is published and consumed using OEMinfo.

-----

### What are the components of a URI? 

**A: URIs are broken into three parts**: “Authority," “Package Name” and “API" as follows: 

* `content://<Authority>/<Provider>/<API>`

* **Authority**: The authority name of the Content Provider
* **Package Name**: A unique name within the given authority that identifies the content (e.g. DeviceInfo, Battery)
* **API**: API name in the given package name (e.g. model, manufacturer)

-----

### What is static data?

**A: Static data is data on a device that doesn't change, such as device model and serial number**.

### What is non-static data?

**A: Non-static data is data on a device that changes rarely, such as the Android version, build ID, and MX/OSX versions installed on the device**.

-----

### More FAQs coming soon



<!-- 

FAQs on:


For Example, to get the device serial the content URI would be

`content://oem_info/oem.zebra.secure/build_serial`

3.2 Device Serial Number URI

• URI : `content://oem_info/oem.zebra.secure/build_serial`

3.3 IMEI Number URI (Android 10 only)

• URI : `content://oem_info/wan/imei`

3.4 OS Update URI

• URI : `content://oem_info/oem.zebra.osupdate/`

• API :

 o “status” - Returns SUCCESS, IN_PROGRESS, FAIL, WAITING_FOR_REBOOT, etc.

 o “detail” - Text representation of the status, contains detailed reason.

 o “ts” - Epoch time when the intent is received


 -->
<!-- 
Zebra OEMConfig is an approach to performing administrative tasks on Zebra Android devices using Android Managed Configurations. To configure a feature for which no Android Enterprise API is available, Managed Configurations is the only method available that's based on publicly available specifications developed by Google and the Android community. Below are some common questions related to OEMConfig, Managed Configurations and the schemas that drive them. 

<!-- 
Also see the [Glossary of terms](../glossary).
 -->
-----

---
title: Providing Data
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

The Zebra Data Provider Interface (ZDPI) is a mechanism through which device data is published by an app for consumption by other apps. ZDPI is based on the [Android content provider framework](https://developer.android.com/guide/topics/providers/content-providers), a public specification that allows sets of device data to be made available to apps using URI-based queries. 

> **NOTE: Only Zebra apps are authorized to publish data through OEMinfo at this time**. 

<!-- 
Data publishers and consumers follow the content-provider client model to insert (put) and retrieve (get) data. Together, the OEMinfo Content Provider and Publisher and Consumers apps offer a reliable model to handle sharing of OEM-specific, proprietary, non-proprietary static and semi-static data on Zebra devices. The OEMinfo Content Provider manages access to the central repository using a standard authority.

-->

<!--  
-----

### OEMinfo Architecture
The diagram below illustrates the high-level design of the Zebra OEM Info Content Provider framework with data provider (OEMinfo) and data consumers (Zebra apps, third-party apps).

<img alt="image" style="height:350px" src="oeminfo_content_provider_framework.png"/>
_Click image to enlarge; ESC to exit_. 
<br>

* **OEMinfo is the data provider**
* **ZDPI service publishes data** through Zebra data publisher apps to data consumer apps 
* Zebra Access Manager grants/denies permission to consumer aoos for data access
* Zebra-owned apps include Power Manager, StageNow, FOTA, Device Tracker
* **Provider framework is extensible** without impacting consumer apps written for earlier versions.
 
 -->

-----

<!-- 
## Also See

* **[Android Content Provider Basics](https://developer.android.com/guide/topics/providers/content-provider-basics.html)** | How Content Providers Work - Beginners should read this first 
* **[Creating a Content Provider](https://developer.android.com/guide/topics/providers/content-provider-creating) | Why and how to share an app's data
**[Content Observer](https://developer.android.com/reference/android/database/ContentObserver.html)** | Get a callback when data changes

-->
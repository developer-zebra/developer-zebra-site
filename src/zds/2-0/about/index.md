---
title: About Zebra Data Services
layout: guide.html
product: ZDS
productversion: '2.0'
menu:
  items:
    - title: About
      url: /zds/2-0/about
    - title: Set up
      url: /zds/2-0/setup
    - title: FAQ
      url: /zds/2-0/faq
    - icon: fa fa-search
      url: /zds/2-0/search
---

## Overview

Zebra Data Service (ZDS) agent software is a continuous background service running on all supported Zebra devices and is responsible for collecting and uploading analytics data coming from ZDS plug-ins and Zebra-authorized third-party apps. Data is uploaded to the Zebra analytics database every 24 hours by default with transport secured with HTTPS. ZDS updates itself and the ZDS Plug-ins, and can accept configuration changes such as to the upload interval and data-collection events using a barcode scanned by the device. 

**Participating Zebra customers and partners can access collected data in the form of [Zebra Foresight](https://www.zebra.com/us/en/services/visibilityiq/foresight.html) reports if <u>ALL FOUR</u> of the following requirements are met on all desired Zebra Android devices**:

* **ELIGIBILITY -** Devices must support ZDS Agent Software. Most Zebra Android devices with
KitKat (or later) operating systems have ZDS Agent Software preinstalled. For a list of
supported devices, please see page 19 of this guide.
* **ENABLEMENT -** ZDS Agent Software must be enabled on the device. Eligible devices are
shipped with the ZDS Agent enabled by default. See page 11 of this guide to determine
whether ZDS Agent is running and enabled on your device(s).
* **CONNECTIVITY -** The device(s) must be connected to the Internet.
* **PERMISSION -** Your firewall must allow communication with Zebra’s server at [analytics.zebra.com](http://analytics.zebra.com) server port 443.

**NOTE**: If Foresight reports appear blank or devices are missing from the reports, please confirm that ***ALL***
of the above requirements are met.

-----

## What's New in v2.0


### Device Support

### New Features

-----

## Version History

### Added in v1.0

-----

## See Also

* **[FAQ](../faq)** | Frequently asked questions about ZDS

<!-- 
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
      url: /oemconfig/9-3/search -->
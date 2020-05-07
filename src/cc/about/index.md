---
title: About Common Criteria
layout: guide.html
product: Common Criteria
menu:
  items:
    - title: About
      url: /cc/about
    - title: Setup
      url: /cc/setup
    - title: FAQ
      url: /cc/faq
    - icon: fa fa-search
      url: /cc/search
---

## Overview

Zebra Data Service (ZDS) agent software is a continuous background service running on all supported Zebra devices and is responsible for collecting and uploading analytics data coming from ZDS plug-ins and Zebra-authorized third-party apps. Data is uploaded to the Zebra analytics database every 24 hours by default with transport secured with HTTPS. ZDS updates itself and the ZDS Plug-ins, and can accept configuration changes such as to the upload interval and data-collection events using a barcode scanned by the device. 

<img alt="image" style="height:350px" src="VisibilityIQ_dashboard.png"/>
_Click image to enlarge; ESC to exit_. 
<br>

-----

## Data Collected

* Device "Build Fingerprint" including:
 * Device model number
 * Android version
 * Build ID
* Device serial number
* Device usage data 
* OS image, LifeGuard and security patch levels applied
* Available RAM
* Device storage (flash) information and health 
* Battery information and health
* Wi-Fi (WLAN) connection events
* Cellular (WWAN) connection events (if applicable)
* **Data traffic statistics (as applicable) for**: 
 * Bluetooth
 * Cellular (WWAN)
 * Ethernet
 * Wi-Fi (WLAN)
* **Location data (as applicable) for**: 
 * Cellular 
 * GPS
 * Wi-Fi (WLAN)
* System app info and usage
* Zebra app info and usage data, including for:  
 * DataWedge
 * Enterprise Home Screen
 * EMDK for Android 
 * EMDK for Xamarin
 * MX STATS
 * SimulScan
 * StageNow
* Scanner information and usage statistics
* Reboots triggered by the system or an app
* Application Not Responding (ANR) events

-----
<!-- 
## What's New in v2.0


### Device Support

### New Features

-----

## Version History

### Added in v1.0

-----
 -->
## Supported Devices

ZDS comes preinstalled on the following supported devices with the Android versions indicated. **Devices and/or Android versions not shown here are NOT compatible with ZDS**. Some devices running KitKat require ZDS to be installed manually. Contact [Zebra Support](https://www.zebra.com/us/en/about-zebra/contact-zebra/contact-tech-support.html) for more information.

<img alt="image" style="height:650px" src="zds_20_supported_devices.png"/>
_Click image to enlarge; ESC to exit_. 
<br>

-----

## See Also

* **[FAQ](../faq)** | Frequently asked questions about ZDS
* **[ZDS Setup Guide](../setup)** | How to check whether ZDS is enabled
* **[Visibility IQ info page](https://www.zebra.com/us/en/blog/posts/2019/zebra-operational-visibility-services-is-now-visibilityiq-foresight.html)** | Sign up for regular updates

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
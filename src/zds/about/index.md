---
title: About Zebra Data Service
layout: guide.html
product: ZDS
menu:
  items:
    - title: About
      url: /zds/about
    - title: Setup
      url: /zds/setup
    - title: FAQ
      url: /zds/faq
    - icon: fa fa-search
      url: /zds/search
---
<a id="system_config"></a>
## Overview

The Zebra Data Service (ZDS) system is a set of background services running on all supported Zebra devices and is responsible for collecting and uploading analytics data coming from ZDS plug-ins and Zebra-authorized third-party apps. Data is uploaded to the Zebra analytics database every 24 hours by default with transport secured with HTTPS. ZDS accepts configuration changes to the upload interval, data-collection events and other parameters through a barcode scanned by the device. Learn more about [changing ZDS parameters](../faq/#qcananyzdsparameterscanbechanged). 

> **ZDS components are self-updating to ensure that devices contain the most up-to-date features and bug-fixes**. Learn more [about ZDS updates](../faq/#qwhatisthesizeofthezdsupdatedownload).

### Available Reports
The image below shows some of the reports available for visualizing data collected from devices within an organization. 

<img alt="image" style="height:350px" src="VisibilityIQ_dashboard.png"/>
_Click image to enlarge; ESC to exit_. 
<br>

-----
<a id="clock_config"></a>
### Data Collected

* **Device "Build Fingerprint" including**:
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
* **Zebra app info and usage data, including for**:  
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

#### ZDS Support Notes

* **ZDS is compatible with all Zebra devices running Android 4.4** (Kit Kat) and later. 
* **Zebra offers active ZDS support for devices running Android 6.x** (Marshmallow) and later. 
* **ZDS comes preinstalled on most devices with the latest Android 7.x (and later) builds**. 
* **Installation might be required** for devices running Android 4.4, Android 5.x (Lollipop) and later Android versions.

Contact [Zebra Support](https://www.zebra.com/us/en/about-zebra/contact-zebra/contact-tech-support.html) for more information.

<!-- 10/6/20 matrix removed at request of engineering (TUT-44574)
<img alt="image" style="height:650px" src="zds_20_supported_devices.png"/>
_Click image to enlarge; ESC to exit_. 
<br>
 -->
-----

## See Also

* **[FAQ](../faq)** | Frequently asked questions about ZDS
* **[ZDS Setup Guide](../setup)** | How to check whether ZDS is installed and/or enabled.
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
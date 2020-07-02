---
title: About Common Criteria
layout: guide.html
product: Zebra CCITSE
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

The **Common Criteria for IT Security Evaluation** is a standard for certifying the security of computing devices and systems. Often referred to as Common Criteria or simply CC, the international standard **"establishes the general concepts and principles of IT security evaluation and specifies the general model of evaluation**," according to the [ISO/IEC 15408 web page](https://www.iso.org/standard/50341.html). It does so in the various sections of the standard, which "**in its entirety is meant to be used as the basis for evaluation of security properties of IT products**." 

In essence, **Common Criteria specifies a framework under which computing devices can be secured in a consistent way**, allowing system suppliers to credibly claim that their devices behave predictably with regard to security and vulnerability to exploits. The standard also defines terms used, establishes the concept of a **Target of Evaluation (TOE)** and its evaluation context, and describes the intended audience for the evaluation criteria. 

Other key concepts include **Protection Profiles**, which package security requirements and the topics of conformance, and **Security Targets**, which define statements of the security needs of a specific TOE in a specific use case. Companies adhering to Common Criteria can specify **Security Functional Requirements** (SFAs) and **Security Assurance Requirements** (SARs) for specific Security Targets, which can then be evaluated by testing labs to determine whether they meet those claims using standardized and repeatable testing methods. 

-----

### Prerequisites
The following are required to bring a Zebra device into CC state: 

* **One or more [supported devices](#supporteddevices) running Android 10** and with support for Federal Information Processing Standard (FIPS)
* **Windows computer with Zebra StageNow 4.2** (or later) installed [go to download page](https://www.zebra.com/us/en/support-downloads/software/utilities/stagenow.html) 
* LifeGuard patch for CC compliance
* FDE to FBE conversion package

<!-- devices per input doc:
- TC52, TC72 and MC93 A10 SDM660 FIPS devices
- define FDE and FBE
- 

 -->


<!-- Zebra Data Service (ZDS) agent software is a continuous background service running on all supported Zebra devices and is responsible for collecting and uploading analytics data coming from ZDS plug-ins and Zebra-authorized third-party apps. Data is uploaded to the Zebra analytics database every 24 hours by default with transport secured with HTTPS. ZDS updates itself and the ZDS Plug-ins, and can accept configuration changes such as to the upload interval and data-collection events using a barcode scanned by the device. 

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
 -->
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
<!-- 
## Supported Devices

Common Criteria is supported on Zebra devices built on the SDM660 platform running Android 10 or later. 

<img alt="image" style="height:650px" src="zds_20_supported_devices.png"/>
_Click image to enlarge; ESC to exit_. 
<br>

-----
 -->

## Also See

* **[FAQ](../faq)** | Frequently asked questions about Common Criteria
* **[CC Setup Guide](../setup)** | Basic steps for bringing a device into CC compliance 
* **[Glossary](../about)** | Common Criteria terminology 

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
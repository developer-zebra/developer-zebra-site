---
title: Feature Matrix
layout: list-apis.html
product: DataWedge
productversion: "11.0"
---

## Overview

<p>This matrix displays the component versions supported based on commonly used DataWedge features and features released since January 2020. The components include: supported devices, minimum Android version, minimum build (BSP/LifeGuard version), scan engine, and minimum DataWedge version. If a particular component version is not supplied, that signifies the DataWedge feature is not dependent on that component.</p>
<!--<p>Some features rely on the scan engine. The supported scan engines will be updated in the near future.</p> -->

<p>A license icon is designated for features that require a <a href="/licensing">Mobility DNA Enterprise license</a> on Zebra Professional devices.</p>
_Note: Smartsheet features, including filtering, are not intended for use._
<IFRAME WIDTH=1120 HEIGHT=700 FRAMEBORDER=0 SRC="https://app.smartsheet.com/b/publish?EQBCT=0d83073f23f84ccbb82b9f43fed1a772"></IFRAME>

## History

### New in June 2021

* New Dotcode parameter added, Erasures, used to increase the decoding speed for Dotcode barcodes.
* Document Capture via camera now supported resulting to better quality images.

### New in April 2021

Added the following features to the matrix:

- Document Capture:
  - Read Specific Barcode
  - Auto Group Identification

## How to retrieve version information

**Retrieve device model:**

1. Go to device **Settings** > **About phone** or **Settings** > **System** > **About phone** depending on the Android version.
2. The device model is displayed under **Device** or **Model** depending on the Android version.

**Retrieve Android version:**

1. Go to device **Settings** > **About phone** or **Settings** > **System** > **About phone** depending on the Android version.
2. Scroll down to **Android version.**

**Retrieve build (BSP/LG) version:**

1. Go to device **Settings** > **About phone** or **Settings** > **System** > **About phone** depending on the Android version.
2. Scroll down to **Build number** containing BSP and LifeGuard versions.

**Retrieve scan engine information:**

1. Go to device **Settings** > **About phone** or **Settings** > **System** > **About phone** depending on the Android version.
2. Tap **SW Components.**
3. The scan engine version is displayed under **Scanner.**
   <br>
   <br>

---

Related Guides:

- [About DataWedge](../about)
- [Profile Overview](../overview)
- [Profiles/Plug-Ins](../profiles)
- [DataWedge APIs](../api)

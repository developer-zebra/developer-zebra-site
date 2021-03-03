---
publish: true
title: Barcode Scan and Configuration in Kotlin
description: Guides how to develop an application in Java, Kotlin, and Xamarin to capture data. 
sources:
  - title: Github Repo
    url: 'https://github.com/darryncampbell/DataWedgeKotlin'
devices:
  - All supported Zebra Android devices
image: app_01.png
screenshots:
  - app_01.png
  - app_02.png
layout: sample.html
product: DataWedge
productversion: '8.2'
nodownload: 'true'
date: 2021-02-03
---

## Overview 

With Kotlin gaining more popularity as the preferred programming language with developers, [Kotlin and developing Kotlin applications for Zebra devices](https://developer.zebra.com/blog/kotlin-and-developing-kotlin-applications-zebra-devices) covers how to develop a Kotlin app targeting Zebra devicesusing [DataWedge APIs](../../api). Refer to "Approach #2: Using the DataWedge Intent API from Kotlin". The sample app consists of 2 activities:
1. **First activity -** displays received scans and can invoke the scanner with a soft button.
2. **Second activity -** configures the selected scanner and makes changes to the current scanner configuration with the DataWedge [SET_CONFIG](../../api/setconfig) API.

> This application is intended for demonstration purposes only. It is provided as-is without guarantee or warranty and may be modified to suit individual needs. The appearance of sample app screens can vary by sample app version, Android version, and screen size.

## APIs Used

<table class="facelift" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>DataWedge API</th>
    <th>App Functionality</th>
  </tr>

  <tr>
    <td><a href="../../api/setconfig">Set Config</a></td>
    <td>Create and configure the DataWedge profile. Configure the selected scanner and make changes to the scanner configuration.</td>
  </tr>

  <tr>
    <td><a href="../../api/softscantrigger">Soft Scan Trigger</a></td>
    <td>Invoke the scanner with a soft button that simulates a trigger press.</td>
  </tr>

</table>


-----

**Related guides**:

* [DataWedge Intent APIs](../../api) 











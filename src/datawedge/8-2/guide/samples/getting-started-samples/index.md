---
publish: true
title: Getting Started with Java, Kotlin, and Xamarin
description: How-to guide to develop an application in Java, Kotlin, and Xamarin to capture data. 
sources:
  - title: Github Repo
    url: 'https://github.com/darryncampbell/DataWedge-GettingStarted-Samples'
devices:
  - All supported Zebra Android devices
image: app_kotlin.jpg
screenshots:
  - app_java.jpg
  - app_kotlin.jpg
  - app_xamarin.jpg
layout: sample.html
product: DataWedge
productversion: '8.2'
nodownload: 'true'
date: 2021-03-03
---

## Overview 
To get started developing an application to capture barcode data on Zebra mobile computers using Zebra DataWedge, refer to [DataWedge Getting Started Samples](https://github.com/darryncampbell/DataWedge-GettingStarted-Samples). This guide demonstrates how to use DataWedge intents to capture data. The same sample app is given in Java, Kotlin, and Xamarin.

> This sample application is intended for demonstration purposes only. It is provided as-is without guarantee or warranty and may be modified to suit individual needs. 

## APIs Used

<table class="facelift" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>DataWedge API</th>
    <th>App Functionality</th>
  </tr>

  <tr>
    <td><a href="../../api/setconfig">Set Config</a></td>
    <td>Create the DataWedge profile that contains the appropriate configurations to scan.</td>
  </tr>

  <tr>
    <td><a href="../../api/softscantrigger">Soft Scan Trigger</a></td>
    <td>Invoke the scanner with a soft button that simulates a trigger press.</td>
  </tr>

</table>


-----

**Related guides**:

* [DataWedge Intent APIs](../../api) 











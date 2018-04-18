---
title: Guides
description: "The Zebra EMM Toolkit is designed to allow EMM/MDM solution providers to adapt their products to manage Zebra devices and software. The guides linked below provide all necessary documentation."  
layout: list-content-items.html
content-items:
  - type: section
    level: 4
    title: About EMM Toolkit
    text: Prodives a general overview of the purpose of the EMM Toolkit and how it works with StageNow, the MX Management System and other Zebra device staging and configuration mechanisms. 
    url: about
  - type: section
    level: 4
    title: Android Setup Wizard Bypass
    text: Staging profiles made for devices with MX 7.1 or higher can include a command to automatically bypass the Android Setup Wizard (also known as the "Welcome Screen") following an Enterprise Reset. The wizard can be skipped (on some devices) by scanning a barcode.
    url: bypass
  - type: section
    level: 4
    title: Persistence Best Practices
    text: Describes Zebra-recommended processes for preserving EMM agent and related files and restoring a device to manageability after an Enterprise Reset, which erases non-persistent software on the device. 
    url: persistence
  - type: section
    level: 4
    title: Staging API Service
    text: How to use Staging API Service to produce StageNow barcodes from an EMM Console to enroll an AEDO EMM Agent using the StageNow Client
    url: stagingapi
  - type: section
    level: 4
    title: How to Enroll an AEDO
    text: Explains the workings of Android Enterprise Device Owner mode, how the features works in relation to sharing and the steps necessary for an EMM to enable use of this feature.
    url: enrollaedo
  - type: section
    level: 4
    title: DA-to-DO Migration
    text: Describes the method for moving a device from DA (or NON-DO) to DO mode without loss of data or device reset. 
    url: migratedo
  - type: section
    level: 4
    title: DA+MX-to-AEDO Migration
    text: Describes how to transition an EMM Agent from MX to AEDO to enable management of Zebra Android N devices, on which AEDO is the recommended management strategy.
    url: migrateaedo
  - type: section
    level: 4
    title: EMM Toolkit Roadmap
    text: Explains the migration period and basic processes for moving devices from legacy Android versions and Zebra management processes to Android N and beyond, including a time line for when such migrations become mandatory.
    url: roadmap
  - type: section
    level: 4
    title: MX and AEDO Function Maps
    text: Provides a list of MX functions and their ADEO, OemConfig and/or OemInfo equivalent functions.
    url: functionmap
  - type: section
    level: 4
    title: OemConfig/OemInfo Schema
    text: Covers the content, usage and management of OemConfig and OenInfo schema, including approaches for encoding managed configurations for delivery an EMM server to an EMM agent and recommendations for implementing a data-driven UI.
    url: schema
  - type: section
    level: 4
    title: Code Samples
    text: Provides validated code that EMM solution providers can use to implement managed configurations within their agent.
    url: samples
  - type: section
    level: 4
    title: OemInfo Developer Guide
    text: Explains API usage and development requirements for OemInfo, a standards-based mechanism by which applications can acquire published information about a Zebra device.
    url: oeminfodevguide
product: EMM Toolkit
productversion: '2.0'
---

<!--            
4/12/18- removed temporarily at req. of Dave Degreassi 

  - type: section
    level: 4
    title: Staging API Service
    text: Explains how to use the Staging API service from an EMM console to produce StageNow barcodes and to enroll an AEDO EMM Agent using the StageNow client app.
    url: api
    
 -->

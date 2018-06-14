---
title: About EMM Toolkit
layout: guide.html
product: EMM Toolkit
productversion: '2.0'
---

# `DRAFT`

**_Information subject to change without notice_**. 

-----

Methods of managing Zebra devices:

* Past: Signed agent
* Present: MX to submit XML
* Future: AEDO + OemConfig

WATCH (George's?) GTX (and possibly embed it)


This section explains device owner stuff, and why a Nougat device _should_ be enrolled as a DO and why an Oreo _must_. 

* DO is recommended with Nougat. With Oreo, it's required. 
* Agent Uses AEDO + Zebra OemConfig Managed Configs​
* Android N or higher​
* EMM must leverage Zebra EMM TK V4​
* Supported from Android Nougat onwards​
* Provides parity of functionality to EMM TK V2 when combined with AEDO APIs​
* Standard-based​
* Not available prior to Android Nougat​
* Requires special Device Owner Enrollment​
* It is OPTIONAL for all EMMs to use OemConfig, but NOT doing so will leave the EMM unable to provide parity of functionality once they can no longer use MX via EMM TK V1 and V2 to augment the capabilities of AEDO APIs​
* SHOULD support use of OemConfig by the start of Android P​
* SHOULD support use of OemConfig as early as possible, preferably by the end of Android Nougat​

> Info in the QR code is identical to contents of the `Provisioning.JSON` file.  

### Terms used in this guide

* **AE -** Android Enterprise (formerly known as "Android for Work")
* **AEDO -** Android Enterprise Device Owner
* **AFW -** Android for Work
* **DA -** Device administrator (feature to be discontinued in Android Q)
* **DO -** Device owner (available since M, encouraged for N and O, required for P)
* **EMM -** Enterprise Mobility Management
* **MDM -** Mobile Device Management

-----

## Overview

The Zebra Enterprise Mobility Management Toolkit (EMMTK) is designed to allow developers of EMM (sometimes known as "mobile device management" or MDM) soltions to adapt their products to manage Zebra devices. This has historically involved interfacing with the [MX Management System (MXMS)](/mx/overview), Zebra's XML-based communication framework for managing the capabilities and behaviors of its Android devices. With the emergence of Android Enterprise, **_some_** capabilities once accessible only through Zebra's proprietary management layer can (or will in the near future) be controlled by an agent designated as a "Android Enterprise Device Owner" (AEDO) using standardized Android APIs. 

**Zebra staging mechanisms follow these basic processes**:​

* **Create Staging Profiles** through the StageNow desktop client
* **Generate barcodes** or other media that contains staging instructions​
* **Read the generated medium on the device** using a staging client
* **Execute the staging instructions to**:​
 * Configure the device for connection to a staging network​
 * Download, install, configure and launch an EMM Agent on the device​
 * Perform persistence and/or other desired staging tasks

The primary vehicle for integrating an EMM solution with Zebra's staging tools is the [Staging Service API](../api). This guide contains all information necessary for adding Zebra-device staging capabilities to an EMM management console. 

-----

### Guides in the EMM Toolkit

* **[Android Setup Wizard Bypass](../bypass) -** explains Zebra's method for skipping the Android Setup Wizard (also known as the "Welcome Screen") following an Enterprise Reset, which erases non-persistent software on the device. 
* **[Persistence Best Practices](../persistence) -** details Zebra-recommended processes for preserving EMM agent and related files and restoring a device to manageability after an Enterprise Reset.
* **[Enrolling an AEDO](../enrollaedo) -** covers the workings of Android Enterprise Device Owner mode, how the features works in relation to sharing and the steps necessary for an EMM to enable use of this feature.
* **[DA-to-DO Migration](../migratedo) -** Describes the method for moving a device from DA (or NON-DO) to DO mode without loss of data or device reset.
* **[DA+MX-to-AEDO Migration](../migrateaedo) -** Describes how to transition an EMM Agent from MX to AEDO to enable management of Zebra Android N devices, on which AEDO is the recommended management strategy.
* **[EMM Toolkit Roadmap](../roadmap) -**  Explains the migration period and basic processes for moving devices from legacy Android versions and Zebra management processes to Android N and beyond, including a time line for when such migrations become mandatory.
* **[AEDO-OEMconfig Function Map](../functionmap) -** Provides a list of MX functions and their ADEO, OemConfig and/or OemInfo equivalent functions.
* **[OEMconfig/OEMinfo Schema](../schema) -** Documents the content, usage and management of OemConfig and OenInfo schema, including approaches for encoding managed configurations for delivery an EMM server to an EMM agent and recommendations for implementing a data-driven UI.
* **[Code Samples](../samples) -** Provides validated code that EMM solution providers can use to implement managed configurations within their agent.
* **[OEMinfo Developer Guide](../oeminfodevguide) -** Documents API usage and development requirements for OemInfo, a standards-based mechanism by which applications can acquire published information about a Zebra device.

<!-- 
* **[Staging API Service](../api) -** explains how to use the Staging API service from an EMM console to produce StageNow barcodes and to enroll an AEDO EMM Agent using the StageNow client app.
 -->


-----


<!-- 
DO WE WANT TO GO HERE: 
Prior solutions required two separate sets of tools: One to generate the XML-based profiles for consumption by a client on the device, and another to 

and read them on the device for configuring Zebra devices, and another could export those profiles for deployment through an EMM. Zebra is phasing out the two-tool solution in favor of informing EMM solution providers how to modify their tools to generate the XML. 


In essence, 

This Toolkit provides a sample application and the following guide to walk through the common tasks and components that you will use in order for your MDM client to interface with the MXMS (MX Management System) available on Zebra Android devices. This Toolkit does not provide the means to generate XML required to exchange data with the MXMS. XML should be generated by utilizing the "Export a Profile to an MDM" feature of StageNow 2.3. XML, once generated, should be passed into the MDM client via some transport mechanism, processed on the client by submission to the MXMS and then the resulting XML response from MXMS should be passed back out of the client for processing. The MXMS XML response will contain data as to whether the submitted XML processed successfully, or failed due to errors in XML syntax or requested operation.

To work with StageNow and consume XML for the MX management layer

To persist an agent and/or service on the device following an enterprise reset. 

 -->

### Entitlement Criteria

This part explains which EMMs are given access to which EMM Toolkit features and why.  


<img alt="image" style="height:180px" src="legacy_staging_mechanism.png"/>
_Legacy two-tool staging process_
<br>

-----

## See Also

* [Persistence](../persistence)
<!-- 
* [Staging APIs](../api)

 -->
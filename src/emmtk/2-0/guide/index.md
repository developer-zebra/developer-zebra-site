---
title: Guides
description: "The Zebra EMM Toolkit is designed to allow EMM/MDM solution providers to adapt their products to manage Zebra devices and software. The guides linked below provide all necessary documentation."  
layout: list-content-items.html
content-items:
  - type: section
    level: 4
    title: Port an Agent from DA to DO
    text: Describes how to transition an EMM agent from MX to AEDO to enable management of Zebra Android N devices (and later), on which AEDO is the recommended management strategy.
    url: port
  - type: section
    level: 4
    title: Enroll a DO Agent
    text: Step-by-step guide for using Zebra StageNow to enroll an agent as a Device Owner and persist the settings, ensuring the device returns to manageability following an Enterprise Reset.
    url: enrollaedo
  - type: section
    level: 4
    title: MX and AEDO Function Maps
    text: Lists MX functions and their equivalent functions through AEDO or the Zebra OemConfig tool for deploying Android Managed Configurations.
    url: functionmap
  - type: section
    level: 4
    title: Build a DDUI 
    text: Examines the Zebra OemConfig schema and offers guidance and sample tools to create a data-driven user interface for managing Zebra devices.
    url: schema
  - type: section
    level: 4
    title: OemConfig Integration Overview
    text: An overview of the OemConfig schema, how it's used as the source for a data-driven UI. Includes a link to a detailed integration guide (.pdf), with recommendations for encoding Managed Configurations for delivery. 
    url: oemdev
  - type: section
    level: 4
    title: OemConfig Integration Guide (.pdf)
    text: Detailed integration guide with step-by-step instructions for agent porting, recommendations for encoding Managed Configurations for delivery, explanations of terminology and porting deadlines. 
    url: oemdev
  - type: section
    level: 4
    title: Setup Wizard Bypass
    text: Describes the process supported on some devices for automatically bypassing the Zebra and Android Setup Wizards following an Enterprise Reset (links to a StageNow guide page).
    url: /stagenow/latest/Profiles/wipedevice/#setupwizardmanualbypass
  - type: section
    level: 4
    title: Persistence Best Practices
    text: Zebra-recommended processes for preserving EMM agent and related files and restoring a device to manageability after an Enterprise Reset, which erases non-persistent software on the device. 
    url: persistence
  - type: section
    level: 4
    title: Staging Service APIs
    text: Details the Staging Service APIs, which can be used to produce StageNow barcodes from an EMM console to enroll an AEDO EMM agent using the StageNow device client.
    url: api
  - type: section
    level: 4
    title: MDMTK Legacy Guide
    text: The (obsolete) Mobile Device Management Toolkit 1.0.1 for legacy devices.
    url: mdmtk
product: EMM Toolkit
productversion: '2.0'
---

<!--            


4/12/18- removed temporarily at req. of Dave Degreassi  (restored 8/7/18)

  - type: section
    level: 4
    title: Staging Service API
    text: Explains how to use the Staging Service API from an EMM console to produce StageNow barcodes and to enroll an AEDO EMM agent using the StageNow client app.
    url: api
    
Changed to "MDM TK Legacy guide"
  - type: section
    level: 4
    title: Code Samples
    text: Provides validated code that EMM solution providers can use to implement managed configurations within their agent.
    url: samples

8/7/18 - removed because we're not doing them (or they were not needed or combined with others):
  - type: section
    level: 4
    title: EMM Toolkit Roadmap
    text: Explains the migration period and basic processes for moving devices from legacy Android versions and Zebra management processes to Android N and beyond, including a time line for when such migrations become mandatory.
    url: roadmap

  - type: section
    level: 4
    title: DA-to-DO Migration
    text: Describes the method for moving a device from DA (or NON-DO) to DO mode without loss of data or device reset. 
    url: migratedo

  - type: section
    level: 4
    title: OemInfo Developer Guide
    text: Explains API usage and development requirements for OemInfo, a standards-based mechanism by which applications can acquire published information about a Zebra device.
    url: oeminfodevguide

  - type: section
    level: 4
    title: About EMM Toolkit
    text: A general overview of the EMM Toolkit, its intended purposes and the timeline during which EMM vendors must adapt their solutions to work with StageNow, the MX Management System and other Zebra device-staging and configuration mechanisms as they evolve along with Android. 
    url: about


 -->



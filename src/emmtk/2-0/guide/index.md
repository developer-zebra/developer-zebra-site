---
title: Guides
description: "The Zebra EMM Toolkit is designed to allow EMM/MDM solution providers to adapt their products to manage Zebra devices and software. The guides linked below provide all necessary documentation."  
layout: list-content-items.html
content-items:
  - type: section
    level: 4
    title: Port an Agent from DA to DO
    text: Describes how to transition an EMM agent from MX to AEDO to enable management of Zebra Android N devices (and later), on which AEDO is the recommended management strategy. Includes link to detailed instructions. 
    url: port
  - type: section
    level: 4
    title: Enroll a DO Agent
    text: Step-by-step guide for using Zebra StageNow to enroll an agent as a Device Owner on a Zebra device and persist the settings there, ensuring the device returns to manageability following an Enterprise Reset.
    url: enrollaedo
  - type: section
    level: 4
    title: MX and AEDO Function Maps
    text: Tables mapping MX functions to their equivalent functions in AEDO (through Android APIs) or Zebra OemConfig Managed Configurations.
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
    title: Zebra Managed Configurations
    text: Describes all features available for configuration on Zebra Android devices through Managed Configurations, a generic Android app extension mechanism.  
    url: zmc
  - type: section
    level: 4
    title: OemConfig Integration Guide (.pdf)
    text: Nine-page guide provides details for integrating with Zebra OemConfig, including suggestions for building a DDUI from the Zebra OemConfig app schema.  
    url: ../downloads/Zebra_EMMTK_Building_DDUI_from_OemConfig_Schema_091418.pdf
  - type: section
    level: 4
    title: Agent Porting Guide (.pdf)
    text: 27-page guide provides details for porting an EMM agent from Device Administrator (DA) to Device Owner (DO). Includes step-by-step instructions for agent porting, recommendations for encoding Managed Configurations for delivery, explanations of terminology and deadlines for porting. 
    url: ../downloads/Zebra_EMMTK_DA-to-DO_Porting_Guide_091418.pdf
  - type: section
    level: 4
    title: Setup Wizard Bypass
    text: Describes the process supported on some devices for automatically bypassing the Zebra and Android Setup Wizards following an Enterprise Reset (links to a StageNow guide page).
    url: https://techdocs.zebra.com/stagenow/latest/Profiles/wipedevice/#setupwizardmanualbypass
  - type: section
    level: 4
    title: Persistence Best Practices
    text: Zebra-recommended processes for preserving EMM agent and related files and restoring a device to manageability after an Enterprise Reset, which erases non-persistent software on the device. 
    url: persistence
  - type: section
    level: 4
    title: Staging Service APIs
    text: Details related to the Staging Service APIs, which can be used to produce StageNow barcodes from an EMM console to enroll an AEDO EMM agent using the StageNow device client.
    url: api
  - type: section
    level: 4
    title: MDMTK Legacy Guide
    text: The (obsolete) Mobile Device Management Toolkit 1.0.1 for legacy devices.
    url: mdmtk
product: EMM Toolkit
productversion: '2.0'
---

---
title: Guides
description: "The Zebra EMM Toolkit is designed to allow EMM/MDM solution providers to adapt their products to manage Zebra devices and software. The guides linked below provide all necessary documentation."  
layout: list-content-items.html
content-items:
  - type: section
    level: 4
    title: Agent Porting Options
    text: Describes options available for transitioning an EMM agent from MX to AEDO, which is required for managing Zebra Android N and later devices. Includes a link to detailed porting instructions. 
    url: port
  - type: section
    level: 4
    title: Enroll a DO Agent
    text: Step-by-step guide describing use of Zebra StageNow tool to enroll an agent as a Device Owner on a Zebra device and to persist the settings to ensure the device returns to manageability following an Enterprise Reset.
    url: enrollaedo
  - type: section
    level: 4
    title: MX and AEDO Function Maps
    text: Tables mapping MX functions to their equivalent functions in Android Enterprise APIs or Zebra Managed Configurations.
    url: functionmap
  - type: section
    level: 4
    title: Build a DDUI 
    text: Examines the Zebra OEMConfig schema and offers guidance and sample tools for creating a data-driven user interface for managing Zebra devices.
    url: schema
  - type: section
    level: 4
    title: OEMConfig Integration Overview
    text: An overview of the OEMConfig schema and how it's used as the source for a data-driven UI. Includes a link to a detailed integration guide.  
    url: oemdev
  - type: section
    level: 4
    title: Zebra Managed Configurations
    text: Describes all features available for configuration on Zebra Android devices through Managed Configurations, a generic Android app extension mechanism.  
    url: zmc
  - type: section
    level: 4
    title: OEMConfig Integration Guide (.pdf)
    text: Nine-page guide provides details for integrating with Zebra OEMConfig, including suggestions for building a DDUI from the Zebra OEMConfig app schema.  
    url: ../downloads/Zebra_EMMTK_Building_DDUI_from_OEMConfig_Schema_091418.pdf
  - type: section
    level: 4
    title: Agent Porting Guide (.pdf)
    text: 27-page guide provides details for porting an EMM agent from Device Administrator (DA) to Device Owner (DO). Includes step-by-step instructions for agent porting, recommendations for encoding Managed Configurations for delivery, explanations of terminology and suggested porting milestones. 
    url: ../downloads/Zebra_EMMTK_DA-to-DO_Porting_Guide_091418.pdf
  - type: section
    level: 4
    title: Sample Files 
    text: Guides and files developed by Zebra engineers to aid EMM solution providers adapting their tools to new and emerging specifications for Android device administration. 
    url: ../downloads
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

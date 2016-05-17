---
title: DataWedge Setup
layout: guide.html
product: DataWedge
productversion: '3.1'
---

## Overview

These instructions provide a basic understanding of the installation, configuration, usage and essential workings of EHS, and are recommended for anyone unfamiliar with first-time EHS setup. Please note that everything detailed here also can be automated through a Mobile Device Management (MDM) system and with direct manipulation of the EHS config file, which is documented in the [Advanced Settings](../settings) section. 

Many of the capabilities of EHS can be accomplished manually on the device, programmatically through [EMDK](/emdk-for-android/4-0/guide/about) or remotely using [StageNow](/stagenow/2-2/about/) or a third-party mobile device management (MDM) system (if supported by that MDM system). EHS simply puts the capabilities into a single tool.

> <b>Note</b>: Installation and setup requires that EHS be present on a PC or Mac that can communicate with the target device and write to all storage areas. If necessary, please [download EHS](/ehs/2-3/download) and establish connectivity between the computer and device. Then resume from here. 


## Change the Default Launcher
Removing EHS as the default launcher on a device can be done with a simple change in the Settings panel or by uninstalling EHS. Either of these scenarios can be accomplished manually on the device, progrmmatically through EMDK or remotely using StageNow or an MDM (if supported). If EHS is removed from the device, the Android Launcher in most cases will be the only remaining launcher on the device, and therefore will become the default launcher. 

To manually change the default launcher on a device without removing EHS: 

&#49;. In Admin Mode <b>open the Settings panel and tap Home</b>: 
<img alt="" style="height:450px" src="settings_panel.png"/>
<br>

&#50;. <b>Tap on the Android Launcher</b> to select it as the default launcher and Home screen.  
<img alt="" style="height:450px" src="home_selector.png"/>

<b>Note</b>: The trash can icon seen here offers an alternative means of uninstalling EHS and restoring the Android Launcher. 














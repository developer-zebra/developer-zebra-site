---
title: EHS Advanced Features
layout: guide.html
---

## Overview

Here's the stuff on Kiosk Mode, Secure Mode, Unsecure Mode, etc. etc. 

Runtime configuration settings of Enterprise Browser apps are managed through the Config.xml file. The Config.xml file is required; your app will not start without it. Config.xml determines features and behavior of the EB runtime, such as the keys that can be intercepted by an app and whether to pre-load modules on startup. A sample configuration file is provided as part of the Enterprise Browser installation, and contains defaults for many (though not all) of the most common settings. 

The sample Config.xml file also is displayed below, and is followed by explanations of all settings. The EB Config.xml can be edited with an ordinary text editor or with the Config Editor utility included with the installation of Enterprise Browser 1.3. For more information, please refer to the [Config Editor utility guide](../guide/ConfigEditor). 

## Configuration file location
The location of the configuration file loaded by the Enterprise Browser is dependent on a number of factors:










These instructions provide a 





to the EnterpriseHomeScreen.XML configuration file

basic understanding of the installation, configuration, usage and essential workings of EHS, and are recommended for anyone unfamiliar with first-time EHS setup. Please note that everything detailed here also can be automated through a Mobile Device Management (MDM) system and with direct manipulation of the EHS config file, which is documented in the [Advanced Settings]() section. 

> <b>Note</b>: Installation and setup requires that EHS be present on a PC or Mac that can communicate with the target device and write to all storage areas. If necessary, please [download EHS](/ehs/2-3/download) and [establish connectivity between the computer and device(s)](). Then resume from here. 

## Supported Devices and APKs
Enterprise Home Screen works with most Zebra Android devices. The EHS download package includes <b>all three files</b> indicated in the table below, plus documentation and release notes. The correct APK file for a particular target device depends on the device, its operating system and some additional considerations explained below. 


## Manual Installation


> <b>Note</b>: The installer 

components. Read about how to [uninstall EHS](?Uninstallation#uninstallation) later in this guide. 

To install EHS manually using the automatic target selection (`EHS_020300.apk`) app: 

&#49;. <b>Connect the device</b> via USB to a PC or Mac.

&#50;. <b>Copy the </b>`EHS_020300.apk` <b>file</b> from the PC to any writable device folder.


Remote uninstallation of EHS is now complete. 


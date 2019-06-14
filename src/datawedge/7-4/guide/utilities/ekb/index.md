---
title: Enterprise Keyboard Configuration
layout: guide.html
product: DataWedge
productversion: '7.4'
---

## Overview
Enterprise Keyboard Configuration allows for Enterprise Keyboard settings to be configured within a Datawedge profile, enabling the use of custom keyboard layouts with an associated app without the need to modify the app. Enterprise Keyboard must listed as a Virtual Keyboard in Android Settings to allow the use of the custom keyboard layout. The custom keyboard layout is generated with the use of Keyboard Designer tool. 

Enterprise Keyboard Configuration is accessible from the DataWedge profile screen:

<img style="height:350px" src="ekb-config.png"/>
_Figure 1. Enterprise Keyboard Configuration options_
<br> 

Enterprise Keyboard Configuration is not accessible (grayed-out) when one of the following conditions is met:
* Enterprise Keyboard is not the default keyboard in the device.  
* A `*.encrypted` file is not found in /enterprise/device/settings/ekb/config directory. 
* Enterprise Keyboard on the device is below version 3.0, which does not support custom layouts. 

### Enable/Disable  
Enable/disable Enterprise Keyboard. If enabled, the selected layout for Enterprise Keyboard automatically appears within the associated app during a profile or activity switch/change. If disabled, Enterprise Keyboard does not appear within the associated app. 

### Select layout 
Select a layout for the keyboard. The available layouts are populated from a custom generated `*.encrypted` file (for example EKBCustomLayouts.encrypted) located in /enterprise/device/settings/ekb/config directory on the device.  See [Enterprise Keyboard](https://techdocs.zebra.com/enterprise-keyboard/latest/guide/settings). The Layout group name is based on the *.encrypted file name. 


## Configuration

Programmatically set Enterprise Keyboard Configuration and retrieve the configuration:

* [Set Config](../../api/setconfig)
* [Get Config](../../api/getconfig/#getenterprisekeyboardconfiguration)

------

**Related guides**:

* [Profiles/Plug-ins](../../profiles)
* [DataWedge APIs](../../api) 


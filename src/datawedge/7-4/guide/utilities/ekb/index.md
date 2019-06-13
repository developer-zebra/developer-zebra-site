---
title: Enterprise Keyboard Configuration
layout: guide.html
product: DataWedge
productversion: '7.4'
---

## Overview
Enterprise Keyboard Configuration allows for Enterprise Keyboard settings to be configured within a Datawedge profile. This enables the use of custom keyboard layouts with an associated app without the need to modify the app. Enterprise Keyboard Configuration in DataWedge becomes disabled when:
* Enterprise Keyboard is not the default keyboard in the device. 
* `EKBCustomLayouts.encrypted` file is not found in /enterprise/device/settings/ekb/config directory. 
* Enterprise Keyboard version on the device does not support custom layouts. 

Enterprise Keyboard Configuration is accessible from the DataWedge profile screen:

<img style="height:350px" src="ekb-config.png"/>
_Figure 1. Enterprise Keyboard Configuration options_
<br> 

### Enable/Disable  
Enable/disable Enterprise Keyboard. If enabled, the selected layout for Enterprise Keyboard automatically appears within the associated app during a profile or activity switch/change. If disabled, Enterprise Keyboard does not appear within the associated app. 

### Select layout 
Select a layout for the keyboard. The available layouts are populated from a custom generated `EKBCustomLayouts.encrypted` file located in /enterprise/device/settings/ekb/config directory on the device.  See [Enterprise Keyboard](https://techdocs.zebra.com/enterprise-keyboard/latest/guide/settings). 


## Configuration

Programmatically set Enterprise Keyboard Configuration and retrieve the configuration:

* [Set Config](../../api/setconfig)
* [Get Config](../../api/getconfig/#getenterprisekeyboardconfiguration)

------

**Related guides**:

* [Profiles/Plug-ins](../../profiles)
* [DataWedge APIs](../../api) 


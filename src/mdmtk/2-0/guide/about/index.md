---
title: About MDM Toolkit
layout: guide.html
product: MDM Toolkit
productversion: '2.0'
---

## Overview
The MDM Toolkit provides a complete turn-key solution that allows skilled Android application developers to independently develop applications to manage Zebra EMC devices. Management of the devices is performed through a provisioning XML files that are submitted via MX framework APIs that reside on Zebra devices. MDM Clients do not have to be signed by Zebra in order to utilize this functionality. This document describes the components of the toolkit and contains the information on how to use the tool to generate the correct XML as well as code examples for interfacing with the MX framework from within the MDM client application.

To **Jump Right In**, follow the [Quick Start Guide](../guide/tutorials/quickstart) which walks through the process and tools you will be using.


### Folder structure
* **Documentation** : instructions for XML handling, CSP reference
* **DSD To XML**: tool used for generating XML modules
* **MX**: DSD files used by the DSD tool 
* **Samples**: Sample project code

## Components

### Documentation
This documentation contains information to get you started with interfacing with the MX Management System from your MDM client. It also contains reference information for XML generation, submission as well as handling responses. The included Feature Type reference supplies, important usage notes, as well as device compatibility information. Be sure to check the [Using This Help](../guide/abouthelp) guide for more information on how to use this help system


### DSD Tool
The DSD tool is found in the `DSD To XML` folder of this toolkit. It allows you to create XML modules to perform certain actions with the MX Management System. This tool takes in a DSD file for a given Feature Type and then outputs an XML file that will be used by the MDM client. Be sure to read more about [generating xml](../guide/xml-generate). 

### Sample Projects
A few sample projects are included as part of the toolkit to get you started. These projects can be imported directly into your Android IDE and run on a supported device. The samples can be found in the `Samples` folder of this toolkit.


## Minimum Requirements
This version of the MDM toolkit supports the following devices and versions of MX:

* Zebra Android Devices
* Operating Systems
	* KitKat or JellyBean
* MX
	* Version 4.4

>**Note:** Certain features may not be supported on certain devices. For more information on which features are supported on which device, please see the Feature Compatibility sections on the Feature Type pages in the Feature Type reference.
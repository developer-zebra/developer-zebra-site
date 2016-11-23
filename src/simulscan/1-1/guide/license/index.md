---
title: Licensing
layout: guide.html
product: SimulScan
productversion: '1.1'
---
## Overview
**The SimulScan solution is free when used with Zebra's [DataWedge](../../../../datawedge) service** to scan only barcodes in quantities of fewer than 10 barcodes at a time. 

**A SimulScan License is required to scan 10 or more barcodes at a time, to scan using advanced features** such as optical character recognition (OCR) and optical mark recognition (OMR), or to use [SimulScan APIs](../../api) to access SimulScan functions from within an app or from [Enterprise Browser](../../../../enterprise-browser).  

_**A SimulScan License is required for each device that will access SimulScan advanced features**_. 

**A license is NOT required to use the [SimulScan Demo App](../demo)**.

## Demo License
Demo Licenses are available for customers evaluating SimulScan, and for developers that are about to begin integrating SimulScan into their applications. To request a demo license to enable SimulScan advanced features and APIs on a device:

* [Send email to NMV386@zebra.com](mailto:NMV386@zebra.com?Subject=SimulScan%20Demo%20License%20Request) 
* Include **"SimulScan Demo License Request"** in the subject header
* A reply will be sent with access credentials for [Zebra's Software Licensing Portal](https://softwarelicensing.zebra.com/), generally within one business day

## Device License
SimulScan licenses can be purchased through Zebra Technologies product resellers on a per-device basis. Licensees receive an email access credentials to [Zebra's Software Licensing Portal](https://softwarelicensing.zebra.com/), where licenses are allocated to devices by an administrator. For help with this process, please refer to [Licensing Portal documentation](https://softwarelicensing.zebra.com/documentation/index.html). 

Licenses can be purchased for a specific device based on the product name and serial number or for larger deployments using the Deployment key that can be generated on the licensing website.

Applying a License

Licenses can be deployed and installed in one of the two ways:
1. Directly onto each device by copying the SDC_License.xml file downloaded from the licensing server to an accessible location on the device. Then, launch the Settings app, click on About Phone –> Legal Information -> Symbol Licenses -> Menu -> Install license -> point to the file on the device.
2. Using StageNow for larger deployments. StageNow has a special wizard to help in creating a mass deployment configuration for SimulScan using the deployment key generated from the licensing website. Once deployed on the device via SimulScan, the licenses are automatically installed. For more details, please refer StageNow's documentation

*Please note that a license will need to be redeployed to a device after a factory reset. Factory resets clear the license from the device.


FROM TEMPLATE BUILDXER:


Purchasing a license
- Licenses can be purchased from https://softwarelicensing.zebra.com/
- Documentation at https://softwarelicensing.motorolasolutions.com/documentation/index.html 
- Licenses can be purchased for a specific device based on the serial number or for larger deployments using the enterprise-wide deployment license
 
Installation 
- Licenses are presently only supported only on TC55 and TC75 devices right now.
- Licenses can be installed in one of the below two ways:
Option 1 : Using the built-in Settings app 
Use this option to install an Individual license or a fewer number of licenses.
- Copy the License.xml file downloaded from the licensing server to an accessible location on the device.
- Launch the Settings app -> About Phone –> Legal Information -> Symbol Licenses -> Menu -> Install license -> point to the file on the device.
- This will install the license. 
Option 2:  Using StageNow.
Use this option for larger deployments.
Please refer StageNow’s documention for further details.
StageNow includes wizards to deploy content specific to SimulScan to make this deployment simpler.
 
Usage 
- Nothing required.  Once a license is installed, the full functionality of SimulScan will be unlocked. 
- A given license enables SimulScan features leveraged via DW, EMDK or Rho [in the future] for a given device.
- A factory reset will remove the license entitlement.
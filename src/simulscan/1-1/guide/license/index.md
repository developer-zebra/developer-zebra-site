---
title: Licensing
layout: guide.html
product: SimulScan
productversion: '1.1'
---
## Overview
**The SimulScan solution is free when used with Zebra's [DataWedge](../../../../datawedge) service** to scan only barcodes from forms that contain fewer than 10 barcodes at a time. To scan 10 or more barcodes from a single form requires a SimulScan License. A License also is required to use SimulScan advanced features such as optical character recognition (OCR) and optical mark recognition (OMR), or to use [SimulScan APIs](../../api) to access functions from within an app or from [Enterprise Browser](../../../../enterprise-browser).  

_**A SimulScan License is required for each device that will access SimulScan advanced features**_. 

_**A License is NOT required to use the [SimulScan Demo App](../demo)**_.

## Demo License
Demo licenses are available for companies wishing to evaluate SimulScan or while integrating their app using SimulScan APIs. To request a demo license to enable SimulScan advanced features and APIs on a device:

* [Send email to NMV386@zebra.com](mailto:NMV386@zebra.com?Subject=SimulScan%20Demo%20License%20Request) 
* Include **"SimulScan Demo License Request"** in the subject header

A reply will be sent with access credentials for [Zebra's Software Licensing Portal](https://softwarelicensing.zebra.com/), generally within one business day. 

* **Follow directions below** to download and [apply the license](#applyingalicense). 

## Device License
SimulScan licenses are purchased through Zebra Technologies product resellers. Licensees receive an email with access credentials for the [Zebra Enterprise Software Licensing system](https://softwarelicensing.zebra.com/), where licenses are allocated to devices by an administrator. The general process is explained below. For additional help, please refer to [Licensing documentation](https://softwarelicensing.zebra.com/documentation/index.html). 

**License types**:
* **Device-specific License -** assigned to a specific device based on the product name and serial number. This License will fail if an attempt is made to apply it to a device other than the device to which it was originally assigned.

* **Deployment License -** works across an entire device deployment. This is useful for remote or mass-deployment scenarios. The Deployment key is generated on the licensing website.

Both license types can be applied using either of the methods below.  

### Applying a License
Licenses can be deployed on one or more devices manually, or remotely using [Zebra StageNow](../../../../stagenow) or a compatible mobile device management (MDM) system.

**Manual Deployment**:

1. **Download the** `SDC_License.xml` **file** from the licensing server to a local PC
2. **Push the License file to the target device** that will be used for scanning
3. In the Settings panel, select **About Phone –> Legal Information -> Symbol Licenses -> Menu -> Install license**
4. Navigate to the License file and select it

**Automated remote deployment** 

1. Launch the StageNow wizard for mass-deployment of SimulScan
2. Use the deployment key generated from the licensing website. 

Once deployed on the device via SimulScan, the licenses are automatically installed. For more details, please refer StageNow's documentation

*	Please note that a license will need to be redeployed to a device after a factory reset. Factory resets clear the license from the device.


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
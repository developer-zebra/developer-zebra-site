---
title: Licensing
layout: guide.html
product: SimulScan
productversion: '1.1'
---
## Overview
SimulScan can be used without a License to scan barcodes only, provided that no more than nine (9) barcodes are scanned from a single Document, and that the scanning app is associated with the Zebra [DataWedge](../../../../datawedge) scanning service. **A SimulScan License is required for scanning 10 or more barcodes at a time, for access to advanced features** such as optical character recognition (OCR), optical mark recognition (OMR) or to use [SimulScan APIs](../../api) to access SimulScan functions from within an app or from [Enterprise Browser](../../../../enterprise-browser).  

*A SimulScan License is required for each device that will access SimulScan advanced features*. 

**A license is NOT required to use the [SimulScan Demo App](../demo)**.

## Demo License
Demo Licenses are available for customers evaluating SimulScan, and for developers that are about to begin integrating SimulScan into their applications. To request a demo license to enable the SimulScan functionality and enable the programming interfaces on a device, please email NMV386@zebra.com with the subject header, "SimulScan Demo License Request."

Demo licenses are generally sent within one business day of being requested.

Device License

SimulScan is sold today as a device license. Licenses may be purchased from a Zebra Technologies product reseller. Once a license is purchased or a demo license is requested, an email will be sent to the customer with a username and password to the Software Licensing Portal (https://softwarelicensing.zebra.com/).

In order to gain access to the licensing website, you must be given a login and allocated licenses by an administrator. Website documentation and navigation help can be found on the website's documentation site at https://softwarelicensing.zebra.com/documentation/index.html

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
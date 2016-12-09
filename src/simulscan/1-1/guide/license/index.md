---
title: SimulScan Licensing
layout: guide.html
product: SimulScan
productversion: '1.1'
---
## Overview
**The SimulScan solution is free when used with Zebra's [DataWedge](../../../../datawedge) service** to scan only barcodes<!-- _<u>and</u>_ to scan fewer than 10 barcodes at a time. Scanning 10 or more barcodes from a single form requires a SimulScan license. --> A license is required for access to advanced features such as optical character recognition (OCR) and optical mark recognition (OMR), or to use [SimulScan APIs](../../api) to access SimulScan functions from within a custom app or when using it with [Enterprise Browser](../../../../enterprise-browser).

**General Licensing Rules**:

* **A SimulScan license is required for each device** that will access SimulScan advanced features. 
* **A Device-specific License** is assigned based on a product name and serial number, and will fail if transferred to a different device.
* **A Deployment License** works on all devices in a deployment, and is intended for remote- or mass-deployment scenarios. 
* **The Deployment License Key** is user-generated on the licensing website.
* **Demo licenses are available** for evaluation and early integration. 
* **A license is not required to use the [SimulScan Demo App](../demo)**.
* **A Factory Reset clears the license** from the device; redeployment is required. 

-----

###I. Contact a Reseller 
The first step in obtaining a license is to engage with Zebra directly or with a Zebra reseller. To get started, use one of the following Zebra resources: 

* **[Find a Zebra Partner](https://www.zebra.com/us/en/partners/find-a-zebra-partner.html) -** form for submitting an inquiry via the web
* **[How to Select a Channel Partner](https://www.zebra.com/us/en/partners/find-a-zebra-partner/selecting-the-right-channel-partner.html) -** explains the types of partners that engage with Zebra and some of their technologies and specialties
* **[Partner Interaction Center](https://www.zebra.com/us/en/partners/partner-interaction-center.html) -** info for contacting Zebra's existing global partner network
* **[Zebra Corporate Numbers and Links](https://www.zebra.com/us/en/about-zebra/contact-zebra.html) -** broken down by global region
* **[Global Marketing Contact Center](https://www.zebra.com/us/en/about-zebra/contact-zebra/marketing-contact-center.html) -** broken down by global region and country

-----

###II. Access Licensing System
After a licensing agreement is arranged with Zebra or a Zebra reseller, an email will be sent to the licensing company's representative containing user credentials. 

* **Log into the [Zebra Enterprise Software Licensing system](https://softwarelicensing.zebra.com/) to:** 
	* Place an order for device licenses (see image below)
	* See the status of existing orders
	* Assign licenses to devices or deployments
	* View current license inventory and assignments

![img](addorder.png)
_Options for SimulScan licensing might vary from the image shown_.  
<br>

-----

###III. Assign License(s)
Once the desired number of license(s) are purchased, they must be assigned to device(s) before being deployed commercially. Licenses can be deployed manually or remotely using [Zebra StageNow](../../../../stagenow) or a compatible mobile device management (MDM) system.

#### Manual Deployment
**&#49;. Enter the device model and serial number** (as shown) and other required information and **Press Submit** when done. 
![img](assignlicense.png)
_Individual licenses must be applied manually. Deployment licenses can be deployed remotely_.
<br>

**&#50;. Download the** `SDC_License.xml` **file** from the licensing server to a local PC:
![img](downloadlicense.png)
_Licenses are tied to the device model and serial number and will fail if deployed elsewhere_.  
<br>

**&#51;. Push the License file to the device(s)**.

**&#52;. In the Settings panel, select About Phone –> Legal Information -> Symbol Licenses -> Menu -> Install license**.

**&#53;. Navigate to the License file** and select it.

**Manual license deployment is complete**. 

#### Remote deployment

1. Generate a Deployment Key on the Licensing website. 
2. Launch the StageNow wizard and select "SimulScan mass-deployment."
3. Input the Deployment Key when prompted. 
4. Deploy the Key to devices.  



Once deployed to the device, SimulScan licenses are installed automatically. For details, please refer to [StageNow documentation](../../../../stagenow). 

-----

## Demo License
Demo licenses are available for companies wishing to evaluate SimulScan or while integrating a custom app using SimulScan APIs. To request a demo license to enable SimulScan advanced features and APIs on a device:

* [Send email to NMV386@zebra.com](mailto:NMV386@zebra.com?Subject=SimulScan%20Demo%20License%20Request) 
* Include **"SimulScan Demo License Request"** in the subject header

A reply will be sent with access credentials for [Zebra's Software Licensing Portal](https://softwarelicensing.zebra.com/), generally on the next business day. 

* **Follow directions** to [assign the license](#iiiassignlicense). 

<!--
## Device License
SimulScan licenses are purchased through Zebra Technologies product resellers. Licensees receive an email with access credentials for the [Zebra Enterprise Software Licensing system](https://softwarelicensing.zebra.com/), where licenses are allocated to devices by an administrator. The general process is explained below. For additional help, please refer to [Licensing documentation](https://softwarelicensing.zebra.com/documentation/index.html). 

**License types**:
* **Device-specific License -** assigned to a specific device based on the product name and serial number. This License will fail if an attempt is made to apply it to a device other than the device to which it was originally assigned.

* **Deployment License -** works across an entire device deployment. This is useful for remote or mass-deployment scenarios. The Deployment key is generated on the licensing website.

Both license types can be applied using either of the methods below.  


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
Please refer StageNow’s documentation for further details.
StageNow includes wizards to deploy content specific to SimulScan to make this deployment simpler.
 
Usage 
- Nothing required.  Once a license is installed, the full functionality of SimulScan will be unlocked. 
- A given license enables SimulScan features leveraged via DW, EMDK or Rho [in the future] for a given device.
- A factory reset will remove the license entitlement.

-->
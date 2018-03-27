---
title: Agent Persistence
layout: guide.html
product: EMM Toolkit
productversion: '2.0'
---

## Overview

This document explains how to preserve device administrator (DA) and device owner (DO) settings, and to persist EMM agents and/or services so that devices return to a manageable state following an Enterprise Reset.


<img alt="image" style="height:350px" src="legacy_staging_mechanism.png"/>
_Zebra "legacy" staging process_
<br>

-----

from slide 15:

* Work out the required set of Staging Steps​
 * Minimum Staging Steps required to bring a device under management​
 * Most appropriate ordering of those Staging Steps​
 * Most appropriate division into Config Section, a Deployment Section, and a Persist Section​
* Create and test using StageNow Workstation Tool to verify expected experience and behavior​
 * Decide where Deployment Section and Persist Section XML Files will reside​
 * Will there be multiple locations (e.g. EMM Server, Deployment Servers, etc.) from which these files might be pulled?​
 * What protocol(s) will be used?  What security will control access to files on these locations?​
 * How will the EMM Server know which URI to use in the Config Section to download the Deployment Section?​
* Develop EMM Server Code to create and deploy all required files​
 * EMM Agent APK, Configuration File, etc.​
 * Deployment and Persist Section XML Files​
* Develop EMM Server Console UI Code to Generate XML and Staging Barcodes​
 * Select Wi-Fi Configuration to use​
 * Select EMM Mode, Deployment Server, etc.​
 * Disposition of Staging Barcodes (e.g. View, Print, Email)​
 * Storage of generated XML and/or Staging Barcodes for later use

slide 16 - recom staging mech, notes about staging and persistence 

* Optimum Staging is best accomplished by dividing the Staging Steps into three Sections: Config, Deployment, and Persist​
 * The primary reason for separating Deployment Staging Steps for from Persist Staging Steps that is to avoid unnecessary repetition of Staging Steps that do not need to be repeated following an Enterprise Reset​
* For optimum support of persistence of management across an Enterprise Reset:​
 * The Persist Section should NOT download files from the EMM Server, because it is likely that there will NOT be a network connection available at the time the Persist Section is executed following an Enterprise Reset​
 * It is highly recommended that the Deployment Section download any files that will be referenced by the Persist Section to a location that will survive an Enterprise Reset​
* To achieve persistence of management across an Enterprise Reset, the Persist Section should:​
 * Install the EMM Agent APK and any other APKs on which it may be dependent, all of which should be located where they will survive an Enterprise Reset, as noted above​
 * Enroll the EMM Agent as a Device Owner, if running in DO Mode​
 * Configure the EMM Agent as required to contact the appropriate EMM Server instance​
 * Launch the EMM Agent​
* To achieve persistence of management across an Enterprise Reset, the EMM Agent itself should:​
 * Store any critical configuration, especially network configuration, in a location that will survive an Enterprise Reset​
 * Automatically reapply that critical configuration when the EMM Agent is launched by the Persist Section following an Enterprise Reset​
 * Most customers will expect the EMM, not the Staging process, to control access to the Production network configuration, since it will likely change over time.  As a result, the EMM Agent, not the Staging process, should ensure that the Production network configuration is re-established following an Enterprise Reset​

-----

<img alt="image" style="height:350px" src="staging_flowchart_no_title.png"/>
_Staging processes showing Config, Deploy and Persist sections_
<br>


**The Config Section -** refers to XML that is sent to the StageNow API to produce barcodes that will be executed during Initial Staging​
* It is called the Config Section because it contains Staging Steps related to configuration (e.g. Wi-Fi) that absolutely MUST be in the barcodes in order for successful Staging to occur since it can come from nowhere else​
* Everything in the Config Section will be encoded in the barcodes and hence will contribute to barcode size/count​
* To reduce barcode size/count, you MUST reduce the amount of data the Config Section contributes to the barcodes​

**The Deployment Section -** refers to XML that will be downloaded from a Server and executed during Initial Staging​. 
* It is called the Deployment Section because it typically contains Staging Steps related to deployment (e.g. downloading files) that typically do NOT need to be in the barcodes​
* The Deployment Section is typically downloaded and executed during initial Staging by Staging Steps contained within the Config Section​

**The Persist Section -** refers to XML that will be downloaded from a Server and executed during Initial Staging and following Enterprise Reset​
* It is called the Persist Section because it typically contains Staging Steps that must be executed during initial Staging AND following Enterprise Reset to restore conditions that need to be persistent​
* The Persist Section is typically downloaded and executed by Staging Steps contained within the Deployment Section​

-----

## Three-section Process


### Config​ Section

* **Wi-Fi**
 * Configure Staging WLAN​
* FileMgr
 * Download Deployment Section XML File from Server to Device​
* Batch	
 * Execute Deployment Section XML File​

### Deployment​

* FileMgr
 * Download Agent APK File from Server to Device​ to Persistent Location on Device​
* FileMgr
 * Download Agent Configuration File from Server​ to Persistent Location on Device​
* FileMgr
 * Download Persist Section XML File from Server to Device​ to Persistent Location on Device​
* Batch
 * Execute Persist Section XML File​

**Persist​**

* AppMgr
 * Install Agent APK File​
* Intent
 * Launch Agent APK and/or Enroll Agent APK as Device Owner​



-----
<!-- 

on a persistence-enabled device 

"As an EMM Partner I would like to know what the best practices are for persisting my DA and DO EMM Agents on Zebra devices so that I can ensure that I develop the solution properly so that devices return to a manageable state after an Enterprise Reset" 

that implements a secure Android launcher and/or its Kiosk Mode feature deployed using the Zebra StageNow administration tool or an enterprise mobile management (EMM) system such as those from SOTI or AirWatch. 

This process addresses configuration conflicts that exist between the Persistence Manager CSP and the Android Setup Wizard (SUW, also known as the "Welcome Screen") when attempting to restore settings of a secured device after it has been reset. To avoid these conflicts and restore the device to its original secure state, Zebra recommends the use of the "Setup Wizard Bypass" parameter of the Power Manager CSP. 

ZEBRA STAGENOW
When creating a persistent profile that includes an Enterprise Reset, use PowerMgr to set the "Bypass GMS Welcome Screen" parameter to True, as shown below. This will cause the Android Setup Wizard to be skipped when the device restarts following the reset.   

This guide explains how to persist an EMM agent and/or service on a device following an enterprise reset, a Zebra feature that erases alll device data **_except_** that which was designated as persistent.  


NOTE: The bypass setting does not persist on the device following an Enterprise Reset. If SUW bypass is desired following an Enterprise Reset, the setting (bypass=true) must be included in the same Profile that is used to initiate the Enterprise Reset. Note: The bypass flag was intended to be available as an option ONLY when Enterprise Reset is selected. However, MX 7.1 and 7.2 allow SUW bypass to be configurable regardless of the Enterprise Reset parameter setting. Once pushed to such devices, a bypass flag value of "true" will persist until an Enterprise Reset is executed or the flag is changed to "false" by a subsequent profile. 

VMWARE AIRWATCH
This section covers the specific procedures for using AirWatch to restore EHS and/or Kiosk Mode security settings on a device following an Enterprise Reset. 

IMPORTANT:
For restoration of any enterprise settings to be possible, the device must have been configured with the Zebra persistence framework in advance of the Enterprise Reset reset action. This is generally done during the initial device enrollment process. 

Enterprise settings also can be preserved immediately prior to an Enterprise Reset by using the fault tolerance settings of the AirWatch console. Zebra recommends that AirWatch customers execute Enterprise Reset in this manner. The state of such devices will be returned to their enrolled state in the EMM system (restoring the AirWatch Agent and Service) without intervention only if the device was originally enrolled using a barcode or sideload methodology.

Devices originally enrolled manually (by typing EMM server name and user credentials) cannot be returned to their enrolled state without further intervention. 

An Enterprise Reset will restore the latest Agent and Service only if the upgrade was performed through the Files/Action -> MDM Agent Upgrade method.

AIRWATCH NOTES
Devices are available for selection in List View varies by the group filtering settings of an organization.
Enterprise Reset can be selected for execution on more than one device at a time. 
The AirWatch agent will not execute an Enterprise Reset command on any device with a battery charge less than 50%. 
If an Enterprise Reset is sent to a device while it is being charged, the reset action will be executed when the battery charge level reaches 50%.   
AirWatch does not support persistence on devices in Android enterprise work-managed device mode.

 -->





-----

## See Also

* [About ActiveEdge](../about)
* [Administrative Guide](../setup)

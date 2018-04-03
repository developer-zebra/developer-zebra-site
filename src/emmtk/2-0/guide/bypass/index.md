---
title: Bypass Setup Wizard
layout: guide.html
product: EMM Toolkit
productversion: '2.0'
---

## Overview

On some Android devices running Google Mobile Services (GMS), it is possible to skip the Android Setup Wizard (SUW, also known as the "Welcome Screen") following an Enterprise Reset, which removes all non-persistent data from the device. Zebra offers two mechanisms for bypassing the Android Setup Wizard. 

**Mechanisms for SUW bypass**: 

* **Include a "Setup Wizard Bypass" command** in the staging profile. 
 * Requires MX 7.1 or higher on the device. 
 * Must be in the same profile as the Enterprise Reset action. [Learn more](/mx/powermgr/#setup-wizard-bypass). 
* **Scan a special barcode** 
 * Requires Android M or higher.
 * Supported only on [specific BSPs](#supportnotes).

> Applies only to devices with Google Mobile Services (GMS) and only when the Enterprise Reset is initiated by PowerMgr.

-----

## Setup Wizard Bypass

When staging manually, it's possible to skip the Android Setup Wizard on devices with **Android M and higher** by scanning the barcode below at any stage of the wizard. This feature is **<u>supported only on devices as indicated below</u>**. **IMPORTANT**: If the wizard is partially completed, data entered prior to the scan is applied. 

### Support Notes

The scan-to-bypass wizard feature works only on devices with OS images as indicated below.    

**8956-platform devices**:

* **Android Nougat** with BSP49 and higher
* **Android Marshmallow** with BSP21 (G-00-08) or higher 

<!-- WAITING FOR BSP # from ENG. 
**TC20/TC25 Devices**:

* **Android Nougat** with BSPxx or higher
 -->

-----

#### Skip wizard and run StageNow client:

<img style="height:50px" src="skip_suw_and_run_sn.png"/>
<br>



To update a device, visit the **[BSP download page](https://www.zebra.com/us/en/support-downloads/software/operating-system/tc51-operating-system-for-gms-devices.html)**.

-----

## See Also

* [About EMM Toolkit](../about)
* [Staging API Service](../api)



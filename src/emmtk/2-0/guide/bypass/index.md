---
title: Bypass Setup Wizard
layout: guide.html
product: EMM Toolkit
productversion: '2.0'
---

# `DRAFT`

**_Information subject to change without notice_**. 

-----

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

### Setup Wizard Manual Bypass

When staging manually, it's possible to skip the Android Setup Wizard on devices with **Android M and higher** by scanning the barcode below at any stage of the wizard. On devices with Android N and higher, scanning the barcode bypasses the Android **_and_** Zebra Setup Wizards (including Analytics opt-out). **If the Android Setup wizard is partially completed, data entered prior to the bypass scan is applied**. 

Scan-to-Bypass is **<u>supported only on these Zebra devices and minimum BSPs</u>**: 

* **TC51, TC56, TC70x and TC75x**:
 * **Android Marshmallow** with Full Image `01-21-04.1-MG` (BSP21) or newer 
<br>
* **MC3300, TC51, TC56, TC70x, TC75x and VC80x**:
 * **Android Nougat** with Full Image `01-01-49NG-00-A` (BSP49) or newer
<br>
* **TC20/TC25 devices**:
 * **Android Nougat** with Full Image `04-14-30-0-NG-00-M1` or newer

#### Notes 
* **Android Setup-wizard bypass applies only to GMS devices**; non-GMS devices do not employ the wizard.
* **Scan-to-bypass functionality is present in all BSPs newer than those listed above**.
* Go to **Settings > About phone > Build number** to display the BSP in a device.

#### Update Device
To update a device for use with the bypass barcode, visit to the relevant page below and follow instructions there. 

* **[TC51, TC56, TC70x, TC75x OS update page](https://www.zebra.com/us/en/support-downloads/software/operating-system/tc70-operating-system-gms.html)** - Android M, N or newer
* **[MC33 OS update page](https://www.zebra.com/us/en/support-downloads/mobile-computers/handheld/mc3300.html)** - Android N or newer
* **[VC80x OS update page](https://www.zebra.com/us/en/support-downloads/mobile-computers/vehicle-mounted/vc80x.html)** - Android N or newer
* **[TC20/TC25 OS update page](https://www.zebra.com/us/en/support-downloads/mobile-computers/handheld/tc20.html)** - Android N or newer

-----

#### Skip wizard and run StageNow client:

<img style="height:50px" src="skip_suw_and_run_sn.png"/>
<br>

-----

## See Also

* [About EMM Toolkit](../about)
* [Staging Service API](../api)
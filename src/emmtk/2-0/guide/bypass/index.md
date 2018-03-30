---
title: Bypass Android Setup Wizard
layout: guide.html
product: EMM Toolkit
productversion: '2.0'
---

## Overview

On GMS devices with MX 7.1 or higher, it is possible to automatically bypass the Android Setup Wizard (also known as the "Welcome Screen") following an Enterprise Reset. The Setup Wizard also can be bypassed manually by scanning a barcode. [See below](#manuallyskipwizard). 

> Applies only to devices with Google Mobile Services (GMS) and only when the Enterprise Reset is initiated by PowerMgr.


More [about Setup Wizard Bypass](/mx/powermgr/#setup-wizard-bypass) MX feature. 

-----

### Setup Wizard Manual Bypass

If the Android setup Wizard appears, it's possible to skip it by scanning the barcode below during any phase of the wizard. 


-----

### Manually Skip Wizard

For devices being staged manually, it's possible to skip the Android Setup Wizard on devices with **Android M and higher** by scanning the barcode below when the wizard appears or at any time thereafter. **<u>Supported only on devices as indicated below</u>**. 

#### Skip wizard and run StageNow client:

<img style="height:50px" src="skip_suw_and_run_sn.png"/>
<br>

#### Support Notes

The scan-to-bypass SUW feature works only on devices with OS images as indicated below.    

**8956-platform Devices**:

* **Android Nougat** with BSP49 and higher
* **Android Marshmallow** with BSP21 (G-00-08) or higher 

<!-- WAITING FOR BSP # from ENG. 
**TC20/TC25 Devices**:

* **Android Nougat** with BSPxx or higher
 -->

To update a device, visit the **[BSP download page](https://www.zebra.com/us/en/support-downloads/software/operating-system/tc51-operating-system-for-gms-devices.html)**.

-----

## See Also

* [About ActiveEdge](../about)
* [ActiveEdge Usage Guide](../usage)



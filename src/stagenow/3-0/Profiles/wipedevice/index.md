---
title: Wipe a Device
layout: guide.html
product: StageNow
productversion: '3.0'
---

##Overview 

Use this Wizard to erase data on the device using Factory Reset (all data) or Enterprise Reset (only non-persistent data). **See important additional information [about reset actions](/mx/powermgr/#reboot)**. 

### Bypass Notes

* **On devices with MX 7.1 or higher**, it is possible to automatically bypass the Android Setup Wizard (also known as the "Welcome Screen") following an Enterprise Reset. More [about Setup Wizard Bypass](/mx/powermgr/#setup-wizard-bypass). 

* **On devices with Android M and higher**, it's also possible to skip the Android Setup Wizard by scanning a barcode when the wizard appears or at any time thereafter. [See below](#setupwizardmanualbypass) for details. 

-----

### Wipe a Device

**To create a "Wipe a Device" profile**:

1. Select "Create New Profile"

2. Select the MX version from the drop-down menu

3. Select the "Wipe a Device Wizard" and select "Create"

    ![img](../../images/profiles/WipeDevice_name.jpg)

4. Enter a name for the profile. Select "Start" to proceed.

    ![img](../../images/profiles/WipeDevice_method.jpg)

    Note: During profile creation, an indicator at the top-right corner of the window displays creation status.

5. Choose the desired erasure method. Select "Continue" to proceed.

    * Select Enterprise Reset to destroy device-specific data and return the device to its persistent default state. All non-persistent data is discarded.
    * Select Factory Reset to destroy all data and return the device to its factory defaults. No user content persists.

   ![img](../../images/profiles/WipeDevice_setting.jpg)

6. Select the required information, and then select Continue. See [Setting Types / Power](../../csp/power) for more information.

7. Select "Continue" to proceed to the [Review window](../../stagingprofiles?Review).

-----

### Setup Wizard Manual Bypass

When staging manually, it's possible to skip the Android Setup Wizard on devices with **Android M and higher** by scanning the barcode below at any stage of the wizard. On devices with Android N and higher, scanning the barcode bypasses the Android **_and_** Zebra Setup Wizards (including Analytics opt-out). **If the wizard is partially completed, data entered prior to the bypass scan is applied**. 

Scan-to-Bypass is **<u>supported only on devices with these minimum BSPs</u>**: 

* **8956-platform devices (TC51, TC56, TC70x, TC75x, MC3300 and VC80x, see below)**:
 * **Android Nougat** with Full Image `01-01-49NG-00-A` (BSP49) + LifeGuard Update 07 or newer
 * **Android Marshmallow** with Full Image `M-XX-21-04.01-G-00-08` (BSP21) or newer 

* **TC20/TC25 devices**:
 * **Android Nougat** with Full Image `04-14-30-0-NG-00-M1` or newer

**Notes**:  
* Android Setup-Wizard bypass applies only to GMS devices; non-GMS devices do not employ the wizard.
* Scan-to-Bypass functionality is present in all BSPs newer than those listed above.
* The BSP in a device is displayed in **Settings > About phone > Build number**.

#### Update a Device
To update a device for use with the bypass barcode, visit to the relevant page below and follow instructions there. 

* **[TC51, TC56, TC70x, TC75x OS update page](https://www.zebra.com/us/en/support-downloads/software/operating-system/tc70-operating-system-gms.html)** - Android M or N
* **[MC3300 OS update page](https://www.zebra.com/us/en/support-downloads/mobile-computers/handheld/mc3300.html)** - Android N 
* **[VC80x OS update page](https://www.zebra.com/us/en/support-downloads/mobile-computers/vehicle-mounted/vc80x.html)** - Android N
* **[TC20/TC25 OS update page](https://www.zebra.com/us/en/support-downloads/mobile-computers/handheld/tc20.html)** - Android N

-----

#### Scan to skip wizards and run StageNow client:

<img style="height:50px" src="../../images/profiles/skip_suw_and_run_sn.png"/>
<br>

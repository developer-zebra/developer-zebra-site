---
title: EMDK For Xamarin
layout: guide.html
product: EMDK For Xamarin
productversion: '2.7'
---

## Overview

EMDK for Xamarin is an IDE extension that provides developers with a comprehensive set of tools to easily create powerful line-of-business applications for Zebra Android devices using C# skills and tools. EMDK for Xamarin includes class libraries, sample applications and source code, and all associated documentation for building applications that take full advantage of the power of Zebra devices.

EMDK for Xamarin inserts the Zebra-exclusive Profile Manager technology within the IDE, providing a GUI-based development tool for configuring Zebra devices. This allows developers to write fewer lines of code, produce fewer errors, and reduce overall development time and effort.

-----

## New in v2.7

* **[Support for MX 7.2](../stagingprofiles/#mx6xselection)** adds the following Setting Types and features:

* [Audio Manager](../csp/audiomgr) new CSP:
 * Controls whether audio on a device plays only through a connected handset or through the handset and the built-in device speaker (supported on the Zebra VC80x only).
* [Display Manager](../csp/display) new feature:
 * On VC80 devices, adds the ability to force the display to “Stay Awake” and remain on.
* [Power Manager](../csp/power) new feature:
    * Turn ON/OFF “Doze Mode” energy saving features on the device. When enabled, only specially designated apps can prevent the device from entering a low-power state to preserve battery life. 
* [Remote Scanner Manager](../csp/rsm) new feature:
 * Supports RS-507 and DS-3608 scanners
* [Settings Manager](../csp/settingsmgr) new feature:
 * Enable/Disable application notification control on devices running Android Nougat

### Devices Supported

EMDK for Xamarin has been designed to work with all Zebra mobile computers running Android. 

**The following devices have been tested and validated**:

* ET5X   - Lollipop
* MC18   - KitKat
* MC33   - Nougat
* MC40   - KitKat 
* MC67   - KitKat	 
* MC92   - KitKat 
* TC25   - Nougat
* TC51   - Marshmallow, Nougat
* TC55   - KitKat	 
* TC56   - Marshmallow, Nougat
* TC70   - KitKat, Lollipop
* TC70x  - Marshmallow, Nougat
* TC75   - KitKat, Lollipop
* TC75x  - Marshmallow, Nougat 
* TC8000 - KitKat,Lollipop
* WT6000 - Lollipop

### Development Tools Supported

* **Windows**
    * Visual Studio
        * 2013
        * 2015
        * 2017
* **Mac**
    * Xamarin Studio
        * 6.x

### Compatibility Notes

* When upgrading to a new version of EMDK for Xamarin, **previous versions must be uninstalled**. Failure to remove previous versions will result in an incomplete installation of the new extension. 
* Support for KitKat (Android 4.4.3 or higher) devices has been dropped. 
* For devices running Android Lollipop or higher, a device-specific update is distributed with the latest BSP or security incremental patch for that device.

-----

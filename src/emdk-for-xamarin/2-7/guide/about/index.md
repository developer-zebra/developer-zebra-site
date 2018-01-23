---
title: EMDK For Xamarin
layout: guide.html
product: EMDK For Xamarin
productversion: '2.7'
---
The EMDK for Xamarin provides developers with a comprehensive set of tools to easily create powerful line of business applications for Android enterprise mobile computing devices using their C# skills and tools. The EMDK for Xamarin includes class libraries, sample applications with source code, and all of the associated documentation for building applications take full advantage of what Zebra devices have to offer.

## Important News

* When upgrading to a new version of EMDK for Xamarin IDE extension, `previous versions must be uninstalled`. Failure to remove previous versions will result in an incomplete install of the new EMDK for Xamarin IDE extension. 
* EMDK for Xamarin support for all KitKat (Android 4.4.3 or higher) devices has been dropped. - The EMDK for Xamarin v2.5 was the final version distributing EMDK OS update package with the PC/MAC installations for KitKat devices. For all Lollipop or higher devices, the EMDK update for a specific device will be distributed with the latest BSP or security incremental patch.

## Devices Supported
EMDK for Xamarin has been designed to work with all Zebra mobile computers running Android. 

OLD OLD OLD

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

## Development Tools Supported

* **Windows**
    * Visual Studio
        * 2013
        * 2015
        * 2017
* **Mac**
    * Xamarin Studio
        * 6.x

##What's New in Version 2.7



OLD OLD OLD 
* Added support for Nougat devices
* Added support to scan barcode using Camera on TC51, TC56, TC70x and TC75x Nougat (Android 7.1.2) devices. This is supported if the system has Scanner Framework 19.0.8.0 or above.
* Added support for MX v7.1 in Profile Manager:
    * License Manager – Added new feature to perform license management operations such as configure license source, license activation etc.
    * Display Manager – Added ability to control display blanking.
    * Key Mapping Manager – Added macro keys, brightness keys and keyboard as options
    * Wireless Manager – Added ability to select antenna to use for both WiFi and Bluetooth.
    * Power Manager
        * Added ability to select ports and specify port action.
        * Added ability to select the Heater and specify heater action
        * Added ability to configure auto power options
        * Added ability to disable GMS Welcome Screen on Enterprise Reset
        * Added ability to specify the temperature at which the heater should turn ON or OFF
    * UI Manager
        * Added ability to enable/disable Navigation Bar.
        * Added ability to enable/disable Recent App button.
    * Wi-Fi
        * Added ability to enable/disable Wireless Network Management (802.11v).
* Enhanced SerialComm API:
    * Added a feature to concurrently communicate with the multiple connected serial devices on VC80x
* Enhanced Barcode Manager API with the following features:
    * Added support for new USB Scanner DS3608: This scanner is supported with VC80x and ET5X devices.
* Terminated EMDK for Android support for all KitKat (Android 4.4.x) devices. - The Xamarin EMDK v2.5 was the final version supporting KitKat (Android 4.4.x) devices. Starting from Xamarin EMDK v2.5, only the Lollipop or higher devices are supported.
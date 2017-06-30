---
title: EMDK For Xamarin
layout: guide.html
product: EMDK For Xamarin
productversion: '2.4'
---
The EMDK for Xamarin provides developers with a comprehensive set of tools to easily create powerful line of business applications for Android enterprise mobile computing devices using their C# skills and tools. The EMDK for Xamarin includes class libraries, sample applications with source code, and all of the associated documentation for building applications take full advantage of what Zebra devices have to offer.

## Important News

* When Upgrading to a new version of EMDK for Xamarin IDE extension, `previous versions must be uninstalled`. Failure to remove previous versions will result in and incomplete install of the new EMDK for Xamarin IDE extension. 

## Devices Supported
EMDK for Xamarin has been designed to work with all Zebra mobile computers running Android. 

**The following devices have been tested and validated**:

* ET5X   - Lollipop
* MC18   - KitKat
* MC40   - KitKat 
* MC67   - KitKat	 
* MC92   - KitKat 
* TC51   - Marshmallow
* TC55   - KitKat	 
* TC56   - Marshmallow
* TC70   - KitKat, Lollipop
* TC70x  - Marshmallow
* TC75   - KitKat, Lollipop
* TC75x  - Marshmallow
* TC8000 - KitKat,Lollipop
* WT6000 - Lollipop

## Developent Tools Supported

* **Windows**
    * Visual Studio
        * 2013
        * 2015
        * 2017
* **Mac**
    * Xamarin Studio
        * 6.x

##What's New in Version 2.4

* Added support for MX v6.3 in Profile Manager:
    * Bug Report Manager – Added new custom bug reporting feature for gathering software bug reports in addition to the standard Android bug reporting mechanism.
    * Cellular Manager – Added new feature to enable/disable mobile data and set the data usage limit.
    * DHCP Manager – Added new feature to enable/disable features such as client identifier, FQDN and add custom DHCP options such as Vendor Specific 230.
    * Remote Scanner Manager – Added support for DS3678 Bluetooth scanner with the features such as firmware update, paging.
    * Touch Manager – Added Touch Mode support for ET5x devices.
* Enhanced Barcode Manager API with the following features:
    * Added support for new Bluetooth Scanner DS3678:
        * Added new enum value "BLUETOOTH_IMAGER_DS3678" under BarcodeManager.DeviceIdentifier for selecting this scanner.
        * Added new reader parameter “pairAfterScannerReboot” in ScannerConfig.ReaderParams.ReaderSpecific.ImagerSpecific to enable/disable automatic reconnection after DS3678 scanner reboot.
* SimulScan support in Xamarin.
* Enhanced DataCapture feature in the Profile Manager:
    * Added support for new Bluetooth Scanner DS3678:
        * Added new enum under BarcodeManager.DeviceIdentifier for selecting the DS3678 Bluetooth Scanner.
        * Added support to enable/disable automatic re-connection after DS3678 scanner reboot. Refer to the parameter “ScannerConfig.ReaderParams.ReaderSpecific.ImagerSpecific.pairAfterScannerReboot” for details.
* Enhanced DataCapture feature in the Profile Manager:
    * Added support for new Bluetooth Scanner DS3678:
        * Added support selecting the DS3678 Bluetooth Scanner.
        * Added support to enable/disable automatic re-connection after DS3678 scanner reboot. Refer to the parameter “Keep Pairing Info After Reboot” for details.
* `Fixed`: NotificationDevice.release() fails after re-connection of RS6000 if BarcodeManager.addconnectionlistener() is called.
* `Fixed`: The vibrating functionality will continue for the remaining period when the External Vibrator accessory is disconnected and reconnected.



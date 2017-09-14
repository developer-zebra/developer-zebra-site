---
title: EMDK For Xamarin
layout: guide.html
product: EMDK For Xamarin
productversion: '2.5'
---
The EMDK for Xamarin provides developers with a comprehensive set of tools to easily create powerful line of business applications for Android enterprise mobile computing devices using their C# skills and tools. The EMDK for Xamarin includes class libraries, sample applications with source code, and all of the associated documentation for building applications take full advantage of what Zebra devices have to offer.

## Important News

* When upgrading to a new version of EMDK for Xamarin IDE extension, `previous versions must be uninstalled`. Failure to remove previous versions will result in an incomplete install of the new EMDK for Xamarin IDE extension. 

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

##What's New in Version 2.5

* Added support for MX v7.0 in Profile Manager:
    * App Manager – Added new feature to add/remove app form battery optimization list.
    * Cert Manager – Fixed: Deleting uninstalled certificate from UI.
    * Bug Report Manager
        * Added ability to disable triggering reports via intent.
        * Added ability to disable taking snapshots.
    * Cellular Manager
        * `Fixed:` Gracefully handle invalid OSX version in CellularMgr CSP: reject only those parameters that depend on OSX.
        * `Fixed:` Improve error handling for SIM selection and CellularData parameters.
    * Wi-Fi
        * Added support for 802.11ac and 802.11n.
        * Added 802.11ac and 802.11n parameters in advanced parameters.
    * Bluetooth Manager – Added new feature to support for admin to add new silent pairing rule by providing just the name of the remote Bluetooth device.
* Enhanced Barcode Manager API to support Unique Device Identification (UDI) barcodes to be used with TC51/TC56 healthcare devices:
    * Added support to enable/disable the UDI Standards such as GS1, HIBCC and ICCBBA. Refer to the parameter “ScannerConfig.UdiParameters” for details.
    * Added new enum in ScannerConfig:
        * ScanMode - Descries the available scanning modes such as Single and UDI.
    * Added new reader parameter in ScannerConfig.ReaderParameters.ReaderSpecifics.ImagerSpecifics:
        * scanMode - Sets the scan mode. This allows to select one type from the ScanMode enum.
    * Enhancements to ScanDataCollection class:
        * Added new property "LabelIdentifier()" to get the decoded type of the barcode. Note: This is especially applicable for UDI decoding. Use "LabelType" defined in each data item to get the individual barcode label types.
        * Added new property "TokenizedData()" to get the list of tokenized data received after processing the raw scanner data.
    * Added new class TokenizedData to provide access to tokenized scan data:
        * "Tokens" - Returns all the tokens with it's data.
        * GetTokensByKey(String key) - Returns the tokens for the given token key. If data has multiple values, it returns all the tokens.
    * Update to ScannerResults enum:
     * Added new enum value "DATA_PARSING_FAILURE" to notify when data parsing failed.
* Enhanced DataCapture feature in the Profile Manager:
    * Added support to enable/disable the UDI Standards such as GS1, HIBCC and ICCBBA to be used with TC51/TC56 healthcare devices. Refer to “UDI parameters” section for details.
    * Scanning Mode - Sets the scanning mode. This allows to select one mode (Single or UDI) at a time.
    * Use auto when not supported - Use auto when the scanner type is not supported while importing the profile to a different device.
* Enhanced SerialComm API:
    * Feature type SERIALCOMM has been deprecated and introduced a new feature type SERIALCOMM_EX.
    * New classes added “SerialCommMgrEX”. You may get a new SerialCommMgrEX instance by calling EmdkManager.GetInstance(EMDKManager.FEATURE_TYPE.SerialcommEx);
    * Added support to enumerate available serial ports on a device.
        * SerialCommMgrEX.SupportedPorts - Returns list of supported serial ports information.
    * Added support to select a single serial port by passing a PortInfo object.
        * SerialCommMgrEX.GetPort(SerialPortInfo serialPortInfo) - This method returns the SerialComm object if the serial port info specified is valid. The SerialComm object created will be singleton object for a specific serial port.
* `Fixed:` SimulScan issue where template parameters are not getting set after a timeout or cancel event.


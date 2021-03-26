---
title: Extended Scanner Parameter Guide
layout: guide.html
product: EMDK For Android
productversion: '9.0'
---

##Overview

**This guide explains the use of extended scanner parameters**, which allow for the setting and retrieval of scanning parameters not yet implemented within the EMDK class hierarchy or of those being added in the future. **Introduced with EMDK for Android 9.0**, `ScannerConfig.setParameter()` and `ScannerConfig.getParameter()` are pass-through APIs that (respectively) can be used to set and get scanner parameter configurations for use in scanning applications. If new scanning parameters arise and are not listed with a basic set of EMDK APIs, developers can use these APIs to set such parameters.

**NOTE: This guide requires a basic knowledge of the use of EMDK-A scanning APIs**. If necessary, please become familiar with the guides below before proceeding. 
* **[EMDK Basic Scanning Tutorial](https://techdocs.zebra.com/emdk-for-android/latest/tutorial/tutBasicScanningAPI/)**
* **[EMDK Barcode Scanning API Programmer's Guide](https://techdocs.zebra.com/emdk-for-android/latest/guide/barcode_scanning_guide/)**

-----

## Supported Parameters

### Remote Trigger Status

* **Parameter**: remote_trigger_status
* **Description**: Notifies an app through the Android KeyEvents mechanism of remote trigger presses of a connected Bluetooth scanner as KeyUp and KeyDown events. **Scanner must be Enabled to receive the trigger press notifications**. 
* **Supported values**: 0 – Disable, 1 – Enable
* **Supported device(s)**: WT6300

-----

<!-- BELOW BASICLY REPEATS ABOVE:  

Extended scanner parameter configuration APIs are used for configuring and reading scanner parameters and values that are not supported through the [EMDK basic scanning APIs](../../apimenu). Developers currently can use the existing class structure and IntelliSense with a `ScannerConfig` object such as `config.scanParams.decodeHapticFeedback`, but are unable to use that method to read or set new scanning parameters that are now supported by extended scanner parameter configuration APIs. 

WHAT ARE THOSE PARAMERERS? 
New parameters not supported by existing class structure are listed in here >>> `link to a new page with latest params`<<<. Developers need to refer those parameters and supported values from above document and pass the parameter information to extended APIs.

-----
 -->

## API Usage

### String getParameter(String paramName)

#####Description: 
Gets the current value of the specified parameter which is available at the scanner. This method will not return the currently changed parameter value of ScannerConfig object until next getConfig() API call.

#####Input parameters:
paramName: name of the scanner parameter

#####Return type: 
String 

#####Return value:
Current value of the parameter (or exception if the parameter name is unsupported)

-----

### Void setParameter(String paramName, String paramValue)

#####Description: 
Sets the given value to the specified parameter. Setting this parameter updates the existing parameter value of `ScannerConfig` object at the next `setConfig()` call.

#####Input parameters:
* **paramName**: name of the parameter 
* **paramValue**: value to be set for the parameter

-----

## Sample Code

<!-- 
Supported extended scanner parameter list
Please refer this >>> link to a new page with latest params<<<  section of EMDK documentation for get all the extended scanner parameter configurations and supported values.

HUH? 
This is in line with previous scanner configuration APIs. It needs to get the object of `ScannerConfig` to load the current settings before using extended scanning parameter APIs. 
 -->

### Set Remote Trigger Status

The following code segment shows how to set the value of the `remote_trigger_status` parameter using extended scanner configuration APIs. 

        :::java
        try{
        // Get the current scanner configuration
            ScannerConfig config = scanner.getConfig();

        // Set a new parameter through extended APIs
            if (config.isParamSupported("remote_trigger_status")) {
                config.setParameter("remote_trigger_status", "0”);
        }

        // Set older parameter through the class structure
            if (config.isParamSupported("config.decoderParams.code128.enabled")) {
                config.decoderParams.Code128.enabled = true;
        }

        // Set the scanner configuration
            scanner.setConfig(config);


        // Read the parameter value to confirm whether it was set
            ScannerConfig config2 = scanner.getConfig();
            String paramvalue = config2.getParameter("remote_trigger_status");

            }catch (ScannerException e) {
        // An error occurred and the error can be obtained by e.getResult()

        }

### Notes: 
* **Parameter names should match those from the supported param list**. 
* **The parameter value set using extended scanner configuration APIs overwrite parameter values set by any basic EMDK API**, regardless of the order of programming.

-----

### Get Newly Connected Scanner

Newly connected scanners are sometimes unavailable for selection using device identifiers, making acquisition of scanner parameters impossible. The following code segment shows how to access a newly available scanner using device enumeration. 

Use the `BarcodeManager.getSupportedDevicesInfo()` method first. Then pass one of the received `ScannerInfo` objects to `BarcodeManager.getDevice(ScannerInfo scnInfo)` as follows:

        :::java
        List<ScannerInfo> supportedDevList = barcodeManager.getSupportedDevicesInfo();
        Scanner scanner = null;

        Iterator<ScannerInfo> it = deviceList.iterator();
        while(it.hasNext()) {
            ScannerInfo scnInfo = it.next();
            if(scnInfo.getDeviceIdentifier()==DeviceIdentifier.BLUETOOTH_IMAGER_RS6000){        
                scanner = barcodeManager.getDevice(scnInfo);
                break;
            }
        }


### Notes:
* **If a scanner is connected to a device but does not appear when using an EMDK library**, it can be accessed using the device enumeration APIs. Refer to the [EMDK Barcode Scanning API Programmer's Guide](https://techdocs.zebra.com/emdk-for-android/latest/guide/barcode_scanning_guide/) and [EMDK Basic Scanning Tutorial](https://techdocs.zebra.com/emdk-for-android/latest/tutorial/tutBasicScanningAPI/) for help enumerating available scanners.
* **If the required scanner is not available under device identifier**, try filtering by friendly name or class and scanner type. Alternatively, the device index also can be passed to the `getDevice` method to get the scanner.

-----

### Also See:
* **[EMDK Basic Scanning Tutorial](https://techdocs.zebra.com/emdk-for-android/latest/tutorial/tutBasicScanningAPI/)**
* **[EMDK Barcode Scanning API Programmer's Guide](https://techdocs.zebra.com/emdk-for-android/latest/guide/barcode_scanning_guide/)**

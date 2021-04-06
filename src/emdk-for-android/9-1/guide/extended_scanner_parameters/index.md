---
title: Scanner Parameter Config API Guide
layout: guide.html
product: EMDK For Android
productversion: '9.1'
---

##Overview

**This guide explains the use of scanner parameter configuration APIs**, interfaces introduced with EMDK-A 9.1 that allow for the setting and retrieval of scanning parameters using `Scanner.setParams()` and `Scanner.getParams()` methods. **Introduced with EMDK for Android 9.1**, these pass-through APIs can be used to set and get scanner parameter configurations in scanning applications. 

> **Zebra strongly recommends using these APIs in favor of the [ScannerConfig class](../../api), which is deprecated and scheduled to be discontinued in 2022**. Zebra will continue to add to the parameters supported by the new APIs.

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

### Bundle getParams(Bundle parameters)

#####Description: 
Gets the current value of the specified parameter available at the scanner.

#####Input parameters:
parameters: Bundle with parameter names

#####Return type: 
Bundle

#####Return value:
Current value of parameters

-----

### Void setParams(Bundle parameters)

#####Description: 
Sets the given values to the specified parameters.

#####Input parameters:
parameters: Bundle with parameter names and values

-----

## Sample Code

<!-- 
Supported extended scanner parameter list
Please refer this >>> link to a new page with latest params<<<  section of EMDK documentation for get all the extended scanner parameter configurations and supported values.

HUH? 
This is in line with previous scanner configuration APIs. It needs to get the object of `ScannerConfig` to load the current settings before using extended scanning parameter APIs. 
 -->

### Set Remote Trigger Status

The following code segment shows how to set the value of the `remote_trigger_status` parameter using the scanner parameter configuration APIs. 

        :::java
        try {
            // Get scanner config
            Bundle requiredParams = new Bundle();
            requiredParams.putString("remote_trigger_status","");
            Bundle params = scanner.getParams(requiredParams);
            
            if(params.containsKey("remote_trigger_status")) {
                params.putString("remote_trigger_status", "0");
            }
            
            scanner.setParams(params);
        } catch (ScannerException e) {
            updateStatus(e.getMessage());
        }

> Note: Parameter names should match those from the supported param list. 

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
            if(scnInfo.getDeviceIdentifier()==DeviceIdentifier.BLUETOOTH_IMAGER_RS6000)
            {        
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

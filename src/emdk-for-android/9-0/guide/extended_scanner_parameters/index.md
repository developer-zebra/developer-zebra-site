---
title: Extended Scanner Parameter Guide
layout: guide.html
product: EMDK For Android
productversion: '9.0'
---

##Overview

Extended scanner parameter configuration APIs - programmer guide

Overview
This guide provides user how to set extended scanning parameters which are not supported by existing EMDK ScannerConfig class structure. If any new scanning parameters which are not listed with basic set of EMDK APIs, user can use APIs explained below to set such parameters.

Note: This guide is for the developers who are familiar about how to use basic scanning APIs of EMDK for apps. If you are not familiar, please refer following guide for understanding how to use basics of EMDK related to scanning.


https://techdocs.zebra.com/emdk-for-android/8-0/tutorial/tutBasicScanningAPI/
https://techdocs.zebra.com/emdk-for-android/8-0/guide/barcode_scanning_guide/


Usage of extended scanner parameter configuration APIs
Extended scanner parameter configuration APIs are used for configuring and reading scanner parameters and values which are not supported through basic scanning APIs of EMDK. 

Developers can use the existing class structure with intellisense with ScannerConfig object  (eg:  config.scanParams.decodeHapticFeedback).

Using above basic method, it is unable to read and set the new scanning parameters witch are now supported by extended scanner parameter configuration APIs. Those new parameters unsupported by existing class structure, are listed in here >>> link to a new page with latest params<<<. 

Developers need to refer those parameters and supported values from above document and pass the parameter information to extended APIs.
Extended scanner parameter configuration APIs
There are two APIs to support extended scanner parameter configuration.
String getParameter(String paramName)
Gets the current value of the specified parameter which is available at the scanner. This method will not return the currently changed parameter value of ScannerConfig object until next getConfig() API call.

Input parameters:
paramName: name of the scanner parameter

Return type: String 
Return value:  current value of the parameter or exception if the parameter name is unsupported. 

Void setParameter(String paramName, String paramValue)

Sets the given value to the specified parameter. Setting this parameter will not immediately update the existing parameter value of ScannerConfig object until next setConfig() call.

Input parameters:
    paramName: name of the parameter 
    paramValue: value to be set for the parameter

Supported extended scanner parameter list
Please refer this >>> link to a new page with latest params<<<  section of EMDK documentation for get all the extended scanner parameter configurations and supported values.

How to use extended scanning parameter APIs
This is in line with previous scanner configuration APIs. It needs to get the object of ScannerConfig to load the current settings before using extended scanning parameter APIs. 
Following code segment shows how to set the value of parameter `remote_trigger_status` using extended API. 
*parameter name should be referred from the supported param list*. 

    try{
        // Get scanner config
        ScannerConfig config = scanner.getConfig();

    // Set a new parameter through extended APIs
    if (config.isParamSupported("remote_trigger_status")) {
        config.setParameter("remote_trigger_status", "0”);
    }

    // Set older parameter through class structure
    if (config.isParamSupported("config.decoderParams.code128.enabled")) {
        config.decoderParams.Code128.enabled = true;
    }

    // Set scanner config
    scanner.setConfig(config);


    // Read the parameter value to confirm if it is set or not
    ScannerConfig config2 = scanner.getConfig();
    String paramvalue = config2.getParameter("remote_trigger_status");

    }catch (ScannerException e) {
        // Error occurred and the error can be obtained by e.getResult()
    }

Note: The parameter value set using extended configurator APIs will overwrite parameter values set by basic EMDK APIs. It is not in the order it programmed.

Access newly available scanners using device enumeration

In addition to the scanner parameters, new scanners may not be available to select using device identifiers. So, if a new scanner is connected to device which is not listed with EMDK library, it can be accessed using the device enumeration APIs. Please refer sections “Barcode Scanning API Programmer's Guide” and “Basic Scanning with Barcode API” for how to enumerate available scanner list.

Use the `BarcodeManager.getSupportedDevicesInfo()` method first. Then pass one of the received ScannerInfo objects to `BarcodeManager.getDevice(ScannerInfo scnInfo)` as follows:

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

Note: If the required scanner is not available under device identifier, you can filter by friendly name or class and type of scanner. It can pass the device index also to getDevice method to get the scanner alternatively.

https://techdocs.zebra.com/emdk-for-android/8-0/guide/barcode_scanning_guide/
https://techdocs.zebra.com/emdk-for-android/8-0/tutorial/tutBasicScanningAPI/


---
title: "Barcode Scanning API Programmer's Guide"
layout: guide.html
product: EMDK For Android
productversion: '7.3'
---

<div class="alert alert-danger alert-dismissible fade in" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> <h4>Important information about data capture interfaces:</h4> <p>Zebra <u>strongly recommends using DataWedge</u> for all applications that require barcode scanning and data capture. If using EMDK native Barcode APIs, migration to DataWedge interfaces is strongly advised.</p> <p> Here are the facts:
    </p><ul>
        <li><b>DataWedge APIs have the same capabilities</b> currently available in EMDK.</li>
        <li>DataWedge intent-based APIs are <b>easier and faster to implement</b> than EMDK APIs.</li>
        <li><b>New features are always added to DataWedge first</b> before being <i>considered</i> for addition to EMDK; there is no guarantee that the same features will be exposed in EMDK APIs.</li>
    </ul>
    <br>
    <a href="/datawedge" class="btn btn-danger">Learn About DataWedge</a>  <p></p> </div>

## Overview

The EMDK Barcode API provides applications with the ability to read numerous barcode label formats using a variety of built-in and pluggable cameras, imagers, lasers and scanners. For the full list, see [scanners supported by EMDK for Android](../about/#supporteddevices).

##### Also see [Barcode Sample 1](../../samples/barcode) for a complete barcode scanning implementation.

### Barcode API Notes

The `BarcodeManager` is the primary object to enumerate the supported scanner devices and access scanners for reading barcodes.

**Points to consider when designing a barcode scanning app**:

* **Apps should use either barcode APIs or DataCapture** (a feature of the ProfileManager); an app cannot use both at the same time. 

* **The** `EMDKManager` > `BarcodeManager` **takes precedence** over DataCapture. 

* **Control of scanning hardware is exclusive**. When a scanning app takes control of a scanner, it must release it when quitting or going to the background before other apps can access any scanner.

* **Disabling the scanner immediately cancels any pending read in progress** and closes the session, giving other applications access to scanners. 

* **If** `BarcodeManager` **is used in an app, it must be explicitly released** before any other application (including DataWedge) can access scanners.

* **When a scanner is disconnected and reconnected**, calling any method on the barcode object will result in an `INVALID_OBJECT` error. As a remedy, register the application for connection notifications so it can be notified of reconnections and programmatically re-initialize the scanner, when necessary.

* **If a Bluetooth Scanner is not paired**, enabling that scanner will automatically launch the pairing utility, prompting the user to scan a barcode (displayed on the mobile device) to pair the scanner with the mobile device.

-----

## Using the Barcode API

The guidance below is typical of many scanarios, but the process can vary depending individual needs. 

-----

### 1. Get Barcode Manager

EMDK must be opened before getting the `BarcodeManager` object: 

        :::java
        BarcodeManager barcodeManager = (BarcodeManager)emdkManager.getInstance(FEATURE_TYPE.BARCODE);

Before exiting, release the `BarcodeManager` object. 

-----

### 2. Get Scanner

There are two options for taking control of a scanner:

1.  **Get Scanner using** `DeviceIdentifier` **_without_** device enumeration:

	Use the `BarcodeManager.getDevice(DeviceIdentifier deviceIdentifier)` API call:

        :::java
        Scanner scanner = barcodeManager.getDevice(DeviceIdentifier.BLUETOOTH_IMAGER_RS6000);

    If the specified `DeviceIdentifier` is not supported on the target platform, a call to `getDevice` will return null.

2.  **Get Scanner using** `ScannerInfo` **_with_** device enumeration:

    Use the `BarcodeManager.getSupportedDevicesInfo()` method first. Then pass one of the received `ScannerInfo` objects to `BarcodeManager.getDevice(ScannerInfo scnInfo)`:

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

-----

### 3. Use Scanner

The scanner must be enabled first to open a session with the hardware. If any scanner is enabled by another application, an exception will occur with the "scanner in use" error. Zebra recommends disabling the scanner when finished using it. Scanners otherwise remain locked by the application and are unavailable to other applications.

The `Scanner.enable()` method is an asynchronous call and an exception will be thrown if any error occurs during a request. After the scanner is successfully enabled, the `IDLE` status event is sent to the application using a registered status listener. If an error occurs while enabling the scanner, the `ERROR` status is sent to application using the registered status listener.

Issuing any read request while the previous read is pending will result in an error. Zebra recommends waiting for the `IDLE` status from the application before issuing subsequent commands to read barcodes.

-----

### 4. Configure Scanner

The EMDK Barcode API provides three categories of scanner configuration to control the behavior of the scanner: 

* Decoder Parameters
* Reader Parameters 
* Scan Parameters 

An app can get current settings by calling the `Scanner.getConfig()` method after the scanner is successfully enabled. This method returns a `ScannerConfig` object.

An app can modify the `ScannerConfig` object returned by `Scanner.getconfig`. The modified `ScannerConfig` object must be set by calling `Scanner.setConfig(ScannerConfig)` before the settings will take effect. The user must call the `Scanner.setConfig(ScannerConfig)` only when the scanner is enabled and in an idle state. The modified settings applied will persist until the scanner object is released. This means that when an app calls `enable()` after `disable()`, all the latest configuration parameter values are set automatically.  

Setting scanner configurations is not allowed while a read is pending. If a read is pending, the developer must call the `Scanner.cancelRead()` and wait for the idle status through the register status listener before setting the configuration.

The sample code below disables the Code 128 symbology and sets the beam timer for the imager:

        :::java
        try {
                ScannerConfig scannerConfig = scanner.getConfig();
                scannerConfig.decoderParams.code128.enabled = false; 
                
                //Set beam timer for imager
                config.readerParams.readerSpecific.imagerSpecific.beamTimer = 4000;
                scanner.setConfig(config); 
        } catch (ScannerException e) {
        //Error occurred and the error can be obtained by e.getResult()
        }

Calling `SetConfig()` should be done in the Status callback. This allows a check that the scanner is indeed `IDLE` and that no scanner read is pending.

Below is an example of how that should be done:

        :::java
        @Override
        public void onStatus(StatusData statusData) {
                ScannerStates state = statusData.getState();
                switch(state) {
                case IDLE:
                        if(!scanner.isReadPending()){
                        // call SetConfig() here
                        }
                break;
                }
        }

-----

#### Set Decoder Parameters

The `ScannerConfig.DecoderParams` class provides an interface for the developer to enable or disable decoder symbologies, such as Code39, Code128, Code93, UPCEAN, etc.  

The following code disables the Code128 symbology:

        :::java
        scannerConfig.decoderParams.code128.enabled = false;

-----

#### Set Reader Parameters

The `ScannerConfig.ReaderParams` class provides an interface for configuring scanner engine-specific settings for `LaserSpecific`, `ImagerSpecific` and `CameraSpecific` related parameters such as picklist, aim type, aim timer, beam timer, illumination mode, etc.

The following code shows how to modify the beam timer for different scanner engines:

        :::java
        //Set beam timer for camera
        config.readerParams.readerSpecific. cameraSpecific.beamTimer = 4000;
        //Set beam timer for imager
        config.readerParams.readerSpecific.imagerSpecific.beamTimer = 4000;
        //Set beam timer for laser
        config.readerParams.readerSpecific.laserSpecific.beamTimer = 4000;

-----

#### Set Scan Parameters

The `ScannerConfig.ScanParams` class provides an interface for configuring scanner parameters such as decode LED time, vibrate on successful decode, beep on successful decode, beep audio file, etc. 

The following code sets the decode LED time to 75:

        :::java
        config.scanParams.decodeLEDTime = 75;

-----

### 5. Release Scanner

Control of scanning hardware is exclusive. When a scanning app takes control of scanning on the device, it must programmatically release it when quitting or going to the background before other apps (including DataWedge) can access any scanner on the device.

**To release scanner resources, use the code below**:

        :::java
        // Release the barcode manager resources:
        //
            if (emdkManager != null) {
                emdkManager.release(FEATURE_TYPE.BARCODE);
            }

-----

## Scanner States

The diagrams below illustrate the states that a barcode scanner will transition through while using the EMDK Barcode Scanning APIs.


### Hardware Trigger

![img](hardware-trigger.png)

### Software Trigger

![img](software-trigger.png)

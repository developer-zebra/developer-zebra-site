---
title: "Barcode Scanning API Programmer's Guide"
layout: guide.html
product: EMDK For Android
productversion: '6.3'
---

##Barcode API

The EMDK Barcode API provides applications with an ability to read a
variety barcode labels using different scanner devices such as built-in
imager/laser, built-in camera, Bluetooth ring scanners such as RS507 and
RS600 and Pluggable ring scanner such as RS4000.

###API

BarcodeManager is the primary object to enumerate the supported scanner
devices and access the scanner devices to read barcodes.

The lists of points to be considered during application design are
below:

-   An app should either use the DataCapture feature of the ProfileManager or barcode APIs for scanning barcodes  but it is not allowed access the both at the same time. The EMDKManager > BarcodeManager takes precedence over the DataCapture feature of the ProfileManager.


-   The EMDKManager > BarcodeManager used in an application must be released before another application can use that feature.

-   When the scanner such as RS6000, RS4000 is disconnected and connected back, the calling any method on the barcode object will result in INVALID_OBJECT error. The application can register for the connection notifications to know when the device gets disconnected and connected back so that applications can programmatically  re-initialize the scanner again.


-   Disabling the scanner cancels the pending read in progress and closes the session for the others applications to utilize the device.

-   If the Bluetooth Scanner is not paired, enabling the Bluetooth scanner will automatically launch the pairing utility for the user to scan the barcode displayed on the Mobile device using Bluetooth scanner to pair with the mobile device.

### Getting Barcode Manager

The EMDK must be opened before getting the BarcodeManager object and
release BarcodeManager before exiting the application.

        :::java
        BarcodeManager barcodeManager = (BarcodeManager)emdkManager.getInstance(FEATURE_TYPE.BARCODE);

### Getting Scanner

There are two options here:

1.  **Get Scanner using DeviceIdentifier without device enumeration**

	Use the BarcodeManager.getDevice(DeviceIdentifier deviceIdentifier) API

	If the specified Device Identifier is not supported on the target platform, call to “getDevice” will return null.

        :::java
        Scanner scanner = barcodeManager.getDevice(DeviceIdentifier.BLUETOOTH_IMAGER_RS6000);

2.  **Get Scanner using ScannerInfo from device enumeration**

    Use the BarcodeManager.getSupportedDevicesInfo () first and then pass one of the received ScannerInfo objects to BarcodeManager.getDevice(ScannerInfo scnInfo)

        :::java
        
        List<ScannerInfo> supportedDevList =

        barcodeManager.getSupportedDevicesInfo();
        
        Scanner scanner = null;
        
        Iterator<ScannerInfo> it = deviceList.iterator();

        while(it.hasNext()) {
        
        ScannerInfo scnInfo = it.next();

        if(scnInfo.getDeviceIdentifier()==DeviceIdentifier.BLUETOOTH_IMAGER_RS6000){
        
        scanner = barcodeManager.getDevice(scnInfo);

        break;

        }

        }

### Using Scanner

The scanner must be enabled first to open a session with the hardware. If scanner is already enabled other applications, this will throw an exception with error as scanner in use. The recommendation is to disable when you are done, otherwise it will remain locked for current application and will be unavailable any other application that want to use scanner.

The Scanner.enable() is an async call and exception will thrown if any error occurs during request. After the scanner is successfully enabled , the IDLE status event will be sent the application using the registered status listener. If any error occurs while enabling the scanner, the ERROR status will be sent to application using the registered status listener.

Issuing any read request while the previous read is pending will result in an error. The recommendation is to wait for the IDLE status from the application before issuing the next read to read the barcodes.



### Configuring the Scanner

The EMDK Barcode API provides three categories of scanner configuration to control the behavior of the scanner. The scanner configurations are Decoder Parameters, Reader Parameters and Scan Parameters. 

The user can get current settings by calling the method Scanner.getConfig() after the scanner is successfully enabled. This method returns a ScannerConfig object.

The user can modify the ScannerConfig object returned by scanner.getconfig The modified ScannerConfig object must be set by calling Scanner.setConfig(ScannerConfig) before the settings will take effect. The user must call the Scanner.setConfig(ScannerConfig) only when the scanner is enabled and in idle state.   The modified settings applied will persist until the scanner object is released and this means that when user calls enable() after disable(), all the latest configuration parameter values will be set automatically.  

Setting scanner configurations is not allowed while a read is pending. If a read is pending, the developer must call the Scanner.cancelRead() and must wait for the idle status through the register status listener before setting the configuration.

The below code shows how to disable the Code 128 symbology and set beam timer for imager.

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

Calling SetConfig() should be done in the Status callback. This way you can check that the scanner is indeed IDLE and that a scanner read is not pending.

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


### Decoder Parameters

The ScannerConfig.DecoderParams class provides an interface for the developer to enable or disable the decoder symbologies such as Code39, Code128, Code93, UPCEAN etc.  

The following code snippet shows how to disable the Code128 symbology:

        :::java
        scannerConfig.decoderParams.code128.enabled = false;

### Reader Parameters

The ScannerConfig.ReaderParams class provides interface for the developer to configure scanner engine specific settings for LaserSpecific, ImagerSpecific and CameraSpecific related parameters such as picklist, aim type, aim timer, beam timer, illumination mode, etc.

The below code snippet shows how to modify the beam timer for different scanner engines.

        :::java
        //Set beam timer for camera
        config.readerParams.readerSpecific. cameraSpecific.beamTimer = 4000;
        //Set beam timer for imager
        config.readerParams.readerSpecific.imagerSpecific.beamTimer = 4000;
        //Set beam timer for laser
        config.readerParams.readerSpecific.laserSpecific.beamTimer = 4000;

### Scan Parameters
The ScannerConfig.ScanParams class provides interface for user to configure scanner parameters such as decode LED time, vibrate on successful decode, beep on successful decode, beep audio file, etc. 

The below code snippet shows how to modify the decode LED time.

        :::java
        config.scanParams.decodeLEDTime = 75;



##Scanner States
The following diagrams illustrate the states that a barcode scanner will transition through while using the EMDK Barcode Scanning API's


###Hardware Trigger

![img](hardware-trigger.png)

###Software Trigger

![img](software-trigger.png)

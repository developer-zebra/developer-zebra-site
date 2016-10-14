---
title: "Barcode Scanning API Programmer's Guide"
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---

##Barcode API

The EMDK Barcode API provides applications with an ability to read the
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

The scanner must be enabled first to open the session with the hardware. The Scanner.enable() is an async call and exception will thrown if any error occurs during request. After the successful enabling of the scanner, the IDLE status event will be sent the application using the registered status listener. If any error occurs while enabling the scanner, the ERROR status will be sent to application using the registered status listener.

Issuing any read request while the previous read is pending will result in an error. The recommendation is to wait for the IDLE status from the application before issuing the next read to read the barcodes.


##Scanner States
The following diagrams illustrate the states that a barcode scanner will transition through while using the EMDK Barcode Scanning API's


###Hardware Trigger

![img](hardware-trigger.png)

###Software Trigger

![img](software-trigger.png)
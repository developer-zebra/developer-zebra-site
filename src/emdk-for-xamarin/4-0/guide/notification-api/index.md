---
title: "Notification API Programmer's Guide"
layout: guide.html
product: EMDK For Xamarin
productversion: '4.0'
---

##Overview
This document provides an overview on design points to be considered during the development of an application that reads a barcode and notifies users leveraging the Notification API in a business application workflow.


##Notification API

**Zebra EMDK notification API is intended for use with remote devices such as RS6000 and External Vibrator**

A Ring Scanner such as RS6000 provides several annunciators to notify
the user of business application workflow events. The list of
annunciators includes multi-color LEDs, a beeper and a vibrator. 
business applications levraging the Notificaiton API would have the ability to control these annunciators to notify the user of custom events in their workflow.

![img](../../images/notification-api/image1.png)


RS6000 with multi-colored LED (location highlighted)

###External Vibrator

The External Vibrator is a pluggable accessory and supports only the
vibration feature. This is meant for hearing impaired users and can be
used to notify with vibration instead of beeping.

![img](../../images/notification-api/image2.png) ![img](../../images/notification-api/image3.png)

###API

NotificationManager is the primary object to enumerate the supported
notification devices and access the notification devices. The
NotificationManager can be used to control the notifications on the
accessories such as RS6000 and External Vibrator. This API can’t be used
to control the built-in notifications on the mobile devices.

A list of points to be considered during application design are
below:

*  The notification devices must be paired and connected before enabling the notification device; otherwise this will result in DEVICE\_NOT\_CONNECTED error.

*  The user must call the following APIs in advance to determine the
    notification capability of the device. So it will minimize the
    confusion on setting unsupported features.
    *  isLEDSupported() - to determine the support for Line Of Sight LED.
    *  isBeepSupported() - to determine the support for Beeping.
    *  isVibrateSupported() - to determine the support for Vibration.



*   Only one application is expected to enable the notification device
    at a time. The recommendation for the application to disable
    notification device object when application doesn’t need the
    notification devices anymore.

*   The notification sent to the notification device will replace the
    previous notifications in progress and the applications must be
    designed to handle this based on the business requirements.

*   When the notification device such as RS6000 is disconnected and connected back, calling any method on the notification device will result DEVICE\_INVALID error. The application has to release the previous and get a new notification device to work with the re-connected device. This behavior is applicable only to RS6000. The External Vibrator will never throw DEVICE_INVALID. Therefore if connected back, you can continue to use the same notification device object.

*   Disabling the notification device cancels the pending notification
    in progress and closes the session for the others applications to
    utilize the notification device.

*   If two External Vibrator accessories connected to WT6000 Left/Right
    ports and sent the notification, the accessory which connected first
    is getting vibrated and the other accessory is getting blocked.

### Getting Notification Manager

The EMDK must be opened before getting the NotificationManager object
and release NotificationManager before exiting the application.

    :::Java
    NotificationManager notificationManager = (NotificationManager)emdkManager.getInstance(FEATURE\_TYPE.NOTIFICATION);

### Getting Notification Device

There are two options here:

1.  **Get NotificationDevice using DeviceIdentifier without device
    enumeration**
    
    Use the NotificationManager.getDevice(DeviceIdentifier deviceIdentifier) API
    
    The valid Device Identifiers are:
    
    * BLUETOOTH\_IMAGER\_RS6000: Use the Ring Scanner “RS6000”
    * EXTERNAL\_VIBRATOR1: Use the pluggable accessory “External Vibrator”
    
    If the specified Device Identifier is not supported on the target platform, call to “getDevice” will return null.

        :::java
        NotificationDevice notificationDevice = notificationManager.getDevice(DeviceIdentifier.BLUETOOTH\_IMAGER\_RS6000);

2.  **Get NotificationDevice using DeviceInfo from device enumeration**

    Use the NotificationManager.getSupportedDevicesInfo() first and then pass one of the enumerated DeviceInfo to NotifcationManager.getDevice(DeviceInfo deviceInfo)

        :::java
        List<DeviceInfo> supportedDevList = notificationManager.getSupportedDevicesInfo();

        NotificationDevice notificationObject = null;

        Iterator<DeviceInfo> it = deviceList.iterator();

        while(it.hasNext()) {

            DeviceInfo devInfo = it.next();

            if(devInfo.getConnectionType()==BLUETOOTH\_SSI&&devInfo.getDeviceType()==IMAGER){

                notificationObject = notificationManager.getDevice(devInfo);

                break;

            }

        }

### Using Notification Device

The notification device must be enabled before sending notifications to
the notification devices and this opens the session with the hardware.
If the notification device is already enabled by this application, it
will throw an exception with error DEVICE\_ALREADY\_ENABLED. The
concurrent enable calls to the same notification device within the same
application or different application is not expected.

The recommendation for the application is to disable notification device
object when application doesn’t need the notification devices anymore.

The NotificationDevice.notify(Notification notification) method sends
the notification data to notification device to notify the users based
on the business requirement. Passing the null object to this method
throws an exception. The notification sent to the notification device
will replace the previous notifications in progress and the applications
must be designed to handle this based on the business requirements.

The NotificationDevice.cancelNotification() method can be used to cancel
the active notifications on the remote device.

**Using Notification and Scanning at the same time**

Sending the notification to RS6000 by using Notification API while the
scanning in progress will lead to overlapping of notification sent by
NotificationManager API and successful barcode decode status
notifications on RS6000. Therefore the business application must be
designed avoid these overlapping to avoid confusions to the end user.
The Barcode API provides an option to disable successful barcode decode
status notification on RS6000 and these settings are available in
scanner configuration such as ScannerParams .decodeLEDFeedbackMode and
ScannerParams .decodeAudioFeedbackMode.

When using notification manager with RS6000, it will get disconnected
based on Connection Idle Timeout settings. Default is 600 seconds and
either an EMDK scanning app or Datawedge may change this value. If the
behavior is not desirable, consider changing the Connection Idle Timeout
setting in the corresponding app or DataWedge.

ScannerParams.remoteDecodeHapticFeedback is being removed in this
release.

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

-   An app should either use the DataCapture feature of the
    ProfileManager or barcode APIs for scanning barcodes but not both

-   Only one application is allowed to enable any of the scanners at
    a time. The recommendation for the application to disable scanner
    when application doesn’t need the scanner anymore.

-   When the scanner such as RS6000, RS4000 is disconnected and
    connected back, the calling any method on the barcode object will
    result in INVALID\_OBJECT error. The application can register for
    the connection notifications to know when the device gets
    disconnected and connected back so that applications can
    programmatically enable the scanner again.

-   Disabling the scanner cancels the pending read in progress and
    closes the session for the others applications to utilize
    the device.

-   If the Bluetooth Scanner is not paired, enabling the Bluetooth
    scanner will automatically launch the pairing utility for the user
    to scan the barcode displayed on the Mobile device using Bluetooth
    scanner to pair with the mobile device.

### Getting Barcode Manager

The EMDK must be opened before getting the BarcodeManager object and
release BarcodeManager before exiting the application.

        :::java
        BarcodeManager barcodeManager = (BarcodeManager)emdkManager.getInstance(FEATURE\_TYPE.BARCODE);

### Getting Scanner

There are two options here:

1.  **Get Scanner using DeviceIdentifier without device enumeration**

	Use the BarcodeManager.getDevice(DeviceIdentifier deviceIdentifier) API

	If the specified Device Identifier is not supported on the target platform, call to “getDevice” will return null.

        :::java
        Scanner scanner = barcodeManager.getDevice(DeviceIdentifier.BLUETOOTH\_IMAGER\_RS6000);

2.  **Get Scanner using ScannerInfo from device enumeration**

    Use the BarcodeManager.getSupportedDevicesInfo () first and then pass one of the received ScannerInfo objects to BarcodeManager.getDevice(ScannerInfo scnInfo)

        :::java
        
        List<ScannerInfo> supportedDevList =

        barcodeManager.getSupportedDevicesInfo();
        
        Scanner scanner = null;
        
        Iterator<ScannerInfo> it = deviceList.iterator();

        while(it.hasNext()) {
        
        ScannerInfo scnInfo = it.next();

        if(scnInfo.getDeviceIdentifier()==DeviceIdentifier.BLUETOOTH\_IMAGER\_RS6000){
        
        scanner = barcodeManager.getDevice(scnInfo);

        break;

        }

        }

### Using Scanner

The scanner must be enabled first to open the session with the hardware.
If scanner is already enabled other applications, this will throw an
exception with error as scanner in use. The recommendation is to disable
when you are done, otherwise it will remain locked for current
application and will be unavailable any other application that want to
use scanner.

The Scanner.enable() is an async call and exception will thrown if any
error occurs during request. Once the scanner is successfully enabled
and ready to use to configure the scanner setting or read the barcode,
the application has to register Status Listener to receive the status of
the scanner. After the successful enabling of the scanner, the IDLE
status will be sent the application by the Scanner Engine. If any error
occurs while enabling the scanner, the ERROR status will be sent to
application using the registered status listener.

Issuing any read request while the previous read is pending will result
in an error. The recommendation is to wait for the IDLE status from the
application before issuing the next read to read the barcodes.

---
title: ScanAndPairConfig
layout: guide.html
product: EMDK For Android
productversion: '2.3'
---

The ScanAndPairConfig class provides a way to configure the settings to use it in scanAndPair() or scanAnUnpair() methods.
 These settings must be done before calling the scanAndPair() or scanAnUnpair() methods and do not modify the this while the 
 method is processing its job.

##Public Methods

### resetToDefaults

**public void resetToDefaults()**

Resets all config to default values.

**Returns:**

void

##Public Fields

###alwaysScan

Specifies if a scan should always be performed to get the Bluetooth address
 or name of the remote device. If set to true, the provided mBluetoothInfo.mDeviceName or 
 mBluetoothInfo.mDeviceAddress properties are ignored and scanning is always done. If set to false,
 then scanning is skipped and the provided mBluetoothInfo.Address or mBluetoothInfo.Name properties 
 are directly used for pairing.

**Type:**

java.lang.Boolean

###bluetoothInfo

Specifies the Bluetooth related information. The settings provided through this object are used 
 for pairing/unpairing.

**Type:**

com.symbol.emdk.scanandpair.ScanAndPairConfig.BluetoothInfo

###notificationType

Specifies the notification related information. When using the ScanAndPair() and ScanAndUnPair() methods,
 notifications can be provided to the user to indicate the progress of the operation. This object provides 
 access to the settings for the notifications. The default value for NotificationType is BEEPER. 
 For more information on notifications refer to the  NotificationType class.

**Type:**

com.symbol.emdk.scanandpair.ScanAndPairConfig.NotificationType

###scanInfo

Specifies the scanning related information. The settings provided through this object are used for scanning
 the barcode. It also exposes the scanned data. NOTE: The maximum allowed length of the barcode that can be 
 scanned is 123 characters.

**Type:**

com.symbol.emdk.scanandpair.ScanAndPairConfig.ScanInfo

##Public Enums

###ScanAndPairConfig.NotificationType

This enum is used by the ScanAndPairTool class. When using PowerTools, notifications 
 can be provided to the user to indicate the progress of the different PowerTool methods. 
 This enum provides notification related information during scanning process.

**Values:**

* **BEEPER** -Beeper notification. Raises pre-defined beep sequences. This will give the user 
 an audible alert when specific operations are performed.

* **NONE** -Disable notification. Do not raise notification for any type of operations.

###ScanAndPairConfig.ScanDataType

Provides the different types of barcode data to be scanned.

**Values:**

* **MAC_ADDRESS** -Scan data is a Bluetooth MAC address

* **DEVICE_NAME** -Scan data is a Bluetooth device name.

* **UNSPECIFIED** -Scan data type is unknown. The ScanAndPair library will automatically attempt to determine
 if it is a valid address. If not, it will be considered as a Bluetooth name.

###ScanAndPairConfig.DeviceIdentifier

Provides the list of DeviceIdentifier types.

**Values:**

* **INTERNAL_CAMERA1** -Use first available camera

* **INTERNAL_IMAGER1** -Use first available imager

* **INTERNAL_LASER1** -Use first available laser scanner

* **BLUETOOTH_IMAGER1** -Use first available Bluetooth imager. Note: This requires pairing the 
 Bluetooth Imager before calling the ScanAndPair or ScanAndUnPair methods.

* **DEFAULT** -Use default scanner. Depending on the mobile device, the first available scanner can be laser, imager or camera.

###ScanAndPairConfig.TriggerType

Provides the list of supported trigger types.

**Values:**

* **SOFT** -Scanner is turned ON automatically and no need to press any triggers

* **HARD** -Hardware trigger needs to be manually pressed to turn ON the scanner











---
title: ScanAndPairConfig
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
The ScanAndPairConfig class provides a way to configure the settings to use it in scanAndPair() or scanAnUnpair() methods. These settings must be done before calling the scanAndPair() or scanAnUnpair() methods and do not modify the this while the method is processing its job.

**Type** - Java.Lang.Object

##Methods
###ResetToDefaults

**public virtual void ResetToDefaults ();**

Resets all config to default values.

**Parameters:**

**Returns** - System.Void

##Properties

###AlwaysScan
Specifies if a scan should always be performed to get the Bluetooth address or name of the remote device. If set to true, the provided mBluetoothInfo.mDeviceName or mBluetoothInfo.mDeviceAddress properties are ignored and scanning is always done. If set to false, then scanning is skipped and the provided mBluetoothInfo.Address or mBluetoothInfo.Name properties are directly used for pairing.

**Type** - Java.Lang.Boolean
###BluetoothInfo
Specifies the Bluetooth related information. The settings provided through this object are used for pairing/unpairing.

**Type** - Symbol.XamarinEMDK.ScanAndPair.ScanAndPairConfig+BluetoothInformation
###NotificationType
Specifies the notification related information. When using the ScanAndPair() and ScanAndUnPair() methods, notifications can be provided to the user to indicate the progress of the operation. This object provides access to the settings for the notifications. The default value for NotificationType is BEEPER. For more information on notifications refer to the ScanAndPairConfig.NotificationType class.

**Type** - Symbol.XamarinEMDK.ScanAndPair.ScanAndPairConfig+NotificationTypes
###ScanInfo
Specifies the scanning related information. The settings provided through this object are used for scanning the barcode. It also exposes the scanned data. NOTE: The maximum allowed length of the barcode that can be scanned is 123 characters.

**Type** - Symbol.XamarinEMDK.ScanAndPair.ScanAndPairConfig+ScanInformation

---
title: DeviceInfo
layout: guide.html
product: EMDK For Xamarin 
productversion: '4.0' 
---
DeviceInfo provides information of the notification device.

**Type** - Java.Lang.Object

##Properties

###ConnectionType
Returns the notification device connection type to mobile computer.

**Type** - Symbol.XamarinEMDK.Notification.ConnectionType
###DeviceIdentifier
Defines specific notification devices of each type.

**Type** - Symbol.XamarinEMDK.Notification.NotificationManager+DeviceIdentifier
###DeviceType
Returns the notification device type.

**Type** - Symbol.XamarinEMDK.Notification.DeviceType
###FriendlyName
Returns the friendly name of the notification device.

**Type** - System.String
###IsBeepSupported
Returns true if the notification device supports Beep feature else false.

**Type** - System.Boolean
###IsConnected
Returns true if the notification device is connected to the mobile computer else false.

**Type** - System.Boolean
###IsDefaultDevice
Returns true if it is a default notification device else false.

**Type** - System.Boolean
###IsLEDSupported
Returns true if the notification device supports LED feature else false.

**Type** - System.Boolean
###IsVibrateSupported
Returns true if the notification device supports Vibrate feature else false.

**Type** - System.Boolean
###ModelNumber
Returns the notification device model number. This information will be available only after the device is enabled.

**Type** - System.String

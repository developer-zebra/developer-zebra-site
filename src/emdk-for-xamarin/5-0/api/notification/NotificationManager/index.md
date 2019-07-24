---
title: NotificationManager
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
This is the primary object to access the notification feature.

**Type** - Symbol.XamarinEMDK.EMDKBase

##Methods
###GetDevice

**public virtual Symbol.XamarinEMDK.Notification.NotificationDevice GetDevice (Symbol.XamarinEMDK.Notification.DeviceInfo p0);**

Returns the notification device based on the device information provided. You must call enable() after getting the device in order to send any notifications to the device.

**Parameters:**

Symbol.XamarinEMDK.Notification.DeviceInfo **p0**  - The device info specifies which notification device the application wants.

**Returns** - Symbol.XamarinEMDK.Notification.NotificationDevice

###GetDevice

**public virtual Symbol.XamarinEMDK.Notification.NotificationDevice GetDevice (Symbol.XamarinEMDK.Notification.NotificationManager.DeviceIdentifier p0);**

Returns the notification device based on the device identifier provided. You must call enable() after getting the device in order to send any notifications to the device.

**Parameters:**

Symbol.XamarinEMDK.Notification.NotificationManager.DeviceIdentifier **p0**  - The device identifier specifies which notification device the application wants.

**Returns** - Symbol.XamarinEMDK.Notification.NotificationDevice

##Properties

###SupportedDevicesInfo
Returns list of supported notification devices information.

**Type** - System.Collections.Generic.IList<Symbol.XamarinEMDK.Notification.DeviceInfo>

---
title: NotificationDevice
layout: guide.html
product: EMDK For Xamarin 
productversion: '4.0' 
---
NotificationDevice class will represent and provides access to the physical notification device instance. This can be used with a connected notification device. Once disconnected, current instances cannot be used any longer. When connected again, you must use NotificationManager.getDevice() method to get a new notification device object.

**Type** - Java.Lang.Object

##Methods
###CancelNotification

**public virtual void CancelNotification ();**

This cancels the active notification from the device.

**Parameters:**

**Returns** - System.Void

###Disable

**public virtual void Disable ();**

Disables the notification device. This closes the communication port to send the notifications to the devices.

**Parameters:**

**Returns** - System.Void

###Enable

**public virtual void Enable ();**

Enables the notification device. You must call disable() when you are done. This opens the communication port to send the notifications to the devices.

**Parameters:**

**Returns** - System.Void

###Notify

**public virtual void Notify (Symbol.XamarinEMDK.Notification.NotificationConfig p0);**


        

**Parameters:**

Symbol.XamarinEMDK.Notification.NotificationConfig **p0**  - 
        

**Returns** - System.Void

###Release

**public virtual void Release ();**

Releases the notification device. You must release the notification device when you are done using it, so that internal resources can be freed up. Once you release, the notification device object will be unusable and you must use NotificationManager.getDevice() method to get a new notification device object.

**Parameters:**

**Returns** - System.Void

##Properties

###DeviceInfo
Returns information about the notification device.

**Type** - Symbol.XamarinEMDK.Notification.DeviceInfo
###IsConnected
Returns whether the notification device is connected to the Mobile device or not.

**Type** - System.Boolean
###IsEnabled
Returns whether the notification device is enabled or not.

**Type** - System.Boolean

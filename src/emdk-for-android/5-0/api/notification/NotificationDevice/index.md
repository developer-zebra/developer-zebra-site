---
title: NotificationDevice
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.2'
---


NotificationDevice  class will represent and provides access to the physical notification device instance. This can be used with a connected notification device. Once disconnected, current instances cannot be used any longer. When connected again, you must use NotificationManager.getDevice() method to get a new notification device object.

##Public Methods

### getDeviceInfo

**public DeviceInfo getDeviceInfo()**

Returns information about the notification device.

**Returns:**

com.symbol.emdk.notification.DeviceInfo - Returns the DeviceInfo object.

### isConnected

**public boolean isConnected()**

Returns whether the notification device is connected to the Mobile device or not.

**Returns:**

boolean - true if it is connected else false.

### isEnabled

**public boolean isEnabled()**

Returns whether the notification device is enabled or not.

**Returns:**

boolean - true if it is enabled else false.

### enable

**public void enable()**

Enables the notification device. You must call disable() when you are done. This opens the communication port to send the notifications to the devices.
 
 

**Example Usage:**
	
	:::java	
	device.enable();


**Returns:**

void

**Throws:**

com.symbol.emdk.notification.NotificationException

The exception will thrown if the notification device enable fails.

### disable

**public void disable()**

Disables the notification device. This closes the communication port to send the notifications to the devices. 
 
 

**Example Usage:**
	
	:::java	
	device.disable();


**Returns:**

void

**Throws:**

com.symbol.emdk.notification.NotificationException

The exception will thrown if the notification device disable fails.

### notify

**public void notify(Notification notification)**

This sends the notification information to the device.
 
 

**Example Usage:**
	
	:::java	
	Notification notification = new Notification();
	notification.led.color = 0xFF0000;
	notification.led.onTime =  1000;
	notification.led.offTime = 500;
	notification.led.repeatCount = 2;
	notification.vibrate.pattern = new long[] {100,200,100,200,100,200};
	notificationDevice.notify(notification);


**Parameters:**

`notification`

**Returns:**

void

**Throws:**

com.symbol.emdk.notification.NotificationException

The exception will thrown if the notification device disable fails.

### cancelNotification

**public void cancelNotification()**

This cancels the active notification from the device.
 
 

**Example Usage:**
	
	:::java	
	notificationDevice.cancelNotification();


**Returns:**

void

**Throws:**

com.symbol.emdk.notification.NotificationException

The exception will thrown if the notification cancel fails.

### release

**public void release()**

Releases the notification device. You must release the notification device when you are done using it, so that internal resources can be freed up.  Once you release, the notification device object will be unusable and you must use NotificationManager.getDevice() method to get a new notification device object.
 
 

**Example Usage:**
	
	:::java	
	device.release();


**Returns:**

void

**Throws:**

com.symbol.emdk.notification.NotificationException

The exception will thrown if the notification device release fails.


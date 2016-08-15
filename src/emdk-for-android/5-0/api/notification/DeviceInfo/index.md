---
title: DeviceInfo
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


DeviceInfo provides information of the notification device.
 
 

**Example Usage:**
	
	:::java	
	deviceInfo.getFriendlyName();


##Public Methods

### getFriendlyName

**public String getFriendlyName()**

Returns the friendly name of the notification device.
 
 

**Example Usage:**
	
	:::java	
	String name = deviceInfo.getFriendlyName();


**Returns:**

java.lang.String - Returns the friendly name.

### getModelNumber

**public String getModelNumber()**

Returns the notification device model number. This information will be available only after the device is enabled.
 
 

**Example Usage:**
	
	:::java	
	String model = deviceInfo.getModelNumber();


**Returns:**

java.lang.String - Returns the model string.

### getDeviceType

**public DeviceType getDeviceType()**

Returns the notification device type.
 
 

**Example Usage:**
	
	:::java	
	DeviceType deviceType = deviceInfo.getDeviceType();


**Returns:**

com.symbol.emdk.notification.DeviceType - Returns the DeviceType.

### getConnectionType

**public ConnectionType getConnectionType()**

Returns the notification device connection type to mobile computer.
 

**Example Usage:**
	
	:::java	
	ConnectionType connectionType = deviceInfo.getConnectionType();


**Returns:**

com.symbol.emdk.notification.ConnectionType - Returns the ConnectionType.

### isDefaultDevice

**public boolean isDefaultDevice()**

Returns true if it is a default notification device else false.
 
 

**Example Usage:**
	
	:::java	
	boolean defaultDevice = deviceInfo.isDefaultDevice();


**Returns:**

boolean - Returns true if it is a default notification device else false.

### isConnected

**public boolean isConnected()**

Returns true if the notification device is connected to the mobile computer else false.
 
 

**Example Usage:**
	
	:::java	
	boolean connected = deviceInfo.isConnected();


**Returns:**

boolean - Returns true if the notification device is connected to the mobile computer else false.

### isLEDSupported

**public boolean isLEDSupported()**

Returns true if the notification device supports LED feature else false.
 
 

**Example Usage:**
	
	:::java	
	boolean ledSupported = deviceInfo.isLEDSupported();


**Returns:**

boolean - Returns true if the notification device supports LED feature else false.

### isBeepSupported

**public boolean isBeepSupported()**

Returns true if the notification device supports Beep feature else false.
 
 

**Example Usage:**
	
	:::java	
	boolean beepSupported = deviceInfo.isBeepSupported();


**Returns:**

boolean - Returns true if the notification device supports Beep feature else false.

### isVibrateSupported

**public boolean isVibrateSupported()**

Returns true if the notification device supports Vibrate feature else false.
 
 

**Example Usage:**
	
	:::java	
	boolean vibrateSupported = deviceInfo.isVibrateSupported();


**Returns:**

boolean - Returns true if the notification device supports Vibrate feature else false.



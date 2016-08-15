---
title: DeviceInfo
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


DeviceInfo provides information of the Payment device.
 
 

**Example Usage:**
	
	:::java	
	paymentDevice.deviceInfo.getFriendlyName();


##Public Methods

### isDefaultDevice

**public boolean isDefaultDevice()**

Returns true if it is a default payment device else false.

**Returns:**

boolean - 

### getFirmwareVersion

**public String getFirmwareVersion()**

Returns the firmware version of the payment device. This information will be available only after successful enabling.

**Returns:**

java.lang.String

### getApplicationVersion

**public String getApplicationVersion()**

Returns the application version on the payment device. This information will be available only after successful enabling.

**Returns:**

java.lang.String

### getFriendlyName

**public String getFriendlyName()**

Returns the friendly name of the Device.
 
 

**Example Usage:**
	
	:::java	
	String name = paymentDevice.deviceInfo.getFriendlyName();


**Returns:**

java.lang.String - Returns the friendly name

### getMacAddress

**public String getMacAddress()**

Returns the MacAdress of the remote device.
 
 

**Example Usage:**
	
	:::java	
	String name = paymentDevice.deviceInfo.getMacAddress();


**Returns:**

java.lang.String - Returns the MacAdress of the remote device.

### getConnectionType

**public ConnectionType getConnectionType()**

Returns the payment device connection type to mobile computer
 
 

**Example Usage:**
	
	:::java	
	ConnectionType deviceType = paymentDevice.deviceInfo.getConnectionType();


**Returns:**

com.symbol.emdk.payment.DeviceInfo.ConnectionType - Returns the ConnectionType



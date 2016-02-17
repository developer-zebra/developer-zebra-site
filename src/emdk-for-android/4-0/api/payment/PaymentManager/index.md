---
title: PaymentManager
type: api
---


This is the primary object to access the payment feature.
 
 

**Example Usage:**
	
	:::java	EMDKResults results = EMDKManager.getEMDKManager(getApplicationContext(), this);
	
	//After EMDK opened
	paymentManager = (PaymentManager)this.emdkManager.getInstance(FEATURE_TYPE.PAYMENT);
	PaymentDevice paymentDevice = paymentManager.getDevice(DeviceIdentifer.DEFAULT);
	paymentDevice.addDataListener(this);
	paymentDevice.enable();
	
	paymentDevice.readCardData();
	
	paymentDevice.disable();
	
	EMDKManager.release(FEATURE_TYPE.PAYMENT);
	
	


##Public Methods

### getSupportedDevicesInfo

**public ArrayList getSupportedDevicesInfo()**

Returns list of supported payment devices information.

**Returns:**

java.util.ArrayList - Returns list of payment devices information.

### getDevice

**public PaymentDevice getDevice(PaymentManager.DeviceIdentifier deviceIdentifier)**

This method returns the PaymentDevice object based on device identifier specified. 
 The PaymentDevice object created will be singleton object for that application instance for a specific type of payment device.

**Parameters:**

`deviceIdentifier` - The device identifier specifies which payment device the application wants.

**Returns:**

com.symbol.emdk.payment.PaymentDevice

### getDevice

**public PaymentDevice getDevice(DeviceInfo deviceInfo)**

This method returns the PaymentDevice object if the Device info specified is valid
 and Device info object can obtain from the PaymentManager.getSupportedDevicesInfo(). 
 The PaymentDevice object created will be singleton object for a specific payment device.

**Parameters:**

`deviceInfo` - provides information on DeviceInfo class.

**Returns:**

com.symbol.emdk.payment.PaymentDevice

### getDevice

**public PaymentDevice getDevice(java.lang.String deviceName, boolean isMacAddress)**

The getDevice method gets payment object which can be used to enable and communicate with payment device. 
 The getDevice method is a overload method which will access different values and returns the payment object 
 for the device requested

**Parameters:**

`deviceName` - provides information like deviceName or macaddress of the devices.

`isMacAddress` - decides if deviceName is macaddress or the name of the device.

**Returns:**

com.symbol.emdk.payment.PaymentDevice

### addConnectionListener

**public void addConnectionListener(PaymentManager.PaymentConnectionListener connectionListener, PaymentManager.DeviceIdentifier deviceIdentifier)**

Add PaymentConnectionListener to receive remote payment device connection changes via
 callback.

**Parameters:**

`connectionListener`

`deviceIdentifier` - - Type of device connections to notify. Not supported in this version..

**Returns:**

void

### removeConnectionListener

**public void removeConnectionListener(PaymentManager.PaymentConnectionListener connectionListener)**

Remove PaymentConnectionListener to receive payment device connection changes
 via callback.

**Parameters:**

`connectionListener`

**Returns:**

void

### getPairedDevicesInfo

**public ArrayList getPairedDevicesInfo(DeviceInfo.DeviceType deviceType)**

This method gets the list of payment devices paired with Mobile Device based on the deviceType. 
 The Device can be PD40. The device info provides the information like device's mac address,
 friendly name and connection type.

**Parameters:**

`deviceType`

**Returns:**

java.util.ArrayList - Returns list of DeviceInfo objects.

**Throws:**

com.symbol.emdk.payment.PaymentException




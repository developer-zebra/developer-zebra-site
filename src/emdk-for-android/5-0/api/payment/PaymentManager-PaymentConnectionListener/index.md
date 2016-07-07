---
title: PaymentManager.PaymentConnectionListener
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


An interface for notifying client applications when the external payment device
 is connected or disconnected to the mobile device.
 
 

**Example Usage:**
	
	:::java	
	public class MainActivity extends Activity implements PaymentConnectionListener
	// .. .. ..
	


##Public Methods

### onConnectionChange

**public void onConnectionChange(DeviceInfo deviceInfo, PaymentManager.ConnectionState connectionState)**

Called to notify the client when the payment device has been connected or disconnected to the mobile device with 
 the device information such as Mac address and device name.

**Parameters:**

`deviceInfo` - The payment device information.

`connectionState` - The payment device connection status object.

**Returns:**

void






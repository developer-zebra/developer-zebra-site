---
title: NotificationManager
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


This is the primary object to access the notification feature. 
 
 

**Example Usage:**
	
	:::java	public class MainActivity extends Activity implements EMDKListener {
	
	protected void onCreate(Bundle savedInstanceState) {
	//..
	EMDKResults results = EMDKManager.getEMDKManager(getApplicationContext(), this);
	}
	
	public void onOpened(EMDKManager emdkManager) {
	this.emdkManager = emdkManager;
	}
	//...
	notificationManager = (NotificationManager) emdkManager.getInstance(FEATURE_TYPE.NOTIFICATION);
	//...
	NotificationDevice notificationDevice = notificationManager.getDevice(DeviceIdentifier.DEFAULT)
	notificationDevice.enable();
	//...
	notificationDevice.disable();
	
	//..
	
	EMDKManager.release(FEATURE_TYPE.NOTIFICATION);
	
	}


##Public Methods

### getSupportedDevicesInfo

**public List getSupportedDevicesInfo()**

Returns list of supported notification devices information.

**Returns:**

java.util.List - Returns list of supported notification devices information.

### getDevice

**public NotificationDevice getDevice(DeviceInfo deviceInfo)**

Returns the notification device based on the device information provided.
 You must call enable() after getting the device in order to send any notifications to the device.

**Parameters:**

`deviceInfo` - The device info specifies which notification device the application wants.

**Returns:**

com.symbol.emdk.notification.NotificationDevice - Returns the notification device based on the device information provided.

**Throws:**

com.symbol.emdk.notification.NotificationException



### getDevice

**public NotificationDevice getDevice(NotificationManager.DeviceIdentifier deviceIdentifier)**

Returns the notification device based on the device identifier provided.
 You must call enable() after getting the device in order to send any notifications to the device.

**Parameters:**

`deviceIdentifier` - The device identifier specifies which notification device the application wants.

**Returns:**

com.symbol.emdk.notification.NotificationDevice - Returns the notification device based on the device identifier provided. Otherwise null is returned.

**Throws:**

com.symbol.emdk.notification.NotificationException








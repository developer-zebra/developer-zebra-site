---
title: BarcodeManager.ScannerConnectionListener
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


An interface for notifying client applications when the external scanner
 is connected or disconnected to the mobile device.
 
 

**Example Usage:**
	
	:::java	
	public class MainActivity extends Activity implements ScannerConnectionListener
	.. .. ..
	


##Public Methods

### onConnectionChange

**public void onConnectionChange(ScannerInfo scannerInfo, BarcodeManager.ConnectionState connectionState)**

Called to notify the client when the scanner device has been connected or disconnected to the mobile device.

**Parameters:**

`scannerInfo` - The ScannerInfo object of the affected scanner.

`connectionState` - The new connection state.

**Returns:**

void



---
title: ScanAndPairManager
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


The ScanAndPair provides simple methods to scan a Bluetooth barcode (name or address) of a remote Bluetooth device 
 and pair/unpair with the remote Bluetooth device.

##Public Methods

### isPreviousCommandPending

**public boolean isPreviousCommandPending()**

This method provides information if any of the previous request is pending. 
 If this method returns true, the client application must wait for the current complete before calling the issuing the next request.

**Returns:**

boolean - Boolean value

### scanAndPair

**public ScanAndPairResults scanAndPair(java.lang.String pin)**

This is an asynchronous method. The status of the scanAndPair() method will be returned if the callback is registered.
 If the always scan is enabled in the configuration, this method scans a barcode to get the Bluetooth address or 
 name of a remote device, and pairs with that remote device. If a Bluetooth address is scanned, the remote device
 is paired without performing a discovery. If a Bluetooth name is scanned, then a discovery is done to find the 
 address of the device and then the pairing is done. 
 The provided authentication PIN is used for pairing. The maximum allowed length for the authentication PIN is 15 characters.

**Parameters:**

`pin` - Pin required to pair with the Bluetooth device.

**Returns:**

com.symbol.emdk.scanandpair.ScanAndPairResults - Returns success if the scan and pair request is successfully initiated.

### scanAndUnpair

**public ScanAndPairResults scanAndUnpair()**

This is an asynchronous method. The status of the scanAndUnpair() method will be returned if the callback is registered.
 If the always scan is enabled in the configuration, this method scans a barcode to get the Bluetooth address or 
 name of a remote device, and pairs with that remote device. 	 
 If a Bluetooth address was scanned for pairing during scanAndPair calls, then the same address can be scanned for 
 unpairing during the ScanAndUnPair call.

**Returns:**

com.symbol.emdk.scanandpair.ScanAndPairResults - Returns success if the scan and unpair request is successfully initiated.

### getStatus

**public StatusData getStatus()**

This method provides an option to get the current or recent status of scanAndPair or scanAndUnpair calls

**Returns:**

com.symbol.emdk.scanandpair.StatusData - StatusData object.

### addStatusListener

**public void addStatusListener(ScanAndPairManager.StatusListener listener)**

The client can register to get status notification via callbacks.

**Parameters:**

`listener`

**Returns:**

void

**Throws:**

com.symbol.emdk.scanandpair.ScanAndPairException



### removeStatusListener

**public void removeStatusListener(ScanAndPairManager.StatusListener listener)**

The client can un-register to get status notification via callbacks.

**Parameters:**

`listener`

**Returns:**

void

**Throws:**

com.symbol.emdk.scanandpair.ScanAndPairException



##Public Fields

###config

The ScanAndPairManager.config provides a way to configure the settings to use it in scanAndPair() or scanAnUnpair() methods.
 These settings must be done before calling the scanAndPair() or scanAnUnpair() methods and do not modify the this while the 
 method is processing its job.

**Type:**

com.symbol.emdk.scanandpair.ScanAndPairConfig






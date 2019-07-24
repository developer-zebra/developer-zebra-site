---
title: ScanAndPairManager
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
The ScanAndPair provides simple methods to scan a Bluetooth barcode (name or address) of a remote Bluetooth device and pair/unpair with the remote Bluetooth device.

**Type** - Symbol.XamarinEMDK.EMDKBase

##Methods
###ScanAndPair

**public virtual Symbol.XamarinEMDK.ScanAndPair.ScanAndPairResults ScanAndPair (string p0);**

This is an asynchronous method. The status of the scanAndPair() method will be returned if the callback is registered. If the always scan is enabled in the configuration, this method scans a barcode to get the Bluetooth address or name of a remote device, and pairs with that remote device. If a Bluetooth address is scanned, the remote device is paired without performing a discovery. If a Bluetooth name is scanned, then a discovery is done to find the address of the device and then the pairing is done. The provided authentication PIN is used for pairing. The maximum allowed length for the authentication PIN is 15 characters.

**Parameters:**

System.String **p0**  - Pin required to pair with the Bluetooth device.

**Returns** - Symbol.XamarinEMDK.ScanAndPair.ScanAndPairResults

###ScanAndUnpair

**public virtual Symbol.XamarinEMDK.ScanAndPair.ScanAndPairResults ScanAndUnpair ();**

This is an asynchronous method. The status of the scanAndUnpair() method will be returned if the callback is registered. If the always scan is enabled in the configuration, this method scans a barcode to get the Bluetooth address or name of a remote device, and pairs with that remote device. 
If a Bluetooth address was scanned for pairing during scanAndPair calls, then the same address can be scanned for unpairing during the ScanAndUnPair call.

**Parameters:**

**Returns** - Symbol.XamarinEMDK.ScanAndPair.ScanAndPairResults

##Properties

###Config
The ScanAndPairManager.config provides a way to configure the settings to use it in scanAndPair() or scanAnUnpair() methods. These settings must be done before calling the scanAndPair() or scanAnUnpair() methods and do not modify the this while the method is processing its job.

**Type** - Symbol.XamarinEMDK.ScanAndPair.ScanAndPairConfig
###IsPreviousCommandPending
This method provides information if any of the previous request is pending. If this method returns true, the client application must wait for the current complete before calling the issuing the next request.

**Type** - System.Boolean
###Status
This method provides an option to get the current or recent status of scanAndPair or scanAndUnpair calls

**Type** - Symbol.XamarinEMDK.ScanAndPair.StatusData
##Events

###StatusEvent


        


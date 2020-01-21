---
title: BarcodeManager.IScannerConnectionListener
layout: guide.html
product: EMDK For Xamarin
productversion: '5.0'
---
An interface for notifying client applications when the external scanner is connected or disconnected to the mobile device.

**Type** - 

##Methods
###OnConnectionChange
**public void OnConnectionChange (Symbol.XamarinEMDK.Barcode.ScannerInfo p0, Symbol.XamarinEMDK.Barcode.BarcodeManager.ConnectionState p1);**

Called to notify the client when the scanner device has been connected or disconnected to the mobile device.

**Parameters:** 

* Symbol.XamarinEMDK.Barcode.ScannerInfo **p0** - The ScannerInfo object of the affected scanner.
* Symbol.XamarinEMDK.Barcode.BarcodeManager.ConnectionState **p1** - The new connection state.

**Returns** - System.Void




















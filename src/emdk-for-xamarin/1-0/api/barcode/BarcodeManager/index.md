---
title: BarcodeManager
layout: guide.html
product: EMDK For Xamarin
productversion: '1.0'
---
This is the primary object to access the barcode scanning feature.

**Type** - Symbol.XamarinEMDK.EMDKBase

##Methods
###AddConnectionListener
**public virtual void AddConnectionListener (Symbol.XamarinEMDK.Barcode.BarcodeManager.IScannerConnectionListener p0);**

Add ScannerConnectionListener to receive scanner connection changes via callback.

**Parameters:** 

* Symbol.XamarinEMDK.Barcode.BarcodeManager.IScannerConnectionListener **p0** - IScannerConnectionListener object

**Returns** - System.Void

###GetDevice
**public virtual Symbol.XamarinEMDK.Barcode.Scanner GetDevice (Symbol.XamarinEMDK.Barcode.BarcodeManager.DeviceIdentifier p0);**

This method returns the scanner object if the Deviceidentifier specified is valid and the Deviceidentifier object can be obtained from the BarcoderManager.getSupportedDevices() method. The scanner object created will be singleton object for a specific scanner.

**Parameters:** 

* Symbol.XamarinEMDK.Barcode.BarcodeManager.DeviceIdentifier **p0** - Device identifier object used to specify the scanner type requested.

**Returns** - Symbol.XamarinEMDK.Barcode.Scanner

###GetDevice
**public virtual Symbol.XamarinEMDK.Barcode.Scanner GetDevice (Symbol.XamarinEMDK.Barcode.ScannerInfo p0);**

This method returns the scanner object if the ScannerInfo specified is valid and the scanner info object can be obtained from the BarcoderManager.getSupportedDevices() method. The scanner object created will be singleton object for a specific scanner.

**Parameters:** 

* Symbol.XamarinEMDK.Barcode.ScannerInfo **p0** - ScannerInfo object used to specify the scanner type requested.

**Returns** - Symbol.XamarinEMDK.Barcode.Scanner

###RemoveConnectionListener
**public virtual void RemoveConnectionListener (Symbol.XamarinEMDK.Barcode.BarcodeManager.IScannerConnectionListener p0);**

Remove ScannerConnectionListener to receive scanner connection changes via callback.

**Parameters:** 

* Symbol.XamarinEMDK.Barcode.BarcodeManager.IScannerConnectionListener **p0** - IScannerConnectionListener object

**Returns** - System.Void

##Properties

###SupportedDevicesInfo
Returns list of supported scanner devices information.

**Type** - System.Collections.Generic.IList<Symbol.XamarinEMDK.Barcode.ScannerInfo>
















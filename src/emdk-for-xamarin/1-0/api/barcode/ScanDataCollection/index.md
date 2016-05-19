---
title: ScanDataCollection
layout: guide.html
product: EMDK For Xamarin
productversion: '1.0'
---
The ScanDataCollection object contains the scanning result and the collection of ScanData.

**Type** - Java.Lang.Object

##Methods
###GetScanData
**public virtual System.Collections.Generic.IList<Symbol.XamarinEMDK.Barcode.ScanDataCollection.ScanData> GetScanData ();**

This method is used to obtain the scanned data list.


**Returns** - System.Collections.Generic.IList<Symbol.XamarinEMDK.Barcode.ScanDataCollection+ScanData>

##Properties

###FriendlyName
Returns the friendly name of scanner for which the data is returned (ex:'Camera')

**Type** - System.String
###Result
This method used to obtain the scanned result in the form of a ScannerResults object.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerResults
















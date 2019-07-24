---
title: ScanDataCollection
layout: guide.html
product: EMDK For Xamarin 
productversion: '4.0' 
---
The ScanDataCollection object contains the scanning result and the collection of ScanData.

**Type** - Java.Lang.Object

##Methods
###GetScanData

**public virtual System.Collections.Generic.IList<Symbol.XamarinEMDK.Barcode.ScanDataCollection.ScanData> GetScanData ();**

This method is used to obtain the scanned data list.

**Parameters:**

**Returns** - System.Collections.Generic.IList<Symbol.XamarinEMDK.Barcode.ScanDataCollection+ScanData>

##Properties

###FriendlyName
Returns the friendly name of scanner for which the data is returned (ex:'Camera')

**Type** - System.String
###LabelIdentifier
Get the decoded type of the barcode. Note: This is specially applicable for UDI decoding. Use getLabelType() defined in each data item to get the individual barcode label types.

**Type** - System.String
###Result
This method used to obtain the scanned result in the form of a ScannerResults object.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerResults
###TokenizedData
List of tokenized data received after processing the raw scanner data

**Type** - Symbol.XamarinEMDK.Barcode.TokenizedData

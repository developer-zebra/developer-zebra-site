---
title: ScanDataCollection.ScanData
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
The object contains the barcode data that has been scanned and other useful information.

**Type** - Java.Lang.Object

##Methods
###GetRawData

**public virtual byte[] GetRawData ();**

Returns the raw decoded data as byte array. The application can use this raw data directly or can convert the byte array to a string using the named charset.

**Parameters:**

**Returns** - System.Byte[]

##Properties

###Data
The barcode data that was scanned.

**Type** - System.String
###LabelType
The barcode symbology that was scanned.

**Type** - Symbol.XamarinEMDK.Barcode.ScanDataCollection+LabelType
###TimeStamp
The timestamp when the barcode was scanned.

**Type** - System.String

---
title: StatusData.ScannerStates
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
Defines the different states of the barcode scanner.

**Type** - Java.Lang.Enum

##Methods
###ValueOf

**public static Symbol.XamarinEMDK.Barcode.StatusData.ScannerStates ValueOf (string this_);**


        

**Parameters:**

System.String **p0** 

**Returns** - Symbol.XamarinEMDK.Barcode.StatusData+ScannerStates

###Values

**public static Symbol.XamarinEMDK.Barcode.StatusData.ScannerStates[] Values ();**


        

**Parameters:**

**Returns** - Symbol.XamarinEMDK.Barcode.StatusData+ScannerStates[]

##Properties

###Disabled
Scanner is not enabled.

**Type** - Symbol.XamarinEMDK.Barcode.StatusData+ScannerStates
###Error
An error has occurred.

**Type** - Symbol.XamarinEMDK.Barcode.StatusData+ScannerStates
###Idle
Scanner is enabled but no reads are pending.

**Type** - Symbol.XamarinEMDK.Barcode.StatusData+ScannerStates
###Scanning
Scanner beam is on and it is acquiring data.

**Type** - Symbol.XamarinEMDK.Barcode.StatusData+ScannerStates
###Waiting
Scanner has issued reads request and is waiting for trigger event.

**Type** - Symbol.XamarinEMDK.Barcode.StatusData+ScannerStates

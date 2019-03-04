---
title: StatusData.ScanAndPairStates
layout: guide.html
product: EMDK For Xamarin 
productversion: '4.0' 
---
Defines the different states of the scan and pir/unpair.

**Type** - Java.Lang.Enum

##Methods
###ValueOf

**public static Symbol.XamarinEMDK.ScanAndPair.StatusData.ScanAndPairStates ValueOf (string this_);**


        

**Parameters:**

System.String **p0** 

**Returns** - Symbol.XamarinEMDK.ScanAndPair.StatusData+ScanAndPairStates

###Values

**public static Symbol.XamarinEMDK.ScanAndPair.StatusData.ScanAndPairStates[] Values ();**


        

**Parameters:**

**Returns** - Symbol.XamarinEMDK.ScanAndPair.StatusData+ScanAndPairStates[]

##Properties

###Discovering
Discovering the Bluetooth device to be paired.

**Type** - Symbol.XamarinEMDK.ScanAndPair.StatusData+ScanAndPairStates
###Error
Error occurred during the scan and pair or unpair. Call StatusData .getResult() for error information.

**Type** - Symbol.XamarinEMDK.ScanAndPair.StatusData+ScanAndPairStates
###Paired
The Bluetooth device is paired.

**Type** - Symbol.XamarinEMDK.ScanAndPair.StatusData+ScanAndPairStates
###Scanning
canner beam is on and it is acquiring data.

**Type** - Symbol.XamarinEMDK.ScanAndPair.StatusData+ScanAndPairStates
###Undefined
Undefined. This is the initial state.

**Type** - Symbol.XamarinEMDK.ScanAndPair.StatusData+ScanAndPairStates
###Unpaired
The Bluetooth device is unpaired.

**Type** - Symbol.XamarinEMDK.ScanAndPair.StatusData+ScanAndPairStates
###Waiting
Scanner is waiting for hard trigger press

**Type** - Symbol.XamarinEMDK.ScanAndPair.StatusData+ScanAndPairStates

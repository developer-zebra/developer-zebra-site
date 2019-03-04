---
title: ScanAndPairConfig.ScanDataType
layout: guide.html
product: EMDK For Xamarin 
productversion: '4.0' 
---
Provides the different types of barcode data to be scanned.

**Type** - Java.Lang.Enum

##Methods
###ValueOf

**public static Symbol.XamarinEMDK.ScanAndPair.ScanAndPairConfig.ScanDataType ValueOf (string this_);**


        

**Parameters:**

System.String **p0** 

**Returns** - Symbol.XamarinEMDK.ScanAndPair.ScanAndPairConfig+ScanDataType

###Values

**public static Symbol.XamarinEMDK.ScanAndPair.ScanAndPairConfig.ScanDataType[] Values ();**


        

**Parameters:**

**Returns** - Symbol.XamarinEMDK.ScanAndPair.ScanAndPairConfig+ScanDataType[]

##Properties

###DeviceName
Scan data is a Bluetooth device name.

**Type** - Symbol.XamarinEMDK.ScanAndPair.ScanAndPairConfig+ScanDataType
###MacAddress
Scan data is a Bluetooth MAC address

**Type** - Symbol.XamarinEMDK.ScanAndPair.ScanAndPairConfig+ScanDataType
###Unspecified
Scan data type is unknown. The ScanAndPair library will automatically attempt to determine if it is a valid address. If not, it will be considered as a Bluetooth name.

**Type** - Symbol.XamarinEMDK.ScanAndPair.ScanAndPairConfig+ScanDataType

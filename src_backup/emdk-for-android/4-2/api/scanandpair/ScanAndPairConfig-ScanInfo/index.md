---
title: ScanAndPairConfig.ScanInfo
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.2'
---


This class is used by the ScanAndPairTool class. Specifies the scanning related information. 
 The settings provided through this class are used for scanning the barcode. It also exposes 
 the scanned data. NOTE: The maximum allowed length of the barcode that can be scanned is 123 
 characters.

##Constructors

###ScanInfo

Default Constructor for ScanInfo class to assign the default values to its members.

##Public Methods

### getScannedData

**public String getScannedData()**

Provides the scanned data. The maximum allowed length of the barcode that can be scanned
 is 123 characters.

**Returns:**

java.lang.String

##Public Fields

###scanDataType

Specifies the type of barcode data to be scanned. The barcode data can be either the 
 Bluetooth address or name of the remote device. The default value is UNSPECIFIED, meaning 
 the class library will automatically attempt to determine if it is a valid address. If it 
 is not a valid address, it will be considered as a Bluetooth name.

**Type:**

com.symbol.emdk.scanandpair.ScanAndPairConfig.ScanDataType

###deviceIdentifier

Specifies the type of scanner to be used for scanning the barcode. The default value 
 is FIRSTAVAILABLE.

**Type:**

com.symbol.emdk.scanandpair.ScanAndPairConfig.DeviceIdentifier

###scanTimeout

Scan timeout in milliseconds. Specifies the time duration within which the barcode should 
 be scanned. <b>NOTE:</b> The default timeout value is provided by the scanner driver and 
 it varies depending on the device. If a value of 0 is set, then it means infinite timeout.

**Type:**

int

###triggerType

Specifies the type of trigger to be used. The default value is AUTO. If manual, then 
 the hardware trigger needs to be manually pressed to turn ON the scanner. If auto, then 
 the scanner is turned ON automatically and no need to press any triggers.

**Type:**

com.symbol.emdk.scanandpair.ScanAndPairConfig.TriggerType


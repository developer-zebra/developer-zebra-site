---
title: ScanAndPairConfig.BluetoothInfo
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.0'
---


This class is used by the ScanAndPairTool class. Specifies the Bluetooth related 
 information. The settings provided through this class are used for pairing/unpairing.

##Constructors

###BluetoothInfo

Default constructor

##Public Fields

###deviceName

Specifies the Bluetooth name of the remote device. If the ScanAndPairTool.AlwaysScan 
 is set to false, then scanning is skipped and the provided Bluetooth name is directly 
 used for pairing. If the <b>ScanAndPairTool.alwaysScan</b> property is set to true, then provided 
 Bluetooth name is ignored and scanning is always done. The maximum allowed length of 
 the Bluetooth name barcode that can be scanned or explicitly provided is 123 characters. 
 <br><br>
 <b>NOTE</b>: Scanning or explicitly providing a Bluetooth name instead of a Bluetooth address, will 
 result in a device discovery to find the address of the device which may take additional time.

**Type:**

java.lang.String

###macAddress

Specifies the MAC address of the remote Bluetooth device. If the <b>ScanAndPair.alwaysScan</b> is set to false, 
 then scanning is skipped and the provided Bluetooth address is directly used for pairing. The allowed 
 length of the Bluetooth address barcode is 12. If the <b>ScanAndPair.alwaysScan</b> is set to true, the 
 provided Bluetooth address is ignored and scanning is always done. The allowed lengths of the Bluetooth 
 address barcode that can be scanned is either 12 or 17 characters.

**Type:**

java.lang.String

###pairingPin

User supplied pin for bluetooth pairing. Passed as an argument during scanAndPair and stored in this member
 variable for later use

**Type:**

java.lang.String










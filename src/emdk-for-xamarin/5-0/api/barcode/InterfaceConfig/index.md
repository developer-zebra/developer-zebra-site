---
title: InterfaceConfig
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---

    

**Type** - Java.Lang.Object

##Properties

###ConnectionEstablishTime
Timeout in seconds that Scanner.enable() will block before returning if an external scanner connection is not established. This is currently applicable to Bluetooth scanners only. Also if the user wants to set this parameter he/she should use the InterfaceConfig class before calling Scanner.enable().

**Type** - System.Int32
###DisplayBluetoothAddressBarcode
When using Bluetooth (Imager) scanners, the pairing process between the mobile computer and Bluetooth scanner may require scanning the Bluetooth address of the mobile computer. If this value is set to true, the Bluetooth address will be displayed as a barcode when the Scanner.enable() function is called. This feature eliminates the need to open the external tools such as Bluetooth Pairing Utility in order to display the pairing barcode. Also if the user wants to set this parameter he/she should use the InterfaceConfig class before calling Scanner.enable(). Note: If the Bluetooth scanner has already connected, it will not display the barcode during Scanner.enable() even though this parameter is set to true.

**Type** - System.Boolean

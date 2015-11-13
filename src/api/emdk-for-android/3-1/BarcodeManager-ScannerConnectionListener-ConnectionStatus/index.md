---
title: BarcodeManager.ScannerConnectionListener.ConnectionStatus
---
#BarcodeManager.ScannerConnectionListener.ConnectionStatus

The ConnectionStatus class provides the information about status of scanner connection changes.

##Constructors

###ConnectionStatus()

##Public Methods
###getConnectionState()
Returns the device connection state of pluggable scanner.

**Returns:**

com.symbol.emdk.barcode.[BarcodeManager.ConnectionState](BarcodeManager#BarcodeManager.ConnectionState): Returns the connection state. 

###getScannerInfo()
Returns the ScannerInfo obj of scanner for which the data is returned.

**Returns:**

[ScannerInfo](ScannerInfo): Returns ScannerInfo obj of the pluggable scanner.
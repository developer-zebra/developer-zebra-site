---
title: SimulScanManager
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
This is the primary object to access the SimulScan feature.

**Type** - Symbol.XamarinEMDK.EMDKBase

##Methods
###GetDevice

**public virtual Symbol.XamarinEMDK.SimulScan.SimulScanReader GetDevice (Symbol.XamarinEMDK.SimulScan.SimulScanManager.DeviceIdentifier p0);**

This method returns the reader object based on device identifier specified.

**Parameters:**

Symbol.XamarinEMDK.SimulScan.SimulScanManager.DeviceIdentifier **p0**  - deviceIdentifier - The device identifier specifies which reader the application wants.

**Returns** - Symbol.XamarinEMDK.SimulScan.SimulScanReader

###GetDevice

**public virtual Symbol.XamarinEMDK.SimulScan.SimulScanReader GetDevice (Symbol.XamarinEMDK.SimulScan.SimulScanReaderInfo p0);**

This method returns the reader object based on the input SimulScanReaderInfo object.

**Parameters:**

Symbol.XamarinEMDK.SimulScan.SimulScanReaderInfo **p0**  - simulscanReaderInfo - The SimulScanReadInfo specifies which reader the application wants.

**Returns** - Symbol.XamarinEMDK.SimulScan.SimulScanReader

##Properties

###SupportedDevicesInfo
Returns list of supported reader devices information.

**Type** - System.Collections.Generic.IList<Symbol.XamarinEMDK.SimulScan.SimulScanReaderInfo>

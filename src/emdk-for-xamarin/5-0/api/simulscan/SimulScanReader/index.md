---
title: SimulScanReader
layout: guide.html
product: EMDK For Xamarin 
productversion: '4.0' 
---
SimulScanReader class will represent and provides access to the physical Reader device.

**Type** - Java.Lang.Object

##Methods
###CancelRead

**public virtual void CancelRead ();**

This cancels any pending read() calls

**Parameters:**

**Returns** - System.Void

###Disable

**public virtual void Disable ();**

Disables the reader hardware. Any pending scanned data will be lost. This method releases the reader hardware resources so that other readers can be enabled. You must call this as soon as you're done with the scanning. Other applications will not be able to access SimulScan related functions till this function is called.

**Parameters:**

**Returns** - System.Void

###Enable

**public virtual void Enable ();**

Enables the reader hardware. This method does not make the reader to scan. If another reader is already enabled, this will throw a SimulScanException. You must call disable() when you are done, otherwise all readers will remain locked and will be unavailable for this and any other application that uses SimulScan.

**Parameters:**

**Returns** - System.Void

###FetchTemplate

**public virtual void FetchTemplate (string p0, string p1);**

Fetch templates from an external server and place them in the template directory. FETCH_TEMPLATE_COMPLETED status will be notified once the fetching is completed.

**Parameters:**

System.String **p0**  - userName - Username for SimulScan Template Builder

System.String **p1**  - password - Password for SimulScan Template Builder

**Returns** - System.Void

###IsReadPending

**public virtual Java.Lang.Boolean IsReadPending ();**

Another read() cannot be submitted while a read is pending.

**Parameters:**

**Returns** - Java.Lang.Boolean

###Read

**public virtual void Read ();**

This method initiates a SimulScan read() request. This is an asynchronous call, the data and status will be returned through the registered callbacks. If a read() is submitted while another read is pending, the method call will fail. The read request can be cancelled by issuing a cancelRead(). It is recommended to check whether a read is pending by calling isReadPending() before submitting a read().

**Parameters:**

**Returns** - System.Void

##Properties

###Config
Gets the current configuration settings for this reader device. The reader must be enabled before the calling this function. If modifications are made to the returned SimulScanConfig object, the Reader.setConfig(SimulScanConfig) must be called to take effect.

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanConfig
###IsEnabled
Returns reader enabled state

**Type** - System.Boolean
###ReaderInfo
Returns information about the reader device.

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanReaderInfo
##Events

###Data

An event that notifies a client application when the scan data is available.

###Status

An event that notifies client application of scan events.


---
title: SimulScanReader
layout: guide.html 
product: EMDK For Xamarin 
productversion: '2.4' 
---
SimulScanReader class will represent and provides access to the physical Reader device.

**Type** - Java.Lang.Object

##Methods
###CancelRead
**public virtual void CancelRead ();**

This cancels any pending read() calls


**Returns** - System.Void

###Disable
**public virtual void Disable ();**

Disables the reader hardware.


**Returns** - System.Void

###Enable
**public virtual void Enable ();**

Enables the reader hardware.


**Returns** - System.Void

###FetchTemplate
**public virtual void FetchTemplate (string p0, string p1);**

Fetch templates from external server and place them in template directory.

**Parameters:** 

* System.String **p0** - Username for SimulScan Template Builder
* System.String **p1** - Password for SimulScan Template Builder

**Returns** - System.Void

###IsReadPending
**public virtual Java.Lang.Boolean IsReadPending ();**

Another read() cannot be submitted while a read is pending.


**Returns** - Java.Lang.Boolean

###Read
**public virtual void Read ();**

This method initiates a SimulScan read() request.


**Returns** - System.Void

##Properties

###Config
Gets the current configuration settings for this reader device.

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanConfig
###IsEnabled
Returns reader enabled state


**Type** - System.Boolean
###ReaderInfo
Returns information about the reader device.

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanReaderInfo



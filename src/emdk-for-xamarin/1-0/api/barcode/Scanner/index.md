---
title: Scanner
---

Scanner class will represent and provides access to the physical scanner device.

**Type** - Java.Lang.Object

##Methods
###AddDataListener
**public virtual void AddDataListener (Symbol.XamarinEMDK.Barcode.Scanner.IDataListener p0);**

The client can register to get data notification via callbacks.

**Parameters:** 

* Symbol.XamarinEMDK.Barcode.Scanner.IDataListener **p0** - IDataListener object.

**Returns** - System.Void

###AddStatusListener
**public virtual void AddStatusListener (Symbol.XamarinEMDK.Barcode.Scanner.IStatusListener p0);**

The client can register to get status notification via callbacks.

**Parameters:** 

* Symbol.XamarinEMDK.Barcode.Scanner.IStatusListener **p0** - IStatusListener object

**Returns** - System.Void

###CancelRead
**public virtual void CancelRead ();**

This Cancels any pending asynchronous read() calls


**Returns** - System.Void

###Disable
**public virtual void Disable ();**

Disables the scanner hardware. Any pending scanned data will be lost. This method releases the scanner hardware resources for other application to use. You must call this as soon as you're done with the scanning.


**Returns** - System.Void

###Enable
**public virtual void Enable ();**

Enables the scanner hardware. This method does not make the scanner scan or turn on the laser. If the same scanner is enabled by other applications, this will throw ScannerExceptions. You must call disable() when you are done scanning, otherwise it will remain locked and be unavailable to other applications.


**Returns** - System.Void

###Read
**public virtual void Read ();**

Starts an asynchronous Scan. The method will not turn on the scanner. It will, however, put the scanner in a state in which the scanner can be turned ON either by pressing a hardware trigger or can be turned ON automatically. This is determined by the Scanner.triggerType. The data notification must registered in order to scan and get the Scan Data. The read request can be cancelled by issuing a cancelRead. If a read() is submitted while another read is pending, the method call will fail. It is recommended to check whether a read is pending by calling isReadPending() before submitting a read(). A read() can also be submitted from within onData and onStatus events. If called within onStatus, it should be called only when IDLE status is received. If called within onData, then checking for isReadPending() is recommended.


**Returns** - System.Void

###Release
**public virtual void Release ();**

Releases the scanner object resources. The scanner object is unusable after this call. The new object can be requested using BarcodeManager.getDevice(...). The object will be unusable after this call even if any failure occurs.


**Returns** - System.Void

###RemoveDataListener
**public virtual void RemoveDataListener (Symbol.XamarinEMDK.Barcode.Scanner.IDataListener p0);**

Cancels any IDataListener callbacks.

**Parameters:** 

* Symbol.XamarinEMDK.Barcode.Scanner.IDataListener **p0** - IDataListener object

**Returns** - System.Void

###RemoveStatusListener
**public virtual void RemoveStatusListener (Symbol.XamarinEMDK.Barcode.Scanner.IStatusListener p0);**

Cancels any IStatusListener callbacks.

**Parameters:** 

* Symbol.XamarinEMDK.Barcode.Scanner.IStatusListener **p0** - IStatusListener object.

**Returns** - System.Void

##Properties

###Config
Get or Set the ScannerConfig settings.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig
###InterfaceConfig
Get or Set InterfaceConfig

**Type** - Symbol.XamarinEMDK.Barcode.InterfaceConfig
###IsEnabled
Returns scanner enabled state.

**Type** - System.Boolean
###IsReadPending
Returns state of pending scanner read. Another read() cannot be submitted while a read is pending.

**Type** - System.Boolean
###ScannerInfo
Returns information about the scanner device.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerInfo
###TriggerType
Specifies the trigger type for the scanner. It is set to HARD by default.

**Type** - Symbol.XamarinEMDK.Barcode.Scanner.TriggerTypes



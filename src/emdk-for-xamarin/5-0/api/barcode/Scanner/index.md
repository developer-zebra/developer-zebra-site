---
title: Scanner
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---

Scanner class will represent and provides access to the physical scanner device.

**Type** - Java.Lang.Object

##Methods
###CancelRead

**public virtual void CancelRead ();**

This Cancels any pending asynchronous read() calls

**Parameters:**

**Returns** - System.Void

###Disable

**public virtual void Disable ();**

Disables the scanner hardware. Any pending scanned data will be lost. This method releases the scanner hardware resources for other application to use. You must call this as soon as you're done with the scanning.

**Parameters:**

**Returns** - System.Void

###Enable

**public virtual void Enable ();**

Enables the scanner hardware. This method does not make the scanner scan or turn on the laser. If the same scanner is enabled by other applications, this will throw ScannerExceptions. You must call disable() when you are done scanning, otherwise it will remain locked and be unavailable to other applications.

**Parameters:**

**Returns** - System.Void

###GetConfig

**public virtual Symbol.XamarinEMDK.Barcode.ScannerConfig GetConfig ();**

Gets the current configuration settings for this scanner device. If modifications are made to the returned ScannerConfig object, the Scanner.SetConfig(ScannerConfig) must be called to take effect. Scanner must be enabled before calling GetConfig().

**Parameters:**

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig

###GetInterfaceConfig

**public virtual Symbol.XamarinEMDK.Barcode.InterfaceConfig GetInterfaceConfig ();**


        

**Parameters:**

**Returns** - Symbol.XamarinEMDK.Barcode.InterfaceConfig

###Read

**public virtual void Read ();**

Starts an asynchronous Scan. The method will not turn on the scanner. It will, however, put the scanner in a state in which the scanner can be turned ON either by pressing a hardware trigger or can be turned ON automatically. This is determined by the Scanner.triggerType. The data notification must registered in order to scan and get the Scan Data. The read request can be cancelled by issuing a cancelRead. If a read() is submitted while another read is pending, the method call will fail. It is recommended to check whether a read is pending by calling isReadPending() before submitting a read(). A read() can also be submitted from within onData and onStatus events. If called within onStatus, it should be called only when IDLE status is received. If called within onData, then checking for isReadPending() is recommended.

**Parameters:**

**Returns** - System.Void

###Release

**public virtual void Release ();**

Releases the scanner object resources. The scanner object is unusable after this call. The new object can be requested using BarcodeManager.getDevice(...). The object will be unusable after this call even if any failure occurs.

**Parameters:**

**Returns** - System.Void

###SetConfig

**public virtual void SetConfig (Symbol.XamarinEMDK.Barcode.ScannerConfig p0);**

Changes the settings for this scanner device. The unsupported parameters will be ignored. This method skips the unsupported parameters and continues with setting the supported values.

**Parameters:**

Symbol.XamarinEMDK.Barcode.ScannerConfig **p0**  - The Parameters to use for this scanner device.

**Returns** - System.Void

###SetInterfaceConfig

**public virtual void SetInterfaceConfig (Symbol.XamarinEMDK.Barcode.InterfaceConfig interfaceConfig);**


        

**Parameters:**

Symbol.XamarinEMDK.Barcode.InterfaceConfig **interfaceConfig**  - 
        

**Returns** - System.Void

##Properties

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

**Type** - Symbol.XamarinEMDK.Barcode.Scanner+TriggerTypes
##Events

###Data

This is an internal event not intended to be used by applications.

###Status

This event is used internally and not meant for applications.


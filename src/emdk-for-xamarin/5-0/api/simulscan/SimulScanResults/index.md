---
title: SimulScanResults
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
Defines all the error codes the SimulScan API returns.

**Type** - Java.Lang.Enum

##Methods
###ValueOf

**public static Symbol.XamarinEMDK.SimulScan.SimulScanResults ValueOf (string p0);**


        

**Parameters:**

System.String **p0**  - 
        

**Returns** - Symbol.XamarinEMDK.SimulScan.SimulScanResults

###Values

**public static Symbol.XamarinEMDK.SimulScan.SimulScanResults[] Values ();**


        

**Parameters:**

**Returns** - Symbol.XamarinEMDK.SimulScan.SimulScanResults[]

##Properties

###AlreadyScanning
A scan operation is already in progress.

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanResults
###AlreadyStoppedScanning
The reader has already stopped scanning

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanResults
###Description
Returns the description for the error.

**Type** - System.String
###EmdkNotOpened
EMDK is not opened

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanResults
###FailedToLoadTemplate
Failed to load template

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanResults
###FailedToSetTemplate
Failed to set template

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanResults
###Failure
Failure

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanResults
###FeatureNotSupported
The feature is not supported completely or for specified input.

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanResults
###FetchTemplateInProgress
Fetch template is in progress

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanResults
###FetchTemplateNotAllowed
Fetch template not allowed while a read is in progress

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanResults
###InvalidObject
The reader has been released and is not valid.

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanResults
###InvalidValue
The value passed is not valid.

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanResults
###NoDataListener
Data listner is not set

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanResults
###ReaderAlreadyDisabled
The reader is already disabled

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanResults
###ReaderAlreadyEnabled
Reader is already enabled

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanResults
###ReaderDeinitFailed
Reader de-initialization failed.

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanResults
###ReaderInitFailed
Reader initialization failed.


**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanResults
###ReaderInUse
Another reader is already enabled and in use.

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanResults
###ReaderNotEnabled
The selected reader is not enabled.

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanResults
###Success
Success

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanResults
###TemplateNotSet
Failed to set template

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanResults
###Undefined
Undefined

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanResults
###Value
Get the error code integer value assigned to the SimulScanResults

**Type** - System.Int32

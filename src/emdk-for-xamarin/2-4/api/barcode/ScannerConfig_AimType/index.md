---
title: ScannerConfig.AimType
layout: guide.html 
product: EMDK For Xamarin 
productversion: '2.4' 
---
Describes the type of aiming to use. This will take affect only when the continuous read is set to false.

**Type** - Java.Lang.Enum

##Methods
###ValueOf
**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.AimType ValueOf (string this_);**


        

**Parameters:** 

* System.String **p0** - 

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+AimType

###Values
**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.AimType[] Values ();**


        


**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+AimType[]

##Properties

###ContinuousRead
Scan the barcodes continuously.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.AimType
###PressAndRelease
Press and release aim type; the scan status goes from idle to scanning by pressing and releasing the trigger.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.AimType
###TimedHold
Timed hold aim type; The scan status is idle until the trigger is pressed.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.AimType
###TimedRelease
Timed release aim type; The scan status is idle until the trigger is pressed.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.AimType
###Trigger
Dual-stage trigger based aiming; The standard triggering mode that remains idle until the trigger is pressed.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.AimType



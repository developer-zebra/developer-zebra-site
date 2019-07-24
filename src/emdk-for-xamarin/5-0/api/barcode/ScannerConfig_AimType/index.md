---
title: ScannerConfig.AimType
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
Describes the type of aiming to use. Takes affect only when continuous read is set to false.

**Type** - Java.Lang.Enum

##Methods
###ValueOf

**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.AimType ValueOf (string this_);**

Returns the enum constant of this type with the specified name. The string must match exactly an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

**Parameters:**

System.String **this_**  -  the name of the enum constant to be returned.

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+AimType

###Values

**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.AimType[] Values ();**

Returns an array containing the constants of this enum type, in the order they are declared.

**Parameters:**

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+AimType[]

##Properties

###ContinuousRead
Scan the barcodes continuously.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+AimType
###Presentation
Describes the type of aiming to use. Takes affect only when continuous read is set to false.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+AimType
###PressAndRelease
Press and release aim type; the scan status goes from idle to scanning by pressing and releasing the trigger.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+AimType
###PressAndSustain
Press and sustain aim type; This mode helps to continue the decode session until the beamTimer is expired, barcode is decoded or cancels the read. It avoids unexpected cancellations of a read by pressing the trigger button of the device. If the trigger button of the device is pressed while the beam is ON, it has no effect.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+AimType
###TimedHold
Timed hold aim type; The scan status is idle until the trigger is pressed.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+AimType
###TimedRelease
Timed release aim type; The scan status is idle until the trigger is pressed.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+AimType
###Trigger
Dual-stage trigger based aiming; The standard triggering mode that remains idle until the trigger is pressed.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+AimType

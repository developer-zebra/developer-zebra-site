---
title: Scanner.TriggerTypes
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
Types of triggers to begin barcode scanning.

**Type** - Java.Lang.Enum

##Methods
###ValueOf

**public static Symbol.XamarinEMDK.Barcode.Scanner.TriggerTypes ValueOf (string this_);**


        

**Parameters:**

System.String **p0** 

**Returns** - Symbol.XamarinEMDK.Barcode.Scanner+TriggerTypes

###Values

**public static Symbol.XamarinEMDK.Barcode.Scanner.TriggerTypes[] Values ();**


        

**Parameters:**

**Returns** - Symbol.XamarinEMDK.Barcode.Scanner+TriggerTypes[]

##Properties

###Hard
Hard trigger. When this mode is set, the user has to manually press the trigger on the device after issuing the read call.

**Type** - Symbol.XamarinEMDK.Barcode.Scanner+TriggerTypes
###SoftAlways
Soft trigger is used for all pending scans and for future reads issued. When this mode is set, the scan beam will come up automatically without having to press the trigger on the device.

**Type** - Symbol.XamarinEMDK.Barcode.Scanner+TriggerTypes
###SoftOnce
Soft trigger is used only once for a pending read or for the next issued read. When this mode is set, the scan beam will come up automatically without having to press the trigger on the device after issuing the read call.

**Type** - Symbol.XamarinEMDK.Barcode.Scanner+TriggerTypes

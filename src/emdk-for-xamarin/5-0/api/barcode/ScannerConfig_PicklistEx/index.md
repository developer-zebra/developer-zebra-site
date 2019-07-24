---
title: ScannerConfig.PicklistEx
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
Allows the imager or camera to decode only the barcode that is directly under the cross-hair (+)/center of the reticle part of the pattern. This feature is useful in applications where multiple barcodes may appear in the field of view during a decode session and only one of them is targeted for decode.

**Type** - Java.Lang.Enum

##Methods
###ValueOf

**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.PicklistEx ValueOf (string this_);**


        

**Parameters:**

System.String **this_**  - 
        

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+PicklistEx

###Values

**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.PicklistEx[] Values ();**


        

**Parameters:**

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+PicklistEx[]

##Properties

###Disabled
Disables Picklist mode.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+PicklistEx
###Hardware
Enables the HARDWARE Picklist mode so that only the barcode that is directly under the cross-hair or center of reticle is decoded.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+PicklistEx
###Outdoor
Allows the imager or camera to decode only the barcode at the center of the reticle (cross-hair) pattern. This is useful when multiple barcodes might appear in the field of view during a decode session and only one is desired for decode. Note: Selecting the picklist might affect decoding performance.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+PicklistEx
###Software
Enables the SOFTWARE Picklist mode so that only the barcode that is directly under the cross-hair or center of reticle is decoded.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+PicklistEx

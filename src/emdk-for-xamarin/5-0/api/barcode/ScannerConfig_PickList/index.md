---
title: ScannerConfig.PickList
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
Allows the imager to decode only the bar code that is directly under the cross-hair/reticle (+) part of the pattern. This feature is useful in applications where multiple bar codes may appear in the field of view during a decode session and only one of them is tar geted for decode.

**Type** - Java.Lang.Enum

##Methods
###ValueOf

**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.PickList ValueOf (string this_);**


        

**Parameters:**

System.String **p0** 

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+PickList

###Values

**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.PickList[] Values ();**


        

**Parameters:**

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+PickList[]

##Properties

###Disabled
Disables Picklist mode. Any bar code within the field of view can be decoded.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+PickList
###Enabled
Enables the Picklist mode so that only the bar code that is directly under the cross-hair (reticle) is decoded. This is useful when used in conjunction with the static and dynamic reticle viewfinder modes. (Scan Module Only)

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+PickList

---
title: ScannerConfig.UccLinkMode
layout: guide.html
product: EMDK For Xamarin 
productversion: '4.0' 
---
Describes the UCC link mode state.

**Type** - Java.Lang.Enum

##Methods
###ValueOf

**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.UccLinkMode ValueOf (string this_);**


        

**Parameters:**

System.String **p0** 

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+UccLinkMode

###Values

**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.UccLinkMode[] Values ();**


        

**Parameters:**

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+UccLinkMode[]

##Properties

###AlwaysLinked
1D and the 2D components are transmitted. If 2D is not present, the 1D component is not transmitted.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+UccLinkMode
###AutoDiscriminate
the digital scanner determines if there is a 2D portion, then transmits the 1D component, as well as the 2D portion if present (default). (default).

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+UccLinkMode
###LinkFlagIgnored
1D component is transmitted regardless of whether a 2D component is detected.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+UccLinkMode

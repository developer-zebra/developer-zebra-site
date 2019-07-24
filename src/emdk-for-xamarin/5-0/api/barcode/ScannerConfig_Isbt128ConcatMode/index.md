---
title: ScannerConfig.Isbt128ConcatMode
layout: guide.html
product: EMDK For Xamarin 
productversion: '4.0' 
---
Option for concatenating pairs of ISBT128 code types.

**Type** - Java.Lang.Enum

##Methods
###ValueOf

**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.Isbt128ConcatMode ValueOf (string this_);**


        

**Parameters:**

System.String **p0** 

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+Isbt128ConcatMode

###Values

**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.Isbt128ConcatMode[] Values ();**


        

**Parameters:**

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+Isbt128ConcatMode[]

##Properties

###Always
Will not decode if both the barcodes are not present or if one of them cannot be decoded. There must be two ISBT codes in order to decode and perform concatenation.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+Isbt128ConcatMode
###Auto
Decodes and concatenates pairs of ISBT codes immediately. If only a single ISBT symbol is present, the device must decode the symbol the number of times set via DataWedge Configuration 4 - 1 1 Redundancy - Code128 before transmitting its data to confirm that there is no additional ISBT symbol.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+Isbt128ConcatMode
###Never
Will ignore the barcode pair and only output decode data for only one of the barcodes

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+Isbt128ConcatMode

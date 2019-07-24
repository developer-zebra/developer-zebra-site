---
title: ScannerConfig.PoorQualityDecodeEffortLevel
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
Describes the selection of enhancement modes for decoding barcodes of poor or degraded quality.

**Type** - Java.Lang.Enum

##Methods
###ValueOf

**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.PoorQualityDecodeEffortLevel ValueOf (string this_);**


        

**Parameters:**

System.String **this_**  - 
        

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+PoorQualityDecodeEffortLevel

###Values

**public static Symbol.XamarinEMDK.Barcode.ScannerConfig.PoorQualityDecodeEffortLevel[] Values ();**


        

**Parameters:**

**Returns** - Symbol.XamarinEMDK.Barcode.ScannerConfig+PoorQualityDecodeEffortLevel[]

##Properties

###Level0
Decoding performance on regular 1D and 2D barcodes is not affected.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+PoorQualityDecodeEffortLevel
###Level1
The scanner performance on regular 2-D barcodes is impacted while decoding performance on Tesco Thailand barcode and Suppository barcode is improved.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+PoorQualityDecodeEffortLevel
###Level2
Same as Level 1.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+PoorQualityDecodeEffortLevel
###Level3
Same as Level 1.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+PoorQualityDecodeEffortLevel

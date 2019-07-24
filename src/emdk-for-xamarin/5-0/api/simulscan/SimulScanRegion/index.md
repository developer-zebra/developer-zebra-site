---
title: SimulScanRegion
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
The SimulScanRegion class represents a processed SimulScanTemplateRegion.

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanElement

##Properties

###AbsoluteConfidence
Returns the absolute confidence of OCR results

**Type** - System.Int32
###Data
Returns the processed data. 
        OCR (String)
        OMR (Integer)
        BARCODE (String)
        PICTURE (byte[])

**Type** - Java.Lang.Object
###Image
Returns the captured region image

**Type** - Android.Graphics.YuvImage
###RegionType
Returns the processed data type of this region

**Type** - Symbol.XamarinEMDK.SimulScan.RegionType
###RelativeConfidence
Returns the relative confidence of OCR results

**Type** - System.Int32

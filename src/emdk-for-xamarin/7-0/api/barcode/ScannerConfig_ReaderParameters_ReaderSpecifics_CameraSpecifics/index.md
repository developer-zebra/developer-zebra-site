---
title: ScannerConfig.ReaderParameters.ReaderSpecifics.CameraSpecifics
layout: guide.html 
product: EMDK For Xamarin 
productversion: '7.0' 
---
CameraSpecific class provides access to the camera scanner specific parameters.

**Type** - Java.Lang.Object

##Properties

###AimTimer
Duration in milliseconds for timed aim types ScannerConfig.AimType.TIMED_HOLD and ScannerConfig.AimType.TIMED_RELEASE.

**Type** - System.Int32
###AimType
Describes the type of aiming to use.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.AimType
###BeamTimer
Sets the maximum amount of time that the reader remains on (0 - 60,000 ms in increments of 100 ms). A value of 0 sets the reader to stay on indefinitely.

**Type** - System.Int32
###ContinuousRead
ContinuousRead class provides access to continuous scanning related parameters.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.ReaderParameters.ReaderSpecifics.ContinuousRead
###DifferentSymbolTimeout
This setting is used to prevent the scanner from decoding another symbol within this time interval.

**Type** - System.Int32
###IlluminationMode
Turns camera illumination on and off. This option is only available when camera is selected in the Barcode input Scanner selection option. Use class ScannerConfig.IlluminationMode.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.IlluminationMode
###Inverse1DMode
This parameter allows the user to select decoding on inverse 1D bar codes. Use class ScannerConfig.Inverse1DMode.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.Inverse1DMode
###LinearSecurityLevel
Sets the number of times a bar code is read to confirm an accurate decode. Use class ScannerConfig.LinearSecurityLevel..

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.LinearSecurityLevel
###OneDQuietZoneLevel
This parameter sets the effort at which the decoder will attempt to decode margin-less barcodes. Behavior of the level set to this parameter will vary based on the margin-less decoder selected. Note: Higher margin-less levels will increase decoding times and the risk of decoding errors. Zebra therefore recommends enabling only the symbologies that require a higher margin-less level, and leaving all other symbologies at the default level of 1.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.OneDQuietZoneLevel
###PicklistEx
Allows the imager to decode only the barcode that is directly under the cross-hair/reticle (+) part of the pattern.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.PicklistEx
###PoorQualityDecodeEffortLevel
This parameter permits selection of enhancement modes for decoding barcodes of poor or degraded quality. 

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.PoorQualityDecodeEffortLevel
###SameSymbolTimeout
This setting is used to prevent the scanner driver from decoding the same symbol within this time interval.

**Type** - System.Int32
###ViewfinderMode
Configures the Viewfinder modes supported for camera scanning. Use class ScannerConfig.ViewFinderMode.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.ViewFinderMode
###ViewfinderOffsetX
Sets the X Axis position of the top left corner of the view finder.

**Type** - System.Int32
###ViewfinderOffsetY
Sets the Y Axis position of the top left corner of the view finder.

**Type** - System.Int32
###ViewfinderSize
Sets the size of the view finder window in camera scanner.

**Type** - System.Int32



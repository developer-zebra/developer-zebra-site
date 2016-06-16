---
title: ScannerConfig.ReaderParameters.ReaderSpecifics.CameraSpecifics
layout: guide.html
product: EMDK For Xamarin
productversion: '2.0'
---
CameraSpecific class provides access to the camera scanner specific parameters.

**Type** - Java.Lang.Object

##Properties

###BeamTimer
Sets the maximum amount of time that the reader remains on (0 - 60,000 ms in increments of 100 ms). A value of 0 sets the reader to stay on indefinitely.

**Type** - System.Int32
###ContinuousRead
ContinuousRead class provides access to continuous scanning related parameters.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.ReaderParameters.ReaderSpecifics.ContinuousRead
###IlluminationMode
Turns camera illumination on and off. This option is only available when camera is selected in the Barcode input Scanner selection option. Use class ScannerConfig.IlluminationMode.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.IlluminationMode
###Inverse1DMode
This parameter allows the user to select decoding on inverse 1D bar codes. Use class ScannerConfig.Inverse1DMode.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.Inverse1DMode
###LinearSecurityLevel
Sets the number of times a bar code is read to confirm an accurate decode. Use class ScannerConfig.LinearSecurityLevel..

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.LinearSecurityLevel
###ViewfinderMode
Configures the Viewfinder modes supported for camera scanning. Use class ScannerConfig.ViewFinderMode.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.ViewFinderMode















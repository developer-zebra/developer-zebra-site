---
title: ScannerConfig.ReaderParameters.ReaderSpecifics.LaserSpecifics
layout: guide.html
product: EMDK For Xamarin
productversion: '2.3'
---
LaserSpecific class provides access to the laser scanner specific parameters.

**Type** - Java.Lang.Object

##Properties

###AdaptiveScanning
This parameter enables or disables the adaptive scanning. When adaptive scanning is enabled, the scan engine will automatically toggle between 2 scan angles, wide and narrow, allowing the scan engine to decode bar codes based on the distance.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.AdaptiveScanning
###BeamTimer
Sets the maximum amount of time that the reader remains on (0 - 60,000 ms in increments of 100 ms). A value of 0 sets the reader to stay on indefinitely.

**Type** - System.Int32
###BeamWidth
Controls the beam width of a laser scanner. Laser beam width can be shortened or widened using this parameter.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.BeamWidth
###ContinuousRead
ContinuousRead class provides access to continuous scanning related parameters.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.ReaderParameters.ReaderSpecifics.ContinuousRead
###Inverse1DMode
This parameter allows the user to select decoding on inverse 1D bar codes. Use enum ScannerConfig.Inverse1DMode.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.Inverse1DMode
###LinearSecurityLevel
Sets the number of times a bar code is read to confirm an accurate decode. Use enum ScannerConfig.LinearSecurityLevel.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.LinearSecurityLevel
###OneDQuietZoneLevel
This parameter sets the effort at which the decoder will attempt to decode margin-less barcodes. Behavior of the level set to this parameter will vary based on the margin-less decoder selected. Note: Higher margin-less levels will increase decoding times and the risk of decoding errors. Zebra therefore recommends enabling only the symbologies that require a higher margin-less level, and leaving all other symbologies at the default level of 1.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.OneDQuietZoneLevel
###PoorQualityDecodeEffortLevel
This parameter permits selection of enhancement modes for decoding barcodes of poor or degraded quality. 

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.PoorQualityDecodeEffortLevel
###PowerMode
Set scanner power mode. Use enum ScannerConfig.PowerMode.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.PowerMode







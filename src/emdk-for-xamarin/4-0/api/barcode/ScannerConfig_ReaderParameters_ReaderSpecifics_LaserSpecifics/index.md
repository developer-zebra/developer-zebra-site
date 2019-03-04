---
title: ScannerConfig.ReaderParameters.ReaderSpecifics.LaserSpecifics
layout: guide.html 
product: EMDK For Xamarin 
productversion: '4.0' 
---
LaserSpecific class provides access to the laser scanner specific parameters.

**Type** - Java.Lang.Object

##Properties

###AdaptiveScanning
This parameter enables or disables the adaptive scanning. When adaptive scanning is enabled, the scan engine will automatically toggle between 2 scan angles, wide and narrow, allowing the scan engine to decode bar codes based on the distance.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.AdaptiveScanning
###AimTimer
Duration in milliseconds for timed aim types ScannerConfig.AimType.TIMED_HOLD and ScannerConfig.AimType.TIMED_RELEASE.

**Type** - System.Int32
###AimType
Describes the type of aiming to use.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.AimType
###BeamTimer
Sets the maximum amount of time that the reader remains on (0 - 60,000 ms in increments of 100 ms). A value of 0 sets the reader to stay on indefinitely.

**Type** - System.Int32
###BeamWidth
Controls the beam width of a laser scanner. Laser beam width can be shortened or widened using this parameter.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.BeamWidth
###ContinuousRead
ContinuousRead class provides access to continuous scanning related parameters.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.ReaderParameters.ReaderSpecifics.ContinuousRead
###DifferentSymbolTimeout
This setting is used to prevent the scanner from decoding another symbol within this time interval.

**Type** - System.Int32
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
###SameSymbolTimeout
This setting is used to prevent the scanner driver from decoding the same symbol within this time interval.

**Type** - System.Int32



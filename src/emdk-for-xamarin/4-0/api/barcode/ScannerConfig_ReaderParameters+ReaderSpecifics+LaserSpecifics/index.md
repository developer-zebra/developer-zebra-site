---
title: ScannerConfig.ReaderParameters+ReaderSpecifics+LaserSpecifics
layout: guide.html
product: EMDK For Xamarin 
productversion: '4.0' 
---
LaserSpecific class provides access to the laser scanner specific parameters.

**Type** - Java.Lang.Object

##Properties

###AdaptiveScanning
This parameter enables or disables the adaptive scanning. When adaptive scanning is enabled, the scan engine will automatically toggle between 2 scan angles, wide and narrow, allowing the scan engine to decode barcodes based on the distance. Use enum ScannerConfig.AdaptiveScanning.


**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+AdaptiveScanning
###AimTimer
Duration in milliseconds for timed aim types ScannerConfig.AimType.TIMED_HOLD and ScannerConfig.AimType.TIMED_RELEASE. Note than this duration must be less than the beamTimer.

**Type** - System.Int32
###AimType
Describes the type of aiming to use.
Note: Setting aimType is recommended instead of ScannerConfig.ReaderParams.ReaderSpecific.ContinuousRead.isContinuousScan. If the application modifies ScannerConfig.ReaderParams.ReaderSpecific.ContinuousRead.isContinuousScan and aimType, the aimType settings will take precedence.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+AimType
###AutoCharacterSetFailureOption
Failure option for auto character set selection.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+AutoCharacterSetFailureOption
###AutoCharacterSetPreferredOrder
Selection of character sets available for automatic decoding.

**Type** - System.Collections.Generic.IList<Symbol.XamarinEMDK.Barcode.ScannerConfig+AutoCharacterSetPreference>
###BeamTimer
Sets the maximum amount of time that the reader remains on (0 - 60,000 ms in increments of 100 ms). A value of 0 sets the reader to stay on indefinitely.

**Type** - System.Int32
###BeamWidth
Controls the beam width of a laser scanner. Laser beam width can be shortened or widened using this parameter. Use enum ScannerConfig.BeamWidth.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+BeamWidth
###CharacterSetSelection
Selection of character set for decoding the barcode.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+CharacterSet
###ConnectionIdleTime

        

**Type** - System.Int32
###ContinuousRead
ContinuousRead class provides access to continuous scanning related parameters.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+ReaderParameters+ReaderSpecifics+ContinuousRead
###DifferentSymbolTimeout
This setting is used to prevent the scanner from decoding another symbol within this time interval. This is applicable only for the aim type ScannerConfig.AimType.CONTINUOUS_READ. The user may want to prevent decoding too quickly and set an interval that the user can aim before decoding the next barcode. A value of 0 means no interval is required between two successive reads. Boundary values are 0 to 5000 in milliseconds in 500 increments such as 0, 500, 1000... etc
Note: If the application modifies ScannerConfig.ReaderParams.ReaderSpecific.ContinuousRead.differentSymbolTimeout and differentSymbolTimeout, the differentSymbolTimeout settings will take precedence.

**Type** - System.Int32
###DisconnectOnExit

        

**Type** - System.Boolean
###Inverse1DMode
This parameter allows the user to select decoding on inverse 1D bar codes. Use enum ScannerConfig.Inverse1DMode.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+Inverse1DMode
###LinearSecurityLevel
Sets the number of times a bar code is read to confirm an accurate decode. Use enum ScannerConfig.LinearSecurityLevel.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+LinearSecurityLevel
###OneDQuietZoneLevel
This parameter sets the effort at which the decoder will attempt to decode margin-less barcodes. Behavior of the level set to this parameter will vary based on the margin-less decoder selected. Note: Higher margin-less levels will increase decoding times and the risk of decoding errors. Zebra therefore recommends enabling only the symbologies that require a higher margin-less level, and leaving all other symbologies at the default level of 1. Use enum ScannerConfig.OneDQuietZoneLevel.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+OneDQuietZoneLevel
###PairAfterScannerReboot
Enable/disable automatic reconnection after scanner reboot.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+PairAfterScannerReboot
###PoorQualityDecodeEffortLevel
This parameter permits selection of enhancement modes for decoding barcodes of poor or degraded quality. Use enum ScannerConfig.PoorQualityDecodeEffortLevel.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+PoorQualityDecodeEffortLevel
###PowerMode
Set scanner power mode. Use enum ScannerConfig.PowerMode.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+PowerMode
###SameSymbolTimeout
This setting is used to prevent the scanner driver from decoding the same symbol within this time interval. This is applicable only for the aim type ScannerConfig.AimType.CONTINUOUS_READ. Basically in the continuous mode the user can perform rapid scan and to prevent the user from decoding the same barcode twice user can set this value to an appropriate interval (in milliseconds). A value of 0 means no interval is required between two successive reads. Boundary values are 0 to 5000 in milliseconds in 500 increments such as 0, 500, 1000... etc
Note: If the application modifies ScannerConfig.ReaderParams.ReaderSpecific.ContinuousRead.sameSymbolTimeout and sameSymbolTimeout, the sameSymbolTimeout settings will take precedence.

**Type** - System.Int32

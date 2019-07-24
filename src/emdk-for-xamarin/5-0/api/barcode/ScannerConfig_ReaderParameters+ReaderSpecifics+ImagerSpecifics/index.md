---
title: ScannerConfig.ReaderParameters+ReaderSpecifics+ImagerSpecifics
layout: guide.html
product: EMDK For Xamarin 
productversion: '4.0' 
---
ImagerSpecific provides access to the imager specific parameters.

**Type** - Java.Lang.Object

##Properties

###AimingPattern
Type of aiming pattern to be used for barcode scanning.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+AimingPattern
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
Sets the maximum amount of time that the reader remains on (0 - 60,000 ms in increments of 100 ms). A value of 0 sets the reader to stay on indefinitely

**Type** - System.Int32
###CharacterSetSelection
Selection of character set for decoding the barcode.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+CharacterSet
###ConnectionIdleTime
This is the time (in seconds) when an external scanner is idle in a particular state (ScannerStates.IDLE to ScannerStates.WAITING) after which the connection between the terminal and the scanner is severed to conserve power. This is currently applicable to Bluetooth scanners only..

**Type** - System.Int32
###ContinuousRead
ContinuousRead class provides access to continuous scanning related parameters.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+ReaderParameters+ReaderSpecifics+ContinuousRead
###DifferentSymbolTimeout
This setting is used to prevent the scanner from decoding another symbol within this time interval. This is applicable only for the aim type ScannerConfig.AimType.CONTINUOUS_READ. The user may want to prevent decoding too quickly and set an interval that the user can aim before decoding the next barcode. A value of 0 means no interval is required between two successive reads. Boundary values are 0 to 5000 in milliseconds in 500 increments such as 0, 500, 1000... etc
Note: If the application modifies ScannerConfig.ReaderParams.ReaderSpecific.ContinuousRead.differentSymbolTimeout and differentSymbolTimeout, the differentSymbolTimeout settings will take precedence.

**Type** - System.Int32
###DigimarcDecoding

        

**Type** - System.Boolean
###DisconnectOnExit
This parameter indicates to the scan driver to disconnect any existing connection between an external Bluetooth scanner and the terminal. When a BT scanner establishes connection to the terminal it will not automatically disconnect when the scanner is disabled by calling Scanner.disable(). If this parameter is set the scanning driver will force the scanner to disconnect. Note: If this parameter is set to true, it will not fire the DISCONNECTED state.

**Type** - System.Boolean
###IlluminationBrightness
Illumination Brightness of the Imager. The valid range is 1 to 10.

**Type** - System.Int32
###IlluminationMode
Turns imager illumination on and off.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+IlluminationMode
###Inverse1DMode
This parameter allows the user to select decoding on inverse 1D bar codes. Use class ScannerConfig.Inverse1DMode.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+Inverse1DMode
###LcdMode
Enables or disables LCD mode. LCD mode enhances the ability of the imager to read bar codes from LCD displays such as cellphones (imager only). Use class ScannerConfig.LcdMode.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+LcdMode
###LinearSecurityLevel
Sets the number of times a bar code is read to confirm an accurate decode. Use class ScannerConfig.LinearSecurityLevel.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+LinearSecurityLevel
###OneDQuietZoneLevel
This parameter sets the effort at which the decoder will attempt to decode margin-less barcodes. Behavior of the level set to this parameter will vary based on the margin-less decoder selected. Note: Higher margin-less levels will increase decoding times and the risk of decoding errors. Zebra therefore recommends enabling only the symbologies that require a higher margin-less level, and leaving all other symbologies at the default level of 1. Use enum ScannerConfig.OneDQuietZoneLevel.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+OneDQuietZoneLevel
###PairAfterScannerReboot
Enable/disable automatic reconnection after scanner reboot. Applicable to DS3678 Bluetooth scanner only. Use enum ScannerConfig.PairAfterScannerReboot.


**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+PairAfterScannerReboot
###PickList
Allows the imager to decode only the bar code that is directly under the cross-hair/reticle (+) part of the pattern. This feature is useful in applications where multiple bar codes may appear in the field of view during a decode session and only one of them is targeted for decode. Use class ScannerConfig.PickList.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+PickList
###PicklistEx
Allows the imager to decode only the barcode that is directly under the cross-hair/reticle (+) part of the pattern. This feature is useful in applications where multiple barcodes may appear in the field of view during a decode session and only one of them is targeted for decode. Use enum ScannerConfig.PicklistEx.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+PicklistEx
###PoorQualityDecodeEffortLevel
This parameter permits selection of enhancement modes for decoding barcodes of poor or degraded quality. Use enum ScannerConfig.PoorQualityDecodeEffortLevel.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+PoorQualityDecodeEffortLevel
###SameSymbolTimeout
This setting is used to prevent the scanner driver from decoding the same symbol within this time interval. This is applicable only for the aim type ScannerConfig.AimType.CONTINUOUS_READ. Basically in the continuous mode the user can perform rapid scan and to prevent the user from decoding the same barcode twice user can set this value to an appropriate interval (in milliseconds). A value of 0 means no interval is required between two successive reads. Boundary values are 0 to 5000 in milliseconds in 500 increments such as 0, 500, 1000... etc

**Type** - System.Int32
###ScanMode
Sets the scan mode. This allows to select one type from the ScanMode enum.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+ScanMode
###SceneDetectionQualifier
Qualifier for starting scene detection when presentation Aim Type is selected.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+SceneDetectionQualifier

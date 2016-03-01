---
title: ScannerConfig.ReaderParameters.ReaderSpecifics.ImagerSpecifics
---
ImagerSpecific provides access to the imager specific parameters.

**Type** - Java.Lang.Object

##Properties

###AimingPattern
Type of aiming pattern to be used for barcode scanning.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.AimingPattern
###BeamTimer
Sets the maximum amount of time that the reader remains on (0 - 60,000 ms in increments of 100 ms). A value of 0 sets the reader to stay on indefinitely

**Type** - System.Int32
###ConnectionIdleTime
This is the time (in seconds) when an external scanner is idle in a particular state (ScannerStates.IDLE to ScannerStates.WAITING) after which the connection between the terminal and the scanner is severed to conserve power. This is currently applicable to Bluetooth scanners only..

**Type** - System.Int32
###ContinuousRead
ContinuousRead class provides access to continuous scanning related parameters.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.ReaderParameters.ReaderSpecifics.ContinuousRead
###DisconnectOnExit
This parameter indicates to the scan driver to disconnect any existing connection between an external Bluetooth scanner and the terminal. When a BT scanner establishes connection to the terminal it will not automatically disconnect when the scanner is disabled by calling Scanner.disable(). If this parameter is set the scanning driver will force the scanner to disconnect. Note: If this parameter is set to true, it will not fire the DISCONNECTED state.

**Type** - System.Boolean
###IlluminationBrightness
Illumination Brightness of the Imager. The valid range is 1 to 10.

**Type** - System.Int32
###IlluminationMode
Turns imager illumination on and off.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.IlluminationMode
###Inverse1DMode
This parameter allows the user to select decoding on inverse 1D bar codes. Use class ScannerConfig.Inverse1DMode.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.Inverse1DMode
###LcdMode
Enables or disables LCD mode. LCD mode enhances the ability of the imager to read bar codes from LCD displays such as cellphones (imager only). Use class ScannerConfig.LcdMode.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.LcdMode
###LinearSecurityLevel
Sets the number of times a bar code is read to confirm an accurate decode. Use class ScannerConfig.LinearSecurityLevel.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.LinearSecurityLevel
###PickList
Allows the imager to decode only the bar code that is directly under the cross-hair/reticle (+) part of the pattern. This feature is useful in applications where multiple bar codes may appear in the field of view during a decode session and only one of them is targeted for decode. Use class ScannerConfig.PickList.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.PickList



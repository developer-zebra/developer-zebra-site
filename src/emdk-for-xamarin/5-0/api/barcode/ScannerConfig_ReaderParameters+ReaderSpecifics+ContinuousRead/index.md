---
title: ScannerConfig.ReaderParameters+ReaderSpecifics+ContinuousRead
layout: guide.html
product: EMDK For Xamarin 
productversion: '4.0' 
---
ContinuousRead class provides access to continuous scanning related parameters.

**Type** - Java.Lang.Object

##Constructors

###ContinuousRead

**public ContinuousRead (Symbol.XamarinEMDK.Barcode.ScannerConfig.ReaderParameters.ReaderSpecifics __self);**


        

##Properties

###DifferentSymbolTimeout
This setting is used to prevent the scanner from decoding another symbol within this time interval (applicable only when isContinuousScan = true). The user may want to prevent decoding too quickly and set an interval that the user can aim before decoding the next barcode. A value of 0 means no interval is required between two successive reads. Boundary values are 0 to 5000 in milliseconds in 500 increments such as 0, 500, 1000' etc

**Type** - System.Int32
###IsContinuousScan
Scan continuously; In this mode once the trigger is pulled the user can continue scanning barcodes without releasing the trigger as long as new reads are submitted as soon as the earlier read is satisfied. This mode is useful when the user wants to perform rapid scanning. To provide better control over this feature we have added the two new reader parameters (SameSymbolTimeout, DifferentSymbolTimeout) that are associated with continuous reads. These reader parameters are available in both ImagerSpecific and LaserSpecific classes. NOTE: The following must be considered when using this AIM_TYPE_CONTINUOUS_READ mode. 1. After each successful read, the application will have to submit a new read for rapid triggering. 2. It is recommended that the Picklist mode be enabled for the imager-class scanners. 3. When using this mode, the IMAGER_SPECIFIC.VFFeedback parameter will be ignored and no viewfinder feedback will be provided. It is similar to setting IMAGER_SPECIFIC.VFFeedback to VIEWFINDER_FEEDBACK.VIEWFINDER_MODE_DISABLED 4. If the IMAGER_SPECIFIC.VFMode parameter is set to VIEWFINDER_MODE.VIEWFINDER_MODE_DYNAMIC_RETICLE, then this continuous read mode will be ignored

**Type** - System.Boolean
###SameSymbolTimeout
This setting is used to prevent the scanner driver from decoding the same symbol within this time interval (applicable only when isContinuousScan = true). Basically in the continuous mode the user can perform rapid scan and to prevent the user from decoding the same barcode twice user can set this value to an appropriate interval (in milliseconds). A value of 0 means no interval is required between two successive reads. Boundary values are 0 to 5000 in milliseconds in 500 increments such as 0, 500, 1000' etc

**Type** - System.Int32

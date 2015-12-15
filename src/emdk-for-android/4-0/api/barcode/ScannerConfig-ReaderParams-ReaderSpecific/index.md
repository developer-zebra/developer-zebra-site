---
title: ScannerConfig.ReaderParams.ReaderSpecific
---

ReaderSpecific class provides access to the reader specific parameters.

##Constructors

###ReaderSpecific



##Public Fields

###imagerSpecific

Provide access to set the imager specific settings if the scanner device is imager.
 

**Example Usage:**
	
	:::java	
	if (scanner.getScannerInfo().getDeviceType() == DeviceType.IMAGER) {
	readerParams.readerSpecific.imagerSpecific.picklist = PickList.DISABLED;
	}


**Type:**

com.symbol.emdk.barcode.ScannerConfig.ReaderParams.ReaderSpecific.ImagerSpecific

###cameraSpecific

Provide access to set the camera specific settings if the scanner device is camera.
 

**Example Usage:**
	
	:::java	
	if (scanner.getScannerInfo().getDeviceType() == DeviceType.CAMERA) {
	readerParams.readerSpecific.cameraSpecific.illuminationMode = IlluminationMode.ON;
	}


**Type:**

com.symbol.emdk.barcode.ScannerConfig.ReaderParams.ReaderSpecific.CameraSpecific

###laserSpecific

Provide access to set the laser specific settings if the scanner device is laser.

**Type:**

com.symbol.emdk.barcode.ScannerConfig.ReaderParams.ReaderSpecific.LaserSpecific



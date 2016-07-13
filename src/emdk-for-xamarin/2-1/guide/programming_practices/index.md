---
title: EMDK for Xamarin Programming Practices
layout: guide.html
product: EMDK For Xamarin
productversion: '2.1'
---

##EMDK concurrency guidelines

1.	The EMDKManager instance will always provide only one object (singleton object) of each feature like BarcodeManager, ProfileManager etc. Any attempt to request a new object of the same feature will return the object that is already initiated.

2.	BarcodeManager, SimulScanManager, ProfileManager and Scan&PairManager objects can be created simultaneously but cannot be accessed at the same time.

    For example:

    * If the BarcodeManager has enabled any one of the barcode device, then no other barcode devices can be enabled at the same time. If camera is used as the barcode device, even the Android Camera APIs cannot be used at that time.
    * Also, the SimulScanManager and Scan&PairManager objects cannot enable the respective devices either.
    * However, once the BarcodeManager is disabled and released, then the SimulScanManager can enable the SimulScan device.
    * An app should either use the DataCapture feature of the ProfileManager or barcode APIs for scanning barcodes but not both
3.	The EMDKManager -> ProfileManager supports simultaneous usage in multiple applications. This means, an individual application needs to not release EMDKManager -> ProfileManager before going to the background. In the previous versions, if an application going to the background did not release the ProfileManager, no other applications could access ProfileManager.

    However, the following restrictions will continue to apply:
    
    * Only one instance of EMDKManager can be used in an application.
    * Only one instance of ProfileManager can be used in an application.
    * Other than the ProfileManager, all other features such as EMDKManager -> BarcodeManager used in an application must be released before another application can use that feature.
    * All instances of all features including EMDKManager must be released before the exiting of the application.

##Selecting EMDK in the MAKE file

The following must be declared in the application MAKE file to use the EMDK SDK library to compile the application:

    :::java
    LOCAL_JAVA_LIBRARIES := com.symbol.emdk
    LOCAL_PREBUILT_STATIC_JAVA_LIBRARIES := libemdk:com.symbol.emdk/com.symbol.emdk.jar















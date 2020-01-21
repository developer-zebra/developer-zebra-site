---
title: EMDK for Xamarin Programming Practices
layout: guide.html
product: EMDK For Xamarin
productversion: '5.0'
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

 
##EMDK Manager opening and closing 

The application must call EMDKManager.getEMDKManager to use the EMDK. It is recommended to call this method in the onCreate method to avoid a delay at a later stage.  EMDKManager will call the interface EMDKListener.onOpened when the EMDK is ready to use and this callback will be called on main thread only; therefore the application must not block the Main thread to receive EMDKListener.onOpened callback.

The application must call the EMDKManager.release() in the below scenarios:

1.	On application exit.
2.	On EMDKListener.onClosed callback. 

The EMDKListener.onClosed gets called to notify the application that the EMDKManager object has been abruptly closed due to some failures at EMDK or a lower layer. When this occurs, the application must the release the current EMDK manager instance and get the new EMDK Manager instance 


>Note: If you are blocking the main thread, the application will not get notification when the EMDK closes unexpected reasons and therefore the application must not block the main thread to receive the EMDKListener.onClosed callback.













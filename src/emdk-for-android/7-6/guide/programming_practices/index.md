---
title: EMDK for Android Programming Practices
layout: guide.html
product: EMDK For Android
productversion: '7.6'
---

##### Also see [Android Memory Considerations For Developers](https://developer-dev.savanna.zebra.com/community/home/blog/2018/08/21/android-memory-considerations-for-developers), an article from Zebra software engineering that provides memory allocation and management advice.

-----

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

 

 
##Creating a common Application to run on Zebra and Non-Zebra devices

For those who want to write a common application that is capable of running on both Zebra and Non-Zebra devices, care must be taken to use the EMDK components only on the Zebra devices as described below:  

1.	The common app containing the EMDK components will not install on a non-Zebra device and will result in the error “Installation error: INSTALL\_FAILED\_MISSING\_SHARED\_LIBRARY". 

 To overcome this problem, the application manifest file must be modified as shown below: 
 
                :::xml
                <uses-library android:name="com.symbol.emdk" android:required="false" />

2.	When the common app is launched on a non-Zebra device, the "ClassNotFoundException" exception may occur.  To overcome this problem, do not implement the EMDK interfaces in the MainActivity.  Instead, create a separate class (ex: EMDKAPIWrapper or any other name) and implement the EMDK related calls in that. When the activity starts, create the EMDKAPIWrapper object during the run time only if you are using the Zebra device.


        :::java
        public class MainActivity extends Activity {
        private EMDKWrapper emdkWrapper = null;
            @Override
            protected void onCreate(Bundle savedInstanceState) {
                /* Rebranded Zebra devices are set to "Zebra Technologies"*/
                /* Motorola devices are set to "Motorola Solutions" */
                
                if(android.os.Build.MANUFACTURER.contains("Zebra Technologies") || android.os.Build.MANUFACTURER.contains("Motorola Solutions") ){
                emdkWrapper  = new EMDKWrapper();
            }
            }
            
            @Override
            protected void onDestroy() {
                //Release the EMDKmanager on Application exit.
                if (emdkWrapper  != null) {
                        emdkWrapper .release();			
                }
            }
            
            public class EMDKWrapper implements EMDKListener {
                EMDKManager emdkManager = null;
                @Override
                void getEMDKManager(Bundle savedInstanceState) { 
                    EMDKResults results = EMDKManager.getEMDKManager(getApplicationContext(), this);
                    
                    if (results.statusCode != EMDKResults.STATUS_CODE.SUCCESS) {
                        //Failed to request the EMDKManager
                    }
                }
            }
            
            @Override
            void release() {
                //Release the EMDKmanager on Application exit.
                if (emdkManager != null) {
                    emdkManager.release();	
                    emdkManager = null;		
                }
            }
            
            @Override
            public void onOpened(EMDKManager emdkManager) {
                this. emdkManager = emdkManager;
            //The EMDK Manager is ready and now you can call other EMDK APIs.
            }
            
            
            @Override
            public void onClosed() {
                /* EMDKManager is closed abruptly. Call EmdkManager.release() to free the resources used by the current EMDK instance. */
                if (emdkManager != null) {
                    emdkManager.release();	
                    emdkManager = null;		
                }
            }
        }


##EMDK Manager opening and closing 

The application must call EMDKManager.getEMDKManager to use the EMDK. It is recommended to call this method in the onCreate method to avoid a delay at a later stage.  EMDKManager will call the interface EMDKListener.onOpened when the EMDK is ready to use and this callback will be called on main thread only; therefore the application must not block the Main thread to receive EMDKListener.onOpened callback.

The application must call the EMDKManager.release() in the below scenarios:

1.	On application exit.
2.	On EMDKListener.onClosed callback. 

The EMDKListener.onClosed gets called to notify the application that the EMDKManager object has been abruptly closed due to some failures at EMDK or a lower layer. When this occurs, the application must the release the current EMDK manager instance and get the new EMDK Manager instance 


>Note: If you are blocking the main thread, the application will not get notification when the EMDK closes unexpected reasons and therefore the application must not block the main thread to receive the EMDKListener.onClosed callback.

###Refer the below code snippets for EMDKManager opening and closing

    :::java
    public class MainActivity extends Activity implements EMDKListener {
        private EMDKManager emdkManager = null;
    
        @Override
        protected void onCreate(Bundle savedInstanceState) {
            EMDKResults results = EMDKManager.getEMDKManager(getApplicationContext(), this);
            if (results.statusCode != EMDKResults.STATUS_CODE.SUCCESS) {
                    //Failed to request the EMDKManager
                }
            }
        }
        
        @Override
        protected void onDestroy() {
            //Release the EMDKmanager on Application exit.
            if (emdkManager != null) {
                emdkManager.release();
                emdkManager = null;
                }
            }
            
        @Override
        public void onOpened(EMDKManager emdkManager) {
        this. emdkManager = emdkManager;
                //The EMDK Manager is ready and now you can call other EMDK APIs.
        }
        
        @Override
        public void onClosed() {
        /* EMDKManager is closed abruptly. Call EmdkManager.release() to free the  resources used by the current EMDK instance. */
        if (emdkManager != null) {
            emdkManager.release();
            emdkManager = null;
        }
        }
    }

##Checking EMDK Version on Device

Zebra mobile devices running Android KitKat have a built-in EMDK device runtime that can be updated independently of the OS. On devices running Android versions newer than KitKat, the built-in EMDK runtime can be updated only with an OS update. Devices running Jelly Bean have no built-in runtime.

###Manual Steps
Go to Settings > Apps > All > EMDK Service. Click on the EMDK Service icon to see the version.

###Programmatic Steps

Option 1:

    :::java
    Use Android PackageManager to get the EMDK version.
    try {    
        String emdkPkgName = "com.symbol.emdk.emdkservice";
            PackageInfo pinfo = getPackageManager().getPackageInfo(emdkPkgName, 0);
            String emdkVersion = pinfo.versionName;
    } catch (PackageManager.NameNotFoundException e) {
        // EMDK does not exists on the device.
    }

Option 2:

    :::java
    Use EMDK VersionManager to get the EMDK version as described in the VersionManager API reference.


##Selecting EMDK in the MAKE file

The following must be declared in the application MAKE file to use the EMDK SDK library to compile the application:

    :::java
    LOCAL_JAVA_LIBRARIES := com.symbol.emdk
    LOCAL_PREBUILT_STATIC_JAVA_LIBRARIES := libemdk:com.symbol.emdk/com.symbol.emdk.jar

##  EMDK as a dependency in build.gradle

**To use EMDK in a project**:

1. In the project folder viewer, open the **build.gradle** file for the **app** module.
2. Add the lines below to the dependencies section.

    **Windows or Mac OS X**

        dependencies {
            compileOnly 'com.symbol:emdk:x.x.x'
            // Replace x.x.x above with the real EMDK version number
        ...
        }
3. Rebuild the project by selecting **Make Project** from the **Build** menu.

#### Notes: 
* **A plus sign ("+") can be substituted for a major or minor version number** in the dependencies section. <br>For example, declaring `com.symbol:emdk:7.3.+` uses SDK versions 7.3 and higher.
* **The x's in the sample above MUST be replaced with [real version numbers](https://bintray.com/zebratechnologies/EMDKAndroid/com.symbol.emdk)**.

---
title: Using Bluetooth Scanner API
layout: guide.html
product: EMDK For Android
productversion: '7.6'
---

## Overview

This guide will walk you through creating an EMDK For Android application that will use [Bluetooth Scanner API](/emdk-for-android/7-6/api/barcode) introduced in EMDK V 3.1, to perform pairing with Bluetooth Scanning device using Bluetooth Pairing Utility of Bluetooth Scanner API.

> Note: The Bluetooth Scanner API is a part of [Barcode API](/emdk-for-android/7-6/api/barcode).  

Initially, the Bluetooth Scanner is not connected to the device. So the Bluetooth Pairing Utility would turn ON the Bluetooth of the device where the app is running (Ex. TC55) if not already turned ON. Once that is done, the utility will ask you to scan a Barcode in the app using Bluetooth Scanner (Ex. RS507). After scanning the Barcode, the utility will start pairing process and pair the Bluetooth Scanning device (Ex. RS507) with your device where the app is running (Ex. TC55). 

In this tutorial, we will explore the [Bluetooth Scanner API](/emdk-for-android/7-6/api/barcode) by using it for developing a basic application that will pair the device with Bluetooth Scanner by allowing Bluetooth Scanner to scan the Barcode in the app through Bluetooth Pairing Utility.

> Note: The [Bluetooth Scanner API](/emdk-for-android/7-6/api/barcode) does not use Profile Wizard to pair with Bluetooth Scanner and everything needs to be configured programmatically through code.   
        


## Creating The Project

> Note: Provide "BluetoothScannerTutorial" as the project name for this tutorial.

Start by creating a new Android Studio [project](/emdk-for-android/7-6/tutorial/tutCreateProjectAndroidStudio).

## Enabling Android Permissions
1. Modify the Application's Manifest.xml to use the EMDK library and to set permission for the EMDK to scan the barcodes.
  
    ![img](../../images/BluetoothScannerTutorialImages/manifest_file.jpg)

    You must first enable permissions for 'com.symbol.emdk.permission.EMDK':  
   
        :::xml
        <uses-permission android:name="com.symbol.emdk.permission.EMDK" /> 

    Then you must enable the library for EMDK:  
      
        :::xml
        <uses-library android:name="com.symbol.emdk" />

    When done, your manifest.xml should look like:

    ![img](../../images/BluetoothScannerTutorialImages/manifest_permissions_added.jpg) 

##Adding Some Code    
1. Now we will start to add some code. 

    First you must add references to the libraries:  
    
        :::java
        import com.symbol.emdk.EMDKManager;
		import com.symbol.emdk.barcode.BarcodeManager;  

    Then you must make the activity to implement [EMDKListener](/emdk-for-android/7-6/api/core/EMDKManager-EMDKListener). 

    After that you also need to implement [BarcodeManager.​ScannerConnectionListener](/emdk-for-android/7-6/api/barcode/BarcodeManager-ScannerConnectionListener), which is an interface to notify the client when the scanner device (Ex. RS507) has been connected or disconnected to the mobile device (Ex. TC55). Override its `onConnectionChange` method, which would be called when the scanner gets connected or disconnected to the mobile device. 

        :::java
        public class MainActivity extends Activity EMDKManager.EMDKListener, BarcodeManager.ScannerConnectionListener {  
          
            .. .. .. .. .. .. ...  
          
            @Override
    		public void onOpened(EMDKManager emdkManager) {

    		}

    		@Override
    		public void onClosed() {

    		}

    		@Override
    		public void onConnectionChange(ConnectionStatus connectionStatus) {

    		}  
          
        }      
    
	We will now create some global variables to hold the instance objects of EMDKManager and BarcodeManager. These variables would be used throughout the code.

    We will then add some UI elements, which is just a [TextView](http://developer.android.com/reference/android/widget/TextView.html) for notifying intermediate status operations performed during pairing.      
 
    
        :::java
	    // Text View to display status during pairing operation
	    private TextView statusView = null;
	
	    // Declare a variable to store EMDKManager object
	    private EMDKManager emdkManager = null;
	
	    // Declare a variable to store Barcode Manager object
	    private BarcodeManager barcodeManager = null;
	
	    // Declare a variable to hold scanner device to scan
		private Scanner scanner = null;

    The code till here looks like:

    ![img](../../images/BluetoothScannerTutorialImages/variables_added.jpg)
	 

2. Now, let us design a simple UI that has simply has a [TextView](http://developer.android.com/reference/android/widget/TextView.html) to indicate status during pairing operation.

    So, remove all the code, inside "res/layout/activity_main.xml" and add following XML layout code for UI.

        :::xml
        <RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    	xmlns:tools="http://schemas.android.com/tools"
    	android:layout_width="match_parent"
    	android:layout_height="match_parent"
    	android:padding="16dip"
    	tools:context=".MainActivity" >

    	  <TextView
           android:id="@+id/textViewStatus"
           android:layout_width="wrap_content"
           android:layout_height="wrap_content"
           android:layout_centerInParent="true"
           android:text="" />

    	  <TextView
           android:id="@+id/textViewStatusTitle"
           android:layout_width="wrap_content"
           android:layout_height="wrap_content"
           android:layout_above="@+id/textViewStatus"
           android:layout_centerHorizontal="true"
           android:layout_marginBottom="15dp"
           android:text="Status:" />

		</RelativeLayout>

	The layout should look like:

    ![img](../../images/BluetoothScannerTutorialImages/layout_added.jpg)


3. In the `onCreate` method, we take reference of UI elements that are declared in "res/layout/activity_main.xml" in order to use them in our [Activity](http://developer.android.com/reference/android/app/Activity.html). We then call getEMDKManager so that the EMDK can be initialized and checked to see if it is ready.   

        :::java
        // Reference to UI elements
        statusView = (TextView) findViewById(R.id.textViewStatus);

        // The EMDKManager object will be created and returned in the callback.
        EMDKResults results = EMDKManager.getEMDKManager(
                getApplicationContext(), this);

        // Check the return status of getEMDKManager and update the status Text
        // View accordingly
        if (results.statusCode != EMDKResults.STATUS_CODE.SUCCESS) {
            statusView.setText("Status: "
                    + "EMDKManager object request failed!");
        }

    So the complete `onCreate` method looks like:
     
    ![img](../../images/BluetoothScannerTutorialImages/on_create_added.jpg)

4. Get the [EMDK Manager](/emdk-for-android/7-6/api/core/EMDKManager) in the `onOpened` method, update the `StatusView` TextView with a message and add the [ScannerConnectionListener](/emdk-for-android/7-6/api/barcode/BarcodeManager-ScannerConnectionListener) to get the Connected/Disconnected events between Bluetooth Scanner and Mobile by adding following code in `onOpened` method.

		:::java
		// Update status view with EMDK Open Success message
        statusView.setText("Status: " + "EMDK open success!");

        this.emdkManager = emdkManager;
        // Get the Barcode Manager Instance
        barcodeManager = (BarcodeManager) emdkManager
                .getInstance(EMDKManager.FEATURE_TYPE.BARCODE);
        // Add the Scanner Connection Listener to receive Connected/Disconnected events
        if (barcodeManager != null) {
            barcodeManager.addConnectionListener(this);
        }

		// Initialize Scanner
        initScanner();

	The `onOpened` method should look like: 
	
	![img](../../images/BluetoothScannerTutorialImages/on_opened_method.jpg)

5. You will see error as we have not added `initScanner` method for initializing Bluetooth Scanner of our mobile device (Ex TC55). `initScanner` method gets the number of supported devices in a list.

		:::java
		List<ScannerInfo> deviceList = barcodeManager
                    .getSupportedDevicesInfo();

	It then iterates through this list of devices and checks one with "Bluetooth Scanner" by refering friendly name. If the list has Bluetooth Scanner device, it initializes Scanner object with Bluetooth Scanner.

		:::java
		for (ScannerInfo scannerInfo : deviceList){
                if(scannerInfo.getFriendlyName().equalsIgnoreCase("Bluetooth Scanner"))
                    scanner = barcodeManager.getDevice(scannerInfo);
        }

	If the Scanner Object is still null after iteration, your device doesn't support Bluetooth Scanner. Finally, we enable the Bluetooth Scanner.

		:::java
		scanner.enable();

	So the complete source code for `initScanner` method would look like:

		:::java
		// Initialize Bluetooth Scanner
	    private void initScanner() {
	
	        if (scanner == null) {
	            // Get a list of supported scanner devices
	            List<ScannerInfo> deviceList = barcodeManager
	                    .getSupportedDevicesInfo();
	
	            // Iterate through Scanner devices and check if it supports Bluetooth Scanner
	            for (ScannerInfo scannerInfo : deviceList){
	                if(scannerInfo.getFriendlyName().equalsIgnoreCase("Bluetooth Scanner"))
	                    scanner = barcodeManager.getDevice(scannerInfo);
	            }
	            // If null, then your device does not support Bluetooth Scanner
	            if(scanner == null) {
	                statusView.setText("Bluetooth Scanner not supported!!!");
	                return;
	            }else{
	                // Supports Bluetooth Scanner
	                try {
	                    // Enable the Scanner
	                    scanner.enable();
	                } catch (ScannerException e) {
	                    statusView.setText("Status: " + e.getMessage());
	                }
	            }
	        }
	    } 

	This should look like:	

	![img](../../images/BluetoothScannerTutorialImages/init_scanner.jpg)

6. Now, we will add a method to de-initialize the Scanner named `deInitScanner`. This method will perform following operations in the same sequence.

	* Cancel any pending read operations.
	* Disable the Scanner.
	* Release the Scanner resource.
	* Eventually set the Scanner object to `null`.

	The source code for `deInitScanner` method should look like:

		:::java
		// DeInitialize Scanner
	    private void deInitScanner() {
	        if (scanner != null) {
	            try {
	                // Cancel pending reads
	                scanner.cancelRead();
	                // Disable Scanner
	                scanner.disable();
	                // Release Scanner
	                scanner.release();
	
	            } catch (ScannerException e) {
	                statusView.setText("Status: " + e.getMessage());
	            }
	
	            scanner = null;
	        }
	    }

	The method should look like:	

	![img](../../images/BluetoothScannerTutorialImages/de_init_scanner.jpg)

7.  Let's add an [AsyncTask](http://developer.android.com/reference/android/os/AsyncTask.html) for asynchronously updating the StatusView. This would be useful in the `onConnectionChange` callback method that updates the status to Connected/Disconnected depending upon the result. So `AsyncStatusUpdate` is an [AsyncTask](http://developer.android.com/reference/android/os/AsyncTask.html) that would simply update the Status View with following code.

		:::java
		// AsyncTask for Updating Status in statusView during pairing operation
	    private class AsyncStatusUpdate extends AsyncTask<String, Void, String> {
	
	        @Override
	        protected String doInBackground(String... params) {
	            return params[0];
	        }
	
	        @Override
	        protected void onPostExecute(String result) {
	            // Update Status View
	            statusView.setText("Status: " + result);
	        }
	    }

	The `AsyncStatusUpdate` should look like:

	![img](../../images/BluetoothScannerTutorialImages/async_status_update.jpg) 

8. We would now add the code to update `statusView` in `onConnectionChange` callback method. This method would be invoked when the scanner device has been connected or disconnected to the mobile device. 

	So we will first get the connection state and friendly name of the Scanner device received through `onConnectionChange` callback method.

		:::java
		// Returns the Connection State for Bluetooth Scanner through callback
        String statusBT = connectionStatus.getConnectionState().toString();
        // Returns the Friendly Name of the Scanner through callback
        String scannerNameBT = connectionStatus.getScannerInfo()
                .getFriendlyName(); 

	If the friendly name is "Bluetooth Scanner", then we would update the statusView with the Scanner Name and its state.

	Later, if the state is `CONNECTED`, we would invoke `initScanner` method and `deInitScanner` method for the `DISCONNECTED` state.

	So the source code for `onConnectionChange` callback method with the above mentioned steps would look like:

		:::java
		@Override
	    public void onConnectionChange(ConnectionStatus connectionStatus) {
	        String status = "";
	        String scannerName = "";
	
	        // Returns the Connection State for Bluetooth Scanner through callback
	        String statusBT = connectionStatus.getConnectionState().toString();
	        // Returns the Friendly Name of the Scanner through callback
	        String scannerNameBT = connectionStatus.getScannerInfo()
	                .getFriendlyName();
	
	        // Get the friendly name of our device's Scanner
	        scannerName = scanner.getScannerInfo().getFriendlyName();
	
	        // Check for the Bluetooth Scanner
	        if (scannerName.equalsIgnoreCase(scannerNameBT)) {
	            // If Bluetooth Scanner, update the status view
	            status = scannerNameBT + ":" + statusBT;
	            new AsyncStatusUpdate().execute(status);
	            // Initialize or De-Initialize Bluetooth Scanner
	            // device based on Connection State
	            switch (connectionStatus.getConnectionState()) {
	                case CONNECTED:
	                    // Initialize Scanner
	                    initScanner();
	                    break;
	                case DISCONNECTED:
	                    // De-Initialize Scanner
	                    deInitScanner();
	                    break;
	            }
	        }
	    }

	The `onConnectionChange` method should look like:

	![img](../../images/BluetoothScannerTutorialImages/on_connection_change.jpg)

9. Finally, release all the resources in `onClosed` method. So it would remove the `ScannerConnectionListener` and release the `EMDKManager` using following code.

		:::java
		@Override
	    public void onClosed() {
	        if (emdkManager != null) {
	            // Remove the connection listener
	            if (barcodeManager != null) {
	                barcodeManager.removeConnectionListener(this);
	            }
	            // Release EMDK Manager
	            emdkManager.release();
	            emdkManager = null;
	        }
	        statusView
	                .setText("Status: "
	                        + "EMDK closed unexpectedly! Please close and restart the application.");
	    } 

	The `onClosed` method should look like:

	![img](../../images/BluetoothScannerTutorialImages/on_closed.jpg)
  
      	
That's it!!! We are done with all the coding part that will let us perform pairing with Bluetooth Scanning device using Bluetooth Pairing Utility of [Bluetooth Scanner API](/emdk-for-android/7-6/api/barcode) introduced in EMDK V 3.1. Now let us run the application.
 
## Running the Application

1. Connect the device to a USB port. 

2. Run the application.

	> Note: Initially the bluetooth of the device is turned OFF.

    ![img](../../images/BluetoothScannerTutorialImages/home_screen.png)

	So it displays a [Toast](http://developer.android.com/guide/topics/ui/notifiers/toasts.html) saying bluetooth scanner is not connected, which would start Bluetooth Pairing Utility to pair devices.

3. It will first ask you to enable the Bluetooth of the device.

	![img](../../images/BluetoothScannerTutorialImages/enable_bluetooth.png)

4. Click "Allow" and the Bluetooth Scanning Utility would turn your device's Bluetooth ON.

	![img](../../images/BluetoothScannerTutorialImages/turning_on_bluetooth.png)

5. It would display a screen with a Barcode, which needs to be scanned to pair with this device.

	![img](../../images/BluetoothScannerTutorialImages/barcode_screen.png)

6. You can take a Bluetooth Scanning device (Ex RS507) and scan the Barcode shown on the screen of your app (App is on TC55) and Bluetooth Scanning Utility would pair these two devices.

	![img](../../images/BluetoothScannerTutorialImages/bluetooth_scanner_connected.png)

7. You can see a [Toast](http://developer.android.com/guide/topics/ui/notifiers/toasts.html) confirming that the two devices (TC55 & RS507) have been paired and connected to each other along with the updated status on `statusView`.

8. Now, lets check under Bluetooth Settings of the Mobile device (TC55) for further confirmation. So go to device's Settings -> Bluetooth.

	![img](../../images/BluetoothScannerTutorialImages/devices_paired.png)

9. You can see RS507 under Paired devices that further confirms pairing. This is how we can perform pairing of Mobile device (Ex. TC55) with Bluetooth Scanning device (Ex. RS507) using Bluetooth Pairing Utility of [Bluetooth Scanner API](/emdk-for-android/7-6/api/barcode)   

##Important Programming Tips##

1. Changes the application's `AndroidManifest.xml` file as follows:  
  
    >Note:
    >* Include the permission for EMDK:  
    
        :::xml
        <uses-permission android:name="com.symbol.emdk.permission.EMDK"/>
    
	>Note:
    >* Use the EMDK library:  
    
        :::xml
        <uses-library android:name="com.symbol.emdk"/>

## What's Next
Now that you have learned how to perform pairing with Bluetooth Scanning device using Bluetooth Pairing Utility of [Bluetooth Scanner API](/emdk-for-android/7-6/api/barcode), in the next tutorial we would concentrate on [ScanAndPair APIs](/emdk-for-android/7-6/api/scanandpair) and develop an application to demonstrate its use. 




















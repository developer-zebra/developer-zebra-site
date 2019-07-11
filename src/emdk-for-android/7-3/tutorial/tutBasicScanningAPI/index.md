---
title: Basic Scanning Tutorial using Barcode API
layout: guide.html
product: EMDK For Android
productversion: '7.3'
---

<div class="alert alert-danger alert-dismissible fade in" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> <h4>Important information about data capture interfaces:</h4> <p>Zebra <u>strongly recommends using DataWedge</u> for all applications that require barcode scanning and data capture. If using EMDK native Barcode APIs, migration to DataWedge interfaces is strongly advised.</p> <p> Here are the facts:
    </p><ul>
        <li><b>DataWedge APIs have the same capabilities</b> currently available in EMDK.</li>
        <li>DataWedge intent-based APIs are <b>easier and faster to implement</b> than EMDK APIs.</li>
        <li><b>New features are always added to DataWedge first</b> before being <i>considered</i> for addition to EMDK; there is no guarantee that the same features will be exposed in EMDK APIs.</li>
    </ul>
    <br>
    <a href="/datawedge" class="btn btn-danger">Learn About DataWedge</a>  <p></p> </div>

## Overview

This guide provides a walk-through of the steps for creating an application that uses [Barcode/Scanning APIs](../../guide/api) to perform Scanning operations on a Zebra Android device without using Profile Wizard. The API uses [Barcode Manager](../../guide/barcode_scanning_guide/), which is the primary object for accessing barcode scanning features. 

> Note: **The demo app in this guide is intended for tutorial purposes only** and should not be used in production environments. 

-----

### Create The Project

Start by creating a new project in Android Studio. Call it `BasicScanningTutorial` to match later references in this guide. For help, see the [Android Studio tutorial](../../tutorial/tutCreateProjectAndroidStudio). 

### Enable Android Permissions

Modify the application's `Manifest.xml` file to use the EMDK library and to set permissions for EMDK to scan the barcodes. 

1. Enable permissions for `com.symbol.emdk.permission.EMDK`:  

        :::xml
		<manifest xmlns:android="http://schemas.android.com/apk/res/android"
		    package="com.symbol.basicscansample1">
		    <uses-permission android:name="com.symbol.emdk.permission.EMDK" />
		    <application>
				…
		    </application>
		</manifest>


2. Enable the EMDK library in the application node:  
      
        :::xml
		<application>
		    <uses-library android:name="com.symbol.emdk" />
		    <activity>
				…
		    </activity>
		</application>
		 

3. Add references to the libraries:  

        :::java
		import com.symbol.emdk.EMDKManager;
		import com.symbol.emdk.EMDKManager.EMDKListener;
		import com.symbol.emdk.EMDKResults;
		import com.symbol.emdk.barcode.BarcodeManager;
		import com.symbol.emdk.barcode.ScanDataCollection;
		import com.symbol.emdk.barcode.ScanDataCollection.ScanData;
		import com.symbol.emdk.barcode.Scanner;
		import com.symbol.emdk.barcode.Scanner.DataListener;
		import com.symbol.emdk.barcode.Scanner.StatusListener;
		import com.symbol.emdk.barcode.Scanner.TriggerType;
		import com.symbol.emdk.barcode.ScannerConfig;
		import com.symbol.emdk.barcode.ScannerException;
		import com.symbol.emdk.barcode.ScannerResults;
		import com.symbol.emdk.barcode.StatusData;
		import com.symbol.emdk.barcode.StatusData.ScannerStates;

4. Extend the activity to implement `EMDKListener`, implement `StatusListener` for notifying client applications to notify scan status events and override its `onStatus` function, implement `DataListener` for notifying client applications to notify data events and override its `onData` function:

    
        :::java
		public class MainActivity extends Activity implements EMDKListener, StatusListener, 		DataListener {
		 
		@Override
			public void onOpened(EMDKManager emdkManager) {
		    // TODO Auto-generated method stub
			}
		 
		@Override
			public void onClosed() {
		    // TODO Auto-generated method stub
			}
		 
		@Override
			public void onStatus(StatusData statusData) {
		    // TODO Auto-generated method stub
			}
		 
		@Override
			public void onData(ScanDataCollection scanDataCollection) {
		    // TODO Auto-generated method stub
			}
		}

5. Create some global variables to hold the instance objects of `EMDKManager`, `BarcodeManager` and `Scanner`. These variables are used throughout the code. This section also adds some UI elements starting with a [TextView](http://developer.android.com/reference/android/widget/TextView.html) to display the status of the scanning operation and [EditText](http://developer.android.com/reference/android/widget/EditText.html) to populate scanned barcode data.
    
        :::java
        // Declare a variable to store EMDKManager object
		private EMDKManager emdkManager = null;
	
		// Declare a variable to store Barcode Manager object
		private BarcodeManager barcodeManager = null;
	
		// Declare a variable to hold scanner device to scan
		private Scanner scanner = null;
	
		// Text view to display status of EMDK and Barcode Scanning Operations
		private TextView statusTextView = null;
	
		// Edit Text used to display scanned barcode data
		private EditText dataView = null;

		// boolean flag to start scanning after scanner initialization
		// Used in OnStatus callback to ensure scanner is idle before read() method is called 
		private boolean startRead = false;

6. Design a simple UI that has a [TextView](http://developer.android.com/reference/android/widget/TextView.html) to display the status of scanning operation. Above that is an [EditText](http://developer.android.com/reference/android/widget/EditText.html) element to populate scanned barcode data.

7. Remove all the code inside the `res/layout/activity_main.xml` folder and add the following XML layout code for the UI:

        :::xml
        <RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:tools="http://schemas.android.com/tools"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:padding="16dip"
        tools:context=".MainActivity" >

          <EditText
          android:id="@+id/editText1"
          android:layout_width="wrap_content"
          android:layout_height="wrap_content"
          android:layout_above="@+id/textViewStatusTitle"
          android:layout_centerHorizontal="true"
          android:ems="10"
          android:fadeScrollbars="true"
          android:inputType="none|textMultiLine" />

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

8. In the `onCreate` method, take the reference of UI elements declared in `res/layout/activity_main.xml` to use them in the [Activity](http://developer.android.com/reference/android/app/Activity.html). Then call `getEMDKManager` to initialize EMDK and confirm that it's ready. 

        :::java
		// References to UI elements
		statusTextView = (TextView) findViewById(R.id.textViewStatus);
		dataView = (EditText) findViewById(R.id.editText1);

		// Requests the EMDKManager object. This is an asynchronous call and 
		// should be called from the main thread.
		// The callback also will receive in the main thread without blocking 
		// it until the EMDK resources are ready.

		EMDKResults results = EMDKManager.getEMDKManager(getApplicationContext(), this);

		// Check the return status of getEMDKManager() and update the 
		// status TextView accordingly.

		if (results.statusCode != EMDKResults.STATUS_CODE.SUCCESS) {
		    updateStatus("EMDKManager object request failed!");
		    return;
		} else {
		    updateStatus("EMDKManager object initialization is in progress.......");
		}

9. Write a method `initBarcodeManager()` to initialize the Barcode Manager object: 

		:::java
		private void initBarcodeManager() {

	    // Get the feature object such as BarcodeManager object for 
	    // accessing the feature.

	    barcodeManager = (BarcodeManager) emdkManager.getInstance(EMDKManager.FEATURE_TYPE.BARCODE);

	    // Add external scanner connection listener

	    if (barcodeManager == null) {
	        Toast.makeText(this, "Barcode scanning is not supported.", Toast.LENGTH_LONG).show();
	        finish();
	    	}
		}

10. Write a method `initializeScanner()` to initialize and enable the scanner and its listeners by using the Barcode Manager object. The `enable` method enables the scanner hardware. This method does not turn on the laser to start scanning, but makes the scanner available to the application. If the same scanner is enabled by another application, calling the `enable()` method results in a `ScannerException`: 

        :::java
		private void initScanner() {
		    if (scanner == null) {

		    	// Get default scanner defined on the device
		        
		        scanner = barcodeManager.getDevice(BarcodeManager.DeviceIdentifier.DEFAULT);
		        if (scanner != null) {
		        
		        // Implement the DataListener interface and pass the 
		        // pointer of this object to get the data callbacks.

		            scanner.addDataListener(this);

		        // Implement the StatusListener interface and pass the pointer 
		        // of this object to get the status callbacks.

		            scanner.addStatusListener(this);

		            // Hard trigger. When this mode is set, the user has to manually
		            // press the trigger on the device after issuing the read call.
		            // NOTE: For devices not having hard trigger, may use 
		            // TriggerType.SOFT_ALWAYS.

		            scanner.triggerType = TriggerType.HARD;
		            try {

		                // Enable the scanner
		                // NOTE: After calling enable(), user must wait for IDLE 
		                // status before calling any other scanner APIs
		                // such as setConfig() or read().

		                scanner.enable();

		            } catch (ScannerException e) {
		                updateStatus(e.getMessage());
		                deInitScanner();
		            }
		        } else {
		            updateStatus("Failed to initialize the scanner device.");
		        }
		    }
		}

11. Create a method to release scanner resources when no longer required. Name this method `deInitilazeScanner` and call the `disable()` method to unlock the scanner and make it available to other applications:

        :::java
		private void deInitScanner() {
		    if (scanner != null) {
		        try {
		            // Release the scanner
		            scanner.release();
		        } catch (Exception e) {
		            updateStatus(e.getMessage());
		        }
		        scanner = null;
		    }
		}

12. Use the `onOpened` method to get a reference to the `EMDKManager`. The `EMDKListener` interface triggers this event when EMDK is ready to be used. The `EMDKListener` interface must be implemented to get a reference to the `EMDKManager` APIs. This event passes the `EMDKManager` instance and assigns it to the global variable `emdkManager` created in the earlier steps. Use that instance to get an instance of Barcode Manager to enable scanning:

        :::java
		// Get a reference to the EMDKManager

		this.emdkManager = emdkManager;

		// Get a reference to the feature object - BarcodeManager

		initBarcodeManager();

		// Initialize the scanner

		initScanner();
		
13. When a barcode is scanned, its data is received in the `onData` method callback. This step gets that data, processes it in the desired format and populates the [EditText](http://developer.android.com/reference/android/widget/EditText.html) UI element: 

        :::java
		// The ScanDataCollection object gives scanning result and 
		// the collection of ScanData. So check the data and its status.
		String dataStr = "";
		if ((scanDataCollection != null) && (scanDataCollection.getResult() == ScannerResults.SUCCESS)) {
		    ArrayList<ScanData> scanData = scanDataCollection.getScanData();
		    // Iterate through scanned data and prepare the dataStr
		    for (ScanData data : scanData) {
		        // Get the scanned data
		        String barcodeData = data.getData();
		        // Get the type of label being scanned
		        ScanDataCollection.LabelType labelType = data.getLabelType();
		        // Concatenate barcode data and label type
		        dataStr = barcodeData + " " + labelType;
		    }

		    // Updates EditText with scanned data and type of label on UI thread.
		    updateData(dataStr);
		}

	**Note: Any extensive processing on received data should be done in a background thread so as not to block the UI thread**. 
  
14. The following helper function displays the data string on UI from data callbacks: 

		:::Java
		// Variable to hold scan data length

		private int dataLength = 0;		 
		private void updateData(final String result) {
		    runOnUiThread(new Runnable() {
		        @Override
		        public void run() {
		            // Update the dataView EditText on UI thread with barcode data and its label type
		            if (dataLength++ >= 50) {
		                // Clear the cache after 50 scans
		                dataView.getText().clear();
		                dataLength = 0;
		            }
		            dataView.append(result + "\n");
		        }
		    });
		}

15. Whether scanning the barcode by pressing the hard scan key or keeping it idle, it returns the status of the scanner at a specific point in time in the overridden `onStatus()` method of the implemented `StatusListener` interface. Since the status also is being displayed along with barcode data, the app can make use of this method and populate the status:  

        :::java
		// The status is returned on multiple cases. Check the state and take the action.
		// Get the current state of scanner in background.

		ScannerStates state = statusData.getState();
		String statusStr = "";

		// Different states of Scanner

		switch (state) {
		    case IDLE:
		        // Scanner is idle and ready to change configuration and submit read.
		        statusStr = statusData.getFriendlyName()+" is enabled and idle...";

		        // Change scanner configuration. This should be done while the scanner is in IDLE state.
		        setConfig();

		        try {
		            // Starts an asynchronous Scan. The method will NOT turn ON the 
		            // scanner beam, but puts it in a state in which the scanner 
		            // can be turned on automatically or by pressing a hardware trigger.

		            scanner.read();
		        } catch (ScannerException e) {
		            updateStatus(e.getMessage());
		        }

		        break;
		    case WAITING:
		        // Scanner is waiting for trigger press to scan...
		        statusStr = "Scanner is waiting for trigger press...";
		        break;
		    case SCANNING:
		        // Scanning is in progress...
		        statusStr = "Scanning...";
		        break;
		    case DISABLED:
		        // Scanner is disabled
		        statusStr = statusData.getFriendlyName()+" is disabled.";
		        break;
		    case ERROR:
		        // Error has occurred during scanning
		        statusStr = "An error has occurred.";
		        break;
		    default:
		        break;
		}

		// Update TextView with scanner state on UI thread.
		updateStatus(statusStr);

16. The following helper function displays the status string on UI from status callbacks and exceptions: 

		:::java
		private void updateStatus(final String status) {
		    runOnUiThread(new Runnable() {
		        @Override
		        public void run() {
		            // Update the status text view on UI thread with current scanner state
		            statusTextView.setText("" + status);
		        }
		    });
		}

17. Scanner configuration changes should be done while the scanner is in IDLE state and according to get-modify-set approach. Also, it is recommended to use the `ScannerConfig.isParamSupported(String param)` API and check whether the parameter is supported on the device dynamically prior to set:

		:::java
		private void setConfig() {
		    if (scanner != null) {
		        try {
		            // Get scanner config
		            ScannerConfig config = scanner.getConfig();

		            // Enable haptic feedback
		            if (config.isParamSupported("config.scanParams.decodeHapticFeedback")) {
		                config.scanParams.decodeHapticFeedback = true;
		            }

		            // Set scanner config
		            scanner.setConfig(config);
		        } catch (ScannerException e) {
		            updateStatus(e.getMessage());
		        }
		    }
		}

18. Override the onDestroy() method to release all the EMDKManager resources:

		:::java
		@Override
		protected void onDestroy() {
		    super.onDestroy();
		    // Release all the EMDK resources
		    if (emdkManager != null) {
		        emdkManager.release();
		        emdkManager = null;
		    }
		}

19. Lastly, clean up the objects created by EMDK manager in the `onClosed()` method in case EMDK closes unexpectedly. Restarting the application also might resolve this issue:

		:::java
		@Override
		public void onClosed() {
		    // The EMDK closed unexpectedly. Release all the resources.
		    if (emdkManager != null) {
		        emdkManager.release();
		        emdkManager = null;
		    }
		    updateStatus("EMDK closed unexpectedly! Please close and restart the application.");
		}
        	
#### The sample app is now ready to use. 

-----
 
## Running the Application

1. Connect the Zebra device (with the EMDK runtime pre-loaded in the BSP) to a USB port on the development host. 
	**Note**: The device must be in USB Debug mode.
 
2. Run the application.

	<img alt="image" style="height:400px" src="../../images/BasicScanningTutorialImages/home_screen.png"/>

    A status message appears indicating that the scanner is waiting for a trigger-press. At this point the scanner is enabled (scan status is IDLE) and scans can begin by pressing hard trigger button on the device.
  
3. Pressing the hard scan button causes the status listener in the code to start working; the current status of scanner (which is "Scanning") is displayed in the Status [TextView](http://developer.android.com/reference/android/widget/TextView.html).  

	<img alt="image" style="height:400px" src="../../images/BasicScanningTutorialImages/status_scanning.png"/>

4. Once finished with scanning, release the hard scan button. Data is populated to [EditText](http://developer.android.com/reference/android/widget/EditText.html) and status "Idle" is displayed in the Status [TextView](http://developer.android.com/reference/android/widget/TextView.html).

  
	<img alt="image" style="height:400px" src="../../images/BasicScanningTutorialImages/status_idle.png"/>

This is how Barcode/Scanning APIs can be used to perform basic scanning operations on Zebra devices. 

-----

##Important Programming Tips

### Edit the manifest

Be sure to make the following required changes in the application's `AndroidManifest.xml`.   

1. Include the permission for EMDK:  
    
        :::xml
        <uses-permission android:name="com.symbol.emdk.permission.EMDK"/>

2. Use the EMDK library:  
    
        :::xml
        <uses-library android:name="com.symbol.emdk"/>
 
3. Use DataWedge v1.7.12 or higher to test the `ProfileManager.processProfile()` for DataWedge profiles.

### Content Backup

Once the barcode is enabled, the `read` method is called on the scanner and the scanning API provides starts an asynchronous scan. The method does turn on the scanner, but puts the scanner in a state in which it can be turned ON either automatically or by pressing a hardware trigger as determined by the `Scanner.TriggerType`. The data notification must registered in order to scan and get the scan data. The read request can be canceled by issuing a `cancelRead`. If a `read()` is submitted while another read is pending, the method call fails. Therefore, **Zebra recommends checking whether a read is pending by calling** `isReadPending()` before submitting a `read()`. A read() also can be submitted from within `onData` and `onStatus` events. If called within `onStatus`, it should be called only when IDLE status is received. If called within `onData`, then checking for `isReadPending()` is recommended.

> Note: The `read` method allows a single barcode scan only. If multiple scans are desired, the `read` method must be called multiple times.

-----

## What's Next
After completing this basic tutorial, the next logical step might be to explore the Barcode/Scanning APIs in depth, and use them to perform advanced scanning operations. Also see the [Advanced Barcode Tutorial](../tutAdvancedScanningAPI).


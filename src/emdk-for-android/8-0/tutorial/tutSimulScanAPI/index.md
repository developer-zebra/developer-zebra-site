---
title: Using SimulScan APIs to Capture Data
layout: guide.html
product: EMDK For Android
productversion: '8.0'
---

## Overview

This guide walks through the creation of an app using EMDK For Android that uses [SimulScan APIs](/emdk-for-android/7-6/api/simulscan) (introduced in EMDK V 3.1) to capture critical data from documents. This facilitates capturing fields of interest from a document and converting them into data that an end-user application can use immediately at the point of transaction.

Different ways of capturing data from documents using [SimulScan API](/emdk-for-android/7-6/api/simulscan) are:

* **Barcode** - Productivity gain by decoding multiple bar codes read with a single trigger pull.
* **OCR (Optical Character Recognition)** - Automated data entry with character recognition [OCR].
* **OMR (Optical Mark Recognition)** - Simplified workflow exceptions with checked mark recognition [OMR] and Signature presence detection.

We discussed [SimulScan API](/emdk-for-android/7-6/api/simulscan) is used to capture above mentioned different types of data from documents. But what types of documents are these? Well, these documents are treated as templates where you know the position of the data that you need to capture. You mark positions of the data of your interest on a template and once you capture the document, SimulScan API would access to data at the positions you mentioned on the template.

**Templates:**

You can use an existing template or create your own template depending on the data that needs to be captured from the document. Click [here](https://simulscan.zebra.com) to login using your partner credentials and create your own template by uploading image of your form. Once you upload the image of your form, you can mark the fields that needs to be captured and create a new template. Now, if you load this template in your SimulScan tutorial application and capture image of the document, it would automatically recognize fields of your interest on the template that you marked, capture only those fields and populate them on UI.


**Use Case:**

![img](../../images/SimulScanTutorialImages/example_document.jpg)

The above document has various fields having text, barcode, signature that could be needed to capture and display on UI for an application repeatedly.

![img](../../images/SimulScanTutorialImages/example_document_requirement.jpg)

Suppose, we need to capture two highlighted fields through our application, which contains barcode and characters.
  

**Problem:**

If the required number of fields are more, it could be painful to capture each and every field individually, decode it and populate on UI.

**Solution:**

[SimulScan API](/emdk-for-android/7-6/api/simulscan) could come really handy here as it captures upto 10 barcodes in less than one second. So we will now create a tutorial that would use above form image to create a template and use this template to capture marked fields from that document populating on UI using [SimulScan APIs](/emdk-for-android/7-6/api/simulscan). This will let you know how to create your own template for capturing different fields from any particular document.
 
        
###Prerequisites

* SimulScan is currently supported on TC55 Rev B KitKat and TC75.

> Note: As SimulScan is built into the OS image in the above devices, download the latest OS from  [SupportCentral](http://support.zebra.com). 

## Creating a Template

1. Log in using your partner credentials to [https://simulscan.zebra.com](https://simulscan.zebra.com).

	![img](../../images/SimulScanTutorialImages/template_builder_home.jpg)

2. Click on "Create Template" button.

	![img](../../images/SimulScanTutorialImages/choose_document_type.jpg)

3. You could see different document types based on your needs. Since we already have a document format that contains barcodes and characters, click "Structured Targets" button.

4. Take an image of the document and provide path of this image on your machine. You should see following:

	![img](../../images/SimulScanTutorialImages/select_area_for_template.jpg)

5. Click "Ok" and you would see something like this:

	![img](../../images/SimulScanTutorialImages/create_new_template.jpg)

6. Provide the "Template Name" at the top left corner (Ex: MyTemplate) and press "enter".

7. Highlight the fields that you want to read when the form is captured through our app. Provide name to each highlighted field on left side under fields section. So we would highlight two sections:

	* Shipper's VAT/GST number (Provide "Shippers VATGST number" as the field name). Select OCR processing with word check.
	
	![img](../../images/SimulScanTutorialImages/first_field.jpg)
	
	* Barcode at the top right of the document (Provide "postal barcode" as the field name). Select Barcode processing with any barcode type.  

	![img](../../images/SimulScanTutorialImages/second_field.jpg)

8. Your template should now look like this:

	![img](../../images/SimulScanTutorialImages/template_with_both_fields.jpg)

9. Click "File" and "Download Template" to download this created template on your machine.

10. Downloaded template is an xml file (Ex: MyTemplate.xml). Put this template file under "/sdcard/simulscan/templates" on your device so that our Android application can detect this template.

	![img](../../images/SimulScanTutorialImages/template_on_device.png)

11. This is how you can create your own template to capture any field on any document.


## Installing your license
If you are using features that require a license, please follow these steps:

1. Request a trial license from Product Manager (Andrew.Knight@zebra.com).
2. Copy the License.xml file received from the licensing server to a location on the sdcard.
3. Upgrade the TC55 or TC75 software to the latest [2.46 and above for TC55, 0901 and above for TC75].
4. Launch the Settings app -> About Phone –> Legal Information -> Zebra Licenses -> Install a
license ? -> Yes -> point to the file on the sdcard.

This will install the license . For mass deployment, end customers would need to use StageNow.

> Note: Post your queries on SimulScan Launchpad page so the team can assist you at the earliest. 


## Creating The Project

> Note: Provide "SimulScanTutorial" as the project name for this tutorial.

Start by creating a new Android Studio [project](/emdk-for-android/7-6/tutorial/tutCreateProjectAndroidStudio).  


## Enabling Android Permissions
1. Modify the Application's Manifest.xml to use the EMDK library and to set permission for the EMDK to scan the barcodes.
  
    ![img](../../images/SimulScanTutorialImages/manifest_file.jpg)

    You must first enable permissions for 'com.symbol.emdk.permission.EMDK': 

	You should also add a permission for accessing our template from sdcard 'android.permission.WRITE_EXTERNAL_STORAGE':
 
   
        :::xml
        <uses-permission android:name="com.symbol.emdk.permission.EMDK" />
		<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" /> 

    Then you must enable the library for EMDK:  
      
        :::xml
        <uses-library android:name="com.symbol.emdk" />

	Then set orientation to portrait mode to restrict orientation by adding following line in the `<activity>` tag.

		:::xml
		android:screenOrientation="portrait"


    When done, your manifest.xml should look like:

    ![img](../../images/SimulScanTutorialImages/manifest_permissions_added.jpg) 

##Adding Some Code    
1. Now we will start to add some code. 

    First you must add references to the libraries:  
    
        :::java
        import com.symbol.emdk.EMDKManager;
		import com.symbol.emdk.simulscan.SimulScanData;
		import com.symbol.emdk.simulscan.SimulScanReader;
		import com.symbol.emdk.simulscan.SimulScanStatusData;  

    Then you must make the activity to implement following interfaces: 
	* Implement [EMDKListener](/emdk-for-android/7-6/api/core/EMDKManager-EMDKListener) for using EMDKManager. 
	* Implement [SimulScanReader.DataListerner](/emdk-for-android/7-6/api/simulscan/SimulScanReader-DataListerner), which is an interface for notifying client applications when the scan data is available. Override its `onData` method to receive the scanned data.
	* Implement [SimulScanReader.StatusListerner](/emdk-for-android/7-6/api/simulscan/SimulScanReader-StatusListerner), which is an interface for notifying client applications to notify scan events. Override its `onStatus` method to receive status of any SimulScan operation that would be performed in the application.
	* Implement [View.OnClickListener](http://developer.android.com/reference/android/view/View.OnClickListener.html) and override its `onClick` method to handle on click of buttons.
	* Implement [AdapterView.OnItemSelectedListener](http://developer.android.com/reference/android/widget/AdapterView.OnItemSelectedListener.html) and override its `onItemSelected` and `onNothingSelected` methods for handling spinner.

    
        :::java
        public class MainActivity extends Activity implements EMDKManager.EMDKListener,
        SimulScanReader.DataListerner, SimulScanReader.StatusListerner, View.OnClickListener, AdapterView.OnItemSelectedListener {  
          
            .. .. .. .. .. .. ...  
          
            @Override
		    public void onData(SimulScanData simulScanData) {
		
		    }
		    @Override
		    public void onOpened(EMDKManager emdkManager) {
		
		    }
		    @Override
		    public void onClosed() {
		
		    }
		    @Override
		    public void onClick(View v) {
		
		    }
		    @Override
		    public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
		
		    }
		    @Override
		    public void onNothingSelected(AdapterView<?> parent) {
		
		    }
		    @Override
		    public void onStatus(SimulScanStatusData simulScanStatusData) {
		
		    }  
          
        }      
    
	We will now create some global variables to hold the instance objects of [EMDKManager](/emdk-for-android/7-6/api/core/EMDKManager), [SimulScanManager](/emdk-for-android/7-6/api/simulscan/SimulScanManager) and [SimulScanReader](/emdk-for-android/7-6/api/simulscan/SimulScanReader). These variables would be used throughout the code.

    We will then add some UI elements starting with a [TextView](http://developer.android.com/reference/android/widget/TextView.html) to display the status of SimulScan operation. The UI would have a [Spinner](http://developer.android.com/guide/topics/ui/controls/spinner.html) that would contain a list of SimulScan supported devices. The UI would also have two [Buttons](http://developer.android.com/guide/topics/ui/controls/button.html) to start and stop reading template.


	The variables would also have a list (readerInfoList) to hold Simulscan supported device and another `synchronized` list (simulScanDataList) to hold various data of the scanned template along with an exception (lastException) to catch exceptions if any.   
 
	So, overall the variables look like:   	

        :::java
        // Tag for managing logs
	    private final static String TAG = MainActivity.class.getCanonicalName();
	
	    // TextView for displaying status of SimulScan operations
	    private TextView textViewStatus = null;
	    // Spinner for selecting scanning device for SimulScan operation
	    private Spinner deviceSelectionSpinner = null;
	    // Button that triggers reading form elements from the template
	    private Button readButton = null;
	    // Button to stop reading template
	    private Button stopReadButton = null;
	    // Declare a variable to store EMDKManager object
	    private EMDKManager emdkManager = null;
	    // Declare a variable to store SimulScanManager object
	    private SimulScanManager simulscanManager = null;
	    // List of SimulScan supported devices
	    private List<SimulScanReaderInfo> readerInfoList = null;
	    // object for holding EMDKResults data.
	    private EMDKResults results;
	    // provides access to physical SimulScan reader device.
	    private SimulScanReader selectedSimulScanReader = null;
	    // contains a list of SimulScanData, captured through SimulScan operations
	    private List<SimulScanData> simulScanDataList = Collections
	            .synchronizedList(new ArrayList<SimulScanData>());
	    // Catches Exception
	    private Exception lastException;

    The code till here looks like:

    ![img](../../images/SimulScanTutorialImages/variables_added_1.jpg)
	![img](../../images/SimulScanTutorialImages/variables_added_2.jpg) 

2. Now, let us design a simple UI that has UI components explained above.

    So, remove all the code, inside "res/layout/activity_main.xml" and add following XML layout code for UI.

        :::xml
        <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
		    xmlns:tools="http://schemas.android.com/tools"
		    android:layout_width="match_parent"
		    android:layout_height="wrap_content"
		    android:paddingBottom="@dimen/activity_vertical_margin"
		    android:paddingLeft="@dimen/activity_horizontal_margin"
		    android:paddingRight="@dimen/activity_horizontal_margin"
		    android:paddingTop="@dimen/activity_vertical_margin"
		    android:orientation="vertical"
		    tools:context=".MainActivity" >
		
		    <TextView
		        android:id="@+id/status_view"
		        android:layout_width="wrap_content"
		        android:layout_height="wrap_content" />
		
		    <Spinner
		        android:id="@+id/devices_spinner"
		        android:layout_width="wrap_content"
		        android:layout_height="wrap_content"
		        android:layout_marginTop="10dp" />
		
		    <LinearLayout
		        android:layout_width="match_parent"
		        android:layout_height="wrap_content" >
		
		        <Button
		            android:id="@+id/btn_start_read"
		            android:layout_width="wrap_content"
		            android:layout_height="wrap_content"
		            android:text="Read" />
		
		        <Button
		            android:id="@+id/btn_stop_read"
		            android:layout_width="wrap_content"
		            android:layout_height="wrap_content"
		            android:text="stop" />
		
		    </LinearLayout>
		
		</LinearLayout>

     
 
3. In the `onCreate` method, we take reference of UI elements that are declared in "res/layout/activity_main.xml" in order to use them in our [Activity](http://developer.android.com/reference/android/app/Activity.html) and add their respective onclick listeners. We then call getEMDKManager so that the EMDK can be initialized and checked to see if it is ready. 

	Finally, we would add methods calls to handle buttons and check boxes events.  

        :::java
        // The EMDKManager object will be created and returned in the callback.
        results = EMDKManager.getEMDKManager(getApplicationContext(), this);

        // Get references for UI elements
        textViewStatus = (TextView) findViewById(R.id.status_view);
        deviceSelectionSpinner = (Spinner) findViewById(R.id.devices_spinner);
        readButton = (Button) findViewById(R.id.btn_start_read);
        stopReadButton = (Button) findViewById(R.id.btn_stop_read);

        // Update Status TextView
        textViewStatus.setText("Status: " + " Starting..");

        // Set listeners for Spinner and buttons
        deviceSelectionSpinner.setOnItemSelectedListener(this);
        readButton.setOnClickListener(this);
        stopReadButton.setOnClickListener(this);

        if (results.statusCode != EMDKResults.STATUS_CODE.SUCCESS) {
            textViewStatus.setText("Status: "
                    + "EMDKManager object request failed!");
        }

    So the complete `onCreate` method looks like:
     
    ![img](../../images/SimulScanTutorialImages/on_create_added.jpg)
	

4. Get [EMDK Manager](/emdk-for-android/7-6/api/core/EMDKManager) and [SimulScanManager](/emdk-for-android/7-6/api/simulscan/SimulScanManager) objects in the `onOpened` method and update the `StatusView` TextView.

	Now get the list of SimulScan supported devices, iterate over it and set this list to the spinner that we have added in the UI followed by adding listener for this spinner.

	So the code performing above operations in sequence looks like:

		:::java
		// This callback will be issued when the EMDK is ready to use.
        this.emdkManager = emdkManager;

        // Get the SimulScanManager object
        simulscanManager = (SimulScanManager) emdkManager
                .getInstance(EMDKManager.FEATURE_TYPE.SIMULSCAN);

        if (null == simulscanManager) {
            textViewStatus.setText("Status: "
                    + "Get SimulScanManager instance failed!");
            return;
        }

        // Get the SimulScan supported device list
        readerInfoList = simulscanManager.getSupportedDevicesInfo();
        List<String> nameList = new ArrayList<String>();
        for (SimulScanReaderInfo rinfo : readerInfoList) {
            nameList.add(rinfo.getFriendlyName());
        }
        // Add the simulscan supported list to spinner and
        // set item selected listener
        addItemsOnSpinner(deviceSelectionSpinner, nameList);
        deviceSelectionSpinner.setOnItemSelectedListener(this);

	The `onOpened` method should look like: 
	
	![img](../../images/SimulScanTutorialImages/on_opened_method.jpg)

5. You will see an error as we have not added `addItemsOnSpinner` method. So lets add it now. This method would basically get Spinner and list of SimulScan supported device as arguments. It would add this list in an adapter and set that adapter into spinner to display this list on UI.

		:::java
		// Add SimulScan supported device list to spinner
	    private void addItemsOnSpinner(Spinner spinner, List<String> list) {
	
	        ArrayAdapter<String> dataAdapter = new ArrayAdapter<String>(
	                this, android.R.layout.simple_spinner_item, list);
	        dataAdapter
	                .setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
	        spinner.setAdapter(dataAdapter);
	    }

	This method should look like:	

	![img](../../images/SimulScanTutorialImages/add_items_on_spinner_method.jpg)

6. The user would select any SimulScan supported device from the list in spinner. So we need get that [SimulScanReader](/emdk-for-android/7-6/api/simulscan/SimulScanReader) and initiate it. Since the user would select it from the spinner, we need to add our code in `onItemSelected` method of the spinner that we have already overridden.

	So this code would get user selected [SimulScanReaderInfo](/emdk-for-android/7-6/api/simulscan/SimulScanReaderInfo) from the spinner and pass it to `simulScanManager.get` to get the user selected [SimulScanReader](/emdk-for-android/7-6/api/simulscan/SimulScanReader) object. This [SimulScanReader](/emdk-for-android/7-6/api/simulscan/SimulScanReader) object represents the current SimulScan Reader device selected by user from the spinner of simulscan supported devices. We would then initialize or deinitialize this [SimulScanReader](/emdk-for-android/7-6/api/simulscan/SimulScanReader) using respective methods. 

		:::java
		// Initialize the selected Simul Scan device
        if (parent.equals(deviceSelectionSpinner)) {
            if (simulscanManager != null) {
                SimulScanReaderInfo readerInfo = readerInfoList.get(position);
                if (readerInfo != null) {
                    try {
                        deinitCurrentScanner();
                        selectedSimulScanReader = simulscanManager
                                .getDevice(readerInfo);
                        initCurrentScanner();
                    } catch (SimulScanException e) {
                        e.printStackTrace();
                        textViewStatus.setText("Status: "
                                + "Error enabling reader");
                    }
                }
            }
        }

	So the `onItemSelected` method should now look like:

	![img](../../images/SimulScanTutorialImages/on_item_selected_method.jpg)

	We would simply de-initialize scanner in `onNothingSelected` method when nothing is selected in the spinner as follows:

		:::java
		// De-initialize device spinner when nothing is selected
        if (parent.equals(deviceSelectionSpinner)) {
            try {
                deinitCurrentScanner();
            } catch (SimulScanException e) {
                e.printStackTrace();
            }
        }

	The `onNothingSelected` method should now look like:
	
	![img](../../images/SimulScanTutorialImages/on_nothing_selected_method.jpg)
 

7. Lets add `initCurrentScanner` and `deinitCurrentScanner` methods to initialize and de-initialize the current scanner respectively. This would also get read of errors. 

		:::java
		// Initialize Simul scanner by enabling
	    // simulscan reader and setting listeners
	    private void initCurrentScanner() throws SimulScanException {
	        selectedSimulScanReader.addStatusListener(this);
	        selectedSimulScanReader.addDataListener(this);
	        selectedSimulScanReader.enable();
	    }

	The `initCurrentScanner` method would add data and status listeners to the current scanner (SimulScanReader device) to receive scanned data and status notifications respectively. Finally it would enable the scanner.


		:::java
		// De-Initialize scanner by removing listeners and canceling pending reads
	    private void deinitCurrentScanner() throws SimulScanException {
	        if (selectedSimulScanReader != null) {
	            if (selectedSimulScanReader.isReadPending())
	                selectedSimulScanReader.cancelRead();
	            if (selectedSimulScanReader.isEnabled())
	                selectedSimulScanReader.disable();
	            selectedSimulScanReader.removeDataListener(this);
	            selectedSimulScanReader.removeStatusListener(this);
	            selectedSimulScanReader = null;
	        }
	    }

	The `deinitCurrentScanner` method would cancel any pending reads and then disable the current scanner (SimulScanReader device). It would then remove data and status listeners. 

	Both `initCurrentScanner` and `deinitCurrentScanner` methods should look like:
  
	![img](../../images/SimulScanTutorialImages/init_deinit_scanner_methods.jpg)

8. According to the life cycle of Activity, we would add `onStart` and `onStop` methods to enable and disable the scanner (SimulScanReader device) respectively as follows:

	Code for `onStart` method:

		:::java
		 @Override
	    public void onStart() {
	        super.onStart();
	        if (selectedSimulScanReader != null)
	            try {
	                if (!selectedSimulScanReader.isEnabled())
	                    // Enable SimulScan Reader
	                    selectedSimulScanReader.enable();
	            } catch (SimulScanException e) {
	                e.printStackTrace();
	                textViewStatus.setText("Status: " + "Error enabling reader");
	            }
	    }


	Code for `onStop` method:

		:::java
		@Override
	    public void onStop() {
	        if (selectedSimulScanReader != null) {
	            if (selectedSimulScanReader.isReadPending()) {
	                try {
	                    // Cancel any pending SimulScan Read
	                    selectedSimulScanReader.cancelRead();
	                } catch (SimulScanException e) {
	                    e.printStackTrace();
	                }
	            }
	            try {
	                if (selectedSimulScanReader.isEnabled()) {
	                    // Disable SimulScan Reader
	                    selectedSimulScanReader.disable();
	                }
	            } catch (SimulScanException e) {
	                e.printStackTrace();
	            }
	        }
	        super.onStop();
	    }

	Both `onStart` and `onStop` methods should now look like: 

	![img](../../images/SimulScanTutorialImages/on_start_method.jpg)

	![img](../../images/SimulScanTutorialImages/on_stop_method.jpg)


9. Now we would add a method to set SimulScanConfig settings, where we would set different parameters for the current scanner (SimulScanReader device) as follows:

		:::java
		// Set SimulScan Config settings
	    private void setCurrentConfig() throws Exception {
	        if (selectedSimulScanReader != null) {
	            SimulScanConfig config = selectedSimulScanReader.getConfig();
	            if (config != null) {
	                // Get the template path from the storage
	                String templatePath = Environment.getExternalStorageDirectory().toString()
	                        + "/simulscan/templates/MyTemplate.xml";
	                File file = new File(templatePath);
	                // Get the SimulScan Template
	                SimulScanMultiTemplate myTemplate = new SimulScanMultiTemplate(simulscanManager, Uri.fromFile(file));
	
	                // Set the template with SimulScanConfig settings
	                if(myTemplate != null)
	                    config.multiTemplate = myTemplate;
	                // Amount of time in milliseconds to wait before timing out identification.    
	                config.identificationTimeout = 15000;
	                // Amount of time in milliseconds to wait before timing out processing.
	                config.processingTimeout = 10000;
	                // If userConfirmationOnScan is true, shows UI for user to confirm 
	                // the scanned data before sending results to application.
	                config.userConfirmationOnScan = true;
	                // If true, form will be captured automatically when detected
	                config.autoCapture = true;
	                // If enabled, allows a session to write form capture, region images, 
	                // region values, and other data to storage.
	                config.debugMode = false;
	                // Turn on/off audio feedback.
	                config.audioFeedback = true;
	                // Turn on/off haptic feedback.
	                config.hapticFeedback = true;
	                // Turn on/off LED feedback.
	                config.ledFeedback = true;
	                // Set SimulScanConfig
	                selectedSimulScanReader.setConfig(config);
	            }
	        }
	    }

	`setCurrentConfig` method should now look like:

	![img](../../images/SimulScanTutorialImages/set_current_config_method_1.jpg)
	
	![img](../../images/SimulScanTutorialImages/set_current_config_method_2.jpg)

10. In this step, we would add methods that would actually start (`readCurrentScanner`) and stop (`stopReadCurrentScanner`) reading templates with the help of [SimulScanReader](/emdk-for-android/7-6/api/simulscan/SimulScanReader) instance for the current scanner that we created.
 
	So lets add `readCurrentScanner` method first.

		:::java
		// Start reading template through SimulScanReader
	    private void readCurrentScanner() throws Exception {
	        setCurrentConfig();
	        if (selectedSimulScanReader != null) {
	            selectedSimulScanReader.read();
	        }
	    }

	And then `stopReadCurrentScanner` method.

		:::java
		// Cancel/Stop reading template through SimulScanReader
	    private void stopReadCurrentScanner() throws SimulScanException {
	        if (selectedSimulScanReader != null)
	            selectedSimulScanReader.cancelRead();
	    }

	The methods `readCurrentScanner` and `stopReadCurrentScanner` should now look like:

	![img](../../images/SimulScanTutorialImages/start_stop_reading_scanner.jpg)   
    
11. We would now add the code in `onClick` method that is overridden for the "Start" and "Stop" buttons in the UI that would call `readCurrentScanner` and `stopReadCurrentScanner` methods to start and stop the template reading respectively on click of these buttons.

	Add following code in the `onClick` method.  

		:::java
		// Start reading template
        if(v.equals(readButton)){
            try {
                readCurrentScanner();
            } catch (Exception e) {
                lastException = e;
                textViewStatus.post(new Runnable() {
                    @Override
                    public void run() {
                        textViewStatus.setText("Status: "
                                + lastException.getMessage());
                    }
                });
                e.printStackTrace();
            }
        }

        // Cancel/Stop reading template
        if(v.equals(stopReadButton)){
            try {
                stopReadCurrentScanner();
            } catch (SimulScanException e) {
                lastException = e;
                textViewStatus.post(new Runnable() {
                    @Override
                    public void run() {
                        textViewStatus.setText("Status: "
                                + lastException.getMessage());
                    }
                });
                e.printStackTrace();
            }
        }

	You can see the code and understand that if "readButton" button is pressed, it calls `readCurrentScanner` method to read template. If "stopReadButton" button is pressed, it would call `stopReadCurrentScanner` method to stop/cancel reading the template. The status would be updated on "ViewStatus" text view in both the operations.  

	The entire `onClick` method should now look like:

	![img](../../images/SimulScanTutorialImages/on_click_method_1.jpg)

	![img](../../images/SimulScanTutorialImages/on_click_method_2.jpg)

12. Once we start scanning a template, we would get the template data in `onData` and status while executing scanning operations in `onStatus` methods respectively that have been overridden already but not handled yet.

	So lets handle them starting with `onData` method, which is a callback method upon data availability. `onData` method contains [SimulScanData](/emdk-for-android/7-6/api/simulscan/SimulScanData) object that has the scanned data of a template. We would add this object to simulScanDataList that we had created to use it while displaying data.

		:::java
		// clear the SimulScanDataList before adding new scanned data
        synchronized (simulScanDataList) {
            simulScanDataList.clear();
        }

        // Add Scanned data to SimulScanDataList
        synchronized (simulScanDataList) {
            simulScanDataList.add(simulScanData);
        }

	So the `onData` method should now look like:

	![img](../../images/SimulScanTutorialImages/on_data.jpg)

13. The status of any SimulScan operation is received in `onStatus` method, which is a callback method upon scan status event occurs.

	We would update the "StatusView" TextView based on the status on UI thread using following code in `onStatus` method.

		:::java
		// Update Status View with the updated SimulScan operation status
        textViewStatus.post(new StatusDataRunnable(simulScanStatusData));

	The `onStatus` method should look like:

	![img](../../images/SimulScanTutorialImages/on_status_method.jpg)

14. You can see an error as we have not created a class `StatusDataRunnable` implementing runnable to update "StatusView" on UI thread.

	Lets do that by creating a class implementing runnable and taking [SimulScanStatusData](/emdk-for-android/7-6/api/simulscan/SimulScanStatusData) as an argument in constructor. `simulScanStatusData.getState()` would return you the current status of scanner, which would be updated on "StatusView" TextView.

	Following is the code for `StatusDataRunnable` class:

		:::java
		// Update SimulScan operation status on Status View
	    private class StatusDataRunnable implements Runnable {
	        SimulScanStatusData statusData = null;
	
	        StatusDataRunnable(SimulScanStatusData statusData) {
	            this.statusData = statusData;
	        }
	
	        @Override
	        public void run() {
	            if (statusData != null) {
	                switch (statusData.getState()) {
	                    case DISABLED:
	                        textViewStatus.setText("Status: "
	                                + statusData.getFriendlyName()
	                                + ": Closed reader successfully");
	                        break;
	                    case ENABLED:
	                        textViewStatus.setText("Status: "
	                                + statusData.getFriendlyName()
	                                + ": Opened reader successfully");
	                        break;
	                    case SCANNING:
	                        textViewStatus.setText("Status: "
	                                + statusData.getFriendlyName()
	                                + ": Started reader successfully");
	
	                        break;
	                    case IDLE:
	                        textViewStatus.setText("Status: "
	                                + statusData.getFriendlyName()
	                                + ": Stopped reader successfully");
	                        break;
	                    case ERROR:
	                        textViewStatus.setText("Status: "
	                                + statusData.getFriendlyName() + ": Error-"
	                                + statusData.extendedInfo.getExtendedStatus());
	                        break;
	                    case UNKNOWN:
	                    default:
	                        break;
	                }
	            }
	        }
	    }

	The `StatusDataRunnable` class should look like:

	![img](../../images/SimulScanTutorialImages/status_data_runnable_1.jpg)

	![img](../../images/SimulScanTutorialImages/status_data_runnable_2.jpg)

15. Finally, we would update "StatusView" TextView in the `onClosed` method for any abrupt closing of EMDK using following line.

		:::java
		textViewStatus.setText("Status: " + "EMDK closed unexpectedly!");

	So the `onClosed` method should now look like:

	![img](../../images/SimulScanTutorialImages/on_closed.jpg)  	       
      	
	That's it!!! We are done with all the coding and configuration part that will let us scan the template stored in sdcard and display fields that we marked in the template, on Zebra device UI using [SimulScan APIs](/emdk-for-android/7-6/api/simulscan) introduced in EMDK V 3.1. Now let us run the application.
 
## Running the Application

1. Connect the device to a USB port (device must have USB debugging enabled). 

2. Run the application.

    ![img](../../images/SimulScanTutorialImages/home_screen.png)

    You can see a message on the "StatusView" that indicates EMDK Manager has been successfully initialized and reader has been opened successfully.

	You can select different SimulScanReader device by clicking on Spinner but as of now TC55 supports only Internal Camera for SimulScan. Hence its the only device in the spinner.

	![img](../../images/SimulScanTutorialImages/spinner.png)
  
3. Once selecting Internal Camera as SimulScanReader device from the spinner, click read button. It opens the Internal Camera.

	![img](../../images/SimulScanTutorialImages/place_doc_for_scanning.png)

	You can see that its searching for "MyTemplate" that we had set.

4. Place Internal Camera above the printed copy of "MyTemplate". It would process the template by outlining it and read the marked fields in the template viz. Shipper's VAT/GST Number and barcode at the top right.

    ![img](../../images/SimulScanTutorialImages/processing_template.png)

	![img](../../images/SimulScanTutorialImages/parsed_data.png)

	You can see that SimulScanReader device has successfully scanned and parsed the Shipper's VAT/GST number and barcode fields and displayed them on UI. You can press "Accept" button at the bottom to use these values in your application.

5. If the SimulScanReader device is not sure about the correctness of scanned fields, it would display them in red background. It means you need to re-scan the template by pressing "Rescan" button at the bottom left. 

	![img](../../images/SimulScanTutorialImages/re_scan_template.png)

6. You can see the message "Check Result", which indicates that you need to re-scan the template to get correct data from marked fields of the template until the "Check Result" message is not shown like below:

	![img](../../images/SimulScanTutorialImages/parsed_data.png)

	This illustrates how to access critical fields from a document using [SimulScan APIs](/emdk-for-android/7-6/api/simulscan) by creating its template from the [Template Builder](https://simulscan.zebra.com).


##Important Programming Tips

1. Perform the following changes in the application's `AndroidManifest.xml` file:  
  
		//Include the permission for EMDK:      
        :::xml
        <uses-permission android:name="com.symbol.emdk.permission.EMDK"/>
		<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    
		//Use the EMDK library:      
        :::xml
        <uses-library android:name="com.symbol.emdk"/>
  
2. Place the template in the SD Card before accessing it from the application.
 
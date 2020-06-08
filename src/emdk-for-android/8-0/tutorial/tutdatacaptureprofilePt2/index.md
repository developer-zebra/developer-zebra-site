---
title: Using Intent Output With DataCapture Profiles
layout: guide.html
product: EMDK For Android
productversion: '8.0'
---

> **NOTE**: Data Capture is deprecated in EMDK-X 6.10 and later. Please refer to the [Basic Scanning Tutorial](../tutBasicScanningAPI) instead.  

## Developing an EMDK for Android Application Part 2

This tutorial will walk you through adding [Intent Output](/emdk-for-android/8-0/mx/data-capture/intent) support to the EMDK For Android application you made using [Developing an EMDK for Android Application Part 1](/emdk-for-android/8-0/tutorial/tutdatacaptureprofile). This tutorial will assume your project is at the state of the end of that tutorial and build on top of it. You can follow the tutorial in the previous step of download the source from the previous step and start from there.

The tutorial uses EMDK V 2.1 that has organized existing features as well as got some new features that would be discussed later in the tutorial.

>**Note**: As of EMDK 6.8, DataWedge can no longer be configured for data capture through Profile Manager. Zebra recommends using the [DataWedge APIs](/datawedge/latest/guide/api/) instead.

###Prerequisites
* Completion of [Developing an EMDK for Android Application Part 1](/emdk-for-android/8-0/tutorial/tutdatacaptureprofile)


## Adding Intents to the DataCapture Profile
1. Select "EMDKSample" project from Package Explorer.    
2. Click "EMDK" menu present on the top-bar and select "Profile Manager" option.
  
3. The EMDK Profile Manager Window will appear.
  
    ![img](../../images/setup/image105.jpg)
  
4. select "DataCaptureProfile" and click "Edit".
5. Select "Intent" from the list of "Available Features" and add it to "Selected Features" by clicking "Right Arrow".

	> Note: 
	> The field "Name" contains user defined name to identify a particular Intent Output feature. This is required when editing any specific Intent Output feature programmatically, which is outside the scope of this tutorial. So we will keep the "Name" field empty.

	![img](../../images/setup/image106.jpg)
  
6. Select "Intent" from the list of "Selected Features". 
7. Now we will configure the "Intent" parameters.  
	* Switch "Intent Output Enable" to Enable". 
	* For "Intent Output Action" enter "com.symbol.emdksample.RECVR".
	* For "Intent Output Category" enter "android.intent.category.DEFAULT".
	* Switch "Intent Output Delivery" to "Send via startActivity".  
	* Switch "Basic data formatting Enable" to Enable". 
	* Switch "Basic data formatting Send Data" to Enable". 	

	Your Intent configuration should now look like this:
  
	![img](../../images/setup/image107.jpg)  

8. Click "Apply" and "Finish".
  
    ![img](../../images/setup/image105.jpg)
  
9. Click "Close".  
    >Note:  
    >Now the "EMDKConfig.xml" under "\assets" folder will be updated with your changes.

##Adding the Intent Filter
1. Open your application's "Manifest.xml" file.
  
	![img](../../images/setup/image211.jpg)

2. Make the following changes to your application's"Manifest.xml" file.  

	Add the following parameter to your activity settings to enable "singleTask" mode.
	
        :::xml
        android:launchMode="singleTask"  
	
	Add the following lines to receive EMDK Intents in your application: 

        :::xml
        <intent-filter>  
                <action android:name="com.symbol.emdksample.RECVR"/>  
                <category android:name="android.intent.category.DEFAULT"/>  
        </intent-filter>     

    When done, your manifest.xml should look like this:

    ![img](../../images/setup/image108.jpg)  

	>Note:  
	>
	>* The intent action name should match the value of "Intent Output Action" in the EMDK Profile Manager. 
	>* The intent category name should match the value of "Intent Output Category" in the EMDK Profile Manager.

##Adding the Intent code
1. Add the following imports to your program.

        :::java
        import android.content.Intent;  
        import android.widget.TextView; 

	![img](../../images/setup/image109.jpg)
 
2. Add the following function to your program for processing intents. 

        :::java
        //This function is responsible for getting the data from the intent  
        private void handleDecodeData(Intent i)  
        {  
          
        }
     
    ![img](../../images/setup/image110.jpg)
 
3. Add the following code to your "onCreate" function check for a possible intent; 

        :::java
        //In case we have been launched by the DataWedge intent plug-in  
        Intent i = getIntent();  
        handleDecodeData(i); 

    ![img](../../images/setup/image112.jpg)
  
4. Overide "onNewIntent" to handle incoming intents. 

        :::java
        //We need to handle any incoming intents, so let override the onNewIntent method  
        @Override  
        public void onNewIntent(Intent i) {  
                handleDecodeData(i);  
           
        } 
     
    ![img](../../images/setup/image111.jpg)

5. Add a TextView in the UI called "textViewBarcode", inside "res/layout/activity_main.xml".
    
        :::xml
        <TextView  
                android:id="@+id/textViewBarcode"  
            android:layout_width="wrap_content"  
            android:layout_height="wrap_content"  
            android:layout_alignParentTop="true"  
            android:layout_centerHorizontal="true"  
            android:layout_marginTop="50dp"  
            android:text="@+string/hello_world"  
            android:textAppearance="?android:attr/textAppearanceMedium" />  

	![img](../../images/setup/image113.jpg)
  
6. Add a global variable for the TextView. 
 
        :::java
        //Declare a variable to store the textViewBarcode  
        private TextView textViewBarcode = null;
	
	![img](../../images/setup/image114.jpg)
    
7. Add the following code to your onCreate function to get a handle on the TextView.
 
        :::java
        //Get the textViewBarcode  
        textViewBarcode = (TextView) findViewById(R.id.textViewBarcode); 

	![img](../../images/setup/image115.jpg)
   
8. Add the following code to your "handleDecodeData" function to confirm the intent was meant for us. 

        :::java
        //Check the intent action is for us  
        if (i.getAction().contentEquals("com.symbol.emdksample.RECVR") ) {  
          
        } 
    
    ![img](../../images/setup/image116.jpg)   
    
9. Add the following code to your "handleDecodeData" function to check if the intent contains Barcode data.  

        :::java
        //Get the source of the data  
        String source = i.getStringExtra("com.motorolasolutions.emdk.datawedge.source");  
          
        //Check if the data has come from the Barcode scanner  
        if(source.equalsIgnoreCase("scanner"))  
        {  
          
        }

	![img](../../images/setup/image117.jpg)
   
10. Add the following code to your "handleDecodeData" function to retrieve Barcode data.  

        :::java
        //Get the data from the intent  
        String data = i.getStringExtra("com.motorolasolutions.emdk.datawedge.data_string");  
          
        //Check that we have received data  
        if(data != null && data.length() > 0)  
        {  
          
        } 

	![img](../../images/setup/image118.jpg)

11. Add the following code to your "handleDecodeData" function to populate the TextView with the revived Barcode data.

        :::java
        //Display the data to the text view  
        textViewBarcode.setText("Data = " + data); 

	![img](../../images/setup/image119.jpg)
 
12. Connect the device to a USB port.
    
    >Note:   
    >Make sure the device is in USB debug.

13. Run the application.
  
	![img](../../images/setup/image120.png)
 
14. Press the trigger button and scan a Barcode.
15. The scanned data will be populated in the Edit Text field Through the previous Keystroke Intent and will appear on the Text View using the new Datawedge Intent.
   
	![img](../../images/setup/image121.png) 


## What's Next
The [next tutorial](/emdk-for-android/8-0/tutorial/tutdatacaptureprofilePt3) will show you how to use multiple Data Capture Profiles that are handled by multiple activities.

















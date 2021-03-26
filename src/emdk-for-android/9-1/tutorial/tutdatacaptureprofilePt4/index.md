---
title: Using Broadcast Intent in DataCapture Profiles
layout: guide.html
product: EMDK For Android
productversion: '9.1'
---

> **NOTE**: Data Capture is deprecated in EMDK-X 6.10 and later. Please refer to the [Basic Scanning Tutorial](../tutBasicScanningAPI) instead.  

## Developing an EMDK for Android Application Part 4

This guide will walk you through adding broadcast intent support to the Android application you made using [Developing an EMDK for Android Application Part 3](/emdk-for-android/9-1/tutorial/tutdatacaptureprofilePt3).

###Prerequisites

* Completion of [Developing an EMDK for Android Application Part 1](/emdk-for-android/9-1/tutorial/tutdatacaptureprofile)
* Completion of [Developing an EMDK for Android Application Part 2](/emdk-for-android/9-1/tutorial/tutdatacaptureprofilePt2)
* Completion of [Developing an EMDK for Android Application Part 3](/emdk-for-android/9-1/tutorial/tutdatacaptureprofilePt3)
 
For more information about setting up the EMDK please see the EMDK [Setup](/emdk-for-android/9-1/guide/setup).

##Using EMDK Wizard and EMDK for Android Broadcast Intents.

###Adding Broadcast Intent Activity
First we will add a new activity that will be used for listening and displaying Barcode data to the user. 

1. Select "EMDKSample" from "Package Explorer" in Android Studio.

2. Right click and create a new "Empty Activity" with the name "BroadcastIntentActivity"     

###Updating Main Activity
Next we will update "MainActivity", adding a button to launch our "BroadcastIntentActivity".

1. Select "activity_main.xml" from "Package Explorer" in Android Studio.  
	  
2. Add the following Button to "activity_main.xml". This Button will be used for opening "BroadcastIntentActivity".  

		:::xml
		<Button 
		android:id="@+id/buttonBroadcastIntent"  
		android:layout_width="wrap_content"  
		 android:layout_height="wrap_content"  
		android:layout_alignParentBottom="true"  
		android:layout_marginBottom="50dp"  
		android:layout_marginLeft="120dp"  
		android:text="Broadcast Intent" " /> 

	![img](../../images/setup/image171.jpg)  
3. Select "MainActivity.java" from "Package Explorer". 

	![img](../../images/setup/image172.jpg) 
4. Declare a variable inside "MainActivity" to store "buttonBroadcastIntent". 

		:::java
		//Declare a variable to store the buttonBroadcastIntent  
		private Button buttonBroadcastIntent = null;  

	![img](../../images/setup/image173.jpg)  
5. Inside "onCreate" get a reference to "buttonBroadcastIntent".

		:::java
		//Get the buttonBroadcastIntent  
		buttonBroadcastIntent = (Button) findViewById(R.id.buttonBroadcastIntent); 

	![img](../../images/setup/image174.jpg)  
6. Inside "onCreate" add an "OnClickListener" for "buttonMSR".  

		:::java
		//Add an OnClickListener for buttonBroadcastIntent  
		buttonBroadcastIntent.setOnClickListener(buttonBroadcastIntentOnClick);  

	![img](../../images/setup/image175.jpg)  
7. Add a new "OnClickListener" inside "MainActivity".  

		:::java
		//OnClickListener for buttonBroadcastIntent  
		private OnClickListener buttonBroadcastIntentOnClick = new OnClickListener() {  
		    public void onClick(View v) {  
		  
		    }  
		};  

	![img](../../images/setup/image176.jpg)  
8. Add the following code to "onClick" to launch "BroadcastIntentActivity". 

		:::java
		//Launch BroadcastIntentActivity  
		Intent myIntent = new Intent(MainActivity.this, BroadcastIntentActivity.class);  
		startActivity(myIntent);  

	![img](../../images/setup/image177.jpg) 

###Creating Broadcast Intent UI
Then we will create the UI for displaying Barcode data to the user. 

1. Select "activity_msr.xml" from "Package Explorer".  
 
2. Remove the default "TextView". 
3. Add the following TextView. 

		:::xml
		<TextView  
		    android:id="@+id/textViewData"  
		    android:layout_width="wrap_content"  
		    android:layout_height="wrap_content"  
		    android:layout_alignParentTop="true"  
		    android:layout_centerHorizontal="true"  
		    android:layout_marginTop="50dp"  
		    android:text="Please Scan a Barcode."  
		    android:textAppearance="?android:attr/textAppearanceMedium" />  

	![img](../../images/setup/image179.jpg) 

###Creating our Broadcast Intent Profile
Next will will create a Data Capture profile that will be active on "BroadcastIntentActivity" and send Barcode data using a Broadcast Intent. 

1. Select "EMDKSample" project from Package Explorer.    
2. Click "EMDK" menu present on the top-bar and select "Profile Manager" option.
  
3. The EMDK Profile Manager Window will appear.
  
    ![img](../../images/setup/image180.jpg)
  
4. click "Create".
  
    ![img](../../images/setup/image181.jpg)
  
5. Provide "DataCaptureProfileBroadcastIntent" as the Profile Name for this tutorial.

	> Note: You can provide any Profile Name but make sure to access it with the similar name in the Android code.
  
    ![img](../../images/setup/image182.jpg)
  
6. select "ActivitySelection" from the list of "Available Features" and add it to "Selected Features" using the arrow.

	> Note: 
	> The field "Name" contains user defined name to identify a particular feature. This is required when editing any specific feature programmatically, which is outside the scope of this tutorial. So we will keep the "Name" field empty.
  
    ![img](../../images/setup/image_data_capture_broadcast_activity_selection.jpg)
  
7. Select "Activity Selection".
  
    ![img](../../images/setup/image143.jpg)
  
8. Enter "com.symbol.emdksample" as the application name and click apply.
  
    ![img](../../images/setup/image144.jpg)
  
9. Enter "BroadcastIntentActivity" as the activity name and click apply.
  
    ![img](../../images/setup/image183.jpg)  	

10. Click OK.  
11. select "Barcode" from the list of "Available Features" and add it to "Selected Features" using the arrow.
 
    ![img](../../images/setup/image184.jpg)  	

12. Change "Barcode Scanner Input Enable" to "Enable".

	> Note: 
	> The field "Name" contains user defined name to identify a particular Barcode Scanner Input feature. This is required when editing any specific Barcode Scanner Input feature programmatically, which is outside the scope of this tutorial. So we will keep the "Name" field empty.
  
	![img](../../images/setup/image185.jpg)
  
13. select "Intent" from the list of "Available Features" and add it to "Selected Features" using the arrow. 

	![img](../../images/setup/image186.jpg)
 
14. Now we will configure the "Intent" parameters.  
	* Switch "Intent Output Enable" to Enable". 
	* For "Intent Output Action" enter "com.symbol.emdksample.RECVRBI".
	* Switch "Intent Output Delivery" to "Broadcast Intent".  
	* Switch "Basic data formatting Enable" to Enable". 
	* Switch "Basic data formatting Send Data" to Enable". 	

	Your Intent configuration should now look like this:
  
	![img](../../images/setup/image187.jpg)  

15. Click "Apply" and "Finish".
  
    ![img](../../images/setup/image188.jpg)
  
16. Click "Close".  
    >Note:  
    >Now the "EMDKConfig.xml" file under the "\assets" folder will be updated with your changes.

###Registering for the Broadcast Intent profile
Now will register our new Data Capture profile in "MainActivity".

1. Select "MainActivity.java" from "Package Explorer". 

	![img](../../images/setup/image189.jpg)
 
2. Inside "MainActivity" add the following code to hold the name of our Broadcast Intent profile.  

		:::java
		//Assign the profile name used in EMDKConfig.xml  for Broadcast Intent handling  
		private String profileNameBroadcastIntent = "DataCaptureProfileBroadcastIntent";
	
    ![img](../../images/setup/image190.jpg)
  
3. Inside "onOpened" add the following code to register the Broadcast Intent EMDK profile. 

		:::java
		//Call processPrfoile for profile Broadcast Intent.  
		results = mProfileManager.processProfile(profileNameBroadcastIntent, ProfileManager.PROFILE_FLAG.SET, modifyData);  
		  
		if(results.statusCode == STATUS_CODE.FAILURE)  
		{  
		//Failed to set profile  
		}  

    ![img](../../images/setup/image191.jpg)  

###Handling Broadcast Intents
Newt we will add the code to listen for our Broadcast Intent and display the Barcode data to the user in side "BroadcastIntentActivity". 

1. Select "BroadcastIntentActivity.java" from "Package Explorer". 

	![img](../../images/setup/image192.jpg)
  
2. Add the following imports.  

		:::java
		import android.content.BroadcastReceiver;  
		import android.content.Context;  
		import android.content.Intent;  
		import android.content.IntentFilter;  
		import android.widget.TextView;  

	![img](../../images/setup/image193.jpg)
  
3. Add a global variable for the TextView. 

		:::java
		//Declare a variable to store the textViewData  
		private TextView textViewData = null;  
	
	![img](../../images/setup/image194.jpg)

4. Add the following code to your onCreate function to get a handle on the TextView.

		:::java
		//Get the textViewData  
		textViewData = (TextView) findViewById(R.id.textViewData);  

	![img](../../images/setup/image195.jpg)
  
5. Add a global variable to BroadcastIntentActivity to hold our Broadcast Receiver.

		:::java
		//Declare a variable to store our Broadcast Receiver.  
		private BroadcastReceiver EMDKReceiver;  
     
    ![img](../../images/setup/image196.jpg)
  
6. Override "onResume".  

		:::java
		@Override  
		protected void onResume() {  
		// TODO Auto-generated method stub  
		    super.onResume();  
		} 

    ![img](../../images/setup/image197.jpg)  
7. Override "onPause".  

		:::java
		@Override  
		protected void onPause() {  
		    // TODO Auto-generated method stub  
		    super.onPause();  
		} 

    ![img](../../images/setup/image198.jpg)
   
8. Add the following code to "onResume" to create an Intent filter.  

		:::java
		//Create an Intent Filter  
		IntentFilter intentFilter = new IntentFilter("com.symbol.emdksample.RECVRBI");

	![img](../../images/setup/image199.jpg)
 
9. Add the following code to "onResume" to create a Broadcast Receiver.  

		:::java
		//Create a our Broadcast Receiver.  
		EMDKReceiver = new BroadcastReceiver() {  
		  
		};  

	![img](../../images/setup/image200.jpg)
   
10. Override "onReceive" inside the Broadcast Receiver.  

		:::java
		@Override  
		public void onReceive(Context context, Intent intent) {  
		  
		} 

	![img](../../images/setup/image201.jpg)
  
11. Add the following code to "onReceive" to check if the data is coming from the Barcode scanner.  

		:::java
		//Get the source of the data  
		String source = intent.getStringExtra("com.motorolasolutions.emdk.datawedge.source");  
		  
		//Check if the data has come from the barcode scanner  
		if(source.equalsIgnoreCase("scanner")){  
		  
		} 

	![img](../../images/setup/image202.jpg)
  
12. Add the following code to get the data from the intent.  

		:::java
		//Get the data from the intent  
		String data = intent.getStringExtra("com.motorolasolutions.emdk.datawedge.data_string");  
		  
		//Check that we have received data  
		if(data != null && data.length() > 0){  
		  
		}

	![img](../../images/setup/image203.jpg)
  
13. Add the following code to display the data to the TextView.  

		:::java
		//Display the data to the text view  
		textViewData.setText("Data = " + data);  

	![img](../../images/setup/image204.jpg)
  
14. Add the following code to "onResume" to register our receiver.  

		:::java
		//Register our receiver.
		this.registerReceiver(EMDKReceiver, intentFilter);

	![img](../../images/setup/image205.jpg)
  
15. Add the following code to "onPause" to unregister our receiver.  

		:::java
		//Register our receiver.
		this.registerReceiver(EMDKReceiver, intentFilter);

	![img](../../images/setup/image206.jpg)  

###Running the Application###
Lastly we will run and test our application. 

1. Connect the device to a USB port.

    >Note:   
    >Make sure the device is in USB debug.

2. Run the application.  

	![img](../../images/setup/image207.png)
  
3. Press the trigger button and scan a Barcode.  

	![img](../../images/setup/image208.png)
  
4. Like before the scanned data will be populated in the Edit Text field Through the previous Keystroke Intent and will appear on the TextView using the previous Datawedge Intent.   
5. Press the button "Broadcast Intent".  

	![img](../../images/setup/image209.png)
  
6. Scan a Barcode.  

	![img](../../images/setup/image210.png)
  
8. The TextView will be populated by the Broadcast Intent.
7. Press the back button to rerun to the main screen.  

	![img](../../images/setup/image208.png)
  
9. Press the button "MSR", like before the MSR screen will come up.  

	![img](../../images/setup/image171.png)

10. Swipe a cad through the MSR.  

	![img](../../images/setup/image172.png)

11. Press return to go back to the MSR where you can swipe another card, or hit return again to go back to the main screen. 


















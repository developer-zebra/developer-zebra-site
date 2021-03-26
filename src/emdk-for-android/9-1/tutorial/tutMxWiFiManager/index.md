---
title: Configure Wi-Fi settings and Network Profiles using MX Wi-Fi
layout: guide.html
product: EMDK For Android
productversion: '9.1'
---

## Overview

This guide will walk you through creating an EMDK For Android application that will use MX features introduced in EMDK for Android API to perform device configurations. MX represents a suite of Enterprise Features on top of standard, commercially available Android Open Source Project. So this tutorial will focus on [Wi-Fi Manager](../../mx/wifi) API, which allows you to manage your device's Wi-Fi settings as well as manage the network profiles to be used for connecting and remembering networks. 

> Note: In order to apply these settings, Wi-Fi must be enabled. If you do not specify Wi-Fi Enable in the profile you will get an error when attempting to apply other settings if the device's Wi-Fi is not already enabled.

 
All of the above features can be configured the way you want through EMDK Profile Wizard as well as programmatically using Wi-Fi Manager API. In this tutorial, We would be implementing some of the these features through EMDK Wizard.

> Note: In this tutorial, we will be implementing everything through EMDK Wizard. Programmatic change using API is not in the scope of this tutorial.

The tutorial will be designed to configure Wi-Fi settings with following features and the sequence:

* Enable Wi-Fi
* Add Network 
* Connect to an existing network
* Disconnect from an existing network
* Remove an existing Network
   
###Prerequisites
* Wi-Fi on your Zebra Android device must be enabled.

## Creating The Project

> Note: Provide "WiFiManagerTutorial" as the project name for this tutorial.

Start by creating a new Android Studio [project](/emdk-for-android/9-1/tutorial/tutCreateProjectAndroidStudio). 

## Adding The Wi-Fi Manager Profile Feature
1. Click [here](/emdk-for-android/9-1/tutorial/tutAddProfileManagerFeature) to see how to add a specific feature to the Profile Manager.

2. Provide "WiFiProfile" as the Profile Name for this tutorial.

	> Note: You can provide any Profile Name but make sure to access it with the similar name in the Android code.  
   
3. Now, you can see all these MX features on the left hand side of the Profile Editor window. Select the "Wi-Fi" feature from the list and click "Right Arrow". Using this feature you can manage your device's Wi-Fi settings as well as the network profiles to be used for connecting and remembering networks as explained earlier.
  
	Click on the Wi-Fi feature. The parameter list will be populated.  
  
    ![img](../../images/MxWiFiManagerTutorialImages/select_wifi_feature.jpg)

4. You can see various settings of Wi-Fi feature in the wizard as mentioned initially. You can configure all these settings the way you want in the wizard as well as programmatically.

    Provide some name in the "Name" field (Ex. MyWiFi). The "Name" field is used to identify each feature, which is required when editing features programmatically. You can also keep the "Name" field empty.
    
    So lets start implementing the settings one by one as mentioned earlier. Currently, the Wi-Fi of the device is disabled. Before configuring any settings, we must enable the Wi-Fi first. So we will start with the first step by enabling Wi-Fi. Select Wi-Fi Enable drop-down and click "Enable" option. This will enable your device's Wi-Fi.  

    ![img](../../images/MxWiFiManagerTutorialImages/wifi_enable_dropdown.jpg)

    ![img](../../images/MxWiFiManagerTutorialImages/wifi_enabled.jpg)
    
5. Now we will add a new Wi-Fi network. In order to do that, select "Network Action" drop-down in the "Manage Wi-Fi Radio-Specific Settings" section. This drop-down will display various network operations that could be performed on your device's Wi-Fi.

    > Note: Keep other settings unchanged. Although you can configure any settings if you wish to.

    ![img](../../images/MxWiFiManagerTutorialImages/network_action_dropdown.jpg)

    Click on "Add a New Network" option and it will show configurable settings related to this option.  

    ![img](../../images/MxWiFiManagerTutorialImages/add_new_network.jpg)
    
6. You can select different types of "Security Mode" (Open, Personal, Enterprise) and configure settings associated with each type. For this tutorial, we will keep the "Security Mode" as "Personal".  
  
    ![img](../../images/MxWiFiManagerTutorialImages/personal_network.jpg)

    Now enter the details for the fields provided. Provide SSID as "rholink-ap". Select "WPA Mode" as WPA. Enter the passphrase, which is the password for authentication on your network. Check the "Protect Key?" checkbox so that the passphrase is protected. Keep the other settings unchanged. 

    > Note: The configurations may very depending on the network you add.

    ![img](../../images/MxWiFiManagerTutorialImages/personal_network_details_added.jpg)  
  
7.  Click Apply and Finish. 

    ![img](../../images/MxWiFiManagerTutorialImages/wifi_profile_created.jpg)  

8. Click "Close".   

    >Note:  
    >Now the "EMDKConfig.xml" is created under "\assets" folder. This file will contain a definition of all of your profiles that you create. 
    
9. You can inspect the "EMDKConfig.xml" created under "\assets" folder to see it is reflecting the changes made to the parameters via EMDK Profile Manager GUI earlier.  However, it is advised that this file not be manually updated and only be controlled via the Profile Manager. So you can see the entry of all elements in EMDKConfig.xml file that we configured.

    ![img](../../images/MxWiFiManagerTutorialImages/emdk_config_file_entries.jpg)    

## Enabling Android Permissions
1. Modify the Application's Manifest.xml to use the EMDK library and to set permission for the EMDK.
  
    ![img](../../images/MxWiFiManagerTutorialImages/manifest_file.jpg)

    You must first enable permissions for 'com.symbol.emdk.permission.EMDK':  
   
        :::xml
        <uses-permission android:name="com.symbol.emdk.permission.EMDK"/> 

    Then you must enable the library:  
      
        :::xml
        <uses-library android:name="com.symbol.emdk"/>

    When done, your manifest.xml should look like:

    ![img](../../images/MxWiFiManagerTutorialImages/manifest_permissions_added.jpg) 

##Adding Some Code    
1. Now we will start to add some code. 

    First you must add references to the libraries:  
    
        :::java
        import com.symbol.emdk.*;  
        import com.symbol.emdk.EMDKManager.EMDKListener;  
		import android.widget.Toast;    

    Then you must extend the activity to implement EMDKListener. 
    
        :::java
        public class MainActivity extends Activity implements EMDKListener {  
          
            .. .. .. .. .. .. ...  
          
            @Override  
            public void onClosed() {  
                   // TODO Auto-generated method stub  
            }  
          
            @Override  
            public void onOpened(EMDKManager emdkManager) {  
                   // TODO Auto-generated method stub  
            }  
          
        }      

    We will now create some global variables to hold the profile name as well as instance objects of EMDKManager and ProfileManager with a status variable while applying the profile. We will also create global variables to hold the UI elements and values that are required in this application. Some of the variables are used to hold the name, type and description in case of any errors. These variables would be used throughout the code. 

    >Note:
    >Verify the Profile name in the code with the one created in the Profile Manager. They both should be identical.    
    
        :::java
        // Assign the profile name used in EMDKConfig.xml
	    private String profileName = "WiFiProfile";

	    // Declare a variable to store ProfileManager object
	    private ProfileManager profileManager = null;

	    // Declare a variable to store EMDKManager object
	    private EMDKManager emdkManager = null;

		// Contains the parm-error name (sub-feature that has error)
		private String errorName = "";

		// Contains the characteristic-error type (Root feature that has error)
		private String errorType = "";

		// contains the error description for parm or characteristic error.
		private String errorDescription = "";

		// contains status of the profile operation
		private String status = "";

    In the onCreate method, we call getEMDKManager so that the EMDK can be initialized and checked to see if it is ready. 

        :::java
        //The EMDKManager object will be created and returned in the callback.  
        EMDKResults results = EMDKManager.getEMDKManager(getApplicationContext(), this);  
          
        //Check the return status of getEMDKManager  
		if (results.statusCode == EMDKResults.STATUS_CODE.SUCCESS) {

			// EMDKManager object creation success

		} else {

			// EMDKManager object creation failed

		}


    So far your code should look like:
     
     ![img](../../images/MxWiFiManagerTutorialImages/on_create_added.jpg) 

2. Now we need to use the `onOpened` method to get a reference to the EMDKManager. The EMDKListener interface will trigger this event when the EMDK is ready to be used. The EMDKListener interface must be implemented in order to get a reference to the EMDKManager APIs. This event will pass the EMDKManager instance and we assign it to the global variable `emdkManager` that we created in the previous steps. We then use that instance object to get an instance of ProfileManager and assign it to the global variable `profileManager`. This is how we will interface with the APIs in the rest of the code:

    > Note: 
    > Rename the argument of `onOpened` method from `arg0` to `emdkManager`  

        :::java
        // This callback will be issued when the EMDK is ready to use.
		statusTextView.setText("EMDK open success.");

		this.emdkManager = emdkManager;

		// Get the ProfileManager object to process the profiles
		profileManager = (ProfileManager) emdkManager
				.getInstance(EMDKManager.FEATURE_TYPE.PROFILE);         
    
    Now that we have a reference to ProfleManager, we use it to install and activate the profile we built earlier using the `processProfile` method. We could have also performed this action at a different time, say when someone pressed a button, but we chose to do it as soon as the EMDK was ready:

		:::java
		if (profileManager != null) {
			String[] modifyData = new String[1];

			// Call processPrfoile with profile name and SET flag to create the profile. The modifyData can be null.
			EMDKResults results = profileManager.processProfile(profileName,
					ProfileManager.PROFILE_FLAG.SET, modifyData);

			if (results.statusCode == EMDKResults.STATUS_CODE.CHECK_XML) {


			} else {
			  // Show dialog of Failure
				AlertDialog.Builder builder = new AlertDialog.Builder(this);
				builder.setTitle("Failure");
				builder.setMessage("Failed to apply profile...")
						.setPositiveButton("OK",
								new DialogInterface.OnClickListener() {
									public void onClick													(DialogInterface dialog,
											int id) {

									}
								});
				AlertDialog alert = builder.create();
				alert.show();
			}

		}

    This `processProfile` method returns the result of applying a particular profile that we set using EMDK Profile Wizard in [EMDKResults](/emdk-for-android/9-1/api/core/EMDKResults) reference. If the profile is successfully processed, it returns the status as `CHECK_XML` and then we go on and parse the response to get further details whether the profile was applied successfully or not. Otherwise we display a Failure message in a [dialog](http://developer.android.com/reference/android/app/AlertDialog.html).

	> Note: 1. There is a difference between processing a profile successfully and applying a profile successfully.

	> Note: 2. If the status is other than `CHECK_XML`, we are simply displaying a failure message. You can actually go ahead and check different types of status and display the appropriate message accordingly, which is not in the scope of this sample tutorial.


	In case of `CHECK_XML` status, We retrieve  XML response string from the result using `getStatusString` method.

		:::java
		// Get XML response as a String
		String statusXMLResponse = results.getStatusString();

	Further, we would parse this XML response string using [XML Pull Parser](http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html) in order to get the status and error parameters if any. XML Pull Parser is an interface that defines parsing functionality provided in [XMLPULL V1 API](http://www.xmlpull.org/) (visit this website to learn more about API and its implementations). In the parsing we would be looking for specific status tags (Error Name, Error Type and Error Description) in case of any errors and if found, we would get those values in the respective global variables that we have declared in previous step.

		:::java
		try {
			// Create instance of XML Pull Parser to parse the response
			XmlPullParser parser = Xml.newPullParser();
			// Provide the string response to the String Reader that reads
			// for the parser
			parser.setInput(new StringReader(statusXMLResponse));
			// Call method to parse the response
			parseXML(parser);
			} catch (XmlPullParserException e) {
				e.printStackTrace();
			}

	> Note: Here we have called the method `parseXML` to parse XML response string. We will declare the method in the next step. 

	Once the response is parsed, we would display the result of applying this profile in a [dialog](http://developer.android.com/reference/android/app/AlertDialog.html) by calling `displayResults` method, which we would declare in coming steps.

		:::java
		// Method call to display results in a dialog
		displayResults();

    Your complete `onOpened` method should now look like:
    
    ![img](../../images/MxWiFiManagerTutorialImages/on_opened_method_1.jpg) 

    ![img](../../images/MxWiFiManagerTutorialImages/on_opened_method_2.jpg)

3. You will see few errors as we have not declared the respective methods to parse the response and display result. Lets do it one by one. In this step, we will create a method `parseXML` that uses [XML Pull Parser](http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html) to parse the XML string response and set the status and error parameters if any.

	In the reponse, we are supposed to capture `name` and `desc` for `parm-error` tag, `type` and `desc` for `characteristic-error` tag in case of any errors.

		:::java
		// Method to parse the XML response using XML Pull Parser
		public void parseXML(XmlPullParser myParser) {
		int event;
		try {
			event = myParser.getEventType();
			while (event != XmlPullParser.END_DOCUMENT) {
				String name = myParser.getName();
				switch (event) {
				case XmlPullParser.START_TAG:
					// Get Status, error name and description in case of
					// parm-error
					if (name.equals("parm-error")) {
						status = "Failure";
						errorName = myParser.getAttributeValue(null, "name");
						errorDescription = myParser.getAttributeValue(null,
								"desc");

						// Get Status, error type and description in case of
						// parm-error
					} else if (name.equals("characteristic-error")) {
						status = "Failure";
						errorType = myParser.getAttributeValue(null, "type");
						errorDescription = myParser.getAttributeValue(null,
								"desc");
					}
					break;
				case XmlPullParser.END_TAG:

					break;
				}
				event = myParser.next();

			  }
		    } catch (Exception e) {
			e.printStackTrace();
		    }
		}

    Your complete `parseXML` method should now look like:
    
    ![img](../../images/MxWiFiManagerTutorialImages/parse_xml.jpg) 

4. You will still see one error as we need to declare `displayResults` method to display the result of profile operation in a [dialog](http://developer.android.com/reference/android/app/AlertDialog.html). Before displaying the results, we should form the content of the result to be shown first, specifically in case of errors. This could be done by creating `buildFailureMessage` method.
 
    In this method, the error message in case of error is formed using following way: 

    * Name and description of error if the response contains `parm-error`.
    * Type and description of error if the response contains `characteristic-error`.
    * Name, type and description of error if the response contains both `parm-error` and `characteristic-error`.

	The `buildFailureMessage` method would have following code to match the above mentioned criteria.  

		:::java
		// Method to build failure message that contains name, type and
		// description of respective error (parm, characteristic or both)
		public String buildFailureMessage() {
		  String failureMessage = "";
		  if (!TextUtils.isEmpty(errorName) && !TextUtils.isEmpty(errorType))
			 failureMessage = errorName + " :" + "\n" + errorType + " :" + "\n"
					+ errorDescription;
		  else if (!TextUtils.isEmpty(errorName))
			 failureMessage = errorName + " :" + "\n" + errorDescription;
		  else
			 failureMessage = errorType + " :" + "\n" + errorDescription;
		  return failureMessage;

		}

    `buildFailureMessage` method should look like:
    
    ![img](../../images/MxWiFiManagerTutorialImages/build_failure_message.jpg)

5. In this step, we will add `displayResults` method to display the result of profile operation in a [dialog](http://developer.android.com/reference/android/app/AlertDialog.html). The dialog would display status as `Success` or `Failure` with corresponding message based on the response of profile operation.

		:::java
		// Method to display results (Status, Error Name, Error Type, Error
		// Description) in a
		// dialog
		public void displayResults() {
		  // Alert Dialog to display the status of the Profile creation
		  // operation of MX features
		  AlertDialog.Builder alertDialogBuilder = new AlertDialog.Builder(
				MainActivity.this);

		  if (TextUtils.isEmpty(errorDescription)) {
			alertDialogBuilder.setTitle("Success");
			alertDialogBuilder.setMessage("Profile Successfully Applied...");
		  } else {
			// set title
			alertDialogBuilder.setTitle(status);
			// call buildFailureMessage() method to set failure message in
			// dialog
			alertDialogBuilder.setMessage(buildFailureMessage());
		  }

		  alertDialogBuilder.setCancelable(false).setPositiveButton("OK",
				new DialogInterface.OnClickListener() {
					public void onClick(DialogInterface dialog, int id) {
					}
				});
		  // create alert dialog
		  AlertDialog alertDialog = alertDialogBuilder.create();

		  // show it
		  alertDialog.show();

	    }  

    The method `displayResults` should look like:
    
    ![img](../../images/MxWiFiManagerTutorialImages/display_results.jpg)

	You can see that all the errors are gone.  
    
6. Now let's override the "onDestroy" method so we can release the EMDKManager resources:  

        :::java
        @Override  
        protected void onDestroy() {  
            // TODO Auto-generated method stub  
            super.onDestroy();  
            //Clean up the objects created by EMDK manager  
            emdkManager.release();  
        } 

    Your onDestroy method should now look like this:  

    ![img](../../images/MxWiFiManagerTutorialImages/on_destroy_method.jpg) 

That's it!!! We are done with all the coding and configuration part that will allow us to Enable the Wi-Fi and add a network specified in the EMDK Profile Wizard.
 
## Running the Application

1. Connect the device to a USB port (device must have USB debugging enabled). 

    > Note:   
    > Make sure the device is in USB debug.

2. Before running the application, We will make sure that Wi-Fi is disabled. Go to "Settings" and disable the Wi-Fi by toggling the status. 
  
	![img](../../images/MxWiFiManagerTutorialImages/disable_wifi.png)
  
4. Run the application. If the configurations in the wizard are successfully applied, the app will display a success [Toast](http://developer.android.com/guide/topics/ui/notifiers/toasts.html).

    ![img](../../images/MxWiFiManagerTutorialImages/home_screen.png)

    You can see an [Alert Dialog](http://developer.android.com/reference/android/app/AlertDialog.html) displayed with a success message. It means it enabled the Wi-Fi and added a network named "rholink-ap" that we had configured in the wizard earlier in this tutorial.

	> Note: In case of any errors, you will see a Failure status with respective error message in that dialog.

    To verify, go to Settings. You can see the Wi-Fi is enabled now. 
  
	![img](../../images/MxWiFiManagerTutorialImages/wifi_on.png)

    Tap on Wi-Fi option and you can see that the "rholink-ap" network has been successfully added in the list of available networks. The lock icon near Wi-Fi image indicates that it is a secured password protected network.

    ![img](../../images/MxWiFiManagerTutorialImages/rho_link_added.png)

    > Note: This setting has just added a new network. We are not yet connected to this new network that we added.  

5. Now we will connect to an existing Wi-Fi network. You can connect to any of the existing Wi-Fi network but we will connect to the one we just added (rholink-ap). So open the profile manager by selecting our project just like we did earlier for adding a network. 
 
	![img](../../images/MxWiFiManagerTutorialImages/wifi_profile_created.jpg)

    Click on "Edit" button and it will display profile editor window to edit previous configurations.

    ![img](../../images/MxWiFiManagerTutorialImages/edit_profile.jpg)

    Choose "Network Action" as "Connect to an Existing Network" from the drop-down.

    ![img](../../images/MxWiFiManagerTutorialImages/connect_existing_network.jpg)

    Enter SSID of the network you want to connect to. In this tutorial we will connect to network with SSID "rholink-ap" that we created earlier.
 
    ![img](../../images/MxWiFiManagerTutorialImages/ssid_provided.jpg)

    Click Apply, Finish and Close to save the configurations.  

6. Run the application again.

    ![img](../../images/MxWiFiManagerTutorialImages/home_screen.png)

    The app displayed a success message. So to verify, go to Settings -> Wi-Fi. You can see that Wi-Fi is successfully connected to the network with SSID "rholink-ap", which we provided in the wizard.
   
    ![img](../../images/MxWiFiManagerTutorialImages/wifi_connected.png)

7. We will now disconnect the Wi-Fi from an existing network through wizard. Go to Profile Manager and click Edit button just like we did in previous operations.

    This time select the "Network Action" as "Disconnect from an Existing Network". Enter the SSID of the network you wish to disconnect from. In this tutorial we will enter the SSID as "rholink-ap" to which we are currently connected.

    ![img](../../images/MxWiFiManagerTutorialImages/disconnect_from_network.jpg)

    Click Apply, Finish and Close.

8. Run the application. 

    ![img](../../images/MxWiFiManagerTutorialImages/home_screen.png)

    The success [Toast](http://developer.android.com/guide/topics/ui/notifiers/toasts.html) indicates that the operation was successful.

    Let us verify that. Go to Settings -> Wi-Fi and you will see that the device has successfully disconnected from the network "rholink-ap".

    ![img](../../images/MxWiFiManagerTutorialImages/disconnected_from_network.png)

9. Finally, we will remove an existing network through the EMDK Profile wizard. So again go to Profile Manager and click on "Edit" button. Select "Network Action" as "Remove an Existing Network". This time we will provide some other SSID just for variation. 

    ![img](../../images/MxWiFiManagerTutorialImages/ssid_to_remove.png)

    In the above screen, you can see a network with SSID "Deven". Let us remove this network from the list by providing SSID "Deven" in the wizard.

    ![img](../../images/MxWiFiManagerTutorialImages/remove_existing_network.jpg)

    Click Apply, Finish and Close.

10. Run the application. 

    ![img](../../images/MxWiFiManagerTutorialImages/home_screen.png)

    The success message indicates that the network was removed successfully. So go to Settings -> Wi-Fi and you will not see the network with SSID "Deven" in the list of available networks.

    ![img](../../images/MxWiFiManagerTutorialImages/network_removed.png)

    > Note: If the network is within the range then it might appear again in the list as device scans periodically.

    So these are some of the configurations we implemented using Wi-Fi Manager feature of Mx. You can try any configurations and manage your device's Wi-Fi settings as well as network profiles.


##Important Programming Tips##

1. Perform the following changes in the application's `AndroidManifest.xml` file:  
  
		//Include the permission for EMDK:  
        :::xml
        <uses-permission android:name="com.symbol.emdk.permission.EMDK"/>
    
		//Use the EMDK library:  
        :::xml
        <uses-library android:name="com.symbol.emdk"/>
   
2. Use DataWedge v1.7.12 or higher version to test the `ProfileManager.processProfile()` method for DataWedge profiles.


## What's Next
Now that you have learned how to configure your device's Wi-Fi settings as well as network profiles on your Zebra Android devices through applications using MX Wi-Fi feature, let us try to understand and implement some of the other MX features. So in the next tutorial, we will concentrate on the "Certificate Manager" feature and try to explore this feature by creating a tutorial.


















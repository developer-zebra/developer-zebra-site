---
title: Using Certificate Manager
layout: guide.html
product: EMDK For Android
productversion: '7.6'
---

## Overview

This guide will walk you through creating an EMDK For Android application that will use some new MX features introduced in EMDK for Android API to perform device configurations. MX represents a suite of Enterprise Features on top of standard, commercially available Android Open Source Project. So this tutorial will focus on installing certificates on your Zebra device using [Certificate Manager](../../mx/certmgr).

You can use these installed digital certificates to identify your device for a variety of purposes, including VPN or Wi-Fi network access as well as authentication to servers by apps such as Email or Chrome. Let us create a tutorial using [Certificate Manager](../../mx/certmgr) and install a sample CA certificate that would be useful when using WiFiConfig to configure a profile that uses EAP-TLS while adding a Wi-Fi network.

>Note:  
>We can install different types of certificates (Ex. .PEM, .PFX, .P12 etc. ) but for this tutorial, we will install a sample CA certificate (.PEM file). 


## Creating The Project

> Note: Provide "CertManagerTutorial" as the project name for this tutorial.

Start by creating a new Android Studio [project](/emdk-for-android/7-5/tutorial/tutCreateProjectAndroidStudio).

## Adding the Certificate Manager Profile Feature
1. Click [here](/emdk-for-android/7-5/tutorial/tutAddProfileManagerFeature) to see how to add a specific feature to the Profile Manager.

2. Provide "CertificateProfile" as the Profile Name for this tutorial.

	> Note: You can provide any Profile Name but make sure to access it with the similar name in the Android code.  
  
3. Now, you can see all these MX features on the left hand side of the Profile Editor window. Select the "Certificate Manager" feature from the list and click "Right Arrow".

    ![img](../../images/MxCertManagerTutorialImages/certificate_keystore.jpg)

4. Now we have to add the feature to install our sample CA certificate on Zebra device. But, we need to make sure that before installing or uninstalling certificates, a keystore must exist. It means, we need to initialize Android Keystore on our Zebra device. When you initialize the Android keystore you create a new keystore replacing any previously existing one. You can choose to perform this action as a separate EMDK profile or include the Certificate Manager feature multiple times in one profile. We will use Certificate Manager feature multiple times with the same profile in this tutorial. This Certificate Manager feature will be used to initialize Android Keystore.

	Provide some name in the "Name" field (Ex. "MyKeystore"). The "Name" field is used to identify each feature, which is required when editing features programmatically. You can also keep the "Name" field empty.

5. Click the "Certificate Action" drop-down and select "Initialize Android Keystore" option.

	![img](../../images/MxCertManagerTutorialImages/initialize_android_keystore.jpg)

6. Provide the password required to initialize the Android Keystore in "Keystore Password" field (Ex. 1234).

	![img](../../images/MxCertManagerTutorialImages/keystore_password.jpg)

7. As mentioned, we will add another Certificate Manager feature in the same profile to install our sample CA Certificate on Zebra device. Select the "Certificate Manager" feature from the list and click "Right Arrow". This Certificate Manager will be use to install CA Certificate on Zebra device.

	![img](../../images/MxCertManagerTutorialImages/certificate_feature.jpg)  

    Provide some name in the "Name" field (Ex. MyCertificateManager). The "Name" field is used to identify each feature, which is required when editing features programmatically. You can also keep the "Name" field empty.

    So as discussed, you can install different types of certificates (.PEM, .PFX, .P12 etc. ) on your Zebra device using Certificate Manager. Here, we will install a sample CA certificate (.PEM file) that would be useful when using WiFiConfig to configure a profile that uses EAP-TLS while adding a Wi-Fi network. 

    Execute following steps to proceed:
 
	* Click on "Certificate Action" drop-down in the wizard and select the option "Install Certificate".    

    ![img](../../images/MxCertManagerTutorialImages/install_cert.jpg)

    >Note:  
    >To uninstall any installed certificate, select "Uninstall Certificate" option from "Certificate Action" drop-down and provide the appropriate alias name of certificate you want to uninstall.  

	* Provide some name in "Certificate Alias" field to refer your certificate while performing different actions on it such as uninstall (Ex. Test-Certificate).

	* Click on "Certificate Type" drop-down in the wizard and select the option "CA Certificate (.PEM file)".

	![img](../../images/MxCertManagerTutorialImages/cert_type.jpg)

	* Provide the SD Card path of the Sample CA Certificate that we put in the beginning (/storage/sdcard1/test.pem).

	> Note: SD Card Path may vary based on where you put your certificate.

	* Keep rest of the fields as it is and your profile wizard for Certificate Manager should look like:  
 
    ![img](../../images/MxCertManagerTutorialImages/cert_manager_wizard.jpg)   
 
8. Click Apply to apply the settings we provided    
  
    ![img](../../images/MxCertManagerTutorialImages/certificate_profile_created.jpg)

	> Note: As you can see, we have added two Certificate Manager features in the same profile to Initialize Android Keystore and Install sample CA Certificate respectively on the Zebra device.

9. Click Finish and your Certificate profile for initializing Android Keystore and installing CA Certificate is created.

    ![img](../../images/MxCertManagerTutorialImages/certificate_manager_profile_created.jpg) 
  
10. Click "Close".

    >Note:  
    >Now the "EMDKConfig.xml" is created under "\assets" folder. This file will contain a definition of all of your profiles that you create. 
  
11. You can inspect the EMDKConfig.xml to see it is reflecting the changes made to the parameters via EMDK Profile Manager GUI earlier.  However, it is advised that this file not be manually updated and only be controlled via the Profile Manager.

    ![img](../../images/MxCertManagerTutorialImages/emdk_config_file_entries.jpg)    

## Enabling Android Permissions
1. Modify the Application's Manifest.xml to use the EMDK library and to set permission for the EMDK.
  
    You must first enable permissions for 'com.symbol.emdk.permission.EMDK':  
   
        :::xml
        <uses-permission android:name="com.symbol.emdk.permission.EMDK"/> 

    Then you must enable the library:  
      
        :::xml
        <uses-library android:name="com.symbol.emdk"/>

    When done, your manifest.xml should look like:

    ![img](../../images/MxCertManagerTutorialImages/manifest_permissions_added.jpg) 

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

    We will now create some global variables to hold the profile name as well as instance objects of EMDKManager and ProfileManager with a status variable while applying the profile. Some of the variables are used to hold the name, type and description in case of any errors. These variables would be used throughout the code. 

    >Note:
    >Verify the Profile name in the code with the one created in the Profile Manager. They both should be identical.    
    
        :::java
        // Assign the profile name used in EMDKConfig.xml
	    private String profileName = "CertificateProfile";

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

	So this is how variable declaration looks like:

	![img](../../images/MxCertManagerTutorialImages/variables_added.jpg)

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
     
     ![img](../../images/MxCertManagerTutorialImages/on_create_added.jpg) 

2. Now we need to use the `onOpened` method to get a reference to the EMDKManager. The EMDKListener interface will trigger this event when the EMDK is ready to be used. The EMDKListener interface must be implemented in order to get a reference to the EMDKManager APIs. This event will pass the EMDKManager instance and we assign it to the global variable `emdkManager` that we created in the previous steps. We then use that instance object to get an instance of ProfileManager and assign it to the global variable `profileManager`. This is how we will interface with the APIs in the rest of the code:

    > Note: 
    > Rename the argument of `onOpened` method from `arg0` to `emdkManager`  

        :::java
        // This callback will be issued when the EMDK is ready to use.
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
									public void onClick(DialogInterface dialog,
											int id) {

									}
								});
				AlertDialog alert = builder.create();
				alert.show();
			}

		}

    This `processProfile` method returns the result of applying a particular profile that we set using EMDK Profile Wizard in [EMDKResults](/emdk-for-android/7-5/api/core/EMDKResults) reference. If the profile is successfully processed, it retuns the status as `CHECK_XML` and then we go on and parse the response to get further details whether the profile was applied successfully or not. Otherwise we display a Failure message in a [dialog](http://developer.android.com/reference/android/app/AlertDialog.html).

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
    
    ![img](../../images/MxCertManagerTutorialImages/on_opened_method_1.jpg) 

    ![img](../../images/MxCertManagerTutorialImages/on_opened_method_2.jpg) 

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
    
    ![img](../../images/MxCertManagerTutorialImages/parse_xml.jpg) 

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
    
    ![img](../../images/MxCertManagerTutorialImages/build_failure_message.jpg)

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
    
    ![img](../../images/MxCertManagerTutorialImages/display_results.jpg)

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

    ![img](../../images/MxCertManagerTutorialImages/on_destroy_method.jpg) 

That's it!!! We are done with all the coding and configuration part that will let us install the sample CA certificate on Zebra Android device. Now let us run the application.
 
## Running the Application

1. Connect the device to a USB port. 

> Make sure the device has USB debugging enabled.

2. Before running the application, it is recommended that the key store be cleared (Settings -> Security -> Clear Credentials). 

    ![img](../../images/MxCertManagerTutorialImages/clear_credentials.png)

	> Note: If "Clear Credentials" option is disabled, you don't need to clear it.  

3. Run the application.

    ![img](../../images/MxCertManagerTutorialImages/home_screen.png)

    You can see an [Alert Dialog](http://developer.android.com/reference/android/app/AlertDialog.html) with a success message, which indicates that the sample CA certificate with alias name "Test-Certificate" has been installed.

	> Note: In case of any errors, you will see a Failure status with respective error message in that dialog.
  
4. Let us verify this by executing following steps on your Zebra device:

	* Navigate to Settings -> Wi-Fi. 
	* Press "+" button to add a Wi-Fi network.

	![img](../../images/MxCertManagerTutorialImages/add_network.png)

	* Tap the "Security" drop-down and select "802.1x EAP" option. 

    ![img](../../images/MxCertManagerTutorialImages/security_option.png)

	* Now scroll down and tap on "EAP method" drop-down. Select "TLS" option.

	![img](../../images/MxCertManagerTutorialImages/tls.png)

	* Scroll down and tap on "CA Certificate" option and you should see the alias name (Test-Certificate) of the Sample CA certificate that we installed using Profile wizard.

	![img](../../images/MxCertManagerTutorialImages/ca_certificate_installed.png)

	The alias listed can become the value to use as the certificate when using Wi-Fi Config to configure a profile that uses EAP-TLS.

5. You can also uninstall the installed certificates through Profile Manager wizard by simply selecting "Uninstall Certificate" option in the "Certificate Action" and proceed.

	![img](../../images/MxCertManagerTutorialImages/uninstall_certificate.jpg)

6. This is how Certificate Manager lets us configure different types of certificate on the Zebra Android device using Profile Wizard. 

-----

##Important Programming Tips

1. Perform the following changes in the application's `AndroidManifest.xml` file:  
  
		// Include the permission for EMDK:  
        :::xml
        <uses-permission android:name="com.symbol.emdk.permission.EMDK"/>
    
		// Use the EMDK library:  
        :::xml
        <uses-library android:name="com.symbol.emdk"/>
  
2. Use DataWedge v1.7.12 or higher version to test the `ProfileManager.processProfile()` method for DataWedge profiles.

## What's Next
Now that you have learned how to configure various types of certificates using Certificate Manager on your Zebra devices through applications, let us try to understand and implement some of the other new MX features introduced in V 3.0. So in the next tutorial, we will concentrate on the "XML Manager" MX feature and try to explore this feature by creating a tutorial.

















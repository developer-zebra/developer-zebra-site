---
title: Using Browser Manager
layout: guide.html
product: EMDK For Android
productversion: '9.0'
---

## Overview

This guide will walk you through creating an EMDK For Android application that will use some new MX features introduced in EMDK for Android API to perform device configurations. MX represents a suite of Enterprise Features on top of standard, commercially available Android Open Source Project. So this tutorial will focus on configuring browser of your Zebra Android device using [Browser Manager](../../mx/browsermgr) feature of Mx. Using Browser Manager, we will set a Default Home Page to the browser whenever the browser is opened. We would also configure the "Save Form Data" feature by turning it ON/OFF using [Browser Manager](../../mx/browsermgr) through Profile Wizard.

So now we will create a tutorial using MX [Browser Manager](../../mx/browsermgr) feature, to set "youtube.com" as the default home page of the browser and also turn OFF "Save Form Data", which would not remember any typed data in the forms, on your Zebra Android device.


## Creating The Project

> Note: 1. Provide "BrowserManagerTutorial" as the project name for this tutorial. 2. This feature requires Zebra device with Android KitKat 4.4.  

Start by creating a new Android Studio [project](/emdk-for-android/9-0/tutorial/tutCreateProjectAndroidStudio).

## Adding The Browser Manager Profile Feature
1. Click [here](/emdk-for-android/9-0/tutorial/tutAddProfileManagerFeature) to see how to add a specific feature to the Profile Manager.

2. Provide "BrowserProfile" as the Profile Name for this tutorial.

	> Note: You can provide any Profile Name but make sure to access it with the similar name in the Android code.  

3. Now, you can see all these MX features on the left hand side of the Profile Editor window. Select the "Browser Manager" feature from the list and click "Right Arrow".

    ![img](../../images/MxBrowserManagerTutorialImages/browser_feature.jpg)

4. Provide some name in the "Name" field (Ex. MyBrowserManager). The "Name" field is used to identify each feature, which is required when editing features programmatically. You can also keep the "Name" field empty.

    So as discussed, we will set `youtube.com` as the `Default Home Page` for the browser of Zebra device. Provide URL of Youtube `http://www.youtube.com` in front of `Set Default Home Page` field.

	We had also discussed about turning the "Save Form Data" feature OFF. By turning this feature OFF, the forms of your browser will no longer remember the data you type in them. Click on "Turn on/off Save Form Data" drop-down and select the option "Turn off".

    ![img](../../images/MxBrowserManagerTutorialImages/browser_manager_details.jpg)

    ![img](../../images/MxBrowserManagerTutorialImages/browser_manager_details_selected.jpg)

5. Click **Apply** to apply the settings we provided, then click **Finish**.

  ![img](../../images/MxBrowserManagerTutorialImages/BrowserManagerStep5.png)

6. Click **Close**

  >NOTE: The file **EMDKConfig.xml** will be created under the **\assets** folder in your project. This profile will contain a definition of profiles that you created with Profile Manager.

7. You can inspect the **EMDKConfig.xml** file to see that it reflects the changes made via the EMDK Profile Manager.

  >NOTE: It is advised that this file not be manually modified, if further changes need to be made, please use the Profile Manager.

  ![img](../../images/MxBrowserManagerTutorialImages/BrowserManagerStep7.png)

##Enabling Android Permissions

Modify the Application's **AndroidManifest.xml** to use the EMDK library and set permissions for the EMDK.

You must first enable permissions for 'com.symbol.emdk.permission.EMDK':

    :::xml
    <uses-permission android:name="com.symbol.emdk.permission.EMDK"/>

Then you must enable the EMDK library:

    :::xml
    <uses-library android:name="com.symbol.emdk"/>

When done, your AndroidManifest.xml should resemble the following:

![img](../../images/MxBrowserManagerTutorialImages/ModifyManifest.png)

##Adding Some Code
1. Now we will start to add some code.

    First you must add references to the libraries:  

        :::java
        import android.app.Activity;
        import android.app.AlertDialog;
        import android.content.DialogInterface;
        import android.os.Bundle;
        import android.text.TextUtils;
        import android.util.Xml;
        import android.view.Menu;
        import android.view.MenuItem;

        import com.symbol.emdk.EMDKManager;
        import com.symbol.emdk.EMDKResults;
        import com.symbol.emdk.ProfileManager;

        import org.xmlpull.v1.XmlPullParser;
        import org.xmlpull.v1.XmlPullParserException;
        import com.symbol.emdk.EMDKManager.EMDKListener;

        import java.io.StringReader;

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
	    private String profileName = "BrowserProfile";

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

    ![img](../../images/MxBrowserManagerTutorialImages/variables_added.jpg)

	![img](../../images/MxBrowserManagerTutorialImages/on_create_added.jpg)

2. Now we need to use the `onOpened` method to get a reference to the EMDKManager. The EMDKListener interface will trigger this event when the EMDK is ready to be used. The EMDKListener interface must be implemented in order to get a reference to the EMDKManager APIs. This event will pass the EMDKManager instance and we assign it to the global variable `emdkManager` that we created in the previous steps. We then use that instance object to get an instance of ProfileManager and assign it to the global variable `profileManager`. This is how we will interface with the APIs in the rest of the code:

    > Note:
    > Rename the argument of `onOpened` method from `arg0` to `emdkManager` if required.  

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
									public void onClick													(DialogInterface dialog,
											int id) {

									}
								});
				AlertDialog alert = builder.create();
				alert.show();
			}

		}

    This `processProfile` method returns the result of applying a particular profile that we set using EMDK Profile Wizard in [EMDKResults](/emdk-for-android/9-0/api) reference. If the profile is successfully processed, it retuns the status as `CHECK_XML` and then we go on and parse the response to get further details whether the profile was applied successfully or not. Otherwise we display a Failure message in a [dialog](http://developer.android.com/reference/android/app/AlertDialog.html).

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

    ![img](../../images/MxBrowserManagerTutorialImages/on_opened_method_1.jpg)

    ![img](../../images/MxBrowserManagerTutorialImages/on_opened_method_2.jpg)

3. You will see few errors as we have not declared the respective methods to parse the response and display result. Lets do it one by one. In this step, we will create a method `parseXML` that uses [XML Pull Parser](http://developer.android.com/reference/org/xmlpull/v1/XmlPullParser.html) to parse the XML string response and set the status and error parameters if any.

	In the response, we are supposed to capture `name` and `desc` for `parm-error` tag, `type` and `desc` for `characteristic-error` tag in case of any errors.

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

      >NOTE: Since we have added **displayResults**, you should now see that all error messages are gone.

6. Now let's override the "onDestroy" method so we can release the EMDKManager resources:  

        :::java
        @Override  
        protected void onDestroy() {  
            // TODO Auto-generated method stub  
            super.onDestroy();  
            //Clean up the objects created by EMDK manager  
            emdkManager.release();  
        }



That's it!!! We are done with all the coding and configuration part that will let us set the browsers homepage and disable saving of form data on Zebra device. Now let's run the application.

## Running the Application

1. Connect the device to a USB port.
  >NOTE: Make sure USB debuging is enabled on the device.

  Run the application from your development envroment by pressing the play icon, or install the apk and run from application tray.

  ![img](../../images/MxBrowserManagerTutorialImages/runApp1.png)

  You can see an [Alert Dialog](http://developer.android.com/reference/android/app/AlertDialog.html) with a success message.

  > Note: In case of any errors, you will see a Failure status with respective error message in that dialog.


2. Click **Ok**, then exit the application.

3. Launch the devices browser, and see that the browser's homepage has been set to **youtube.com**
  ![img](../../images/MxBrowserManagerTutorialImages/runApp2.png)


##Important Programming Tips##

1. Make the following changes in the application's `AndroidManifest.xml` file:  

	    //Include the permission for EMDK:  
        :::xml
        <uses-permission android:name="com.symbol.emdk.permission.EMDK"/>

		// Use the EMDK library:  
        :::xml
        <uses-library android:name="com.symbol.emdk"/>


---
title: Apply MX Profile Silently, Non-Blocking
layout: guide.html
product: EMDK For Android
productversion: '7.4'
---

## Overview

This guide will walk you through creating an EMDK For Android application that will use MX features introduced in EMDK for Android API to perform device configurations. MX represents a suite of Enterprise Features on top of standard, commercially available Android Open Source Project. In this tutorial we would discuss on how to apply MX configurations to the device silently without displaying any User Interface in a non blocking way.


**Problem:**

The MX features are used to perform device configurations through EMDK profiles as well as programmatically. When we are configuring any MX feature through EMDK Profile wizard we may not require User Interface. Moreover, the operation of applying EMDK profile configuration to device takes place on the UI main thread. Depending on the MX feature and complexity, it takes few seconds to apply configurations to the Symbol device. So the application's UI thread is blocked for these few seconds and user cannot interact with application's UI within that time period. Even if the user tries to interact with application's UI, the application does not respond showing "Application Not Responding" (ANR) message asking user to wait.

**Reason:**

Applying EMDK configurations is a heavy process to be performed on the main thread. The main thread has to manage UI components primarily. Hence if two heavy functionalities happen on a single main thread, it will delay response to the user actions, which may irritate user and hence stop your process, displaying "ANR".

**Solution:**
In Android, it is recommended to run only UI components on the main thread. Any other operation should always be run on a different background thread without blocking the UI main thread and completing the operation smoothly without any interruptions such as ANR. 

You can run the MX configuration on background thread in a Non-Blocking way using any one of the following methods: 

**1. Using Android Handler:**

* A [Handler](http://developer.android.com/reference/android/os/Handler.html) allows you to send and process [Message](http://developer.android.com/reference/android/os/Message.html) and Runnable objects associated with a thread's [MessageQueue](http://developer.android.com/reference/android/os/MessageQueue.html). Each Handler instance is associated with a single thread and that thread's message queue.
* There are two main uses for a Handler: (1) to schedule messages and runnables to be executed as some point in the future; and (2) to enqueue an action to be performed on a different thread than your own.
* If you are doing multiple repeated tasks, for example downloading multiple images which are to be displayed in ImageViews (like downloading thumbnails) upon download, use a task queue with Handler.
* When a process is created for your application, its main thread is dedicated to running a message queue that takes care of managing the top-level application objects (activities, broadcast receivers, etc) and any windows they create.
* You can create your own threads, and communicate back with the main application thread through a Handler.

**2. Using Android AsyncTask:**

* [AsyncTask](http://developer.android.com/reference/android/os/AsyncTask.html) enables proper and easy use of the UI thread. This class allows to perform background operations and publish results on the UI thread without having to manipulate threads and/or handlers.
* AsyncTask is designed to be a helper class around [Thread](http://developer.android.com/reference/java/lang/Thread.html) and [Handler](http://developer.android.com/reference/android/os/Handler.html) and does not constitute a generic threading framework.
* AsyncTasks should ideally be used for short operations (a few seconds at the most.) If you need to keep threads running for long periods of time, it is highly recommended you use the various APIs provided by the `java.util.concurrent` pacakge such as [Executor](http://developer.android.com/reference/java/util/concurrent/Executor.html), [ThreadPoolExecutor](http://developer.android.com/reference/java/util/concurrent/ThreadPoolExecutor.html) and [FutureTask](http://developer.android.com/reference/java/util/concurrent/FutureTask.html).


Since configuration of any MX feature requires only a few seconds, we can go with any of the two solutions. In this tutorial, we will configure MX Profile using both Handler and AsyncTask by creating dedicated Activity for each.   

So far we know how to configure Profile in a Non-Blocking way. Sometimes we don't need User Interface while configuring an MX profile. Hence, We used the word "Silently" to indicate that there won't be any User Interface in this tutorial. Although, we need UI thread to trigger MX configuration on the background thread. So we will launch the application and quickly close it after triggering MX configuration on the background thread.

Even if you have User Interface in your application, you can interact with it as UI will not be blocked, because the profile will be applied on a background thread.

> Note: We are closing the application immediately because we are not notifying user with any UI as well as the configuration is an independent process that we are just triggering from our application and does not require UI. 

So let us create a tutorial and Configure the MX App Manager Profile to install an application silently in a Non-Blocking way.      
   
###Prerequisites

* Download APK file for the application to install from [here](https://github.com/Zebra/examples-emdk/archive/AllInstalledApps.zip)
* Once downloaded, copy the APK file to SD Card of the device. 

For more information about setting up the EMDK please see the [EMDK Setup Guide](/emdk-for-android/7-4/guide/setup/).

## Creating The Project

> Note: Provide "ApplyProfileSilentlyTutorial" as the project name for this tutorial and "HandlerActivity" as the activity name while creating the project.

Start by creating a new Android Studio [project](/emdk-for-android/7-4/tutorial/tutCreateProjectAndroidStudio).

## Adding The App Manager Profile Feature
1. Click [here](/emdk-for-android/7-4/tutorial/tutAddProfileManagerFeature) to see how to add a specific feature to the Profile Manager.

2. Provide "AppManagerProfile" as the Profile Name for this tutorial.

	> Note: You can provide any Profile Name but make sure to access it with the similar name in the Android code.  
  
3. Now, you can see all these MX features on the left hand side of the Profile Editor window. We want to install the downloaded APK file that is residing in the device's SD Card using App Manager. So select the "App Manager" feature from the list and click "Right Arrow".

    ![img](../../images/ApplyProfileSilentlyTutorialImages/app_manager_feature.jpg)

    Provide some Name in the "Name" field to modify this feature programmatically (Ex. MyAppManager).

    > Note: You can also keep the "Name" field empty.

    Since we want to install an application, keep the Action in drop-down as "Install". 
    Provide the path and name of the Android application APK file within the device file system (Ex. /storage/sdcard1/AllInstalledApps.apk).  

    ![img](../../images/ApplyProfileSilentlyTutorialImages/app_manager_details.jpg)   
 
4. Click Apply to apply the settings we provided    
  
    ![img](../../images/ApplyProfileSilentlyTutorialImages/app_manager_profile_created.jpg)

5. Click Finish and your App Manager profile for installing an application is created.

    ![img](../../images/ApplyProfileSilentlyTutorialImages/app_profile_created.jpg) 
  
6. Click "Close".

    >Note:  
    >Now the "EMDKConfig.xml" is created under "\assets" folder. This file will contain a definition of all of your profiles that you create. 
  
7. You can inspect the "EMDKConfig.xml" created under "\assets" folder to see it is reflecting the changes made to the parameters via EMDK Profile Manager GUI earlier.  However, it is advised that this file not be manually updated and only be controlled via the Profile Manager.

    ![img](../../images/ApplyProfileSilentlyTutorialImages/emdk_config_file_entries.jpg)    

## Enabling Android Permissions
1. Modify the Application's Manifest.xml to use the EMDK library and to set permission for the EMDK.
  
    ![img](../../images/ApplyProfileSilentlyTutorialImages/manifest_file.jpg)

    You must first enable permissions for 'com.symbol.emdk.permission.EMDK':  
   
        :::xml
        <uses-permission android:name="com.symbol.emdk.permission.EMDK"/> 

    Then you must enable the library:  
      
        :::xml
        <uses-library android:name="com.symbol.emdk"/>

    When done, your manifest.xml should look like:

    ![img](../../images/ApplyProfileSilentlyTutorialImages/manifest_permissions_added.jpg) 

##Adding Some Code

###Using Handler:    
1. Now we will start to add some code in the "HandlerActivity" that we created to apply the App Manager profile to the device on a background thread in a Non-Blocking way using Handler. We will see how to apply this profile silently without UI later in this tutorial.  

    First you must add references to the libraries:  
    
        :::java
        import com.symbol.emdk.*;  
        import com.symbol.emdk.EMDKManager.EMDKListener;     

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

    We will now create some global variables to hold the profile name as well as instance objects of EMDKManager and ProfileManager. These variables would be used throughout the code. 

    >Note:
    >Verify the Profile name in the code with the one created in the Profile Manager. They both should be identical.    
    
        :::java
        // Assign the profile name used in EMDKConfig.xml
	    private String profileName = "AppManagerProfile";

	    // Declare a variable to store ProfileManager object
	    private ProfileManager profileManager = null;

	    // Declare a variable to store EMDKManager object
	    private EMDKManager emdkManager = null;

    Since we don't want any UI in this application, remove the line `setContentView(R.layout.activity_handler);` from the `onCreate` method.  
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
     
     ![img](../../images/ApplyProfileSilentlyTutorialImages/on_create_added.jpg) 
          
2. Now we need to use the `onOpened` method to get a reference to the EMDKManager. The EMDKListener interface will trigger this event when the EMDK is ready to be used. The EMDKListener interface must be implemented in order to get a reference to the EMDKManager APIs. This event will pass the EMDKManager instance and we assign it to the global variable `emdkManager` that we created in the previous steps. We then use that instance object to get an instance of `profileManager` and assign it to the global variable `profileManager`. This is how we will interface with the APIs in the rest of the code:

    > Note: 
    > Rename the argument of `onOpened` method from `arg0` to `emdkManager`  

        :::java
        // This callback will be issued when the EMDK is ready to use.
		this.emdkManager = emdkManager;

		// Get the ProfileManager object to process the profiles
		profileManager = (ProfileManager) emdkManager
				.getInstance(EMDKManager.FEATURE_TYPE.PROFILE);

    Create a Runnable instance in `onOpened` method, which will perform App Manager's install configuration on background thread. 

        :::java
        final Message msg = mHandler.obtainMessage();

		// Create Runnable instance to Apply MX Profile on background thread
		Thread background = new Thread(new Runnable() {

			@Override
			public void run() {
				msg.obj = applyProfile(profileName);
				if (msg.obj != null)
					// Send the result in message from background to UI
					// thread for processing.
					mHandler.sendMessage(msg);

			}
		});
		// Start the background Thread
		background.start(); 

    Ignore the errors for the time being. You can see, the background thread calls `applyProfile` method that applies the MX App Manager profile configuration to the device on background thread we created. The parameter `msg.obj` contains result of the background thread operation that we need to pass on UI thread. Hence we will create a Handler in next step and pass the result parameter in Handler in a Message using `msg.obj`.

    Since we don't want any UI for this application, we will call the `finish()` method after sending message to Handler. This will immediately close the application as soon as `applyProfile` method is triggered on the background thread through Runnable.

        :::java
        // Closes the Activity which in turn closes the Application as the
		// application has only one Activity.
		finish();

    Your complete onOpened method should now look like this:
    
    ![img](../../images/ApplyProfileSilentlyTutorialImages/on_opened_method.jpg)
 

3. Create a Handler and retrieve the Result parameter from the Message by type casting `msg.obj` to `String` in `handleMessage` method of Handler.

        :::java
        // Handler that receives messages from background thread to populate on UI
	    // thread.
	    private Handler mHandler = new Handler() {
		  public void handleMessage(Message msg) {
			// Retrieve the result string from message using ((String) msg.obj)
			// and Populate it on UI.
			// Since we don't have UI in this tutorial, we will not use this
			// result string
		  };
	    };

    As you can see the `handleMessage` contains the Message parameter we passed from background thread. The `handleMessage` method can retrieve the `String` result parameter from Message by typecasting `msg.obj` to `String` using `((String) msg.obj)`. Now the user can display this result parameter on the main thread.

    The Handler created looks like::
    
    ![img](../../images/ApplyProfileSilentlyTutorialImages/handler_created.jpg)  

    > Note: We will not be using this result parameter as we don't have UI in this tutorial. But it could be helpful to display result for the applications that have UI.
    
4. Now that we have a reference to ProfleManager, we use it to install and activate the profile we built earlier. This is done using the `processProfile` method. We will now create a method that will use `processProfile` to apply the App Manager profile that we created using EMDK Wizard (Ex. "applyProfile").

        :::java
        private String applyProfile(String profileName) {
		try {
			// Call process profile to modify the profile of specified profile
			// name
			EMDKResults results = profileManager.processProfile(profileName,
					ProfileManager.PROFILE_FLAG.SET, (String[]) null);

			// Check the return status of processProfile
			if (results.statusCode == EMDKResults.STATUS_CODE.CHECK_XML) {

				return "Applying '" + profileName + "' was successful.";

			} else {
				return "Applying '" + profileName + "' failed.";
			}

		  } catch (Exception ex) {

			return ex.getMessage();
		  }
	    }

    Your `applyProfile` method should look like:
    
    ![img](../../images/ApplyProfileSilentlyTutorialImages/apply_profile.jpg)

5. Now let's override the "onDestroy" method so we can release the EMDKManager resources:  

        :::java
        @Override
	    protected void onDestroy() {
		 // TODO Auto-generated method stub
		 super.onDestroy();
		
		 //Clean up the objects created by EMDK manager
		 emdkManager.release();
	    } 

    Your onDestroy method should now look like this:  

    ![img](../../images/ApplyProfileSilentlyTutorialImages/on_destroy_method.jpg)

6. Assign Null to EMDK objects in the "onClosed" method.

        :::java
        @Override
	    public void onClosed() {
		 // TODO Auto-generated method stub

		 // Assign null to the objects
		 emdkManager = null;
		 profileManager = null;
	    }

7. So far we have done with the coding that will use Runnable and Handler to apply App Manager's install configuration on background thread. It will also close the application immediately using `finish()` method once background thread starts its execution to apply configurations silently. But the app will still be visible to the user for that small period of time (few milliseconds) before it is closed. We want to avoid UI as it may not require for many MX configurations. So We will make the UI invisible (basically transparent) for those few milliseconds by applying [Android Styles](http://developer.android.com/guide/topics/ui/themes.html) to the `HandlerActivity`. 

    Before applying, we need to create a custom style that will make the UI transparent. So go to res -> values -> styles.xml of "ApplyProfileSilentlyTutorial" tutorial and write following Android style in `<resources>` tag that will make background transparent.

        :::xml
        <style name="Transparent" parent="@android:style/Theme">
    	  <item name="android:windowBackground">@android:color/transparent</item>
    	  <item name="android:windowIsTranslucent">true</item>
    	  <item name="android:windowIsFloating">true</item>
    	  <item name="android:windowNoTitle">true</item>
    	  <item name="android:windowContentOverlay">@null</item>
    	  <item name="android:backgroundDimEnabled">false</item>
		</style>

    So the code for applying styles in res->values->styles.xml looks like:

    ![img](../../images/ApplyProfileSilentlyTutorialImages/styles.jpg)

8. We will now include this style in HandlerActivity to make it transparent. So go to `AndroidManifest.xml` and add the following code in the `<activity>` tag for "HandlerActivity".

        :::xml
        android:theme="@style/Transparent"

    This will apply the styles to "HandlerActivity" and make it transparent for those few milliseconds when this Activity is displayed to the user, which will resolve the purpose of calling it Applying Profile **Silently**.

    So the Manifest file looks like: looks like:
    ![img](../../images/ApplyProfileSilentlyTutorialImages/handler_styles.jpg)
 
9. This completes coding and configuration part that will allow us to apply App Manager's install configuration silently in a Non-Blocking way using Handler. If you want, you can run the Application now to test but we are now going to see how the same thing is done using our second option **AsyncTask**.  

###Using AsyncTask:

1. We will create another activity (Ex. AsyncTaskActivity) and apply App Manager's install configuration silently in a Non-Blocking way using [AsyncTask](http://developer.android.com/reference/android/os/AsyncTask.html).

2. Select the project and add a new Empty with name "AsyncTaskActivity".

3. Now we will start to add some code in the "AsyncTaskActivity" that we created to apply App Manager profile to the device on a background thread in a Non-Blocking way using AsyncTask. 

    Applying the profile silently without UI is same as we did for HandlerActivity.

    > Note: We will use the same earlier transparent styles in "AsyncTaskActivity" to make the Activity transparent, which will resolve the purpose of calling it Applying Profile **Silently**.

4. Follow the step 1 of Adding Some Code using Handlers.

    Add two more global variables.

        :::java
        // Contains XML while setting a profile programmatically. It can be Null.
        private String[] modifyData;

        // Contains the status of processProfile operation.    	    
        private EMDKResults results;

    The code should now look like:

    ![img](../../images/ApplyProfileSilentlyTutorialImages/async_oncreate_added.jpg)

5. We will now create an inner class named "ConfigureProfile" in "AsyncTaskActivity" that will extend `AsyncTask`. [AsyncTask](http://developer.android.com/reference/android/os/AsyncTask.html) will run the operation on a background thread without blocking UI thread. It can also return the processing result on UI thread if you want.

        :::java
        // Class extending AsyncTask that runs operations in a background thread
	    // without blocking UI thread. It returns result on UI thread once the
	    // operation is completed.
	    private class ConfigureProfile extends AsyncTask<String, Integer, String> {
		  // Operation to be performed on background thread
		  @Override
		  protected String doInBackground(String... params) {
			modifyData = new String[1];
			// Call processPrfoile with profile name and SET flag to create the
			// profile. The modifyData can be null.
			results = profileManager.processProfile(profileName,
					ProfileManager.PROFILE_FLAG.SET, modifyData);
			return null;
		  }

		  // Return result to the UI Thread
		  @Override
		  protected void onPostExecute(String result) {
			// Display Success or Failure Message based on result
			// Check the return status of processProfile
			if (results.statusCode == EMDKResults.STATUS_CODE.CHECK_XML) {

				// Success

			} else {

				// Failure
			}

		  }

		  // Method to implement actions before the AsynTask executes.
		  @Override
		  protected void onPreExecute() {

		  }

		  // Method to display updates of operation
		  @Override
		  protected void onProgressUpdate(Integer... progress) {
			
		  }
	    }

    The `doInBackground` method applies the App Manager's install configurations on background thread using `processProfile` method.

    The `onPostExecute` is used to return the result back to the UI thread when the operation on background thread is done.  

    > Note: We won't return any result on UI thread as we want to apply profile silently in this tutorial.

    The code for AsyncTask should look like:

    ![img](../../images/ApplyProfileSilentlyTutorialImages/async_task_class.jpg)

6. Once the EMDK is ready, we will get the `ProfileManager` object to process the profile in `onOpened` method.
    
    > Note: 
    > Rename the argument of `onOpened` method from `arg0` to `emdkManager`

        :::java
        this.emdkManager = emdkManager;

		// Get the ProfileManager object to process the profiles
		profileManager = (ProfileManager) emdkManager
				.getInstance(EMDKManager.FEATURE_TYPE.PROFILE);

     After that we will execute the AsyncTask that by creating instance of it and calling execute method. This will start the process of applying profile on background thread.

    Since we don't want any UI for this application, we will call the `finish()` method immediately to close the application, once the AsyncTask starts executing on background thread. 

        :::java
        if (profileManager != null) {
			// Start EMDK process profile operation on the background thread.
			new ConfigureProfile().execute("");
            finish();

		}

    So the complete `onOpened` method looks like:

    ![img](../../images/ApplyProfileSilentlyTutorialImages/async_on_opened_method.jpg)

7. We will now write `onDestroy` and `onClosed` methods by adding the same code that we added in the Handler Activity.

    So `onDestroy` and `onClosed` methods look like:

    ![img](../../images/ApplyProfileSilentlyTutorialImages/on_closed_destroyed_async.jpg)

8. But the app will still be visible to the user for small period of time (few milliseconds) before it is closed similar to the case of Handler. We want to avoid UI as it may not require for many MX configurations. So We will make the UI invisible (basically transparent) for those few milliseconds by applying [Android Styles](http://developer.android.com/guide/topics/ui/themes.html) to the `AsyncTaskActivity`.

    We have already created a transparent style earlier in this tutorial while applying profile using Handler. We will now  simply include that style in "AsyncTaskActivity" to make it transparent. So go to `AndroidManifest.xml` and add the following code in the `<activity>` tag for "AsyncTaskActivity".

        :::xml
        android:theme="@style/Transparent"

    This will apply the styles to "AsyncTaskActivity" and make it transparent for those few milliseconds when this Activity is displayed to the user, which will resolve the purpose of calling it Applying Profile **Silently**.

    So the Manifest file looks like: looks like:
    ![img](../../images/ApplyProfileSilentlyTutorialImages/async_styles.jpg)

9. This completes coding and configuration part that will allow us to apply App Manager's install configuration silently in a Non-Blocking way using AsyncTask.

10. So far, We have created two different activities that perform the same operation of applying App Manager's install configuration silently in a Non-Blocking way, but using two different ways viz. Handler and AsyncTask respectively.

    Now, Let us run the application. 
                   
## Running the Application

1. Connect the device to a USB port. 

    > Note:   
    > Make sure the device is in USB debug.

    Before running the application, change the lable name to application name for "AsyncTaskActivity" in the `<activity>` tag of AndroidManifest.xml" file by using following code.

        :::xml
        android:label="@string/app_name"

    So the Manifest file should now look like:

    ![img](../../images/ApplyProfileSilentlyTutorialImages/change_lable_name.jpg)

    > Note: It is not necessary to change the label name. But if we don't change, it will display the "AsyncTaskActivity" name instead of application name in the device's applications grid, when we run the application using AsyncTask.
   
    Now when we run the application, it will launch "HandlerActivity" because currently that is the Launcher Activity in "AndroidManifest.xml" file. 

    ![img](../../images/ApplyProfileSilentlyTutorialImages/handler_manifest_launcher.jpg) 

    > Note: Make sure that "AllInstalledApps" is not installed on the device before running the app, else the install feature will give error.  

2. Run the application (Uses Handler).

    You will not see any User Interface. The application applied the App Manager's install configuration on background thread silently using Handler and installed the "AllInstalledApps" application whose APK we had provided in the wizard.

    ![img](../../images/ApplyProfileSilentlyTutorialImages/handler_success.png)
  
3. Now we will run the application using AsyncTask. We need to set "AsyncTaskActivity" as the Launcher Activity to start the application with "AsyncTaskActivity". So remove the "Intent-Filter" code from "HandlerActivity" and add to the "AsyncTaskActivity" in the "AndroidManifest.xml" file.

        :::xml
        <intent-filter>
           <action android:name="android.intent.action.MAIN" />

           <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>

    So the AndroidManifest.xml file now looks like:

    ![img](../../images/ApplyProfileSilentlyTutorialImages/async_manifest_launcher.jpg)

    Before running the application using "AsyncTask", uninstall the "AllInstalledApps" application that we installed using Handler just now.

    > Note: Make sure that "AllInstalledApps" is not installed on the device before running the app, else the install feature will give error. 

4. Run the application (Uses AsyncTask).

    You will not see any User Interface. The application applied the App Manager's install configuration on background thread silently using AsyncTask and installed the "AllInstalledApps" application whose APK we had provided in the wizard.  

    ![img](../../images/ApplyProfileSilentlyTutorialImages/handler_success.png)

    > Note: While running the application using both Handler and AsyncTask, you can interact with the User Interface while profile settings are being applied on background thread. It won't hang the User Interface this time.

    So this is how we can use both Handler and AsyncTask to apply profile settings on background thread in a Non-Blocking way with the help of Android styles to execute it silently without UI.

##Important Programming Tips##

1. It is required to do the following changes in the application's AndroidManifest.xml:  
  
    >Note:
    >* Include the permission for EMDK:  
    
        :::xml
        <uses-permission android:name="com.symbol.emdk.permission.EMDK"/>
    
	>Note:
    >* Use the EMDK library:  
    
        :::xml
        <uses-library android:name="com.symbol.emdk"/>
   
2. Use DataWedge v1.7.12 or higher version to test the `ProfileManager.processProfile()` method for DataWedge profiles.




















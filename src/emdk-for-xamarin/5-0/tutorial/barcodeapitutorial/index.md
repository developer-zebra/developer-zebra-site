---
title: Basic Scanning Tutorial using Barcode API
layout: guide.html
product: EMDK For Xamarin
productversion: '4.0'
---

This guide will walk you through creating an EMDK For Xamarin application that will use Barcode/Scanning APIs  to perform Scanning operations on your Symbol Android devices without using Profile Wizard. The API uses Barcode Manager, which is the primary object to access barcode scanning feature.


##Create a new project
When creating a project for this tutorial use the project name **BasicScanningTutorial**

Follow this [guide](/emdk-for-xamarin/4-0/guide/newprojectvisualstudio) to create a new project in Visual Studio.

Follow this [guide](/emdk-for-xamarin/4-0/guide/newprojectxamarinstudio) to create a new project in Xamarin Studio.

##Add Symbol EMDK Component
Follow this [guide](/emdk-for-xamarin/4-0/guide/component/install) to add the needed component you your project.



##Setup AndroidManifest.xml
In order to use the Symbol EMDK for Xamarin in your project we first need to add a few items to the AndroidManifest.xml in your project.

**Perform the following steps to setup your AndroidManifest**

1. Open the AndroidManifest.xml in your project from the **Solution pane** > "Project Name" > Properties
2. Replace the `<uses-sdk />` line with  `<uses-sdk android:minSdkVersion="19" />`
3. Add a new android permission directly below the `uses-sdk` line.

        :::xml
        <uses-permission android:name="com.symbol.emdk.permission.EMDK" />

4. Now add a `uses-library` tag inside the `application` node.

        :::xml
        <uses-library android:name="com.symbol.emdk" />


**Your completed AndroidManifest.xml should resemble the following:**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>
    <manifest xmlns:android="http://schemas.android.com/apk/res/android" package="BasicScanningTutorial.BasicScanningTutorial" android:versionCode="1" android:versionName="1.0">
      <uses-sdk android:minSdkVersion="19" />
      <uses-permission android:name="com.symbol.emdk.permission.EMDK" />
    	<application android:label="BasicScanningTutorial" android:icon="@drawable/Icon">
        <uses-library android:name="com.symbol.emdk" />
      </application>
    </manifest>


##Setup User Interface
Lets begin by adding some new strings to our Strings.xml Resource file. The Strings we add will be use as static text for our TextView UI labels.

1. Open the Strings.xml file by selecting **Solution pane** > "Project Name" > Resources > values > Strings.xml
2. Add the following xml inside the **resources** node.

        :::xml
        <string name="statusView_text">Status:</string>
        <string name="dataView_text">Data:</string>

Your completed Strings.xml should resemble the following:

    :::xml
    <?xml version="1.0" encoding="utf-8"?>
    <resources>
        <string name="Hello">Hello World, Click Me!</string>
        <string name="ApplicationName">BasicScanningTutorial</string>

        <string name="statusView_text">Status:</string>
        <string name="dataView_text">Data:</string>
    </resources>

Next we will add new Resource file that will hold a few Dimension values that will be used to properly position our UI elements.

1. In the **Solution pane**, expand the **Resources** folder, right click on the **values** folder, and select **Add** > **New Item**.

2. In the center pane of the **Add New Item** dialog, select XML File.
3. Enter Dimens.xml in the **Name:** field, then click **Add**.
4. Now open the new Dimens.xml file, add the following xml.

        :::xml
        <resources>
          <dimen name="activity_horizontal_margin">16dp</dimen>
          <dimen name="activity_vertical_margin">16dp</dimen>
        </resources>

Your completed Dimens.xml should resemble the following

      :::xml
      <?xml version="1.0" encoding="utf-8" ?>
      <resources>
        <dimen name="activity_horizontal_margin">16dp</dimen>
        <dimen name="activity_vertical_margin">16dp</dimen>
      </resources>



Now lets build our User Interface by opening our main layout file and modifying the underlying XML.

1. Open our main layout by selecting **Solution pane** > "Project Name" > Resources > layout > Main.axml
2. Wait for the layout to load in the Form Builder.
3. Switch from **Design view** to **Source view** by selecting the **Source Tab** in the bottom left corner of the **Form Builder**
5. Select and delete all xml in the source view.
6. Now add the following xml to the source view:  

        :::xml
        <?xml version="1.0" encoding="utf-8"?>
        <RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
            xmlns:tools="http://schemas.android.com/tools"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:paddingLeft="@dimen/activity_horizontal_margin"
            android:paddingRight="@dimen/activity_horizontal_margin"
            android:paddingTop="@dimen/activity_vertical_margin"
            android:paddingBottom="@dimen/activity_vertical_margin"
            tools:context=".MainActivity">
          <TextView
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:text="@string/statusView_text"
              android:layout_below="@+id/textView"
              android:layout_marginTop="20dp"
              android:id="@+id/statusViewTitle" />
          <TextView
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:text=""
              android:layout_below="@+id/statusViewTitle"
              android:id="@+id/statusView" />
          <TextView
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:text="@string/dataView_text"
              android:layout_below="@+id/statusView"
              android:id="@+id/DataViewTitle" />
          <ScrollView
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:id="@+id/scrollView2"
              android:layout_alignParentLeft="true"
              android:layout_alignParentStart="true"
              android:layout_alignParentRight="true"
              android:layout_alignParentEnd="true"
              android:layout_alignParentBottom="true"
              android:layout_below="@+id/DataViewTitle">
            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_below="@+id/scrollView2"
                android:id="@+id/DataView" />
          </ScrollView>
        </RelativeLayout>


7. Now switch back to **Design view** to see our completed User Interface.


##Add Some Code
Now lets add some code to our project.

1. Start by opening up our MainActivity, select **Solution pane** > "Project Name" > MainActivity.cs
2. Add a `using` directive that references the Symbol EMDK for Xamarin

        :::cs
        using Symbol.XamarinEMDK;
        using Symbol.XamarinEMDK.Barcode;

3. Now lets add some global variables to the MainActivity class for later use.

        :::cs
        private TextView statusView = null;
        private TextView dataView = null;

        EMDKManager emdkManager = null;
        BarcodeManager barcodeManager = null;
        Scanner scanner = null;


4. When our OnCreate Activity lifecycle method is called, we call the Activity's SetContentVeiw() method, which will pull in the layout we created previously in Main.axml. We now need to initialize our User Interface global variables so they can be referenced anywhere in the MainActivity class. We will do that inside our OnCreate method just below where SetContentVeiw() is called.

            :::cs
            statusView = FindViewById<TextView>(Resource.Id.statusView);
            dataView = FindViewById<TextView>(Resource.Id.DataView);



5. Also in our OnCreate method, we will call the EMDKManager.GetEMDKManger() method to start the EMDKManger initialization process. Then we will check the result of the method and alert the user by updating the statusView TextView.

            :::cs
            EMDKResults results = EMDKManager.GetEMDKManager(Android.App.Application.Context, this);
            if (results.StatusCode != EMDKResults.STATUS_CODE.Success)
            {
                statusView.Text = "Status: EMDKManager object creation failed ...";
            }
            else
            {
                statusView.Text = "Status: EMDKManager object creation succeeded ...";
            }

6. In step 5, we updated the statusView.Text property directly, which is safe to do since we are doing so on the UI thread. Later in this tutorial we will be receiving information off of the UI tread, and we will want to update the statusVeiw and dataView from that background thread. In order to do this safely, we will implement a few helper methods to check which thread we are on, and perform the proper thread safe method to update the Text property of our UI element.

  Add the following helper methods to your Activity class

        :::cs

        void displayStatus(String status)
        {

            if (Looper.MainLooper.Thread == Java.Lang.Thread.CurrentThread())
            {
                statusView.Text = status;
            }
            else
            {
                RunOnUiThread(() => statusView.Text = status);
            }
        }


        void displaydata(string data)
        {

            if (Looper.MainLooper.Thread == Java.Lang.Thread.CurrentThread())
            {
                dataView.Text += (data + "\n");
            }
            else
            {
                RunOnUiThread(() => dataView.Text += data + "\n");
            }
        }






7. Next we will need to add and interface to our Activity that notifies the client ( MainActivity ) that the EMDKManager object is ready to use `OnOpened` or is no longer available for use `OnClosed`.
  1. Add the the interface to our MainActivity

            :::cs
            public class MainActivity : Activity, EMDKManager.IEMDKListener

  2. Add the IEMDKListener methods **OnOpened** and **OnClosed** to the MainActivity class

            :::cs
            void EMDKManager.IEMDKListener.OnOpened(EMDKManager emdkManager)
            {

            }

            void EMDKManager.IEMDKListener.OnClosed()
            {

            }

  3. When the OnOpened method is called, an instance of the EMDKManger is passed as its only argument. We will
  use this instance of the EMDKManger to initialize our global EMDKManager object. We will also alert the user that EMDKManager was successfully Opened and is ready for use. This is also a good time to initialize the barcode scanner by calling a helper method **InitScanner** that we will cover later in this tutorial.

            :::cs
            void EMDKManager.IEMDKListener.OnOpened(EMDKManager emdkManager)
            {
                statusView.Text = "Status: EMDK Opened successfully ...";

                this.emdkManager = emdkManager;

                InitScanner();
            }

  4. We also need to make sure we clean up the EMDKManger references when they can no longer be used. We will do this in the OnClosed method.

            :::cs
            void EMDKManager.IEMDKListener.OnClosed()
            {
                statusView.Text = "Status: EMDK Open failed unexpectedly. ";

                if (emdkManager != null)
                {
                    emdkManager.Release();
                    emdkManager = null;
                }
            }

8. During the lifecycle of our application we will need to initialize the scanner when our application resumes and de-initialize the scanner to insure that the scanner hardware is available to other applications if our application is not in the foreground. To simplify the process, we will encapsulate all scanner initialization code into a method called **InitScanner** and all of the de-initialization code into method called **DeinitScanner**.

  ###InitScanner
  In the **InitScanner** method we insure that our emdkManager object is not null, and then if our barcodeManager object has not already been initialized, we retrieve an instance of the barcode manager from the emdkManager by calling emdkManager.GetInstance() and pass a Barcode Feature type as an argument.

        :::cs
        barcodeManager = (BarcodeManager)emdkManager.GetInstance(EMDKManager.FEATURE_TYPE.Barcode);

  Once our barcodeManger object is initialized, we can initialize our scanner object by calling barcodeManger.GetDevice().

        :::cs
        scanner = barcodeManager.GetDevice(BarcodeManager.DeviceIdentifier.Default);

  The GetDevice method takes a DeviceIdentifier type as an argument.  By specifying **Default**, we tell the barcodeManager Object what we want a scanner instance of the hardware that is default for a given device.  For instance, a TC55 that has laser hardware, **Defualt** would return an laser scanner instance.



  Now that we have our scanner object instance, we can attach some event handlers that will be used to asynchronously receive scanner data and status messages.  At this time we will just attach the handlers and then we will cover the handlers in depth later in this tutorial.


        :::cs
        //Attahch the Data Event handler to get the data callbacks.
        scanner.Data += scanner_Data;

        //Attach Scanner Status Event to get the status callbacks.
        scanner.Status += scanner_Status;


  Now we can Enable enable and configure our scanner instance, by calling **scanner.Enable()**, and then retrieving the scanners current config with **scanner.GetConfig**. We will then modify the config and set the scanner's configuration to our modified version.


        :::cs
        scanner.Enable();

        //EMDK: Configure the scanner settings
        ScannerConfig config = scanner.GetConfig();
        config.SkipOnUnsupported = ScannerConfig.SkipOnUnSupported.None;
        config.ScanParams.DecodeLEDFeedback = true;
        config.ReaderParams.ReaderSpecific.ImagerSpecific.PickList = ScannerConfig.PickList.Enabled;
        config.DecoderParams.Code39.Enabled = true;
        config.DecoderParams.Code128.Enabled = false;
        scanner.SetConfig(config);

  Your completed **InitScanner()** should resemble the following

        :::cs
        void InitScanner()
        {
            if (emdkManager != null)
            {

                if (barcodeManager == null)
                {
                    try
                    {

                        //Get the feature object such as BarcodeManager object for accessing the feature.
                        barcodeManager = (BarcodeManager)emdkManager.GetInstance(EMDKManager.FEATURE_TYPE.Barcode);

                        scanner = barcodeManager.GetDevice(BarcodeManager.DeviceIdentifier.Default);

                        if (scanner != null)
                        {

                            //Attahch the Data Event handler to get the data callbacks.
                            scanner.Data += scanner_Data;

                            //Attach Scanner Status Event to get the status callbacks.
                            scanner.Status += scanner_Status;

                            scanner.Enable();

                            //EMDK: Configure the scanner settings
                            ScannerConfig config = scanner.GetConfig();
                            config.SkipOnUnsupported = ScannerConfig.SkipOnUnSupported.None;
                            config.ScanParams.DecodeLEDFeedback = true;
                            config.ReaderParams.ReaderSpecific.ImagerSpecific.PickList = ScannerConfig.PickList.Enabled;
                            config.DecoderParams.Code39.Enabled = true;
                            config.DecoderParams.Code128.Enabled = false;
                            scanner.SetConfig(config);

                        }
                        else
                        {
                            displayStatus("Failed to enable scanner.\n");
                        }
                    }
                    catch (ScannerException e)
                    {
                        displayStatus("Error: " + e.Message);
                    }
                    catch (Exception ex)
                    {
                        displayStatus("Error: " + ex.Message);
                    }
                }
            }
        }


  ###DeinitScanner
  In the **DeinitScanner** method we will detach our scanner data and status events and disable the scanner.

        :::cs
        scanner.Data -= scanner_Data;
        scanner.Status -= scanner_Status;

        scanner.Disable();

  Then we will clean up our used barcodeManager resources my telling the emdkManger to release the barcodeManager.

        :::cs
        emdkManager.Release(EMDKManager.FEATURE_TYPE.Barcode);


  Your completed **DeinitScanner** should resemble the following

        :::cs
        void DeinitScanner()
        {
            if (emdkManager != null)
            {

                if (scanner != null) {
                    try {

                        scanner.Data -= scanner_Data;
                        scanner.Status -= scanner_Status;

                        scanner.Disable();


                    } catch (ScannerException e) {
                        Log.Debug(this.Class.SimpleName, "Exception:" + e.Result.Description);
                    }
                }

                if (barcodeManager != null)
                {
                    emdkManager.Release(EMDKManager.FEATURE_TYPE.Barcode);
                }
                barcodeManager = null;
                scanner = null;
            }
        }


  ###scanner_Data event handler
  As mention earlier in this tutorial, we need to implement an event handler to asynchronously receive scanner data. When the scanner_Data event is called an DataEventArgs will be passed. We will need to pull the ScanDataCollection from the DataEventArgs and then iterate through ScanDataCollection appending the data to our dataView

        :::cs
        void scanner_Data(object sender, Scanner.DataEventArgs e)
        {
            ScanDataCollection scanDataCollection = e.P0;

            if ((scanDataCollection != null) && (scanDataCollection.Result == ScannerResults.Success))
            {
                IList<ScanDataCollection.ScanData> scanData = scanDataCollection.GetScanData();

                foreach (ScanDataCollection.ScanData data in scanData)
                {
                    displaydata(data.LabelType + " : " + data.Data);
                }
            }
        }

  ###scanner_Status event handler
  When the scanner_Status event is called an StatusEventArgs will be passed. Will need to pull the Scanner State from the EventArgs and then update the statusView with the proper message based on the scanner state.

        :::cs
        void scanner_Status(object sender, Scanner.StatusEventArgs e)
        {
            String statusStr = "";

            //EMDK: The status will be returned on multiple cases. Check the state and take the action.
            StatusData.ScannerStates state = e.P0.State;

            if (state == StatusData.ScannerStates.Idle)
            {
                statusStr = "Scanner is idle and ready to submit read.";
                try
                {
                    if (scanner.IsEnabled && !scanner.IsReadPending)
                    {
                        scanner.Read();
                    }
                }
                catch (ScannerException e1)
                {
                    statusStr = e1.Message;
                }
            }
            if (state == StatusData.ScannerStates.Waiting)
            {
                statusStr = "Waiting for Trigger Press to scan";
            }
            if (state == StatusData.ScannerStates.Scanning)
            {
                statusStr = "Scanning in progress...";
            }
            if (state == StatusData.ScannerStates.Disabled)
            {
                statusStr = "Scanner disabled";
            }
            if (state == StatusData.ScannerStates.Error)
            {
                statusStr = "Error occurred during scanning";

            }
            displayStatus(statusStr);
        }



9. Lastly we need to make sure we handle the lifecycle methods in our application by overriding OnPause and OnResume to properly handle our application going to the background and coming back to the foreground. We also need to clean up references EMDKManager before our application exits by overriding OnDestroy.

        :::cs
        protected override void OnResume()
        {
            base.OnResume();
            InitScanner();
        }


        protected override void OnPause()
        {
            base.OnPause();
            DeinitScanner();
        }



        protected override void OnDestroy()
        {
            base.OnDestroy();

            //Clean up the emdkManager
            if (emdkManager != null)
            {
                //EMDK: Release the EMDK manager object
                emdkManager.Release();
                emdkManager = null;
            }
        }

##Running the application
Now that we are finished with our Barcode API Application, lets see how it runs.

> NOTE: Make sure the device is connected to your development system via a USB cable, and that Developer Mode/USB debugging is enabled on the device.

1. Start the application by pressing the "Play" button on the toolbar in your IDE.
   The IDE will install the new application on the device and run it.
3. If all goes well, you should eventually see your application start and the status message change to `Scanner is idle and ready to submit read.`
4. Now point the scanner at a barcode and press the `Hardware Scan Trigger`.
5. The Barcode type and data should be appended to dataView and the Status Message should now read `Waiting for Trigger Press to scan` indicating that it is ready to scan again.



<!--##Download the Source
The project source to this tutorial can be [downloaded (Internet Connection Required)](https://github.com/EMDK/xamarin-samples/archive/BasicScanningTutorial.zip).-->















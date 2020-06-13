---
title: Your First EMDK For Xamarin Application
layout: guide.html
product: EMDK For Xamarin
productversion: '7.0'
---

This document contains step by step instructions for using EMDK Api's in a new Xamarin application from scratch. It covers adding the component to the project, using profile manager, using basic APIs


##Create a new project
When creating a project for this tutorial use the project name **GettingStartedTutorial**

Follow this [guide](/emdk-for-xamarin/6-0/guide/newprojectvisualstudio) to create a new project in Visual Studio.

Follow this [guide](/emdk-for-xamarin/6-0/guide/newprojectxamarinstudio) to create a new project in Xamarin Studio.

##Add Symbol EMDK Component
Follow this [guide](/emdk-for-xamarin/6-0/guide/component/install) to add the needed component you your project.

##Build a Profile
In this project we will perform a simple task to demonstrate how to use the ProfileManager Wizard to create a profile
and then submit that profile via the ProfileManager API.

Lets begin by creating a Profile that will set the Date and Time on our device.

1. Open the ProfileManger Wizard by selecting EMDK > Profile Manager
2. Create a new Profile by clicking the `Create` Button.
3. In the Create a New Profile Dialog, enter **ClockProfile** as the Name, and then click `Create`
4. Once the Profile Editor loads, select the Clock feature in the Available Features pane, and then click the `Right Arrow` (greater than symbol) to add the clock feature to the selected features list.
5. Select the Clock feature in the selected features list, and Clock feature parameters will load in the far left pane.
6. Click in the Date: field, and notice the instructions for that field at the bottom left of the Wizard. In this field lets
enter a date that follows the formatting instructions for that field.
7. Click in the Time: field, In this field lets enter a time that follows the formatting instructions for that field.
8. Now click `Apply` and then `Finish`
9. Now click the `Close` on the Profile Manger

The ProfileManager Wizard will generate the needed xml in a file call EMDKConfig.xml and place it in the Assets folder of our project. Now lets move on and write some code to submit the profile.


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
    <manifest xmlns:android="http://schemas.android.com/apk/res/android" package="GettingStartedTutorial.GettingStartedTutorial" android:versionCode="1" android:versionName="1.0">
      <uses-sdk android:minSdkVersion="19" />
      <uses-permission android:name="com.symbol.emdk.permission.EMDK" />
    	<application android:label="GettingStartedTutorial" android:icon="@drawable/Icon">
        <uses-library android:name="com.symbol.emdk"  />
      </application>
    </manifest>

##Setup User Interface
Now lets build our User Interface by opening our main layout file and dragging a dropping some UI elements into our Form.

1. Open our main layout by selecting **Solution pane** > "Project Name" > Resources > layout > Main.axml
2. After the layout loads in the Form Builder we can begin adding and modifying UI elements.
  1. Select the **HELLO WORLD, CLICK ME!** button, and set its `text` property to the following value in the **Properties** pane.
    - **MyButton** set **text** to `Apply Profile`
  2. Add a new textview widget to the form directly below **MyButton** .
  3. Select the new textview **textView1**, and set its `id` and `text` properties to the following values in the **Properties** pane.
    -  **textView1** set **id** to `@+id/textViewStatus` and set **text** to `Status:`


**Your completed Main.axml should resemble the following:**
>NOTE: To veiw layout in as xml, switch from **Design** to **Source** view by selecting `Source` in the bottom left corner of the **Form Builder**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>
    <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
        android:orientation="vertical"
        android:layout_width="fill_parent"
        android:layout_height="fill_parent">
        <Button
            android:id="@+id/MyButton"
            android:layout_width="fill_parent"
            android:layout_height="wrap_content"
            android:text="Apply Profile" />
        <TextView
            android:text="Status:"
            android:textAppearance="?android:attr/textAppearanceSmall"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:id="@+id/textViewStatus" />
    </LinearLayout>

##Add Some Code
Now lets add some code to our project.

1. Start by opening up our MainActivity, select **Solution pane** > "Project Name" > MainActivity.cs
2. Add a `using` directive that references the Symbol EMDK for Xamarin

        :::cs
        using Symbol.XamarinEMDK;

3. Now lets add some global variables to the MainActivity class for later use.

        :::cs
        private EMDKManager emdkManager = null;
        private ProfileManager profileManager = null;
        private String profileName = "ClockProfile";
        private TextView tvStatus = null;


4. When our OnCreate Activity lifecycle method is called, we call the Activity's SetContentVeiw() method, which will pull in the layout we created previously in Main.axml. We now need to initialize our User Interface global variables so they can be referenced anywhere in the MainActivity class. We will do that inside our OnCreate method just below where SetContentVeiw() is called.

            :::cs
            tvStatus = FindViewById<TextView>(Resource.Id.textViewStatus);


5. While we are initializing the User Interface lets modify setup our button call a method that will submit our profile. When we crated the profile from the Android Blank template, it added a few lines for us, but we need to modify one of them.

  1. Change the line that finds the button, so it will find the button

  Change:

            :::cs
            button.Click += delegate { button.Text = string.Format("{0} clicks!", count++); };

  To:

            :::cs
             button.Click += delegate { ApplyProfile(); };

>Note: We will add the ApplyProfile() method later in this tutorial.

6. Also in our OnCreate method, we will call the EMDKManager.GetEMDKManger() method to start the EMDKManger initialization process. Then we will check the result of the method and alert the user by updating the Status TextView.

            :::cs
            EMDKResults results = EMDKManager.GetEMDKManager(Android.App.Application.Context, this);
            if (results.StatusCode != EMDKResults.STATUS_CODE.Success)
            {
                tvStatus.Text = "Status: EMDKManager object creation failed ...";
            }
            else
            {
                tvStatus.Text = "Status: EMDKManager object creation succeeded ...";
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
  use this instance of the EMDKManger to initialize our global EMDKManager object. We will also alert the user that EMDKManager was successfully Opened and is ready for use. This is also a good time to initialize the ProfileManager global variable, and alert the user if there are any issues while doing so.

            :::cs
            void EMDKManager.IEMDKListener.OnOpened(EMDKManager emdkManager)
            {
                tvStatus.Text = "Status: EMDK Opened successfully ...";

                this.emdkManager = emdkManager;

                try
                {
                    profileManager = (ProfileManager)emdkManager.GetInstance(EMDKManager.FEATURE_TYPE.Profile);
                }
                catch (Exception e)
                {
                    tvStatus.Text = "Status: Exception <" + e.Message + ">";
                }
            }

  4. We also need to make sure we clean up the EMDKManger references when they can no longer be used. We will do this in the OnClosed method.

            :::cs
            void EMDKManager.IEMDKListener.OnClosed()
            {
                tvStatus.Text = "Status: EMDK Open failed unexpectedly. Please close and restart the application ...";

                if (emdkManager != null)
                {
                    emdkManager.Release();
                    emdkManager = null;
                }
            }

8. We need a way to pass the Profile to the ProfileManager to be processed, for this we will add a method to our MainActivity class called ApplyProfile.

        :::cs
        void ApplyProfile()
        {
            if (profileManager != null)
            {
                EMDKResults results = profileManager.ProcessProfile(profileName, ProfileManager.PROFILE_FLAG.Set, new String[] { "" });
                if (results.StatusCode == EMDKResults.STATUS_CODE.Success)
                {
                    tvStatus.Text = "Status: Profile applied successfully ...";
                }
                else if (results.StatusCode == EMDKResults.STATUS_CODE.CheckXml)
                {
                    //Inspect the XML response to see if there are any errors, if not report success
                    using (XmlReader reader = XmlReader.Create(new StringReader(results.StatusString)))
                    {
                        String checkXmlStatus = "Status:\n\n";
                        while (reader.Read())
                        {
                            switch (reader.NodeType)
                            {
                                case XmlNodeType.Element:
                                    switch (reader.Name)
                                    {
                                        case "parm-error":
                                            checkXmlStatus +=  "Parm Error:\n";
                                            checkXmlStatus += reader.GetAttribute("name") + " - ";
                                            checkXmlStatus += reader.GetAttribute("desc") + "\n\n";
                                            break;
                                        case "characteristic-error":
                                            checkXmlStatus += "characteristic Error:\n";
                                            checkXmlStatus += reader.GetAttribute("type") + " - ";
                                            checkXmlStatus += reader.GetAttribute("desc") + "\n\n";
                                            break;
                                    }
                                    break;
                            }
                        }

                        if (checkXmlStatus == "Status:\n\n")
                        {
                            tvStatus.Text = "Status: Profile applied successfully ...";
                        }
                        else
                        {
                            tvStatus.Text = checkXmlStatus;
                        }

                    }
                }
                else
                {
                    tvStatus.Text = "Status: Profile initialization failed ... " + results.StatusCode;
                }
            }
            else
            {
                tvStatus.Text = "Status: profileManager is null ...";
            }
        }





9. Lastly we need to make sure and clean up our references to ProfileManager and EMDKManager before our application exits.

        :::cs
        protected override void OnDestroy()
        {
            base.OnDestroy();

            if (profileManager != null)
            {
                profileManager = null;
            }

            if (emdkManager != null)
            {
                emdkManager.Release();
                emdkManager = null;
            }
        }

##Running the application
Now that we are finish with our first EMDK for Xamarin application, lets see how it runs.

> NOTE: Make sure the device is connected to your development system via a USB cable, and that Developer Mode/USB debugging is enabled on the device.

1. Make note of the current Time and Date on the device.

2. Start the application by pressing the "Play" button on the toolbar in your IDE.
   The IDE will install the new application on the device and run it.
3. If all goes well, you should eventually see your application start and the status message change to `EMDK Opened successfully ...`
4. Now press the `Apply Profile` button.
5. The Status Message should now read `Profile applied successfully ...`. You should see the Time on the devices Notification Bar change to the time you set the Clock profile. You can also pull the Notification Bar down and see that the Date has changed to the Date you set in the Clock profile.


<!--##Download the Source
The project source to this tutorial can be [downloaded (Internet Connection Required)](https://github.com/EMDK/xamarin-samples/archive/GettingStartedTutorial.zip).-->















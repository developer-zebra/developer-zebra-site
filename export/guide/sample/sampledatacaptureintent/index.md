---
title:  Data Capture Intent Sample
---
# Data Capture Intent Sample

## Overview
This sample demonstrates how to use the DataWedge Intent output plug-in and the [Data Capture Intent API](../guide/reference/refdatacaptureintent) to receive captured data in your native Android application. 

A [Tutorial](../guide/tutorial/tutdatacaptureintent) walks through how this sample application was built from scratch. If you would simply like to see the application run on your device, follow the instructions in the next section.

## Using This Sample

1. Download DataCaptureDemoSource.apk to your computer
2. Copy the APK from your computer to a Android device like a MC40 (using USD file copy or ADB)
3. From the device, launch the File Manager application and click on the APK file you just copied to install the DWDemoSample application.
4. On the device, Launch DataWedge
5. Create a new profile and give it a name such as "dwdemosample"

	![img](https://s3-us-west-1.amazonaws.com/launchpad-images/emdk/SampleDataIntent/2.png)
	![img](https://s3-us-west-1.amazonaws.com/launchpad-images/emdk/SampleDataIntent/4.png)
6. Edit the profile

	![img](https://s3-us-west-1.amazonaws.com/launchpad-images/emdk/SampleDataIntent/5.png)
7. Go into Associated apps, tap the menu button, and add a new app/activity

	![img](https://s3-us-west-1.amazonaws.com/launchpad-images/emdk/SampleDataIntent/7.png)
8. For the application select com.motorolasolutions.emdk.sample.dwdemosample

	![img](https://s3-us-west-1.amazonaws.com/launchpad-images/emdk/SampleDataIntent/8.png)
9. For the activity select com.motorolasolutions.emdk.sample.dwdemosample.MainActivty

	![img](https://s3-us-west-1.amazonaws.com/launchpad-images/emdk/SampleDataIntent/9.png)
10. Go back and disable the keystroke output plug-in

	![img](https://s3-us-west-1.amazonaws.com/launchpad-images/emdk/SampleDataIntent/11.png)
11. Enable the intent output plug-in

	![img](https://s3-us-west-1.amazonaws.com/launchpad-images/emdk/SampleDataIntent/12.png)
12. For the intent action enter com.motorolasolutions.emdk.sample.dwdemosample.RECVR

	![img](https://s3-us-west-1.amazonaws.com/launchpad-images/emdk/SampleDataIntent/18.png)
13. For the intent category enter android.intent.category.DEFAULT

	![img](https://s3-us-west-1.amazonaws.com/launchpad-images/emdk/SampleDataIntent/14.png)
14. Launch the DataWedge Demo Sample application

	![img](https://s3-us-west-1.amazonaws.com/launchpad-images/emdk/SampleDataIntent/17.png)
15. Press the back button to clear the keyboard
16. Press the scan trigger on the device and scan a printed barcode
17. Notice that the output displays the barcode data preceded with additional info (source, symbology and length) that is handled by the handleDecodeData() Intent receiver method.
	![img](https://s3-us-west-1.amazonaws.com/launchpad-images/emdk/SampleDataIntent/20.png)

## Download
The project [source](https://s3.amazonaws.com/emdk/Tutorials/DataCaptureDemoSource.zip) and [application](https://s3.amazonaws.com/emdk/Tutorials/DataCaptureDemoApp.apk.zip) to this tutorial can be downloaded (Internet Connection Required).

<a name="theend"></a>




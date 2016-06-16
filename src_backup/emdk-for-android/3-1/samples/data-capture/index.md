---
publish: true
title: Data Capture
description: Shows how to use the EMDK for Android Profile APIs to manage Data Capture profiles.
download: 'https://github.com/developer-zebra/samples-emdkforandroid-3_1/archive/ProfileDataCaptureSample1.zip'
source: 'https://github.com/developer-zebra/samples-emdkforandroid-3_1/tree/ProfileDataCaptureSample1'
features:
  - Profile Manager
  - Data Capture
devices:
  - MC18KK
  - MC32N0JB
  - MC40JB
  - MC40KK
  - MC67JB
  - MC92KK
  - TC55JB
  - TC55KK
  - TC70KK
  - TC75KK
image: 1.png
screenshots:
  - 1.png
  - 2.png
  - 3.png
layout: sample.html
product: EMDK For Android
productversion: '2.3'
---

##Overview
One of the features of the EMDK is the ability to create Barcode scanning profiles. This application allows you to modify a Barcode profile to select which times of Barcodes should be interpreted.  

##Prerequisites
[See Using the EMDK Samples](../../guide/sample/emdksamples)

##Loading the Sample Application
[See Using the EMDK Samples](../../guide/sample/emdksamples)

##Deploying The Sample Application
[Using the EMDK Samples](../../guide/sample/emdksamples)

##Using This Sample
1) When the application first loads you will see:

* Checkboxes for changing Barcode options
* A text area where Barcode data will be displayed
* A Status area where status will be shown

![img](../../images/sample/9.png)

2) Select which Barcode types you would like to enable.  
3) click "Set".  
4) San a Barcode of one of the selected Barcode types.  
5) The data from the Barcode should populate on the screen.  
  ![img](../../images/sample/new.png)

## Application Startup
Using the Profile Manager Wizard, a profile called 'DataCaptureprofile-1' was created. You can inspect the parameters it has by launching the EMDK Profile Manager from Eclipse.

![img](../../images/sample/10.jpg)

You will see that the MainActivity for the application has been selected to indicate when this profile will be used. As you can see in EMDK for Android V 2.1, the existing features of V 2.0 are categorized based on their operations such as Activity Selection, Data Input (Barcode, MSR) and Data Delivery (Intent, Keystroke and IP). Moreover it has introduced several new MX (Mobility Extension) features (Ex. Clock, App Manager, Power Manager etc). These MX features are used for configuring Symbol Android devices.

   > Note: The field "Name" contains user defined name to identify a particular feature. This is required when editing any specific feature programmatically, which is outside the scope of this tutorial. So we will keep the "Name" field empty.

![img](../../images/sample/11.jpg)

   > Note: The field "Name" contains user defined name to identify a particular Barcode Scanner Input feature. This is required when editing any specific Barcode Scanner Input feature programmatically, which is outside the scope of this tutorial. So we will keep the "Name" field empty.

The profile feature parameters that have been chosen can be inspected to see that certain barcode decoders have been enabled and the output will be using the Keystroke feature. This profile has MSR and Intent output disabled.

![img](../../images/sample/12.jpg)

![img](../../images/sample/13.jpg)

![img](../../images/sample/14.jpg)

When the application starts up, the onOpened method is executed and the profile is processed.

![img](../../images/sample/15.jpg)

![img](../../images/sample/16.jpg)

It if was successful, you will see "Profile initialization Success" on the application's status area.

![img](../../images/sample/17.png)

## Scanning a Barcode
After the application has been loaded, you can begin scanning barcodes. Notice that only Code128, EAN8, UPCA types have been chosen. When you press the scan trigger on the device, you should see the default scanner become activated and a barcode is attempted to be read. If the barcode you have chosen is not one of the ones listed above, it will not decode and display in the text area. 

>NOTE: Most everyday items you may have in your home use the UPCA type barcode. You may also Google these types of barcode to see what they look like and print one out for testing

Upon successful Barcode scanning, the barcode data will be output into the text field.

![img](../../images/sample/18.png)

## Changing Barcode Settings
When you uncheck the checkboxes in the application, the DataCaptureProfile-1 is modified on the fly using the ProfileConfig API. 

* Uncheck the barcode type you just scanned in 
* tap 'Set' and you should see 'Profile update success' in the status area

![img](../../images/sample/19.png)

Now when you scan the same Barcode, you will still see the barcode aimer but the data will not be decoded and you will not see the data displayed in the text area.

## Next Steps
Now that you have played with a pre-built sample application, it is time to try and build your own application from scratch. Follow the steps in the [DataCapture Profile Manager Tutorial](../../tutorial/tutdatacaptureprofile).

















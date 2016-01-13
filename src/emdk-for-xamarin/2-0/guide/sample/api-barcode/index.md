---
title: Barcode API Sample
---

##Overview
The Barcode API's are used when you wish to handle all barcode scanning entirely in C# using [Barcode/Scanning APIs](/emdk-for-xamarin/1-0/guide/reference/EMDKList). These API's work independently of any Data Capture profiles.  

The available actions in the [Barcode/Scanning API](/emdk-for-xamarin/1-0/guide/reference/EMDKList?Barcode APIs) are:
  
* Set Scanner Device  
* Set [TriggerType](/emdk-for-xamarin/1-0/api/Scanner_TriggerTypes)
* Set [Decoder Params](/emdk-for-xamarin/1-0/api/ScannerConfig_DecoderParameters)
* Set [Reader Params](/emdk-for-xamarin/1-0/api/ScannerConfig_ReaderParameters)
* Set [Scan Params](/emdk-for-xamarin/1-0/api/ScannerConfig_ScanParameters)
* Scan barcodes based on selected features   

This sample application will allow you to scan barcodes based on selected scanner device, trigger type and few decoder [Decoder Params](/emdk-for-xamarin/1-0/api/ScannerConfig_DecoderParameters).


## Opening The Sample
After [adding the EMDK for Xamarin component](/emdk-for-xamarin/1-0/guide/component/install) to your Android project, you can access the Barcode API sample:

1. Open the EMDK for Xamarin components detail page

	![img](images/component/details-button.jpg)
	![img](images/component/details.jpg)
2. Select the `Samples` tab
3. Click the `Open Sample` button

	![img](images/component/samples-tab.jpg)

The sample project will then open. You can choose to run it and review the associated code.

![img](images/component/sample-opened.jpg)

> Note: There is a known [Xamarin issue](https://bugzilla.xamarin.com/show_bug.cgi?id=17662) that may occur when loading and building a sample project from the component details page. When a Xamarin component is added to your project, a copy of that component and its contents are copied to your project and placed in the `PROJECT/Components` folder. All the samples for that project reside three directories further into the project path  `PROJECT/Components/COMPONENTNAME/Samples/SampleName`. As you can see the full path to this sample can grow quite large. i.e. **C:\Users\USERNAME\Documents\Visual Studio 2013\Projects\PROJECTNAME\Components\emdk-component-0.0.1\samples\SAMPLENAME**.  In most cases the project will load correctly when launching the sample, but when you attempt to build the project you get get a PathTooLongException. This error happens because the windows operating system sets a maximum limit to how long a path can be (260 characters). This path may not be 260 long yet, but when the build process starts, it will generate files and paths inside that sample folder, which could exceed that limit.  To solve this issue, you simply need to copy the sample project that you wish to use, out of that embedded samples folder, up to the IDE's project folder, and then load the sample by clicking on its .sln (solution)file.


##Running The Sample
###Visual Studio

Visual Studio will detect your device connected via USB, it will display the name of that device next to the "Play" button.

![img](images/samples/vsPlayButton.png)

Press the "Play" button next to the devices name.  The IDE will build, deploy and start the sample app on your device.

###Xamarin Studio
In Xamarin Studio, you may need to select your attached device from the devices dropdown under `Physical Devices`.

![img](images/samples/xs-select-device.png)

Now press the "Play" button. The IDE will build, deploy and start the sample app on your device.

![img](images/samples/xsPlayButton.png)

## Using the Sample
1. When the application starts it should look like the following.
  
	![img](images/samples/barcode_1.png)
  
2. Set scanner to "Serial SSI Scanner", which is the default one". 

	![img](images/samples/barcode_2.png)

3. Set Trigger Type to "HARD".

	![img](images/samples/barcode_3.png)

	> Note: Trigger Type "HARD" lets you scan the barcode using device's hard scan key whereas "SOFT" allows you to scan without using device's hard scan key.

4. Keep all checkboxes checked for decoder params and this is how it should look after setting all fields.
    
	![img](images/samples/barcode_4.png)  	

5. Click "Start" button and the status will be updated.

	![img](images/samples/barcode_5.png) 
 
6. Since we selected Trigger Type as "HARD", press the hard scan key of Symbol device and scan a particular barcode. It will get the scanned barcode data in "Data" field of UI.
   
	![img](images/samples/barcode_6.png) 

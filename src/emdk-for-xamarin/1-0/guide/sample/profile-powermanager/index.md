---
title: Power Manager Profile Sample
---

##Overview
The Power Manager Profile allows you to control the power state of a Symbol device. 

The available actions are:  
- Do Nothing  
- Sleep Mode  
- Reboot  
- OS Update  

This sample application will allow you to set the power state of "Suspend" (sleep mode) or "Reset" (reboot).


## Loading the Sample Application
This sample project is available in our [online sample repository](https://github.com/EMDK/xamarin-samples). Perform the following steps to load the ProfilePowerMgrSample1 sample.

1. Download the Sample: [ProfilePowerMgrSample1](https://github.com/EMDK/xamarin-samples/archive/ProfilePowerMgrSample1.zip)
2. Unzip the downloaded .zip file
3. Open the sample project by double clicking the `.sln` in the root of the unzipped archive, or browse to the `.sln` file from your preferred IDE.

## Running the Sample
Now that we have the project loaded, lets run the application and see how it works

###Visual Studio

Visual Studio will detect your device connected via USB, it will display the name of that device next to the "Play" button.

![img](../../../images/samples/vsPlayButton.png)

Press the "Play" button next to the devices name.  The IDE will build, deploy and start the sample app on your device.

###Xamarin Studio
In Xamarin Studio, you may need to select your attached device from the devices dropdown under `Physical Devices`.

![img](../../../images/samples/xs-select-device.png)

Now press the "Play" button. The IDE will build, deploy and start the sample app on your device.

![img](../../../images/samples/xsPlayButton.png)

##Using This Sample
1. When the application starts it should look like the following.  
	![img](../../../images/samples/1_1.png)  
2. Select the power mode you would like to set.  
	![img](../../../images/samples/1_2.png)  	
3.  Click "Set" 
4.  Check the status field.   
	![img](../../../images/samples/1_3.png)  

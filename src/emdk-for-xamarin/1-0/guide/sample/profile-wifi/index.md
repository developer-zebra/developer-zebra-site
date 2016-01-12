---
title: Wi-Fi Profile Sample
---


##Overview
The Wifi Profile allows you to configure Wi-Fi settings for the device. 

The available actions are:
  
* Disable Wi-Fi  
* Enable Wi-Fi  
* Add a Network  
* Connect to a Network
* Enable a Network
* Disconnect from a Network
* Disable a Network
* Remove a Network

> Note: In order to perform all Wi-Fi network operations, Wi-Fi should be enabled.  

This sample application will allow you to perform all the above mentioned Wi-Fi actions on Symbol device.


## Loading the Sample Application
This sample project is available in our [online sample repository](https://github.com/EMDK/xamarin-samples). Perform the following steps to load the ProfileWifiSample1 sample.

1. Download the Sample: [ProfileWifiSample1](https://github.com/EMDK/xamarin-samples/archive/ProfileWifiSample1.zip)
2. Unzip the downloaded .zip file
3. Open the sample project by double clicking the `.sln` in the root of the unzipped archive, or browse to the `.sln` file from your preferred IDE.

## Running the Sample
Now that we have the project loaded, lets run the application and see how it works

###Visual Studio

Visual Studio will detect your device connected via USB, it will display the name of that device next to the "Play" button.

![img](images/samples/vsPlayButton.png)

Press the "Play" button next to the devices name.  The IDE will build, deploy and start the sample app on your device.

###Xamarin Studio
In Xamarin Studio, you may need to select your attached device from the devices dropdown under `Physical Devices`.

![img](images/samples/xs-select-device.png)

Now press the "Play" button. The IDE will build, deploy and start the sample app on your device.

![img](images/samples/xsPlayButton.png)


##Using This Sample

1. When the application starts it should look like the following.
  
	![img](images/samples/wifi_1.png)
  
2. Select the Wi-Fi operation you want (Enable/Disable).
   
	![img](images/samples/wifi_2.png)  	

3. Select the Network action you want to execute from the Network Action drop-down. 
	Let us select "Add(Default Open Network)" option.

	![img](images/samples/wifi_3.png)

	> Note: You could also add Personal Network with Passphrase and Enterprise Network with required certificate, which is not in the scope of this sample. 
4. Provide some SSID to the network you want to add in SSID field (Ex. Test_Network).

	![img](images/samples/wifi_4.png)

5. Click "Apply" button.

6. Check the status field.
   
	![img](images/samples/wifi_5.png)  


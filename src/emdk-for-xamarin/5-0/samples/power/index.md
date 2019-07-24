---
publish: true
title: Rebooting The Device
description: 'This sample application will allow you to set the power state to "Suspend" (sleep mode) or "Reset" (reboot).'
download: 'https://github.com/Zebra/samples-emdkforxamarin-3_0/archive/master.zip'
source: 'https://github.com/Zebra/samples-emdkforxamarin-3_0'
features:
  - Profile Manager
  - Power Manager
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
product: EMDK For Xamarin
productversion: '5.0'
---

##Overview
The Power Manager Profile allows you to control the power state of a Symbol device. 

The available actions are:  
- Do Nothing  
- Sleep Mode  
- Reboot  
- OS Update  

This sample application will allow you to set the power state of "Suspend" (sleep mode) or "Reset" (reboot).


##Loading the Sample Application

1. Choose a sample and click the **See Details** button.
2. Now click the **Download** button 
3. `IMPORTANT:` **Extract the downloaded project zip file <u>to C:\</u>** (or to the **root** of an alternate drive).
4. Navigate to the root of the unzipped project folder and double-click the **.sln** file. The project loads in the default IDE for that file type.

Alternatively, launch a preferred IDE and load the project via the File > Open menu.  

## Running the Sample
Now that we have the project loaded, lets run the application and see how it works

###Visual Studio

Visual Studio will detect your device connected via USB, it will display the name of that device next to the "Play" button.

![img](../../images/samples/vsPlayButton.png)

Press the "Play" button next to the devices name.  The IDE will build, deploy and start the sample app on your device.

###Xamarin Studio
In Xamarin Studio, you may need to select your attached device from the devices dropdown under `Physical Devices`.

![img](../../images/samples/xs-select-device.png)

Now press the "Play" button. The IDE will build, deploy and start the sample app on your device.

![img](../../images/samples/xsPlayButton.png)

##Using This Sample
1. When the application starts it should look like the following.  
	![img](../../images/samples/1_1.png)  
2. Select the power mode you would like to set.  
	![img](../../images/samples/1_2.png)  	
3.  Click "Set" 
4.  Check the status field.   
	![img](../../images/samples/1_3.png)  


















---
publish: true
title: Serial Communication
description: Demonstrates the EMDK Serial Communication API to enable support for DEX in an application. DEX (Data Exchange) is a format for collecting audit and event data from vending machines.
download: 'https://github.com/Zebra/samples-emdkforxamarin-4_0/archive/samples-emdkforxamarin-5_0.zip'
source: 'https://github.com/Zebra/samples-emdkforxamarin-4_0/tree/samples-emdkforxamarin-5_0'
features: null
devices:
  - TC75KK
  - TC70KK RevB
image: 1.png
screenshots:
  - 2.png
  - 3.png
  - 4.png
layout: sample.html
product: EMDK For Xamarin
productversion: '6.0'
---


##Overview
This sample demonstrates the EMDK Serial Communication API to enable support for DEX in an application. DEX (Data Exchange) is a format for collecting audit and event data from vending machines.

##Prerequisites

* One of the approved devices listed above
* TC7X SNAP-on DEX cable (CBL-TC7X-DEX1-01)

>**Note**: Although this sample might work with previous versions of EMDK, Zebra recommends [updating the EMDK runtime](../../guide/setupDevice/) on target device(s) before loading this sample.

##Load Sample App

1. Click the **Download** button from the sample-app details page. 
2. `IMPORTANT:` **Extract the downloaded project zip file <u>to C:\</u>** (or to the **root** of an alternate drive).
3. Navigate to the root of the unzipped project folder and double-click the **.sln** file. The project loads in the default IDE for that file type.

Alternatively, launch a preferred IDE and load the project via the **File -> Open** menu.  

##Running The Sample
###Visual Studio

Visual Studio detects the device connected via USB and displays the name of that device next to the "Play" button.

![img](../../images/samples/vsPlayButton.png)

Press the "Play" button next to the device name. The IDE builds, deploys and starts the sample app on the device.

###Xamarin Studio
In Xamarin Studio, it might be necessary to select the attached device from the device's `Physical Devices` drop-down menu.

![img](../../images/samples/xs-select-device.png)

Now press the "Play" button. The IDE builds, deploys and starts the sample app on the device.

![img](../../images/samples/xsPlayButton.png)

##Using This Sample
1. With the Snap-on DEX cable attached, the application should look like the following when it starts:  
  <img alt="image" style="height:400px" src="3.png"/>
2. Press the **Write** button. The application should display a message that it has sent the text from the edit field in number of bytes sent in the status area.
  <img alt="image" style="height:400px" src="2.png"/>
3.  Press the **Read** button.  The application will continue to read for 10 seconds and then display the read data in the status area.
  <img alt="image" style="height:400px" src="4.png"/>
  





















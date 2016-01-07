---
publish: true
title: Mobile Payment
description: This sample demonstrates the EMDK Mobile Payment APIs allowing your application to perform EMV and Mag-stripe Payment transactions when using the PD40 Payment device.
downloads:
  - title: Android Studio Project
    url: https://github.com/developer-zebra/samples-emdkforandroid-4_0/archive/PaymentSample1.zip  
  - title: ADT Eclipse Project
    url: https://github.com/developer-zebra/samples-emdkforandroid-4_0-ADT/archive/PaymentSample1.zip   
sources:
  - title: Android Studio Project
    url: https://github.com/developer-zebra/samples-emdkforandroid-4_0/tree/PaymentSample1
  - title: ADT Eclipse Project
    url: https://github.com/developer-zebra/samples-emdkforandroid-4_0-ADT/tree/PaymentSample1

features: 

devices: 
  - MC40 KK
  - TC70 KK
  - TC75 KK 
  - TC55 KK 
  
image: 1.png
screenshots: 
  - 1.png
  - 2.png
  - 3.png

---


##Overview
This sample demonstrates the EMDK Mobile Payment APIs allowing your application to perform EMV and Mag-stripe Payment transactions when using the PD40 Payment device.

##Prerequisites
- Java JDK 
- Eclipse with ADT plugin or  Android Studio
- EMDK for Android  
- An EMDK supported Android device

**Items Needed**
* One of the approved devices listed above
* PD40 payment device

For more information about setting up the EMDK please see the [EMDK Setup Guide](/emdk-for-android/4-0/guide/setup).

##Loading the Sample Application
The following guide will walk you through setting up the EMDK samples in your IDE.

* [Android Studio](/emdk-for-android/4-0/guide/emdksamples_androidstudio)
* [Eclipse/ADT](/emdk-for-android/4-0/guide/emdksamples_eclipse)

##Using This Sample
1. Bluetooth pair your Android device to the PD40 payment module.
2. Launch the payment API sample. The initial screen should resemble the following.
    ![img](1.png) 
    
2. Press the **Enable** button. You should see a message in the sample application stating that the connection to the payment device was successful. 

  ![img](2.png)    
3. Press the **Do Transaction** button. You should see a message stating that the sample app has send a message prompt to the payment device.

  ![img](3.png) 

4. 
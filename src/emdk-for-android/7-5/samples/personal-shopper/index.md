---
publish: true
title: Personal Shopper
description: Shows how the Personal Shopper APIs are used to programmatically interact with the MC18 cradle.
downloads:
  - title: Sample Projects
    url: 'https://github.com/Zebra/samples-emdkforandroid-7_3/archive/master.zip'
sources:
  - title: Github Repo
    url: 'https://github.com/Zebra/samples-emdkforandroid-7_3'
features:
  - Profile Manager
  - Simulscan
  - Java APIs
devices:
  - PS20 O
image: 1.png
screenshots:
  - 1.png
  - 2.png
  - 3.png
  - 4.png
  - 5.png
  - 6.png
  - 7.png
layout: sample.html
product: EMDK For Android
productversion: '7.5'
---

##Overview
This sample application will show how the Personal Shopper APIs can be used to interact with the MC18 Cradle programmatically.

##Requirements
Android API 22 (or higher) must be installed via the SDK Manager before attempting to load this sample.

##Loading the Sample Application
The following guide will walk you through setting up the EMDK samples in your IDE.

* [Android Studio](/emdk-for-android/7-5/guide/emdksamples_androidstudio)

>**NOTE**: The appearance of sample app screens can vary by sample app version, Android version and screen size.

##Using This Sample

1.  With the MC18 seated in the cradle. Launch the PersonalShopper API sample.
 When the application starts it should look like the following.

  ![img](personalShopperSampleFirstLaunch.png)

2. Press the **Fast Charge** checkbox to enable/disable fast charging.

  ![img](personalShopperSampleFastCharge.png)

3. Press the **Cradle Info** button to retrieve information about the cradle, such as the cradle's firmware version.

  ![img](personalShopperSampleCradleInfo.png)

4. Press the **Diagnostic Info** button to retrieve information such as the the MC18 battery capacity.

  ![img](personalShopperSampleDiagnosticInfo.png)

5. Press the **Cradle Unlock** button to unlock the crade, which will allow the MC18 to be removed.

  ![img](personalShopperSampleUnlockCradle.png)

6. Press the **Cradle Flash LED's** button, which will flash the cradle LED's 5 times.

  ![img](personalShopperSampleFlashLED.png)

7. Press the **Smooth Effect** checkbox to enable/disable smoothing effect and then press the **Cradle Flash LED's** button again. Notice how the
LED's fade in and out, instead of an abrupt on/off state change.

  ![img](personalShopperSampleSmoothEffect.png)





















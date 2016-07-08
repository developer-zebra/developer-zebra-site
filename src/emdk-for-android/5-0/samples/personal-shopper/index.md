---
publish: true
title: Personal Shopper
description: This sample application will show how the Personal Shopper APIs can be used to interact with the MC18 Cradle programmatically.
downloads:
  - title: Android Studio Project
    url: 'https://github.com/developer-zebra/samples-emdkforandroid-5_0/archive/PersonalShopperSample1.zip'
sources:
  - title: Android Studio Project
    url: 'https://github.com/developer-zebra/samples-emdkforandroid-5_0/tree/PersonalShopperSample1'
features:
  - Profile Manager
  - Simulscan
  - Java APIs
devices:
  - MC18KK
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
productversion: '5.0'
---

##Overview
This sample application will show how the Personal Shopper APIs can be used to interact with the MC18 Cradle programmatically.

>Note: Although this sample may work with previous versions of the EMDK, it is advised to [update the EMDK runtime](../../guide/setupDevice/) on your device before loading this sample.

##Loading the Sample Application
The following guide will walk you through setting up the EMDK samples in your IDE.

* [Android Studio](/emdk-for-android/5-0/guide/emdksamples_androidstudio)

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



















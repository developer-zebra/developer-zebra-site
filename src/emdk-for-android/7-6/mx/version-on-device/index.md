---
title: "How to Check a Device's MX Version"
layout: guide.html
product: EMDK For Android
productversion: '7.5'
---

## Overview

The version of MX on a device is a factor in determining if certain settings will be supported. There are a few ways that you can determine the version that is installed:

* Manually using the Settings UI
* From application code at runtime using the EMDK
* Submitting XML using the MX CSP
* Using ADB

## Using the Settings UI 

The version of MX on a Zebra Android KitKat device you can visually look in the Settings UI to determine the MX version installed:

> Note: This is only available on KitKat 4.4+ or later versions of Zebra Android devices.

1. Open the `Settings` application in the list of applications
    
    ![img](/mx/mx-version-on-device/settings.jpg)

2. Select `About Phone`

    ![img](/mx/mx-version-on-device/aboutphone.jpg)
    
3. Select `SW Components`

    ![img](/mx/mx-version-on-device/software.jpg)
    
4. Inspect the `OSX` item

    ![img](/mx/mx-version-on-device/osx.jpg)
    
5. In the below example the version that is installed is `4.4.2`

    ![img](/mx/mx-version-on-device/osx-highlighted.jpg)
    
## Using APIs

If your application needs to determine the version of MX installed on a device at run time, then you can use a the `VersionManager` EMDK for Android API.

    :::java
    // Get an instance of VersionManager
    versionManager = (VersionManager) EMDKManager.getInstance(EMDKManager.FEATURE_TYPE.VERSION);
    
    // Use the getVersion method passing in the version_Type.mx enum
    mxVersion = versionManager.getVersion(VERSION_TYPE.MX)
    
## Using ADB
The version of MX can also be obtained by using an `adb shell command`

    $ adb shell getprop
    
The output will need to be filtered using something like `grep`. If the device is considered to be `rebranded` to Zebra Technologies then `ro.symbol.osx.version` should be used:

    $ adb shell getprop | grep ro.symbol.osx.version
    [ro.symbol.osx.version]: [QC_OSX_4.4-3]

> The above device has MX version `4.4` on it. The hypen 3 is merely a patch release that has been applied.

On legacy Motorola Solutions branded devices, `ro.motosln.enterprise.version` should be used:

    $ adb shell getprop | grep ro.motosln.enterprise.version
    [ro.motosln.enterprise.version]: [MX_TI4AJ.1.1_3.5.1-1]

 > The above device has MX version `1.1` on it.

















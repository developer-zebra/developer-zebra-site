---
title:  App Manager Profile Feature Reference
---

## Overview

The App Manager feature allows you to install, upgrade, remove, enable, disable applications from the device. It also allows you to change the current application launcher, clear recent app list and much more.

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](../../../api/core/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](../usingwizard) for more information.

## Main Functionality

* Install Applications
* Uninstall Applications
* Upgrade Applications
* Set a Default Launcher
* Enable Application
* Disable Application
* Clear Recent Application List
* Add Application to Protected List
* Remove Application from Protected List
* Clear Protected List
* Enable Application Info
* Disable Application Info

## Install Application 
This will install the specified application. The application must not exists on the device otherwise you will receive an error (Use the Upgrade parameter instead)

* APK Path and Name: Must be the full path to the APK that will reside on the device. ex: '/storage/sdcard1/Herald.apk'

## Uninstall Application 
This will remove the specified application from the device.

* Package Name: Provide the Android package name of the application ex: 'com.mycompany.mypackage'

## Upgrade Application
This will upgrade/downgrade the specified application. The application must already exists on the device or you will receive an error (Use the Install parameter instead.

* APK Path and Name: Must be the full path to the APK that will reside on the device. ex: '/storage/sdcard1/Herald.apk'

## Default Launcher
You can provide a different application launcher to enable. The launcher application must reside on the device already.

* Package Name: Provide the Android package name of the application ex: 'com.mycompany.mypackage'

## Enable & Disable Application
Provide a package name of the applications that you want to enable or disable. Disabling an application will disable the ability to launch the application.

## Clear Recent Apps List
It will clear the list of recent apps that you opened. When you long press the menu button on symbol device, you will see a list of recently opened apps. After running your app using this feature, it will clear your device's recent app list including itself.  

## Protected List
You can manage which applications are on the protected list. Applications on the protected list will not be force closed when the device is setup to run in multi-user mode and the current user logs off. Applications on the protected list are permitted to run across users.

* Add Application - Specify the application's package name to add to the protected list.
* Remove Application - Specify the application's package name to remove from the protected list.
* Remove All - Removes all applications from the protected list

## App Info
The application info dialog shows detailed information about the application as well as allow you to perform actions like: Force Stop, Enable/Disable, Clear Data, Clear Cache. You can specify whether you want to enable or disable access to this dialog for all applications.

> Note: This feature is supported on devices that are running KitKat versions of Android like the TC70.

## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=AppMgr&os=All&embed=true"></iframe> 


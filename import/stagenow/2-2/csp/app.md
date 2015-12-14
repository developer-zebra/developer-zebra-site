# App

## About App

### Overview

The App Manager setting type allows you to install, upgrade, remove, enable, and disable applications from the device. It also allows you to change the current application launcher, clear the recent app list, and more.

### Main Functionality

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

##Parameter Notes
### Install Application 
This installs the specified application. The application must not exists on the device otherwise you receive an error (Use the Upgrade parameter instead)

* APK Path and Name: Must be the full path to the APK that will reside on the device. ex: '/storage/sdcard1/Herald.apk'

### Uninstall Application 
This removes the specified application from the device.

* Package Name - Provide the Android package name of the application ex: 'com.mycompany.mypackage'

### Upgrade Application
This upgrades/downgrades the specified application. The application must already exist on the device or you  receive an error (Use the Install parameter instead.

* APK Path and Name - Must be the full path to the APK that will reside on the device. ex: '/storage/sdcard1/Herald.apk'

### Default Launcher
You can provide a different application launcher to enable. The launcher application must reside on the device already.

* Package Name - Provide the Android package name of the application ex: 'com.mycompany.mypackage'

### Enable & Disable Application
Provide a package name of the applications that you want to enable or disable. Disabling an application disables the ability to launch the application.

### Clear Recent Apps List
This clears the list of recently opened apps. Hold the menu button on the device to view a list of recently opened apps. After running your app using this feature, this clears your device's recent app list including itself.  

### Protected List
You can manage which applications are on the protected list. Applications on the protected list are not forced closed when the device is set up to run in multi-user mode and the current user logs off. Applications on the protected list are permitted to run across users.

* Add Application - Specify the application's package name to add to the protected list.
* Remove Application - Specify the application's package name to remove from the protected list.
* Remove All - Removes all applications from the protected list

### Enable & Disable App Info
The application info dialog shows detailed information about the application and allows you to perform actions such as Force Stop, Enable/Disable, Clear Data, Clear Cache. Specify the application's package name for which you would like to enable or disable this feature.

> Note: This feature is supported on devices running KitKat versions of Android such as the TC70.


## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=AppMgr&os=All&embed=true"></iframe> 

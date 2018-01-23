---
title: Configuring A Device
layout: guide.html
product: EMDK For Android
productversion: '6.8'
---

>`NOTICE:`  
	The instructions below for updating the EMDK runtime via the EMDK OS update package pertain to devices running KitKat only. Devices running Lollipop+ will have the EMDK built in to the devices OS and can only be updated with a device BSP update package. `The OS Update package that comes with the EMDK will not be supported on Lollipop+`



##	Installing EMDK for Android Device Runtime using Deployment utility

###Windows
1.	Connect the device to PC.
2.	Launch the Start menu program shortcut `Device Runtime Deployment`. This will open the command prompt window.
3.	Click any key to continue.
4.	This process will deploy the device runtime and reboot automatically to finish the OS update.

###MAC
>Note: Please substitute the current version of the EmdkOSUpdateApp APK when EmdkOSUpdateApp_vX.X.X.apk is referenced.

1. Open finder and copy EmdkOSUpdateApp_vX.X.X.apk  into the ADB directory.

	`/Users/<user>/Library/Android/sdk/platform-tools/`

2. Open terminal and navigate to the ADB directory.

	`cd /Users/<user>/Library/Android/sdk/platform-tools/`

3. Connect a Symbol Android device and enter the following commands to restart the ADB and verify the list of attached devices.

	`./adb kill-server`

	`./adb devices`

4. Install EMDK OS Update App.

	`./adb install EmdkOSUpdateApp_vX.X.X.apk`

5. Run EMDK OS Update App.

	`./adb shell am start -n com.symbol.emdkosupdater/.MainActivity`


The device will be reboot after the device update completes.




## Installing the EMDK device runtime when the AppLock Manager is On:

* Option 1: Turn Off the AppLock Manager before EMDK device runtime deployment and the AppLock Manager can be turned On after device reboot.
* Option 2: The customer can add the EMDK OS update app name to the AppLock Manager Applications white list before the EMDK device runtime deployment.

## Installing the EMDK device runtime on Google Mobile Service (GMS) devices:
Before installing EMDK device runtime on GMS devices, you must enable the enterprise-grade features like Mobility Extensions (MX). To download enterprise enabler for your device, go to [https://portal.motorolasolutions.com/Support/US-EN](https://portal.motorolasolutions.com/Support/US-EN) and search for "Enterprise Enabler" along with the device name.

## Modify Device Runtime Installation Behavior
The EMDK device runtime update application will skip the EMDK runtime install if a device has an EMDK runtime version higher than the install version. The EMDK device runtime installation behavior can be modified by pushing an EMDK install mode configuration (`emdkosupdateconfig.xml`) to the `/enterprise/usr/` folder on a devices internal storage. This overrides the default settings of the application.

>NOTE: **This process is not required to use the default installation behavior.**

**Example emdkosupdateconfig.xml**

		:::xml
		<?xml version="1.0" encoding="utf-8"?>
		<wap-provisioningdoc>
			<characteristic type="EmdkOSUpdateMode">
				<parm name="InstallMode" value="skip"/>
				<parm name="RemoveInstaller" value="true"/>
			</characteristic>
		</wap-provisioningdoc>


**InstallMode Parm Value Options:**
This determines the install behavior when the existing version on the device is higher than the version being installed. The default install mode is `skip`.

* **auto** - Displays alert box during installation and waits for the user input
* **overwrite** - Overwrite and continue installation
* **skip** - Skip and continue installation. This is the default
* **cancel** - Exit the installation

**RemoveInstaller Parm Value Options:**
Removes the EMDK OS Update application on successful update.

* **true** - Removes the EMDK OS Update application on successful update (Default).
* **false** - Don't remove the EMDK OS Update application on successful update.

>Note: Supported in EMDKOS Update App v3.1.37 or higher.

**EMDK Device Runtime Installation Steps**

1. Create `emdkosupdateconfig.xml` and push into `/enterprise/usr/` to modify the default behavior.
2. Push the `EmdkOSUpdateApp_[version].apk` to a supported Symbol device.
3. Install EmdkOSUpdateApp application.
4. Launch installed EmdkOSUpdateApp application.

>NOTE: If the update succeeds, the EmdkOSUpdateApp will be un-installed (if the default settings have not overridden) and device will be rebooted. If the update fails, the EmdkOSUpdateApp application will not be un-installed. The update results will be available at  `/enterprise/usr/emdkosupdateresults.xml`



















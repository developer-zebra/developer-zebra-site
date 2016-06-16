---
title: EMDK For Android Setup on Mac (Android Studio)
layout: guide.html
product: EMDK For Android
productversion: '4.0'
---


##Removing previous EMDK installations
>Note: Prevous versions of the EMDK for Android should be removed before installing v4.0

**Removing SDK add-ons**
1. Navigate to the /Users/[user]/Library/Android/sdk/add-ons directory.
2. Remove addon-symbol-emdk_v3.1_API-16/ addon-symbol-emdk_v3.1_API-19 folders.

**Removing Wizard Core**
1. Navigate to /Users/Shared directory.
2. Remove Symbol EMDK for Android folder.

**Removing Wizard plug-in**
1. Launch Finder and go to Applications (on the left side panel)
2. Locate Android Studio.app right click and select Show Package Contents.
2. Locate the Contents\plugins directory.
4. Remove the com.symbol.emdk.wizard.intellijIdea_3.1.xx folder.


##Installing Android Studio 

1. Go to http://developer.android.com/sdk/index.html.
≠
	![img](../../images/setup/mac/image3.png)

2. Click on the "Download Android Studio for Mac" button.
3. Accept the License Agreement and click the "Download Android Studio for Mac" button.
4. Launch the .dmg file you just downloaded (ex: android-studio-ide-135.1740770-mac.dmg).
5. Drag and drop Android Studio into the Applications folder.
Open Android Studio and follow the setup wizard to install any necessary SDK tools.

Depending on your security settings, when you attempt to open Android Studio, you might see a warning that says the package is damaged and should be moved to the trash.

If that error occurs:

1. Go to System Preferences / Security &amp; Privacy
2. Click the padlock icon in the bottom left corner, and login to allow changes in this screen.
3. Under Allow applications downloaded from, select Anywhere
4. Then open Android Studio again.

If you need to use the Android SDK tools from a command line, you can access them at:
`/Users/<user>/Library/Android/sdk/`


##Configuring Android Studio for EMDK development

In order to develop EMDK apps on Android Studio, API's 16 and 19 Android platforms and Android SDK Build-tools revision 21.1.x or newer must be downloaded and installed.

###How to determine which the installed APIs platforms  in Android Studio

1. Launch Android Studio from Applications
2. Go to Tools / Android / SDK Manager
3. Then click **Launch Standalone SDK Manager** link at the bottom of the Android SDK settings page
4. Check that the status of Android 4.1.2 (API 16) and Android 4.4.2 (API 19) SDK Platforms is "Installed".
5. If either SDK platform is not installed check the SDK check mark, click Install Packages, and follow the on-screen instructions. When the install is complete, restart Android Studio.

	![img](../../images/setup/mac/image4.png)


###How to determine the Build-tools version installed in Android Studio

1. Launch Android Studio from Applications
2. Go to Tools / Android / SDK Manager
3. Check the status of Android SDK Build-tools 21.1.x or newer is "Installed".
4. If Android SDK Build-tools 21.1.x or newer is not installed check the SDK check mark, click Install Packages, and follow the on screen instructions. When the install is complete, restart Android Studio.

	![img](../../images/setup/mac/image5.png)

##Installing EMDK v4.0

###Prerequisites

- Android Studio 1.1.x or newer
	- Android API 16, API 19 platforms
	- Android SDK Build-tools 21.1.x or newer	
	
###Download the EMDK for Android 4.0 MAC install files

1. Download the [EMDK for Android 4.0 MAC install files](/emdk-for-android/download)
2. Extract the downloaded zip file and make note of the path to the extracted files. This path will be refered to as **EMDK_FILES** for the rest of this guide.

The extracted folder will contain the following files
- EMDK add-ons (“\EMDK_4.0_12172015_MAC\SDK\addon-symbol-emdk_v4.0_API-16/ “addon-symbol-emdk_v4.0_API-19”)
- EMDK Wizard core components (“\EMDK_4.0_12172015_MAC\Symbol EMDK for Android”)
- EMDK Wizard plug-in for Android Studio (“\EMDK_4.0_12172015_MAC\Android Studio\ com.symbol.emdk.wizard.intellijIdea”)
- EMDK device runtime (“\EMDK_4.0_12172015_MAC\Device Update\ EmdkOSUpdateApp_v4.0.3.apk”)

>NOTE: Instructions for installing EmdkOSUpdate on Mac can be found in the [Device Setup](/emdk-for-android/4-0/guide/setupDevice) guide.

###EMDK SDK add-on Integration

Add EMDK 4.0 APIs to the Android SDK
1. Navigate to the /Users/**username**/Library/Android/sdk/add-ons directory.

	![img](../../images/setup/mac/image6.png)

2. Copy the following EMDK sdk addon folders from **EMDK\_FILES/SDK/** into the add-ons directory.
	- addon-symbol-emdk\_v4.0_API-16
	- addon-symbol-emdk\_v4.0_API-19 

3. Exit & Launch Android Studio
4. Go to Tools > Android > SDK Manager

Now the integrated EMDK add-ons should appear in the SDK Manager
	![img](../../images/setup/mac/image8.png)

###EMDK Wizard plug-in Integration

**Configuring Mac OS X with EMDK Wizard core components**

1. Locate the /Users/Shared folder.

	![img](../../images/setup/mac/image10.png)

2. Copy **EMDK\_FILES/Symbol EMDK for Android** folder into the /Users/Shared folder.


**Integrate the EMDK Wizard plug-in into Android Studio**

1. Launch Finder and go to the Applications folder.

2. Locate Android Studio.app, right click and select Show Package Contents.

	![img](../../images/setup/mac/image13.png)

3. Locate the Contents\plugins directory.

	![img](../../images/setup/mac/image14.png)

4. Copy com.symbol.emdk.wizard.intellijIdea\_x.x.xx folder from **EMDK\_FILES/Andoid Studio** into the plugins directory.

5. Exit & Launch Android Studio.

Now the “EMDK” menu should appear in the Android Studio menu bar:

![img](../../images/setup/mac/image16.png)

7.	Launch EMDK -> About to see installed EMDK Wizard components.

![img](../../images/setup/mac/emdk_about.png)


##Configuring ADB connectivity with Symbol Android devices on Mac OSX
The ADB connectivity on Mac OS X for Symbol Android devices will not be successful by default. Therefore the Symbol Vendor ID needs to be specified under third party USB Vendor ID list to get the device connected on Mac OS X.

>NOTE: The Google Mobile Service (GMS) devices (ex: TC 55 GMS) will be connected without any change to the USB Vendor ID list.

To add the Symbol Vendor ID to ADB:

1. Enter the following command using a terminal: `echo 0x05e0 >> ~/.android/adb_usb.ini`
2. Next, navigate to the ADB directory: `cd /Users/<user>/Library/Android/sdk/platform-tools/`
3. Stop the the adb service if it is running: `./adb kill-server`
3. Connect a Symbol Android device and enter the following command verify the list of attached devices:
	`./adb devices`













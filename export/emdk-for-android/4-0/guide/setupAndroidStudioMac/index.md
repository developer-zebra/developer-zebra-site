---
title: EMDK For Android Setup on Mac
---

##Installing Android Studio 1.1.x

1. Go to http://developer.android.com/sdk/index.html.


	![img](images/setup/mac/image3.png)

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

###How to determine which API platforms are installed in Android Studio

1. Launch Android Studio from Start Programs
2. Go to Tools / Android / SDK Manager
3. Check that the status of Android 4.1.2 (API 16) and Android 4.4.2 (API 19) SDK Platforms is "Installed".
4. If either SDK platform is not installed check the SDK check mark, click Install Packages, and follow the on screen instructions. When the install is complete, restart Android Studio.

	![img](images/setup/mac/image4.png)


###How to determine which Build-tools is installed in Android Studio

1. Launch Android Studio from Start Programs
2. Go to Tools / Android / SDK Manager
3. Check the status of Android SDK Build-tools 21.1.x or newer is "Installed".
4. If Android SDK Build-tools 21.1.x or newer is not installed check the SDK check mark, click Install Packages, and follow the on screen instructions. When the install is complete, restart Android Studio.

	![img](images/setup/mac/image5.png)

##Installing EMDK v3.1

###Prerequisites

- Android Studio 1.1.x or newer
	- Android API 16, API 19 platforms
	- Android SDK Build-tools 21.1.x or newer

The following items can be found in [EMDK 3.1 for Mac installation zip file](https://s3.amazonaws.com/emdk/EMDK_3.1_MAC.zip):

- EMDK add-ons
	 - \SDK\addon-symbol-emdk_v3.1_API-16
	 - \SDK\aaddon-symbol-emdk_v3.1_API-19
- EMDK Wizard core components
	- \Symbol EMDK for Android
- EMDK Wizard plug-in for Android Studio
	- \Android Studio\com.symbol.emdk.wizard.intellijIdea_3.1_20
- EMDK device runtime
	- \Device Update\EmdkOSUpdateApp_v3.1.32.apk

>NOTE: Instructions for installing EmdkOSUpdate on Mac can be found in [Device Setup](/emdk-for-android/4-0/guide/setupDevice).

###EMDK SDK add-on Integration
To add the EMDK 3.1 APIs to the Android SDK please refer the following instructions:

1. Navigate to the /Users/**username**/Library/Android/sdk/add-ons directory.

	![img](images/setup/mac/image6.png)

2. Copy the addon-symbol-emdk_v3.1_API-16 and addon-symbol-emdk_v3.1_API-19 folders into the add-ons directory.

	![img](images/setup/mac/image7.png)

3. Exit & Launch Android Studio
4. Go to Tools > Android > SDK Manager

Now the integrated EMDK add-ons should appear in the SDK Manager
	![img](images/setup/mac/image8.png)

###EMDK Wizard plug-in Integration

Configuring Mac OS X with EMDK Wizard core components

1. Locate the /Users/Shared folder.

	![img](images/setup/mac/image10.png)

2. Copy Symbol EMDK for Android folder into the /Users/Shared folder.

	![img](images/setup/mac/image11.png)

EMDK Wizard plug-in integration into Android Studio

1. Launch Finder and go to Applications (on the left side panel)

	![img](images/setup/mac/image12.png)

2. Locate Android Studio.app, right click and select Show Package Contents.

	![img](images/setup/mac/image13.png)

3. Locate the Contents\plugins directory.

	![img](images/setup/mac/image14.png)

5. Copy the com.symbol.emdk.wizard.intellijIdea_3.1.xx folder into the plugins directory.

	![img](images/setup/mac/image15.png)

6. Exit & Launch Android Studio.

Now the “EMDK” menu should appear in the Android Studio menu bar:

![img](images/setup/mac/image16.png)


##Installing EMDK v3.1 Update1

###Prerequisites
- [EMDK for Android 3.1](https://s3.amazonaws.com/emdk/EMDK_3.1_MAC.zip) - (Follow instructions above)

The following items can be found in [EMDK 3.1 Update1 for Mac installation zip file](https://s3.amazonaws.com/emdk/EMDK_3.1_UPDATE1_MAC.zip):

- EMDK add-ons
	 - \SDK\aaddon-symbol-emdk_v3.1_API-19
- EMDK Wizard core components
	- \Symbol EMDK for Android\
- EMDK device runtime
	- \Device Update\EmdkOSUpdateApp_v3.1.36.apk

>NOTE: Instructions for installing EmdkOSUpdate on Mac can be found in [Device Setup](/emdk-for-android/4-0/guide/setupDevice).

###Manual Installation

1. Install the full [EMDK for Android 3.1](https://s3.amazonaws.com/emdk/EMDK_3.1_MAC.zip)  (refer to instructions above)
2. Download and unzip [EMDK for Android 3.1 Update1](https://s3.amazonaws.com/emdk/EMDK_3.1_UPDATE1_MAC.zip)
3. Update the SDK Add-on by copying the contents of \SDK\ to /Users/<user>/Library/Android/sdk/add-ons/
		>NOTE: this update is for API 19 only

4. Update the EMDK Wizard plug-in by copying the contents of \Symbol EMDK for Android\ to /Users/Shared/Symbol EMDK for Android/




##Resolving JDK version conflict

This section will provide the required steps to modify the Info.plist of the Android Studio.app, in order to enable the support for plug-ins built using **JDK 7**.

Android Studio 1.1.0 is configured with **JDK 6**. Once the EMDK Wizard plug-in has been installed on Android Studio, if there is a JDK version conflict the following symptoms can be observed.

Notification stating an internal IDE error.

![img](images/setup/mac/image18.png)

Empty EMDK Wizard menu

![img](images/setup/mac/image19.png)



If these symptoms are observed check the JRE version used by the Android studio. Please refer the following steps:

1. Click on Android Studio > About Android Studio

	![img](images/setup/mac/image20.png)

2. Check the JRE version

	![img](images/setup/mac/image21.png)



If the JRE version is 1.6.x the EMDK Wizard plug-in for Android studio will fail. Hence, to solve this issue the info.plist of the Android Studio app will have to be configured. The configuration change will set the JRE version used by Android Studio as 1.7.x. Please refer the following steps:

1. Launch Finder > click on Applications on the left side pane > locate the Android Studio.app

	![img](images/setup/mac/image22.png)


2. Right click on the Android Studio.app > select Show Package Contents

	![img](images/setup/mac/image23.png)

3. Expand the Contents directory > create a backup copy of the Info.plist > open the Info.plist using a text editor

	![img](images/setup/mac/image24.png)

	![img](images/setup/mac/image25.png)


4. Search and locate the <key>JVMVersion</key> entry > change the 1.6* to 1.6+ > Save the file and exit the editor.

	![img](images/setup/mac/image26.png)


5. Exit and launch the Android Studio IDE and check the EMDK Wizard menu item, it should be visible now.

	![img](images/setup/mac/image27.png)

6. Additionally check the JRE version of the Android Studio; it should now be 1.7.x.

	![img](images/setup/mac/image28.png)



##Configuring ADB connectivity with Symbol Android devices on Mac OSX
The ADB connectivity on Mac OS X for Symbol Android devices will not be successful by default. Therefore the Symbol Vendor ID needs to be specified under third party USB Vendor ID list to get the device connected on Mac OS X.

>NOTE: The Google Mobile Service (GMS) devices (ex: TC 55 GMS) will be connected without any change to the USB Vendor ID list.

To add the Symbol Vendor ID to ADB:

1. Enter the following command using a terminal: `echo 0x05e0 >> ~/.android/adb_usb.ini`
2. Next, navigate to the ADB directory: `cd /Users/<user>/Library/Android/sdk/platform-tools/`
3. Stop the the adb service if it is running: `./adb kill-server`
3. Connect a Symbol Android device and enter the following command verify the list of attached devices:
	`./adb devices`


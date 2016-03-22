---
title: EMDK For Android Setup (Eclipse)
layout: guide.html
product: EMDK For Android
productversion: '2.3'
---

## Install EMDK for Eclipse

### Installing Eclipse
1.	Go to [http://eclipse.org/downloads/](http://eclipse.org/downloads/).
2.	Download `Eclipse IDE for Java Developers` 3.7.2 (Indigo) or greater.
3.	Make a note of the name and location where you save the Eclipse on your system-you will need to refer to the standalone Eclipse directory later when installing EMDK for Android.

> NOTE: Eclipse 3.6 (Helios) is no longer supported with the latest version of ADT.

### Installing ADT Plugin to Eclipse
>NOTE: Since Google has released Android Studio, the ADT **Bundle** is no longer available for download. You will need to install Eclipse with the ADT **Plug-In** instead.

1.	Start Eclipse, then select `Help : Install New Software`.
2.	Click `Add`, in the top-right corner.
3.	In the Add Repository dialog that appears, enter `ADT Plugin` for the Name and the following URL for the Location: `https://dl-ssl.google.com/android/eclipse/`

	> NOTE: The Android Developer Tools update site requires a secure connection. Make sure the update site URL you enter starts with HTTPS.
4.	Click `OK`.
5.	In the Available Software dialog, select the check box next to Developer Tools and click Next.
6.	In the next window, you'll see a list of the tools to be downloaded. `Click Next`.
7.	Read and accept the license agreements, then click `Finish`.

	> NOTE: If you get a security warning saying that the authenticity or validity of the software can't be established, click OK.
8.	When the installation completes, restart Eclipse.

>NOTE: EMDK for Android requires ADT v22.3.0-887826 or higher version.

### Installing Android SDK
1.	Go to [http://developer.android.com/sdk/index.html](http://developer.android.com/sdk/index.html).
2.	Click on the hyperlink [Other Download Options](http://developer.android.com/sdk/index.html#Other) or scroll down towards the section `Other Download Options`.
3.	Look for the table under sub section `SDK Tools Only`.
4.	Click on the Package [installer_r24-windows.exe](http://dl.google.com/android/installer_r24-windows.exe) under Platform `Windows`.
5.	Accept the License Agreement.
6.	Click on the button `Download installer_r24-windows.exe`.
7.	Double-click the downloaded executable to start the installation.
8.	Make a note of the name and location where you save the Android SDK on your system, as you will need to refer to the standalone Android SDK directory later when installing EMDK for Android.


### Configuring the Android Developer Tools (ADT) for EMDK
The EMDK requires Android API's 16 and 19 to be Installed.

To check which API's you have installed:

1. In Eclipse go to `Window` then `Android SDK Manager`
2. Check that the status of `Android 1.1.2 (API 16)` and `Android  4.4.2 (API 19)` SDK Platforms status is `Installed`.
3. If either SDK platform is not installed check the SDK check mark, click `Install Packages`, and follow the on screen instructions. When the install is complete restart Eclipse.


### Installing EMDK for Android
>NOTE: Before installing EMDK For Android Update 1, you must first install the full version, EMDK for Android v3.1 [EMDK-A-030109.exe]. To Obtain v3.1, go to [http://portal.zebra.com/Support/US-EN](http://portal.zebra.com/Support/US-EN), and search for `EMDK for Android` using Search Support. Download Version 3.1. Then follow the steps below:

###Install version 3.1

`If you already have v3.1 installed, skip to Install version 3.1 Update 1 below.`

1. Run the EMDK 3.1 Installer as Administrator, Then Click Next.

	![img](../../images/setup/emdkInstall01.png)

2. Click I Agree after reading the License Agreement to continue the installation.

	![img](../../images/setup/emdkInstall02.png)

3. Click next or select a custom install location by clicking Browse and then click next.

	![img](../../images/setup/emdkInstall03.png)

4. Continue installing EMDK for Android in Eclipse by selecting the "Use Eclipse/ADT" radio button and then Click Next.
>NOTE: If Android Studio is not installed on your computer this screen will look slightly different. Stating that you should exit the installer and install Android studio. Ignore those instructions if you are not installing the EMDK in Android studio at this time.

	![img](../../images/setup/emdkInstall08.png)

5. If you are installing the EMDK into a ADT Bundle select the first radio button ( As Shown ), then click next.
> NOTE: If you are installing the EMDK into a standalone version of Eclipse that has the ADT plugin installed Skip to STEP #7

	![img](../../images/setup/emdkInstall09.png)
6. Select the root folder of your ADT Bundle installation buy clicking Browse, then Click Install.

	![img](../../images/setup/emdkInstall10.png)

7. If you are installing the EMDK into a standalone version of Eclipse that has the ADT plugin installed, select the second radio button ( As Shown ), then click next.

	![img](../../images/setup/emdkInstall11.png)

8. Browse for or manually enter paths to the root of both your Eclipse folder and Android SDK folder, then Click Install.

	![img](../../images/setup/emdkInstall12.png)

###Install version 3.1 Update 1

1. Run the EMDK 3.1 Update 1 Installer as Administrator, Then Click **Next >**.

	![img](../../images/setup/install31UD1_AS_1.png)

2. Backup your samples, or select **Next >** to Continue.

	![img](../../images/setup/install31UD1_AS_2.png)

3. Click **I Agree** after reading the License Agreement to continue the installation.

	![img](../../images/setup/install31UD1_AS_3.png)

4. When instalation completes, select **Next >**

	![img](../../images/setup/install31UD1_AS_5.png)

5. Then select **Finish**

	![img](../../images/setup/install31UD1_AS_6.png)

## Verifying EMDK for Android Development Environment

###	Verifying the EMDK Wizard plug-in integration into the ADT/Eclipse IDE  
1.	Run `eclipse.exe` available under `[adt-bundle]\eclipse` (ex. \adt-bundle-windows-x86-20140321\eclipse\eclipse.exe) or `[eclipse-root]` (ex. \eclipse-standard-kepler-SR2-win32\eclipse\eclipse.exe).
2.	The menu bar should contain a new menu called "EMDK" (see below)

	![img](../../images/setup/image009.jpg)

### Verifying the SDK add-on integration into the ADT/Eclipse IDE
1.	Select any existing Android application project.
2.	Go to `File` -> `Properties`

	![img](../../images/setup/image011.jpg)
3.	Select `Android` from left pane.

	![img](../../images/setup/image015.jpg)
4.	Check the availability of `EMDK APIs` in the list of Project Build Targets.

	![img](../../images/setup/image039.jpg)

### Verifying EMDK for Android Runtime Environment

To check whether the EMDK runtime is installed on the device or not, check for the existence of `/system/framework/com.symbol.emdk.jar` on the device.


![img](../../images/setup/image097.jpg)


##Manually Remove EMDK for Android
In most cases running the uninstall program will cleanly remove EMDK For Android from your PC. If the uninstall fails for whatever reason, you may not be able to reinstall. The following directions will allow you to cleanly uninstall all components of the EMDK For Android. Follow the step by step instructions below:

###1. Removing installed EMDK directory
1. Open command prompt, type `regedt32` and press Enter.
2. In Registry Editor, locate the following registry key:
* On 32-Bit OS `[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall]`
* On 64-Bit OS `[HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion \Uninstall]`

3. Each key listed under Uninstall in the left pane of Registry Editor represents a program that is currently installed. Scroll through and identify the registry key that has the name EMDK for Android (See Fig.01 or Fig.02).
* Fig.01
	![img](../../images/setup/uninstallfig1.png)
* Fig.02
	![img](../../images/setup/uninstallfig2.png)

4. Under key EMDK for Android look for the value UninstallString in the details pane on the right and identify the EMDK for Android installation path (i.e. the parent directory where uninstall.exe resides. See Fig.01 or Fig.02).

5. Locate and delete the Symbol EMDK for Android folder, subfolders and files.

###2. Removing installed EMDK samples directory

1. Locate and delete the Symbol EMDK for Android folder available at `Users\Public`.

###3. Removing installed EMDK short cuts under Start Programs

1. Locate and delete the following folder available at `<Profile folder>All Users\Start Menu\Programs`:
* `Symbol EMDK for Android vX.X` where vX.X = Base version of the Installation.
	* Example: `v3.0` when you have installed `EMDK for Android v3.0`

2. Additionally on Windows 8 and Windows 8.1, locate and delete the following .lnk file available at `<Profile folder>All Users\Start Menu\Programs`:
* `Symbol EMDK for Android vX.X.lnk` where vX.X = Base version of the Installation.
	* Example: `v3.0` when you have installed `EMDK for Android v3.0`

###4. Removing installed EMDK plug-in and add-on from ADT/ Eclipse IDE and Android SDK

>Note: Make sure to close all the Android Developer Tools (ADT)/ Eclipse IDE windows before proceeding.

1. For ADT Bundle users, under key EMDK for Android look for the value ADTRootFolder in the details pane on the right and identify the ADT Bundle root folder (see Fig.01).
2. Locate and remove the Eclipse plug-in and SDK add-on installed by EMDK as below:
* Go to `\<adt-bundle>\eclipse\plugins` and delete `com.symbol.emdkwizard_x.x.x.jar` file and `EMDK` folder.
* Go to `\<adt-bundle>\sdk\add-ons` and delete `addon-symbol-emdk_vX.X_API-16` and `addon-symbol-emdk_vX.X_API-19` folders.

3. For Non ADT Bundle users, under key EMDK for Android look for the values EclipseRootFolder and SDKRootFolder in the details pane on the right and identify the Eclipse and SDK root folders installed separately (see Fig.02).

4. Locate and remove the Eclipse plug-in and SDK add-on installed by EMDK as below:
* Go to `\<eclipse-root>\plugins` and delete `com.symbol.emdkwizard_x.x.x.jar` file and `EMDK` folder.
* Go to `\<sdk-root>\sdk\add-ons` and delete `addon-symbol-emdk_vX.X_API-16` and `addon-symbol-emdk_vX.X_API-19` folders.

###5. Removing installed EMDK registry settings

1. In Registry Editor, locate the following registry key:
* On 32-Bit OS `[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall]`
* On 64-Bit OS `[HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall]`

2. Right-click on the EMDK for Android key in the left pane and then click Delete. Click Yes to the prompt `Are you sure you want to delete this key and all of its subkeys?`.

3. If you have installed EMDK updates, scroll through and identify the following registry key:
* `EMDK for Android vX.X Update(X)` where vX.X = Base version of the Installation.
	* Example: `v3.0` when you have installed `EMDK for Android v3.0`
* Update(X) Update version only if an update is installed.
	* Example: `Update1` when you have installed `EMDK for Android v3.0 Update1`.

4. Right-click on the above key and then click Delete. Click Yes to the prompt `Are you sure you want to delete this key and all of its subkeys?`.


##Using EMDK as an external library in Eclipse

###Adding EMDK library as an external jar


1. Go to `File` menu and select `Properties`.

2. Select `Android` from left-pane.

	![img](../../images/setup/emdkJarAsLib01.png)

3. Specify the intended target (except EMDK) under `Project Build Target` and click `Apply`.

4. Select `Java Build Path` from left-pane.

5. Select `Libraries` (tab) from right-pane.

6. Click `Add External JARs`.

7. Browse and specify the `com.symbol.emdk.jar` available under integrated EMDK sdk add-on (ex: `<adt-bundle>\sdk\add-ons\addon-symbol-emdk_v3.1_API-16\libs\com.symbol.emdk.jar`).

	![img](../../images/setup/emdkJarAsLib02.png)



##Enabling intellisense for EMDK

1. Click on the arrow and expand the options of `com.symbol.emdk.jar` (above screen).

	![img](../../images/setup/emdkJarAsLib03.png)




2. Select `Javadoc location` from the drop down list.

3. Click `Edit…`

4. Click `Browse` and specify the `Javadoc` available under EMDK sdk add-on (ex: `<adt-bundle>\sdk\add-ons\addon-symbol-emdk_v3.1_API-16\docs\reference\`).

	![img](../../images/setup/emdkJarAsLib04.png)



5. Click `Validate…`

6. The specified Javadoc path will be validated and shows the following message if successful.

	![img](../../images/setup/emdkJarAsLib05.png)

7. Click `Apply` and `OK`.

8. Now the intellisense for EMDK is enabled.

9. To verify, type any EMDK class/interface/method name (ex: EMDKListener) and press `F2`.

	![img](../../images/setup/emdkJarAsLib06.png)










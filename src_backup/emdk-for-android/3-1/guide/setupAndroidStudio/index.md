---
title: EMDK For Android Setup (Android Studio1.0.x)
layout: guide.html
product: EMDK For Android
productversion: '2.3'
---

##Installing EMDK for Android Studio

###Installing Android Studio
1. Go to [http://developer.android.com/sdk/index.html](http://developer.android.com/sdk/index.html)
2. Download `Android Studio 1.x`

>NOTE: Android Studio should be installed on your computer before running the EMDK for Andriod installer.


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

4. Continue installing EMDK for Android in Android studio by selecting the `Use Android Studio` radio button ( As Shown ) and select Next.

	![img](../../images/setup/emdkInstall04.png)


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



##EMDK for Android development with Android Studio

In order to enable EMDK development in your project, you must first add the EMDK library. The EMDK for Android library can be added to your project via one of the following three methods.

###Specify the EMDK SDK add-on as the Minimum SDK in the New Android Studio Project wizard

1. Launch Android Studio

2. Select "Start a new Android Studio project" or File \> New Project.

3. Enter "Application name" and "Company Domain" and Click Next

4. Select EMDK SDK add-on (ex: "Symbol Technologies, Inc.: EMDK API (16)") as the "Minimum SDK" under Phone and Tablet.

	![img](../../images/setup/as_image8.png)

5. Complete the New project Wizard by Clicking Next \> Next \> Finish
	>Android Studio will display your project when Gradle build process is complete.

To verify that the EMDK has been added to your project.

1. Go to File \> Project Structure.

2. Click on app under Modules in the Project Structure Window's left-pane.

3. Check the value of "Compile Sdk Version". It should be the selected EMDK SDK add-on (see below)

> Symbol Technologies, Inc.:EMDK 3.0 (API 16):16

> Symbol Technologies, Inc.:EMDK 3.0 (API 19):19
>
>![img](../../images/setup/as_image12.png)


Another method to verifiy EMDK project integration is via the build.gradle file.

Open build.gradle (Module: app) from the left-pane. The compileSdkVersion should be assigned to EMDK SDK add-on.

![img](../../images/setup/as_image14.png)

**Your project is now ready for EMDK development (see EMDK Help for more information on creating an EMDK app).**



###Import EMDK lib JAR as a Module
Starting with a previously created Project with a minimum API level of 16 or 19

1. Go to File \> Project Structure

2. Press the button marked with "+" at the top-left to add a new module.

3. Select "Phone and Tablet Application".

4. Select "Import JAR or AAR Package" from the list More Modules then Click Next

5. Click Browse button and locate the EMDK jar file (com.symbol.emdk.jar) from the SDK add-on folder and click OK

	![img](../../images/setup/as_image25.png)

	>The new module will eventualy appear in the left-pane of the project structure window.

6. Click on app in left-pane and select the dependencies tab

	![img](../../images/setup/as_image28.png)

7. Press the button marked with the "+" at top-right to add select "Module Dependency".

	![img](../../images/setup/as_image29.png)

8. Select "com.symbol.emdk" from the "Choose modules" dialog then Press OK.

9. The new dependency should be listed, now Press OK

	![img](../../images/setup/as_image31.png)

**Your project is now ready for EMDK development (see EMDK Help for more information on creating an EMDK app).**


###Add EMDK SDK add-on name as the Compile Sdk Version in Project Structure
Starting with a previously created Project with a minimum API level of 16 or 19.

1. Go to File \> Project Structure

2. Select app in the left-pane and Properties tab.

3. Manually enter one of the following add-on names in the "Compile Sdk Version" depending on the API version (see below):

	>SDK add-on (API 16) name: **Symbol Technologies, Inc.:EMDK 3.0 (API 16):16**

	>SDK add-on (API-19) name: **Symbol Technologies, Inc.:EMDK 3.0 (API 19):19**

	![img](../../images/setup/as_image35.png)

4. Click OK then Select Yes in the resulting dialog.

	![img](../../images/setup/as_image36.png)

**Your project is now ready for EMDK development (see EMDK Help for more information on creating an EMDK app).**


##Importing EMDK Samples into Android Studio

Starting at the Android Studio Welcome Screen,
Select "Import Non-Android Studio project"

1. Locate the EMDK Samples path.
>For example:  "C:\\Users\\Public\\Symbol EMDK for Android\\v3.0\\Samples\\ADT".

2. Select the preferred sample, and press OK.

	![img](../../images/setup/as_image38.png)

3. Click Next and then Finish to complete the import wizard.

	> When Android Studio has completed the Gradle build, your sample project will be displayed.

4. From the Build menu, select Rebuild Project.

	![img](../../images/setup/as_image47.png)

5. Connect a Symbol Android device via USB, and select Run from the Run menu.

	![img](../../images/setup/as_image48.png)













---
title: Using DataWedge with EB
productversion: '2.6'
product: Enterprise Browser
layout: guide.html
---
## Overview 

The DataWedge app (included on every Zebra device) makes it possible to acquire barcode data from within an Enterprise Browser app without using the EB APIs. This guide explains how to configure an EB app to scan and process barcode data using DataWedge, which then enters the captured data as keystrokes into any EB input field. 

The steps for enabling DataWedge for use with EB (and for disabling it so that apps can use the scanning APIs) vary slightly depending which DataWedge version is installed on the device. From the sections below, select the instructions matching the DataWedge version installed on the target device.

<!-- 7/9/20- removed per eng since EB now automatically relinquishes scanner control when in background.

**It's important to note that <u>control of barcode scanning hardware is exclusive</u>. When DataWedge is active, Enterprise Browser scanning APIs will be inoperable**. Likewise, an Enterprise Browser app that uses those APIs will prevent other apps (including DataWedge) from accessing the scanner(s). This guide explains how to take control of a device's scanner hardware and to subsequently release it to other apps.  
 -->
 <br>

##### This <u>Android-only guide</u> contains instructions for configuring Enterprise Browser to use:

* [DataWedge 6.5 and later](#dw65andlater)
* [DataWedge 6.0.1 and later](#dw601to64)
* [DataWedge 2.2.9 to 5.1.13](#dw229to5113)
* [DataWedge 2.2.8 and older](#dw228andolder)

[Which DataWedge version is installed?](../../../../datawedge/latest/guide/about/#whichversionisinstalled)

-----

### DW 6.5 and later

EB 2.0 works directly with DataWedge 6.5 and later versions provided the `<usedwforscanning>` tag in the EB app's `Config.xml` file is configured correctly (see below). For help editing the `Config.xml` file, see the **[Config Editor Utility guide](../ConfigEditor/)**. 

#### Prerequisites
* **DataWedge 6.5** or later in the device ([more info](../../../../datawedge/latest/guide/about/#whichversionisinstalled))
* **Enteprise Browser 2.0** or later in the device 
* **EB API module** `ebapi-modules.js ` on the device ([more info](../apioverview)) 

**To enable DataWedge 6.5 (or later) in an EB 2.0 (or later) app**: 

&#49;. Confirm (or configure) a value of "1" in the `<usedwforscanning>` tag in the app's `Config.xml` file as below:

		:::xml
		<Applications>
			<Application>
			...
				<usedwforscanning  value=”1” />
			...

&#50;. Push the updated `Config.xml` file to the device and restart the EB app.  

##### The EB app is now ready to use DataWedge for scanning. 

> To change DataWedge settings from within an EB app, see the [EB DataWedge Intents guide](../dwintents).  

-----

#### Re-enable EB APIs

**To disable DataWedge and enable EB APIs for scanning**: 

**Set a value of "0" in the &lt;usedwforscanning&gt; tag**, as shown:  

		:::xml
	  <Applications>
	    <Application>
	    ...
		<usedwforscanning  value=”0” />
		...

-----

### DW 6.0.1 to 6.4
**Important**: Some versions of DataWedge 6.x automatically disable Enterprise Browser after every device reboot by adding it to the "Disabled apps list." If `com.symbol.enterprisebrowser` reappears in the Disabled apps list after reboot, it must be manually removed before EB can use DataWedge for scanning. The only alternative is to upgrade DataWedge, which for Android requires a new BSP (OS image). Such updates should be attempted only with the guidance of [Zebra Support](https://www.zebra.com/us/en/about-zebra/contact-zebra/contact-tech-support.html).  

#### Use DataWedge for Scanning

**To enable an EB app to scan with DataWedge 6.0.1 and later**: 

&#49;. Confirm that no association with `com.symbol.enterprisebrowser` exists in the "Disabled app list" in the DataWedge Settings panel:
  * In **DataWedge**, select **Menu->Settings->Disabled app list**. The list of disabled apps appears.

  * **Remove** `com.symbol.enterprisebrowser` **from the list**, if present (see note, above). 

&#50;. In the EB app's `config.xml` file, set a value of "1" in the [&lt;usedwforscanning&gt;](../configreference/#usedwforscanning) tag.

#### Use Enterprise Browser APIs for Scanning

**To use a device scanner through an Enterprise Browser API**:

  * Set the value in the [&lt;usedwforscanning&gt;](../configreference/#usedwforscanning) tag of the EB app's `config.xml` file to "0"

-----

### DW 2.2.9 to 5.1.13
Enabling these versions of DataWedge for use by an Enterprise Browser app requires two DataWedge profiles to be downloaded and activated separately using the steps in the section below.

#### Use DataWedge for Scanning

**To enable an EB app to scan with DataWedge versions 2.2.9 - 5.1.13**: 

1. **Download the required DataWedge (`.db`) profiles**:
    * [Download RhoElements Profile](https://www.zebra.com/content/dam/zebra_new_ia/en-us/software/developer-tools/enterprise-browser/dwprofile_RhoElements.db)
    * [Download EnterpriseBrowser Profile](https://www.zebra.com/content/dam/zebra_new_ia/en-us/software/developer-tools/enterprise-browser/dwprofile_EnterpriseBrowser.db)
2. **Copy both profiles** into the **`/Android/data/com.symbol.datawedge/files`** directory on the device, replacing the existing file(s), if any. 
3. On the device, **install the Enterprise Browser app that will be using DataWedge** (if not already installed). 
4. **Start DataWedge** on the device. 
5. In **DataWedge**, select **Menu->Settings->Import Profile**.  A list of available profiles appears ([as shown on this example screen](../../../../datawedge/5-0/guide/advanced#importaprofile)).
6. **Must be done in this order**: 
    * From the list, **tap on the "RhoElements" Profile copied in Step 2**. After the Profile is imported, focus returns to the previous screen and a confirmation message appears. 
    * **Tap on the "EnterpriseBrowser" Profile** (**must** be activated last).
7. **Tap the BACK button** to return to the DataWedge Profiles list. Both new Profiles are listed, and the **EnterpriseBrowser Profile (activated last) should be enabled**. 
8. In the EB app's `config.xml` file, set a value of "1" in the [&lt;usedwforscanning&gt;](../configreference/#usedwforscanning) tag.

#### Use Enterprise Browser APIs for Scanning

**To use a device scanner through an Enterprise Browser API**:

  * In the EB app's `config.xml` file, set a value of "0" in the [&lt;usedwforscanning&gt;](../configreference/#usedwforscanning) tag.

-----	

### DW 2.2.8 and lower
As documented above, **control of barcode scanning hardware is exclusive**. When DataWedge is active, Enterprise Browser APIs are prevented from accessing device scanner(s), and an Enterprise Browser app that uses those APIs will likewise prevent other apps (including DataWedge) from accessing the scanner(s). To use the Enterprise Browser scanning APIs, it is therefore necessary to disable DataWedge, either on the entire device or for EB apps only (Options 1 and 2, below). 

#### Use DataWedge for Scanning

**To enable an EB app to scan with DataWedge 2.2.8 and lower**: 

* In the EB app's `config.xml` file, set a value of "1" in the [&lt;usedwforscanning&gt;](../configreference/#usedwforscanning) tag.

#### Use Enterprise Browser APIs for Scanning

Making device scanners available to Enterprise Browser APIs can be done either by **disabling DataWedge on the device (Option 1)**, which prevents all other device apps from using DataWedge, or by **disabling DataWedge only for Enterprise Browser apps (Option 2)**, which permits other device apps to use DataWedge when EB isn't running.

##### Option 1: Disable DataWedge on the device

1. **Start DataWedge** on the device.
2. In DataWedge, select **Menu->Settings**.
3. **Uncheck the "DataWedge enabled"** checkbox.
4. In the EB app's `config.xml` file, set a value of "0" in the [&lt;usedwforscanning&gt;](../configreference/#usedwforscanning) tag.

DataWedge is now disabled and unavailable to any app on the device.  

**Note: DataWedge also can be disabled (or re-enabled) programmatically using [DataWedge APIs](../../../../datawedge)**.

##### Option 2: Disable DataWedge only for Enterprise Browser

**To create and disable an Enterprise Browser Profile in DataWedge**: 

1. **Install the Enterprise Browser app** that will use DataWedge.
2. **Start DataWedge**.
3. In DataWedge, select **Menu->New Profile**, **Enter a Profile name** and tap **OK**. The list of Profiles appears.
4. Tap on the newly created profile.
5. In the **Applications section**, **tap Associated apps**.
6. Tap **Menu->New app/activity**. A list of apps/activities appears. 
7. From the list, **select the package name of the EB app** (i.e. `com.symbol.enterprisebrowser`) that will use DataWedge. The app activities list appears. 
8. From the app activities list, **tap the asterisk (*) to associate all app activities** with the Profile, or tap on an indvidual activity to use DataWedge only for that specific activity. 
9. **Tap BACK** to return to the Profile screen.
10. Confirm that the Profile's **"Profile enabled" box is <u>checked</u>**.
11. In the new Profile, **<u>uncheck</u> the "Enabled" box** for these three sections: **Barcode input, Keystroke output and Intent output**.
12. In the EB app's `config.xml` file, set a value of "0" in the [&lt;usedwforscanning&gt;](../configreference/#usedwforscanning) tag.

DataWedge will now be disabled whenever an Enterprise Browser app is running. 

-----

Related guides: 

* [DataWedge User Guide](../../../../datawedge)
* [Enterprise Browser APIs](../../api)
* [API Compatibility Matrix](../compatibility)

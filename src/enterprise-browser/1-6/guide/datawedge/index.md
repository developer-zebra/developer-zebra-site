---
title: Using DataWedge with EB
productversion: '1.6'
product: Enterprise Browser
layout: guide.html
---
##Overview 

The DataWedge app (included on every Zebra device) makes it possible to fetch barcode data from within an Enterprise Browser application without using the Enterprise Browser APIs. This guide explains how to configure an EB app to scan and acquire barcode data using DataWedge, which then enters the captured data as keystrokes into any EB input field. 

The processes for enabling DataWedge for use with EB (and for disabling it so that apps can use the scanning APIs) vary slightly depending which DataWedge version is installed on the device. It's important to note that **control of barcode scanning hardware is exclusive**. When DataWedge is active, the Enterprise Browser Barcode APIs will be inoperable. Likewise, an Enterprise Browser app that uses Barcode APIs will prevent other apps (including DataWedge) from accessing the scanner(s). This guide explains how to take control of a device's scanner hardware and to subsequently release it to other apps. From the sections below, select the instructions matching the DataWedge version installed on the target device.  

**Configure Enterprise Browser to use**:

*  [DataWedge 6.0.1 and higher](#dw601andhigher)
*  [DataWedge 2.2.9 to 5.1.13](#dw229to5113)
*  [DataWedge 2.2.8 and lower](#dw228andlower)
*  [Barcode APIs](#usebarcodeapiforscanning)

[Which DataWedge version is installed?](../../../../datawedge/6-2/guide/about/#whichversionisinstalled)

-----

### DW 6.0.1 and higher

**To enable an EB app to scan with DataWedge 6.0.1 and higher**: 

&#49;. Confirm that no association with `com.symbol.enterprisebrowser` exists in the "Disabled app list" in the DataWedge Settings panel:
  * In **DataWedge**, select **Menu->Settings->Disabled app list**. The list of disabled apps appears.

  * Remove `com.symbol.enterprisebrowser` from the list, if present (see note, below). 

&#50;. In the EB app's `config.xml` file, set a value of "1" in the [&lt;usedwforscanning&gt;](../configreference/#usedwforscanning) tag.
 
**Note**: Some versions of DataWedge 6.x automatically disable Enterprise Browser after every device reboot. If `com.symbol.enterprisebrowser` reappears in the Disabled apps list after reboot, there are two options: 
  * Remove the association after each reboot
  * [Upgrade DataWedge](https://www.zebra.com/us/en/support-downloads/software/utilities/datawedge-toolkit.html) to version 6.1.8 or higher (**This option applies only to devices running Windows Mobile/CE; not applicable to Android**)

-----

### DW 2.2.9 to 5.1.13

**To enable an EB app to scan with DataWedge versions 2.2.9 - 5.1.13**: 

1. **Download the required DataWedge (`.db`) profiles**:
    * [Download RhoElements Profile](https://www.zebra.com/content/dam/zebra_new_ia/en-us/software/developer-tools/enterprise-browser/dwprofile_RhoElements.db)
    * [Download EnterpriseBrowser Profile](https://www.zebra.com/content/dam/zebra_new_ia/en-us/software/developer-tools/enterprise-browser/dwprofile_EnterpriseBrowser.db)
2. **Copy both profiles** into the **`/Android/data/com.symbol.datawedge/files`** directory on the device, replacing the existing file(s) (if any). 
3. On the device, **install the Enterprise Browser app that will be using DataWedge** (if not already installed). 
4. **Start DataWedge** on the device. 
5. In **DataWedge**, select **Menu->Settings->Import Profile**.  A list of available profiles appears ([as shown on this example screen](../../../../datawedge/5-0/guide/advanced#importaprofile)).
6. From the list, **tap on the first profile copied in Step 2**. When the profile is imported, focus returns to the previous screen and a confirmation message appears. **Repeat for the second Profile**. 
7. **Tap the BACK button** to return to the DataWedge Profiles list. Both new Profiles are listed and the **EnterpriseBrowser Profile should be enabled by default**. 
8. In the EB app's `config.xml` file, set a value of "1" in the [&lt;usedwforscanning&gt;](../configreference/#usedwforscanning) tag.

-----	

### DW 2.2.8 and lower

**To enable an EB app to scan with DataWedge 2.2.8 and lower**: 

1. * In the EB app's `config.xml` file, set a value of "1" in the [&lt;usedwforscanning&gt;](../configreference/#usedwforscanning) tag.

2. Create a DataWedge Profile:
  1. Install the Enterprise Browser application that will use DataWedge.
  2. Start DataWedge.
  3. In DataWedge, select **Menu->New Profile**, **Enter a Profile name** and tap **OK**. The list of Profiles appears.
  4. Tap on the newly created profile.
  5. In the **Applications** section, **tap Associated apps**.
  6. Tap **Menu->New app/activity**. A list of apps/activities appears. 
  7. From the list, **select the package name of the EB app (i.e. `com.symbol.enterprisebrowser`) that will use DataWedge.
  8. From the app activities list, **tap the asterisk (*) to associate all app activities** with the Profile, or tap on an indvidual activity to use DataWedge for that specific activity only. 
  9. Click the **BACK** button to return to the Profile screen.
  10. Confirm that the Profile's **Profile enabled** checkbox is ticked.
  11. Uncheck all three **Enabled** checkboxes under sections: **Barcode input**, **Keystroke output** and **Intent output**.

-----

**To enable an EB app to scan with EB APIs**: 

###Use Enterprise Browser API for Scanning
To use the scanning APIs with an Enterprise Browser app, you will need to **either** [Disable DataWedge](#disabledatawedge) **or** [Create DataWedge Profile](#createdatawedgeprofile) for Enterprise Browser application with the settings described in the respective section below. 

####Disable DataWedge:
1. Start DataWedge application.
2. Select **Menu->Settings**.
3. Uncheck **DataWedge enabled** checkbox.
4. In the EB app's `config.xml` file, set a value of "0" in the [&lt;usedwforscanning&gt;](../configreference/#usedwforscanning) tag.



-----

### Use Barcode API for Scanning

**To use a device scanner through an Enterprise Browser API**:

  * Set the value in the [&lt;usedwforscanning&gt;](../configreference/#usedwforscanning) tag of the EB app's `config.xml` file to "0"

-----
Related guides: 

* [DataWedge User Guide](../../../../datawedge)
* [Enterprise Browser APIs](../../api)
* [API Compatibility Matrix](../compatibility)

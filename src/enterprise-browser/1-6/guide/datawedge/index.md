---
title: Using DataWedge with EB
productversion: '1.6'
product: Enterprise Browser
layout: guide.html
---
##Overview 

The DataWedge app (included on every Zebra device) makes it possible to fetch barcode data from within an Enterprise Browser application without using the Enterprise Browser APIs. This guide explains how to configure an EB app to scan and acquire barcode data using DataWedge, which then enters the captured data as keystrokes into any EB input field. 

**Important: Control of barcode scanning hardware is exclusive**. When DataWedge is active, the Enterprise Browser Barcode APIs will be inoperable. Likewise, an Enterprise Browser app that uses Barcode APIs will prevent other apps (including DataWedge) from accessing the scanner. This guide explains how to take control of a device's scanner hardware and how to subsequently release it to other apps. 

**See also: [DataWedge User Guide](../../../../datawedge)** 

-----

## Use DataWedge for Scanning
Enabling DataWedge for use with EB varies slightly depending which DataWedge version is installed on the device. Use the following instructions for scanning from within an Enterprise Browser app using either DataWedge or the Enterprise Browser Barcode API.

Not sure which DataWedge version is installed? Visit the ["Which Version is Installed?"](../../../../datawedge/6-2/guide/about/#whichversionisinstalled) section of the DataWedge About page to find out. Then return here.

**Configure Enterprise Browser to use**:

*  [DataWedge 6.0.1 and higher](#dw601andhigher)
*  [DataWedge 2.2.9 to 5.1.13](#dw229to5113)
*  [DataWedge 2.2.8 and lower](#dw228andlower)
*  [Barcode APIs](#usebarcodeapiforscanning)

### DW 6.0.1 and higher

&#49;. Remove the association to `com.symbol.enterprisebrowser` from the "Disabled app list" in the DataWedge Settings panel:
  * **In DataWedge**, select **Menu->Settings->Disabled app list** and **remove `com.symbol.enterprisebrowser` from the list that appears. 
  * **Note**: If **`com.symbol.enterprisebrowser`** activity is getting listed again after reboot under **Disable app list** settings location, then do the following as mentioned below:
       * **Either** remove the association of **`com.symbol.enterprisebrowser`** activity from **Disable app list** settings location each time after reboot.
     * **Or** upgrade DataWedge version to 6.1.8 or above. 
&#50;. For scanning to be enabled, the below runtime configuration tag must be set to 1:
    * **The [&lt;usedwforscanning&gt;](../configreference/#usedwforscanning) tag in the EB app's** `config.xml` **file must contain a value of "1"**.

-----

### DW 2.2.9 to 5.1.13

1. **Download the required DataWedge (`.db`) profiles**:
    * [Download RhoElements Profile](https://www.zebra.com/content/dam/zebra_new_ia/en-us/software/developer-tools/enterprise-browser/dwprofile_RhoElements.db)
    * [Download EnterpriseBrowser Profile](https://www.zebra.com/content/dam/zebra_new_ia/en-us/software/developer-tools/enterprise-browser/dwprofile_EnterpriseBrowser.db)
2. **Copy both profiles** into the **`/Android/data/com.symbol.datawedge/files`** directory to the device, replacing the existing file (if any). 
3. On the device, install the **Enterprise Browser** application that will be using **DataWedge** (if not already installed). 
4. **Start DataWedge** on the device. 
5. In **DataWedge**, select **Menu->Settings->Import Profile**.  A list of available profiles appears ([as shown on this example screen](../../../../datawedge/5-0/guide/advanced#importaprofile)).
6. From the list, **tap the profiles in order which were copied in Step 2**. When the profiles are imported, focus returns to the previous screen and a confirmation message appears. 
7. **Tap** the **BACK** button to return to the **DataWedge** profiles list. Both **RhoElements** and **EnterpriseBrowser** profiles are listed and the **EnterpriseBrowser** profile will be enabled by default. 
8. To enable scanning, set the runtime configuration tag to 1:
    * **The** [&lt;usedwforscanning&gt;](../configreference/#usedwforscanning) **tag in the EB app's** `config.xml` **file must contain a value of "1"**.

-----	

### DW 2.2.8 or lower

**To enable scanning with DataWedge**: 
    * Set the value in the [&lt;usedwforscanning&gt;](../configreference/index.md#usedwforscanning) tag in the EB app's `config.xml` file to "1"

###Use Enterprise Browser API for Scanning
In order to use the scanner with Enterprise Browser application you will need to **either** [Disable DataWedge](#disable-datawedge) **or** [Create DataWedge Profile](#create-datawedge-profile) for Enterprise Browser application with the settings described in the respective section below. 

####Disable DataWedge:
1. Start DataWedge application.
2. Select **Menu->Settings**.
3. Uncheck **DataWedge enabled** checkbox.
4. To enable scanning through the Enterprise Browser API:
    * Set the value of the [&lt;usedwforscanning&gt;](../configreference/#usedwforscanning) tag in the EB app's `config.xml` **file to "0"
  
####Create DataWedge Profile:
1. Install the Enterprise Browser application.
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

### Use Barcode API for Scanning

**To use a device scanner through an Enterprise Browser API**:

  * Set the value in the [&lt;usedwforscanning&gt;](../configreference/#usedwforscanning) tag of the EB app's `config.xml` file to "0"

-----

**See also: [DataWedge User Guide](../../../../datawedge)**

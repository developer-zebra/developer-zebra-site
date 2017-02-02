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
Instructions for the use of DataWedge vary slightly depending on [the DataWedge version installed](../../../../datawedge/6-2/guide/about) on the device. Use the following instructions for scanning from within an Enterprise Browser app using either DataWedge or the Enterprise Browser Barcode API.

### DataWedge 6.0.1 and higher

1. Remove the association to `com.symbol.enterprisebrowser` from the "Disabled app list" in the DataWedge Settings panel:
  * **In DataWedge**, select **Menu->Settings->Disabled app list** and **remove `com.symbol.enterprisebrowser` from the list that appears. 
  * **Note**: If **`com.symbol.enterprisebrowser`** activity is getting listed again after reboot under **Disable app list** settings location, then do the following as mentioned below:
       * **Either** remove the association of **`com.symbol.enterprisebrowser`** activity from **Disable app list** settings location each time after reboot.
     * **Or** upgrade DataWedge version to 6.1.8 or above. 
2. For scanning to be enabled, the below runtime configuration tag must be set to 1:
    * **The [&lt;usedwforscanning&gt;](../configreference/#usedwforscanning) tag in the EB app's** `config.xml` **file must contain a value of "1"**.

### Use Barcode API for Scanning

For the scanning API to be enabled, the runtime configuration tag must be set to 0, as below:

  * **The [&lt;usedwforscanning&gt;](../configreference/#usedwforscanning) tag in the EB app's** `config.xml` **file must contain a value of "0"**

-----

### DataWedge 2.2.9 - 5.1.13

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

###Use EnterpriseBrowser API for Scanning
For scanning to be enabled, the below runtime configuration tag must be set to 0:
  * **The [&lt;usedwforscanning&gt;](../configreference/#usedwforscanning) tag in the EB app's** `config.xml` **file must contain a value of "0"**.

-----	

###DataWedge 2.2.8 or lower

1. For scanning to be enabled, the below runtime configuration tag must be set to 1:
    * **The [&lt;usedwforscanning&gt;](../configreference/index.md#usedwforscanning) tag in the EB app's** `config.xml` **file must contain a value of "1"**.

###Use EnterpriseBrowser API for Scanning
In order to use the scanner with Enterprise Browser application you will need to **either** [Disable DataWedge](#disable-datawedge) **or** [Create DataWedge Profile](#create-datawedge-profile) for Enterprise Browser application with the settings described in the respective section below. 
####Disable DataWedge:
1. Start DataWedge application.
2. Select **Menu->Settings**.
3. Uncheck **DataWedge enabled** checkbox.
4. For scanning to be enabled, the below runtime configuration tag must be set to 0:
    * **The [&lt;usedwforscanning&gt;](../configreference/index.md#usedwforscanning) tag in the EB app's** `config.xml` **file must contain a value of "0"**.
  
####Create DataWedge Profile:
1. Install Enterprise Browser application.
2. Start DataWedge application.
3. Select **Menu->New profile** and **Enter profile name** and press **OK**.
4. Click on newly created profile from the **DataWedge Profiles** list.
5. Click on **Associated apps** in the **Applications** section.
6. Click the **Menu->New app/activity**.
7. Select Enterprise Browser application package name i.e. **`com.symbol.enterprisebrowser`** from the application list.
8. Select **_*_** from **Select activity** list.
9. Click the **Back** capacitive button.
10. Make sure the newly created profile is enabled by ensuring that the **Profile enabled** checkbox is ticked.
11. Uncheck all three **Enabled** checkboxes under the sections of: **Barcode input**, **Keystroke output** and **Intent output**.
12. For scanning to be enabled, the below runtime configuration tag must be set to 0:
     * **The [&lt;usedwforscanning&gt;](../configreference/index.md#usedwforscanning) tag in the EB app's** `config.xml` **file must contain a value of "0"**.

-----

**See also: [DataWedge User Guide](../../../../datawedge)**

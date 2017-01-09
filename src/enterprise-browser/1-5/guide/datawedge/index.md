---
title: DataWedge Usage
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
---
##Overview 

The DataWedge app (included on every Zebra device) makes it possible to fetch barcode data from within an Enterprise Browser application without using the Enterprise Browser APIs. This guide explains how to configure an EB app to scan and acquire barcode data using DataWedge, which then enters the captured data as keystrokes into any EB input field. 

**Important: Control of barcode scanning hardware is exclusive**. When DataWedge is active, the Enterprise Browser Barcode APIs will be inoperable. Likewise, an Enterprise Browser app that uses Barcode APIs will prevent other apps (including DataWedge) from accessing the scanner. This guide explains how to take control of a device's scanner hardware and how to subsequently release it to other apps. 

**See also: [DataWedge User Guide](http://techdocs.zebra.com/datawedge/5-0/guide/about/)** 

-----
##Guidelines for DataWedge Version - 2.2.8 or below
Below explains what to be done when scanning is required within Enterprise Browser application either using DataWedge application or Enterprise Browser Barcode API.

###Use DataWedge for Scanning
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

##Guidelines for DataWedge Version - Between 2.2.9 to 5.1.2
Below explains what to be done when scanning is required within Enterprise Browser application either using DataWedge application or Enterprise Browser Barcode API.

###Use DataWedge for Scanning
1. **Click the link below** to download the required **DataWedge (`.db`)** profiles: 
    * [Download RhoElements Profile](https://www.zebra.com/content/dam/zebra_new_ia/en-us/software/developer-tools/enterprise-browser/dwprofile_rhoelements.db)
    * [Download EnterpriseBrowser Profile](https://www.zebra.com/content/dam/zebra_new_ia/en-us/software/developer-tools/enterprise-browser/dwprofile_enterprisebrowser.db)
2. **Copy both profiles to the device** into the **`/Android/data/com.symbol.datawedge/files`** directory, replacing the existing file (if any). 
3. On the device, Install the **Enterprise Browser** application that will be using **DataWedge** (if not already installed). 
4. **Start DataWedge** on the device. 
5. In **DataWedge**, select **Menu->Settings->Import Profile**.  A list of available profiles appears ([as shown on this example screen](../../../../datawedge/5-0/guide/advanced#importaprofile)).
6. From the list, **tap the profiles in order which were copied in Step 2**. When the profiles are imported, focus returns to the previous screen and a confirmation message appears. 
7. **Tap** the **BACK** button to return to the **DataWedge** profiles list. Both **RhoElements** and **EnterpriseBrowser** profiles are listed and the **EnterpriseBrowser** profile will be enabled by default. 
8. For scanning to be enabled, the below runtime configuration tag must be set to 1:
    * **The [&lt;usedwforscanning&gt;](../configreference/index.md#usedwforscanning) tag in the EB app's** `config.xml` **file must contain a value of "1"**.

###Use EnterpriseBrowser API for Scanning
For scanning to be enabled, the below runtime configuration tag must be set to 0:
  * **The [&lt;usedwforscanning&gt;](../configreference/index.md#usedwforscanning) tag in the EB app's** `config.xml` **file must contain a value of "0"**.

-----	

##Guidelines for DataWedge Version - 6.0.1 and above
Below explains what to be done when scanning is required within Enterprise Browser application either using DataWedge application or Enterprise Browser Barcode API.
	
###Use DataWedge for Scanning
1. Remove association of **`com.symbol.enterprisebrowser`** from **Disable app list** settings.
	* In **DataWedge**, select **Menu->Settings->Disabled app list** and remove the association of **`com.symbol.enterprisebrowser`** activity. 
	* **Note**: If **`com.symbol.enterprisebrowser`** activity is getting listed again after reboot under **Disable app list** settings location, then do the following as mentioned below:
	     * **Either** remove the association of **`com.symbol.enterprisebrowser`** activity from **Disable app list** settings location each time after reboot.
		 * **Or** upgrade DataWedge version to 6.1.8 or above. 
2. For scanning to be enabled, the below runtime configuration tag must be set to 1:
    * **The [&lt;usedwforscanning&gt;](../configreference/index.md#usedwforscanning) tag in the EB app's** `config.xml` **file must contain a value of "1"**.

###Use EnterpriseBrowser API for Scanning
For scanning to be enabled, the below runtime configuration tag must be set to 0:
  * **The [&lt;usedwforscanning&gt;](../configreference/index.md#usedwforscanning) tag in the EB app's** `config.xml` **file must contain a value of "0"**.
	
-----

**See also: [DataWedge User Guide](../../../../datawedge)** 

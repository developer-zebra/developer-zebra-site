---
title: Enroll a Device Owner
layout: guide.html
product: EMM Toolkit
productversion: '2.0'
---

## `DRAFT`

**_Information subject to change without notice_**. 

-----

## Overview

This guide documents procedures for enrolling an EMM agent app as a "Device Owner," which grants adequate permissions to perform any and all available activities for configuring the device. 

Device Owner (DO) capabilies apply to Zebra devices running Android 5.x Lollipop and higher. However, **the procedures in this guide require Android 7.x Nougat and Zebra MX 7.1 or higher**. 

-----
<!-- 
section explains device owner stuff, and why a Nougat device _should_ be enrolled as a DO and why an Oreo _must_. 

* DO is recommended with Nougat. With Oreo, it's required. 
* Agent Uses AEDO + Zebra OemConfig Managed Configs​
* Android N or higher​
* EMM must leverage Zebra EMM TK V4​
* Supported from Android Nougat onwards​
* Provides parity of functionality to EMM TK V2 when combined with AEDO APIs​
* Standard-based​
* Not available prior to Android Nougat​
* Requires special Device Owner Enrollment​
* It is OPTIONAL for all EMMs to use OemConfig, but NOT doing so will leave the EMM unable to provide parity of functionality once they can no longer use MX via EMM TK V1 and V2 to augment the capabilities of AEDO APIs​
* SHOULD support use of OemConfig as early as possible, preferably by the by the end of Android Nougat​
* MUST support use of OemConfig by the start of Android P​

> Info in the QR code is identical to contents of the `Provisioning.JSON` file.  
 -->
### Terms used in this guide

* **AE -** Android Enterprise (formerly Android for Work)
* **AEDO -** Android Enterprise Device Owner
* **AFW -** Android for Work
* **DA -** Device administrator
* **DO -** Device owner
* **EMM -** Enterprise Mobility Management
* **MDM -** Mobile Device Management

-----

### Supported Devices

* All Zebra devices running Android Nougat or higher with MX 7.1 or higher

### Prerequisites
* For the Staging Workstation:
 * A computer running Windows 7 (or Windows 10 with StageNow 3.0 or higher)
 * StageNow 2.10.1 or higher installed (for compatibility with sample profiles provided)
* **Access to the "main console"** of the EMM solution 
* **Adequate EMM priviledges** to create the following: 
 * **A "Device Owner" enrollment** 
 * **User name**
 * **Password** 
* **The EMM management server URL**
* Any agent and/or service apps (`.apk` files) required by the EMM solution to be present on the device being managed (agent must support DO mode). <br>**Required files**:
 * `Agent.apk(s)` - **Device-resident agent file(s)** required and provided by the EMM vendor
 * `EMM_Device_Owner_Enrollment_Profile.zip` - **StageNow profile for enrolling device** (provided by Zebra)
 * `EnrollDO.pem` - **Owner enrollment certificate for EMM Agent app** (file names vary)
 * `EMM_PERE-DO.zip` - **StageNow persistence profile** template (provided by Zebra)
 * `Provision.apk` - **Android app** for TC20/TC25 devices or all other Zebra devices  
 * `Provisioning.JSON` - **Credentials file, including server address and login credentials** (created during the enrollment process below)

<!-- remove AirWatch-specific items:
 * **At least one group** in which to categorize devices to be staged
 * **Group ID(s) (GIDs)** for the group(s)

 -->
-----

## How to Enroll a Device Owner

This process of device staging is intended for devices that are in a factory-default state, and contain no third-party files or apps other than those included with the operating system. For information about returning a device to a factory-default state, [see Zebra Power Manager](/mx/powermgr). 

**Enrollment three-part process**: 

1. [Prepare the staging workstation](#1preparetheworkstation) (5 steps, one-time only)
2. [Create provisioning barcodes](#2createprovisioningbarcodes) (13 steps)
3. [Enroll the device](#3enrolladevice) (4 steps)

-----

### 1. Prepare the Workstation

This section is required only for first-time set-up of the staging workstation. **If the workstation is already prepared, [skip to Part 2](#2createprovisioningbarcodes)**. 

**Prepare the device-staging workstation**:

1. **Create a folder of any name** on the workstation to contain device-enrollment files listed in the [Prerequisites section](#prerequisites) above. 
 <br>The folder name used for this guide is "`/EMM/install/`". 
2. **Copy the agent files** required for device management to the `/EMM/install/` folder. 
3. **Copy the** `Provision.apk` **file** to the `/EMM/install/` folder.
4. **Open the** `Provisioning.JSON` **file with a text editor**, and enter the server name, user credentials and any other necessary fields (as required by the EMM solution) in the appropriate section (see image, below). **TIP**: Information required for the `Provisioning.JSON` file is identical to that of the relevant QR code, if used.
5. **Save the changes and copy the updated file** to the  `/EMM/install/` folder.
 <img alt="image" style="height:278px" src="JSON_code_EMM_Sample_3.PNG"/>
 _The `Provision.JSON` sample shows syntax for server URL, user name and password._
<br>

> **Note: File and folder names are case-sensitive**.

-----

### 2. Create Provisioning Barcodes
This section involves importing a StageNow settings profile, modifying network and other settings for the target environment, and exporting it for deployment using the EMM system.

> **Tap any image to enlarge**. 

**Import the** `EMM_PERE-DO` **StageNow profile**: 

1. Launch StageNow and log in as Administrator. 
2. **Click "All Profiles"** from the StageNow "Home" area:   
 <img alt="image" style="height:250px" src="StageNow_Home.png"/><br>
3. **Click "Import Profiles"** in the upper-right corner:
 <img alt="image" style="height:250px" src="SN_All_Profiles.png"/><br> 
4. **Navigate to the** `EMM_PERE-DO.zip` **file** on the staging workstation (prepared in Section 1). <br>
**Select "Import"** and follow prompts to complete the process:
 <img alt="image" style="height:250px" src="navigate_2.png"/> <br>
5. **Open the imported profile** to begin editing (if necessary, click the "HOME" icon to display this screen): 
 <img alt="image" style="height:250px" src="all_profiles_after_import.png"/> <br>
6. The imported profile appears in "Review" mode. **Click "StageNow Config"** to enter Config mode...<br>
 <img alt="image" style="height:250px" src="view_profile_settings.png"/>
 **...then click the left arrow three times** for the view shown below:
 <img alt="image" style="height:350px" src="edit_profile_2.png"/> <br>
7. **Edit the necessary configuration sections of the imported profile** as required for the target environment (Steps a&ndash;h, below). To edit a config, tap its number and click the blue "Edit" button (arrow, above).<br>
<u>**Hit "Save" when done editing each config**</u> or settings are lost.<br> 
	a. **Wi-Fi -** **Enter network settings** for the target device(s):<br>
	<img alt="image" style="height:250px" src="wi-fi_config.png"/><br>
	b. **AppMgr -** **Enter the EMM agent app name <u>only</u>**. <u>Do NOT change the path</u> from that shown below:<br>
	`/enterprise/usr/EMM/install/<AgentAppName>.apk`<br>
	<img alt="image" style="height:250px" src="b.appmgr.png"/><br>
	c. **Intent -** **Enter EMM vendor-specific package and class names of agent app** to enroll as Device Owner:<br>
	<img alt="image" style="height:250px" src="c.intent.png"/><br>
	d. **AppMgr  -** **Optional**; use (as in Step b) only if EMM solution requires a second app.<br>  If not used, DO NOT REMOVE AT THIS TIME.<br>
	<img alt="image" style="height:250px" src="d.appmgr.png"/><br>
	e. **AppMgr -** **DO NOT CHANGE**. This config installs the Provision.apk app.<br>
	<img alt="image" style="height:250px" src="e.appmgr.png"/><br>
	f. **Intent -** **DO NOT CHANGE**. This config enrolls the EMM with credentials provided in `Provisioning.JSON` file during the preparation in Section 1.<br>
	<img alt="image" style="height:250px" src="f.intent.png"/><br>
	g. **Intent -** **Enter the Android Action, Package and Class Names for the EMM solution**. The intent in this config launches the EMM agent on the device.<br>
	<img alt="image" style="height:250px" src="g.intent.png"/><br>
	h. **PersistMgr -** **DO NOT CHANGE**. This config ensures that settings configured in Steps a&ndash;g remain on the device if an Enterprise Reset is performed in the future.<br> 
	<img alt="image" style="height:250px" src="h.persist.png"/><br>
	i. If a second app was not added in Step d above, **delete the optional AppMgr profile**.<br>



## `DRAFT`

**_Information subject to change without notice_**. 

### PART 2 OF THIS PROCESS TO COME 

<!-- 
6. StageNow
Edit the StageNow Profile as follows: 
Rename Profile to: EMM_PERE-DO
Select Stagenow Config.
Select Wi-Fi.  Select Edit. 
Edit the Wi-Fi profile for your network. Save.




_Enabling Wi-Fi allows downloads post-staging._
<br>

8. StageNow
Complete the StageNow Profile as follows:
Select: (review)

Then select: (publish)

9. StageNow
Export an XML file from the StageNow Profile as follows:
Select:

Export the file to the `/EMM-downloads/` folder on the Workstation.
Make sure the file is named exactly like this: PERE-DO.zip.

10. Folder Check: On the Workstation, make sure the `/EMM-downloads/` folder has ALL the required files listed below.
IMPORTANT: Filenames are case-sensitive. Make sure each file is named exactly as shown.

11. StageNow
Import the Second of two StageNow Profile as follows:
On StageNow UI, select: (home)

Then select: (profiles)

Then select: (import profiles)

12. StageNow
Navigate to the EMM_Device_Owner_Enrollment.zip file on the Workstation that was downloaded earlier from Zebra.  
Then select Import.

13. StageNow
Edit the StageNow Profile as follows: 
Rename Profile to: EMM_Device_Owner_Enrollment
Select Stagenow Config
Select Wi-Fi.  Select Edit. 
Edit the Wi-Fi profile for your network. Save.

14. StageNow
Edit the StageNow Profile further:
Select the first FileMgr.  Select Edit.
Revise the Source File URI: Navigate to the EnrollDO.pem certificate file on your Workstation.  Save.


<img alt="image" style="height:531px" src="14_filemgr.png"/>

_File Manager downloads files post-staging._
<br>

15. StageNow
Edit the StageNow Profile further:
Select the second FileMgr.  Select Edit.
Revise the Source File URI: Navigate to the /snaw/ folder that you created on your Workstation.  Save.


<img alt="image" style="height:350px" src="15_filemgr.png"/>

_`EnrollDO.pem` file secures device owner enrollment._
<br>


16. StageNow
Complete the StageNow Profile as follows:
Select: (review)

Then select: (publish)

17. Generate Staging barcodes as follows:
Select StageNow for PD417 barcode.
Select Publish
Select Stage.  This will produce the staging barcode
<Optional> 
Save the barcode PDF file.  
Print the barcodes.


<img alt="image" style="height:393px" src="17_generate_barcodes.png"/>

_When scanned, enrollment barcodes command the device to perform all actions created above._
<br>

> **Note**: File and folder names are case-sensitive.

-----

### 3. Enroll a Device

18. Before scanning the Staging barcode(s):
Ensure the StageNow Workstation is connected to the local staging WIFI network (same as set up in the Profiles).
Ensure StageNow is running on the Workstation.

19. For each device to be staged:
Install a charged battery and press the Power key to turn on.  
After initial power up, device will display the Setup Wizard (SUW).
Scan the barcode below to skip the SUW and launch the StageNow application.  

<img alt="image" style="height:150px" src="19_barcode.png"/>

_The Android Setup wizard runs only on GMS devices._
<br>


Note:
The barcode above is supported by MX7.1 and greater. If the SUW is not bypassed after scanning, then manually navigate the SUW screens and launch StageNow from its icon.

20. Scan the Staging barcodes.  Barcodes can be displayed on the Workstation display or printed out.
 
Note:
The elapsed time from Scan to Enrollment is approximately 6 minutes.
Device displays may go dark due to timeout while the enrollment finishes.  This is expected.

21. (optional)
Log in to your AirWatch Console to monitor the progress of enrolled devices.
Devices will be added the Device List as they complete enrollment.  

 -->


-----

## See Also

* [About EMM Toolkit](../about)
* [EMMTK Guides](../guide)

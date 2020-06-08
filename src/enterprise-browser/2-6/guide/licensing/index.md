---
title: Enterprise Browser Licensing
productversion: '2.6'
product: Enterprise Browser
layout: guide.html
---

## `IMPORTANT LICENSING CHANGES`
> Beginning with Enterprise Browser 2.0, the license deployment process has changed:<br>
• <u>**Upgrading from EB 1.x to EB 2.0 (or higher) requires that all licenses be converted to the new model**</u>.<br>
• **Only Android and Windows CE7 devices support cloud-based license deployment**.<br>
• **Windows CE6, Windows Embedded Handheld 6.5 and Windows Mobile devices** can be licensed through a company's own Linux or Windows server or through use of a binary license file downloaded from the licensing portal.<br>
• Licensed apps running on EB 1.8 (and older) are unaffected; existing licenses remain valid.<br>

-----

## Overview 

Commercial deployment to devices requires an End-User License (**also known as an "Activation ID"** or AID) issued by Zebra Technologies for each device. Licenses are available either for a 90-day trial period or for perpetual usage. Both license types permit an unlimited number of Enterprise Browser-based apps to run on the device(s). This guide explains the process of obtaining an Enterprise Browser license for commercial use and applying the license(s) to individual devices or as part of a mass-deployment. A given license key can be activated on any number of devices up to the total quantity of licenses purchased, as explained below. 

-----

### Requirements
***ALL THREE*** of the following are required to activate EB license(s):   

1. **One or more license keys** (aka Activation IDs) purchased for EB 2.0 (or higher) software
2. **One or more supported Zebra device(s) with the correct License Manager app** installed:<br>
 &nbsp;&nbsp;&nbsp;**Android**: License Manager 3.1.1 or higher (pre-installed on supported devices)<br>
 &nbsp;&nbsp;&nbsp;**Windows MobileCE**: License Manager 1.0 or higher (included with EB installer)<br>
3. **One of the following server connections**:<br> 
 &nbsp;&nbsp;&nbsp;**An internet connection** for online activation (Android and/or CE7 <u>only</u>) **OR**<br>
 &nbsp;&nbsp;&nbsp;**Linux or Windows server** (for off-line activation of any supported device)<br>

**NOTE**: Only Android and Windows CE7 devices support license deployment from a cloud-based server. Windows CE6, Windows Embedded Handheld 6.5 and Windows Mobile devices must be licensed from an on-premise Linux or Windows server or through use of a binary license file downloaded from the licensing portal.

-----

## I. Contact a Reseller 
The first step in obtaining a license is to engage with Zebra or a Zebra reseller. 

**&#49;. [Visit Zebra's Enterprise Browser Product Page](https://www.zebra.com/us/en/products/software/mobile-computers/mobile-app-utilities/enterprise-browser.html)** and select one of the methods for contacting Zebra directly or engaging with a reseller or partner. 

**&#50;. Alternatively, select one of the following Zebra resources**: 

* **[Find a Zebra Partner](https://www.zebra.com/us/en/partners/find-a-zebra-partner.html) -** form for submitting an inquiry via the web
* **[How to Select a Channel Partner](https://www.zebra.com/us/en/partners/find-a-zebra-partner/selecting-the-right-channel-partner.html) -** explains the types of partners that engage with Zebra and some of their technologies and specialties
* **[Partner Interaction Center](https://www.zebra.com/us/en/partners/partner-interaction-center.html) -** info for contacting Zebra's existing global partner network
* **[Zebra Corporate Numbers and Links](https://www.zebra.com/us/en/about-zebra/contact-zebra.html) -** broken down by global region
* **[Global Marketing Contact Center](https://www.zebra.com/us/en/about-zebra/contact-zebra/marketing-contact-center.html) -** broken down by global region and country

-----

## II. Access Licensing System
After a licensing agreement is purchased from Zebra or a Zebra reseller, an email is sent to the licensing company's representative containing user credentials for accessing the Zebra Enterprise Software Licensing system (**also new starting with EB 2.0**). 

* **Visit the [Zebra licensing support page](https://www.zebra.com/us/en/support-downloads/software-licensing.html), register and log into the portal to:** 
	* Place an order for licenses
	* See the status of existing orders
	* Assign licenses to devices or deployments
	* View current license inventory and assignments
<!-- https://zebra-licensing.flexnetoperations.com/flexnet/operationsportal/logon.do -->
-----

## III. Manually Assign License
This section describes the process for activating a license on a single device running Android. To manually activate a license on a device running Windows Moblie/CE, see the [Windows Mobile/CE section](#windowsmobilecedevices). To remotely activate multiple licenses for an entire organization, see the [Mass Deployment section](#massdeployment) of this guide. 

#### License Source Types
* **Cloud-based server** (internet connection required)
* **Local server** (on customer premises)
<!-- available only under special circumstances
* **Pre-activated** (binary file pushed to device) 
 -->

#### Connectivity Options
* **Production Cloud Direct -** License Manager maps automatically to web-based Zebra Licensing Server to activate licenses; no server configuration required.
* **Production Cloud Through Proxy -** License Manager maps automatically to web-based Zebra Licensing Server through customer's on-premise proxy server. Requires configuration of proxy server settings. 
* Custom Cloud - **Reserved for future use**. <!-- If a custom or relay server is used to manage licensing, a unique URL and server name can be added as a separate license source to appear in future source lists.   -->
* Test Cloud Direct - **For Zebra internal use only**.
* Test Cloud Through Proxy - **For Zebra internal use only**.

#### BEFORE BEGINNING
* **Confirm that the clock is set correctly on the device to ensure proper license-application behavior**. 
* **License-key barcodes are not provided by Zebra**; they can be created by the licensee to ease the activation process. Keys also can be typed in manually. 
<!-- * License sources added using this process are subsequently available for selection in the "Select License Source" drop down list.
 -->
**To activate a device license**:  

1. Locate and **launch the License Manager** app:
<img alt="" style="height:350px" src="eb20_licensemgrapp.png"/>
<br>
2. On launch, License Manager displays active licenses (if any).<br> 
**Tap the floating action button**:
<img alt="" style="height:350px" src="license_manager_splash.png"/>
<br>
3. When the Activation screen appears: 
 1. **Enter the license key (Activation ID)**: 
 <img alt="" style="height:350px" src="6b.png"/>
 <br>
 2. **Tap "Select License Source"**and select desired options. 
 3. **Tap SUBMIT** button.<br> 
 If prompted to set device clock, **Tap "Continue."** The "Activation" screen reappears: 
<img alt="" style="height:350px" src="5.png"/>
<br>
4. **Tap Activate**.  
<img alt="" style="height:350px" src="6.png"/>
<br>

Successful license activation is indicated by a screen similar to the image below: 
<img alt="" style="height:350px" src="7.png"/>
<br>

#### The Android device is now licensed to use Enterprise Browser 2.x. 

-----

### Windows Mobile/CE Devices
Zebra provides License Manager apps for its devices running Android and Windows Mobile/CE. **License Manager 1.0 (or higher) is required for licensing Windows Mobile/CE devices**, and is included with the Microsoft Installer (MSI) file (when installing from Windows) and as a `.CAB` file when installing from macOS. 

> `IMPORTANT:` **Zebra recommends using StageNow to generate XML files** required for this process. [Download StageNow](https://www.zebra.com/us/en/support-downloads/software/utilities/stagenow.html); it's free. 

**To activate a license on a device running Windows Mobile/CE**: 

1. **Push the XML file** required for license activation to the device. 
2. Locate and launch License Manager on the device. <br>
Current licenses on the device (if any) are shown along with a series of buttons: 
<img alt="" style="height:250px" src="wmce_license01.png"/>
**Details -** displays information about selected license.<br>
**Refresh -** contacts the licensing server to renew a device license following the purchase of a license renewal.<br>
**Button functions**:<br>
**Return -** relinquishes the selected license.<br> 
**Add License -** begins the license activation process.<br>
**Settings -** displays the License Manager Settings panel.<br>
3. **Tap "Add License"** button. "About License Manager" screen appears.<br>
**Tap "License Source"** button.   
<img alt="" style="height:250px" src="wmce_license02.png"/>
<br>
4. **Select "Production Cloud Direct"** from the server list. 
<img alt="" style="height:250px" src="wmce_license03.png"/>
**Details -** displays information about the selected licensing server.<br>
**Delete -** removes a user-defined licensing server (none shown).<br> 
5. **Using an EMM system, launch License Manager with command line arguments** similar to those shown. This example was tested using SOTI Mobi control. 

		:::xml
		// for XML file in root directory of device: 
		start "\Program Files\LicenseManager\LicenseManager.exe" activate license.xml

		// for XML file in a specific License Manager folder on device:  
		start "\Program Files\LicenseManager\LicenseManager.exe" activate \Program Files\LicenseManager\license.xml 
<br>

6. Following the operation, a `Result.xml` file is placed in the same location as the source XML file. 

#### Example
The following XML file selects the cloud-based Zebra Licensing Server as the license source.  

	:::xml
	<wap-provisioningdoc>
		<characteristic type="LicenseMgr" version="8.1" >
			<parm name="LicenseChoice" value="zebra"/>
		<characteristic type="LicenseZebra">
			<parm name="LicenseActionZebra" value="activate"/>
		<characteristic type="NewLicenseZebra">
		<characteristic type="LicenseSourceURL">
			<parm name="LicenseSource" value="Zebra Cloud"/>
			<parm name="LicenseCloudURL" value="2"/>
		</characteristic>
			<parm name="ActivationID" value="0e62-2e66-53ec-4619-86bb-5246-ce58-24d5"/>
			<parm name="ActivationQuantity" value="1"/>
		</characteristic>
		</characteristic>
		</characteristic>
	</wap-provisioningdoc>

<!-- 
#### Activation Using Shortcuts
An EMM system admin deploy use a Windows Mobile/CE shortcut (`.lnk`) file to launch License Manager and activate a license on a device. This can help simplify mass deployment of licenses across an enterprise. 

Shortcuts can be created (using License Manager command line arguments) and pushed to the `WINDOWS/Start Menu`. The License Manager shortcut appears after rebooting the device. Launching License Manager from the shortcut also can execute License Manager with given command line arguments. An example of this process is shown below. 

**To interact with a license server using a shortcut**: 

1. Create an activation XML file called `license.xml`. 
2. Push `license.xml` to the root directory of the device.
3. Create a shortcut called `test.lnk` using the content below: 

		:::xml
		71#"\Program Files\LicenseManager\LicenseManager.exe" activate license.xml
<br>
Above content says to create a shortcut of LicenseManger.exe and to pass below command line arguments

activate license.xml

Push the test.lnk file to WINDOWS/Start Menu
Reboot the device to see the licensemanager shortcut
Launch the shortcut to execute the command line argument and see the result.xml at root directory.

 -->
-----

## Off-line Licensing
License Manager provides a Local License Server option, enabling organizations to employ an on-premise server to distribute licenses to devices without access to the internet. This option requires software installed on a company's own IP-based Linux or Windows server in advance of license distribution to devices. 

> **For more information, including hardware requirements and setup instructions, download the appropriate Local License Server Administration Guide from the [Zebra License Management support portal page](https://www.zebra.com/us/en/support-downloads/software-licensing.html)**. 

### BEFORE BEGINNING
* **Install and configure Local License Server** according to the [relevant admin guide](https://www.zebra.com/us/en/support-downloads/software-licensing.html)
* **Acquire a `.BIN` file containing licenses** (Activation IDs) from Zebra License Server for all devices to be licensed
* Ensure target devices are connected to the Local Licensing Server

#### `IMPORTANT PERSISTENCE NOTES:` 
* **To use StageNow to persist license keys on the device following an Enterprise Reset**:
 * **All License Manager and Persist Manager steps MUST be stored in a <u>SINGLE PROFILE</u>**.
 * **WLAN settings MUST be configured BEFORE license activation steps** in the Profile.
 * **Keys MUST be stored in the** `/enterprise/usr` **folder** on the device.

##### To License from a Local Server: 
1. **Tap Local Server** from the License Source drop-down.<br> 
A screen appears as below.
<img alt="" style="height:350px" src="local_server.png"/>
<br>
2. **Enter the server URL, provide a name and tap SUBMIT**.   
3. **Enter or scan the license key for the device**. <br>
Then **Tap Activate**. 
<img alt="" style="height:350px" src="6a.png"/>
<br>

**Successful license activation is indicated by a screen similar to the image below**: 
<img alt="" style="height:350px" src="7.png"/>
<br>

**To License from a Local Server**: 

1. **Tap Local Server** from the License Source drop-down.<br> 
A screen appears as below.
<img alt="" style="height:350px" src="local_server.png"/>
<br>
2. **Enter the server URL, provide a name and tap SUBMIT**.   
3. **Enter or scan the license key for the device**. <br>
Then **Tap Activate**. 
<img alt="" style="height:350px" src="6a.png"/>
<br>

Successful license activation is indicated by a screen similar to the image below: 
<img alt="" style="height:350px" src="7.png"/>
<br>

#### The device is now licensed to use Enterprise Browser 2.x. 

-----

## Mass Deployment 

Mass-deployment of Enterprise Browser device licenses requires use of an Enterprise Mobility Management (EMM) system and/or Zebra StageNow tools and its [License Manager Setting Type](/stagenow/latest/csp/license).

##### `IMPORTANT NOTES:`
* **The procedures described below include only those for deploying and activating licenses for EB 2.0 (or later)**. They **DO NOT** include the purchase process for license activation IDs nor configuration of the network and device clock settings, which are required to download the app and properly apply the license(s).
* **To set license keys to remain on the device following an Enterprise Reset**, keys MUST be stored in the `/enterprise/usr` folder on the device and <u>in a single Profile</u> activated using License Manager and preserved using [Persist Manager](/mx/persistmgr).


### Prerequisites

* Profiles for correctly configuring device clock and network settings
* Software License key(s) (aka Activation IDs)
* All necessary EB 2.x application (binary) files

> **Zebra recommends testing any new Profile on a working device before general deployment**.

-----

**To create the licensing portion of a StageNow Profile**:

1. **Launch StageNow and select “Create new Profile"** from the left-hand pane. <br>
The "Select a Wizard" dialog box appears.
2. **Select MX version to match device**, click "Xpert Mode" and click the "Create" button.
3. **Enter a Profile name and click "Start"** button.
4. **Single-click LicenseMgr** (scroll down if necessary); then **click "Update"** button. 
5. **Under "License action type:" select “Perform Zebra license action.”** Additional options appear: 
<img alt="" style="height:450px" src="stagenow_licenseMgr.png"/>
_Click image to enlarge_.
<br>
6. **Set the parameters as required** to activate the license:<br>
 **a. For cloud-based licensing**: <br>
 	**Zebra recommends this option for the best device visibility from the licensing portal**:<br>
	* **Zebra license action**: Activate AID -> select "Use one of the Zebra Licensing cloud options"<br>
	* **Cloud Source**: "Use the Zebra licensing Production Cloud" <br>
	* Enter the AID and quantity. **Select "Continue"**<br>

 **b. For local (on-premise) licensing**:<br>
 	**Best for fire-walled networks or those lacking internet access**:  
	* **Zebra license action**: Activate AID -> select "Use a local license server option"<br>
	* **Enter the URL, friendly name, AID and quantity** 
	* **Select Continue** <br>
7. **To persist license key(s)** on the device following an Enterprise Reset:<br> 
 **a. Download(†) and save key(s) as `.BIN` file(s) to** `/enterprise/usr` folder on the device<br>
 **b. <u>From a single Profile</u>**:<br>
     * **Activate key(s) using License Manager** (licensing method="reference a preactivated license file already on the mobile device")<br>
     * **Preserve settings using [Persist Manager](/mx/persistmgr)**<br>

8. **Complete Profile creation and scan the staging barcode**
9. **Confirm that the Profile successfully licensed the device**: <br>
 a. **Launch the License Manager app** on the device; activated license should be visible<br>
 b. **Alternatively, launch EB 2.0 on the device** and view licensing status on splash screen <br>
 c. **Quantity of available licenses visible on the licensing portal should decrease** by the number of licenses deployed. A list of device IDs also is visible there<br>

**(†)** To download a License key as a `.BIN` file from the Zebra Licensing Portal, select "Download Capability Response" from the Device Action menu. Each `.BIN` file contains a license for a specific device.

Also see [related guides](#relatedguides). 

-----

## License Transfer
Enterprise Browser supports the transfer of licenses from one device to another if the device licenses were originally activated using a cloud-based or local licensing server. This is done by returning the activated license(s) to the pool (using License Action "Return") and activating them on new device(s).

See the [License Manager section](/stagenow/latest/csp/license) of Zebra's StageNow tool for details.

-----

## Logging

**On Android devices**, License Manager activities are captured in adb and RXLogger log files. 

**On Windows Mobile/CE devices**, License Manager activities are written to `LM_Log.txt` in the app's install directory. 

-----

## Notes
The following notes are derived from frequently asked questions about device licensing and apply to most licensing scenarios. 

* **Licenses erased by a [Factory Reset](/mx/powermgr/#enterprisereset) can be reissued <u>to the same device(s) using the same StageNow Profile</u>** and the same License Source (i.e. cloud-based or local server). 
* **When ordering additional unit entitlements for an existing site license, include the Activation ID** with the order to ensure that the same EMM policy can be used for the additional devices.
* **The fastest way to deploy a trial license on a device** is by using the License Manager app and the [manual license assignment](#iiimanuallyassignlicense) procedures above.
* **Device licenses can be activated using**: 
 * StageNow and the [License Mgr CSP](/stagenow/latest/csp/license)
 * OEMConfig tool, part of Zebra's EMM Toolkit (available to authorized partners only)

-----

## Related Guides

* **[Zebra StageNow](/stagenow)** | A free Windows app for remote device-staging, licensing and mass deployment 
* **[Zebra License Manager User Guide for EMC devices](https://www.zebra.com/us/en/support-downloads/software-licensing.html)** | Guide to a free Android app for manually licensing devices
* **[Zebra.com Licensing Page](https://www.zebra.com/us/en/support-downloads/software-licensing.html)** | Additional user manuals, how-to videos and relevant links
* **[Enterprise Browser Setup Guide](../setup/)** | Help with initial setup, connecting to devices and pushing files

-----

<!-- 

Q3: Where can I find more information about the LicenseMgr CSP that works with StageNow or my EMM ? 
A3 : You can find more info about the various parameters on Techdocs here.

Q5: I don't want to use StageNow but my preferred EMM of choice. What options do I have?

A5: The LicenseMgr CSP is published via the EMMToolkit as well as Zebra's OEMConfig interface. Please use either to access the various license management configurations.


Q4: I only want to try out my trial EB 2.0 license and not mass deploy it. Do I still need to use StageNow or an EMM ?

A4: For a one-off activation or license management operations, there is a built-in LicenseManager application on an EMC Android device that can be used. You can use this application to key in the Activation Id and choose the default Cloud option for the quickest way to get up and running.

A detailed guide for this application can be found on on Zebra.com's Licensing Page.


Q2. How does the license portal react to new device license purchases? Currently I have a total QTY of say 20.  I need to purchase more licenses this week.  Would the total QTY just increase?  The reason I ask is I’ll be pushing the license using StageNow via MDM. The MDM lets me push the license to an entire group of devices so all of my devices will receive the same license.  Defining in the system that 19 devices get license A and the rest get license B would be extremely difficult/near impossible.
A2. When the order for additional licenses is being placed, please provide the AID from your initial order while placing the new one. That will ensure the additional PO qty is added to your initial entitlement and you can use the same MDM policy on the additional devices as well


 -->
<!-- 
MASS DEPLOYMENT:
https://developer.zebra.com/docs/DOC-4641
-->

<!--
### Pre-activated Licenses
The pre-activated license option allows organizations to log into the Zebra Software Licensing Portal and download a binary license file **created for a device with a specific ID**. This file is pushed to the device and installed, and **fails if installed on any other device**. 

**To Apply a Pre-activated License**:

<u>After the binary license file has been pushed to the device</u>: 

1. **Tap "Preactivated"** from the License Source drop-down. A screen appears as below.<br>
**Select "Production Cloud"** from the Preactivated Source drop-down. <br>
Then **tap SUBMIT**.
<img alt="" style="height:350px" src="10.png"/>
<br>
2. The "Activate License" screen appears. **Tap the navigation (...) button**. <br>
<img alt="" style="height:350px" src="11.png"/>
<br>
3. **Tap "ALLOW"** to grant License Manager permission to access files (if prompted).<br>
**Navigate to the binary file** pushed earlier to the device.<br>
Then **tap ACTIVATE**.
<img alt="" style="height:350px" src="12,13,14.png"/>
<br>
Successful license activation is indicated by a screen similar to the image below: 
<img alt="" style="height:350px" src="7.png"/>
<br>

#### The device is now licensed to use Enterprise Browser 2.0. 
 -->

<!-- 
## `TO BE MODIFIED`

If the user wants to enable an entitlement via a pre-activated license, this option should be chosen under Select

License Source drop-down list with the Production Cloud as the Preactivated Source.
The user cannot add any license source under this option.
This option also caters to an enterprise wide license that serves as a pre-activated license for a set of devices
offered to select software SKUs.

To activate a pre-activated license (offline activation) for any of the Zebra Software Products, follow the steps given below:

Start the License Manager application.
Click the floating action button on the Opening/Home screen. This will open the Activation screen as shown in Figure 5.
This page has the following input fields, where the information needs to be added for activating a license:
 

Note: Always choose the type of the license source under Select License Source option prior to inputting any data in the license field above. 

Select License Source: If the user wants to activate a license offline, then the Pre-activated option has to be chosen under Select License Source drop down list and a pre-activated source has to be chosen under Select "Pre-activated Source" dropdown list as shown in Figure 10.
Select pre-activated Source: The pre-activated source is either the Production Cloud or Tet Cloud which depends on whether the license binary file was downloaded from Production Cloud Portal or Test Cloud Portal.

FIGURES 10, 11



Select the License Binary File: The user can click on the (…) browse button denoted by three dots beside the license input field. On clicking the button for the first time on the device, the user will be prompted with a runtime permission dialog asking for Storage permission only on devices running Android 6.0 (Marshmallow) and higher only as shown in Figure 12. In order to select a license binary file from the device, the user has to grant the storage permission for the License Manager application. This permission dialog will not be shown on subsequent selections if the permission is granted. On granting the storage permissions, the user will be prompted with a file picker to select a valid license binary file as shown in Figure 13.  On selecting a valid license binary file, the path of the binary file will be shown in the Select the License Binary file input field as shown in Figure 14. Note that this field will be populated automatically based on the path of the license binary file chosen and the user cannot edit the value of this field.

FIGURES 12, 13, 14

<img alt="" style="height:350px" src="12,13,14.png"/>
_Unlicensed version_
<br>

After selecting a valid License Source, click on the Submit button.
On clicking the Submit button, a dialog box is shown to the user which informs about the impact of not setting the system time correctly. This dialog box is displayed both in online and pre-activated license activation scenarios. The user can tick the Don’t ask again checkbox to hide the dialog box on the future license activations.
The Application processes the license binary file and displays whether the license activation was successful or not.
If the license activation is successful, the activated license information is displayed in the form of a card in the Home screen as shown in Figure 9. Details about the license information in the Home Screen can be found here.
All the license rights displayed in the Home Screen are available for acquisition on the device.
License Source Selection:
To select an existing license source from Activation Page, follow the steps given below:

On clicking on the Select License Source input field on the Activation page, License Source Selection screen will be displayed.
This page has the following input fields, where the information regarding the license source needs to be selected/added for activating a license:
Select License Source: This field lists all the license sources available on the device. A valid license source has to be selected from this field. This field usually denotes the name of the server for any of the user-added license sources. There are three default license sources available as shown in Figure 15:
1)      Cloud

2)      Local Server

3)      Pre-activated

FIGURE 15

<img alt="" style="height:350px" src="15.png"/>
_Unlicensed version_
<br>

Cloud: Depending on the type of the Cloud server, the user can choose from one of the below options under Select Connectivity drop down list as shown in Figure 16:

Production Cloud Direct: For directly activating the licenses from the default Zebra Production Server. The user cannot add any license source under this option as shown in Figure 17.
Test Cloud Direct: For directly activating the licenses from the default Zebra Test Server. The user cannot add any license source under this option as shown in Figure 18.
Production Cloud Through Proxy: For activating the licenses from a proxy server to the Production Cloud Server. The user can enter the unique URL and the name of the proxy server and add it as a separate license source under this option as shown in Figure 19.
Test Cloud Through Proxy: For activating the licenses from a proxy server to the Test Cloud Server. The user can enter the unique URL and the name of the proxy server and add it as a separate license source under this option as shown in Figure 20.
Custom Cloud: For activating the licenses from a Custom/Relay server. The user can enter the unique URL and the name of the custom server and add it as a separate license source under this option as shown in Figure 21.

FIGURE 16

<img alt="" style="height:350px" src="16.png"/>
_Unlicensed version_
<br>

ii)                   Local Server: This license source option corresponds to the On-Premise Server setup locally. The user can select Local Server option under Select License Source drop down and then enter the details of the On-Premise Server setup such as the unique URL and the name used to identify the server as shown in Figure 22. This adds a new License Source and will be available for subsequent activations under the Select License Source drop down list.

 

iii)                 Pre-activated: If the user wants to activate a pre-activated license, this option has to be chosen under Select License Source drop down list and a valid pre-activated source has to be chosen under Select Pre-activated Source dropdown menu as shown in Figure 23. The pre-activated source is either the Production Cloud or Test Cloud which depends on whether the license binary file was downloaded from Production Cloud Portal or Test Cloud Portal. The user cannot add any license source under this option.

The user has the provision to add new license sources of the proxy servers (Production Cloud Through Proxy or Test Cloud Through Proxy), Custom Cloud server (Relay server) and Local (On-Premise Server) server based license sources using the steps mentioned here. Note that all the license sources added by the user are read only. The name of all the license sources added by the user will be displayed in this field below the above three options.

 Enter URL: This input field is displayed only when the user is given the provision to add a new license source. The user has to enter the URL of the license source in this field. This field will also be visible while viewing any user-added license source but will be read only.
Name: This input field is displayed only when the user is given the provision to add a new license source. The user has to enter a unique name of the license source in this field. This field will also be visible while viewing any user-added license source. The name added in this field will be added to the list of the license sources saved on the device.

FIGURES 17-23 (really)



<img alt="" style="height:350px" src="17,18.png"/>
_Unlicensed version_
<br>

<img alt="" style="height:350px" src="19-23.png"/>
_Unlicensed version_
<br>

-----

## Adding a License Source

("license source addition")

The user has the provision to add a new Proxy Server (Production Proxy/Test Proxy), Custom Server or a Local Server based license source. New License Sources can be added from Activation Page or from Settings Page.

To add a new license source from Activation Page, follow the steps given below:

1)      If the user wants to add a license source which is Proxy to the Production Server, then the Select License Source field has to be set to Cloud and Select Connectivity field should be set to Production Cloud Through Proxy as shown in Fig 24.

2)      If the user wants to add a license source which is a Proxy to the Test Server, then the Select License Source field has to be set to Cloud and Select Connectivity field should be set to Test Cloud Through Proxy as shown in Fig 26.

3)      If the user wants to add a license source for a Custom Cloud (Relay) Server, then the Select License Source field has to be set to Cloud and Select Connectivity field should be set to Custom Cloud as shown in Fig 28.

4)      If the user wants to add a Local license source, then the Select License Source field has to be set to Local Server as shown in Figure 30.

5)      In all the above cases, the user will be prompted to enter a valid server URL and a unique name to identify the license source.

6)      Once valid data is entered in the URL and Name input fields, the license source can be saved by clicking on the Submit button and license source added toast message is displayed to the user on successfully saving the license source.

7)      All the valid license sources added by the user will be displayed in the Select License Source drop down list once they are saved on the device as shown in Figure 32.

8)      Note that all the license sources (Proxy/Custom/Local) added by the user are read only and a maximum of ten license sources can be saved on the device at a time (which includes only the Custom Server and Local Server based license sources) including the default Production Cloud Direct and Test Cloud Direct license sources. Hence the user can add a maximum of eight license sources (can be either Custom license sources only or Local license sources only or combination of both). There is no limit for the Proxy server based license sources.

9)      All the license sources are also displayed in License Sources screen in Settings as shown in Figure 33. New license sources can also be added through License sources screen in Settings as explained here.

FIGURES 24-33 (really, really?) 



<img alt="" style="height:350px" src="24-27.png"/>
_Unlicensed version_
<br>


<img alt="" style="height:350px" src="28-31.png"/>
_Unlicensed version_
<br>


<img alt="" style="height:350px" src="32,33.png"/>
_Unlicensed version_
<br>

-----

## Display Active Licenses

Active Licenses Display
All the licenses currently active on the device are displayed in the form of cards in the Home Screen as shown in Figures 34 and 35. Each card in this screen corresponds to an active license.

Each license (card) displayed in the Home screen has the following information:

The first row in the card has the name of the organization who purchased the license along with the last four digits of the activation (rights) id used for activating the license.
The second row in the card corresponds to the License Type. Valid license types include Perpetual, Permanent, Trial License, Test, etc.
The third row in the card corresponds to the expiry date of the license in the format MM/DD/YYYY. If the license is going to expire within 30 days from the current date, the expiry date is shown in red color as shown in the second license card in Figure 35. Else the expiry date is shown in black color.
The expiry date will be displayed as mentioned above if the license type is Perpetual and the license has a valid expiry date as shown in Figure 34. In case the license type is Perpetual but with no fixed expiry date (implying a permanent license), the expiry date field is shown as Perpetual License.
The rows below the expiration date have the list of products followed by an arrow at the end of each row which enables to expand each product to view the list of features activated for the product. Each row under a product has a list of features and their version numbers in expanded view as shown in the Figures 34 and 35 which can be used for acquisition on the device.
Each license can have any number of products associated with it. Each product has a list of features listed under it.
The user can expand all the license cards displayed in the Home Screen as shown in Figure 35. But the user will be able to expand only one product in a license (card) at a time and if any other product in the same license (card) is clicked, the previously expanded view is collapsed automatically to display the features of the current product the user has clicked.

FIGURES 35, 35

<img alt="" style="height:350px" src="34,35.png"/>
_Unlicensed version_
<br>


-----

## Refreshing a License

To refresh a license which is currently active on the device, follow the steps given below:

1)      Open the License Manager application

2)      Activate a license using the steps mentioned here if no licenses are currently active on the device.

3)      Once one or more licenses are currently active on the device, the user will be able to see the Home screen with a list of cards. Choose the license that needs to be refreshed and click on the overflow menu at the right top corner of the license (card) which displays the below two options: a) Refresh License b) License Sources as shown in Figure 37.

4)      Click on Refresh License option in the overflow menu which sends a request to the server to refresh the selected license as shown in Figure 38.

5)     Once the license is successfully refreshed, License refreshed successfully toast message is shown to the user and all the information in the card corresponding to the license will be updated as shown in Figure 39.

FIGURES 36-39



<img alt="" style="height:350px" src="36,37.png"/>
_Unlicensed version_
<br>

<img alt="" style="height:350px" src="38,39.png"/>
_Unlicensed version_
<br>

-----

## Settings

Settings
To access the Settings screen of the application, follow the steps given below:

1)      Open the License Manager application

2)      Select the Settings menu option by clicking on the Settings cog on the Opening screen or the Home screen.

3)      The Settings screen (as shown in Figure 40) has the following options:

a)      Notifications

b)      License Sources

c)       About

FIGURE 40

<img alt="" style="height:350px" src="40.png"/>
_Unlicensed version_
<br>

-----

## Notifications

Notifications
On clicking the Notifications option in Settings screen, the following options will be displayed:

1)      Push Notification: If the user wants to receive notifications on the device for license expiry, toggle the Push Notification switch on.

 2)      Remainder for Expiry: The time period before which the user has to be notified on the device can be chosen by clicking the drop-down menu under Remainder for Expiry. The user can select one among the below options: 1 week before, 2 weeks before, 3 weeks before, 4 weeks before as shown in Figure 42. The first option (1 week before) is chosen as default.



Once the Push Notification switch is set and the desired time period is chosen, a notification will appear in the Status bar if any of the licenses currently active on the device is going to expire within the time period set as shown in Figure 43. The user will be notified of the license expiry within the time frame and the product name and activation id is displayed in the notification. The user can click on the notification from the Notifications pull-down which redirects the user to the Home screen of the License Manager application.

FIGURES 41-44

<img alt="" style="height:350px" src="41-44.png"/>
_Unlicensed version_
<br>

-----

## License Sources

All the license sources available on the device can be viewed by clicking on the License Sources option in Settings screen. This screen can also be opened by clicking on the License Source option in the overflow menu on any license card in the Home Screen. This screen lists all the license sources as individual list items as shown in Figure 46. The format of the information displayed in this screen is as follows:

The String before the delimiter (,) in each list item in the License Source screen corresponds to the unique server name entered by the user while saving the license source.  
The server name is followed by the type of the server (Proxy/Custom/Local).
The second row in each list item corresponds to the URL of the license source entered by the user while saving the license source. Note that the server URL is shown only for user-added licenses sources.
The first two items in the License Source screen are the default license sources: Production Cloud Direct and Test Cloud Direct as shown in Figure 45. These two license sources are followed by user-added license sources as shown in Figure 46.


FIGURES 46, 46

<img alt="" style="height:350px" src="45,46.png"/>
_Unlicensed version_
<br>


-----

## License Source Addition in Settings

The user has the provision to add a new Proxy Server (Production Proxy/Test Proxy), Custom Server or a Local Server based license source. New License Sources can be added from Activation Page or from Settings Page.

To add a new license source from Settings Page, follow the steps given below:

1)      Open the License Manager application

2)      Click on the Settings cog on the Opening/Home screen

3)      Click on License Sources option on Settings screen

4)      Click on the floating action button (plus icon) present at the bottom right corner of the License Source screen

5)      To add a Cloud based (Production Proxy, Test Proxy or Custom Cloud) license source, Select License Source field has to be set to Cloud and the desired license source type has to be chosen under Select Connectivity drop down list.

Production Cloud Through Proxy option is for the server acting as a proxy to the Production Cloud Server as shown in Figure 47.

Test Cloud Through Proxy option is for the server acting as a proxy to the Test Cloud Server as shown in Figure 48.

Custom Cloud option is for any of the Custom Server setup which can also be a relay server as shown in Figure 49.

6)      To add a Local license source, Select License Source field has to be set to Local Server as shown in Figure 50.

7)      In all the above cases, the user will be prompted to enter a valid server URL and a unique name to identify the license source.

8)      Once valid data is entered in the URL and Name input fields, the license source can be saved by clicking on the Submit button.

9)      Once the license source is saved, it will be displayed in the License Source screen in Settings as shown in Figure 51.

10)   The recently added license source in the Settings page will be automatically selected as the current license source in the Activation screen. All the valid license sources added by the user (Proxy/Custom/Local) will be available for selection in the Select License Source list in the License Source selection screen while activating a license as shown in the Figure 52.

11)   Note that all the license sources (Proxy/Custom/Local) added by the user are read only and a maximum of ten license sources can be saved on the device at a time (which includes only the Custom Server and Local Server based license sources) including the default Production Cloud Direct and Test Cloud Direct license sources. Hence the user can add a maximum of eight license sources (can be either Custom license sources only or Local license sources only or combination of both). There is no limit for the Proxy server based license sources.

FIGURES 47-52



<img alt="" style="height:350px" src="47-49.png"/>
_Unlicensed version_
<br>


<img alt="" style="height:350px" src="50-52.png"/>
_Unlicensed version_
<br>


-----

## About

On clicking the About option in Settings screen, the following options will be displayed as shown in Figure 53:

1)      Device ID: The string displayed in this field corresponds to the unique serial number of the device on which the License Manager application is installed.

2)      License Manager Version: The string shown in this field denotes the version of the License Manager application installed on the device in the format a.b.c where a, b and c are numerals.

3)      License Agent Version: The string shown in this field denotes the version of the License Agent installed on the device in the format a.b.c.d.e.f where a, b, c, d, e and f are numerals.

The information displayed in the About screen is read only and it depends on the device and the version of the License Manager application and License Agent installed on the device.


FIGURE 53

<img alt="" style="height:350px" src="53.png"/>
_Unlicensed version_
<br>



-----

OLD OLD OLD OLD

Click on License Manager icon on the applications menu in the launcher as shown in below figures.

On clicking the License Manager icon, the application starts and displays the Opening screen shown in Figure 2 when there are no licenses currently active on the device.
The Opening screen contains the following options:

a)      Settings cog

b)      Floating Action Button

In case of any licenses currently active on the device, the Home screen of the License Manager application is displayed as shown in Figure 3 and 4.
The Home screen contains the following options:

a)      Settings cog

b)      Licenses currently active on the device with each license information displayed in the form of a card

c)       Floating action button

Detailed explanation on the fields displayed in each of the currently active license in the Home screen can be found here.

Enterprise Browser 2.0 will support only Flexera licensing. To know more about Flexera licensing, please visit the below link.
{eddy to add link}
Licensing Tool
User can activate a license via UI based tool names License Manager or via MDM admin tools. To know more about activating a license via UI based tool, please visit below link

{eddy to add link}
To know more about licensing  via MDM admin tool, please visit below link
{eddy to add link}
MDM admin can perform a mass deployment of licenses using MDM tools. For doing a mass deployment, user should ensure he has enough number of license count associated with the given license key (activation ID).
License Model Supported
Enterprise Browser supports two license Models
Trial License for 9 months
Perpetual License

Licensing Methods
Cloud Activation : user can activate a license via internet
LLS Activation : user can host a local license server in their premises to activate a license
PreActivated License: User can activate a license using pre-activated binary license file.
To know more about licensing methods please visit below link
{eddy to add link}
Cloud Activation supports proxy servers, to know more about various proxy type configuration supported by Licensing Tools (LicenseManager), please visit below link
{eddy to add link}

Raising a PO
Please click the below link to contact Zebra Software Licensing team for license procurement.
{eddy to add link for Trial}
{eddy to add link for perpetual}

Transferring License
Enterprise Browser does not support transferring a pre-activated license. It supports transferring a license from one device to another if and only if license is activated via cloud or LLS. In this case user can return an activated license back to the pool (not applicable for pre-activated license) and released license can be activated on a new device.
To know more about returning a license back to cloud/LLS license pool is explained more here
{eddy to add link for Return license feature}

Enterprise Browser License Screen
Unlicensed Screen
If user has not activated any licenses, user may see an unlicensed screen
If user had activated a trial license and if it has expired, user may see an unlicensed screen.
 -->

-----

<!-- nope
* **[Zebra licensing system documentation page](https://softwarelicensing.zebra.com/documentation/index.html) -** Additional licensing info and sample screens

 -->
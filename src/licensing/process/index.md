---
title: Zebra Licensing Process
layout: guide.html
product: Zebra Licensing
menu:
  items:
    - title: About
      url: /licensing/about
    - title: Process
      url: /licensing/process
    - title: FAQ
      url: /licensing/faq
    - icon: fa fa-search
      url: /licensing/search
---

## Overview 
This guide explains the process of obtaining a [Zebra Mobility DNA Enterprise](https://www.zebra.com/us/en/products/software/mobile-computers/mobility-dna.html) license for commercial use, applying the license manually to individual devices and mass-deploying licenses using Zebra StageNow and an Enterprise Mobile Management (EMM) System.

-----

### Requirements
License activation requires ***ALL THREE*** of the following:   

1. **One or more license keys** (aka Activation IDs) purchased for the target device(s) and/or app(s) 
2. **One or more supported Zebra device(s) with the correct License Manager app** installed:<br>
 &nbsp;&nbsp;&nbsp;**Android**: License Manager 3.1.1 or later (pre-installed on supported devices)<br>
 &nbsp;&nbsp;&nbsp;**Windows MobileCE**: License Manager 1.0 or later (included with Zebra-app installers)<br>
3. **Devices must be connected to one of the following**:<br> 
 &nbsp;&nbsp;&nbsp;**Zebra's internet-based license server** for online activation (Android and/or CE7 <u>only</u>) **OR**<br>
 &nbsp;&nbsp;&nbsp;**A company's own Linux or Windows server** (for off-line activation of any supported device)<br>

**NOTE: Only Android and Windows CE7 devices support license deployment from a cloud-based server**. Windows CE6, Windows Embedded Handheld 6.5 and Windows Mobile devices must be licensed from an on-premise Linux or Windows server or through use of a binary license file downloaded from the licensing portal.

-----

## I. Contact a Reseller 
Zebra licenses are obtained through Zebra resellers or in some cases directly from Zebra. This can be done in one of two ways: 

* **[Visit Zebra's Enterprise Browser Product Page](https://www.zebra.com/us/en/products/software/mobile-computers/mobile-app-utilities/enterprise-browser.html)** and select one of the methods for contacting Zebra directly or engaging with a reseller or partner. <br>
<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***OR***
<br>
* **Select one of the following Zebra resources**: 
 * **[Find a Zebra Partner](https://www.zebra.com/us/en/partners/find-a-zebra-partner.html) -** form for submitting an inquiry via the web
 * **[How to Select a Channel Partner](https://www.zebra.com/us/en/partners/find-a-zebra-partner/selecting-the-right-channel-partner.html) -** explains the types of partners that engage with Zebra and some of their technologies and specialties
 * **[Partner Interaction Center](https://www.zebra.com/us/en/partners/partner-interaction-center.html) -** info for contacting Zebra's existing global partner network
 * **[Zebra Corporate Numbers and Links](https://www.zebra.com/us/en/about-zebra/contact-zebra.html) -** broken down by global region
 * **[Global Marketing Contact Center](https://www.zebra.com/us/en/about-zebra/contact-zebra/marketing-contact-center.html) -** broken down by global region and country

-----

## II. Access Licensing System
After a licensing agreement is purchased from Zebra or a Zebra reseller and a customer representative is designated, **an email is sent to the representative containing user credentials** for accessing the Zebra Enterprise Software Licensing system. 

##### After licensing credentials are received:
* **Visit the [Zebra licensing support page](https://www.zebra.com/us/en/support-downloads/software-licensing.html)**, register and log into the portal.<br>
 **This allows the customer to:** 
  * Place order(s) for licenses
  * Check the status of existing orders
  * Assign licenses to devices or deployments
  * View current license inventory and assignments
  * Purchase and download license key `.bin` files with Activation IDs for [off-line licensing](#offlinelicensing) 
<!-- https://zebra-licensing.flexnetoperations.com/flexnet/operationsportal/logon.do -->

-----

## III. Manually Assign License
**This section describes the process for activating a license on a single device running Android**. To manually activate a license on a device running Windows Mobile/CE, see the [Windows Mobile/CE section](#windowsmobilecedevices) below. To remotely activate multiple licenses for an entire organization, see the [Mass Deployment section](#massdeployment) of this guide. 

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
* **Confirm that the clock is set correctly on the device to ensure proper application of license(s)**. 
* **Create license-key barcodes (if desired) using any barcode generator tool**. License-key barcodes ease the activation process; they are not provided by Zebra. Keys also can be typed in manually. 
* **Ensure devices are connected as required**. 
<!-- * License sources added using this process are subsequently available for selection in the "Select License Source" drop down list.
 -->

#####To activate a device license:  

**Note**: The Zebra Enterprise Browser app is used as an example. 

1. Locate and **launch the License Manager** app:
<img alt="" style="height:350px" src="eb20_licensemgrapp.png"/>
<br>
2. On launch, License Manager displays active licenses (if any).<br> 
**Tap the floating action button**:
<img alt="" style="height:350px" src="license_manager_splash.png"/>
<br>
3. When the "Activate License" screen appears: 
 1. **Enter or scan the license key (Activation ID)**: 
 <img alt="" style="height:350px" src="6b.png"/>
 <br>
 2. **Tap "Select License Source"** and select desired options. 
 3. **Tap SUBMIT** button.<br> 
 If prompted to set device clock, **Tap "Continue"** to invoke the "Activation" screen again: 
<img alt="" style="height:350px" src="5.png"/>
<br>
4. **Tap Activate**.  
<img alt="" style="height:350px" src="6.png"/>
<br>
 Successful license activation is indicated by a screen similar to the image below: 
 <img alt="" style="height:350px" src="7.png"/>
 <br>

#### The Android device is now licensed to use the app. 

-----

### Windows Mobile/CE Devices
Zebra provides License Manager apps for its devices running Android and Windows Mobile/CE. 

#### Requirements
* **License Manager 1.0 (or later) on device**: 
 * included with the Microsoft Installer (MSI) file (when installing from Windows)
 * included as a `.CAB` file when installing from macOS
* **StageNow for generating XML files** required for this process. StageNow is a free tool for Windows PCs [Download](https://www.zebra.com/us/en/support-downloads/software/utilities/stagenow.html).

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

#####To activate a license on a device running Windows Mobile/CE: 

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
5. **Using an EMM system, launch License Manager with command line arguments** similar to those shown below. This example was tested using SOTI Mobi control. 

        :::xml
        // for XML file in root directory of device: 
        start "\Program Files\LicenseManager\LicenseManager.exe" activate license.xml

        // for XML file in a specific License Manager folder on device:  
        start "\Program Files\LicenseManager\LicenseManager.exe" activate \Program Files\LicenseManager\license.xml 

6. Following the operation, a `Result.xml` file is placed in the same location as the source XML file. 

#### The Windows Mobile/CE device is now licensed to use the app.

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
License Manager provides a Local License Server option, enabling organizations to employ an on-premise server to distribute licenses to devices without access to the internet. **This option requires software installed on a company's own IP-based Linux or Windows server** in advance of license distribution to devices. 

> **For more information, including hardware requirements and setup instructions, download the appropriate Local License Server Administration Guide from the [Zebra License Management support portal page](https://www.zebra.com/us/en/support-downloads/software-licensing.html)**. 

#### BEFORE BEGINNING
* **Install and configure Local License Server**
* **Acquire `.bin` file containing licenses (Activation IDs) from Zebra License Server**
* 

#####To License from a Local Server: 

**Note**: The Zebra Enterprise Browser app is used as an example. 

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

#### The device is now licensed to use the app. 

-----

## Mass Deployment 

Mass-deployment of Enterprise Browser device licenses requires use of an Enterprise Mobility Management (EMM) system and/or Zebra StageNow tools and its [License Manager Setting Type](https://techdocs.zebra.com/stagenow/latest/csp/license).

##### `IMPORTANT NOTES:`
* **The procedures described below include only those for deploying and activating licenses for EB 2.0 (or later)**. They **DO NOT** include the purchase process for license activation IDs nor configuration of the network and device clock settings, which are required to download the app and properly apply the license(s).
* **To set license keys to remain on the device following an Enterprise Reset**, keys MUST be stored in the `/enterprise/usr` folder on the device and <u>in a single Profile</u> activated using License Manager and preserved using [Persist Manager](/mx/persistmgr).


### Prerequisites

* Profiles for correctly configuring device clock and network settings
* Software License key(s) (aka Activation IDs)
* All necessary EB 2.x application (binary) files

> **Zebra recommends testing any new Profile on a working device before general deployment**.

-----

#####To create the licensing portion of a StageNow Profile:

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

See the [License Manager section](https://techdocs.zebra.com/stagenow/latest/csp/license) of Zebra's StageNow tool for details.

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
 * StageNow and the [License Mgr CSP](https://techdocs.zebra.com/stagenow/latest/csp/license)
 * OEMConfig tool, part of Zebra's EMM Toolkit (available to authorized partners only)

-----

## Related Guides

* **[Zebra StageNow](/stagenow)** | A free Windows app for remote-device staging, licensing and mass deployment 
* **[Zebra License Manager User Guide for EMC devices](https://www.zebra.com/us/en/support-downloads/software-licensing.html)** | Guide to a free Android app for manually licensing devices
* **[Zebra.com Licensing Page](https://www.zebra.com/us/en/support-downloads/software-licensing.html)** | Additional user manuals, how-to videos and relevant links
* **[Zebra licensing system documentation page](https://softwarelicensing.zebra.com/documentation/index.html)** | Additional licensing info and sample screens

-----

<!-- 
<img alt="image" style="height:450px" src="mdna_matrix.png"/>
_Click image to enlarge; ESC to exit_. 
<br>

 -->

 -----
<!-- 
## Data Collected

* Device "Build Fingerprint" including:
 * Device model number
 * Android version
 * Build ID
* Device serial number
* Device usage data 
* OS image, LifeGuard and security patch levels applied
* Available RAM
* Device storage (flash) information and health 
* Battery information and health
* Wi-Fi (WLAN) connection events
* Cellular (WWAN) connection events (if applicable)
* **Data traffic statistics (as applicable) for**: 
 * Bluetooth
 * Cellular (WWAN)
 * Ethernet
 * Wi-Fi (WLAN)
* **Location data (as applicable) for**: 
 * Cellular 
 * GPS
 * Wi-Fi (WLAN)
* System app info and usage
* Zebra app info and usage data, including for:  
 * DataWedge
 * Enterprise Home Screen
 * EMDK for Android 
 * EMDK for Xamarin
 * MX STATS
 * SimulScan
 * StageNow
* Scanner information and usage statistics
* Reboots triggered by the system or an app
* Application Not Responding (ANR) events 

-->

-----
<!-- 
## What's New in v2.0


### Device Support

### New Features

-----

## Version History

### Added in v1.0

-----
 -->

<!-- 
## Supported Devices

ZDS comes preinstalled on the following supported devices with the Android versions indicated. **Devices and/or Android versions not shown here are NOT compatible with ZDS**. Some devices running KitKat require ZDS to be installed manually. Contact [Zebra Support](https://www.zebra.com/us/en/about-zebra/contact-zebra/contact-tech-support.html) for more information.

<img alt="image" style="height:650px" src="zds_20_supported_devices.png"/>
_Click image to enlarge; ESC to exit_. 
<br>

## See Also

* **[FAQ](../faq)** | Frequently asked questions about ZDS
* **[ZDS Setup Guide](../process)** | How to check whether ZDS is enabled
* **[Visibility IQ info page](https://www.zebra.com/us/en/blog/posts/2019/zebra-operational-visibility-services-is-now-visibilityiq-foresight.html)** | Sign up for regular updates

 -->
<!-- 
menu:
  items:
    - title: About
      url: /oemconfig/9-3/about
    - title: Process
      url: /oemconfig/9-3/process
    - title: FAQs
      url: /oemconfig/9-3/faq
    - title: Managed Configurations
      url: /oemconfig/9-3/mc
    - icon: fa fa-search
      url: /oemconfig/9-3/search 

-->
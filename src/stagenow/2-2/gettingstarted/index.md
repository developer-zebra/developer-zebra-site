---
title: Getting Started
layout: guide.html
product: Stagenow
productversion: '2.1'
---

## Introduction
This section provides information on the StageNow Android Staging Solution, including an explanation of staging, its purposes, and users. 

## Staging
Staging is the process where a device administrator or operator configures a device and/or deploys firmware or software to a device to prepare it for production use. This entails configuring, deploying, and managing systems and devices.

An administrator can stage all devices within an enterprise, devices in a particular store or site, or on-site/per user.

## StageNow Staging Solution
StageNow is Zebra's next generation Android Staging Solution, supporting KitKat and Jelly Bean and built on the MX 4.3/4.4/5.0 platform. It allows simple profile creation, and easy device deployment with a simple bar code scan, tag read, or audio file play.

The StageNow Staging Solution includes the following components:

* The StageNow Workstation Tool offers a user interface that is accessed within a staging workstation (host computer). The staging administrator uses this tool to create staging profiles that configure device components, in addition to other staging actions. The Workstation Tool includes a database and server which store and save content entered in the Tool, e.g., settings and staging profiles. 

    Note: The tool's built-in staging server is an FTP server to which devices download the staging content of the Deployment section, files selected for download from the remote server, and RD staging files. Because multiple applications cannot use Port #21 (usually used by FTP servers) at the same time, ensure the Workstation Tool PC does not have another FTP server running in the background, or that the other FTP server uses a different port. Also note that the staging (FTP) server runs only when the tool is running, and stops when the application closes. Therefore the tool must be running when staging the device with profiles as described above.

* The StageNow Client resides on the device and provides a user interface for the staging operator to initiate staging. The operator uses a staging method, e.g., prints and scans a bar code, plays an audio file, or reads an NFC tag, to deliver staging material to the device

### Devices Supported
StageNow supports all KitKat and Jelly Bean Android devices from Zebra. KitKat devices that ship with the StageNow Client installed support all StageNow features.

Jelly Bean and certain KitKat devices may not include the StageNow Client but do include Rapid Deployment (RD) Client. For staging, these devices can scan StageNow-generated RD bar codes, which cause the RD Client to connect to a network and then auto-install MX 5.0 for KitKat devices, MX 4.4 or lesser for Jelly Bean devices, and the StageNow Client on the device. The StageNow Client can then be used to scan StageNow profile bar codes for configuration. See [Rapid Deployment (RD) Client](../stageclient?Rapid%20Deployment%20(RD)%20Client) for more information on this process.

>Note:  
>To install StageNow client and MX on a Jelly Bean device, create a profile using wizards from MX 4.4 or lesser versions.
Once devices that did not include the StageNow Client are staged using the RD Client, they still may only support partial StageNow functionality due to limitations of the device OS. See the Feature Compatibility section of the specific [Setting Type](/stagenow/2-2/CSPreference) to determine if your device supports a given feature. 

### StageNow Users
Following are the StageNow users:

* The staging administrator is the main user of the StageNow Workstation Tool, and is responsible for the configuration, deployment, and management of systems and client devices. The administrator creates profiles which identify the staging to perform, collects the staging content (e.g., applications), determines the staging method used to deliver the content, and uploads this material into the Workstation Tool.

* The staging operator identifies the devices to stage and uses the Workstation Tool to view and select the profile(s) that the administrator published. The operator then prints the staging materials to use to stage the devices (e.g., bar codes), and uses the StageNow Client on the devices to perform the staging. The operator can then deliver the devices to the end users.

### Staging Methods
Following are the staging methods available via StageNow. See [Device Staging](/stagenow/2-2/stageclient) for details:

* Bar Code - The operator generates bar code(s) containing profile information and scans those bar codes with the device, either printed on paper or displayed on the workstation screen, to configure that device.

* NFC Tag - The operator exports profile data and programs it into an NFC tag, then reads the tag with the device's NFC tag reader by bringing the tag within a certain proximity of the device, to deploy the profile to the device.

* Audio File - The operator downloads an audio file containing profile data to the device, and plays the audio file to configure that device.

## Home Screen
To open the tool, select the StageNow icon from the Start menu. 

If published profiles are available, the Staging Operator home screen appears.

![img](../images/Homescreen_operator.jpg)

The Operator home screen lists the latest profiles available. The top of the screen shows the [IP Address](/stagenow/2-2/gettingstarted?Current%20IP%20Address) currently used (if any), useful for when you need to connect to the Staging Server.

The main sections of this window include the following fields:

* Favorite - Select to add the profile to the Favorite Profiles list.

* Name - Administrator-provided name of profile. Profiles requiring the client device to be connected to the staging server appear with a [Server Icon](/stagenow/2-2/gettingstarted?Server%20Icon) appended to the profile name.

* Administrator Comments - Any notes regarding the profile.

* Last Updated - The last time an administrator updated the profile.

* Latest Staged - The last time the profile was staged.

* MX Version - The version of MX used when creating the profile.

* RD - Indicates whether the profile is RD enabled, i.e., whether RD bar codes can be printed from this profile.

If there are no published profiles for the Staging Operator, the Welcome screen appears.

![img](../images/StageNow_login.jpg)


Enter the Administrator password set up during installation, and select Login to open the Administrator home screen.

![img](../images/Homescreen_admin.jpg) 


The Administrator home screen lists profiles grouped by stages of completion. 

### Current IP Address
The top of the screen shows the IP address currently used, useful for when you need to connect to the Staging Server.

If only one IP address is available, StageNow selects this.

If the StageNow system does not have an IP address, the Current IP section of the window displays Not Available. This can restrict printing StageNow bar codes or NFC tags.

If more than one IP address is available and neither is selected, the Current IP section of the window displays Not Selected. Click on this section to select the IP address to use for staging.

![img](../images/AvailableIPAddresses.jpg)

Select the IP, then select Set as Current. This IP address is retained in future operations, including after re-launch and system reboot. 

### Change Password
The top right corner of the screen offers an option to change the Administrator password.

Select Change Password to change the administrator password.

![img](../images/ChangePassword.jpg)

Enter the current password, and then enter the new password in the New Password and Confirm New Password fields.

Select Change. A window indicates that the password was changed successfully.

![img](../images/ChangePassword_success.jpg)

Select OK.


### Profile Lists
The various profile lists in the Home window include the following fields:

* Name - Administrator-provided name of profile. Profiles requiring the client device to be connected to the staging server appear with a [Server Icon](/stagenow/2-2/gettingstarted?Server%20Icon) appended to the profile name.

* Description - Brief description of the profile.

* Last Updated - The last time an administrator updated the profile.

* Status - Status of the profile.

* Latest Staged (not available for Incomplete Profiles) - The last time the profile was staged.

* Actions - Offers the following actions to perform on the profile:

    * Export ![img](../images/icon_export.jpg) - Export a profile for other administrator use.

    * Copy ![img](../images/icon_copy.jpg) - Copy the profile to create a similar profile with a different name.

    * Delete ![img](../images/icon_trash.jpg) - Delete the profile. 

* RD - Indicates whether the profile is RD enabled, i.e., whether RD bar codes can be printed from this profile.

* MX Version - The version of MX used when creating the profile.

### Server Icon
Profiles requiring the client device to be connected to the staging server appear with a server icon appended to the profile name, as shown next to the first profile name below.

![img](../images/Networkicon_rollover.jpg)



The following table lists the situations in which the server icon would appear, indicating that server connection is required:


<table>
	<tr>
		<th>Profile Configuration</th>
		<th>Staging Client</th>
		<th>Server Required</th>

	</tr>
	<tr>
		<td>StageNow Config</td>
		<td>StageNow</td>
	</tr>
	<tr>
		<td></td>
		<td>RD</td>
		<td>N/A</td>
	</tr>	
	<tr>
		<td>StageNow Config + RD Config</td>
		<td>StageNow</td>
		<td></td>
	</tr>	
	<tr>
		<td></td>
		<td>RD</td>
		<td>X</td>
	</tr>	
	<tr>
		<td>StageNow Config + Deployment</td>
		<td>StageNow</td>
		<td>X</td>
	</tr>
	<tr>
		<td></td>
		<td>RD</td>
		<td>N/A</td>
	</tr>	
	<tr>
		<td>StageNow Config + RD Config + Deployment</td>
		<td>StageNow</td>
		<td>X</td>
	</tr>
	<tr>
		<td></td>
		<td>RD</td>
		<td>X</td>
	</tr>

</table>



## StageNow Menu
The top left corner of the StageNow Workstation Tool window offers the following three menu items.

### Settings
Selecting Settings in the top left corner of the tool offers three options. 

![img](../images/HomeSettings.jpg)

#### Participate in Experience Program
Turn this setting on to send anonymous usage data used to improve the StageNow experience in future versions. 

#### Legacy Mode
Turn this setting on to include the RD option when creating profiles. If this option remains off, the RD section does not appear during profile creation. 

* The Legacy Mode flag is off by default.

* If on, the RD section appears for all profiles.

* If off, the RD section is not shown to the administrator during profile creation.

* If off, the RD section is grayed out for existing profiles, with a link to enable Legacy Mode. Select the link to open the Settings screen shown above and turn on the Legacy Mode flag to enable RD section content.

* If off, the RD section does not appear if the administrator selected No for this section during profile creation.

#### First Error Termination
Turn this setting on to terminate the staging process upon first error. If left off, the staging process continues until the StageNow Client processes the last step in the profile. 

* If the First Error Termination flag is turned on, the staging process terminates on first error.

* If off, the staging process proceeds until the StageNow client processes the last step in the profile.

* For Xpert Mode, if First Error Termination is on, it only works if the ConditionMgr DSD is present in the profile.


### Help
This launches the StageNow user guide in the default browser. 

### About
This lists the StageNow version and briefly describes the Workstation Tool. 

![img](../images/About.jpg)

## StageNow Encryption
The StageNow database is always encrypted and linked to the Administrator password.

Encrypting staging data for use outside of the StageNow Workstation Tool protects sensitive information.

* When exporting a profile, sensitive parameters are encrypted to protect confidential deployment information.

* Staging bar codes and NFC tags contain configuration data and are encrypted by default to protect against reading by unauthorized devices. Note that encryption can add a significant amount of information and require additional bar codes. Use extreme caution when turning off encryption in order to speed deployment, as sensitive parameters may be vulnerable to unauthorized access.

## Use Cases
The staging administrator uses pre-defined Wizards within the StageNow Workstation Tool to configure settings and create profiles which define software configuration and/or installation for mobile devices within an enterprise.  These Wizards represent common use cases for deploying information to devices. 

### StageNow Staging Process Overview
The general staging process is as follows. See the appropriate sections of this guide for more detail on each step.

1. The administrator determines the software configuration and/or installation required for mobile devices within the enterprise.

2. The administrator opens the StageNow Workstation Tool and selects one of the provided Wizards. A Wizard offers a series of screens in which the administrator defines the required configuration values to create a profile for the device(s).

3. The administrator progresses through the Wizard. Certain sections of each Wizard present setting templates. Selecting and saving values on this template creates a setting, which the administrator can save for later use when creating other profiles.

4. Upon completing the Wizard, the administrator creates a profile, or a series of settings.

5. The administrator reviews the profile for accuracy.

6. The administrator selects the method(s) for deployment, e.g., the type of bar code and/or an NFC tag.

7. The administrator verifies the functionality of the profile by generating and testing the staging material.

8. The administrator publishes the profile for device deployment.

9. The operator uses the Workstation Tool to select the profile published by the administrator required for device deployment.

10. The operator prints the staging bar code(s) or generates the NFC tag provided for the profile.

11. The operator uses the StageNow Client on the device to scan the bar code or read the NFC tag, deploying the profile information to that device.

### StageNow Wizards
StageNow offers the following Wizards for creating profiles to configure mobile devices within the enterprise:

* [Configure a Device](/stagenow/2-2/Profiles/configdevice) - Configure the most common device settings such as locale, security options, applications, MDM enrollment, and production network settings.  This Wizard also allows you to connect to a staging and/or production network, reboot the device, or update the OS.

* [Connect Network](/stagenow/2-2/Profiles/ConnectNetwork) - Connect to a Wi-Fi, GPRS, or Ethernet network. You can also enable, disable, add, or remove networks.

* [Enroll in an MDM](/stagenow/2-2/Profiles/enrollmdm) - Enroll a device for management by an MDM.  Use this Wizard to download, install, configure, and launch an MDM agent.  This Wizard also allows you to connect to a staging and/or production network and reboot the device.

* [Manage Applications](/stagenow/2-2/Profiles/manageapps) - Manage applications on a device. Use this Wizard to download, install, uninstall and launch any applications. This Wizard  also allows you to connect to a staging and/or production network, install licenses (MX 4.3 only), configure simulScan (MX 4.3 only), download data files, and reboot the device.

* [Manage Device Security](/stagenow/2-2/Profiles/managesecurity) - Configure security options and policies for a device.  Use this Wizard to whitelist and blacklist applications, control screen time-outs, enable or disable an SD card, camera, GPRS, Bluetooth, GPS, USB, encrypt SD card, control PowerKey menu, settings UI, unknown soruces, and threat management.

* [Perform OS Update](/stagenow/2-2/Profiles/osupdate) - Perform an OS update on a device. Use this Wizard to apply an update or a patch to the OS by downloading a zip file to the device or using an existing zip file on the device.  This Wizard also allows you to connect to a network.

* [Wipe a Device](/stagenow/2-2/Profiles/wipedevice) - Destroy device data using Enterprise or Factory Reset. 

* [Xpert Mode](/stagenow/2-2/Profiles/xpertmode) - Configure any available settings for a device. Use this Wizard to create any combination of settings in any sequence.











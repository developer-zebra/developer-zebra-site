---
title: CartScan Settings
layout: guide.html
product: CartScan
productversion: '2.1'
---

## Overview

CartScan settings can be set. 

Overview
This chapter explains how to configure audio and vibrate options and profile settings.

<!-- 
Configure Audio and Vibrate Options
CartScan provides control over audio and tactile feedback to indicate a successful scan. Set these options as desired, for example to quiet a device so as not to disturb patients. Scan beeps can be muted by setting the Audio option to OFF.
To configure the audio and vibrate options:
From the device Home Screen, touch  All Apps > CartScan.
Tap to toggle the ON/OFF switch.
Audio - default is ON.
Vibrate - default is OFF.
Figure 16    Configure Audio and Vibrate Options

Configure Profiles
CartScan behavior is controlled by Profiles, which define how acquired data is processed and delivered to a line-of-business application.
View/Edit the Default Profile
To view/edit a profile:
From the device Home Screen, touch  All Apps > CartScan.
Touch    > Profiles.
Tap and hold the Default profile.
Figure 17    Default Profile Screen


Touch Edit Profile.
Figure 18    Edit Profile Screen


View or Edit the Profile Settings as needed.
Figure 19    Default Profile Settings Screen


SESSION TIMEOUT

WARNING! Disabling Session Timeout is strongly discouraged. ???new warning

Ignore Session Timeout - Select this option to maintain the connection indefinitely (or until the user exits the CartScan app or the device moves out of range).
Session Timeout - Enter a timeout period value between 1 and 60 minutes. Default is 2. This option enables the system administrator to configure the length of time to maintain the Bluetooth connection between the mobile device and the PC during periods of inactivity.


BLUETOOTH OUTPUT
Enable/disable BT Output - This option provides a measure of security by restricting delivery of acquired data to the application running on a PC. The administrator can enable or disable the output option to deliver the data to the PC. If this setting is disabled, the scanned data will not be delivered to the connected PC.
DATA FORMATTING
Data formatting provides an easy way to append or prepend acquired data with custom values or keystrokes before passing it to a line-of-business application on the PC. This can be useful for adding application-specific characters to acquired data or sending an ENTER and/or TAB character after submitting the data to advance the cursor to the next field.

NOTE Do not use Data Formatting in Zebra DataWedge Profile settings for CartScan. Modifying the basic data formatting and/or the advanced data formatting will result in conflicts with the Zebra CartScan application.
Enable/disable data formatting - Enable Data Formatting to access Basic or Advanced Data Formatting functions. If Data Formatting is not enabled, scanned data is passed to the app without modification or extra keystrokes.
BASIC DATA FORMATTING
Basic Data Formatting provides an easy way to append or prepend acquired data with custom values or special keystrokes. The supported options are:
Prefix to data - adds (prepends) the specified character(s) to the beginning of the acquired data before sending.
Suffix to data - adds (appends) the specified character(s) to the end of the acquired data before sending.
Send as hex - sends the data in hexadecimal format. For example, if the acquired barcode data is 012345, this option sends the hex equivalent of 303132333435.
Send as Upper Case - sends the data in all caps. For example, if the acquired barcode data is abcde, this option sends the string of ABCDE. Any selected prefix and/or suffix data is also converted to upper case (if appropriate).
Send TAB key - appends a TAB character to the processed data.
Send ENTER key - appends an ENTER character to the processed data.
ADVANCED DATA FORMATTING
Advanced Data Formatting can append or prepend acquired data with special characters and keystrokes such as functional keys, mouse clicks, space bar and num-lock.
Prefix ADF Rule - Can be configured as displayed in the following table. Keys can be selected from the scrolling list without manually entering the details.
Suffix ADF Rule - Can be configured as displayed in the following table. Keys can be selected from the scrolling list without manually entering the details.

Table 1    Supported ADF Keystrokes

NOTE ADF Keystrokes will be visible only on the line-of-business application on the PC, not in the CartScan app.

Table 2    ADF Keystrokes available in the UI, but not supported in this release

Export Profile Settings
The MDM Administrator configures and deploys profiles. Once configured by the MDM Administrator, Profile settings can be exported (as an XML file) and deployed to other devices.
To export Profile settings:
From the device Home Screen, touch  All Apps > CartScan.
Touch    > Profiles.
Touch        > Export Profile to XML. Figure 20    CartScan Profiles Settings Menu


Select one or more Profiles to export, and touch Export.


The Profile(s) selected for export are saved as a single XML file and each Profile will have a set of features. If more than one Profile is exported, that same number of Profiles (along with their original Profile names) will be available on the target device after that file is imported.
Figure 21    Export Profiles Screen


A confirmation screen appears with the path to the Profile XML file:
/sdcard/Android/data/com.symbol.cartscan/CartScan/Export/Profiles/CartScanConfig.xml This file can be viewed in the File Browser on the device.
Figure 22    Confirmation Screen






Information about the Profile active on the device is not contained in the exported file; an imported Profile must be set as the active Profile either manually or with an intent (See Import Profile Remotely on page 30).
Touch the Home Screen icon.



NOTE Exported profiles contain the following settings by default, regardless of how they were configured on the device when exported:
RestoreToDefault = false
AllowProfileEditing = true

Import Profile Settings
Profile settings can be imported manually or remotely. Consider the following:
RestoreToDefault = true in an imported XML file, erases all Profiles on the device, and resets the default Profile to its default values without user confirmation.
AllowProfileEditing = false in an imported XML file, and prevents modifications to any Profile settings by device user.
If a Profile of the same name exists on the device as one being imported:
A user performing a manual import is prompted to replace or cancel.
An intent-based import will replace the existing Profile.
An imported Profile is not automatically selected as the active Profile.
Import Profile Manually
The CartScan Profile XML exported from one device can be imported onto other devices automatically or manually after being pushed to the device by an MDM or other means.
To import a Profile settings file that has already been pushed to the device:
From the device Home Screen, touch All Apps > CartScan.
Touch    > Profiles.
Touch        > Import Profile From XML. Figure 23    CartScan Profiles Settings Menu


Navigate to the location of the file being imported and select it.



For    example,    /storage/emulated/0/Android/data/com.symbol.cartscan/CartScan/Export/CartScanConfig.xml
Touch Yes on the Import Profile confirmation screen.
Figure 24    Import Profile Confirmation Screen


Touch the Home Screen icon.
Import Profile Remotely
CartScan supports remote deployment of the configuration file (CartScanConfig.xml) to devices through commercially available third-party Mobile Device Management (MDM) systems. When CartScan is launched, it checks its sandbox folder and sees if a CartScanConfig.xml is present. If so, CartScan imports the new profile and uses it until settings are changed.
An MDM can configure CartScan using intents. For example, the following commands push an XML file to the device, and start ConfigIntentService (using activity manager) with the extra value pair of SET_CONFIG_FILE and the config file:
adb push CartScanConfig.xml /sdcard/.
adb shell am startservice -a com.symbol.cartscan.ConfigIntentService -e SET_CONFIG_FILE “/sdcard/CartScanConfig.xml”.
CartScan Profile settings in an XML file can be configured after export from a device by an administrator or by an MDM tool. Once settings are configured as desired, deploy the file using the following process:
Push the XML to /sdcard on the device.
Send intent to com.symbol.cartscan.ConfigIntentService with the XML file path.
For more information about sending and receiving intents, see Configuring Intents on page 33.
Close and restart CartScan.
Settings are applied the next time CartScan launches.

NOTE When AllowProfileEditing is set to false, some menu items are disabled. This can be undone only by deploying a new configuration file with AllowProfileEditing set to true.

Either remote configuration or importing a Profile xml file locally, does not change the current selected Profile unless the RestoreToDefault is set to true. If RestoreToDefault is set to true, the selected Profile is set as the


Default Profile. If RestoreToDefault is set to true, the Default profile gets selected as the default and it will replace the existing Profiles and if RestoreToDefault is set to false, new Profiles will get added to the existing Profiles.
Edit, Rename, or Delete a Profile
To edit, rename or delete a Profile:
From the device Home Screen, touch  All Apps > CartScan.
Touch    > Profiles.
Tap and hold the Profile to be edited, renamed, or deleted.
Select one of the following options and follow the prompts as appropriate for the desired action.
View Profile
Edit Profile
Rename Profile
Delete Profile
Figure 25    Profile Options



If AllowProfileEditing is set to false, the user can View Profile settings but cannot make changes, and the Rename and Delete iotuibs are not available.
If a Profile is renamed using a name that already exists, an error results. The Default Profile cannot be renamed or deleted.


Restore to Factory Default Settings
To restore CartScan to the factory default settings:
From the device Home Screen, touch  All Apps > CartScan.
Touch    > Profiles.


Touch    > Restore to factory defaults.
Figure 26    CartScan Profiles Settings Menu


Touch the Home Screen icon.




CartScanConfig.xml Example
The following screen shows the CartScanConfig.xml file, which can be displayed on the device or it can be viewed on the PC using Notepad.

	<wap-provisioningdoc>
		<characteristic type="CartScan" version="1.0">
			<parm name="AllowProfileEditing" value="true"/>
			<parm name="RestoreToDefault" value="false"/>
			<parm name="EnableLogging" value="true"/>
		<characteristic type="CartScanProfile">
			<parm name="ProfileName" value="Default"/>
			<parm name="AudioMode" value="2"/>
			<parm name="HapticMode" value="1"/>
			<parm name="IgnoreSessionTimeout" value="false"/>
			<parm name="TimeOut" value="2"/>
			<parm name="BTEnable" value="true"/>
			<parm name="DataFormattingEnable" value="true"/>
			<parm name="BdfPrefix" value=""/>
			<parm name="BdfSuffix" value=""/>
			<parm name="BdfSendHex" value="false"/>
			<parm name="BdfSendUpper" value="false"/>
			<parm name="BdfSendTab" value="false"/>
			<parm name="BdfSendEnter" value="false"/>
			<parm name="AdfPrefix" value=""/>
			<parm name="AdfSuffix" value=""/>
		</characteristic>
		</characteristic>
	</wap-provisioningdoc>


NOTE Enable Logging, Audio Mode, and Haptic Mode settings are not configurable in the current release.


Configuring Intents
Send an Intent
An administrator or MDM solution can provide the CartScan Service a new configuration by sending an Intent with the following values:
Intent Type - StartService
Package Name - com.symbol.cartscan
Class Name - com.symbol.cartscan.ConfigIntentService


Extras:
SET_CONFIG_FILE: Configuration XML string.

Example
		Intent AdminStartServiceIntent = new Intent(); AdminStartServiceIntent.setComponent(new      ComponentName("com.symbol.cartscan", "com.symbol.cartscan.ConfigIntentService"));
		AdminStartServiceIntent.putExtra("SET_CONFIG_FILE", "<YOUR CARTSCAN XML CONFIGURATION PATH ON DEVICE>");
		startService(AdminStartServiceIntent);
Receive an Intent
When the processing is complete (or if an error occurs during processing), a Broadcast Intent will be sent to any MDM application that is registered for the "com.symbol.cartscan.RESPONSE".
For example:

		<intent-filter>
		<action     android:name="com.symbol.cartscan.RESPONSE"/>
		</intent-filter.

Intent Type - Broadcast
Action Name - com.symbol.cartscan.RESPONSE.
Extras:
STATUS: Pass or Fail
ERROR_MESSAGE: Error Message
CONFIG_XML: Configuration XML string.
Example
		public void onReceive(Context context, Intent intentReceived) {
		if ( 0 == intentReceived.getAction().compareToIgnoreCase("com.symbol.cartscan.RESPONSE") ) { Log.d(TAG, "com.symbol.cartscan.RESPONSE: Status:" + intentReceived.getStringExtra("STATUS"));
		Log.d(TAG, "com.symbol.cartscan.RESPONSE: Error msg:" + intentReceived.getStringExtra("ERROR_MESSAGE"));
		...

 -->


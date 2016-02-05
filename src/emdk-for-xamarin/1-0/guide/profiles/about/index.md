---
title:  Using EMDK for Xamarin Profiles
---
##EMDK Profiles Overview

The EMDK for Xamarin allows you to easily access various capabilities of your Android device from within an Android application. These capabilities are grouped together into, what is referred to as EMDK profiles. Each EMDK profile is broken into various features. Each profile feature has parameters to provide automatic enablement as well as configuration options that will control it's behavior. One such profile feature is Data Capture, which allows you to accesses the devices bar code scanner and magstripe reader.

##EMDK Profile Features

###Data Capture

EMDK Data Capture profiles allow you to access and configure a devices bar code scanner and magstripe reader, along with how the data captured should be transmitted to your application. There are typically three components that are used to make this work:

* [Activity Selector](/emdk-for-xamarin/1-0/guide/profiles/profileactivity) - Automatically activates the profile based on application & activity combinations.
* Input Sources - Choose if [Barcode](/emdk-for-xamarin/1-0/guide/profiles/profilebarcode) & [MSR](/emdk-for-xamarin/1-0/guide/profiles/profilemsr) is the source of the data.
* Output Sources - Output the input source data as a [Keystroke](/emdk-for-xamarin/1-0/guide/profiles/profilekeystroke), [Intent](/emdk-for-xamarin/1-0/guide/profiles/profileintent) or [IP](/emdk-for-xamarin/1-0/guide/profiles/profileIP) output.

###Access Manager
The [Access Manager](/emdk-for-xamarin/1-0/guide/profiles/access) profile feature allows you to configure a set of applications that will be allowed to run on the device. When a profile with this feature is enabled, the device will only allow applications on the WhileList to be executed.

###Analytics Manager
The [Analytics Manager](/emdk-for-xamarin/1-0/guide/profiles/analytics) profile feature allows you to configure what data about a device should be collected, and where the collected data should be stored.

###App Manager
The [App Manager](/emdk-for-xamarin/1-0/guide/profiles/app) profile feature allows you to install, upgrade, remove, enable, disable applications from the device. It also allows you to change the current application launcher, clear recent app list and much more.

###Audio Manager
The [Audio Manager](/emdk-for-xamarin/1-0/guide/profiles/audio) profile feature allows you to manage enhanced audio volume control configurations like Mute/Vibrate State and Current Active Profile.

###Battery Manager
Zebra's Device batteries store information in their internal memory, for instance, the number of charge cycles a battery has accumulated. The [Battery Manager](/emdk-for-xamarin/1-0/guide/profiles/battery) profile feature allows the developer to modify that Decommission Threshold from its factory setting.

###Browser Manager
The [Browser Manager](/emdk-for-xamarin/1-0/guide/profiles/browser) profile feature allows you to control the web browser on the device. For example you can set the browser homepage.

###Camera Manager
The [Camera Manager](/emdk-for-xamarin/1-0/guide/profiles/camera) profile feature allows you to control access to the cameras in a device. For example you can disable the user from using all cameras on the device.

###Cellular Manager
The [Cellular Manager](/emdk-for-xamarin/1-0/guide/profiles/cellular) profile feature allows you to configure options of the cellular radio on your device. For example you can turn off data roaming.

###Cert Manager
The [Cert Manager](/emdk-for-xamarin/1-0/guide/profiles/cert) profile feature allows you to install or uninstall certificates that can be used identify your device for a variety of purposes, including VPN or Wi-Fi network access as well as authentication to servers by apps such as Email or Chrome.

###Clock
The [Clock Manager](/emdk-for-xamarin/1-0/guide/profiles/clock) profile feature allows you to set the devices current date, time and timezone.

###Component Manager
The [Component Manager](/emdk-for-xamarin/1-0/guide/profiles/component) profile feature allows you to manage the state of Components, such as a device's Ethernet Port.

###Device Admin Manager
The [Device Admin Manager](/emdk-for-xamarin/1-0/guide/profiles/devadmin) profile feature allows you to manage applications allowed configure settings on the device.

###DHCP Manager
The [DHCP Manager](/emdk-for-xamarin/1-0/guide/profiles/dhcp) profile feature allows you to control various DHCP configuration options.

###Display Manager
The [Display Manager](/emdk-for-xamarin/1-0/guide/profiles/display) profile feature allows you to control the screen timeout value to conserve power.

###Encrypt Manager
The [Encrypt Manager](/emdk-for-xamarin/1-0/guide/profiles/encrypt) profile feature allows you to set encryption policies on a device through MX XML. For example a developer can create an EFS for storing application data.

###GPRS Manager
The [GPRS Manager](/emdk-for-xamarin/1-0/guide/profiles/gprs) profile feature allows you to configure GPRS APN settings for a carrier's network.

###KeyMap Manager
The [KeyMap Manager](/emdk-for-xamarin/1-0/guide/profiles/keymap) profile feature allows you remap the usage of the device's hardware keys.

###Persistence Manager
The [Persistence Manager](/emdk-for-xamarin/1-0/guide/profiles/persistence) profile feature allows you to keep the MX features persistent on a device even after a reset.

###Power Key Manager
The [PowerKey Manager](/emdk-for-xamarin/1-0/guide/profiles/powerkey) profile feature allows you to control which options appear on the power menu on the device.

###Power Manager
The [Power Manager](/emdk-for-xamarin/1-0/guide/profiles/power) profile feature allows you to perform power management operations such as putting the device into Sleep mode, re-power or perform an OS Update. It also allows you to perform Enterprise Reset, Factory Reset and full device wipe. The action will be performed when the profile is enabled.

###SD Card Manager
The [SD Card Manager](/emdk-for-xamarin/1-0/guide/profiles/sdcard) profile feature allows you to manage the use of the devices SD card.

###Settings Manager
The [Settings Manager](/emdk-for-xamarin/1-0/guide/profiles/settings) profile feature allows you to manage settings UI configuration by providing the ability to invoke Enterprise Reset in Settings UI of your device.

###Threat Manager
The [Threat Manager](/emdk-for-xamarin/1-0/guide/profiles/threat) profile feature allows you to control what security threats a device actively monitors and how to respond.

###Touch Manager
The [Touch Manager](/emdk-for-xamarin/1-0/guide/profiles/touch) profile feature allows you to set the Touch Mode on your device in order to interact with User Interface.

###UI Manager
The [UI Manager](/emdk-for-xamarin/1-0/guide/profiles/ui) profile feature allows you to manage UI configurations using its UI Manager parameters.

###USB Manager
The [USB Manager](/emdk-for-xamarin/1-0/guide/profiles/usb) profile feature allows you to manage USB configurations of your device.

###Wi-FI
The [Wi-Fi](/emdk-for-xamarin/1-0/guide/profiles/wifi) profile feature allows you to manage Wi-Fi profiles available on the device as wells Wi-Fi settings Band and Channel selection, 802.11d / country configuration, and Disable / Enable, etc.

###Wireless Manager
The [Wireless Manager](/emdk-for-xamarin/1-0/guide/profiles/wireless) profile feature allows you to configure wireless devices such as Bluetooth, and NFC.

> The Wifi radio is configured through Wi-Fi Manager profile not this Wireless Manager Profile

###XML Manager
The [XML Manager](/emdk-for-xamarin/1-0/guide/profiles/xml) profile feature allows you to specify various XML processing modes to be used.


##Using the EMDK Profile Manager

Profile Manager is an exclusive EMDK technology offered within your IDE, providing a GUI based development tool. This allows you to write fewer lines of code resulting in reduced development time, effort and errors.  

###Accessing the Profile Manager
1. Inside your IDE select an open Android Application.
2. Select "EMDK" -> "Profile Manager" on the toolbar.  
    ![img](../../../images/menu-emdk.jpg)

###Creating a Profile

1. Open the "EMDK Profile Manager".  
2. Click "Create".  

    ![img](../../../images/profiles/image002.jpg)
3. Enter a Profile Name and click "Create".  This name is how the profile will be identified by the EMDK.

	![img](../../../images/profiles/image003.jpg)  
4. Select the features you would like to enable by selecting the item from the list of "Available Features" and clicking the right arrow button.
	>Note:  
	>
	> You must enable both a Data Capture Delivery Feature and a Data Capture Input Feature for the profile to send data to your application. For example "Barcode" and "Intent".
	>
	> You can remove a feature from the "Selected Features" list by clicking the left arrow button.

	![img](../../../images/profiles/image004.jpg)  

5. Select a "Selected Features" and the list of parameters will populate on the right hand side of the dialog. When you click on a parameter a description with populate on the lower left hand corner of the dialog.  

	![img](../../../images/profiles/image005.jpg)  
6. When complete click "Finish".
7. Click "Close".  

	![img](../../../images/profiles/image006.jpg)
	>Note:  
	>The profile XML will be generated and saved to "EMDKConfig.XML" inside your projects "assets" folder.

###Editing a Profile

1. Open the EMDK Profile Manager.
2. Select a Profile to modify and click "Edit".  

	![img](../../../images/profiles/image007.jpg)  
3. Edit the profile using the Profile Manager in the same way you would when creating a new profile.
4. When complete click "Finish".
5. Click "Close".  

	![img](../../../images/profiles/image008.jpg)

	>Note:  
	>The profile XML will be updated and saved to "EMDKConfig.XML" inside your projects "assets" folder.

###Renaming a Profile

1. Open the EMDK Profile Manager.
2. Select a Profile to rename and click "Rename".  

	![img](../../../images/profiles/image009.jpg)  
3. Enter the new name and click "Rename";  

	![img](../../../images/profiles/image010.jpg)  
4. Click "Close".  

	![img](../../../images/profiles/image011.jpg)  

	>Note:  
	>The profile XML will be updated and saved to "EMDKConfig.XML" inside your projects "assets" folder.

###Copying a Profile

1. Open the EMDK Profile Manager.
2. Select a Profile to copy and click "Copy".  

	![img](../../../images/profiles/image012.jpg)  
3. Enter the a name profile name to uses and click "Copy";  

	![img](../../../images/profiles/image013.jpg)  
4. Click "Close".  

	![img](../../../images/profiles/image014.jpg)  

	>Note:  
	>The profile XML will be updated and saved to "EMDKConfig.XML" inside your projects "assets" folder.


###Deleting a Profile
1. Open the EMDK Profile Manager.
2. Select a Profile to delete and click "Delete".  

	![img](../../../images/profiles/image015.jpg)  
3. Confirm delete by clicking "Delete";  

	![img](../../../images/profiles/image016.jpg)  
4. Click "Close".  

	![img](../../../images/profiles/image017.jpg)  

	>Note:  
	>The profile XML will be updated and saved to "EMDKConfig.XML" inside your projects "assets" folder.

##Using the Profile Manager API
Once you create your profiles using the Profile Manager, they will be bundled with your application and available to access using the [Profile Manager APIs](/emdk-for-xamarin/1-0/api/). These profiles will NOT be applied on the device until it is processed using these APIs.

### Multiple Ways to Access
In the ProfileManager API, you will see methods for `ProcessProfile` and `ProcessProfileAsync`. Essentially the last parameter, `extraData`, is one of two types:

* **Document** - data will be handled as a XML Document.
* **String** - data will be handled as a raw string.

###Creating or Activating a Profile
A profile is created or activated with using the PROFILE_FLAG.SET option. If the profileFlag is set to SET, and if the given profile is not available, it will look for a valid profile in the extraData argument and if present, the profile  will be added to the internal XML volatile repository and also applied to the device.  If the profile is present, then it will be applied to the device.

	:::csharp
    // Call processPrfoileAsync with profile name, 'Set' flag and modify data to update the profile
    EMDKResults results = profileManager.ProcessProfileAsync(profileName, ProfileManager.PROFILE_FLAG.Set, modifyData);
  


## Usage Notes
### Get Started with a Tutorial
Be sure to follow step by step instructions for using the Profile Manager and the associated API's in the [Getting Started Tutorial](/emdk-for-xamarin/1-0/tutorial/helloxamarin)

### Multiple Instance of Features
There should only be one instance of the DataCapture feature. The EMDK Profile Manager will not allow you to add multiple DataCapture features, but may happen if you are manually editing the EMDKConfig.xml. Other profile features can have multiple instances and may be required in some cases. For example, you may need two 'Certificate Manager' features. The first one to initialize the certificate store and the second one to install a new certificate.

### Order of Features
The profile features will be applied synchronously in the order they appear. For example, you may want to set the clock before you attempt to connect to a Wi-Fi network.

### extraData as XML String
The processProfile method has an overload method that allows sending XML content in the `extraData` parameter as a String.  

Method Signature:

	:::csharp
	// Pass in a string in XML form
	ProcessProfileAsync(String profileName, ProfileManager.PROFILE_FLAG profileFlag, String[] extraData)

`profileName` can be:

1. `[Name of Profile]` - to reference the entire profile. ex: 'EMDKProfile1'
2. `[profileName]/[featureType]/[feature friendly name in profile parameters]` to just edit part of the profile. For example, if my profile is called 'Profile1' and the name I gave to the Clock feature is 'ckEST'. Passing 'profileName' as 'Profile1/Clock/ckEST' will just process this part of the profile.
	* Valid `[featureType]`:	ActivitySelection, Barcode, MSR, Intent, Keystroke, IP, Clock, PowerMgr, PersistMgr, CertMgr, AppMgr, AccessMgr, Wi-Fi, GprsMgr

#### XML String Structure
One way you can see how this XML string should be structured is to use the Profile Manager and inspect the XML file that is created:

1. Open any project in either Visual Studio or Xamarin Studio that does not have a EMDK profile defined already (so you get just the parameters you want to change).
2. Select EMDK / Profile Manager from the menu.
3. Add the Profile features you want and selection the options you wish to use.
4. Click Finish when you are done with your selections.
5. Look in the `assets` folder and open `EMDKConfig.xml`
6. Notice the XML structure that is shown. This complete structure is to be passed in the extraData parameter as a string. You can choose to copy and paste this into your code to be used.

> WARNING!: XML parm names and values may not be the same as what is presented in the Profile Manager wizard. Pay close attention to the fields of interest. It is not recommended to manually edit this XML, use the Profile Manager Wizard to ensure proper formation of the XML structure and values.

#### Profile Name Usage Notes
If the ProfileName node is given in extraData and the ProfileFlag is SET, ProfileName in ExtraData should match with the first parameter passed to processProfile.

Example:

	:::csharp
	string[] extraData = new string[1];
	extraData[0]=
	"<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
	"<characteristic type=\"Profile\">" +
	"<parm name=\"ProfileName\" value=\" EMDKProfile1\"/>" +
	"<characteristic type=\"Clock\">" +
	"<parm name=\"emdk_name\" value=\"ck1\"/>" +
	"<parm name=\"Date\" value=\"2013-05-23\" />" +
	"<parm name=\"Time\" value=\"6:59:00\" />" +
	"<parm name=\"TimeZone\" value=\"America/Los_Angeles\" />" +
	"</characteristic>"+
	"</characteristic>";

	emdkStatus = mProfileManager.ProcessProfileAsync("EMDKProfile1", ProfileManager.PROFILE_FLAG.SET, extraData);

* If the ProfileName node is NOT given in extraData and the ProfileFlag is SET, the content will be merged with the profile given in the first parameter passed to processProfile.

* If the ProfileFlag is SET and the profile given in the first parameter passed to processProfile does not exist in EMDKConfig.xml, the profile will be appended to the internal repository.

* DataCapture content (Activity Selection, Barcode, MSR, Intent, Keystroke, IP) is considered as a whole and setting any individual feature will set as a whole. In other words, setting "EmdkSampleProfile-1/Keystroke" will push all the DataCapture features to the device.

#### Feature Name Usage Notes
Each specific profile feature can be named so that only that portion of the profile can be referenced. This can be accomplished by:

1. Specifying a name for the specific feature within a profile.
2. Using the fully qualified name as the first parameter of the processProfile method.

* If the ProfileFlag is SET, the emdk_name given in ExtraData should match the third part of the profileName passed to the processProfile method (first parameter).

In the following example, we created a profile called `EMDKProfile1` and added the Clock feature with a name of `ck2`. Now we can modify that profile using the processProfile method, making sure we specify the `emdk_name` parameter as `ck2` and use a profileName of `EMDKProfile1/Clock/ck2` in the processProfile method:

	:::csharp
	string[] extraData = new string[1];
	extraData[0]=
	"<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
	"<characteristic type=\"Profile\">" +
	"<parm name=\"ProfileName\" value=\" EMDKProfile1\"/>" +
	"<characteristic type=\"Clock\">" +
	"<parm name=\"emdk_name\" value=\"ck2\"/>" +
	"<parm name=\"Date\" value=\"2013-05-23\" />" +
	"<parm name=\"Time\" value=\"6:59:00\" />" +
	"<parm name=\"TimeZone\" value=\"America/Los_Angeles\" />" +
	"</characteristic>"+
	"</characteristic>";

	emdkStatus = mProfileManager.ProcessProfileAsync("EMDKProfile1/Clock/ck2", ProfileManager.PROFILE_FLAG.SET, extraData);

* If the ProfileFlag is SET, the emdk_name is NOT given in ExtraData and if the first parameter passed to processProfileis has the fully qualified name (ex: EMDKProfile1/Clock/ck2) , content will be appended to the profile (this only applicable for non-DataCapture features).

Example:  

	:::csharp
	string[] extraData = new string[1];
	extraData[0]=
	"<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
	"<characteristic type=\"Profile\">" +
	"<parm name=\"ProfileName\" value=\" EMDKProfile1\"/>" +
	"<characteristic type=\"Clock\">" +
	"<parm name=\"Date\" value=\"2013-05-23\" />" +
	"<parm name=\"Time\" value=\"6:59:00\" />" +
	"<parm name=\"TimeZone\" value=\"America/Los_Angeles\" />" +
	"</characteristic>"+
	"</characteristic>";

	emdkStatus = mProfileManager.processProfile("EMDKProfile1/Clock", ProfileManager.PROFILE_FLAG.SET, extraData);

#### PROFILE_FLAG.SET Usage Summary
Here is a summary of the above scenarios when using PROFILE_FLAG.SET and XML in the extraData parameter:

<table>
	<tr>
		<th>profileName</th>
		<th>EMDKConfig.XML</th>
		<th>extraData</th>
		<th>Behavior</th>
	</tr>
	<tr>
		<td>Profile1</td>
		<td>Contains all features in xml</td>
		<td>No</td>
		<td>Settings specified in XML will get applied to the device.</td>
	</tr>
	<tr>
		<td>Profile1/Barcode</td>
		<td>Contains all features in xml</td>
		<td>No</td>
		<td>Settings specified in DataCapture nodes in XML will get applied to the device.</td>
	</tr>
	<tr>
		<td>Profile1/Barcode/Bar1</td>
		<td>Contains all features in xml</td>
		<td>No</td>
		<td>Settings specified in DataCapture nodes in XML will get applied to the device given that the emdk_name is set as “Bar1”.</td>
	</tr>
	<tr>
		<td>Profile1/Clock</td>
		<td>Contains all features in xml(Clk1 and Clk2)</td>
		<td>No</td>
		<td>All the Clock feature nodes are applied to the device.</td>
	</tr>
	<tr>
		<td>Profile1/Clock/Clk1</td>
		<td>Contains all features in xml(Clk1 and Clk2)</td>
		<td>No</td>
		<td>Settings defined in the Clk1 node will be applied to the device.</td>
	</tr>
	<tr>
		<td>Profile1/Clock/Clk2</td>
		<td>Contains all features in xml(Clk1 and Clk2)</td>
		<td>No</td>
		<td>Settings defined in the Clk2 node will be applied to the device.</td>
	</tr>
	<tr>
		<td>Profile1</td>
		<td>Contains all features in xml</td>
		<td>Settings for Barcode and Clk2</td>
		<td>Settings in XML and in extraData gets applied to the device</td>
	</tr>
	<tr>
		<td>Profile1/Barcode</td>
		<td>Contains all features in xml</td>
		<td>Settings for Barcode and Clk2</td>
		<td>FAILURE is returned</td>
	</tr>
	<tr>
		<td>Profile1/Barcode/Bar1</td>
		<td>Contains all features in xml</td>
		<td>Settings for Barcode and Clk1</td>
		<td>FAILURE is returned</td>
	</tr>
	<tr>
		<td>Profile1/Clock</td>
		<td>Contains all features in xml(Clk1 and Clk2)</td>
		<td>Settings for Barcode and Clk1</td>
		<td>FAILURE is returned</td>
	</tr>
	<tr>
		<td>Profile1/Clock</td>
		<td>Contains all features in xml(Clk1 and Clk2)</td>
		<td>Settings for Barcode and Clk2</td>
		<td>FAILURE is returned</td>
	</tr>
	<tr>
		<td>Profile1/Clock/Clk1</td>
		<td>Contains all features in xml(Clk1 and Clk2)</td>
		<td>Settings for Barcode and Clk1</td>
		<td>FAILURE is returned</td>
	</tr>
</table>


---
title: Enterprise Keyboard Setup
layout: guide.html
product: Enterprise Keyboard
productversion: '3.2'
---

## Overview
The setup process for Enterprise Keyboard (EKB) varies by device, and activation is sometimes necessary to make it available to users. Zebra's keyboard also can be set as the default input method, if desired. This section of the guide covers installation (for EKB 3.2 and higher), manual activation and the steps required for setting it as the default input device. 

For advanced settings, such as language selection and scan-tab configuration, please see the [Customize section](../settings) of this guide. 

Enterprise Keyboard 1.1 (and higher) can be installed, activated and configured: 

* Manually at the device
* Remotely:
    * Zebra's StageNow device configuration tool and the [UI Manager](/stagenow/latest/csp/ui/) and [Enterprise Keyboard Manager](/stagenow/latest/csp/enterprisekeyboard) services (requires MX 6.3 or higher on the device) 
    * Through a company's own enterprise mobility management (EMM) system (if supported by that system) 

-----

## Installing/Upgrading EKB 
_Applies to all `.apk` versions of Enterprise Keyboard (incl. 1.4&ndash;1.6 and 3.2)_. 

Some versions of EKB can be downloaded from the Zebra Support Portal and installed as a user app. **Devices running Android 7.x Nougat (or higher) with older versions of EKB can be upgraded to the latest EKB version using the latest** `.apk` **file**. [Visit the Support Portal](https://www.zebra.com/us/en/support-downloads/software/productivity-apps/enterprise-keyboard.html) for specific EKB device and OS support information. Installation and upgrade instructions are below. 

> **Before beginning any installation...**
> 1. **Go to the [EKB download page](../../download) and follow instructions** to get the correct file(s) for the target device(s). <br>
> 2. **Ensure that target device(s) are able to connect** via USB to the host computer. [Get USB drivers](https://www.zebra.com/us/en/support-downloads/software/drivers/android-usb-driver.html)<br>
> 3. Note that **Enterprise Keyboard requires [activation](#manualactivation)** following installation. 

-----

#### To Upgrade EKB
_Applies to devices with an older EKB already installed_.

##### To upgrade using adb:

1. **Connect the device via USB to the host computer** that contains the downloaded `Enterprisekeyboard.x.x.x.x.apk` file (where "x.x.x.x" = EKB version number).  
2. **Push the** `EnterpriseKeyboard-x.x.x.x.apk` **file to the root directory** of the device. 
3. From a terminal window, **run the following command**: 

		:::terminal
		adb install –r [exact EnterpriseKeyboard_file_name.apk]

 _The "-r" option reinstalls an existing app and retains any existing user data_.
4. **To verify installation**, see [Verify Installation](#verifyinstallation) below. 

> **NOTE**: After installation, **Enterprise Keyboard requires [activation](#manualactivation)**. 

####Also see:

* **[Full adb documentation](https://developer.android.com/studio/command-line/adb)**
* **[EKB device and OS support info](https://www.zebra.com/us/en/support-downloads/software/productivity-apps/enterprise-keyboard.html)**
* **[Get USB drivers for connecting Windows PCs to Zebra devices](https://www.zebra.com/us/en/support-downloads/software/drivers/android-usb-driver.html)**

-----

##### Upgrade or Install using USB

1. Connect the device to the host computer that contains the downloaded `Enterprisekeyboard.apk` file.  
2. **Copy the** `Enterprisekeyboard.apk` **file to the root directory** of the device.
3. **Navigate to the file** using a file manager app on the device. 
4. **Tap the file to install it**. 
5. To verify installation, see [Verify Installation](#verifyinstallation) below. 

> **NOTE**: After installation, Enterprise Keyboard requires [activation](#manualactivation). 

-----

#### To Install EKB 3.2
_Applies to devices running Android 7.x Nougat or higher <u>without</u> EKB installed_.

1. **Connect the device to the host computer** that contains the downloaded `Enterprisekeyboard.apk` file.  
2. **From a terminal window**, run the following command: 

		:::terminal
		adb install Enterprisekeyboard.apk

3. **Push the** `Enterprisekeyboard.apk` **file to the root directory** of the device.
4. **Navigate to the file** using a file manager app on the device
5. **Tap the file** to complete the installation. 
6. To verify installation, see [Verify Installation](#verifyinstallation) below. 

> **NOTE**: After installation, Enterprise Keyboard requires [activation](#manualactivation). 

-----

## Uninstalling/Downgrading EKB

####Notes:
* **If EKB was installed as a user app on a device with no prior version**, removal is the same as for any standard Android app. 
* **If EKB was installed as an upgrade on a device with EKB preinstalled**, removal reverts to the preinstalled version. 

#### To uninstall using adb:
1. **Connect the host computer to the device** that contains the Enterprise Keyboard to be uninstalled.   
2. **From a terminal window**, run the following command: 

		:::terminal
		adb uninstall com.symbol.mxmf.csp.enterprisekeyboard
3. To verify uninstallation, use the [Verify Installation](#verifyinstallation) instructions below to confirm that EKB was removed or downgraded to the preinstalled version.  

#### To uninstall using Settings panel:
1. **On the device that contains the Enterprise Keyboard to be uninstalled**:<br>
 Go to **Settings -> Apps & Notification -> Enterprise Keyboard -> Disable** 
2. Then go to **Settings -> Apps & Notification -> Enterprise Keyboard -> Uninstall**

-----

### Verify Installation

##### To verify that the installation/upgrade was successful: 

1. Go to **Settings -> Apps & Notification -> Enterprise Keyboard**
2. **Tap "App Info"** and verify that the version corresponds with the version installed.  

> **NOTE**: After installation, Enterprise Keyboard requires [activation](#manualactivation). 

-----

## Manual Activation
The section covers direct activation of Enterprise Keyboard on a single device. If using one of the remote methods referenced above to activate and configure multiple managed devices, please see the [Automated Activation section](#automatedactivation) later in this guide. 

<b>To quickly determine whether Enterprise Keyboard has been activated</b>: 

&#49;. Bring up the Android keyboard and long-press the spacebar. 

&#50;. If "Enterprise Keyboard" appears in a screen like the one below, tap its radio button (arrow) to set it as the default input device:
<img alt="" style="height:150px" src="2a_choose_input.png"/>
<br>

If the Enterprise Keyboard does not appear, proceed to the steps below. 

#####To activate Enterprise Keyboard: 

&#49;. <b>Open the Settings panel</b> on the device:
<img alt="" style="height:350px" src="home_screen.png"/>
<br>

&#50;. Scroll to and <b>tap the "Language and input" control</b>:
<img alt="" style="height:350px" src="input_in_settings.png"/>
<br>

&#51;. <b>Place a check next to "Enterprise Keyboard"</b> to enable it on the device. Uncheck other input devices to disable them, if desired. If Enterprise Keyboard was included with the device by default (and not downloaded as an OS patch), this step might not be necessary. 
<img alt="" style="height:350px" src="panel_default.png"/>
<br> 

&#52;. <b>Tap "Default"</b> to set the default input device:
<img alt="" style="height:350px" src="default_input.png"/>

&#53;. <b>Tap the Enterprise Keyboard radio button</b> to set it as default input device:
<img alt="" style="height:150px" src="2a_choose_input.png"/>
<b>Note</b>: This panel also can be invoked by long-pressing the spacebar whenever the Android or Zebra keyboard is visible.
<br>

&#54;. <B>Tap the HOME key</b> to exit the Settings panel.  

Enterprise Keyboard is now ready to use with default settings. 

------

### Change Settings
Following installation, Enterprise Keyboard settings can be changed through the Android Settings panel. 

#####Change Enterprise Keyboard settings:

&#49;. <b>Open the Settings panel</b> on the device:
<img alt="" style="height:350px" src="home_screen.png"/>
<br>

&#50;. <b>Tap the "Language and input" control</b>:
<img alt="" style="height:350px" src="input_in_settings.png"/>
<br>

&#51;. <b>Tap the Enterprise Keyboard Settings button</b> to change settings:
<img alt="" style="height:350px" src="ekb_settings_button.png"/>
<br>

&#52;. On the Enterprise Keyboard Preferences panel, <b>tap the setting(s) that require change</b>:
<img alt="" style="height:350px" src="ekb_settings_panel.png"/>
See the [Customize section](../settings) for more information about Enterprise Keyboard settings. 

------

## Automated Activation
Enterprise Keyboard 1.1 (and higher) can be configured remotely on multiple managed devices using Zebra's [StageNow](../../../../) tools and the [UI Manager](/mx/uimgr/) service or an organization's own MDM system.  

Actions to be executed on the Android Settings panel:
1. <b>Open Language and input</b> 
2. Add a check for <b>"Enterprise Keyboard"</b> to enable it on the device
3. <b>Select Enterprise Keyboard</b> as the default input device
4. <b>Select a language</b> (if other than the system default)

### Set as Default Input Device
Whether using the UI Manager service through Zebra's StageNow or EMDK tools, or if deploying Enterprise Keyboard from a company's own MDM, it is necessary to specify Enterprise Keyboard's package and class names to select it as the default keyboard on the device. 

The required package and class names are shown as the values below, wrapped by the coding necessary for using one of Zebra's tools: 

		:::xml  
		<parm name="InputMethodPackageName" value="com.symbol.mxmf.csp.enterprisekeyboard"/>
		<parm name="InputMethodClassName" value="com.android.inputmethod.latin.LatinIME"/>

For additional information about usage and syntax, please refer to respective documentation.

-----

## Manual Deactivation

Enterprise Keyboard cannot be removed if it was included with the device operating system. However, it can be deactivated by reversing the activation process described in the Activation section. The steps below describe how to deactivate Enterprise Keyboard using the Android Settings panel. 

<b>Warning: This action renders Enterprise Keyboard inaccessible, including its scanning and other capabilities</b>. 

**Deactivate Enterprise Keyboard on a device**: 

&#49;. <b>Open the Settings panel</b> on the device:
<img alt="" style="height:350px" src="home_screen.png"/>
<br>

&#50;. Scroll to and <b>tap the "Language and input" control</b>:
<img alt="" style="height:350px" src="input_in_settings.png"/>
<br>

&#51;. <b>Remove the check next to "Enterprise Keyboard"</b> to disable it on the device. If the Android keyboard is the only other input device, it automatically becomes the default input device and cannot be disabled. 
<img alt="" style="height:350px" src="panel_default.png"/>
<br> 

Manual deactivation of Enterprise Keyboard is complete. 

-----

## Automated Deactivation
Enterprise Keyboard 1.1 (and higher) can be deactivated on multiple managed devices using an organization's own MDM server in the same way as other Android apps. Alternatively, remote uninstallation can be accomplished through Zebra's [EMDK](/../../../../) or [StageNow](../../../../) tools using the [App Manager](/mx/appmgr) service. 

-----

### About Multi-user Mode

Enterprise Keyboard 2.0 (and higher) supports Primary and Secondary Users **on devices built on Zebra's SDM660 platform (including ET51, ET56, L10, MC93, PS20, TC52, TC57, TC72 and TC77) running Android 8.x Oreo** (and higher). Primary Users can make changes to EKB settings and create Secondary Users on the device. Secondary Users cannot change EKB settings or create additional users. 

**To create a Secondary User**:<br>
_(Android 8.x Oreo and higher)_

1. Sign into a device as a Primary User. 
2. **Open the Settings panel** on the device. 
3. Tap **Users & accounts -> Users -> Add user -> Add a new user**. 
4. Follow prompts to complete the process. 
<br>

<img alt="" style="height:300px" src="secondray_user_mode.png"/> 
_EKB Settings are "greyed out" for Secondary Users_. 
<br>

**To switch users**

1. **Open the Settings panel** on the device. 
2. Tap **Users & accounts -> Users**. A list of device User names appears. 
3. **Tap on the desired User name** to switch to that User. 

> **Supported only on SDM660-platform devices running Android 8.x Oreo**. 

-----
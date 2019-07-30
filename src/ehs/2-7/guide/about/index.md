---
title: About Enterprise Home Screen
layout: guide.html
product: Enterprise Home Screen
productversion: '2.7'
---

## Overview
Enterprise Home Screen is a free Android app from Zebra Technologies that provides a simple way for administrators to control access to apps and settings on a Zebra device without the need to write custom code. Using a simple touch interface, EHS easily limits usage to one or more specified applications, prevents changes to device settings and locks down the file system. It can be configured in seconds, and settings can be deployed via MDM. EHS settings are stored in a simple XML file that's easy to read and edit by hand, if necessary. 

EHS works by inserting itself in place of the stock Android app launcher and home screen. When first run, it presents a screen like the one below, offering a choice of which home app to open and whether to make the selection permanent. EHS also can be installed as the default launcher, bypassing the selector dialog. 

<b>Note</b>: Many of the capabilities of EHS can be accomplished manually on the device, programmatically through [EMDK](../../../../emdk-for-android) or remotely using [StageNow](../../../../stagenow) or a third-party mobile device management (MDM) system (if supported by that MDM system). EHS simply puts the capabilities into a single tool, but does NOT provide a complete lockdown for securing devices. **For maximum security, Zebra recommends using EHS with additional security options provided by Android and Zebra’s MX (via EMDK or StageNow)**.

_Enterprise Home Screen does not support localization_. 

**[What's New in EHS 2.7](#newinehs27)**

------

The first time it's installed, EHS presents the admin with this simple choice: 
<img style="height:150px" src="homePrompt.png"/>

Selecting "Always" locks EHS in as the default home app and **locks users out of the following** device features by default:

* Airplane mode
* USB debugging
* Access to the file system
* Keyguard (for unlocking the screen)
* Keyguard-screen camera and search functions
* The status-bar Settings icon  
* Full access to the System Settings panel  

Administrators can grant or restrict access to individual features or hide the settings panel entirely. 

> **Note: After selecting "Always," some devices require a 10-second pause before restarting to ensure the change remains persistent**. 

Ready to get started? [Download Enterprise Home Screen 2.7](https://www.zebra.com/us/en/support-downloads/software/utilities/enterprise-home-screen.html)

-----

## Supported Devices
This version of Enterprise Home Screen has been approved for use with the Zebra Android devices listed below.

<table class="MsoNormalTable" style="" id="table2" border="1" cellpadding="3" cellspacing="0">
<tbody>

<tr bgcolor="#ccffcc" >
<td style="width: 150.35pt;" width="200">
<p class="MsoNormal"><b><font color="#333399" size="4">Device</font></b></p>
</td>

<td style="width: 220px;">
<p class="MsoNormal" style="text-align: center;" align="center"><b><font color="#333399" size="3">
    Android 5.0/5.1 (Lollipop) </font></b></p>
</td>
<td style="width: 220px;">
<p class="MsoNormal" style="text-align: center;" align="center"><b><font color="#333399" size="3">
    Android 6.0 (Marshmallow) </font></b></p>
</td>
<td style="width: 220px;">
<p class="MsoNormal" style="text-align: center;" align="center"><b><font color="#333399" size="3">
    Android 7.1 (Nougat)</font></b></p>
</td>

</tr>

<td style="width: 118.35pt;"  width="158">
<p class="MsoNormal"><font color="#333399" size="3">ET50/ET55</font></p>
</td>

<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">*</font></b></p>
</td>
<td style="width: 220px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">*</font></b></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
</tr>

<tr>
<td style="width: 150.35pt;"  width="250">
<p class="MsoNormal"><font color="#333399" size="3">MC18</font></p>
</td>
<td style="width: 220px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">*</font></b></p>
</td>
<td style="width: 220px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
</tr>

<tr>
<td style="width: 150.35pt;"  width="250">
<p class="MsoNormal"><font color="#333399" size="3">MC32</font></p>
</td>

</td>
<td style="width: 220px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">*</font></b></p>
</td>
<td style="width: 220px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
</tr>

<tr>
<td style="width: 150.35pt;"  width="250">
<p class="MsoNormal"><font color="#333399" size="3">MC33</font></p>
</td>

</td>
<td style="width: 220px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
<td style="width: 220px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">*</font></b></p>
</td>
</tr>

<tr >
<td style="width: 118.35pt;" width="158">
<p class="MsoNormal"><font color="#333399" size="3">MC40</font></p>
</td>

<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">*</font></b></p>
</td>
<td style="width: 220px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
</tr>

<tr>
<td style="width: 118.35pt;"  width="158">
<p class="MsoNormal"><font color="#333399" size="3">MC67</font></p>
</td>

<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
<td style="width: 220px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
</td>

<tr >
<td style="width: 118.35pt;"  width="158">
<p class="MsoNormal"><font color="#333399" size="3">MC92</font></p>
</td>

<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
<td style="width: 220px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
</tr>

<tr>
<td style="width: 118.35pt;" width="158">
<p class="MsoNormal"><font color="#333399" size="3">TC20, TC25</font></p>
</td>

<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
<td style="width: 220px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">*</font></b></p>
</td>
</tr>

<tr>
<td style="width: 118.35pt;" width="158">
<p class="MsoNormal"><font color="#333399" size="3">TC51, TC56</font></p>
</td>

<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
<td style="width: 220px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">*</font></b></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">*</font></b></p>
</td>
</tr>

<tr >
<td style="width: 118.35pt;" width="158">
<p class="MsoNormal"><font color="#333399" size="3">TC55</font></p>
</td>

<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
<td style="width: 220px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
</tr>

<tr>
<td style="width: 118.35pt;" width="158">
<p class="MsoNormal"><font color="#333399" size="3">TC70</font></p>
</td>

<td style="width: 96px;">
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">*</font></b></p>
</td>
<td style="width: 220px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
</tr>

<td style="width: 118.35pt;" width="158">
<p class="MsoNormal"><font color="#333399" size="3">TC70x</font></p>
</td>

<td style="width: 96px;">
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
<td style="width: 220px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">*</font></b></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">*</font></b></p>
</td>
</tr>

<tr>
<td style="width: 118.35pt;"  width="158">
<p class="MsoNormal"><font color="#333399" size="3">TC75</font></p>
</td>

<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">*</font></b></p>
</td>
<td style="width: 220px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>

<tr >
<td style="width: 118.35pt;" width="158">
<p class="MsoNormal"><font color="#333399" size="3">TC75x</font></p>
</td>

<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
<td style="width: 220px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">*</font></b></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">*</font></b></p>
</td>
</tr>

<tr>
<td style="width: 118.35pt;"  width="158">
<p class="MsoNormal"><font color="#333399" size="3">TC8000</font></p>
</td>

<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">*</font></b></p>
</td>
<td style="width: 220px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>

<tr >
<td style="width: 118.35pt;"  width="158">
<p class="MsoNormal"><font color="#333399" size="3">VC80x</font></p>
</td>

<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
<td style="width: 220px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">*</font></b></p>
</td>
</tr>

<tr >
<td style="width: 118.35pt;"  width="158">
<p class="MsoNormal"><font color="#333399" size="3">WT6000</font></p>
</td>

<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">*</font></b></p>
</td>
<td style="width: 220px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
<td style="width: 96px;" >
<p class="MsoNormal" align="center"><b><font color="#333399" size="4">&nbsp;</font></b></p>
</td>
</tr>
</tbody>
</table>

## New in EHS 2.7

>**This version does not support Android KitKat**. 

**EHS 2.7 supports Zebra devices running Android Lollipop and higher only**. Zebra continues to support earlier versions of EHS for use on devices running KitKat. To use EHS on a device running KitKat, please [download EHS 2.6](/ehs/2-6/download) or an earlier version. 

#### Device Support
EHS 2.7 adds support for the following devices running Android Nougat:  

* MC33
* TC20* 
* TC25* 
* TC51
* TC56
* TC70x
* TC75x 

( * ) Requires a device-specific .apk file. See [download page](../../download) for details. 

#### New Features
* [Enable/Disable Recent Apps button](../settings/#recentappsbuttondisabled) on Android Nougat devices
* [Enable/Disable EHS Logging](../features/#ehslog) and set a maximum log file size 
* [Battery Health Percentage now displayed](../setup/#batteryandwifiquickview) on Battery info and Quick info screens on devices equipped with Zebra Power Precision Plus battery
* [Enable/Disable wallpaper stretching](../settings/#wallpaperstretching) to expand an image to fill the device screen

-----

### Android Nougat Notes
**_Applies to devices running Android Nougat 7.x and higher_**:

* **To enable Secure Mode in EHS, manual file-push is no longer supported in Android N for installing a device root certificate**. To deploy cert files to the device, use Certificate Manager through [StageNow](../../../../stagenow) or [EMDK](../../../../emdk-for-android). Learn more [about Secure Mode](../features/#securemode). 

-----

### Android Marshmallow Notes
**_Applies to devices running Android 6.x Marshmallow only_**:

* **Selecting EHS as the default launcher will not be permanent** after a reboot on some devices if the selection was made while in User Mode. <img style="height:100px" src="homePrompt.png"/> **To avoid this issue, switch to Admin Mode** and press the HOME button; the "Select a home app" pop-up appears. **Select EHS and tap "Always"** to make the selection permanent.

* **If Location Permission is revoked** on a device running Android 6.0 Marshmallow, a blank list of available access points will be presented under "Scan Results" in the "Wireless info" screen in EHS. Enabled by default, Location Permission is accessed in **Settings -> Apps -> EHS -> Permissions**. 

* **If Wi-Fi is disabled** on a Marshmallow device, the MAC address will be shown as "Unknown" in the "Wireless info" screen in EHS.

-----

### Android Lollipop, Marshmallow and Nougat Notes 
**_Applies to devices running Android Lollipop 5.x and higher (including Marshmallow and Nougat)_**:

* **[Status Bar Pull-down](../settings#disablestatusbarpulldown) cannot be controlled through EHS on devices running Android L, M or N** (the feature appears "grayed out" in the Admin-Mode Preferences panel on those devices). To contol the Status Bar Pull-down (also known as the "Notification Pulldown"), use the [UI Manager](/mx/uimgr) through Zebra EMDK or StageNow tools.

<!-- 
REPLICATE ABOVE NOTE ON SETTINGS PAGE 
 -->

* **[Status Bar Settings Icon](../settings#disablestatusbarsettings) behavior has changed**. While disabling such access to the Settings panel is not supported through EHS on all devices, a new feature in [UI Manager](/mx/uimgr) allows the Status Bar Settings Icon (referred to there as Notification Quick Settings Icons) to be controlled through EMDK, StageNow or a third-party MDM system, overriding any EHS setting. Applies only to devices with MX 6.0 and higher, which is for Android Lollipop and later; any prior device limitations remain. 

* **[Airplane Option Disabled](../settings#airplaneoptiondisabled) feature cannot be controlled through EHS on devices running Android M or N, nor on some devices running Android L**. For devices on which the "Airplane option disabled" feature appears "grayed out" in the Admin-Mode Preferences panel, it might still be possible to access the feature using the [Power Key Manager](/mx/powerkeymgr) through Zebra EMDK or StageNow tools.

<!-- 
REPLICATE ABOVE NOTE ON SETTINGS PAGE 
 -->

* **Devices running Android L and higher retain the "Recent Apps" list after device reboot**, posing a potential security risk. EHS 2.7 disables the Recent Apps button on <u>Nougat devices only</u> to help address this risk. For all devices, the list can be cleared using [App Manager](/mx/appmgr) through Zebra EMDK, StageNow or a third-party MDM system. For more information, see [Security Notes](../features#securitynotes) in the Advanced Features section. 

* **[Kiosk Mode](../features#kioskmode) should not be used with Screen Pinning**, a feature in Android L and higher that works in a similar way.

* **The [Bypass Keyguard](../settings#bypasskeyguard) feature fails to unlock the screen after rebooting a device running Android L and higher**. This feature works normally on devices running KitKat and Jelly Bean. 

* **[Screen orientation](../settings#orientation) can be changed through the Quick Settings panel on devices running Android L and higher** <u>only</u> when EHS is configured to accept the System orientation setting (the EHS default). If an EHS administrator sets the orientation to landscape or portrait mode, the device user will no longer be able to change the orientation setting.

------

### ET50/ET55 Device Notes

**Applies to Zebra ET50 and ET55 devices with Google Mobile Services (GMS) only**.  

* **The Launcher selection pop-up does not appear** when the HOME button is pressed while in User Mode, preventing a user or administrator from easily selecting the default Launcher app on the device. <img style="height:100px" src="homePrompt.png"/> **To avoid this issue, switch to Admin Mode** and press the HOME button; the "Select a home app" pop-up appears. **Select EHS and tap "Always"** to make the selection permanent.

* **A permanent system UI crash could occur if EHS is uninstalled remotely (i.e. via MDM) while in User Mode**. Before uninstalling EHS remotely, Zebra recommends pushing to the device an EHS configuration file (`enterprisehomescreen.xml`) with the Search app enabled.

See the [Advanced Settings](../settings) section for a complete `enterprisehomescreen.xml` configuration file reference. 

-----

## Added in EHS 2.6

* **Support for ET50/ET55** tablet computers runing Marshmallow

-----

## Added in EHS 2.5

#### Device Support:
* [MC32](https://www.zebra.com/us/en/products/mobile-computers/handheld/mc3200.html) running Android 5.1.1 Lollipop (see [Android 6.x Marshmallow Notes](#androidmarshmallownotes))
* [TC51/TC56](https://www.zebra.com/us/en/products/mobile-computers/handheld/tc51-tc56.html) and [TC75x](https://www.zebra.com/us/en/products/mobile-computers/handheld/tc7x-touch-computer-series.html) Touch Computers running Android Marshmallow 6.0.1 (see [Android 6.x Marshmallow Notes](#androidmarshmallownotes))
* [ET50/ET55 Tablet Computers](https://www.zebra.com/us/en/products/tablets/et50-55.html) running Android Lollipop 5.1.1 (see [Android 5+ Notes](#androidlollipopandmarshmallownotes) and [ET50/ET55 Device Notes](#et50et55devicenotes)) 
* [TC8000 Touch Mobile Computer and Scanner](https://www.zebra.com/us/en/products/mobile-computers/handheld/tc8000.html) running Android Lollipop 5.1.1 (see [Android 5+ Notes](#androidlollipopandmarshmallownotes))
* [TC70/TC75 Touch Computers](https://www.zebra.com/us/en/products/mobile-computers/handheld/tc7x-touch-computer-series.html) running Android Lollipop 5.1.1 (see [Android 5+ Notes](#androidlollipopandmarshmallownotes)) 
* The [MC67](https://www.zebra.com/us/en/products/mobile-computers/handheld/mc67-mobile-computer-series.html) Mobile Computer Series running Android 4.4 KitKat (see [Android 4.4 Notes](#androidkitkatnotes)) 

#### Update for June, 2017:

* **Support added for [MC18](https://www.zebra.com/us/en/products/mobile-computers/handheld/mc1x-personal-shopper-series.html) and [MC40](https://www.zebra.com/us/en/products/mobile-computers/handheld/mc40-mobile-computer-series.html) running Lollipop**
* **Support added for [TC70x](https://www.zebra.com/us/en/products/mobile-computers/handheld/tc7x-touch-computer-series.html) running Marshmallow** 

#### EHS 2.5 No Longer Supports:
* **Devices with Android 4.1.2 Jelly Bean**
* **TC70 with Android 4.4.2 KitKat** (BSP version 112414)
<br>
**Zebra continues to support EHS on the TC70 with Android 4.4.2 KitKat and on Zebra devices running Jelly Bean**. [Download EHS 2.4](../../../2-4/download) to target these devices. 

#### New Features in EHS 2.5:
* **Easier download and installation**. The EHS 2.5 download package now includes a single APK for installing on all supported Zebra devices; no more multi-APK installer. 

* **Now links to [Techdocs](../../../../)**, Zebra's premier web site for user-facing documentation--now a standard component on every EHS installation.
<br>

[Download Enterprise Home Screen 2.5](https://www.zebra.com/us/en/support-downloads/software/utilities/enterprise-home-screen.html)

------

## Added in EHS 2.4

* **Support for the [Zebra WT6000](https://www.zebra.com/us/en/products/mobile-computers/wearable-computers/wt6000.html) -** wearable terminal running Android 5.0 Lollipop. (see [Android Notes](#androidlollipopandmarshmallownotes)) 

* **[Bundle Data Option](../settings#bundle) -** allows injection of app parameters, user data or other key-value pairs into an app on launch. 

* **[App Launch Flags](../settings#applaunchflags) -** permit one or more Android Intent flags to be specified when an application is launched, directing launch behavior as required. 

* **[Service Auto-Launch](../settings#serviceautolaunch) -** permits one or more Android services to be started whenever EHS launches. 

* **[Wildcard Character](../settings#applications) -** reduces the lines of code required in the EHS config file to specify apps for display in User Mode.

* **[Custom App Icons](../settings#icon) -** permits customized icons for apps and links, overriding the default system icons. 

* **[Custom Title-bar Icons](../settings#titlebariconfile) -** permits a custom icon to be displayed in the EHS Title Bar, overriding the default EHS icon. 

* **[App Icon Size](../settings#appiconsize) -** provides five sizes for Admin- and User-mode application icons.

<!-- <img alt="" style="height:350px" src="2-4_icon_size.png"/>
_The icon size UI is accessible from Admin or User Modes (default shown)_.  
<img alt="" style="height:350px" src="2-4_xxl_icons.png"/>
_The User Mode screen with XXL icons_. -->
* **[Battery and Wi-Fi Quick View](../setup#batteryandwifiquickview) -** displays real-time status of the device battery and Wi-Fi signal on a single screen.

* **[App Icon Label Text Color](../settings#iconlabeltextcolor) -** is now white on a transparent background to improve readability. 

------

## Added in EHS 2.3
* [Enable/disable device reboot](../settings#rebootoninstallenabled) when EHS is first launched after installation. 
* TC8000 KitKat version 4.4 support (added January, 2016)

---
title: Frequently Asked Questions
layout: guide.html
product: Zebra Workstation Connect
productversion: '1.0'
menu:
  items:
    - title: About
      url: /zwc/about
    - title: Set Up
      url: /zwc/setup
    - title: Deploy
      url: /zwc/emm
    - title: APIs
      url: /zwc/api
    - title: FAQ
      url: /zwc/faq
    - icon: fa fa-search
      url: /zwc/search
---

###Q: What is the minimum BSP required on the device for ZWC?

**A: ZWC requires the following BSP**:

* `11-11-03.00-RG-U00-PRD-HEL-04` (or later)

-----

###Q: What is the package name of the ZWC app?

**A: The ZWC package name is**:

* `com.zebra.workstationconnect.apk`

-----

Is there a change? 



-----

7/12/21- copied from PMB: 

###Q: Is software needed to enable TC5X devices to be used in a desktop-like environment through the TC5X Workstation Docking Cradle?

**A. Yes, all supported TC5X devices require specific ZWC software components to be installed on all devices intended to use the ZWC cradle**: 

* Displaylink Presenter driver (from [Google Play](https://play.google.com/store/apps/details?id=com.displaylink.presenter&hl=en_US))


FIXXXXXXXXXXX

Once installed and an HDMI monitor is attached to the cradle, the TC5X display will be presented on the HDMI monitor in the same mode (i.e. Portrait, Landscape) as the device setting.

In addition, for the TC52 and TC57, we recommend our Android Oreo BSP Version: 01.21.18.00, which includes support for the Ethernet driver and an auto-rotation feature. For the TC51 and TC56, BSP Version: 02.13.15 LifeGuard Patch Version: U16 will also include these features. These downloads are available on the Zebra support site @ https://www.zebra.com/support (Search “TC5”)

-----

###Q: What does the ZWC software do and why is it required? 


additional software to enable the use of an HDMI monitor and to utilize an autorotation feature to display in landscape mode. 

----- 

###Q: Are all four (4) USB ports on the TC5X Workstation Docking Cradle the same?

**A. No. Three are standard 0.5-AMP USB ports suitble for connecting a keyboard, mouse and other peripherals. The remaining port delivers 1.5 AMPs, which could be used for charging another device**.

-----

6/2/21 - COPIED FROM Usage Guide


Zebra Workstation Connect User and Configuration Guide  

 

Zebra Workstation Connect (ZWC) leverages Android Desktop Mode and a Zebra Desktop Launcher to present the user with a “desktop-like” interface when connecting a mobile device to an external monitor via a workstation cradle. This guide describes the necessary steps to enable Zebra Workstation Connect and the features included for Android 11.  

Default Mirror Mode: 

After installing the Android OS (11-11-11.00-RG-U00-PRD-HEL-04), the device will use “Mirror Mode” as default when the device is docked in a workstation cradle and connected to a HDMI monitor; if “Mirror Mode” is the required view mode for this set-up, no further actions are required. To evaluate the features for Zebra Workstation Connect follow the steps on the section below.  

Zebra Workstation Connect Installation and Enablement Process 

Process A: Manual installation and Enablement Process 

Step 1: Install Zebra Workstation Connect APK on Mobile Device 

Zebra Workstation Connect apk is required to be installed on mobile device and will provide features to enhance user experience on an external monitor (secondary screen). 

Installation of ZWC apk (com.zebra.workstationconnect.apk) file can be installed on device following standard process. E.g. adb install <path to> com.zebra.workstationconnect.apk or saving file on device and running directly.  

Step 2: Grant Zebra Workstation Connect APK permission on Mobile Device 

After the installation of the Zebra Workstation Connect apk it is necessary to grant it permission to display it over other applications, to enable this, hold-press the Workstation Connect app icon on the mobile device screen and select the option below: 

App Info>Advanced>Display over other apps>Allowed 

 

Step 3: Enable Desktop Mode on Mobile Device 

After the installation of the Zebra Workstation Connect apk, it is required to enable the following system settings on the mobile computer, this can be done manually on device following the steps below: 

 

Enable developer options by clicking on Settings -> About phone -> Build number 5 times 

Enable Desktop Mode on the menu: Settings -> System -> Advanced -> Developer options ->  

 

             

 

Note: if applications to be used are not designed to be resizable “Force activities to be resizable” can be enabled on this menu, reviewing the behavior of such applications is recommended when utilizing Zebra Workstation Connect and enabling this option. 

 

Step 4: Perform a device reboot prior docking device in the workstation cradle 

Once device is rebooted, when docked in the workstation cradle and connected to HDMI monitor, the screen of the mobile device will show the home screen and allow user to launch and run applications on the mobile device screen, at the same time, the external monitor will show the homes screen of Zebra Workstation Connect as presented on the image below. 

 

 

 

 

 

 

Process B: StageNow Installation and Enablement Process 

Preconditions: Install StageNow v.5.2.0.1032 or higher and create a StageNow profile that will include the following steps (in specified order): 

Step 1: Configure an applicable network over where the Zebra Workstation Connect apk can be download (e.g., using Wi-Fi) 

 

Step 2: Download the Zebra Workstation Connect apk to a suitable location/folder on the mobile device using FileMgr 

Refer to the following link for more information about the usage of FileMgr including downloading the apk to the device in a specific location: https://techdocs.zebra.com/stagenow/2-2/csp/file/  

Step 3: Install the Zebra Workstation Connect apk using AppMgr 

Refer to the following link for more information about the usage of AppMgr including installing an apk on the device: https://techdocs.zebra.com/stagenow/3-1/csp/app/    

 

Step 4: Grant Zebra Workstation Connect apk permission to “Display over other apps”, using AccessMgr 

Refer to the image below for more information about the usage of AccessMgr, including granting permissions to an app: 

 

 

For more information, refer to the following link: https://techdocs.zebra.com/mx/accessmgr/  

 

Step 5: Enable Desktop Mode on Mobile Device using DisplayMgr 

Refer to the image below for more information about the usage of DisplayMgr, including the enablement of Desktop Mode on the mobile device: 

 

 

Step 6: Perform a device reboot prior docking device in the workstation cradle using PowerMgr 

Note: if an existing StageNow profile is used, the steps above can be incorporated into it, however a device reboot should be specified as the last step to happen.  

 

Once the StageNow profile is created, a barcode can be generated and scanned to set-up the steps above on the mobile device.  

 

Once device is rebooted, when docked in the workstation cradle and connected to HDMI monitor, the screen of the mobile device will show the home screen and allow user to launch and run applications on the mobile device screen, at the same time, the external monitor will show the homes screen of Zebra Workstation Connect as presented on the image below. 

 

Page Break
 

Process C: Installation and Enablement Process via XML 

Step 1: Use an EMM to download and install the Zebra Workstation Connect apk on the mobile device 

Step 2: Through an application follow the steps below 

Step 2.1: Detect when Zebra Workstation Connect apk is installed 

Step 2.2: Submit the following XML to MX to grant Zebra Workstation Connect apk permission to “Display over other apps” 

   <!--Set permission   Via AccessMgr for ZWC --> 

  <characteristic version="10.4" type="AccessMgr"> 

    <parm name="PermissionAccessAction" value="1" /> 

    <parm name="PermissionAccessPermissionName" value="android.permission.SYSTEM_ALERT_WINDOW" /> 

    <parm name="PermissionAccessPackageName" value="com.zebra.workstationconnect" /> 

    <parm name="PermissionAccessSignature" value="MIID6TCCAtGgAwIBAgIJAJqOWgV07V6QMA0GCSqGSIb3DQEBBQUAMIGKMQswCQYDVQQGEwJVUzERMA8GA1UECAwITmV3IFlvcmsxEzARBgNVBAcMCkhvbHRzdmlsbGUxGTAXBgNVBAsMEE1vYmlsZSBDb21wdXRpbmcxGzAZBgNVBAoMElplYnJhIFRlY2hub2xvZ2llczEbMBkGA1UEAwwSQ29tbW9uIEFuZHJvaWQgS2V5MB4XDTE4MTEyOTIwNTU0OVoXDTQ2MDQxNjIwNTU0OVowgYoxCzAJBgNVBAYTAlVTMREwDwYDVQQIDAhOZXcgWW9yazETMBEGA1UEBwwKSG9sdHN2aWxsZTEZMBcGA1UECwwQTW9iaWxlIENvbXB1dGluZzEbMBkGA1UECgwSWmVicmEgVGVjaG5vbG9naWVzMRswGQYDVQQDDBJDb21tb24gQW5kcm9pZCBLZXkwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCwA3jRXXIKoF3lU4gBU0XM7LAzAc9pyxHFbqRoy+uGXzIdPGKNQVqyeQKT1gLnQWz7Nz+AiFbB3axfjpGZy8Z5gakp1i8avx+ZwwST++ufEs+jhKF9XJThOSc9MG5Cgk9+ByAZjBLwg0XX+IPqTO+xcxG8BlNIDOd1Ik+99MQezGn8mfS/1MMC1ynZRC+18z9VkD+FZeFYSHU1OoFBMhCjMKYApa08ZuPk/+lQTfDTs+JPxjsBqy906vt+PnDnYIfobjaxeEbaDQvjRLlLKKq1OsvdcmnrKWkW72Dt5XkIcTYHfEs6wfFrMiYhO3/gxhoqBuiHbNyIL9kKTwkMg2wfAgMBAAGjUDBOMB0GA1UdDgQWBBRXkmK7fyfhVMBWOrUJvkSHm9IapDAfBgNVHSMEGDAWgBRXkmK7fyfhVMBWOrUJvkSHm9IapDAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBBQUAA4IBAQB0BZ1Duu0U59p7U9pkdoS79GxhE8ALnYPkxeVX5ZqOBbS/BWG5t+M2EyfUc2pNKqAqopfnBdyXcxuw0JyQBIYKmDHG+YtxqxdqBcDrfmsxk1gyVLH4mZvhCTpPeUM5LivzFGdaqm4Dm2M5XG1BSDvclrUzoebDhg2VFJfRzYHnhZsBNVlcxQ/m8UUKmGl5sXgIHQCi4o0zrdRcWAnMqtxd0vzdRL2h6MTh56ICiOVG8rASXBdZmN49FjwlYFfQyetwdrrmpYleTWkyQteGCy7r5zMCXcMTRawRp5R6kP/w6FNcw3fpUs8qHlT47lhVNABQA94hkNW50Fv40xuSYOww" /> 

  </characteristic> 

 

Step 2.3: Submit the following XML to MX to enable Desktop Mode on Mobile Device using DisplayMgr 

  <!--Set desktop mode Via DisplayMgr--> 

  <characteristic version="10.5" type="DisplayMgr"> 

    <parm name="SecondaryDisplayMode" value="1" /> 

    <parm name="ActivityResizability" value="1" /> 

  </characteristic> 

 

 

 

Step 2.4: Submit the following XML to MX to perform a device reboot prior docking device in the workstation cradle   

   

<!—Reboot Device--> 

  <characteristic version="10.1" type="PowerMgr"> 

    <parm name="ResetAction" value="4" /> 

  </characteristic> 

</wap-provisioningdoc> 

 

Note: if other steps are implemented on the application, a device reboot should be specified as the last step to happen.  

 

Once device is rebooted, when docked in the workstation cradle and connected to HDMI monitor, the screen of the mobile device will show the home screen and allow user to launch and run applications on the mobile device screen, at the same time, the external monitor will show the homes screen of Zebra Workstation Connect as presented on the image below. 

 

 

Page Break
 

Zebra Workstation Connect Standard/Default Features: 

This section describes the standard/default features of Zebra Workstation Connect, these interactions can be performed by the user on the external monitor and connected to peripherals including keyboard, mouse, and headsets. In addition, user can interact with these features while using a touch monitor.  

When the mobile device is docked in the workstation cradle, the following screen will appear on external monitor. 

User will be able to see a Taskbar at the bottom of the screen with the “All Apps” button at the left side. 

 

 

 

All apps button: When the user clicks on “All Apps” button, the user will be able to access all applications available on the device as shown on the following image. 

Once user clicks on any app icon, this will launch it on the desktop and the app icon will be shown on the Taskbar as a running app. User requires to click on the “All apps” button to dismiss the all-apps panel if currently displayed. 

 

 

 

 

Running apps on Desktop and on Mobile Device: All running apps opening on the external monitor or on the mobile device screen will be displayed on the Taskbar.  

User can switch between opened applications by a click on the Taskbar icons. When an icon is clicked (single click mouse action or single tap if a touch monitor is used), the corresponding app will be presented on the foreground, a subsequent click action will restore or minimize app if not currently minimized. 

Running apps on Desktop and on Mobile Device: All desktop and mobile running apps will be shown on the Taskbar separated by a vertical line. Desktop apps are shown left side of the line and mobile apps are shown on the right side of the line with a mobile blue badge on the app icon as show on the following image. 

 

 

 

 

 

Running apps on Desktop and on Mobile Device: A right click mouse action or tap and hold (if a touch monitor is used) on the Taskbar icons will invoke a contextual menu for the corresponding app icon. Using the contextual menu functions, user can close the app represented by app icon, move an app from the mobile device screen to the desktop or vice versa without losing the state of such app.  

 

 

 

Navigation buttons on Taskbar: “Back” and “Home” navigation buttons are available on the left side of the Taskbar. “Home” button will allow user to bring the desktop home screen to the foreground and “Back” button will allow user to go back to previous running app. When using Chrome, the “Back” button will also bring previous webpage accessed by user. 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

Opening apps: When an app is opened, this will be presented on an independent resizable window. The top icons on the right side of the window will allow the user to see the application on full screen or close the application. 

By selecting any side or bottom edges of the app window, user will be able to resize. 

If an application is viewed on Chrome the three dots on the top right side of the browser window will open a menu which will present the option “Desktop Site”, this option will present the webpage or web-based app with a Desktop UI. 

 

 

 

 

Home Screen Menu: By right clicking on the Desktop Home Screen (or by tap and hold when using a touch monitor), User will be presented with a contextual menu that will allow to: 

Add an app shortcut to the Home Screen for quick access 

Sort shortcuts (by alphabetical order or by added date) 

Set/Modify/Restore wallpaper on home screen. 

 

 

 

Adding shortcuts: To add an app Shortcut, after user selects the option from the Home Screen menu, user will navigate to all apps in the device, once clicked on a specific app it will create the shortcut on the Home Screen as presented on the following images.  

 

 

 

 

 

 

 

 

 

By default, the following app shortcuts are presented on the Desktop Home Screen: 

Google Chrome 

Device Settings 

Google Playstore 

Device Files 

 

 

 

 

 

 

 

Home Screen Wallpaper: to change the Home Screen Wallpaper, after User selects the option from the Home Screen menu, User will navigate to the image gallery or any image folder available in the device to select the Wallpaper for the Desktop Home Screen, this will not have any impact for mobile device Home Screen. User can also reset the wallpaper to default (fixed blue colored Zebra provided wallpaper) to return to out of box condition.  

 

 

 

Zebra Workstation Connect supports a default behavior for all running applications when docking a device in the workstation cradle: An application which was already running on mobile will stay on the mobile device and will be presented with a corresponding Taskbar icon as showed on the following image. In the example on the image on the right all apps presented on the Taskbar were running on device before docking. 

 

Default behavior of applications can be overridden via configuration by administrator which is described under Admin configurable features in this guide. 

 

 

Zebra Workstation Connect supports default behavior for all running applications when undocking a device from the workstation cradle: An application which was already running on desktop will move to the mobile device and hide/move to the background. In the example on the image on the right “Chrome” and “Youtube” will move to the device running on the background when device is undocked. 

 

Default behavior of applications can be overridden via configuration by administrator. 

 

Notification icon: Presented on the far-right corner of the Taskbar, the Notification Panel will be invoked when user clicks on this icon and Notification Panel will be dismissed when user clicks on the icon again. A red notification badge will be displayed if there are any unread notifications for any app. 

 

 

 

 

 

 

Notification Panel: When invoked by the user, this panel will display all unread (active) notifications for both mobile and desktop applications. Also, it allows to read (by clicking on the notification) and dismiss specific notifications (by clicking on the dismiss button) for specific apps. 

 

 

 

 

 

 

 

 

 

Status icons: The are displayed on the right section of the Taskbar, by default icons presented to the user are: 

Battery 

VPN 

Connectivity 

Bluetooth (only in connected condition) 

 

 

 

 

 

The Status Icons on the Taskbar will show additional information on mouse hovering the icons, as described below: 

Battery icon: Charged percentage. 

VPN icon: Connected state. 

Connectivity icons (Wifi, Cellular, Ethernet): Identifier and signal strength of all connected network interfaces. Ethernet will show connected state only. 

Bluetooth icon: Connected state and number of connected devices. 

 

 

 

Volume icon: Presented on the left side of the status area, when clicked on the icon, the volume control panel will be presented to the user with the following options: 

Control sliders for adjusting current volume of all available audio streams 

Present current selected audio output path for media stream 

Present all available alternate audio output paths for media stream 

Select a new audio output path for media steam to replace current 

 “See more” option will access “Sound and Vibration” in Settings 

 “Done” option will dismiss the volume control 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

Zebra Workstation Connect System Admin Configurations 

System and application configurations on the mobile computer will be applicable to Zebra Workstation Connect, some of these configurations include: 

Disable USB storage (to prevent the usage of USB Flash drives connected to workstation cradle) 

Restricting end user to access to “Settings” on the mobile device 

Restricting end user to launch applications 

Enable/Disable applications on the mobile device 

Install/Uninstall applications on the mobile device 

Launch applications on the mobile device screen 

Enable Mirror Mode 

Enable Desktop Mode 

 

Configurations above will be applicable on both the mobile device screen and on the secondary screen (external monitor). These configurations can be implemented on the device via StageNow following the instructions below. 

 

Steps to create a StageNow profile/Barcodes 

Download StageNow: https://www.zebra.com/us/en/support-downloads/software/utilities/stagenow.html 

Login to StageNow with admin credentials 

From Home page, click on “Create new profile” option 

Now, select appropriate MX version from wizards pop up window 

Select “Xpert Mode” from the wizard list and click continue 

Enter Profile name and start 

From settings list, choose the appropriate setting and click to add 

Complete the profile and create a barcode as required 

Scan the barcode using StageNow Client on the device to stage the device 

 

 

Disable USB Storage 

The mobile computer supports functionality to block USB external storage (Eg USB Flash drive) through StageNow. Admin User can choose to restrict external storage from USB, and this will not be allowed to be connected to the device. This action will block USB storage while not interfering with other type of USB peripherals including keyboard, mouse, headset, etc.  

This option is presented on the following images, for additional information, refer to “USB Storage Enable/Disable” on the following link https://techdocs.zebra.com/mx/usbmgr/  

 

   

 

 

Restricting end user to access to “Settings” on the mobile device 

The mobile computer supports functionality to restrict access to settings (via a menu, the taskbar or an app) to end user through Stage Now. Admin User can choose to restrict complete Settings Application or a reduced version of it. These changes would reflect on Settings Application when user opens directly on device or from Zebra Workstation Connect on external monitor as well.  

 

This option is presented on the following images, for additional information, refer to the following link https://techdocs.zebra.com/mx/appmgr/  

 

Some examples of the restriction of Settings are presented below: 

Restrict user access to settings by hiding “Settings Icon” on notification panel (as showed on the images below) 

 

 

 

 

 

Restrict user access to settings by disabling “Quick Settings” on notification panel (as showed on the images below) 

 

 

 

 

 

 

Restricting end user to launch applications 

The mobile computer supports functionality to create a StageNow barcode using “AccessMgr” settings operation mode as single user with “Allow List” (whitelisting). In Add packages, add package name to the allow list, so that added app’s only can be installed on the device, other apps installation get restricted  

 

“Allow List” (whitelisting) applies only to user applications; it has no effect on System applications, which come preinstalled on the device. To control aspects of System applications, see AppMgr on the following link https://techdocs.zebra.com/mx/appmgr/.  

 

“Allow List” (whitelisting) can be used to control whether a device user is allowed to install a user application but cannot control whether an application can be installed programmatically by using AppMgr. It also can be used to control whether a user application can be launched (by any means) once it is installed. AccessMgr also provides the option to control whether the device user can access a full or reduced version of the Android Settings panel. 

These changes would reflect directly on the mobile device or from Zebra Workstation Connect on external monitor as well.  

 

For additional information, refer to the following link https://techdocs.zebra.com/stagenow/5-0/csp/access/  

 

 

Enable/Disable applications on the mobile device 

The mobile computer supports functionality to create a StageNow barcode using “AppMgr” settings with available options to enable/disable applications on the mobile device.  From Application action options with app package name generate and scan the barcode using StageNow client on the device to see that specific app disabled. 

These changes would reflect directly on the mobile device or from Zebra Workstation Connect on external monitor as well.  

 

Example: Disable Calculator 

 

With AppMgr use package name of any particular app to disable it, in this case for Calculator use “com.google.android.calculator” with Disable option, or scan below barcode: 

 

 

 

Similarly, Enable Calculator App using Enable application option with package name in the setting, scan below barcode to enable Calculator app on the device. 

 

 

 

The same way, settings app (com.android.settings) can also be disabled from the app list if end user should not have privileges or need access to settings on the device. For additional information, refer to the following link https://techdocs.zebra.com/mx/appmgr/  

 

Install/Uninstall applications on the mobile device 

The mobile computer supports functionality to create a StageNow barcode using “AppMgr” settings with available options to install application from Application action options with APK path and name, generate and scan the barcode using StageNow client on the device to see that App gets installed. 

 

Note: 

In the scenario above, APK should be copied or should be present on the mobile device 

Make use of FileMgr settings to bring APK on to the device by connecting to network and then make use of AppMgr to install the APK 

For additional information on FileMgr  refer to the following link https://techdocs.zebra.com/stagenow/5-0/csp/file/  

 

In addition, the mobile computer supports the functionality to create a StageNow barcode using “AppMgr” settings with available options to uninstall application from Application action options with app package name, generate and scan the barcode using StageNow client on the device to see that App gets uninstalled.  

These changes would reflect directly on the mobile device or from Zebra Workstation Connect on external monitor as well. For additional information on installing and uninstalling applications on the mobile device, refer to the following link https://techdocs.zebra.com/mx/appmgr/ 

 

 

 

Launch applications on the mobile device screen 

The mobile computer supports functionality to create a StageNow barcode using “AppMgr” settings with available options to Launch an application from Application action options with application name, generate and scan the barcode using StageNow client on the device to see that App gets launched. 

For additional information on installing and uninstalling applications on the mobile device, refer to the following link https://techdocs.zebra.com/mx/appmgr/ 

 

Note: App will launch on mobile terminal side. Not on monitor side. 

 

Enable Mirror Mode  

The mobile computer supports functionality to create a StageNow barcode using “DisplayMgr” to enable mirror mode by generating and scanning a barcode using StageNow client on the device. To perform this follow the steps below:  

Create a StageNow Profile/barcode using 

DisplayMgr settings with “Secondary Display Mode” with “Mirror Device Screen” option 

Add PowerMgr settings with “OS Action” set to “Reboot” 

Use StageNow client/App from device app list to scan the StageNow barcode, or Scan the barcode shown below (Note – Device reboots to set the mirror mode automatically with resizable Windows turned on and Activity Resizability set to “All activities resizable”) 

 

 

 

 

 

 

 

 

Zebra Workstation Connect Customization Admin Configurations 

Zebra Workstation Connect allows to customize several of its features/functionalities in order to control and tailor the environment presented to the end user, some of these configurations include: 

Set-up external monitor orientation 

Set-up external monitor resolution 

Configure status icons presented on the taskbar 

Configure the wallpaper utilized on the Home Screen 

Configure shortcuts to be presented to the user on the desktop Home Screen 

Configure the disposition of applications when device is undocked from workstation cradle 

Configure the disposition of applications when device is docked in workstation cradle 

 

EMM support for remote configuration of ZWC via Android Managed Configurations 

The Zebra Workstation Connect Launcher APK is posted on Google Play Store, and it supports full production deployment, configuration, and activation using standard EMMs. EMMs can configure Zebra Workstation Connect Via Android Managed Configurations. 

Please make sure the current credentials to access the play store [Beta track] are whitelisted for the specific organization id, this id can be located on the section presented on the image below: 

Graphical user interface, text, application

Description automatically generated 

Below are configurations available for Zebra Workstation Connect with the corresponding steps to implement them (screen shots presented are taken with respect to an internal Zebra test app and in real EMM set up, the UI driven by the App Restriction schema would differ) 

 

Screen Orientation 

Zebra Workstation Connect offers a method for Admin to control the orientation on secondary screen (external monitor). Configurable options include:  

Landscape (no rotation) 

Portrait (90 degrees left) 

Landscape Inverted (180 degrees) 

Portrait Inverted (270 degrees) 

 

Screen Resolution 

Zebra Workstation Connect offers a method for Admin to control the resolution on secondary screen (external monitor).  

Notes: 

The supported resolutions may be limited by the capabilities of the attached External Monitor 

In Mirror Mode, the supported resolutions may be limited to the Resolutions supported by the Mobile Device Screen, since both must be set to match. 
 

Common notes for Resolution and Orientation: 

It is recommended to Administrators NOT to use Administrator configuration of Orientation and Resolution of External Monitor when using Mirror Mode to avoid inconsistent/unexpected behavior.  

It is recommended to Administrators NOT to switch back to Mirror Mode from Desktop Mode.  

 

Configure Status Icons on Taskbar 

Zebra Workstation Connect supports configuration by the Admin of which icons are shown on the Status Area of the Taskbar. By default, the following Status icons are displayed on the taskbar. Battery, Bluetooth, Cellular, Ethernet, VPN, Wi-Fi  

 

Admin can select whether to show/hide each status icon on the Taskbar as presented on the image below:  

 

 

Configure Home Screen Wallpaper 

Set Desktop Wallpaper: The Admin can change the Wallpaper to use to any supported image file stored on the device, including any downloaded to the device by the Admin. Enter the device path and file name of the image file to set as desktop wallpaper (Note: The recommended maximum Wallpaper resolution is 4000x2500) 

Reset Wallpaper to default: The Admin can restore the Wallpaper to use to the default without having to download the default image file to the device.  Wallpaper file path need to be left blank to use the default wallpaper (restore to default) 

Allow/disallow User control: Zebra Workstation Connect supports configuration by the Admin of whether the Device User is allowed to set the Wallpaper to use. 

 

 

 

Configure Home Screen Shortcuts 

Zebra Workstation Connect allows for Admin to configure the shortcuts presented to the user on the Home Screen, the following configuration options are available: 

Add/change shortcuts or delete all /specific shortcuts:  Specify app shortcuts by entering valid package name and activity name for each shortcut (both are mandatory). Leave blank for no icons (e.g., to have no shortcuts on the desktop launcher) 

Sort shortcuts either alphabetically or by date added 

 

 

 

Configure Automatic App Disposition 

Zebra Workstation Connect allows the configuration by the Administrator of criteria that will be used to determine automatic handling of Apps when the device is docked into/undocked from a supported Cradle and/or Dock. As presented on the images below. 

Adding Criteria for Auto App Disposition: 

 
 

Step1: Specify the package name of the app  

 

 

Step 2: Specify the “Docking Criteria” for the app by giving the Action and the Window state. 

 

Action: Select action of the application, available options are 

Stop 

Launch 

Move 

(Note: application would launch/move to device as a foreground app) 

Window state: Select how application would look like when launched or moved. (Only applies to the Launch and Move actions) 

 

(If Docking criteria is not specified by Admin, the Default docking behavior for all apps would remain as keeping apps on mobile device screen and presenting corresponding icons on Taskbar) 

 

 

Step 3: Specify the “Undocking Criteria” for the app by giving only the Action. Here window state is not required to specify because for any app defined here the window state would be “Maximize” by default (If Undocking criteria is not specified by Admin, the Default undocking behavior for all apps would remain as “Minimize”)  

 

 

 

Zebra Workstation Connect Managed config support notes:  

When a new managed config is applied to the device, its settings will get affected only in the next docking event  

For Home Screen App Shortcuts, device operator can over-write admin configured settings, those device operator changes will remain over next docking event  

Managed config settings will persist across Zebra Workstation Connect uninstall and reinstall  

To clear the managed configs, perform Enterprise-Reset or Factory-Reset  

 

 

 

 

 

 

 

 

 

Other Features Supported: 

Device supports intent (Intent.ACTION_DOCK_EVENT) to be used by developers to detect the docking/undocking, allowing to differentiate between a charging cradle and a workstation cradle.  

Device supports audio using a headset or headphone connected to the following:  

The Workstation Cradle using a USB Headset/Headphone connected to any of the USB-A ports  

An External Monitor with USB/Audio jack Audio Out capability and a Headset/Headphone connected to the monitor  

NOTE : If headset/headphone is connected to both cradle and external monitor with audio capability then precedence will be given to the headset/headphone connected to the cradle. 

Device supports touch inputs from Touch Monitor when connected to a workstation cradle to navigate the Mirror Mode or Desktop Mode UI. Ensure that USB cable for touch functionality is connected between External Monitor and Workstation Cradle USB-Type A ports 

 

 

 

 

 

Page Break
 

Zebra Workstation Connect Fixes and Known Limitations 

Issues fixed since previous A10 beta 

[FIXED ON A11 BETA] The first time when application is moved from mobile device screen to secondary screen, app is restored to full screen [ appears to be full screen]. Instead of hitting "restore" button, user can drag the window and manually change the size of the window. If same app is moved to mobile device screen from secondary screen again then previously chosen window size will persist  

[FIXED ON A11 BETA] User may perceive Audio delay [ ~3-4 sec] when using USB Plantronics headsets, audio will automatically resume  

[FIXED ON A11 BETA] If user is presented with a crash message when switching the audio outs from volume control multiple times, clicking “Cancel” will resume the functionality  

[FIXED ON A11 BETA] If user clicks on “Android Setup” notification from Notification Panel a “crash” message will be presented to the user, dock-undock device of workstation cradle or pressing home/back navigation buttons from Taskbar will dismiss the message  

 

Observations/Known limitations on A11 beta 

System: 

If secure start-up is enabled while setting the screen lock, External monitor cannot show lock screen. User must use the mobile device screen to key in the passcode. Screen rotation is changed to landscape in Desktop mode in this scenario  

It is recommended to perform device reboot with device undocked from workstation cradle. If a device reboot is performed with device docked in workstation cradle, user is required to undock/dock device after bootup to ensure Desktop Mode performs as expected  

If device cannot detect HDMI Monitor after wake-up from idle over-night on workstation cradle, undock-dock mobile device from the cradle will restore the functionality on external monitor  

If the mobile computer is rebooted while docked on the workstation cradle, the following pop-up must be accepted on the mobile device screen 

 

 

 

Zebra Workstation Connect (ZWC): 

Home Screen Wallpaper: 

The recommended maximum wallpaper resolution is 4000x2500 to set as wallpaper for Zebra Workstation Connect Home Screen 

 

 

Taskbar: 

“Unknown ssid” might be shown for mouse over of Wi-Fi Icon on the Taskbar, mobile device screen will show the correct Wi-Fi profile 

 

 

Running Applications:  

Standard full screen mode mobile applications on the device will run in full screen mode by default on Desktop Mode – Eg camera, photos 

External monitor does not display payment screen after performing Enterprise Reset/Factory Reset. User can use the mobile device screen to accept the action and move to next steps 

When an app is launched from Zebra Workstation Connect desktop, the bottom part of that app window will be covered by the Taskbar, user can resize application window to adjust app on desktop home screen  

Zebra Workstation Connect desktop background becomes black when user maximizes the Zoom, Teams or WorryFree Wi-Fi applications, background auto recovers 

SIP keyboard does not appear for multiple Microsoft applications including MS Excel, MS Power Point 

If the mobile device shows a black screen when undocked from workstation cradle showing the navigation bar at the bottom, clicking on home or back buttons or redocking device in cradle will restore to home screen  

If any application [ E.g. Rxlogger ] has “toggle head” implementation , this will not show on the secondary screen (external monitor), this feature can be used on the mobile device screen 

Resize Arrows on the application window when selecting the edge of it will be shown outside of the application bounds, in this scenario, the user will still be able to resize the application window 

 

Audio: 

If a Headset/Headphone is NOT connected to the USB ports of the workstation cradle and the external monitor does not support audio out, audio from application on mobile device does not get routed to device’s speaker automatically 

The following pop-up must be accepted from mobile device screen once after an Enterprise Reset or Factory reset when changing volume while using any of the following types of headsets: USB, 3.5 mm or Bluetooth 

 

 

 

When running specific applications on secondary screen (e.g., Zoom, MS Teams) and while device is docked in the workstation cradle, changing volume via Vol +/- button on the device will not change audio volume  

Multiple BT headsets are not supported at this time for Audio routing 

If Bluetooth pairing is started from secondary screen (external monitor) pop-up will not be presented on secondary screen, user can initiate the Bluetooth pairing for a second time 

Best Practices for 3rd party app developers  

Build the app so it is multi-window ready as defined in the link and then set the following manifest flag  

 

android:resizeableActivity=true   in the app’s manifest 

 

Refer below link for more details on Multi-Window support apps:            https://developer.android.com/guide/topics/ui/multi-window 

 

For applications to be launched on secondary display via app running on the mobile computer, refer to 

Multi-Window Support  |  Android Developers 

https://developer.android.com/about/versions/oreo/android-8.0#mds 

 

For the apps to be preserving the states when moved between the displays, refer below link: 

https://developer.android.com/guide/topics/resources/runtime-changes 

 

App pinning & Split screen features are not recommended for the device to be used along with desktop mode 

 

Disable Secure start-up feature when desktop mode is enabled 

 

 

 

 

 

 

 

 

 

 

 

 

 

 
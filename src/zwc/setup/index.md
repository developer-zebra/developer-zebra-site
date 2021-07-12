---
title: ZWC Setup
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

## Overview

### Requirements

Zebra device running Android 11 (or later)
MX 10.5 (?) or later
ZWC app 
BSP Wave 2
install ZWC (launcher) app




Displaylink Presenter driver: 
https://play.google.com/store/apps/details?id=com.displaylink.presenter&hl=en_US


CRD-TC5X-1SWS-01: TC5X Workstation Docking Cradle Kit with Std Cup, HDMI, Ethernet and multiple USB Ports. Kit includes Cradle (CRD-TC5X-1SWS1-01), power supply (i.e. PWR- BGA12V50W0WW) and DC cable (i.e. CBL-DC-388A1-01). Country specific AC line cord sold separately.

Default Mirror Mode: 

After installing the RC1 Android OS (11-11-03.00-RG-U00-PRD-HEL-04), the device will use “Mirror Mode” as default when the device is docked in a workstation cradle and connected to a HDMI monitor; if “Mirror Mode” is the required view mode for this set-up, no further actions are required. To evaluate “Desktop Mode”, follow the steps on the section below.  

OemConfig support isn’t so much “for ZWC” as for the system environment in which ZWC runs.  In order for ZWC to run, it must be deployed to the device.  ZWC has its own managed configurations that can be used to configure its behavior, but that behavior will only occur when the device docks and the secondary display is created for which ZWC is the secondary launcher.  Before that can ever happen, OemConfig must be used to change the device from mirror mode to desktop mode.  Further, there may be other system level configurations that OemConfig might be used to set, such as USB external storage, keyboard layouts, etc.  OemConfig doesn’t configure ZWC, but it CAN be used to configure things that effect the system environment and hence will have an impact on ZWC when it runs.  Since getting a new version of OemConfig that has these features into the Play Store is problematic for Beta, and since those things can be done via StageNow (which configuring ZWC cannot), we have decided to focus on getting ZWC into the Play Store and accessible to EMMs and defer dealing with OemConfig until later.



At the heart of the ZWC solution is the Zebra Workstation Connect app, which runs automatically whenever a device containing the app is placed in the ZWC dock. The app implements a special Android launcher that handles all communications through the dock, presents the preferred desktop on the external monitor, and stores the display mode, app shortcuts and other user preferences.   

Upon first installation, the device is forced into landscape mode and its content is mirrored on the external monitor by default. 

Install ZWC and perform REQUIRED REBOOT 

-----

How to enable Desktop Mode: 

Enable developer options by clicking on Settings -> About phone ->  

Build number 5 times 

Enable the three options showed on the image on the right, required for Desktop Mode on the menu:  

Settings -> System -> Advanced -> Developer options ->  


 

Perform a device reboot prior docking device in the workstation cradle 

Once device is rebooted, when docked in the workstation cradle and connected to HDMI monitor, the screen of the mobile device will show the home screen and allow user to launch and run applications on the mobile device, at the same time, the external monitor will show the homes screen of Desktop Mode as presented on the images below. 


### Intent

Other Features Supported: 

Device supports intent (Intent.ACTION_DOCK_EVENT) to be used by developers to detect the docking/undocking, allowing to differentiate between a charging cradle and a workstation cradle. 

### Audio

Device supports audio using a headset or headphone connected to the following: 

The Workstation Cradle using a USB Headset/Headphone connected to any of the USB-A ports  

An External Monitor with USB/Audio jack Audio Out capability and a Headset/Headphone connected to the monitor 

NOTE : If headset/headphone is connected to both cradle and external monitor with audio capability then precedence will be given to the headset/headphone connected to the cradle. 

Device supports functionality to restrict access to settings (via a menu, the taskbar or an app) to end user through Stage Now. Admin User can choose to restrict complete Settings Application or a reduced version of it. These changes would reflect on Settings Application when user opens directly on device or from Desktop Mode on external monitor as well. Refer to the “Steps to Create a StageNow Profile/Barcodes” section on this document for more details. 

 

 

Device supports functionality to block USB external storage (Eg USB Flash drive) through Stage Now. Admin User can choose to restrict external storage from USB and these restrictions would be applicable if external storage devices are connected via Workstation dock as well. Refer “USB Storage Enable/Disable” from https://techdocs.zebra.com/mx/usbmgr/ and the “Steps to Create a StageNow Profile/Barcodes” section on this document for more details. 

 

 

Device supports functionality to configure which applications end user can install and launch. Any restricted applications by will not be accessible from Desktop Mode when device is docked in a workstation cradle connected to an externa monitor. Refer to the “Steps to Create a StageNow Profile/Barcodes” section on this document and https://techdocs.zebra.com/mx/appmgr/ for more details. 

Device supports touch inputs from Touch Monitor when connected to a workstation cradle to navigate the Mirror Mode or Desktop Mode UI. Ensure that USB cable for touch functionality is connected between External Monitor and Workstation Cradle USB-Type A ports.  

Device supports functionality to enable/disable and configure the settings related to Desktop Mode as an alternative to do this manually on device. Refer to the “Steps to Create a StageNow Profile/Barcodes” section on this document for more details. 

 

Observations/Known limitations 

System: 

Standard full screen mode mobile applications on the device will run in full screen mode by default on Desktop Mode – Eg camera, photos. 

If a Headset/Headphone is NOT connected to the USB ports of the workstation cradle and the external monitor does not support audio out, audio from application on mobile device does not get routed to device’s speaker automatically. 

External monitor does not display payment screen after performing Enterprise Reset/Factory Reset. User can still use terminal screen to accept the action and move to next steps. 

If secure start-up is enabled while setting the screen lock, External monitor cannot show lock screen. User must use the terminal screen to key in the passcode. Screen rotation is changed to landscape in Desktop mode in this scenario.  

It is recommended to perform device reboot with device undocked from workstation cradle. If a device reboot is performed with device docked in workstation cradle, user is required to undock/dock device after bootup to ensure Desktop Mode performs as expected.  

Multiple BT headsets are not supported at this time for Audio routing. 

First time when application is moved from Terminal to secondary screen , app is restored to full screen [ appears to be full screen] . Instead of hitting "restore" button, user can drag the window and manually change the size of the window. Now if same app is moved to Terminal to secondary screen again then previously chosen window size will be retained .  

 

Zebra Workstation Connect (ZWC): 

When an app is launched from ZWC, the bottom part of that app window will be covered by the ZWC’s taskbar. 

The following pop-up must be accepted from Terminal side once per Enterprise Reset / Factory reset when changing volume while Audio is routed of one of these headset : USB /3.5 mm audio jack / BT. 

Sometimes “unknown ssid” is shown for mouse over of Wifi Icon. Terminal screen show the correct wifi profile. 

Clicking on Android setup notifications from ZWC reports a crash. undock - dock or redock or pressing home/recent/back buttons recovers the unit. 

Desktop background becomes black when tried to maximize the zoom/teams/WFW apps - auto recovers. 

User may perceive Audio delay [3-4 sec] and automatically resumes - only with Wired USB Plantronics headsets. 

Sometimes ZWC Crash is seen when switching the audio outs from volume control. Click on Cancel it resumes the functionality. 

After enrolling into Airwatch, wifi tray icon is not seen even though wifi is enabled on terminal. Sending an admin configuration to show wifi icon would fix the issue. 

SIP keyboard does not appear for multiple Microsoft applications like MS excel, MS power point. 

Sometimes terminal shows blank screen when undocked from cradle with only navigation bar. Click on home and redocking would resolve the issue. 

If any application [ Eg Rxlogger ] has “toggle head” implementation , currently it does not show on secondary screen. Feature can be still used from Terminal side. 

While docked on cradle , changing volume via Vol +/- on terminal does have any impact if certain applications are running on secondary screen . So far issue seen with Skype , TEAMs 

If BT pairing is started from secondary screen - Pop up on secondary does not work - user has to initiate the BT pairing second time. 

Sometimes device cannot detect HDMI Monitor after wake up from idle over-night on workstation. Undock-dock resolves the issue.  

The following pop-up must be accepted from Terminal side if device is rebooted while docked. 

 

Wallpaper 

Currently the recommended maximum wallpaper resolution is 1024x600 and the image has to be <3MB to set as wallpaper for secondary screen. This issue will be fixed in next release.  

Admin configuration of desktop wallpaper is currently not available.  

-----

### StageNow Steps

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

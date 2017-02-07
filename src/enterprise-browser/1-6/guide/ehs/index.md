---
title: Locking Down EB with EHS
productversion: '1.6'
product: Enterprise Browser
layout: guide.html
---

# WORK IN PROGESS


##Overview 

FROM EHS ABOUT PAGE:

Enterprise Home Screen is a free Android app from Zebra Technologies that provides a simple way for administrators to control access to apps and settings on a Zebra device without the need to write custom code. Using a simple touch interface, EHS easily limits usage to one or more specified applications, prevents changes to device settings and locks down the file system. It can be configured in seconds, and settings can be deployed via MDM. EHS settings are stored in a simple XML file that's easy to read and edit by hand, if necessary. 

EHS works by inserting itself in place of the stock Android app launcher and home screen. When first run, it presents a screen like the one below, offering a choice of which home app to open and whether to make the selection permanent. EHS also can be installed as the default launcher, bypassing the selector dialog. 

<b>Note</b>: Many of the capabilities of EHS can be accomplished manually on the device, programmatically through [EMDK](/emdk-for-android/4-0/guide/about) or remotely using [StageNow](/stagenow/2-2/about/) or a third-party mobile device management (MDM) system (if supported by that MDM system). EHS simply puts the capabilities into a single tool.

-----

### FROM ENGINEERING:

HOW TO USE EB IN LOCKDOWN MODE IN ZEBRA ANROID DEVICES

If you want your work force to be locked down within Enterprise Browser and not having access of other applications and device settings, you can achieve it via installing and configuring Enterprise Browser and Enterprise Home screen together in the device. Enterprise Home screen is a free utility which provides Device lockdown functionality, and we will be using that capability along with Enterprise Browser.

After User is locked down

1.They will not be able to access all applications installed in the Zebra device. Their application access will be allowed/restricted via application list provided from EHS configuration. 

2.They will not be able to go out of the EB via pressing back, Home or any other Android button.

In this document we will try to provide a guidance on how to achieve device lock down mode in Enterprise Browser along with Enterprise Home Screen and how to mass deploy them in the customer environment. 

Prereuisites may not  be required

Prerequisites:

EHS apk and its Enterprisehomescreen.xml, EB apk and its config file(if required).
If the start page is to be kept locally for EB then those files should also be ready with you.
Enterprisehomescreen.xml should be edited for EB to be included in EHS kiosk or user mode. You can achieve the same by following the below steps.
    
There are two different use cases for customer how they can achieve device lock down functionality.

1.Use Case1:- User will not be able to go out of Enterprise Browser and will not be able to use any other application

2.Use Case2:-User wants to switch between Enterprise Browser and some other applications but still should not be able to access other restricted applications and device capabilities.

Please find the detailed steps to achieve each of the use cases below.

Editing Enterprisehomescreen.xml 

### CASE1(KIOSK MODE)

Only EB to be accessible and in Full Screen mode and blocking access to all other apps.

Take the default Enterprisehomescreen.xml, you will get it from the installed directory.

Under applications tag remove all the applications present as you don’t want to give access to any other apps.

Remove Calculator under kiosk tag and associate EB details under kiosk tag, now only EB application will be there in kiosk mode.

Enable kiosk mode by setting the kiosk_mode_enabled tag to 1.

If required enable USB debugging for pushing xml in case of emergencies (this is optional).

You can make any other required changes in the xml as per your requirement.

After following the above steps the xml is now ready to be pushed through MDM for achieving our purpose of EB in full screen mode.

### CASE2(USER MODE) 

EB and some other apps should also be available to user.

Take the default Enterprisehomescreen.xml.

Under applications tag Keep only the applications which you want to give access for the user. EB details should be added here along with other apps which should be accessible.

If required enable USB debugging for pushing xml in case of emergencies (this is optional).

You can make any other required changes in xml as per your requirement.

After following the above steps the xml is now ready to be pushed through MDM for achieving our purpose of EB in Lockdown mode.


### Mass Deployment 

How to mass deploy the lockdown configuration

Create a package containing EB apk, EHS apk, Enterprisehomescreen.xml and any other files as per your requirement.

The Enterprisehomescreen.xml(edited as per the need has to be pushed to this location /enterprise/usr

Now make necessary changes in the package configuration to make EHS as the default Launcher and to launch EHS on device startup.

Restart the device through MDM (this is necessary because EHS will pick the new xml pushed only after restarting). 

After the device starts EHS will be launched on startup and depending on the Enterprisehomescreen.xml pushed, you will be able to see the apps in EHS.

The Note section is implicit and I feel not need to mention it explicitly.

NOTE:
Setting of EHS as the default launcher through MDM is necessary and if this cannot be done through MDM than the process of lockdown of EB cannot be automated.



-----

Related guides: 

* [DataWedge User Guide](../../../../datawedge)
* [Enterprise Browser APIs](../../api)
* [API Compatibility Matrix](../compatibility)
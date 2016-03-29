---
title: Device Admin Profile Feature Reference
layout: guide.html
product: EMDK For Android
productversion: '2.3'
---

## Overview

The Device Admin feature allows your application to manage configuration settings on the device.

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](../../../api/core/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](../usingwizard) for more information.

## Main Functionality
* Set Screen-Lock timeout interval
* Allow/Disallow Application Installs from Unknown sources
* Turn on/off Device Administrator

> NOTE: The actual policy effective on the device is the one set by the most restrictive result requested by all active device admin apps.



## Screen-Lock Timeout
This profile feature will allow your application set the amount of time a device can be idle before the Screen is locked.

## App Installs from Unknown sources
This profile feature will allow your application to control installation of applications from "Unknown Sources".  

**Install methods considered Unknown**

* Install from ADB
* Download and install from locations other than Google play
* Receive and install from email
* Install via APIs
* Install via File Browser, for packages that are obtained in various ways, e.g. from SD card, from USB (UMS, ADB, or others) or any other wired data connection, etc.



## Device Administrator
An Android application that uses Android Device Admin API's must also be added to an Device Admin list on a device. This profile feature will allow you to add or remove an application from the Device Admin list. You must provide the package name of the application to be added as a Device Admin. You can also specify a specific class name of the application.

> NOTE: The state of being a device admin or not for an application does not restrict an application from being installed or launched. 

## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=DevAdmin&os=All&embed=true"></iframe> 











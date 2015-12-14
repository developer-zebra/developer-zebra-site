---
title:  DevAdmin
---

## About DevAdmin

### Overview

The Device Admin setting type allows your application to manage configuration settings on the device.

### Main Functionality

* Set Screen-Lock Timeout Interval
  * Immediately after Display Timeout
  * 5 Seconds after Display Timeout
  * 15 Seconds after Display Timeout
  * 30 Seconds after Display Timeout
  * 1 Minute after Display Timeout
  * 2 Minutes after Display Timeout
  * 5 Minutes after Display Timeout
  * 10 Minutes after Display Timeout
  * 30 Minutes after Display Timeout
* Allow/Disallow Application Installs from Unknown sources
* Turn on/off Device Administrator

##Parameter Notes

### Screen-Lock Timeout
This option sets the amount of time a device can be idle before the screen locks.

### Application Installs from Unknown Sources
This option allows control of installation of applications from unknown sources. Installation methods considered unknown are:

* Install from ADB
* Download and install from locations other than Google Play
* Receive and install from email
* Install via APIs
* Install via File Browser for packages obtained in various ways, e.g., from an SD card, via USB (UMS, ADB, etc.) or any other wired data connection.

### Device Administrator
An Android application that uses Android Device Admin APIs must be added to a Device Admin list on a device. This option allows adding or removing an application from the Device Admin list. Provide the package name of the application to add as a Device Admin. You can also specify a class name for the application.


## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=DevAdmin&os=All&embed=true"></iframe> 


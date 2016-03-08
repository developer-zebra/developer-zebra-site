---
title: EHS Advanced Features
layout: guide.html
---

## Overview

This guide covers advanced EHS features such as Kiosk Mode and Secure Mode. It assumes a working knowledge of Enterprise Home Screen and use of its [Advanced Settings](../settings) through direct manipulation of the `enterprisehomescreen.xml` config file. For those not familiar with these procedures, please refer to the [About](../about) and [Setup](../setup) pages and the [Advanced Settings Guide](../settings) before continuing. 

## Kiosk Mode
Kiosk Mode is designed for devices intended to run a single application, often with a touch-based UI. Examples include retail price checkers and other information look-ups, patient check-in devices and so on. Kiosk Mode also can be useful when dedicating a device to a single user and/or task, such as a retail clerk's handheld barcode scanner. Kiosk Mode places the app in in full-screen mode and disables BACK and HOME keys to prevent users from exiting the app. This is the main difference between Kiosk Mode and the EHS [Auto-Launch](../settings#autolaunch) feature. 

##### Kiosk Mode tags:
<b>&lt;kiosk&gt;</b> - Specifies the app that will run when Kiosk mode is enabled

<b>&lt;kiosk_mode_enabled&gt;</b> - Toggles the feature on and off
<br>

##### Disable Kiosk Mode
Once Kiosk Mode is enabled it can be disabled without writing custom program code in only one of two ways:

* <b>If USB Debugging was not disabled for User Mode</b>, disable Kiosk Mode by pushing to the device a config file with &lt;kiosk_mode_enabled&gt; tag set to '0'  

* <b>If USB Debugging was disabled for User Mode</b>, perform a factory reset

##### Control Kiosk Mode Programatically
Kiosk Mode can be controlled from within an Android application using Android Intents. The following JavaScript code shows how to enable and disable Kiosk Mode programatically in this way:  

	:::javascript
	//Disable Kiosk Mode:
	Intent intent = new Intent("com.symbol.enterprisehomescreen.actions.MODIFY_KIOSK_MODE");
	Intent.putExtra("enable",false);

	//Enable Kiosk Mode:
	sendBroadcast(intent); Change Intent.putExtra("enable",true);


> <b>Security Note</b>: When using Kiosk Mode, be sure to disable "key remapping" and other possible methods of launching applications, which would thereby defeat Kiosk Mode safeguards. 

------

#### Kiosk Mode Enabled
Causes the app specified in the &lt;kiosk&gt; section to be launched in full screen mode after EHS starts up and disables BACK and HOME keys to prevent users from exiting the app. Disabled by default. See also: [Auto-Launch](#autolaunch). 

> Once enabled, Kiosk Mode can be disabled by pushing a new config file with its tag set to '0' if USB Debugging is enabled. Otherwise a factory reset is required. 

<b>Possible values</b>

* 1
* <b>0 (default)</b>

#### Example

    <kiosk_mode_enabled>0</kiosk_mode_enabled>
    
------

### Kiosk

Specifies the app to run when the device is in [Kiosk Mode](../guide/features), an optional mode under which a single app fills the screen and the BACK and HOME keys are disabled to prevent exiting. Kiosk Mode is activated using the &lt;kiosk_mode_enabled&gt; tag. 

<b>Possible values</b>

* Label: string 
* Package: app package name 
* Activity: package name of app feature to invoke when the app starts

##### Example

    <kiosk>
            <application label="Calculator" package="com.android.calculator2" activity=""/>
    </kiosk>


------

## Secure Mode


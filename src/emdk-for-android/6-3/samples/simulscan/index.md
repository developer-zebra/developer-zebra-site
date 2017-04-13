---
publish: true
title: Document Capture
description: "This sample application shows how the Simulscan APIs can be used to capture multiple types of data from forms and labels."
downloads:
  - title: Android Studio Project
    url: 'https://github.com/Zebra/samples-emdkforandroid-6_0/archive/SimulScanSample1.zip'
sources:
  - title: Android Studio Project
    url: 'https://github.com/Zebra/samples-emdkforandroid-6_0/tree/SimulScanSample1'
features:
  - Profile Manager
  - Simulscan
  - Java APIs
devices:
  - TC55 KK,
  - TC70 KK or L,
  - TC75 KK or L,
  - TC8000 L
image: 1.png
screenshots:
  - 1.png
  - 2.png
  - 3.png
  - 4.png
layout: sample.html
product: EMDK For Android
productversion: '6.3'
---

## Overview
This sample application shows how Simulscan APIs can be used to capture multiple types of data from forms, boxes and other targets.

## Prerequisites

What's required: 

* A Zebra device that supports SimulScan ([support details](../../../../simulscan))
* A SimulScan license for the device
* A Simulscan template on the device
* A printed copy of the form used to create the template

Follow the template generation and device licensing sections of the [SimulScan API tutorial](/emdk-for-android/6-3/tutorial/tutSimulScanAPI)

>Note: Although this sample may work with previous versions of EMDK, Zebra recommends [updating the EMDK runtime](../../guide/setupDevice/) on the device before loading this sample.

## Requirements
Android API 19 must be installed via the SDK Manager before attempting to load this sample.


## Loading the Sample Application
This guide explains how to set up the EMDK samples in an IDE.

* [Android Studio](/emdk-for-android/6-3/guide/emdksamples_androidstudio)

## Using This Sample

1. Place a copy of the template on the sdcard of a SimulScan-licensed device.

		:::
		adb push myTemplate.xml /sdcard/simulscan/templates/
	

2. Launch The SimulScan sample application
	
	The Simulscan sample app will find the templates placed on the device's sdcard and populate the "Set Template" option list.  Select the desired template from that list.
	![img](simulscanSample1.png) 


3. Press the "Read" button, and follow the on screen instructions. The sample app will extract the fields defined in the template. If the "Display Results View" option is checked, a list of results will be displayed for review.

	![img](simulscanSample2.png)  ![img](simulscanSample3.png)   


4. Press the "Accept" button. The sample app will then display a screen showing how long simulscan took to capture and decode the template fields. Press the device's "Back" hardware button to return to the main screen.

	![img](simulscanSample4.png) 

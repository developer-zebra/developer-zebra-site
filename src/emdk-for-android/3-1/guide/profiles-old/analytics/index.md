---
title: Analytics Manager Profile Feature Reference
layout: guide.html
product: EMDK For Android
productversion: '2.3'
---

## Overview

The Analytics Manager profile feature allows you to configure what data about a device should be collected, and where the collected data should be stored.

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](../../../api/core/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](../usingwizard) for more information.

## Main Functionality

* Enable/Disable Analytics 
* Set Transport Method
* Configure Data sources
* Configure Data Collection Levels for data sources

##Group Action
Choosing to configure levels for multiple Groups will allow you choose a collection level for each data group. For instance, you can set the CPU Usages data group to "High" 

Choosing to configure details for a single group will allow you choose an interval and which metrics should be collected for a group. For instance, you can set the system information group to collect every 5 minutes, and to include the memory load.

##Transport Method
This profile feature allows your application to select where collected data logs are stored, Either, to a devices local storage or to a cloud based analytics provider.

##Data sources
  * **WWAN Performance**
    * WWAN Signal Quality
    * Outgoing Call Attempts
    * WWAN Radio On Time
    * Incoming Call Duration
    * Successful Incoming Calls
    * Incoming Call Attempts
    * WWAN Error Rate
    * Custom


  * **WLAN Performance**	
    * WLAN Receive Packet Delta
    * WLAN Signal Quality
    * WLAN Transmit Package Delta
    * WLAN Receive Byte Delta
    * WLAN Transmit Byte Delta
    * WLAN Radio On Time
    * Custom


  * **Battery and CPU Status**	
    * Battery Level Delta
    * Battery Level
    * AC Charge Count
    * Display On Time
    * AC Charge Time
    * AC Charge Status
    * Custom

  * **System Information**	
    * Available (free) Storage Memory
    * Available (free) Physical Memory
    * Memory Load (% used) 
    * Total (installed) Storage Memory
    * Total (installed) Physical Memory
    * Custom


  * **GPS Information**
    * Current Altitude (in meters) from Sea Level
    * GPS Device State
    * GPS On Time Delta
    * Current Course Heading (in degrees)
    * Current Location (lat/Long)
    * Position Dilution of Precision
    * Custom

  * **CPU Usage**
    * Process CPU Time Delta
    * Device CPU Time Delta
    * Custom

  
##Data Collection Levels
  * None	
  * Low	
  * Medium	
  * High 


## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=AnalyticsMgr&os=All&embed=true"></iframe> 










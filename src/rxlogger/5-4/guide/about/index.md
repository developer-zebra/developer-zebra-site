---
title: About RxLogger
layout: guide.html
product: RxLogger
productversion: '5.4'
---

## Overview

RxLogger is a software utility included with every Zebra device that provides centralized control of application and system logging, and can easily customize output metrics for targeted diagnostics purposes. At the core of RxLogger is `diagdaemon`, a Zebra-built logging service that collects data and event logs from the Android kernel, logcat and other system components, and stores them in a single location where they can be filtered and displayed. Through an easy-to-use GUI interface, RxLogger also can change the type and frequency of data collection and control how much data is stored on the device.

<!-- -->
-----

## Screens and States

The startup screen of RxLogger contains four simple buttons that change in appearance depending on its state. RxLogger's title bar also reflects the state, and its version number is visible in the lower-right corner.

### Stopped 

Initial state of RxLogger upon launch: 
<img alt="" style="height:350px" src="rxlogger_stopped.png"/>
<br>

### Transitioning
State immediately following a press of the Start or Stop buttons:
<img alt="" style="height:350px" src="rxlogger_transitioning.png"/>
<br>

### Running
RxLogger is collecting data:
<img alt="" style="height:350px" src="rxlogger_running.png"/>
<br>

### Unknown 
RxLogger has lost connection to the `diagdaemon`:
<img alt="" style="height:350px" src="rxlogger_unknown.png"/>
<br>

### Buttons 
* **Start button -** starts the `diagdaemon` service and begins data collection.

* **Stop button -** stops the `diagdaemon` service and halts data collection.

* **About button -** displays version information for `diagdaemon`, RxLogger and data collection modules.

* **Settings button -** displays a panel for configuring RxLogger and `diagdaemon` settings.

<!-- -->
-----

## Related Links
* [RxLogger Settings](../settings) - How to configure data collection module parameters
* [RxLogger Modules](../modules) - Explains data collection module parameters and settings
* [Intent APIs](../apis) - Used to start and stop RxLogger and back up all data  
* [RxLogger Utility](../utility) - View RxLogger logs in realtime


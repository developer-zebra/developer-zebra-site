---
title: About RxLogger
layout: guide.html
product: RxLogger
productversion: '5.4'
---

## Overview

RxLogger is a software tool included with every Zebra device that provides metrics for application and system diagnostics. The tool implements a GUI interface that controls `diag_daemon`, the Linux-based logging service built into Android. Diag_daemon does the real work of collecting data and logs from around the system, storing them in a single location where they are parsed, filtered and displayed by RxLogger. 

Diag_daemon uses a modular system to collect log data from logcat, the kernel and other system components. RxLogger can start and stop diag_daemon, can change the type and frequency of data collection and control how much data is stored. 

-----

## Screens and States

RxLogger main screen has four buttons that do not change but the availability of the buttons is determined by which state RxLogger is in. It has a title bar to show which state it currently is in. A version number is available in the bottom right corner of the screen.

The four buttons on the main screen are Start, Stop, About and Settings.

· The Start button will start diagdaemon and begin to collect data.

· The Stop button will stop diagdaemon and halt data collection.

· The About button will bring up the about screen to RxLogger and diagdaemon information.

· The Settings button will bring up the Settings screen to configure RxLogger and diagdaemon.

RxLogger main screen has 4 states:

The Main flow of states for the RxLogger main screen are:

1. Form Stopped and Start is clicked, Stopped -> Transition -> Running

2. From Running and Stop is clicked, Running -> Transition -> Stopped 

<img alt="" style="height:350px" src="rxlogger_stopped.png"/>
_RxLogger GUI for the diag_daemon service_ 
<br>


-----

## Related Links
* [Initial Setup](../setup)
* [RxLogger Settings](../settings)
* [Collection Modules](../modules)
* [Intent APIs](../apis)


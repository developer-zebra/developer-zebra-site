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

The startup screen of RxLogger contains four simple buttons that change in appearance depending on its state. The app's title bar also displays the state, and its version number appears in the lower-right corner.

<img alt="" style="height:350px" src="rxlogger_stopped.png"/>
_Stopped: the initial state of RxLogger and the diag_daemon service_ 
<br>

<img alt="" style="height:350px" src="rxlogger_transitioning.png"/>
_Transitioning: the state immediately following a press of Start or Stop_ 
<br>

<img alt="" style="height:350px" src="rxlogger_running.png"/>
_Running: the diag_daemon service is collecting data_ 
<br>

<img alt="" style="height:350px" src="rxlogger_unknown.png"/>
_Unknown: RxLogger has lost its connection to the diag_daemon service_ 
<br>


The four buttons on the main screen are Start, Stop, About and Settings.

· The Start button will start diagdaemon and begin to collect data.

· The Stop button will stop diagdaemon and halt data collection.

· The About button will bring up the about screen to RxLogger and diagdaemon information.

· The Settings button will bring up the Settings screen to configure RxLogger and diagdaemon.

RxLogger main screen has 4 states:

The Main flow of states for the RxLogger main screen are:

1. Form Stopped and Start is clicked, Stopped -> Transition -> Running

2. From Running and Stop is clicked, Running -> Transition -> Stopped 



-----

## Related Links
* [Initial Setup](../setup)
* [RxLogger Settings](../settings)
* [Collection Modules](../modules)
* [Intent APIs](../apis)


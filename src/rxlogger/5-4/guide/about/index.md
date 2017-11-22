---
title: About RxLogger
layout: guide.html
product: RxLogger
productversion: '5.4'
---

## Overview

RxLogger is a software tool that provides metrics for application and system diagnostics. Included with every Zebra device, RxLogger implements a GUI interface that controls `diag_daemon`, the Linux-based logging service built into Android. RxLogger starts and stops diag_daemon, which does the work of collecting data and logs from around the system, storing them in a single location where they can be filtered and displayed by RxLogger as needed. 

Diag_daemon uses a modular system to collect log data from the Android kernel, logcat and other system components. RxLogger is able to start and stop diag_daemon, change the type and frequency of data collection and control how much data is stored. 

-----

### Screens and States

The startup screen of RxLogger contains four simple buttons that change in appearance depending on its state. The app's title bar also displays the state, and its version number appears in the lower-right corner.

**Stopped -** the initial state of RxLogger and the diag_daemon service: 
<img alt="" style="height:350px" src="rxlogger_stopped.png"/>
<br>

**Transitioning -** the state immediately following a press of Start or Stop:
<img alt="" style="height:350px" src="rxlogger_transitioning.png"/>
<br>

**Running -** the diag_daemon service is collecting data:
<img alt="" style="height:350px" src="rxlogger_running.png"/>
<br>

**Unknown -** RxLogger has lost its connection to the diag_daemon service:
<img alt="" style="height:350px" src="rxlogger_unknown.png"/>
<br>

* **Start button -** starts the diag_daemon service and begins data collection

* **Stop button -** stops the diag_daemon service and halts data collection

* **About button -** displays version information for diag_daemon and RxLogger and its modules

* **Settings button -** displays a panel for configuring RxLogger and diag_daemon settings

-----

## Related Links
* [Initial Setup](../setup)
* [RxLogger Settings](../settings)
* [Collection Modules](../modules)
* [Intent APIs](../apis)


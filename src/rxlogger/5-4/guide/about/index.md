---
title: About RxLogger
layout: guide.html
product: RxLogger
productversion: '5.4'
---

## Overview

RxLogger is a software tool that provides metrics for application and system diagnostics. Included with every Zebra device, RxLogger implements a GUI interface that controls `diagdaemon`, a Zebra-customized version of the open-source `_diag_daemon` logging service built into Android. RxLogger starts and stops `diagdaemon`, which collects data and logs from the Android kernel, logcat and other system components, and stores them in a single location where they can be filtered and displayed by RxLogger. RxLogger also can change the type and frequency of data collection and control how much data is stored on the device. 

-----

### Screens and States

The startup screen of RxLogger contains four simple buttons that change in appearance depending on state. The app's title bar also displays the state. The software version number is visible in the lower-right corner.


**Stopped**. Initial state of RxLogger and `diagdaemon` service: 
<img alt="" style="height:350px" src="rxlogger_stopped.png"/>
<br>

**Transitioning**. State immediately following press of Start or Stop:
<img alt="" style="height:350px" src="rxlogger_transitioning.png"/>
<br>

**Running**. The `diagdaemon` service is collecting data:
<img alt="" style="height:350px" src="rxlogger_running.png"/>
<br>

**Unknown**. RxLogger has lost connection to the `diagdaemon`:
<img alt="" style="height:350px" src="rxlogger_unknown.png"/>
<br>

* **Start button -** starts the `diagdaemon` service and begins data collection.

* **Stop button -** stops the `diagdaemon` service and halts data collection.

* **About button -** displays version information for `diagdaemon` and RxLogger and its modules.

* **Settings button -** displays a panel for configuring RxLogger and `diagdaemon` settings.

Go to the [Settings section](../settings) to configure RxLogger. 

-----

## Related Links
* [Initial Setup](../setup)
* [RxLogger Settings](../settings)
* [Collection Modules](../modules)
* [Intent APIs](../apis)


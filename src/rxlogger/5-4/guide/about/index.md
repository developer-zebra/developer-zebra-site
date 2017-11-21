---
title: About RxLogger
layout: guide.html
product: RxLogger
productversion: '5.4'
---

## Overview

RxLogger is a diagnostic tool that provides application and system metrics. RxLogger itself is a GUI interface into counterpart linux daemon named diagdaemon. Diagdaemon does all of the real work in collecting the data and logs from around the system and putting it into one place. Diagdaemon itself uses a moduler system to load features such as logcat and kernel log collection. RxLogger can be used to start and stop diagdaemon and also modify its configurations on what to collect, how much to keep and how frequently it should try to collect data from the system. 

-----

## How It Works

The RxLogger solution includes two components:

* The RxLogger app for Android (`"cartscan.apk"`)

* The RxLogger PC Wedge service for Windows (`"RxLoggerPCwedge.exe"`)

<img alt="" style="height:350px" src="cartscan_01.png"/>
_The RxLogger app for Android_
<br>


-----

#### Learn more about:
* [Text correction features](../settings#textcorrection)
* The "Loadable" [Personal Dictionary](../../../../mx/personaldictionarymgr) 
-->
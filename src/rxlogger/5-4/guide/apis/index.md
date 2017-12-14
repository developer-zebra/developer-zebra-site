---
title: RxLogger APIs
layout: guide.html
product: RxLogger
productversion: '5.4'
---

## Overview

A few RxLogger functions are controlled using intents. 

### Enable RxLogger

Enable RxLogger begins data collection for all enabled modules. This is the equivalent of tapping the Start button. 

	:::java
	com.symbol.rxlogger.intent.action.ENABLE

### Disable RxLogger

Disable RxLogger stops data collection for all modules. This is the equivalent of tapping the Stop button. 

	:::java
	com.symbol.rxlogger.intent.action.DISABLE

### BackupNow

This intent triggers a backup for files currently in the RxLogger folder. Zips them into the RxLoger folder as "backup"-timestamp


	:::java
	com.symbol.rxlogger.intent.action.BACKUP_NOW

-----

## Related Links
* [RxLogger Settings](../settings) - How to configure data collection module parameters
* [RxLogger Modules](../modules) - Explains data collection module parameters and settings

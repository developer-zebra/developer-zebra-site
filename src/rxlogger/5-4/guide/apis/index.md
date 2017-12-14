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

??? FULL FUNCTIONAL PROTOTYPE 

	com.symbol.rxlogger.intent.action.ENABLE

### Disable RxLogger

Disable RxLogger stops data collection for all modules. This is the equivalent of tapping the Stop button. 

	com.symbol.rxlogger.intent.action.DISABLE

### BackupNow

This intent triggers a backup for files currently in the RxLogger folder. 

	com.symbol.rxlogger.intent.action.BACKUP_NOW

??? where is this backup saved? 

-----



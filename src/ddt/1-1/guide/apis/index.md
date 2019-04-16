---
title: Diagnostic Tool APIs
layout: guide.html
product: Diagnostic Tool
productversion: '1.1'
---

## Overview

RxLogger functions controlled using intents. 

### Enable RxLogger

Begins data collection for all enabled modules; the equivalent of tapping the Start button. 

		:::java
		com.symbol.rxlogger.intent.action.ENABLE


### Disable RxLogger

Stops data collection for all modules; the equivalent of tapping the Stop button. 

	:::java
	com.symbol.rxlogger.intent.action.DISABLE

### BackupNow

Triggers a backup for files log currently in the RxLogger folder. Files are compressed and named `backup-HHMMSS.zip`. 

-----

## Related Links
* [RxLogger Settings](../settings) - How to configure data collection module parameters
* [RxLogger Modules](../modules) - Explains data collection module parameters and settings

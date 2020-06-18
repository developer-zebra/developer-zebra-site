---
title: RxLogger APIs
layout: guide.html
product: RxLogger
productversion: '5.4'
---

## Overview

RxLogger functions controlled using intents. 

### Enable RxLogger

Begins data collection for all enabled modules; the equivalent of tapping the Start button. 

<pre class="prettify">
	<code>com.symbol.rxlogger.intent.action.ENABLE</code>
</pre>

### Disable RxLogger

Stops data collection for all modules; the equivalent of tapping the Stop button. 

<pre class="prettify">
	<code>com.symbol.rxlogger.intent.action.DISABLE</code>
</pre>

### BackupNow

Triggers a backup for files log currently in the RxLogger folder. Files are compressed and named `backup-HHMMSS.zip`. 


<pre class="prettify">
	<code>com.symbol.rxlogger.intent.action.BACKUP_NOW</code>
</pre>

<!-- -->
-----

## Related Links
* [RxLogger Settings](../settings) - How to configure data collection module parameters
* [RxLogger Modules](../modules) - Explains data collection module parameters and settings
* [RxLogger Utility](../utility) - View RxLogger logs in realtime

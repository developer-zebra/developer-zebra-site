---
title: SimulScanReader.StatusListerner
---

An interface for notifying client applications to notify scan events.
 
 

**Example Usage:**
	
	:::java	
	public class MainActivity extends Activity implements StatusListerner
	.. .. ..
	


##Public Methods

### onStatus

**public void onStatus(SimulScanStatusData simulScanStatusData)**

This is the callback method upon scan status event occurs.

**Parameters:**

simulScanStatusData

**Returns:**

void



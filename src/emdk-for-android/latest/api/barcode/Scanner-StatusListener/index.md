---
title: Scanner.StatusListener
type: api
---


An interface for notifying client applications to notify scan events.
 
 

**Example Usage:**
	
	:::java
	
	public class MainActivity extends Activity implements StatusListener
	.. .. ..
	
	


##Public Methods

### onStatus

**public void onStatus(StatusData statusData)**

This is the callback method upon scan status event occurs.

**Parameters:**

`statusData` - StatusData object.

**Returns:**

void


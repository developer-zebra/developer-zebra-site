---
title: SimulScanReader.DataListerner
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


An interface for notifying client applications when the scan data is
 available.
 
 

**Example Usage:**
	
	:::java	
	public class MainActivity extends Activity implements DataListerner
	.. .. ..
	


##Public Methods

### onData

**public void onData(SimulScanData simulScanData)**

This is the callback method upon data availability.

**Parameters:**

`simulScanData`

**Returns:**

void






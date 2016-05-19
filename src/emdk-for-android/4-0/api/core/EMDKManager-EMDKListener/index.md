---
title: EMDKManager.EMDKListener
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.0'
---


This is the interface for the callback to notify the opening and closing status of the EMDK.
 On a successful opening, the EMDKManager object will be returned.
 An interface for notifying clients when they the EMDKManager is ready to use or closed abruptly. 
 
 

**Example Usage:**
	
	:::java
	
	public class MainActivity extends Activity implements EMDKListener
	.. .. ..
	
	


##Public Methods

### onOpened

**public void onOpened(EMDKManager emdkManager)**

Called to notify the client when the EMDKManager object has been opened and its ready to use.
 
 

**Example Usage:**
	
	:::java
	
	Override
	public void onOpened(EMDKManager emdkManager)
	{
	
	}
	


**Parameters:**

`emdkManager`

**Returns:**

void

### onClosed

**public void onClosed()**

Called to notify the client that this EMDKManager object has been abruptly closed.
 The clients must call to call [ EMDKManager.release()](../EMDKManager#release) to free all the resources used by EMDKManager even after onClosed().
 Notifies user upon a abrupt closing of EMDKManager.
 
 

**Example Usage:**
	
	:::java
	
	Override
	public void onClosed()
	{
	
	}
	


**Returns:**

void













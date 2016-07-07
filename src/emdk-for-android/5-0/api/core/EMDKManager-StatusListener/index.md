---
title: EMDKManager.StatusListener
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


This is the interface for the callback to notify the status of the feature object request.
 On a successful, the feature object will be returned and this must be type casted to the 
 corresponding feature manager class based on the type..
 An interface for notifying clients when they the feature manager is ready to use or not
 and interface will be used with [ EMDKManager.getInstanceAsync()](../EMDKManager#getinstanceasync)
 
 

**Example Usage:**
	
	:::java	
	public class MainActivity extends Activity implements StatusListener
	.. .. ..
	


##Public Methods

### onStatus

**public void onStatus(EMDKManager.StatusData statusData, EMDKBase featureManager)**

Called to notify the client when the feature manager object is available and its state to use.
 
 

**Example Usage:**
	
	:::java	
	Override
	public void onStatus(EMDKBase featureManager)
	{
	
	}


**Parameters:**

`statusData`

`featureManager`

**Returns:**

void






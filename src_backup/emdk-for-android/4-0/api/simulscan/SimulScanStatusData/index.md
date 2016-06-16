---
title: SimulScanStatusData
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.0'
---


SimulScanStatusData class provides access to reader status.
 
 

**Example Usage:**
	
	:::java
	
	SimulScanStatusData.getState();
	


##Constructors

###SimulScanStatusData



##Public Methods

### getState

**public SimulScanStatus getState()**

Returns the the current status

**Returns:**

com.symbol.emdk.simulscan.SimulScanStatusData.SimulScanStatus - SimulScanStatus

### getFriendlyName

**public String getFriendlyName()**

Returns the friendly name of the Reader from which the SimulScanStatusData 
 object was from

**Returns:**

java.lang.String - String













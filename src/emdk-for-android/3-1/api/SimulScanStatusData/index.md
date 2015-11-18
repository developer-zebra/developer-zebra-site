---
title: SimulScanStatusData
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

com.symbol.emdk.simulscan.SimulScanStatusData.SimulScanStatus

### getFriendlyName

**public String getFriendlyName()**

Returns the friendly name of the Reader from which the SimulScanStatusData 
 object was from

**Returns:**

java.lang.String

##Public Enums

###SimulScanStatusData.SimulScanStatus



**Values:**

* **DISABLED** -Disabled called successfully on reader

* **ENABLED** -Enabled reader successfully

* **SCANNING** -Successfully started scanning

* **IDLE** -Finished scanning

* **ERROR** -Error occurred

* **UNKNOWN** -Unknown status



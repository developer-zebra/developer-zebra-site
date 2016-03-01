---
title: EMDKManager.StatusData
type: api
---


StatusData class provides access to EMDK Manager feature ready to use status.
 
 

**Example Usage:**
	
	:::java
	
	statusData.getState();
	


##Public Methods

### getResult

**public STATUS_CODE getResult()**

Returns the associated error code.

**Returns:**

com.symbol.emdk.EMDKResults.STATUS_CODE

### getFeatureType

**public FEATURE_TYPE getFeatureType()**

Returns the feature type for which the status data is returned.

**Returns:**

com.symbol.emdk.EMDKManager.FEATURE_TYPE


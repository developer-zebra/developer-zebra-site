---
title: ScanDataCollection
type: api
---


The ScanDataCollection object gives scanning result and the collection of
 ScanData.
 
 

##Public Methods

### getFriendlyName

**public String getFriendlyName()**

Returns the friendly name of scanner for which the data is returned.

**Returns:**

java.lang.String - Returns scanner index to the supported devices list.

### getResult

**public ScannerResults getResult()**

This method used to obtain the scanned result.
 
 

**Example Usage:**
	
	:::java
	
	ScannerResults results = scanDataCollection.getResult();
	


**Returns:**

com.symbol.emdk.barcode.ScannerResults - ScannerResults object

### getScanData

**public ArrayList getScanData()**

This method is used to obtain the scanned data list.
 
 

**Example Usage:**
	
	:::java
	
	ArrayList<ScanData> scanDataList = scanDataCollection.getScanData()
	


**Returns:**

java.util.ArrayList - Returns the collection of scan data.


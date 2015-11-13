---
title: ScanDataCollection.ScanData
---
#ScanDataCollection.ScanData

The ScanData object gives information on the barcode data scanned.
 
 

**Example Usage:**
	
	:::java	
	ArrayList<ScanData> scanDataList = scanDataCollection.getScanData()
	for(ScanData scanData :scanDataList) {
	String data = scanData.getData();
	LABEL_TYPE labelType = scanData.getLabelType();
	String timeStamp = scanData.getTimeStamp();
	}


##Public Methods

### getData

**public String getData()**

Returns the scanned barcode data.

**Returns:**

java.lang.String

### getLabelType

**public LabelType getLabelType()**

Returns label type of the scanned data.

**Returns:**

com.symbol.emdk.barcode.ScanDataCollection.LabelType

### getTimeStamp

**public String getTimeStamp()**

Returns the time at which the barcode was scanned.
 The time format is "yyyy-MM-dd HH:mm:ss.nnnnnnnnn"

**Returns:**

java.lang.String


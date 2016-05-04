---
title: ScanDataCollection.ScanData
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.1'
---


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

### getRawData

**public byte getRawData()**

Returns the raw decoded data as byte array.
 The application can use this raw data directly or 
 can convert the byte array to a string using the named charset as shown below
 String encodeString =  new String(rawData, charset);

**Returns:**

byte - Returns raw barcode data byte array.

### getData

**public String getData()**

Returns the scanned barcode data string encoded in UTF-8 format.

**Returns:**

java.lang.String - Returns barcode data string. Empty string will be returned if any error occurs.

### getLabelType

**public LabelType getLabelType()**

Returns label type of the scanned data.

**Returns:**

com.symbol.emdk.barcode.ScanDataCollection.LabelType - Returns LabelType

### getTimeStamp

**public String getTimeStamp()**

Returns the time at which the barcode was scanned.
 The time format is "yyyy-MM-dd HH:mm:ss.nnnnnnnnn"

**Returns:**

java.lang.String - Returns time stamp string












